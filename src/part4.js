
/* ===================== DIO 4: JEZIK, TEMA, PRISTUPAČNOST, PREMIUM, PRAVNE NAPOMENE, TEŽINA ===================== */
let ST=store.get('fitza_set')||{lang:'hr',theme:'auto',fs:0,hc:0,rm:null,legal:0};
function stSave(){store.set('fitza_set',ST)}
const L=(hr,en)=>ST.lang==='en'?en:hr;
document.head.insertAdjacentHTML('beforeend','<style>*:focus-visible{outline:3px solid #7048e8!important;outline-offset:2px}body.fs1 .pad,body.fs1 .hero{zoom:1.12}body.fs2 .pad,body.fs2 .hero{zoom:1.25}body.rm *{transition:none!important;animation:none!important}body.hc{--ink:#000;--mut:#222;--line:#555}body.hc .btn{border:2px solid #000}body.dark{--bg:#17131c;--card:#231c2b;--ink:#f1ecf5;--mut:#b0a7bd;--line:#3d3348;--p2:#3b2234;background:#0e0b12}body.dark.hc{--ink:#fff;--mut:#e6e0ee;--line:#bbb}body.dark .stat,body.dark .dy:not(.ok),body.dark nav,body.dark input,body.dark select,body.dark textarea{background:var(--card);color:var(--ink);border-color:var(--line)}body.dark .chip:not(.on){background:var(--card);color:var(--ink);border-color:var(--line)}body.dark .ring div{background:var(--card)}body.dark .anim{background:#2a1f2f}body.dark .msg.pro{background:#3d3348}body.dark nav button{color:var(--mut)}body.dark nav button.on{color:#ff6b9a}body.dark .btn.sec{color:#ff8fb8}body.dark [style*="background:#fff9db"],body.dark [style*="background:#e6fcf5"]{color:#2b2433}body.dark [style*="background:#fff9db"] .mut,body.dark [style*="background:#e6fcf5"] .mut{color:#5a5066}body.dark .tag{color:#ff8fb8}.lock{border:2px dashed var(--line)}.premcard{background:linear-gradient(135deg,#fff3bf,#ffd8e8);color:#2b2433}.premcard .mut{color:#5a5066}</style>');
function isDark(){return ST.theme==='dark'||(ST.theme==='auto'&&typeof matchMedia==='function'&&matchMedia('(prefers-color-scheme: dark)').matches)}
function rmOn(){return ST.rm==null?(typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches):!!ST.rm}

