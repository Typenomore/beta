(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{18:function(e,t,a){Promise.resolve().then(a.bind(a,7135))},4177:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(8421),i=a(6934),s=a.n(i),r=a(990),o=a(6008),l=a(2298);function c(){let e=(0,o.useRouter)(),t=(0,o.usePathname)(),{data:a,isLoading:i,error:c}=(0,r.a)({refetchOnWindowFocus:!0,refetchOnMount:!0,refetchOnReconnect:!0,staleTime:30,refetchInterval:3e4,queryKey:["user"],queryFn:async()=>{let a=await (0,n.Z)();if(!a)return null;let i=await fetch("".concat("https://beta.typenomore.com","/api/user"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(a)}}),r=await i.json(),{data:o}=r,c="/login/"===t||"/register/"===t,u=401===r.code;if(u&&!c)return e.push("/login");if(o.email_verified_at&&"/email/verification/"===t)return e.push("/");if(403===r.code){var d;let t=null===(d=r.data)||void 0===d?void 0:d.type;return"unverified_email"===t?e.push("/email/verification"):"unsubscription"===t?e.push("/subscription"):e.push("/403")}return(o.id&&l.ZP.identify(o.id,o),200==r.code||c)?(s().setUser(o.id,o.email,o.name),o):(s().notify("Failed to fetch user"),e.push("/login"),null)}});return{user:a,isLoading:i,error:c}}},7135:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var n=a(9268),i=a(2026),s=a(6394),r=a.n(s),o=a(6008),l=a(6006),c=a(3590),u=a(6934),d=a.n(u),p=a(2913);async function g(e){let{text:t="Generate user story of every component for this design, make it clear and easy to read, seperate every section with clear and descruptive details",imageBase64:a}=e,n=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=".concat("AIzaSyB4BI7oivRtfVMNNi21DYRQ9IqaHfljeJI"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({contents:[{parts:[{text:t},{inline_data:{mime_type:"image/png",data:a}}]}]})}),i=await n.json();return 200!=i.code&&((0,p.Am)(i.message,{type:"error"}),d().notify("Failed to generate gemini",e=>{e.request.body={prompt:t,image:a}})),i}var m=a(8421);async function f(e){let{prompt:t="Generate user story of every component for this design, make it clear and easy to read, seperate every section with clear and descruptive details",imageBase64:a}=e,n=await (0,m.Z)(),i=await fetch("".concat("https://beta.typenomore.com","/api/generate"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(n)},method:"POST",body:JSON.stringify({prompt:t,image:"data:image/png;base64,".concat(a)})}),s=await i.json();return 200!=s.code&&((0,p.Am)(s.message,{type:"error"}),d().notify("Failed to generate openai",e=>{e.request.body={prompt:t,image:a}})),s}var h=a(4177),y=a(2298);function v(){var e,t;let a=(0,o.useRouter)(),[s,u]=(0,l.useState)(""),[v,b]=(0,l.useState)({frames:[],imageBytes:new Uint8Array,imageBase64:""}),{frames:w,imageBytes:x,imageBase64:E}=v,[j,N]=(0,l.useState)(!1),[A,P]=(0,l.useState)(""),[_,C]=(0,l.useState)([]);(0,l.useEffect)(()=>{if((async()=>{let e=await (0,m.Z)();e||a.push("/login")})(),i.Z.run(async e=>{e.on("selectionchange",async()=>{e.ui.postMessage({message:{frames:[],imageBytes:[],imageBase64:""},type:"selectionchange"});let t=e.currentPage.selection;if(!t.length)return;let a=t[0],n=await a.exportAsync({format:"PNG"}),i=e.base64Encode(n);e.ui.postMessage({message:{frames:t,imageBytes:n,imageBase64:i},type:"selectionchange"})})}),window.onmessage=e=>{let{message:t,type:a}=e.data.pluginMessage;"selectionchange"!=a||A||b(t)},y.ZP.isFeatureEnabled("generating-types")){var e;let t=y.ZP.getFeatureFlagPayload("generating-types");C(t),u((null==t?void 0:null===(e=t[0])||void 0===e?void 0:e.value)||"")}return()=>{i.Z.run(async e=>{e.off("selectionchange",()=>{})})}},[]);let{user:I,isLoading:M,error:Z}=(0,h.Z)();if((null==I?void 0:null===(e=I.related_subscription)||void 0===e?void 0:e.latest_status)&&(null==I?void 0:null===(t=I.related_subscription)||void 0===t?void 0:t.latest_status)!=2&&(p.Am.error("Please update your subscription"),a.push("/account")),Z)return"An error has occurred: "+Z.message;if(M)return"Loading...";async function S(e){var t,a,n,i;null==e||e.preventDefault(),N(!0);let r=y.ZP.isFeatureEnabled("AI-driver")&&y.ZP.getFeatureFlagPayload("AI-driver")||"GEMINI",o="";if("OPENAI"==r){let e=await f({prompt:s,imageBase64:E});o=null==e?void 0:e.data}else if("GEMINI"==r){let e=await g({text:s,imageBase64:E});if(e.error)return console.error(e.error.message),!1;let{candidates:r}=e;o=null==r?void 0:null===(i=r[0])||void 0===i?void 0:null===(n=i.content)||void 0===n?void 0:null===(a=n.parts)||void 0===a?void 0:null===(t=a[0])||void 0===t?void 0:t.text}else o="Error: Unset AI Driver Gemini/Openai";P(o),N(!1)}return I||a.push("/login"),(0,n.jsx)("section",{className:"mx-auto flex w-full max-w-md flex-col gap-3 px-5 py-6",children:A?(0,n.jsxs)("article",{className:"flex w-full flex-col gap-3",children:[(0,n.jsx)("h2",{className:"",children:"Result"}),(0,n.jsx)(c.U,{className:" flex h-[375px] flex-col gap-3 overflow-auto rounded-md border border-[#DEE2E6] bg-white px-3 py-3.5 text-xs",children:A}),(0,n.jsxs)("div",{className:"inline-flex w-full items-center gap-2.5",children:[(0,n.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>{P(""),S()},children:"Regenerate"}),(0,n.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>(function(e){try{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),(0,p.Am)("Copied to clipboard",{type:"success"})}catch(e){(0,p.Am)("Failed to copy",{type:"error"}),console.log({error:e}),d().notify(e)}})(A),children:"Copy"}),(0,n.jsx)("button",{className:"btn btn-outline btn-primary btn-sm",onClick:()=>P(""),children:"Reset"})]})]}):(0,n.jsxs)("form",{className:"flex w-full flex-col gap-3",onSubmit:S,children:[(0,n.jsx)("h2",{className:"text-left ",children:w.length?"A frame is selected":"Please select a frame"}),(0,n.jsx)("div",{className:"h-36 w-full gap-2 overflow-hidden rounded-md border border-[#DEE2E6] bg-white",children:w.length?(0,n.jsx)(r(),{width:0,height:0,src:"data:image/png;base64,".concat(E),alt:"",className:"h-36 w-full bg-white object-contain"}):(0,n.jsx)("p",{className:"p-4 text-[#ADB5BD] ",children:"Your preview goes here"})}),(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("select",{className:"select select-sm w-full",name:"type",id:"type",value:s,onChange:e=>u(e.target.value),disabled:!w.length||w.length>=2||j,children:null==_?void 0:_.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary btn-sm btn-block disabled:bg-primary disabled:bg-opacity-20 disabled:text-white",disabled:!s||!w.length||w.length>=2||j,children:j?"⏳Generating...":"Generate"})]})})}},2026:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});let n=new class{run(e,t){return new Promise((a,n)=>{let i=this.id++,s=e=>{var t,r;if(("https://www.figma.com"===e.origin||"https://staging.figma.com"===e.origin)&&((null===(t=e.data.pluginMessage)||void 0===t?void 0:t.type)==="EVAL_RESULT"&&e.data.pluginMessage.id===i&&(window.removeEventListener("message",s),a(e.data.pluginMessage.result)),(null===(r=e.data.pluginMessage)||void 0===r?void 0:r.type)==="EVAL_REJECT"&&e.data.pluginMessage.id===i)){window.removeEventListener("message",s);let t=e.data.pluginMessage.error;n(Error("string"==typeof t?t:"An error occurred in FigmaAPI.run()"))}};window.addEventListener("message",s);let r={pluginMessage:{type:"EVAL",code:e.toString(),id:i,params:t},pluginId:"*"};["https://www.figma.com","https://staging.figma.com"].forEach(e=>{try{parent.postMessage(r,e)}catch(e){}})})}constructor(){this.id=0}}},8421:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(2026);function i(){return n.Z.run(async e=>await e.clientStorage.getAsync("token"))}}},function(e){e.O(0,[342,834,394,590,253,961,744],function(){return e(e.s=18)}),_N_E=e.O()}]);