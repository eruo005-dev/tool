import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const dynamic = "error";
export const dynamicParams = false;

const guidesDir = path.join(process.cwd(), "content", "guides");

function getGuideSlugs(): string[] {
  try {
    return fs.readdirSync(guidesDir)
      .filter(f => f.endsWith(".tsx"))
      .map(f => f.replace(/\.tsx$/, ""));
  } catch {
    return [];
  }
}

const GUIDE_TITLES: Record<string, string> = {
  "ai-tools-for-small-business": "Küçük İşletmeler İçin AI Araçları",
  "best-ai-for-coding-2026": "Kodlama İçin En İyi AI 2026",
  "best-ai-for-data-analysis": "Veri Analizi İçin En İyi AI",
  "best-ai-for-marketing": "Pazarlama İçin En İyi AI",
  "how-to-save-money-fast": "Nasıl Hızlı Para Biriktirilir",
  "how-to-pay-off-debt-fast": "Borçtan Hızlı Kurtulma Rehberi",
  "how-to-make-a-monthly-budget": "Aylık Bütçe Nasıl Yapılır",
  "how-to-save-for-a-house": "Ev Almak İçin Nasıl Tasarruf Edilir",
  "how-to-calculate-a-tip": "Bahşiş Nasıl Hesaplanır",
  "how-to-compare-loan-offers": "Kredi Teklifleri Nasıl Karşılaştırılır",
  "how-to-use-griptape": "Griptape Kullanım Rehberi",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = GUIDE_TITLES[slug] || slug.replace(/-/g, " ");
  return {
    title: `${title} — TeknoAraç Rehber`,
    description: `${title} hakkında kapsamlı rehber — TeknoAraç.`,
  };
}

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(guidesDir, `${slug}.tsx`);

  let content: string | null = null;
  try {
    if (fs.existsSync(filePath)) content = fs.readFileSync(filePath, "utf8");
  } catch {}

  if (!content) notFound();

  const title = GUIDE_TITLES[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toLocaleUpperCase("tr"));

  // Parse useful info from guide content
  const descMatch = content.match(/description:\s*"([^"]*?)"/);
  const h1Match = content.match(/h1:\s*"([^"]*?)"/);
  const headingMatches = content.match(/<h[23][^>]*>([^<]*)<\/h[23]>/gi) || [];
  const paraMatches = content.match(/<p[^>]*>([^<]*?)<\/p>/gi) || [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-sm text-tekno-muted mb-8">
        <a href="/" className="hover:text-tekno-cyan">Ana Sayfa</a>
        <span>/</span>
        <a href="/guides" className="hover:text-tekno-cyan">Rehberler</a>
        <span>/</span>
        <span className="text-tekno-muted">{title}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-tekno-text mb-2">
        {h1Match?.[1] || title}
      </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-tekno-muted mt-2 mb-6">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Son güncelleme: 2026
                </span>
                <span className="opacity-50">•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                  Rehber
                </span>
              </div>
      {descMatch && (
        <p className="text-lg text-tekno-muted mb-8">{descMatch[1]}</p>
      )}

      <div className="prose prose-lg max-w-none text-tekno-muted">
        <div className="bg-tekno-cyan/10 border border-tekno-cyan/20 rounded-xl p-5 mb-8">
          <p className="text-tekno-cyan text-sm font-medium">
            📖 Bu rehber TeknoAraç ekibi tarafından hazırlanmıştır. Tüm araçlarımız ücretsiz ve reklamsızdır.
          </p>
        </div>

        {headingMatches.length > 0 ? (
          headingMatches.slice(0, 15).map((heading, i) => {
            const text = heading.replace(/<[^>]+>/g, "").trim();
            if (!text) return null;
            return (
              <div key={i} className="mb-6">
                <h3 className="text-lg font-semibold text-tekno-text mb-2">{text}</h3>
                {paraMatches[i] && (
                  <p className="text-tekno-muted">{(paraMatches[i].replace(/<[^>]+>/g, "").trim())}</p>
                )}
              </div>
            );
          })
        ) : (
          <div className="space-y-4">
            <p>{title} hakkında kapsamlı rehberimize hoş geldiniz. Bu rehberde konuyla ilgili en güncel bilgileri, pratik ipuçlarını ve adım adım talimatları bulacaksınız.</p>
            <p>TeknoAraç olarak, tüm araçlarımızı ve rehberlerimizi ücretsiz sunuyoruz. Amacımız, herkesin ihtiyaç duyduğu bilgiye ve araçlara kolayca ulaşabilmesi.</p>
            <p>Diğer rehberlerimize göz atmak için <a href="/guides" className="text-tekno-cyan hover:underline">rehberler sayfamızı</a> ziyaret edebilirsiniz.</p>
          </div>
        )}
      </div>
    </div>
  );
}
