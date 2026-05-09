/**
 * TeknoAraç 10-Phase SEO & Content Audit
 */
const fs = require('fs');
const path = require('path');

const tools = require('../lib/tools.ts');
const allTools = tools.allTools || tools.tools || [];
const cats = tools.categories || {};

// =====================
// PHASE 1: CONTENT INVENTORY
// =====================
console.log('='.repeat(60));
console.log('PHASE 1: CONTENT INVENTORY');
console.log('='.repeat(60));

const byCat = {};
allTools.forEach(t => {
  byCat[t.category] = (byCat[t.category] || 0) + 1;
});

console.log('Total tools:', allTools.length);
console.log('Categories:', Object.keys(byCat).length);
console.log('Category breakdown:');
Object.entries(byCat).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => {
  console.log(`  ${k} (${cats[k]?.title || '??'}): ${v}`);
});

// =====================
// PHASE 2: THIN CONTENT DETECTION
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 2: THIN CONTENT DETECTION');
console.log('='.repeat(60));

// Read ToolClient to know which tools get custom implementations
const tc = fs.readFileSync(path.join(__dirname, '..', 'app', 'tools', '[slug]', 'ToolClient.tsx'), 'utf8');

// Extract explicit override slugs
const overrideSection = tc.match(/const OVERRIDES[\s\S]*?\};/);
const overrideSlugs = overrideSection ? 
  [...new Set([...overrideSection[0].matchAll(/"([a-z][-a-z0-9]+)"/g)].map(m => m[1]))] : [];

// Extract regex patterns
const patterns = [...tc.matchAll(/slug\.match\(\/([^/]+)\//g)].map(m => m[1]);

// Find category-based routing
const hasCategoryRouting = tc.includes('tool?.category');

const thinTools = [];
const functionalTools = [];

allTools.forEach(t => {
  const slug = t.slug;
  
  // Is it an explicit override?
  if (overrideSlugs.includes(slug)) {
    functionalTools.push({ slug, reason: 'explicit_override' });
    return;
  }
  
  // Does it match any regex pattern?
  for (const pattern of patterns) {
    try {
      if (new RegExp(pattern).test(slug)) {
        functionalTools.push({ slug, reason: `regex:${pattern}` });
        return;
      }
    } catch {}
  }
  
  // Category-based routing
  const routedCats = ['money','health','automotive','cooking','parenting','pets',
    'units','converters','text','writing','random','games','dev','coding','ai',
    'productivity','social','media','career'];
  if (routedCats.includes(t.category)) {
    functionalTools.push({ slug, reason: `category:${t.category}` });
    return;
  }
  
  // Falls through to generic LiveTool
  thinTools.push({ slug, title: t.titleTr, category: t.category, desc: t.descriptionTr?.slice(0,80) });
});

console.log('FUNCTIONAL tools (have some real component):', functionalTools.length);
console.log('THIN tools (generic LiveTool fallback):', thinTools.length);
console.log('\nThin tool list:');
thinTools.forEach(t => console.log(`  ${t.slug} [${t.category}] - ${t.title}`));

// =====================
// PHASE 3: DUPLICATE DETECTION
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 3: DUPLICATE & NEAR-IDENTICAL CONTENT');
console.log('='.repeat(60));

// Title duplicates
const titleMap = {};
const dupTitles = [];
allTools.forEach(t => {
  const key = t.titleTr?.toLowerCase().trim() || '';
  if (!titleMap[key]) titleMap[key] = [];
  titleMap[key].push(t.slug);
});
Object.entries(titleMap).forEach(([title, slugs]) => {
  if (slugs.length > 1 && title.length > 0) {
    dupTitles.push({ title, slugs });
    console.log(`  DUPLICATE TITLE: "${title}" → ${slugs.join(', ')}`);
  }
});
console.log(`Title duplicates: ${dupTitles.length} groups`);

// Description duplicates
const descMap = {};
const dupDescs = [];
allTools.forEach(t => {
  const key = t.descriptionTr?.toLowerCase().trim().slice(0, 100) || '';
  if (!descMap[key]) descMap[key] = [];
  descMap[key].push(t.slug);
});
Object.entries(descMap).forEach(([desc, slugs]) => {
  if (slugs.length > 1 && desc.length > 20) {
    dupDescs.push({ desc: desc.slice(0,100), slugs });
    if (dupDescs.length <= 10) console.log(`  DUPLICATE DESC: ${slugs.join(', ')}`);
  }
});
console.log(`Description duplicates: ${dupDescs.length} groups`);

// Slug similarity (same prefix, different suffix)
const slugPrefix = {};
allTools.forEach(t => {
  const parts = t.slug.split('-');
  for (let i = 1; i <= 3; i++) {
    const prefix = parts.slice(0, i).join('-');
    if (!slugPrefix[prefix]) slugPrefix[prefix] = [];
    slugPrefix[prefix].push(t.slug);
  }
});
const similarSlugs = Object.entries(slugPrefix)
  .filter(([k,v]) => v.length >= 5 && k.length > 3)
  .sort((a,b) => b[1].length - a[1].length);
console.log('\nSimilar slug groups (>=5 tools):');
similarSlugs.slice(0, 15).forEach(([prefix, slugs]) => {
  console.log(`  "${prefix}-*" (${slugs.length} tools): ${slugs.slice(0,5).join(', ')}...`);
});

// =====================
// PHASE 4: MISSING META / BROKEN PAGES
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 4: MISSING METADATA & BROKEN PAGES');
console.log('='.repeat(60));

const pageFiles = fs.readdirSync(path.join(__dirname, '..', 'app'), { recursive: true })
  .filter(f => f.endsWith('page.tsx') || f.endsWith('page.ts'));

const missingMeta = [];
pageFiles.forEach(f => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'app', f), 'utf8');
  const hasTitle = /title\s*[:=]/.test(content);
  const hasDesc = /description\s*[:=]/.test(content);
  const hasOG = /openGraph/i.test(content);
  const hasKeywords = /keywords/i.test(content);
  const hasCanonical = /canonical/i.test(content);
  
  if (!hasTitle || !hasDesc || !hasOG) {
    missingMeta.push({ file: f, hasTitle, hasDesc, hasOG, hasKeywords });
  }
});

