/**
 * retry-long-v2.js — Retranslate specific broken guide files individually
 */
const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const dir = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";

// Only retranslate files that are actually broken
const files = [
  "json-format-rules-every-developer-should-know.tsx",
  "how-to-set-up-a-hyperspace-pod.tsx",
];

async function fixFile(file) {
  const content = fs.readFileSync(dir + "/" + file, "utf-8");
  console.log(file + ":", content.length, "chars");
  
  const resp = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + API_KEY },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Translate this React JSX guide from English to Turkish. Translate ONLY English text. Keep ALL code EXACTLY: JSX tags, imports, exports, HTML tags. Make sure the output is COMPLETE with ALL closing tags. Use &gt; for > in text. Output ONLY the complete translated file. No markdown, no code fences." },
        { role: "user", content }
      ],
      temperature: 0.2,
      max_tokens: 16000,
    }),
  });
  
  const data = await resp.json();
  let translated = data.choices[0].message.content;
  translated = translated.replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/, "").trim();
  
  // Verify: must end with valid closing (];, ;, or </>)
  const ending = translated.slice(-20).trim();
  console.log("  Ending:", ending);
  
  if (!/[\}\]);>]$/.test(ending)) {
    console.log("  WARNING: May be truncated");
  }
  
  fs.writeFileSync(dir + "/" + file, translated, "utf-8");
  console.log("  Written:", translated.length, "chars\n");
}

async function main() {
  for (const file of files) {
    try { await fixFile(file); } catch(e) { console.log("  FAILED:", e.message); }
  }
  console.log("Done.");
}

main();
