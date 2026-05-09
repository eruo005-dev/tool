import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | TeknoAraç",
  description: "TeknoAraç, Türkiye'nin dijital araç kutusu. 770+ ücretsiz çevrimiçi araç, tamamen Türkçe, reklamsız.",
  keywords: ["hakkımızda", "TeknoAraç", "Türkçe araçlar", "ücretsiz araçlar"],
  alternates: { canonical: "https://teknoarac.com/hakkinda" },
  openGraph: {
    title: "Hakkımızda | TeknoAraç",
    description: "TeknoAraç, Türkiye'nin dijital araç kutusu.",
    url: "https://teknoarac.com/hakkinda",
    siteName: "TeknoAraç",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Hakkımızda", images: ["/og-image.svg"] },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="panel p-10 rounded-2xl">
        <h1 className="text-3xl font-extrabold text-tekno-text mb-6">Hakkımızda</h1>
        
        <div className="space-y-6 text-tekno-muted leading-relaxed">
          <p>
            <strong className="text-tekno-text">TeknoAraç</strong>, Türkiye&apos;nin en kapsamlı ücretsiz çevrimiçi araç platformudur. 
            2024 yılında, internet kullanıcılarının günlük ihtiyaç duyduğu araçları tek bir adreste, Türkçe ve reklamsız 
            olarak sunmak amacıyla kuruldu.
          </p>

          <p>
            Platformumuzda <strong className="text-tekno-cyan">770&apos;ten fazla araç</strong> ve 
            <strong className="text-tekno-cyan"> 590&apos;dan fazla rehber</strong> bulunmaktadır. 
            Hesap makinelerinden yazı stillerine, PDF araçlarından tarayıcı oyunlarına kadar her şey burada.
          </p>

          <h2 className="text-xl font-bold text-tekno-text mt-8">Neden TeknoAraç?</h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              "🇹🇷 %100 Türkçe — tüm araçlar ve rehberler Türkçe",
              "🚫 Reklamsız deneyim — dikkat dağıtıcı reklamlar yok",
              "📵 Kayıt gerekmez — hiçbir araç için üyelik istemeyiz",
              "🔒 Takip yok — verilerinizi toplamaz, izlemeyiz",
              "⚡ Hızlı ve hafif — tüm araçlar tarayıcınızda anında çalışır",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-tekno-muted">
                <span className="text-tekno-cyan mt-1">▸</span> {item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-tekno-text mt-8">Misyonumuz</h2>
          <p>
            İnternetteki dağınık, İngilizce ağırlıklı araç ekosistemine Türkçe, temiz ve güvenilir bir alternatif sunmak.
            Herkesin, herhangi bir ücret ödemeden veya kayıt olmadan ihtiyaç duyduğu dijital araçlara ulaşabilmesini sağlamak.
          </p>
        </div>
      </div>
    </div>
  );
}
