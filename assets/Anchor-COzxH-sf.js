import{r as u,Y as c,j as a}from"./index-CYvwjxWG.js";import{u as l}from"./useEventCallback-mBYiO_lq.js";const f=["onKeyDown"];function p(o,e){if(o==null)return{};var t={};for(var n in o)if({}.hasOwnProperty.call(o,n)){if(e.indexOf(n)>=0)continue;t[n]=o[n]}return t}function j(o){return!o||o.trim()==="#"}const m=u.forwardRef((o,e)=>{let{onKeyDown:t}=o,n=p(o,f);const[r]=c(Object.assign({tagName:"a"},n)),i=l(s=>{r.onKeyDown(s),t==null||t(s)});return j(n.href)||n.role==="button"?a.jsx("a",Object.assign({ref:e},n,r,{onKeyDown:i})):a.jsx("a",Object.assign({ref:e},n,{onKeyDown:t}))});m.displayName="Anchor";export{m as A};
