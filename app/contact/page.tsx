import type { Metadata } from "next";
export const metadata: Metadata = { title: "İletişim — TeknoAraç", description: "TeknoAraç ile iletişime geçin. Araç önerileri, sorular ve geri bildirim için bize yazın." };

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="panel p-10 rounded-2xl">
        <h1 className="text-3xl font-extrabold text-tekno-text mb-4">İletişim</h1>
        <p className="text-tekno-muted mb-8">Bir sorunuz, öneriniz veya geri bildiriminiz mi var? Bize yazın.</p>
        <form className="space-y-4">
          <div><label className="block text-sm font-medium text-tekno-muted mb-1">Adınız</label><input type="text" className="w-full p-3 bg-tekno-dark border border-tekno-border rounded-xl text-tekno-text focus:ring-2 focus:ring-tekno-cyan focus:border-tekno-cyan transition" placeholder="Adınız" /></div>
          <div><label className="block text-sm font-medium text-tekno-muted mb-1">E-posta</label><input type="email" className="w-full p-3 bg-tekno-dark border border-tekno-border rounded-xl text-tekno-text focus:ring-2 focus:ring-tekno-cyan focus:border-tekno-cyan transition" placeholder="ornek@email.com" /></div>
          <div><label className="block text-sm font-medium text-tekno-muted mb-1">Mesajınız</label><textarea className="w-full p-3 bg-tekno-dark border border-tekno-border rounded-xl text-tekno-text focus:ring-2 focus:ring-tekno-cyan focus:border-tekno-cyan transition" rows={5} placeholder="Mesajınızı yazın..." /></div>
          <button type="submit" className="btn-primary w-full py-3">Gönder</button>
        </form>
      </div>
    </div>
  );
}
