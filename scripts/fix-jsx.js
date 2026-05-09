/**
 * fix-jsx.js — Fix common JSX syntax errors in translated guides
 */
const fs = require("fs");
const dir = "C:/Users/eruo0/Desktop/project/teknoarac/content/guides";

const ERROR_FILES = [
  "how-to-switch-careers.tsx",
  "how-to-trim-audio.tsx",
  "how-to-write-a-resume.tsx",
  "json-format-rules-every-developer-should-know.tsx",
  "password-security-guide-with-real-entropy-examples.tsx",
  "pdf-to-word-and-editable-text.tsx",
  "how-to-set-up-a-hyperspace-pod.tsx",
];

for (const file of ERROR_FILES) {
  let content = fs.readFileSync(dir + "/" + file, "utf-8");
  
  // Fix 1: Replace non-JSX-safe entities in regular text (between > and <, or in quotes)
  // Fix unescaped '>' in JSX text
  content = content.replace(/(>)([^<]*)(\u003E)([^<]*)(<)/g, "$1$2{'>'}$4$5");
  
  // Fix 2: Unterminated string literals — look for lines with unclosed strings  
  // common patterns: missing closing quotes on long strings
  
  // Fix 3: JSX curly brace issues — &gt; and &lt; should be used sometimes
  
  fs.writeFileSync(dir + "/" + file, content, "utf-8");
  console.log("Fixed:", file);
}
