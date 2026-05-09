const fs = require("fs");
const dir = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".tsx") && f !== "registry.tsx");
const PROGRESS_FILE = "C:/Users/eruo0/Desktop/project/toolpazar/scripts/translate-guides-progress.json";

const translated = [];

files.forEach(f => {
  const c = fs.readFileSync(dir + "/" + f, "utf-8");
  // Has Turkish-specific characters?
  const hasTurkish = /[ışğüöçİŞĞÜÖÇı]/g.test(c);
  if (hasTurkish) {
    translated.push(f);
  }
});

fs.writeFileSync(PROGRESS_FILE, JSON.stringify(translated, null, 2));
console.log(`Translated: ${translated.length}`);
console.log(`Remaining: ${591 - translated.length}`);
console.log("\nProgress file rebuilt.");
