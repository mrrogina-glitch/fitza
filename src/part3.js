
/* ===================== DIO 3: NAČIN PREHRANE + SINKRONIZACIJA ===================== */
// ---------- način prehrane: klasičan / keto / LCHF ----------
function dietMode(){return (S&&S.prem&&S.diet)||'Klasičan'}
function dietOk(r){const m=dietMode();return m==='Klasičan'||(m==='LCHF'?(r.t.includes('lchf')||r.t.includes('keto')):r.t.includes('keto'))}
function setDiet(m){if(!S.prem&&m!=='Klasičan'){tab='premium';render();scrollTo(0,0);return}S.diet=m;save();render()}
function mk(cat,i){const l=RECIPES.filter(r=>r.cat===cat&&dietOk(r)&&avail(r)),L=l.length?l:RECIPES.filter(r=>r.cat===cat&&avail(r));return L[i%L.length]}
const CB={r1:55,r2:5,r3:45,r4:32,r5:45,r6:45,r7:38,r8:22,r9:22,r10:9,r11:45,r12:60,r13:62,r14:12,r15:48,r16:42,r17:35,r18:22,r19:14};
function R2(id,n,cat,min,kcal,p,c,ing,steps,tip,t,al){RECIPES.push({id,n,cat,min,kcal,p,c,s:0,ing,steps,tip,t,al});}
R2('r20','Jaja s avokadom i panceta','Doručak',10,420,22,6,[['jaja',2,'kom'],['avokado',0.5,'kom'],['panceta',30,'g'],['maslinovo ulje',1,'žličica']],['Pancetu ispeci na tavi dok ne postane hrskava.','Jaja ispeci na ulju po želji.','Avokado nareži i posloži uz jaja i pancetu.','Posoli i popapri.'],'Visok udio masti i gotovo bez ugljikohidrata.',['keto','lchf','gf','lf'],['jaja']);
R2('r21','Chia puding s kokosovim mlijekom','Doručak',5,280,8,12,[['čia sjemenke',3,'žlica'],['kokosovo mlijeko',150,'ml'],['jagode',50,'g'],['kokos prah',1,'žlica']],['Čiju i kokosovo mlijeko pomiješaj u čaši.','Ostavi u hladnjaku barem 2 sata ili preko noći.','Dodaj jagode i kokos prije posluživanja.'],'Priprema se unaprijed, bogat vlaknima.',['lchf','v','vegan','gf','lf'],[]);
R2('r22','Salata s tunjevinom, jajima i maslinama','Ručak',10,390,32,6,[['tunjevina u maslinovom ulju',1,'konzerva'],['jaja',2,'kom'],['masline',30,'g'],['rikola',50,'g'],['maslinovo ulje',1,'žlica']],['Jaja skuhaj tvrdo 9 minuta, ohladi i nareži.','Rikolu posloži u zdjelu.','Dodaj tunjevinu, jaja i masline.','Začini uljem, solju i paprom.'],'Dobar izvor bjelančevina i omega-3 masti.',['keto','lchf','gf','lf'],['riba','jaja']);
R2('r23','Tikvične špagete s piletinom i pestom','Ručak',20,430,38,10,[['tikvica',2,'kom'],['pileća prsa',130,'g'],['pesto',2,'žlica'],['cherry rajčice',60,'g']],['Tikvice izrezi na špagete spiralizerom ili ljuštilicom.','Piletinu nareži i ispeci 6–7 minuta.','Dodaj tikvice i rajčice, kuhaj 2 minute.','Umiješaj pesto i odmah posluži.'],'Lagana zamjena za tjesteninu.',['keto','lchf','gf'],['orašasti','mlijeko']);
R2('r24','Losos s brokulom i maslacem','Večera',25,520,38,8,[['fileta lososa',150,'g'],['brokula',150,'g'],['maslac',10,'g'],['češnjak',1,'režanj'],['limun',0.5,'kom']],['Brokulu kuhaj na pari 5 minuta.','Lososa ispeci na tavi 4 minute po strani.','Dodaj maslac i češnjak, prelij brokulu i lososa.','Posluži uz limun.'],'Omega-3 i zdrave masti.',['keto','lchf','gf'],['riba','mlijeko']);
R2('r25','Pečena piletina s cvjetačom','Večera',40,480,42,10,[['pileći batak s kožom',200,'g'],['cvjetača',200,'g'],['maslinovo ulje',1,'žlica'],['češnjak',2,'režanj'],['ružmarin',1,'žličica']],['Pećnicu zagrij na 200 °C.','Piletinu i cvjetaču u tepsiji pomiješaj s uljem i začinima.','Peci 30–35 minuta dok piletina ne porumeni.'],'Jednostavna i zasitna keto večera.',['keto','lchf','gf','lf'],[]);
R2('r26','Bademi i sir','Međuobrok',3,230,10,4,[['bademi',25,'g'],['tvrdi sir',30,'g']],['Posloži bademe i sir na tanjurić.'],'Brza užina bez ugljikohidrata.',['keto','lchf','gf'],['orašasti','mlijeko']);
R2('r27','Smoothie od avokada i kakaa','Međuobrok',5,250,5,10,[['avokado',0.5,'kom'],['kokosovo mlijeko',150,'ml'],['kakao prah',1,'žlica'],['led',3,'kom']],['Sve sastojke stavi u blender.','Miksaj 1 minutu do glatke teksture.'],'Kremast, sitan i bez dodanog šećera.',['lchf','v','vegan','gf','lf'],[]);
// oznake keto/LCHF za postojeće recepte
const KT={r2:['keto','lchf'],r14:['keto','lchf'],r10:['keto','lchf'],r9:['lchf'],r19:['lchf'],r18:['lchf'],r4:['lchf']};
RECIPES.forEach(r=>{if(r.c==null)r.c=CB[r.id]||20;if(KT[r.id])KT[r.id].forEach(x=>{if(!r.t.includes(x))r.t.push(x)})});
function dietBar(){return `<div class="chips">${['Klasičan','Keto','LCHF'].map(m=>`<div class="chip ${dietMode()===m?'on':''}" onclick="setDiet('${m}')">${{Klasičan:'🍽️',Keto:'🥑',LCHF:'🥩'}[m]} ${m}${!S.prem&&m!=='Klasičan'?' 🔒':''}</div>`).join('')}</div>`}
function dietCard(f){
 const k=target(f),m=dietMode();let c,p,fat,txt;
 if(m==='Klasičan'){c=k*.5/4;p=k*.2/4;fat=k*.3/9;txt='Uravnotežena prehrana: oko 50% energije iz ugljikohidrata, 20% iz bjelančevina i 30% iz masti.'}
 else if(m==='LCHF'){c=100;p=k*.25/4;fat=(k-c*4-p*4)/9;txt='LCHF (low carb, high fat): do oko 100 g ugljikohidrata dnevno, umjerene bjelančevine i više zdravih masti.'}
 else{c=30;p=k*.22/4;fat=(k-c*4-p*4)/9;txt='Keto: oko 20–30 g ugljikohidrata dnevno, umjerene bjelančevine i većina energije iz masti.'}
 return `<div class="card"><h3>${m} – dnevni ciljevi</h3><div class="grid" style="margin:8px 0"><div class="stat"><span class="mut">Ugljikohidrati</span><b>${Math.round(c)} g</b></div><div class="stat"><span class="mut">Bjelančevine</span><b>${Math.round(p)} g</b></div><div class="stat"><span class="mut">Masti</span><b>${Math.round(fat)} g</b></div><div class="stat"><span class="mut">Energija</span><b>~${k} kcal</b></div></div><p style="font-size:14px">${txt}</p>${m!=='Klasičan'?'<p class="mut" style="margin-top:8px;font-size:12px">⚠️ Keto i LCHF nisu za svakoga (trudnoća, dojenje, dijabetes s lijekovima, bolesti jetre i bubrega, poremećaji prehrane). Prije promjene prehrane posavjetuj se s liječnikom ili nutricionistom. Ovo je okvirna procjena.</p>':''}</div>`;
}

