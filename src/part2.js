/* ===================== DIO 2: PROŠIRENJA ===================== */
document.head.insertAdjacentHTML('beforeend','<style>.anim{background:#fff0f6;border-radius:14px;margin:8px 0}.anim svg{width:100%;height:140px;display:block}.pill{display:inline-block;border-radius:6px;padding:2px 7px;font-size:11px;margin:0 3px 3px 0;background:#e6fcf5;color:#2f9e77}.thumb{width:56px;height:56px;border-radius:12px;object-fit:cover;background:var(--p2);display:grid;place-items:center;font-size:26px;flex:none}.gal{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px}.gal img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:10px}.bdg{opacity:.35;filter:grayscale(1);text-align:center}.bdg.on{opacity:1;filter:none}.dg{display:grid;grid-template-columns:repeat(6,1fr);gap:6px}.dy{border:1px solid var(--line);border-radius:8px;padding:8px 0;text-align:center;font-size:13px;cursor:pointer;background:#fff}.dy.ok{background:#2f9e77;color:#fff;border-color:#2f9e77}.dy.now{border-color:#d6336c;font-weight:700}.msg{max-width:82%;padding:8px 12px;border-radius:14px;margin:4px 0;font-size:14px}.msg.me{background:#d6336c;color:#fff;margin-left:auto}.msg.pro{background:#f1ecf5}textarea{width:100%;border:1px solid var(--line);border-radius:10px;padding:8px;font-size:13px}.flex{display:flex;gap:10px;align-items:center}</style>');

// ---------- pomoćno ----------
function d0(n){return new Date(Date.now()-n*864e5).toISOString().slice(0,10)}
function dayDiff(a,b){return Math.round((new Date(b)-new Date(a))/864e5)}
const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
const f1=n=>(Math.round(n*10)/10).toString().replace('.',',');
const back=`<button class="btn sec sm" onclick="tab='more';openRec=null;render();scrollTo(0,0)">← Više</button>`;
function D(){const d=day();if(d.water==null)d.water=0;if(!d.meals)d.meals=[];return d}
let shareBox='';
function copyText(t){shareBox=t;try{navigator.clipboard.writeText(t).then(()=>notify('Kopirano ✅'),()=>render())}catch(e){render()}render()}
function shareArea(){return shareBox?`<div class="card"><h3>Tekst za dijeljenje</h3><textarea rows="6" readonly onclick="this.select()">${shareBox}</textarea><p class="mut">Ako kopiranje nije radilo, označi tekst i kopiraj ga ručno.</p><button class="btn sec sm" onclick="shareBox='';render()">Zatvori</button></div>`:''}
function pickPhoto(inp,cb){const f=inp.files&&inp.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),k=Math.min(1,640/Math.max(im.width,im.height));c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',0.7))};im.src=r.result};r.readAsDataURL(f)}
function realLogs(){return Object.keys(S.days).filter(k=>!S.days[k].seed).reduce((a,k)=>a+(S.days[k].log||[]).filter(l=>l.id!=='relax').length,0)}

// ---------- podaci / demo povijest ----------
function ensureData(){
 if(S.v2)return;
 const t=today();
 Object.keys(S.days).forEach(k=>{if(k!==t)S.days[k].seed=true});
 for(let i=90;i>=1;i--){const k=d0(i);
  if(!S.days[k]){const yoga=Math.random()<.28,tr=!yoga&&Math.random()<.45;
   S.days[k]={steps:rnd(3000,12000)+(tr?1500:0),stress:Math.max(10,Math.min(95,rnd(42,72)-(yoga?17:0)-(tr?7:0))),
    log:yoga?[{id:'h3',n:'Joga za opuštanje',t:'20:00'}]:tr?[{id:'h1',n:'Cijelo tijelo bez opreme',t:'25:00'}]:[],
    kcal:yoga?70:tr?180:0,seed:true}}}
 Object.keys(S.days).forEach(k=>{const d=S.days[k];if(k!==t&&d.water==null){d.water=rnd(4,10);d.sleep=+(rnd(55,90)/10).toFixed(1);d.mood=rnd(2,5)}if(!d.meals)d.meals=[]});
 S.meas=[];for(let k=13;k>=0;k--)S.meas.push({d:d0(k*7),w:+(S.w+k*.25+(Math.random()-.5)*.4).toFixed(1),waist:+(74+k*.35+(Math.random()-.5)*.6).toFixed(1),seed:true});
 S.friends=['Marija','Ivana','Petra'];S.invited=0;S.chat={};S.photos={rec:{},prog:[]};S.relax=0;S.sets={};S.ch=null;S.cycle=null;S.shopChk={};S.v2=1;
 save();
}

// ---------- animacije vježbi ----------
const PJ={ // glava, rame, kuk, lakat, šaka, koljeno, stopalo, koljeno2, stopalo2
 stand:[60,14,60,26,60,52,68,38,78,36,60,72,60,92,60,72,60,92],
 squat:[66,34,66,44,46,68,78,46,90,44,74,70,62,92,74,70,62,92],
 lungeB:[60,26,60,38,60,64,70,50,80,48,82,72,80,92,40,84,22,92],
 pushA:[102,40,90,46,50,60,90,62,90,78,30,69,10,78,30,69,10,78],
 pushB:[102,62,90,66,50,70,80,72,90,78,30,74,10,78,30,74,10,78],
 plankA:[102,54,90,58,50,64,90,76,104,76,30,70,10,78,30,70,10,78],
 plankB:[102,52,90,56,50,60,90,76,104,76,30,68,10,78,30,68,10,78],
 bridgeA:[14,80,26,82,56,84,40,86,52,86,78,70,90,86,78,70,90,86],
 bridgeB:[14,80,26,82,56,64,40,86,52,86,80,66,90,86,80,66,90,86],
 crunchA:[18,80,30,82,56,84,22,74,30,72,76,66,90,84,76,66,90,84],
 crunchB:[34,66,42,70,56,84,34,58,44,60,76,66,90,84,76,66,90,84],
 climbB:[102,40,90,46,50,60,90,62,90,78,30,69,10,78,66,68,62,78],
 rowA:[52,20,50,32,40,62,62,38,78,40,70,62,76,90,70,62,76,90],
 rowB:[52,20,50,32,40,62,42,46,56,44,70,62,76,90,70,62,76,90],
 pressA:[60,14,60,26,60,52,52,38,62,22,60,72,60,92,60,72,60,92],
 pressB:[60,14,60,26,60,52,68,12,66,-2,60,72,60,92,60,72,60,92],
 curlA:[60,14,60,26,60,52,62,40,62,54,60,72,60,92,60,72,60,92],
 curlB:[60,14,60,26,60,52,64,40,72,28,60,72,60,92,60,72,60,92],
 runA:[64,14,62,26,60,52,48,38,42,50,74,68,66,88,48,66,36,84],
 runB:[64,14,62,26,60,52,74,38,80,48,48,66,36,84,74,68,66,88],
 walkA:[60,14,60,26,60,52,50,38,46,52,70,72,66,92,52,72,46,92],
 walkB:[60,14,60,26,60,52,70,38,74,52,52,72,46,92,70,72,66,92],
 jumpB:[60,-4,60,8,60,34,70,8,78,-2,66,52,56,62,66,52,56,62],
 stepA:[56,14,56,26,56,52,66,38,76,36,78,62,80,80,54,72,52,92],
 stepB:[78,0,78,12,78,38,88,24,98,22,80,58,80,80,88,56,84,70],
 hingeA:[60,14,60,26,60,52,62,40,62,56,60,72,60,92,60,72,60,92],
 hingeB:[88,38,84,46,48,54,88,60,88,74,52,72,52,92,52,72,52,92]
};
const POSE={squat:['stand','squat'],lunge:['stand','lungeB'],push:['pushA','pushB'],plank:['plankA','plankB'],bridge:['bridgeA','bridgeB'],crunch:['crunchA','crunchB'],climb:['pushA','climbB'],row:['rowA','rowB'],press:['pressA','pressB'],curl:['curlA','curlB'],run:['runA','runB'],walk:['walkA','walkB'],jump:['squat','jumpB'],step:['stepA','stepB'],hinge:['hingeA','hingeB']};
function fig(type){
 const a=PJ[POSE[type][0]],b=PJ[POSE[type][1]];
 const vv=(i,k)=>a[i*2+k]+';'+b[i*2+k]+';'+a[i*2+k];
 const an=(nm,i,k)=>`<animate attributeName="${nm}" values="${vv(i,k)}" dur="2s" repeatCount="indefinite"/>`;
 let s=`<svg viewBox="0 -12 120 112"><line x1="0" y1="93" x2="120" y2="93" stroke="#d9c9e3" stroke-width="2"/>`+(type==='step'?'<rect x="68" y="80" width="46" height="13" rx="2" fill="#e5d5ef"/>':'');
 [[1,2],[1,3],[3,4],[2,5],[5,6],[2,7],[7,8],[1,0]].forEach((p,n)=>{s+=`<line stroke="${n===5||n===6?'#c3a8dc':'#7048e8'}" stroke-width="5" stroke-linecap="round" x1="${a[p[0]*2]}" y1="${a[p[0]*2+1]}" x2="${a[p[1]*2]}" y2="${a[p[1]*2+1]}">${an('x1',p[0],0)}${an('y1',p[0],1)}${an('x2',p[1],0)}${an('y2',p[1],1)}</line>`});
 return s+`<circle r="8" fill="#ff6b9a" cx="${a[0]}" cy="${a[1]}">${an('cx',0,0)}${an('cy',0,1)}</circle></svg>`;
}
function anim(type){
 if(!POSE[type])return `<div class="anim"><svg viewBox="0 0 120 100"><circle cx="60" cy="44" r="20" fill="#ff6b9a" opacity=".35"><animate attributeName="r" values="16;32;16" dur="6s" repeatCount="indefinite"/></circle><circle cx="60" cy="44" r="10" fill="#7048e8" opacity=".6"/><text x="60" y="92" text-anchor="middle" font-size="9" fill="#7a7185">polako, mirno, ravnomjerno disanje</text></svg></div>`;
 return `<div class="anim">${fig(type)}</div>`;
}
function animType(e){
 const s=e.toLowerCase();
 const m=[['skokovi','jump'],['bugarski','lunge'],['iskora','lunge'],['sklek','push'],['penjač','climb'],['plank','plank'],['mostić','bridge'],['hip thrust','bridge'],['trbušnjaci','crunch'],['mrtva buba','crunch'],['veslanje','row'],['pulldown','row'],['potisak','press'],['biceps','curl'],['rumunjsko','hinge'],['čučn','squat'],['leg press','squat'],['abdukcija','squat'],['step-up','step'],['stube','step'],['sprint','run'],['trk','run'],['hod','walk'],['zagrijavanje','walk'],['hlađenje','walk']];
 const f=m.find(x=>s.includes(x[0]));return f?f[1]:'breathe';
}