// ---------- prijevod (hrvatski → engleski) ----------
const DICT=`Početna¦Home
Trening¦Workout
Recepti¦Recipes
Napredak¦Progress
Više¦More
Profil¦Profile
Registracija¦Sign up
Ime¦Name
E-mail¦Email
Lozinka¦Password
Dob¦Age
Visina (cm)¦Height (cm)
Težina (kg)¦Weight (kg)
Cilj¦Goal
Razina aktivnosti¦Activity level
Gdje najradije vježbaš?¦Where do you prefer to exercise?
Kreiraj račun¦Create account
ili se registriraj¦or sign up
✨ Isprobaj odmah – preskoči registraciju¦✨ Try it now – skip sign-up
Gubitak kilograma¦Weight loss
Jačanje i tonus¦Strength and toning
Opuštanje / stres¦Relaxation / stress
Kondicija¦Fitness
Početnica¦Beginner
Srednja¦Intermediate
Napredna¦Advanced
Kod kuće¦At home
U teretani¦At the gym
Na otvorenom¦Outdoors
Demo: podaci se spremaju samo u tvom pregledniku.¦Demo: data is stored only in your browser.
Vježbaj kod kuće, u teretani ili u prirodi. Jedi pametno. Prati napredak.¦Work out at home, at the gym or in nature. Eat smart. Track your progress.
Svaki korak se računa 💪¦Every step counts 💪
Danas si jača nego jučer.¦You are stronger today than yesterday.
Disanje je i trening – udahni duboko.¦Breathing is training too – inhale deeply.
Napredak, ne savršenstvo.¦Progress, not perfection.
Bok, ¦Hi,
Razina stresa¦Stress level
Potrošeno (trening)¦Burned (workout)
Puls u mirovanju¦Resting heart rate
Voda (cilj)¦Water (goal)
Sinkronizacija uređaja¦Device sync
Povuci korake, puls i stres s mobitela ili pametnog sata (demo simulacija).¦Pull steps, heart rate and stress from your phone or smartwatch (demo simulation).
📱 Mobitel¦📱 Phone
⌚ Sat¦⌚ Watch
Koraci – zadnjih 7 dana¦Steps – last 7 days
Danas na tanjuru¦On your plate today
Pogledaj recept¦View recipe
Otvori trening¦Open workout
Visok stres.¦High stress.
Probaj 20 min joge za opuštanje.¦Try 20 min of relaxing yoga.
nije sinkronizirano¦not synced
dnevnog cilja¦of daily goal
koraka¦steps
Treninzi¦Workouts
Savjeti po tijelu¦Tips by body part
Savjeti za vježbanje¦Exercise tips
Tvoja razina:¦Your level:
Vježbe¦Exercises
← Natrag¦← Back
✔ Završi¦✔ Finish
Spremi seriju¦Save set
Uteg (kg)¦Weight (kg)
Ponavljanja¦Reps
Serije¦Sets
Savjeti za ovaj trening¦Tips for this workout
Danas odrađeno¦Done today
Dodirni vježbu: animacija, tehnika i bilježenje serija.¦Tap an exercise: animation, technique and set logging.
Pojednostavljena animacija pokreta – točna tehnika je u opisu.¦Simplified movement animation – exact technique is in the description.
Cijelo tijelo bez opreme¦Full body, no equipment
Core i trbušni mišići¦Core and abs
Joga za opuštanje¦Yoga for relaxation
Donji dio tijela i guzice¦Lower body and glutes
Gornji dio tijela¦Upper body
HIIT na traci¦Treadmill HIIT
Brzo hodanje u prirodi¦Brisk walking in nature
Trčanje – intervali¦Running intervals
Park trening (klupe i stube)¦Park workout (benches and stairs)
Sklekovi na koljenima¦Knee push-ups
Sklekovi o klupu¦Bench push-ups
Čučnjevi¦Squats
Iskoraci¦Lunges
Mostić za gluteuse¦Glute bridge
Bicikl trbušnjaci¦Bicycle crunches
Mrtva buba¦Dead bug
Bočni plank¦Side plank
Penjač¦Mountain climbers
Mačka–krava¦Cat–cow
Pas licem prema dolje¦Downward dog
Ratnica II¦Warrior II
Dijete¦Child's pose
Rumunjsko mrtvo dizanje¦Romanian deadlift
Bugarski čučanj¦Bulgarian split squat
Abdukcija na spravi¦Hip abduction machine
Potisak bučicama¦Dumbbell press
Veslanje na kablu¦Cable row
Potisak iznad glave¦Overhead press
Lagano zagrijavanje¦Easy warm-up
Zagrijavanje¦Warm-up
Brzi hod¦Brisk walk
Istezanje¦Stretching
Hlađenje¦Cool-down
Penjanje uz stube¦Stair climbing
Skokovi iz čučnja¦Squat jumps
30 s sprint / 60 s hod × 10¦30 s sprint / 60 s walk × 10
1 min trk / 2 min hod × 6¦1 min run / 2 min walk × 6
Hod 5 min¦Walk 5 min
po nozi¦per leg
Prehrana¦Diet
Klasičan¦Classic
Alergije – sakrij recepte s:¦Allergies – hide recipes containing:
Jaja¦Eggs
Mlijeko¦Milk
Orašasti¦Tree nuts
Riba¦Fish
Sezam¦Sesame
Vegetarijansko¦Vegetarian
Bez glutena¦Gluten-free
Bez laktoze¦Lactose-free
vegetarijansko¦vegetarian
bez glutena¦gluten-free
bez laktoze¦lactose-free
Sve¦All
Doručak¦Breakfast
Ručak¦Lunch
Večera¦Dinner
Međuobrok¦Snack
🔍 Traži recept ili sastojak¦🔍 Search recipe or ingredient
Sastojci¦Ingredients
Priprema¦Preparation
← Recepti¦← Recipes
porcija¦serving
Domaće mjere (dl)¦Household measures (dl)
📷 Dodaj fotografiju jela¦📷 Add dish photo
📷 Promijeni fotografiju jela¦📷 Change dish photo
➕ U dnevnik obroka¦➕ Add to meal diary
📤 Podijeli¦📤 Share
bjelančevine¦protein
💡 Savjet:¦💡 Tip:
Nema recepata za odabrane filtere.¦No recipes match the selected filters.
Oznake su okvirne. Kod alergija uvijek provjeri deklaraciju namirnica; zobene pahuljice mogu sadržavati tragove glutena.¦Labels are approximate. With allergies always check the product label; oats may contain traces of gluten.
Zobena kaša s bobičastim voćem¦Oatmeal with berries
Omlet sa špinatom i fetom¦Spinach and feta omelette
Piletina s kvinojom i povrćem¦Chicken with quinoa and vegetables
Salata s tunjevinom i slanutkom¦Tuna and chickpea salad
Losos s pečenim batatom¦Salmon with roasted sweet potato
Juha od leće s povrćem¦Lentil and vegetable soup
Smoothie od banane i špinata¦Banana and spinach smoothie
Proteinske kuglice od datulja¦Date protein balls
Grčki jogurt s jagodama i orasima¦Greek yogurt with strawberries and walnuts
Tofu kajgana s povrćem¦Tofu scramble with vegetables
Palačinke od zobi i banane¦Oat and banana pancakes
Bowl s rižom, edamameom i avokadom¦Rice bowl with edamame and avocado
Tjestenina od cjelovitog brašna s tikvicama¦Whole-wheat pasta with zucchini
Pileća salata s avokadom¦Chicken salad with avocado
Tepsija slanutka i povrća¦Roasted chickpea and vegetable tray
Bakalar na lešo s blitvom i krumpirom¦Boiled cod with chard and potatoes
Punjene paprike s puretinom¦Turkey-stuffed peppers
Humus s povrćem za umakanje¦Hummus with veggie sticks
Skuta s jabukom i cimetom¦Cottage cheese with apple and cinnamon
Jaja s avokadom i panceta¦Eggs with avocado and pancetta
Chia puding s kokosovim mlijekom¦Chia pudding with coconut milk
Salata s tunjevinom, jajima i maslinama¦Tuna, egg and olive salad
Tikvične špagete s piletinom i pestom¦Zucchini noodles with chicken and pesto
Losos s brokulom i maslacem¦Salmon with broccoli and butter
Pečena piletina s cvjetačom¦Roasted chicken with cauliflower
Bademi i sir¦Almonds and cheese
Smoothie od avokada i kakaa¦Avocado cocoa smoothie
Tjedni plan¦Weekly plan
Koliko često želiš vježbati?¦How often do you want to work out?
Gdje?¦Where?
Svaki dan¦Every day
Svaki drugi dan¦Every other day
Svaki treći dan¦Every third day
2× tjedno¦2× per week
treninga tjedno¦workouts per week
Ponedjeljak¦Monday
Utorak¦Tuesday
Srijeda¦Wednesday
Četvrtak¦Thursday
Petak¦Friday
Subota¦Saturday
Nedjelja¦Sunday
💪 Trening¦💪 Workout
😴 Odmor¦😴 Rest
🛒 Popis za kupnju za ovaj tjedan¦🛒 Shopping list for this week
🌅 Doručak¦🌅 Breakfast
☀️ Ručak¦☀️ Lunch
🍎 Međuobrok¦🍎 Snack
🌙 Večera¦🌙 Dinner
Ugljikohidrati¦Carbohydrates
Bjelančevine¦Protein
Masti¦Fat
Energija¦Energy
dnevni ciljevi¦daily targets
Napredak¦Progress
30 dana¦30 days
3 mjeseca¦3 months
Tjedni sažetak¦Weekly summary
Koraci¦Steps
Prosj. stres¦Avg. stress
San / raspoloženje¦Sleep / mood
📏 Opseg struka¦📏 Waist circumference
👟 Koraci (prosjek 7 dana)¦👟 Steps (7-day average)
🧠 Stres (prosjek 7 dana)¦🧠 Stress (7-day average)
Novo mjerenje¦New measurement
Struk (cm)¦Waist (cm)
Spremi¦Save
🔗 Stres i trening¦🔗 Stress and workouts
📸 Fotografije napretka¦📸 Progress photos
📷 Dodaj fotografiju¦📷 Add photo
Još nema fotografija.¦No photos yet.
Fotografije ostaju samo u tvom pregledniku.¦Photos stay only in your browser.
Povijest do jučer je demo-simulacija; od danas se bilježe tvoji stvarni unosi.¦History up to yesterday is a demo simulation; from today your real entries are recorded.
📤 Podijeli sažetak¦📤 Share summary
Tjedni plan¦Weekly plan
Trening i prehrana¦Workouts and nutrition
Dnevnik¦Diary
Obroci, voda, san, raspoloženje¦Meals, water, sleep, mood
Posebni programi¦Special programs
Trudnoća, menopauza, leđa, ciklus¦Pregnancy, menopause, back, cycle
Opuštanje¦Relaxation
Zagrijavanje, istezanje, disanje¦Warm-up, stretching, breathing
Izazovi i značke¦Challenges and badges
Zajednica¦Community
Prijateljice i stručnjakinje¦Friends and experts
Popis za kupnju¦Shopping list
Iz tjednog plana¦From the weekly plan
Sinkronizacija¦Sync
Mobitel i pametni sat¦Phone and smartwatch
Podaci i odjava¦Details and sign out
Planovi i cijene¦Plans and pricing
Postavke¦Settings
Jezik, tema, pristupačnost¦Language, theme, accessibility
Pravne napomene¦Legal notes
Upozorenja i privatnost¦Warnings and privacy
← Više¦← More
Voda¦Water
čaša¦glasses
San¦Sleep
Raspoloženje¦Mood
Obroci i kalorije¦Meals and calories
uneseno¦eaten
Iz recepata¦From recipes
Dodaj recept¦Add recipe
Vlastiti obrok¦Custom meal
Dodaj¦Add
📷 Fotografija obroka¦📷 Meal photo
Barkod (demo)¦Barcode (demo)
Traži¦Search
Opuštanje 🧘¦Relaxation 🧘
Disanje za stres¦Breathing for stress
Meditacija¦Meditation
Zagrijavanje (5 min)¦Warm-up (5 min)
Istezanje (8 min)¦Stretching (8 min)
Prekini¦Stop
Udahni¦Inhale
Zadrži¦Hold
Izdahni¦Exhale
Izazovi i značke 🏆¦Challenges and badges 🏆
Odaberi izazov od 30 dana¦Choose a 30-day challenge
30 dana kretanja¦30 days of movement
30 dana planka¦30 days of planks
30 dana čučnjeva¦30 days of squats
30 dana vode¦30 days of hydration
30 dana istezanja¦30 days of stretching
Kreni¦Start
Značke¦Badges
Danas:¦Today:
Odustani od izazova¦Quit challenge
Prvi trening¦First workout
Petica¦High five
Niz 7 dana¦7-day streak
Hidratacija¦Hydration
Slika napretka¦Progress photo
Dnevnik obroka¦Meal diary
Izazov 7 dana¦7-day challenge
Izazov 30 dana¦30-day challenge
Timska igračica¦Team player
Ljestvica – koraci u 7 dana¦Leaderboard – steps in 7 days
Pozovi prijateljicu¦Invite a friend
Grupni izazov tjedna¦Weekly group challenge
Podijeli¦Share
Moj rezultat¦My result
Stručnjakinje¦Experts
Pošalji¦Send
Savjeti stručnjakinja¦Expert tips
Popis za kupnju 🛒¦Shopping list 🛒
Očisti kvačice¦Clear checkmarks
Kopiraj popis¦Copy list
Posebni programi 🌸¦Special programs 🌸
Preporučeno¦Recommended
Izbjegavaj¦Avoid
Kada prekinuti:¦When to stop:
Tjedni ritam¦Weekly rhythm
Menstrualni ciklus 🩸¦Menstrual cycle 🩸
Spremi i prikaži savjete¦Save and show tips
Prvi dan zadnje menstruacije¦First day of last period
Duljina ciklusa (dani)¦Cycle length (days)
Menstruacija¦Menstruation
Folikularna faza¦Follicular phase
Ovulacija¦Ovulation
Lutealna faza¦Luteal phase
Sinkronizacija ⌚¦Sync ⌚
Poveži¦Connect
Prekini vezu¦Disconnect
Sinkroniziraj sada¦Sync now
Što se sinkronizira¦What gets synced
Današnji podaci¦Today's data
Uvoz iz datoteke (CSV)¦Import from file (CSV)
Nije povezano¦Not connected
Pametni sat¦Smartwatch
Mobitel¦Phone
Aktivne kalorije¦Active calories
Kisik u krvi (SpO₂)¦Blood oxygen (SpO₂)
Težina¦Weight
Koraci¦Steps
Puls¦Heart rate
Stres¦Stress
Treninzi¦Workouts
Odjava i brisanje podataka¦Sign out and delete data
Dodirni opet za odjavu i brisanje¦Tap again to sign out and delete
Cilj¦Goal
Spremljeno¦Saved
Vođeni trening¦Guided workout
▶ Vođeni trening¦▶ Guided workout`;
const PAIRS=DICT.split('\n').map(l=>{const i=l.indexOf('¦');return i<0?null:[l.slice(0,i),l.slice(i+1)]}).filter(Boolean);
const EXACT={};PAIRS.forEach(p=>{EXACT[p[0].trim()]=p[1].trim()});
const PHR=PAIRS.filter(p=>p[0].length>=5).sort((a,b)=>b[0].length-a[0].length);
PHR.unshift(['Bok, ','Hi, ']);
function T(s){
 if(ST.lang!=='en'||!s)return s;
 const m=/^(\s*)([\s\S]*?)(\s*)$/.exec(s),core=m[2];
 if(EXACT[core]!=null)return m[1]+EXACT[core]+m[3];
 let r=s;for(const p of PHR){if(r.indexOf(p[0])>=0)r=r.split(p[0]).join(p[1])}
 return r;
}
function xl(root){
 if(ST.lang!=='en'||!root||typeof document.createTreeWalker!=='function')return;
 const w=document.createTreeWalker(root,4),arr=[];let n;while((n=w.nextNode()))arr.push(n);
 arr.forEach(x=>{const v=x.nodeValue;if(v&&v.trim()){const r=T(v);if(r!==v)x.nodeValue=r}});
 root.querySelectorAll('[placeholder]').forEach(e=>{e.placeholder=T(e.placeholder)});
}

