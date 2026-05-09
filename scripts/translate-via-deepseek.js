/**
 * Batch-translate ToolPazar English titles/descriptions to Turkish via DeepSeek API.
 * SAVES PROGRESS after each batch to survive timeouts.
 * Resume by re-running — already-translated items are skipped.
 */

const fs = require("fs");
const https = require("https");

const TOOLS_PATH = "C:/Users/eruo0/Desktop/project/toolpazar/lib/tools.ts";
const PROGRESS_PATH = "C:/Users/eruo0/Desktop/project/toolpazar/scripts/translate-progress.json";
const API_KEY = process.env.DEEPSEEK_API_KEY || "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const BATCH_SIZE = 40;
const DELAY_MS = 500;

const TR_CHARS = /[ğĞüÜşŞıİöÖçÇ]/;

async function deepseekCall(messages) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: "deepseek-chat",
      messages,
      temperature: 0.3,
      max_tokens: 8192,
    });
    const req = https.request({
      hostname: "api.deepseek.com",
      path: "/v1/chat/completions",
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
      timeout: 90000,
    }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (json.error) return reject(new Error(json.error.message));
          resolve(json.choices[0].message.content);
        } catch (e) { reject(new Error(data.slice(0, 200))); }
      });
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("timeout")); });
    req.write(body);
    req.end();
  });
}

function parseToolsWithPositions(source) {
  const tools = [];
  const blockRe = /\n  \{[\s\S]*?\n  \},?/g;
  let m;
  while ((m = blockRe.exec(source)) !== null) {
    const block = m[0];
    const blockStart = m.index;
    const blockEnd = m.index + block.length;
    const slug = (block.match(/slug:\s*"([^"]+)"/) || [])[1];
    const titleTr = (block.match(/titleTr:\s*"([^"]+)"/) || [])[1];
    const titleEn = (block.match(/titleEn:\s*"([^"]+)"/) || [])[1];
    const descriptionTr = (block.match(/descriptionTr:\s*"([^"]+)"/) || [])[1];
    const descriptionEn = (block.match(/descriptionEn:\s*"([^"]+)"/) || [])[1];
    if (slug) tools.push({ slug, titleTr, titleEn, descriptionTr, descriptionEn, blockStart, blockEnd });
  }
  return tools;
}

function needsTranslation(text) {
  if (!text || text.length < 3) return false;
  if (TR_CHARS.test(text)) return false;
  if (!/[a-zA-Z]/.test(text)) return false;
  return true;
}

function loadProgress() {
  try { return JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf-8")); }
  catch { return { titles: {}, descriptions: {} }; }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), "utf-8");
}

async function translateBatch(items, type) {
  const label = type === "title" ? "başlık" : "açıklama";
  const inputList = items.map((item, i) => {
    return `[${i}] ${type === "title" ? item.titleEn || item.titleTr : item.descriptionEn || item.descriptionTr}`;
  }).join("\n");

  const systemPrompt = `You are a professional Turkish translator localizing web tool names and descriptions.
Translate these ${label}s from English to natural Turkish.

RULES:
1. Return ONLY JSON: {"0":"Türkçe çeviri","1":"Diğer",...}
2. Natural Turkish — not stiff/literal
3. Preserve numbers, units, brand names (PDF, API, URL, Instagram, Windows)
4. Proper Turkish grammar — vowel harmony, consonant mutation
5. Calculators→"Hesaplayıcı", Converters→"Dönüştürücü", Generators→"Oluşturucu"
6. Keep tool names punchy
7. Descriptions: 1-2 concise sentences`;

  const response = await deepseekCall([
    { role: "system", content: systemPrompt },
    { role: "user", content: inputList },
  ]);

  let jsonStr = response.trim();
  jsonStr = jsonStr.replace(/^```json?\s*\n?/, "").replace(/\n?```\s*$/, "");
  return JSON.parse(jsonStr);
}

