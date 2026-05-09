"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Sayfa hatası:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">⚠️</div>
        <h1 className="text-2xl font-bold text-tekno-text mb-4">
          Bir Şeyler Ters Gitti
        </h1>
        <p className="text-tekno-muted mb-8 leading-relaxed">
          Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-tekno-cyan text-tekno-deeper rounded-xl font-semibold hover:bg-tekno-cyan/80 transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}
