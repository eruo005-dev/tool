/**
 * TeknoAraç 10-Phase SEO Audit v2 — Fresh scan of deployed site + codebase
 * Run: node scripts/seo-audit-v2.js
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const REPORT = { phases: {}, summary: {}, timestamp: new Date().toISOString() };
const SITE = 'https://teknoarac.com';

// Load data
const toolsRaw = fs.readFileSync(path.join(ROOT, 'lib', 'tools.ts'), 'utf8');
const tools = require(path.join(ROOT, 'lib', 'tools.ts'));
const toolList = tools.tools || [];
const cats = tools.categories || {};

// Guide registry
const guideDir = path.join(ROOT, 'content', 'guides');
const guideFiles = fs.readdirSync(guideDir).filter(f => f.endsWith('.tsx') && f !== 'registry.tsx');

// ==========================================
// PHASE 1: INVENTORY & ACCURACY
// ==========================================
const phase1 = { title: 'Inventory & Accuracy', findings: [] };

// 1.1 Total counts
phase1.findings.push({
  severity: 'info',
  item: 'Tool count',
  detail: `${toolList.length} tools, ${Object.keys(cats).length} categories`,
  status: 'ok'
});

// 1.2 Category coverage
const catSlugCount = {};
toolList.forEach(t => {
  catSlugCount[t.category] = (catSlugCount[t.category] || 0) + 1;
});
const emptyCats = Object.keys(cats).filter(c => !catSlugCount[c]);
const tinyCats = Object.entries(catSlugCount).filter(([, n]) => n < 3);

if (emptyCats.length) phase1.findings.push({ severity: 'high', item: 'Empty categories', detail: emptyCats.join(', '), status: 'broken' });
if (tinyCats.length) phase1.findings.push({ severity: 'medium', item: 'Near-empty categories (<3 tools)', detail: tinyCats.map(([c,n]) => `${c}(${n})`).join(', '), status: 'warn' });

// 1.3 Category key consistency — check for Turkish keys in tool category field
const catKeys = Object.keys(cats);
const turkishKeys = catKeys.filter(k => k.length > 0 && /[çğıöşü]/i.test(k));
const toolsWithTurkishCat = toolList.filter(t => turkishKeys.includes(t.category));
if (toolsWithTurkishCat.length) {
  phase1.findings.push({ severity: 'low', item: 'Turkish category keys in tools', detail: `${toolsWithTurkishCat.length} tools`, status: 'warn' });
}

// 1.4 Duplicate slugs
const slugs = toolList.map(t => t.slug);
const dupeSlugs = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupeSlugs.length) phase1.findings.push({ severity: 'critical', item: 'Duplicate tool slugs', detail: [...new Set(dupeSlugs)].join(', '), status: 'broken' });
else phase1.findings.push({ severity: 'info', item: 'Duplicate slugs', detail: 'None', status: 'ok' });

// 1.5 Missing required fields
const badTools = toolList.filter(t => !t.slug || !t.titleTr || !t.descriptionTr || !t.category);
if (badTools.length) {
  phase1.findings.push({ severity: 'critical', item: 'Tools missing required fields', detail: `${badTools.length} tools: ${badTools.map(t=>t.slug||'NO-SLUG').join(', ')}`, status: 'broken' });
}

// 1.6 Long titles (>70 chars — truncated in SERP)
const longTitles = toolList.filter(t => (t.titleTr || '').length > 70);
if (longTitles.length) phase1.findings.push({ severity: 'medium', item: 'Titles exceeding 70 chars (SERP truncation risk)', detail: `${longTitles.length} tools`, status: 'warn' });

// 1.7 Long descriptions (>160 chars — meta desc truncation)
const longDescs = toolList.filter(t => (t.descriptionTr || '').length > 160);
if (longDescs.length) phase1.findings.push({ severity: 'medium', item: 'Descriptions >160 chars (SERP truncation)', detail: `${longDescs.length} tools`, status: 'warn' });

REPORT.phases[1] = phase1;

// ==========================================
// PHASE 2: CONTENT QUALITY
// ==========================================
const phase2 = { title: 'Content Quality', findings: [] };

// 2.1 Very short descriptions (<30 chars)
const shortDescs = toolList.filter(t => (t.descriptionTr || '').length < 30);
if (shortDescs.length) phase2.findings.push({ severity: 'high', item: 'Descriptions under 30 chars (thin)', detail: `${shortDescs.length} tools: ${shortDescs.slice(0,10).map(t=>t.slug).join(', ')}${shortDescs.length>10?'...':''}`, status: 'broken' });

// 2.2 Generic/boilerplate descriptions
const boilerplate = ['ücretsiz', 'hesapla', 'kolay', 'hızlı', 'basit'];
const genericTools = toolList.filter(t => {
  const d = (t.descriptionTr || '').toLowerCase();
  const words = d.split(/\s+/);
  return words.length <= 5 && boilerplate.some(b => d.includes(b));
});
if (genericTools.length > 50) phase2.findings.push({ severity: 'medium', item: 'Boilerplate descriptions', detail: `${genericTools.length} tools with generic patterns`, status: 'warn' });

// 2.3 Title/description mismatch (title contains "Hesaplayıcı" but description doesn't mention calculation)
const mismatchTools = toolList.filter(t => {
  const title = (t.titleTr || '').toLowerCase();
  const desc = (t.descriptionTr || '').toLowerCase();
  return (title.includes('hesaplayıcı') || title.includes('hesaplama')) && !desc.includes('hesapl');
});
if (mismatchTools.length) phase2.findings.push({ severity: 'low', item: 'Title-description mismatch', detail: `${mismatchTools.length} tools where title says calculator but desc doesn't`, status: 'warn' });

// 2.4 Empty or very short guide content
const shortGuides = [];
guideFiles.forEach(f => {
  const content = fs.readFileSync(path.join(guideDir, f), 'utf8');
  const stripped = content.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (stripped.length < 500) shortGuides.push({ file: f, length: stripped.length });
});
if (shortGuides.length) phase2.findings.push({ severity: 'high', item: 'Guides with <500 chars of text content', detail: shortGuides.map(g => `${g.file}(${g.length}c)`).join(', '), status: 'broken' });

// 2.5 English content remaining in guides
const englishGuides = [];
guideFiles.forEach(f => {
  const content = fs.readFileSync(path.join(guideDir, f), 'utf8');
  const stripped = content.replace(/<[^>]+>/g, '')
    .replace(/import[^;]+;/g, '')
    .replace(/export[^;]+;/g, '')
    .replace(/\s+/g, ' ').trim();
  const turkishChars = (stripped.match(/[çğıöşüÇĞİÖŞÜ]/g) || []).length;
  const totalChars = stripped.length;
  const trRatio = turkishChars / Math.max(1, totalChars / 10);
  if (trRatio < 0.3 && totalChars > 100) {
    englishGuides.push({ file: f, trRatio: (trRatio * 100).toFixed(1) + '%' });
  }
});
if (englishGuides.length) phase2.findings.push({ severity: 'high', item: 'Guides with mostly English content', detail: englishGuides.map(g => `${g.file}(TR:${g.trRatio})`).join(', '), status: 'broken' });

REPORT.phases[2] = phase2;

// ==========================================
// PHASE 3: DUPLICATE & CANNIBALIZATION
// ==========================================
const phase3 = { title: 'Duplicate & Cannibalization', findings: [] };

// 3.1 Similar titles (<3 words difference)
const titleWords = toolList.map(t => ({
  slug: t.slug,
  words: (t.titleTr || '').toLowerCase().replace(/[^a-zçğıöşü\s]/g, '').split(/\s+/).sort()
}));
const similarTitles = [];
titleWords.forEach((a, i) => {
  titleWords.forEach((b, j) => {
    if (i >= j) return;
    const common = a.words.filter(w => b.words.includes(w) && w.length > 3);
    if (common.length >= Math.min(a.words.length, b.words.length) * 0.7 && common.length >= 2) {
      similarTitles.push(`${a.slug} ≈ ${b.slug} (${common.join(', ')})`);
    }
  });
});
if (similarTitles.length > 0) {
  phase3.findings.push({ severity: 'high', item: 'Highly similar tool titles (cannibalization risk)', detail: similarTitles.slice(0,15).join(' | '), status: 'broken' });
}

// 3.2 Multiple URLs for same content (Turkish + English route pairs)
// This is by design, but check for canonical tags
phase3.findings.push({ severity: 'info', item: 'Dual-language routes', detail: '/tools + /araclar, /guides + /rehberler, etc. — should canonical to Turkish', status: 'ok' });

// 3.3 Same description used for multiple tools
const descFreq = {};
toolList.forEach(t => { descFreq[t.descriptionTr] = (descFreq[t.descriptionTr] || 0) + 1; });
const dupDescs = Object.entries(descFreq).filter(([, n]) => n >= 3);
if (dupDescs.length) {
  const samples = dupDescs.slice(0,5).map(([d, n]) => `"${d.slice(0,50)}..." (${n}x)`);
  phase3.findings.push({ severity: 'high', item: 'Duplicate descriptions across tools', detail: samples.join(' | '), status: 'broken' });
}

REPORT.phases[3] = phase3;

// ==========================================
// PHASE 4: TECHNICAL SEO
// ==========================================
const phase4 = { title: 'Technical SEO', findings: [] };

// 4.1 Check all app pages for metadata export
const appDir = path.join(ROOT, 'app');
function findPages(dir, base = '') {
  const pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(e => {
    if (e.name.startsWith('[') || e.name.startsWith('_') || e.name === 'api') return;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      const pageFile = path.join(full, 'page.tsx');
      if (fs.existsSync(pageFile)) pages.push({ rel: base + '/' + e.name, file: pageFile });
      pages.push(...findPages(full, base + '/' + e.name));
    }
  });
  return pages;
}
const allPages = findPages(appDir);

const pagesNoMeta = [];
allPages.forEach(p => {
  const content = fs.readFileSync(p.file, 'utf8');
  if (content.includes('export { default }')) return; // re-export
  if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) {
    pagesNoMeta.push(p.rel);
  }
});
if (pagesNoMeta.length) phase4.findings.push({ severity: 'high', item: 'Pages without metadata export', detail: pagesNoMeta.join(', '), status: 'broken' });

// 4.2 robots.txt
const robotsPath = path.join(ROOT, 'app', 'robots.ts');
if (!fs.existsSync(robotsPath)) phase4.findings.push({ severity: 'high', item: 'Missing robots.ts', detail: 'No robots.txt generation', status: 'broken' });

// 4.3 Sitemap coverage
const sitemapPath = path.join(ROOT, 'app', 'sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  const sm = fs.readFileSync(sitemapPath, 'utf8');
  const hasTools = sm.includes('tools.map') || sm.includes('getAllToolSlugs');
  const hasGuides = sm.includes('guide') || sm.includes('getGuideSlugs');
  const hasStatic = sm.includes('kategoriler');
  phase4.findings.push({ severity: 'info', item: 'Sitemap coverage', detail: `Tools:${hasTools?'✅':'❌'} Guides:${hasGuides?'✅':'❌'} Categories:${hasStatic?'✅':'❌'}`, status: hasTools && hasGuides ? 'ok' : 'broken' });
}

// 4.4 404 page
const notFoundPath = path.join(ROOT, 'app', 'not-found.tsx');
phase4.findings.push({ severity: 'info', item: 'Custom 404 page', detail: fs.existsSync(notFoundPath) ? 'exists' : 'MISSING', status: fs.existsSync(notFoundPath) ? 'ok' : 'broken' });

// 4.5 Loading states
const loadingFiles = allPages.filter(p => fs.existsSync(path.join(path.dirname(p.file), 'loading.tsx')));
phase4.findings.push({ severity: 'low', item: 'Loading states', detail: `${loadingFiles.length}/${allPages.length} pages have loading.tsx`, status: loadingFiles.length > 2 ? 'ok' : 'warn' });

// 4.6 Error boundaries
const errorFiles = allPages.filter(p => fs.existsSync(path.join(path.dirname(p.file), 'error.tsx')));
phase4.findings.push({ severity: 'medium', item: 'Error boundaries', detail: `${errorFiles.length}/${allPages.length} routes have error.tsx`, status: errorFiles.length > 0 ? 'ok' : 'warn' });

// 4.7 PWA manifest
const manifestPath = path.join(ROOT, 'public', 'manifest.json');
phase4.findings.push({ severity: 'medium', item: 'PWA manifest', detail: fs.existsSync(manifestPath) ? 'exists' : 'MISSING', status: fs.existsSync(manifestPath) ? 'ok' : 'broken' });

// 4.8 Security headers (next.config or middleware)
let nextConfig = '';
try { nextConfig = fs.readFileSync(path.join(ROOT, 'next.config.js'), 'utf8'); } catch(e) {}
try { nextConfig = fs.readFileSync(path.join(ROOT, 'next.config.mjs'), 'utf8'); } catch(e) {}
try { nextConfig = fs.readFileSync(path.join(ROOT, 'next.config.ts'), 'utf8'); } catch(e) {}
const hasHeaders = nextConfig.includes('headers') || fs.existsSync(path.join(ROOT, 'middleware.ts'));
phase4.findings.push({ severity: 'high', item: 'Security headers (CSP, HSTS, X-Frame, etc.)', detail: hasHeaders ? 'configured' : 'MISSING', status: hasHeaders ? 'ok' : 'broken' });

REPORT.phases[4] = phase4;

// ==========================================
// PHASE 5: INTERNAL LINKING & STRUCTURE
// ==========================================
const phase5 = { title: 'Internal Linking & Structure', findings: [] };

// 5.1 Homepage links
const homepage = fs.readFileSync(path.join(ROOT, 'app', 'page.tsx'), 'utf8');
const hpLinks = (homepage.match(/href=["'`]\/([^"'`]+)["'`]/g) || []);
const hpUniqueLinks = [...new Set(hpLinks.map(l => l.match(/href=["'`]\/([^"'`]+)["'`]/)[1]))];
phase5.findings.push({ severity: 'info', item: 'Homepage internal links', detail: `${hpUniqueLinks.length} unique paths linked`, status: hpUniqueLinks.length > 15 ? 'ok' : 'warn' });

// 5.2 Breadcrumbs
const hasBreadcrumbs = fs.existsSync(path.join(ROOT, 'components', 'Breadcrumb.tsx'));
phase5.findings.push({ severity: 'medium', item: 'Breadcrumbs component', detail: hasBreadcrumbs ? 'exists' : 'MISSING', status: hasBreadcrumbs ? 'ok' : 'broken' });

// 5.3 Cross-linking between tools
const toolClient = fs.readFileSync(path.join(ROOT, 'app', 'tools', '[slug]', 'ToolClient.tsx'), 'utf8');
const hasRelated = toolClient.includes('related') || toolClient.includes('benzer') || toolClient.includes('RelatedTools');
phase5.findings.push({ severity: 'high', item: 'Related tools cross-linking', detail: hasRelated ? 'present' : 'MISSING — no cross-links between tool pages', status: hasRelated ? 'ok' : 'broken' });

// 5.4 Footer links
let footerContent = '';
try { footerContent = fs.readFileSync(path.join(ROOT, 'components', 'Footer.tsx'), 'utf8'); } catch(e) {}
const footerLinks = (footerContent.match(/href=["'`]\/([^"'`]+)["'`]/g) || []).length;
phase5.findings.push({ severity: 'low', item: 'Footer link count', detail: `${footerLinks} links`, status: footerLinks > 8 ? 'ok' : 'warn' });

// 5.5 Orphan pages (pages not linked from anywhere)
const allPagePaths = allPages.map(p => p.rel);
const allLinks = new Set();
[homepage, footerContent].forEach(src => {
  const links = src.match(/href=["'`]\/([^"'`]+)["'`]/g) || [];
  links.forEach(l => {
    const p = l.match(/href=["'`]\/([^"'`]+)["'`]/)[1].split('?')[0].split('#')[0];
    allLinks.add(p);
  });
});
const orphanPages = allPagePaths.filter(p => {
  const parent = p.split('/').slice(0, -1).join('/');
  return ![...allLinks].some(l => p.startsWith('/' + l) || '/' + l === p);
});
if (orphanPages.length > 5) {
  phase5.findings.push({ severity: 'medium', item: 'Potentially orphan pages', detail: `${orphanPages.length} pages, e.g. ${orphanPages.slice(0,5).join(', ')}`, status: 'warn' });
}

REPORT.phases[5] = phase5;

// ==========================================
// PHASE 6: PERFORMANCE & BUNDLE SIZE
// ==========================================
const phase6 = { title: 'Performance & Bundle Size', findings: [] };

// 6.1 Large files
const largeFiles = [];
function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(e => {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('node_modules') && e.name !== '.next') {
      scanDir(full);
    } else if (e.isFile()) {
      const stat = fs.statSync(full);
      if (stat.size > 50000) largeFiles.push({ file: full.replace(ROOT, ''), size: (stat.size / 1024).toFixed(1) + 'KB' });
    }
  });
}
scanDir(path.join(ROOT, 'lib'));
scanDir(path.join(ROOT, 'components'));
scanDir(path.join(ROOT, 'app'));
largeFiles.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
phase6.findings.push({ severity: 'info', item: 'Large source files (>50KB)', detail: largeFiles.map(f => `${f.file}(${f.size})`).join(', '), status: largeFiles.length > 3 ? 'warn' : 'ok' });

// 6.2 Image optimization
const publicDir = path.join(ROOT, 'public');
const images = [];
if (fs.existsSync(publicDir)) {
  fs.readdirSync(publicDir, { recursive: true }).forEach(f => {
    if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(f)) images.push(f);
  });
}
phase6.findings.push({ severity: 'low', item: 'Unoptimized static images', detail: `${images.length} files: ${images.join(', ')}`, status: 'info' });

// 6.3 Font optimization
const layout = fs.readFileSync(path.join(ROOT, 'app', 'layout.tsx'), 'utf8');
const hasNextFont = layout.includes('next/font') || layout.includes('next/font/google');
phase6.findings.push({ severity: 'low', item: 'Font optimization', detail: hasNextFont ? 'Using next/font' : 'No next/font optimization', status: hasNextFont ? 'ok' : 'warn' });

REPORT.phases[6] = phase6;

// ==========================================
// PHASE 7: OPEN GRAPH & SOCIAL
// ==========================================
const phase7 = { title: 'Open Graph & Social', findings: [] };

// 7.1 og:image file
const ogImage = fs.existsSync(path.join(ROOT, 'public', 'og-image.svg')) || 
               fs.existsSync(path.join(ROOT, 'public', 'og-image.png'));
phase7.findings.push({ severity: 'high', item: 'og:image file', detail: ogImage ? 'exists' : 'MISSING — shared cards will have no image', status: ogImage ? 'ok' : 'broken' });

// 7.2 Twitter card
const hasTwitterCard = homepage.includes('twitter:') || layout.includes('twitter:');
phase7.findings.push({ severity: 'medium', item: 'Twitter card tags', detail: hasTwitterCard ? 'present on some pages' : 'NOT FOUND', status: hasTwitterCard ? 'ok' : 'broken' });

// 7.3 Tool pages OG tags
const hasToolOg = toolClient.includes('openGraph') || toolClient.includes('og:');
phase7.findings.push({ severity: 'high', item: 'Tool page Open Graph tags', detail: hasToolOg ? 'shared metadata' : 'MISSING — tool detail pages lack OG', status: hasToolOg ? 'ok' : 'broken' });

REPORT.phases[7] = phase7;

// ==========================================
// PHASE 8: STRUCTURED DATA
// ==========================================
const phase8 = { title: 'Structured Data (JSON-LD)', findings: [] };

const hasWebsiteSchema = layout.includes('WebSite') && layout.includes('application/ld+json');
phase8.findings.push({ severity: 'info', item: 'WebSite schema', detail: hasWebsiteSchema ? 'present' : 'MISSING', status: hasWebsiteSchema ? 'ok' : 'broken' });

const toolPagePath = path.join(ROOT, 'app', 'tools', '[slug]', 'page.tsx');
const toolJSONLD = fs.existsSync(toolPagePath) ? fs.readFileSync(toolPagePath, 'utf8') : '';
const hasSoftwareApp = toolJSONLD.includes('SoftwareApplication') || toolJSONLD.includes('WebApplication');
phase8.findings.push({ severity: 'high', item: 'SoftwareApplication schema on tool pages', detail: hasSoftwareApp ? 'present' : 'MISSING — each tool page should have WebApplication LD', status: hasSoftwareApp ? 'ok' : 'broken' });

const guideJSONLD = fs.existsSync(path.join(ROOT, 'app', 'guides', '[slug]', 'page.tsx'))
  ? fs.readFileSync(path.join(ROOT, 'app', 'guides', '[slug]', 'page.tsx'), 'utf8') : '';
const hasArticle = guideJSONLD.includes('Article') && guideJSONLD.includes('application/ld+json');
phase8.findings.push({ severity: 'high', item: 'Article schema on guide pages', detail: hasArticle ? 'present' : 'MISSING', status: hasArticle ? 'ok' : 'broken' });

const hasBreadcrumbList = (toolJSONLD + guideJSONLD).includes('BreadcrumbList');
phase8.findings.push({ severity: 'medium', item: 'BreadcrumbList schema', detail: hasBreadcrumbList ? 'present' : 'MISSING', status: hasBreadcrumbList ? 'ok' : 'broken' });

const hasFaq = (toolJSONLD + guideJSONLD).includes('FAQPage');
phase8.findings.push({ severity: 'low', item: 'FAQ schema', detail: hasFaq ? 'present' : 'not present (nice-to-have)', status: 'info' });

REPORT.phases[8] = phase8;

// ==========================================
// PHASE 9: MOBILE & UX
// ==========================================
const phase9 = { title: 'Mobile & UX', findings: [] };

// 9.1 Viewport
const hasViewport = layout.includes('viewport') || layout.includes('Viewport');
phase9.findings.push({ severity: 'high', item: 'Viewport meta', detail: hasViewport ? 'configured' : 'MISSING', status: hasViewport ? 'ok' : 'broken' });

// 9.2 Responsive breakpoints
const css = fs.readFileSync(path.join(ROOT, 'app', 'globals.css'), 'utf8');
const bpCount = (css.match(/@media/g) || []).length + (homepage.match(/sm:|md:|lg:|xl:/g) || []).length;
phase9.findings.push({ severity: 'info', item: 'Responsive breakpoints', detail: `${bpCount} media queries`, status: bpCount > 10 ? 'ok' : 'warn' });

// 9.3 Touch targets
const hasTouchTargets = css.includes('min-h-10') || css.includes('min-h-12') || css.includes('p-3');
phase9.findings.push({ severity: 'low', item: 'Touch target sizes', detail: hasTouchTargets ? 'adequate padding found' : 'check minimum 44x44px targets', status: hasTouchTargets ? 'ok' : 'warn' });

// 9.4 Font sizing (rem-based)
const hasRemFonts = css.includes('rem') || css.includes('text-');
phase9.findings.push({ severity: 'low', item: 'Font units', detail: hasRemFonts ? 'rem/Tailwind units used' : 'check for px-only fonts', status: 'ok' });

// 9.5 Dark mode
const hasDarkMode = layout.includes('dark') || layout.includes('prefers-color-scheme') || css.includes('.dark');
phase9.findings.push({ severity: 'low', item: 'Dark mode support', detail: hasDarkMode ? 'CSS variables/class toggle' : 'Dark-only (no toggle)', status: hasDarkMode ? 'ok' : 'info' });

REPORT.phases[9] = phase9;

// ==========================================
// PHASE 10: EDGE & ADVANCED
// ==========================================
const phase10 = { title: 'Edge & Advanced', findings: [] };

// 10.1 Redirects
let vercelConfig = {};
try { vercelConfig = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8')); } catch(e) {}
const redirectCount = (vercelConfig.redirects || []).length;
phase10.findings.push({ severity: 'info', item: 'Vercel redirects', detail: `${redirectCount} rules`, status: redirectCount >= 8 ? 'ok' : 'warn' });

// 10.2 Service worker
const hasSW = fs.existsSync(path.join(ROOT, 'public', 'sw.js'));
phase10.findings.push({ severity: 'medium', item: 'Service Worker', detail: hasSW ? 'present' : 'MISSING', status: hasSW ? 'ok' : 'broken' });

// 10.3 llms.txt
const hasLlms = fs.existsSync(path.join(ROOT, 'public', 'llms.txt'));
phase10.findings.push({ severity: 'low', item: 'llms.txt (AI discoverability)', detail: hasLlms ? 'present' : 'MISSING', status: hasLlms ? 'ok' : 'warn' });

// 10.4 Breadcrumbs UX component
const hasBreadcrumbComp = fs.existsSync(path.join(ROOT, 'components', 'Breadcrumb.tsx'));
phase10.findings.push({ severity: 'medium', item: 'Breadcrumbs UX', detail: hasBreadcrumbComp ? 'component exists' : 'MISSING', status: hasBreadcrumbComp ? 'ok' : 'broken' });

// 10.5 Canonical tags on all major pages
const checkCanonical = (file) => {
  try {
    return fs.readFileSync(file, 'utf8').includes('canonical');
  } catch { return false; }
};
const canonicalPages = allPages.filter(p => checkCanonical(p.file));
phase10.findings.push({ severity: 'medium', item: 'Canonical URLs', detail: `${canonicalPages.length}/${allPages.length} pages have canonical`, status: canonicalPages.length > allPages.length * 0.7 ? 'ok' : 'warn' });

// 10.6 Hreflang tags
const hasHreflang = layout.includes('hreflang') || layout.includes('alternate');
phase10.findings.push({ severity: 'medium', item: 'Hreflang tags', detail: hasHreflang ? 'present' : 'MISSING — should link tr/en variants', status: hasHreflang ? 'ok' : 'broken' });

// 10.7 Web Vitals / Analytics
const hasAnalytics = layout.includes('analytics') || layout.includes('vercel') || layout.includes('gtag');
phase10.findings.push({ severity: 'low', item: 'Analytics / Web Vitals', detail: hasAnalytics ? 'present' : 'none (by design — no tracking)', status: 'info' });

// 10.8 Content freshness — lastModified dates
const sitemapContent = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
const hasFreshness = homepage.includes('lastModified') || sitemapContent.includes('lastModified');
phase10.findings.push({ severity: 'low', item: 'Content freshness signals', detail: hasFreshness ? 'lastModified dates present' : 'could add to sitemap', status: hasFreshness ? 'ok' : 'warn' });

REPORT.phases[10] = phase10;

// ==========================================
// SUMMARY
// ==========================================
const allFindings = [];
Object.values(REPORT.phases).forEach(phase => {
  allFindings.push(...(phase.findings || []));
});

const severityCounts = { critical: 0, high: 0, medium: 0, low: 0, info: 0, ok: 0 };
allFindings.forEach(f => {
  severityCounts[f.status] = (severityCounts[f.status] || 0) + 1;
});

REPORT.summary = {
  totalFindings: allFindings.length,
  bySeverity: severityCounts,
  topIssues: allFindings.filter(f => f.status === 'broken' || f.status === 'critical').slice(0, 10),
  recommendation: severityCounts.high + severityCounts.critical > 5 
    ? 'PRIORITY: Fix critical/high items before next deployment'
    : severityCounts.high + severityCounts.critical > 0
      ? 'Address remaining issues in priority order'
      : 'Site is in good shape — focus on content quality'
};

// Write report
fs.writeFileSync(
  path.join(ROOT, 'seo-audit-v2-report.json'),
  JSON.stringify(REPORT, null, 2)
);

// Print summary
console.log('╔══════════════════════════════════════════╗');
console.log('║  TeknoAraç 10-Phase SEO Audit v2       ║');
console.log('╠══════════════════════════════════════════╣');

Object.entries(REPORT.phases).forEach(([num, phase]) => {
  const icons = { broken: '❌', critical: '💀', high: '🔴', medium: '🟠', low: '🟡', info: '🔵', ok: '✅', warn: '⚠️' };
  const broken = phase.findings.filter(f => f.status === 'broken' || f.status === 'critical').length;
  const high = phase.findings.filter(f => f.status === 'high').length;
  const total = phase.findings.length;
  console.log(`║ Phase ${num}: ${phase.title.padEnd(20)} [${total}f] ${icons[broken > 0 ? 'broken' : 'ok']}`);
  
  phase.findings.forEach(f => {
    console.log(`║   ${icons[f.status] || '•'} ${f.item}: ${(f.detail || '').slice(0, 80)}`);
  });
});

console.log('╠══════════════════════════════════════════╣');
console.log('║ SUMMARY:', REPORT.summary.recommendation.padEnd(40));
console.log('║ Critical:', severityCounts.critical, 'High:', severityCounts.high,
            'Med:', severityCounts.medium, 'Low:', severityCounts.low);
console.log('╚══════════════════════════════════════════╝');
console.log('\nFull report: seo-audit-v2-report.json');
