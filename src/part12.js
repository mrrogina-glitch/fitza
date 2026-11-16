/* ===================== DIO 12: PREPORUČENA TEŽINA PO RAZINI ===================== */
// [ključ u nazivu, faktori tjelesne težine (P,S,N), korak, minimum kg, "po ruci"]
const RW=[
['čučanj sa šipkom',[.35,.6,.9],2.5,15,0],['prednji čučanj',[.3,.5,.75],2.5,15,0],['rumunjsko mrtvo dizanje',[.3,.5,.7],2.5,10,0],['mrtvo dizanje',[.4,.7,1],2.5,20,0],['hip thrust',[.4,.7,1],2.5,10,0],
['goblet čučanj',[.12,.2,.3],1,4,0],['bugarski čučanj',[.08,.14,.2],1,2,1],['leg press',[.8,1.2,1.8],5,20,0],['pregib nogu na spravi',[.2,.3,.4],2.5,10,0],['abdukcija na spravi',[.25,.4,.55],2.5,10,0],
['potisak na spravi za prsa',[.25,.4,.55],2.5,10,0],['potisak na spravi za ramena',[.2,.3,.4],2.5,5,0],['potisak šipkom na klupi',[.3,.45,.65],2.5,15,0],['potisak bučicama',[.1,.17,.25],1,2,1],['potisak iznad glave',[.07,.12,.17],1,2,1],
['lat pulldown',[.35,.5,.65],2.5,10,0],['veslanje na kablu',[.3,.45,.6],2.5,10,0],['veslanje sa šipkom',[.3,.45,.6],2.5,15,0],['biceps/triceps',[.05,.08,.12],.5,1,1],
['kettlebell zamah',[.12,.2,.3],2,4,0],['drvosječa',[.1,.15,.2],2.5,5,0],['pallof',[.08,.12,.18],2.5,5,0],['ruski zaokret s bučicom',[.05,.08,.12],1,2,0],['plank s utegom',[.08,.12,.15],2.5,5,0]
];
function recWeight(e,lvl){
 const s=String(e).toLowerCase(),i={'Početnica':0,'Srednja':1,'Napredna':2}[lvl];if(i==null)return null;
 const r=RW.find(x=>s.startsWith(x[0]));
 if(!r)return null;
 const bw=(S&&+S.w)||65,v=Math.max(r[3],Math.round(bw*r[1][i]/r[2])*r[2]);
 return {kg:v,each:!!r[4]};
}
function homeLoad(e,w){
 const s=String(e).toLowerCase();
 if(w&&w.id&&w.id[0]!=='h'&&w.id[0]!=='o')return '';
 if(!/čučanj|čučnjev|iskora|bugarski|mostić|hip thrust|rumunjsko|sklek|podizanje na prste|kozački|donkey|fire hydrant|step-up/.test(s))return '';
 return {'Početnica':L('Tjelesna težina – bez dodatnog opterećenja','Bodyweight – no extra load'),'Srednja':L('Tjelesna težina; kad postane lagano, drži bocu vode ili bučicu 2–4 kg','Bodyweight; when it feels easy hold a water bottle or dumbbell of 2–4 kg'),'Napredna':L('Tjelesna težina uz opterećenje 4–10 kg (ruksak ili bučice) ili sporiji tempo (3 s spuštanje)','Bodyweight plus 4–10 kg (backpack or dumbbells) or slower tempo (3 s lowering)')}[w.lvl]||'';
}
(function(){
 const eb=exBlock;
 exBlock=function(w,e,i){
  let h=eb(w,e,i);const r=recWeight(e,w.lvl),lo=homeLoad(e,w),lvn={'Početnica':'Beginner','Srednja':'Intermediate','Napredna':'Advanced'}[w.lvl];
  let line='';
  if(r)line=`<p style="font-size:14px;margin:6px 0;padding:8px 10px;border-radius:12px;background:var(--p2)">🏋️ <b>${L('Preporučena težina','Recommended weight')}: ${r.kg} kg${r.each?' '+L('po bučici','per dumbbell'):''}</b> <span class="mut">(${L(w.lvl,lvn)})</span><br><span class="mut" style="font-size:12px">${L('Odaberi težinu uz koju zadnja 2 ponavljanja u seriji teško ide, ali tehnika ostaje čista. Prvi put kreni 20 % lakše.','Pick a weight where the last 2 reps of a set are hard but your form stays clean. The first time start 20 % lighter.')}</span></p>`;
  else if(lo)line=`<p style="font-size:14px;margin:6px 0;padding:8px 10px;border-radius:12px;background:var(--p2)">🏋️ <b>${L('Opterećenje','Load')}:</b> ${lo}</p>`;
  if(line)h=h.replace('<div class="row"><div><label>Uteg (kg)',line+'<div class="row"><div><label>Uteg (kg)');
  if(r)h=h.replace(new RegExp('(id="kg'+i+'" type="number" step="0.5" min="0" value=)""'),'$1"'+r.kg+'"');
  return h;
 };
})();
