/**
 * Generates ToolPazar's lib/tools.ts from FreeToolArena's extracted tools data,
 * adding proper Turkish titles and the user's new tool sections.
 */
const fs = require('fs');
const path = require('path');

const ftaTools = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'extracted-tools.json'), 'utf8'));
const ftaArticles = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'extracted-articles.json'), 'utf8'));

// Category mapping: FTA English → ToolPazar Turkish
const catMap = {
  money: { id: 'hesap', icon: '💰', title: 'Hesap Makineleri' },
  productivity: { id: 'uretim', icon: '⚡', title: 'Verimlilik' },
  health: { id: 'saglik', icon: '❤️', title: 'Sağlık' },
  text: { id: 'yazi', icon: '📝', title: 'Yazı Araçları' },
  dev: { id: 'gelistirici', icon: '💻', title: 'Geliştirici' },
  units: { id: 'donusturucu', icon: '📐', title: 'Birim Çevirici' },
  random: { id: 'rastgele', icon: '🎲', title: 'Rastgele' },
  converters: { id: 'dosya', icon: '📁', title: 'Dosya Dönüştürücü' },
  writing: { id: 'icerik', icon: '✍️', title: 'İçerik Üretimi' },
  career: { id: 'kariyer', icon: '🚀', title: 'Kariyer' },
  home: { id: 'ev', icon: '🏠', title: 'Ev & Yaşam' },
  media: { id: 'medya', icon: '🎬', title: 'Medya' },
  ai: { id: 'ai', icon: '🤖', title: 'Yapay Zeka' },
  gaming: { id: 'oyun', icon: '🎮', title: 'Oyun' },
  games: { id: 'oyunlar', icon: '🕹️', title: 'Tarayıcı Oyunları' },
  automotive: { id: 'otomotiv', icon: '🚗', title: 'Otomotiv' },
  cooking: { id: 'mutfak', icon: '🍳', title: 'Mutfak' },
  parenting: { id: 'ebeveyn', icon: '👶', title: 'Ebeveyn' },
  pets: { id: 'evcil', icon: '🐾', title: 'Evcil Hayvan' },
  social: { id: 'sosyal', icon: '💬', title: 'Sosyal' },
};

// US-centric tools to skip (car loans, 401k, US tax, US tipping specifically, etc.)
const usCentricKeywords = [
  '401k', 'ira ', 'tax-', 'irs', 'us-', 'american', 'usa-', 'federal',
  'zip-code', 'social-security', 'w-2', 'w2 ', 'hsa ', 'fsa ', 'fica',
  'roth', 'medicare', 'medicaid', 'obamacare', 'state-tax', 'local-tax',
  'rv-loan', 'boat-loan', 'motorcycle-loan', 'atv-loan',
];

const usCentricSlugs = new Set([
  '401k-calculator', 'ira-calculator', 'roth-ira-calculator',
  'tax-refund-estimator', 'tax-bracket-calculator',
  'sales-tax-calculator', 'property-tax-calculator',
  'federal-tax-calculator', 'self-employment-tax-calculator',
  'take-home-pay-calculator', 'paycheck-calculator',
  'w2-vs-1099-calculator', 'social-security-calculator',
  'hsa-calculator', 'fsa-calculator',
  'rv-loan-calculator', 'boat-loan-calculator',
  'motorcycle-loan-calculator', 'atv-loan-calculator',
  'us-census-analyzer', 'zip-code-lookup',
  'american-flag-generator', 'usa-map-generator',
  'airbnb-revenue-estimator', 'airbnb-cleaning-fee-fairness',
]);

function isUsCentric(tool) {
  if (usCentricSlugs.has(tool.slug)) return true;
  const combined = (tool.title + ' ' + tool.description + ' ' + tool.keyword).toLowerCase();
  return usCentricKeywords.some(kw => combined.includes(kw));
}

