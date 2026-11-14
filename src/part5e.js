document.head.insertAdjacentHTML('beforeend','<style id="modern">'+
':root{--p:#e0457b;--p2:#fff0f5;--g:#12b886;--ink:#241b2f;--mut:#80758f;--bg:#faf8fc;--card:#fff;--line:#efe8f4;--sh:0 1px 2px rgba(60,20,80,.04),0 8px 24px -8px rgba(110,50,140,.14);--r:20px;--grad:linear-gradient(135deg,#ff7aa2 0%,#e0457b 45%,#8e4dff 100%)}'+
'body{font-family:Inter,"SF Pro Text",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;letter-spacing:-.005em;background:radial-gradient(900px 500px at 15% -10%,#ffd9e8 0,transparent 60%),radial-gradient(800px 500px at 100% 0,#e3d9ff 0,transparent 55%),#f4eef8;-webkit-font-smoothing:antialiased}'+
'#app{background:var(--bg);box-shadow:0 30px 80px -20px rgba(100,40,130,.35)}'+
'@media(min-width:520px){body{padding:24px 0}#app{border-radius:34px;min-height:calc(100dvh - 48px);overflow:visible}}'+
'h1{font-size:28px;font-weight:800;letter-spacing:-.03em}h2{font-size:22px;font-weight:800;letter-spacing:-.025em}h3{font-size:16px;font-weight:700;letter-spacing:-.01em}'+
'.pad{padding:20px 18px}'+
'.hero{background:var(--grad);padding:calc(30px + env(safe-area-inset-top)) 22px 34px;border-radius:0 0 34px 34px;box-shadow:0 18px 40px -18px rgba(224,69,123,.55)}'+
'.hero:before{width:220px;height:220px;right:-70px;top:-90px;background:rgba(255,255,255,.14)}.hero:after{width:140px;height:140px;right:40px;bottom:-80px;background:rgba(255,255,255,.1)}'+
'.hero h1{font-size:30px}.hero p{font-size:14px;opacity:.92}'+
'.card{border:1px solid var(--line);border-radius:var(--r);padding:16px;box-shadow:var(--sh);margin-bottom:14px}'+
'.card.sub:active,.stat.sub:active{transform:scale(.975)}'+
'.btn{background:var(--grad);border-radius:16px;padding:14px 18px;font-size:15px;font-weight:700;letter-spacing:.005em;box-shadow:0 10px 22px -8px rgba(224,69,123,.6);transition:transform .15s,box-shadow .2s,filter .2s}'+
'.btn:hover{filter:brightness(1.05)}.btn:active{transform:scale(.97);box-shadow:0 4px 10px -4px rgba(224,69,123,.6)}'+
'.btn.sec{background:var(--p2);color:var(--p);box-shadow:none}.btn.sm{border-radius:12px;padding:9px 14px}'+
'label{font-weight:600;font-size:12.5px;letter-spacing:.02em;text-transform:none;margin:14px 0 6px}'+
'input,select,textarea{border:1.5px solid var(--line);border-radius:14px;padding:13px 14px;background:var(--card);color:var(--ink);transition:border-color .15s,box-shadow .15s}'+
'input:focus,select:focus,textarea:focus{outline:none!important;border-color:var(--p);box-shadow:0 0 0 4px rgba(224,69,123,.15)}'+
'.chips{scrollbar-width:none;gap:8px;padding:2px 2px 6px}.chips::-webkit-scrollbar{display:none}'+
'.chip{border:1.5px solid var(--line);border-radius:99px;padding:8px 15px;font-size:13px;font-weight:600;background:var(--card);color:var(--ink);box-shadow:0 1px 2px rgba(60,20,80,.05)}'+
'.chip.on{background:var(--grad);border-color:transparent;color:#fff;box-shadow:0 6px 14px -6px rgba(224,69,123,.7)}'+
'.stat{border-radius:18px;padding:14px;box-shadow:var(--sh)}.stat b{font-size:22px;font-weight:800;letter-spacing:-.02em}'+
'.tag{border-radius:8px;padding:3px 9px;font-weight:600;font-size:11px}.tag.g{background:#e3faf1;color:#0b8f66}'+
'.bar,.pbar{height:10px;border-radius:99px}.bar i{background:var(--grad);border-radius:99px}'+
'.mut{color:var(--mut)}.big{font-weight:800;letter-spacing:-.04em}'+
'nav{left:50%;transform:translateX(-50%);width:calc(100% - 24px);max-width:416px;bottom:calc(10px + env(safe-area-inset-bottom));padding:6px;border:1px solid rgba(255,255,255,.7);border-radius:26px;background:rgba(255,255,255,.82);-webkit-backdrop-filter:saturate(180%) blur(18px);backdrop-filter:saturate(180%) blur(18px);box-shadow:0 14px 40px -10px rgba(80,30,110,.35)}'+
'@media(min-width:520px){nav{border-radius:26px;bottom:calc(24px + 10px)}}'+
'nav button{min-height:54px;border-radius:20px;padding:8px 0 6px;font-size:10.5px;font-weight:600;transition:background .2s,color .2s,transform .15s}'+
'nav button span{font-size:21px;margin-bottom:1px;transition:transform .2s}'+
'nav button.on{background:var(--p2);color:var(--p);font-weight:700}nav button.on span{transform:translateY(-1px) scale(1.12)}'+
'#app{padding-bottom:calc(100px + env(safe-area-inset-bottom))}.toast{bottom:calc(100px + env(safe-area-inset-bottom));box-shadow:0 10px 30px -8px rgba(0,0,0,.4);backdrop-filter:blur(8px)}'+
'.wcard{border-left:0;border-top:4px solid var(--p)}'+
'.premcard{background:linear-gradient(135deg,#fff7e6,#ffeef5)!important;border:1px solid #ffd9a8}'+
'.timer{font-weight:800;letter-spacing:-.03em}'+
'body.dark{--bg:#120e17;--card:#1d1626;--ink:#f4eff8;--mut:#a99fb8;--line:#33293f;--p2:#35202f;--sh:0 1px 2px rgba(0,0,0,.4),0 8px 24px -8px rgba(0,0,0,.6);background:radial-gradient(800px 500px at 10% -10%,#3a1630 0,transparent 60%),#0b080f}'+
'body.dark nav{background:rgba(29,22,38,.82);border-color:rgba(255,255,255,.07)}body.dark .premcard{background:linear-gradient(135deg,#2c2314,#2c1824)!important;border-color:#5a4524}'+
'body.dark input:focus,body.dark select:focus{box-shadow:0 0 0 4px rgba(224,69,123,.3)}'+
'::selection{background:rgba(224,69,123,.25)}'+
'@media(max-width:360px){nav button{font-size:9.5px}nav button span{font-size:19px}h1{font-size:24px}.hero h1{font-size:26px}}'+
'</style>');
(function(){try{if(S&&S.mail&&PREM_MAILS.indexOf(String(S.mail).trim().toLowerCase())>-1&&!S.prem){S.prem=true;S.premGift=true;save()}}catch(e){}})();
