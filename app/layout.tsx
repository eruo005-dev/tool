import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_NAME = "TeknoAraç";
const SITE_URL = "https://teknoarac.com";
const SITE_DESC = "Türkiye'nin Dijital Araç Kutusu — 771+ ücretsiz çevrimiçi araç, 591 rehber ve 19 oyun. KD Hesaplama, metin araçları, PDF araçları ve daha fazlası.";
const SITE_KEYWORDS = ["ücretsiz araçlar", "online araçlar", "hesaplama", "metin stilleri", "PDF araçları", "görsel araçları", "Türkçe araçlar", "dönüştürücü", "teknoaraç"];

export const metadata: Metadata = {
  title: SITE_NAME + " — " + SITE_DESC.split(" —")[0],
  description: SITE_DESC,
  keywords: SITE_KEYWORDS,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_NAME + " — " + SITE_DESC.split(" —")[0],
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
    images: ["/og-image.svg"],
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
              <a href="/kategoriler" className="hover:text-tekno-cyan transition">Kategoriler</a>
              <a href="/oyunlar" className="hover:text-tekno-cyan transition">Oyunlar</a>
              <a href="/rehberler" className="hover:text-tekno-cyan transition">Rehberler</a>
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
