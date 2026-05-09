export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-tekno-cyan/30 border-t-tekno-cyan rounded-full animate-spin" />
        <p className="text-tekno-muted text-sm">Yükleniyor...</p>
      </div>
    </div>
  );
}
