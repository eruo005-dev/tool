import type { Metadata } from "next";
import { tools, categories } from "@/lib/tools";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tüm Araçlar — ToolPazar",
  description: "Ücretsiz çevrimiçi araçlar, hesaplayıcılar ve dönüştürücüler. 770'den fazla araç, reklamsız ve ücretsiz.",
};

export default function ToolsPage() {
  // Group tools by category
  const byCategory: Record<string, typeof tools> = {};
  tools.forEach((t) => {
    if (!byCategory[t.category]) byCategory[t.category] = [];
    byCategory[t.category].push(t);
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Tüm Araçlar</h1>
      <p className="text-gray-500 mb-8">{tools.length}+ araç, hepsi ücretsiz ve reklamsız</p>

      {Object.entries(byCategory).map(([cat, catTools]) => (
        <div key={cat} className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>{categories[cat]?.icon}</span>
            {categories[cat]?.title || cat}
            <span className="text-sm font-normal text-gray-400">({catTools.length})</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            {catTools.slice(0, 30).map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="bg-white rounded-xl p-4 border border-gray-100 hover:border-pazar-red/30 hover:shadow-sm transition flex items-start gap-3"
              >
                <span className="text-xl shrink-0">{tool.icon}</span>
                <div>
                  <div className="font-medium text-gray-800 text-sm">{tool.titleTr}</div>
                  <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{tool.descriptionTr}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
