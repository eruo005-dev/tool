/**
 * Extracts PAGES array from FreeToolArena's pages.ts and generates
 * a comprehensive TeknoAraç tools.ts with ALL tools + guides.
 */
const fs = require('fs');
const path = require('path');

const src = fs.readFileSync('C:\\Users\\eruo0\\Desktop\\project\\freetoolarena\\lib\\pages.ts', 'utf8');

// Extract the PAGES array (between PAGES: Page[] = [ and the closing ];)
// Then remove TypeScript types, leaving valid JS objects
const start = src.indexOf('export const PAGES: Page[] = [');
const trimmed = src.substring(start + 'export const PAGES: Page[] = ['.length);
// Find the matching close bracket
let depth = 1;
let end = 0;
for (let i = 0; i < trimmed.length; i++) {
  if (trimmed[i] === '[') depth++;
  else if (trimmed[i] === ']') {
    depth--;
    if (depth === 0) { end = i; break; }
  }
}
const pagesJson = '[' + trimmed.substring(0, end) + ']';

// Remove // comments
const noComments = pagesJson.replace(/\/\/.*$/gm, '');

try {
  const pages = eval(noComments);
  const tools = pages.filter(p => p.type === 'tool');
  const articles = pages.filter(p => p.type === 'article');
  
  console.log(`Total pages: ${pages.length}`);
  console.log(`Tools: ${tools.length}`);
  console.log(`Articles (guides): ${articles.length}`);
  
  // Extract categories
  const cats = [...new Set(tools.map(t => t.category))];
  console.log(`Tool categories: ${cats.join(', ')}`);
  
  // Sample tool categories
  const catsCount = {};
  tools.forEach(t => { catsCount[t.category] = (catsCount[t.category] || 0) + 1; });
  console.log('\nTools per category:');
  Object.entries(catsCount).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count}`);
  });

  // Write extracted data
  const outDir = path.join(__dirname, '..');
  fs.writeFileSync(path.join(outDir, 'extracted-tools.json'), JSON.stringify(tools, null, 2));
  fs.writeFileSync(path.join(outDir, 'extracted-articles.json'), JSON.stringify(articles, null, 2));
  console.log(`\nWritten extracted-tools.json (${tools.length} entries)`);
  console.log(`Written extracted-articles.json (${articles.length} entries)`);
} catch(e) {
  console.error('Parse error:', e.message);
  // Save debug
  fs.writeFileSync(path.join(__dirname, '..', 'debug-pages.json'), noComments.substring(0, 5000));
  console.log('Wrote debug-pages.json for inspection');
}
