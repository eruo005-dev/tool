import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-3xl font-bold text-tekno-text mb-4">
          Sayfa Bulunamadı
        </h1>
        <p className="text-tekno-muted mb-8 leading-relaxed">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          Aşağıdaki bağlantılardan devam edebilirsiniz.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-tekno-cyan text-tekno-deeper rounded-xl font-semibold hover:bg-tekno-cyan/80 transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/araclar"
            className="px-6 py-3 border border-tekno-border text-tekno-text rounded-xl font-semibold hover:border-tekno-cyan/40 transition-colors"
          >
            Araçlar
          </Link>
          <Link
            href="/rehberler"
            className="px-6 py-3 border border-tekno-border text-tekno-text rounded-xl font-semibold hover:border-tekno-cyan/40 transition-colors"
          >
            Rehberler
          </Link>
        </div>
      </div>
    </div>
  );
}
