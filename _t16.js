const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('http://localhost:8766/index.html');await p.waitForTimeout(1500);await p.screenshot({path:'/tmp/claude-0/name.png',clip:{x:0,y:0,width:720,height:110}});
const m=await b.newPage({viewport:{width:390,height:844},isMobile:true});await m.goto('http://localhost:8766/index.html');await m.waitForTimeout(1500);await m.screenshot({path:'/tmp/claude-0/name2.png',clip:{x:0,y:0,width:390,height:70}});
await b.close();})();
