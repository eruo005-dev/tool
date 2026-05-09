import { tools } from "@/lib/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarayıcı Oyunları | TeknoAraç",
  description: "Ücretsiz tarayıcı oyunları. Yılan Oyunu, Mayın Tarlası, Adam Asmaca, Pong ve daha fazlası. İndirme yok, hemen oyna!",
  keywords: ["tarayıcı oyunları", "ücretsiz oyunlar", "online oyun", "snake", "mayın tarlası", "tetris"],
  alternates: { canonical: "https://teknoarac.com/oyunlar" },
  openGraph: {
    title: "Tarayıcı Oyunları | TeknoAraç",
    description: "19 ücretsiz tarayıcı oyunu — indirme yok, hemen oyna!",
    url: "https://teknoarac.com/oyunlar",
    siteName: "TeknoAraç",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Tarayıcı Oyunları", images: ["/og-image.svg"] },
};

const gameIcons: Record<string, string> = {
  "tic-tac-toe": "⭕",
  "2048-game": "🔢",
  "hangman-game": "💀",
  "reaction-time-test": "⚡",
  "word-scramble": "🔤",
  "snake-game": "🐍",
  "rock-paper-scissors": "✂️",
  "connect-four": "🔴",
  "lights-out": "💡",
  "whack-a-mole": "🔨",
  "higher-or-lower": "📊",
  "number-guess": "🎯",
  "math-speed-test": "🧮",
  "simon-says": "🎵",
  "15-puzzle": "🧩",
  "tower-of-hanoi": "🗼",
  "wordle-clone": "🟩",
  "minesweeper": "💣",
  "pong": "🏓",
};

export default function GamesPage() {
  const gameTools = tools.filter((t) => t.category === "games");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-tekno-text mb-3">
          🎮 Tarayıcı Oyunları
        </h1>
        <p className="text-tekno-muted max-w-lg mx-auto">
          {gameTools.length} ücretsiz tarayıcı oyunu. İndirme yok, kurulum yok — hemen oyna!
        </p>
      </div>

      {/* Featured game */}
      {gameTools.length > 0 && (
        <Link
          href={`/araclar/${gameTools[0].slug}`}
          className="block cyan-glow bg-tekno-panel border border-tekno-cyan/20 rounded-2xl p-8 mb-8 hover:border-tekno-cyan/50 transition"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">{gameIcons[gameTools[0].slug] || "🎮"}</span>
            <div>
              <div className="text-sm text-tekno-cyan mb-1">Öne Çıkan</div>
              <h2 className="text-2xl font-bold text-tekno-text">{gameTools[0].titleTr}</h2>
              <p className="text-tekno-muted text-sm mt-1">{gameTools[0].descriptionTr}</p>
            </div>
          </div>
        </Link>
      )}

      {/* Game Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {gameTools.map((game) => (
          <Link
            key={game.slug}
            href={`/araclar/${game.slug}`}
            className="tool-card p-5 text-center group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
              {gameIcons[game.slug] || "🎮"}
            </div>
            <h3 className="font-semibold text-sm text-tekno-text group-hover:text-tekno-cyan transition-colors">{game.titleTr}</h3>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center panel border-tekno-cyan/10 p-10 rounded-2xl">
        <h3 className="text-xl font-bold text-tekno-text mb-2">Daha Fazla Araç Keşfet</h3>
        <p className="text-tekno-muted mb-6 max-w-md mx-auto">
          Oyunların yanı sıra 750+ ücretsiz araç seni bekliyor. Hesap makineleri, PDF araçları, yazı stilleri ve çok daha fazlası.
        </p>
        <Link
          href="/araclar"
          className="btn-primary inline-block"
        >
          Tüm Araçları Gör
        </Link>
      </div>
    </div>
  );
}
