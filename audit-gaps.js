const fs = require('fs');
const base = 'C:/Users/eruo0/Desktop/project/toolpazar';

// Check internal links
const layout = fs.readFileSync(base + '/app/layout.tsx', 'utf8');
const home = fs.readFileSync(base + '/app/page.tsx', 'utf8');
const allHrefs = [...(layout.match(/href=["']([^"']+)["']/g) || []), ...(home.match(/href=["']([^"']+)["']/g) || [])];
const links = [...new Set(allHrefs.map(h => h.replace(/^href=["']/, '').replace(/["']$/, '')).filter(l => l.startsWith('/')))];

console.log('--- Internal Links ---');
links.forEach(l => console.log(' ', l));

// Error pages
console.log('\n--- Error Pages ---');
['not-found.tsx', 'error.tsx', 'loading.tsx'].forEach(f => {
  const exists = fs.existsSync(base + '/app/' + f);
  console.log(f + ':', exists ? 'EXISTS' : 'MISSING');
});

// themeColor bug
console.log('\n--- themeColor in metadata ---');
function checkThemeColor(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    if (d.name.startsWith('.') || d.name === 'node_modules' || d.name.startsWith('.next')) return;
    const p = dir + '/' + d.name;
    if (d.isDirectory()) checkThemeColor(p);
    else if (d.name.endsWith('.tsx') || d.name.endsWith('.ts')) {
      try {
        const c = fs.readFileSync(p, 'utf8');
        if (c.includes('Metadata') && c.includes('themeColor') && c.includes('export const metadata')) {
          console.log('BUG:', p.replace(base + '/', ''));
        }
      } catch (e) { }
    }
  });
}
checkThemeColor(base + '/app');

// Accessibility basics
console.log('\n--- A11y ---');
const layout2 = fs.readFileSync(base + '/app/layout.tsx', 'utf8');
console.log('Has lang attr:', layout2.includes('lang='));
console.log('Has viewport meta:', layout2.includes('viewport'));

// Image optimization
console.log('\n--- Images ---');
const publicDir = base + '/public';
if (fs.existsSync(publicDir)) {
  const images = fs.readdirSync(publicDir).filter(f => /\.(png|jpg|jpeg|webp|svg|ico)$/i.test(f));
  console.log('Public images:', images.length);
  if (!images.includes('favicon.ico') && !images.includes('icon.svg')) console.log('  MISSING: favicon');
  if (!images.some(i => i.includes('og'))) console.log('  MISSING: OG image');
}

// Tools without Turkish content
console.log('\n--- Tool Completeness ---');
const toolsFile = base + '/lib/tools.ts';
const toolsContent = fs.readFileSync(toolsFile, 'utf8');
const hasTitleTr = toolsContent.includes('titleTr');
const hasDescTr = toolsContent.includes('descriptionTr');
console.log('Has titleTr:', hasTitleTr);
console.log('Has descriptionTr:', hasDescTr);
console.log('Still has FreeToolArena ref:', toolsContent.includes('FreeToolArena'));
console.log('Still has toolpazar.com:', toolsContent.includes('toolpazar.com'));

// Check for duplicate slugs
const slugMatch = [...toolsContent.matchAll(/slug:\s*"([^"]+)"/g)];
const slugs = slugMatch.map(m => m[1]);
const uniqueSlugs = new Set(slugs);
if (slugs.length !== uniqueSlugs.size) {
  const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
  console.log('DUPLICATE SLUGS:', [...new Set(dupes)]);
} else {
  console.log('Slugs: all unique (' + slugs.length + ')');
}

// Check tools with no icon
const iconMatch = [...toolsContent.matchAll(/icon:\s*"([^"]*)"/g)];
const noIcons = iconMatch.filter(m => !m[1]);
console.log('Tools without icon:', noIcons.length);

// CSS completeness
console.log('\n--- CSS ---');
const css = fs.readFileSync(base + '/app/globals.css', 'utf8');
console.log('Has dark mode vars:', css.includes('prefers-color-scheme') || css.includes('dark') || css.includes('.dark'));
console.log('Has responsive breakpoints:', css.includes('@media'));
console.log('Has transitions:', css.includes('transition'));
