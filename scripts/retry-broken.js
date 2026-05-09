const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const FTA = "C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";
const TGT = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";

const broken = JSON.parse(fs.readFileSync("C:/Users/eruo0/Desktop/project/toolpazar/scripts/broken-list.json", "utf-8"));
console.log(broken.length + " files to fix\n");

async function translate(file) {
  if (!fs.existsSync(FTA + "/" + file)) { 
    console.log("  ⚠ NOT FOUND in FTA: " + file); return; 
  }
  const english = fs.readFileSync(FTA + "/" + file, "utf-8");
  console.log(file + ": " + english.length + " chars EN");
  
  const resp = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + API_KEY },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Translate this React JSX guide from English to Turkish. Translate ONLY English text. Keep ALL JSX/HTML tags EXACTLY including all opening AND closing tags. Every tag must be properly closed. Output THE COMPLETE file with no truncation. No markdown, no code fences." },
        { role: "user", content: english }
      ],
      temperature: 0.2,
      max_tokens: 16000,
    }),
  });
  const data = await resp.json();
  let tr = data.choices[0].message.content;
  tr = tr.replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/, "").trim();
  tr = tr.replace(/===.*?===/g, "");
  
  const ending = tr.slice(-40).trim();
  const valid = /[)\]};>"]$/.test(ending);
  console.log("  → " + tr.length + " chars TR " + (valid ? "✅" : "⚠ TRUNCATED"));
  if (!valid) console.log("    Ends: " + ending.slice(-60));
  
  fs.writeFileSync(TGT + "/" + file, tr, "utf-8");
}

async function main() {
  for (const file of broken) {
    try { await translate(file); } catch(e) { console.log("  ❌ " + e.message); }
  }
  console.log("\nDone.");
}
main();
