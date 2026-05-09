const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const FTA = "C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";
const TGT = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";

const files = [
  "how-to-encode-and-decode-base64.tsx","how-to-quit-your-job-professionally.tsx",
  "how-to-read-and-send-morse-code.tsx","how-to-read-and-write-xml.tsx",
  "how-to-read-cron-expressions.tsx","how-to-read-more-books.tsx",
  "how-to-reverse-text.tsx","how-to-rotate-images.tsx",
  "how-to-round-image-corners.tsx","how-to-run-efficient-meetings.tsx",
  "how-to-save-for-college.tsx","how-to-save-for-retirement.tsx",
  "how-to-save-money-fast.tsx","how-to-save-on-groceries.tsx",
  "how-to-save-on-taxes.tsx","how-to-save-on-utilities.tsx",
];

(async () => {
  let n = 0;
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
            { role: "system", content: "Translate this React JSX guide from English to Turkish. Translate ONLY English text. Keep ALL JSX/HTML tags exactly with proper opening and closing. Output THE COMPLETE file with no truncation. No markdown wrapping, no code fences." },
            { role: "user", content: e }
          ],
          temperature: 0.2, max_tokens: 16000,
        }),
      });
      const t = (await r.json()).choices[0].message.content.replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/, "").trim();
      fs.writeFileSync(TGT + "/" + f, t, "utf-8");
      n++;
      console.log(t.length + " [" + n + "/" + files.length + "]");
    } catch (err) { console.log("ERR: " + err.message); }
  }
  console.log("Done. " + n + " files.");
})();
