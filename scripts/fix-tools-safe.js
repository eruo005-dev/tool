/**
 * Safe tool registry fix — parse via Node TS, filter, rebuild
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// Load tools.ts via Node's TS support
const toolsMod = require(path.join(ROOT, 'lib', 'tools.ts'));
const allTools = toolsMod.allTools || toolsMod.tools || [];
const originalCount = allTools.length;

// =====================================================
// THIN SLUGS TO REMOVE (28 fallback-only tools)
// =====================================================
const REMOVE_SLUGS = new Set([
  'fps-to-frame-time', 'ping-latency-tier', 'loot-drop-probability',
  'minecraft-enchantment-level', 'mtg-mana-curve-analyzer', 'layover-risk-checker',
  'passport-expiry-checker', 'wedding-guest-list-splitter', 'save-the-date-timing',
  'wedding-registry-prioritizer', 'usda-hardiness-zone-lookup', 'planting-calendar-by-zone',
  'companion-plant-checker', 'plant-watering-schedule', 'drill-bit-size-lookup',
  'gaming-pc-spec-recommender', 'distance-between-cities',
  'youtube-baslik', 'tweet-yazici', 'urun-aciklamasi',
  'gorsel-boyutlandir', 'gorsel-sikistir', 'arka-plan-kaldir',
  'profil-fotografi', 'teklif-olusturucu', 'fatura-sablonu',
  'barkod-olusturucu', 'link-kisaltici',
]);

// Filter out thin tools
let tools = allTools.filter(t => !REMOVE_SLUGS.has(t.slug));
console.log(`Removed ${originalCount - tools.length} thin tools`);

// =====================================================
// FIX DUPLICATE TITLES
// =====================================================
const TITLE_FIXES = {
  'home-equity-loan-calculator': 'Konut Sermayesi Hesaplayıcı',
  'auto-loan-calculator': 'Otomobil Kredisi Hesaplayıcı',
  'online-stopwatch': 'Web Tabanlı Kronometre',
  'pdf-editor': 'PDF Düzenleyici (Gelişmiş)',
  'css-gradient-generator': 'CSS Gradyan Üretici',
  'html-table-generator': 'HTML Tablo Üretici',
  'roman-numerals-converter': 'Romen Rakamı Çevirici',
  'citation-generator': 'Akademik Alıntı Üretici',
  'image-compressor': 'Görsel Sıkıştırıcı (Kayıpsız)',
};

let titleFixes = 0;
tools = tools.map(t => {
  if (TITLE_FIXES[t.slug]) {
    titleFixes++;
    return { ...t, titleTr: TITLE_FIXES[t.slug] };
  }
  return t;
});
console.log(`Fixed ${titleFixes} duplicate titles`);

// Verify no Turkish-only keys remain in category field
const validCats = new Set(Object.keys(toolsMod.categories));
const badCatTools = tools.filter(t => !validCats.has(t.category));
if (badCatTools.length > 0) {
  console.log(`WARNING: ${badCatTools.length} tools have invalid categories:`);
  const catMap = {};
  // Map Turkish category IDs back to English keys
  const turkishToEng = {};
  Object.entries(toolsMod.categories).forEach(([eng, info]) => {
    turkishToEng[info.id] = eng;
  });
  
  badCatTools.forEach(t => {
    const mapped = turkishToEng[t.category];
    if (mapped) {
      console.log(`  ${t.slug}: "${t.category}" → "${mapped}"`);
      t.category = mapped;
    } else {
      console.log(`  ${t.slug}: "${t.category}" — NO MAPPING`);
    }
  });
}

console.log(`\nFinal tool count: ${tools.length}`);

// =====================================================
// REBUILD tools.ts with proper formatting
// =====================================================
const generateToolEntry = (t) => {
  return `  {
    slug: "${t.slug}",
    titleTr: "${t.titleTr.replace(/"/g, '\\"')}",
    titleEn: "${(t.titleEn || '').replace(/"/g, '\\"')}",
    descriptionTr: "${(t.descriptionTr || '').replace(/"/g, '\\"')}",
    descriptionEn: "${(t.descriptionEn || '').replace(/"/g, '\\"')}",
    category: "${t.category}",
    icon: "${t.icon || '🛠️'}",
    keyword: "${(t.keyword || t.slug).replace(/"/g, '\\"')}",
  }`;
};

// Read original to preserve header
const original = fs.readFileSync(path.join(ROOT, 'lib', 'tools.ts'), 'utf8');
const headerEnd = original.indexOf('export const tools: Tool[] = [');
const header = original.slice(0, headerEnd);
const afterTools = original.slice(original.lastIndexOf('];') + 2);

// Build new file
const toolsEntries = tools.map(generateToolEntry).join(',\n');
const rebuilt = header + 
  `export const tools: Tool[] = [\n${toolsEntries},\n];` +
  afterTools;

// Update header count
const final = rebuilt.replace(
  /\/\/ TeknoAra.*\n\/\/ Removed.*\n/,
  `// TeknoAraç araç kaydı — ${tools.length} Türkçe araç\n// Removed US-centric tools + thin/generic fallback tools\n`
);

fs.writeFileSync(path.join(ROOT, 'lib', 'tools.ts'), final);
console.log(`\nWritten updated tools.ts (${tools.length} tools)`);

// Save removed list for reference
fs.writeFileSync(
  path.join(ROOT, 'scripts', 'removed-tools.json'),
  JSON.stringify({ removed: [...REMOVE_SLUGS], count: REMOVE_SLUGS.size, date: new Date().toISOString() }, null, 2)
);
console.log('Removed tools list saved to scripts/removed-tools.json');
