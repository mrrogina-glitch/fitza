
/* ===================== DIO 5c: POZIVNICE (pozovi prijateljice) ===================== */
function refFromHash(){try{const h=(location.hash||'');const m=/^#poziv-([A-Za-z0-9-]{3,20})$/.exec(h);if(m){ST.ref=m[1].toUpperCase();stSave()}}catch(e){}}
function refBanner(){return ST.ref?`<div class="pad" style="padding-bottom:0"><div class="card" style="background:var(--p2)"><b>💌 ${L('Pozvala te je prijateljica!','A friend invited you!')}</b><br><span class="mut">${L('Kod pozivnice','Invite code')}: ${ST.ref}</span></div></div>`:''}
function myCode(){
 if(!S.code){const s=(S.name||'FIT').replace(/[^A-Za-zČĆŠŽĐčćšžđ]/g,'').toUpperCase().replace(/Č|Ć/g,'C').replace(/Š/g,'S').replace(/Ž/g,'Z').replace(/Đ/g,'D').slice(0,4)||'FIT';let h=0;(S.mail||s).split('').forEach(c=>{h=(h*31+c.charCodeAt(0))%9000});S.code=s+'-'+(1000+h);save()}
 return S.code;
}
function inviteBase(){return (S.inviteBase||'https://dada.vip-grupa.eu').replace(/\/+$/,'')}
function inviteLink(){return inviteBase()+'/#poziv-'+myCode()}
function inviteText(){return ST.lang==='en'
 ?`Hi! I use Fitža – workouts at home, at the gym or outdoors, plus healthy recipes and progress tracking. Try it for free: ${inviteLink()} (invite code ${myCode()})`
 :`Bok! Koristim Fitžu – vježbanje kod kuće, u teretani ili u prirodi, uz zdrave recepte i praćenje napretka. Isprobaj besplatno: ${inviteLink()} (kod pozivnice ${myCode()})`}
function setInviteBase(){const v=$('#ib').value.trim();if(!/^https?:\/\/[^\s]+$/.test(v)){notify(L('Upiši adresu koja počinje s https://','Enter an address starting with https://'));return}S.inviteBase=v;save();render()}
function addInvite(){
 const n=$('#in').value.trim(),e=$('#ie').value.trim();
 if(!/\S+@\S+\.\S+/.test(e)){notify(L('Upiši ispravan e-mail','Enter a valid email'));return}
 S.invites=S.invites||[];S.invites.unshift({n:n||e,e,t:new Date().toLocaleDateString('hr')});S.invited=(S.invited||0)+1;save();notify(L('Pozivnica pripremljena','Invitation prepared'));
}
function delInvite(i){S.invites.splice(i,1);save();render()}
function enc(s){return encodeURIComponent(s)}
function invitePage(){
 const code=myCode(),txt=inviteText(),link=inviteLink(),inv=S.invites||[],subj=L('Pozivnica za Fitžu','Invitation to Fitža');
 const A=(h,l)=>`<a class="btn sec sm" style="text-decoration:none;display:inline-block;text-align:center" href="${h}" target="_blank" rel="noopener">${l}</a>`;
 return `<div class="pad">${back}<h2 style="margin-top:12px">💌 ${L('Pozovi prijateljice','Invite friends')}</h2>
 <div class="card premcard"><span class="mut">${L('Tvoj kod pozivnice','Your invite code')}</span><div class="big" style="color:#d6336c">${code}</div><div class="row"><button class="btn sm" onclick="copyText('${link}')">🔗 ${L('Kopiraj link','Copy link')}</button><button class="btn sec sm" onclick="copyText(inviteText())">📋 ${L('Kopiraj poruku','Copy message')}</button></div></div>${shareArea()}
 <div class="card"><h3>${L('Podijeli putem','Share via')}</h3><div class="row" style="flex-wrap:wrap;margin-top:8px">${A('https://wa.me/?text='+enc(txt),'WhatsApp')}${A('https://t.me/share/url?url='+enc(link)+'&text='+enc(txt),'Telegram')}${A('mailto:?subject='+enc(subj)+'&body='+enc(txt),'E-mail')}${A('sms:?&body='+enc(txt),'SMS')}</div><p class="mut" style="font-size:12px;margin-top:8px">${L('Neke veze (e-mail, SMS) ovise o uređaju i pregledniku. Ako se ne otvore, upotrijebi "Kopiraj poruku".','Some links (email, SMS) depend on your device and browser. If they do not open, use "Copy message".')}</p></div>
 <div class="card"><h3>${L('Poruka koju će primiti','Message they will get')}</h3><p style="font-size:14px;margin-top:6px">${txt}</p></div>
 <div class="card"><h3>✉️ ${L('Pripremi pozivnicu za e-mail','Prepare an email invitation')}</h3><div class="row"><div><label>${L('Ime','Name')}</label><input id="in" placeholder="Marija"></div><div><label>E-mail</label><input id="ie" type="email" placeholder="marija@primjer.hr"></div></div><button class="btn sm" style="margin-top:8px" onclick="addInvite()">${L('Dodaj na popis','Add to list')}</button>
 ${inv.map((x,i)=>`<div class="flex" style="padding:8px 0;border-top:1px solid var(--line);margin-top:8px"><span style="flex:1"><b>${x.n}</b><br><span class="mut">${x.e} · ${x.t}</span></span>${A('mailto:'+x.e+'?subject='+enc(subj)+'&body='+enc(txt),'✉️')}<span class="mut" style="cursor:pointer" onclick="delInvite(${i})" aria-label="delete">✕</span></div>`).join('')}
 <p class="mut" style="font-size:12px;margin-top:8px">${L('Demo: aplikacija sama ne šalje e-poštu – tipka ✉️ otvara tvoj e-mail program. Automatsko slanje zahtijeva poslužitelj.','Demo: the app does not send email by itself – the ✉️ button opens your email app. Automatic sending requires a server.')}</p></div>
 <div class="card"><h3>🏆 ${L('Tvoje pozivnice','Your invitations')}</h3><p>${L('Pozvano','Invited')}: <b>${S.invited||0}</b></p><div class="bar" style="margin-top:6px"><i style="width:${Math.min(100,(S.invited||0)/3*100)}%"></i></div><p class="mut" style="font-size:12px;margin-top:6px">${L('Ideja za pravu verziju: nagrada (npr. mjesec Premiuma) kad se tri prijateljice registriraju s tvojim kodom. To zahtijeva poslužitelj koji bilježi registracije.','Idea for the real version: a reward (e.g. a month of Premium) when three friends sign up with your code. This needs a server that records sign-ups.')}</p></div>
 <div class="card"><h3>🔗 ${L('Adresa aplikacije','App address')}</h3><input id="ib" value="${inviteBase()}"><button class="btn sec sm" style="margin-top:8px" onclick="setInviteBase()">${L('Spremi adresu','Save address')}</button><p class="mut" style="font-size:12px;margin-top:6px">${L('Upiši javnu adresu na kojoj je aplikacija postavljena. Kad prijateljica otvori link, kod pozivnice se automatski upisuje.','Enter the public address where the app is hosted. When a friend opens the link the invite code is filled in automatically.')}</p></div></div>`;
}
refFromHash();
