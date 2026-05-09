/**
 * Fix remaining: JSON-LD, SW, redirects, counts
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// =====================================================
// PHASE 7: JSON-LD in layout.tsx
// =====================================================
let layoutContent = fs.readFileSync(path.join(ROOT, 'app', 'layout.tsx'), 'utf8');

const jsonLdScript = `
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TeknoAra\u00E7",
              url: "https://teknoarac.com",
              description: "T\u00FCrkiye'nin Dijital Ara\u00E7 Kutusu \u2014 \u00FCcretsiz \u00E7evrimi\u00E7i ara\u00E7lar, hesaplay\u0131c\u0131lar, d\u00F6n\u00FC\u015Ft\u00FCr\u00FCc\u00FCler ve oyunlar. Reklams\u0131z, kay\u0131ts\u0131z.",
              inLanguage: "tr",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://teknoarac.com/araclar?ara={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />`;

if (!layoutContent.includes('application/ld+json')) {
  layoutContent = layoutContent.replace(
    /(<html lang="tr">)/,
    `$1\n      <head>\n${jsonLdScript}\n      </head>`
  );
  fs.writeFileSync(path.join(ROOT, 'app', 'layout.tsx'), layoutContent);
  console.log('JSON-LD WebSite schema added to layout.tsx');
}

// =====================================================
// PHASE 10: Service Worker registration
// =====================================================
if (!layoutContent.includes('serviceWorker')) {
  layoutContent = layoutContent.replace(
    /(<\/body>)/,
    `    <script dangerouslySetInnerHTML={{ __html: \`if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }\` }} />\n  $1`
  );
  fs.writeFileSync(path.join(ROOT, 'app', 'layout.tsx'), layoutContent);
  console.log('Service worker registration added to layout');
}

// =====================================================
// PHASE 5: Add "Bugün Keşfet" popular tools section
// =====================================================
let homepage = fs.readFileSync(path.join(ROOT, 'app', 'page.tsx'), 'utf8');

if (!homepage.includes('Bugün Keşfet')) {
  const popularSection = `
      {/* Popular Quick Picks */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-tekno-text">
            🔥 Bugün Keşfet
          </h2>
          <Link href="/kategoriler" className="text-tekno-cyan font-medium text-sm hover:underline">
            Tüm Kategoriler →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tools.slice(0, 20).map((tool) => (
            <Link
              key={tool.slug}
              href={\`/araclar/\${tool.slug}\`}
              className="panel p-4 hover:border-tekno-cyan/40 hover:shadow-lg hover:shadow-cyan-500/5 transition group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg shrink-0">{tool.icon}</span>
                <div className="min-w-0">
                  <div className="font-medium text-sm text-tekno-text group-hover:text-tekno-cyan transition-colors truncate">{tool.titleTr}</div>
                  <div className="text-xs text-tekno-muted truncate">{tool.descriptionTr}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>`;
  
  homepage = homepage.replace(
    /(\/\* Font\/Text Tools)/,
    popularSection + '\n\n      $1'
  );
  fs.writeFileSync(path.join(ROOT, 'app', 'page.tsx'), homepage);
  console.log('Popular "Bugün Keşfet" section added to homepage');
}

// =====================================================
// Update tool count everywhere
// =====================================================
const toolsLib = fs.readFileSync(path.join(ROOT, 'lib', 'tools.ts'), 'utf8');
const countMatch = toolsLib.match(/export const tools: Tool\[\] = (\[[\s\S]*?\]);/);
let toolCount = 0;
if (countMatch) {
  toolCount = (countMatch[1].match(/\{\s*\n\s*slug:/g) || []).length;
}
console.log('Tool count from lib/tools.ts:', toolCount);

const siteFiles = [
  'app/layout.tsx', 'app/page.tsx', 'app/tools/page.tsx',
  'app/kategoriler/page.tsx', 'app/about/page.tsx'
];

siteFiles.forEach(f => {
  const fp = path.join(ROOT, f);
  if (!fs.existsSync(fp)) return;
  let c = fs.readFileSync(fp, 'utf8');
  c = c.replace(/771\+|772\+|770\+|769\+|755\+/g, toolCount + '+');
  c = c.replace(/\b771\b(?!\+)/g, String(toolCount));
  fs.writeFileSync(fp, c);
  console.log('  Updated count in:', f);
});

// =====================================================
// Add redirects to vercel.json
// =====================================================
const vercelConfig = {
  redirects: [
    { source: '/tools', destination: '/araclar', permanent: true },
    { source: '/tools/:slug', destination: '/araclar/:slug', permanent: true },
    { source: '/guides', destination: '/rehberler', permanent: true },
    { source: '/guides/:slug', destination: '/rehberler/:slug', permanent: true },
    { source: '/games', destination: '/oyunlar', permanent: true },
    { source: '/about', destination: '/hakkinda', permanent: true },
    { source: '/contact', destination: '/iletisim', permanent: true },
    { source: '/privacy', destination: '/gizlilik', permanent: true },
    { source: '/terms', destination: '/kullanim-sartlari', permanent: true },
    { source: '/cookies', destination: '/cerezler', permanent: true },
    { source: '/categories', destination: '/kategoriler', permanent: true },
  ]
};
fs.writeFileSync(path.join(ROOT, 'vercel.json'), JSON.stringify(vercelConfig, null, 2));
console.log('Redirects written to vercel.json');

console.log('\n=== Remaining manual steps ===');
console.log('  Translate 5 English guides via DeepSeek API');
console.log('  npm run build to verify');
console.log('  git push + vercel deploy');