// ---------- sinkronizacija s mobitelom i pametnim satom ----------
const METR=[['steps','👟','Koraci'],['hr','❤️','Puls u mirovanju'],['sleep','😴','San'],['stress','🧠','Stres'],['kcal','🔥','Aktivne kalorije'],['workout','🏃','Treninzi'],['spo2','🫁','Kisik u krvi (SpO₂)'],['weight','⚖️','Težina']];
const DEVS={phone:['📱','Mobitel',['Apple Zdravlje','Google Health Connect','Samsung Health']],watch:['⌚','Pametni sat',['Apple Watch','Garmin','Fitbit','Samsung Galaxy Watch','Huawei / Xiaomi']]};
function devInit(){if(!S.dev)S.dev={phone:{on:0,app:'',t:null},watch:{on:0,app:'',t:null},perm:{steps:1,hr:1,sleep:1,stress:1,kcal:1,workout:1,spo2:0,weight:0},auto:0}}
function connDev(k){devInit();S.dev[k]={on:1,app:$('#app_'+k).value,t:null};save();notify('Povezano: '+S.dev[k].app+' (demo)')}
function discDev(k){devInit();S.dev[k]={on:0,app:'',t:null};save();render()}
function togPerm(m){devInit();S.dev.perm[m]=S.dev.perm[m]?0:1;save();render()}
function togAuto(){if(!S.prem){tab='premium';render();scrollTo(0,0);return}devInit();S.dev.auto=S.dev.auto?0:1;save();render()}
function syncNow(k){
 devInit();if(!S.dev[k].on){notify('Prvo poveži uređaj');return}
 const d=D(),p=S.dev.perm,tm=new Date().toLocaleTimeString('hr',{hour:'2-digit',minute:'2-digit'});
 if(p.steps)d.steps=Math.min(30000,(d.steps||0)+rnd(1200,3200));
 if(p.hr)d.hr=rnd(58,76);
 if(p.sleep)d.sleep=+(rnd(60,88)/10).toFixed(1);
 if(p.stress)d.stress=rnd(20,75);
 if(p.kcal)d.kcalAct=(d.kcalAct||0)+rnd(80,200);
 if(p.spo2)d.spo2=rnd(95,99);
 if(p.workout&&k==='watch'&&!d.log.some(l=>l.auto)){d.log.push({id:'sw',n:'Brzo hodanje (s sata)',t:'35:00',auto:1});d.kcal+=140}
 if(p.weight){S.meas=S.meas.filter(m=>m.d!==today());S.meas.push({d:today(),w:+(S.w+(Math.random()-.5)*.4).toFixed(1),waist:null})}
 S.dev[k].t=tm;S.sync={src:DEVS[k][1]+' ('+S.dev[k].app+')',t:tm,hr:d.hr||(S.sync&&S.sync.hr)||68};
 save();notify('Sinkronizirano: '+DEVS[k][1]);
}
// stara tipka na početnoj sada koristi novu sinkronizaciju
function sync(src){const k=src==='Pametni sat'?'watch':'phone';devInit();if(!S.dev[k].on)S.dev[k]={on:1,app:DEVS[k][2][0],t:null};syncNow(k)}
function importCsv(inp){
 const f=inp.files&&inp.files[0];if(!f)return;const r=new FileReader();
 r.onload=()=>{const L=String(r.result).split(/\r?\n/).filter(x=>x.trim());if(L.length<2){notify('Datoteka je prazna');return}
  const h=L.shift().split(/[,;]/).map(x=>x.trim().toLowerCase());let n=0;
  L.forEach(l=>{const c=l.split(/[,;]/),o={};h.forEach((k,i)=>o[k]=(c[i]||'').trim());if(!/^\d{4}-\d{2}-\d{2}$/.test(o.date))return;
   const d=S.days[o.date]||(S.days[o.date]={steps:0,stress:null,log:[],kcal:0,meals:[]});delete d.seed;
   if(o.steps)d.steps=+o.steps;if(o.resting_hr)d.hr=+o.resting_hr;if(o.sleep_hours)d.sleep=+o.sleep_hours;if(o.stress)d.stress=+o.stress;if(o.spo2)d.spo2=+o.spo2;n++});
  save();notify('Uvezeno dana: '+n)};
 r.readAsText(f);
}
setInterval(()=>{if(S&&S.dev&&S.dev.auto&&(S.dev.phone.on||S.dev.watch.on)){const d=day();d.steps=Math.min(30000,(d.steps||0)+rnd(30,160));save();if(tab==='home')render()}},15000);
function syncPage(){
 devInit();const d=D(),pm=S.dev.perm;
 const card=k=>{const v=S.dev[k],D0=DEVS[k];return `<div class="card"><div class="flex"><span style="font-size:30px">${D0[0]}</span><div style="flex:1"><b>${D0[1]}</b><br><span class="mut">${v.on?`Povezano: ${v.app}${v.t?' · zadnje '+v.t:''}`:'Nije povezano'}</span></div></div>${v.on?`<div class="row" style="margin-top:10px"><button class="btn sm" onclick="syncNow('${k}')">Sinkroniziraj sada</button><button class="btn sec sm" onclick="discDev('${k}')">Prekini vezu</button></div>`:`<div class="row" style="margin-top:10px"><select id="app_${k}" style="flex:2">${D0[2].map(a=>`<option>${a}</option>`).join('')}</select><button class="btn sm" style="flex:1" onclick="connDev('${k}')">Poveži</button></div>`}</div>`};
 const val=(x,u)=>x==null?'—':x+u;
 return `<div class="pad">${back}<h2 style="margin-top:12px">Sinkronizacija ⌚</h2>
 <div class="card" style="background:#fff9db"><b>ℹ️ Kako radi u ovoj verziji</b><p style="font-size:14px;margin-top:4px">Web verzija ne može izravno čitati Apple Zdravlje, Health Connect niti sat, pa je povezivanje ovdje <b>simulirano</b>. Podatke možeš uvesti i iz CSV datoteke. Prava veza zahtijeva mobilnu aplikaciju (HealthKit / Health Connect) ili povezivanje Garmin/Fitbit računa preko poslužitelja.</p></div>
 ${card('phone')}${card('watch')}
 <div class="card"><h3>Što se sinkronizira</h3><div class="chips" style="flex-wrap:wrap;margin-top:8px">${METR.map(m=>`<div class="chip ${pm[m[0]]?'on':''}" onclick="togPerm('${m[0]}')">${m[1]} ${m[2]}</div>`).join('')}</div>
 <div class="flex" style="margin-top:10px"><span style="flex:1">Automatska sinkronizacija (dok je aplikacija otvorena)</span><div class="chip ${S.dev.auto?'on':''}" onclick="togAuto()">${S.dev.auto?'Uključeno':'Isključeno'}</div></div></div>
 <div class="card"><h3>Današnji podaci</h3><div class="grid" style="margin-top:8px"><div class="stat"><span class="mut">Koraci</span><b>${(d.steps||0).toLocaleString('hr')}</b></div><div class="stat"><span class="mut">Puls u mirovanju</span><b>${val(d.hr,' bpm')}</b></div><div class="stat"><span class="mut">San</span><b>${val(d.sleep,' h')}</b></div><div class="stat"><span class="mut">Stres</span><b>${val(d.stress,'/100')}</b></div><div class="stat"><span class="mut">Aktivne kalorije</span><b>${val(d.kcalAct,' kcal')}</b></div><div class="stat"><span class="mut">SpO₂</span><b>${val(d.spo2,' %')}</b></div></div>
 ${S.sync?`<p class="mut" style="margin-top:8px">Zadnji izvor: ${S.sync.src} · ${S.sync.t}</p>`:''}</div>
 <div class="card"><h3>📥 Uvoz iz datoteke (CSV)</h3><p class="mut" style="margin:4px 0 8px;font-size:13px">Izvezi podatke iz aplikacije za zdravlje ili sata i uvezi ih ovdje. Prvi redak:<br><code>date,steps,resting_hr,sleep_hours,stress,spo2</code><br>Primjer retka: <code>2026-11-14,9200,64,7.5,35,97</code></p><input type="file" accept=".csv,text/csv,.txt" onchange="importCsv(this)" ${S.prem?'':'disabled'}>${S.prem?'':'<p class="mut">🔒 Premium</p>'}</div>
 <p class="mut" style="font-size:12px">Zdravstveni podaci ostaju u tvom pregledniku. Procjene stresa i drugih vrijednosti informativne su i ne zamjenjuju liječnički pregled.</p></div>`;
}