function turkishTitle(tool) {
  // Generate simple Turkish titles from English ones
  const titleMap = {
    'tip-calculator': 'Bahşiş Hesaplayıcı',
    'loan-calculator': 'Kredi Hesaplayıcı',
    'mortgage-calculator': 'Konut Kredisi Hesaplayıcı',
    'compound-interest-calculator': 'Bileşik Faiz Hesaplayıcı',
    'budget-calculator': 'Bütçe Planlayıcı',
    'bmi-calculator': 'Vücut Kitle İndeksi Hesaplayıcı',
    'calorie-calculator': 'Kalori Hesaplayıcı',
    'age-calculator': 'Yaş Hesaplayıcı',
    'password-generator': 'Şifre Oluşturucu',
    'word-counter': 'Kelime Sayacı',
    'json-formatter': 'JSON Düzenleyici',
    'base64-encoder-decoder': 'Base64 Kodlayıcı/Çözücü',
    'url-encoder-decoder': 'URL Kodlayıcı/Çözücü',
    'uuid-generator': 'UUID Oluşturucu',
    'lorem-ipsum-generator': 'Lorem Ipsum Oluşturucu',
    'unit-converter': 'Birim Çevirici',
    'temperature-converter': 'Sıcaklık Çevirici',
    'length-converter': 'Uzunluk Çevirici',
    'weight-converter': 'Ağırlık Çevirici',
    'case-converter': 'Harf Dönüştürücü',
    'text-reverser': 'Metin Ters Çevirici',
    'slug-generator': 'URL Slug Oluşturucu',
    'pomodoro-timer': 'Pomodoro Sayacı',
    'stopwatch': 'Kronometre',
    'countdown-timer': 'Geri Sayım Sayacı',
    'coin-flip': 'Yazı Tura',
    'dice-roller': 'Zar Atıcı',
    'random-number-generator': 'Rastgele Sayı Oluşturucu',
    'color-picker': 'Renk Seçici',
    'qr-code-generator': 'QR Kod Oluşturucu',
    'percentage-calculator': 'Yüzde Hesaplayıcı',
    'discount-calculator': 'İndirim Hesaplayıcı',
    'savings-goal-calculator': 'Tasarruf Hedefi Hesaplayıcı',
    'debt-payoff-calculator': 'Borç Ödeme Planlayıcı',
    'currency-converter': 'Döviz Çevirici',
    'time-zone-converter': 'Saat Dilimi Çevirici',
    'world-clock': 'Dünya Saati',
    'habit-tracker': 'Alışkanlık Takipçisi',
    'to-do-list': 'Yapılacaklar Listesi',
    'decision-maker': 'Karar Verici',
    'random-name-generator': 'Rastgele İsim Oluşturucu',
    'car-loan-calculator': 'Taşıt Kredisi Hesaplayıcı',
    'personal-loan-calculator': 'İhtiyaç Kredisi Hesaplayıcı',
    'student-loan-calculator': 'Öğrenci Kredisi Hesaplayıcı',
    'simple-loan-calculator': 'Basit Kredi Hesaplayıcı',
    'mortgage-affordability-calculator': 'Konut Bütçesi Hesaplayıcı',
    'auto-loan-calculator': 'Taşıt Kredisi Hesaplayıcı',
    'water-intake-calculator': 'Su Tüketim Hesaplayıcı',
    'macro-calculator': 'Makro Besin Hesaplayıcı',
    'sleep-calculator': 'Uyku Hesaplayıcı',
    'pregnancy-calculator': 'Hamilelik Hesaplayıcı',
    'due-date-calculator': 'Doğum Tarihi Hesaplayıcı',
    'ovulation-calculator': 'Yumurtlama Hesaplayıcı',
    'baby-name-generator': 'Bebek İsmi Oluşturucu',
    'fuel-cost-calculator': 'Yakıt Maliyeti Hesaplayıcı',
    'fuel-economy-calculator': 'Yakıt Tüketimi Hesaplayıcı',
    'depreciation-calculator': 'Amortisman Hesaplayıcı',
    'recipe-scaler': 'Tarif Ölçekleyici',
    'baking-converter': 'Fırın Ölçü Çevirici',
    'coffee-ratio-calculator': 'Kahve Oranı Hesaplayıcı',
    'dog-age-calculator': 'Köpek Yaşı Hesaplayıcı',
    'cat-age-calculator': 'Kedi Yaşı Hesaplayıcı',
    'pet-food-calculator': 'Evcil Hayvan Mama Hesaplayıcı',
  };
  return titleMap[tool.slug] || tool.h1 || tool.title;
}

// Filter out US-centric
const filtered = ftaTools.filter(t => !isUsCentric(t));
console.log(`Filtered: ${ftaTools.length} → ${filtered.length} tools (removed ${ftaTools.length - filtered.length} US-centric)`);

// Generate TypeScript
let output = '// Auto-generated from FreeToolArena pages.ts — 792 tools adapted for ToolPazar\n';
output += '// Removed US-centric tools (401k, IRA, RV/boat loans, US tax, etc.)\n\n';

