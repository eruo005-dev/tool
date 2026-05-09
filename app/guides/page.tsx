import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Rehberler — TeknoAraç",
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
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-tekno-text mb-2">📚 Rehberler</h1>
        <p className="text-tekno-muted">Araç kullanım kılavuzları, ipuçları ve nasıl yapılır rehberleri ({slugs.length} rehber)</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {slugs.map((slug) => (
          <Link
            key={slug}
            href={`/rehberler/${slug}`}
            className="panel p-5 hover:border-tekno-cyan/40 hover:shadow-lg hover:shadow-cyan-500/5 transition group"
          >
            <h2 className="font-semibold text-tekno-text mb-1 text-sm group-hover:text-tekno-cyan transition-colors">
              {slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toLocaleUpperCase("tr"))}
            </h2>
            <p className="text-xs text-tekno-muted group-hover:text-tekno-cyan-dim transition-colors">Kılavuzu oku →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
