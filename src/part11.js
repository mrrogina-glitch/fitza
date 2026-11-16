/* ===================== DIO 11: TRENINZI PO RAZINI (početnica / srednja / napredna) ===================== */
(function(){
 const P='Početnica',S_='Srednja',N='Napredna';
 // [lokacija, razina, fokus, naziv, min, kcal, vježbe, savjeti(indeksi TIPS)]
 const D=[
 // ---- KOD KUĆE ----
 ['Kod kuće',P,'L','Donji dio tijela – za početak',25,150,['Čučnjevi 3×10','Mostić za gluteuse 3×12','Iskoraci unatrag 2×8 po nozi','Čučanj uza zid 3×20 s','Podizanje na prste 2×15'],[1,0]],
 ['Kod kuće',P,'G','Guzice i bedra – lagano',20,120,['Mostić za gluteuse 3×15','Donkey kick 2×12 po nozi','Fire hydrant 2×12 po nozi','Bočno podizanje noge 2×12 po nozi','Sumo čučanj 2×12'],[0]],
 ['Kod kuće',P,'U','Gornji dio tijela – za početak',20,110,['Sklekovi na koljenima 3×8','Sklekovi o klupu 2×10','Superman 3×10','Plank na podlakticama 3×20 s','Krugovi rukama 2×30 s'],[5,3]],
 ['Kod kuće',P,'C','Core – osnove',15,90,['Mrtva buba 3×8','Trbušnjaci 3×12','Plank na podlakticama 3×20 s','Ptica-pas 3×8 po strani','Mostić za gluteuse 2×12'],[2]],
 ['Kod kuće',P,'F','Cijelo tijelo bez opreme',25,180,['Čučnjevi 3×12','Sklekovi na koljenima 3×8','Iskoraci 3×8 po nozi','Plank 3×20 s','Mostić za gluteuse 3×12'],[1,6]],
 ['Kod kuće',P,'K','Lagani kardio kod kuće',15,130,['Hodanje na mjestu 3 min','Jumping jacks 3×20 s','Visoka koljena 3×20 s','Čučnjevi 2×10','Istezanje 3 min'],[6]],
 ['Kod kuće',P,'M','Joga za opuštanje',20,70,['Mačka–krava 2 min','Pas licem prema dolje 1 min','Ratnica II 1 min po strani','Dijete 2 min','Savasana 5 min'],[3,6]],
 ['Kod kuće',S_,'L','Donji dio tijela – noge i guzice',35,230,['Čučnjevi s pauzom 3×12','Bugarski čučanj 3×10 po nozi','Mostić na jednoj nozi 3×10 po nozi','Bočni iskoraci 3×12 po nozi','Rumunjsko mrtvo dizanje na jednoj nozi 3×10 po nozi','Podizanje na prste 3×20'],[1,0]],
 ['Kod kuće',S_,'G','Guzice i bedra – snaga',30,190,['Mostić na jednoj nozi 3×12 po nozi','Hip thrust na stolici 3×15','Donkey kick 3×15 po nozi','Fire hydrant 3×15 po nozi','Sumo čučanj s pulsiranjem 3×15','Kozački iskorak 3×10 po nozi'],[0]],
 ['Kod kuće',S_,'U','Gornji dio tijela – srednja',30,200,['Sklekovi 3×10','Sklekovi o klupu 3×12','Pike sklek 3×8','Superman 3×12','Plank s dodirom ramena 3×30 s','Triceps sklekovi na klupi 3×12'],[5,4]],
 ['Kod kuće',S_,'C','Core i trbušni mišići',20,140,['Bicikl trbušnjaci 3×20','Mrtva buba 3×12','Bočni plank 3×25 s','Penjač 3×30 s','Obrnuti trbušnjaci 3×12','Plank 3×40 s'],[2]],
 ['Kod kuće',S_,'F','Cijelo tijelo – srednja',35,260,['Čučnjevi 3×15','Sklekovi 3×10','Iskoraci u hodu 3×12 po nozi','Penjač 3×30 s','Mostić na jednoj nozi 3×10 po nozi','Plank 3×40 s'],[6]],
 ['Kod kuće',S_,'K','HIIT kod kuće',20,220,['Zagrijavanje 3 min','Jumping jacks 4×30 s','Skater skokovi 4×30 s','Čučnjevi 4×15','Penjač 4×30 s','Hlađenje 3 min'],[6]],
 ['Kod kuće',S_,'M','Joga i mobilnost',25,90,['Mačka–krava 2 min','Pas licem prema dolje 1 min','Ratnica II 1 min po strani','Istezanje pregibača kuka 1 min po strani','Dijete 2 min','Savasana 5 min'],[3]],
 ['Kod kuće',N,'L','Donji dio tijela – napredno',45,340,['Skokovi iz čučnja 4×12','Bugarski čučanj 4×10 po nozi','Pistol čučanj uz potporu 3×6 po nozi','Mostić na jednoj nozi 4×15 po nozi','Skokovi iskorakom 3×12','Čučanj uza zid 3×45 s','Podizanje na prste na jednoj nozi 3×15 po nozi'],[1,0]],
 ['Kod kuće',N,'G','Guzice – napredno',40,300,['Hip thrust na stolici na jednoj nozi 4×12 po nozi','Bugarski čučanj 4×12 po nozi','Donkey kick s pulsiranjem 4×20 po nozi','Fire hydrant s pulsiranjem 4×20 po nozi','Kozački iskorak 4×12 po nozi','Skokovi iz čučnja 3×15'],[0]],
 ['Kod kuće',N,'U','Gornji dio tijela – napredno',40,300,['Sklekovi s pauzom 4×12','Dijamant sklek 3×10','Pike sklek 4×10','Sklek s nogama na stolici 3×10','Superman 4×15','Plank s dodirom ramena 4×40 s','Triceps sklekovi na klupi 4×15'],[5,4]],
 ['Kod kuće',N,'C','Core – napredno',25,190,['V-up 4×12','Bicikl trbušnjaci 4×30','Bočni plank 3×45 s','Penjač 4×40 s','Plank s podizanjem noge 3×12 po nozi','Hollow hold 3×30 s'],[2]],
 ['Kod kuće',N,'F','Cijelo tijelo – intenzivno',40,380,['Burpee 4×10','Skokovi iz čučnja 4×15','Sklekovi 4×15','Iskoraci u hodu 4×16 po nozi','Penjač 4×40 s','Plank 3×60 s'],[6]],
 ['Kod kuće',N,'K','HIIT – napredno',25,330,['Zagrijavanje 3 min','Burpee 5×30 s','Skokovi iskorakom 5×30 s','Skater skokovi 5×30 s','Penjač 5×30 s','Hlađenje 3 min'],[6]],
 ['Kod kuće',N,'M','Joga – dubinsko istezanje',30,110,['Sunčev pozdrav 5 min','Ratnica II 1 min po strani','Pas licem prema dolje 2 min','Istezanje pregibača kuka 2 min po strani','Dijete 2 min','Savasana 5 min'],[3]],
 // ---- TERETANA ----
 ['U teretani',P,'L','Donji dio tijela – strojevi',40,250,['Leg press 3×12','Goblet čučanj 3×10','Hip thrust 3×10','Pregib nogu na spravi 3×12','Abdukcija na spravi 3×15'],[0,1]],
 ['U teretani',P,'U','Gornji dio tijela – strojevi',35,200,['Potisak na spravi za prsa 3×12','Lat pulldown 3×12','Potisak na spravi za ramena 3×10','Veslanje na kablu 3×12','Biceps/triceps superset 2×12'],[3,4,5]],
 ['U teretani',P,'F','Cijelo tijelo – uvod u teretanu',40,260,['Leg press 3×12','Potisak na spravi za prsa 3×12','Veslanje na kablu 3×12','Goblet čučanj 3×10','Plank 3×20 s'],[6]],
 ['U teretani',P,'K','Kardio na traci – lagano',25,200,['Zagrijavanje 5 min','Hodanje uzbrdo na traci 15 min','Hlađenje 5 min'],[6]],
 ['U teretani',P,'C','Core i istezanje',25,120,['Plank 3×20 s','Mrtva buba 3×10','Pallof press 3×10 po strani','Istezanje 5 min'],[2]],
 ['U teretani',S_,'L','Donji dio tijela i guzice',45,330,['Čučanj sa šipkom 4×10','Rumunjsko mrtvo dizanje 3×10','Bugarski čučanj 3×10 po nozi','Leg press 3×12','Hip thrust 4×10','Abdukcija na spravi 3×15'],[0,1]],
 ['U teretani',S_,'U','Gornji dio tijela',40,280,['Potisak bučicama 4×10','Veslanje na kablu 3×12','Potisak iznad glave 3×10','Lat pulldown 3×12','Biceps/triceps superset 3×12'],[3,4,5]],
 ['U teretani',S_,'F','Cijelo tijelo – snaga',45,340,['Mrtvo dizanje 3×8','Potisak bučicama 3×10','Lat pulldown 3×10','Bugarski čučanj 3×10 po nozi','Plank 3×40 s'],[6]],
 ['U teretani',S_,'K','Intervali na traci',25,280,['Zagrijavanje 3 min','30 s sprint / 60 s hod × 8','Hlađenje 3 min'],[6]],
 ['U teretani',S_,'C','Core – teretana',30,150,['Plank 3×45 s','Penjač 3×30 s','Drvosječa na kablu 3×12 po strani','Obrnuti trbušnjaci 3×12','Istezanje 5 min'],[2]],
 ['U teretani',N,'L','Donji dio tijela – snaga',55,420,['Čučanj sa šipkom 5×6','Mrtvo dizanje 4×6','Hip thrust 4×8','Bugarski čučanj 4×8 po nozi','Leg press 4×12','Pregib nogu na spravi 3×12'],[0,1]],
 ['U teretani',N,'U','Gornji dio tijela – snaga',50,360,['Potisak šipkom na klupi 5×6','Pull-up 4×8','Potisak iznad glave 4×8','Veslanje sa šipkom 4×8','Biceps/triceps superset 4×12'],[3,4,5]],
 ['U teretani',N,'F','Cijelo tijelo – napredno',55,440,['Mrtvo dizanje 4×5','Čučanj sa šipkom 4×6','Potisak šipkom na klupi 4×6','Veslanje sa šipkom 4×8','Kettlebell zamah 4×15','Plank 3×60 s'],[6]],
 ['U teretani',N,'K','HIIT na traci',25,300,['Zagrijavanje 3 min','30 s sprint / 30 s hod × 12','Hlađenje 3 min'],[6]],
 ['U teretani',N,'C','Core – napredno',35,200,['Podizanje koljena u visu 4×12','Plank s utegom na leđima 3×45 s','Drvosječa na kablu 4×12 po strani','V-up 4×15','Ruski zaokret s bučicom 4×20','Istezanje 5 min'],[2]],
 // ---- NA OTVORENOM ----
 ['Na otvorenom',P,'A','Brzo hodanje u prirodi',40,200,['Lagano zagrijavanje 5 min','Brzi hod 30 min','Istezanje 5 min'],[1,6]],
 ['Na otvorenom',P,'I','Hod i trk – početnice',25,200,['Hod 5 min','1 min trk / 2 min hod × 5','Hlađenje 5 min'],[1,6]],
 ['Na otvorenom',P,'P','Park trening – lagano',30,200,['Lagano zagrijavanje 5 min','Sklekovi o klupu 3×8','Step-up na klupu 3×10 po nozi','Čučnjevi 3×12','Plank na podlakticama 3×20 s','Istezanje 5 min'],[1,5]],
 ['Na otvorenom',P,'L','Noge i stube – lagano',30,210,['Lagano zagrijavanje 5 min','Penjanje uz stube 3×1 min','Iskoraci 3×8 po nozi','Podizanje na prste 3×15','Istezanje 5 min'],[1,0]],
 ['Na otvorenom',P,'M','Opuštanje u prirodi',25,80,['Lagano zagrijavanje 5 min','Istezanje 10 min','Disanje 4-7-8 5 min'],[3]],
 ['Na otvorenom',S_,'A','Brzi hod – duža tura',50,260,['Lagano zagrijavanje 5 min','Brzi hod 40 min','Istezanje 5 min'],[1,6]],
 ['Na otvorenom',S_,'I','Trčanje – intervali',35,330,['Hod 5 min','2 min trk / 1 min hod × 6','Hlađenje 5 min'],[1,6]],
 ['Na otvorenom',S_,'P','Park trening (klupe i stube)',40,300,['Lagano zagrijavanje 5 min','Penjanje uz stube 4×1 min','Sklekovi o klupu 3×12','Step-up na klupu 3×12 po nozi','Skokovi iz čučnja 3×10','Triceps sklekovi na klupi 3×12','Istezanje 5 min'],[1,5,0]],
 ['Na otvorenom',S_,'L','Noge i stube',40,320,['Lagano zagrijavanje 5 min','Penjanje uz stube 5×1 min','Iskoraci u hodu 3×12 po nozi','Bugarski čučanj 3×10 po nozi','Skokovi iz čučnja 3×10','Istezanje 5 min'],[1,0]],
 ['Na otvorenom',S_,'M','Joga u parku',30,100,['Lagano zagrijavanje 5 min','Sunčev pozdrav 5 min','Ratnica II 1 min po strani','Pas licem prema dolje 1 min','Istezanje 10 min'],[3]],
 ['Na otvorenom',N,'A','Trčanje – dugi tempo',60,420,['Lagano zagrijavanje 5 min','Trčanje 40 min','Hlađenje 5 min'],[1,6]],
 ['Na otvorenom',N,'I','Intervali – napredno',40,480,['Hod 5 min','2 min trk / 1 min hod × 8','Hlađenje 5 min'],[1,6]],
 ['Na otvorenom',N,'P','Park trening – intenzivno',45,420,['Lagano zagrijavanje 5 min','Penjanje uz stube 6×1 min','Dijamant sklek 4×12','Sklek s nogama na klupi 3×12','Step-up s visokim koljenom 4×12 po nozi','Skokovi iz čučnja 4×12','Burpee 3×10','Istezanje 5 min'],[1,5,0]],
 ['Na otvorenom',N,'L','Noge i stube – napredno',45,430,['Lagano zagrijavanje 5 min','Penjanje uz stube 6×1 min','Skokovi iskorakom 4×12','Bugarski čučanj 4×10 po nozi','Skokovi iz čučnja 4×12','Podizanje na prste na jednoj nozi 3×15 po nozi','Istezanje 5 min'],[1,0]],
 ['Na otvorenom',N,'M','Joga – napredno',35,140,['Lagano zagrijavanje 5 min','Sunčev pozdrav 8 min','Ratnica II 1 min po strani','Istezanje 10 min','Savasana 5 min'],[3]]
 ];
 const FO={L:0,G:1,U:2,C:3,F:4,K:5,M:6,A:0,I:1,P:2};
 const IC={L:'🦵',G:'🍑',U:'💪',C:'🎯',F:'🤸',K:'⚡',M:'🧘',A:'🚶',I:'🏃',P:'🌳'};
 const lv={[P]:1,[S_]:2,[N]:3},cnt={};
 Object.keys(WORKOUTS).forEach(k=>WORKOUTS[k].length=0);
 D.forEach(d=>{
  const k=d[0],id=({'Kod kuće':'h','U teretani':'g','Na otvorenom':'o'})[k]+lv[d[1]]+d[2];
  cnt[k]=(cnt[k]||0)+1;
  WORKOUTS[k].push({id,n:d[3],min:d[4],kcal:d[5],lvl:d[1],foc:d[2],ord:FO[d[2]],ex:d[6]});
  WI[id]=IC[d[2]];WB[id]=d[7];
 });
})();

