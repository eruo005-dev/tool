const fs = require("fs");
const path = require("path");

const DIR = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";
const PROGRESS = "C:/Users/eruo0/Desktop/project/toolpazar/scripts/translate-guides-progress.json";

const files = fs.readdirSync(DIR).filter(f => f.endsWith(".tsx"));

let tr = 0, en = 0;
const trulyDone = [];

files.forEach(f => {
  const c = fs.readFileSync(path.join(DIR, f), "utf-8");
  const words = (c.match(/[a-zA-Z]{3,}/g) || []).length;
  if (words <= 30) { tr++; trulyDone.push(f); }
  else en++;
});

console.log(`TR: ${tr}, EN: ${en}, Total: ${tr + en}`);

if (tr > 0) {
  trulyDone.forEach(f => console.log(`  TR: ${f}`));
}

// Reset progress file to only truly translated files
fs.writeFileSync(PROGRESS, JSON.stringify(trulyDone, null, 2));
console.log(`\nProgress reset to ${trulyDone.length} truly completed`);
