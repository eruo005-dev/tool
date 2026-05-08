const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'lib', 'pages.ts');
const p = fs.readFileSync(file, 'utf8');

// Count published tools and articles
const toolMatches = (p.match(/type:\s*"tool"/g) || []).length;
const articleMatches = (p.match(/type:\s*"article"/g) || []).length;
const published = (p.match(/published:\s*true/g) || []).length;

console.log(`Total type:"tool" entries: ${toolMatches}`);
console.log(`Total type:"article" entries: ${articleMatches}`);
console.log(`Total published: true: ${published}`);
console.log(`File size: ${(p.length / 1024).toFixed(0)} KB`);
console.log(`Line count: ${p.split('\n').length}`);

// Extract a few tool slugs as sample
const slugMatches = p.match(/slug:\s*"([^"]+)"/g);
if (slugMatches) {
  const slugs = slugMatches.slice(0, 20).map(s => s.match(/"([^"]+)"/)[1]);
  console.log('\nFirst 20 slugs:');
  slugs.forEach(s => console.log('  ' + s));
  console.log(`\nTotal slugs: ${slugMatches.length}`);
}
