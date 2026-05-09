import { tools, categories } from "@/lib/tools";
import Link from "next/link";

export default function HomePage() {
  const popular = tools.slice(0, 12);
  const fontTools = tools.filter((t) => t.category === "text" || t.category === "yazi");

  const showcaseCats = ["hesap", "text", "ai", "dosya", "gelistirici", "saglik"];
  const byShowcase: Record<string, typeof tools> = {};
  showcaseCats.forEach(cat => {
    byShowcase[cat] = tools.filter(t => t.category === cat).slice(0, 4);
  });

  return (
    <div>
      {/* Hero — dark tech with cyan glow */}
      <section className="relative overflow-hidden bg-tekno-deeper" style={{
        background: "linear-gradient(180deg, #060F1E 0%, #0A1628 50%, #0A1628 100%)"
      }}>
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        {/* Glow orbs */}
        <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#00E5FF" }} />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#FF6B35" }} />

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tekno-cyan/10 border border-tekno-cyan/20 text-tekno-cyan text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-tekno-cyan animate-pulse" />
            Türkiye&apos;nin Dijital Araç Kutusu
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-tekno-text tracking-tight">
            İhtiyacın olan<br />
            <span className="cyan-text">her araç burada</span>
          </h1>
          <p className="text-lg md:text-xl text-tekno-muted max-w-xl mb-10 leading-relaxed">
            {tools.length}+ ücretsiz araç, 590+ rehber. Hesaplamalar, yazı stilleri, oyunlar, PDF araçları — hepsi Türkçe, hepsi ücretsiz. Kayıt yok, reklam yok.
          </p>

          {/* Search bar — unique UX element */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mb-8">
            <Link href="/araclar" className="btn-primary text-center text-lg px-8 py-4 rounded-xl">
              🔍 Araçları Keşfet
            </Link>
            <Link href="/rehberler" className="btn-accent text-center text-lg px-8 py-4 rounded-xl">
              📚 Rehberleri Oku
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — dark panels */}
      <section className="border-b border-tekno-border bg-tekno-panel">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: `${tools.length}+`, label: "Ücretsiz Araç", icon: "🛠️" },
            { value: "20", label: "Kategori", icon: "📂" },
            { value: "590+", label: "Rehber", icon: "📖" },
            { value: "Reklamsız", label: "Sonsuza Kadar", icon: "🚫" },
          ].map((stat) => (
            <div key={stat.label} className="panel p-6">
              <div className="text-3xl md:text-4xl font-extrabold cyan-text">{stat.value}</div>
              <div className="text-sm text-tekno-muted mt-1">{stat.icon} {stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Bubbles — new design */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-tekno-text">
            Kategoriler
          </h2>
          <Link href="/araclar" className="text-tekno-cyan hover:text-tekno-cyan-dim font-medium text-sm transition">
            Tümünü Gör →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {showcaseCats.filter(c => byShowcase[c]?.length > 0).map((catId) => {
            const catTools = byShowcase[catId] || [];
            const catInfo = Object.values(categories).find(c => c.id === catId);
            return (
              <Link
                key={catId}
                href={`/araclar?kategori=${catId}`}
                className="panel p-6 hover:border-tekno-cyan/50 hover:shadow-lg hover:shadow-cyan-500/5 transition group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{catInfo?.icon}</span>
                  <h3 className="font-semibold text-tekno-text group-hover:text-tekno-cyan transition-colors">
                    {catInfo?.title || catId}
                  </h3>
                </div>
                <div className="space-y-2">
                  {catTools.slice(0, 3).map((t) => (
                    <div key={t.slug} className="text-sm text-tekno-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-tekno-cyan/40" />
                      {t.titleTr}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-tekno-cyan font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {catTools.length}+ araç →
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Font/Text Tools — with preview */}
      {fontTools.length >= 5 && (
        <section className="bg-tekno-deeper border-y border-tekno-border py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-tekno-text">
                ✨ Yazı Stili Araçları
              </h2>
              <Link href="/araclar?kategori=yazi" className="text-tekno-cyan font-medium hover:underline text-sm">
                Tümünü Gör →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {fontTools.slice(0, 10).map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/araclar/${tool.slug}`}
                  className="tool-card p-4 text-center"
                >
                  <div className="font-medium text-sm text-tekno-text">{tool.titleTr}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Games — new layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-tekno-text">
              🎮 Tarayıcı Oyunları
            </h2>
            <Link href="/oyunlar" className="text-tekno-cyan font-medium hover:underline text-sm">
              Tüm Oyunlar →
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {tools.filter(t => t.category === "games").slice(0, 6).map((game) => (
              <Link
                key={game.slug}
                href={`/araclar/${game.slug}`}
                className="panel p-4 text-center hover:border-tekno-cyan/40 hover:shadow-lg hover:shadow-cyan-500/5 transition group"
              >
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-tekno-text font-medium text-sm group-hover:text-tekno-cyan transition-colors">{game.titleTr}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tools — compact grid */}
      <section className="bg-tekno-deeper border-y border-tekno-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-tekno-text mb-8 text-center">
            🔥 Bugün Keşfet
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popular.map((tool) => (
              <Link
                key={tool.slug}
                href={`/araclar/${tool.slug}`}
                className="tool-card p-5 group"
              >
                <h3 className="font-semibold text-tekno-text text-sm mb-1 group-hover:text-tekno-cyan transition-colors">{tool.titleTr}</h3>
                <p className="text-xs text-tekno-muted line-clamp-2">{tool.descriptionTr}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tekno-accent/10 border border-tekno-accent/20 text-tekno-accent text-sm mb-6">
            🇹🇷 %100 Türkçe • Reklamsız • Ücretsiz
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-tekno-text mb-4">
            İhtiyacın Olan Her Şey<br />
            <span className="cyan-text">Tek Adreste</span>
          </h2>
          <p className="text-tekno-muted max-w-md mx-auto mb-8 text-lg">
            Kayıt yok, reklam yok, takip yok. Sadece ihtiyacın olan araçlar.
          </p>
          <Link href="/araclar" className="btn-primary inline-block text-lg px-10 py-4 rounded-xl">
            Hemen Başla 🚀
          </Link>
        </div>
      </section>
    </div>
  );
}
