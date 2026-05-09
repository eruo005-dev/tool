const fs=require('fs');
const KEY='sk-5c4dab92b6e2461fa7e2d036b1d318e5';
const file='C:/Users/eruo0/Desktop/project/toolpazar/content/guides/password-security-guide-with-real-entropy-examples.tsx';
const content=fs.readFileSync(file,'utf8');
console.log('File size:',(content.length/1024).toFixed(1),'KB');

fetch('https://api.deepseek.com/v1/chat/completions',{
  method:'POST',
  headers:{'Content-Type':'application/json','Authorization':'Bearer '+KEY},
  body:JSON.stringify({
    model:'deepseek-chat',
    messages:[{role:'user',content:'Translate the following technical guide from English to Turkish. Keep ALL HTML/JSX tags, ALL code blocks, ALL import/export statements, and ALL technical terms exactly as-is. Only translate the visible text content. Return ONLY the translated content.\n\n'+content}],
    temperature:0.3,
    max_tokens:65536
  })
}).then(r=>r.json()).then(d=>{
  const t=d.choices?.[0]?.message?.content||'';
  console.log('Response length:',t.length);
  if(t.length>content.length*0.3){
    let c=t.replace(/^```(?:tsx|typescript|jsx|javascript)?\n?/,'').replace(/\n?```$/,'');
    fs.writeFileSync(file,c);
    const tr=(c.match(/[çğıöşüÇĞİÖŞÜ]/g)||[]).length;
    console.log('✅ Translated! TR chars:',tr,'Ratio:',(tr/Math.max(1,c.length/10)*100).toFixed(0)+'%');
  }else{console.log('❌ Too short:',t.length)}
}).catch(e=>console.log('Error:',e.message));