// ---------- post-render: tema, pristupačnost, napomena, prijevod ----------
function discHtml(){return `<div class="pad" style="padding-top:0"><p class="mut" style="font-size:11px">⚕️ ${L('Fitža ne zamjenjuje liječnika, fizioterapeuta ni nutricionista. Prije vježbanja ili promjene prehrane posavjetuj se sa stručnom osobom.','Fitža does not replace a doctor, physiotherapist or nutritionist. Consult a professional before exercising or changing your diet.')} <a href="#" onclick="tab='legal';render();scrollTo(0,0);return false" style="color:var(--p)">${L('Više','More')}</a></p></div>`}
function quickBar(){return `<div class="pad" style="padding-bottom:0"><div class="chips" style="margin:0"><div class="chip ${ST.lang==='hr'?'on':''}" onclick="setLang('hr')">🇭🇷 Hrvatski</div><div class="chip ${ST.lang==='en'?'on':''}" onclick="setLang('en')">🇬🇧 English</div><div class="chip ${isDark()?'on':''}" onclick="setTheme(isDark()?'light':'dark')">🌙 ${L('Tamni način','Dark mode')}</div></div></div>`}
function post(){
 if(typeof document.body==='undefined'||!document.body||!document.body.classList)return;
 const b=document.body;
 b.classList.toggle('dark',isDark());b.classList.toggle('hc',!!ST.hc);b.classList.toggle('fs1',ST.fs===1);b.classList.toggle('fs2',ST.fs===2);b.classList.toggle('rm',rmOn());
 document.documentElement.lang=ST.lang;
 const app=$('#app');if(!app||!app.querySelector)return;
 const nav=app.querySelector('nav');
 if(nav&&tab!=='legal')nav.insertAdjacentHTML('beforebegin',discHtml());
 if(app.classList){app.classList.toggle('fade',tab!==lastTab);lastTab=tab}
 if(!S&&ST.legal)app.insertAdjacentHTML('afterbegin',quickBar()+(typeof refBanner==='function'?refBanner():''));
 app.querySelectorAll('[onclick]').forEach(e=>{const t=e.tagName;if(t!=='BUTTON'&&t!=='A'&&t!=='LABEL'&&t!=='INPUT'&&!e.hasAttribute('tabindex')){e.setAttribute('tabindex','0');e.setAttribute('role','button')}});
 app.querySelectorAll('nav button').forEach(e=>e.setAttribute('aria-label',e.textContent.trim()));
 if(rmOn())app.querySelectorAll('svg').forEach(s=>{if(s.pauseAnimations)s.pauseAnimations()});
 xl(app);
}
document.addEventListener&&document.addEventListener('keydown',e=>{const t=e.target;if((e.key==='Enter'||e.key===' ')&&t&&t.getAttribute&&t.getAttribute('role')==='button'&&t.tagName!=='BUTTON'){e.preventDefault();t.click()}});
function setLang(l){ST.lang=l;stSave();render()}
function setTheme(t){ST.theme=t;stSave();render()}
function setFs(n){ST.fs=n;stSave();render()}
function togHc(){ST.hc=ST.hc?0:1;stSave();render()}
function setRm(v){ST.rm=v;stSave();render()}

