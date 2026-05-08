/**
 * Extracts all tools and guides from FreeToolArena's pages.ts
 * and generates a usable tool registry + guide list for ToolPazar.
 */
const fs = require('fs');
const path = require('path');

const SRC = 'C:\\Users\\eruo0\\Desktop\\project\\freetoolarena\\lib\\pages.ts';
const content = fs.readFileSync(SRC, 'utf8');

// Extract PAGE entries using a regex approach
// Each page looks like: { slug: "...", type: "tool"|"article", title: "...", ... }
const pageRegex = /\{\s*slug:\s*"([^"]+)",\s*type:\s*"(tool|article)",\s*title:\s*"([^"]*)",\s*h1:\s*"([^"]*)",\s*description:\s*"([^"]*)",\s*keyword:\s*"([^"]*)",\s*category:\s*"([^"]*)"/g;

const tools = [];
const guides = [];

let match;
while ((match = pageRegex.exec(content)) !== null) {
  const [_, slug, type, title, h1, description, keyword, category] = match;
  const entry = { slug, type, title, h1, description, keyword, category };
  if (type === 'tool') tools.push(entry);
  else if (type === 'article') guides.push(entry);
}

console.log(`Extracted ${tools.length} tools and ${guides.length} guides`);
console.log(`\n=== TOOLS REGISTRY (for lib/tools.ts) ===`);
console.log(JSON.stringify(tools.slice(0, 3), null, 2));
console.log(`\n=== GUIDES REGISTRY ===`);
console.log(JSON.stringify(guides.slice(0, 3), null, 2));

// Write to files
fs.writeFileSync(
  path.join(__dirname, '..', 'extracted-tools.json'),
  JSON.stringify(tools, null, 2)
);
fs.writeFileSync(
  path.join(__dirname, '..', 'extracted-guides.json'),
  JSON.stringify(guides, null, 2)
);
console.log(`\nWritten to extracted-tools.json and extracted-guides.json`);
