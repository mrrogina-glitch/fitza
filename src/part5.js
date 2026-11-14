
/* ===================== DIO 5: VOĐENI TRENING, NOVA POČETNA, GRAFIČKA DORADA ===================== */
document.head.insertAdjacentHTML('beforeend','<style>@keyframes fu{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes fall{from{transform:translateY(-20px) rotate(0);opacity:1}to{transform:translateY(105vh) rotate(540deg);opacity:0}}#app.fade>.pad,#app.fade>.hero{animation:fu .3s ease}.card,.chip,.btn,.stat{transition:transform .12s,box-shadow .2s}.card.sub:active,.chip:active,.btn:active,.stat.sub:active{transform:scale(.97)}.wcard{border-left:5px solid #d6336c}.wcard h3{display:flex;gap:8px;align-items:center}.conf{position:fixed;inset:0;pointer-events:none;z-index:50;overflow:hidden}.conf span{position:absolute;top:-20px;font-size:26px;animation:fall 2.2s ease-in forwards}.big{font-size:56px;font-weight:800;text-align:center;color:var(--p);margin:6px 0}.pbar{height:8px;background:var(--line);border-radius:9px;overflow:hidden}.pbar i{display:block;height:100%;background:linear-gradient(90deg,#ff6b9a,#7048e8);transition:width .4s}.wk{display:flex;justify-content:space-between;margin-top:10px}.wk div{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-size:12px;background:var(--line);color:var(--mut)}.wk div.ok{background:#2f9e77;color:#fff}.wk div.today{outline:2px solid #d6336c}body.rm .conf{display:none}body.rm *{animation:none!important}</style>');
let lastTab=null,pl=null,plI=null,wf='all';

// ---------- pomoćno ----------
let _ac=null;function beep(){try{const A=window.AudioContext||window.webkitAudioContext;if(A){if(!_ac)_ac=new A();if(_ac.state==='suspended'&&_ac.resume)_ac.resume();const c=_ac,o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=880;g.gain.value=.08;o.start();o.stop(c.currentTime+.16)}}catch(e){}try{navigator.vibrate&&navigator.vibrate(80)}catch(e){}}
function celebrate(){try{if(!document.body||!document.body.insertAdjacentHTML||rmOn())return;const em=['🎉','✨','💪','🌸','⭐','🏆'];document.body.insertAdjacentHTML('beforeend','<div class="conf" id="conf">'+Array.from({length:26},(_,i)=>`<span style="left:${Math.random()*100}%;animation-delay:${(Math.random()*.8).toFixed(2)}s">${em[i%em.length]}</span>`).join('')+'</div>');setTimeout(()=>{const c=$('#conf');if(c&&c.remove)c.remove()},3200)}catch(e){}}
const WI={h1:'🤸',h2:'🔥',h3:'🧘',g1:'🍑',g2:'💪',g3:'⚡',o1:'🚶',o2:'🏃',o3:'🌳'};
function wIcon(w){return WI[w.id]||'💪'}
function wfOk(w){return wf==='all'||(wf==='s'&&w.min<=20)||(wf==='m'&&w.min>20&&w.min<=30)||(wf==='l'&&w.min>30)}
function wfBar(){return `<div class="chips">${[['all',L('Sve trajanje','Any length')],['s',L('do 20 min','up to 20 min')],['m','21–30 min'],['l','30+ min']].map(x=>`<div class="chip ${wf===x[0]?'on':''}" onclick="wf='${x[0]}';render()">${x[1]}</div>`).join('')}</div>`}
function todayIdx(){return (new Date().getDay()+6)%7}
function todayCard(){
 const d=buildWeek()[todayIdx()];
 if(!d.t)return `<div class="card" style="background:var(--p2)"><h3>😴 ${L('Danas je dan odmora','Today is a rest day')}</h3><p class="mut">${L('Lagani hod 20–30 min i 10 min istezanja. Odmor je dio napretka.','A light 20–30 min walk and 10 min of stretching. Rest is part of progress.')}</p></div>`;
 return `<div class="card sub" style="background:linear-gradient(135deg,#ff6b9a,#9c36b5);color:#fff" onclick="loc='${S.plan.p}';openWo='${d.w.id}';tab='train';tsub='wo';render()"><span style="opacity:.85;font-size:12px">${L('DANAS PO PLANU','TODAY\'S PLAN')}</span><h3 style="margin-top:2px">${wIcon(d.w)} ${d.w.n}</h3><span style="opacity:.9;font-size:13px">${d.w.min} min · ~${d.w.kcal} kcal ▸</span></div>`;
}