// ---------- pravne napomene ----------
function legalItems(){return ST.lang==='en'?[
 'Fitža is an informational app for recreation and a healthy lifestyle. It does not replace a doctor, physiotherapist, nutritionist or any other health professional.',
 'Before starting to exercise or changing your diet, consult your doctor – especially if you have a chronic illness, heart disease, diabetes, pain or injuries, are pregnant or breastfeeding, or are recovering after childbirth.',
 'Keto and LCHF diets are not suitable for everyone (pregnancy, breastfeeding, diabetes treated with medication, liver or kidney disease, eating disorders).',
 'Calories, macronutrients, BMI and stress estimates are approximate and are not a diagnosis.',
 'Data from phones and smartwatches is not medically certified unless the manufacturer states otherwise.',
 'Stop exercising and seek help if you feel chest pain, shortness of breath, dizziness, fainting or severe pain. In an emergency call 112.',
 'If you have an eating disorder or counting calories is harmful to you, do not track them and contact a professional.',
 'Allergen labels in recipes are approximate; always check the product label.',
 'Demo: data is kept only in your browser. Do not enter sensitive health data in a shared version.']:[
 'Fitža je informativna aplikacija za rekreaciju i zdrav stil života. Ne zamjenjuje liječnika, fizioterapeuta, nutricionista niti druge zdravstvene stručnjake.',
 'Prije početka vježbanja ili promjene prehrane posavjetuj se s liječnikom, osobito ako imaš kronične bolesti, bolesti srca, dijabetes, bolove ili ozljede, trudna si ili dojiš, ili se oporavljaš nakon poroda.',
 'Keto i LCHF prehrana nisu prikladne za svakoga (trudnoća, dojenje, dijabetes koji se liječi lijekovima, bolesti jetre i bubrega, poremećaji prehrane).',
 'Kalorije, makronutrijenti, KMI i procjene stresa okvirni su i nisu dijagnoza.',
 'Podaci s mobitela i pametnih satova nisu medicinski certificirani osim ako proizvođač navodi drugačije.',
 'Prekini vježbanje i potraži pomoć ako osjetiš bol u prsima, nedostatak zraka, vrtoglavicu, nesvjesticu ili jaku bol. U hitnom slučaju nazovi 112.',
 'Ako imaš poremećaj prehrane ili ti brojanje kalorija šteti, nemoj ih pratiti i obrati se stručnoj osobi.',
 'Oznake alergena u receptima su okvirne; uvijek provjeri deklaraciju proizvoda.',
 'Demo: podaci se čuvaju samo u tvom pregledniku. Ne unosi osjetljive zdravstvene podatke u javno dijeljenu verziju.']}
