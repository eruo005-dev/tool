const fs = require("fs");
const tools = fs.readFileSync("lib/tools.ts", "utf-8");

// Extract all titleTr and descriptionTr
const titleRegex = /titleTr:\s*"([^"]+)"/g;
const descRegex = /descriptionTr:\s*"([^"]+)"/g;

const titles = [];
const descs = [];
let m;
while ((m = titleRegex.exec(tools)) !== null) titles.push(m[1]);
while ((m = descRegex.exec(tools)) !== null) descs.push(m[1]);

console.log("=== MISSING TURKISH CHARACTERS (ı, İ, ş, Ş, ğ, Ğ, ü, Ü, ö, Ö, ç, Ç) ===");
// Check for English-specific chars where Turkish should be
// 'i' (without dot) where 'ı' should be, 'I' where 'İ' should be, etc.

const titleIssues = [];
const descIssues = [];

// Common Turkish patterns that suggest English-imported text
// Words that should have Turkish characters but don't
titles.forEach((t, i) => {
  // Check for "i" where "ı" should be (common in machine translations)
  // Words like "hesap" but "hesaplama" - check for 'i' 
  // Actually this is hard to do programmatically. Let me look for specific patterns.
  
  // Check for English words that should be translated
  if (/\b(Convert|Convertor|Calculator|Generator|Counter|Timer|Download|Upload|Finder|Checker|Viewer|Creator|Maker|Editor|Tracker|Extractor|Remover|Splitter|Merger|Encoder|Decoder|Formatter|Validator|Tester|Analyzer|Scanner|Reader|Writer|Builder|Composer|Player|Notepad|Cheatsheet|Sandbox|Playground|Demo|Tutorial|Guide|Tool|Widget|Plugin|Extension|Add-on)\b/.test(t)) {
    titleIssues.push(`[ENGLISH] "${t}"`);
  }
  
  // Check for i/İ issues - words that should have ı but have i
  // Common ones: "hesaplama" has 'i' but should be 'ı'
  if (/hesapi|hesaplama|hesaplay|sayaci|sayaci|olustur|goster|bulucu|zamanlayici|zamanlayici|takvim|takvim|araci|araci/.test(t)) {
    titleIssues.push(`[i/ı] "${t}"`);
  }
});

descs.forEach((d, i) => {
  if (/\b(Convert|Convertor|Calculator|Generator|Counter|Timer|Download|Upload|Finder|Checker|Viewer|Creator|Maker|Editor|Tracker|Extractor|Remover|Splitter|Merger|Encoder|Decoder|Formatter|Validator|Tester|Analyzer|Scanner|Reader|Writer|Builder|Composer|Player|Notepad|Cheatsheet|Sandbox|Playground|Demo|Tutorial|Guide|Tool|Widget|Plugin|Extension|Add-on)\b/.test(d)) {
    descIssues.push(`[ENGLISH] "${d}"`);
  }
  if (/hesapi|hesaplama|hesaplay|sayaci|sayaci|olustur|goster|bulucu|zamanlayici|zamanlayici/.test(d)) {
    descIssues.push(`[i/ı] "${d}"`);
  }
});

if (titleIssues.length > 0) {
  console.log("TITLES:", titleIssues.length);
  titleIssues.slice(0, 30).forEach(t => console.log(" ", t));
}

if (descIssues.length > 0) {
  console.log("DESCRIPTIONS:", descIssues.length);
  descIssues.slice(0, 30).forEach(d => console.log(" ", d));
}

console.log("\n=== DESCRIPTIONS WITH POTENTIAL AWKWARD PHRASING ===");
// Look for descriptions that seem machine-translated
descs.forEach((d, i) => {
  // Very short descriptions (likely incomplete translations)
  if (d.length < 20) {
    console.log(`[SHORT] "${d}"`);
  }
  // Ends with period? (common in English but often dropped in Turkish meta)
  if (!d.endsWith(".") && d.length > 10) {
    // This is actually fine for metadata, but let's flag unusually formatted ones
  }
});

