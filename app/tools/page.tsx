import type { Metadata } from "next";
import { tools, categories } from "@/lib/tools";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tüm Araçlar | TeknoAraç",
  description: "Ücretsiz çevrimiçi araçlar, hesaplayıcılar ve dönüştürücüler. 0+ araç, reklamsız ve ücretsiz.",
  keywords: ["araçlar", "hesaplayıcı", "dönüştürücü", "online araç", "ücretsiz", "Türkçe"],
  alternates: { canonical: "https://teknoarac.com/araclar" },
  openGraph: {
    title: "Tüm Araçlar | TeknoAraç",
    description: "0+ ücretsiz çevrimiçi araç — hesaplayıcılar, dönüştürücüler, metin araçları.",
    url: "https://teknoarac.com/araclar",
    siteName: "TeknoAraç",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Tüm Araçlar", images: ["/og-image.svg"] },
};

export default function ToolsPage() {
  const byCategory: Record<string, typeof tools> = {};
  tools.forEach((t) => {
    if (!byCategory[t.category]) byCategory[t.category] = [];
    byCategory[t.category].push(t);
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-tekno-text mb-2">Tüm Araçlar</h1>
        <p className="text-tekno-muted">{tools.length}+ araç, hepsi ücretsiz ve reklamsız</p>
      </div>

      {Object.entries(byCategory).map(([cat, catTools]) => (
        <div key={cat} className="mb-12">
          <h2 className="text-xl font-bold text-tekno-text mb-4 flex items-center gap-2 border-b border-tekno-border pb-3">
            <span>{categories[cat]?.icon}</span>
            {categories[cat]?.title || cat}
            <span className="text-sm font-normal text-tekno-muted">({catTools.length})</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            {catTools.slice(0, 30).map((tool) => (
              <Link
                key={tool.slug}
                href={`/araclar/${tool.slug}`}
                className="panel p-4 hover:border-tekno-cyan/40 hover:shadow-lg hover:shadow-cyan-500/5 transition flex items-start gap-3 group"
              >
                <span className="text-xl shrink-0">{tool.icon}</span>
                <div>
                  <div className="font-medium text-tekno-text text-sm group-hover:text-tekno-cyan transition-colors">{tool.titleTr}</div>
                  <div className="text-xs text-tekno-muted mt-0.5 line-clamp-1">{tool.descriptionTr}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
