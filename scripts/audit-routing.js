const fs = require("fs");

// Parse tools.ts to get all slugs + categories
const toolsTs = fs.readFileSync("C:/Users/eruo0/Desktop/project/toolpazar/lib/tools.ts", "utf-8");

const blockRe = /\n  \{[\s\S]*?\n  \},?/g;
let m;
const tools = [];
while ((m = blockRe.exec(toolsTs)) !== null) {
  const slug = (m[0].match(/slug:\s*"([^"]+)"/) || [])[1];
  const cat = (m[0].match(/category:\s*"([^"]+)"/) || [])[1];
  const titleTr = (m[0].match(/titleTr:\s*"([^"]+)"/) || [])[1];
  const descTr = (m[0].match(/descriptionTr:\s*"([^"]+)"/) || [])[1];
  if (slug) tools.push({ slug, cat, titleTr, descTr });
}

// Parse ToolClient.tsx to extract routing logic
const tc = fs.readFileSync("C:/Users/eruo0/Desktop/project/toolpazar/app/tools/[slug]/ToolClient.tsx", "utf-8");

// Simulate the routing for each tool
const OVERRIDES = [
  "kdv-hesapla", "sifre-olustur", "bahsis-hesapla", "yuzde-hesapla",
  "doviz-cevirici", "indirim-hesapla", "birim-cevirici", "kredi-hesapla",
  "konut-kredisi", "yas-hesapla", "vucut-kitle", "rastgele-sayi",
  "fancy-text", "text-counter", "case-converter", "word-counter",
  "character-counter", "countdown-timer", "stopwatch", "pomodoro-timer",
  "coin-flip", "dice-roller", "decision-maker"
];

// Routing patterns (in order from the file)
const moneyPatterns = [/loan|mortgage|debt|savings|budget|finance|credit/, /compound|interest|apr|amortization/, /paycheck|salary|income|wage|earning/, /car-.*loan|auto|vehicle|depreciation|fuel|gas/, /invest|dividend|stock|portfolio|retirement|pension/, /tax|vat|kdv/, /cost|price|fee|expense|afford/, /.*calculator$/];
const converterPatterns = [/converter/, /temperature|length|weight|speed|volume|area|data|time.*zone|pressure|energy|power|frequency|digital-storage/];
const currencyPat = [/currency|exchange|forex|doviz/];
const pctPat = [/percentage|percent/];
const tipPat = [/tip|gratuity|bahsis/];
const healthPat = [/bmi|calorie|weight|water-intake|macro|protein|body-fat|ideal-weight|waist/, /sleep|pregnancy|ovulation|due-date|conception|fertility/, /heart-rate|pace|marathon|running|fitness|exercise|workout/];
const textPat = [/text|word|counter|character|letter|sentence|paragraph|read/, /reverse|flip|mirror|backwards/, /slug|url.*encode|url.*decode/, /base64|encode|decode|hash|md5|sha|encrypt/, /lorem|ipsum|dummy|placeholder/, /acronym|abbreviation|initialism/, /word-search|crossword|anagram|scrabble|palindrome/];
const casePat = [/case|uppercase|lowercase|capitalize/];
const genPat = [/generator|generate|random|picker|selector|choose/, /dice|coin|flip|spin|wheel|lottery/, /uuid|guid|unique-id/];
const qrPat = [/qr-?code|barcode/];
const timerPat = [/timer|countdown|stopwatch|pomodoro|clock|time-tracker|alarm/];
const colorPat = [/color|palette|gradient|rgb|hex|hsl|cmyk/];
const devPat = [/json|yaml|xml|csv|toml|markdown/, /regex|regexp/, /jwt|token|auth/, /subnet|ip.*address|ipv[46]|cidr|network/, /html|css|javascript|js-|typescript|ts-/, /api|curl|http|rest|graphql|websocket/, /git|github|docker|kubernetes|deploy|ci.cd|devops/, /linux|unix|bash|terminal|command|chmod|htpasswd|cron/];
const pdfPat = [/pdf/];
const imgPat = [/image|photo|picture|jpg|png|webp|gif|svg|heic|compress|resize|crop|remove.*bg/];
const aiPat = [/ai-|prompt|token.*count|model.*comp|cost.*estimator/];
const gamePat = [/game|snake|2048|tic-tac|hangman|memory|puzzle|maze|sudoku|chess|checkers|solitaire|tetris|pong|breakout|flappy|platformer|rpg/, /play|fun|quiz|trivia|bingo|wordle|crossword/];
const socialPat = [/instagram|twitter|tiktok|facebook|linkedin|social|hashtag|bio|profile|caption/];
const prodPat = [/to.?do|checklist|habit|tracker|planner|goal|notepad|scratchpad|journal|diary|organizer/];
const cookingPat = [/recipe|baking|cooking|coffee|tea|food|meal|grocery|shopping|ingredient/];
const autoPat = [/car|vehicle|tire|engine|oil|mileage|mpg|horsepower|torque/];
const petPat = [/dog|cat|pet|puppy|kitten|vet|vaccine/];
const parentingPat = [/baby|child|parenting|diaper|feeding|growth|percentile/];
const writingPat = [/blog|post|article|seo|keyword|headline|title.*generator|meta.*desc/];
const careerPat = [/resume|cv|interview|job|salary|career|promotion|linkedin/];

