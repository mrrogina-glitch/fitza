
/* ===================== DIO 5b: REGISTRACIJA GOOGLE/APPLE + MAIL DOBRODOŠLICE ===================== */
let socP=null,openMail=null;
function socialBtns(){return `<div class="row" style="margin-top:10px"><button class="btn sec" onclick="socStart('google')" aria-label="Google">🔵 ${L('Nastavi s Google','Continue with Google')}</button><button class="btn sec" onclick="socStart('apple')" aria-label="Apple">⬛ ${L('Nastavi s Apple','Continue with Apple')}</button></div>`}
function socStart(p){socP=p;render();scrollTo(0,0)}
function socCancel(){socP=null;render()}
function socialScreen(){
 const g=socP==='google',nm=g?'Google':'Apple';
 return `<div class="hero"><h1>Fitža 🌸</h1><p>${L('Registracija putem računa','Sign up with your')} ${nm}</p></div><div class="pad">
 <div class="card" style="background:#fff9db;color:#2b2433"><b>ℹ️ Demo</b><p style="font-size:13px;margin-top:4px">${L('Prijava nije stvarna: upiši ime i e-mail računa. U pravoj aplikaciji otvara se službeni prozor za prijavu ('+nm+' OAuth) i aplikacija ne vidi tvoju lozinku.','Sign-in is simulated: enter the name and email of the account. In the real app the official '+nm+' sign-in (OAuth) opens and the app never sees your password.')}</p></div>
 <label>${L('Ime','Name')}</label><input id="sn" placeholder="Ana">
 <label>E-mail</label><input id="se" type="email" placeholder="${g?'ana@gmail.com':'ana@icloud.com'}">
 <div class="row"><div><label>${L('Dob','Age')}</label><input id="sd" type="number" value="30"></div><div><label>${L('Visina (cm)','Height (cm)')}</label><input id="sv" type="number" value="168"></div><div><label>${L('Težina (kg)','Weight (kg)')}</label><input id="st" type="number" value="65"></div></div>
 <label>${L('Cilj','Goal')}</label><select id="sc"><option value="Gubitak kilograma">Gubitak kilograma</option><option value="Jačanje i tonus">Jačanje i tonus</option><option value="Opuštanje / stres">Opuštanje / stres</option><option value="Kondicija">Kondicija</option></select>
 <label>${L('Kod pozivnice (neobavezno)','Invite code (optional)')}</label><input id="sref" value="${ST.ref||''}">
 <label>${L('Razina aktivnosti','Activity level')}</label><select id="sl"><option value="Početnica">Početnica</option><option value="Srednja">Srednja</option><option value="Napredna">Napredna</option></select>
 <label>${L('Gdje najradije vježbaš?','Where do you prefer to exercise?')}</label><select id="sg"><option value="Kod kuće">Kod kuće</option><option value="U teretani">U teretani</option><option value="Na otvorenom">Na otvorenom</option></select>
 <p class="mut" id="serr" style="color:#c92a2a;margin:10px 0"></p>
 <button class="btn" onclick="socFinish()">${L('Nastavi','Continue')}</button><button class="link" onclick="socCancel()">← ${L('Natrag','Back')}</button></div>`;
}
function socFinish(){
 const v=id=>$('#'+id).value.trim();
 if(!v('sn')||!/\S+@\S+\.\S+/.test(v('se'))){$('#serr').textContent=L('Upiši ime i ispravan e-mail.','Enter a name and a valid email.');return}
 const p=socP;socP=null;
 makeAccount({name:v('sn'),mail:v('se'),age:+v('sd'),h:+v('sv'),w:+v('st'),goal:v('sc'),lvl:v('sl'),pref:v('sg'),provider:p,ref:v('sref')});
}
function register(){
 const v=id=>$('#'+id).value.trim();
 if(!v('ime')||!/\S+@\S+\.\S+/.test(v('mail'))){$('#err').textContent=L('Upiši ime i ispravan e-mail.','Enter a name and a valid email.');return}
 if(v('pass').length<6){$('#err').textContent=L('Lozinka mora imati barem 6 znakova.','Password must have at least 6 characters.');return}
 makeAccount({name:v('ime'),mail:v('mail'),age:+v('dob'),h:+v('vis'),w:+v('tez'),goal:v('cilj'),lvl:v('lvl'),pref:v('gdje'),provider:'email',ref:v('ref')});
}
const PREM_MAILS=['dada.kukolja@gmail.com'];
function makeAccount(o){
 S={name:o.name,mail:o.mail,age:o.age,h:o.h,w:o.w,goal:o.goal,lvl:o.lvl,pref:o.pref,days:{},sync:null,hist:[],provider:o.provider||'email',refBy:(o.ref||ST.ref||'').toUpperCase()};
 loc=S.pref;
 for(let i=6;i>=1;i--){const k=d0(i);S.days[k]={steps:rnd(3500,11000),stress:rnd(25,75),log:[],kcal:rnd(0,300)}}
 if(PREM_MAILS.indexOf((o.mail||'').trim().toLowerCase())>-1){S.prem=true;S.premGift=true}
 save();sendWelcome();
}
function welcomeBody(){
 const n=S.name,hr=ST.lang!=='en',goalTip={'Gubitak kilograma':hr?'Za gubitak kilograma kombiniraj 3 treninga tjedno, šetnju i uravnoteženu prehranu u umjerenom deficitu.':'For weight loss combine 3 workouts a week, walking and a balanced diet with a moderate calorie deficit.','Jačanje i tonus':hr?'Za jačanje i tonus drži se treninga snage 2–3 puta tjedno i unosi dovoljno bjelančevina.':'For strength and toning stick to strength training 2–3 times a week and get enough protein.','Opuštanje / stres':hr?'Za smanjenje stresa isprobaj disanje 4-7-8, jogu i šetnje u prirodi.':'To reduce stress try 4-7-8 breathing, yoga and walks in nature.','Kondicija':hr?'Za kondiciju kombiniraj brzo hodanje, intervale i dane odmora.':'For fitness combine brisk walking, intervals and rest days.'}[S.goal]||'';
 const via=S.provider==='google'?'Google':S.provider==='apple'?'Apple':'';
 return hr?`<p>Bok ${n}! 🌸</p><p>Dobrodošla u Fitžu – tvoj prostor za vježbanje kod kuće, u teretani i na otvorenom, uz zdravu prehranu i praćenje napretka.</p>${via?`<p>Registrirala si se putem računa ${via}.</p>`:''}<p><b>Kako započeti:</b></p><ul><li>Odaberi učestalost vježbanja u <b>Više → Tjedni plan</b>.</li><li>Pokreni prvi <b>Vođeni trening</b> u tabu Trening.</li><li>Pogledaj <b>Recepte</b> i dodaj obroke u dnevnik.</li><li>Poveži mobitel ili sat u <b>Više → Sinkronizacija</b>.</li></ul><p>${goalTip}</p><p style="font-size:12px;color:#7a7185">Fitža ne zamjenjuje liječnika ni nutricionista. Prije vježbanja ili promjene prehrane posavjetuj se sa stručnom osobom.</p><p>Sretno!<br>Tim Fitža</p>`
 :`<p>Hi ${n}! 🌸</p><p>Welcome to Fitža – your space for working out at home, at the gym and outdoors, with healthy eating and progress tracking.</p>${via?`<p>You signed up with your ${via} account.</p>`:''}<p><b>How to get started:</b></p><ul><li>Choose how often you want to train in <b>More → Weekly plan</b>.</li><li>Start your first <b>Guided workout</b> in the Workout tab.</li><li>Browse <b>Recipes</b> and add meals to your diary.</li><li>Connect your phone or watch in <b>More → Sync</b>.</li></ul><p>${goalTip}</p><p style="font-size:12px;color:#7a7185">Fitža does not replace a doctor or nutritionist. Consult a professional before exercising or changing your diet.</p><p>Good luck!<br>The Fitža team</p>`;
}
function sendWelcome(){
 S.inbox=S.inbox||[];
 S.inbox.unshift({to:S.mail,subj:L('Dobrodošla u Fitžu, '+S.name+'! 🌸','Welcome to Fitža, '+S.name+'! 🌸'),body:welcomeBody(),t:new Date().toLocaleString(ST.lang==='en'?'en-GB':'hr'),unread:1});
 openMail=0;tab='inbox';save();render();scrollTo(0,0);
}
function inboxPage(){
 const m=S.inbox||[];
 if(openMail!=null&&m[openMail]){const x=m[openMail];x.unread=0;save();
  return `<div class="pad"><button class="btn sec sm" onclick="openMail=null;render()">← ${L('Pošta','Inbox')}</button><div class="card" style="margin-top:12px"><span class="mut">${L('Za','To')}: ${x.to}</span><br><span class="mut">${x.t}</span><h3 style="margin:8px 0">${x.subj}</h3><div style="font-size:14px;line-height:1.5">${x.body}</div></div><p class="mut" style="font-size:12px;margin-bottom:12px">📮 ${L('Demo: poruka se prikazuje unutar aplikacije. Pravo slanje e-pošte zahtijeva poslužitelj (npr. SendGrid, Mailgun ili Amazon SES).','Demo: the message is shown inside the app. Real email delivery requires a server (e.g. SendGrid, Mailgun or Amazon SES).')}</p><button class="btn" onclick="openMail=null;tab='home';render();scrollTo(0,0)">${L('Počni','Get started')}</button></div>`}
 return `<div class="pad">${back}<h2 style="margin-top:12px">📧 ${L('Pošta','Inbox')}</h2>${m.length?m.map((x,i)=>`<div class="card sub" onclick="openMail=${i};render()"><b>${x.unread?'● ':''}${x.subj}</b><br><span class="mut">${x.t}</span></div>`).join(''):`<p class="mut">${L('Nema poruka.','No messages.')}</p>`}</div>`;
}
