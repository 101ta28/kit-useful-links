import{l as x,a1 as k,X as z,a2 as T,a3 as M,S as R,p as D,w as G,r as _,c as b,E as w,a4 as U,_ as X,$ as P,a0 as J,m as u,L as K,b as Q,a5 as Y}from"./index.59a08275.js";import{a as Z,k as ee}from"./VBtn.f922b826.js";function v(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",i=arguments.length>2?arguments[2]:void 0;return x()({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:i},origin:{type:String,default:l}},setup(r,d){let{slots:a}=d;return()=>{const t=r.group?k:z;return T(t,{name:e,mode:r.mode,onBeforeEnter(n){n.style.transformOrigin=r.origin},onLeave(n){if(r.leaveAbsolute){const{offsetTop:g,offsetLeft:o,offsetWidth:f,offsetHeight:m}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${g}px`,n.style.left=`${o}px`,n.style.width=`${f}px`,n.style.height=`${m}px`}r.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(r.leaveAbsolute&&(n==null?void 0:n._transitionInitialStyles)){const{position:g,top:o,left:f,width:m,height:h}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=g||"",n.style.top=o||"",n.style.left=f||"",n.style.width=m||"",n.style.height=h||""}}},a.default)}}})}function N(e,l){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return x()({name:e,props:{mode:{type:String,default:i}},setup(r,d){let{slots:a}=d;return()=>T(z,{name:e,...l},a.default)}})}function V(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",r=M(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const g=`${t[r]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[i]=g})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[r]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:d,onLeaveCancelled:d};function d(t){e&&t._parent&&t._parent.classList.remove(e),a(t)}function a(t){const n=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[i]=n),delete t._initialStyle}}v("fab-transition","center center","out-in");v("dialog-bottom-transition");v("dialog-top-transition");v("fade-transition");v("scale-transition");v("scroll-x-transition");v("scroll-x-reverse-transition");v("scroll-y-transition");v("scroll-y-reverse-transition");v("slide-x-transition");v("slide-x-reverse-transition");v("slide-y-transition");v("slide-y-reverse-transition");const oe=N("expand-transition",V()),le=N("expand-x-transition",V("",!0));function te(e,l){if(!R)return;const i=l.modifiers||{},r=l.value,{handler:d,options:a}=typeof r=="object"?r:{handler:r,options:{}},t=new IntersectionObserver(function(){var m;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const o=(m=e._observe)==null?void 0:m[l.instance.$.uid];if(!o)return;const f=n.some(h=>h.isIntersecting);d&&(!i.quiet||o.init)&&(!i.once||f||o.init)&&d(f,n,g),f&&i.once?j(e,l):o.init=!0},a);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:t},t.observe(e)}function j(e,l){var r;const i=(r=e._observe)==null?void 0:r[l.instance.$.uid];!i||(i.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const ne={mounted:te,unmounted:j},re=ne,ie=D({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),p=(e,l)=>{let{slots:i}=l;const{transition:r,...d}=e,{component:a=z,...t}=typeof r=="object"?r:{};return T(a,G(typeof r=="string"?{name:r}:t,d),i)},ue=x()({name:"VImg",directives:{intersect:re},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ie()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:r}=l;const d=_(""),a=_(),t=_(e.eager?"loading":"idle"),n=_(),g=_(),o=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=b(()=>o.value.aspect||n.value/g.value||0);w(()=>e.src,()=>{m(t.value!=="idle")}),w(f,(s,c)=>{!s&&c&&a.value&&S(a.value)}),U(()=>m());function m(s){if(!(e.eager&&s)&&!(R&&!s&&!e.eager)){if(t.value="loading",o.value.lazySrc){const c=new Image;c.src=o.value.lazySrc,S(c,null)}!o.value.src||X(()=>{var c,y;if(i("loadstart",((c=a.value)==null?void 0:c.currentSrc)||o.value.src),(y=a.value)!=null&&y.complete){if(a.value.naturalWidth||I(),t.value==="error")return;f.value||S(a.value,null),h()}else f.value||S(a.value),$()})}}function h(){var s;$(),t.value="loaded",i("load",((s=a.value)==null?void 0:s.currentSrc)||o.value.src)}function I(){var s;t.value="error",i("error",((s=a.value)==null?void 0:s.currentSrc)||o.value.src)}function $(){const s=a.value;s&&(d.value=s.currentSrc||s.src)}let E=-1;function S(s){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{clearTimeout(E);const{naturalHeight:B,naturalWidth:O}=s;B||O?(n.value=O,g.value=B):!s.complete&&t.value==="loading"&&c!=null?E=window.setTimeout(y,c):(s.currentSrc.endsWith(".svg")||s.currentSrc.startsWith("data:image/svg+xml"))&&(n.value=1,g.value=1)};y()}const L=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),C=()=>{var y;if(!o.value.src||t.value==="idle")return null;const s=u("img",{class:["v-img__img",L.value],src:o.value.src,srcset:o.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:h,onError:I},null),c=(y=r.sources)==null?void 0:y.call(r);return u(p,{transition:e.transition,appear:!0},{default:()=>[P(c?u("picture",{class:"v-img__picture"},[c,s]):s,[[Y,t.value==="loaded"]])]})},F=()=>u(p,{transition:e.transition},{default:()=>[o.value.lazySrc&&t.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",L.value],src:o.value.lazySrc,alt:e.alt},null)]}),W=()=>r.placeholder?u(p,{transition:e.transition,appear:!0},{default:()=>[(t.value==="loading"||t.value==="error"&&!r.error)&&u("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,H=()=>r.error?u(p,{transition:e.transition,appear:!0},{default:()=>[t.value==="error"&&u("div",{class:"v-img__error"},[r.error()])]}):null,q=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,A=_(!1);{const s=w(f,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),s())})}return Z(()=>P(u(ee,{class:["v-img",{"v-img--booting":!A.value}],style:{width:Q(e.width==="auto"?n.value:e.width)},aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>u(K,null,[u(C,null,null),u(F,null,null),u(q,null,null),u(W,null,null),u(H,null,null)]),default:r.default}),[[J("intersect"),{handler:m,options:e.options},null,{once:!0}]])),{currentSrc:d,image:a,state:t,naturalWidth:n,naturalHeight:g}}});export{ue as V,oe as a,le as b};