const catToComponent = {
  money: "MoneyCalc", health: "MoneyCalc", automotive: "MoneyCalc",
  cooking: "MoneyCalc", parenting: "MoneyCalc", pets: "MoneyCalc",
  units: "SmartConverter", converters: "SmartConverter",
  text: "TextTool", writing: "TextTool",
  random: "GeneratorTool", games: "GameTool",
  dev: "DevTool", coding: "DevTool",
  ai: "LiveTool→AIToolUI", productivity: "LiveTool→ProductivityUI",
  social: "LiveTool→MediaToolUI", media: "LiveTool→MediaToolUI", home: "LiveTool→CalcFallback",
  career: "LiveTool→CalcFallback", gaming: "LiveTool→CalcFallback"
};

function routeTool(slug, cat) {
  if (OVERRIDES.includes(slug)) return "EXPLICIT_OVERRIDE";
  
  // Pattern matching (same order as ToolClient.tsx)
  const patterns = [
    [moneyPatterns, "MoneyCalc"],
    [converterPatterns, "SmartConverter"],
    [currencyPat, "CurrencyTool"],
    [pctPat, "PercentageTool"],
    [tipPat, "TipTool"],
    [casePat, "CaseConverter/FancyText"],
    [healthPat, "MoneyCalc"],
    [textPat, "TextTool"],
    [genPat, "GeneratorTool"],
    [qrPat, "LiveTool"],
    [timerPat, "TimerTool"],
    [colorPat, "LiveTool"],
    [devPat, "DevTool"],
    [pdfPat, "LiveTool"],
    [imgPat, "LiveTool"],
    [aiPat, "LiveTool"],
    [gamePat, "GameTool"],
    [socialPat, "LiveTool"],
    [prodPat, "LiveTool"],
    [cookingPat, "MoneyCalc"],
    [autoPat, "MoneyCalc"],
    [petPat, "MoneyCalc"],
    [parentingPat, "MoneyCalc"],
    [writingPat, "LiveTool"],
    [careerPat, "LiveTool"],
  ];
  
  for (const [pats, comp] of patterns) {
    for (const pat of pats) {
      if (pat.test(slug)) return comp;
    }
  }
  
  // Category fallback
  // Category fallback
  if (catToComponent[cat]) return catToComponent[cat];
  
  return "LiveTool (FALLBACK)";
}

// Analyze each tool
console.log("=== ROUTING AUDIT ===\n");

const components = {};
const fallbacks = [];

tools.forEach(t => {
  const comp = routeTool(t.slug, t.cat);
  components[comp] = (components[comp] || 0) + 1;
  if (comp === "LiveTool (FALLBACK)") fallbacks.push(t);
});

// Sort by count
const sorted = Object.entries(components).sort((a, b) => b[1] - a[1]);
console.log("Component distribution:");
sorted.forEach(([comp, count]) => console.log(`  ${comp}: ${count} tools`));

console.log(`\n=== FALLBACKS (LiveTool generic) ===`);
console.log(`Total: ${fallbacks.length}\n`);
fallbacks.forEach(t => console.log(`  ${t.slug} [${t.cat}] — ${t.titleTr}`));

// Check LiveTool for "generic" — tools going to LiveTool without specific handling
console.log(`\n=== TOOLS IN LiveTool (check if handled) ===`);
const liveTools = tools.filter(t => {
  const comp = routeTool(t.slug, t.cat);
  return comp === "LiveTool" || comp === "LiveTool (FALLBACK)";
});
console.log(`Total in LiveTool: ${liveTools.length}`);
const liveSlugs = liveTools.map(t => t.slug);

// LiveTool handles: qr, color, todo/list, blog/instagram, ai/prompt
const handled = liveSlugs.filter(s => 
  s.includes("qr") || s.includes("color") || s.includes("rgb") || s.includes("hex") ||
  s.includes("list") || s.includes("todo") || s.includes("checklist") ||
  s.includes("blog") || s.includes("seo") || s.includes("keyword") ||
  s.includes("instagram") || s.includes("bio") ||
  s.includes("ai-") || s.includes("prompt")
);
console.log(`Handled (QR, color, list, blog, instagram, AI): ${handled.length}`);
const unhandled = liveSlugs.filter(s => !handled.includes(s));
console.log(`UNHANDLED (will show generic ⚡): ${unhandled.length}`);
unhandled.forEach(s => {
  const t = tools.find(t => t.slug === s);
  console.log(`  ${s} [${t?.cat}] — ${t?.titleTr}`);
});
