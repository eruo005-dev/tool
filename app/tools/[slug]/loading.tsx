import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tekno-cyan mx-auto mb-4"></div>
        <p className="text-tekno-muted text-sm">Yükleniyor...</p>
      </div>
    </div>
  );
}
