(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{7757:function(t,e,s){Promise.resolve().then(s.bind(s,4680))},4177:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var i=s(8421),n=s(6934),a=s.n(n),r=s(990),o=s(6008),u=s(2298);function c(){let t=(0,o.useRouter)(),e=(0,o.usePathname)(),{data:s,isLoading:n,error:c}=(0,r.a)({refetchOnWindowFocus:!0,refetchOnMount:!0,refetchOnReconnect:!0,staleTime:1/6*60,refetchInterval:1/6*6e4,queryKey:["user"],queryFn:async()=>{let s=await (0,i.Z)();if(!s)return null;let n=await fetch("".concat("https://beta.typenomore.com","/api/user"),{headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(s)}}),r=await n.json(),{data:o}=r,c="/login/"===e||"/register/"===e,h=401===r.code;if(h&&!c)return t.push("/login");if(o.email_verified_at&&"/email/verification/"===e)return t.push("/");if(403===r.code){var l;let e=null===(l=r.data)||void 0===l?void 0:l.type;return"unverified_email"===e?t.push("/email/verification"):"unsubscription"===e?t.push("/subscription"):t.push("/403")}return(o.id&&u.ZP.identify(o.id,o),200==r.code||c)?(a().setUser(o.id,o.email,o.name),o):(a().notify("Failed to fetch user"),t.push("/login"),null)}});return{user:s,isLoading:n,error:c}}},4680:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return d}});var i=s(9268),n=s(6008),a=s(8421),r=s(6934),o=s.n(r),u=s(8999),c=s(6006),h=s(2913),l=s(4177);function d(){var t;let e=(0,n.useRouter)(),{user:s}=(0,l.Z)();(null==s?void 0:null===(t=s.related_subscription)||void 0===t?void 0:t.latest_status)==2&&e.replace("/");let[r,d]=(0,c.useState)(!1),{mutateAsync:p,isSuccess:m,isPending:f}=function(t){let{onSuccess:e}=t;return(0,u.D)({mutationKey:["user"],onSuccess:e,onError:t=>{o().notify(t),console.error(t),h.Am.error(t.message)},mutationFn:async()=>{let t=await (0,a.Z)(),e=await fetch("".concat("https://beta.typenomore.com","/api/paypal/subscription/create"),{method:"POST",headers:{"Content-Type":"application/json",accept:"application/json",Authorization:"Bearer ".concat(t)}}),s=await e.json();return s}})}({onSuccess:()=>{d(!0)}});async function v(){let t=await p(),{data:e}=t;if(200!==t.code){h.Am.error("Something went wrong"),o().notify(t.message);return}let s=null==e?void 0:e.approve_link;window.open(s,"_blank")}return(0,i.jsxs)("main",{className:"flex h-[80vh] w-full flex-col items-center justify-center gap-3 bg-[#F5F5F5] p-5 text-center",children:[(0,i.jsx)("h1",{className:"text-blacktext m-0 text-2xl font-bold",children:"Just 5 USD / month"}),(0,i.jsx)("p",{className:"text-blacktext text-base",children:"Subscribe and have fun with our automation!"}),m&&(0,i.jsx)("p",{className:"text-[#ADB5BD]",children:"We have redirected you to payment gateway."}),(0,i.jsx)("button",{onClick:v,disabled:f||m||r,className:"btn btn-primary btn-block disabled:bg-primary disabled:bg-opacity-20 disabled:text-white",children:f?(0,i.jsx)("span",{className:"loading loading-spinner"}):"Subscribe Now"}),m&&(0,i.jsx)("p",{className:"text-[#ADB5BD]",children:"If you have completed payment, but still in this page, please wait at least 5 minutes."})]})}},2026:function(t,e,s){"use strict";s.d(e,{Z:function(){return i}});let i=new class{run(t,e){return new Promise((s,i)=>{let n=this.id++,a=t=>{var e,r;if(("https://www.figma.com"===t.origin||"https://staging.figma.com"===t.origin)&&((null===(e=t.data.pluginMessage)||void 0===e?void 0:e.type)==="EVAL_RESULT"&&t.data.pluginMessage.id===n&&(window.removeEventListener("message",a),s(t.data.pluginMessage.result)),(null===(r=t.data.pluginMessage)||void 0===r?void 0:r.type)==="EVAL_REJECT"&&t.data.pluginMessage.id===n)){window.removeEventListener("message",a);let e=t.data.pluginMessage.error;i(Error("string"==typeof e?e:"An error occurred in FigmaAPI.run()"))}};window.addEventListener("message",a);let r={pluginMessage:{type:"EVAL",code:t.toString(),id:n,params:e},pluginId:"*"};["https://www.figma.com","https://staging.figma.com"].forEach(t=>{try{parent.postMessage(r,t)}catch(t){}})})}constructor(){this.id=0}}},8421:function(t,e,s){"use strict";s.d(e,{Z:function(){return n}});var i=s(2026);function n(){return i.Z.run(async t=>await t.clientStorage.getAsync("token"))}},8468:function(t,e,s){"use strict";s.d(e,{R:function(){return o},m:function(){return r}});var i=s(9806),n=s(8115),a=s(7597),r=class extends n.F{#t;#e;#s;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.defaultOptions,this.#s=t.mutationCache,this.#t=[],this.state=t.state||o(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#e,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#n({type:"pending",variables:t}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#n({type:"pending",context:e,variables:t})}let s=await (this.#i=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#n({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#i.promise);return await this.#s.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#s.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#n({type:"success",data:s}),s}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#n({type:"error",error:e})}}}#n(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),i.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}};function o(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},8999:function(t,e,s){"use strict";s.d(e,{D:function(){return l}});var i=s(6006),n=s(8468),a=s(9806),r=s(6058),o=s(2323),u=class extends r.l{#a;#r=void 0;#o;#u;constructor(t,e){super(),this.#a=t,this.setOptions(e),this.bindMethods(),this.#c()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#a.defaultMutationOptions(t),(0,o.VS)(this.options,e)||this.#a.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#o,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,o.Ym)(e.mutationKey)!==(0,o.Ym)(this.options.mutationKey)?this.reset():this.#o?.state.status==="pending"&&this.#o.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#o?.removeObserver(this)}onMutationUpdate(t){this.#c(),this.#h(t)}getCurrentResult(){return this.#r}reset(){this.#o?.removeObserver(this),this.#o=void 0,this.#c(),this.#h()}mutate(t,e){return this.#u=e,this.#o?.removeObserver(this),this.#o=this.#a.getMutationCache().build(this.#a,this.options),this.#o.addObserver(this),this.#o.execute(t)}#c(){let t=this.#o?.state??(0,n.R)();this.#r={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#h(t){a.V.batch(()=>{if(this.#u&&this.hasListeners()){let e=this.#r.variables,s=this.#r.context;t?.type==="success"?(this.#u.onSuccess?.(t.data,e,s),this.#u.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#u.onError?.(t.error,e,s),this.#u.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#r)})})}},c=s(5181),h=s(3524);function l(t,e){let s=(0,c.NL)(e),[n]=i.useState(()=>new u(s,t));i.useEffect(()=>{n.setOptions(t)},[n,t]);let r=i.useSyncExternalStore(i.useCallback(t=>n.subscribe(a.V.batchCalls(t)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),o=i.useCallback((t,e)=>{n.mutate(t,e).catch(h.Z)},[n]);if(r.error&&(0,h.L)(n.options.throwOnError,[r.error]))throw r.error;return{...r,mutate:o,mutateAsync:r.mutate}}}},function(t){t.O(0,[342,834,253,961,744],function(){return t(t.s=7757)}),_N_E=t.O()}]);