/* ===================== DIO 7: UPITNIK, PODSJETNICI I SERIJE, MALI CILJ, BIBLIOTEKA ===================== */
const LIBSRC=`Čučanj|Bodyweight squat|lg|bw|1|squat|3
Čučanj s pauzom|Paused squat|lg|bw|1|squat|3
Sumo čučanj|Sumo squat|lg|bw|1|squat|3
Širok čučanj s pulsiranjem|Wide squat pulses|lg|bw|2|squat|3
Čučanj uza zid|Wall squat|lg|bw|1|squat|2
Sjedenje uz zid|Wall sit|lg|bw|2|squat|2
Polagani čučanj (tempo 3 s)|Tempo squat|lg|bw|2|squat|3
Iskorak naprijed|Forward lunge|lg|bw|1|lunge|3
Iskorak unatrag|Reverse lunge|lg|bw|1|lunge|3
Bočni iskorak|Lateral lunge|lg|bw|1|lunge|3
Kozački iskorak|Curtsy lunge|lg|bw|2|lunge|3
Iskorak u hodu|Walking lunge|lg|bw|2|lunge|4
Bugarski čučanj|Bulgarian split squat|lg|bw|3|lunge|4
Skok iz čučnja|Squat jump|lg|bw|3|jump|3
Skok iskorakom|Jump lunge|lg|bw|3|jump|3
Podizanje na prste|Calf raise|lg|bw|1|step|2
Step-up na klupu|Bench step-up|lg|bn|1|step|3
Step-up s visokim koljenom|Step-up with knee drive|lg|bn|2|step|3
Pistol čučanj uz potporu|Assisted pistol squat|lg|bw|3|squat|4
Goblet čučanj|Goblet squat|lg|db|1|squat|4
Iskorak s bučicama|Dumbbell lunge|lg|db|2|lunge|4
Bugarski čučanj s bučicama|Dumbbell Bulgarian split squat|lg|db|3|lunge|5
Rumunjsko mrtvo dizanje s bučicama|Dumbbell Romanian deadlift|lg|db|2|hinge|4
Step-up s bučicama|Dumbbell step-up|lg|db|2|step|4
Sumo čučanj s bučicom|Dumbbell sumo squat|lg|db|1|squat|4
Čučanj sa šipkom na leđima|Barbell back squat|lg|bb|3|squat|6
Prednji čučanj sa šipkom|Barbell front squat|lg|bb|3|squat|6
Mrtvo dizanje|Conventional deadlift|lg|bb|3|hinge|6
Rumunjsko mrtvo dizanje sa šipkom|Barbell Romanian deadlift|lg|bb|2|hinge|5
Iskorak sa šipkom|Barbell lunge|lg|bb|3|lunge|5
Leg press|Leg press|lg|mc|1|squat|4
Opružanje nogu (leg extension)|Leg extension|lg|mc|1|squat|3
Pregib nogu (leg curl)|Leg curl|lg|mc|1|hinge|3
Hack čučanj na spravi|Hack squat machine|lg|mc|2|squat|4
Podizanje na prste na spravi|Machine calf raise|lg|mc|1|step|3
Adukcija na spravi|Hip adduction machine|lg|mc|1|squat|3
Kettlebell goblet čučanj|Kettlebell goblet squat|lg|kb|1|squat|4
Kettlebell mrtvo dizanje|Kettlebell deadlift|lg|kb|1|hinge|4
Čučanj s elastičnom trakom|Banded squat|lg|bd|1|squat|3
Bočno hodanje s trakom|Banded lateral walk|lg|bd|1|walk|3
Iskorak s elastičnom trakom|Banded lunge|lg|bd|2|lunge|4
Mostić za gluteuse|Glute bridge|gl|bw|1|bridge|3
Mostić na jednoj nozi|Single-leg glute bridge|gl|bw|2|bridge|3
Mostić s pauzom|Paused glute bridge|gl|bw|1|bridge|3
Marširajući mostić|Marching bridge|gl|bw|2|bridge|3
Donkey kick|Donkey kick|gl|bw|1|kick|3
Fire hydrant|Fire hydrant|gl|bw|1|kick|3
Frog pump|Frog pump|gl|bw|1|bridge|3
Bočno podizanje noge|Side-lying leg raise|gl|bw|1|bridge|3
Bočno podizanje noge stojeći|Standing leg abduction|gl|bw|1|step|3
Clamshell s trakom|Banded clamshell|gl|bd|1|bridge|3
Mostić s elastičnom trakom|Banded glute bridge|gl|bd|1|bridge|3
Fire hydrant s trakom|Banded fire hydrant|gl|bd|2|kick|3
Kickback s trakom|Banded kickback|gl|bd|1|kick|3
Hip thrust na klupi|Bench hip thrust|gl|bn|2|bridge|4
Hip thrust s bučicom|Dumbbell hip thrust|gl|db|2|bridge|4
Hip thrust sa šipkom|Barbell hip thrust|gl|bb|3|bridge|5
Sumo mrtvo dizanje|Sumo deadlift|gl|bb|3|hinge|5
Kablovski kickback|Cable glute kickback|gl|mc|2|kick|3
Abdukcija na spravi|Hip abduction machine|gl|mc|1|squat|3
Kettlebell zamah|Kettlebell swing|gl|kb|2|hinge|4
Dobro jutro (good morning)|Good morning|gl|bw|1|hinge|3
Veslanje bučicom jednom rukom|Single-arm dumbbell row|bk|db|1|row|4
Veslanje bučicama u pretklonu|Bent-over dumbbell row|bk|db|2|row|4
Obrnuti fly s bučicama|Dumbbell reverse fly|bk|db|2|row|3
Veslanje kettlebellom|Kettlebell row|bk|kb|1|row|4
Veslanje na kablu|Seated cable row|bk|mc|1|seatrow|4
Lat pulldown|Lat pulldown|bk|mc|1|pulldown|4
Lat pulldown uskim hvatom|Close-grip lat pulldown|bk|mc|2|pulldown|4
Face pull na kablu|Cable face pull|bk|mc|2|row|3
Veslanje sa šipkom|Barbell row|bk|bb|3|row|5
Povlačenje elastične trake|Banded pull-apart|bk|bd|1|row|2
Veslanje s elastičnom trakom|Banded row|bk|bd|1|row|3
Pull-up uz elastičnu traku|Band-assisted pull-up|bk|bd|3|row|4
Superman|Superman|bk|bw|1|prone|2
Plivanje na trbuhu|Prone swimmers|bk|bw|1|prone|2
Ptica-pas|Bird dog|bk|bw|1|kick|3
Y-T-W podizanja|Y-T-W raises|bk|bw|2|row|3
Veslanje ručnikom|Towel row|bk|bw|1|row|3
Hiperekstenzija|Back extension|bk|bn|1|prone|3
Pull-up|Pull-up|bk|bw|3|row|4
Sklek na koljenima|Knee push-up|ch|bw|1|kneepush|3
Sklek|Push-up|ch|bw|2|push|3
Široki sklek|Wide push-up|ch|bw|2|push|3
Sklek uskim hvatom|Close-grip push-up|ch|bw|2|push|3
Dijamant sklek|Diamond push-up|ch|bw|3|push|3
Sklek s rukama na klupi|Incline push-up|ch|bn|1|incline|3
Sklek s nogama na klupi|Decline push-up|ch|bn|3|push|3
Sklek s pauzom|Paused push-up|ch|bw|3|push|3
Sklek s dodirom ramena|Push-up shoulder tap|ch|bw|3|push|3
Potisak bučicama na klupi|Dumbbell bench press|ch|db|2|press|5
Potisak bučicama na kosoj klupi|Incline dumbbell press|ch|db|2|press|5
Razvlačenje bučicama (fly)|Dumbbell chest fly|ch|db|2|press|4
Potisak šipkom na klupi|Barbell bench press|ch|bb|3|press|6
Potisak na spravi za prsa|Machine chest press|ch|mc|1|press|4
Pec deck|Pec deck fly|ch|mc|1|press|3
Kabelski crossover|Cable crossover|ch|mc|2|press|4
Potisak elastičnom trakom|Banded chest press|ch|bd|1|press|3
Pullover s bučicom|Dumbbell pullover|ch|db|2|press|4
Potisak bučicama iznad glave|Dumbbell shoulder press|sh|db|1|press|4
Arnold potisak|Arnold press|sh|db|2|press|4
Bočno podizanje bučicama|Lateral raise|sh|db|1|press|3
Prednje podizanje bučicama|Front raise|sh|db|1|press|3
Obrnuti fly u pretklonu|Rear delt fly|sh|db|2|row|3
Potisak šipkom iznad glave|Barbell overhead press|sh|bb|3|press|5
Potisak na spravi za ramena|Machine shoulder press|sh|mc|1|press|4
Bočno podizanje na kablu|Cable lateral raise|sh|mc|2|press|3
Potisak trakom iznad glave|Banded overhead press|sh|bd|1|press|3
Bočno podizanje trakom|Banded lateral raise|sh|bd|1|press|3
Pike sklek|Pike push-up|sh|bw|3|push|3
Krugovi rukama|Arm circles|sh|bw|1|press|1
Plank s dodirom ramena|Plank shoulder taps|sh|bw|2|plank|3
Medvjeđi hod|Bear crawl|sh|bw|2|climb|3
Kettlebell potisak|Kettlebell press|sh|kb|2|press|4
Pregib bučicama (biceps)|Dumbbell biceps curl|ar|db|1|curl|3
Čekić pregib|Hammer curl|ar|db|1|curl|3
Koncentrirani pregib|Concentration curl|ar|db|1|curl|3
Pregib sa šipkom|Barbell curl|ar|bb|2|curl|4
Pregib na kablu|Cable curl|ar|mc|1|curl|3
Pregib s elastičnom trakom|Banded biceps curl|ar|bd|1|curl|3
Triceps iza glave bučicom|Overhead triceps extension|ar|db|1|curl|3
Triceps kickback|Triceps kickback|ar|db|1|curl|3
Triceps pushdown na kablu|Cable triceps pushdown|ar|mc|1|curl|3
Triceps sklekovi na klupi|Bench dips|ar|bn|2|push|3
Zatvoreni sklek za triceps|Triceps push-up|ar|bw|2|push|3
Triceps trakom|Banded triceps extension|ar|bd|1|curl|3
Francuski potisak (skull crusher)|Skull crusher|ar|bb|3|curl|4
Pregib zapešća|Wrist curl|ar|db|1|curl|2
Pregib na Scott klupi (preacher)|Preacher curl|ar|mc|2|curl|3
Plank|Plank|co|bw|1|plank|2
Plank na podlakticama|Forearm plank|co|bw|1|plank|2
Bočni plank|Side plank|co|bw|1|plank|2
Bočni plank s podizanjem kuka|Side plank hip dips|co|bw|2|plank|2
Plank jack|Plank jack|co|bw|2|plank|3
Plank s podizanjem noge|Plank leg lift|co|bw|2|plank|3
Mrtva buba|Dead bug|co|bw|1|deadbug|3
Bicikl trbušnjaci|Bicycle crunch|co|bw|1|crunch|3
Trbušnjaci|Crunch|co|bw|1|crunch|3
Obrnuti trbušnjaci|Reverse crunch|co|bw|2|legraise|3
Podizanje nogu ležeći|Lying leg raise|co|bw|2|legraise|3
Ruski zaokret|Russian twist|co|bw|2|crunch|3
Hollow hold|Hollow hold|co|bw|3|crunch|2
V-up|V-up|co|bw|3|crunch|3
Penjač (mountain climbers)|Mountain climbers|co|bw|2|climb|3
Dodir peta|Heel taps|co|bw|1|crunch|3
Škare nogama|Flutter kicks|co|bw|2|legraise|2
Plank na fitball loptu|Stability ball plank|co|fb|2|plank|2
Kotrljanje lopte nogama|Stability ball pike|co|fb|3|plank|3
Trbušnjak na fitball lopti|Stability ball crunch|co|fb|2|crunch|3
Pallof press trakom|Pallof press|co|bd|2|press|3
Drvosječa na kablu|Cable woodchop|co|mc|2|press|3
Ruski zaokret s bučicom|Weighted Russian twist|co|db|2|crunch|3
Plank s utegom na leđima|Weighted plank|co|db|3|plank|2
Podizanje koljena u visu|Hanging knee raise|co|bw|3|crunch|3
Brzo hodanje|Brisk walking|ca|bw|1|walk|20
Hodanje uzbrdo|Incline walk|ca|cm|1|walk|20
Lagano trčanje|Easy jog|ca|bw|2|run|20
Intervalno trčanje|Running intervals|ca|bw|2|run|20
Sprint intervali|Sprint intervals|ca|bw|3|run|10
Skakanje užeta|Jump rope|ca|bw|2|jump|6
Jumping jacks|Jumping jacks|ca|bw|1|jump|3
Visoka koljena|High knees|ca|bw|1|run|2
Pete prema stražnjici|Butt kicks|ca|bw|1|run|2
Skakutanje na mjestu|Skipping in place|ca|bw|1|jump|3
Skater skokovi|Skater jumps|ca|bw|2|jump|3
Burpee|Burpee|ca|bw|3|jump|3
Burpee bez skoka|Step-back burpee|ca|bw|2|jump|3
Penjanje uz stepenice|Stair climbing|ca|bn|1|step|10
Brzi step|Quick step|ca|bn|1|step|5
Trake za trčanje HIIT|Treadmill HIIT|ca|cm|3|run|20
Hodanje na traci|Treadmill walk|ca|cm|1|walk|30
Stacionarni bicikl|Stationary bike|ca|cm|1|walk|30
Eliptični trenažer|Elliptical trainer|ca|cm|1|walk|25
Veslački ergometar|Rowing machine|ca|cm|2|row|15
Stepper|Stair stepper|ca|cm|2|step|15
Plesni kardio|Dance cardio|ca|bw|1|jump|15
Nordijsko hodanje|Nordic walking|ca|bw|1|walk|40
Boks u zraku (shadow boxing)|Shadow boxing|ca|bw|2|press|6
Thruster s bučicama|Dumbbell thruster|fb|db|3|squat|5
Man maker|Man maker|fb|db|3|jump|5
Kettlebell zamah dvjema rukama|Two-hand kettlebell swing|fb|kb|2|hinge|5
Turski ustanak|Turkish get-up|fb|kb|3|lunge|6
Inchworm|Inchworm|fb|bw|1|plank|3
Medvjeđi hod naprijed-nazad|Bear crawl forward and back|fb|bw|2|climb|3
Rakova šetnja|Crab walk|fb|bw|1|bridge|3
Squat to press|Squat to press|fb|db|2|squat|4
Ravnoteža na jednoj nozi|Single-leg balance|fb|bw|1|step|2
Kružni trening cijelog tijela|Full-body circuit|fb|bw|2|jump|15
Wall ball|Wall ball|fb|fb|2|squat|4
Mačka–krava|Cat-cow|mo|bw|1|catcow|2
Pas licem prema dolje|Downward dog|mo|bw|1|downdog|2
Položaj djeteta|Child's pose|mo|bw|1|child|2
Ratnica II|Warrior II|mo|bw|1|warrior|2
Ratnica I|Warrior I|mo|bw|1|warrior|2
Golub (pigeon pose)|Pigeon pose|mo|bw|2|stretch|3
Kobra|Cobra pose|mo|bw|1|stretch|2
Istezanje kvadricepsa|Quad stretch|mo|bw|1|stretch|2
Istezanje stražnje lože|Hamstring stretch|mo|bw|1|stretch|2
Istezanje listova|Calf stretch|mo|bw|1|stretch|2
Istezanje pregibača kuka|Hip flexor stretch|mo|bw|1|stretch|2
Istezanje prsa u dovratku|Doorway chest stretch|mo|bw|1|stretch|2
Istezanje ramena preko tijela|Cross-body shoulder stretch|mo|bw|1|stretch|1
Istezanje tricepsa|Triceps stretch|mo|bw|1|stretch|1
Istezanje vrata|Neck stretch|mo|bw|1|stretch|1
Istezanje donjeg dijela leđa|Lower back stretch|mo|bw|1|stretch|2
Torzija ležeći|Supine spinal twist|mo|bw|1|stretch|2
Kukovi 90/90|90/90 hip stretch|mo|bw|2|stretch|3
Žaba (frog stretch)|Frog stretch|mo|bw|2|stretch|3
Kruženje kukovima|Hip circles|mo|bw|1|stretch|1
Kruženje ramenima|Shoulder rolls|mo|bw|1|stretch|1
Kruženje gležnjevima|Ankle circles|mo|bw|1|stretch|1
Dubok čučanj kao istezanje|Deep squat hold|mo|bw|1|stretch|2
Istezanje s ručnikom|Towel stretch|mo|bw|1|stretch|2
Istezanje na fitball lopti|Stability ball back stretch|mo|fb|1|stretch|2
Disanje 4-7-8|4-7-8 breathing|mo|bw|1|rest|3
Kutna vježba disanja (box breathing)|Box breathing|mo|bw|1|rest|3
Progresivno opuštanje mišića|Progressive muscle relaxation|mo|bw|1|rest|8
Savasana|Savasana|mo|bw|1|rest|5
Sunčev pozdrav|Sun salutation|mo|bw|1|stretch|6
Foam roller – leđa|Foam roller – back|mo|bw|1|stretch|3
Foam roller – bedra|Foam roller – thighs|mo|bw|1|stretch|3
Veslanje bučicama na klupi|Chest-supported row|bk|db|2|row|4
Potisak nogama jednom nogom|Single-leg leg press|lg|mc|2|squat|4
Iskorak u smith stroju|Smith machine lunge|lg|mc|2|lunge|5
Zamah nogom unatrag na spravi|Machine glute kickback|gl|mc|1|kick|3
Bočno podizanje na koljenima|Kneeling side raise|gl|bw|1|kick|3
Pregib trakom na jednoj ruci|Single-arm banded curl|ar|bd|1|curl|3
Sklek s podizanjem noge|Push-up with leg lift|ch|bw|3|push|3
Potisak jednom rukom bučicom|Single-arm dumbbell press|sh|db|2|press|4
Zaklon na zidu (wall angels)|Wall angels|sh|bw|1|press|2
Leđni mostić s trakom|Banded superman pull|bk|bd|2|bridge|3
Ravnoteža u psu i ptici s trakom|Banded bird dog|co|bd|2|kick|3
Ptica-pas s laktom i koljenom|Bird dog crunch|co|bw|2|kick|3
Čučanj s podizanjem ruku|Squat with overhead reach|lg|bw|1|squat|3
Iskorak s okretom trupa|Lunge with twist|lg|bw|2|lunge|3
Hodanje na petama|Heel walk|lg|bw|1|walk|2
Hodanje na prstima|Toe walk|lg|bw|1|walk|2
Plank hodanje (walkout)|Plank walkout|co|bw|2|plank|3
Sit-up|Sit-up|co|bw|2|crunch|3
Hollow rock|Hollow rock|co|bw|3|crunch|2
Dijagonalni trbušnjak|Oblique crunch|co|bw|1|crunch|3
Bočno savijanje s bučicom|Dumbbell side bend|co|db|1|crunch|3`;
const LIB=LIBSRC.trim().split('\n').map((l,i)=>{const a=l.split('|');return {id:i,hr:a[0],en:a[1],m:a[2],e:a[3],l:+a[4],p:a[5],t:+a[6]}});
const LM={lg:['🦵','Noge','Legs'],gl:['🍑','Gluteusi','Glutes'],bk:['🔙','Leđa','Back'],ch:['💪','Prsa','Chest'],sh:['🏋️','Ramena','Shoulders'],ar:['💪','Ruke','Arms'],co:['🎯','Trbuh i core','Core'],ca:['🏃','Kardio','Cardio'],fb:['🔥','Cijelo tijelo','Full body'],mo:['🧘','Istezanje i opuštanje','Stretch and relax']};
const LEQ={bw:['Bez opreme','No equipment'],db:['Bučice','Dumbbells'],bd:['Elastična traka','Resistance band'],bb:['Šipka','Barbell'],mc:['Sprava / kabel','Machine / cable'],kb:['Kettlebell','Kettlebell'],bn:['Klupa / step','Bench / step'],cm:['Kardio sprava','Cardio machine'],fb:['Fitball','Stability ball']};
const LLV=[null,['Početnica','Beginner'],['Srednja','Intermediate'],['Napredna','Advanced']];
const LDUR=[null,['do 2 min','up to 2 min'],['3–5 min','3–5 min'],['6+ min','6+ min']];
const LCUE={
prone:['Leži na trbuhu, istovremeno lagano podigni ruke, prsa i noge, pogled prema podu. Zadrži sekundu i polako spusti.','Lie face down, lift arms, chest and legs slightly at the same time, eyes toward the floor. Hold a second and lower slowly.'],
kick:['Na sve četiri: ruke ispod ramena, koljena ispod kukova, leđa ravna. Potisni petu prema stropu i ne izvijaj donji dio leđa.','On all fours: hands under shoulders, knees under hips, back flat. Press the heel toward the ceiling and do not arch the lower back.'],
legraise:['Leđa pritisnuta uz pod, noge ravne, polako ih podigni do okomice i spusti bez da se donji dio leđa odvoji.','Back pressed into the floor, legs straight, raise them slowly to vertical and lower without the lower back lifting.'],
deadbug:['Ruke prema stropu, koljena iznad kukova. Spuštaj suprotnu ruku i nogu uz pod, donji dio leđa ostaje na podu.','Arms toward the ceiling, knees above hips. Lower the opposite arm and leg toward the floor, keeping the lower back on the floor.'],
catcow:['Na sve četiri, polako izmjenjuj izvijanje leđa prema gore (mačka) i prema dolje (krava) uz dah.','On all fours, slowly alternate rounding the back up (cat) and arching down (cow) with your breath.'],
downdog:['Dlanovi i stopala na podu, kukovi prema stropu u obliku obrnutog slova V, ruke i leđa u liniji. Peti teže prema podu.','Palms and feet on the floor, hips toward the ceiling in an inverted V, arms and back in one line. Heels reach toward the floor.'],
child:['Sjedni na pete, spusti trup naprijed i opusti ruke ispred sebe. Diši duboko i opusti leđa.','Sit back on your heels, fold forward and rest your arms in front. Breathe deeply and relax your back.'],
rest:['Lezi na leđa, ruke uz tijelo, dlanovi gore. Zatvori oči i opusti svaki mišić uz sporo disanje.','Lie on your back, arms by your sides, palms up. Close your eyes and relax every muscle with slow breathing.'],
warrior:['Široki iskorak, prednje koljeno iznad gležnja, stražnja noga ravna, ruke ispružene. Ramena opuštena, pogled naprijed.','Wide lunge, front knee above the ankle, back leg straight, arms extended. Shoulders relaxed, eyes forward.'],
kneepush:['Koljena na podu, tijelo u liniji od koljena do glave. Spusti prsa prema podu i potisni natrag.','Knees on the floor, body in one line from knees to head. Lower the chest toward the floor and press back.'],
incline:['Ruke na klupi ili stabilnoj podlozi, tijelo u ravnoj liniji. Spusti prsa prema rubu klupe i potisni natrag.','Hands on a bench or stable surface, body in a straight line. Lower the chest toward the edge and press back.'],
pulldown:['Ramena dolje i unatrag, povuci laktove prema rebrima i spusti šipku do visine brade. Vrati polako.','Shoulders down and back, pull the elbows toward the ribs and bring the bar to chin height. Return slowly.'],
seatrow:['Sjedi uspravno, povuci ručku prema trbuhu stišćući lopatice, laktovi uz tijelo. Polako vrati.','Sit tall, pull the handle toward your abdomen squeezing the shoulder blades, elbows by your sides. Return slowly.'],
squat:['Stopala u širini ramena, težina na petama, koljena prate smjer prstiju. Spusti kukove unatrag i dolje, leđa ravna, prsa gore.','Feet shoulder-width, weight on the heels, knees track over the toes. Sit hips back and down, back straight, chest up.'],
lunge:['Napravi korak i spusti se tako da su oba koljena oko 90°, prednje koljeno iznad gležnja, trup uspravan. Odgurni se petom prednje noge.','Step and lower until both knees are about 90°, front knee over the ankle, torso upright. Push through the front heel.'],
push:['Tijelo u ravnoj liniji od glave do pete, laktovi oko 45° od trupa. Spusti prsa prema podu i potisni natrag. Lakše: na koljenima ili uz klupu.','Body in a straight line from head to heels, elbows about 45° from the torso. Lower the chest toward the floor and press back. Easier: on knees or hands on a bench.'],
plank:['Laktovi ili ruke ispod ramena, stegni trbuh i gluteuse, ne propadaj u donjem dijelu leđa. Diši ravnomjerno.','Elbows or hands under the shoulders, brace abs and glutes, do not sag at the lower back. Breathe steadily.'],
bridge:['Lopatice i stopala na podu, potisni kukove prema gore stežući gluteuse, na vrhu zadrži sekundu i polako spusti.','Shoulder blades and feet on the floor, drive the hips up squeezing the glutes, hold a second at the top and lower slowly.'],
crunch:['Donji dio leđa ostaje u dodiru s podom, podiži se iz trbuha na izdisaj, bez povlačenja vrata rukama.','Keep the lower back on the floor, lift from the abs on the exhale, do not pull on your neck.'],
climb:['Ramena iznad ruku, trbuh čvrst, naizmjence privlači koljena prema prsima uz stabilne kukove.','Shoulders over hands, abs braced, alternately drive the knees toward the chest with steady hips.'],
row:['Ramena dolje i unatrag, stisni lopatice prema kralježnici, povuci laktove uz tijelo i polako vrati. Leđa ostaju ravna.','Shoulders down and back, squeeze the shoulder blades toward the spine, pull the elbows along the body and return slowly. Keep the back flat.'],
press:['Rebra uvučena, leđa neutralna, potiskuj kontrolirano i ne zaključavaj laktove. Polako vrati u početni položaj.','Ribs down, neutral back, press with control and do not lock the elbows. Return slowly to the start.'],
curl:['Laktovi uz tijelo, pokret samo u laktu. Podiži i spuštaj kontrolirano, bez zamaha tijelom.','Elbows by your sides, move only at the elbow. Lift and lower with control, no body swing.'],
run:['Lagan ritam, uspravan trup, meko doskakivanje na srednji dio stopala, ravnomjerno disanje. Počni sporije nego što misliš.','Easy rhythm, upright torso, land softly on the midfoot, breathe steadily. Start slower than you think.'],
walk:['Uspravno držanje, pogled naprijed, opuštena ramena, koraci prirodne duljine i zamah rukama.','Upright posture, eyes ahead, relaxed shoulders, natural stride and arm swing.'],
jump:['Meko doskakivanje s blago savijenim koljenima, stopala u liniji s kukovima. Ako boli ili si u trudnoći – izvedi bez skoka.','Land softly with slightly bent knees, feet in line with the hips. If it hurts or you are pregnant – do it without the jump.'],
step:['Cijelo stopalo na podlozi, odgurni se petom, kontrolirano spusti, trup uspravan i bez odgurivanja zadnjom nogom.','Whole foot on the surface, drive through the heel, lower with control, torso upright, do not push off the back foot.'],
hinge:['Kukovi unatrag, leđa ravna, koljena blago savijena. Osjeti istezanje stražnje lože i ustani stežući gluteuse.','Hips back, back flat, knees slightly bent. Feel the hamstrings stretch and stand up squeezing the glutes.'],
stretch:['Polako i bez trzaja, zadrži 20–30 s i diši duboko. Ne smije boljeti – samo ugodno istezanje.','Slow and without bouncing, hold 20–30 s and breathe deeply. It should not hurt – only a comfortable stretch.']
};
const LPOSE={prone:'prone',kick:'kick',legraise:'legraise',deadbug:'deadbug',catcow:'catcow',downdog:'downdog',child:'child',rest:'rest',warrior:'warrior',kneepush:'kneepush',incline:'incline',pulldown:'pulldown',seatrow:'seatrow',squat:'squat',lunge:'lunge',push:'push',plank:'plank',bridge:'bridge',crunch:'crunch',climb:'climb',row:'row',press:'press',curl:'curl',run:'run',walk:'walk',jump:'jump',step:'step',hinge:'hinge',stretch:'breathe'};
let lb={q:'',m:'',e:'',l:0,t:0,fav:false,open:null,n:30};
function lname(x){return ST.lang==='hr'?x.hr:x.en}
function lbSet(k,v){lb[k]=(lb[k]===v&&k!=='q')?(typeof v==='number'?0:''):v;lb.n=30;lb.open=null;render()}
function lbQ(v){lb.q=v;lb.n=30;lb.open=null;render();const e=$('#lbq');if(e){e.focus();try{e.setSelectionRange(v.length,v.length)}catch(x){}}}
function lbFav(){lb.fav=!lb.fav;lb.n=30;render()}
function lbOpen(i){lb.open=lb.open===i?null:i;render()}
function lbMore(){lb.n+=30;render()}
function lbReset(){lb={q:'',m:'',e:'',l:0,t:0,fav:false,open:null,n:30};render()}
function toggleFav(i){S.favs=S.favs||[];const k=S.favs.indexOf(i);if(k<0)S.favs.push(i);else S.favs.splice(k,1);save();render()}
function libFiltered(){
 const q=lb.q.trim().toLowerCase();
 return LIB.filter(x=>(!lb.m||x.m===lb.m)&&(!lb.e||x.e===lb.e)&&(!lb.l||x.l===lb.l)&&(!lb.t||(lb.t===1?x.t<=2:lb.t===2?(x.t>=3&&x.t<=5):x.t>=6))&&(!lb.fav||(S.favs||[]).indexOf(x.id)>-1)&&(!q||(x.hr+' '+x.en).toLowerCase().indexOf(q)>-1));
}
const EXVID={};
function vidOf(i){return (S.vids&&S.vids[i])||EXVID[i]||''}
function vidHtml(u){
 if(!/^https?:\/\//i.test(u))return '';
 const y=/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/.exec(u);
 if(y)return `<div style="position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;margin:8px 0"><iframe src="https://www.youtube-nocookie.com/embed/${y[1]}" title="video" loading="lazy" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0"></iframe></div>`;
 if(/\.(mp4|webm|mov)(\?|$)/i.test(u))return `<video src="${u.replace(/"/g,'%22')}" controls playsinline preload="none" style="width:100%;border-radius:14px;margin:8px 0"></video>`;
 return `<p><a href="${u.replace(/"/g,'%22')}" target="_blank" rel="noopener" style="color:var(--p);font-weight:600">🎬 ${L('Otvori video','Open video')}</a></p>`;
}
function saveVid(i){const u=($('#vurl').value||'').trim();S.vids=S.vids||{};if(u&&!/^https?:\/\//i.test(u)){notify(L('Poveznica mora počinjati s https://','The link must start with https://'));return}if(u)S.vids[i]=u;else delete S.vids[i];save();render()}
function libCard(x){
 const open=lb.open===x.id,fav=(S.favs||[]).indexOf(x.id)>-1,mm=LM[x.m],lv=LLV[x.l];
 let h=`<div class="card sub" onclick="lbOpen(${x.id})" style="padding:12px"><div class="flex" style="gap:10px;align-items:center"><span style="font-size:26px">${mm[0]}</span><div style="flex:1"><b style="font-size:15px">${lname(x)}</b><div style="margin-top:4px"><span class="tag">${L(mm[1],mm[2])}</span><span class="tag g">${L(LEQ[x.e][0],LEQ[x.e][1])}</span><span class="tag">${L(lv[0],lv[1])}</span><span class="tag">~${x.t} min</span></div></div><span>${fav?'⭐':'☆'}</span></div>`;
 if(open){
  const v=vidOf(x.id);
  h+=`<div onclick="event.stopPropagation()" style="margin-top:10px">${anim(LPOSE[x.p]||'breathe')}<p style="font-size:14px;margin:8px 0">${L(LCUE[x.p][0],LCUE[x.p][1])}</p>${v?vidHtml(v):''}
  <div class="row" style="margin-top:8px"><button class="btn sec sm" onclick="toggleFav(${x.id})">${fav?'⭐ '+L('U omiljenima','In favourites'):'☆ '+L('Dodaj u omiljene','Add to favourites')}</button></div>
  <details style="margin-top:8px"><summary class="mut" style="cursor:pointer">🎬 ${L('Video poveznica (YouTube ili .mp4)','Video link (YouTube or .mp4)')}</summary><input id="vurl" placeholder="https://" value="${(S.vids&&S.vids[x.id]||'').replace(/"/g,'&quot;')}" style="margin:8px 0"><button class="btn sm" onclick="saveVid(${x.id})">${L('Spremi','Save')}</button></details></div>`;
 }
 return h+`</div>`;
}
function libPage(){
 const list=libFiltered(),show=list.slice(0,lb.n);
 const chip=(k,v,label,on)=>`<div class="chip ${on?'on':''}" onclick="lbSet('${k}',${typeof v==='number'?v:`'${v}'`})">${label}</div>`;
 const f=!!(lb.m||lb.e||lb.l||lb.t||lb.fav||lb.q);
 return `<div class="pad">${back}<h2 style="margin:12px 0">📚 ${L('Biblioteka vježbi','Exercise library')}</h2>
 <input id="lbq" type="search" placeholder="${L('🔍 Traži vježbu','🔍 Search exercise')}" value="${lb.q.replace(/"/g,'&quot;')}" oninput="lbQ(this.value)">
 <p class="mut" style="margin:10px 0 4px">${L('Mišićna skupina','Muscle group')}</p><div class="chips" style="flex-wrap:wrap;overflow:visible">${Object.keys(LM).map(k=>chip('m',k,LM[k][0]+' '+L(LM[k][1],LM[k][2]),lb.m===k)).join('')}</div>
 <p class="mut" style="margin:4px 0">${L('Oprema','Equipment')}</p><div class="chips" style="flex-wrap:wrap;overflow:visible">${Object.keys(LEQ).map(k=>chip('e',k,L(LEQ[k][0],LEQ[k][1]),lb.e===k)).join('')}</div>
 <p class="mut" style="margin:4px 0">${L('Razina i trajanje','Level and duration')}</p><div class="chips" style="flex-wrap:wrap;overflow:visible">${[1,2,3].map(k=>chip('l',k,L(LLV[k][0],LLV[k][1]),lb.l===k)).join('')}${[1,2,3].map(k=>chip('t',k,'⏱ '+L(LDUR[k][0],LDUR[k][1]),lb.t===k)).join('')}<div class="chip ${lb.fav?'on':''}" onclick="lbFav()">⭐ ${L('Omiljene','Favourites')}</div></div>
 <div class="flex" style="justify-content:space-between;align-items:center;margin:8px 0"><span class="mut"><b>${list.length}</b> ${L('od','of')} ${LIB.length} ${L('vježbi','exercises')}</span>${f?`<span class="chip" onclick="lbReset()">✕ ${L('Očisti filtre','Clear filters')}</span>`:''}</div>
 ${show.map(libCard).join('')||`<div class="card"><p class="mut">${L('Nema rezultata. Probaj ukloniti neki filtar.','No results. Try removing a filter.')}</p></div>`}
 ${list.length>show.length?`<button class="btn sec" onclick="lbMore()">${L('Prikaži još','Show more')} (${list.length-show.length})</button>`:''}
 <p class="mut" style="font-size:12px;margin-top:10px">${L('Opće upute za tehniku. Ako te nešto boli, prekini vježbu i posavjetuj se sa stručnom osobom.','General technique notes. If anything hurts, stop and consult a professional.')}</p></div>`;
}

/* ---------- upitnik pri prvom otvaranju ---------- */
let onb={step:0,g:null,l:null,m:null,rem:true,rt:'18:00'};
const OB_G=[['Gubitak kilograma','⚖️','Gubitak kilograma','Weight loss'],['Jačanje i tonus','💪','Jačanje i tonus','Strength and toning'],['Opuštanje / stres','🧘','Opuštanje / stres','Relaxation / stress'],['Kondicija','🏃','Kondicija','Fitness']];
const OB_L=[['Početnica','🌱','Tek počinjem','I am just starting'],['Srednja','🌿','Vježbam povremeno','I train now and then'],['Napredna','🌳','Vježbam redovito','I train regularly']];
const OB_M=[[15,'⚡','10–15 min','Brzo i lagano','Quick and easy'],[30,'⏱️','20–30 min','Najčešći izbor','The most popular'],[45,'🔥','40+ min','Imam vremena','I have time']];
function obPick(k,v){onb[k]=v;onb.step++;render();scrollTo(0,0)}
function obBack(){if(onb.step>0){onb.step--;render()}}
function obSkip(){S.onb=1;save();render()}
function planFor(g,l,m){
 const f=g==='Opuštanje / stres'?'every2':l==='Početnica'?(m<=15?'every2':'every3'):l==='Srednja'?'every2':(m<=15?'daily':'every2');
 return {f,p:g==='Opuštanje / stres'?'Kod kuće':(S.pref||'Kod kuće'),minT:m};
}
function obFinish(){
 S.goal=onb.g;S.lvl=onb.l;S.plan=planFor(onb.g,onb.l,onb.m);S.weekGoal=Math.max(2,Math.min(5,FREQ[S.plan.f][1].length));
 S.rem={on:!!onb.rem,t:onb.rt||'18:00',last:''};S.onb=1;save();
 if(onb.rem&&typeof Notification!=='undefined'&&Notification.permission==='default'){try{Notification.requestPermission()}catch(e){}}
 tab='home';render();scrollTo(0,0);if(typeof celebrate==='function')celebrate();
}
function onbScreen(){
 const s=onb.step,dots=[0,1,2,3].map(i=>`<i style="flex:1;height:6px;border-radius:9px;background:${i<=s?'var(--p)':'var(--line)'}"></i>`).join('');
 const opt=(k,v,ic,t,sub)=>`<div class="card sub" onclick="obPick('${k}',${typeof v==='number'?v:`'${v}'`})" style="display:flex;gap:14px;align-items:center;padding:16px"><span style="font-size:30px">${ic}</span><div><b style="font-size:16px">${t}</b>${sub?`<div class="mut">${sub}</div>`:''}</div></div>`;
 let body='';
 if(s===0)body=`<h2>${L('Što je tvoj cilj?','What is your goal?')}</h2><p class="mut" style="margin-bottom:12px">${L('Pitanje 1 od 3','Question 1 of 3')}</p>${OB_G.map(o=>opt('g',o[0],o[1],L(o[2],o[3]))).join('')}`;
 else if(s===1)body=`<h2>${L('Kakva je tvoja razina?','What is your level?')}</h2><p class="mut" style="margin-bottom:12px">${L('Pitanje 2 od 3','Question 2 of 3')}</p>${OB_L.map(o=>opt('l',o[0],o[1],L(o[0],{Početnica:'Beginner',Srednja:'Intermediate',Napredna:'Advanced'}[o[0]]),L(o[2],o[3]))).join('')}`;
 else if(s===2)body=`<h2>${L('Koliko vremena imaš po treningu?','How much time do you have per workout?')}</h2><p class="mut" style="margin-bottom:12px">${L('Pitanje 3 od 3','Question 3 of 3')}</p>${OB_M.map(o=>opt('m',o[0],o[1],o[2],L(o[3],o[4]))).join('')}`;
 else{
  const pl=planFor(onb.g,onb.l,onb.m),tr=FREQ[pl.f][1],names=L(['Pon','Uto','Sri','Čet','Pet','Sub','Ned'],['Mon','Tue','Wed','Thu','Fri','Sat','Sun']);
  const pool=planPool(pl.p,pl.minT,onb.l),w=pool[0];
  body=`<div style="text-align:center;font-size:44px">🎉</div><h2 style="text-align:center">${L('Tvoj plan je spreman!','Your plan is ready!')}</h2>
  <div class="card"><div class="flex" style="justify-content:space-around;text-align:center"><div><b style="font-size:26px">${tr.length}</b><div class="mut">${L('treninga tjedno','workouts a week')}</div></div><div><b style="font-size:26px">~${w.min}</b><div class="mut">${L('min po treningu','min per workout')}</div></div><div><b style="font-size:26px">${L(OB_G.find(x=>x[0]===onb.g)[2],OB_G.find(x=>x[0]===onb.g)[3]).split(' ')[0]}</b><div class="mut">${L('cilj','goal')}</div></div></div>
  <div class="wk" style="margin-top:12px">${names.map((n,i)=>`<div class="${tr.includes(i)?'ok':''}">${n.slice(0,2)}</div>`).join('')}</div></div>
  <div class="card"><h3>${L('Prvi trening','First workout')}</h3><p style="margin-top:6px"><b>${w.n}</b> · ${w.min} min · ~${w.kcal} kcal</p><p class="mut">${L('Pa tjedni plan prehrane po tvojim ciljevima.','Plus a weekly meal plan for your goal.')}</p></div>
  <div class="card"><label style="display:flex;gap:10px;align-items:center;margin:0;color:var(--ink);font-size:14px"><input type="checkbox" ${onb.rem?'checked':''} style="width:auto" onchange="onb.rem=this.checked;render()"> 🔔 ${L('Podsjeti me na dane treninga','Remind me on workout days')}</label>${onb.rem?`<input type="time" value="${onb.rt}" onchange="onb.rt=this.value" style="margin-top:8px">`:''}</div>
  <button class="btn" onclick="obFinish()">${L('Kreni 🚀','Let\'s go 🚀')}</button>`;
 }
 return `<div class="pad" style="padding-top:calc(24px + env(safe-area-inset-top))"><div class="flex" style="gap:6px;margin-bottom:18px">${dots}</div>${body}
 <div class="flex" style="justify-content:space-between;margin-top:14px">${s>0?`<button class="link" style="width:auto" onclick="obBack()">← ${L('Natrag','Back')}</button>`:'<span></span>'}<button class="link" style="width:auto;font-weight:500" onclick="obSkip()">${L('Preskoči','Skip')}</button></div></div>`;
}
function planPool(p,minT,lvl){
 const lv={'Početnica':1,'Srednja':2,'Napredna':3},want=lvl||(S&&S.lvl)||'Početnica',mt=minT!=null?minT:((S&&S.plan&&S.plan.minT)||0);
 const sc=w=>Math.abs((lv[w.lvl]||1)-(lv[want]||1))*100+(mt?Math.abs(w.min-mt):0);
 return WORKOUTS[p].slice().sort((a,b)=>sc(a)-sc(b));
}

/* ---------- podsjetnici ---------- */
function remDays(){return buildWeek().map((d,i)=>d.t?i:-1).filter(i=>i>=0)}
function remDoneToday(){const d=S.days&&S.days[today()];return !!(d&&(d.log||[]).some(l=>l.id!=='relax'))}
function remSet(on){S.rem=S.rem||{on:false,t:'18:00',last:''};S.rem.on=!!on;save();if(on&&typeof Notification!=='undefined'&&Notification.permission==='default'){try{Notification.requestPermission().then(render)}catch(e){}}render()}
function remTime(v){S.rem=S.rem||{on:true,t:'18:00',last:''};if(/^\d\d:\d\d$/.test(v)){S.rem.t=v;save();render()}}
function remPerm(){try{Notification.requestPermission().then(()=>render())}catch(e){notify(L('Preglednik ne podržava obavijesti','Your browser does not support notifications'))}}
function remNotify(){
 try{if(typeof Notification==='undefined'||Notification.permission!=='granted')return false;const w=buildWeek()[todayIdx()],body=w&&w.t?L('Danas je dan treninga: ','Workout day today: ')+w.w.n:L('Vrijeme je za malo kretanja!','Time to move a little!');
  const o={body,icon:'icon-192.png',tag:'fitza-day'};
  if(navigator.serviceWorker&&navigator.serviceWorker.getRegistration){navigator.serviceWorker.getRegistration().then(r=>{if(r&&r.showNotification)r.showNotification('Fitža 💪',o);else new Notification('Fitža 💪',o)}).catch(()=>{try{new Notification('Fitža 💪',o)}catch(e){}});return true}
  new Notification('Fitža 💪',o);return true}catch(e){return false}
}
function remTest(){if(!remNotify())notify(L('Prvo dopusti obavijesti u pregledniku','Please allow notifications in your browser first'))}
function remTick(){
 try{
  if(!S||!S.rem||!S.rem.on||S.onb===0)return;
  const n=new Date(),hm=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');
  if(hm<S.rem.t||S.rem.last===today())return;
  if(!buildWeek()[todayIdx()].t||remDoneToday())return;
  if(remNotify()){S.rem.last=today();save()}
 }catch(e){}
}
if(typeof setInterval==='function')setInterval(remTick,30000);
function icsDate(d){return d.getFullYear()+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0')}
function remICS(){
 const t=(S.rem&&S.rem.t)||'18:00',days=remDays();if(!days.length){notify(L('Nema dana treninga u planu','No workout days in your plan'));return}
 const by=['MO','TU','WE','TH','FR','SA','SU'],n=new Date();let start=null;
 for(let k=0;k<8&&!start;k++){const d=new Date(n.getFullYear(),n.getMonth(),n.getDate()+k);const wi=(d.getDay()+6)%7;if(days.includes(wi)){if(k>0||t>(String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0')))start=d}}
 if(!start){start=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1)}
 const hhmm=t.replace(':','')+'00',dur=Math.max(15,((buildWeek().find(x=>x.t)||{w:{min:30}}).w.min)||30);
 const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Fitza//HR','CALSCALE:GREGORIAN','BEGIN:VEVENT','UID:fitza-'+Date.now()+'@dada.vip-grupa.eu','DTSTAMP:'+new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'Z','DTSTART:'+icsDate(start)+'T'+hhmm,'DURATION:PT'+dur+'M','RRULE:FREQ=WEEKLY;BYDAY='+days.map(i=>by[i]).join(','),'SUMMARY:Fitža – trening 💪','DESCRIPTION:Danas je dan treninga. Otvori Fitžu: https://dada.vip-grupa.eu','BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:Fitža – vrijeme za trening','TRIGGER:PT0M','END:VALARM','END:VEVENT','END:VCALENDAR'].join('\r\n');
 try{const b=new Blob([ics],{type:'text/calendar;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='fitza-treninzi.ics';document.body.appendChild(a);a.click();setTimeout(()=>{a.remove()},500);notify(L('Kalendar preuzet – otvori datoteku da dodaš podsjetnik','Calendar file downloaded – open it to add the reminder'))}catch(e){notify(L('Preuzimanje nije moguće u ovom pregledniku','Download is not available in this browser'))}
 return ics;
}
function remPage(){
 const r=S.rem||{on:false,t:'18:00'},names=L(['Pon','Uto','Sri','Čet','Pet','Sub','Ned'],['Mon','Tue','Wed','Thu','Fri','Sat','Sun']),days=remDays();
 const perm=typeof Notification==='undefined'?'unsupported':Notification.permission;
 return `<div class="pad">${back}<h2 style="margin:12px 0">🔔 ${L('Podsjetnici i serija','Reminders and streak')}</h2>
 ${serCard()}
 <div class="card"><h3>${L('Podsjetnik na trening','Workout reminder')}</h3>
 <label style="display:flex;gap:10px;align-items:center;margin:10px 0;color:var(--ink);font-size:14px"><input type="checkbox" ${r.on?'checked':''} style="width:auto" onchange="remSet(this.checked)"> ${L('Uključi podsjetnik','Turn reminder on')}</label>
 <label>${L('Vrijeme','Time')}</label><input type="time" value="${r.t}" onchange="remTime(this.value)">
 <div class="wk" style="margin-top:10px">${names.map((n,i)=>`<div class="${days.includes(i)?'ok':''}">${n.slice(0,2)}</div>`).join('')}</div><p class="mut" style="font-size:12px">${L('Dani se mijenjaju u Tjednom planu.','Days change in the Weekly plan.')}</p></div>
 <div class="card"><h3>📅 ${L('Pouzdani podsjetnik: kalendar','Reliable reminder: calendar')}</h3><p class="mut" style="margin:6px 0 10px">${L('Preuzmi kalendarski događaj koji se ponavlja svaki tjedan u dane treninga. Otvori ga na mobitelu i podsjetnik dolazi i kad je aplikacija zatvorena.','Download a weekly repeating calendar event for your workout days. Open it on your phone and the reminder arrives even when the app is closed.')}</p><button class="btn" onclick="remICS()">⬇️ ${L('Dodaj u kalendar (.ics)','Add to calendar (.ics)')}</button></div>
 <div class="card"><h3>🔔 ${L('Obavijest u pregledniku','Browser notification')}</h3><p class="mut" style="margin:6px 0 10px">${L('Obavijest stiže u odabrano vrijeme dok je aplikacija otvorena u pregledniku. Za pozadinske obavijesti kad je aplikacija zatvorena potrebna je instalirana mobilna aplikacija.','The notification arrives at your chosen time while the app is open in the browser. Background notifications when the app is closed need an installed mobile app.')}</p>
 ${perm==='granted'?`<p>✅ ${L('Obavijesti su dopuštene','Notifications are allowed')}</p><button class="btn sec sm" onclick="remTest()">${L('Pošalji probnu obavijest','Send a test notification')}</button>`:perm==='denied'?`<p class="mut">${L('Obavijesti su blokirane u pregledniku – dopusti ih u postavkama stranice.','Notifications are blocked – allow them in the site settings.')}</p>`:perm==='unsupported'?`<p class="mut">${L('Ovaj preglednik ne podržava obavijesti.','This browser does not support notifications.')}</p>`:`<button class="btn sec" onclick="remPerm()">${L('Dopusti obavijesti','Allow notifications')}</button>`}</div></div>`;
}
function remBanner(){
 if(!S.rem||!S.rem.on||S.onb===0)return '';
 const w=buildWeek()[todayIdx()];
 if(!w.t||remDoneToday())return '';
 return `<div class="card sub" onclick="tab='rem';render();scrollTo(0,0)" style="background:var(--p2)"><b>🔔 ${L('Danas je dan treninga u','Workout day today at')} ${S.rem.t}</b><div class="mut">${w.w.n} · ${w.w.min} min</div></div>`;
}

/* ---------- serije ---------- */
function actDay(k){const d=S.days&&S.days[k];return !!(d&&((d.log&&d.log.length)||d.steps>=5000))||!!(S.mini&&S.mini[k])}
function streak(){let s=0;for(let i=0;i<400;i++){if(actDay(d0(i)))s++;else if(i>0)break}return s}
function bestStreak(){let b=0,c=0;for(let i=400;i>=0;i--){if(actDay(d0(i))){c++;if(c>b)b=c}else c=0}return b}
function serCard(){
 const sk=streak(),best=Math.max(bestStreak(),sk),goals=[3,7,14,30,60,100],nx=goals.find(g=>g>sk)||sk+10;
 const strip=[];for(let i=13;i>=0;i--){const k=d0(i),on=actDay(k),t=i===0;strip.push(`<div class="${on?'ok':''} ${t?'today':''}" title="${k}" style="width:20px;height:20px;font-size:10px">${on?'✓':''}</div>`)}
 return `<div class="card"><div class="flex" style="justify-content:space-between;align-items:center"><div><b style="font-size:28px">🔥 ${sk}</b> <span class="mut">${L('dana zaredom','day streak')}</span></div><div class="mut" style="text-align:right">${L('Najbolja serija','Best streak')}<br><b>${best}</b></div></div>
 <div class="wk" style="margin-top:10px;gap:3px;justify-content:space-between">${strip.join('')}</div>
 <div class="bar" style="margin-top:10px"><i style="width:${Math.min(100,Math.round(sk/nx*100))}%"></i></div><p class="mut" style="font-size:12px;margin-top:4px">${L('Sljedeći cilj: '+nx+' dana','Next goal: '+nx+' days')} · ${L('Dan se računa uz trening, mali cilj ili 5000 koraka.','A day counts with a workout, the mini goal or 5000 steps.')}</p></div>`;
}

/* ---------- mali cilj dana (5 min) ---------- */
const MINI=[
['🧘 5 min istezanja vrata i ramena','🧘 5 min of neck and shoulder stretches'],['🦵 40 čučnjeva (u serijama po 10)','🦵 40 squats (in sets of 10)'],['🚶 5 min brzog hodanja oko kuće ili bloka','🚶 5 min brisk walk around the house or block'],['💪 3 serije po 8 sklekova (može na koljenima)','💪 3 sets of 8 push-ups (knees are fine)'],['🎯 Plank 3 × 30 s','🎯 Plank 3 × 30 s'],['🍑 3 × 15 mostića za gluteuse','🍑 3 × 15 glute bridges'],['💃 Pet minuta plesa uz omiljene pjesme','💃 Five minutes of dancing to your favourite songs'],['🌬️ 5 min disanja 4-7-8','🌬️ 5 min of 4-7-8 breathing'],['🪜 5 min uspinjanja i spuštanja stepenicama','🪜 5 min of stair climbing'],['🏃 Skakutanje na mjestu 5 × 30 s','🏃 Skipping in place 5 × 30 s'],['🧎 5 min joge – sunčev pozdrav','🧎 5 min of yoga – sun salutation'],['🦶 2 × 20 podizanja na prste + istezanje listova','🦶 2 × 20 calf raises + calf stretch'],['🔥 4 kruga: 10 čučnjeva, 10 jumping jacks, 10 trbušnjaka','🔥 4 rounds: 10 squats, 10 jumping jacks, 10 crunches'],['🤸 5 min mobilnosti kukova i leđa','🤸 5 min of hip and back mobility'],['🏋️ 3 × 12 iskoraka po nozi','🏋️ 3 × 12 lunges per leg'],['🧘 Mačka–krava 2 min + dijete 2 min','🧘 Cat-cow 2 min + child\'s pose 2 min'],['🚴 5 min vožnje bicikla ili zamišljene vožnje nogama u zraku','🚴 5 min of cycling or air-cycling'],['🎯 Mrtva buba 3 × 10 + bočni plank 2 × 20 s','🎯 Dead bug 3 × 10 + side plank 2 × 20 s'],['🌿 Izađi van i prošetaj 5 min bez mobitela','🌿 Step outside and walk 5 min without your phone'],['💧 Popij 2 čaše vode i 3 min istezanja','💧 Drink 2 glasses of water and stretch for 3 min'],['🔄 Kruženje ramenima, kukovima i gležnjevima 5 min','🔄 Shoulder, hip and ankle circles for 5 min'],['💪 Triceps sklekovi o stolicu 3 × 10','💪 Chair triceps dips 3 × 10'],['🧘 Progresivno opuštanje mišića 5 min','🧘 5 min of progressive muscle relaxation'],['🏃 Visoka koljena + pete prema stražnjici 6 × 30 s','🏃 High knees + butt kicks 6 × 30 s'],['🍑 Fire hydrant i donkey kick 2 × 15 po nozi','🍑 Fire hydrants and donkey kicks 2 × 15 per leg'],['🪑 Sjedenje uza zid 3 × 30 s','🪑 Wall sit 3 × 30 s'],['🥾 Hodanje s podizanjem koljena 5 min','🥾 Marching with high knees 5 min'],['🌅 Sunčev pozdrav 3 kruga i duboko disanje','🌅 3 rounds of sun salutation and deep breathing'],['🎵 Jedna pjesma sklekova, čučnjeva i planka naizmjence','🎵 One song alternating push-ups, squats and plank'],['🧠 5 min svjesnog hodanja – osjeti svaki korak','🧠 5 min of mindful walking – feel every step']
];
let mn={run:false,left:300,t:null};
function miniIdx(){return (Math.floor(Date.now()/864e5)+(S.miniShift||0))%MINI.length}
function miniDone(){return !!(S.mini&&S.mini[today()])}
function miniStart(){if(mn.run)return;mn.run=true;mn.left=300;mn.t=setInterval(()=>{mn.left--;if(mn.left<=0){miniFinish()}else if(tab==='home')render()},1000);render()}
function miniStop(){if(mn.t)clearInterval(mn.t);mn.run=false;mn.left=300}
function miniFinish(){miniStop();S.mini=S.mini||{};S.mini[today()]=1;S.miniCount=(S.miniCount||0)+1;save();if(typeof beep==='function')beep();if(typeof celebrate==='function')celebrate();notify(L('Bravo! Mali cilj je gotov 🎉','Great job! Mini goal done 🎉'))}
function miniSwap(){S.miniShift=(S.miniShift||0)+1;save();render()}
function miniCard(){
 const m=MINI[miniIdx()],done=miniDone(),mm=String(Math.floor(mn.left/60)),ss=String(mn.left%60).padStart(2,'0');
 return `<div class="card" style="${done?'background:#e6fcf5;color:#12372d':'border:1.5px dashed var(--p)'}"><div class="flex" style="justify-content:space-between;align-items:center"><span class="mut" style="font-weight:700;letter-spacing:.04em;${done?'color:#0b8f66':''}">${L('MALI CILJ DANA · 5 MIN','TODAY\'S MINI GOAL · 5 MIN')}</span>${done?'<span>✅</span>':`<span class="mut" style="font-size:12px" onclick="miniSwap()">🔄 ${L('Zamijeni','Swap')}</span>`}</div>
 <p style="font-size:16px;font-weight:600;margin:8px 0">${L(m[0],m[1])}</p>
 ${done?`<p style="font-size:13px">${L('Odrađeno! Dan se računa u tvoju seriju. 🔥','Done! Today counts for your streak. 🔥')}</p>`:mn.run?`<div class="timer" style="margin:4px 0">${mm}:${ss}</div><div class="row"><button class="btn" onclick="miniFinish()">✓ ${L('Gotovo','Done')}</button><button class="btn sec" onclick="miniStop();render()">${L('Odustani','Stop')}</button></div>`:`<div class="row"><button class="btn" onclick="miniStart()">▶ ${L('Kreni (5:00)','Start (5:00)')}</button><button class="btn sec" onclick="miniFinish()">✓ ${L('Već sam','Already did')}</button></div>`}</div>`;
}
function homeExtras(){return remBanner()+miniCard()+serCard()}
Object.assign(EXACT,{'Biblioteka vježbi':'Exercise library','240+ vježbi s filtrima':'240+ exercises with filters','Podsjetnici':'Reminders','Obavijest, kalendar, serija':'Notification, calendar, streak','Kada trenirati i jesti':'When to train and eat'});

/* ---------- uređivanje profila ---------- */
let pe=false;
function profEdit(on){pe=on;render();scrollTo(0,0)}
function profSave(){
 const g=id=>($('#'+id)||{value:''}).value,name=g('pe_n').trim(),age=+g('pe_a'),h=+g('pe_h'),w=+g('pe_w');
 const mail=g('pe_m').trim().toLowerCase(),mailOk=S.demo||/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail);
 const err=!mailOk?L('Neispravna e-pošta','Invalid email'):!name?L('Upiši ime','Enter your name'):!(age>=14&&age<=100)?L('Dob mora biti 14–100','Age must be 14–100'):!(h>=120&&h<=230)?L('Visina mora biti 120–230 cm','Height must be 120–230 cm'):!(w>=30&&w<=250)?L('Težina mora biti 30–250 kg','Weight must be 30–250 kg'):'';
 if(err){notify(err);return}
 if(!S.demo&&mail!==String(S.mail).toLowerCase()){S.mail=mail;S.mailEdited=1}
 S.name=name.slice(0,40);S.age=Math.round(age);S.h=Math.round(h);S.w=Math.round(w*10)/10;S.goal=g('pe_g');S.lvl=g('pe_l');S.pref=g('pe_p');
 if(S.plan){S.plan.p=S.pref}loc=S.pref;pe=false;save();render();notify(L('Podaci spremljeni ✓','Details saved ✓'))
}
function profile(){
 const opt=(arr,v,tr)=>arr.map(x=>`<option value="${x}" ${x===v?'selected':''}>${tr?L(x,tr[x]||x):x}</option>`).join('');
 const gT={'Gubitak kilograma':'Weight loss','Jačanje i tonus':'Strength and toning','Opuštanje / stres':'Relaxation / stress','Kondicija':'Fitness'},lT={Početnica:'Beginner',Srednja:'Intermediate',Napredna:'Advanced'},pT={'Kod kuće':'At home','U teretani':'At the gym','Na otvorenom':'Outdoors'};
 const head=`<div class="card"><h3>${S.name}</h3><p class="mut">${S.demo?L('Demo način – registracija preskočena','Demo mode – registration skipped'):S.mail}</p>${S.demo?`<button class="btn sm" style="margin-top:10px" onclick="S=null;render()">${L('Registriraj se','Sign up')}</button>`:''}</div>`;
 const tail=`<div class="card"><h3>${L('Povezani uređaji','Connected devices')}</h3><p class="mut">${L('Mobitel (Apple Zdravlje / Google Fit) i pametni sat – u punoj verziji aplikacije, ovdje simulacija.','Phone (Apple Health / Google Fit) and smartwatch – in the full app, simulated here.')}</p></div>
 ${typeof accTail==='function'?accTail():''}`;
 if(pe)return `<div class="pad"><h2>${L('Uredi profil','Edit profile')}</h2>${head}
 <div class="card">${S.demo?'':`<label>${L('E-pošta','Email')}</label><input id="pe_m" type="email" value="${(S.mail||'').replace(/"/g,'&quot;')}">`}<label>${L('Ime','Name')}</label><input id="pe_n" value="${(S.name||'').replace(/"/g,'&quot;')}" maxlength="40">
 <label>${L('Dob','Age')}</label><input id="pe_a" type="number" inputmode="numeric" value="${S.age}">
 <label>${L('Visina (cm)','Height (cm)')}</label><input id="pe_h" type="number" inputmode="numeric" value="${S.h}">
 <label>${L('Težina (kg)','Weight (kg)')}</label><input id="pe_w" type="number" inputmode="decimal" step="0.1" value="${S.w}">
 <label>${L('Cilj','Goal')}</label><select id="pe_g">${opt(Object.keys(gT),S.goal,gT)}</select>
 <label>${L('Razina','Level')}</label><select id="pe_l">${opt(Object.keys(lT),S.lvl,lT)}</select>
 <label>${L('Gdje najradije vježbaš?','Where do you prefer to train?')}</label><select id="pe_p">${opt(Object.keys(pT),S.pref,pT)}</select>
 <p class="mut" style="font-size:12px;margin-top:8px">${L('Plan, kalorije i KMI preračunavaju se automatski.','Email cannot be changed. Plan, calories and BMI recalculate automatically.')}</p>
 <div class="row" style="margin-top:10px"><button class="btn" onclick="profSave()">💾 ${L('Spremi','Save')}</button><button class="btn sec" onclick="profEdit(false)">${L('Odustani','Cancel')}</button></div></div></div>`;
 return `<div class="pad"><h2>${L('Profil','Profile')}</h2>${head}<button class="btn sec" onclick="profEdit(true)">✏️ ${L('Uredi podatke','Edit details')}</button>
 <div class="grid" style="margin-top:12px"><div class="stat"><span class="mut">${L('Dob','Age')}</span><b>${S.age}</b></div><div class="stat"><span class="mut">${L('Visina','Height')}</span><b>${S.h} cm</b></div>
 <div class="stat"><span class="mut">${L('Težina','Weight')}</span><b>${S.w} kg</b></div><div class="stat"><span class="mut">${L('KMI','BMI')}</span><b>${bmi()}</b></div></div>
 <div class="card" style="margin-top:12px"><span class="mut">${L('Cilj','Goal')}</span><br><b>${L(S.goal,gT[S.goal]||S.goal)}</b><br><span class="mut" style="display:block;margin-top:8px">${L('Razina / omiljeno mjesto','Level / preferred place')}</span><b>${L(S.lvl,lT[S.lvl]||S.lvl)} · ${L(S.pref,pT[S.pref]||S.pref)}</b></div>${tail}</div>`;
}