// ---------- navigacija ----------
function render(){
 const el=$('#app');
 if(!ST.legal){el.innerHTML=consent();post();return}
 if(!S){el.innerHTML=auth()+(toast?`<div class="toast">${toast}</div>`:'');post();return}
 ensureData();
 const pages={home,plan,train,food,profile,prog,more,diary,spec,relax,chal,comm,shop,sync:syncPage,premium,settings,legal,inbox:inboxPage,invite:invitePage};
 const hi={home:'home',train:'train',food:'food',prog:'prog'}[tab]||'more';
 const nav=[['home','🏠','Početna'],['train','💪','Trening'],['food','🥗','Recepti'],['prog','📈','Napredak'],['more','☰','Više']];
 el.innerHTML=pages[tab]()+`<nav>${nav.map(n=>`<button class="${hi===n[0]?'on':''}" onclick="tab='${n[0]}';openRec=null;openWo=null;window.__c=0;render();scrollTo(0,0)"><span>${n[1]}</span>${n[2]}</button>`).join('')}</nav>`+(toast?`<div class="toast">${toast}</div>`:'');
 post();
}
function more(){
 const T=[['plan','📅','Tjedni plan','Trening i prehrana'],['diary','📓','Dnevnik','Obroci, voda, san, raspoloženje'],['spec','🌸','Posebni programi','Trudnoća, menopauza, leđa, ciklus'],['relax','🧘','Opuštanje','Zagrijavanje, istezanje, disanje'],['chal','🏆','Izazovi i značke','30 dana'],['comm','👭','Zajednica','Prijateljice i stručnjakinje'],['shop','🛒','Popis za kupnju','Iz tjednog plana'],['sync','⌚','Sinkronizacija','Mobitel i pametni sat'],['premium','⭐','Premium','Planovi i cijene'],['settings','⚙️','Postavke','Jezik, tema, pristupačnost'],['legal','⚕️','Pravne napomene','Upozorenja i privatnost'],['invite','💌','Pozovi prijateljice','Podijeli aplikaciju'],['inbox','📧','Pošta','Mail dobrodošlice'],['profile','👤','Profil','Podaci i odjava']];
 return `<div class="pad"><h2>Više</h2>${premBanner()}<div class="grid">${T.map(t=>`<div class="stat sub" onclick="tab='${t[0]}';render();scrollTo(0,0)"><span style="font-size:26px">${t[1]}</span><b style="font-size:15px">${t[2]}</b><span class="mut">${t[3]}</span></div>`).join('')}</div></div>`;
}

// ---------- TRENING: animacije + dnevnik serija ----------
let openEx=null;
function sugg(key,e){
 const h=S.sets[key]||[];if(!h.length)return 'Upiši prvu seriju – aplikacija će ti predložiti sljedeći korak.';
 const l=h[h.length-1],m=/×\s*(\d+)/.exec(e),tr=m?+m[1]:10;
 const last=`Zadnje: ${l.st||'?'}×${l.rp}${l.kg?' × '+l.kg+' kg':''} (${l.d}). `;
 if(l.rp>=tr)return last+(l.kg>0?`Spremna si za više – probaj ${l.kg+2} kg (+2 kg).`:'Cilj ostvaren – dodaj 2–3 ponavljanja ili težu varijantu.');
 return last+`Zadrži ${l.kg?l.kg+' kg':'isti napor'} dok ne dosegneš ${tr} ponavljanja.`;
}
function logSet(key,i){
 const kg=+$('#kg'+i).value||0,rp=+$('#rp'+i).value||0,st=+$('#st'+i).value||0;
 if(!rp){notify('Upiši broj ponavljanja');return}
 (S.sets[key]=S.sets[key]||[]).push({d:today(),kg,rp,st});save();notify('Serija spremljena 💪');
}
function exBlock(w,e,i){
 const key=w.id+'_'+i,h=S.sets[key]||[],l=h[h.length-1];
 return `<details style="border-top:1px solid var(--line);padding:8px 0" ${openEx===key?'open':''} ontoggle="if(this.open)openEx='${key}';else if(openEx==='${key}')openEx=null"><summary style="cursor:pointer"><b>${e}</b></summary>
 ${anim(animType(e))}<p class="mut" style="font-size:11px">Pojednostavljena animacija pokreta – točna tehnika je u opisu.</p>
 <p style="font-size:14px;margin:6px 0;color:#4a4255">${tech(e)}</p>
 <div class="row"><div><label>Uteg (kg)</label><input id="kg${i}" type="number" step="0.5" min="0" value="${l?l.kg:''}"></div><div><label>Ponavljanja</label><input id="rp${i}" type="number" min="0" value="${l?l.rp:(/×(\d+)/.exec(e)||[])[1]||''}"></div><div><label>Serije</label><input id="st${i}" type="number" min="0" value="${l?l.st:(/(\d+)×/.exec(e)||[])[1]||''}"></div></div>
 <button class="btn sec sm" style="margin-top:8px" onclick="logSet('${key}',${i})">Spremi seriju</button>
 <p class="mut" style="margin-top:6px">📈 ${sugg(key,e)}</p></details>`;
}
function setLvl(l){S.lvl=l;save();notify('Razina: '+l)}
function train(){
 if(pl&&pl.id)return playerView();
 if(openWo){const w=find(openWo);
  return `<div class="pad"><button class="btn sec sm" onclick="clearInterval(tInt);tSec=0;openWo=null;render()">← Natrag</button>
  <h2 style="margin-top:12px">${w.n}</h2><span class="tag">${w.lvl}</span><span class="tag g">${w.min} min</span><span class="tag g">~${w.kcal} kcal</span>
  <div class="card" style="margin-top:12px"><h3>Vježbe</h3><p class="mut">Dodirni vježbu: animacija, tehnika i bilježenje serija.</p>${w.ex.map((e,i)=>exBlock(w,e,i)).join('')}</div>
  <div class="card"><h3>Savjeti za ovaj trening</h3><div style="margin-top:8px">${(WB[w.id]||[]).map(i=>`<span class="chip" style="display:inline-block;margin:0 6px 6px 0" onclick="goTips(${i})">${Object.keys(TIPS)[i]}</span>`).join('')}</div></div>
  <button class="btn" style="margin:4px 0 12px" onclick="startPlayer('${w.id}')">▶ Vođeni trening</button>
  <div class="timer" id="tm">${fmt(tSec)}</div>
  <div class="row"><button class="btn sec" onclick="startTimer()">▶ Start</button><button class="btn" onclick="finish('${w.id}')">✔ Završi</button></div></div>`}
 const d=day();
 const sw=`<div class="chips"><div class="chip ${tsub==='wo'?'on':''}" onclick="tsub='wo';render()">Treninzi</div><div class="chip ${tsub==='tips'?'on':''}" onclick="tsub='tips';render()">Savjeti po tijelu</div></div>`;
 if(tsub==='tips')return `<div class="pad"><h2>Savjeti za vježbanje</h2>${sw}
 <div class="chips">${Object.keys(TIPS).map(k=>`<div class="chip ${k===tipCat?'on':''}" onclick="tipCat='${k}';render()">${k}</div>`).join('')}</div>
 <div class="card"><h3>${tipCat}</h3><ul>${TIPS[tipCat].map(t=>`<li>${t}</li>`).join('')}</ul></div></div>`;
 const n=realLogs(),next={'Početnica':'Srednja','Srednja':'Napredna'}[S.lvl];
 const adapt=next&&n>=10?`<p>Odradila si ${n} treninga – vrijeme je za višu razinu!</p><button class="btn sm" style="margin-top:8px" onclick="setLvl('${next}')">Prijeđi na razinu ${next}</button>`:`<p class="mut">Odrađenih treninga: <b>${n}</b>. ${next?`Nakon 10 treninga predlažemo razinu ${next}.`:'Na najvišoj si razini!'}</p>`;
 return `<div class="pad"><h2>Treninzi</h2>${sw}
 ${todayCard()}<div class="card"><h3>Tvoja razina: ${S.lvl}</h3>${adapt}</div>
 <div class="chips">${Object.keys(WORKOUTS).map(k=>`<div class="chip ${k===loc?'on':''}" onclick="loc='${k}';render()">${{'Kod kuće':'🏠','U teretani':'🏋️','Na otvorenom':'🌳'}[k]} ${k}</div>`).join('')}</div>
 ${wfBar()}${WORKOUTS[loc].filter(wfOk).map(w=>`<div class="card sub wcard" onclick="openWo='${w.id}';render()"><h3>${wIcon(w)} ${w.n}</h3><div style="margin-top:6px"><span class="tag">${w.lvl}</span><span class="tag g">${w.min} min</span><span class="tag g">~${w.kcal} kcal</span></div></div>`).join('')}
 ${d.log.length?`<h3 style="margin:14px 0 8px">Danas odrađeno</h3>${d.log.map(l=>`<div class="card">✅ ${l.n} <span class="mut">· ${l.t}</span></div>`).join('')}`:''}</div>`;
}

