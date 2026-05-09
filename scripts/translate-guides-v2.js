/**
 * Translate 5 English guides to Turkish using DeepSeek API
 */
const fs = require('fs');
const path = require('path');

const DEEPSEEK_KEY = 'sk-5c4dab92b6e2461fa7e2d036b1d318e5';
const GUIDES_DIR = path.resolve(__dirname, '..', 'content', 'guides');

const ENGLISH_GUIDES = [
  'complete-guide-to-mortgage-calculations-2026',
  'json-format-rules-every-developer-should-know',
  'password-security-guide-with-real-entropy-examples',
  'regex-cheat-sheet-all-patterns-explained',
  'how-to-use-openhands',
];

async function translate(text) {
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
        content: `Translate the following technical guide from English to Turkish. Keep all HTML/JSX tags, code blocks, import statements, and technical terms intact. Only translate the visible text content. Return ONLY the translated content — no explanations.\n\n${text}`
      }],
      temperature: 0.3,
      max_tokens: 65536
    })
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}

async function main() {
  for (const slug of ENGLISH_GUIDES) {
    const filePath = path.join(GUIDES_DIR, `${slug}.tsx`);
    if (!fs.existsSync(filePath)) {
      console.log(`NOT FOUND: ${slug}`);
      continue;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const sizeKB = (content.length / 1024).toFixed(1);
    
    console.log(`\nTranslating: ${slug} (${sizeKB}KB)...`);
    
    try {
      const translated = await translate(content);
      
      if (translated && translated.length > content.length * 0.5) {
        // Clean any markdown code fences DeepSeek might wrap with
        let clean = translated;
        clean = clean.replace(/^```(?:tsx|typescript|jsx|javascript)?\n?/, '');
        clean = clean.replace(/\n?```$/, '');
        
        fs.writeFileSync(filePath, clean);
        
        // Verify Turkish characters
        const turkishChars = (clean.match(/[çğıöşüÇĞİÖŞÜ]/g) || []).length;
        console.log(`  ✅ Done! Turkish chars: ${turkishChars}`);
      } else {
        console.log(`  ❌ Translation too short (${translated?.length || 0} chars), skipped`);
        // Save what we got anyway
        if (translated) {
          fs.writeFileSync(filePath + '.tr.bak', translated);
          console.log(`  Backup saved to ${slug}.tsx.tr.bak`);
        }
      }
    } catch (e) {
      console.log(`  ❌ Error: ${e.message}`);
    }
    
    // Rate limit: 1 request per 2 seconds
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log('\n=== All guides processed ===');
}

main().catch(console.error);
