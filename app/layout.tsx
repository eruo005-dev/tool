import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToolPazar — 770+ Ücretsiz Çevrimiçi Araç",
  description: "770'den fazla ücretsiz çevrimiçi araç ve 590'den fazla rehber. Hesap makineleri, dönüştürücüler, yazı araçları ve daha fazlası — hepsi Türkçe, hepsi ücretsiz.",
  keywords: "ücretsiz araçlar, online hesaplama, PDF araçları, görsel araçları, yazı stili, KDV hesaplama, Türkçe araçlar, AI araçları",
  robots: "index, follow",
  openGraph: {
    title: "ToolPazar — 770+ Ücretsiz Çevrimiçi Araç",
    description: "770+ ücretsiz çevrimiçi araç. Hesap makineleri, PDF araçları, görsel düzenleyiciler, AI yazı araçları ve 590+ rehber.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-xl text-pazar-red">
              <span className="bg-pazar-red text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">TP</span>
              ToolPazar
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="/tools" className="hover:text-pazar-red transition">Araçlar</a>
              <a href="/guides" className="hover:text-pazar-red transition">Rehberler</a>
              <a href="/tools/yazi" className="hover:text-pazar-red transition">Yazı Stilleri</a>
              <a href="/tools/hesap" className="hover:text-pazar-red transition">Hesaplamalar</a>
              <a href="/about" className="hover:text-pazar-red transition">Hakkımızda</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-white border-t border-gray-100 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">ToolPazar</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <a href="/about" className="hover:text-pazar-red">Hakkımızda</a>
                <a href="/contact" className="hover:text-pazar-red">İletişim</a>
                <a href="/privacy" className="hover:text-pazar-red">Gizlilik</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Araçlar</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <a href="/tools" className="hover:text-pazar-red">Tüm Araçlar</a>
                <a href="/tools?category=yazi" className="hover:text-pazar-red">Yazı Stilleri</a>
                <a href="/tools?category=hesap" className="hover:text-pazar-red">Hesaplamalar</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Popüler</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <a href="/tools/fancy-text" className="hover:text-pazar-red">Süslü Yazı</a>
                <a href="/tools/kdv-hesapla" className="hover:text-pazar-red">KDV Hesapla</a>
                <a href="/tools/sifre-olustur" className="hover:text-pazar-red">Şifre Oluştur</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Yasal</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <a href="/terms" className="hover:text-pazar-red">Kullanım Şartları</a>
                <a href="/privacy" className="hover:text-pazar-red">Gizlilik Politikası</a>
                <a href="/cookies" className="hover:text-pazar-red">Çerezler</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} ToolPazar. Tüm araçlar ücretsizdir. 🇹🇷
          </div>
        </footer>
      </body>
    </html>
  );
}
