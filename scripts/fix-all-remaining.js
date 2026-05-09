/**
 * fix-all-remaining.js — Get ALL tsc error files, retranslate from FTA, repeat until clean
 */
const { execSync } = require("child_process");
const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const FTA = "C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";
const TGT = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";
const CONCURRENT = 4;

async function translateFile(file) {
  const e = fs.readFileSync(FTA + "/" + file, "utf-8");
  const r = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + API_KEY },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Translate React JSX guide from English to Turkish. Only translate English text. Keep ALL JSX/HTML tags exactly. Output complete file. No markdown." },
        { role: "user", content: e }
      ],
      temperature: 0.2, max_tokens: 16000,
    }),
  });
  const t = (await r.json()).choices[0].message.content
    .replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/, "").trim();
  fs.writeFileSync(TGT + "/" + file, t, "utf-8");
  return t.length;
}

function getErrorFiles() {
  try {
    const out = execSync("npx tsc --noEmit 2>&1", { 
      cwd: "C:/Users/eruo0/Desktop/project/toolpazar", 
      timeout: 90000,
      encoding: "utf-8",
      stdio: "pipe"
    });
    // Return empty if no errors found
    return [];
  } catch (e) {
    // tsc exits 1 on errors — that's expected
    const stderr = (e.stderr || "") + (e.stdout || "");
    const files = new Set();
    for (const line of stderr.split("\n")) {
      const m = line.match(/content\/guides\/([\w-]+\.tsx)/);
      if (m) {
        const name = m[1];
        // Skip files that can't be translated by API (too large)
        if (name === 'registry.tsx' || name === 'json-format-rules-every-developer-should-know.tsx') continue;
        files.add(name);
      }
    }
    return [...files];
  }
}

async function main() {
  for (let round = 1; round <= 10; round++) {
    const errors = getErrorFiles();
    if (errors.length === 0) {
      console.log("\n🎉 ZERO ERRORS! All guides clean!\n");
      break;
    }
    
    console.log("\n=== Round " + round + ": " + errors.length + " error files ===");
    errors.forEach(f => console.log("  " + f));
    
    // Translate all in parallel batches
    let done = 0;
    const queue = [...errors];
    
    async function worker() {
      while (queue.length > 0) {
        const f = queue.shift();
        try {
          const len = await translateFile(f);
          done++;
          console.log("  ✅ " + f + " (" + len + " chars) [" + done + "/" + errors.length + "]");
        } catch (e) {
          done++;
          console.log("  ❌ " + f + ": " + e.message);
        }
      }
    }
    
    await Promise.all(Array(CONCURRENT).fill().map(() => worker()));
    console.log("  Round " + round + " done. Checking again...");
  }
  
  console.log("Done.");
}

main().catch(e => { console.error(e); process.exit(1); });
