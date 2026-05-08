import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Rehberler — ToolPazar",
  description: "Ücretsiz çevrimiçi araç rehberleri. 590+ kılavuz, ipucu ve nasıl yapılır makalesi.",
};

export default function GuidesPage() {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  let slugs: string[] = [];
  try {
    slugs = fs.readdirSync(guidesDir)
      .filter(f => f.endsWith(".tsx"))
      .map(f => f.replace(/\.tsx$/, ""));
  } catch {}

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Rehberler</h1>
      <p className="text-gray-500 mb-8">Araç kullanım kılavuzları, ipuçları ve nasıl yapılır rehberleri ({slugs.length} rehber)</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slugs.map((slug) => (
          <Link
            key={slug}
            href={`/guides/${slug}`}
            className="bg-white rounded-xl border border-gray-100 p-5 hover:border-pazar-red/30 hover:shadow-sm transition"
          >
            <h2 className="font-semibold text-gray-800 mb-1 text-sm">{slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toLocaleUpperCase("tr"))}</h2>
            <p className="text-xs text-gray-500">Kılavuzu oku →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
