import type { Metadata } from "next";
export const metadata: Metadata = { title: "İletişim — ToolPazar", description: "ToolPazar ile iletişime geçin. Araç önerileri, sorular ve geri bildirim için bize yazın." };

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">İletişim</h1>
      <p className="text-gray-500 mb-8">Bir sorunuz, öneriniz veya geri bildiriminiz mi var? Bize yazın.</p>
      <form className="space-y-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Adınız</label><input type="text" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pazar-red" placeholder="Adınız" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label><input type="email" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pazar-red" placeholder="örnek@email.com" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label><textarea className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pazar-red" rows={5} placeholder="Mesajınızı yazın..." /></div>
        <button type="submit" className="w-full py-3 bg-pazar-red text-white font-semibold rounded-xl hover:bg-red-700 transition">Gönder</button>
      </form>
    </div>
  );
}
