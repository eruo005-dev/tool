/**
 * split-translate.js — Translate large guide files by splitting intro/body sections
 */
const fs = require("fs");
const API_KEY = "sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const dir = "C:/Users/eruo0/Desktop/project/toolpazar/content/guides";

const files = [
  "json-format-rules-every-developer-should-know.tsx",
  "how-to-set-up-a-hyperspace-pod.tsx",
];

async function translateChunk(text, label) {
  const resp = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + API_KEY },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Translate this React JSX content from English to Turkish. Translate ONLY English text. Keep ALL JSX tags EXACTLY. No markdown, no code fences. Output ONLY the translated JSX." },
        { role: "user", content: text }
      ],
      temperature: 0.2,
      max_tokens: 8000,
    }),
  });
  const data = await resp.json();
  let translated = data.choices[0].message.content;
  translated = translated.replace(/^```[a-z]*\s*\n?/i, "").replace(/\n?```\s*$/, "").trim();
  console.log("  " + label + ": " + translated.length + " chars");
  return translated;
}

async function splitTranslate(file) {
  const content = fs.readFileSync(dir + "/" + file, "utf-8");
  console.log("\n" + file + ": " + content.length + " chars");
  
  // Split at "export const body"
  const bodyIdx = content.indexOf("\nexport const body");
  if (bodyIdx === -1) {
    console.log("  No body export found");
    return;
  }
  
  const introPart = content.slice(0, bodyIdx).trim();
  const bodyPart = content.slice(bodyIdx).trim();
  
  console.log("  Intro: " + introPart.length + " chars, Body: " + bodyPart.length + " chars");
  
  // Translate body in 3 parts: first half, second half, closing tags
  // Find the body JSX content (after =)
  const bodyStart = bodyPart.indexOf("<>");
  if (bodyStart === -1) {
    console.log("  No fragment found in body");
    return;
  }
  
  const preamble = bodyPart.slice(0, bodyStart + 2); // up to and including <>
  
  // Find closing </>
  const bodyEnd = bodyPart.lastIndexOf("</>");
  let bodyContent = bodyPart.slice(bodyStart + 2, bodyEnd).trim();
  const closing = bodyEnd >= 0 ? bodyPart.slice(bodyEnd) : "";
  
  console.log("  Body content: " + bodyContent.length + " chars");
  
  // If body content is too long, split into halves by <h2> tags
  let half1, half2;
  const h2Matches = [...bodyContent.matchAll(/<h2 /g)];
  
  if (h2Matches.length >= 3) {
    const mid = h2Matches[Math.floor(h2Matches.length / 2)].index;
    half1 = bodyContent.slice(0, mid);
    half2 = bodyContent.slice(mid);
    console.log("  Split at h2 #" + Math.floor(h2Matches.length / 2));
  } else {
    // Split roughly in half
    const mid = Math.floor(bodyContent.length / 2);
    half1 = bodyContent.slice(0, mid);
    half2 = bodyContent.slice(mid);
    console.log("  Split at char " + mid);
  }
  
  // Translate intro
  const trIntro = await translateChunk(introPart, "intro");
  
  // Translate body part 1
  const trBody1 = await translateChunk(half1, "body1");
  
  // Translate body part 2  
  const trBody2 = await translateChunk(half2, "body2");
  
  // Reassemble
  const result = trIntro + "\n\n" + 
    "export const body: ReactElement = (\n  <>\n" + 
    trBody1 + "\n" + trBody2 + "\n" +
    "  </>\n);";
  
  fs.writeFileSync(dir + "/" + file, result, "utf-8");
  console.log("  Result: " + result.length + " chars — written!");
}

async function main() {
  for (const file of files) {
    try { await splitTranslate(file); } catch(e) { console.log("  FAILED:", file, e.message); }
  }
  console.log("\nAll done!");
}

main();