// ---------- RECEPTI ----------
const TG={r1:[['v'],['mlijeko','gluten']],r2:[['v','gf'],['jaja','mlijeko']],r3:[['gf','lf'],[]],r4:[['gf','lf'],['riba']],r5:[['gf','lf'],['riba']],r6:[['v','vegan','gf','lf'],[]],r7:[['v','gf'],['mlijeko']],r8:[['v','vegan','lf'],['orašasti','gluten']]};
RECIPES.forEach(r=>{if(TG[r.id]){r.t=TG[r.id][0];r.al=TG[r.id][1]}});
function R(id,n,cat,min,kcal,p,ing,steps,tip,t,al){RECIPES.push({id,n,cat,min,kcal,p,s:0,ing,steps,tip,t,al})}
R('r9','Grčki jogurt s jagodama i orasima','Doručak',5,290,20,[['grčki jogurt',200,'g'],['jagode',100,'g'],['orasi',20,'g'],['med',1,'žličica']],['Jogurt stavi u zdjelicu.','Jagode operi i nareži.','Dodaj jagode i grubo nasjeckane orahe.','Prelij medom i poslužuj.'],'Dobar izvor bjelančevina i zdravih masti.',['v','gf'],['mlijeko','orašasti']);
R('r10','Tofu kajgana s povrćem','Doručak',15,260,18,[['tofu',150,'g'],['paprika',1,'kom'],['kurkuma',0.5,'žličica'],['maslinovo ulje',1,'žličica'],['vlasac',1,'žlica']],['Tofu izmrvi vilicom.','Papriku sitno nareži i kratko prodinstaj na ulju.','Dodaj tofu i kurkumu, miješaj 5 minuta.','Posoli, posipaj vlascem.'],'Biljna alternativa kajgani, bez jaja i laktoze.',['v','vegan','gf','lf'],[]);
R('r11','Palačinke od zobi i banane','Doručak',15,330,15,[['banana',1,'kom'],['jaja',2,'kom'],['zobene pahuljice',50,'g'],['cimet',0.5,'žličica']],['Zobene pahuljice samelji u blenderu.','Dodaj bananu, jaja i cimet pa miksaj u glatku smjesu.','Peci male palačinke na tavi bez masnoće 2 minute po strani.','Posluži s voćem.'],'Bez dodanog šećera i mlijeka.',['v','lf'],['jaja','gluten']);
R('r12','Bowl s rižom, edamameom i avokadom','Ručak',25,460,19,[['riža',70,'g'],['edamame',80,'g'],['avokado',0.5,'kom'],['mrkva',1,'kom'],['sezam',1,'žličica'],['tamari umak',1,'žlica']],['Rižu skuhaj prema uputi.','Edamame prokuhaj 3 minute i ocijedi.','U zdjelu posloži rižu, edamame, avokado i naribanu mrkvu.','Prelij tamarijem i posipaj sezamom.'],'Biljni obrok bogat vlaknima i zdravim mastima.',['v','vegan','gf','lf'],['sezam']);
R('r13','Tjestenina od cjelovitog brašna s tikvicama','Ručak',20,440,17,[['cjelovita tjestenina',80,'g'],['tikvica',1,'kom'],['češnjak',1,'režanj'],['maslinovo ulje',1,'žlica'],['parmezan',15,'g']],['Tjesteninu skuhaj al dente.','Na ulju kratko popeci češnjak i tikvice narezane na kolutiće.','Umiješaj ocijeđenu tjesteninu.','Posipaj parmezanom.'],'Cjelovita tjestenina dulje drži sitost.',['v'],['gluten','mlijeko']);
R('r14','Pileća salata s avokadom','Ručak',20,420,36,[['pileća prsa',120,'g'],['avokado',0.5,'kom'],['rikola',50,'g'],['cherry rajčice',80,'g'],['maslinovo ulje',1,'žlica'],['limunov sok',1,'žlica']],['Piletinu posoli i ispeci na tavi 6–7 minuta po strani.','Rikolu, rajčice i avokado posloži u zdjelu.','Piletinu nareži i dodaj na salatu.','Začini uljem i limunom.'],'Lagana, a zasitna salata.',['gf','lf'],[]);
R('r15','Tepsija slanutka i povrća','Večera',35,380,16,[['slanutak',150,'g'],['tikvica',1,'kom'],['paprika',1,'kom'],['crveni luk',1,'kom'],['maslinovo ulje',1,'žlica'],['slatka paprika',1,'žličica']],['Zagrij pećnicu na 200 °C.','Povrće nareži, pomiješaj sa slanutkom, uljem i začinima.','Rasporedi u tepsiju i peci 25–30 minuta, jednom promiješaj.'],'Jednostavna večera iz jedne tepsije.',['v','vegan','gf','lf'],[]);
R('r16','Bakalar na lešo s blitvom i krumpirom','Večera',35,430,34,[['bakalar',150,'g'],['krumpir',200,'g'],['blitva',150,'g'],['maslinovo ulje',1,'žlica'],['češnjak',1,'režanj']],['Krumpir oguli i kuhaj 15 minuta.','Dodaj blitvu na zadnje 5 minuta.','Bakalar kuhaj u laganom vrenju 8 minuta.','Sve ocijedi i začini uljem i češnjakom.'],'Klasično dalmatinsko jelo, malo masnoće i puno bjelančevina.',['gf','lf'],['riba']);
R('r17','Punjene paprike s puretinom','Večera',50,410,32,[['paprika',2,'kom'],['mljevena puretina',120,'g'],['riža',40,'g'],['luk',0.5,'kom'],['pasirana rajčica',100,'g']],['Luk sitno nasjeckaj i prodinstaj.','Dodaj meso i rižu, kratko prepeci.','Papriku očisti i napuni smjesom.','Prelij pasiranom rajčicom i peci poklopljeno 35 minuta na 180 °C.'],'Odlična zamjena za tradicionalne punjene paprike.',['gf','lf'],[]);
R('r18','Humus s povrćem za umakanje','Međuobrok',10,210,9,[['slanutak',100,'g'],['tahini',1,'žlica'],['limunov sok',1,'žlica'],['češnjak',0.5,'režanj'],['mrkva',1,'kom'],['krastavac',1,'kom']],['Slanutak, tahini, limun i češnjak miksaj štapnim mikserom uz malo vode.','Mrkvu i krastavac nareži na štapiće.','Poslužuj uz umak.'],'Bogat vlaknima i biljnim bjelančevinama.',['v','vegan','gf','lf'],['sezam']);
R('r19','Skuta s jabukom i cimetom','Međuobrok',5,160,17,[['skuta',150,'g'],['jabuka',0.5,'kom'],['cimet',0.5,'žličica']],['Jabuku nareži na kockice.','Pomiješaj sa skutom.','Posipaj cimetom.'],'Brza zdrava užina bogata kazeinom, dobra i za večer.',['v','gf'],['mlijeko']);
const DENS={'zobene pahuljice':35,'kvinoja':80,'riža':85,'crvena leća':80,'cjelovita tjestenina':35};
let rf={v:0,gf:0,lf:0},rex=[],rq='',domMode=false;
const ALG=[['jaja','Jaja'],['mlijeko','Mlijeko'],['gluten','Gluten'],['orašasti','Orašasti'],['riba','Riba'],['sezam','Sezam']];
function rfilter(){const q=rq.toLowerCase();return RECIPES.filter(r=>(rcat==='Sve'||r.cat===rcat)&&(!rf.v||r.t.includes('v'))&&(!rf.gf||r.t.includes('gf'))&&(!rf.lf||r.t.includes('lf'))&&dietOk(r)&&avail(r)&&!rex.some(a=>r.al.includes(a))&&(!q||r.n.toLowerCase().includes(q)||r.ing.some(i=>i[0].toLowerCase().includes(q))))}
function rlist(){
 const l=rfilter();if(!l.length)return '<p class="mut">Nema recepata za odabrane filtere.</p>';
 return l.map(r=>{const ph=S.photos.rec[r.id];return `<div class="card sub flex" onclick="openRec='${r.id}';scale=1;render()">${ph?`<img class="thumb" src="${ph}">`:`<div class="thumb">${{Doručak:'🥣',Ručak:'🥗',Večera:'🍲',Međuobrok:'🍎'}[r.cat]}</div>`}<div><h3>${r.n}</h3><div style="margin-top:4px"><span class="tag">${r.cat}</span><span class="tag g">${r.min} min</span><span class="tag g">${r.kcal} kcal</span><span class="tag g">UH ${r.c} g</span></div><div style="margin-top:2px">${r.t.includes('vegan')?'<span class="pill">vegan</span>':r.t.includes('v')?'<span class="pill">vegetarijansko</span>':''}${r.t.includes('gf')?'<span class="pill">bez glutena</span>':''}${r.t.includes('lf')?'<span class="pill">bez laktoze</span>':''}</div></div></div>`}).join('');
}
function amt(i,f){let v=i[1]*f,u=i[2];if(domMode){if(u==='ml'){v/=100;u='dl'}else if(u==='g'&&DENS[i[0]]){v/=DENS[i[0]];u='dl'}}
 const s=Number.isInteger(v)?v:(+v.toFixed(1)).toString().replace('.',',');return s+' '+u}
