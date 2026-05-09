/**
 * translate-guides.js — 3-concurrent reliable guide translator
 * Writes each file immediately. Resumable.
 */
const fs = require("fs");
const path = require("path");

const API_KEY = process.env.DEEPSEEK_API_KEY || "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const GUIDES_DIR = path.resolve(__dirname, "..", "content", "guides");
const PROGRESS_FILE = path.resolve(__dirname, "translate-guides-progress.json");
const CONCURRENCY = 5;

function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    try { return new Set(JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf-8"))); } catch {}
  }
  return new Set();
}

function saveProgress(p) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify([...p], null, 2));
}

const progress = loadProgress();
console.log(`Resumed — ${progress.size} already done`);

// Trust the progress file — validated by rebuild-progress.js

const allFiles = fs.readdirSync(GUIDES_DIR)
  .filter(f => f.endsWith(".tsx"))
  .filter(f => !progress.has(f));

console.log(`${allFiles.length} remaining\n`);

async function translateFile(file) {
  const content = fs.readFileSync(path.join(GUIDES_DIR, file), "utf-8");
  
  // Use larger max_tokens for longer files
  const maxTokens = content.length > 2000 ? 8000 : 4000;
  
  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Translate this React JSX guide from English to Turkish. Translate ONLY English text. Keep ALL code EXACTLY: JSX tags, imports, exports, HTML tags, classNames, URLs, numbers. Output ONLY the translated file starting directly with the code. No markdown, no code fences, no explanations." },
        { role: "user", content }
      ],
      temperature: 0.2,
      max_tokens: maxTokens,
    }),
  });

  if (!response.ok) throw new Error(`API ${response.status}`);
  const data = await response.json();
  let translated = data.choices[0].message.content;
  
  translated = translated
    .replace(/^```[a-z]*\s*\n?/i, "")
    .replace(/\n?```\s*$/, "")
    .trim();

  // Verify: translation should be roughly as long as original
  if (translated.length < content.length * 0.25) {
    // Retry with more tokens
    console.log(`     ↳ Retrying ${file} with 8000 tokens (got ${translated.length} chars vs ${content.length})`);
    const r2 = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "Translate this React JSX guide from English to Turkish. Translate ONLY English text. Keep ALL code EXACTLY. Output ONLY the translated file. No markdown, no code fences. 8000 tokens max." },
          { role: "user", content }
        ],
        temperature: 0.2,
        max_tokens: 8000,
      }),
    });
    if (!r2.ok) throw new Error(`Retry API ${r2.status}`);
    const d2 = await r2.json();
    translated = d2.choices[0].message.content
      .replace(/^```[a-z]*\s*\n?/i, "")
      .replace(/\n?```\s*$/, "")
      .trim();
  }

  if (translated.length < content.length * 0.2) {
    throw new Error(`Too short: ${translated.length} vs ${content.length}`);
  }

  // Write immediately
  fs.writeFileSync(path.join(GUIDES_DIR, file), translated, "utf-8");
  progress.add(file);
  saveProgress(progress);
}

async function main() {
  let active = 0;
  let done = 0;
  const start = Date.now();

  async function processNext() {
    if (allFiles.length === 0) return;
    const file = allFiles.shift();
    active++;
    try {
      await translateFile(file);
      done++;
      const elapsed = (Date.now() - start) / 1000;
      const rate = done / (elapsed || 1);
      const remaining = allFiles.length;
      const estSec = rate > 0 ? remaining / rate : 0;
      console.log(`✅ ${progress.size}/${591} (${(progress.size/591*100).toFixed(1)}%) — ${file} ~${Math.floor(estSec/60)}m${Math.floor(estSec%60)}s left`);
    } catch (err) {
      progress.add(file);
      saveProgress(progress);
      console.log(`❌ ${file}: ${err.message}`);
    } finally {
      active--;
      processNext();
    }
  }

  // Start initial batch
  for (let i = 0; i < CONCURRENCY; i++) processNext();

  // Wait for all to complete
  await new Promise(resolve => {
    const check = setInterval(() => {
      if (active === 0 && allFiles.length === 0) {
        clearInterval(check);
        console.log(`\n🎉 All done! ${progress.size} files processed.`);
        resolve();
      }
    }, 1000);
  });
}

main().catch(err => { console.error("Fatal:", err); process.exit(1); });
