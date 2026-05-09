"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

// ============================================================
// 🎮 INTERACTIVE GAME COMPONENTS - 19 games
// ============================================================

// --- 1) SNAKE GAME ---
export function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const snakeRef = useRef<{body:{x:number,y:number}[], dir:{x:number,y:number}, food:{x:number,y:number}}>({
    body: [], dir: {x:1,y:0}, food: {x:10,y:10}
  });
  const intervalRef = useRef<ReturnType<typeof setInterval>|null>(null);

  const GRID = 20; const CELL = 20; const W = GRID*CELL; const H = GRID*CELL;

  const init = useCallback(() => {
    const mid = Math.floor(GRID/2);
    snakeRef.current = {
      body: [{x:mid,y:mid},{x:mid-1,y:mid},{x:mid-2,y:mid}],
      dir: {x:1,y:0},
      food: {x:Math.floor(Math.random()*GRID),y:Math.floor(Math.random()*GRID)}
    };
    setScore(0); setGameOver(false); setStarted(true);
  },[]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current; if(!canvas) return;
    const ctx = canvas.getContext("2d"); if(!ctx) return;
    const s = snakeRef.current;
    ctx.fillStyle = "#1a1a2e"; ctx.fillRect(0,0,W,H);
    s.body.forEach((seg,i)=>{
      ctx.fillStyle = i===0 ? "#C8A84E" : "#e4c874";
      ctx.fillRect(seg.x*CELL+1, seg.y*CELL+1, CELL-2, CELL-2);
    });
    ctx.fillStyle = "#ff6b6b";
    ctx.beginPath(); ctx.arc(s.food.x*CELL+CELL/2, s.food.y*CELL+CELL/2, CELL/2-2, 0, Math.PI*2); ctx.fill();
  },[]);

  const tick = useCallback(() => {
    const s = snakeRef.current;
    const head = {x:s.body[0].x+s.dir.x, y:s.body[0].y+s.dir.y};
    if(head.x<0||head.x>=GRID||head.y<0||head.y>=GRID||s.body.some(seg=>seg.x===head.x&&seg.y===head.y)){
      setGameOver(true); return;
    }
    const newBody = [head,...s.body];
    if(head.x===s.food.x && head.y===s.food.y){
      snakeRef.current.food = {x:Math.floor(Math.random()*GRID),y:Math.floor(Math.random()*GRID)};
      setScore(prev=>prev+10);
    } else { newBody.pop(); }
    snakeRef.current.body = newBody;
    draw();
  },[draw]);

  useEffect(()=>{
    const k = (e:KeyboardEvent)=>{
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) e.preventDefault();
      const d = snakeRef.current.dir;
      if(e.key==="ArrowUp"&&d.y!==1) snakeRef.current.dir={x:0,y:-1};
      if(e.key==="ArrowDown"&&d.y!==-1) snakeRef.current.dir={x:0,y:1};
      if(e.key==="ArrowLeft"&&d.x!==1) snakeRef.current.dir={x:-1,y:0};
      if(e.key==="ArrowRight"&&d.x!==-1) snakeRef.current.dir={x:1,y:0};
    };
    window.addEventListener("keydown",k); return ()=>window.removeEventListener("keydown",k);
  },[]);

  useEffect(()=>{
    if(!started||gameOver){ if(intervalRef.current) if(intervalRef.current) clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(tick, 120);
    return ()=>{ if(intervalRef.current) if(intervalRef.current) clearInterval(intervalRef.current); };
  },[started,gameOver,tick]);

  useEffect(()=>{ if(started) draw(); },[started,draw]);

  return (<div className="text-center">
    <div className="flex justify-between items-center mb-4 max-w-[400px] mx-auto">
      <div className="bg-tekno-cyan/10 text-tekno-cyan px-4 py-1.5 rounded-full font-bold text-lg">Skor: {score}</div>
      {!started && <button onClick={init} className="px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl hover:bg-tekno-cyan/10 text-lg">Başlat</button>}
    </div>
    <canvas ref={canvasRef} width={W} height={H} className="mx-auto rounded-xl border-2 border-tekno-border bg-[#1a1a2e]" />
    {gameOver && <div className="mt-4 space-y-2"><p className="text-lg font-bold text-red-500">Oyun Bitti!</p><button onClick={init} className="px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl">Tekrar Oyna</button></div>}
    <p className="text-sm text-gray-400 mt-3">Yön tuşları ile hareket edin</p>
  </div>);
}

