/* ===================== DIO 13: ZAČINI U RECEPTIMA ===================== */
const SPN={sol:'salt',papar:'black pepper',kurkuma:'turmeric','crni papar':'black pepper',cimet:'cinnamon',vanilija:'vanilla','slatka paprika':'sweet paprika','ljuta paprika':'chilli flakes',kumin:'cumin',origano:'oregano',bosiljak:'basil',peršin:'parsley',ružmarin:'rosemary',timijan:'thyme',kopar:'dill',vlasac:'chives',đumbir:'ginger','češnjak u prahu':'garlic powder','korica limuna':'lemon zest','muškatni oraščić':'nutmeg',koriander:'coriander','lovorov list':'bay leaf',sezam:'sesame seeds','dimljena paprika':'smoked paprika','mljeveni đumbir':'ground ginger',mažuran:'marjoram',menta:'mint'};
const SPW={S:['na početku, uz zagrijavanje masnoće','at the start, while the fat heats'],M:['usred kuhanja','midway through cooking'],E:['pred kraj kuhanja','near the end of cooking'],P:['pri posluživanju','when serving'],R:['u marinadi prije pečenja','in the marinade before cooking'],B:['u smjesu prije pečenja ili kuhanja','mixed in before cooking']};
// id: [[začin, količina po porciji, kada]]
const SPICES={
r1:[['cimet','¼ žličice','M'],['vanilija','prstohvat','E'],['sol','prstohvat','S']],
r2:[['crni papar','prstohvat','E'],['muškatni oraščić','prstohvat','B'],['sol','vrlo malo (feta je slana)','E'],['peršin','1 žlica nasjeckanog','P']],
r3:[['sol','½ žličice','M'],['crni papar','¼ žličice','R'],['origano','½ žličice','R'],['slatka paprika','½ žličice','R'],['peršin','1 žlica nasjeckanog','P']],
r4:[['sol','prstohvat','E'],['crni papar','prstohvat','E'],['origano','½ žličice','E'],['peršin','1 žlica nasjeckanog','P']],
r5:[['sol','½ žličice','R'],['crni papar','¼ žličice','R'],['kopar','1 žlica svježeg','P'],['češnjak u prahu','¼ žličice','R']],
r6:[['kurkuma','½ žličice','S'],['kumin','½ žličice','S'],['sol','½ žličice','E'],['crni papar','¼ žličice','E'],['lovorov list','1 list','M']],
r7:[['cimet','prstohvat','P'],['đumbir','prstohvat svježe naribanog','B']],
r8:[['cimet','¼ žličice','B'],['sol','prstohvat','B'],['vanilija','½ žličice','B']],
r9:[['cimet','prstohvat','P'],['vanilija','prstohvat','B'],['menta','2–3 listića','P']],
r10:[['kurkuma','½ žličice','S'],['crni papar','¼ žličice','M'],['sol','½ žličice','E'],['vlasac','1 žlica sjeckanog','P'],['dimljena paprika','¼ žličice','M']],
r11:[['cimet','½ žličice','B'],['vanilija','½ žličice','B'],['sol','prstohvat','B']],
r12:[['sezam','1 žličica','P'],['đumbir','½ žličice','M'],['crni papar','prstohvat','P']],
r13:[['sol','½ žličice','M'],['crni papar','¼ žličice','E'],['origano','½ žličice','M'],['ljuta paprika','prstohvat','M'],['bosiljak','nekoliko listića','P']],
r14:[['sol','prstohvat','E'],['crni papar','¼ žličice','E'],['slatka paprika','½ žličice','R'],['peršin','1 žlica nasjeckanog','P']],
r15:[['slatka paprika','1 žličica','R'],['kumin','½ žličice','R'],['sol','½ žličice','R'],['crni papar','¼ žličice','R'],['origano','½ žličice','R']],
r16:[['sol','½ žličice','R'],['crni papar','¼ žličice','R'],['peršin','1 žlica nasjeckanog','P'],['lovorov list','1 list','M']],
r17:[['sol','½ žličice','B'],['crni papar','¼ žličice','B'],['slatka paprika','1 žličica','S'],['mažuran','½ žličice','B'],['lovorov list','1 list','M']],
r18:[['kumin','½ žličice','B'],['sol','¼ žličice','B'],['slatka paprika','prstohvat','P'],['peršin','1 žlica nasjeckanog','P']],
r19:[['cimet','½ žličice','P'],['vanilija','prstohvat','B']],
r20:[['crni papar','¼ žličice','E'],['sol','vrlo malo (panceta je slana)','E'],['ljuta paprika','prstohvat','P'],['vlasac','1 žlica sjeckanog','P']],
r21:[['vanilija','½ žličice','B'],['cimet','prstohvat','P']],
r22:[['crni papar','¼ žličice','E'],['origano','½ žličice','E'],['sol','vrlo malo (masline su slane)','E']],
r23:[['sol','½ žličice','M'],['crni papar','¼ žličice','R'],['češnjak u prahu','¼ žličice','R'],['bosiljak','nekoliko listića','P']],
r24:[['sol','½ žličice','R'],['crni papar','¼ žličice','R'],['peršin','1 žlica nasjeckanog','P'],['korica limuna','½ žličice','E']],
r25:[['ružmarin','1 grančica','R'],['timijan','½ žličice','R'],['slatka paprika','1 žličica','R'],['sol','½ žličice','R'],['crni papar','¼ žličice','R']],
r26:[['sol','prstohvat (po želji)','P'],['ljuta paprika','prstohvat','P']],
r27:[['cimet','prstohvat','B'],['vanilija','½ žličice','B'],['sol','prstohvat','B']]
};
// zamjenski prijedlozi za vlastite recepte prema sastojcima
const SPAUTO=[[/piletin|pileć|puretin/,[['crni papar','¼ žličice','R'],['slatka paprika','1 žličica','R'],['češnjak u prahu','¼ žličice','R'],['ružmarin','1 grančica','R']]],[/losos|riba|tuna|bakalar|oslić/,[['crni papar','¼ žličice','R'],['kopar','1 žlica svježeg','P'],['korica limuna','½ žličice','E']]],[/govedin|svinjetin|mljeven/,[['crni papar','¼ žličice','R'],['slatka paprika','1 žličica','S'],['lovorov list','1 list','M']]],[/jaje|jaja/,[['crni papar','¼ žličice','E'],['vlasac','1 žlica sjeckanog','P']]],[/slanutak|leća|grah|tofu/,[['kumin','½ žličice','S'],['kurkuma','½ žličice','S'],['slatka paprika','1 žličica','M']]],[/tjestenin|riža|kvinoja/,[['origano','½ žličice','M'],['bosiljak','nekoliko listića','P']]],[/zob|jabuk|banan|jagod|borovnic|jogurt|skuta/,[['cimet','½ žličice','P'],['vanilija','prstohvat','B']]]];
function spiceFor(r){
 if(SPICES[r.id])return SPICES[r.id];
 const t=(r.ing||[]).map(i=>String(i[0]).toLowerCase()).join(' '),out=[];
 SPAUTO.forEach(a=>{if(a[0].test(t))a[1].forEach(x=>{if(!out.some(y=>y[0]===x[0]))out.push(x)})});
 if(!out.some(x=>x[0]==='sol'))out.push(['sol','po ukusu, pred kraj','E']);
 return out.slice(0,6);
}
function spAmt(a){return ST.lang==='hr'?a:a.replace(/žličice|žličica/g,'tsp').replace(/žlicu|žlica/g,'tbsp').replace('prstohvat','pinch').replace('listića','leaves').replace('list','leaf').replace('grančica','sprig').replace('nasjeckanog','chopped').replace('sjeckanog','chopped').replace('svježeg','fresh').replace('svježe naribanog','freshly grated').replace('vrlo malo','very little').replace('feta je slana','feta is salty').replace('panceta je slana','pancetta is salty').replace('masline su slane','olives are salty').replace('po želji','optional').replace('po ukusu, pred kraj','to taste, near the end').replace('nekoliko','a few')}
function spicesCard(r){
 const l=spiceFor(r);if(!l.length)return '';
 return `<div class="card"><h3>🧂 ${L('Začini i trave','Spices and herbs')}</h3><p class="mut" style="font-size:12px;margin:2px 0 6px">${L('Količine su za 1 porciju; prilagodi okusu.','Amounts are per 1 serving; adjust to taste.')}</p>${l.map(x=>`<div class="flex" style="padding:6px 0;border-top:1px solid var(--line);align-items:flex-start"><span style="flex:1"><b>${L(x[0],SPN[x[0]]||x[0])}</b><br><span class="mut" style="font-size:12px">${L(SPW[x[2]][0],SPW[x[2]][1])}</span></span><b style="text-align:right;max-width:45%">${_eh(spAmt(x[1]))}</b></div>`).join('')}</div>`;
}
(function(){
 const rc=recipe;
 recipe=function(){
  const h=rc(),r=RECIPES.find(x=>x.id===openRec);
  if(!r||h.indexOf('<h3>Priprema</h3>')<0)return h;
  return h.replace('<div class="card"><h3>Priprema</h3>',spicesCard(r)+'<div class="card"><h3>Priprema</h3>');
 };
})();
