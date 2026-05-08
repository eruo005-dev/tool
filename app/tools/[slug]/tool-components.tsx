"use client";

import { tools, type Tool } from "@/lib/tools";

export function ToolComponent({ slug }: { slug: string }) {
  switch (slug) {
    case "fancy-text": return <FancyTextTool />;
    case "case-converter": return <CaseConverterTool />;
    case "text-counter": return <TextCounterTool />;
    case "kdv-hesapla": return <KDVTool />;
    case "sifre-olustur": return <PasswordTool />;
    case "bahsis-hesapla": return <TipCalculatorTool />;
    case "yuzde-hesapla": return <PercentageTool />;
    case "doviz-cevirici": return <CurrencyTool />;
    case "indirim-hesapla": return <DiscountTool />;
    case "birim-cevirici": return <UnitConverterTool />;
    case "kredi-hesapla": return <GenericCalc title="Kredi Hesaplama" fields={["Kredi Tutarı (TL)", "Faiz Oranı (%)", "Vade (Ay)"]} defaults={["100000", "2.5", "12"]} calc={(a, r, m) => { const mr = r / 100; const p = a * mr * Math.pow(1 + mr, m) / (Math.pow(1 + mr, m) - 1); return [p, p * m, p * m - a]; }} labels={["Aylık Ödeme", "Toplam Geri Ödeme", "Toplam Faiz"]} suffix="TL" />;
    case "konut-kredisi": return <GenericCalc title="Konut Kredisi" fields={["Konut Fiyatı (TL)", "Peşinat (%)", "Vade (Yıl)"]} defaults={["3000000", "20", "10"]} calc={(a, p, y) => { const l = a * (1 - p / 100); const m = y * 12; const r = 0.0285; const pmt = l * r * Math.pow(1 + r, m) / (Math.pow(1 + r, m) - 1); return [pmt, l, pmt * m]; }} labels={["Aylık Taksit", "Kredi Tutarı", "Toplam Ödeme"]} suffix="TL" />;
    case "yas-hesapla": return <GenericCalc title="Yaş Hesaplama" fields={["Doğum Yılı", "Ay", "Gün"]} defaults={["1990", "1", "1"]} calc={(y, m, d) => { const b = new Date(y, m - 1, d); const n = new Date(); let a = n.getFullYear() - b.getFullYear(); if (n.getMonth() < b.getMonth() || (n.getMonth() === b.getMonth() && n.getDate() < b.getDate())) a--; const tm = (n.getFullYear() - b.getFullYear()) * 12 + (n.getMonth() - b.getMonth()); const td = Math.floor((n.getTime() - b.getTime()) / 86400000); return [a, tm, td]; }} labels={["Yıl", "Ay", "Gün"]} suffix="" />;
    case "vucut-kitle": return <GenericCalc title="VKİ" fields={["Kilo (kg)", "Boy (cm)"]} defaults={["70", "170"]} calc={(w, h) => { const bmi = w / ((h / 100) ** 2); const c = bmi < 18.5 ? "Zayıf" : bmi < 25 ? "Normal" : bmi < 30 ? "Fazla Kilolu" : "Obez"; return [`${bmi.toFixed(1)} — ${c}`, `${(18.5 * (h/100)**2).toFixed(0)}-${(25 * (h/100)**2).toFixed(0)} kg`]; }} labels={["VKİ & Kategori", "İdeal Aralık"]} suffix="" />;
    case "rastgele-sayi": return <RandomTool />;
    default: return <DefaultTool slug={slug} />;
  }
}

