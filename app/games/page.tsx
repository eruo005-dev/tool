import { tools } from "@/lib/tools";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarayıcı Oyunları — ToolPazar",
  description: "Ücretsiz tarayıcı oyunları. Yılan Oyunu, Mayın Tarlası, Adam Asmaca, Pong ve daha fazlası. İndirme yok, hemen oyna!",
  keywords: "tarayıcı oyunları, ücretsiz oyunlar, online oyun, snake game, minesweeper, mayın tarlası, adam asmaca",
  robots: "index, follow",
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
        <h1 className="text-3xl md:text-4xl font-bold text-pazar-dark mb-3">
          🎮 Tarayıcı Oyunları
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          {gameTools.length} ücretsiz tarayıcı oyunu. İndirme yok, kurulum yok — hemen oyna!
        </p>
      </div>

      {/* Featured game (first one) */}
      {gameTools.length > 0 && (
        <Link
          href={`/tools/${gameTools[0].slug}`}
          className="block gold-gradient text-white rounded-2xl p-8 mb-8 hover:opacity-95 transition shadow-lg shadow-amber-500/20"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">{gameIcons[gameTools[0].slug] || "🎮"}</span>
            <div>
              <div className="text-sm text-amber-200 mb-1">Öne Çıkan</div>
              <h2 className="text-2xl font-bold">{gameTools[0].titleTr}</h2>
              <p className="text-amber-100/80 text-sm mt-1">{gameTools[0].descriptionTr}</p>
            </div>
          </div>
        </Link>
      )}

      {/* Game Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {gameTools.map((game) => (
          <Link
            key={game.slug}
            href={`/tools/${game.slug}`}
            className="bg-white rounded-xl border border-amber-100 p-5 hover:border-pazar-gold hover:shadow-md transition text-center group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
              {gameIcons[game.slug] || "🎮"}
            </div>
            <h3 className="font-semibold text-sm text-pazar-dark">{game.titleTr}</h3>
          </Link>
        ))}
      </div>

      {/* Bottom info */}
      <div className="mt-16 text-center bg-pazar-dark text-white rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-2">Daha Fazla Araç Keşfet</h3>
        <p className="text-gray-400 mb-6">
          Oyunların yanı sıra 750+ ücretsiz araç seni bekliyor. Hesap makineleri, PDF araçları, yazı stilleri ve çok daha fazlası.
        </p>
        <Link
          href="/tools"
          className="inline-block gold-gradient text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Tüm Araçları Gör
        </Link>
      </div>
    </div>
  );
}
