const fs=require("fs");const AK="sk-5c4dab92b6e2461fa7e2d036b1d318e5";
const FTA="C:/Users/eruo0/Desktop/project/freetoolarena/content/guides";
const TGT="C:/Users/eruo0/Desktop/project/teknoarac/content/guides";
(async()=>{
for(const f of ["how-to-pick-a-wearable-health-tracker.tsx","how-to-prepare-for-coding-interviews.tsx"]){
const en=fs.readFileSync(FTA+"/"+f,"utf8");console.log(f+": "+en.length);
const r=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+AK},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"Translate this React JSX guide from English to Turkish. Keep ALL tags exactly. Output complete file. No markdown."},{role:"user",content:en}],temperature:0.2,max_tokens:16000})});
const t=(await r.json()).choices[0].message.content.replace(/^```[a-z]*\s*\n?/i,"").replace(/\n?```\s*$/,"").trim();
console.log(" -> "+t.length);fs.writeFileSync(TGT+"/"+f,t)
}console.log("Done")})();