// --- 2) 2048 ---
export function Game2048() {
  const [grid,setGrid]=useState<number[][]>([...Array(4)].map(()=>Array(4).fill(0)));
  const [score,setScore]=useState(0);
  const [gameOver,setGameOver]=useState(false);
  const [started,setStarted]=useState(false);

  const addTile = useCallback((g: number[][]) => {
    const empty: [number, number][] = []; g.forEach((r,i)=>r.forEach((c,j)=>{if(c===0) empty.push([i,j]);}));
    if(empty.length){ const [i,j]=empty[Math.floor(Math.random()*empty.length)]; g[i][j]=Math.random()<0.9?2:4; }
    return g;
  },[]);

  const init = useCallback(()=>{
    let g=[...Array(4)].map(()=>Array(4).fill(0));
    g=addTile(g); g=addTile(g); setGrid(g); setScore(0); setGameOver(false); setStarted(true);
  },[addTile]);

  const move = useCallback((dir:string)=>{
    let g=grid.map(r=>[...r]); let moved=false; let s=0;
    const rotate = (m:number[][],t:number):number[][] => {
      for(let k=0;k<t;k++) m=m[0].map((_,i)=>m.map(r=>r[i]).reverse()); return m;
    };
    let m=[...g.map(r=>[...r])];
    if(dir==="up") m=rotate(m,3); if(dir==="down") m=rotate(m,1); if(dir==="right") m=rotate(m,2);
    for(let i=0;i<4;i++){
      let row=m[i].filter(x=>x!==0);
      for(let j=0;j<row.length-1;j++){ if(row[j]===row[j+1]){ row[j]*=2; s+=row[j]; row[j+1]=0; }}
      row=row.filter(x=>x!==0); while(row.length<4) row.push(0);
      if(row.some((v,j)=>v!==m[i][j])) moved=true; m[i]=row;
    }
    if(dir==="up") m=rotate(m,1); if(dir==="down") m=rotate(m,3); if(dir==="right") m=rotate(m,2);
    if(moved){ m=addTile(m); setScore(prev=>prev+s); setGrid(m); }
    const isOver=m.every(r=>r.every(c=>c!==0)) && !canMove(m);
    if(isOver) setGameOver(true);
  },[grid,addTile]);

  const canMove=(g:number[][]):boolean=>{
    for(let i=0;i<4;i++) for(let j=0;j<3;j++){ if(g[i][j]===g[i][j+1]||(g[j+1]&&g[j][i]===g[j+1][i])) return true; }
    return false;
  };

  useEffect(()=>{
    const k=(e:KeyboardEvent)=>{
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) e.preventDefault();
      if(started&&!gameOver){ if(e.key==="ArrowUp")move("up"); if(e.key==="ArrowDown")move("down"); if(e.key==="ArrowLeft")move("left"); if(e.key==="ArrowRight")move("right"); }
    }; window.addEventListener("keydown",k); return ()=>window.removeEventListener("keydown",k);
  },[started,gameOver,move]);

  const colors:Record<number,string>={2:"bg-yellow-100",4:"bg-yellow-200",8:"bg-orange-300",16:"bg-orange-400",32:"bg-red-400",64:"bg-red-500",128:"bg-tekno-cyan/10",256:"bg-tekno-cyan/10",512:"bg-tekno-cyan/10",1024:"bg-yellow-400",2048:"bg-[#C8A84E]"};

  if(!started) return (<div className="text-center"><button onClick={init} className="px-8 py-4 bg-[#C8A84E] text-white font-bold text-xl rounded-xl hover:bg-tekno-cyan/10">2048 Başlat</button></div>);

  return (<div className="text-center">
    <div className="flex justify-between items-center mb-4 max-w-[300px] mx-auto">
      <div className="bg-tekno-cyan/10 text-tekno-cyan px-4 py-1.5 rounded-full font-bold text-lg">{score}</div>
      <button onClick={init} className="text-sm px-3 py-1.5 bg-gray-200 rounded-lg hover:bg-gray-300">Yeni</button>
    </div>
    <div className="grid grid-cols-4 gap-2 max-w-[300px] mx-auto bg-gray-200 p-3 rounded-xl">
      {grid.map((r,i)=>r.map((c,j)=>(<div key={`${i}-${j}`} className={`aspect-square flex items-center justify-center rounded-lg font-bold text-lg ${c?colors[c]||"bg-[#C8A84E] text-white":"bg-gray-100"} transition-all`}>{c||""}</div>)))}
    </div>
    {gameOver && <p className="mt-4 text-lg font-bold text-red-500">Oyun Bitti!</p>}
    <p className="text-sm text-gray-400 mt-3">Yön tuşları ile oynayın</p>
  </div>);
}

// --- 3) TIC-TAC-TOE ---
export function TicTacToe() {
  const [board,setBoard]=useState<string[]>(Array(9).fill(""));
  const [turn,setTurn]=useState<"X"|"O">("X");
  const [winner,setWinner]=useState<string|null>(null);
  const winLines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  const click=(i:number)=>{
    if(board[i]||winner) return;
    const b=[...board]; b[i]=turn; setBoard(b);
    const w=winLines.find(([a,b,c])=>board[a]&&board[a]===board[b]&&board[b]===board[c]);
    if(w){ setWinner(board[w[0]]); return; }
    if(b.every(c=>c)){ setWinner("Beraberlik"); return; }
    setTurn(turn==="X"?"O":"X");
  };

  return (<div className="text-center">
    <div className="text-lg font-bold mb-4 text-gray-700">{winner?`${winner==="Beraberlik"?"Beraberlik!":winner+ " Kazandı!"}`:`Sıra: ${turn}`}</div>
    <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto">{board.map((c,i)=>(<button key={i} onClick={()=>click(i)} className="w-20 h-20 bg-gray-100 hover:bg-gray-200 rounded-xl text-3xl font-bold flex items-center justify-center border border-gray-200">{c}</button>))}</div>
    {(winner||board.every(c=>c)) && <button onClick={()=>{setBoard(Array(9).fill(""));setTurn("X");setWinner(null);}} className="mt-6 px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl">Tekrar</button>}
  </div>);
}

// --- 4) HANGMAN ---
export function Hangman() {
  const words=["İSTANBUL","ANKARA","İZMİR","ANTALYA","BURSA","TRABZON","KONYA","SAMSUN"];
  const [word,setWord]=useState("");
  const [guessed,setGuessed]=useState<Set<string>>(new Set());
  const [wrong,setWrong]=useState(0);
  const maxWrong=6;

  useEffect(()=>{setWord(words[Math.floor(Math.random()*words.length)]);},[]);
  const display=word.split("").map(l=>guessed.has(l)?l:"_").join(" ");
  const win=word&&word.split("").every(l=>guessed.has(l));
  const lose=wrong>=maxWrong;

  const guess=(l:string)=>{
    if(win||lose||guessed.has(l)) return;
    const g=new Set(guessed); g.add(l); setGuessed(g);
    if(!word.includes(l)) setWrong(w=>w+1);
  };

  const reset=()=>{ setWord(words[Math.floor(Math.random()*words.length)]); setGuessed(new Set()); setWrong(0); };

  return (<div className="text-center max-w-xs mx-auto">
    <div className="text-4xl font-mono font-bold text-gray-800 mb-6">{display}</div>
    <div className="text-red-500 mb-4">Hatalar: {"❤️".repeat(maxWrong-wrong)}{"🖤".repeat(wrong)}</div>
    {(win||lose)&&<div className="text-lg font-bold mb-4" style={{color:win?"#22c55e":"#ef4444"}}>{win?"Kazandınız! 🎉":`Kaybettiniz! Kelime: ${word}`}<br/><button onClick={reset} className="mt-3 px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl">Yeni Oyun</button></div>}
    {!win&&!lose&&<div className="grid grid-cols-7 gap-1.5">{["A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"].map(l=>(<button key={l} onClick={()=>guess(l)} disabled={guessed.has(l)} className="p-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 rounded-lg text-sm font-medium">{l}</button>))}</div>}
  </div>);
}

