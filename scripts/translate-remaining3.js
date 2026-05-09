/**
 * Translate remaining 3 English guides — one at a time with longer delays
 */
const fs = require('fs');
const path = require('path');

const DEEPSEEK_KEY = 'sk-5c4dab92b6e2461fa7e2d036b1d318e5';
const GUIDES_DIR = path.resolve(__dirname, '..', 'content', 'guides');

const REMAINING = [
  'password-security-guide-with-real-entropy-examples',
  'regex-cheat-sheet-all-patterns-explained',
  'how-to-use-openhands',
];

async function translate(text) {
  // Trim very long content to reduce API load
  const trimmed = text.length > 25000 ? text.slice(0, 25000) : text;
  
  const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_KEY}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{
        role: 'user',
        content: `Translate the following technical guide from English to Turkish. Keep all HTML/JSX tags, code blocks, import statements, and technical terms intact. Only translate the visible text content. Return ONLY the translated content.\n\n${trimmed}`
      }],
      temperature: 0.3,
      max_tokens: 65536
    }),
    signal: AbortSignal.timeout(120000)
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}

async function main() {
  for (const slug of REMAINING) {
    const filePath = path.join(GUIDES_DIR, `${slug}.tsx`);
    if (!fs.existsSync(filePath)) { console.log(`NOT FOUND: ${slug}`); continue; }
    
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`\nTranslating: ${slug} (${(content.length/1024).toFixed(1)}KB)...`);
    
    try {
      const translated = await translate(content);
      if (translated && translated.length > content.length * 0.3) {
        let clean = translated;
        clean = clean.replace(/^```(?:tsx|typescript|jsx|javascript)?\n?/, '');
        clean = clean.replace(/\n?```$/, '');
        fs.writeFileSync(filePath, clean);
        const turkishChars = (clean.match(/[çğıöşüÇĞİÖŞÜ]/g) || []).length;
        console.log(`  ✅ Done! TR chars: ${turkishChars}, ratio: ${(turkishChars/Math.max(1,clean.length/10)*100).toFixed(0)}%`);
      } else {
        console.log(`  ❌ Too short (${translated?.length||0} chars)`);
      }
    } catch (e) {
      console.log(`  ❌ Error: ${e.message}`);
    }
    
    // 5 second delay between each
    await new Promise(r => setTimeout(r, 5000));
  }
  console.log('\n=== Done ===');
}

main().catch(console.error);
