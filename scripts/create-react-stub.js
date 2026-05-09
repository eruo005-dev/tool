const fs = require("fs");
const reg = fs.readFileSync("C:/Users/eruo0/Desktop/project/teknoarac/content/guides/registry.tsx", "utf-8");

// Find the react import and its usage
const importMatch = reg.match(/import (\w+) from ['"]\.\/react['"];?/);
const varName = importMatch ? importMatch[1] : null;
console.log("Import var name:", varName);

// Find where this variable is used
if (varName) {
  const uses = [...reg.matchAll(new RegExp(varName + "\\.(\\w+)", "g"))];
  console.log("Uses", uses.length, "fields:", uses.map(u => u[1]));

  // Create a minimal stub file with required exports
  const fields = uses.map(u => u[1]);
  const uniqueFields = [...new Set(fields)];
  
  let stub = `import React, { ReactElement } from "react";\n\n`;
  
  for (const field of uniqueFields) {
    if (field === "intro") {
      stub += `export const intro: ReactElement = (\n  <div>\n    <p>React hakkında bilmeniz gerekenler — component'ler, state yönetimi ve en iyi pratikler.</p>\n  </div>\n);\n\n`;
    } else if (field === "toc") {
      stub += `export const toc: ReactElement = (\n  <ul>\n    <li>Temel Bilgiler</li>\n    <li>Hook'lar</li>\n    <li>State Yönetimi</li>\n    <li>Performans</li>\n  </ul>\n);\n\n`;
    } else if (field === "body") {
      stub += `export const body: ReactElement = (\n  <>\n    <h2>React Nedir?</h2>\n    <p>React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir. Meta tarafından geliştirilmektedir.</p>\n    <h2>Temel Kavramlar</h2>\n    <ul>\n      <li><strong>Component'ler:</strong> Yeniden kullanılabilir UI parçaları</li>\n      <li><strong>JSX:</strong> HTML benzeri sözdizimi</li>\n      <li><strong>Virtual DOM:</strong> Verimli render için sanal DOM</li>\n      <li><strong>Props:</strong> Component'e veri aktarımı</li>\n      <li><strong>State:</strong> Component içi durum yönetimi</li>\n    </ul>\n  </>\n);\n\n`;
    } else if (field === "faq") {
      stub += `export const faq: ReactElement = (\n  <>\n    <h3>React öğrenmek zor mu?</h3>\n    <p>JavaScript biliyorsanız, React'in temellerini birkaç haftada öğrenebilirsiniz.</p>\n    <h3>React ile Next.js arasındaki fark nedir?</h3>\n    <p>React bir kütüphane, Next.js ise React üzerine kurulu bir framework'tür.</p>\n  </>\n);\n\n`;
    } else if (field === "cta") {
      stub += `export const cta = {\n  label: "React component'leri oluşturmaya başlayın",\n  targetSlug: "json-formatter",\n};\n`;
    }
  }
  
  fs.writeFileSync("C:/Users/eruo0/Desktop/project/teknoarac/content/guides/react.tsx", stub, "utf-8");
  console.log("Created react.tsx stub with fields:", uniqueFields);
}
