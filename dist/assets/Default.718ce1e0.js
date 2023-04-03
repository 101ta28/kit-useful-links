import{p as D,i as F,c as d,r as C,a as A,g as ae,o as oe,b as V,d as ye,e as ne,f as ge,h as pe,j as be,k as he,l as H,m as l,n as le,t as Z,q as se,s as xe,u as _e,v as Se,w as Ve,x as X,y as W,z as L,A as Ie,B as Be,C as we}from"./index.268612db.js";import{u as Te,m as Y,a as M,b as Ce,c as $e,d as ke,e as Pe,f as Re,g as ze,h as Ae,V as U,i as Le,j as He}from"./VBtn.f24aaf8d.js";import{V as Me,a as Ne}from"./VImg.eda0c2fe.js";const O=Symbol.for("vuetify:layout"),ue=Symbol.for("vuetify:layout-item"),ee=1e3,Ee=D({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Oe=D({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function De(){const e=F(O);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function je(e){var v;const n=F(O);if(!n)throw new Error("[Vuetify] Could not find injected layout");const t=(v=e.id)!=null?v:`layout-item-${ye()}`,a=ae("useLayoutItem");ne(ue,{id:t});const o=C(!1);ge(()=>o.value=!0),pe(()=>o.value=!1);const{layoutItemStyles:u,layoutItemScrimStyles:i}=n.register(a,{...e,active:d(()=>o.value?!1:e.active.value),id:t});return be(()=>n.unregister(t)),{layoutItemStyles:u,layoutRect:n.layoutRect,layoutItemScrimStyles:i}}const qe=(e,n,t,a)=>{let o={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...o}}];for(const i of e){const v=n.get(i),f=t.get(i),y=a.get(i);if(!v||!f||!y)continue;const m={...o,[v.value]:parseInt(o[v.value],10)+(y.value?parseInt(f.value,10):0)};u.push({id:i,layer:m}),o=m}return u};function Ke(e){const n=F(O,null),t=d(()=>n?n.rootZIndex.value-100:ee),a=C([]),o=A(new Map),u=A(new Map),i=A(new Map),v=A(new Map),f=A(new Map),{resizeRef:y,contentRect:m}=Te(),_=d(()=>{var s;const r=new Map,g=(s=e.overlaps)!=null?s:[];for(const x of g.filter(c=>c.includes(":"))){const[c,b]=x.split(":");if(!a.value.includes(c)||!a.value.includes(b))continue;const w=o.get(c),P=o.get(b),R=u.get(c),E=u.get(b);!w||!P||!R||!E||(r.set(b,{position:w.value,amount:parseInt(R.value,10)}),r.set(c,{position:P.value,amount:-parseInt(E.value,10)}))}return r}),p=d(()=>{const r=[...new Set([...i.values()].map(s=>s.value))].sort((s,x)=>s-x),g=[];for(const s of r){const x=a.value.filter(c=>{var b;return((b=i.get(c))==null?void 0:b.value)===s});g.push(...x)}return qe(g,o,u,v)}),I=d(()=>!Array.from(f.values()).some(r=>r.value)),B=d(()=>p.value[p.value.length-1].layer),N=d(()=>({"--v-layout-left":V(B.value.left),"--v-layout-right":V(B.value.right),"--v-layout-top":V(B.value.top),"--v-layout-bottom":V(B.value.bottom),...I.value?void 0:{transition:"none"}})),S=d(()=>p.value.slice(1).map((r,g)=>{let{id:s}=r;const{layer:x}=p.value[g],c=u.get(s),b=o.get(s);return{id:s,...x,size:Number(c.value),position:b.value}})),$=r=>S.value.find(g=>g.id===r),T=ae("createLayout"),k=C(!1);oe(()=>{k.value=!0}),ne(O,{register:(r,g)=>{let{id:s,order:x,position:c,layoutSize:b,elementSize:w,active:P,disableTransitions:R,absolute:E}=g;i.set(s,x),o.set(s,c),u.set(s,b),v.set(s,P),R&&f.set(s,R);const G=he(ue,T==null?void 0:T.vnode).indexOf(r);G>-1?a.value.splice(G,0,s):a.value.push(s);const J=d(()=>S.value.findIndex(z=>z.id===s)),j=d(()=>t.value+p.value.length*2-J.value*2),ve=d(()=>{const z=c.value==="left"||c.value==="right",q=c.value==="right",fe=c.value==="bottom",Q={[c.value]:0,zIndex:j.value,transform:`translate${z?"X":"Y"}(${(P.value?0:-110)*(q||fe?-1:1)}%)`,position:E.value||t.value!==ee?"absolute":"fixed",...I.value?void 0:{transition:"none"}};if(!k.value)return Q;const h=S.value[J.value];if(!h)throw new Error(`[Vuetify] Could not find layout item "${s}"`);const K=_.value.get(s);return K&&(h[K.position]+=K.amount),{...Q,height:z?`calc(100% - ${h.top}px - ${h.bottom}px)`:w.value?`${w.value}px`:void 0,left:q?void 0:`${h.left}px`,right:q?`${h.right}px`:void 0,top:c.value!=="bottom"?`${h.top}px`:void 0,bottom:c.value!=="top"?`${h.bottom}px`:void 0,width:z?w.value?`${w.value}px`:void 0:`calc(100% - ${h.left}px - ${h.right}px)`}}),me=d(()=>({zIndex:j.value-1}));return{layoutItemStyles:ve,layoutItemScrimStyles:me,zIndex:j}},unregister:r=>{i.delete(r),o.delete(r),u.delete(r),v.delete(r),f.delete(r),a.value=a.value.filter(g=>g!==r)},mainRect:B,mainStyles:N,getLayoutItem:$,items:S,layoutRect:m,rootZIndex:t});const ce=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),de=d(()=>({zIndex:t.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:ce,layoutStyles:de,getLayoutItem:$,items:S,layoutRect:m,layoutRef:y}}const Ue=D({text:String,...Y()},"v-toolbar-title"),Ze=H()({name:"VToolbarTitle",props:Ue(),setup(e,n){let{slots:t}=n;return M(()=>{const a=!!(t.default||t.text||e.text);return l(e.tag,{class:"v-toolbar-title"},{default:()=>{var o;return[a&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Fe=[null,"prominent","default","comfortable","compact"],ie=D({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Fe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ce(),...$e(),...ke(),...Y({tag:"header"}),...le()},"v-toolbar"),te=H()({name:"VToolbar",props:ie(),setup(e,n){var p;let{slots:t}=n;const{backgroundColorClasses:a,backgroundColorStyles:o}=Pe(Z(e,"color")),{borderClasses:u}=Re(e),{elevationClasses:i}=ze(e),{roundedClasses:v}=Ae(e),{themeClasses:f}=se(e),y=C(!!(e.extended||((p=t.extension)==null?void 0:p.call(t)))),m=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),_=d(()=>y.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return xe({VBtn:{variant:"text"}}),M(()=>{var S;const I=!!(e.title||t.title),B=!!(t.image||e.image),N=(S=t.extension)==null?void 0:S.call(t);return y.value=!!(e.extended||N),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,u.value,i.value,v.value,f.value],style:[o.value]},{default:()=>[B&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(U,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(Me,{key:"image-img",cover:!0,src:e.image},null)]),l(U,{defaults:{VTabs:{height:V(m.value)}}},{default:()=>{var $,T,k;return[l("div",{class:"v-toolbar__content",style:{height:V(m.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[($=t.prepend)==null?void 0:$.call(t)]),I&&l(Ze,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}}),l(U,{defaults:{VTabs:{height:V(_.value)}}},{default:()=>[l(Ne,null,{default:()=>[y.value&&l("div",{class:"v-toolbar__extension",style:{height:V(_.value)}},[N])]})]})]})}),{contentHeight:m,extensionHeight:_}}});function re(){const e=C(!1);return oe(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:_e(e)}}const Xe=H()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ie(),...Oe(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=C(),o=Se(e,"modelValue"),u=d(()=>{var m,_,p,I;const f=(_=(m=a.value)==null?void 0:m.contentHeight)!=null?_:0,y=(I=(p=a.value)==null?void 0:p.extensionHeight)!=null?I:0;return f+y}),{ssrBootStyles:i}=re(),{layoutItemStyles:v}=je({id:e.name,order:d(()=>parseInt(e.order,10)),position:Z(e,"location"),layoutSize:u,elementSize:u,active:o,absolute:Z(e,"absolute")});return M(()=>{const[f]=te.filterProps(e);return l(te,Ve({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...v.value,height:void 0,...i.value}},f),t)}),{}}}),We={__name:"AppBar",setup(e){return(n,t)=>(X(),W(Xe,{flat:""},{default:L(()=>[l(Le,{icon:"",to:"/"},{default:L(()=>[l(He,null,{default:L(()=>[Ie("mdi-home")]),_:1})]),_:1})]),_:1}))}};const Ye=H()({name:"VMain",props:{scrollable:Boolean,...Y({tag:"main"})},setup(e,n){let{slots:t}=n;const{mainStyles:a}=De(),{ssrBootStyles:o}=re();return M(()=>l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[a.value,o.value]},{default:()=>{var u,i;return[e.scrollable?l("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Ge={__name:"View",setup(e){return(n,t)=>{const a=Be("router-view");return X(),W(Ye,null,{default:L(()=>[l(a)]),_:1})}}};const Je=H()({name:"VApp",props:{...Ee({fullHeight:!0}),...le()},setup(e,n){let{slots:t}=n;const a=se(e),{layoutClasses:o,layoutStyles:u,getLayoutItem:i,items:v,layoutRef:f}=Ke(e),{rtlClasses:y}=we();return M(()=>{var m;return l("div",{ref:f,class:["v-application",a.themeClasses.value,o.value,y.value],style:u.value},[l("div",{class:"v-application__wrap"},[(m=t.default)==null?void 0:m.call(t)])])}),{getLayoutItem:i,items:v,theme:a}}}),ot={__name:"Default",setup(e){return(n,t)=>(X(),W(Je,null,{default:L(()=>[l(We),l(Ge)]),_:1}))}};export{ot as default};