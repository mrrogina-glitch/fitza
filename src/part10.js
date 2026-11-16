/* ===================== DIO 10: TRAJNA PRIJAVA, PRIJAVA POSTOJEĆEG RAČUNA, SIGURNOSNA KOPIJA ===================== */
function _accs(){return store.get('fitza_accs')||{}}
function _setAccs(a){store.set('fitza_accs',a)}
async function _hash(p,salt){const b=new TextEncoder().encode(salt+':'+p),h=await crypto.subtle.digest('SHA-256',b);return Array.from(new Uint8Array(h)).map(x=>x.toString(16).padStart(2,'0')).join('')}
function _persist(){try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}}
function _session(on){try{on?sessionStorage.setItem('fz_s','1'):sessionStorage.removeItem('fz_s')}catch(e){}}
function _park(){ // pohrani trenutni račun među spremljene i završi sesiju
 if(!S)return;const k=String(S.mail||'').trim().toLowerCase()||('demo-'+Date.now()),a=_accs();a[k]=S;_setAccs(a);
 S=null;mem={};store.set('fitza',null);_session(false);
}
// račun bez „zapamti me” završava s kraj sesije preglednika
if(S&&S.remember===false&&!(function(){try{return sessionStorage.getItem('fz_s')}catch(e){return 1}})()){_park()}
if(S)_persist();

// ---- registracija: lozinka se pohranjuje samo kao hash, uz opciju „ostani prijavljena” ----
const _reg0=register;
register=async function(){
 const v=id=>($('#'+id)||{value:''}).value.trim();
 if(!v('ime')||!/\S+@\S+\.\S+/.test(v('mail'))){$('#err').textContent=L('Upiši ime i ispravan e-mail.','Enter a name and a valid email.');return}
 if(v('pass').length<6){$('#err').textContent=L('Lozinka mora imati barem 6 znakova.','Password must have at least 6 characters.');return}
 const mail=v('mail').toLowerCase();
 if(_accs()[mail]){$('#err').textContent=L('Račun s ovom e-poštom već postoji na ovom uređaju – prijavi se.','An account with this email already exists on this device – sign in.');return}
 const keep=!($('#rem')&&!$('#rem').checked),salt=Math.random().toString(36).slice(2),ph=crypto&&crypto.subtle?await _hash(v('pass'),salt):'';
 makeAccount({name:v('ime'),mail:v('mail'),age:+v('dob'),h:+v('vis'),w:+v('tez'),goal:v('cilj'),lvl:v('lvl'),pref:v('gdje'),provider:'email',ref:v('ref')});
 if(S){S.ph=ph;S.salt=salt;S.remember=keep;save()}
 _session(true);_persist();
};
const _mk0=makeAccount;
makeAccount=function(o){_mk0(o);if(S){S.remember=S.remember!==false;_session(true);_persist()}};

// ---- prijava postojećeg računa ----
let lg={open:false};
function loginOpen(v){lg.open=v;render();scrollTo(0,0)}
async function loginDo(){
 const mail=($('#lmail').value||'').trim().toLowerCase(),pass=$('#lpass').value||'',a=_accs()[mail],e=$('#lerr');
 if(!a){e.textContent=L('Račun nije pronađen na ovom uređaju.','Account not found on this device.');return}
 if(a.ph){const h=await _hash(pass,a.salt);if(h!==a.ph){e.textContent=L('Pogrešna lozinka.','Wrong password.');return}}
 const k=($('#lrem')&&!$('#lrem').checked)?false:true;
 S=a;S.remember=k;loc=S.pref||'Kod kuće';const all=_accs();delete all[mail];_setAccs(all);save();_session(true);_persist();lg.open=false;tab='home';render();
}
function loginForm(){
 const ac=Object.values(_accs()).filter(x=>x.mail);
 return `<div class="card"><h3>🔑 ${L('Prijava','Sign in')}</h3><label>E-mail</label><input id="lmail" type="email" value="${ac.length===1?_eh(ac[0].mail):''}" autocomplete="email"><label>${L('Lozinka','Password')}</label><input id="lpass" type="password" autocomplete="current-password">
 <label style="display:flex;gap:10px;align-items:center;color:var(--ink);font-size:14px"><input id="lrem" type="checkbox" checked style="width:auto"> ${L('Ostani prijavljena na ovom uređaju','Keep me signed in on this device')}</label>
 <p class="mut" id="lerr" style="color:#c92a2a;margin:8px 0"></p><button class="btn" onclick="loginDo()">${L('Prijavi se','Sign in')}</button>
 <button class="link" onclick="loginOpen(false)">← ${L('Natrag','Back')}</button></div>`;
}
(function(){
 const _a=auth;
 auth=function(){
  if(typeof socP!=='undefined'&&socP)return _a();
  let h=_a();const has=Object.keys(_accs()).length>0;
  if(lg.open)return h.replace(/<div class="pad">/,'<div class="pad">'+loginForm()).replace(/<button class="btn" onclick="skip\(\)">/,'<button class="btn sec" onclick="skip()">');
  h=h.replace(/(<div class="pad">)/,`$1${has?`<button class="btn" onclick="loginOpen(true)">🔑 ${L('Već imaš račun? Prijavi se','Already have an account? Sign in')}</button>`:''}<label class="btn sec sm" style="display:inline-block;cursor:pointer;width:auto;margin:6px 0">📂 ${L('Vrati račun iz sigurnosne kopije','Restore account from backup')}<input type="file" accept=".json,application/json" style="display:none" onchange="accImport(this)"></label>`);
  h=h.replace(/(<button class="btn" onclick="register\(\)">)/,`<label style="display:flex;gap:10px;align-items:center;color:var(--ink);font-size:14px;margin:8px 0"><input id="rem" type="checkbox" checked style="width:auto"> ${L('Ostani prijavljena na ovom uređaju (ne moraš se ponovno registrirati)','Keep me signed in on this device (no need to register again)')}</label>$1`);
  return h;
 };
})();

