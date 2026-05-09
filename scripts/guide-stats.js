const fs = require("fs");
const dir = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".tsx"));

let totalChars = 0;
files.slice(0, 3).forEach(f => {
  const c = fs.readFileSync(dir + "/" + f, "utf-8");
  const text = c.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  console.log(f, "~" + Math.ceil(text.length / 4), "tokens");
});

const all = files.reduce((s, f) => s + fs.readFileSync(dir + "/" + f, "utf-8").length, 0);
console.log("\nTotal files:", files.length);
console.log("Total chars:", all);
console.log("~Tokens input:", Math.ceil(all / 3));
console.log("~Tokens output est:", Math.ceil(all * 0.4 / 3));

const costIn = (all / 3) * 0.27 / 1_000_000;
const costOut = (all * 0.4 / 3) * 1.10 / 1_000_000;
console.log("~Cost:", "$" + (costIn + costOut).toFixed(3));
