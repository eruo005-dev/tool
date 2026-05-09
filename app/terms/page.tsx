import type { Metadata } from "next";
export const metadata: Metadata = { title: "Kullanım Şartları — ToolPazar", description: "ToolPazar kullanım şartları ve koşulları." };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-pazar-dark mb-4">Kullanım Şartları</h1>
      <p className="text-sm text-gray-400 mb-8">Son güncelleme: Mayıs 2026</p>
      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-xl font-semibold text-pazar-dark mb-2">Hizmet Kullanımı</h2>
          <p>ToolPazar araçları kişisel kullanım için ücretsizdir. Araçları kötüye kullanmayın, sistemlerimize aşırı yük bindirmeyin.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-pazar-dark mb-2">Garanti Verilmez</h2>
          <p>Araçlar "olduğu gibi" sunulur. Hesaplamalar bilgilendirme amaçlıdır. Finansal, hukuki veya tıbbi kararlar için uzmana danışın.</p>
        </section>
        <p className="text-sm text-gray-400 pt-4">Sorularınız için <a href="/contact" className="text-pazar-gold hover:underline">iletişime geçin</a>.</p>
      </div>
    </div>
  );
}
