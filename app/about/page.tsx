import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — ToolPazar",
  description: "ToolPazar, herkesin ücretsiz kullanabileceği çevrimiçi araçlar sunan Türkiye merkezli bir platformdur.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Hakkımızda</h1>
      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p className="text-lg">
          ToolPazar, herkesin ücretsiz kullanabileceği çevrimiçi araçları bir araya getiren Türkiye merkezli bir platformdur.
          Hesap makinelerinden yazı stillerine, döviz çeviriciden birim dönüştürücülere kadar 25'ten fazla araç sunuyoruz.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">Misyonumuz</h2>
        <p>
          İnternette ihtiyaç duyduğunuz basit araçları bulmak için onlarca site dolaşmanıza gerek yok.
          ToolPazar, tüm bu araçları tek bir adreste, reklamsız ve ücretsiz olarak sunmak için var.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">Neden ToolPazar?</h2>
        <div className="grid md:grid-cols-3 gap-4 not-prose">
          {[
            { title: "Tamamen Ücretsiz", desc: "Tüm araçlar sonsuza kadar ücretsiz.", icon: "💸" },
            { title: "Reklamsız", desc: "Dikkat dağıtıcı reklamlar yok.", icon: "🚫" },
            { title: "Hızlı ve Güvenli", desc: "Verileriniz cihazınızda kalır.", icon: "🔒" },
            { title: "Türkçe Odaklı", desc: "Türk kullanıcılar için optimize edildi.", icon: "🇹🇷" },
            { title: "Mobil Uyumlu", desc: "Telefon, tablet ve bilgisayarda çalışır.", icon: "📱" },
            { title: "Sürekli Güncel", desc: "Her hafta yeni araçlar ekliyoruz.", icon: "🔄" },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-5">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
