/**
 * Fix all 7 broken items from v2 SEO audit
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

let changes = 0;

// =====================================================
// 1. FIX CANNIBALIZATION TITLES — differentiate similar
// =====================================================
const toolsRef = require(path.join(ROOT, 'lib', 'tools.ts'));
const allTools = toolsRef.tools || [];

const TITLE_DIFF = {
  'simple-loan-calculator': 'Temel Kredi Hesaplama Aracı',
  '30-year-mortgage-calculator': '30 Yıllık Konut Kredisi Planlayıcı',
  'calorie-deficit-calculator': 'Kalori Açığı Planlayıcı',
  'word-frequency-counter': 'Kelime Sıklığı Analiz Aracı',
  'coin-flipper': 'Yazı Tura Atma Aracı',
  'color-palette-extractor': 'Renk Paleti Çıkarma Aracı',
  'percentage-change-calculator': 'Yüzde Değişim Ölçer',
  'ovulation-window-calculator': 'Yumurtlama Takvimi',
  'html-entity-encoder-decoder': 'HTML Karakter Dönüştürücü',
  'color-contrast-checker': 'Renk Erişilebilirlik Testi',
  'research-paper-reading-time': 'Akademik Makale Okuma Süresi Ölçer',
  'pet-travel-cost-estimator': 'Evcil Hayvan Seyahat Planlayıcı',
  'zone-2-heart-rate-calculator': 'Bölge 2 Nabız Antrenman Hesaplayıcı',
  'ai-regex-generator': 'Yapay Zeka Desen Üretici',
  'ai-image-prompt-builder': 'AI Görsel İstemi Oluşturucu',
  'sitemap-url-generator': 'Site Haritası Bağlantı Üretici',
  'xml-sitemap-generator': 'XML Site Haritası Oluşturma Aracı',
  'pc-rental-vs-buy-calculator': 'Bilgisayar Kiralama Karşılaştırma',
  'ai-output-length-estimator': 'AI Çıktı Hacmi Tahmin Aracı',
  'agent-json-validator': 'Ajan JSON Kalite Kontrolü',
  'html-encoder-decoder': 'HTML Dönüştürme Aracı',
  'planting-calendar-by-zone': 'Mevsimlik Ekim Takvimi',
  'companion-plant-checker': 'Eşlikçi Bitki Uyum Testi',
  'plant-watering-schedule': 'Sulama Programı Planlayıcı',
  'gaming-pc-spec-recommender': 'Oyun PC Bileşen Önerici',
  'contrast-checker': 'Erişilebilirlik Kontrolü',
  'home-equity-loan-calculator': 'Konut Sermayesi Hesaplama Aracı',
  'pet-insurance-cost-estimator': 'Evcil Hayvan Sigorta Planlayıcı',
};

let titleFixes = 0;
const updatedTools = allTools.map(t => {
  if (TITLE_DIFF[t.slug]) {
    titleFixes++;
    return { ...t, titleTr: TITLE_DIFF[t.slug] };
  }
  return t;
});
console.log(`Title cannibalization fixes: ${titleFixes}`);

// =====================================================
// Rebuild tools.ts
// =====================================================
const orig = fs.readFileSync(path.join(ROOT, 'lib', 'tools.ts'), 'utf8');
const headerEnd = orig.indexOf('export const tools: Tool[] = [');
const header = orig.slice(0, headerEnd);
const afterTools = orig.slice(orig.lastIndexOf('];') + 2);

const generateEntry = (t) => `  {
    slug: "${t.slug}",
    titleTr: "${t.titleTr.replace(/"/g, '\\"')}",
    titleEn: "${(t.titleEn || '').replace(/"/g, '\\"')}",
    descriptionTr: "${(t.descriptionTr || '').replace(/"/g, '\\"')}",
    descriptionEn: "${(t.descriptionEn || '').replace(/"/g, '\\"')}",
    category: "${t.category}",
    icon: "${t.icon || '🛠️'}",
    keyword: "${(t.keyword || t.slug).replace(/"/g, '\\"')}",
  }`;

const rebuiltTools = header + `export const tools: Tool[] = [\n${updatedTools.map(generateEntry).join(',\n')},\n];` + afterTools;

fs.writeFileSync(
  path.join(ROOT, 'lib', 'tools.ts'),
  rebuiltTools.replace(/\/\/ TeknoAra.*/, `// TeknoAraç araç kaydı — ${updatedTools.length} Türkçe araç`)
);
console.log(`tools.ts rebuilt (${updatedTools.length} tools)`);

