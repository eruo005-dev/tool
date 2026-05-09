import { tools, categories } from "@/lib/tools";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ToolComponent } from "./ToolClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return { title: "Araç Bulunamadı — TeknoAraç" };
  return {
    title: `${tool.titleTr} — TeknoAraç`,
    description: tool.descriptionTr,
  };
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const related = tools.filter((t) => t.category === tool.category && t.slug !== slug).slice(0, 6);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-tekno-muted mb-8">
        <a href="/" className="hover:text-tekno-cyan">Ana Sayfa</a>
        <span>/</span>
        <a href="/tools" className="hover:text-tekno-cyan">Araçlar</a>
        <span>/</span>
        <span className="text-tekno-muted">{tool.titleTr}</span>
      </div>

      {/* Tool Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{tool.icon}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-tekno-text">{tool.titleTr}</h1>
        </div>
        <p className="text-lg text-tekno-muted">{tool.descriptionTr}</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs bg-tekno-panel text-tekno-muted px-3 py-1 rounded-full">
            {categories[tool.category]?.icon} {categories[tool.category]?.title}
          </span>
        </div>
      </div>

      {/* Tool Component (Client) */}
      <div className="bg-tekno-panel rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
        <ToolComponent slug={slug} />
      </div>

      {/* Related Tools */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-tekno-text mb-4">Benzer Araçlar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {related.map((t) => (
              <a key={t.slug} href={`/tools/${t.slug}`} className="bg-tekno-panel rounded-xl p-4 border border-gray-100 hover:border-tekno-cyan/30 transition text-center">
                <div className="text-xl mb-2">{t.icon}</div>
                <div className="text-sm font-medium text-tekno-muted">{t.titleTr}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