// ---- prikaz: razina i savjeti ----
let wl='mine';
const LVN={'Početnica':'Beginner','Srednja':'Intermediate','Napredna':'Advanced'};
const LVINFO={
 'Početnica':['2–3 serije, manje ponavljanja, lakše varijante (npr. sklekovi na koljenima) i duži odmori – oko 45 s između serija. Cilj je naučiti tehniku i izgraditi naviku.','2–3 sets, fewer reps, easier variations (e.g. knee push-ups) and longer rests – about 45 s between sets. The goal is to learn technique and build the habit.'],
 'Srednja':['3–4 serije, srednji broj ponavljanja, vježbe na jednoj nozi i kraći odmori (oko 30 s). Povećavaj ponavljanja ili težinu kad ti postane lagano.','3–4 sets, moderate reps, single-leg work and shorter rests (about 30 s). Add reps or weight when it feels easy.'],
 'Napredna':['4–5 serija, više ponavljanja ili teža opterećenja, pliometrija i jednostrane vježbe, odmor oko 20 s. Tempo kontroliraj – spuštaj sporo, podiži snažno.','4–5 sets, more reps or heavier loads, plyometrics and single-sided work, rest about 20 s. Control the tempo – lower slowly, lift powerfully.']
};
const _wfOk=wfOk;
wfOk=function(w){return _wfOk(w)&&(wl==='all'||w.lvl===(S&&S.lvl||'Početnica'))};
const _wfBar=wfBar;
wfBar=function(){
 return `<div class="chips"><div class="chip ${wl==='mine'?'on':''}" onclick="wl='mine';render()">🎯 ${L('Moja razina','My level')}</div><div class="chip ${wl==='all'?'on':''}" onclick="wl='all';render()">${L('Sve razine','All levels')}</div></div>`+_wfBar();
};
(function(){
 const _t=train;
 train=function(){
  let h=_t();
  if(typeof openWo!=='undefined'&&openWo&&!(pl&&pl.id)){
   const w=find(openWo);if(w){const i=LVINFO[w.lvl];
    h=h.replace('<div class="card" style="margin-top:12px"><h3>Vježbe</h3>',`<div class="card" style="margin-top:12px;background:var(--p2)"><b>🎚️ ${L('Razina','Level')}: ${L(w.lvl,LVN[w.lvl])}</b><p style="font-size:13px;margin-top:4px">${L(i[0],i[1])}</p>${w.lvl!==S.lvl?`<p class="mut" style="font-size:12px;margin-top:4px">${L('Ovaj trening nije na tvojoj razini ('+S.lvl+').','This workout is not at your level ('+(LVN[S.lvl]||S.lvl)+').')}</p>`:''}</div><div class="card"><h3>Vježbe</h3>`)}
  }
  return h;
 };
 // odmor između serija prema razini
 let _cl='Srednja';const _pe=parseEx,_sp=startPlayer;
 parseEx=function(e){const r=_pe(e);if(r.rest===30)r.rest={'Početnica':45,'Srednja':30,'Napredna':20}[_cl]||30;return r};
 startPlayer=function(id){const w=find(id);if(w)_cl=w.lvl;return _sp(id)};
 // redoslijed u tjednom planu: točna razina, rotacija fokusa
 planPool=function(p,minT,lvl){
  const want=lvl||(S&&S.lvl)||'Početnica',mt=minT!=null?minT:((S&&S.plan&&S.plan.minT)||0);
  let l=WORKOUTS[p].filter(w=>w.lvl===want);if(!l.length)l=WORKOUTS[p].slice();
  const ok=l.filter(w=>!mt||Math.abs(w.min-mt)<=Math.max(15,mt*.6)),rest=l.filter(w=>ok.indexOf(w)<0);
  const o=(a,b)=>(a.ord-b.ord);return ok.sort(o).concat(rest.sort(o));
 };
 // tehnika: ako nema posebnog opisa, koristi opis pokreta
 const _tech=tech;
 tech=function(e){const t=_tech(e);if(t)return t;const k=animType(e),c=LCUE[k==='breathe'?'stretch':k];return c?L(c[0],c[1]):''};
 // dodatno prepoznavanje animacija
 const _at=animType;
 animType=function(e){
  const s=String(e).toLowerCase();
  const m=[['superman','prone'],['donkey','kick'],['fire hydrant','kick'],['ptica-pas','kick'],['pregib nogu','kick'],['bočno podizanje noge','kick'],['uza zid','wallsit'],['čučanj','squat'],['podizanje na prste','calf'],['v-up','legraise'],['hollow','legraise'],['obrnuti trbušnjaci','legraise'],['podizanje koljena u visu','legraise'],['sunčev','stretch'],['golub','stretch'],['pallof','press'],['drvosječa','press'],['pull-up','pulldown'],['mrtvo dizanje','hinge'],['kettlebell zamah','hinge'],['trčanje','run'],['jumping','jump'],['visoka koljena','run'],['hodanje na mjestu','walk'],['burpee','burpee'],['ruski zaokret','crunch'],['plank s podizanjem noge','plank'],['pike','push'],['dijamant','push'],['sklek s nogama','incline'],['krugovi rukama','press']];
  const f=m.find(x=>s.includes(x[0]));return f?f[1]:_at(e);
 };
})();
// dodatne animacije
Object.assign(EXA,{
 wallsit:{anc:'foot',dur:3,k:[{T:178,u:90,f:90,t1:90,s1:0,t2:90,s2:0},{T:178,u:100,f:100,t1:90,s1:0,t2:90,s2:0}]},
 calf:{anc:'foot',dur:2.2,k:[{u:20,f:50},{air:8,u:20,f:50,t1:2,s1:-2,t2:2,s2:-2}]},
 burpee:{anc:'hip',dur:3.6,k:[{x:55,u:20,f:50},{x:55,T:115,h:115,t1:-65,s1:-65,t2:-65,s2:-65,hx:82},{x:55,u:20,f:50,T:150,t1:75,s1:-25,t2:75,s2:-25},{x:55,air:16,T:178,u:175,f:175}]}
});
Object.assign(LPOSE,{wallsit:'wallsit',calf:'calf'});
