import { tools, categories } from "@/lib/tools";
import Link from "next/link";

export default function HomePage() {
  // Pick first 8 tools for popular display
  const popular = tools.slice(0, 8);
  // Get font/text tools
  const fontTools = tools.filter((t) => t.category === "text" || t.category === "yazi");

  // Group tools by category for showcase
  const showcaseCats = ["hesap", "text", "ai", "dosya", "gelistirici", "saglik"];
  const byShowcase: Record<string, typeof tools> = {};
  showcaseCats.forEach(cat => {
    byShowcase[cat] = tools.filter(t => t.category === cat).slice(0, 4);
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pazar-red to-red-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            İhtiyacın olan her araç<br />
            <span className="text-pazar-accent">tek adreste</span>
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-xl mb-8">
            {tools.length}+ ücretsiz çevrimiçi araç. Hesap makineleri, yazı stilleri, PDF araçları, dönüştürücüler ve daha fazlası.
            Ücretsiz, kayıt yok, reklam yok.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/tools" className="bg-white text-pazar-red px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Tüm Araçları Keşfet
            </Link>
            <Link href="/guides" className="bg-red-800/50 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition border border-red-700">
              Rehberleri Oku
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: `${tools.length}+`, label: "Ücretsiz Araç" },
            { value: "20", label: "Kategori" },
            { value: "590+", label: "Rehber" },
            { value: "Reklamsız", label: "Sonsuza Kadar" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-pazar-red">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Showcase */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Kategorilere Göz Atın
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {showcaseCats.filter(c => byShowcase[c]?.length > 0).map((catId) => {
            const catTools = byShowcase[catId] || [];
            const catInfo = Object.values(categories).find(c => c.id === catId);
            return (
              <Link
                key={catId}
                href={`/tools`}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:border-pazar-red/30 hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-gray-800 mb-3">
                  {catInfo?.icon} {catInfo?.title || catId}
                </h3>
                <div className="space-y-1">
                  {catTools.slice(0, 3).map((t) => (
                    <div key={t.slug} className="text-sm text-gray-500">• {t.titleTr}</div>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Popular Tools Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
          En Popüler Araçlar
        </h2>
        <p className="text-gray-500 mb-8 text-center">Hemen kullanmaya başlayın</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {popular.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="bg-white rounded-xl p-5 border border-gray-100 hover:border-pazar-red/30 hover:shadow-sm transition text-center group"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <div className="font-medium text-gray-800 text-sm group-hover:text-pazar-red transition">{tool.titleTr}</div>
              <div className="text-xs text-gray-400 mt-1 line-clamp-1">{tool.descriptionTr}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Font Tools Highlight */}
      {fontTools.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            ✨ Yazı Stilleri & Font Araçları
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {fontTools.slice(0, 8).map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100 hover:border-pazar-red/30 transition text-center"
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="text-sm font-medium text-gray-700">{tool.titleTr}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-pazar-red to-red-600 text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Aradığın araç burada</h2>
          <p className="text-red-100 mb-8">770'ten fazla araç, 590'dan fazla rehber. Hepsi ücretsiz.</p>
          <Link href="/tools" className="inline-block bg-white text-pazar-red px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Hemen Başla →
          </Link>
        </div>
      </section>
    </div>
  );
}
