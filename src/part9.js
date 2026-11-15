/* ===================== DIO 9: VIDEO, PWA, VLASTITI RECEPTI, MJERE, SAT, PRIJATELJICE ===================== */
const _eh=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function _Ls(h,e){return L(h,e)}

/* ---------- 1. VIDEO: pretraga na YouTubeu + masovni uvoz poveznica ---------- */
function ytLink(name){
 const q=encodeURIComponent(String(name).replace(/\d+\s*[×x]\s*\d+.*$/,'').replace(/\d+\s*(min|s)\b.*$/,'').trim()+' '+L('vježba tehnika','exercise technique'));
 return `<a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener" class="btn sec sm" style="display:inline-block;width:auto;margin:6px 0;text-decoration:none">▶ ${L('Pronađi video na YouTubeu','Find a video on YouTube')}</a>`;
}
function vidImport(){
 const t=($('#vimp')||{value:''}).value,lines=t.split(/\r?\n/);let n=0;S.vids=S.vids||{};
 lines.forEach(l=>{const m=l.split(/[;\t]|,(?=\s*https?:)/);if(m.length<2)return;const nm=m[0].trim().toLowerCase(),u=m[1].trim();if(!/^https?:\/\//i.test(u))return;const x=LIB.find(e=>e.hr.toLowerCase()===nm||e.en.toLowerCase()===nm);if(x){S.vids[x.id]=u;n++}});
 save();notify(n?L(n+' video poveznica uvezeno','Imported '+n+' video links'):L('Nijedan redak nije prepoznat (format: naziv;poveznica)','No line recognised (format: name;link)'));
}
function vidExport(){copyText(Object.keys(S.vids||{}).map(i=>LIB[i].hr+';'+S.vids[i]).join('\n')||'')}
(function(){
 const lp=libPage;
 libPage=function(){
  return lp().replace(/<p class="mut" style="font-size:12px;margin-top:10px">/,`<details class="card" style="margin-top:12px"><summary style="cursor:pointer"><b>🎬 ${L('Uvoz video poveznica','Import video links')}</b></summary><p class="mut" style="font-size:13px;margin:8px 0">${L('Zalijepi po jedan redak: naziv vježbe;poveznica (YouTube ili .mp4). Nazivi moraju točno odgovarati nazivu u biblioteci.','Paste one line each: exercise name;link (YouTube or .mp4). Names must match the library names exactly.')}</p><textarea id="vimp" rows="5" placeholder="Čučanj;https://youtu.be/..." style="width:100%"></textarea><div class="row" style="margin-top:8px"><button class="btn sm" onclick="vidImport()">${L('Uvezi','Import')}</button><button class="btn sec sm" onclick="vidExport()">${L('Kopiraj postojeće','Copy existing')} (${Object.keys(S.vids||{}).length})</button></div></details><p class="mut" style="font-size:12px;margin-top:10px">`);
 };
 const lc=libCard;
 libCard=function(x){const h=lc(x);return lb.open===x.id?h.replace('<div class="row" style="margin-top:8px">',ytLink(lname(x))+'<div class="row" style="margin-top:8px">'):h};
 const eb=exBlock;
 exBlock=function(w,e,i){return eb(w,e,i).replace(/(<p class="mut" style="font-size:11px">Pojednostavljena)/,ytLink(e)+'$1')};
})();

/* ---------- 2. PWA ---------- */
let _ip=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();_ip=e;try{render()}catch(x){}});
window.addEventListener('appinstalled',()=>{_ip=null;try{notify(L('Aplikacija je instalirana 🎉','App installed 🎉'))}catch(x){}});
function pwaInstall(){if(_ip){_ip.prompt();_ip.userChoice.finally(()=>{_ip=null;render()})}}
(function(){
 try{
  if(!/^https?:$/.test(location.protocol))return;
  fetch('manifest.webmanifest',{method:'HEAD'}).then(r=>{
   if(!r.ok)return;const l=document.createElement('link');l.rel='manifest';l.href='manifest.webmanifest';document.head.appendChild(l);
   if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').then(()=>{window.__sw=1}).catch(()=>{});
  }).catch(()=>{});
 }catch(e){}
})();
function pwaPage(){
 const st=(window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone,ios=/iphone|ipad|ipod/i.test(navigator.userAgent),sw=!!(navigator.serviceWorker&&navigator.serviceWorker.controller);
 const np=typeof Notification==='undefined'?'unsupported':Notification.permission;
 return `<div class="pad">${back}<h2 style="margin:12px 0">📲 ${L('Instaliraj Fitžu','Install Fitža')}</h2>
 <div class="card"><div class="flex" style="gap:12px;align-items:center"><span style="font-size:40px">🌸</span><div><b>${st?L('Aplikacija je instalirana','App is installed'):L('Dodaj na početni zaslon','Add to home screen')}</b><div class="mut">${L('Ikona kao prava aplikacija, cijeli zaslon i rad bez interneta.','Real app icon, full screen and offline use.')}</div></div></div>
 ${st?'':_ip?`<button class="btn" style="margin-top:12px" onclick="pwaInstall()">⬇️ ${L('Instaliraj','Install')}</button>`:ios?`<p style="margin-top:10px">${L('Na iPhoneu: dodirni <b>Podijeli</b> (kvadrat sa strelicom) pa <b>Dodaj na početni zaslon</b>.','On iPhone: tap <b>Share</b> (square with arrow) then <b>Add to Home Screen</b>.')}</p>`:`<p style="margin-top:10px">${L('Na Androidu (Chrome): izbornik ⋮ → <b>Instaliraj aplikaciju</b> ili <b>Dodaj na početni zaslon</b>. Gumb za instalaciju pojavi se ovdje kad ga preglednik ponudi.','On Android (Chrome): menu ⋮ → <b>Install app</b> or <b>Add to Home screen</b>. An install button appears here when the browser offers it.')}</p>`}</div>
 <div class="card"><h3>${L('Stanje','Status')}</h3><ul><li>${L('Rad bez interneta','Offline use')}: <b>${sw?'✅ '+L('aktivno','active'):'⏳ '+L('aktivira se nakon prvog učitavanja na domeni','activates after the first load on the site')}</b></li><li>${L('Obavijesti','Notifications')}: <b>${np==='granted'?'✅':np==='denied'?'⛔':'—'} ${np}</b></li><li>${L('Način rada','Mode')}: <b>${st?L('instalirana aplikacija','installed app'):L('preglednik','browser')}</b></li></ul>
 ${np==='default'?`<button class="btn sec sm" onclick="remPerm()">🔔 ${L('Dopusti obavijesti','Allow notifications')}</button>`:''}</div>
 <div class="card"><h3>ℹ️ ${L('Što još nije moguće','What is not possible yet')}</h3><p class="mut" style="font-size:13px">${L('Podsjetnici stižu kad je aplikacija instalirana ili otvorena. Prave push obavijesti koje stižu i kad je aplikacija potpuno zatvorena traže poslužitelj za slanje, što ova verzija nema. Za pouzdan podsjetnik koristi i kalendar (.ics) u Podsjetnicima.','Reminders arrive while the app is installed or open. Real push notifications that arrive when the app is fully closed need a sending server, which this version does not have. For a reliable reminder also use the calendar (.ics) in Reminders.')}</p></div></div>`;
}

/* ---------- 3. VLASTITI RECEPTI + MAKRONUTRIJENTI ---------- */
// [ključevi], kcal, bjelančevine, UH, masti na 100 g, težina komada (g), gustoća (g/ml)
const FDB=[
[['pileća prsa','piletina','piletin','pileć'],120,23,0,2.6],[['puretin','puran'],115,24,0,1.5],[['govedin','junetin','mljeveno meso','mljevena govedina'],190,20,0,12],[['svinjetin'],240,17,0,19],[['šunka'],145,21,1,6],[['losos'],208,20,0,13],[['tuna'],130,29,0,1],[['oslić','riba','bijela riba'],85,18,0,1],[['škampi','škamp'],99,24,0.2,0.3],
[['jaje','jaja'],143,12.6,0.7,9.5,55],[['grčki jogurt'],97,9,4,5],[['jogurt'],61,3.5,4.7,3.3],[['kefir'],52,3.4,4.5,2.5],[['mlijeko biljno','biljno mlijeko','bademovo mlijeko','sojino mlijeko','zobeno mlijeko'],40,1,6,1.5,0,1],[['mlijeko'],46,3.4,4.8,1.5,0,1.03],[['skuta'],98,11,3.4,4],[['feta'],264,14,4,21],[['mozzarella'],280,28,3,17],[['parmezan'],431,38,4,29],[['sir'],350,24,1,28],[['vrhnje'],195,2.1,3.5,20,0,1],[['maslac'],717,0.9,0.1,81],[['maslinovo ulje','ulje'],884,0,0,100,0,.92],[['kokosovo ulje'],892,0,0,99],
[['zobene pahuljice','zobene','zob'],372,13,60,7],[['riža','riz'],360,7,79,0.7],[['tjestenina','makaroni','špageti'],360,13,72,1.5],[['kvinoja'],368,14,64,6],[['kus kus','kuskus'],360,12,73,1.6],[['cjelovit kruh','kruh'],250,9,45,3],[['brašno','mekinje'],350,11,72,1.5],[['krumpir'],77,2,17,0.1,150],[['batat','slatki krumpir'],86,1.6,20,0.1,200],
[['slanutak'],164,9,27,2.6],[['crvena leća','leća'],358,24,60,1],[['grah'],127,8.7,23,0.5],[['tofu'],76,8,1.9,4.8],[['humus'],166,8,14,10],[['tahini'],595,17,21,54],
[['orasi','orah'],654,15,14,65],[['bademi','badem'],579,21,22,50],[['kikiriki maslac','maslac od kikirikija'],588,25,20,50],[['čia'],486,17,42,31],[['lanene','laneno'],534,18,29,42],[['suncokret'],584,21,20,51],
[['med'],304,0.3,82,0],[['šećer'],387,0,100,0],[['čokolada'],598,8,46,43],[['kakao'],228,20,58,14],[['proteini','whey','protein u prahu'],400,80,8,6],
[['avokado'],160,2,9,15,150],[['banana'],89,1,23,0.3,120],[['jabuka'],52,0.3,14,0.2,180],[['borovnice','borovnica'],57,0.7,14,0.3],[['jagode','jagoda'],32,0.7,8,0.3],[['naranča'],47,0.9,12,0.1,150],[['limun'],29,1.1,9,0.3,100],[['malina','maline'],52,1.2,12,0.7],
[['pasirana rajčica','pasirani'],24,1.2,5,0.2,0,1.05],[['rajčic'],18,0.9,3.9,0.2,120],[['paprika'],31,1,6,0.3,150],[['krastavac'],15,0.7,3.6,0.1,200],[['mrkva'],41,0.9,10,0.2,80],[['luk'],40,1.1,9,0.1,110],[['češnjak'],149,6.4,33,0.5,5],[['brokula'],34,2.8,7,0.4],[['špinat'],23,2.9,3.6,0.4],[['tikvic'],17,1.2,3.1,0.3,200],[['patlidžan'],25,1,6,0.2,250],[['gljive','šampinjon'],22,3.1,3.3,0.3],[['salata','rukola'],15,1.4,2.9,0.2],[['kukuruz'],86,3.3,19,1.4],[['grašak'],81,5,14,0.4],[['cvjetača'],25,2,5,0.3],[['kupus'],25,1.3,6,0.1]
];
const UNITS={g:1,dag:10,kg:1000,ml:1,dl:100,l:1000,'žlica':15,'žlice':15,'žličica':5,'žličice':5,'šalica':240,'šalice':240,prstohvat:1,'režanj':5,'režnja':5,'režnjeva':5};
function mrParse(txt,serv){
 const out=[],tot={k:0,p:0,c:0,f:0},un=[];
 String(txt).split(/\r?\n/).forEach(raw=>{
  let l=raw.trim();if(!l)return;
  let ov=null;const m0=/=\s*([\d.,]+)\s*kcal/i.exec(l);if(m0){ov=+m0[1].replace(',','.');l=l.replace(m0[0],'').trim()}
  const m=/^([\d.,]+(?:\s*\/\s*\d+)?)\s*(g|dag|kg|ml|dl|l|žlica|žlice|žličica|žličice|šalica|šalice|kom|komad|komada|režanj\w*|prstohvat)?\.?\s+(.+)$/i.exec(l);
  if(!m){un.push(raw);return}
  let q=m[1].replace(/\s/g,'');q=q.includes('/')?q.split('/').reduce((a,b)=>a/b):+q.replace(',','.');
  const u=(m[2]||'kom').toLowerCase().replace(/^komad\w*/,'kom'),name=m[3].trim(),nl=name.toLowerCase();
  let best=null,bl=0;FDB.forEach(e=>e[0].forEach(k=>{if(nl.includes(k)&&k.length>bl){best=e;bl=k.length}}));
  let grams=0;
  if(u==='kom'){grams=q*((best&&best[5])||100)}else{const base=UNITS[u]!=null?UNITS[u]:(u.indexOf('režan')===0?5:1);grams=q*base*(['ml','dl','l','žlica','žlice','žličica','žličice','šalica','šalice'].includes(u)&&best&&best[6]?best[6]:1)}
  let k,p=0,c=0,f=0;
  if(ov!=null){k=ov}else if(best){k=best[1]*grams/100;p=best[2]*grams/100;c=best[3]*grams/100;f=best[4]*grams/100}else{k=0;un.push(name)}
  tot.k+=k;tot.p+=p;tot.c+=c;tot.f+=f;
  out.push({n:name,q:q,u:u,k:Math.round(k),known:ov!=null||!!best});
 });
 const s=Math.max(1,serv||1);
 return {lines:out,unknown:un,perServing:{k:Math.round(tot.k/s),p:Math.round(tot.p/s),c:Math.round(tot.c/s),f:Math.round(tot.f/s)},total:{k:Math.round(tot.k),p:Math.round(tot.p),c:Math.round(tot.c),f:Math.round(tot.f)}};
}
let mr={open:false,id:null,n:'',cat:'Ručak',min:20,serv:2,ing:'',steps:'',tip:'',photo:null},mrOnly=false;
function mrSync(){
 if(!S)return;
 for(let i=RECIPES.length-1;i>=0;i--)if(RECIPES[i].my)RECIPES.splice(i,1);
 (S.myRec||[]).forEach(r=>{
  const pa=mrParse(r.ing,r.serv),s=Math.max(1,r.serv||1);
  RECIPES.unshift({id:r.id,my:1,n:r.n,cat:r.cat,min:r.min,kcal:pa.perServing.k,p:pa.perServing.p,c:pa.perServing.c,f:pa.perServing.f,s:0,
   ing:pa.lines.map(x=>[x.n,+(x.q/s).toFixed(2),x.u==='kom'?'kom':x.u]),steps:String(r.steps||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean),tip:r.tip||L('Tvoj vlastiti recept.','Your own recipe.'),t:[],al:[]});
 });
}
function mrNew(){mr={open:true,id:null,n:'',cat:'Ručak',min:20,serv:2,ing:'',steps:'',tip:'',photo:null};openRec=null;render();scrollTo(0,0)}
function mrEdit(id){const r=(S.myRec||[]).find(x=>x.id===id);if(!r)return;mr=Object.assign({open:true,photo:(S.photos.rec||{})[id]||null},r);openRec=null;render();scrollTo(0,0)}
function mrDel(id){if(!window.__mrd){window.__mrd=1;notify(L('Dodirni opet za brisanje recepta','Tap again to delete the recipe'));return}window.__mrd=0;S.myRec=(S.myRec||[]).filter(x=>x.id!==id);delete S.photos.rec[id];save();openRec=null;render()}
function mrCalc(){
 const pa=mrParse(mr.ing,mr.serv),e=$('#mrprev');if(!e)return;
 e.innerHTML=`<div class="grid" style="margin:6px 0"><div class="stat"><b>${pa.perServing.k}</b><span class="mut">kcal / ${L('porciji','serving')}</span></div><div class="stat"><b>${pa.perServing.p} g</b><span class="mut">${L('bjelančevine','protein')}</span></div><div class="stat"><b>${pa.perServing.c} g</b><span class="mut">${L('ugljikohidrati','carbs')}</span></div><div class="stat"><b>${pa.perServing.f} g</b><span class="mut">${L('masti','fat')}</span></div></div>${pa.lines.map(x=>`<div class="flex" style="padding:3px 0;border-top:1px solid var(--line);font-size:13px"><span style="flex:1">${_eh(x.q)} ${_eh(x.u)} ${_eh(x.n)}</span><b>${x.known?x.k+' kcal':'❓'}</b></div>`).join('')}${pa.unknown.length?`<p class="mut" style="font-size:12px;margin-top:6px">❓ ${L('Nepoznato (dodaj ručno npr. „1 kom nešto = 120 kcal”)','Unknown (add manually e.g. "1 pc something = 120 kcal")')}: ${pa.unknown.map(_eh).join(', ')}</p>`:''}`;
}
function mrSave(){
 if(!mr.n.trim()){notify(L('Upiši naziv recepta','Enter a recipe name'));return}
 if(!mr.ing.trim()){notify(L('Dodaj barem jedan sastojak','Add at least one ingredient'));return}
 S.myRec=S.myRec||[];const id=mr.id||('u'+Date.now()),o={id,n:mr.n.trim().slice(0,60),cat:mr.cat,min:Math.max(1,+mr.min||10),serv:Math.max(1,Math.min(20,+mr.serv||1)),ing:mr.ing,steps:mr.steps,tip:mr.tip};
 const i=S.myRec.findIndex(x=>x.id===id);if(i>-1)S.myRec[i]=o;else S.myRec.push(o);
 if(mr.photo)S.photos.rec[id]=mr.photo;save();mrSync();mr.open=false;openRec=id;scale=1;render();scrollTo(0,0);notify(L('Recept spremljen ✓','Recipe saved ✓'));
}
function mrForm(){
 setTimeout(mrCalc,0);
 const ex=L('150 g pileća prsa\n1 žlica maslinovo ulje\n2 kom jaje\n80 g riža\n1/2 kom avokado','150 g chicken breast\n1 tbsp olive oil\n2 pc egg\n80 g rice\n1/2 pc avocado');
 return `<div class="pad"><button class="btn sec sm" onclick="mr.open=false;render()">← ${L('Recepti','Recipes')}</button><h2 style="margin:12px 0">${mr.id?L('Uredi recept','Edit recipe'):L('Moj novi recept','My new recipe')}</h2>
 <div class="card"><label>${L('Naziv','Name')}</label><input value="${_eh(mr.n)}" oninput="mr.n=this.value" maxlength="60">
 <div class="row"><div><label>${L('Obrok','Meal')}</label><select onchange="mr.cat=this.value">${['Doručak','Ručak','Večera','Međuobrok'].map(c=>`<option value="${c}" ${mr.cat===c?'selected':''}>${L(c,{Doručak:'Breakfast',Ručak:'Lunch',Večera:'Dinner',Međuobrok:'Snack'}[c])}</option>`).join('')}</select></div><div><label>${L('Minuta','Minutes')}</label><input type="number" value="${mr.min}" oninput="mr.min=this.value"></div><div><label>${L('Porcija','Servings')}</label><input type="number" value="${mr.serv}" oninput="mr.serv=this.value;mrCalc()"></div></div>
 <label>${L('Sastojci (jedan po retku: količina, mjera, naziv)','Ingredients (one per line: amount, unit, name)')}</label><textarea rows="6" placeholder="${_eh(ex)}" oninput="mr.ing=this.value;mrCalc()" style="width:100%">${_eh(mr.ing)}</textarea>
 <p class="mut" style="font-size:12px">${L('Mjere: g, dag, kg, ml, dl, l, žlica, žličica, šalica, kom.','Units: g, dag, kg, ml, dl, l, tbsp/žlica, tsp/žličica, cup/šalica, kom.')}</p></div>
 <div class="card"><h3>🔢 ${L('Izračun po porciji','Per-serving calculation')}</h3><div id="mrprev"></div><p class="mut" style="font-size:12px;margin-top:6px">${L('Vrijednosti su okvirne (prosječne tablične vrijednosti sirovih namirnica).','Values are approximate (average table values for raw foods).')}</p></div>
 <div class="card"><label>${L('Priprema (jedan korak po retku)','Method (one step per line)')}</label><textarea rows="5" oninput="mr.steps=this.value" style="width:100%">${_eh(mr.steps)}</textarea><label>${L('Savjet (neobavezno)','Tip (optional)')}</label><input value="${_eh(mr.tip)}" oninput="mr.tip=this.value">
 ${mr.photo?`<img src="${mr.photo}" style="width:100%;border-radius:14px;margin-top:10px;max-height:220px;object-fit:cover">`:''}
 <label class="btn sec sm" style="display:inline-block;margin-top:10px;cursor:pointer;width:auto">📷 ${mr.photo?L('Promijeni fotografiju','Change photo'):L('Dodaj fotografiju jela','Add a photo of the dish')}<input type="file" accept="image/*" style="display:none" onchange="pickPhoto(this,u=>{mr.photo=u;render()})"></label></div>
 <button class="btn" onclick="mrSave()">💾 ${L('Spremi recept','Save recipe')}</button></div>`;
}
(function(){
 const _av=avail;avail=function(r){return r&&r.my?true:_av(r)};
 const _rf=rfilter;rfilter=function(){const l=_rf();return mrOnly?l.filter(r=>r.my):l};
 const _food=food;food=function(){
  mrSync();if(mr.open)return mrForm();
  return _food().replace('<div id="rlist">',`<div class="row" style="margin:6px 0 10px"><button class="btn sm" onclick="mrNew()">➕ ${L('Moj recept','My recipe')}</button><div class="chip ${mrOnly?'on':''}" onclick="mrOnly=!mrOnly;render()">⭐ ${L('Moji recepti','My recipes')} (${(S.myRec||[]).length})</div></div><div id="rlist">`);
 };
 const _rec=recipe;recipe=function(){
  mrSync();const r=RECIPES.find(x=>x.id===openRec);if(!r)return _rec();
  let h=_rec();const f=r.f!=null?r.f:Math.max(0,Math.round((r.kcal-4*r.p-4*(r.c||0))/9));
  h=h.replace(/<div class="stat"><b>\$?[^<]*<\/b><span class="mut">bjelančevine<\/span><\/div><\/div>/,m=>m.replace('</div></div>',`</div><div class="stat"><b>${Math.round((r.c||0)*scale)} g</b><span class="mut">${L('ugljikohidrati','carbs')}</span></div><div class="stat"><b>${Math.round(f*scale)} g</b><span class="mut">${L('masti','fat')}</span></div></div>`));
  if(r.my)h=h.replace(/(<div class="row"><button class="btn sec sm" onclick="addMeal)/,`<div class="row" style="margin-bottom:8px"><button class="btn sec sm" onclick="mrEdit('${r.id}')">✏️ ${L('Uredi','Edit')}</button><button class="btn sec sm" onclick="mrDel('${r.id}')">🗑️ ${L('Obriši','Delete')}</button></div>$1`);
  return h;
 };
})();

/* ---------- 4. PRAĆENJE NAPRETKA: mjere tijela + usporedba fotografija ---------- */
const MEAS=[['w','⚖️','Težina','Weight','kg','#e0457b'],['waist','📏','Struk','Waist','cm','#7048e8'],['hips','🍑','Bokovi','Hips','cm','#d6336c'],['chest','👚','Prsa','Chest','cm','#2f9e77'],['thigh','🦵','Bedro','Thigh','cm','#f08c00'],['arm','💪','Nadlaktica','Upper arm','cm','#1c7ed6']];
let pmk='w',pcmp={a:0,b:-1};
function addMeas(){
 const g=id=>{const e=$('#'+id);return e&&e.value!==''?+e.value.replace(',','.'):null};
 const w=g('mw');if(!w){notify(L('Upiši težinu','Enter your weight'));return}
 const old=S.meas.find(m=>m.d===today())||{};
 const e={d:today(),w,waist:g('mc')||old.waist||null,hips:g('mh')||old.hips||null,chest:g('mb')||old.chest||null,thigh:g('mt')||old.thigh||null,arm:g('ma')||old.arm||null};
 S.meas=S.meas.filter(m=>m.d!==today());S.meas.push(e);S.meas.sort((a,b)=>a.d<b.d?-1:1);S.w=S.meas[S.meas.length-1].w;save();notify(L('Mjerenje spremljeno','Measurement saved'));
}
function pmSet(k){pmk=k;render()}
function pcSet(k,v){pcmp[k]=+v;render()}
function pcSlide(v){const e=$('#pcA');if(e)e.style.clipPath='inset(0 '+(100-v)+'% 0 0)';const l=$('#pcL');if(l)l.style.left=v+'%'}
function pcDel(){const p=S.photos.prog;const i=pcmp.b<0?p.length+pcmp.b:pcmp.b;if(!window.__pcd){window.__pcd=1;notify(L('Dodirni opet za brisanje druge fotografije','Tap again to delete the right-hand photo'));return}window.__pcd=0;p.splice(i,1);pcmp={a:0,b:-1};save();render()}
function progExtra(ms){
 const M=MEAS.find(x=>x[0]===pmk),vals=ms.map(m=>m[pmk]==null?null:m[pmk]),have=S.meas.filter(m=>m[pmk]!=null);
 const first=have.length?have[0][pmk]:null,last=have.length?have[have.length-1][pmk]:null,diff=first!=null&&have.length>1?+(last-first).toFixed(1):null;
 const ph=S.photos.prog||[];
 const ia=Math.min(Math.max(0,pcmp.a),Math.max(0,ph.length-1)),ib=pcmp.b<0?Math.max(0,ph.length+pcmp.b):Math.min(pcmp.b,ph.length-1);
 return `<div class="card"><h3>📐 ${L('Mjere tijela','Body measurements')}</h3><div class="chips" style="flex-wrap:wrap;overflow:visible;margin:8px 0">${MEAS.map(x=>`<div class="chip ${pmk===x[0]?'on':''}" onclick="pmSet('${x[0]}')">${x[1]} ${L(x[2],x[3])}</div>`).join('')}</div>
 ${have.length>1?chart(vals,M[5],M[4]):`<p class="mut">${L('Unesi barem dva mjerenja za grafikon.','Enter at least two measurements for the chart.')}</p>`}
 ${diff!=null?`<div class="grid" style="margin-top:8px"><div class="stat"><span class="mut">${L('Početak','Start')}</span><b>${first} ${M[4]}</b></div><div class="stat"><span class="mut">${L('Sada','Now')} (${diff>0?'+':''}${diff})</span><b>${last} ${M[4]}</b></div></div>`:''}</div>`
 +`<div class="card"><h3>${L('Novo mjerenje','New measurement')}</h3><div class="row"><div><label>${L('Težina (kg)','Weight (kg)')}</label><input id="mw" type="number" step="0.1" value="${S.w}"></div><div><label>${L('Struk (cm)','Waist (cm)')}</label><input id="mc" type="number" step="0.5"></div></div>
 <div class="row"><div><label>${L('Bokovi (cm)','Hips (cm)')}</label><input id="mh" type="number" step="0.5"></div><div><label>${L('Prsa (cm)','Chest (cm)')}</label><input id="mb" type="number" step="0.5"></div></div>
 <div class="row"><div><label>${L('Bedro (cm)','Thigh (cm)')}</label><input id="mt" type="number" step="0.5"></div><div><label>${L('Nadlaktica (cm)','Upper arm (cm)')}</label><input id="ma" type="number" step="0.5"></div></div>
 <button class="btn sm" style="margin-top:8px" onclick="addMeas()">${L('Spremi','Save')}</button></div>`
 +(ph.length>=2?`<div class="card"><h3>🔍 ${L('Usporedba fotografija','Photo comparison')}</h3>
 <div class="row"><div><label>${L('Lijevo (prije)','Left (before)')}</label><select onchange="pcSet('a',this.value)">${ph.map((p,i)=>`<option value="${i}" ${i===ia?'selected':''}>${p.d}</option>`).join('')}</select></div><div><label>${L('Desno (poslije)','Right (after)')}</label><select onchange="pcSet('b',this.value)">${ph.map((p,i)=>`<option value="${i}" ${i===ib?'selected':''}>${p.d}</option>`).join('')}</select></div></div>
 <div style="position:relative;margin-top:10px;border-radius:14px;overflow:hidden;line-height:0"><img src="${ph[ib].u}" style="width:100%;display:block"><img id="pcA" src="${ph[ia].u}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;clip-path:inset(0 50% 0 0)"><div id="pcL" style="position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;box-shadow:0 0 6px rgba(0,0,0,.5)"></div></div>
 <input type="range" min="0" max="100" value="50" oninput="pcSlide(this.value)" style="width:100%;margin-top:8px"><p class="mut" style="font-size:12px">${ph[ia].d} ⟷ ${ph[ib].d}</p>
 <button class="btn sec sm" onclick="pcDel()">🗑️ ${L('Obriši desnu fotografiju','Delete right-hand photo')}</button></div>`:'');
}
(function(){
 const _p=prog;
 prog=function(){
  let h=_p();const ms=S.meas.filter(m=>dayDiff(m.d,today())<=prange);
  h=h.replace(/<div class="card"><h3>Novo mjerenje<\/h3>[\s\S]*?onclick="addMeas\(\)">Spremi<\/button><\/div>/,'');
  h=h.replace(/<div class="card"><h3>📏 Opseg struka<\/h3>[\s\S]*?<\/div>\s*(?=<div class="card"><h3>👟)/,progExtra(ms));
  return h;
 };
})();

/* ---------- 5. SAT: puls uživo (Web Bluetooth) + uvoz TCX/GPX ---------- */
let hrs={dev:null,on:false,cur:0,smp:[],t0:0};
function hrDraw(){const e=$('#hrlive');if(!e)return;const a=hrs.smp.length?Math.round(hrs.smp.reduce((x,y)=>x+y,0)/hrs.smp.length):0,mx=hrs.smp.length?Math.max(...hrs.smp):0,mxhr=220-(S.age||30),z=Math.round(hrs.cur/mxhr*100);
 e.innerHTML=`<div style="text-align:center"><div style="font-size:52px;font-weight:800;color:#e0457b">❤️ ${hrs.cur||'—'}</div><div class="mut">bpm · ${L('prosjek','avg')} ${a} · max ${mx} · ${z||0}% ${L('maks. pulsa','of max HR')}</div></div>`}
async function hrConnect(){
 if(!navigator.bluetooth){notify(L('Web Bluetooth nije dostupan. Koristi Chrome na Androidu ili računalu (iPhone ga ne podržava).','Web Bluetooth is not available. Use Chrome on Android or desktop (iPhone does not support it).'));return}
 try{
  const dev=await navigator.bluetooth.requestDevice({filters:[{services:['heart_rate']}]});
  const srv=await dev.gatt.connect(),svc=await srv.getPrimaryService('heart_rate'),ch=await svc.getCharacteristic('heart_rate_measurement');
  await ch.startNotifications();hrs={dev,on:true,cur:0,smp:[],t0:Date.now()};
  ch.addEventListener('characteristicvaluechanged',e=>{const v=e.target.value,fl=v.getUint8(0),b=(fl&1)?v.getUint16(1,true):v.getUint8(1);hrs.cur=b;if(b>30&&b<230)hrs.smp.push(b);hrDraw()});
  dev.addEventListener('gattserverdisconnected',()=>{hrs.on=false;notify(L('Uređaj se odspojio','Device disconnected'))});
  render();hrDraw();
 }catch(e){if(e&&e.name!=='NotFoundError')notify(L('Povezivanje nije uspjelo','Could not connect'))}
}
function hrStop(save_){
 try{if(hrs.dev&&hrs.dev.gatt.connected)hrs.dev.gatt.disconnect()}catch(e){}
 if(save_&&hrs.smp.length>5){const sec=Math.round((Date.now()-hrs.t0)/1000),a=Math.round(hrs.smp.reduce((x,y)=>x+y,0)/hrs.smp.length);S.hrSess=S.hrSess||[];S.hrSess.push({d:today(),avg:a,max:Math.max(...hrs.smp),min:Math.min(...hrs.smp),sec});S.hrSess=S.hrSess.slice(-30);save();notify(L('Sesija pulsa spremljena','Heart-rate session saved'))}
 hrs.on=false;render();
}
function _day(k){if(!S.days)S.days={};if(!S.days[k])S.days[k]={steps:0,stress:null,log:[],kcal:0};return S.days[k]}
function actImport(inp){
 const f=inp.files&&inp.files[0];if(!f)return;const r=new FileReader();
 r.onload=()=>{
  try{
   const x=new DOMParser().parseFromString(r.result,'text/xml');if(x.querySelector('parsererror'))throw 0;
   let name='',sec=0,m=0,kc=0,ahr=0,date=today();
   if(x.querySelector('TrainingCenterDatabase')){
    const a=x.querySelector('Activity');name=a?(a.getAttribute('Sport')||'Workout'):'Workout';
    const idn=x.querySelector('Activity > Id');if(idn&&/^\d{4}-\d\d-\d\d/.test(idn.textContent))date=idn.textContent.slice(0,10);
    let hn=0;x.querySelectorAll('Lap').forEach(l=>{sec+=+((l.querySelector('TotalTimeSeconds')||{}).textContent||0);m+=+((l.querySelector('DistanceMeters')||{}).textContent||0);kc+=+((l.querySelector('Calories')||{}).textContent||0);const h=l.querySelector('AverageHeartRateBpm > Value');if(h){ahr+=+h.textContent;hn++}});if(hn)ahr=Math.round(ahr/hn);
   }else if(x.querySelector('gpx')){
    const pts=[...x.querySelectorAll('trkpt')],rad=d=>d*Math.PI/180;name=(x.querySelector('trk > type')||x.querySelector('trk > name')||{textContent:'GPX'}).textContent;
    for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i],la=+a.getAttribute('lat'),lo=+a.getAttribute('lon'),lb=+b.getAttribute('lat'),lc=+b.getAttribute('lon');const h=Math.sin(rad(lb-la)/2)**2+Math.cos(rad(la))*Math.cos(rad(lb))*Math.sin(rad(lc-lo)/2)**2;m+=2*6371000*Math.asin(Math.sqrt(h))}
    const ts=pts.map(p=>p.querySelector('time')).filter(Boolean).map(t=>new Date(t.textContent).getTime());if(ts.length>1){sec=Math.round((ts[ts.length-1]-ts[0])/1000);date=new Date(ts[0]).toISOString().slice(0,10)}
   }else throw 0;
   if(!(sec>0||m>0))throw 0;
   const d=_day(date),km=(m/1000).toFixed(1),walk=/walk|run|hik|foot|trk|GPX|Other/i.test(name)||!name;
   d.log.push({id:'imp',n:L('Uvoz: ','Import: ')+name+(m?' · '+km+' km':'')+(ahr?' · ❤️'+ahr:''),t:fmt(Math.round(sec)),auto:1});
   d.kcal=(d.kcal||0)+(kc||Math.round(sec/60*6));if(walk&&m)d.steps=(d.steps||0)+Math.round(m/0.75);
   save();notify(L('Trening uvezen','Workout imported')+' ✓ ('+date+')');
  }catch(e){notify(L('Datoteka nije prepoznata (podržani: .tcx, .gpx)','File not recognised (supported: .tcx, .gpx)'))}
 };r.readAsText(f);inp.value='';
}
(function(){
 const sp=syncPage;
 syncPage=function(){
  const bt=!!navigator.bluetooth,ss=S.hrSess||[];
  const extra=`<div class="card"><h3>💓 ${L('Puls uživo (Bluetooth)','Live heart rate (Bluetooth)')}</h3>
  <p class="mut" style="font-size:13px;margin:4px 0 8px">${L('Radi s pulsnim trakama i satovima koji emitiraju puls (Polar, Garmin „Broadcast HR”, Wahoo, Amazfit…). Samo Chrome na Androidu i računalu.','Works with heart-rate straps and watches that broadcast heart rate (Polar, Garmin "Broadcast HR", Wahoo, Amazfit…). Chrome on Android and desktop only.')}</p>
  ${hrs.on?`<div id="hrlive"></div><button class="btn" style="margin-top:8px" onclick="hrStop(true)">⏹ ${L('Završi i spremi','Stop and save')}</button>`:`<button class="btn" onclick="hrConnect()" ${bt?'':'disabled style="opacity:.5"'}>🔗 ${L('Poveži uređaj','Connect device')}</button>${bt?'':`<p class="mut" style="font-size:12px;margin-top:6px">${L('Ovaj preglednik ne podržava Web Bluetooth.','This browser does not support Web Bluetooth.')}</p>`}`}
  ${ss.length?`<details style="margin-top:10px"><summary style="cursor:pointer"><b>${L('Prošle sesije','Past sessions')}</b></summary>${ss.slice(-6).reverse().map(s=>`<div class="flex" style="padding:6px 0;border-top:1px solid var(--line)"><span style="flex:1">${s.d} · ${Math.round(s.sec/60)} min</span><b>Ø ${s.avg}</b><span class="mut">max ${s.max}</span></div>`).join('')}</details>`:''}</div>
  <div class="card"><h3>📥 ${L('Uvoz treninga sa sata (.tcx / .gpx)','Import a workout from your watch (.tcx / .gpx)')}</h3><p class="mut" style="font-size:13px;margin:4px 0 8px">${L('Garmin Connect, Fitbit, Strava, Polar i Apple Fitness (preko izvoza) daju TCX ili GPX datoteke. Trening se upisuje u dnevnik na dan aktivnosti.','Garmin Connect, Fitbit, Strava, Polar and Apple Fitness (via export) provide TCX or GPX files. The workout is added to the diary on the day of the activity.')}</p>
  <label class="btn sec sm" style="display:inline-block;cursor:pointer;width:auto">📂 ${L('Odaberi datoteku','Choose file')}<input type="file" accept=".tcx,.gpx,application/gpx+xml,text/xml" style="display:none" onchange="actImport(this)"></label></div>
  <div class="card" style="background:#fff9db"><b>🔌 ${L('Izravna veza sa servisima','Direct connections to services')}</b><p class="mut" style="font-size:13px;margin-top:4px">${L('Apple Zdravlje i Health Connect (Android) dostupni su samo mobilnim aplikacijama; Garmin, Fitbit i Google zahtijevaju registrirani razvojni račun i poslužitelj za prijavu. Do tada koristi puls uživo, uvoz TCX/GPX i uvoz CSV ispod.','Apple Health and Health Connect (Android) are only available to mobile apps; Garmin, Fitbit and Google require a registered developer account and a sign-in server. Until then use live heart rate, TCX/GPX import and the CSV import below.')}</p></div>`;
  return sp().replace(/<div class="card"><h3>📥 Uvoz iz datoteke \(CSV\)/,extra+'<div class="card"><h3>📥 Uvoz iz datoteke (CSV)');
 };
})();

/* ---------- 6. PRIJATELJICE: kodovi, ljestvica i zajednički cilj ---------- */
function myCode(){
 const o={n:String(S.name||'Fitža').split(' ')[0].slice(0,18),e:'🌸',s:wk(0).steps,w:wk(0).tr,k:streak(),t:Date.now()};
 return 'FZ1.'+btoa(unescape(encodeURIComponent(JSON.stringify(o))));
}
function parseCode(c){
 try{
  c=String(c).trim();if(c.indexOf('FZ1.')!==0)return null;
  const o=JSON.parse(decodeURIComponent(escape(atob(c.slice(4)))));
  const n=String(o.n||'').replace(/[<>&"'`]/g,'').trim().slice(0,18);if(!n)return null;
  const num=v=>Math.max(0,Math.min(1e7,Math.round(+v||0)));
  return {n,e:'🌸',s:num(o.s),w:num(o.w),k:num(o.k),t:num(o.t)};
 }catch(e){return null}
}
function codeAdd(){
 const e=$('#fcode'),f=parseCode(e?e.value:'');if(!f){notify(L('Kod nije ispravan','Invalid code'));return}
 S.codes=S.codes||{};const up=!!S.codes[f.n];S.codes[f.n]=f;save();notify(up?L(f.n+' – podaci osvježeni','Updated '+f.n):L(f.n+' dodana u ljestvicu','Added '+f.n));
}
function codeDel(n){if(S.codes)delete S.codes[n];save();render()}
function codeShare(){const c=myCode(),t=L('Moj Fitža kod (zalijepi ga u Zajednica → Prijateljice): ','My Fitža code (paste it in Community → Friends): ')+c;if(navigator.share){navigator.share({text:t}).catch(()=>{})}else copyText(c)}
(function(){
 const cm=comm;
 comm=function(){
  const me={n:L('Ti','You'),s:wk(0).steps,w:wk(0).tr,k:streak(),me:1},fr=Object.values(S.codes||{}),all=[me].concat(fr).sort((a,b)=>b.w*1000+b.s/100-(a.w*1000+a.s/100)),goal=3*all.length,sum=all.reduce((a,r)=>a+Math.min(r.w,7),0),days=t=>Math.max(0,Math.round((Date.now()-t)/864e5));
  const card=`<div class="card"><h3>🏆 ${L('Prave prijateljice (kodovi)','Real friends (codes)')}</h3>
  <p class="mut" style="font-size:13px;margin:4px 0 8px">${L('Razmijeni kodove s prijateljicama (poruka, e-pošta). Svaka zalijepi tvoj kod, ti njezin. Podaci se osvježe kad ponovno razmijenite kod – bez poslužitelja nema automatskog osvježavanja.','Exchange codes with friends (message, email). Each pastes your code, you paste hers. Data updates when you swap codes again – without a server there is no automatic refresh.')}</p>
  <div class="row"><button class="btn sm" onclick="codeShare()">📤 ${L('Podijeli moj kod','Share my code')}</button><button class="btn sec sm" onclick="copyText(myCode())">📋 ${L('Kopiraj','Copy')}</button></div>
  <div class="row" style="margin-top:8px"><input id="fcode" placeholder="FZ1.…" style="flex:1"><button class="btn sm" style="width:auto" onclick="codeAdd()">➕</button></div>
  <h3 style="margin-top:14px">${L('Ljestvica tjedna (treninzi, koraci)','Weekly board (workouts, steps)')}</h3>
  ${all.map((r,i)=>`<div class="flex" style="padding:8px 0;border-top:1px solid var(--line);${r.me?'font-weight:700;color:#d6336c':''}"><span style="width:22px">${i+1}.</span><span style="font-size:20px">${r.me?'⭐':'🌸'}</span><span style="flex:1">${_eh(r.n)}${r.t?`<br><span class="mut" style="font-size:11px;font-weight:400">${L('osvježeno prije '+days(r.t)+' d','updated '+days(r.t)+' d ago')} · 🔥${r.k}</span>`:''}</span><span style="text-align:right">${r.w} ${L('tr.','wk.')}<br><span class="mut" style="font-size:11px">${r.s.toLocaleString('hr')}</span></span>${r.me?'':`<span class="mut" style="cursor:pointer;padding-left:8px" onclick="codeDel('${_eh(r.n).replace(/'/g,'')}')">✕</span>`}</div>`).join('')}
  ${all.length>1?`<h3 style="margin-top:14px">🎯 ${L('Zajednički izazov: 3 treninga svaka ovaj tjedan','Team challenge: 3 workouts each this week')}</h3><div class="bar"><i style="width:${Math.min(100,Math.round(sum/goal*100))}%"></i></div><p class="mut" style="font-size:12px;margin-top:4px">${sum}/${goal} ${L('treninga','workouts')}</p>`:''}</div>`;
  return cm().replace(/(<h2 style="margin-top:12px">Zajednica 👭<\/h2>)/,'$1'+card);
 };
})();

/* ---------- sastavljanje: render omotač + pwa stranica ---------- */
(function(){
 const _r=render;render=function(){mrSync();return _r.apply(this,arguments)};
})();
Object.assign(EXACT,{'Instaliraj aplikaciju':'Install app'});