function food(){
 if(openRec)return recipe();
 const cats=['Sve','Doručak','Ručak','Večera','Međuobrok'];
 return `<div class="pad"><h2>Recepti 🥗</h2>${dietBar()}
 <input placeholder="🔍 Traži recept ili sastojak" value="${rq}" oninput="rq=this.value;$('#rlist').innerHTML=rlist();xl($('#rlist'))" style="margin-bottom:10px">
 <div class="chips">${cats.map(c=>`<div class="chip ${c===rcat?'on':''}" onclick="rcat='${c}';render()">${c}</div>`).join('')}</div>
 <p class="mut" style="margin-bottom:4px">Prehrana</p>
 <div class="chips">${[['v','Vegetarijansko'],['gf','Bez glutena'],['lf','Bez laktoze']].map(x=>`<div class="chip ${rf[x[0]]?'on':''}" onclick="rf['${x[0]}']=rf['${x[0]}']?0:1;render()">${x[1]}</div>`).join('')}</div>
 <p class="mut" style="margin-bottom:4px">Alergije – sakrij recepte s:</p>
 <div class="chips">${ALG.map(x=>`<div class="chip ${rex.includes(x[0])?'on':''}" onclick="rex=rex.includes('${x[0]}')?rex.filter(y=>y!=='${x[0]}'):rex.concat('${x[0]}');render()">${x[1]}</div>`).join('')}</div>
 <p class="mut" style="margin-bottom:10px;font-size:12px">Oznake su okvirne. Kod alergija uvijek provjeri deklaraciju namirnica; zobene pahuljice mogu sadržavati tragove glutena.</p>
 <div id="rlist">${rlist()}</div></div>`;
}
function recipe(){
 const r=RECIPES.find(x=>x.id===openRec),f=scale,ph=S.photos.rec[r.id];
 if(!avail(r))return `<div class="pad"><button class="btn sec sm" onclick="openRec=null;render()">← Recepti</button><h2 style="margin:12px 0">${r.n}</h2>${lockCard('Recept je dio Premium verzije')}</div>`;
 return `<div class="pad"><button class="btn sec sm" onclick="openRec=null;scale=1;render()">← Recepti</button>
 <h2 style="margin-top:12px">${r.n}</h2><span class="tag">${r.cat}</span><span class="tag g">${r.min} min</span>
 ${ph?`<img src="${ph}" style="width:100%;border-radius:14px;margin-top:10px;max-height:240px;object-fit:cover">`:''}
 <label class="btn sec sm" style="display:inline-block;margin:10px 0;cursor:pointer;width:auto">📷 ${ph?'Promijeni':'Dodaj'} fotografiju jela<input type="file" accept="image/*" style="display:none" onchange="pickPhoto(this,u=>{S.photos.rec['${r.id}']=u;save();notify('Fotografija spremljena')})"></label>
 <div class="grid" style="margin:4px 0 12px"><div class="stat"><b>${Math.round(r.kcal*f)}</b><span class="mut">kcal</span></div><div class="stat"><b>${Math.round(r.p*f)} g</b><span class="mut">bjelančevine</span></div></div>
 <div class="card"><div class="row" style="align-items:center"><h3>Sastojci</h3><div style="text-align:right"><button class="btn sec sm" onclick="scale=Math.max(1,scale-1);render()">−</button> <b>${f} ${f===1?'porcija':'por.'}</b> <button class="btn sec sm" onclick="scale=Math.min(6,scale+1);render()">+</button></div></div>
 <div class="chips" style="margin:8px 0 0"><div class="chip ${!domMode?'on':''}" onclick="domMode=false;render()">g / ml</div><div class="chip ${domMode?'on':''}" onclick="domMode=true;render()">Domaće mjere (dl)</div></div>
 <ul>${r.ing.map(i=>`<li><b>${amt(i,f)}</b> ${i[0]}</li>`).join('')}</ul>${domMode?'<p class="mut" style="font-size:12px">Približne mjere: 1 dl ≈ 100 ml; žlica ≈ 15 ml, žličica ≈ 5 ml.</p>':''}</div>
 <div class="card"><h3>Priprema</h3><ol>${r.steps.map(s=>`<li>${s}</li>`).join('')}</ol></div>
 <div class="card" style="background:#e6fcf5"><b>💡 Savjet:</b> ${r.tip}</div>
 <div class="row"><button class="btn sec sm" onclick="addMeal('${r.n.replace(/'/g,'')}${f>1?' ×'+f:''}',${Math.round(r.kcal*f)})">➕ U dnevnik obroka</button><button class="btn sec sm" onclick="copyText('${r.n.replace(/'/g,'')} (${r.kcal} kcal/porcija)\\nSastojci: ${r.ing.map(i=>amt(i,1)+' '+i[0]).join(', ')}\\nPriprema: ${r.steps.map((s,k)=>(k+1)+') '+s).join(' ')}')">📤 Podijeli</button></div>
 ${shareArea()}</div>`;
}

// ---------- PLAN + POPIS ZA KUPNJU ----------
function buildWeek(){
 if(!S.plan)S.plan={f:'every2',p:S.pref};
 const f=S.plan.f,p=S.plan.p,tr=FREQ[f][1],pool=WORKOUTS[p];let wi=0;
 return DAYS.map((dn,i)=>{const t=tr.includes(i);let w=null;if(t){w=pool[wi%pool.length];wi++}
  return {dn,t,w,meals:[['🌅 Doručak',mk('Doručak',i)],['☀️ Ručak',mk('Ručak',i)],['🍎 Međuobrok',t&&dietMode()==='Klasičan'?RECIPES.find(r=>r.id==='r7'):mk('Međuobrok',i+1)],['🌙 Večera',mk('Večera',i)]]}});
}
function plan(){
 const W=buildWeek(),f=S.plan.f,p=S.plan.p;
 const rows=W.map((d,i)=>{const kc=d.meals.reduce((a,m)=>a+m[1].kcal,0);
  return `<details class="card" ${i===0?'open':''}><summary style="cursor:pointer;display:flex;justify-content:space-between"><b>${d.dn}</b><span class="tag ${d.t?'':'g'}">${d.t?'💪 Trening':'😴 Odmor'}</span></summary>
  <div style="margin-top:10px">${d.t?`<div class="card sub" style="background:var(--p2);margin-bottom:8px" onclick="loc='${p}';openWo='${d.w.id}';tab='train';tsub='wo';render()"><b>${d.w.n}</b><br><span class="mut">${d.w.min} min · ~${d.w.kcal} kcal – dodirni za početak</span></div>`:`<p class="mut" style="margin-bottom:8px">Aktivni odmor: 20–30 min laganog hoda i 10 min istezanja.</p>`}
  ${!S.prem?'':d.meals.map(m=>`<div class="sub" style="padding:6px 0;border-top:1px solid var(--line)" onclick="tab='food';openRec='${m[1].id}';scale=1;render()"><span class="mut">${m[0]}</span><br><b style="font-size:14px">${m[1].n}</b> <span class="mut">· ${m[1].kcal} kcal</span></div>`).join('')}
  ${!S.prem?'':`<p class="mut" style="margin-top:6px">Ukupno recepti: ${kc} kcal</p>`}</div></details>`}).join('');
 return `<div class="pad">${back}<h2 style="margin-top:12px">Tjedni plan 📅</h2>${dietBar()}${S.prem?dietCard(f):lockCard('Plan prehrane i dnevni ciljevi')}
 <label style="margin-top:0">Koliko često želiš vježbati?</label>
 <div class="chips">${Object.keys(FREQ).map(k=>`<div class="chip ${k===f?'on':''}" onclick="S.plan.f='${k}';save();render()">${FREQ[k][0]}</div>`).join('')}</div>
 <label style="margin-top:0">Gdje?</label>
 <div class="chips">${Object.keys(WORKOUTS).map(k=>`<div class="chip ${k===p?'on':''}" onclick="S.plan.p='${k}';save();render()">${k}</div>`).join('')}</div>
 <div class="grid" style="margin:4px 0 12px"><div class="stat"><b>${FREQ[f][1].length}</b><span class="mut">treninga tjedno</span></div><div class="stat"><b>~${target(f)}</b><span class="mut">kcal dnevno (cilj: ${S.goal})</span></div></div>
 <button class="btn" style="margin-bottom:12px" onclick="tab='${S.prem?'shop':'premium'}';render();scrollTo(0,0)">🛒 Popis za kupnju za ovaj tjedan</button>
 <p class="mut" style="margin-bottom:10px">Recepti čine glavninu dana – dopuni porcijama povrća, voća i vodom (${waterGoal()} L). Procjena je okvirna.</p>${rows}</div>`;
}
function shopItems(){const m={};buildWeek().forEach(d=>d.meals.forEach(([l,r])=>r.ing.forEach(([n,a,u])=>{const k=n+'|'+u;m[k]=m[k]||{n,u,a:0,k};m[k].a+=a})));return Object.values(m).sort((x,y)=>x.n.localeCompare(y.n,'hr'))}
function fa(a,u){return (Number.isInteger(a)?a:(+a.toFixed(1)).toString().replace('.',','))+' '+u}
function chk(i,v){S.shopChk[shopItems()[i].k]=v;save()}
function shop0(){
 const it=shopItems(),done=it.filter(x=>S.shopChk[x.k]).length;
 return `<div class="pad">${back}<h2 style="margin-top:12px">Popis za kupnju 🛒</h2><p class="mut">Automatski iz tjednog plana (${FREQ[S.plan.f][0].toLowerCase()}, ${S.plan.p.toLowerCase()}). Kupljeno: ${done}/${it.length}</p>
 <div class="bar" style="margin:8px 0 12px"><i style="width:${Math.round(done/it.length*100)}%"></i></div>
 <div class="card">${it.map((x,i)=>`<label style="display:flex;gap:10px;align-items:center;margin:0;padding:8px 0;border-bottom:1px solid var(--line);color:var(--ink);font-size:15px"><input type="checkbox" style="width:auto" ${S.shopChk[x.k]?'checked':''} onchange="chk(${i},this.checked)"><span style="flex:1">${x.n}</span><b>${fa(x.a,x.u)}</b></label>`).join('')}</div>
 <div class="row"><button class="btn sec sm" onclick="S.shopChk={};save();render()">Očisti kvačice</button><button class="btn sec sm" onclick="copyText('Popis za kupnju:\\n'+shopItems().map(x=>'- '+x.n+' '+fa(x.a,x.u)).join('\\n'))">📤 Kopiraj popis</button></div>${shareArea()}</div>`;
}