console.log('Pages missing metadata:', missingMeta.length);
missingMeta.forEach(m => {
  const missing = [];
  if (!m.hasTitle) missing.push('title');
  if (!m.hasDesc) missing.push('desc');
  if (!m.hasOG) missing.push('OG');
  console.log(`  ${m.file}: missing [${missing.join(', ')}]`);
});

// Tools without titleTr or descriptionTr
const missingTr = allTools.filter(t => !t.titleTr || t.titleTr.length < 3 || !t.descriptionTr || t.descriptionTr.length < 10);
console.log(`\nTools missing Turkish title/desc: ${missingTr.length}`);
missingTr.slice(0, 10).forEach(t => console.log(`  ${t.slug}: title="${t.titleTr?.slice(0,30)}" desc="${t.descriptionTr?.slice(0,30)}"`));

// =====================
// PHASE 5: INTERNAL LINKING
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 5: INTERNAL LINKING & ORPHAN PAGES');
console.log('='.repeat(60));

// Check which tools are NOT linked from any listing page
const toolsPageContent = fs.readFileSync(path.join(__dirname, '..', 'app', 'tools', 'page.tsx'), 'utf8');
const toolsPage2 = fs.readFileSync(path.join(__dirname, '..', 'app', 'araclar', 'page.tsx'), 'utf8');
const homepageContent = fs.readFileSync(path.join(__dirname, '..', 'app', 'page.tsx'), 'utf8');

// Count internal links on major pages
const linkCounts = {
  homepage: (homepageContent.match(/href=/g) || []).length,
  toolsPage: (toolsPageContent.match(/href=/g) || []).length,
  aracPage: (toolsPage2.match(/href=/g) || []).length,
};
console.log('Internal link counts:');
Object.entries(linkCounts).forEach(([k,v]) => console.log(`  ${k}: ${v} links`));

