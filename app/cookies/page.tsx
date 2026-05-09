import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Çerez Politikası | TeknoAraç",
  description: "TeknoAraç çerez politikası. Sadece tema tercihi için zorunlu çerez kullanıyoruz. Takip, reklam veya analitik çerezi kullanmıyoruz.",
  alternates: { canonical: "https://teknoarac.com/cerezler" },
  openGraph: {
    title: "Çerez Politikası | TeknoAraç",
    description: "Takip yok, reklam yok, analitik yok — sadece tema tercihi.",
    url: "https://teknoarac.com/cerezler",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Çerez Politikası", images: ["/og-image.svg"] },
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-tekno-text mb-4">Çerez Politikası</h1>
      <div className="bg-green-50 border border-green-100 rounded-xl p-5 mb-8 text-green-800">
        <strong>Basitçe:</strong> Sadece site çalışması için zorunlu çerezler kullanıyoruz. Takip, reklam veya analitik çerezi kullanmıyoruz.
      </div>
      <div className="space-y-4 text-tekno-muted">
        <p>TeknoAraç'da kullanılan tek çerez, tema tercihinizi (açık/koyu mod) hatırlamak içindir. Bu çerez hiçbir kişisel veri içermez.</p>
        <p>Tarayıcınızın ayarlarından tüm çerezleri devre dışı bırakabilirsiniz, ancak bu durumda tema tercihiniz kaydedilmez.</p>
      </div>
    </div>
  );
}
