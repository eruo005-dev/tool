"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-tekno-text mb-2">Bir şeyler yanlış gitti</h2>
        <p className="text-tekno-muted mb-6 text-sm">Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.</p>
        <button onClick={reset} className="bg-tekno-cyan text-white px-6 py-2 rounded-lg hover:bg-tekno-orange transition-colors">
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}