// ---------- vođeni trening ----------
function parseEx(e){
 let m=/(\d+)\s*s\s*sprint.*?(\d+)\s*s.*?×\s*(\d+)/.exec(e);if(m)return {sets:+m[3],val:+m[1],time:true,rest:+m[2]};
 m=/(\d+)\s*min\s*trk.*?(\d+)\s*min.*?×\s*(\d+)/.exec(e);if(m)return {sets:+m[3],val:+m[1]*60,time:true,rest:+m[2]*60};
 m=/(\d+)×(\d+)(?:\s*(s|min))?/.exec(e);if(m){const u=m[3];return {sets:+m[1],val:u==='min'?+m[2]*60:+m[2],time:!!u,rest:30}}
 m=/(\d+)\s*min/.exec(e);if(m)return {sets:1,val:+m[1]*60,time:true,rest:30};
 return {sets:1,val:40,time:true,rest:30};
}
const exBase=e=>e.replace(/\s*\d.*$/,'').trim()||e;
function startPlayer(id){
 const w=find(id);clearInterval(plI);
 pl={id,i:0,set:1,ph:'ready',left:5,paused:false,t0:Date.now(),ex:w.ex.map(e=>Object.assign({e},parseEx(e)))};
 plI=setInterval(plTick,1000);render();scrollTo(0,0);
}
const plCur=()=>pl.ex[pl.i];
function startWork(){const x=plCur();pl.ph='work';pl.left=x.time?x.val:null;beep();render()}
function plDone(){
 const x=plCur();
 if(pl.set<x.sets){pl.nextSet=true;pl.ph='rest';pl.left=x.rest||30}
 else if(pl.i<pl.ex.length-1){pl.nextEx=true;pl.ph='rest';pl.left=30}
 else{pl.ph='fin';clearInterval(plI);celebrate()}
 beep();render();
}
function plRestEnd(){if(pl.nextSet){pl.set++;pl.nextSet=false}else if(pl.nextEx){pl.i++;pl.set=1;pl.nextEx=false}startWork()}
function plTick(){
 if(!pl||pl.paused||pl.ph==='fin')return;
 if(tab!=='train'){pl.paused=true;return}
 if(pl.ph==='work'&&!plCur().time)return;
 pl.left--;
 if(pl.left<=0){if(pl.ph==='ready')startWork();else if(pl.ph==='work')plDone();else if(pl.ph==='rest')plRestEnd();return}
 const t=$('#plt');if(t)t.textContent=fmt(pl.left);
}
function plPause(){pl.paused=!pl.paused;render()}
function plSkip(){if(pl.ph==='ready')startWork();else if(pl.ph==='work')plDone();else if(pl.ph==='rest')plRestEnd()}
function plExit(){clearInterval(plI);pl=null;render()}
function plSave(){const id=pl.id;tSec=Math.round((Date.now()-pl.t0)/1000);clearInterval(plI);pl=null;finish(id);celebrate()}
function playerView(){
 const x=plCur(),tot=pl.ex.length,pct=Math.round(((pl.i+(pl.ph==='fin'?1:(pl.set-1)/x.sets))/tot)*100),name=exBase(x.e);
 const head=`<div class="flex" style="justify-content:space-between"><button class="btn sec sm" onclick="plExit()">✕ ${L('Izlaz','Exit')}</button><span class="mut">${L('Vježba','Exercise')} ${pl.i+1}/${tot}</span></div><div class="pbar" style="margin:10px 0 14px"><i style="width:${pct}%"></i></div>`;
 if(pl.ph==='fin')return `<div class="pad">${head}<div style="text-align:center;padding:30px 0"><div style="font-size:64px">🏆</div><h2>${L('Bravo! Trening je gotov','Great job! Workout complete')}</h2><p class="mut" style="margin:8px 0 20px">${L('Ukupno vrijeme','Total time')}: ${fmt(Math.round((Date.now()-pl.t0)/1000))}</p><button class="btn" onclick="plSave()">💾 ${L('Spremi trening','Save workout')}</button></div></div>`;
 if(pl.ph==='ready')return `<div class="pad">${head}<p class="mut" style="text-align:center">${L('Pripremi se','Get ready')}</p><h2 style="text-align:center">${name}</h2>${anim(animType(x.e))}<div class="big" id="plt">${fmt(pl.left)}</div><button class="btn sec" onclick="plSkip()">${L('Kreni odmah','Start now')}</button></div>`;
 if(pl.ph==='rest'){const nx=pl.nextEx?plCur&&pl.ex[pl.i+1]:x;return `<div class="pad">${head}<h2 style="text-align:center">😮‍💨 ${L('Odmor','Rest')}</h2><div class="big" id="plt">${fmt(pl.left)}</div><div class="card" style="text-align:center"><span class="mut">${L('Sljedeće','Up next')}</span><br><b>${nx?exBase(nx.e):''}</b><br><span class="mut">${pl.nextEx?'':L('serija','set')+' '+(pl.set+1)+'/'+x.sets}</span></div><div class="row"><button class="btn sec" onclick="plPause()">${pl.paused?'▶':'⏸'} ${pl.paused?L('Nastavi','Resume'):L('Pauza','Pause')}</button><button class="btn" onclick="plSkip()">${L('Preskoči odmor','Skip rest')}</button></div></div>`}
 return `<div class="pad">${head}<h2 style="text-align:center">${name}</h2><p class="mut" style="text-align:center">${L('Serija','Set')} ${pl.set}/${x.sets}</p>${anim(animType(x.e))}
 ${x.time?`<div class="big" id="plt">${fmt(pl.left)}</div>`:`<div class="big">${x.val}×</div><p class="mut" style="text-align:center">${L('ponavljanja – kad završiš, dodirni Gotovo','reps – tap Done when finished')}</p>`}
 <p style="font-size:14px;margin:8px 0;color:var(--ink)">${tech(x.e)}</p>
 <div class="row"><button class="btn sec" onclick="plPause()">${pl.paused?'▶':'⏸'} ${pl.paused?L('Nastavi','Resume'):L('Pauza','Pause')}</button><button class="btn" onclick="plSkip()">✔ ${L('Gotovo','Done')}</button></div></div>`;
}

