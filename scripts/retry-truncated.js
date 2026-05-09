const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const FTA = "C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";
const TGT = "C:/Users/eruo0/Desktop/project/teknoarac/content/guides";

const files = [
  "how-to-evaluate-an-ai-tool.tsx",
  "how-to-find-your-break-even-point.tsx",
  "how-to-forecast-cash-flow.tsx",
  "how-to-format-xml.tsx",
  "how-to-optimize-freelancer-taxes.tsx",
  "how-to-trim-audio.tsx",
];

async function translate(file) {
  if (!fs.existsSync(FTA + "/" + file)) { console.log(file + ": NOT FOUND"); return; }
  const english = fs.readFileSync(FTA + "/" + file, "utf-8");
  console.log(file + ": " + english.length + " chars");

  const resp = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + API_KEY },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Translate this React JSX guide from English to Turkish. Translate ONLY English text. Keep ALL JSX/HTML tags EXACTLY. Every opening tag must have a closing tag. Use {`>`} for > in code blocks. Output THE COMPLETE file. No markdown, no code fences." },
        { role: "user", content: english }
      ],
      temperature: 0.2,
      max_tokens: 16000,
    }),
  });
  const data = await resp.json();
  let tr = data.choices[0].message.content;
  tr = tr.replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/, "").trim();
  tr = tr.replace(/===FILE:.*?===/g, "").replace(/===END FILE===/g, "");
  
  console.log("  → " + tr.length + " chars, ends: " + tr.slice(-40).trim());
  
  // Validate
  if (!/[)\]};>\"\u201D]$/) console.log("  ⚠ May be truncated");
  
  fs.writeFileSync(TGT + "/" + file, tr, "utf-8");
  console.log("  ✅");
}

async function main() {
  for (const file of files) {
    try { await translate(file); console.log(""); } catch(e) { console.log("❌ " + e.message + "\n"); }
  }
  console.log("Done.");
}
main();
