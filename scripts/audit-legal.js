const fs = require("fs");
const tools = fs.readFileSync("lib/tools.ts", "utf-8");
const slugRegex = /slug:\s*"([^\"]+)"/g;
const slugs = [];
let m;
while ((m = slugRegex.exec(tools)) !== null) slugs.push(m[1]);

console.log("=== STALKING/HARASSMENT TOOLS ===");
slugs.filter(s => s.match(/stalk|track-person|phone-lookup|people-search|background-check|dox|person.*finder|reverse.*phone|reverse.*email|spy|surveil|hidden.*camera/i)).forEach(s => console.log("  ", s));

console.log("\n=== GENERATORS (check for fraudulent docs) ===");
slugs.filter(s => s.match(/receipt|paystub|check-stub|w2-|tax-form|bank-statement|utility-bill|id-card|driver.*license.*gen/i)).forEach(s => console.log("  ", s));

console.log("\n=== PREDICTIVE/FORTUNE (gambling-adjacent) ===");
slugs.filter(s => s.match(/fortune|tarot|astrology|palm-reading|psychic|horoscope|numerology|dream.*interpret/i)).forEach(s => console.log("  ", s));

console.log("\n=== FIAT TOOLS (checking invoice/receipt generators) ===");
slugs.filter(s => s.match(/invoice|billing/i)).forEach(s => console.log("  ", s));

console.log("\n=== BODY/DIET (eating disorder risks - pro-ana) ===");
slugs.filter(s => s.match(/anorex|bulim|pro-ana|thinspo|thinspiration|fasting.*extreme/i)).forEach(s => console.log("  ", s));
