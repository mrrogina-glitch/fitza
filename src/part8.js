/* ===================== DIO 8: ANIMACIJE S KOSTURNIM MODELOM (FK/IK, stalne duljine udova) ===================== */
const SG={tor:26,ua:15,fa:14,th:21,sh:20,hd:11};
const _d=a=>{const r=a*Math.PI/180;return [Math.sin(r),Math.cos(r)]};
const _pt=(p,l,a)=>{const d=_d(a);return [p[0]+l*d[0],p[1]+l*d[1]]};
const PD={T:180,u:0,f:0,t1:0,s1:0,t2:0,s2:0,air:0,g:0,x:55,ax:60,h:null,hx:null,hy:0};
function _ik(S,H,l1,l2){
 let dx=H[0]-S[0],dy=H[1]-S[1],d=Math.hypot(dx,dy);d=Math.min(d,l1+l2-.01);
 const a=Math.atan2(dx,dy)*180/Math.PI,al=Math.acos(Math.max(-1,Math.min(1,(l1*l1+d*d-l2*l2)/(2*l1*d))))*180/Math.PI;
 const c=[a-al,a+al].map(u=>{const E=_pt(S,l1,u);return {u,E}}).sort((p,q)=>p.E[0]-q.E[0])[0];
 const f=Math.atan2(H[0]-c.E[0],H[1]-c.E[1])*180/Math.PI;return {u:c.u,f};
}
function skel(p,anc){
 const hip=[0,0],sh=_pt(hip,SG.tor,p.T),head=_pt(sh,SG.hd,p.h==null?p.T:p.h);
 const k1=_pt(hip,SG.th,p.t1),a1=_pt(k1,SG.sh,p.s1),k2=_pt(hip,SG.th,p.t2),a2=_pt(k2,SG.sh,p.s2);
 let maxY=Math.max(k1[1],a1[1],k2[1],a2[1]);
 let u=p.u,f=p.f,el,ha;
 if(p.hx!=null){ // ruke se postavljaju IK-om na zadanu točku (npr. sklek)
  let sx,dy=93-p.g-p.air-maxY; // pomak y
  const S=[sh[0],sh[1]+dy];
  const H=[p.hx-(anc==='hip'?p.x:0),93-p.hy];
  // pomak x: kuk na p.x
  const S2=[S[0]+p.x,S[1]],ik=_ik(S2,[p.hx,H[1]],SG.ua,SG.fa);u=ik.u;f=ik.f;
 }
 el=_pt(sh,SG.ua,u);ha=_pt(el,SG.fa,f);
 const P=[head,sh,hip,el,ha,k1,a1,k2,a2];
 if(p.hx==null)maxY=Math.max(...P.map(q=>q[1]));
 const dy=93-p.g-p.air-maxY;
 let dx=anc==='foot'?p.ax-a1[0]:p.x;
 return P.map(q=>[q[0]+dx,q[1]+dy]);
}
const EXA={
squat:{anc:'foot',dur:3,k:[{u:25,f:70},{T:135,u:85,f:90,t1:85,s1:-25,t2:85,s2:-25}]},
lunge:{dur:3.2,k:[{u:15,f:15},{t1:90,s1:0,t2:-10,s2:-100,u:15,f:15}]},
push:{dur:2.6,x:55,k:[{T:115,t1:-65,s1:-65,t2:-65,s2:-65,hx:81},{T:98,t1:-82,s1:-82,t2:-82,s2:-82,hx:81}]},
incline:{dur:2.6,bench:[84,20],k:[{T:134,t1:-46,s1:-46,t2:-46,s2:-46,hx:96,hy:20,x:50},{T:117,t1:-63,s1:-63,t2:-63,s2:-63,hx:96,hy:20,x:50}]},
kneepush:{dur:2.6,k:[{T:127,t1:-53,s1:-53,t2:-53,s2:-53,hx:81},{T:101,t1:-79,s1:-79,t2:-79,s2:-79,hx:81}].map(q=>Object.assign(q,{s1:-110,s2:-110}))},
plank:{dur:3,k:[{T:103,t1:-77,s1:-77,t2:-77,s2:-77,u:0,f:90},{T:103,t1:-77,s1:-77,t2:-96,s2:-96,u:0,f:90}]},
climb:{dur:2,k:[{T:115,t1:-65,s1:-65,t2:-65,s2:-65,hx:81},{T:115,t1:70,s1:-80,t2:-65,s2:-65,hx:81},{T:115,t1:-65,s1:-65,t2:-65,s2:-65,hx:81},{T:115,t1:-65,s1:-65,t2:70,s2:-80,hx:81}]},
bridge:{anc:'foot',lie:1,dur:3,k:[{ax:88,T:-90,h:-90,u:90,f:90,t1:140,s1:20,t2:140,s2:20},{ax:88,T:-60,h:-90,u:90,f:90,t1:105,s1:23,t2:105,s2:23}]},
crunch:{anc:'foot',dur:2.4,k:[{ax:90,T:-90,h:-90,u:90,f:90,t1:140,s1:20,t2:140,s2:20},{ax:90,T:-128,h:-135,u:100,f:100,t1:140,s1:20,t2:140,s2:20}]},
legraise:{anc:'hip',dur:3,k:[{x:50,T:-90,h:-90,u:90,f:90,t1:92,s1:92,t2:92,s2:92},{x:50,T:-90,h:-90,u:90,f:90,t1:172,s1:172,t2:172,s2:172}]},
deadbug:{anc:'hip',dur:4,k:[{x:48,T:-90,h:-90,u:180,f:180,t1:172,s1:90,t2:172,s2:90},{x:48,T:-90,h:-90,u:-90,f:-90,t1:172,s1:90,t2:95,s2:92},{x:48,T:-90,h:-90,u:180,f:180,t1:172,s1:90,t2:172,s2:90},{x:48,T:-90,h:-90,u:180,f:180,t1:95,s1:92,t2:172,s2:90}]},
prone:{anc:'hip',dur:3,k:[{x:55,T:90,h:90,u:90,f:90,t1:-90,s1:-90,t2:-90,s2:-90},{x:55,T:98,h:112,u:112,f:112,t1:-108,s1:-108,t2:-108,s2:-108}]},
kick:{anc:'hip',dur:3,k:[{x:62,T:108,h:100,u:0,f:0,t1:0,s1:-90,t2:0,s2:-90},{x:62,T:108,h:100,u:0,f:0,t1:0,s1:-90,t2:-105,s2:180}]},
catcow:{anc:'hip',dur:4,k:[{x:62,T:100,h:130,u:0,f:0,t1:0,s1:-90,t2:0,s2:-90},{x:62,T:116,h:40,u:0,f:0,t1:0,s1:-90,t2:0,s2:-90}]},
downdog:{anc:'hip',dur:4,k:[{x:50,T:40,h:70,t1:-25,s1:-25,t2:-25,s2:-25,hx:100},{x:50,T:46,h:76,t1:-27,s1:-27,t2:-27,s2:-27,hx:100}]},
child:{anc:'hip',dur:5,k:[{x:42,T:75,h:80,u:90,f:90,t1:80,s1:-90,t2:80,s2:-90},{x:42,T:69,h:76,u:90,f:90,t1:80,s1:-90,t2:80,s2:-90}]},
rest:{anc:'hip',dur:5,k:[{x:40,T:-90,h:-90,u:90,f:90,t1:90,s1:90,t2:90,s2:90},{x:40,T:-93,h:-90,u:90,f:90,t1:90,s1:90,t2:90,s2:90}]},
warrior:{dur:4,k:[{x:55,T:180,u:90,f:90,t1:88,s1:0,t2:-61,s2:-61},{x:55,T:180,u:100,f:100,t1:88,s1:0,t2:-61,s2:-61}]},
row:{dur:2.6,k:[{T:112,h:122,t1:35,s1:-25,t2:35,s2:-25,u:0,f:0},{T:112,h:122,t1:35,s1:-25,t2:35,s2:-25,u:-60,f:0}]},
seatrow:{anc:'hip',dur:2.6,k:[{x:62,T:178,u:90,f:90,t1:90,s1:90,t2:90,s2:90},{x:62,T:172,u:-35,f:85,t1:90,s1:90,t2:90,s2:90}]},
pulldown:{anc:'hip',dur:2.8,k:[{x:60,T:180,u:172,f:176,t1:0,s1:-90,t2:0,s2:-90},{x:60,T:176,u:10,f:165,t1:0,s1:-90,t2:0,s2:-90}]},
press:{dur:2.6,k:[{u:35,f:150},{u:180,f:180}]},
curl:{dur:2.4,k:[{u:12,f:12},{u:12,f:150}]},
hinge:{anc:'foot',dur:3,k:[{u:0,f:0},{T:95,h:100,t1:12,s1:2,t2:12,s2:2,u:0,f:0}]},
stretch:{anc:'foot',dur:4,k:[{u:180,f:180,T:178},{T:60,h:55,t1:6,s1:6,t2:6,s2:6,u:5,f:5}]},
jump:{anc:'foot',dur:2.4,k:[{T:150,u:-60,f:-50,t1:75,s1:-25,t2:75,s2:-25},{air:12,T:178,u:175,f:175,t1:0,s1:0,t2:0,s2:6}]},
step:{anc:'foot',dur:3.4,bench:[84,20],k:[{ax:66,u:20,f:50},{ax:90,t1:80,s1:-5,u:30,f:60},{ax:100,g:20,u:20,f:50}, {ax:90,t1:80,s1:-5,u:30,f:60}]},
run:{dur:.9,ground:1,k:[{T:170,u:-45,f:30,t1:65,s1:10,t2:-30,s2:-85},{air:4,T:170,u:0,f:70,t1:15,s1:0,t2:25,s2:-110},{T:170,u:50,f:110,t1:-30,s1:-85,t2:65,s2:10},{air:4,T:170,u:0,f:70,t1:25,s1:-110,t2:15,s2:0}]},
walk:{dur:1.6,ground:1,k:[{u:-25,f:-10,t1:25,s1:5,t2:-20,s2:-10},{u:0,f:0,t1:0,s1:0,t2:0,s2:-20},{u:25,f:15,t1:-20,s1:-10,t2:25,s2:5},{u:0,f:0,t1:0,s1:-20,t2:0,s2:0}]}
};
function _frames(def){
 const K=def.k.map(q=>Object.assign({},PD,def.anc==='foot'?{}:{},q)),anc=def.anc||'hip',n=K.length,N=14,out=[];
 for(let i=0;i<n;i++){const a=K[i],b=K[(i+1)%n];for(let s=0;s<N;s++){
  const t=s/N,e=(1-Math.cos(Math.PI*t))/2,q={};
  for(const k in PD){const x=a[k],y=b[k];q[k]=(x==null||y==null)?(x==null?y:x):x+(y-x)*e}
  if(a.hx==null)q.hx=null;
  out.push(skel(q,anc))}}
 out.push(out[0]);return out;
}
function fig(type){
 const def=EXA[type];if(!def)return '';
 const fr=_frames(def),dur=def.dur||3,nf=fr.length;
 const vals=(j,c)=>fr.map(f=>f[j][c].toFixed(1)).join(';');
 const an=(nm,j,c)=>`<animate attributeName="${nm}" values="${vals(j,c)}" dur="${dur}s" repeatCount="indefinite" calcMode="linear"/>`;
 const f0=fr[0],ln=(a,b,col,w)=>`<line stroke="${col}" stroke-width="${w||5.5}" stroke-linecap="round" x1="${f0[a][0].toFixed(1)}" y1="${f0[a][1].toFixed(1)}" x2="${f0[b][0].toFixed(1)}" y2="${f0[b][1].toFixed(1)}">${an('x1',a,0)}${an('y1',a,1)}${an('x2',b,0)}${an('y2',b,1)}</line>`;
 let s=`<svg viewBox="0 -20 120 120" data-dur="${dur}"><line x1="0" y1="93" x2="120" y2="93" stroke="#d9c9e3" stroke-width="2"${def.ground?` stroke-dasharray="6 6"><animate attributeName="stroke-dashoffset" values="0;-24" dur="${def.dur}s" repeatCount="indefinite"/></line>`:'/>'}`;
 if(def.bench)s+=`<rect x="${def.bench[0]}" y="${93-def.bench[1]}" width="${118-def.bench[0]}" height="${def.bench[1]}" rx="3" fill="#e5d5ef"/>`;
 // redoslijed: daleka noga, trup, bliža noga, ruka, vrat+glava
 s+=ln(2,7,'#c9b3e0')+ln(7,8,'#c9b3e0')+ln(2,1,'#7048e8',6.5)+ln(2,5,'#7048e8')+ln(5,6,'#7048e8')+ln(1,3,'#9b7bf0')+ln(3,4,'#9b7bf0');
 s+=`<circle r="7.5" fill="#ff6b9a" cx="${f0[0][0].toFixed(1)}" cy="${f0[0][1].toFixed(1)}">${an('cx',0,0)}${an('cy',0,1)}</circle></svg>`;
 return s;
}
function anim(type){
 if(!EXA[type])return `<div class="anim"><svg viewBox="0 0 120 100"><circle cx="60" cy="44" r="20" fill="#ff6b9a" opacity=".35"><animate attributeName="r" values="16;32;16" dur="6s" repeatCount="indefinite"/></circle><circle cx="60" cy="44" r="10" fill="#7048e8" opacity=".6"/><text x="60" y="92" text-anchor="middle" font-size="9" fill="#7a7185">${L('polako, mirno, ravnomjerno disanje','slow, calm, steady breathing')}</text></svg></div>`;
 return `<div class="anim">${fig(type)}</div>`;
}
function animType(e){
 const s=String(e).toLowerCase();
 const m=[['mačka','catcow'],['pas licem','downdog'],['ratnica','warrior'],['dijete','child'],['savasana','rest'],['istezanje','stretch'],['skokovi','jump'],['bugarski','lunge'],['iskora','lunge'],['sklekovi na koljenima','kneepush'],['sklekovi o klupu','incline'],['sklek','push'],['penjač','climb'],['plank','plank'],['mostić','bridge'],['hip thrust','bridge'],['bicikl','crunch'],['trbušnjaci','crunch'],['mrtva buba','deadbug'],['veslanje na kablu','seatrow'],['pulldown','pulldown'],['veslanje','row'],['potisak','press'],['biceps','curl'],['rumunjsko','hinge'],['čučn','squat'],['leg press','squat'],['abdukcija','squat'],['step-up','step'],['stube','step'],['sprint','run'],['trk','run'],['hod','walk'],['zagrijavanje','walk'],['hlađenje','walk']];
 const f=m.find(x=>s.includes(x[0]));return f?f[1]:'breathe';
}
Object.assign(LPOSE,{stretch:'stretch',prone:'prone',kick:'kick',legraise:'legraise',deadbug:'deadbug',catcow:'catcow'});