// ---------- DNEVNIK: obroci, voda, san, raspoloženje ----------
const PRODUCTS=[{c:'3850000000011',n:'Grčki jogurt 2% (150 g)',k:110},{c:'3850000000028',n:'Cjelovit kruh – kriška (40 g)',k:95},{c:'3850000000035',n:'Banana (srednja)',k:105},{c:'3850000000042',n:'Proteinski bar (45 g)',k:180},{c:'3850000000059',n:'Bademi (30 g)',k:175},{c:'3850000000066',n:'Svježi sir (100 g)',k:98},{c:'3850000000073',n:'Jabuka (srednja)',k:80},{c:'3850000000080',n:'Sok od naranče (2 dl)',k:90}];
let pend=null;
function addMeal(n,k){D().meals.push({n,k,ph:pend});pend=null;save();notify('Dodano: '+n)}
function addRecMeal(){const r=RECIPES.find(x=>x.id===$('#mrec').value),p=+$('#mpor').value||1;addMeal(r.n+(p!==1?' ×'+p:''),Math.round(r.kcal*p))}
function addCustom(){const n=$('#mn').value.trim(),k=+$('#mk').value;if(!n||!k){notify('Upiši naziv i kalorije');return}addMeal(n,k)}
function scanCode(c){const code=(c||$('#bc').value).trim(),p=PRODUCTS.find(x=>x.c===code);if(p)addMeal(p.n,p.k);else notify('Šifra nije u demo bazi')}
function delMeal(i){D().meals.splice(i,1);save();render()}
function setW(n){const d=D();d.water=Math.max(0,d.water+n);save();render()}
function setSleep(v){D().sleep=+v;save();render()}
function setMood(i){D().mood=i;save();render()}
function diary(){
 const d=D(),gw=Math.ceil(waterGoal()/0.2),tg=target((S.plan&&S.plan.f)||'every2'),eaten=d.meals.reduce((a,m)=>a+m.k,0),mo=['😞','😕','😐','🙂','😄'];
 return `<div class="pad">${back}<h2 style="margin-top:12px">Dnevnik 📓</h2>
 <div class="card"><h3>💧 Voda</h3><p class="mut">Cilj ${waterGoal()} L = ${gw} čaša (2 dl)</p><div class="flex" style="margin-top:8px"><button class="btn sec sm" onclick="setW(-1)">−</button><b style="font-size:20px">${d.water} / ${gw}</b><button class="btn sm" onclick="setW(1)">+ čaša</button></div><div class="bar"><i style="width:${Math.min(100,d.water/gw*100)}%;background:#339af0"></i></div></div>
 <div class="card"><h3>😴 San</h3><select onchange="setSleep(this.value)"><option value="">Odaberi sate sna…</option>${[4,5,5.5,6,6.5,7,7.5,8,8.5,9,10].map(h=>`<option ${d.sleep===h?'selected':''} value="${h}">${f1(h)} h</option>`).join('')}</select><p class="mut" style="margin-top:6px">${d.sleep==null?'Preporuka: 7–9 sati.':d.sleep<7?'Malo sna – oporavak je slabiji, prilagodi intenzitet.':'Odlično za oporavak!'}</p></div>
 <div class="card"><h3>🙂 Raspoloženje</h3><div class="flex" style="justify-content:space-between;margin-top:6px">${mo.map((m,i)=>`<span style="font-size:32px;cursor:pointer;${d.mood===i+1?'':'opacity:.35'}" onclick="setMood(${i+1})">${m}</span>`).join('')}</div></div>
 <div class="card"><h3>🍽️ Obroci i kalorije</h3><div class="grid" style="margin:8px 0"><div class="stat"><b>${eaten}</b><span class="mut">kcal uneseno</span></div><div class="stat"><b>${tg}</b><span class="mut">kcal cilj</span></div></div>
 <div class="bar"><i style="width:${Math.min(100,eaten/tg*100)}%"></i></div>
 ${d.meals.map((m,i)=>`<div class="flex" style="padding:8px 0;border-top:1px solid var(--line)">${m.ph?`<img class="thumb" src="${m.ph}">`:''}<span style="flex:1">${m.n}<br><span class="mut">${m.k} kcal</span></span><button class="btn sec sm" onclick="delMeal(${i})">✕</button></div>`).join('')}
 ${pend?`<div class="flex" style="margin-top:8px"><img class="thumb" src="${pend}"><span class="mut">Fotografija će se spremiti uz sljedeći obrok.</span></div>`:''}
 <label style="margin-top:12px">Iz recepata</label><div class="row"><select id="mrec" style="flex:3">${RECIPES.filter(avail).map(r=>`<option value="${r.id}">${r.n}</option>`).join('')}</select><input id="mpor" type="number" value="1" min="0.5" step="0.5" style="flex:1"></div><button class="btn sec sm" style="margin-top:6px" onclick="addRecMeal()">Dodaj recept</button>
 <label>Vlastiti obrok</label><div class="row"><input id="mn" placeholder="Naziv" style="flex:2"><input id="mk" type="number" placeholder="kcal" style="flex:1"></div><button class="btn sec sm" style="margin-top:6px" onclick="addCustom()">Dodaj</button>
 <label>📷 Fotografija obroka</label><input type="file" accept="image/*" onchange="pickPhoto(this,u=>{pend=u;render()})">
 <label>Barkod (demo)</label><div class="row"><input id="bc" placeholder="Upiši šifru s ambalaže" inputmode="numeric" style="flex:2"><button class="btn sec sm" onclick="scanCode()">Traži</button></div>
 <p class="mut" style="font-size:12px;margin:6px 0">Kamera se u ovoj demo verziji ne može koristiti za skeniranje; u pravoj aplikaciji barkod skenira kamera. Isprobaj s ovim demo proizvodima:</p>
 <div class="chips" style="flex-wrap:wrap">${PRODUCTS.map(p=>`<div class="chip" onclick="scanCode('${p.c}')">${p.n}</div>`).join('')}</div></div></div>`;
}

