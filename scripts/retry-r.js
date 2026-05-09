const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const FTA = "C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";
const TGT = "C:/Users/eruo0/Desktop/project/teknoarac/content/guides";

// Files with known JSX truncation/issues from last tsc run
const files = [
  "how-to-read-roman-numerals.tsx",
  "how-to-read-your-paycheck.tsx",
  "how-to-reduce-screen-time.tsx",
  "how-to-reduce-stress.tsx",
  "how-to-remove-audio-from-video.tsx",
  "how-to-remove-duplicate-lines.tsx",
  "how-to-remove-exif-metadata.tsx",
];

let done = 0;

async function translate(file) {
  const e = fs.readFileSync(FTA + "/" + file, "utf-8");
  process.stdout.write(file + ": " + e.length + " EN -> ");
  
  const r = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + API_KEY },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Translate this React JSX guide from English to Turkish. Translate ONLY English text. Keep ALL JSX/HTML tags exactly with proper closing. Every opening tag MUST have a closing tag. Replace > in text with &gt;. Output COMPLETE file with no truncation. No markdown wrapping." },
        { role: "user", content: e }
      ],
      temperature: 0.2,
      max_tokens: 16000,
    }),
  });
  
  const d = await r.json();
  let t = d.choices[0].message.content
    .replace(/^```[a-z]*\s*\n?/i, "")
    .replace(/\n?```\s*$/, "")
    .trim();
  
  fs.writeFileSync(TGT + "/" + file, t, "utf-8");
  done++;
  console.log(t.length + " TR [" + done + "/" + files.length + "]");
}

(async () => {
  for (const f of files) {
    try { await translate(f); } catch (e) { console.log("ERR: " + e.message); }
  }
  console.log("Done. " + done + " files.");
})();
