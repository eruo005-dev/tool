const fs = require("fs");
const dir = "C:/Users/eruo0/Desktop/project/teknoarac/content/guides";
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith(".tsx") && f !== "registry.tsx");
let fixed = 0;

for (const file of allFiles) {
  let c = fs.readFileSync(dir + "/" + file, "utf-8");
  const orig = c;

  // Fix 1: Unescaped > in text contexts
  c = c.replace(/(\s)>(\d)/g, "$1&gt;$2");
  c = c.replace(/(\s)>(\s)/g, "$1&gt;$2");
  c = c.replace(/(\s)>%(\d)/g, "$1&gt;%$2");

  // Fix 2: Revert \u003C and \u003E back to < and > in code blocks
  c = c.replace(/\\u003C/g, "<");
  c = c.replace(/\\u003E/g, ">");

  // Fix 3: <pre>{code}</pre> without template literal backticks
  c = c.replace(/<pre>\{((?:[^`]|\\`)*?)\}<\/pre>/gs, (match, code) => {
    if (code.includes("`")) return match;
    return "<pre>{`" + code + "`}</pre>";
  });

  // Fix 4: Missing </strong> before </p> or </li>
  c = c.replace(/(<strong>[^<]{1,200}?)(<\/p>)/g, "$1</strong>$2");
  c = c.replace(/(<strong>[^<]{1,200}?)(<\/li>)/g, "$1</strong>$2");

  if (c !== orig) {
    fixed++;
    fs.writeFileSync(dir + "/" + file, c, "utf-8");
    console.log("Fixed:", file);
  }
}

console.log("\nFixed " + fixed + " files");