/* ---------- moderni dodatci: prijelazi, mikro-interakcije ---------- */
document.head.insertAdjacentHTML('beforeend',`<style id="m2">
@keyframes pgin{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
#app.pgin>*:not(nav):not(.toast){animation:pgin .45s cubic-bezier(.2,.8,.2,1) both}
#app.pgin>*:not(nav):not(.toast)>*:nth-child(2){animation:pgin .5s .05s cubic-bezier(.2,.8,.2,1) both}
#app.pgin>*:not(nav):not(.toast)>*:nth-child(3){animation:pgin .5s .1s cubic-bezier(.2,.8,.2,1) both}
#app.pgin>*:not(nav):not(.toast)>*:nth-child(4){animation:pgin .5s .15s cubic-bezier(.2,.8,.2,1) both}
#app.pgin>*:not(nav):not(.toast)>*:nth-child(n+5){animation:pgin .5s .2s cubic-bezier(.2,.8,.2,1) both}
.card,.btn,.chip,.stat,nav button{transition:transform .18s ease,box-shadow .2s ease,background .2s}
.card.sub:active,.stat:active,.chip:active{transform:scale(.97)}
.btn:active{transform:scale(.96)}
@media(hover:hover){.card.sub:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(112,72,232,.16)}.btn:hover{filter:brightness(1.05)}}
.anim{background:linear-gradient(160deg,#fff0f6,#f1ebff);border-radius:20px;box-shadow:inset 0 0 0 1px rgba(112,72,232,.08),0 6px 18px rgba(112,72,232,.08);padding:6px 0}
.anim svg{height:150px}
body.dark .anim,[data-theme=dark] .anim{background:linear-gradient(160deg,#2a1f3a,#1f1b33)}
@media(prefers-reduced-motion:reduce){#app.pgin *{animation:none!important}}
</style>`);
(function(){
 const _rr=render;let _lt=null;
 render=function(){
  _rr.apply(this,arguments);
  try{const a=document.getElementById('app');if(a&&_lt!==tab+'|'+(S?1:0)&&!(typeof ST!=='undefined'&&ST.rm)){_lt=tab+'|'+(S?1:0);a.classList.add('pgin');clearTimeout(window.__pg);window.__pg=setTimeout(()=>a.classList.remove('pgin'),800)}}catch(e){}
 };
})();
