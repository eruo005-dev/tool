const fs = require('fs');
const tc = fs.readFileSync('C:/Users/eruo0/Desktop/project/toolpazar/app/tools/[slug]/ToolClient.tsx', 'utf8');

// Count engine references
const engines = {
  MoneyCalc: (tc.match(/MoneyCalc/g) || []).length,
  SmartConverter: (tc.match(/SmartConverter/g) || []).length,
  TextTool: (tc.match(/\bTextTool\b/g) || []).length,
  GeneratorTool: (tc.match(/GeneratorTool/g) || []).length,
  TimerTool: (tc.match(/TimerTool/g) || []).length,
  DevTool: (tc.match(/\bDevTool\b/g) || []).length,
  LiveTool: (tc.match(/LiveTool/g) || []).length,
  GameTool: (tc.match(/GameTool/g) || []).length,
  GenericToolUI: (tc.match(/GenericToolUI/g) || []).length,
};
console.log('Engine references in ToolClient:');
Object.entries(engines).forEach((kv) => console.log(' ', kv[0], '-', kv[1]));

// Find the override map and count how many slugs each engine handles
const overrideMatch = tc.match(/const toolMap\s*:\s*Record<string,\s*string>\s*=\s*\{([\s\S]*?)\};/);
if (overrideMatch) {
  const mapContent = overrideMatch[1];
  const entries = mapContent.match(/["']([^"']+)["']\s*:\s*["'](\w+)["']/g) || [];
  const counts = {};
  entries.forEach(e => {
    const m = e.match(/["'](\w+)["']\s*$/);
    if (m) counts[m[1]] = (counts[m[1]] || 0) + 1;
  });
  console.log('\nOverride map:');
  Object.entries(counts).sort((a,b) => b[1]-a[1]).forEach(kv => console.log(' ', kv[0], '-', kv[1], 'tools'));
  console.log('Total overrides:', Object.values(counts).reduce((a,b) => a+b, 0));
}

// Check what the default/fallback engine is
if (tc.includes('default:')) {
  const defaultMatch = tc.match(/default:\s*\n\s*return\s*<(\w+)/);
  console.log('\nDefault fallback engine:', defaultMatch ? defaultMatch[1] : 'unknown');
}
