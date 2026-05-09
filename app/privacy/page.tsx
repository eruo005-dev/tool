import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gizlilik Politikası | TeknoAraç",
  description: "TeknoAraç gizlilik politikası. Hiçbir kişisel veri toplamıyor, depolamıyor veya paylaşmıyoruz. Reklamsız, takipsiz.",
  alternates: { canonical: "https://teknoarac.com/gizlilik" },
  openGraph: {
    title: "Gizlilik Politikası | TeknoAraç",
    description: "Hiçbir kişisel veri toplamıyor, depolamıyor veya paylaşmıyoruz.",
    url: "https://teknoarac.com/gizlilik",
    siteName: "TeknoAraç", locale: "tr_TR", type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Gizlilik Politikası", images: ["/og-image.svg"] },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-tekno-text mb-4">Gizlilik Politikası</h1>
      <p className="text-sm text-gray-400 mb-8">Son güncelleme: Mayıs 2026</p>
      <div className="space-y-6 text-tekno-muted">
        <div className="bg-green-50 border border-green-100 rounded-xl p-5 text-green-800">
          <strong>Gizlilik Sözümüz:</strong> TeknoAraç olarak verilerinizi toplamıyor, takip etmiyor ve satmıyoruz. Araçlarımızın çoğu tamamen tarayıcınızda çalışır.
        </div>
        <section>
          <h2 className="text-xl font-semibold text-tekno-text mb-2">Toplamadığımız Veriler</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kişisel bilgiler (isim, e-posta, adres)</li>
            <li>Kullanım verileri veya analitik</li>
            <li>IP adresleri veya konum verileri</li>
            <li>Takip çerezleri</li>
            <li>Araçlara girdiğiniz hiçbir veri</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-tekno-text mb-2">Araçlar Nasıl Çalışır?</h2>
          <p>Tüm hesaplamalar tarayıcınızda, JavaScript ile yapılır. Girdiğiniz veriler hiçbir zaman cihazınızdan çıkmaz.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-tekno-text mb-2">Çerezler</h2>
          <p>Sadece tema tercihiniz gibi temel işlevler için zorunlu çerezler kullanırız. Takip veya reklam çerezi kullanmayız.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-tekno-text mb-2">İletişim</h2>
          <p>Sorularınız için: <a href="/contact" className="text-tekno-cyan hover:underline">İletişim sayfamızı</a> ziyaret edin.</p>
        </section>
      </div>
    </div>
  );
}
