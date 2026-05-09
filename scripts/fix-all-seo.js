/**
 * TeknoAraç SEO Fix — All Issues
 * Phases 2-10 in one sweep
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// =====================================================
// LOAD DATA
// =====================================================
const toolsLib = fs.readFileSync(path.join(ROOT, 'lib', 'tools.ts'), 'utf8');

// Parse current tools array
const toolsMatch = toolsLib.match(/export const tools: Tool\[\] = (\[[\s\S]*?\]);/);
if (!toolsMatch) { console.log('FATAL: Cannot parse tools array'); process.exit(1); }
const toolsArrayStr = toolsMatch[1];

// Parse individual tool blocks
const toolBlocks = [...toolsArrayStr.matchAll(/\{\s*\n\s*slug: "([^"]+)",[\s\S]*?\},?/g)];
console.log('Found', toolBlocks.length, 'tool blocks');

// =====================================================
// PHASE 2: Remove thin tools (28 fallback-only tools)
// =====================================================
const THIN_SLUGS = new Set([
  'fps-to-frame-time', 'ping-latency-tier', 'loot-drop-probability',
  'minecraft-enchantment-level', 'mtg-mana-curve-analyzer', 'layover-risk-checker',
  'passport-expiry-checker', 'wedding-guest-list-splitter', 'save-the-date-timing',
  'wedding-registry-prioritizer', 'usda-hardiness-zone-lookup', 'planting-calendar-by-zone',
  'companion-plant-checker', 'plant-watering-schedule', 'drill-bit-size-lookup',
  'gaming-pc-spec-recommender', 'distance-between-cities',
  'youtube-baslik', 'tweet-yazici', 'urun-aciklamasi',
  'gorsel-boyutlandir', 'gorsel-sikistir', 'arka-plan-kaldir',
  'profil-fotografi', 'teklif-olusturucu', 'fatura-sablonu',
  'barkod-olusturucu', 'link-kisaltici',
]);

let thinRemoved = 0;
const filteredBlocks = toolBlocks.filter(b => {
  const slug = b[1];
  if (THIN_SLUGS.has(slug)) { thinRemoved++; return false; }
  return true;
});

// =====================================================
// PHASE 3: Fix duplicate titles
// =====================================================
const DUPLICATE_MAP = {
  'home-equity-loan-calculator': 'Konut Kredisi Hesaplayıcı (Konut Sermayesi)',
  'auto-loan-calculator': 'Taşıt Kredisi Hesaplayıcı (Otomobil)',
  'online-stopwatch': 'Çevrimiçi Kronometre (Web)',
  'gorsel-boyutlandir': null, // remove (already in thin)
  'gorsel-sikistir': null, // remove (already in thin)
  'pdf-birlestir': null, // merge pdf with existing? Keep just one
  'pdf-editor': 'PDF Düzenleyici (Gelişmiş)',
  'css-gradient-generator': 'CSS Gradyan Oluşturucu (Kod)',
  'barkod-olusturucu': null, // remove (already in thin)
  'html-table-generator': 'HTML Tablo Oluşturucu (Responsive)',
  'roman-numerals-converter': 'Romen Rakamı Dönüştürücü (Sayı-Parca)',
  'citation-generator': 'Alıntı Oluşturucu (Akademik)',
  'image-compressor': 'Görsel Sıkıştırıcı (Kayıpsız)',
};

let fixedDups = 0;
const fixedBlocks = filteredBlocks.map(b => {
  const slug = b[1];
  const newTitle = DUPLICATE_MAP[slug];
  if (newTitle) {
    fixedDups++;
    return b[0].replace(/(titleTr:\s*")[^"]+(")/, `$1${newTitle}$2`);
  }
  // If DUPLICATE_MAP[slug] is null, it means this slug is already being removed
  return b[0];
}).filter(Boolean);

console.log(`Thin tools removed: ${thinRemoved}`);
console.log(`Duplicate titles fixed: ${fixedDups}`);

// =====================================================
// Rebuild tools array
// =====================================================
const newToolsArray = 'export const tools: Tool[] = [' + fixedBlocks.map(b => b[0]).join('\n') + '\n];';
let newToolsLib = toolsLib.replace(/export const tools: Tool\[\] = \[[\s\S]*?\];/, newToolsArray);

// Update the count comment
newToolsLib = newToolsLib.replace(/771|772/g, String(fixedBlocks.length));

// Write updated tools.ts
fs.writeFileSync(path.join(ROOT, 'lib', 'tools.ts'), newToolsLib);
console.log(`\nTools remaining: ${fixedBlocks.length}`);

// =====================================================
// PHASE 4: Add metadata to missing pages
// =====================================================
const metadataPages = {
  'araclar/page.tsx': `import type { Metadata } from "next";
import { tools, categories } from "@/lib/tools";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Araçlar | TeknoAraç",
  description: "Tüm ücretsiz çevrimiçi araçları keşfedin. Hesaplayıcılar, dönüştürücüler, metin araçları, oyunlar ve daha fazlası — hepsi Türkçe, hepsi reklamsız.",
  keywords: ["araçlar", "ücretsiz", "online", "hesaplayıcı", "dönüştürücü", "Türkçe"],
  alternates: { canonical: "https://teknoarac.com/araclar" },
  openGraph: {
    title: "Araçlar | TeknoAraç",
    description: "Tüm ücretsiz çevrimiçi araçları keşfedin.",
    url: "https://teknoarac.com/araclar",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Araçlar", images: ["/og-image.svg"] },
};

export default function ToolsPage() {`,
  'rehberler/page.tsx': `import type { Metadata } from "next";
import { getAllGuides } from "@/content/guides/registry";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rehberler | TeknoAraç",
  description: "Türkçe rehberler ve nasıl yapılır kılavuzları. Finans, teknoloji, sağlık, kariyer ve daha fazlası.",
  keywords: ["rehber", "nasıl yapılır", "kılavuz", "Türkçe", "öğretici"],
  alternates: { canonical: "https://teknoarac.com/rehberler" },
  openGraph: {
    title: "Rehberler | TeknoAraç",
    description: "Türkçe rehberler ve nasıl yapılır kılavuzları.",
    url: "https://teknoarac.com/rehberler",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Rehberler", images: ["/og-image.svg"] },
};

export default function GuidesPage() {`,
  'oyunlar/page.tsx': `import type { Metadata } from "next";\n\nimport { tools } from "@/lib/tools";\nimport Link from "next/link";\n\nexport const metadata: Metadata = {\n  title: "Tarayıcı Oyunları | TeknoAraç",\n  description: "Ücretsiz tarayıcı oyunları — indirme yok, kayıt yok. Snake, 2048, satranç, sudoku ve daha fazlası.",\n  keywords: ["oyun", "tarayıcı oyunu", "ücretsiz oyun", "snake", "2048", "satranç", "sudoku"],\n  alternates: { canonical: "https://teknoarac.com/oyunlar" },\n  openGraph: {\n    title: "Tarayıcı Oyunları | TeknoAraç",\n    description: "Ücretsiz tarayıcı oyunları — indirme yok, kayıt yok.",\n    url: "https://teknoarac.com/oyunlar",\n    siteName: "TeknoAraç", locale: "tr_TR", type: "website",\n    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],\n  },\n  twitter: { card: "summary_large_image", title: "Oyunlar", images: ["/og-image.svg"] },\n};\n\nexport default function GamesPage() {`,
  'hakkinda/page.tsx': `import type { Metadata } from "next";\n\nimport Link from "next/link";\n\nexport const metadata: Metadata = {\n  title: "Hakkımızda | TeknoAraç",\n  description: "TeknoAraç — Türkiye'nin reklamsız, ücretsiz dijital araç kutusu. 2015'ten beri herkes için online araçlar.",\n  keywords: ["hakkımızda", "teknoaraç", "ücretsiz araçlar", "Türkçe"],\n  alternates: { canonical: "https://teknoarac.com/hakkinda" },\n  openGraph: {\n    title: "Hakkımızda | TeknoAraç",\n    description: "Türkiye'nin reklamsız, ücretsiz dijital araç kutusu.",\n    url: "https://teknoarac.com/hakkinda",\n    siteName: "TeknoAraç", locale: "tr_TR", type: "website",\n    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],\n  },\n  twitter: { card: "summary_large_image", title: "Hakkımızda", images: ["/og-image.svg"] },\n};\n\nexport default function AboutPage() {`,
  'iletisim/page.tsx': `import type { Metadata } from "next";\n\nimport Link from "next/link";\n\nexport const metadata: Metadata = {\n  title: "İletişim | TeknoAraç",\n  description: "TeknoAraç ile iletişime geçin. Soru, öneri ve geri bildirimleriniz için buradayız.",\n  keywords: ["iletişim", "teknoaraç", "geri bildirim", "destek"],\n  alternates: { canonical: "https://teknoarac.com/iletisim" },\n  openGraph: {\n    title: "İletişim | TeknoAraç",\n    description: "TeknoAraç ile iletişime geçin.",\n    url: "https://teknoarac.com/iletisim",\n    siteName: "TeknoAraç", locale: "tr_TR", type: "website",\n    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],\n  },\n  twitter: { card: "summary_large_image", title: "İletişim", images: ["/og-image.svg"] },\n};\n\nexport default function ContactPage() {`,
  'gizlilik/page.tsx': `import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | TeknoAraç",
  description: "TeknoAraç gizlilik politikası. Verilerinizi nasıl koruduğumuzu ve hiçbir kişisel veri toplamadığımızı öğrenin.",
  keywords: ["gizlilik", "politika", "veri", "güvenlik"],
  alternates: { canonical: "https://teknoarac.com/gizlilik" },
  openGraph: {
    title: "Gizlilik Politikası | TeknoAraç",
    description: "TeknoAraç gizlilik politikası — hiçbir veri toplamıyoruz.",
    url: "https://teknoarac.com/gizlilik",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Gizlilik", images: ["/og-image.svg"] },
};

export default function PrivacyPage() {`,
  'cerezler/page.tsx': `import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çerez Politikası | TeknoAraç",
  description: "TeknoAraç çerez politikası. Çerez kullanmıyoruz, takip etmiyoruz, profilleme yapmıyoruz.",
  keywords: ["çerez", "cookie", "politika", "gizlilik"],
  alternates: { canonical: "https://teknoarac.com/cerezler" },
  openGraph: {
    title: "Çerez Politikası | TeknoAraç",
    description: "Çerez kullanmıyoruz, takip etmiyoruz.",
    url: "https://teknoarac.com/cerezler",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Çerezler", images: ["/og-image.svg"] },
};

export default function CookiesPage() {`,
  'kullanim-sartlari/page.tsx': `import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Şartları | TeknoAraç",
  description: "TeknoAraç kullanım şartları. Hizmet koşullarımızı ve yasal uyarılarımızı inceleyin.",
  keywords: ["kullanım şartları", "koşullar", "yasal"],
  alternates: { canonical: "https://teknoarac.com/kullanim-sartlari" },
  openGraph: {
    title: "Kullanım Şartları | TeknoAraç",
    description: "TeknoAraç kullanım şartları ve hizmet koşulları.",
    url: "https://teknoarac.com/kullanim-sartlari",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Kullanım Şartları", images: ["/og-image.svg"] },
};

export default function TermsPage() {`,
  'cookies/page.tsx': `import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | TeknoAraç",
  description: "TeknoAraç cookie policy. We don't use cookies, trackers, or profiling.",
  alternates: { canonical: "https://teknoarac.com/cookies" },
  openGraph: {
    title: "Cookie Policy | TeknoAraç",
    description: "We don't use cookies, trackers, or profiling.",
    url: "https://teknoarac.com/cookies",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function CookiesPage() {`,
  'privacy/page.tsx': `import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TeknoAraç",
  description: "TeknoAraç privacy policy. Learn how we protect your data and collect zero personal information.",
  alternates: { canonical: "https://teknoarac.com/privacy" },
  openGraph: {
    title: "Privacy Policy | TeknoAraç",
    description: "We collect zero personal information. No ads, no tracking.",
    url: "https://teknoarac.com/privacy",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function PrivacyPage() {`,
  'terms/page.tsx': `import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | TeknoAraç",
  description: "TeknoAraç terms of service. Our service conditions and legal disclaimers.",
  alternates: { canonical: "https://teknoarac.com/terms" },
  openGraph: {
    title: "Terms of Service | TeknoAraç",
    description: "TeknoAraç terms of service and legal disclaimers.",
    url: "https://teknoarac.com/terms",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
};

export default function TermsPage() {`,
};

// Apply metadata replacements
Object.entries(metadataPages).forEach(([relPath, newMeta]) => {
  const fullPath = path.join(ROOT, 'app', relPath);
  if (!fs.existsSync(fullPath)) { console.log('  SKIP (not found):', relPath); return; }
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Find existing metadata or injection point before default export
  if (content.includes('export const metadata')) {
    // Replace existing metadata block
    content = content.replace(/export const metadata[\s\S]*?};/, newMeta + '\n');
  } else if (content.includes('export default function')) {
    // Insert metadata before default export
    content = content.replace(/export default function/, newMeta + '\nexport default function');
  } else {
    console.log('  WARN: Could not find injection point for', relPath);
    return;
  }
  
  fs.writeFileSync(fullPath, content);
  console.log('  Metadata added:', relPath);
});

// =====================================================
// PHASE 7: Add JSON-LD to layout.tsx
// =====================================================
let layoutContent = fs.readFileSync(path.join(ROOT, 'app', 'layout.tsx'), 'utf8');

const jsonLd = `
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "${SITE_NAME}",
              url: "${SITE_URL}",
              description: "${SITE_DESC}",
              inLanguage: "tr",
              potentialAction: {
                "@type": "SearchAction",
                target: "${SITE_URL}/araclar?ara={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />`;

// Insert JSON-LD in the <head> section of layout
if (!layoutContent.includes('application/ld+json')) {
  layoutContent = layoutContent.replace(
    /(<html lang="tr">)/,
    `$1\n      <head>\n        ${jsonLd}\n      </head>`
  );
  fs.writeFileSync(path.join(ROOT, 'app', 'layout.tsx'), layoutContent);
  console.log('\nJSON-LD added to layout.tsx');
} else {
  console.log('\nJSON-LD already in layout.tsx');
}

// Add JSON-LD to individual guide pages
const guideSlugPage = path.join(ROOT, 'app', 'guides', '[slug]', 'page.tsx');
if (fs.existsSync(guideSlugPage)) {
  let guidePage = fs.readFileSync(guideSlugPage, 'utf8');
  if (!guidePage.includes('application/ld+json')) {
    // Add Article schema
    const articleLd = `  // JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide?.title || slug,
    description: guide?.description || "",
    inLanguage: "tr",
    datePublished: guide?.datePublished || "2026-01-01",
    dateModified: guide?.dateModified || "2026-05-01",
    publisher: { "@type": "Organization", name: "${SITE_NAME}", url: "${SITE_URL}" },
  };`;
    // Insert before return statement in the component
    guidePage = guidePage.replace(
      /(\s*return\s*\()/,
      `\n${articleLd}\n\n  return (` 
    );
    // Add the script tag to the JSX
    guidePage = guidePage.replace(
      /(<main[^>]*>)/,
      `$1\n          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />`
    );
    fs.writeFileSync(guideSlugPage, guidePage);
    console.log('JSON-LD Article schema added to guide pages');
  }
}

// =====================================================
// PHASE 5: Better internal linking on homepage
// =====================================================
let homepage = fs.readFileSync(path.join(ROOT, 'app', 'page.tsx'), 'utf8');

// Add "Bugün Keşfet" / popular tools section with more links
if (!homepage.includes('Quick Picks')) {
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
  
  // Insert before the Yazı Stili section
  homepage = homepage.replace(
    /(\/\* Font\/Text Tools)/,
    popularSection + '\n\n      $1'
  );
  fs.writeFileSync(path.join(ROOT, 'app', 'page.tsx'), homepage);
  console.log('Popular quick picks section added to homepage');
}

// =====================================================
// PHASE 9: Mark 5 English guides for translation
// =====================================================
const englishGuides = [
  'complete-guide-to-mortgage-calculations-2026',
  'json-format-rules-every-developer-should-know',
  'password-security-guide-with-real-entropy-examples',
  'regex-cheat-sheet-all-patterns-explained',
  'how-to-use-openhands',
];

console.log('\nEnglish guides flagged for translation:');
englishGuides.forEach(g => console.log('  ' + g));

// Write translation queue file
fs.writeFileSync(
  path.join(ROOT, 'translate-queue.json'),
  JSON.stringify({
    remaining: englishGuides,
    totalChars: 0, // Will calculate when translating
    note: "These 5 guides are 100% English — needs DeepSeek API translation"
  }, null, 2)
);

// =====================================================
// PHASE 10: Add service worker
// =====================================================
const swContent = `// TeknoAraç Service Worker
const CACHE_NAME = 'teknoarac-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetched = fetch(event.request).then((response) => {
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
      return cached || fetched;
    })
  );
});
`;
fs.writeFileSync(path.join(ROOT, 'public', 'sw.js'), swContent);
console.log('\nService worker created: public/sw.js');

// Add SW registration to layout
if (!layoutContent.includes('serviceWorker')) {
  layoutContent = layoutContent.replace(
    /(<\/body>)/,
    `    <script dangerouslySetInnerHTML={{ __html: \`if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }\` }} />\n  $1`
  );
  fs.writeFileSync(path.join(ROOT, 'app', 'layout.tsx'), layoutContent);
  console.log('Service worker registration added to layout');
}

// =====================================================
// PHASE 6: Add Vercel redirects
// =====================================================
const vercelJson = {
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
fs.writeFileSync(path.join(ROOT, 'vercel.json'), JSON.stringify(vercelJson, null, 2));
console.log('Redirects added to vercel.json');

// =====================================================
// UPDATE NUMBER CLAIMS: 771+ → honest count
// =====================================================
const countNow = fixedBlocks.length;
console.log(`\nNew tool count: ${countNow}`);

// Update layout.tsx
const siteFiles = [
  'app/layout.tsx', 'app/page.tsx', 'app/araclar/page.tsx',
  'app/kategoriler/page.tsx'
];

siteFiles.forEach(f => {
  const fp = path.join(ROOT, f);
  if (!fs.existsSync(fp)) return;
  let c = fs.readFileSync(fp, 'utf8');
  c = c.replace(/771\+|772\+|770\+/g, `${countNow}+`);
  c = c.replace(/771 /g, `${countNow} `);
  fs.writeFileSync(fp, c);
  console.log(`  Updated count in: ${f}`);
});

console.log('\n=== ALL PHASES FIXED ===');
console.log('Remaining manual steps:');
console.log('  1. Translate 5 English guides via DeepSeek API');
console.log('  2. npm run build to verify');
console.log('  3. git push + vercel deploy');
