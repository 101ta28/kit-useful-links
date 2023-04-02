import{m as c,a as P}from"./VBtn.4ae771a1.js";import{l as f,m as G,a7 as u,a8 as d,c as C,a2 as N}from"./main.34335972.js";const p=f()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...c()},setup(e,a){let{slots:t}=a;return P(()=>G(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}}),j=(()=>u.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),v=(()=>u.reduce((e,a)=>{const t="offset"+d(a);return e[t]={type:[String,Number],default:null},e},{}))(),V=(()=>u.reduce((e,a)=>{const t="order"+d(a);return e[t]={type:[String,Number],default:null},e},{}))(),S={col:Object.keys(j),offset:Object.keys(v),order:Object.keys(V)};function O(e,a,t){let l=e;if(!(t==null||t===!1)){if(a){const n=a.replace(e,"");l+=`-${n}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const _=["auto","start","end","center","baseline","stretch"],x=f()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...j,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...V,alignSelf:{type:String,default:null,validator:e=>_.includes(e)},...c()},setup(e,a){let{slots:t}=a;const l=C(()=>{const n=[];let s;for(s in S)S[s].forEach(o=>{const i=e[o],m=O(s,o,i);m&&n.push(m)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return N(e.tag,{class:l.value},(n=t.default)==null?void 0:n.call(t))}}}),g=["start","end","center"],k=["space-between","space-around","space-evenly"];function y(e,a){return u.reduce((t,l)=>{const n=e+d(l);return t[n]=a(),t},{})}const B=[...g,"baseline","stretch"],L=e=>B.includes(e),$=y("align",()=>({type:String,default:null,validator:L})),I=[...g,...k],h=e=>I.includes(e),w=y("justify",()=>({type:String,default:null,validator:h})),T=[...g,...k,"stretch"],E=e=>T.includes(e),A=y("alignContent",()=>({type:String,default:null,validator:E})),b={align:Object.keys($),justify:Object.keys(w),alignContent:Object.keys(A)},U={align:"align",justify:"justify",alignContent:"align-content"};function M(e,a,t){let l=U[e];if(t!=null){if(a){const n=a.replace(e,"");l+=`-${n}`}return l+=`-${t}`,l.toLowerCase()}}const F=f()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:L},...$,justify:{type:String,default:null,validator:h},...w,alignContent:{type:String,default:null,validator:E},...A,...c()},setup(e,a){let{slots:t}=a;const l=C(()=>{const n=[];let s;for(s in b)b[s].forEach(r=>{const o=e[r],i=M(s,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return N(e.tag,{class:["v-row",l.value]},(n=t.default)==null?void 0:n.call(t))}}});export{F as V,x as a,p as b};