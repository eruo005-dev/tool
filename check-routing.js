const fs = require('fs');
const tc = fs.readFileSync('C:/Users/eruo0/Desktop/project/toolpazar/app/tools/[slug]/ToolClient.tsx', 'utf8');

// Extract all override slugs
const overrideSection = tc.match(/const OVERRIDES[\s\S]*?\};/);
const overrideSlugs = overrideSection ? 
  [...overrideSection[0].matchAll(/"([^"]+)"/g)].map(m => m[1]) : [];

// Extract all regex patterns used for routing
const patterns = [...tc.matchAll(/slug\.match\(\/([^/]+)\/(g|i|gi|ig)?\)/g)].map(m => m[1]);

console.log('Override slugs:', overrideSlugs.length, 'tools');
overrideSlugs.forEach(s => console.log(' ', s));

// Now check against actual tool slugs - which ones match NO regex pattern
const tools = require('C:/Users/eruo0/Desktop/project/toolpazar/lib/tools.ts');
const allTools = tools.allTools || tools.tools;

let matchedByRegex = 0;
let matchedByOverride = 0;
let matchedByCategory = 0;
let onlyFallback = 0;

allTools.forEach(t => {
  const slug = t.slug;
  
  // Check override
  if (overrideSlugs.includes(slug)) {
    matchedByOverride++;
    return;
  }
  
  // Check regex patterns
  for (const pattern of patterns) {
    try {
      if (new RegExp(pattern).test(slug)) {
        matchedByRegex++;
        return;
      }
    } catch {}
  }
  
  // Check category fallback
  if (['money', 'health', 'automotive', 'cooking', 'parenting', 'pets',
       'units', 'converters', 'text', 'writing', 'random', 'games',
       'dev', 'coding', 'ai', 'productivity', 'social', 'media', 'career'].includes(t.category)) {
    matchedByCategory++;
    return;
  }
  
  // Falls through to default LiveTool
  onlyFallback++;
  if (onlyFallback <= 20) console.log('FALLBACK:', slug, `(${t.category})`);
});

console.log('\nRouting breakdown:');
console.log('  Explicit overrides:', matchedByOverride);
console.log('  Regex matched:', matchedByRegex);
console.log('  Category fallback:', matchedByCategory);
console.log('  Default LiveTool fallback:', onlyFallback);
console.log('  TOTAL:', matchedByOverride + matchedByRegex + matchedByCategory + onlyFallback);