// --- 5) ROCK-PAPER-SCISSORS ---
export function RockPaperScissors() {
  const [score,setScore]=useState(0); const [pc,setPc]=useState(0);
  const [result,setResult]=useState(""); const [pl,setPl]=useState(""); const [cp,setCp]=useState("");
  const play=(p:string)=>{const o=["Taş","Kağıt","Makas"]; const c=o[Math.floor(Math.random()*3)]; setPl(p);setCp(c);
    if(p===c){setResult("Berabere!")}else if((p==="Taş"&&c==="Makas")||(p==="Kağıt"&&c==="Taş")||(p==="Makas"&&c==="Kağıt")){setResult("Kazandınız!");setScore(s=>s+1)}else{setResult("Kaybettiniz!");setPc(s=>s+1)}};
  return (<div className="text-center">
    <div className="flex justify-center gap-8 text-lg font-bold mb-6"><span className="text-green-600">Sen: {score}</span><span className="text-red-500">PC: {pc}</span></div>
    {result&&<div className="mb-6"><div className="flex justify-center gap-8 text-3xl mb-2"><span>{pl==="Taş"?"🪨":pl==="Kağıt"?"📄":"✂️"}</span><span>vs</span><span>{cp==="Taş"?"🪨":cp==="Kağıt"?"📄":"✂️"}</span></div><div className={`text-xl font-bold ${result.includes("Kazan")?"text-green-600":result.includes("Kayb")?"text-red-500":"text-gray-600"}`}>{result}</div></div>}
    <div className="flex justify-center gap-4">{["Taş","Kağıt","Makas"].map(p=>(<button key={p} onClick={()=>play(p)} className="px-5 py-3 bg-gray-100 hover:bg-tekno-cyan/10 rounded-xl text-2xl border border-gray-200">{p==="Taş"?"🪨":p==="Kağıt"?"📄":"✂️"}</button>))}</div>
  </div>);
}

// --- 6) MINESWEEPER ---
export function Minesweeper() {
  const size=8; const mines=10;
  const [board,setBoard]=useState<{m:boolean,n:number,r:boolean,f:boolean}[][]>([]);
  const [gameOver,setGameOver]=useState(false);
  const [win,setWin]=useState(false);
  const [started,setStarted]=useState(false);

  const init=useCallback(()=>{
    let b=Array(size).fill(null).map(()=>Array(size).fill(null).map(()=>({m:false,n:0,r:false,f:false})));
    let placed=0;
    while(placed<mines){ const r=Math.floor(Math.random()*size); const c=Math.floor(Math.random()*size); if(!b[r][c].m){b[r][c].m=true; placed++;} }
    for(let i=0;i<size;i++) for(let j=0;j<size;j++){
      if(b[i][j].m) continue; let n=0;
      for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){ if(di===0&&dj===0) continue; const ni=i+di,nj=j+dj; if(ni>=0&&ni<size&&nj>=0&&nj<size&&b[ni][nj].m) n++; }
      b[i][j].n=n;
    }
    setBoard(b); setGameOver(false); setWin(false); setStarted(true);
  },[]);

  const reveal=(i:number,j:number)=>{
    if(!started||gameOver||win) return;
    const b=board.map(r=>r.map(c=>({...c})));
    if(b[i][j].r||b[i][j].f) return;
    if(b[i][j].m){ b.forEach(r=>r.forEach(c=>c.r=true)); setGameOver(true); setBoard(b); return; }
    const q=[{i,j}]; b[i][j].r=true;
    while(q.length){ const {i,j}=q.shift()!; if(b[i][j].n===0){ for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){ const ni=i+di,nj=j+dj; if(ni>=0&&ni<size&&nj>=0&&nj<size&&!b[ni][nj].r&&!b[ni][nj].m){ b[ni][nj].r=true; q.push({i:ni,j:nj}); } } } }
    const revealed=b.flat().filter(c=>c.r).length;
    if(revealed===size*size-mines){ setWin(true); b.forEach(r=>r.forEach(c=>c.r=true)); }
    setBoard(b);
  };

  const flag=(e:React.MouseEvent,i:number,j:number)=>{ e.preventDefault();
    if(!started||gameOver||win) return; const b=board.map(r=>r.map(c=>({...c}))); if(!b[i][j].r) b[i][j].f=!b[i][j].f; setBoard(b); };

  const colors=["","text-blue-600","text-green-600","text-red-600","text-blue-800","text-red-800","text-teal-600","text-black","text-gray-600"];

  if(!started) return (<div className="text-center"><button onClick={init} className="px-8 py-4 bg-[#C8A84E] text-white font-bold text-xl rounded-xl">Mayın Tarlası Başlat</button></div>);

  return (<div className="text-center">
    <div className="mb-4">{gameOver&&<span className="text-red-500 font-bold">Mayına Bastın!</span>}{win&&<span className="text-green-600 font-bold">Kazandınız!</span>}{(gameOver||win)&&<button onClick={init} className="ml-4 px-4 py-1.5 bg-[#C8A84E] text-white rounded-lg text-sm">Yeni</button>}</div>
    <div className="inline-grid gap-0.5" style={{gridTemplateColumns:`repeat(${size},minmax(0,1fr))`}}>
      {board.map((r,i)=>r.map((c,j)=>(<button key={`${i}-${j}`} onClick={()=>reveal(i,j)} onContextMenu={(e)=>flag(e,i,j)} className={`w-10 h-10 text-xs font-bold rounded flex items-center justify-center border ${c.r?(c.m?"bg-red-500":"bg-gray-100"):c.f?"bg-tekno-cyan/10":"bg-gray-200 hover:bg-gray-300"}`}>
        {c.r?c.m?"💣":c.n?<span className={colors[c.n]}>{c.n}</span>:"" :c.f?"🚩":""}
      </button>)))}
    </div>
    <p className="text-sm text-gray-400 mt-3">Sol tık: aç • Sağ tık: bayrak</p>
  </div>);
}

