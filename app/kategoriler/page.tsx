import type { Metadata } from "next";
import { tools, categories } from "@/lib/tools";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kategoriler | TeknoAraç",
  description: "Ücretsiz çevrimiçi araçları kategoriye göre keşfedin. Hesaplamalar, yazı stilleri, PDF araçları, oyunlar ve daha fazlası.",
  keywords: ["araç kategorileri", "hesaplama", "dönüştürücü", "yazı stilleri", "oyun", "PDF", "Türkçe"],
  alternates: { canonical: "https://teknoarac.com/kategoriler" },
  openGraph: {
    title: "Kategoriler | TeknoAraç",
    description: "Ücretsiz çevrimiçi araçları kategoriye göre keşfedin.",
    url: "https://teknoarac.com/kategoriler",
    siteName: "TeknoAraç",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Kategoriler", images: ["/og-image.svg"] },
};

// Category descriptor cards with richer metadata
const categoryCards: Record<string, { desc: string; gradient: string }> = {
  money:     { desc: "Kredi, mortgage, faiz, vergi, bütçe — tüm finansal hesaplamalar.", gradient: "from-emerald-500/20 to-tekno-deeper" },
  health:    { desc: "VKİ, kalori, makro, hamilelik, uyku — sağlık takibiniz burada.", gradient: "from-rose-500/20 to-tekno-deeper" },
  text:      { desc: "Kelime sayacı, harf stilleri, büyük/küçük dönüştürme, metin araçları.", gradient: "from-violet-500/20 to-tekno-deeper" },
  dev:       { desc: "JSON, regex, API test, kod biçimlendirici — geliştirici araç seti.", gradient: "from-blue-500/20 to-tekno-deeper" },
  converters:{ desc: "JPG→PNG, PDF→Word, birim dönüştürme — tüm dosya işlemleri.", gradient: "from-amber-500/20 to-tekno-deeper" },
  ai:        { desc: "Prompt mühendisliği, token sayacı, model karşılaştırma.", gradient: "from-fuchsia-500/20 to-tekno-deeper" },
  games:     { desc: "Snake, 2048, satranç, sudoku — tarayıcıda oyna, indirme yok.", gradient: "from-orange-500/20 to-tekno-deeper" },
  gaming:    { desc: "FPS hesabı, loot olasılığı, mana eğrisi — oyuncu istatistikleri.", gradient: "from-red-500/20 to-tekno-deeper" },
  home:      { desc: "Düğün planlama, bahçe takibi, fatura bölme — ev işleri.", gradient: "from-teal-500/20 to-tekno-deeper" },
  career:    { desc: "CV oluşturma, mülakat hazırlığı, maaş karşılaştırma.", gradient: "from-indigo-500/20 to-tekno-deeper" },
  writing:   { desc: "Blog başlığı, SEO meta, içerik fikri — yazma araçları.", gradient: "from-pink-500/20 to-tekno-deeper" },
  productivity:{ desc: "Yapılacaklar, Pomodoro, not defteri — verimlilik araçları.", gradient: "from-green-500/20 to-tekno-deeper" },
  units:     { desc: "Sıcaklık, ağırlık, uzunluk, hız — tüm birim çeviriciler.", gradient: "from-cyan-500/20 to-tekno-deeper" },
  media:     { desc: "YouTube başlık, hashtag üretici, sosyal medya araçları.", gradient: "from-purple-500/20 to-tekno-deeper" },
  random:    { desc: "Zar, yazı tura, rastgele sayı, karar verici.", gradient: "from-yellow-500/20 to-tekno-deeper" },
  automotive:{ desc: "Yakıt, kredi, lastik ebadı — otomotiv hesaplamaları.", gradient: "from-slate-500/20 to-tekno-deeper" },
  cooking:   { desc: "Tarif ölçekleme, kahve oranı, mutfak dönüşümleri.", gradient: "from-orange-700/20 to-tekno-deeper" },
  parenting: { desc: "Bebek takibi, büyüme persentili, beslenme planlayıcı.", gradient: "from-sky-500/20 to-tekno-deeper" },
  pets:      { desc: "Köpek yaşı, kedi kilosu, evcil hayvan bakımı.", gradient: "from-lime-500/20 to-tekno-deeper" },
};

export default function CategoriesPage() {
  const byCategory: Record<string, typeof tools> = {};
  tools.forEach((t) => {
    if (!byCategory[t.category]) byCategory[t.category] = [];
    byCategory[t.category].push(t);
  });

  // Sort: most tools first, then alphabetical
  const sortedCats = Object.entries(byCategory).sort((a, b) => b[1].length - a[1].length);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tekno-cyan/10 border border-tekno-cyan/20 text-tekno-cyan text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-tekno-cyan animate-pulse" />
          Keşfet
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-tekno-text mb-4">
          Araç Kategorileri
        </h1>
        <p className="text-lg text-tekno-muted max-w-lg mx-auto">
          {tools.length}+ araç, {sortedCats.length} kategoride. Ne yapmak istediğini seç.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedCats.map(([catKey, catTools]) => {
          const catInfo = categories[catKey];
          const card = categoryCards[catKey];
          const catId = catInfo?.id || catKey;
          const sample = catTools.slice(0, 4);

          return (
            <Link
              key={catKey}
              href={`/araclar?kategori=${catId}`}
              className="group panel p-6 hover:border-tekno-cyan/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card?.gradient || "from-tekno-cyan/10 to-tekno-deeper"} opacity-30 group-hover:opacity-50 transition-opacity`} />

              <div className="relative">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl shrink-0">{catInfo?.icon || "🛠️"}</span>
                  <div>
                    <h2 className="font-bold text-tekno-text group-hover:text-tekno-cyan transition-colors text-lg">
                      {catInfo?.title || catKey}
                    </h2>
                    <span className="text-sm text-tekno-muted">
                      {catTools.length} araç
                    </span>
                  </div>
                </div>

                {/* Description */}
                {card?.desc && (
                  <p className="text-sm text-tekno-muted mb-4 leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>
                )}

                {/* Sample tools */}
                <div className="space-y-1.5 mb-4">
                  {sample.map((t) => (
                    <div key={t.slug} className="text-xs text-tekno-muted flex items-center gap-2 group-hover:text-tekno-text/70 transition-colors">
                      <span className="w-1 h-1 rounded-full bg-tekno-cyan/30 group-hover:bg-tekno-cyan/60 transition-colors" />
                      {t.titleTr}
                    </div>
                  ))}
                  {catTools.length > 4 && (
                    <div className="text-xs text-tekno-cyan/60 pl-3 pt-0.5">
                      +{catTools.length - 4} araç daha
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-tekno-cyan opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1">
                  Keşfet <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 p-10 panel rounded-2xl">
        <h3 className="text-xl font-bold text-tekno-text mb-2">Tüm araçları görmek ister misin?</h3>
        <p className="text-tekno-muted mb-4">Kategorilere göre sıralanmış tam liste.</p>
        <Link href="/araclar" className="btn-primary inline-block px-6 py-3 rounded-xl text-sm font-semibold">
          Tüm {tools.length}+ Aracı Gör
        </Link>
      </div>
    </div>
  );
}