// Check for external links (should be zero per no-tracking policy)
const externalLinks = [];
[tc, homepageContent, toolsPageContent, toolsPage2].forEach((content, i) => {
  const matches = content.match(/https?:\/\/(?!teknoarac\.com|localhost)[^\s"')]+/g) || [];
  matches.forEach(m => externalLinks.push(m));
});
console.log(`\nExternal links found: ${externalLinks.length}`);
externalLinks.forEach(l => console.log(`  ${l}`));

// =====================
// PHASE 6: PERFORMANCE INDICATORS
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 6: PERFORMANCE INDICATORS');
console.log('='.repeat(60));

// Check page sizes
const toolClientSize = fs.statSync(path.join(__dirname, '..', 'app', 'tools', '[slug]', 'ToolClient.tsx')).size;
const toolsLibSize = fs.statSync(path.join(__dirname, '..', 'lib', 'tools.ts')).size;
const guideRegistrySize = fs.statSync(path.join(__dirname, '..', 'content', 'guides', 'registry.tsx')).size;
const layoutSize = fs.statSync(path.join(__dirname, '..', 'app', 'layout.tsx')).size;

console.log('Large files (>50KB JS bundle impact):');
console.log(`  ToolClient.tsx: ${(toolClientSize/1024).toFixed(1)}KB`);
console.log(`  lib/tools.ts: ${(toolsLibSize/1024).toFixed(1)}KB`);
console.log(`  guides/registry.tsx: ${(guideRegistrySize/1024).toFixed(1)}KB`);
console.log(`  layout.tsx: ${(layoutSize/1024).toFixed(1)}KB`);

// Count guide files and check sizes
const guideDir = path.join(__dirname, '..', 'content', 'guides');
const guideFiles = fs.readdirSync(guideDir).filter(f => f.endsWith('.tsx') && f !== 'registry.tsx');
const largeGuides = guideFiles.filter(f => {
  const size = fs.statSync(path.join(guideDir, f)).size;
  return size > 10000;
});
console.log(`\nGuide files: ${guideFiles.length} total`);
console.log(`Guides >10KB: ${largeGuides.length}`);

// =====================
// PHASE 7: SCHEMA / STRUCTURED DATA
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 7: STRUCTURED DATA / JSON-LD');
console.log('='.repeat(60));

const ldInLayout = (fs.readFileSync(path.join(__dirname, '..', 'app', 'layout.tsx'), 'utf8').match(/json-?ld|ld\+json|schema\.org|structuredData/i) || []).length;
const ldInPages = pageFiles.filter(f => {
  try {
    const c = fs.readFileSync(path.join(__dirname, '..', 'app', f), 'utf8');
    return /json-?ld|ld\+json|schema\.org|structuredData/i.test(c);
  } catch { return false; }
});

console.log(`JSON-LD in layout.tsx: ${ldInLayout > 0 ? 'YES' : 'NO'}`);
console.log(`Pages with JSON-LD: ${ldInPages.length}/${pageFiles.length}`);
console.log('Pages with schema:', ldInPages.join(', '));

// =====================
// PHASE 8: MOBILE / UX
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 8: MOBILE & UX');
console.log('='.repeat(60));

// Check for responsive patterns
const globalCSS = fs.readFileSync(path.join(__dirname, '..', 'app', 'globals.css'), 'utf8');
const hasViewportMeta = fs.readFileSync(path.join(__dirname, '..', 'app', 'layout.tsx'), 'utf8').includes('viewport');
const hasTailwindResponsive = /md:|lg:|sm:|xl:|2xl:/.test(tc);
const hasTouchTargets = /min-|p-[3-9]|py-[3-9]|px-[3-9]/.test(tc);

console.log('Viewport meta:', hasViewportMeta ? 'YES' : 'MISSING');
console.log('Responsive breakpoints in components:', hasTailwindResponsive ? 'YES' : 'NO');
console.log('Touch-friendly targets (>=12px):', hasTouchTargets ? 'YES' : 'NOT CONSISTENT');

// =====================
// PHASE 9: CONTENT QUALITY (Turkish)
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 9: CONTENT QUALITY & TURKISH LOCALIZATION');
console.log('='.repeat(60));

// Check for English remnants
const englishInTitles = allTools.filter(t => {
  const title = t.titleTr || '';
  return /^[a-zA-Z\s\-\(\)]+$/.test(title) && title.length > 5;
});
console.log(`Tools with English-only titles: ${englishInTitles.length}`);
englishInTitles.slice(0, 15).forEach(t => console.log(`  ${t.slug}: "${t.titleTr}"`));

// Check guide files for English content
const englishGuides = [];
guideFiles.forEach(f => {
  try {
    const c = fs.readFileSync(path.join(guideDir, f), 'utf8');
    const turkishChars = (c.match(/[ğüşıöçĞÜŞİÖÇ]/g) || []).length;
    const totalChars = c.length;
    const trRatio = turkishChars / Math.max(1, totalChars);
    if (trRatio < 0.002 && totalChars > 500) {
      englishGuides.push({ file: f, ratio: trRatio, chars: totalChars });
    }
  } catch {}
});
console.log(`\nGuides with low Turkish character ratio: ${englishGuides.length}`);
englishGuides.forEach(g => console.log(`  ${g.file}: ${(g.ratio*100).toFixed(2)}% TR chars, ${g.chars} total`));

// =====================
// PHASE 10: MISSING PAGES / FEATURES
// =====================
console.log('\n' + '='.repeat(60));
console.log('PHASE 10: MISSING PAGES & SEO FEATURES');
console.log('='.repeat(60));

const requiredPages = [
  'sitemap.xml', 'robots.txt', 'not-found', 'error', 'loading',
  'hakkinda', 'iletisim', 'gizlilik', 'kullanim-sartlari', 'cerezler',
  'kategoriler'
];

const existingRoutes = [];
try {
  const appDir = fs.readdirSync(path.join(__dirname, '..', 'app'));
  const publicDir = fs.readdirSync(path.join(__dirname, '..', 'public'));
  console.log('Public files:', publicDir.filter(f => f !== '.gitkeep').join(', '));
} catch {}

// Check for PWA
const manifestExists = fs.existsSync(path.join(__dirname, '..', 'public', 'manifest.json'));
const swExists = fs.existsSync(path.join(__dirname, '..', 'public', 'sw.js'));
console.log('PWA manifest:', manifestExists ? 'YES' : 'MISSING');
console.log('Service Worker:', swExists ? 'YES' : 'MISSING');

// Check for security headers
const nextConfig = fs.readFileSync(path.join(__dirname, '..', 'next.config.ts'), 'utf8');
const hasSecurityHeaders = /headers/i.test(nextConfig) && /Content-Security|X-Frame|X-Content|Referrer-Policy|Strict-Transport/i.test(nextConfig);
console.log('Security headers:', hasSecurityHeaders ? 'YES' : 'PARTIAL/MISSING');

// Check for redirects
const vercelConfig = fs.existsSync(path.join(__dirname, '..', 'vercel.json')) 
  ? JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'vercel.json'), 'utf8'))
  : {};
