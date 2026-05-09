const fs = require("fs");
const dir = "C:/Users/eruo0/Desktop/project/teknoarac/content/guides";
const FTA = "C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";

const files = [
  "ai-consulting-cost-and-roi-2026.tsx", "ai-tools-for-personal-finance-2026.tsx",
  "common-file-conversion-questions.tsx", "devops-vs-developer-tools-career-paths.tsx",
  "hire-ai-consultant-vs-build-in-house.tsx", "should-i-build-developer-tools.tsx",
  "sourcing-candidates-without-linkedin-recruiter.tsx",
];

let fixed = 0;
for (const f of files) {
  const orig = fs.readFileSync(dir + "/" + f, "utf-8");
  // Remove hallucinated import lines that conflict with inline exports
  let c = orig.replace(/^import\s*\{[^}]+\}\s*from\s*['"][^'"]+['"];?\s*\n/gm, "");
  // Fix double blank lines from removed imports
  c = c.replace(/\n{3,}/g, "\n\n");
  if (c !== orig) {
    fs.writeFileSync(dir + "/" + f, c, "utf-8");
    fixed++;
    console.log("Fixed:", f);
  }
}

// Fix json-format-rules - missing ReactElement import
const jfr = dir + "/json-format-rules-every-developer-should-know.tsx";
let jc = fs.readFileSync(jfr, "utf-8");
if (!jc.startsWith("import ")) {
  jc = 'import React, { ReactElement } from "react";\n' + jc;
  fs.writeFileSync(jfr, jc, "utf-8");
  fixed++;
  console.log("Fixed: json-format-rules-every-developer-should-know.tsx (added React import)");
}

// Fix registry.tsx errors: restore from FTA since the import references changed
const reg = dir + "/registry.tsx";
const regFTA = FTA + "/registry.tsx";
if (fs.existsSync(regFTA)) {
  fs.writeFileSync(reg, fs.readFileSync(regFTA, "utf-8"), "utf-8");
  console.log("Fixed: registry.tsx (restored from FTA)");
  fixed++;
}

console.log("Fixed " + fixed + " files");