// --- 7) PONG ---
export function Pong() {
  const canvasRef=useRef<HTMLCanvasElement>(null); const W=400,H=300;
  const [score,setScore]=useState(0);const[pScore,setPScore]=useState(0);
  const [started,setStarted]=useState(false);const[gameOver,setGameOver]=useState(false);
  const stateRef=useRef({ball:{x:W/2,y:H/2,vx:3,vy:3},paddle:{y:H/2-40,dy:0},paddleY:H/2-40});

  const init=useCallback(()=>{ stateRef.current={ball:{x:W/2,y:H/2,vx:3*(Math.random()>0.5?1:-1),vy:3*(Math.random()>0.5?1:-1)},paddle:{y:H/2-40,dy:0},paddleY:H/2-40}; setScore(0);setPScore(0);setGameOver(false);setStarted(true); },[]);

  useEffect(()=>{
    const onMouse=(e:MouseEvent)=>{ if(!canvasRef.current)return; const rect=canvasRef.current.getBoundingClientRect(); const y=(e.clientY-rect.top)*(H/rect.height); stateRef.current.paddle.y=Math.max(0,Math.min(H-80,y)); };
    window.addEventListener("mousemove",onMouse); return ()=>window.removeEventListener("mousemove",onMouse);
  },[]);

  useEffect(()=>{
    if(!started||gameOver) return;
    const loop=setInterval(()=>{ const s=stateRef.current; s.ball.x+=s.ball.vx; s.ball.y+=s.ball.vy;
      if(s.ball.y<=0||s.ball.y>=H) s.ball.vy*=-1;
      if(s.ball.x<=20&&s.ball.y>s.paddle.y&&s.ball.y<s.paddle.y+80){ s.ball.vx*=-1; s.ball.vx*=1.05; setScore(prev=>prev+1); }
      if(s.ball.x>=W){ setPScore(prev=>prev+1); if(pScore+1>=5){setGameOver(true);return;} s.ball={x:W/2,y:H/2,vx:-3*(Math.random()>0.5?1:-1),vy:3*(Math.random()>0.5?1:-1)}; }
      const ctx=canvasRef.current?.getContext("2d"); if(ctx){ ctx.fillStyle="#1a1a2e";ctx.fillRect(0,0,W,H); ctx.fillStyle="#C8A84E";ctx.fillRect(10,s.paddle.y,10,80); ctx.fillStyle="white";ctx.beginPath();ctx.arc(s.ball.x,s.ball.y,6,0,Math.PI*2);ctx.fill(); }
      if(score>=5){ setGameOver(true);return; }
    },16);
    return ()=>clearInterval(loop);
  },[started,gameOver,score,pScore]);

  if(!started) return (<div className="text-center"><button onClick={init} className="px-8 py-4 bg-[#C8A84E] text-white font-bold text-xl rounded-xl">Pong Başlat</button></div>);
  return (<div className="text-center">
    <div className="flex justify-between max-w-[400px] mx-auto mb-4"><span className="text-lg font-bold text-green-600">Sen: {score}</span><span className="text-lg font-bold text-red-500">PC: {pScore}</span></div>
    <canvas ref={canvasRef} width={W} height={H} className="mx-auto rounded-xl border-2 border-tekno-border bg-[#1a1a2e]" />
    {gameOver&&<div className="mt-4"><p className="text-lg font-bold" style={{color:score>=5?"#22c55e":"#ef4444"}}>{score>=5?"Kazandınız!":"Kaybettiniz!"}</p><button onClick={init} className="mt-2 px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl">Tekrar Oyna</button></div>}
    <p className="text-sm text-gray-400 mt-3">Fare ile paddle'ı hareket ettirin</p>
  </div>);
}

// --- 8) CONNECT FOUR ---
export function ConnectFour() {
  const rows=6,cols=7;
  const [board,setBoard]=useState<(null|"R"|"Y")[][]>([...Array(rows)].map(()=>Array(cols).fill(null)));
  const [turn,setTurn]=useState<"R"|"Y">("R");
  const [winner,setWinner]=useState<string|null>(null);

  const drop=(col:number)=>{
    if(winner) return;
    const b=board.map(r=>[...r]);
    for(let r=rows-1;r>=0;r--){if(!b[r][col]){b[r][col]=turn; setBoard(b); break; }}
    if(checkWin(b,turn)){setWinner(turn);return} if(b[0].every(c=>c)){setWinner("B");return}
    setTurn(turn==="R"?"Y":"R");
  };
  const checkWin=(b:(null|"R"|"Y")[][],p:string):boolean=>{
    for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){
      if(c<=cols-4&&[0,1,2,3].every(i=>b[r][c+i]===p)) return true;
      if(r<=rows-4&&[0,1,2,3].every(i=>b[r+i][c]===p)) return true;
      if(r<=rows-4&&c<=cols-4&&[0,1,2,3].every(i=>b[r+i][c+i]===p)) return true;
      if(r>=3&&c<=cols-4&&[0,1,2,3].every(i=>b[r-i][c+i]===p)) return true;
    } return false;
  };
  const reset=()=>{setBoard([...Array(rows)].map(()=>Array(cols).fill(null)));setTurn("R");setWinner(null);};

  return (<div className="text-center">
    <div className="mb-4 text-lg font-bold text-gray-700">{winner?winner==="B"?"Beraberlik!":`${winner==="R"?"🔴":"🟡"} Kazandı!`:`Sıra: ${turn==="R"?"🔴":"🟡"}`}</div>
    <div className="inline-grid gap-1.5 bg-blue-100 p-3 rounded-xl">{board.map((r,i)=>(<React.Fragment key={i}>{r.map((c,j)=>(<button key={j} onClick={()=>drop(j)} className={`w-12 h-12 rounded-full border-2 ${c?"border-gray-400":"border-blue-300 hover:border-tekno-border"} ${c==="R"?"bg-red-500":c==="Y"?"bg-yellow-400":""}`}/>))}</React.Fragment>))}</div>
    {winner&&<button onClick={reset} className="mt-4 px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl">Yeni Oyun</button>}
  </div>);
}

