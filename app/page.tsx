import { tools, categories } from "@/lib/tools";
import Link from "next/link";

export default function HomePage() {
  const popular = tools.slice(0, 8);
  const fontTools = tools.filter((t) => t.category === "text" || t.category === "yazi");

  const showcaseCats = ["hesap", "text", "ai", "dosya", "gelistirici", "saglik"];
  const byShowcase: Record<string, typeof tools> = {};
  showcaseCats.forEach(cat => {
    byShowcase[cat] = tools.filter(t => t.category === cat).slice(0, 4);
  });

  return (
    <div>
      {/* Hero — gold gradient */}
      <section className="relative overflow-hidden bg-pazar-dark">
        <div className="absolute inset-0 opacity-10" style={{
          background: "radial-gradient(circle at 30% 50%, #E8C547 0%, transparent 60%), radial-gradient(circle at 70% 20%, #C8A84E 0%, transparent 50%)"
        }} />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            İhtiyacın olan her araç<br />
            <span className="gold-gradient-text">tek adreste</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8">
            {tools.length}+ ücretsiz çevrimiçi araç. Hesap makineleri, yazı stilleri, PDF araçları, dönüştürücüler ve daha fazlası.
            Ücretsiz, kayıt yok, reklam yok.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/tools" className="gold-gradient text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-amber-500/20">
              Tüm Araçları Keşfet
            </Link>
            <Link href="/guides" className="border border-amber-500/30 text-amber-200 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500/10 transition">
              Rehberleri Oku
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-amber-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: `${tools.length}+`, label: "Ücretsiz Araç" },
            { value: "20", label: "Kategori" },
            { value: "590+", label: "Rehber" },
            { value: "Reklamsız", label: "Sonsuza Kadar" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold gold-gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Showcase */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-pazar-dark mb-8 text-center">
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
                className="bg-white rounded-xl border border-amber-100 p-6 hover:border-pazar-gold/40 hover:shadow-lg hover:shadow-amber-500/5 transition"
              >
                <h3 className="font-semibold text-pazar-dark mb-3">
                  {catInfo?.icon} {catInfo?.title || catId}
                </h3>
                <div className="space-y-1">
                  {catTools.slice(0, 3).map((t) => (
                    <div key={t.slug} className="text-sm text-gray-500">• {t.titleTr}</div>
                  ))}
                </div>
                <div className="text-sm text-pazar-gold font-medium mt-3">
                  {catTools.length} araç →
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link href="/tools" className="inline-block gold-gradient text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-md">
            Tüm {tools.length}+ Aracı Gör
          </Link>
        </div>
      </div>

      {/* Font/Text Tools Highlight */}
      {fontTools.length >= 5 && (
        <section className="bg-white border-y border-amber-100 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-pazar-dark">
                ✨ Yazı Stili Araçları
              </h2>
              <Link href="/tools?category=yazi" className="text-pazar-gold font-medium hover:underline text-sm">
                Tümünü Gör →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {fontTools.slice(0, 10).map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="tool-card bg-pazar-cream rounded-xl border border-amber-100 p-4 text-center hover:border-pazar-gold"
                >
                  <div className="font-medium text-sm text-pazar-dark">{tool.titleTr}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Games Section */}
      <section className="bg-gradient-to-br from-pazar-dark to-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              🎮 Tarayıcı Oyunları
            </h2>
            <Link href="/games" className="text-pazar-gold font-medium hover:underline text-sm">
              Tüm Oyunlar →
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {tools.filter(t => t.category === "games").slice(0, 6).map((game) => (
              <Link
                key={game.slug}
                href={`/tools/${game.slug}`}
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center hover:bg-white/20 hover:border-pazar-gold/30 transition"
              >
                <div className="text-white font-medium text-sm">{game.titleTr}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-pazar-dark mb-8 text-center">
          En Popüler Araçlar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popular.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="tool-card bg-white rounded-xl border border-amber-100 p-5 hover:border-pazar-gold hover:shadow-md transition"
            >
              <h3 className="font-semibold text-pazar-dark text-sm mb-1">{tool.titleTr}</h3>
              <p className="text-xs text-gray-400 line-clamp-2">{tool.descriptionTr}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-pazar-dark to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Hepsi ücretsiz, hepsi Türkçe 🇹🇷
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Kayıt yok, reklam yok, takip yok. Sadece ihtiyacın olan araçlar.
          </p>
          <Link href="/tools" className="inline-block gold-gradient text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-amber-500/20">
            Hemen Başla
          </Link>
        </div>
      </section>
    </div>
  );
}
