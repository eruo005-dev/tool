const fs = require("fs");
const dir = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".tsx"));
const progress = JSON.parse(fs.readFileSync("C:/Users/eruo0/Desktop/project/toolpazar/scripts/translate-guides-progress.json", "utf-8"));
const progressSet = new Set(progress);

let tr = 0, en = 0, untrackedTR = 0;

files.forEach(f => {
  const c = fs.readFileSync(dir + "/" + f, "utf-8");
  
  // Remove JSX/HTML tags completely
  let text = c.replace(/<[^>]+>/g, "");
  // Remove import/export/const lines  
  text = text.replace(/^(import|export\s+(const|type|default)|const\s+\w+|return)\s.*$/gm, "");
  // Remove code blocks
  text = text.replace(/[{}\[\]()=;,'"`]/g, " ");
  // Remove HTML entities
  text = text.replace(/&[a-z]+;/g, " ");
  // Remove common JS keywords
  text = text.replace(/\b(import|export|const|type|ReactElement|typeof|default|as|from|return|string|number|boolean|void|any|null|undefined|true|false|interface|extends|keyof|readonly|Promise|Array|Record|Map|Set)\b/gi, " ");
  
  const words = (text.match(/\b[a-zA-Z]{3,}\b/g) || []);
  
  if (words.length <= 40) {
    tr++;
    if (!progressSet.has(f)) untrackedTR++;
  } else {
    en++;
    if (en <= 5) {
      console.log("EN:", f, words.length + " eng words");
      console.log("  Sample:", words.slice(0, 20).join(", "));
      console.log("  Text:", text.trim().slice(0, 200));
      console.log("");
    }
  }
});

console.log(`\nTurkish (<=40 eng): ${tr}`);
console.log(`English (>40 eng): ${en}`);
console.log(`Total: ${tr + en}`);
console.log(`\nProgress file: ${progress.length}`);
console.log(`Untracked Turkish: ${untrackedTR}`);
