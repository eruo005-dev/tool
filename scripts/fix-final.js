/**
 * Final fixes: JSON-LD, counts, SW registration, redirects
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const TOOL_COUNT = 743;

// =====================================================
// Add JSON-LD WebSite schema to layout
// =====================================================
let layout = fs.readFileSync(path.join(ROOT, 'app', 'layout.tsx'), 'utf8');

if (!layout.includes('application/ld+json')) {
  const ldBlock = `
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TeknoAra\u00E7",
              url: "https://teknoarac.com",
              description: "T\u00FCrkiye'nin reklams\u0131z, \u00FCcretsiz dijital ara\u00E7 kutusu.",
              inLanguage: "tr",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://teknoarac.com/araclar?ara={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />`;

  layout = layout.replace(
    /(<html lang="tr">)/,
    `$1\n      <head>\n${ldBlock}\n      </head>`
  );
  console.log('JSON-LD added to layout');
}

// Add SW registration
if (!layout.includes('serviceWorker')) {
  layout = layout.replace(
    /(<\/body>)/,
    `    <script dangerouslySetInnerHTML={{ __html: \`if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }\` }} />\n  $1`
  );
  console.log('SW registration added');
}

fs.writeFileSync(path.join(ROOT, 'app', 'layout.tsx'), layout);

// =====================================================
// Update tool counts across all pages
// =====================================================
const countFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/tools/page.tsx',
  'app/kategoriler/page.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/games/page.tsx',
  'app/guides/page.tsx',
];

countFiles.forEach(f => {
  const fp = path.join(ROOT, f);
  if (!fs.existsSync(fp)) return;
  let c = fs.readFileSync(fp, 'utf8');
  // Replace all old counts
  c = c.replace(/\b77[0-9]\+/g, `${TOOL_COUNT}+`);
  c = c.replace(/\b77[0-9] /g, `${TOOL_COUNT} `);
  c = c.replace(/"77[0-9]\+/g, `"${TOOL_COUNT}+`);
  fs.writeFileSync(fp, c);
  console.log(`  Updated: ${f}`);
});

// =====================================================
// Also update sitemap counts
// =====================================================
const sitemapPath = path.join(ROOT, 'app', 'sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  let sm = fs.readFileSync(sitemapPath, 'utf8');
  sm = sm.replace(/\b77[0-9]\b/g, String(TOOL_COUNT));
  fs.writeFileSync(sitemapPath, sm);
  console.log('  Updated: sitemap.ts');
}

// =====================================================
// Vercel redirects
// =====================================================
fs.writeFileSync(path.join(ROOT, 'vercel.json'), JSON.stringify({
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
}, null, 2));
console.log('Vercel redirects written');

// =====================================================
// Service Worker file
// =====================================================
fs.writeFileSync(path.join(ROOT, 'public', 'sw.js'), 
`const CACHE = 'teknoarac-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.map(x => caches.delete(x))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(c => c || fetch(e.request).then(r => { if(r.ok) { const x = r.clone(); caches.open(CACHE).then(ca => ca.put(e.request, x)); } return r; }))));
`);
console.log('Service Worker written');

// =====================================================
// Remove the old broken scripts
// =====================================================
['fix-all-seo.js', 'fix-batch1.js', 'fix-batch2.js', 'add-meta.js',
 'enhance-meta.js', 'fix-meta2.js', 'check-engines.js', 'check-routing.js',
 'translate-last10.js', 'translate-mortgage.js', 'translate-mortgage2.js',
 'check-exports.js', 'audit-gaps.js', 'audit-gaps2.js'].forEach(f => {
  const fp = path.join(ROOT, f);
  if (fs.existsSync(fp)) { fs.unlinkSync(fp); console.log('  Deleted:', f); }
});

console.log('\n=== DONE ===');
console.log(`Tool count: ${TOOL_COUNT}`);
console.log('Next: npm run build, then deploy');