console.log("\n=== CHECKING FOR 'i' INSTEAD OF 'ı' IN COMMON WORDS ===");
const allText = titles.join(" ") + " " + descs.join(" ");
// Turkish words that MUST have ı (not i)
const mustHaveIWithoutDot = [
  "açıklama", "açıklayıcı", "adım", "ağırlık", "akış", "alış", "alışveriş", 
  "altı", "anlamlı", "aralık", "asıl", "atış", "atıştırmalık", "aydınlatma",
  "açı", "açılış", "ağır", "ağrı", "akıl", "alın", "alışkanlık", "alıştırma",
  "altın", "anı", "anlatım", "aracılığıyla", "artık", "aslında", "atık", "aydınlık",
  "aylık", "ayrıcalık", "ayrılık", "azınlık", "bağımlılık", "bağır", "bağış",
  "bağımsız", "bakım", "bakış", "baskı", "basım", "basınç", "basit", "batı",
  "başarı", "başlık", "bazı", "belirli", "bırak", "bilgi", "bilim", "bitiş",
  "bıçak", "çalış", "çarpı", "çatışma", "çık", "çıkart", "çıkar", "çıktı",
  "çılgın", "çırpı", "çizgi", "çoğalt", "dağıt", "dalış", "darıl", "dayanışma",
  "düzenli"
].join("|");

// Actually this regex approach is unreliable. Let me instead look for 
// obviously wrong patterns by checking slug-keyword mismatch
console.log("=== CHECKING FOR OBVIOUS MISTAKES IN DESCRIPTIONS ===");
descs.forEach((d, i) => {
  // Check for double spaces
  if (/\s{2,}/.test(d)) console.log(`[DOUBLE SPACE] "${d}"`);
  // Check for missing space after period
  if (/\.[A-Z]/.test(d)) console.log(`[MISSING SPACE] "${d}"`);
  // Check for trailing commas
  if (/,$/.test(d)) console.log(`[TRAILING COMMA] "${d}"`);
  // Check for English-only text mixed in (words that are clearly English)
  if (/\bthe\b|\band\b|\bfor\b|\bwith\b|\byou\b|\byour\b|\bcan\b|\buse\b|\bthis\b|\bthat\b|\bfrom\b|\bits\b|\ball\b|\bany\b|\bhas\b|\bhave\b|\bwill\b|\bwhen\b|\bhow\b|\bmake\b|\bjust\b|\bget\b|\bour\b|\btool\b|\btools\b/.test(d)) {
    // But filter out legitimately English terms like "API", "JSON", "PDF", "URL", etc.
    const cleaned = d.replace(/\b(API|JSON|PDF|URL|HTML|CSS|SQL|HTTP|HTTPS|FTP|SSH|DNS|XML|YAML|CSV|SVG|PNG|JPG|JPEG|GIF|BMP|TIFF|WEBP|HEIC|MP3|MP4|AVI|MOV|MKV|FLV|WAV|OGG|FLAC|AAC|EXE|DMG|ZIP|RAR|TAR|GZ|7Z|ISO|RSS|CDN|SaaS|UI|UX|CLI|API|SDK|IDE|CI|CD|SSH|GPU|CPU|RAM|SSD|HDD|OS|TCP|IP|LAN|WAN|VPN|AWS|GCP|AI|ML|NLP|LLM|GPT|SEO|ROI|DCA|NFT|BMR|BMI|TDEE|HRV|VR|AR|MR|XR|FPS|DPS|XP|NPC|PvP|PvE|BYO[A-Z]?|DIY|KYC|AML|PGP|JWT|UUID|OTP|MFA|2FA|QR|OCR|EXIF|EXR|MSE|MAE|RMSE|RMSD|BPM|RPE|HIIT|EMOM|AMRAP|WOD|PR|PB|RM|1RM|DOMS|RHR|HRmax|VO2|GPS|RPM|MPG|kWh|dB|hz|kg|lbs|oz|fl|ml|gal|qt|pt|cup|cm|mm|km|mi|ft|in|yd|mph|kph|mps|psi|bar|atm|pa|kpa)/g, "");
    // After cleaning, check if any real English words remain
    if (/\bthe\b|\band\b|\bfor\b|\bwith\b|\byou\b|\byour\b|\bcan\b|\buse\b|\bthis\b|\bfrom\b|\byour\b/.test(cleaned)) {
      console.log(`[ENGLISH MIX] "${d}"`);
    }
  }
});
