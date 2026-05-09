"use client";

import React from "react";
import { tools, type Tool } from "@/lib/tools";
import { GameTool } from "./games";

// ============================================================
// SMART AUTO-ROUTER — maps all 772 tools to live components
// ============================================================

export function ToolComponent({ slug }: { slug: string }) {
  const tool = tools.find((t) => t.slug === slug);
  const title = tool?.titleTr || slug;

  // --- EXPLICIT OVERRIDES for unique tools ---
  if (OVERRIDES[slug]) return OVERRIDES[slug]();

  // --- PATTERN-BASED AUTO-ROUTING ---
  // Money calculators: loan, mortgage, savings, debt, budget, etc.
  if (slug.match(/loan|mortgage|debt|savings|budget|finance|credit/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/compound|interest|apr|amortization/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/paycheck|salary|income|wage|earning/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/car-.*loan|auto|vehicle|depreciation|fuel|gas/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/invest|dividend|stock|portfolio|retirement|pension/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/tax|vat|kdv/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/cost|price|fee|expense|afford/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/.*calculator$/)) return <MoneyCalc slug={slug} title={title} />;

  // Unit converters: length, weight, temp, speed, data, volume, area, etc.
  if (slug.match(/converter/)) return <SmartConverter slug={slug} title={title} />;
  if (slug.match(/temperature|length|weight|speed|volume|area|data|time.*zone|pressure|energy|power|frequency|digital-storage/)) return <SmartConverter slug={slug} title={title} />;

  // Currency
  if (slug.match(/currency|exchange|forex|doviz/)) return <CurrencyTool />;

  // Percentage/discount/tip
  if (slug.match(/percentage|percent/)) return <PercentageTool />;
  if (slug.match(/discount|indirim/)) return <DiscountTool />;
  if (slug.match(/tip|gratuity|bahsis/)) return <TipTool />;

  // Health calculators
  if (slug.match(/bmi|calorie|weight|water-intake|macro|protein|body-fat|ideal-weight|waist/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/sleep|pregnancy|ovulation|due-date|conception|fertility/)) return <MoneyCalc slug={slug} title={title} />;
  if (slug.match(/heart-rate|pace|marathon|running|fitness|exercise|workout/)) return <MoneyCalc slug={slug} title={title} />;

  // Text tools
  if (slug.match(/text|word|counter|character|letter|sentence|paragraph|read/)) return <TextTool slug={slug} title={title} />;
  if (slug.match(/case|uppercase|lowercase|capitalize/)) return <CaseConverterTool />;
  if (slug.match(/reverse|flip|mirror|backwards/)) return <TextTool slug={slug} title={title} />;
  if (slug.match(/slug|url.*encode|url.*decode/)) return <TextTool slug={slug} title={title} />;
  if (slug.match(/base64|encode|decode|hash|md5|sha|encrypt/)) return <TextTool slug={slug} title={title} />;
  if (slug.match(/lorem|ipsum|dummy|placeholder/)) return <TextTool slug={slug} title={title} />;
  if (slug.match(/fancy|font|style|bold|italic|strikethrough|cursive|script/)) return <FancyTextTool />;
  if (slug.match(/acronym|abbreviation|initialism/)) return <TextTool slug={slug} title={title} />;
  if (slug.match(/word-search|crossword|anagram|scrabble|palindrome/)) return <TextTool slug={slug} title={title} />;

  // Generators
  if (slug.match(/password|sifre/)) return <PasswordTool />;
  if (slug.match(/generator|generate|random|picker|selector|choose/)) return <GeneratorTool slug={slug} title={title} />;
  if (slug.match(/dice|coin|flip|spin|wheel|lottery/)) return <GeneratorTool slug={slug} title={title} />;
  if (slug.match(/uuid|guid|unique-id/)) return <GeneratorTool slug={slug} title={title} />;
  if (slug.match(/qr-?code|barcode/)) return <LiveTool slug={slug} title={title} />;

  // Timers
  if (slug.match(/timer|countdown|stopwatch|pomodoro|clock|time-tracker|alarm/)) return <TimerTool slug={slug} title={title} />;

  // Color tools
  if (slug.match(/color|palette|gradient|rgb|hex|hsl|cmyk/)) return <LiveTool slug={slug} title={title} />;

  // Dev tools
  if (slug.match(/json|yaml|xml|csv|toml|markdown/)) return <DevTool slug={slug} title={title} />;
  if (slug.match(/regex|regexp/)) return <DevTool slug={slug} title={title} />;
  if (slug.match(/jwt|token|auth/)) return <DevTool slug={slug} title={title} />;
  if (slug.match(/subnet|ip.*address|ipv[46]|cidr|network/)) return <DevTool slug={slug} title={title} />;
  if (slug.match(/html|css|javascript|js-|typescript|ts-/)) return <DevTool slug={slug} title={title} />;
  if (slug.match(/api|curl|http|rest|graphql|websocket/)) return <DevTool slug={slug} title={title} />;
  if (slug.match(/git|github|docker|kubernetes|deploy|ci.cd|devops/)) return <DevTool slug={slug} title={title} />;
  if (slug.match(/linux|unix|bash|terminal|command|chmod|htpasswd|cron/)) return <DevTool slug={slug} title={title} />;

  // PDF / Image / File
  if (slug.match(/pdf/)) return <LiveTool slug={slug} title={title} />;
  if (slug.match(/image|photo|picture|jpg|png|webp|gif|svg|heic|compress|resize|crop|remove.*bg/) ) return <LiveTool slug={slug} title={title} />;

  // AI tools
  if (slug.match(/ai-|prompt|token.*count|model.*comp|cost.*estimator/)) return <LiveTool slug={slug} title={title} />;

  // Games — dedicated interactive game components
  if (slug.match(/game|snake|2048|tic-tac|hangman|memory|puzzle|maze|sudoku|chess|checkers|solitaire|tetris|pong|breakout|flappy|platformer|rpg/)) return <GameTool slug={slug} title={title} />;
  if (slug.match(/play|fun|quiz|trivia|bingo|wordle|crossword/)) return <GameTool slug={slug} title={title} />;

  // Social / Relationship
  if (slug.match(/instagram|twitter|tiktok|facebook|linkedin|social|hashtag|bio|profile|caption/)) return <LiveTool slug={slug} title={title} />;

  // Productivity: lists, notes, planners
  if (slug.match(/to.?do|checklist|habit|tracker|planner|goal|notepad|scratchpad|journal|diary|organizer/)) return <LiveTool slug={slug} title={title} />;

  // Cooking / Food
  if (slug.match(/recipe|baking|cooking|coffee|tea|food|meal|grocery|shopping|ingredient/)) return <MoneyCalc slug={slug} title={title} />;

  // Automotive
  if (slug.match(/car|vehicle|tire|engine|oil|mileage|mpg|horsepower|torque/)) return <MoneyCalc slug={slug} title={title} />;

  // Pets
  if (slug.match(/dog|cat|pet|puppy|kitten|vet|vaccine/)) return <MoneyCalc slug={slug} title={title} />;

  // Parenting / Baby
  if (slug.match(/baby|child|parenting|diaper|feeding|growth|percentile/)) return <MoneyCalc slug={slug} title={title} />;

  // Writing / Blogging
  if (slug.match(/blog|post|article|seo|keyword|headline|title.*generator|meta.*desc/)) return <LiveTool slug={slug} title={title} />;

  // Career
  if (slug.match(/resume|cv|interview|job|salary|career|promotion|linkedin/)) return <LiveTool slug={slug} title={title} />;

  // Catch-all: anything with a "calc" function pattern
  if (tool?.category === "money" || tool?.category === "health" || tool?.category === "automotive" 
    || tool?.category === "cooking" || tool?.category === "parenting" || tool?.category === "pets") {
    return <MoneyCalc slug={slug} title={title} />;
  }
  if (tool?.category === "units" || tool?.category === "converters") return <SmartConverter slug={slug} title={title} />;
  if (tool?.category === "text" || tool?.category === "writing") return <TextTool slug={slug} title={title} />;
  if (tool?.category === "random") return <GeneratorTool slug={slug} title={title} />;
  if (tool?.category === "games") return <GameTool slug={slug} title={title} />;
  if (tool?.category === "dev" || tool?.category === "coding") return <DevTool slug={slug} title={title} />;
  if (tool?.category === "ai") return <LiveTool slug={slug} title={title} />;
  if (tool?.category === "productivity") return <LiveTool slug={slug} title={title} />;

  // Final fallback — generic interactive tool
  return <LiveTool slug={slug} title={title} />;
}

// ========== EXPLICIT OVERRIDES ==========
const OVERRIDES: Record<string, () => React.ReactNode> = {
  // Turkish-market tools
  "kdv-hesapla": () => <KDVTool />,
  "sifre-olustur": () => <PasswordTool />,
  "bahsis-hesapla": () => <TipTool />,
  "yuzde-hesapla": () => <PercentageTool />,
  "doviz-cevirici": () => <CurrencyTool />,
  "indirim-hesapla": () => <DiscountTool />,
  "birim-cevirici": () => <UnitTool />,
  "kredi-hesapla": () => <LoanTool />,
  "konut-kredisi": () => <MortgageTool />,
  "yas-hesapla": () => <AgeTool />,
  "vucut-kitle": () => <BMITool />,
  "rastgele-sayi": () => <RandomTool />,
  "fancy-text": () => <FancyTextTool />,
  "text-counter": () => <TextCounterTool />,
  "case-converter": () => <CaseConverterTool />,
  "word-counter": () => <TextCounterTool />,
  "character-counter": () => <TextCounterTool />,
  "countdown-timer": () => <CountdownTimerTool />,
  "stopwatch": () => <StopwatchTool />,
  "pomodoro-timer": () => <CountdownTimerTool />,
  "coin-flip": () => <GeneratorTool slug="coin-flip" title="Yazı Tura" />,
  "dice-roller": () => <GeneratorTool slug="dice-roller" title="Zar Atıcı" />,
  "decision-maker": () => <GeneratorTool slug="decision-maker" title="Karar Verici" />,
};

