import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeknoAraç — Türkiye'nin Dijital Araç Kutusu",
  description: "770'ten fazla ücretsiz çevrimiçi araç, 590'dan fazla rehber. KD Hesaplama, metin araçları, oyunlar ve çok daha fazlası.",
  keywords: "ücretsiz araçlar, online araçlar, KD hesaplama, metin stilleri, PDF araçları, görsel araçları, Türkçe araçlar",
  robots: "index, follow",
  openGraph: {
    title: "TeknoAraç — Türkiye'nin Dijital Araç Kutusu",
    description: "770'den fazla ücretsiz çevrimiçi araç. Sadece Türkiye için, sadece Türkçe.",
    type: "website",
    locale: "tr_TR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen flex flex-col bg-tekno-dark">
        <header className="bg-tekno-deeper/90 backdrop-blur-md border-b border-tekno-border sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="cyan-gradient text-tekno-dark w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold">T</span>
              <span className="cyan-text">TeknoAraç</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-tekno-muted">
              <a href="/araclar" className="hover:text-tekno-cyan transition">Araçlar</a>
              <a href="/oyunlar" className="hover:text-tekno-cyan transition">Oyunlar</a>
              <a href="/rehberler" className="hover:text-tekno-cyan transition">Rehberler</a>
              <a href="/araclar?kategori=yazi" className="hover:text-tekno-cyan transition">Yazı Stilleri</a>
              <a href="/araclar?kategori=hesap" className="hover:text-tekno-cyan transition">Hesaplamalar</a>
              <a href="/hakkinda" className="hover:text-tekno-cyan transition">Hakkımızda</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-tekno-deeper border-t border-tekno-border mt-20">
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-tekno-text mb-3">TeknoAraç</h4>
              <div className="flex flex-col gap-2 text-sm text-tekno-muted">
                <a href="/hakkinda" className="hover:text-tekno-cyan transition">Hakkımızda</a>
                <a href="/iletisim" className="hover:text-tekno-cyan transition">İletişim</a>
                <a href="/gizlilik" className="hover:text-tekno-cyan transition">Gizlilik</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-tekno-text mb-3">Araçlar</h4>
              <div className="flex flex-col gap-2 text-sm text-tekno-muted">
                <a href="/araclar" className="hover:text-tekno-cyan transition">Tüm Araçlar</a>
                <a href="/oyunlar" className="hover:text-tekno-cyan transition">Tarayıcı Oyunları</a>
                <a href="/araclar?kategori=yazi" className="hover:text-tekno-cyan transition">Yazı Stilleri</a>
                <a href="/araclar?kategori=hesap" className="hover:text-tekno-cyan transition">Hesaplamalar</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-tekno-text mb-3">Popüler</h4>
              <div className="flex flex-col gap-2 text-sm text-tekno-muted">
                <a href="/araclar/suslu-yazi" className="hover:text-tekno-cyan transition">Süslü Yazı</a>
                <a href="/araclar/kdv-hesapla" className="hover:text-tekno-cyan transition">KDV Hesapla</a>
                <a href="/araclar/sifre-olustur" className="hover:text-tekno-cyan transition">Şifre Oluştur</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-tekno-text mb-3">Yasal</h4>
              <div className="flex flex-col gap-2 text-sm text-tekno-muted">
                <a href="/kullanim-sartlari" className="hover:text-tekno-cyan transition">Kullanım Şartları</a>
                <a href="/gizlilik" className="hover:text-tekno-cyan transition">Gizlilik Politikası</a>
                <a href="/cerezler" className="hover:text-tekno-cyan transition">Çerezler</a>
              </div>
            </div>
          </div>
          <div className="border-t border-tekno-border py-6 text-center text-sm text-tekno-muted">
            © {new Date().getFullYear()} TeknoAraç. Tüm araçlar ücretsizdir. 🇹🇷
          </div>
        </footer>
      </body>
    </html>
  );
}
