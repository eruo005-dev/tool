import type { Metadata } from "next";
export const metadata: Metadata = { title: "Çerez Politikası — ToolPazar" };

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Çerez Politikası</h1>
      <div className="bg-green-50 border border-green-100 rounded-xl p-5 mb-8 text-green-800">
        <strong>Basitçe:</strong> Sadece site çalışması için zorunlu çerezler kullanıyoruz. Takip, reklam veya analitik çerezi kullanmıyoruz.
      </div>
      <div className="space-y-4 text-gray-600">
        <p>ToolPazar'da kullanılan tek çerez, tema tercihinizi (açık/koyu mod) hatırlamak içindir. Bu çerez hiçbir kişisel veri içermez.</p>
        <p>Tarayıcınızın ayarlarından tüm çerezleri devre dışı bırakabilirsiniz, ancak bu durumda tema tercihiniz kaydedilmez.</p>
      </div>
    </div>
  );
}