// --- 9) SIMON SAYS ---
export function SimonSays() {
  const colors=["#ef4444","#22c55e","#3b82f6","#eab308"];
  const [seq,setSeq]=useState<number[]>([]); const[plSeq,setPlSeq]=useState<number[]>([]);
  const [playing,setPlaying]=useState(false); const[level,setLevel]=useState(0);
  const[lit,setLit]=useState<number|null>(null); const[selfPlaying,setSelfPlaying]=useState(false);

  const start=()=>{ setSeq([Math.floor(Math.random()*4)]); setPlSeq([]); setPlaying(true); setLevel(1); };
  useEffect(()=>{ if(!playing||plSeq.length>0||selfPlaying) return; setSelfPlaying(true);
    const playSeq=async()=>{ for(let i=0;i<seq.length;i++){ setLit(null); await new Promise(r=>setTimeout(r,300)); setLit(seq[i]); await new Promise(r=>setTimeout(r,400)); } setLit(null); setSelfPlaying(false); }; playSeq(); },[playing,seq,plSeq,selfPlaying]);

  const press=(i:number)=>{ if(!playing||selfPlaying) return; const np=[...plSeq,i]; setPlSeq(np);
    if(np[np.length-1]!==seq[np.length-1]){ setPlaying(false);setLevel(0);return; }
    if(np.length===seq.length){ setTimeout(()=>{ setPlSeq([]);setSeq([...seq,Math.floor(Math.random()*4)]);setLevel(l=>l+1); },800); }
  };

  return (<div className="text-center">
    <div className="text-lg font-bold mb-6 text-gray-700">{playing?`Seviye: ${level}`:"Başlamak için tıklayın"}</div>
    <div className="grid grid-cols-2 gap-3 max-w-[200px] mx-auto mb-6">{colors.map((c,i)=>(<button key={i} onClick={()=>press(i)} disabled={!playing||selfPlaying} className={`w-24 h-24 rounded-xl transition-all ${lit===i?"brightness-150 scale-110":"brightness-100"} ${playing&&!selfPlaying?"cursor-pointer hover:brightness-110":""}`} style={{backgroundColor:c, opacity:(!playing||selfPlaying)?0.5:1}}/>))}</div>
    {!playing&&<button onClick={start} className="px-6 py-3 bg-[#C8A84E] text-white font-bold rounded-xl text-lg">{level?"Yeniden Başlat (Skor: "+level+")":"Başlat"}</button>}
  </div>);
}

// --- 10) 15-PUZZLE ---
export function FifteenPuzzle() {
  const [tiles,setTiles]=useState<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]);
  const [moves,setMoves]=useState(0);
  const [win,setWin]=useState(false);

  const shuffle=()=>{ const t=[...Array(16)].map((_,i)=>i); for(let i=15;i>0;i--){const j=Math.floor(Math.random()*i);[t[i],t[j]]=[t[j],t[i]];}
    setTiles(t);setMoves(0);setWin(false); };

  const move=(i:number)=>{ if(win) return;
    const empty=tiles.indexOf(0); const er=Math.floor(empty/4),ec=empty%4,ir=Math.floor(i/4),ic=i%4;
    if(Math.abs(er-ir)+Math.abs(ec-ic)!==1) return;
    const t=[...tiles]; t[empty]=t[i]; t[i]=0; setTiles(t); setMoves(m=>m+1);
    if(t.every((v,i)=>v===0||v===i+1)) setWin(true);
  };

  if(tiles.every((v,i)=>v===0||v===i+1)&&moves===0) shuffle();

  return (<div className="text-center">
    <div className="mb-4"><span className="text-gray-600 font-medium">Hamle: {moves}</span>{win&&<span className="ml-3 text-green-600 font-bold">Tamam!</span>}</div>
    <div className="grid grid-cols-4 gap-1.5 max-w-[260px] mx-auto bg-gray-200 p-2 rounded-xl">{tiles.map((t,i)=>(<button key={i} onClick={()=>move(i)} className={`w-14 h-14 rounded-lg font-bold text-lg flex items-center justify-center transition ${t===0?"bg-transparent":"bg-[#C8A84E] text-white hover:bg-tekno-cyan/10"}`}>{t||""}</button>))}</div>
    <button onClick={shuffle} className="mt-4 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">Karıştır</button>
  </div>);
}

// --- GENERIC GAME ROUTER ---
export function GameTool({ slug, title }: { slug: string; title: string }) {
  if (slug === "snake-game") return <SnakeGame />;
  if (slug === "2048-game") return <Game2048 />;
  if (slug === "tic-tac-toe") return <TicTacToe />;
  if (slug === "hangman-game") return <Hangman />;
  if (slug === "rock-paper-scissors") return <RockPaperScissors />;
  if (slug === "minesweeper") return <Minesweeper />;
  if (slug === "pong") return <Pong />;
  if (slug === "connect-four") return <ConnectFour />;
  if (slug === "simon-says") return <SimonSays />;
  if (slug === "15-puzzle") return <FifteenPuzzle />;

  // Simple generic games
  if (slug === "higher-or-lower" || slug === "number-guess") return <NumberGuess slug={slug} title={title} />;
  if (slug === "reaction-time-test") return <ReactionTime title={title} />;
  if (slug === "word-scramble") return <WordScramble title={title} />;
  if (slug === "math-speed-test") return <MathSpeed title={title} />;
  if (slug === "whack-a-mole") return <WhackAMole />;
  if (slug === "lights-out") return <LightsOut />;
  if (slug === "tower-of-hanoi") return <TowerOfHanoi />;
  if (slug === "wordle-clone") return <WordleClone />;

  return <div className="text-center py-8"><div className="text-5xl mb-4">🎮</div><p className="text-gray-600">{title} yükleniyor...</p></div>;
}

