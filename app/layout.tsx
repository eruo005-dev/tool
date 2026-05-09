import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToolPazar — 770+ Ücretsiz Çevrimiçi Araç",
  description: "770'ten fazla ücretsiz çevrimiçi araç ve 590'dan fazla rehber. Hesap makineleri, dönüştürücüler, yazı araçları ve daha fazlası — hepsi Türkçe, hepsi ücretsiz.",
  keywords: "ücretsiz araçlar, online hesaplama, PDF araçları, görsel araçları, yazı stili, KDV hesaplama, Türkçe araçlar, AI araçları",
  robots: "index, follow",
  openGraph: {
    title: "ToolPazar — 770+ Ücretsiz Çevrimiçi Araç",
    description: "770+ ücretsiz çevrimiçi araç. Hesap makineleri, PDF araçları, görsel düzenleyiciler, AI yazı araçları ve 590+ rehber.",
    type: "website",
    locale: "tr_TR",
  },
};

export const viewport: Viewport = {
  themeColor: "#C8A84E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col bg-pazar-cream">
        <header className="bg-white/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="gold-gradient text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm">TP</span>
              <span className="gold-gradient-text">ToolPazar</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="/tools" className="hover:text-pazar-gold transition">Araçlar</a>
              <a href="/games" className="hover:text-pazar-gold transition">Oyunlar</a>
              <a href="/guides" className="hover:text-pazar-gold transition">Rehberler</a>
              <a href="/tools?category=yazi" className="hover:text-pazar-gold transition">Yazı Stilleri</a>
              <a href="/tools?category=hesap" className="hover:text-pazar-gold transition">Hesaplamalar</a>
              <a href="/about" className="hover:text-pazar-gold transition">Hakkımızda</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-pazar-dark text-gray-300 mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-3">ToolPazar</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/about" className="hover:text-pazar-gold transition">Hakkımızda</a>
                <a href="/contact" className="hover:text-pazar-gold transition">İletişim</a>
                <a href="/privacy" className="hover:text-pazar-gold transition">Gizlilik</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Araçlar</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/tools" className="hover:text-pazar-gold transition">Tüm Araçlar</a>
                <a href="/games" className="hover:text-pazar-gold transition">Tarayıcı Oyunları</a>
                <a href="/tools?category=yazi" className="hover:text-pazar-gold transition">Yazı Stilleri</a>
                <a href="/tools?category=hesap" className="hover:text-pazar-gold transition">Hesaplamalar</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Popüler</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/tools/fancy-text" className="hover:text-pazar-gold transition">Süslü Yazı</a>
                <a href="/tools/kdv-hesapla" className="hover:text-pazar-gold transition">KDV Hesapla</a>
                <a href="/tools/sifre-olustur" className="hover:text-pazar-gold transition">Şifre Oluştur</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Yasal</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/terms" className="hover:text-pazar-gold transition">Kullanım Şartları</a>
                <a href="/privacy" className="hover:text-pazar-gold transition">Gizlilik Politikası</a>
                <a href="/cookies" className="hover:text-pazar-gold transition">Çerezler</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ToolPazar. Tüm araçlar ücretsizdir. 🇹🇷
          </div>
        </footer>
      </body>
    </html>
  );
}