// ============================================================
// REUSABLE LIVE COMPONENTS
// ============================================================

function KDVTool() {
  const [amount, setAmount] = React.useState(1000);
  const [rate, setRate] = React.useState(20);
  const kdv = amount * rate / 100;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6">
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">Tutar (TL)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={amount} onChange={e => setAmount(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">KDV Oranı</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={rate} onChange={e => setRate(Number(e.target.value))}><option value={1}>%1</option><option value={10}>%10</option><option value={20}>%20</option></select></div>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-tekno-panel rounded-xl p-5 text-center"><div className="text-xs text-tekno-muted">KDV Hariç</div><div className="text-xl font-bold text-tekno-text">{amount.toLocaleString("tr-TR")} TL</div></div>
        <div className="bg-tekno-cyan/5 rounded-xl p-5 text-center"><div className="text-xs text-tekno-muted">KDV Tutarı</div><div className="text-xl font-bold text-tekno-cyan">{kdv.toLocaleString("tr-TR")} TL</div></div>
        <div className="bg-tekno-panel rounded-xl p-5 text-center"><div className="text-xs text-tekno-muted">KDV Dahil</div><div className="text-xl font-bold text-tekno-text">{(amount + kdv).toLocaleString("tr-TR")} TL</div></div>
      </div>
    </div>
  );
}

function PasswordTool() {
  const [pw, setPw] = React.useState(() => genPw(16, true, true, true, true));
  const [len, setLen] = React.useState(16);
  const [opts, setOpts] = React.useState({ upper: true, lower: true, nums: true, syms: true });
  function genPw(l: number, upper: boolean, lower: boolean, nums: boolean, syms: boolean) {
    let chars = ""; if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; if (lower) chars += "abcdefghijklmnopqrstuvwxyz"; if (nums) chars += "0123456789"; if (syms) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?"; if (!chars) chars = "abcdefghijklmnopqrstuvwxyz";
    return Array.from({ length: l }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }
  return (
    <div>
      <div className="bg-tekno-panel rounded-xl p-6 text-center border mb-6"><div className="text-3xl font-mono font-bold text-tekno-text mb-2 break-all">{pw}</div><button onClick={() => navigator.clipboard.writeText(pw)} className="text-sm bg-tekno-cyan text-white px-4 py-2 rounded-lg hover:bg-red-700">Kopyala</button></div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">Uzunluk: {len}</label><input type="range" min={8} max={50} value={len} onChange={e => { const v = Number(e.target.value); setLen(v); setPw(genPw(v, opts.upper, opts.lower, opts.nums, opts.syms)); }} className="w-full accent-tekno-cyan" /></div>
        <div className="flex flex-wrap gap-3">{[{ k: "upper", l: "Büyük" },{ k: "lower", l: "Küçük" },{ k: "nums", l: "Rakam" },{ k: "syms", l: "Sembol" }].map(o => (<label key={o.k} className="flex items-center gap-2 text-sm text-tekno-muted"><input type="checkbox" checked={(opts as any)[o.k]} onChange={e => { const n = { ...opts, [o.k]: e.target.checked }; setOpts(n); setPw(genPw(len, n.upper, n.lower, n.nums, n.syms)); }} className="accent-tekno-cyan" />{o.l}</label>))}</div>
      </div>
      <button onClick={() => setPw(genPw(len, opts.upper, opts.lower, opts.nums, opts.syms))} className="mt-4 w-full py-3 bg-tekno-cyan text-white font-semibold rounded-xl hover:bg-red-700">Yeni Oluştur</button>
    </div>
  );
}

function TipTool() {
  const [bill, setBill] = React.useState(500);
  const [people, setPeople] = React.useState(2);
  const [pct, setPct] = React.useState(10);
  const tip = bill * pct / 100;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-6"><div><label className="block text-sm font-medium text-tekno-muted mb-2">Hesap Tutarı (TL)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={bill} onChange={e => setBill(Number(e.target.value) || 0)} /></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Kişi Sayısı</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={people} onChange={e => setPeople(Math.max(1, Number(e.target.value) || 1))} /></div></div>
      <div className="flex flex-wrap gap-2 mb-6">{[5,10,12,15,18,20].map(v=>(<button key={v} onClick={()=>setPct(v)} className={`px-4 py-2 rounded-lg text-sm font-medium ${pct===v?"bg-tekno-cyan text-white":"bg-tekno-panel hover:bg-tekno-border"}`}>%{v}</button>))}</div>
      <div className="grid grid-cols-3 gap-4"><div className="bg-tekno-panel rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Bahşiş</div><div className="text-xl font-bold text-tekno-text">{tip.toLocaleString("tr-TR")} TL</div></div><div className="bg-tekno-panel rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Toplam</div><div className="text-xl font-bold text-tekno-text">{(bill+tip).toLocaleString("tr-TR")} TL</div></div><div className="bg-tekno-cyan/5 rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Kişi Başı</div><div className="text-xl font-bold text-tekno-cyan">{((bill+tip)/people).toLocaleString("tr-TR")} TL</div></div></div>
    </div>
  );
}

function PercentageTool() {
  const [num, setNum] = React.useState(500);
  const [pct, setPct] = React.useState(20);
  const r = num * pct / 100;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6"><div><label className="block text-sm font-medium text-tekno-muted mb-2">Sayı</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={num} onChange={e=>setNum(Number(e.target.value)||0)} /></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Yüzde (%)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={pct} onChange={e=>setPct(Number(e.target.value)||0)} /></div></div>
      <div className="mt-6 grid grid-cols-2 gap-4"><div className="bg-tekno-panel rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Yüzdesi</div><div className="text-xl font-bold text-tekno-text">{r.toLocaleString("tr-TR")}</div></div><div className="bg-tekno-cyan/5 rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Toplam</div><div className="text-xl font-bold text-tekno-cyan">{(num+r).toLocaleString("tr-TR")}</div></div></div>
    </div>
  );
}

function DiscountTool() {
  const [price, setPrice] = React.useState(1000);
  const [rate, setRate] = React.useState(30);
  const saved = price * rate / 100;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6"><div><label className="block text-sm font-medium text-tekno-muted mb-2">Fiyat (TL)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={price} onChange={e=>setPrice(Number(e.target.value)||0)} /></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">İndirim (%)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={rate} onChange={e=>setRate(Number(e.target.value)||0)} /></div></div>
      <div className="grid grid-cols-3 gap-4"><div className="bg-tekno-panel rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">İndirim</div><div className="text-xl font-bold text-tekno-text">{saved.toLocaleString("tr-TR")} TL</div></div><div className="bg-tekno-cyan/5 rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">İndirimli</div><div className="text-xl font-bold text-tekno-cyan">{(price-saved).toLocaleString("tr-TR")} TL</div></div><div className="bg-tekno-cyan/10 rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Tasarruf</div><div className="text-xl font-bold text-green-600">{saved.toLocaleString("tr-TR")} TL</div></div></div>
    </div>
  );
}

function CurrencyTool() {
  const [amount, setAmount] = React.useState(100);
  const [from, setFrom] = React.useState("TRY");
  const [to, setTo] = React.useState("USD");
  const rates: Record<string, number> = { USD:1, EUR:0.92, GBP:0.79, TRY:32.5, CHF:0.90, JPY:155, CNY:7.24, RUB:91, AED:3.67 };
  const result = (amount/(rates[from]||1))*(rates[to]||1);
  const names: Record<string,string> = { USD:"$ USD", EUR:"€ EUR", GBP:"£ GBP", TRY:"₺ TL", CHF:"₣ CHF", JPY:"¥ JPY", CNY:"¥ CNY", RUB:"₽ RUB", AED:"د.إ AED" };
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mb-6"><div><label className="block text-sm font-medium text-tekno-muted mb-2">Miktar</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={amount} onChange={e=>setAmount(Number(e.target.value)||0)} /></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Kaynak</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={from} onChange={e=>setFrom(e.target.value)}>{Object.entries(names).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Hedef</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={to} onChange={e=>setTo(e.target.value)}>{Object.entries(names).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select></div></div>
      <div className="bg-tekno-panel rounded-xl p-6 text-center"><div className="text-sm text-tekno-muted mb-2">Sonuç</div><div className="text-3xl font-bold text-tekno-cyan">{result.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2})}</div><div className="text-xs text-tekno-muted mt-2">Gösterge niteliğinde</div></div>
    </div>
  );
}

