const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const FTA = "C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";
const TGT = "C:/Users/eruo0/Desktop/project/teknoarac/content/guides";

const files = [
  "how-to-remove-audio-from-video.tsx",
  "how-to-remove-extra-whitespace.tsx",
  "how-to-remove-line-breaks.tsx",
  "how-to-remove-pdf-metadata.tsx",
  "how-to-repair-or-refurbish-tech.tsx",
  "how-to-resize-images-for-web.tsx",
  "how-to-resize-images-without-losing-quality.tsx",
];

(async () => {
  for (const f of files) {
    try {
      const e = fs.readFileSync(FTA + "/" + f, "utf-8");
      process.stdout.write(f + ": " + e.length + " -> ");
      
      const r = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + API_KEY },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: "Translate this React JSX guide from English to Turkish. Rules: 1) Translate only English text 2) Keep ALL JSX/HTML tags exactly with proper closing 3) Every opening tag must have a closing tag 4) Replace > in text with {`>`} 5) Output complete file with no truncation. No markdown wrapping." },
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
      
      fs.writeFileSync(TGT + "/" + f, t, "utf-8");
      console.log(t.length + " chars");
    } catch (err) {
      console.log("ERR: " + err.message);
    }
  }
  console.log("Done.");
})();