function consent(){
 return `<div class="hero"><h1>Fitža 🌸</h1><p>${L('Prije početka – važne napomene','Before you start – important notes')}</p></div>${quickBar()}
 <div class="pad"><div class="card" style="background:#fff9db;color:#2b2433"><b>⚕️ ${L('Aplikacija ne zamjenjuje liječnika ni nutricionista.','This app does not replace a doctor or nutritionist.')}</b></div>
 <div class="card"><ul>${legalItems().slice(0,6).map(x=>`<li>${x}</li>`).join('')}</ul></div>
 <label style="display:flex;gap:10px;align-items:flex-start;color:var(--ink);font-size:14px"><input id="lg" type="checkbox" style="width:auto;margin-top:3px"><span>${L('Pročitala sam upozorenja i razumijem da aplikacija služi samo kao informacija i podrška.','I have read the warnings and understand the app is for information and support only.')}</span></label>
 <button class="btn" style="margin-top:12px" onclick="acceptLegal()">${L('Nastavi','Continue')}</button></div>`;
}
function acceptLegal(){const c=$('#lg');if(!c||!c.checked){notify(L('Potvrdi da si pročitala upozorenja','Please confirm you have read the warnings'));return}ST.legal=1;stSave();render()}
function legal(){return `<div class="pad">${back}<h2 style="margin-top:12px">⚕️ ${L('Pravne napomene','Legal notes')}</h2><div class="card"><ul>${legalItems().map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`}