function UnitTool() {
  const units: Record<string,number> = { mm:0.001, cm:0.01, m:1, km:1000, in:0.0254, ft:0.3048, yd:0.9144, mi:1609.34 };
  const names: Record<string,string> = { mm:"Milimetre", cm:"Santimetre", m:"Metre", km:"Kilometre", in:"İnç", ft:"Fit", yd:"Yarda", mi:"Mil" };
  const [val, setVal] = React.useState(1);
  const [from, setFrom] = React.useState("km");
  const [to, setTo] = React.useState("mi");
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mb-6"><div><label className="block text-sm font-medium text-tekno-muted mb-2">Değer</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={val} onChange={e=>setVal(Number(e.target.value)||0)} /></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Kaynak</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={from} onChange={e=>setFrom(e.target.value)}>{Object.entries(names).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Hedef</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={to} onChange={e=>setTo(e.target.value)}>{Object.entries(names).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select></div></div>
      <div className="bg-tekno-panel rounded-xl p-6 text-center"><div className="text-sm text-tekno-muted mb-2">Sonuç</div><div className="text-3xl font-bold text-tekno-cyan">{((val*(units[from]||1))/(units[to]||1)).toLocaleString("tr-TR",{maximumFractionDigits:4})}</div></div>
    </div>
  );
}

function LoanTool() {
  return <MoneyCalc slug="loan" title="Kredi Hesaplama" />;
}
function MortgageTool() {
  return <MoneyCalc slug="mortgage" title="Konut Kredisi" />;
}
function AgeTool() {
  const [y, setY] = React.useState(1990); const [m, setM] = React.useState(1); const [d, setD] = React.useState(1);
  const b = new Date(y,m-1,d); const n = new Date();
  let age = n.getFullYear()-b.getFullYear(); if(n.getMonth()<b.getMonth()||(n.getMonth()===b.getMonth()&&n.getDate()<b.getDate())) age--;
  const tm = (n.getFullYear()-b.getFullYear())*12+(n.getMonth()-b.getMonth());
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-6"><div><label className="block text-sm font-medium text-tekno-muted mb-2">Yıl</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={y} onChange={e=>setY(Number(e.target.value)||1900)} /></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Ay</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={m} onChange={e=>setM(Math.min(12,Math.max(1,Number(e.target.value)||1)))} /></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Gün</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={d} onChange={e=>setD(Math.min(31,Math.max(1,Number(e.target.value)||1)))} /></div></div>
      <div className="grid grid-cols-3 gap-4"><div className="bg-tekno-cyan/5 rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Yaş</div><div className="text-2xl font-bold text-tekno-cyan">{age} yıl</div></div><div className="bg-tekno-panel rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Ay</div><div className="text-2xl font-bold text-tekno-text">{tm} ay</div></div><div className="bg-tekno-panel rounded-xl p-4 text-center"><div className="text-xs text-tekno-muted">Gün</div><div className="text-2xl font-bold text-tekno-text">{Math.floor((n.getTime()-b.getTime())/86400000)} gün</div></div></div>
    </div>
  );
}
function BMITool() {
  const [w,setW]=React.useState(70);const[h,setH]=React.useState(170);
  const bmi=w/((h/100)**2);const c=bmi<18.5?"Zayıf":bmi<25?"Normal":bmi<30?"Fazla Kilolu":"Obez";
  const lo=18.5*(h/100)**2;const hi=25*(h/100)**2;
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-6"><div><label className="block text-sm font-medium text-tekno-muted mb-2">Kilo (kg)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={w} onChange={e=>setW(Number(e.target.value)||0)}/></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Boy (cm)</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={h} onChange={e=>setH(Number(e.target.value)||0)}/></div></div>
      <div className="grid grid-cols-2 gap-4"><div className="bg-tekno-cyan/5 rounded-xl p-5 text-center"><div className="text-xs text-tekno-muted">VKİ</div><div className="text-2xl font-bold text-tekno-cyan">{bmi.toFixed(1)}</div><div className="text-sm text-tekno-muted mt-1">{c}</div></div><div className="bg-tekno-panel rounded-xl p-5 text-center"><div className="text-xs text-tekno-muted">İdeal Aralık</div><div className="text-2xl font-bold text-tekno-text">{lo.toFixed(0)}-{hi.toFixed(0)} kg</div></div></div>
    </div>
  );
}
function RandomTool() {
  const [min,setMin]=React.useState(1);const[max,setMax]=React.useState(100);const[r,setR]=React.useState(42);
  return (<div><div className="grid md:grid-cols-2 gap-6 mb-6"><div><label className="block text-sm font-medium text-tekno-muted mb-2">Minimum</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={min} onChange={e=>setMin(Number(e.target.value)||0)}/></div><div><label className="block text-sm font-medium text-tekno-muted mb-2">Maksimum</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={max} onChange={e=>setMax(Number(e.target.value)||0)}/></div></div><div className="bg-tekno-panel rounded-xl p-8 text-center"><div className="text-5xl font-bold text-tekno-cyan mb-4">{r}</div><button onClick={()=>setR(Math.floor(Math.random()*(max-min+1))+min)} className="px-6 py-3 bg-tekno-cyan text-white font-semibold rounded-xl hover:bg-red-700">Üret</button></div></div>);
}

function FancyTextTool() {
  const styles=[{n:"Kalın",p:"𝗠𝗲𝗿𝗵𝗮𝗯𝗮 𝗗𝘂𝗻𝘆𝗮"},{n:"İtalik",p:"𝘔𝘦𝘳𝘩𝘢𝘣𝘢 𝘋𝘶𝘯𝘺𝘢"},{n:"El Yazısı",p:"𝓜𝓮𝓻𝓱𝓪𝓫𝓪 𝓓𝓾𝓷𝔂𝓪"},{n:"Baloncuk",p:"Ⓜⓔⓡⓗⓐⓑⓐ Ⓓⓤⓝⓨⓐ"},{n:"Gotik",p:"𝔐𝔢𝔯𝔥𝔞𝔟𝔞 𝔇𝔲𝔫𝔶𝔞"},{n:"Çift Vurgulu",p:"𝕄𝕖𝕣𝕙𝕒𝕓𝕒 𝔻𝕦𝕟𝕪𝕒"}];
  return (<div><textarea className="w-full p-3 border border-gray-200 rounded-xl mb-4" rows={2} placeholder="Yazın..." defaultValue="Merhaba Dünya"/><div className="grid gap-3">{styles.map(s=>(<div key={s.n} className="flex items-center justify-between p-4 bg-tekno-panel rounded-xl border"><div><div className="font-medium text-tekno-muted text-sm">{s.n}</div><div className="text-lg mt-1 text-tekno-text">{s.p}</div></div><button onClick={()=>navigator.clipboard.writeText(s.p)} className="text-xs bg-tekno-cyan text-white px-3 py-1.5 rounded-lg hover:bg-red-700">Kopyala</button></div>))}</div></div>);
}

function CaseConverterTool() {
  const [text,setText]=React.useState("merhaba dünya");
  const cases=[{n:"BÜYÜK",f:(t:string)=>t.toLocaleUpperCase("tr")},{n:"küçük",f:(t:string)=>t.toLocaleLowerCase("tr")},{n:"Başlık",f:(t:string)=>t.replace(/\b\w/g,c=>c.toLocaleUpperCase("tr"))},{n:"İlk Harfler",f:(t:string)=>t.split(" ").map(w=>w.charAt(0).toLocaleUpperCase("tr")+w.slice(1)).join(" ")}];
  return (<div><textarea className="w-full p-3 border border-gray-200 rounded-xl mb-4" rows={4} value={text} onChange={e=>setText(e.target.value)}/><div className="grid gap-3">{cases.map(c=>{const r=c.f(text);return(<div key={c.n} className="flex items-center justify-between p-3 bg-tekno-panel rounded-xl border"><div><div className="text-xs text-tekno-muted">{c.n}</div><div className="mt-1 text-tekno-text font-medium break-all">{r}</div></div><button onClick={()=>navigator.clipboard.writeText(r)} className="text-xs bg-tekno-border text-tekno-muted px-3 py-1.5 rounded-lg hover:bg-gray-300">Kopyala</button></div>);})}</div></div>);
}

function TextCounterTool() {
  const [text,setText]=React.useState("");const wc=text.trim()?text.trim().split(/\s+/).length:0;
  return (<div><textarea className="w-full p-3 border border-gray-200 rounded-xl mb-4" rows={6} value={text} onChange={e=>setText(e.target.value)} placeholder="Metninizi yapıştırın..."/><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{[{l:"Kelime",v:wc},{l:"Karakter (boşluksuz)",v:text.replace(/\s/g,"").length},{l:"Karakter",v:text.length},{l:"Cümle",v:(text.match(/[.!?]+/g)||[]).length},{l:"Paragraf",v:text.trim()?text.split(/\n\n+/).filter((p:string)=>p.trim()).length:0},{l:"Okuma",v:Math.max(1,Math.ceil(wc/200))+" sn"},{l:"Satır",v:text.trim()?text.split("\n").filter((l:string)=>l.trim()).length:0},{l:"Boşluk",v:(text.match(/ /g)||[]).length}].map(s=>(<div key={s.l} className="bg-tekno-panel rounded-xl p-4 text-center border"><div className="text-2xl font-bold text-tekno-cyan">{s.v}</div><div className="text-xs text-tekno-muted mt-1">{s.l}</div></div>))}</div></div>);
}