console.log('Redirects configured:', (vercelConfig.redirects?.length || 0));

// =====================
// SUMMARY
// =====================
console.log('\n' + '='.repeat(60));
console.log('AUDIT SUMMARY — ISSUE COUNT');
console.log('='.repeat(60));

console.log(`Thin/generic tools: ${thinTools.length}`);
console.log(`Duplicate titles: ${dupTitles.length} groups`);
console.log(`Duplicate descriptions: ${dupDescs.length} groups`);
console.log(`Pages missing metadata: ${missingMeta.length}`);
console.log(`English-only tool titles: ${englishInTitles.length}`);
console.log(`English guides remaining: ${englishGuides.length}`);
console.log(`External links (violation): ${externalLinks.length}`);

// Save detailed reports
const report = {
  phase1_inventory: { totalTools: allTools.length, categories: Object.keys(byCat).length, byCategory: byCat },
  phase2_thin: { count: thinTools.length, tools: thinTools.map(t => ({ slug: t.slug, title: t.title })) },
  phase3_duplicates: { titleDups: dupTitles, descDups: dupDescs.length },
  phase4_missingMeta: missingMeta,
  phase5_orphanLinks: { externalLinks },
  phase6_performance: { toolClientKB: (toolClientSize/1024).toFixed(1), toolsLibKB: (toolsLibSize/1024).toFixed(1), largeGuides: largeGuides.length },
  phase7_schema: { ldInLayout: ldInLayout > 0, pagesWithLD: ldInPages.length },
  phase8_mobile: { hasViewportMeta, hasTailwindResponsive },
  phase9_quality: { englishTitles: englishInTitles.length, englishGuides: englishGuides.length },
  phase10_missing: { manifestExists, swExists, hasSecurityHeaders, redirects: vercelConfig.redirects?.length || 0 },
};

fs.writeFileSync(path.join(__dirname, '..', 'seo-audit-report.json'), JSON.stringify(report, null, 2));
console.log('\nDetailed report saved to: seo-audit-report.json');