// ---------- postavke ----------
function settings(){
 const ch=(on,fn,label)=>`<div class="chip ${on?'on':''}" onclick="${fn}">${label}</div>`;
 return `<div class="pad">${back}<h2 style="margin-top:12px">⚙️ ${L('Postavke','Settings')}</h2>
 <div class="card"><h3>🌐 ${L('Jezik','Language')}</h3><div class="chips" style="margin-top:8px">${ch(ST.lang==='hr',"setLang('hr')",'🇭🇷 Hrvatski')}${ch(ST.lang==='en',"setLang('en')",'🇬🇧 English')}</div><p class="mut" style="font-size:12px">${L('Većina izbornika i naziva je prevedena; dulji opisi (upute, koraci recepata, programi) za sada ostaju na hrvatskom.','Most menus and names are translated; longer texts (instructions, recipe steps, programs) remain in Croatian for now.')}</p></div>
 <div class="card"><h3>🌙 ${L('Tema','Theme')}</h3><div class="chips" style="margin-top:8px">${ch(ST.theme==='light',"setTheme('light')",'☀️ '+L('Svijetla','Light'))}${ch(ST.theme==='dark',"setTheme('dark')",'🌙 '+L('Tamna','Dark'))}${ch(ST.theme==='auto',"setTheme('auto')",'📱 '+L('Prema uređaju','Follow device'))}</div></div>
 <div class="card"><h3>♿ ${L('Pristupačnost','Accessibility')}</h3>
 <label>${L('Veličina teksta','Text size')}</label><div class="chips">${ch(ST.fs===0,'setFs(0)',L('Normalna','Normal'))}${ch(ST.fs===1,'setFs(1)',L('Velika','Large'))}${ch(ST.fs===2,'setFs(2)',L('Vrlo velika','Extra large'))}</div>
 <label>${L('Kontrast','Contrast')}</label><div class="chips">${ch(!ST.hc,'ST.hc=0;stSave();render()',L('Standardni','Standard'))}${ch(ST.hc,'ST.hc=1;stSave();render()',L('Visoki kontrast','High contrast'))}</div>
 <label>${L('Animacije','Animations')}</label><div class="chips">${ch(ST.rm==null,'setRm(null)',L('Prema uređaju','Follow device'))}${ch(ST.rm===0,'setRm(0)',L('Uključene','On'))}${ch(ST.rm===1,'setRm(1)',L('Smanji pokret','Reduce motion'))}</div>
 <p class="mut" style="font-size:12px;margin-top:6px">${L('Podržana je navigacija tipkovnicom (Tab, Enter) i čitači zaslona.','Keyboard navigation (Tab, Enter) and screen readers are supported.')}</p></div>
 <button class="btn sec" onclick="tab='legal';render()">⚕️ ${L('Pravne napomene','Legal notes')}</button></div>`;
}