// ---- odjava, brisanje, sigurnosna kopija ----
function accLogout(){_park();tab='home';openRec=null;openWo=null;render();scrollTo(0,0)}
function accDelete(){if(!window.__ad){window.__ad=1;notify(L('Dodirni opet za trajno brisanje računa i podataka','Tap again to permanently delete the account and data'));return}window.__ad=0;const k=String(S.mail||'').toLowerCase(),a=_accs();delete a[k];_setAccs(a);S=null;mem={};store.set('fitza',null);_session(false);tab='home';render()}
function accRemember(on){S.remember=!!on;save();_session(true);render()}
function accExport(){
 try{
  const o={app:'fitza',v:1,t:Date.now(),S:S},b=new Blob([JSON.stringify(o)],{type:'application/json'}),a=document.createElement('a');
  a.href=URL.createObjectURL(b);a.download='fitza-racun-'+today()+'.json';document.body.appendChild(a);a.click();setTimeout(()=>a.remove(),500);
  notify(L('Sigurnosna kopija preuzeta','Backup downloaded'));
 }catch(e){notify(L('Preuzimanje nije moguće u ovom pregledniku','Download is not available in this browser'))}
}
function accImport(inp){
 const f=inp.files&&inp.files[0];if(!f)return;const r=new FileReader();
 r.onload=()=>{
  try{
   const o=JSON.parse(r.result);if(!o||o.app!=='fitza'||!o.S||typeof o.S!=='object'||!o.S.name||!o.S.days)throw 0;
   S=o.S;S.remember=true;loc=S.pref||'Kod kuće';save();_session(true);_persist();tab='home';render();notify(L('Račun vraćen ✓','Account restored ✓'));
  }catch(e){notify(L('Datoteka nije ispravna sigurnosna kopija','Not a valid backup file'))}
 };r.readAsText(f);inp.value='';
}
function accTail(){
 return `<div class="card"><h3>🔐 ${L('Račun i prijava','Account and sign-in')}</h3>
 <label style="display:flex;gap:10px;align-items:center;color:var(--ink);font-size:14px;margin:8px 0"><input type="checkbox" ${S.remember===false?'':'checked'} style="width:auto" onchange="accRemember(this.checked)"> ${L('Ostani prijavljena na ovom uređaju','Keep me signed in on this device')}</label>
 <p class="mut" style="font-size:12px;margin-bottom:10px">${L('Podaci su spremljeni samo na ovom uređaju. Za drugi mobitel ili računalo preuzmi sigurnosnu kopiju i vrati je na novom uređaju – ne moraš ponovno upisivati podatke.','Data is stored on this device only. For another phone or computer download a backup and restore it there – no need to enter your details again.')}</p>
 <div class="row"><button class="btn sec sm" onclick="accExport()">⬇️ ${L('Sigurnosna kopija','Backup')}</button><label class="btn sec sm" style="cursor:pointer;text-align:center">📂 ${L('Vrati iz kopije','Restore')}<input type="file" accept=".json,application/json" style="display:none" onchange="accImport(this)"></label></div></div>
 <button class="btn sec" onclick="accLogout()">🚪 ${L('Odjava (podaci ostaju na uređaju)','Sign out (data stays on this device)')}</button>
 <button class="link" style="color:#c92a2a;margin-top:8px" onclick="accDelete()">🗑️ ${L('Trajno obriši račun i podatke','Permanently delete account and data')}</button>`;
}
