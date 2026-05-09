import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "İletişim | TeknoAraç",
  description: "TeknoAraç ile iletişime geçin — öneri, şikayet ve işbirliği için bize ulaşın.",
  keywords: ["iletişim", "destek", "geri bildirim", "TeknoAraç"],
  alternates: { canonical: "https://teknoarac.com/iletisim" },
  openGraph: {
    title: "İletişim | TeknoAraç",
    description: "TeknoAraç ile iletişime geçin — öneri, şikayet ve işbirliği için bize ulaşın.",
    url: "https://teknoarac.com/iletisim",
    siteName: "TeknoAraç",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "TeknoAraç" }],
  },
  twitter: { card: "summary_large_image", title: "İletişim", description: "TeknoAraç ile iletişime geçin.", images: ["/og-image.svg"] },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="panel p-10 rounded-2xl">
        <h1 className="text-3xl font-extrabold text-tekno-text mb-4">İletişim</h1>
        <p className="text-tekno-muted mb-8">Bir sorunuz, öneriniz veya geri bildiriminiz mi var? Bize yazın.</p>
        <form className="space-y-4">
          <div><label className="block text-sm font-medium text-tekno-muted mb-1">Adınız</label><input type="text" className="w-full p-3 bg-tekno-dark border border-tekno-border rounded-xl text-tekno-text focus:ring-2 focus:ring-tekno-cyan focus:border-tekno-cyan transition" placeholder="Adınız" /></div>
          <div><label className="block text-sm font-medium text-tekno-muted mb-1">E-posta</label><input type="email" className="w-full p-3 bg-tekno-dark border border-tekno-border rounded-xl text-tekno-text focus:ring-2 focus:ring-tekno-cyan focus:border-tekno-cyan transition" placeholder="ornek@email.com" /></div>
          <div><label className="block text-sm font-medium text-tekno-muted mb-1">Mesajınız</label><textarea className="w-full p-3 bg-tekno-dark border border-tekno-border rounded-xl text-tekno-text focus:ring-2 focus:ring-tekno-cyan focus:border-tekno-cyan transition" rows={5} placeholder="Mesajınızı yazın..." /></div>
          <button type="submit" className="btn-primary w-full py-3">Gönder</button>
        </form>
      </div>
    </div>
  );
}
