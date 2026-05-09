const fs = require("fs");
const file = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides/how-to-trim-audio.tsx";
let c = fs.readFileSync(file, "utf-8");

// Fix code blocks that lost backtick wrappers during translation
// Pattern: <pre>{some code here}</pre> -> <pre>{`some code here`}</pre>
c = c.replace(/<pre>\{([\s\S]*?)\}<\/pre>/g, (match, code) => {
  // Skip if already has backticks
  if (code.includes("`")) return match;
  return "<pre>{`" + code + "`}</pre>";
});

// Also fix the specific blocks with backslash issue
c = c.replace(/<pre>\{(# Kırpma.*?)\}\s*<\/pre>/g, "<pre>{`$1`}</pre>");
c = c.replace(/<pre>\{(Açılış fade.*?)\}\s*<\/pre>/g, "<pre>{`$1`}</pre>");
c = c.replace(/<pre>\{(Bir klasör.*?)\}\s*<\/pre>/g, "<pre>{`$1`}</pre>");
c = c.replace(/<pre>\{(Başlangıç.*?)\}\s*<\/pre>/g, "<pre>{`$1`}</pre>");

fs.writeFileSync(file, c);
console.log("Fixed how-to-trim-audio.tsx");
