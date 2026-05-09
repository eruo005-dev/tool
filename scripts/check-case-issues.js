const fs = require("fs");
const path = require("path");

function findAllImports(dir) {
  const results = [];
  function walk(d) {
    const items = fs.readdirSync(d);
    for (const item of items) {
      const p = path.join(d, item);
      if (fs.statSync(p).isDirectory() && !item.startsWith(".") && item !== "node_modules" && item !== ".next") {
        walk(p);
      } else if (/\.(tsx|ts|jsx|js)$/.test(item)) {
        const content = fs.readFileSync(p, "utf-8");
        const imports = [...content.matchAll(/from\s+['"](\.\/[^'"]+|\.\.\/[^'"]+)['"]/g)];
        for (const imp of imports) {
          results.push({ file: p.replace(dir + "/", ""), importPath: imp[1], fullMatch: imp[0] });
        }
      }
    }
  }
  walk(dir);
  return results;
}

const root = "C:/Users/eruo0/Desktop/project/toolpazar";
const imports = findAllImports(root);

let issues = 0;
for (const { file, importPath } of imports) {
  const fullDir = path.dirname(path.join(root, file));
  let targetFile = path.resolve(fullDir, importPath);
  
  // Add extensions
  for (const ext of [".tsx", ".ts", ".jsx", ".js", "/index.tsx", "/index.ts"]) {
    const candidate = targetFile + ext;
    if (fs.existsSync(candidate)) {
      targetFile = candidate;
      break;
    }
  }
  
  if (!fs.existsSync(targetFile)) {
    // Check case-insensitive match (Linux issue)
    const dirname = path.dirname(targetFile);
    const basename = path.basename(targetFile);
    if (fs.existsSync(dirname)) {
      const actual = fs.readdirSync(dirname).find(f => f.toLowerCase() === basename.toLowerCase());
      if (actual && actual !== basename) {
        console.log("CASE MISMATCH:", file, "→", importPath, "(actual:", actual + ")");
        issues++;
      } else if (!actual) {
        console.log("MISSING:", file, "→", importPath);
        issues++;
      }
    }
  }
}
console.log("\nIssues:", issues);