// ---------- NAPREDAK ----------
let prange=30;
function ser(key,n){const o=[];for(let i=n-1;i>=0;i--){const d=S.days[d0(i)];o.push(d&&d[key]!=null?d[key]:null)}return o}
function ma(a,k){return a.map((_,i)=>{const w=a.slice(Math.max(0,i-k+1),i+1).filter(x=>x!=null);return w.length?avg(w):null})}
function chart(v,col,unit,ref){
 const pts=v.map((y,i)=>y==null?null:[i,y]).filter(Boolean);
 if(pts.length<2)return '<p class="mut">Nema dovoljno podataka.</p>';
 const ys=pts.map(p=>p[1]),mn=Math.min(...ys),mx=Math.max(...ys),lo0=ref!=null?Math.min(mn,ref):mn,hi0=ref!=null?Math.max(mx,ref):mx,pad=(hi0-lo0)*.15||1,lo=lo0-pad,hi=hi0+pad,W=320,H=110,n=v.length-1||1;
 const X=i=>8+i/n*(W-16),Y=y=>H-8-(y-lo)/(hi-lo)*(H-16);
 const line=pts.map(p=>X(p[0]).toFixed(1)+','+Y(p[1]).toFixed(1)).join(' ');
 const l=pts[pts.length-1];
 return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="graf">${ref!=null?`<line x1="8" x2="${W-8}" y1="${Y(ref).toFixed(1)}" y2="${Y(ref).toFixed(1)}" stroke="#2f9e77" stroke-dasharray="5 4" stroke-width="1.5"/>`:''}<polygon points="${X(pts[0][0]).toFixed(1)},${H-8} ${line} ${X(l[0]).toFixed(1)},${H-8}" fill="${col}" opacity=".13"/><polyline points="${line}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="${X(l[0]).toFixed(1)}" cy="${Y(l[1]).toFixed(1)}" r="4" fill="${col}"/></svg><div class="row mut" style="font-size:12px"><span>min ${f1(mn)} ${unit}</span><span style="text-align:center">sada ${f1(l[1])} ${unit}</span><span style="text-align:right">max ${f1(mx)} ${unit}</span></div>`;
}
function wk(off){const o={steps:0,st:[],tr:0,wa:[],sl:[],mo:[]};for(let i=off;i<off+7;i++){const d=S.days[d0(i)];if(!d)continue;o.steps+=d.steps||0;if(d.stress!=null)o.st.push(d.stress);o.tr+=(d.log||[]).length;if(d.water!=null)o.wa.push(d.water);if(d.sleep!=null)o.sl.push(d.sleep);if(d.mood!=null)o.mo.push(d.mood)}return o}
function pct(a,b){return b?Math.round((a-b)/b*100):0}
function arrow(p,inv){return `<span style="color:${(p>0)!==!!inv?'#2f9e77':'#c92a2a'}">${p>0?'▲':p<0?'▼':'•'} ${Math.abs(p)}%</span>`}
function weekText(){const a=wk(0);return `Moj tjedan na Fitži 🌸: ${a.steps.toLocaleString('hr')} koraka, ${a.tr} treninga, prosječni stres ${a.st.length?Math.round(avg(a.st)):'—'}/100, san ${a.sl.length?f1(avg(a.sl)):'—'} h.`}
function insight(){
 const ks=Object.keys(S.days).filter(k=>S.days[k].stress!=null),rel=k=>(S.days[k].log||[]).some(l=>l.id==='h3'||l.id==='relax'),tr=k=>(S.days[k].log||[]).length>0;
 const A=ks.filter(rel).map(k=>S.days[k].stress),B=ks.filter(k=>!rel(k)).map(k=>S.days[k].stress),C=ks.filter(k=>tr(k)).map(k=>S.days[k].stress),E=ks.filter(k=>!tr(k)).map(k=>S.days[k].stress);
 let h='';
 if(A.length>=3&&B.length>=3)h+=`<p>🧘 Na dane s jogom ili opuštanjem tvoj je prosječni stres <b>${Math.round(avg(A))}</b>, a bez njih <b>${Math.round(avg(B))}</b> (${Math.round(avg(A))<Math.round(avg(B))?'−':'+'}${Math.abs(pct(avg(A),avg(B)))}%).</p>`;
 if(C.length>=3&&E.length>=3)h+=`<p style="margin-top:6px">💪 Na dane treninga: <b>${Math.round(avg(C))}</b>, na dane bez treninga: <b>${Math.round(avg(E))}</b>.</p>`;
 return h?h+`<p class="mut" style="margin-top:8px;font-size:12px">Temelji se na demo podacima i tvojim unosima. Povezanost nije dokaz uzroka.</p>`:'<p class="mut">Treba još podataka za usporedbu.</p>';
}
function addMeas(){const w=+$('#mw').value,c=+$('#mc').value;if(!w){notify('Upiši težinu');return}S.meas=S.meas.filter(m=>m.d!==today());S.meas.push({d:today(),w,waist:c||null});S.w=w;save();notify('Mjerenje spremljeno')}
function prog(){
 const a=wk(0),b=wk(7),ms=S.meas.filter(m=>dayDiff(m.d,today())<=prange),n=prange;
 const wph=S.photos.prog;
 return `<div class="pad"><h2>Napredak 📈</h2>
 <div class="chips"><div class="chip ${n===30?'on':''}" onclick="prange=30;render()">30 dana</div><div class="chip ${n===90?'on':''}" onclick="setRange(90)">3 mjeseca</div></div>
 <p class="mut" style="margin-bottom:8px;font-size:12px">Povijest do jučer je demo-simulacija; od danas se bilježe tvoji stvarni unosi.</p>
 <div class="card"><h3>Tjedni sažetak</h3><div class="grid" style="margin:8px 0"><div class="stat"><span class="mut">Koraci</span><b>${a.steps.toLocaleString('hr')}</b>${arrow(pct(a.steps,b.steps))}</div><div class="stat"><span class="mut">Treninzi</span><b>${a.tr}</b><span class="mut">prošli tj. ${b.tr}</span></div><div class="stat"><span class="mut">Prosj. stres</span><b>${a.st.length?Math.round(avg(a.st)):'—'}</b>${b.st.length&&a.st.length?arrow(pct(avg(a.st),avg(b.st)),true):''}</div><div class="stat"><span class="mut">San / raspoloženje</span><b>${a.sl.length?f1(avg(a.sl))+' h':'—'}</b><span class="mut">${a.mo.length?['😞','😕','😐','🙂','😄'][Math.round(avg(a.mo))-1]:''}</span></div></div>
 <button class="btn sec sm" onclick="copyText(weekText())">📤 Podijeli sažetak</button></div>${shareArea()}
 ${wcard(ms)}
 <div class="card"><h3>📏 Opseg struka</h3>${chart(ms.map(m=>m.waist),'#7048e8','cm')}</div>
 <div class="card"><h3>👟 Koraci (prosjek 7 dana)</h3>${chart(ma(ser('steps',n+6),7).slice(6),'#2f9e77','')}</div>
 <div class="card"><h3>🧠 Stres (prosjek 7 dana)</h3>${chart(ma(ser('stress',n+6),7).slice(6),'#f08c00','/100')}</div>
 <div class="card"><h3>Novo mjerenje</h3><div class="row"><div><label>Težina (kg)</label><input id="mw" type="number" step="0.1" value="${S.w}"></div><div><label>Struk (cm)</label><input id="mc" type="number" step="0.5"></div></div><button class="btn sm" style="margin-top:8px" onclick="addMeas()">Spremi</button></div>
 ${S.prem?`<div class="card"><h3>🔗 Stres i trening</h3>${insight()}</div>`:lockCard('Analiza stresa i treninga')}
 <div class="card"><h3>📸 Fotografije napretka</h3>
 ${wph.length>=2?`<div class="row" style="margin-bottom:8px"><div><span class="mut">Prije (${wph[0].d})</span><img src="${wph[0].u}" style="width:100%;border-radius:10px"></div><div><span class="mut">Sada (${wph[wph.length-1].d})</span><img src="${wph[wph.length-1].u}" style="width:100%;border-radius:10px"></div></div>`:''}
 ${wph.length?`<div class="gal">${wph.map(p=>`<img src="${p.u}" title="${p.d}">`).join('')}</div>`:'<p class="mut">Još nema fotografija.</p>'}
 <label class="btn sec sm" style="display:inline-block;margin-top:10px;cursor:pointer;width:auto">📷 Dodaj fotografiju<input type="file" accept="image/*" style="display:none" onchange="pickPhoto(this,u=>{S.photos.prog.push({d:today(),u});save();notify('Fotografija dodana')})"></label>
 <p class="mut" style="font-size:12px;margin-top:6px">Fotografije ostaju samo u tvom pregledniku.</p></div></div>`;
}

// ---------- POSEBNI PROGRAMI + CIKLUS ----------
const PROGS={
'Trudnoća':{ic:'🤰',warn:'Prije vježbanja obavezno se javi ginekologu. Ovo su opće smjernice, ne medicinski savjet.',ok:['Hodanje, plivanje, prenatalna joga','Lagani trening snage s malim utezima','Vježbe dna zdjelice i disanja','Šetnje 20–30 min većinu dana'],no:['Ležanje na leđima dulje vrijeme nakon 1. tromjesečja','Kontaktni sportovi i rizik od pada','Skokovi, jaki trbušnjaci i zadržavanje daha','Pregrijavanje – vježbaj u prozračnom prostoru, pij vodu'],stop:'Prekini i javi se liječniku: krvarenje, vrtoglavica, bol u prsima, jake kontrakcije, curenje plodne vode, smanjeni pokreti bebe, nedostatak zraka.',wk:'3–5 dana tjedno po 20–30 min, razgovorni tempo.',ex:[['Hodanje','20–30 min ugodnim tempom','walk'],['Čučanj uz stolicu','2×10: sjedni i ustani kontrolirano','squat'],['Mačka–krava','10 polaganih ponavljanja, rasterećuje leđa','x'],['Kegelove vježbe','10×5 s stezanja mišića dna zdjelice','x']]},
'Poslije poroda':{ic:'👶',warn:'Počni tek uz odobrenje liječnika (obično nakon 6–8 tjedana, nakon carskog reza ponekad dulje).',ok:['Disanje dijafragmom i Kegelove vježbe','Hodanje s kolicima','Mostić i lagane vježbe za gluteuse','Postupno jačanje uz pauze'],no:['Klasični trbušnjaci dok postoji dijastaza trbušnih mišića','Trčanje i skokovi dok dno zdjelice nije jačo','Preintenzivan povratak – ako curi urin ili osjetiš pritisak, smanji'],stop:'Javi se liječniku ili fizioterapeutu dna zdjelice: obilno krvarenje, bol, curenje urina pri naporu, izbočenje po sredini trbuha.',wk:'3 dana tjedno po 15–25 min, tjedan po tjedan povećavaj.',ex:[['Disanje dijafragmom','10 dubokih udaha, izdah uz lagano stezanje trbuha','x'],['Mostić','2×12, polako','bridge'],['Hodanje','20 min, rastući tempo','walk'],['Čučanj uz zid','2×10','squat']]},
'Menopauza':{ic:'🌿',warn:'Vježbanje pomaže kostima, raspoloženju i snu. Posavjetuj se s liječnikom ako imaš osteoporozu ili srčane tegobe.',ok:['Trening snage 2–3 puta tjedno (zaštita kostiju)','Hodanje, plesanje, plivanje','Vježbe ravnoteže','Joga i disanje za valunge i san'],no:['Intenzivan trening kasno navečer ako ti ometa san','Prenagli skokovi s lošom tehnikom','Preskakanje oporavka'],stop:'Javi se liječniku: bol u prsima, jaka vrtoglavica, neobjašnjiv gubitak težine, česti padovi.',wk:'2–3 snage + 2–3 kardio/hodanja + istezanje.',ex:[['Čučanj','3×12 s utezima koje možeš kontrolirati','squat'],['Veslanje','3×12 gumom ili bučicama','row'],['Rumunjsko mrtvo dizanje','3×10 lagano','hinge'],['Stajanje na jednoj nozi','3×30 s po nozi, ravnoteža','x']]},
'Bol u leđima':{ic:'🧍',warn:'Za akutnu ili dugotrajnu bol prvo se javi liječniku ili fizioterapeutu. Hitno: utrnulost, slabost nogu, gubitak kontrole mokrenja, bol nakon pada.',ok:['Hodanje, plivanje','Mačka–krava i zdjelični nagib','Mostić i ptica-pas','Istezanje pregibača kuka i stražnje lože'],no:['Duboki pretklon s okruglim leđima pod teretom','Teško mrtvo dizanje bez nadzora','Dugo sjedenje bez pauza – ustani svakih 30–45 min'],stop:'Prekini ako vježba pojačava bol ili se bol širi u nogu.',wk:'Svakodnevno 10–15 min lagane mobilnosti + 2–3 dana jačanja.',ex:[['Mačka–krava','10 polaganih ponavljanja','x'],['Mostić','2×12, bez pretjeranog ugiba','bridge'],['Zdjelični nagib','2×10 na leđima, slabine prema podu','crunch'],['Hodanje','15–20 min','walk']]}};
let sp='Trudnoća';
function phase(dn){return dn<=5?['Menstruacija','🌑','Energija je često niža.','Lagano: hodanje, joga, istezanje. Slušaj tijelo; ako je bol jaka, odmori.','Željezo (leća, špinat, meso), magnezij i dovoljno tekućine.']:dn<=13?['Folikularna faza','🌱','Energija i snaga rastu.','Dobar je period za snagu i intenzivnije treninge (HIIT, novi rekordi).','Dovoljno bjelančevina i složenih ugljikohidrata.']:dn<=16?['Ovulacija','🌕','Vrhunac energije i snage.','Odličan period za jaki trening, ali zagrij se dobro i pazi na koljena (ligamenti su popustljiviji).','Puno vode i svježeg povrća.']:['Lutealna faza','🌓','Moguć PMS, umor i veća glad.','Umjereni treninzi, više hoda i joge pred kraj faze; manje intenziteta ako si iscrpljena.','Magnezij, složeni ugljikohidrati, manje soli i kofeina; spavaj dovoljno.']}
function saveCycle(){const s=$('#cs').value,l=+$('#cl').value||28;if(!s){notify('Odaberi datum');return}S.cycle={start:s,len:Math.min(40,Math.max(21,l))};save();render()}
function spec0(){
 const P=PROGS[sp];let cy='';
 if(S.cycle){const dn=((dayDiff(S.cycle.start,today())%S.cycle.len)+S.cycle.len)%S.cycle.len+1,ph=phase(dn);cy=`<div class="card" style="background:var(--p2)"><h3>${ph[1]} ${ph[0]} – ${dn}. dan ciklusa</h3><p style="margin-top:6px">${ph[2]}</p><p style="margin-top:6px"><b>Trening:</b> ${ph[3]}</p><p style="margin-top:6px"><b>Prehrana:</b> ${ph[4]}</p><p class="mut" style="margin-top:8px;font-size:12px">Opće smjernice; ciklusi se razlikuju. Ako su tegobe jake ili neredovite, javi se ginekologu.</p></div>`}
 return `<div class="pad">${back}<h2 style="margin-top:12px">Posebni programi 🌸</h2>
 <div class="chips">${Object.keys(PROGS).map(k=>`<div class="chip ${k===sp?'on':''}" onclick="sp='${k}';render()">${PROGS[k].ic} ${k}</div>`).join('')}</div>
 <div class="card" style="background:#fff9db"><b>⚠️ Važno:</b> ${P.warn}</div>
 <div class="card"><h3>✅ Preporučeno</h3><ul>${P.ok.map(x=>`<li>${x}</li>`).join('')}</ul><h3 style="margin-top:10px">⛔ Izbjegavaj</h3><ul>${P.no.map(x=>`<li>${x}</li>`).join('')}</ul><p style="margin-top:8px"><b>Kada prekinuti:</b> ${P.stop}</p></div>
 <div class="card"><h3>📅 Tjedni ritam</h3><p>${P.wk}</p></div>
 <div class="card"><h3>Vježbe</h3>${P.ex.map(e=>`<details style="border-top:1px solid var(--line);padding:8px 0"><summary style="cursor:pointer"><b>${e[0]}</b></summary>${anim(e[2])}<p>${e[1]}</p></details>`).join('')}</div>
 <h2 style="margin-top:18px">Menstrualni ciklus 🩸</h2>${cy}
 <div class="card"><div class="row"><div><label>Prvi dan zadnje menstruacije</label><input id="cs" type="date" value="${S.cycle?S.cycle.start:''}"></div><div><label>Duljina ciklusa (dani)</label><input id="cl" type="number" value="${S.cycle?S.cycle.len:28}"></div></div><button class="btn sm" style="margin-top:8px" onclick="saveCycle()">Spremi i prikaži savjete</button><p class="mut" style="margin-top:6px;font-size:12px">Podaci ostaju u tvom pregledniku.</p></div></div>`;
}