// ---------- nova početna ----------
function ring(p,col,ico,val,lab){const r=26,c=2*Math.PI*r;return `<div style="text-align:center"><svg viewBox="0 0 64 64" width="78" height="78" role="img" aria-label="${lab} ${p}%"><circle cx="32" cy="32" r="${r}" fill="none" stroke="var(--line)" stroke-width="7"/><circle cx="32" cy="32" r="${r}" fill="none" stroke="${col}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${(c*Math.min(100,p)/100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 32 32)"/><text x="32" y="38" text-anchor="middle" font-size="18">${ico}</text></svg><div style="font-weight:700;font-size:15px">${val}</div><div class="mut" style="font-size:11px">${lab}</div></div>`}
function weekDots(){
 const names=L(['P','U','S','Č','P','S','N'],['M','T','W','T','F','S','S']),ti=todayIdx();let n=0;
 const dots=names.map((nm,i)=>{const d=S.days[d0(ti-i)],ok=i<=ti&&d&&(d.log||[]).some(l=>l.id!=='relax');if(ok)n++;return `<div class="${ok?'ok':''} ${i===ti?'today':''}">${ok?'✓':nm}</div>`}).join('');
 return {n,html:`<div class="wk">${dots}</div>`};
}
function streak(){let s=0;for(let i=0;i<120;i++){const d=S.days[d0(i)],a=d&&((d.log&&d.log.length)||d.steps>=5000);if(a)s++;else if(i>0)break;else continue}return s}
function cycGoal(){S.weekGoal=({2:3,3:4,4:5,5:2})[S.weekGoal||3]||3;save();render()}
function home(){
 const d=D(),g=goalSteps(),gw=Math.ceil(waterGoal()/0.2),wk7=weekDots(),wg=S.weekGoal||3,h=new Date().getHours();
 const hello=h<5?L('Laku noć','Good night'):h<11?L('Dobro jutro','Good morning'):h<18?L('Dobar dan','Good afternoon'):L('Dobra večer','Good evening');
 const st=d.stress,stTxt=st==null?'—':st<35?L('Nizak 😌','Low 😌'):st<60?L('Umjeren 🙂','Moderate 🙂'):L('Visok 😟','High 😟');
 const hist=Object.keys(S.days).sort().slice(-7),mx=Math.max(...hist.map(k=>S.days[k].steps),1),rec=RECIPES.filter(avail),rr=rec[new Date().getDate()%rec.length],sk=streak();
 return `<div class="hero"><div class="avatar">🌸</div><p style="margin:0">${hello},</p><h1>${S.name}!</h1><p>${MOTIV[new Date().getDate()%MOTIV.length]}</p></div>
 <div class="pad">
 <div class="card"><div class="flex" style="justify-content:space-around">${ring(d.steps/g*100,'#d6336c','👟',(d.steps||0).toLocaleString('hr'),L('koraka','steps'))}${ring(d.water/gw*100,'#339af0','💧',d.water+'/'+gw,L('čaša vode','glasses'))}${ring(wk7.n/wg*100,'#2f9e77','💪',wk7.n+'/'+wg,L('treninga tj.','workouts/wk'))}</div>
 ${wk7.html}
 <div class="flex" style="justify-content:space-between;margin-top:12px"><button class="btn sec sm" onclick="setW(1)">+ 💧 ${L('čaša','glass')}</button><span class="chip" onclick="cycGoal()">🎯 ${L('Cilj','Goal')}: ${wg}/${L('tj.','wk')}</span><span>🔥 <b>${sk}</b> ${L('dana','days')}</span></div></div>
 ${todayCard()}${typeof homeExtras==='function'?homeExtras():''}
 <div class="grid"><div class="stat"><span class="mut">${L('Razina stresa','Stress level')}</span><b>${st==null?'—':st+'/100'}</b><span class="mut">${stTxt}</span></div><div class="stat"><span class="mut">${L('Potrošeno (trening)','Burned (workout)')}</span><b>${d.kcal} kcal</b><span class="mut">${d.log.length} ${L('treninga danas','workouts today')}</span></div><div class="stat"><span class="mut">${L('Puls u mirovanju','Resting heart rate')}</span><b>${d.hr?d.hr+' bpm':(S.sync?S.sync.hr+' bpm':'—')}</b><span class="mut">${S.sync?S.sync.src:L('nije sinkronizirano','not synced')}</span></div><div class="stat"><span class="mut">${L('San','Sleep')}</span><b>${d.sleep!=null?d.sleep+' h':'—'}</b><span class="mut">BMI ${bmi()}</span></div></div>
 <div class="card" style="margin-top:12px"><h3>${L('Sinkronizacija uređaja','Device sync')}</h3><p class="mut" style="margin:4px 0 10px">${L('Povuci korake, puls i stres s mobitela ili pametnog sata (demo simulacija).','Pull steps, heart rate and stress from your phone or smartwatch (demo simulation).')}</p><div class="row"><button class="btn sec sm" onclick="sync('Mobitel')">📱 ${L('Mobitel','Phone')}</button><button class="btn sec sm" onclick="sync('Pametni sat')">⌚ ${L('Sat','Watch')}</button></div></div>
 <div class="card"><h3>${L('Koraci – zadnjih 7 dana','Steps – last 7 days')}</h3><div class="spark">${hist.map(k=>`<i style="height:${Math.max(6,S.days[k].steps/mx*100)}%" title="${k}"></i>`).join('')}</div></div>
 ${d.stress>=60?`<div class="card" style="background:#fff9db;color:#2b2433"><b>${L('Visok stres.','High stress.')}</b> ${L('Probaj 5 minuta disanja ili jogu.','Try 5 minutes of breathing or yoga.')}<div class="row" style="margin-top:8px"><button class="btn sm" onclick="tab='relax';render()">🧘 ${L('Opuštanje','Relaxation')}</button></div></div>`:''}
 <div class="card"><h3>${L('Danas na tanjuru','On your plate today')}</h3><p class="mut" style="margin:4px 0 8px">${rr.n}</p><button class="btn sec sm" onclick="tab='food';openRec='${rr.id}';render()">${L('Pogledaj recept','View recipe')}</button></div></div>`;
}