output += 'export interface Tool {\n';
output += '  slug: string;\n';
output += '  titleTr: string;\n';
output += '  titleEn: string;\n';
output += '  descriptionTr: string;\n';
output += '  descriptionEn: string;\n';
output += '  category: string;\n';
output += '  icon: string;\n';
output += '  keyword: string;\n';
output += '}\n\n';

output += 'export const categories: Record<string, { id: string; icon: string; title: string }> = {\n';
for (const [key, val] of Object.entries(catMap)) {
  output += `  "${key}": { id: "${val.id}", icon: "${val.icon}", title: "${val.title}" },\n`;
}
output += '};\n\n';

output += 'export const tools: Tool[] = [\n';
for (const tool of filtered) {
  const trTitle = turkishTitle(tool);
  const cat = catMap[tool.category] || { icon: '🔧' };
  // Truncate description for sanity
  const desc = (tool.description || '').replace(/"/g, "'").substring(0, 160);
  output += `  {\n`;
  output += `    slug: "${tool.slug}",\n`;
  output += `    titleTr: "${trTitle.replace(/"/g, "'")}",\n`;
  output += `    titleEn: "${(tool.h1 || tool.title).replace(/"/g, "'")}",\n`;
  output += `    descriptionTr: "${desc}",\n`;
  output += `    descriptionEn: "${desc}",\n`;
  output += `    category: "${tool.category}",\n`;
  output += `    icon: "${cat.icon}",\n`;
  output += `    keyword: "${tool.keyword || ''}",\n`;
  output += `  },\n`;
}
output += '];\n';

// Also add the user's NEW tools
output += '\n// ===== USER ADDITIONS: AI Writing, PDF, Image, Business Tools =====\n';
output += 'export const newTools: Tool[] = [\n';

const newTools = [
  // AI Writing (yazi_ai)
  { slug: 'ai-baslik-olusturucu', titleTr: 'AI Başlık Oluşturucu', cat: 'ai', icon: '🤖', desc: 'Yapay zeka ile SEO uyumlu başlıklar oluşturun.' },
  { slug: 'ai-blog-fikir', titleTr: 'AI Blog Fikir Üretici', cat: 'ai', icon: '💡', desc: 'Blogunuz için yapay zeka destekli içerik fikirleri.' },
  { slug: 'instagram-biyografi', titleTr: 'Instagram Biyografi Oluşturucu', cat: 'sosyal', icon: '📸', desc: 'Etkileyici Instagram biyografileri oluşturun.' },
  { slug: 'youtube-baslik', titleTr: 'YouTube Başlık Oluşturucu', cat: 'medya', icon: '▶️', desc: 'YouTube videolarınız için tıklanma oranı yüksek başlıklar.' },
  { slug: 'tiktok-aciklama', titleTr: 'TikTok Açıklama Oluşturucu', cat: 'sosyal', icon: '🎵', desc: 'TikTok videolarınız için akılda kalıcı açıklamalar.' },
  { slug: 'tweet-yazici', titleTr: 'Tweet Yazıcı', cat: 'sosyal', icon: '🐦', desc: 'Etkileşim alan tweetler yazın.' },
  { slug: 'hashtag-olusturucu', titleTr: 'Hashtag Oluşturucu', cat: 'sosyal', icon: '#️⃣', desc: 'Gönderileriniz için en iyi hashtagleri bulun.' },
  { slug: 'ai-eposta-yazici', titleTr: 'AI E-Posta Yazıcı', cat: 'ai', icon: '📧', desc: 'Profesyonel e-postaları saniyeler içinde yazın.' },
  { slug: 'urun-aciklamasi', titleTr: 'Ürün Açıklaması Oluşturucu', cat: 'icerik', icon: '🏷️', desc: 'Satışları artıran ürün açıklamaları oluşturun.' },
  { slug: 'ai-reklam-metni', titleTr: 'AI Reklam Metni Oluşturucu', cat: 'ai', icon: '📢', desc: 'Dönüşüm odaklı reklam metinleri.' },
  // PDF Tools
  { slug: 'pdf-birlestir', titleTr: 'PDF Birleştir', cat: 'dosya', icon: '📄', desc: 'Birden fazla PDF dosyasını tek bir dosyada birleştirin.' },
  { slug: 'pdf-kucult', titleTr: 'PDF Küçült', cat: 'dosya', icon: '📉', desc: 'PDF dosya boyutunu kalite kaybı olmadan küçültün.' },
  { slug: 'pdf-word', titleTr: 'PDF → Word', cat: 'dosya', icon: '📝', desc: 'PDF dosyalarını düzenlenebilir Word belgelerine dönüştürün.' },
  { slug: 'word-pdf', titleTr: 'Word → PDF', cat: 'dosya', icon: '📋', desc: 'Word belgelerini PDF formatına dönüştürün.' },
  { slug: 'pdf-sayfa-sil', titleTr: 'PDF Sayfa Silme', cat: 'dosya', icon: '🗑️', desc: 'PDF dosyasından istemediğiniz sayfaları kaldırın.' },
  { slug: 'pdf-bol', titleTr: 'PDF Bölme', cat: 'dosya', icon: '✂️', desc: 'PDF dosyasını birden fazla dosyaya bölün.' },
  { slug: 'pdf-dondur', titleTr: 'PDF Döndürme', cat: 'dosya', icon: '🔄', desc: 'PDF sayfalarını döndürün ve kaydedin.' },
  { slug: 'pdf-numaralandir', titleTr: 'PDF Sayfa Numaralandırma', cat: 'dosya', icon: '🔢', desc: 'PDF dosyalarına sayfa numarası ekleyin.' },
  // Image Tools
  { slug: 'jpg-png', titleTr: 'JPG → PNG', cat: 'dosya', icon: '🖼️', desc: 'JPG görselleri PNG formatına dönüştürün.' },
  { slug: 'png-jpg', titleTr: 'PNG → JPG', cat: 'dosya', icon: '🖼️', desc: 'PNG görselleri JPG formatına dönüştürün.' },
  { slug: 'webp-jpg', titleTr: 'WEBP → JPG', cat: 'dosya', icon: '🖼️', desc: 'WEBP görselleri JPG formatına dönüştürün.' },
  { slug: 'gorsel-boyutlandir', titleTr: 'Görsel Boyutlandırıcı', cat: 'dosya', icon: '📐', desc: 'Görselleri tam istediğiniz boyuta getirin.' },
  { slug: 'gorsel-sikistir', titleTr: 'Görsel Sıkıştırıcı', cat: 'dosya', icon: '🗜️', desc: 'Görsel boyutunu kalite kaybı olmadan azaltın.' },
  { slug: 'arka-plan-kaldir', titleTr: 'Arka Plan Kaldırıcı', cat: 'dosya', icon: '🎯', desc: 'Görsellerden arka planı otomatik kaldırın.' },
  { slug: 'profil-fotografi', titleTr: 'Profil Fotoğrafı Yuvarlatıcı', cat: 'dosya', icon: '👤', desc: 'Fotoğrafları yuvarlak profil fotoğrafı haline getirin.' },
  // Business Tools
  { slug: 'teklif-olusturucu', titleTr: 'Teklif Oluşturucu', cat: 'hesap', icon: '📊', desc: 'Profesyonel iş teklifleri hazırlayın.' },
  { slug: 'fatura-sablonu', titleTr: 'Fatura Şablonu Oluşturucu', cat: 'hesap', icon: '🧾', desc: 'Profesyonel fatura şablonları oluşturun.' },
  { slug: 'kar-hesaplayici', titleTr: 'Kar Hesaplayıcı', cat: 'hesap', icon: '💹', desc: 'İşletmenizin kar marjını hesaplayın.' },
  { slug: 'barkod-olusturucu', titleTr: 'Barkod Oluşturucu', cat: 'hesap', icon: '📊', desc: 'Ürünleriniz için barkod oluşturun.' },
  { slug: 'link-kisaltici', titleTr: 'Link Kısaltıcı', cat: 'gelistirici', icon: '🔗', desc: 'Uzun linkleri kısa ve paylaşılabilir hale getirin.' },
];

for (const t of newTools) {
  output += `  { slug: "${t.slug}", titleTr: "${t.titleTr}", titleEn: "${t.titleTr}", descriptionTr: "${t.desc}", descriptionEn: "${t.desc}", category: "${t.cat}", icon: "${t.icon}", keyword: "${t.titleTr.toLowerCase()}" },\n`;
}
output += '];\n\n';

output += 'export const allTools = [...tools, ...newTools];\n';

fs.writeFileSync(path.join(__dirname, '..', 'lib', 'tools-generated.ts'), output);
console.log(`Generated lib/tools-generated.ts with ${filtered.length + newTools.length} tools`);
console.log(`  - ${filtered.length} from FreeToolArena`);
console.log(`  - ${newTools.length} new Turkish-market tools`);
console.log(`  - Removed ${ftaTools.length - filtered.length} US-centric tools`);