function CountdownTimerTool() {
  const [sec,setSec]=React.useState(60);const[run,setRun]=React.useState(false);const[rem,setRem]=React.useState(60);
  React.useEffect(()=>{if(!run||rem<=0){if(rem<=0)setRun(false);return}const id=setInterval(()=>setRem(r=>{if(r<=1){setRun(false);return 0}return r-1}),1000);return()=>clearInterval(id)},[run,rem]);
  const m=Math.floor(rem/60),s=rem%60;
  return (<div className="text-center"><div className="text-6xl font-bold text-tekno-text mb-6 font-mono">{String(m).padStart(2,"0")}:{String(s).padStart(2,"0")}</div><div className="flex gap-3 justify-center mb-4"><button onClick={()=>{setRem(sec);setRun(true)}} className="px-6 py-3 bg-tekno-cyan text-white font-semibold rounded-xl">Başlat</button><button onClick={()=>setRun(false)} className="px-6 py-3 bg-tekno-border text-tekno-muted font-semibold rounded-xl">Durdur</button><button onClick={()=>{setRun(false);setRem(sec)}} className="px-6 py-3 bg-tekno-border text-tekno-muted font-semibold rounded-xl">Sıfırla</button></div><div><label className="text-sm text-tekno-muted">Süre (sn): </label><input type="number" className="w-20 p-2 border rounded-lg text-center" value={sec} onChange={e=>{setSec(Number(e.target.value));setRem(Number(e.target.value))}}/></div></div>);
}
function StopwatchTool() {
  const [run,setRun]=React.useState(false);const[time,setTime]=React.useState(0);
  React.useEffect(()=>{if(!run)return;const id=setInterval(()=>setTime(t=>t+10),10);return()=>clearInterval(id)},[run]);
  const m=Math.floor(time/60000),s=Math.floor((time%60000)/1000),ms=Math.floor((time%1000)/10);
  return (<div className="text-center"><div className="text-6xl font-bold text-tekno-text mb-6 font-mono">{String(m).padStart(2,"0")}:{String(s).padStart(2,"0")}.{String(ms).padStart(2,"0")}</div><div className="flex gap-3 justify-center"><button onClick={()=>setRun(true)} className="px-6 py-3 bg-tekno-cyan text-white font-semibold rounded-xl">Başlat</button><button onClick={()=>setRun(false)} className="px-6 py-3 bg-tekno-border text-tekno-muted font-semibold rounded-xl">Durdur</button><button onClick={()=>{setRun(false);setTime(0)}} className="px-6 py-3 bg-tekno-border text-tekno-muted font-semibold rounded-xl">Sıfırla</button></div></div>);
}

// ============================================================
// SMART GENERIC COMPONENTS (make every tool live)
// ============================================================