function FancyTextTool() {
  const styles = [
    { name: "Kalın", preview: "𝗠𝗲𝗿𝗵𝗮𝗯𝗮 𝗗𝘂𝗻𝘆𝗮" },
    { name: "İtalik", preview: "𝘔𝘦𝘳𝘩𝘢𝘣𝘢 𝘋𝘶𝘯𝘺𝘢" },
    { name: "El Yazısı", preview: "𝓜𝓮𝓻𝓱𝓪𝓫𝓪 𝓓𝓾𝓷𝔂𝓪" },
    { name: "Baloncuk", preview: "Ⓜⓔⓡⓗⓐⓑⓐ Ⓓⓤⓝⓨⓐ" },
    { name: "Kare", preview: "🄼🄴🅁🄷🄰🄱🄰 🄳🅄🄽🅈🄰" },
    { name: "Gotik", preview: "𝔐𝔢𝔯𝔥𝔞𝔟𝔞 𝔇𝔲𝔫𝔶𝔞" },
    { name: "Çift Vurgulu", preview: "𝕄𝕖𝕣𝕙𝕒𝕓𝕒 𝔻𝕦𝕟𝕪𝕒" },
    { name: "Ters", preview: "Wǝɹɥɐqɐ ᗡnuʎɐ" },
  ];
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Yazınızı girin</label>
      <textarea className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pazar-red" rows={3} placeholder="Buraya yazın..." defaultValue="Merhaba Dünya" />
      <div className="mt-6 grid gap-3">
        {styles.map((s) => (
          <div key={s.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div><div className="font-medium text-gray-700 text-sm">{s.name}</div><div className="text-lg mt-1 text-gray-800">{s.preview}</div></div>
            <button onClick={() => navigator.clipboard.writeText(s.preview)} className="text-xs bg-pazar-red text-white px-3 py-1.5 rounded-lg hover:bg-red-700">Kopyala</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseConverterTool() {
  const [text, setText] = React.useState("merhaba türkiye");
  const cases = [
    { name: "BÜYÜK HARF", convert: (t: string) => t.toLocaleUpperCase("tr") },
    { name: "küçük harf", convert: (t: string) => t.toLocaleLowerCase("tr") },
    { name: "Başlık Düzeni", convert: (t: string) => t.replace(/\b\w/g, (c) => c.toLocaleUpperCase("tr")) },
    { name: "Cümle düzeni", convert: (t: string) => t.charAt(0).toLocaleUpperCase("tr") + t.slice(1) },
    { name: "İlk Harfler Büyük", convert: (t: string) => t.split(" ").map(w => w.charAt(0).toLocaleUpperCase("tr") + w.slice(1)).join(" ") },
    { name: "tErS hArF", convert: (t: string) => t.split("").map((c, i) => i % 2 ? c.toLocaleUpperCase("tr") : c.toLocaleLowerCase("tr")).join("") },
  ];
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Metninizi girin</label>
      <textarea className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pazar-red" rows={4} value={text} onChange={e => setText(e.target.value)} />
      <div className="mt-6 grid gap-3">
        {cases.map((c) => {
          const result = c.convert(text);
          return (
            <div key={c.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div><div className="text-xs text-gray-400">{c.name}</div><div className="mt-1 text-gray-800 font-medium">{result}</div></div>
              <button onClick={() => navigator.clipboard.writeText(result)} className="text-xs bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-300">Kopyala</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TextCounterTool() {
  const [text, setText] = React.useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.replace(/\s/g, "").length;
  const sentences = (text.match(/[.!?]+/g) || []).length;
  const paras = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
  const readTime = Math.ceil(words / 200);
  const lines = text.trim() ? text.split("\n").filter(l => l.trim()).length : 0;
  const spaces = (text.match(/ /g) || []).length;

  const stats = [
    { label: "Kelime", value: words },
    { label: "Karakter (boşluksuz)", value: chars },
    { label: "Karakter (boşluklu)", value: text.length },
    { label: "Cümle", value: sentences },
    { label: "Paragraf", value: paras },
    { label: "Okuma Süresi", value: `${readTime} sn` },
    { label: "Satır", value: lines },
    { label: "Boşluk", value: spaces },
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Metninizi yapıştırın</label>
      <textarea className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pazar-red" rows={6} value={text} onChange={e => setText(e.target.value)} placeholder="Metninizi buraya yapıştırın..." />
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
            <div className="text-2xl font-bold text-pazar-red">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KDVTool() {
  const [amount, setAmount] = React.useState(1000);
  const [rate, setRate] = React.useState(20);
  const kdv = amount * rate / 100;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Tutar (TL)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pazar-red" value={amount} onChange={e => setAmount(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">KDV Oranı</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={rate} onChange={e => setRate(Number(e.target.value))}><option value={1}>%1 (Gıda)</option><option value={10}>%10 (Temel İhtiyaç)</option><option value={20}>%20 (Standart)</option></select></div>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl p-5 text-center"><div className="text-xs text-gray-400">KDV Hariç</div><div className="text-xl font-bold text-gray-800">{amount.toLocaleString("tr-TR")} TL</div></div>
        <div className="bg-pazar-red/5 rounded-xl p-5 text-center"><div className="text-xs text-gray-400">KDV Tutarı</div><div className="text-xl font-bold text-pazar-red">{kdv.toLocaleString("tr-TR")} TL</div></div>
        <div className="bg-gray-50 rounded-xl p-5 text-center"><div className="text-xs text-gray-400">KDV Dahil</div><div className="text-xl font-bold text-gray-800">{(amount + kdv).toLocaleString("tr-TR")} TL</div></div>
      </div>
    </div>
  );
}

function PasswordTool() {
  const [pw, setPw] = React.useState(generatePassword(16, true, true, true, true));
  const [len, setLen] = React.useState(16);
  const [opts, setOpts] = React.useState({ upper: true, lower: true, nums: true, syms: true });
  function generatePassword(l: number, upper: boolean, lower: boolean, nums: boolean, syms: boolean) {
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (nums) chars += "0123456789";
    if (syms) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) chars = "abcdefghijklmnopqrstuvwxyz";
    return Array.from({ length: l }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }
  return (
    <div>
      <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 mb-6">
        <div className="text-3xl font-mono font-bold text-gray-800 mb-2 break-all">{pw}</div>
        <button onClick={() => navigator.clipboard.writeText(pw)} className="text-sm bg-pazar-red text-white px-4 py-2 rounded-lg hover:bg-red-700">Kopyala</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Uzunluk: {len}</label><input type="range" min={8} max={50} value={len} onChange={e => { const v = Number(e.target.value); setLen(v); setPw(generatePassword(v, opts.upper, opts.lower, opts.nums, opts.syms)); }} className="w-full accent-pazar-red" /></div>
        <div className="flex flex-wrap gap-3">
          {[{ key: "upper", label: "Büyük Harf" }, { key: "lower", label: "Küçük Harf" }, { key: "nums", label: "Rakam" }, { key: "syms", label: "Sembol" }].map(o => (
            <label key={o.key} className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" checked={opts[o.key as keyof typeof opts]} onChange={e => { const n = { ...opts, [o.key]: e.target.checked }; setOpts(n); setPw(generatePassword(len, n.upper, n.lower, n.nums, n.syms)); }} className="accent-pazar-red" />{o.label}
            </label>
          ))}
        </div>
      </div>
      <button onClick={() => setPw(generatePassword(len, opts.upper, opts.lower, opts.nums, opts.syms))} className="mt-4 w-full py-3 bg-pazar-red text-white font-semibold rounded-xl hover:bg-red-700">Yeni Şifre Oluştur</button>
    </div>
  );
}

function TipCalculatorTool() {
  const [bill, setBill] = React.useState(500);
  const [people, setPeople] = React.useState(2);
  const [pct, setPct] = React.useState(10);
  const tip = bill * pct / 100;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Hesap Tutarı (TL)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={bill} onChange={e => setBill(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Kişi Sayısı</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={people} onChange={e => setPeople(Math.max(1, Number(e.target.value) || 1))} /></div>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {[5, 10, 12, 15, 18, 20].map(v => (
          <button key={v} onClick={() => setPct(v)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${pct === v ? "bg-pazar-red text-white" : "bg-gray-100 hover:bg-gray-200"}`}>%{v}</button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl p-4 text-center"><div className="text-xs text-gray-400">Bahşiş</div><div className="text-xl font-bold text-gray-800">{tip.toLocaleString("tr-TR")} TL</div></div>
        <div className="bg-gray-50 rounded-xl p-4 text-center"><div className="text-xs text-gray-400">Toplam</div><div className="text-xl font-bold text-gray-800">{(bill + tip).toLocaleString("tr-TR")} TL</div></div>
        <div className="bg-pazar-red/5 rounded-xl p-4 text-center"><div className="text-xs text-gray-400">Kişi Başı</div><div className="text-xl font-bold text-pazar-red">{((bill + tip) / people).toLocaleString("tr-TR")} TL</div></div>
      </div>
    </div>
  );
}

function PercentageTool() {
  const [num, setNum] = React.useState(500);
  const [pct, setPct] = React.useState(20);
  const result = num * pct / 100;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Sayı</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={num} onChange={e => setNum(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Yüzde (%)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={pct} onChange={e => setPct(Number(e.target.value) || 0)} /></div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-xl p-4 text-center"><div className="text-xs text-gray-400">Yüzdesi</div><div className="text-xl font-bold text-gray-800">{result.toLocaleString("tr-TR")}</div></div>
        <div className="bg-pazar-red/5 rounded-xl p-4 text-center"><div className="text-xs text-gray-400">Toplam (Artan)</div><div className="text-xl font-bold text-pazar-red">{(num + result).toLocaleString("tr-TR")}</div></div>
      </div>
    </div>
  );
}

function CurrencyTool() {
  const [amount, setAmount] = React.useState(100);
  const [from, setFrom] = React.useState("TRY");
  const [to, setTo] = React.useState("USD");
  const rates: Record<string, number> = { USD: 1, EUR: 0.92, GBP: 0.79, TRY: 32.5, CHF: 0.90, JPY: 155 };
  const result = (amount / (rates[from] || 1)) * (rates[to] || 1);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Miktar</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={amount} onChange={e => setAmount(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Kaynak</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={from} onChange={e => setFrom(e.target.value)}>
          {Object.entries({ TRY: "₺ Türk Lirası", USD: "$ ABD Doları", EUR: "€ Euro", GBP: "£ Sterlin", CHF: "₣ Frangı", JPY: "¥ Yen" }).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Hedef</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={to} onChange={e => setTo(e.target.value)}>
          {Object.entries({ USD: "$ ABD Doları", EUR: "€ Euro", GBP: "£ Sterlin", TRY: "₺ Türk Lirası", CHF: "₣ Frangı" }).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select></div>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
        <div className="text-sm text-gray-400 mb-2">Dönüştürülen Tutar</div>
        <div className="text-3xl font-bold text-pazar-red">{result.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div className="text-xs text-gray-400 mt-2">Gösterge niteliğinde kurlar</div>
      </div>
    </div>
  );
}

function DiscountTool() {
  const [price, setPrice] = React.useState(1000);
  const [rate, setRate] = React.useState(30);
  const saved = price * rate / 100;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Ürün Fiyatı (TL)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={price} onChange={e => setPrice(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">İndirim (%)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={rate} onChange={e => setRate(Number(e.target.value) || 0)} /></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-xl p-4 text-center"><div className="text-xs text-gray-400">İndirim</div><div className="text-xl font-bold text-gray-800">{saved.toLocaleString("tr-TR")} TL</div></div>
        <div className="bg-pazar-red/5 rounded-xl p-4 text-center"><div className="text-xs text-gray-400">İndirimli Fiyat</div><div className="text-xl font-bold text-pazar-red">{(price - saved).toLocaleString("tr-TR")} TL</div></div>
        <div className="bg-green-50 rounded-xl p-4 text-center"><div className="text-xs text-gray-400">Tasarruf</div><div className="text-xl font-bold text-green-600">{saved.toLocaleString("tr-TR")} TL</div></div>
      </div>
    </div>
  );
}

function UnitConverterTool() {
  const [val, setVal] = React.useState(1);
  const [from, setFrom] = React.useState("km");
  const [to, setTo] = React.useState("mi");
  const toMeter: Record<string, number> = { mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, mi: 1609.34 };
  const result = (val * (toMeter[from] || 1)) / (toMeter[to] || 1);
  const units = { mm: "Milimetre", cm: "Santimetre", m: "Metre", km: "Kilometre", in: "İnç", ft: "Fit", mi: "Mil" };
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Değer</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={val} onChange={e => setVal(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Kaynak</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={from} onChange={e => setFrom(e.target.value)}>{Object.entries(units).map(([k, v]) => <option key={k} value={k}>{v} ({k})</option>)}</select></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Hedef</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={to} onChange={e => setTo(e.target.value)}>{Object.entries(units).map(([k, v]) => <option key={k} value={k}>{v} ({k})</option>)}</select></div>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 text-center"><div className="text-sm text-gray-400 mb-2">Sonuç</div><div className="text-3xl font-bold text-pazar-red">{result.toLocaleString("tr-TR", { maximumFractionDigits: 4 })}</div></div>
    </div>
  );
}

import React from "react";

function GenericCalc({ title, fields, defaults, calc, labels, suffix }: {
  title: string; fields: string[]; defaults: string[]; calc: (...args: number[]) => (string | number)[]; labels: string[]; suffix: string;
}) {
  const values = defaults.map(Number);
  const [state, setState] = React.useState(values);
  const results = calc(...state.map(Number));

  return (
    <div>
      <div className={`grid md:grid-cols-${Math.min(fields.length, 3)} gap-4 mb-6`}>
        {fields.map((label, i) => (
          <div key={i}><label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={state[i]} onChange={e => {
              const n = [...state]; n[i] = Number(e.target.value) || 0; setState(n);
            }} />
          </div>
        ))}
      </div>
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}>
        {labels.map((label, i) => {
          const v = typeof results[i] === "number" ? results[i].toLocaleString("tr-TR") : String(results[i]);
          return (
            <div key={i} className={`rounded-xl p-4 text-center border ${i === 0 ? "bg-pazar-red/5 border-pazar-red/20" : "bg-gray-50 border-gray-100"}`}>
              <div className="text-xs text-gray-400">{label}</div>
              <div className={`text-xl font-bold ${i === 0 ? "text-pazar-red" : "text-gray-800"}`}>{v} {suffix}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RandomTool() {
  const [min, setMin] = React.useState(1);
  const [max, setMax] = React.useState(100);
  const [result, setResult] = React.useState(42);
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Minimum</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={min} onChange={e => setMin(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-2">Maksimum</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={max} onChange={e => setMax(Number(e.target.value) || 0)} /></div>
      </div>
      <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
        <div className="text-5xl font-bold text-pazar-red mb-4">{result}</div>
        <button onClick={() => setResult(Math.floor(Math.random() * (max - min + 1)) + min)} className="px-6 py-3 bg-pazar-red text-white font-semibold rounded-xl hover:bg-red-700">Rastgele Sayı Üret</button>
      </div>
    </div>
  );
}

function DefaultTool({ slug }: { slug: string }) {
  const tool = tools.find((t) => t.slug === slug) as Tool | undefined;
  return (
    <div className="text-center py-12">
      {tool && <div className="text-4xl mb-4">{tool.icon}</div>}
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{tool?.titleTr || "Araç"}</h3>
      <p className="text-gray-500 max-w-md mx-auto">{tool?.descriptionTr || "Bu araç yakında eklenecek."}</p>
      <p className="text-sm text-gray-400 mt-4">Çok yakında burada!</p>
    </div>
  );
}