// --- SIMPLE GAMES ---

function NumberGuess({ slug, title }: { slug: string; title: string }) {
  const isHigherLower = slug.includes("higher");
  const [target,setTarget]=useState(Math.floor(Math.random()*100)+1);
  const [guess,setGuess]=useState("");
  const [msgs,setMsgs]=useState<string[]>([]);
  const [won,setWon]=useState(false);
  const [attempts,setAttempts]=useState(0);

  const submit=()=>{ const n=parseInt(guess); if(isNaN(n)) return; setAttempts(a=>a+1);
    if(n===target){ setMsgs(m=>[...m,`${n} → Doğru! 🎉`]); setWon(true); }
    else if(isHigherLower){ setMsgs(m=>[...m,`${n} → ${n<target?"Daha YÜKSEK":"Daha DÜŞÜK"}`]); }
    else { setMsgs(m=>[...m,`${n} → ${n<target?"Daha BÜYÜK":"Daha KÜÇÜK"}`]); }
    setGuess("");
  };

  return (<div className="max-w-xs mx-auto text-center">
    <div className="space-y-1 mb-4 max-h-40 overflow-y-auto">{[...msgs].reverse().slice(0,8).map((m,i)=>(<div key={i} className={`text-sm p-1.5 rounded ${m.includes("Doğru")?"bg-green-50 text-green-700":m.includes("YÜKSEK")||m.includes("BÜYÜK")?"bg-red-50 text-red-600":"bg-blue-50 text-blue-600"}`}>{m}</div>))}</div>
    {!won?(<><input type="number" className="w-full p-3 border border-gray-200 rounded-xl mb-3 text-center text-lg" value={guess} onChange={e=>setGuess(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="1-100 arası sayı"/><button onClick={submit} className="w-full py-3 bg-[#C8A84E] text-white font-bold rounded-xl">Tahmin Et</button></>)
    :(<div><p className="text-lg font-bold text-green-600 mb-4">{attempts} denemede buldunuz!</p><button onClick={()=>{setTarget(Math.floor(Math.random()*100)+1);setMsgs([]);setWon(false);setAttempts(0);}} className="px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl">Yeni Oyun</button></div>)}
  </div>);
}

function ReactionTime({ title }: { title: string }) {
  const [phase,setPhase]=useState<"idle"|"wait"|"ready"|"clicked">("idle");
  const [result,setResult]=useState(0);
  const timerRef=useRef<ReturnType<typeof setTimeout>|null>(null);
  const startRef=useRef(0);

  const start=()=>{setPhase("wait");setResult(0);
    timerRef.current=setTimeout(()=>{setPhase("ready");startRef.current=Date.now();}, 1000+Math.random()*3000); };
  const click=()=>{ if(phase==="ready"){ setResult(Date.now()-startRef.current); setPhase("clicked"); } else if(phase==="wait"){ setResult(-1);setPhase("clicked");if(timerRef.current) clearTimeout(timerRef.current); } };

  return (<div className="text-center">
    {phase==="idle"&&<button onClick={start} className="px-8 py-20 bg-[#C8A84E] text-white font-bold text-xl rounded-2xl w-full">Başlamak İçin Tıkla</button>}
    {phase==="wait"&&<button onClick={click} className="px-8 py-20 bg-red-400 text-white font-bold text-xl rounded-2xl w-full">Bekleyin...</button>}
    {phase==="ready"&&<button onClick={click} className="px-8 py-20 bg-green-500 text-white font-bold text-xl rounded-2xl w-full animate-pulse">HEMEN TIKLA!</button>}
    {phase==="clicked"&&<div>{result===-1?<p className="text-lg font-bold text-red-500 mb-4">Çok erken!</p>:<p className="text-lg font-bold text-green-600 mb-4">{result} ms</p>}<button onClick={start} className="px-6 py-3 bg-[#C8A84E] text-white font-bold rounded-xl">Tekrar Dene</button></div>}
  </div>);
}

function WordScramble({ title }: { title: string }) {
  const words=["ANKARA","İSTANBUL","BİLGİSAYAR","TELEFON","KÜTÜPHANE","MERDİVEN","KARANFİL","PORTAKAL"];
  const [word,setWord]=useState("");const[scrambled,setScrambled]=useState("");
  const [g,setG]=useState("");const[msg,setMsg]=useState("");

  const newWord=()=>{const w=words[Math.floor(Math.random()*words.length)];setWord(w);setScrambled(w.split("").sort(()=>Math.random()-0.5).join(""));setMsg("");setG("");};
  useEffect(()=>{newWord();},[]);

  const check=()=>{if(g.toUpperCase()===word){setMsg("Doğru! 🎉");setTimeout(newWord,1500);}else{setMsg("Tekrar dene!");setG("");}};

  return (<div className="text-center max-w-xs mx-auto">
    <div className="text-3xl font-bold font-mono tracking-wider text-gray-800 mb-6">{scrambled}</div>
    <input className="w-full p-3 border border-gray-200 rounded-xl mb-3 text-center text-lg" value={g} onChange={e=>setG(e.target.value)} onKeyDown={e=>e.key==="Enter"&&check()} placeholder="Kelimeyi yazın"/>
    {msg&&<div className={`text-lg font-bold mb-3 ${msg.includes("Doğru")?"text-green-600":"text-red-500"}`}>{msg}</div>}
    <button onClick={check} className="w-full py-3 bg-[#C8A84E] text-white font-bold rounded-xl">Kontrol Et</button>
    <button onClick={newWord} className="mt-2 text-sm text-gray-400 hover:text-gray-600">Yeni Kelime</button>
  </div>);
}

function MathSpeed({ title }: { title: string }) {
  const [a,setA]=useState(0);const[b,setB]=useState(0);const[op,setOp]=useState("+");
  const [ans,setAns]=useState("");const[score,setScore]=useState(0);const[timer,setTimer]=useState(30);
  const [started,setStarted]=useState(false);const[done,setDone]=useState(false);

  const nextQ=useCallback(()=>{setA(Math.floor(Math.random()*50)+1);setB(Math.floor(Math.random()*50)+1);setOp(["+","-","×","÷"][Math.floor(Math.random()*4)]);setAns("");},[]);
  const correct=()=>{ const n=parseInt(ans);
    const expected=op==="+"?a+b:op==="-"?a-b:op==="×"?a*b:Math.round(a/b);
    return n===expected;
  };

  const start=()=>{setStarted(true);setScore(0);setTimer(30);setDone(false);nextQ();};
  useEffect(()=>{ if(!started||done)return; const i=setInterval(()=>{setTimer(t=>{if(t<=1){setDone(true);return 0;}return t-1;});},1000); return ()=>clearInterval(i); },[started,done]);

  const submit=()=>{ if(!ans) return; if(correct()){ setScore(s=>s+1); nextQ(); } else { setAns(""); } };

  if(!started) return (<div className="text-center"><button onClick={start} className="px-8 py-4 bg-[#C8A84E] text-white font-bold text-xl rounded-xl">Başlat</button></div>);
  if(done) return (<div className="text-center"><p className="text-2xl font-bold mb-4">Skor: {score}</p><button onClick={start} className="px-6 py-3 bg-[#C8A84E] text-white font-bold rounded-xl">Tekrar</button></div>);

  return (<div className="text-center max-w-xs mx-auto">
    <div className="flex justify-between mb-4"><span className="text-lg font-bold text-[#C8A84E]">{score}</span><span className="text-lg font-bold" style={{color:timer<10?"#ef4444":"#6b7280"}}>{timer}s</span></div>
    <div className="text-4xl font-bold text-gray-800 mb-6">{a} {op} {b} = ?</div>
    <input type="number" className="w-full p-3 border border-gray-200 rounded-xl mb-3 text-center text-lg" value={ans} onChange={e=>setAns(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} autoFocus/>
    <button onClick={submit} className="w-full py-3 bg-[#C8A84E] text-white font-bold rounded-xl">Cevapla</button>
  </div>);
}

function WhackAMole() {
  const [score,setScore]=useState(0); const[time,setTime]=useState(30);
  const [started,setStarted]=useState(false); const[done,setDone]=useState(false);
  const [mole,setMole]=useState<number|null>(null); const intervalRef=useRef<ReturnType<typeof setInterval>|null>(null);

  const start=()=>{setStarted(true);setScore(0);setTime(30);setDone(false);};
  useEffect(()=>{if(!started||done){if(intervalRef.current) clearInterval(intervalRef.current);return;}
    intervalRef.current=setInterval(()=>{setMole(Math.floor(Math.random()*9));setTimeout(()=>setMole(null),600);},800);
    const t=setInterval(()=>{setTime(t=>{if(t<=1){setDone(true);return 0;}return t-1;});},1000);
    return ()=>{if(intervalRef.current) clearInterval(intervalRef.current);clearInterval(t);};
  },[started,done]);

  if(!started) return (<div className="text-center"><button onClick={start} className="px-8 py-4 bg-[#C8A84E] text-white font-bold text-xl rounded-xl">Başlat</button></div>);
  if(done) return (<div className="text-center"><p className="text-2xl font-bold mb-4">Skor: {score}</p><button onClick={start} className="px-6 py-3 bg-[#C8A84E] text-white font-bold rounded-xl">Tekrar</button></div>);

  return (<div className="text-center">
    <div className="flex justify-between mb-4 max-w-[280px] mx-auto"><span className="font-bold text-[#C8A84E]">Skor: {score}</span><span className="font-bold" style={{color:time<10?"#ef4444":"#6b7280"}}>{time}s</span></div>
    <div className="grid grid-cols-3 gap-2 max-w-[280px] mx-auto bg-tekno-cyan/10 p-3 rounded-xl">{[...Array(9)].map((_,i)=>(<button key={i} onClick={()=>{if(mole===i){setScore(s=>s+1);setMole(null);}}} className="w-20 h-20 bg-tekno-cyan/10 rounded-full flex items-center justify-center text-3xl transition">{mole===i?"🐹":""}</button>))}</div>
  </div>);
}

function LightsOut() {
  const size=5;
  const [grid,setGrid]=useState<boolean[][]>([...Array(size)].map(()=>Array(size).fill(false)));
  const [moves,setMoves]=useState(0);
  const [won,setWon]=useState(false);

  useEffect(()=>{
    const g=[...Array(size)].map(()=>Array(size).fill(false));
    for(let k=0;k<10;k++){const r=Math.floor(Math.random()*size),c=Math.floor(Math.random()*size);toggle(g,r,c);}
    setGrid(g);
  },[]);

  const toggle=(g:boolean[][],r:number,c:number)=>{
    [[0,0],[0,1],[0,-1],[1,0],[-1,0]].forEach(([dr,dc])=>{const nr=r+dr,nc=c+dc;if(nr>=0&&nr<size&&nc>=0&&nc<size)g[nr][nc]=!g[nr][nc];});
  };

  const click=(r:number,c:number)=>{
    if(won)return;const g=grid.map(row=>[...row]); toggle(g,r,c); setGrid(g); setMoves(m=>m+1);
    if(g.every(row=>row.every(c=>!c)))setWon(true);
  };

  return (<div className="text-center">
    <div className="mb-4 text-gray-600">Hamle: {moves}{won&&<span className="ml-3 text-green-600 font-bold">Kazandınız!</span>}</div>
    <div className="inline-grid gap-1" style={{gridTemplateColumns:`repeat(${size},1fr)`}}>
      {grid.map((r,i)=>r.map((c,j)=>(<button key={`${i}-${j}`} onClick={()=>click(i,j)} className={`w-12 h-12 rounded transition ${c?"bg-tekno-cyan/10":"bg-gray-800"}`}/>)))}
    </div>
    {won&&<button onClick={()=>{const g=[...Array(size)].map(()=>Array(size).fill(false));for(let k=0;k<10;k++){const r=Math.floor(Math.random()*size),c=Math.floor(Math.random()*size);toggle(g,r,c);}setGrid(g);setMoves(0);setWon(false);}} className="mt-4 px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl">Yeni Oyun</button>}
  </div>);
}

function TowerOfHanoi() {
  const [n,setN]=useState(3);
  const [pegs,setPegs]=useState<number[][]>([[3,2,1],[],[]]);
  const [sel,setSel]=useState<number|null>(null);
  const [moves,setMoves]=useState(0);
  const [won,setWon]=useState(false);

  const reset=(disks=3)=>{setPegs([[...Array(disks)].map((_,i)=>disks-i),[],[],]);setMoves(0);setWon(false);setSel(null);setN(disks);};

  const clickPeg=(i:number)=>{
    if(won)return;
    if(sel===null){ if(pegs[i].length>0)setSel(i); }
    else{
      if(sel===i){setSel(null);return;}
      const src=pegs[sel],dst=pegs[i];
      if(dst.length===0||src[src.length-1]<dst[dst.length-1]){
        const p=pegs.map(p=>[...p]); p[i]=[...p[i],p[sel].pop()!]; setPegs(p); setMoves(m=>m+1);
        if(i!==0&&p[i].length===n)setWon(true);
      }
      setSel(null);
    }
  };

  return (<div className="text-center">
    <div className="mb-4"><span className="text-gray-600">Hamle: {moves} | Disk: {n} | Min: {Math.pow(2,n)-1}</span>{won&&<span className="ml-3 text-green-600 font-bold">Tamam!</span>}</div>
    <div className="flex justify-center items-end gap-4 h-32">
      {pegs.map((peg,i)=>(<button key={i} onClick={()=>clickPeg(i)} className={`flex flex-col-reverse items-center w-20 min-h-[120px] rounded-t-lg border-b-4 ${sel===i?"border-[#C8A84E] bg-tekno-cyan/10":"border-gray-300 bg-gray-100 hover:bg-gray-200"}`}>
        {peg.map((d,j)=>(<div key={j} className="h-4 mb-0.5 rounded" style={{width:`${d*14+8}px`,backgroundColor:["#ef4444","#3b82f6","#eab308","#22c55e","#a855f7","#ec4899"][d-1]}}/>))}
        <div className="text-xs text-gray-400 mt-1 mb-1">{i+1}</div>
      </button>))}
    </div>
    {[3,4,5].map(d=>(<button key={d} onClick={()=>reset(d)} className={`mx-1 mt-4 px-3 py-1 rounded text-sm ${n===d?"bg-[#C8A84E] text-white":"bg-gray-200"}`}>{d} Disk</button>))}
    {won&&<button onClick={()=>reset(n)} className="ml-2 mt-4 px-4 py-1 bg-[#C8A84E] text-white rounded text-sm">Tekrar</button>}
  </div>);
}

function WordleClone() {
  const words=["KALEM","SİLGİ","DEFTER","KİTAP","MASA","SANDAL","KAPI","PENCER","LAMBA","HALI"];
  const [target,setTarget]=useState("");
  const [guesses,setGuesses]=useState<string[]>([]);
  const [input,setInput]=useState("");
  const [won,setWon]=useState(false);
  const [lost,setLost]=useState(false);

  useEffect(()=>{setTarget(words[Math.floor(Math.random()*words.length)]);},[]);

  const submit=()=>{
    if(input.length!==5)return;
    const w=input.toLocaleUpperCase("tr");
    setGuesses([...guesses,w]); setInput("");
    if(w===target){setWon(true);return}
    if(guesses.length>=5){setLost(true)}
  };

  const getColor=(letter:string,i:number,r:number):string=>{
    if(target[i]===letter)return "bg-green-500 text-white";
    if(target.includes(letter))return "bg-tekno-cyan/10 text-white";
    return "bg-gray-300";
  };

  const reset=()=>{setTarget(words[Math.floor(Math.random()*words.length)]);setGuesses([]);setInput("");setWon(false);setLost(false);};

  return (<div className="text-center max-w-xs mx-auto">
    <div className="space-y-1.5 mb-4">
      {guesses.map((g,i)=>(<div key={i} className="flex gap-1.5 justify-center">{g.split("").map((l,j)=>(<div key={j} className={`w-10 h-10 flex items-center justify-center font-bold rounded ${getColor(l,j,i)}`}>{l}</div>))}</div>))}
      {(won||lost)&&<div className={`text-lg font-bold mt-4 ${won?"text-green-600":"text-red-500"}`}>{won?"Kazandınız!":"Kaybettiniz!"}<br/><span className="text-sm text-gray-500">Kelime: {target}</span><br/><button onClick={reset} className="mt-2 px-6 py-2 bg-[#C8A84E] text-white font-bold rounded-xl">Yeni Oyun</button></div>}
    </div>
    {!won&&!lost&&guesses.length<=5&&(<>
      <input className="w-full p-3 border border-gray-200 rounded-xl mb-3 text-center text-lg tracking-widest" value={input} onChange={e=>setInput(e.target.value.slice(0,5))} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="5 harfli kelime" autoFocus/>
      <button onClick={submit} disabled={input.length!==5} className="w-full py-3 bg-[#C8A84E] text-white font-bold rounded-xl disabled:opacity-50">Dene ({6-guesses.length} hak)</button>
    </>)}
  </div>);
}