// ---------- premium ----------
const FREEREC=['r1','r2','r3','r4','r5','r6','r7','r8'];
function avail(r){return !!(S&&S.prem)||FREEREC.includes(r.id)}
function lockCard(t){return `<div class="card lock" style="text-align:center"><div style="font-size:30px">🔒</div><h3>${L(t,({'Recept je dio Premium verzije':'This recipe is part of Premium','Plan prehrane i dnevni ciljevi':'Meal plan and daily targets','Analiza stresa i treninga':'Stress and workout analysis','Poruke trenerici i nutricionistici':'Messages to trainer and nutritionist','Posebni programi i savjeti po ciklusu':'Special programs and cycle tips','Popis za kupnju':'Shopping list'})[t]||t)}</h3><p class="mut">${L('Dostupno u Premium verziji.','Available in Premium.')}</p><button class="btn sm" style="margin-top:8px" onclick="tab='premium';render();scrollTo(0,0)">⭐ ${L('Pogledaj Premium','See Premium')}</button></div>`}
function premBanner(){return S.prem?`<div class="card premcard"><b>⭐ Premium ${L('aktivan','active')}</b></div>`:`<div class="card premcard sub" onclick="tab='premium';render()"><b>⭐ ${L('Besplatna verzija – nadogradi na Premium','Free version – upgrade to Premium')}</b><br><span class="mut">${L('Svi recepti, keto/LCHF, plan prehrane, programi i više','All recipes, keto/LCHF, meal plans, programs and more')}</span></div>`}
function togPrem(){S.prem=S.prem?0:1;if(!S.prem){prange=30;S.diet='Klasičan'}save();notify(S.prem?L('Premium aktiviran (demo)','Premium activated (demo)'):L('Vraćeno na besplatnu verziju','Back to the free version'))}
function setRange(n){if(n===90&&!S.prem){tab='premium';render();scrollTo(0,0);return}prange=n;render()}
function premium(){
 const free=L(['9 treninga s animacijama i bilježenjem serija','8 osnovnih recepata (klasična prehrana)','Tjedni plan treninga','Praćenje koraka, vode, sna, raspoloženja i težine','Grafovi za 30 dana','Disanje i opuštanje','Izazovi od 30 dana i značke','Ljestvica prijateljica, ručna sinkronizacija'],['9 workouts with animations and set logging','8 basic recipes (classic diet)','Weekly workout plan','Tracking steps, water, sleep, mood and weight','30-day charts','Breathing and relaxation','30-day challenges and badges','Friends leaderboard, manual sync']);
 const prem=L(['Sve iz besplatne verzije','Svi recepti + keto i LCHF prehrana','Plan prehrane, kalorije i makronutrijenti','Popis za kupnju iz tjednog plana','Grafovi za 3 mjeseca i analiza stresa i treninga','Posebni programi (trudnoća, poslije poroda, menopauza, leđa) i savjeti po ciklusu','Automatska sinkronizacija i uvoz podataka','Poruke trenerici i nutricionistici'],['Everything in the free version','All recipes + keto and LCHF diets','Meal plan, calories and macros','Shopping list from the weekly plan','3-month charts and stress/workout analysis','Special programs (pregnancy, postpartum, menopause, back) and cycle tips','Automatic sync and data import','Messages to trainer and nutritionist']);
 return `<div class="pad">${back}<h2 style="margin-top:12px">⭐ ${L('Odaberi plan','Choose a plan')}</h2>
 <div class="card"><h3>${L('Besplatno','Free')} <span class="tag g">0 €</span></h3><ul>${free.map(x=>`<li>${x}</li>`).join('')}</ul></div>
 <div class="card premcard"><h3>Premium <span class="tag">4,99 € / ${L('mjesec','month')}</span> <span class="tag">39,99 € / ${L('godina','year')}</span></h3><ul>${prem.map(x=>`<li>${x}</li>`).join('')}</ul><p class="mut" style="font-size:12px">${L('Cijene su ilustrativne. Demo verzija ne naplaćuje ništa.','Prices are illustrative. This demo does not charge anything.')}</p></div>
 <button class="btn" onclick="togPrem()">${S.prem?L('Vrati na besplatnu verziju','Switch back to free'):L('⭐ Aktiviraj Premium (demo, bez naplate)','⭐ Activate Premium (demo, no payment)')}</button></div>`;
}
function shop(){return S.prem?shop0():`<div class="pad">${back}<h2 style="margin:12px 0">${L('Popis za kupnju 🛒','Shopping list 🛒')}</h2>${lockCard('Popis za kupnju')}</div>`}
function spec(){return S.prem?spec0():`<div class="pad">${back}<h2 style="margin:12px 0">${L('Posebni programi 🌸','Special programs 🌸')}</h2>${lockCard('Posebni programi i savjeti po ciklusu')}<div class="card"><ul>${Object.keys(PROGS).map(k=>`<li>${PROGS[k].ic} ${k}</li>`).join('')}<li>🩸 ${L('Savjeti po fazi ciklusa','Cycle-phase tips')}</li></ul></div></div>`}

