import{an as r,ao as i,ap as c,aq as d,ar as l}from"./index-8ca2be60.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const w=()=>{const e=window;e.addEventListener("statusTap",()=>{r(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=i(n);t&&new Promise(a=>c(t,a)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{w as startStatusTap};
