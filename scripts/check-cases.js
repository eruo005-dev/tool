const fs = require("fs");
const dir = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";
const reg = fs.readFileSync(dir + "/registry.tsx", "utf-8");
const imports = [...reg.matchAll(/from\s+['"](.+?)['"]/g)].map(m => m[1]);
const actualFiles = new Set(fs.readdirSync(dir).filter(f => f.endsWith(".tsx")));

for (const imp of imports) {
  const ref = imp.replace("./", "") + ".tsx";
  if (!actualFiles.has(ref)) {
    const lower = ref.toLowerCase();
    const match = [...actualFiles].find(f => f.toLowerCase() === lower);
    if (match) console.log("CASE MISMATCH:", ref, "→", match);
    else console.log("MISSING:", ref);
  }
}
console.log("Checked", imports.length, "imports");