// ---------- OPUŠTANJE ----------
const WARM=[['Kruženje vratom','30 s, polako, bez zabacivanja glave','x'],['Kruženje ramenima','30 s naprijed pa natrag','x'],['Hod na mjestu','60 s s njihanjem ruku','walk'],['Čučnjevi bez utega','10 ponavljanja','squat'],['Iskoraci','8 po nozi','lunge'],['Lagani poskoci','30 s','jump']];
const STR=[['Prednja loža (kvadriceps)','30 s po nozi, peta prema guzici','x'],['Stražnja loža','30 s, nagni se naprijed s ravnim leđima','hinge'],['Listovi','30 s po nozi uz zid','x'],['Pregibači kuka','30 s po strani u iskoraku','lunge'],['Prsa i ramena','30 s, ruke iza leđa','x'],['Leđa – dijete','45 s, čelo na pod, dugi izdah','x']];
const MED=['Sjedni udobno i zatvori oči.','Primijeti disanje, bez mijenjanja.','Opusti čelo, čeljust i ramena.','Kad misli odlutaju, nježno se vrati dahu.','Osjeti težinu tijela na podlozi.','Produbi dah i polako otvori oči.'];
let rs=null,rtI=null;
function startRelax(kind,sec){clearInterval(rtI);rs={kind,t:0,total:sec};rtI=setInterval(tickRelax,1000);render()}
function stopRelax(done){clearInterval(rtI);if(done&&rs){S.relax=(S.relax||0)+1;D().log.push({id:'relax',n:{b478:'Disanje 4-7-8',box:'Kutijasto disanje',med:'Meditacija'}[rs.kind],t:fmt(rs.total)});save();rs=null;notify('Sesija završena 🌿');return}rs=null;render()}
function tickRelax(){if(!rs||tab!=='relax'){clearInterval(rtI);rs=null;return}rs.t++;if(rs.t>=rs.total){stopRelax(true);return}updRelax()}
function updRelax(){
 if(!rs)return;const c=$('#rcir'),tx=$('#rtxt'),tm=$('#rtime');if(!c||!tx||!tm)return;
 tm.textContent=fmt(rs.total-rs.t);
 if(rs.kind==='med'){tx.textContent=MED[Math.floor(rs.t/30)%MED.length];return}
 const ph=rs.kind==='b478'?[['Udahni',4,1.5],['Zadrži',7,0],['Izdahni',8,1]]:[['Udahni',4,1.5],['Zadrži',4,0],['Izdahni',4,1],['Zadrži',4,0]];
 const cyc=ph.reduce((a,p)=>a+p[1],0),t=rs.t%cyc;let acc=0;
 for(const p of ph){if(t<acc+p[1]){if(t===acc){c.style.transition='transform '+p[1]+'s linear';if(p[2])c.style.transform='scale('+p[2]+')'}tx.textContent=T(p[0])+' '+(acc+p[1]-t);return}acc+=p[1]}
}
function relax(){
 if(rs){setTimeout(updRelax,30);return `<div class="pad"><h2>${{b478:'Disanje 4-7-8',box:'Kutijasto disanje',med:'Meditacija'}[rs.kind]}</h2><div style="text-align:center;padding:30px 0"><div id="rcir" style="width:120px;height:120px;border-radius:50%;margin:30px auto;background:radial-gradient(circle,#ff6b9a,#7048e8);opacity:.85;transform:scale(1)"></div><h2 id="rtxt" style="min-height:56px">Pripremi se…</h2><div class="timer" id="rtime">${fmt(rs.total-rs.t)}</div></div><button class="btn sec" onclick="stopRelax(false)">Prekini</button></div>`}
 const L=(t,a)=>a.map(e=>`<details style="border-top:1px solid var(--line);padding:8px 0"><summary style="cursor:pointer"><b>${e[0]}</b> <span class="mut">– ${e[1]}</span></summary>${anim(e[2])}</details>`).join('');
 return `<div class="pad">${back}<h2 style="margin-top:12px">Opuštanje 🧘</h2><p class="mut" style="margin-bottom:10px">Odrađenih sesija disanja/meditacije: <b>${S.relax||0}</b></p>
 <div class="card"><h3>🌬️ Disanje za stres</h3><p class="mut" style="margin:4px 0 10px">Vođeno disanje s krugom koji se širi i steže.</p><div class="row"><button class="btn sm" onclick="startRelax('b478',114)">4-7-8 (2 min)</button><button class="btn sm" onclick="startRelax('box',120)">Kutija (2 min)</button></div></div>
 <div class="card"><h3>🧘 Meditacija</h3><p class="mut" style="margin:4px 0 10px">Kratka vođena sesija s uputama svakih 30 s.</p><div class="row"><button class="btn sm" onclick="startRelax('med',180)">3 min</button><button class="btn sm" onclick="startRelax('med',300)">5 min</button></div></div>
 <div class="card"><h3>🔥 Zagrijavanje (5 min)</h3>${L('w',WARM)}</div>
 <div class="card"><h3>🤸 Istezanje (8 min)</h3>${L('s',STR)}<p class="mut" style="font-size:12px;margin-top:6px">Istezanje drži mirno, bez poskakivanja i bez boli.</p></div></div>`;
}