// ---------- težina i cilj ----------
function setGoalW(){const v=+$('#gw').value;if(!v){notify(L('Upiši ciljnu težinu','Enter a goal weight'));return}S.goalW=v;save();render()}
function delMeas(d){S.meas=S.meas.filter(m=>m.d!==d);if(S.meas.length)S.w=S.meas[S.meas.length-1].w;save();render()}
function wcard(ms){
 const first=S.meas.length?S.meas[0].w:S.w,cur=S.w,g=S.goalW,diff=+(cur-first).toFixed(1),h=S.h/100,bm=(cur/(h*h)).toFixed(1);
 let prog='';
 if(g){const tot=g-first,done=cur-first,p=tot?Math.max(0,Math.min(100,Math.round(done/tot*100))):100;prog=`<p class="mut" style="margin-top:8px">${L('Cilj','Goal')}: <b>${g} kg</b> · ${L('preostalo','remaining')}: <b>${f1(Math.abs(g-cur))} kg</b></p><div class="bar"><i style="width:${p}%;background:#2f9e77"></i></div><p class="mut" style="font-size:12px">${p}% ${L('puta do cilja','of the way to your goal')}</p>`}
 return `<div class="card"><h3>⚖️ ${L('Težina i cilj','Weight and goal')}</h3>
 <div class="grid" style="margin:8px 0"><div class="stat"><span class="mut">${L('Trenutno','Current')}</span><b>${f1(cur)} kg</b></div><div class="stat"><span class="mut">${L('Promjena od početka','Change since start')}</span><b style="color:${diff<=0?'#2f9e77':'#c92a2a'}">${diff>0?'+':''}${f1(diff)} kg</b></div><div class="stat"><span class="mut">${L('KMI','BMI')}</span><b>${bm}</b></div><div class="stat"><span class="mut">${L('Početna','Start')}</span><b>${f1(first)} kg</b></div></div>
 ${chart(ms.map(m=>m.w),'#d6336c','kg',g)}${g?`<p class="mut" style="font-size:12px">${L('Isprekidana crta = cilj','Dashed line = goal')}</p>`:''}${prog}
 <div class="row" style="margin-top:10px"><div><label>${L('Ciljna težina (kg)','Goal weight (kg)')}</label><input id="gw" type="number" step="0.1" value="${g||''}"></div><div style="align-self:end"><button class="btn sm" style="width:100%" onclick="setGoalW()">${L('Spremi cilj','Save goal')}</button></div></div>
 <details style="margin-top:10px"><summary style="cursor:pointer"><b>${L('Povijest mjerenja','Measurement history')}</b></summary>${S.meas.slice(-8).reverse().map(m=>`<div class="flex" style="padding:6px 0;border-top:1px solid var(--line)"><span style="flex:1">${m.d}</span><b>${m.w} kg</b><span class="mut">${m.waist?m.waist+' cm':''}</span><span class="mut" style="cursor:pointer" onclick="delMeas('${m.d}')" aria-label="delete">✕</span></div>`).join('')}</details>
 <p class="mut" style="font-size:12px;margin-top:8px">${L('KMI je okvirni pokazatelj i ne uzima u obzir mišićnu masu. Ciljnu težinu dogovori s liječnikom ili nutricionistom.','BMI is a rough indicator and ignores muscle mass. Agree on a goal weight with your doctor or nutritionist.')}</p></div>`;
}