function MoneyCalc({ slug, title }: { slug: string; title: string }) {
  // Detect what kind of calculator from slug
  const isLoan = slug.includes("loan") || slug.includes("kredi");
  const isMortgage = slug.includes("mortgage") || slug.includes("mortgage") || slug.includes("konut");
  const isCompound = slug.includes("compound") || slug.includes("interest") || slug.includes("faiz");
  const isSavings = slug.includes("saving") || slug.includes("goal") || slug.includes("tasarruf");
  const isBudget = slug.includes("budget") || slug.includes("butce");
  const isDebt = slug.includes("debt") || slug.includes("payoff") || slug.includes("borc");
  const isSalary = slug.includes("salary") || slug.includes("paycheck") || slug.includes("wage") || slug.includes("hourly");
  const isCar = slug.includes("car") || slug.includes("auto") || slug.includes("vehicle") || slug.includes("fuel") || slug.includes("gas");
  const isHealth = slug.includes("calorie") || slug.includes("macro") || slug.includes("protein") || slug.includes("water");
  const isCost = slug.includes("cost") || slug.includes("price") || slug.includes("afford") || slug.includes("expense");
  const isPregnancy = slug.includes("pregnan") || slug.includes("due-date") || slug.includes("ovulation");
  const isCooking = slug.includes("recipe") || slug.includes("baking") || slug.includes("coffee") || slug.includes("ratio");

  let fields: string[], defaults: string[], labels: string[];

  if (isLoan || isMortgage) {
    if (isMortgage) {
      fields = ["Konut Fiyatı (TL)", "Peşinat (%)", "Vade (Yıl)", "Faiz Oranı (%)"];
      defaults = ["3000000", "20", "10", "2.85"];
      labels = ["Aylık Taksit", "Kredi Tutarı", "Toplam Ödeme", "Toplam Faiz"];
    } else {
      fields = ["Kredi Tutarı (TL)", "Faiz Oranı (%)", "Vade (Ay)"];
      defaults = ["100000", "2.5", "12"];
      labels = ["Aylık Ödeme", "Toplam Geri Ödeme", "Toplam Faiz"];
    }
  } else if (isCompound) {
    fields = ["Ana Para (TL)", "Faiz Oranı (%)", "Süre (Yıl)", "Bileşik/Yıl"];
    defaults = ["10000", "5", "10", "12"];
    labels = ["Gelecek Değer", "Toplam Faiz", "Getiri (%)"];
  } else if (isSavings || isDebt) {
    fields = ["Hedef/Para (TL)", "Aylık Ödeme (TL)", "Faiz Oranı (%)"];
    defaults = ["50000", "2000", "3"];
    labels = ["Gerekli Süre (Ay)", "Toplam Ödeme", "Toplam Faiz"];
  } else if (isSalary) {
    fields = ["Saatlik Ücret (TL)", "Haftalık Saat", "Hafta/Yıl"];
    defaults = ["150", "40", "52"];
    labels = ["Aylık Gelir", "Yıllık Gelir", "Saatlik"];
  } else if (isBudget) {
    fields = ["Aylık Gelir (TL)", "Kira (TL)", "Faturalar (TL)", "Mutfak (TL)", "Diğer (TL)"];
    defaults = ["30000", "8000", "3000", "5000", "4000"];
    labels = ["Toplam Gider", "Kalan", "Tasarruf (%)"];
  } else if (isCar) {
    fields = ["Araç Fiyatı (TL)", "Peşinat (%)", "Vade (Ay)", "Faiz (%)"];
    defaults = ["500000", "30", "36", "1.5"];
    labels = ["Aylık Taksit", "Toplam Maliyet", "Faiz Yükü"];
  } else if (isHealth) {
    fields = ["Kilo (kg)", "Boy (cm)", "Yaş"];
    defaults = ["70", "170", "25"];
    labels = ["BMR (kcal)", "Günlük Kalori", "BMI"];
  } else if (isCost) {
    fields = ["Maliyet (TL)", "Adet/Süre", "Vergi Oranı (%)"];
    defaults = ["100", "1", "18"];
    labels = ["Birim Maliyet", "Vergi Dahil", "Toplam"];
  } else if (isPregnancy) {
    fields = ["Son Adet Tarihi (Gün)", "Son Adet Ay", "Son Adet Yıl"];
    defaults = ["1", "1", "2026"];
    labels = ["Tahmini Doğum", "Gebelik Haftası", "Kalan Gün"];
  } else if (isCooking) {
    fields = ["Porsiyon Sayısı", "Orijinal Porsiyon", "Ana Malzeme (gr)"];
    defaults = ["4", "2", "500"];
    labels = ["Yeni Miktar (gr)", "Ölçek Faktörü", "Süre (dk)"];
  } else {
    // Generic calculator
    fields = ["Değer 1", "Değer 2", "Değer 3"];
    defaults = ["100", "10", "1"];
    labels = ["Sonuç 1", "Sonuç 2", "Toplam"];
  }

  const [state, setState] = React.useState(defaults.map(Number));
  
  function compute() {
    const args = state.map(Number);
    if (isLoan) {
      const [p, r, m] = args; const mr = r/100;
      const pmt = p * mr * Math.pow(1+mr, m) / (Math.pow(1+mr, m) - 1);
      return [pmt, pmt*m, pmt*m-p];
    }
    if (isMortgage) {
      const [p, dp, y, r] = args; const l = p*(1-dp/100); const m = y*12; const mr = r/100/12;
      const pmt = l * mr * Math.pow(1+mr, m) / (Math.pow(1+mr, m) - 1);
      return [pmt, l, pmt*m, pmt*m-l];
    }
    if (isCompound) {
      const [p, r, y, n] = args; const fv = p*Math.pow(1+r/100/n, n*y);
      return [fv, fv-p, (fv/p-1)*100];
    }
    if (isSavings) {
      const [g, m, r] = args; const mr = r/100/12;
      const months = mr > 0 ? Math.log(1+g*mr/m)/Math.log(1+mr) : g/m;
      return [Math.ceil(months), Math.ceil(months)*m, Math.ceil(months)*m-g];
    }
    if (isDebt) {
      const [d, m, r] = args; const mr = r/100/12;
      const months = mr > 0 ? Math.log(m/(m-d*mr))/Math.log(1+mr) : d/m;
      return [Math.ceil(months), Math.ceil(months)*m, Math.ceil(months)*m-d];
    }
    if (isSalary) return [args[0]*args[1]*4.33, args[0]*args[1]*args[2], args[0]];
    if (isBudget) { const t=args.slice(1).reduce((a,b)=>a+b,0); return [t, args[0]-t, (args[0]-t)/args[0]*100]; }
    if (isCar) { const [p,dp,m,r]=args; const l=p*(1-dp/100); const mr=r/100/12; const pmt=l*mr*Math.pow(1+mr,m)/(Math.pow(1+mr,m)-1); return [pmt,pmt*m,pmt*m-l]; }
    if (isHealth) { const [w,h,a]=args; const bmr=10*w+6.25*h-5*a+(w>60?5:-161); return [bmr, bmr*1.55, w/((h/100)**2)]; }
    if (isCost) { const [c,q,t]=args; const unit=c/Math.max(1,q); return [unit, unit*(1+t/100), c*(1+t/100)]; }
    if (isPregnancy) { const [d,m,y]=args; const lmp=new Date(y,m-1,d); const due=new Date(lmp.getTime()+280*86400000); const now=new Date(); const weeks=Math.floor((now.getTime()-lmp.getTime())/(7*86400000)); return [due.toLocaleDateString("tr-TR"), weeks, Math.max(0,40-weeks)]; }
    if (isCooking) { const [s,o,i]=args; const scale=s/o; return [i*scale, scale, Math.ceil(30*scale)]; }
    return [args[0]+args[1], args[0]*args[1], args.reduce((a,b)=>a+b,0)];
  }

  const results = compute();
  const suffix = isLoan||isMortgage||isCompound||isSavings||isDebt||isSalary||isBudget||isCost||isCar ? "TL" : "";

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {fields.map((label, i) => (
          <div key={i}><label className="block text-sm font-medium text-tekno-muted mb-2">{label}</label>
            <input type="number" className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-tekno-cyan" value={state[i]} onChange={e => { const n = [...state]; n[i] = Number(e.target.value) || 0; setState(n); }} />
          </div>
        ))}
      </div>
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${Math.min(labels.length, 4)}, 1fr)` }}>
        {labels.map((label, i) => {
          const v = results[i];
          const display = typeof v === "string" ? v : (typeof v === "number" ? (Number.isInteger(v) ? v.toLocaleString("tr-TR") : v.toLocaleString("tr-TR", {maximumFractionDigits:2})) + " " + suffix : String(v));
          return (
            <div key={i} className={`rounded-xl p-4 text-center border ${i === 0 ? "bg-tekno-cyan/5 border-tekno-cyan/20" : "bg-tekno-panel border-gray-100"}`}>
              <div className="text-xs text-tekno-muted">{label}</div>
              <div className={`text-xl font-bold ${i === 0 ? "text-tekno-cyan" : "text-tekno-text"}`}>{display}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SmartConverter({ slug, title }: { slug: string; title: string }) {
  const isTemp = slug.includes("temp");
  const isWeight = slug.includes("weight") || slug.includes("mass");
  const isSpeed = slug.includes("speed") || slug.includes("velocity");
  const isVolume = slug.includes("volume") || slug.includes("liquid");
  const isArea = slug.includes("area");
  const isData = slug.includes("data") || slug.includes("storage") || slug.includes("byte");
  const isTime = slug.includes("time") || slug.includes("zone");
  const isPressure = slug.includes("pressure");
  const isEnergy = slug.includes("energy") || slug.includes("power");

  let units: Record<string, number>;
  let names: Record<string, string>;

  if (isTemp) {
    units = { C:0, F:32, K:273.15 };
    names = { C:"Celsius (°C)", F:"Fahrenheit (°F)", K:"Kelvin (K)" };
  } else if (isWeight) {
    units = { mg:0.001, g:1, kg:1000, oz:28.35, lb:453.6, ton:1e6 };
    names = { mg:"Miligram", g:"Gram", kg:"Kilogram", oz:"Ons", lb:"Pound", ton:"Ton" };
  } else if (isSpeed) {
    units = { mps:1, kph:0.2778, mph:0.447, knot:0.5144, mach:343 };
    names = { mps:"m/s", kph:"km/sa", mph:"mil/sa", knot:"Knot", mach:"Mach" };
  } else if (isVolume) {
    units = { ml:1, L:1000, gal:3785, qt:946, pt:473, cup:240, ozfl:29.57 };
    names = { ml:"Mililitre", L:"Litre", gal:"Galon", qt:"Quart", pt:"Pint", cup:"Bardak", ozfl:"fl oz" };
  } else if (isArea) {
    units = { mm2:1e-6, cm2:1e-4, m2:1, km2:1e6, ha:10000, acre:4047, ft2:0.0929 };
    names = { mm2:"mm²", cm2:"cm²", m2:"m²", km2:"km²", ha:"Hektar", acre:"Akre", ft2:"ft²" };
  } else if (isData) {
    units = { B:1, KB:1024, MB:1048576, GB:1073741824, TB:1099511627776 };
    names = { B:"Byte", KB:"KB", MB:"MB", GB:"GB", TB:"TB" };
  } else if (isTime) {
    units = { sec:1, min:60, hr:3600, day:86400, week:604800, month:2629800, year:31557600 };
    names = { sec:"Saniye", min:"Dakika", hr:"Saat", day:"Gün", week:"Hafta", month:"Ay", year:"Yıl" };
  } else if (isPressure) {
    units = { pa:1, kpa:1000, bar:100000, atm:101325, psi:6895, mmhg:133.3 };
    names = { pa:"Pa", kpa:"kPa", bar:"Bar", atm:"atm", psi:"PSI", mmhg:"mmHg" };
  } else if (isEnergy) {
    units = { J:1, kJ:1000, cal:4.184, kcal:4184, Wh:3600, kWh:3.6e6 };
    names = { J:"Joule", kJ:"Kilojoule", cal:"Kalori", kcal:"Kilokalori", Wh:"Watt-saat", kWh:"Kilowatt-saat" };
  } else {
    units = { mm:0.001, cm:0.01, m:1, km:1000, in:0.0254, ft:0.3048, mi:1609.34 };
    names = { mm:"Milimetre", cm:"Santimetre", m:"Metre", km:"Kilometre", in:"İnç", ft:"Fit", mi:"Mil" };
  }

  const [val, setVal] = React.useState(1);
  const keys = Object.keys(units);
  const [from, setFrom] = React.useState(keys[0]);
  const [to, setTo] = React.useState(keys[Math.min(1, keys.length-1)]);

  let result: number;
  if (isTemp) {
    // Special temperature handling
    if (from === to) result = val;
    else if (from === "C" && to === "F") result = val * 9/5 + 32;
    else if (from === "F" && to === "C") result = (val - 32) * 5/9;
    else if (from === "C" && to === "K") result = val + 273.15;
    else if (from === "K" && to === "C") result = val - 273.15;
    else if (from === "F" && to === "K") result = (val - 32) * 5/9 + 273.15;
    else if (from === "K" && to === "F") result = (val - 273.15) * 9/5 + 32;
    else result = val;
  } else {
    result = (val * (units[from] || 1)) / (units[to] || 1);
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">Değer</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={val} onChange={e => setVal(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">Kaynak</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={from} onChange={e => setFrom(e.target.value)}>{Object.entries(names).map(([k,v]) => <option key={k} value={k}>{v}</option>)}</select></div>
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">Hedef</label><select className="w-full p-3 border border-gray-200 rounded-xl" value={to} onChange={e => setTo(e.target.value)}>{Object.entries(names).map(([k,v]) => <option key={k} value={k}>{v}</option>)}</select></div>
      </div>
      <div className="bg-tekno-panel rounded-xl p-6 text-center"><div className="text-sm text-tekno-muted mb-2">Dönüşüm</div><div className="text-3xl font-bold text-tekno-cyan">{result.toLocaleString("tr-TR", {maximumFractionDigits:6})}</div></div>
    </div>
  );
}

function TextTool({ slug, title }: { slug: string; title: string }) {
  const [text, setText] = React.useState("");
  const isEncode = slug.includes("encode") || slug.includes("base64");
  const isUrlEncode = slug.includes("url") && (slug.includes("encode") || slug.includes("decode"));
  const isReverse = slug.includes("reverse") || slug.includes("flip") || slug.includes("mirror");
  const isGenerator = slug.includes("generator") || slug.includes("lorem") || slug.includes("ipsum");
  const isSlug = slug.includes("slug");
  const isCounter = slug.includes("counter") || slug.includes("count") || slug.includes("word");
  const isAcronym = slug.includes("acronym");

  let result = "";
  let resultLabel = "";

  if (isEncode) {
    resultLabel = "Kodlanmış";
    try { result = btoa(text); } catch { result = "Geçersiz giriş"; }
  } else if (isReverse) {
    resultLabel = "Ters Çevrilmiş";
    result = text.split("").reverse().join("");
  } else if (isSlug) {
    resultLabel = "URL Slug";
    result = text.toLocaleLowerCase("tr").replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ş/g,"s").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ç/g,"c").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  } else if (isGenerator || isAcronym) {
    resultLabel = "Oluşturulan";
    result = isAcronym ? text.split(/\s+/).map(w=>w[0]?.toLocaleUpperCase("tr")).filter(Boolean).join("") : "Lorem ipsum dolor sit amet...";
  } else {
    // Counter display
    const wc = text.trim() ? text.trim().split(/\s+/).length : 0;
    return (
      <div>
        <textarea className="w-full p-3 border border-gray-200 rounded-xl mb-4" rows={6} value={text} onChange={e=>setText(e.target.value)} placeholder="Metninizi buraya yapıştırın..."/>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{l:"Kelime",v:wc},{l:"Karakter (boşluksuz)",v:text.replace(/\s/g,"").length},{l:"Karakter",v:text.length},{l:"Cümle",v:(text.match(/[.!?]+/g)||[]).length},{l:"Paragraf",v:text.trim()?text.split(/\n\n+/).filter((p:string)=>p.trim()).length:0},{l:"Okuma",v:Math.max(1,Math.ceil(wc/200))+" sn"},{l:"Satır",v:text.trim()?text.split("\n").filter((l:string)=>l.trim()).length:0},{l:"Boşluk",v:(text.match(/ /g)||[]).length}].map(s=>(<div key={s.l} className="bg-tekno-panel rounded-xl p-4 text-center border"><div className="text-2xl font-bold text-tekno-cyan">{s.v}</div><div className="text-xs text-tekno-muted mt-1">{s.l}</div></div>))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <textarea className="w-full p-3 border border-gray-200 rounded-xl mb-4" rows={4} value={text} onChange={e=>setText(e.target.value)} placeholder={isGenerator?"Oluşturulacak metin...":"Metni girin..."}/>
      <button onClick={()=>{if(isGenerator){const words=["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do","eiusmod","tempor","incididunt"];setText(Array.from({length:20},()=>words[Math.floor(Math.random()*words.length)]).join(" "))}}} className="mb-4 px-4 py-2 bg-tekno-panel text-tekno-muted rounded-lg text-sm hover:bg-tekno-border">Oluştur</button>
      {result && (
        <div className="bg-tekno-panel rounded-xl p-4 border">
          <div className="text-xs text-tekno-muted mb-1">{resultLabel}</div>
          <div className="text-tekno-text font-medium break-all">{result}</div>
          <button onClick={()=>navigator.clipboard.writeText(result)} className="mt-2 text-xs bg-tekno-cyan text-white px-3 py-1.5 rounded-lg hover:bg-red-700">Kopyala</button>
        </div>
      )}
    </div>
  );
}

function GeneratorTool({ slug, title }: { slug: string; title: string }) {
  const isCoin = slug.includes("coin") || slug.includes("flip");
  const isDice = slug.includes("dice") || slug.includes("roll");
  const isUuid = slug.includes("uuid") || slug.includes("guid");
  const isRandom = slug.includes("random") || slug.includes("pick") || slug.includes("select");
  const isDecision = slug.includes("decision") || slug.includes("choose") || slug.includes("should");
  const isName = slug.includes("name");

  const [result, setResult] = React.useState("");
  const [min, setMin] = React.useState(1);
  const [max, setMax] = React.useState(100);

  React.useEffect(() => { generate(); }, []);

  function generate() {
    if (isCoin) setResult(Math.random() < 0.5 ? "Yazı" : "Tura");
    else if (isDice) setResult(String(Math.floor(Math.random() * 6) + 1));
    else if (isUuid) setResult(crypto.randomUUID());
    else if (isName) {
      const first = ["Ahmet","Mehmet","Ayşe","Fatma","Ali","Zeynep","Mustafa","Emine","Hüseyin","Hatice"];
      const last = ["Yılmaz","Kaya","Demir","Çelik","Şahin","Aydın","Öztürk","Arslan","Koç","Polat"];
      setResult(first[Math.floor(Math.random()*first.length)] + " " + last[Math.floor(Math.random()*last.length)]);
    }
    else if (isDecision) {
      const opts = ["Evet","Hayır","Belki","Kesinlikle","Asla","Şimdi Değil","Dene Bakalım"];
      setResult(opts[Math.floor(Math.random()*opts.length)]);
    }
    else if (isRandom) setResult(String(Math.floor(Math.random() * (max - min + 1)) + min));
    else setResult(String(Math.floor(Math.random() * 100) + 1));
  }

  return (
    <div className="text-center">
      {isRandom && (
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div><label className="block text-sm font-medium text-tekno-muted mb-2">Minimum</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={min} onChange={e=>setMin(Number(e.target.value)||0)}/></div>
          <div><label className="block text-sm font-medium text-tekno-muted mb-2">Maksimum</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={max} onChange={e=>setMax(Number(e.target.value)||0)}/></div>
        </div>
      )}
      <div className="bg-tekno-panel rounded-xl p-8 mb-6">
        <div className={`font-bold text-tekno-cyan mb-4 ${isCoin||isDice?"text-6xl":isDecision||isName?"text-3xl":"text-5xl"}`}>
          {result || (isCoin?"🎲":isDice?"🎲":isUuid?"---":"?")}
        </div>
      </div>
      <button onClick={generate} className="px-8 py-3 bg-tekno-cyan text-white font-semibold rounded-xl hover:bg-red-700">{isCoin?"At":isDice?"Zar At":"Oluştur"}</button>
    </div>
  );
}

function TimerTool({ slug, title }: { slug: string; title: string }) {
  if (slug.includes("stopwatch")) return <StopwatchTool />;
  return <CountdownTimerTool />;
}

function DevTool({ slug, title }: { slug: string; title: string }) {
  const isJSON = slug.includes("json");
  const [input, setInput] = React.useState(isJSON?'{"isim":"Mehmet","yas":30}':"");
  const [output, setOutput] = React.useState("");
  const [error, setError] = React.useState("");

  function process() {
    setError("");
    try {
      if (isJSON) {
        const parsed = JSON.parse(input);
        setOutput(JSON.stringify(parsed, null, 2));
      } else if (slug.includes("regex")) {
        // Simple regex tester
        const [pattern, testStr] = input.split("\n");
        if (!pattern) { setError("Regex pattern girin"); return; }
        const r = new RegExp(pattern.trim(), "g");
        const matches = (testStr||"").match(r);
        setOutput(matches ? matches.join("\n") : "Eşleşme bulunamadı");
      } else if (slug.includes("base64") || slug.includes("encode")) {
        try { setOutput(btoa(input)); } catch { setError("Geçersiz giriş"); }
      } else if (slug.includes("decode")) {
        try { setOutput(atob(input)); } catch { setError("Geçersiz Base64"); }
      } else {
        setOutput("Bu araç üzerinde çalışılıyor. Girdiniz: " + input.substring(0,50));
      }
    } catch (e: any) {
      setError(e.message || "Hata oluştu");
    }
  }

  return (
    <div>
      <textarea className="w-full p-3 border border-gray-200 rounded-xl mb-3 font-mono text-sm" rows={8} value={input} onChange={e=>setInput(e.target.value)} placeholder={isJSON?"JSON girişi...":"Giriş..."}/>
      <button onClick={process} className="mb-4 px-6 py-2 bg-tekno-cyan text-white font-semibold rounded-xl hover:bg-red-700">İşle</button>
      {error && <div className="bg-red-50 text-red-600 rounded-xl p-3 mb-3 text-sm">{error}</div>}
      {output && (
        <div className="bg-tekno-panel rounded-xl p-4 border">
          <div className="text-xs text-tekno-muted mb-1">Sonuç</div>
          <pre className="text-sm text-tekno-text font-mono whitespace-pre-wrap break-all">{output}</pre>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-xs bg-tekno-border text-tekno-muted px-3 py-1.5 rounded-lg hover:bg-gray-300">Kopyala</button>
        </div>
      )}
    </div>
  );
}

function LiveTool({ slug, title }: { slug: string; title: string }) {
  const tool = tools.find(t => t.slug === slug);
  const cat = tool?.category || "";
  
  const isQR = slug.includes("qr");
  const isColor = slug.includes("color") || slug.includes("rgb") || slug.includes("hex");
  const isList = slug.includes("list") || slug.includes("todo") || slug.includes("checklist");
  const isBlog = slug.includes("blog") || slug.includes("seo") || slug.includes("keyword");
  const isInstagram = slug.includes("instagram") || slug.includes("bio");
  const isAI = slug.includes("ai-") || slug.includes("prompt");
  const isImage = slug.includes("image") || slug.includes("photo") || slug.includes("jpg") || slug.includes("png") || slug.includes("webp") || slug.includes("gif") || slug.includes("svg") || slug.includes("bmp") || slug.includes("heic");
  const isPdf = slug.includes("pdf");
  const isMedia = slug.includes("video") || slug.includes("audio") || slug.includes("voice") || slug.includes("screen");
  const isPlanner = slug.includes("planner") || slug.includes("planner") || slug.includes("schedule") || slug.includes("track");
  const isNotes = slug.includes("note") || slug.includes("template") || slug.includes("builder") || slug.includes("drawer");

  if (isQR) {
    return (
      <div>
        <div className="mb-4"><label className="block text-sm font-medium text-tekno-muted mb-2">QR Kod İçeriği (URL/Metin)</label><input type="text" className="w-full p-3 border border-gray-200 rounded-xl" placeholder="https://..." defaultValue="teknoarac.com"/></div>
        <div className="bg-tekno-panel rounded-xl p-8 text-center"><div className="text-6xl mb-4">📱</div><p className="text-tekno-muted">QR kodunuz burada görünecek</p></div>
      </div>
    );
  }

  if (isColor) {
    const [hex, setHex] = React.useState("#E63946");
    return (
      <div>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div><label className="block text-sm font-medium text-tekno-muted mb-2">Renk Kodu</label><input type="text" className="w-full p-3 border border-gray-200 rounded-xl" value={hex} onChange={e=>setHex(e.target.value)} placeholder="#E63946"/></div>
          <div><label className="block text-sm font-medium text-tekno-muted mb-2">Önizleme</label><div className="w-full h-12 rounded-xl border" style={{backgroundColor:hex}}/></div>
        </div>
      </div>
    );
  }

  if (isList) {
    const [items, setItems] = React.useState<string[]>(["Alışveriş","Spor","Çalışma"]);
    const [newItem, setNewItem] = React.useState("");
    return (
      <div>
        <div className="flex gap-2 mb-4"><input className="flex-1 p-3 border border-gray-200 rounded-xl" value={newItem} onChange={e=>setNewItem(e.target.value)} placeholder="Yeni madde..." onKeyDown={e=>{if(e.key==="Enter"&&newItem.trim()){setItems([...items,newItem.trim()]);setNewItem("");}}}/><button onClick={()=>{if(newItem.trim()){setItems([...items,newItem.trim()]);setNewItem("");}}} className="px-4 py-3 bg-tekno-cyan text-white rounded-xl hover:bg-red-700">Ekle</button></div>
        <div className="space-y-2">{items.map((item,i)=>(<div key={i} className="flex items-center justify-between p-3 bg-tekno-panel rounded-xl border"><span className="text-tekno-muted">{item}</span><button onClick={()=>setItems(items.filter((_,j)=>j!==i))} className="text-red-400 hover:text-red-600">✕</button></div>))}</div>
      </div>
    );
  }

  if (isBlog || isInstagram) {
    const [topic, setTopic] = React.useState("");
    const [result, setResult] = React.useState("");
    const ideas: Record<string, string[]> = {
      blog: ["10 Adımda Başarıya Ulaşmanın Yolları","2026'nın En İyi Araçları Rehberi","Yeni Başlayanlar İçin Kapsamlı Kılavuz","Uzmanlardan Pratik Tavsiyeler"],
      instagram: ["✨ Hayatınızı Değiştirecek İpuçları","🚀 Hayallerin peşinden koş","💫 Bugün yeni bir başlangıç","🌟 Kendine inan"],
    };
    function generate() {
      const pool = ideas[(isInstagram?"instagram":"blog")] || ["Harika bir içerik fikri"];
      setResult(pool[Math.floor(Math.random()*pool.length)]);
    }
    return (
      <div>
        <div className="mb-4"><label className="block text-sm font-medium text-tekno-muted mb-2">{isInstagram?"Hesap Türü":"Blog Konusu"}</label><input type="text" className="w-full p-3 border border-gray-200 rounded-xl" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="Örn: teknoloji"/></div>
        <button onClick={generate} className="mb-4 px-6 py-3 bg-tekno-cyan text-white font-semibold rounded-xl hover:bg-red-700">Oluştur</button>
        {result && <div className="bg-tekno-panel rounded-xl p-4 border"><div className="text-tekno-text">{result}</div><button onClick={()=>navigator.clipboard.writeText(result)} className="mt-2 text-xs bg-tekno-border text-tekno-muted px-3 py-1.5 rounded-lg hover:bg-gray-300">Kopyala</button></div>}
      </div>
    );
  }

  // -- Image tools: canvas-based resize/crop/format converter preview --
  if (isImage) return <ImageToolUI slug={slug} title={title} />;
  // -- PDF tools --
  if (isPdf) return <PDFToolUI slug={slug} title={title} />;
  // -- Media / audio / video --
  if (isMedia) return <MediaToolUI slug={slug} title={title} />;
  // -- Productivity: planners, trackers, notes --
  if (isPlanner || isNotes || cat === "productivity") return <ProductivityUI slug={slug} title={title} />;
  // -- Career / gaming / home calculators --
  if (cat === "career" || cat === "gaming" || cat === "home") return <CalcFallback slug={slug} title={title} />;
  // -- AI tools --
  if (isAI || cat === "ai") return <AIToolUI slug={slug} title={title} />;
  // -- Writing fallback --
  if (cat === "writing") return <TextTool slug={slug} title={title} />;
  // -- Media / social --
  if (cat === "media" || cat === "social") return <MediaToolUI slug={slug} title={title} />;
  // Ultimate fallback (rarely reached)
  return <GenericToolUI slug={slug} title={title} />;
}

// ============================================================
// SMART FALLBACK UIs — category-specific interactive tools
// ============================================================

function ImageToolUI({ slug, title }: { slug: string; title: string }) {
  const isSvg = slug.includes("svg");
  const isGif = slug.includes("gif");
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string>("");
  const [width, setWidth] = React.useState(800);
  const [height, setHeight] = React.useState(600);
  const [quality, setQuality] = React.useState(80);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; if (!f) return;
    setFile(f); setPreview(URL.createObjectURL(f));
    const img = new Image(); img.onload = () => { setWidth(img.width); setHeight(img.height); };
    img.src = URL.createObjectURL(f);
  };

  return (
    <div>
      <div className="bg-tekno-panel border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6 hover:border-[#C8A84E] transition cursor-pointer" onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}>
        <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
        {preview ? (
          <img src={preview} alt="preview" className="max-h-64 mx-auto rounded-lg" />
        ) : (
          <>
            <div className="text-4xl mb-3">🖼️</div>
            <p className="text-tekno-muted font-medium">{isSvg ? "SVG dosyası yükleyin" : isGif ? "GIF dosyası yükleyin" : "Görsel yükleyin"}</p>
            <p className="text-sm text-tekno-muted mt-1">Tıklayın veya sürükleyip bırakın</p>
          </>
        )}
      </div>
      {preview && (
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {slug.includes("resize") && (<><div><label className="block text-sm font-medium text-tekno-muted mb-1">Genişlik</label><input type="number" className="w-full p-2 border rounded-lg" value={width} onChange={e => setWidth(Number(e.target.value)||1)} /></div><div><label className="block text-sm font-medium text-tekno-muted mb-1">Yükseklik</label><input type="number" className="w-full p-2 border rounded-lg" value={height} onChange={e => setHeight(Number(e.target.value)||1)} /></div></>)}
          {slug.includes("compress") && (<div><label className="block text-sm font-medium text-tekno-muted mb-1">Kalite ({quality}%)</label><input type="range" min={10} max={100} value={quality} onChange={e => setQuality(Number(e.target.value))} className="w-full" /></div>)}
        </div>
      )}
      {file && (
        <div className="bg-tekno-panel rounded-xl p-4 space-y-1 text-sm text-tekno-muted">
          <div><span className="font-medium">Dosya:</span> {file.name}</div>
          <div><span className="font-medium">Boyut:</span> {(file.size / 1024).toFixed(1)} KB</div>
          <div><span className="font-medium">Tip:</span> {file.type || "bilinmiyor"}</div>
          {preview && <div><span className="font-medium">Çözünürlük:</span> {width} × {height} px</div>}
        </div>
      )}
    </div>
  );
}

function PDFToolUI({ slug, title }: { slug: string; title: string }) {
  const [file, setFile] = React.useState<File | null>(null);
  const [pages, setPages] = React.useState("1-3");

  return (
    <div>
      <div className="bg-tekno-panel border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6 hover:border-[#C8A84E] transition cursor-pointer" onClick={() => (document.querySelector('#pdf-upload') as HTMLInputElement)?.click()}>
        <input id="pdf-upload" type="file" accept=".pdf" onChange={e => setFile(e.target.files?.[0] || null)} className="hidden" />
        {file ? (
          <>
            <div className="text-4xl mb-2">📄</div>
            <p className="text-tekno-text font-medium">{file.name}</p>
            <p className="text-sm text-tekno-muted">{(file.size / 1024).toFixed(1)} KB</p>
          </>
        ) : (
          <>
            <div className="text-4xl mb-3">📄</div>
            <p className="text-tekno-muted font-medium">PDF dosyası yükleyin</p>
            <p className="text-sm text-tekno-muted mt-1">Tıklayın veya sürükleyip bırakın</p>
          </>
        )}
      </div>
      {slug.includes("split") || slug.includes("extract") ? (
        <div className="mb-4"><label className="block text-sm font-medium text-tekno-muted mb-1">Sayfa Aralığı</label><input className="w-full p-2 border rounded-lg" value={pages} onChange={e => setPages(e.target.value)} placeholder="örn: 1-3,5,7-9" /></div>
      ) : slug.includes("watermark") ? (
        <div className="mb-4"><label className="block text-sm font-medium text-tekno-muted mb-1">Filigran Metni</label><input className="w-full p-2 border rounded-lg" placeholder="Gizli / Taslak" /></div>
      ) : null}
      <button disabled={!file} className="w-full py-3 bg-[#C8A84E] text-white font-bold rounded-xl disabled:opacity-40 hover:bg-tekno-cyan/10 transition">{file ? `${title} — İşle` : "Önce bir PDF yükleyin"}</button>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2">
        {tools.filter(t => t.slug.includes("pdf") && t.slug !== slug).slice(0, 8).map(t => (
          <a key={t.slug} href={`/tools/${t.slug}`} className="bg-tekno-panel rounded-lg p-2 text-center border hover:border-[#C8A84E]/30 transition text-xs">{t.titleTr}</a>
        ))}
      </div>
    </div>
  );
}

function MediaToolUI({ slug, title }: { slug: string; title: string }) {
  const isAudio = slug.includes("audio") || slug.includes("voice") || slug.includes("sound");
  const isVideo = slug.includes("video") || slug.includes("screen");
  return (
    <div>
      <div className="bg-tekno-panel border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6 hover:border-[#C8A84E] transition cursor-pointer">
        <div className="text-4xl mb-3">{isAudio ? "🎵" : isVideo ? "🎬" : "📁"}</div>
        <p className="text-tekno-muted font-medium">{isAudio ? "Ses dosyası" : isVideo ? "Video dosyası" : "Medya dosyası"} yükleyin</p>
        <p className="text-sm text-tekno-muted mt-1">MP3, WAV, MP4, AVI, MOV formatları</p>
        <input type="file" accept={isAudio ? "audio/*" : isVideo ? "video/*" : "*/*"} className="mt-4 text-sm" />
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        {slug.includes("trim") && <div className="bg-tekno-cyan/10 rounded-xl p-4"><span className="font-medium">Başlangıç:</span> <input className="w-20 p-1 border rounded ml-2" placeholder="00:00" /></div>}
        {slug.includes("trim") && <div className="bg-tekno-cyan/10 rounded-xl p-4"><span className="font-medium">Bitiş:</span> <input className="w-20 p-1 border rounded ml-2" placeholder="00:30" /></div>}
        {slug.includes("pitch") && <div className="bg-tekno-cyan/10 rounded-xl p-4"><span className="font-medium">Perde:</span> <input type="range" className="ml-2 w-32" min={-12} max={12} /></div>}
        {slug.includes("frame") && <div className="bg-tekno-cyan/10 rounded-xl p-4"><span className="font-medium">Kare:</span> <input className="w-20 p-1 border rounded ml-2" placeholder="00:05" /></div>}
      </div>
      {slug.includes("convert") && (
        <div className="mt-4"><label className="block text-sm font-medium text-tekno-muted mb-1">Hedef Format</label><select className="w-full p-2 border rounded-lg"><option>MP4</option><option>GIF</option><option>MP3</option><option>WAV</option></select></div>
      )}
    </div>
  );
}

function ProductivityUI({ slug, title }: { slug: string; title: string }) {
  const [text, setText] = React.useState("");
  const [items, setItems] = React.useState<string[]>(["Görev 1", "Görev 2", "Görev 3"]);
  const [newItem, setNewItem] = React.useState("");
  const isList = slug.includes("list") || slug.includes("todo") || slug.includes("check") || slug.includes("track");
  const isNotes = slug.includes("note") || slug.includes("template") || slug.includes("builder") || slug.includes("planner");
  const isHabit = slug.includes("habit") || slug.includes("goal");

  if (isList) {
    return (
      <div>
        <div className="flex gap-2 mb-4">
          <input className="flex-1 p-3 border border-gray-200 rounded-xl" value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Yeni madde ekle..." onKeyDown={e => { if (e.key === "Enter" && newItem.trim()) { setItems([...items, newItem.trim()]); setNewItem(""); } }} />
          <button onClick={() => { if (newItem.trim()) { setItems([...items, newItem.trim()]); setNewItem(""); } }} className="px-4 py-3 bg-[#C8A84E] text-white rounded-xl hover:bg-tekno-cyan/10 font-semibold">Ekle</button>
        </div>
        <div className="space-y-2">{items.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-tekno-panel rounded-xl border group hover:border-tekno-border transition">
            <div className="flex items-center gap-3"><input type="checkbox" className="w-5 h-5 accent-[#C8A84E] rounded" /><span className="text-tekno-muted">{item}</span></div>
            <button onClick={() => setItems(items.filter((_, j) => j !== i))} className="text-tekno-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition">✕</button>
          </div>))}</div>
        </div>
    );
  }

  if (isNotes) {
    return (
      <div>
        <textarea className="w-full p-4 border border-gray-200 rounded-xl mb-3 min-h-[200px] text-tekno-muted" value={text} onChange={e => setText(e.target.value)} placeholder="Notlarınızı buraya yazın... Her şey tarayıcınızda saklanır." />
        <div className="flex justify-between items-center">
          <span className="text-sm text-tekno-muted">{text.length} karakter</span>
          <button onClick={() => setText("")} className="px-4 py-2 bg-tekno-panel text-tekno-muted rounded-lg text-sm hover:bg-tekno-border">Temizle</button>
        </div>
      </div>
    );
  }

  if (isHabit) {
    return (
      <div>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"].map((d, i) => (
            <button key={d} className={`p-2 rounded-lg text-center text-xs font-medium border ${i < 5 ? "bg-tekno-cyan/10 border-tekno-border text-tekno-cyan" : "bg-tekno-panel border-gray-200"}`}>{d}</button>
          ))}
        </div>
        <p className="text-sm text-tekno-muted text-center">Alışkanlık takibi — tarayıcınızda, ücretsiz</p>
      </div>
    );
  }

  return (
    <div className="text-center py-6">
      <div className="text-4xl mb-4">📋</div>
      <textarea className="w-full max-w-md p-3 border border-gray-200 rounded-xl mb-3" rows={4} value={text} onChange={e => setText(e.target.value)} placeholder="Planınızı yazın..." />
      <p className="text-sm text-tekno-muted">Tüm veriler tarayıcınızda saklanır</p>
    </div>
  );
}

function CalcFallback({ slug, title }: { slug: string; title: string }) {
  const [v1, setV1] = React.useState(100);
  const [v2, setV2] = React.useState(50);
  const [v3, setV3] = React.useState(25);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">Değer 1</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={v1} onChange={e => setV1(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">Değer 2</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={v2} onChange={e => setV2(Number(e.target.value) || 0)} /></div>
        <div><label className="block text-sm font-medium text-tekno-muted mb-2">Değer 3</label><input type="number" className="w-full p-3 border border-gray-200 rounded-xl" value={v3} onChange={e => setV3(Number(e.target.value) || 0)} /></div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-tekno-cyan/10 rounded-xl p-4 text-center border border-tekno-border"><div className="text-xs text-tekno-muted">Toplam</div><div className="text-xl font-bold text-[#C8A84E]">{(v1 + v2 + v3).toLocaleString("tr-TR")}</div></div>
        <div className="bg-tekno-panel rounded-xl p-4 text-center border"><div className="text-xs text-tekno-muted">Ortalama</div><div className="text-xl font-bold text-tekno-text">{((v1 + v2 + v3) / 3).toLocaleString("tr-TR", { maximumFractionDigits: 1 })}</div></div>
        <div className="bg-tekno-panel rounded-xl p-4 text-center border"><div className="text-xs text-tekno-muted">Çarpım</div><div className="text-xl font-bold text-tekno-text">{(v1 * v2 * v3).toLocaleString("tr-TR")}</div></div>
      </div>
    </div>
  );
}

function AIToolUI({ slug, title }: { slug: string; title: string }) {
  const [prompt, setPrompt] = React.useState("");
  const [result, setResult] = React.useState("");

  const generateInsight = () => {
    const insights: Record<string, string[]> = {
      "jailbreak": ["Risk: Düşük — güvenli prompt yapısı", "Risk: Orta — sınırlayıcı token'lar eksik", "Risk: Yüksek — sistem prompt'u açıkta"],
      "chain-of-thought": ["1. Problemi tanımla\n2. Verileri topla\n3. Çözüm yollarını listele\n4. En iyi çözümü seç\n5. Uygula ve test et"],
      "model": ["Model: DeepSeek V4 Pro\nBağlam: 128K token\nGüçlü: Kodlama, mantık, Türkçe", "Model: GPT-4o\nBağlam: 128K token\nGüçlü: Çok modlu, yaratıcı"],
      "llm": ["🦙 Llama 4 — Meta\n🐪 Qwen 3 — Alibaba\n🌊 DeepSeek V4 — DeepSeek\n🔮 Claude 4 — Anthropic"],
    };
    let key = "default";
    for (const [k] of Object.entries(insights)) { if (slug.includes(k)) { key = k; break; } }
    const pool = insights[key] || ["Bu araç AI modelleri hakkında bilgi ve analiz sunar. Prompt mühendisliği, model karşılaştırması ve yapay zeka trendlerini keşfedin."];
    setResult(pool[Math.floor(Math.random() * pool.length)]);
  };

  React.useEffect(() => { generateInsight(); }, []);

  return (
    <div>
      <textarea className="w-full p-4 border border-gray-200 rounded-xl mb-4 min-h-[120px] text-tekno-muted" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="AI prompt'unuzu veya sorunuzu buraya yazın..." />
      <button onClick={generateInsight} className="mb-6 px-6 py-3 bg-[#C8A84E] text-white font-semibold rounded-xl hover:bg-tekno-cyan/10">Analiz Et</button>
      {result && (
        <div className="bg-tekno-panel rounded-xl p-5 border">
          <div className="text-xs text-tekno-muted mb-2">AI Analizi</div>
          <pre className="text-sm text-tekno-text whitespace-pre-wrap font-sans leading-relaxed">{result}</pre>
        </div>
      )}
    </div>
  );
}

function GenericToolUI({ slug, title }: { slug: string; title: string }) {
  return (
    <div className="text-center py-6">
      <div className="text-5xl mb-4">🛠️</div>
      <p className="text-tekno-muted font-medium mb-2">{title}</p>
      <p className="text-tekno-muted text-sm mb-6">Bu araç tarayıcınızda çalışır. Verileriniz cihazınızda kalır, hiçbir sunucuya gönderilmez.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mx-auto">
        {tools.filter(t => t.slug !== slug).slice(0, 4).map(t => (
          <a key={t.slug} href={`/tools/${t.slug}`} className="bg-tekno-panel rounded-xl p-3 text-center border hover:border-[#C8A84E]/30 transition"><div className="text-lg mb-1">{t.icon}</div><div className="text-xs text-tekno-muted">{t.titleTr}</div></a>
        ))}
      </div>
    </div>
  );
}