// ---------- IZAZOVI I ZNAČKE ----------
const CH=[['c1','🚶','30 dana kretanja','Svaki dan barem 20 min kretanja',d=>'20 min kretanja'],['c2','🧱','30 dana planka','Plank koji se svaki dan produljuje',d=>(20+(d-1)*2)+' s planka'],['c3','🦵','30 dana čučnjeva','Čučnjevi bez utega',d=>(10+(d-1)*2)+' čučnjeva'],['c4','💧','30 dana vode','Dosegni dnevni cilj vode',d=>waterGoal()+' L vode'],['c5','🧘','30 dana istezanja','10 minuta istezanja dnevno',d=>'10 min istezanja']];
function startCh(id){S.ch={id,start:today(),done:[]};save();render()}
function togDay(n){const a=S.ch.done,i=a.indexOf(n);if(i>=0)a.splice(i,1);else a.push(n);save();render()}
function endCh(){S.ch=null;save();render()}
function badges(){
 const R=Object.keys(S.days).filter(k=>!S.days[k].seed).map(k=>S.days[k]),gw=Math.ceil(waterGoal()/0.2),cd=S.ch?S.ch.done.length:0;
 let st=0,best=0;for(let i=0;i<120;i++){const d=S.days[d0(i)];if(d&&!d.seed&&((d.log&&d.log.length)||d.steps>=5000)){st++;best=Math.max(best,st)}else st=0}
 const lg=realLogs();
 return [['🌱','Prvi trening','Završi 1 trening',lg>=1],['⭐','Petica','5 završenih treninga',lg>=5],['👟','10 000 koraka','10 000 koraka u danu',R.some(d=>d.steps>=10000)],['🔥','Niz 7 dana','7 aktivnih dana zaredom',best>=7],['💧','Hidratacija','Cilj vode 3 dana',R.filter(d=>(d.water||0)>=gw).length>=3],['🧘','Zen','3 sesije opuštanja',(S.relax||0)>=3],['📸','Slika napretka','Dodaj fotografiju napretka',S.photos.prog.length>=1],['🍽️','Dnevnik obroka','Zabilježi 5 obroka',R.reduce((a,d)=>a+(d.meals||[]).length,0)>=5],['🏆','Izazov 7 dana','7 dana u izazovu',cd>=7],['👑','Izazov 30 dana','Završi 30 dana',cd>=30],['👭','Timska igračica','Pozovi prijateljicu',(S.invited||0)>=1]];
}
function chal(){
 const B=badges(),ok=B.filter(b=>b[3]).length;let cur='';
 if(S.ch){const c=CH.find(x=>x[0]===S.ch.id),dn=Math.max(1,Math.min(30,dayDiff(S.ch.start,today())+1));
  cur=`<div class="card"><h3>${c[1]} ${c[2]}</h3><p class="mut">Dan ${dn} od 30 · završeno ${S.ch.done.length}/30</p><div class="bar" style="margin:8px 0"><i style="width:${S.ch.done.length/30*100}%;background:#2f9e77"></i></div>
  <div class="card" style="background:var(--p2);margin:10px 0"><b>Danas:</b> ${c[4](dn)}</div>
  <div class="dg">${Array.from({length:30},(_,i)=>i+1).map(n=>`<div class="dy ${S.ch.done.includes(n)?'ok':''} ${n===dn?'now':''}" style="${n>dn?'opacity:.4':''}" onclick="${n<=dn?`togDay(${n})`:''}">${n}</div>`).join('')}</div>
  ${S.ch.done.length>=30?'<p style="margin-top:10px"><b>🏆 Čestitamo, izazov je završen!</b></p>':''}<button class="btn sec sm" style="margin-top:10px" onclick="endCh()">Odustani od izazova</button></div>`}
 return `<div class="pad">${back}<h2 style="margin-top:12px">Izazovi i značke 🏆</h2>${cur}
 ${S.ch?'':`<h3 style="margin-bottom:8px">Odaberi izazov od 30 dana</h3>${CH.map(c=>`<div class="card flex"><span style="font-size:30px">${c[1]}</span><div style="flex:1"><b>${c[2]}</b><br><span class="mut">${c[3]}</span></div><button class="btn sm" onclick="startCh('${c[0]}')">Kreni</button></div>`).join('')}`}
 <h3 style="margin:14px 0 8px">Značke (${ok}/${B.length})</h3><div class="grid">${B.map(b=>`<div class="stat bdg ${b[3]?'on':''}"><span style="font-size:34px">${b[0]}</span><b style="font-size:14px">${b[1]}</b><span class="mut">${b[2]}</span></div>`).join('')}</div></div>`;
}

// ---------- ZAJEDNICA ----------
const FR=[['Marija','🌻',58200],['Ivana','🌷',49800],['Petra','🌼',63100],['Lea','🍀',41500],['Katarina','🌸',55400]];
const PROS={lana:['Lana','🏋️','Trenerica'],petra:['Petra','🥗','Nutricionistica']};
let cw='lana';
function addFr(){const n=FR.find(f=>!S.friends.includes(f[0]));if(!n){notify('Svi su već u timu');return}S.friends.push(n[0]);S.invited=(S.invited||0)+1;save();notify(n[0]+' se pridružila!')}
function delFr(n){S.friends=S.friends.filter(x=>x!==n);save();render()}
function reply(w,t){
 const s=t.toLowerCase();
 if(w==='lana'){if(/bol|leđ|koljen|ramen/.test(s))return 'Smanji opterećenje i radi lagano kretanje i istezanje. Ako bol traje više od dva tjedna ili imaš utrnulost, javi se liječniku ili fizioterapeutu.';if(/plan|treni|koliko/.test(s))return 'Za početak su 3 treninga tjedno uz dan odmora između odličan ritam. U tabu Plan odaberi učestalost koja ti odgovara.';if(/stres|umor|san/.test(s))return 'Odmor je dio treninga. Probaj disanje 4-7-8 u tabu Opuštanje i spavaj 7–9 sati.';return 'Hvala na poruci! Javi mi cilj i koliko puta tjedno možeš vježbati pa ćemo složiti plan. (Automatski odgovor u demo verziji.)'}
 if(/kalor|mršav|kilogram|težin/.test(s))return 'Umjeren deficit (oko 300–400 kcal) uz dovoljno bjelančevina je održiv. Okvirni dnevni cilj vidiš u Planu.';if(/vegetar|vegan|alerg|gluten|lakto/.test(s))return 'Recepte možeš filtrirati po prehrani i alergijama u tabu Recepti. Kod izražene alergije uvijek provjeri deklaraciju i posavjetuj se s liječnikom.';if(/voda|pit/.test(s))return 'Cilj je oko 0,033 L po kilogramu težine dnevno. Prati vodu u Dnevniku.';return 'Hvala na pitanju! Napiši što najčešće jedeš i koji ti je cilj pa ćemo prilagoditi jelovnik. (Automatski odgovor u demo verziji.)';
}
function sendMsg(){const v=$('#cmsg').value.trim();if(!v)return;const w=cw;(S.chat[w]=S.chat[w]||[]).push({f:'me',t:v});save();render();setTimeout(()=>{S.chat[w].push({f:'pro',t:reply(w,v)});save();if(tab==='comm')render()},900)}
function comm(){
 const me=wk(0).steps,rows=[['Ti','⭐',me,1]].concat(S.friends.map(n=>{const f=FR.find(x=>x[0]===n);return [n,f[1],f[2],0]})).sort((a,b)=>b[2]-a[2]),goal=60000*rows.length,sum=rows.reduce((a,r)=>a+r[2],0),msgs=S.chat[cw]||[];
 return `<div class="pad">${back}<h2 style="margin-top:12px">Zajednica 👭</h2>
 <div class="card"><h3>🥇 Ljestvica – koraci u 7 dana</h3>${rows.map((r,i)=>`<div class="flex" style="padding:8px 0;border-top:1px solid var(--line);${r[3]?'font-weight:700;color:#d6336c':''}"><span style="width:22px">${i+1}.</span><span style="font-size:22px">${r[1]}</span><span style="flex:1">${r[0]}</span><span>${r[2].toLocaleString('hr')}</span>${r[3]?'':`<span class="mut" style="cursor:pointer" onclick="delFr('${r[0]}')">✕</span>`}</div>`).join('')}
 <button class="btn sec sm" style="margin-top:10px" onclick="addFr()">➕ Pozovi prijateljicu</button><p class="mut" style="font-size:12px;margin-top:6px">Prijateljice su u demu simulirani profili.</p></div>
 <div class="card"><h3>🤝 Grupni izazov tjedna</h3><p class="mut">Zajedno do ${goal.toLocaleString('hr')} koraka</p><div class="bar" style="margin:8px 0"><i style="width:${Math.min(100,sum/goal*100)}%;background:#2f9e77"></i></div><p>${sum.toLocaleString('hr')} koraka (${Math.min(100,Math.round(sum/goal*100))}%)</p></div>
 <div class="card"><h3>📤 Podijeli</h3><div class="row"><button class="btn sec sm" onclick="copyText(weekText()+'\\nPridruži mi se! Kod: '+S.name.toUpperCase()+'-2026')">Moj rezultat</button><button class="btn sec sm" onclick="tab='food';openRec=null;render()">Recept</button></div><p class="mut" style="font-size:12px;margin-top:6px">Recept dijeliš s tipkom "Podijeli" na stranici recepta.</p></div>${shareArea()}
 ${S.prem?'':lockCard('Poruke trenerici i nutricionistici')}<div class="card" ${S.prem?'':'hidden'}><h3>💬 Stručnjakinje</h3><div class="chips" style="margin-top:8px">${Object.keys(PROS).map(k=>`<div class="chip ${k===cw?'on':''}" onclick="cw='${k}';render()">${PROS[k][1]} ${PROS[k][0]} · ${PROS[k][2]}</div>`).join('')}</div>
 <div style="min-height:80px">${msgs.length?msgs.map(m=>`<div class="msg ${m.f}">${m.t}</div>`).join(''):`<p class="mut">Pošalji poruku ${PROS[cw][0]}.</p>`}</div>
 <div class="row" style="margin-top:8px"><input id="cmsg" placeholder="Napiši poruku…" style="flex:3"><button class="btn sm" style="flex:1" onclick="sendMsg()">Pošalji</button></div>
 <p class="mut" style="font-size:12px;margin-top:6px">Demo: odgovori su automatski. U pravoj aplikaciji odgovaraju prave stručne osobe.</p></div>
 <div class="card"><h3>💡 Savjeti stručnjakinja</h3><ul><li><b>Lana:</b> Bolje 3 kratka treninga tjedno nego jedan iscrpljujući.</li><li><b>Lana:</b> Zagrij se 5 minuta i uvijek završi istezanjem.</li><li><b>Petra:</b> Bjelančevine u svakom obroku drže sitost i grade mišiće.</li><li><b>Petra:</b> Pola tanjura neka bude povrće.</li></ul></div></div>`;
}