async function main() {
  console.log("🇹🇷 ToolPazar DeepSeek Translation Engine v2 (resumable)\n");

  const source = fs.readFileSync(TOOLS_PATH, "utf-8");
  const tools = parseToolsWithPositions(source);
  console.log(`Parsed ${tools.length} tools`);

  let progress = loadProgress();
  console.log(`Progress: ${Object.keys(progress.titles).length} titles, ${Object.keys(progress.descriptions).length} descs already done`);

  // --- TITLES ---
  const pendingTitles = tools.filter(t =>
    needsTranslation(t.titleTr) && !progress.titles[t.slug]
  );
  if (pendingTitles.length > 0) {
    console.log(`\n📝 ${pendingTitles.length} titles remaining...`);
    const batches = Math.ceil(pendingTitles.length / BATCH_SIZE);
    for (let i = 0; i < pendingTitles.length; i += BATCH_SIZE) {
      const batch = pendingTitles.slice(i, i + BATCH_SIZE);
      const n = Math.floor(i / BATCH_SIZE) + 1;
      try {
        const translated = await translateBatch(batch, "title");
        let c = 0;
        for (const [idx, val] of Object.entries(translated)) {
          const tool = batch[parseInt(idx)];
          if (tool) { progress.titles[tool.slug] = val; c++; }
        }
        saveProgress(progress);
        console.log(`  Title ${n}/${batches} ✓ ${c} saved (${Object.keys(progress.titles).length} total)`);
      } catch (e) {
        console.log(`  Title ${n}/${batches} ✗ ${e.message.slice(0, 80)}`);
      }
      if (i + BATCH_SIZE < pendingTitles.length) await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }

  // --- DESCRIPTIONS ---
  const pendingDescs = tools.filter(t =>
    needsTranslation(t.descriptionTr) && !progress.descriptions[t.slug]
  );
  if (pendingDescs.length > 0) {
    console.log(`\n📝 ${pendingDescs.length} descriptions remaining...`);
    const batches = Math.ceil(pendingDescs.length / BATCH_SIZE);
    for (let i = 0; i < pendingDescs.length; i += BATCH_SIZE) {
      const batch = pendingDescs.slice(i, i + BATCH_SIZE);
      const n = Math.floor(i / BATCH_SIZE) + 1;
      try {
        const translated = await translateBatch(batch, "description");
        let c = 0;
        for (const [idx, val] of Object.entries(translated)) {
          const tool = batch[parseInt(idx)];
          if (tool) { progress.descriptions[tool.slug] = val; c++; }
        }
        saveProgress(progress);
        console.log(`  Desc ${n}/${batches} ✓ ${c} saved (${Object.keys(progress.descriptions).length} total)`);
      } catch (e) {
        console.log(`  Desc ${n}/${batches} ✗ ${e.message.slice(0, 80)}`);
      }
      if (i + BATCH_SIZE < pendingDescs.length) await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }

  // --- APPLY ALL ---
  console.log(`\n📝 Applying all translations to lib/tools.ts...`);
  let updated = source;
  let aT = 0, aD = 0;
  const refetch = parseToolsWithPositions(updated);

  // Apply in REVERSE order to avoid position shifts from insertions
  for (let i = refetch.length - 1; i >= 0; i--) {
    const tool = refetch[i];
    // Find current position of this tool in the (potentially already modified) updated source
    const slugIdx = updated.indexOf(`slug: "${tool.slug}"`);
    if (slugIdx === -1) continue;
    const blockEnd = updated.indexOf("\n  },", slugIdx) + 5;
    if (blockEnd < slugIdx) continue;

    if (progress.titles[tool.slug] && progress.titles[tool.slug] !== tool.titleTr) {
      const oldLine = `titleTr: "${tool.titleTr}"`;
      const safe = progress.titles[tool.slug].replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const newLine = `titleTr: "${safe}"`;
      const idx = updated.indexOf(oldLine, slugIdx);
      if (idx !== -1 && idx < blockEnd) {
        updated = updated.slice(0, idx) + newLine + updated.slice(idx + oldLine.length);
        aT++;
      }
    }
    if (progress.descriptions[tool.slug] && progress.descriptions[tool.slug] !== tool.descriptionTr) {
      const oldLine = `descriptionTr: "${tool.descriptionTr}"`;
      const safe = progress.descriptions[tool.slug].replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const newLine = `descriptionTr: "${safe}"`;
      const idx = updated.indexOf(oldLine, slugIdx);
      if (idx !== -1 && idx < blockEnd) {
        updated = updated.slice(0, idx) + newLine + updated.slice(idx + oldLine.length);
        aD++;
      }
    }
  }

  console.log(`  Titles applied: ${aT}`);
  console.log(`  Descriptions applied: ${aD}`);

  // Backup
  const backupPath = TOOLS_PATH.replace(".ts", ".backup-2026-05-09.ts");
  if (!fs.existsSync(backupPath)) fs.writeFileSync(backupPath, source, "utf-8");

  // Write
  fs.writeFileSync(TOOLS_PATH, updated, "utf-8");
  console.log(`  ✓ lib/tools.ts updated`);

  // Verify
  const verify = parseToolsWithPositions(updated);
  const trT = verify.filter(t => TR_CHARS.test(t.titleTr));
  const trD = verify.filter(t => TR_CHARS.test(t.descriptionTr));
  console.log(`\n🔍 Verification:`);
  console.log(`  Turkish titles:    ${trT.length}/${verify.length} (${Math.round(trT.length/verify.length*100)}%)`);
  console.log(`  Turkish descs:     ${trD.length}/${verify.length} (${Math.round(trD.length/verify.length*100)}%)`);
  console.log(`  Still English titles: ${verify.length - trT.length}`);
  console.log(`  Still English descs:  ${verify.length - trD.length}`);

  // Clean up progress on success
  if (trT.length === verify.length && trD.length === verify.length) {
    fs.unlinkSync(PROGRESS_PATH);
    console.log(`\n🎉 ALL translations complete! Progress file deleted.`);
  }
}

main().catch(err => {
  console.error("💥", err.message);
  process.exit(1);
});
