const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const FTA = "C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";
const TGT = "C:/Users/eruo0/Desktop/project/teknoarac/content/guides";

// Find ALL files with truncation issues by checking end-of-file pattern
const allFiles = fs.readdirSync(TGT).filter(f => f.endsWith(".tsx") && f !== "registry.tsx");

const broken = [];
for (const f of allFiles) {
  const c = fs.readFileSync(TGT + "/" + f, "utf-8");
  const lastFew = c.slice(-100).trim();
  
  // A valid guide file should end with ); or ]; or </>);
  const isValid = /[)\]};>][\s\n]*$/.test(lastFew) && 
                  (lastFew.includes(");") || lastFew.includes("];") || 
                   lastFew.includes("</>") || lastFew.includes("export const"));
  
  if (!isValid) {
    broken.push(f);
    console.log(f + ": " + c.length + " chars, ends: " + lastFew.slice(-50));
  }
}

console.log("\n" + broken.length + " broken files");
fs.writeFileSync("C:/Users/eruo0/Desktop/project/teknoarac/scripts/broken-list.json", JSON.stringify(broken, null, 2));