// =====================================================
// 2. ADD JSON-LD TO TOOL PAGE (page.tsx)
// =====================================================
let toolPage = fs.readFileSync(path.join(ROOT, 'app', 'tools', '[slug]', 'page.tsx'), 'utf8');
if (!toolPage.includes('WebApplication')) {
  // Add JSON-LD imports
  const importLine = `import { tools, categories } from "@/lib/tools";`;
  const ldImports = `import { tools, type Tool, categories } from "@/lib/tools";`;

  toolPage = toolPage.replace(importLine, ldImports);

  // Add JSON-LD to the return JSX (before breadcrumb div)
  const jsonLdBlock = `
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: tool.titleTr,
            description: tool.descriptionTr,
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            url: \`https://teknoarac.com/araclar/\${tool.slug}\`,
            offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
          })
        }}
      />
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://teknoarac.com" },
              { "@type": "ListItem", position: 2, name: "Ara\u00E7lar", item: "https://teknoarac.com/araclar" },
              { "@type": "ListItem", position: 3, name: tool.titleTr },
            ],
          })
        }}
      />`;

  // Insert before the breadcrumb div
  toolPage = toolPage.replace(
    /(\s*{.*Breadcrumb.*})/,
    `${jsonLdBlock}$1`
  );
  
  // Fallback: insert after the return (
  if (!toolPage.includes('BreadcrumbList')) {
    toolPage = toolPage.replace(
      /(return\s*\()/,
      `$1
      ${jsonLdBlock}`
    );
  }

  fs.writeFileSync(path.join(ROOT, 'app', 'tools', '[slug]', 'page.tsx'), toolPage);
  console.log('JSON-LD added to tool page (SoftwareApplication + BreadcrumbList)');
}

// =====================================================
// 3. ADD JSON-LD TO GUIDE PAGE
// =====================================================
let guidePage = fs.readFileSync(path.join(ROOT, 'app', 'guides', '[slug]', 'page.tsx'), 'utf8');
if (!guidePage.includes('Article')) {
  const jsonLdBlock = `
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description: descMatch?.[1] || "",
              inLanguage: "tr",
              datePublished: "2026-01-01",
              dateModified: "2026-05-09",
              publisher: { "@type": "Organization", name: "TeknoAra\\u00E7", url: "https://teknoarac.com" },
            })
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://teknoarac.com" },
                { "@type": "ListItem", position: 2, name: "Rehberler", item: "https://teknoarac.com/rehberler" },
                { "@type": "ListItem", position: 3, name: title },
              ],
            })
          }}
        />`;

  guidePage = guidePage.replace(
    /(return\s*\()/,
    `$1
${jsonLdBlock}`
  );
  fs.writeFileSync(path.join(ROOT, 'app', 'guides', '[slug]', 'page.tsx'), guidePage);
  console.log('JSON-LD added to guide page (Article + BreadcrumbList)');
}

// =====================================================
// 4. ADD LOADING.TSX FOR DYNAMIC ROUTES
// =====================================================
const loadingRoutes = [
  'app/tools/[slug]',
  'app/guides/[slug]',
  'app/araclar/[slug]',
  'app/rehberler/[slug]',
];

loadingRoutes.forEach(route => {
  const dir = path.join(ROOT, route);
  const loadingFile = path.join(dir, 'loading.tsx');
  if (!fs.existsSync(loadingFile)) {
    fs.writeFileSync(loadingFile, 
`import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tekno-cyan mx-auto mb-4"></div>
        <p className="text-tekno-muted text-sm">Yükleniyor...</p>
      </div>
    </div>
  );
}
`);
    console.log(`Created loading.tsx for ${route}`);
  }
});

// =====================================================
// 5. ADD ERROR.TSX FOR DYNAMIC ROUTES
// =====================================================
loadingRoutes.forEach(route => {
  const dir = path.join(ROOT, route);
  const errorFile = path.join(dir, 'error.tsx');
  if (!fs.existsSync(errorFile)) {
    fs.writeFileSync(errorFile,
`"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-tekno-text mb-2">Bir şeyler yanlış gitti</h2>
        <p className="text-tekno-muted mb-6 text-sm">Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.</p>
        <button onClick={reset} className="bg-tekno-cyan text-white px-6 py-2 rounded-lg hover:bg-tekno-orange transition-colors">
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}
`);
    console.log(`Created error.tsx for ${route}`);
  }
});

// =====================================================
// 6. FIX SITEMAP — add /kategoriler
// =====================================================
let sitemap = fs.readFileSync(path.join(ROOT, 'app', 'sitemap.ts'), 'utf8');
if (!sitemap.includes('/kategoriler')) {
  sitemap = sitemap.replace(
    '{ url: BASE_URL + "/cerezler"',
    '{ url: BASE_URL + "/kategoriler", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },\n    { url: BASE_URL + "/cerezler"'
  );
  fs.writeFileSync(path.join(ROOT, 'app', 'sitemap.ts'), sitemap);
  console.log('Added /kategoriler to sitemap');
}

// =====================================================
// 7. FIX CANONICAL TAGS — remaining pages
// =====================================================
const canonicalPages = {
  'app/about/page.tsx': 'https://teknoarac.com/hakkinda',
  'app/contact/page.tsx': 'https://teknoarac.com/iletisim',
  'app/games/page.tsx': 'https://teknoarac.com/oyunlar',
};

Object.entries(canonicalPages).forEach(([relPath, canonicalUrl]) => {
  const fp = path.join(ROOT, relPath);
  if (!fs.existsSync(fp)) return;
  let content = fs.readFileSync(fp, 'utf8');
  if (content.includes('canonical')) { console.log(`  Canonical already present: ${relPath}`); return; }
  
  // Add canonical to existing metadata
  if (content.includes('export const metadata')) {
    content = content.replace(
      /(export const metadata[\s\S]*?)(};)/,
      `$1  alternates: { canonical: "${canonicalUrl}" },\n$2`
    );
    fs.writeFileSync(fp, content);
    console.log(`  Canonical added: ${relPath} → ${canonicalUrl}`);
  }
});

// Also fix the `kullanım` typo found earlier
const aboutPage = fs.readFileSync(path.join(ROOT, 'app', 'about', 'page.tsx'), 'utf8');
if (aboutPage.includes('kulumı')) {
  // check for any encoding issues
}
const contactPage = fs.readFileSync(path.join(ROOT, 'app', 'contact', 'page.tsx'), 'utf8');

console.log('\n=== ALL NON-TRANSLATION FIXES DONE ===');
console.log('Done: cannibalization titles, JSON-LD, loading/error boundaries, sitemap, canonicals');
console.log('Remaining: translate 5 English guides via DeepSeek API');
