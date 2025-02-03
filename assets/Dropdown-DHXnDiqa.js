import{r as p,j as L,R as _,U as ur,b as te,c as re,E as cr,V as fr}from"./index-CYvwjxWG.js";import{S as We,N as lr,d as Ct,m as at,q as st,b as pr,u as Et,a as dr}from"./DataKey-D-Rgyn--.js";import{u as K}from"./useEventCallback-mBYiO_lq.js";import{w as vr}from"./index-D5Rw-SRL.js";import"./react-lifecycles-compat.es-BNmx4O_T.js";import{A as mr}from"./Anchor-COzxH-sf.js";function gr(e){return e&&e.ownerDocument||document}const Dt=!!(typeof window<"u"&&window.document&&window.document.createElement);var Ie=!1,Ne=!1;try{var Le={get passive(){return Ie=!0},get once(){return Ne=Ie=!0}};Dt&&(window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,!0))}catch{}function Pt(e,t,r,n){if(n&&typeof n!="boolean"&&!Ne){var o=n.once,i=n.capture,c=r;!Ne&&o&&(c=r.__once||function s(a){this.removeEventListener(t,s,i),r.call(this,a)},r.__once=c),e.addEventListener(t,c,Ie?n:i)}e.addEventListener(t,r,n)}function hr(e,t,r,n){var o=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(t,r,o),r.__once&&e.removeEventListener(t,r.__once,o)}function Ce(e,t,r,n){return Pt(e,t,r,n),function(){hr(e,t,r,n)}}function wr(){return p.useState(null)}function yr(e,t,r,n=!1){const o=K(r);p.useEffect(()=>{const i=typeof e=="function"?e():e;return i.addEventListener(t,o,n),()=>i.removeEventListener(t,o,n)},[e])}function br(){const e=p.useRef(!0),t=p.useRef(()=>e.current);return p.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function xr(e){const t=p.useRef(null);return p.useEffect(()=>{t.current=e}),t.current}const Or=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",$r=typeof document<"u",Cr=$r||Or?p.useLayoutEffect:p.useEffect;function Er(e,t,r){const n=p.useRef(e!==void 0),[o,i]=p.useState(t),c=e!==void 0,s=n.current;return n.current=c,!c&&s&&o!==t&&i(t),[c?e:o,p.useCallback((...a)=>{const[f,...u]=a;let l=r==null?void 0:r(f,...u);return i(f),l},[r])]}const Se=p.createContext(null);var ut=Object.prototype.hasOwnProperty;function ct(e,t,r){for(r of e.keys())if(de(r,t))return r}function de(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&de(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(o=n,o&&typeof o=="object"&&(o=ct(t,o),!o)||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(o=n[0],o&&typeof o=="object"&&(o=ct(t,o),!o)||!de(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(ut.call(e,r)&&++n&&!ut.call(t,r)||!(r in t)||!de(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function Dr(e){const t=br();return[e[0],p.useCallback(r=>{if(t())return e[1](r)},[t,e[1]])]}var B="top",H="bottom",V="right",W="left",Fe="auto",we=[B,H,V,W],ie="start",ge="end",Pr="clippingParents",At="viewport",pe="popper",Ar="reference",ft=we.reduce(function(e,t){return e.concat([t+"-"+ie,t+"-"+ge])},[]),St=[].concat(we,[Fe]).reduce(function(e,t){return e.concat([t,t+"-"+ie,t+"-"+ge])},[]),Sr="beforeRead",jr="read",Mr="afterRead",Rr="beforeMain",kr="main",Lr="afterMain",Tr="beforeWrite",Br="write",Wr="afterWrite",Ir=[Sr,jr,Mr,Rr,kr,Lr,Tr,Br,Wr];function U(e){return e.split("-")[0]}function N(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ee(e){var t=N(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=N(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ue(e){if(typeof ShadowRoot>"u")return!1;var t=N(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var Z=Math.max,Pe=Math.min,ae=Math.round;function He(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function jt(){return!/^((?!chrome|android).)*safari/i.test(He())}function se(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&q(e)&&(o=e.offsetWidth>0&&ae(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ae(n.height)/e.offsetHeight||1);var c=ee(e)?N(e):window,s=c.visualViewport,a=!jt()&&r,f=(n.left+(a&&s?s.offsetLeft:0))/o,u=(n.top+(a&&s?s.offsetTop:0))/i,l=n.width/o,g=n.height/i;return{width:l,height:g,top:u,right:f+l,bottom:u+g,left:f,x:f,y:u}}function qe(e){var t=se(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Mt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ue(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Y(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){return N(e).getComputedStyle(e)}function Nr(e){return["table","td","th"].indexOf(Y(e))>=0}function G(e){return((ee(e)?e.ownerDocument:e.document)||window.document).documentElement}function je(e){return Y(e)==="html"?e:e.assignedSlot||e.parentNode||(Ue(e)?e.host:null)||G(e)}function lt(e){return!q(e)||z(e).position==="fixed"?null:e.offsetParent}function Hr(e){var t=/firefox/i.test(He()),r=/Trident/i.test(He());if(r&&q(e)){var n=z(e);if(n.position==="fixed")return null}var o=je(e);for(Ue(o)&&(o=o.host);q(o)&&["html","body"].indexOf(Y(o))<0;){var i=z(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function ye(e){for(var t=N(e),r=lt(e);r&&Nr(r)&&z(r).position==="static";)r=lt(r);return r&&(Y(r)==="html"||Y(r)==="body"&&z(r).position==="static")?t:r||Hr(e)||t}function ze(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ve(e,t,r){return Z(e,Pe(t,r))}function Vr(e,t,r){var n=ve(e,t,r);return n>r?r:n}function Rt(){return{top:0,right:0,bottom:0,left:0}}function kt(e){return Object.assign({},Rt(),e)}function Lt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Fr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,kt(typeof t!="number"?t:Lt(t,we))};function Ur(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,c=r.modifiersData.popperOffsets,s=U(r.placement),a=ze(s),f=[W,V].indexOf(s)>=0,u=f?"height":"width";if(!(!i||!c)){var l=Fr(o.padding,r),g=qe(i),d=a==="y"?B:W,m=a==="y"?H:V,h=r.rects.reference[u]+r.rects.reference[a]-c[a]-r.rects.popper[u],v=c[a]-r.rects.reference[a],O=ye(i),b=O?a==="y"?O.clientHeight||0:O.clientWidth||0:0,x=h/2-v/2,w=l[d],y=b-g[u]-l[m],C=b/2-g[u]/2+x,E=ve(w,C,y),D=a;r.modifiersData[n]=(t={},t[D]=E,t.centerOffset=E-C,t)}}function qr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Mt(t.elements.popper,o)&&(t.elements.arrow=o))}const zr={name:"arrow",enabled:!0,phase:"main",fn:Ur,effect:qr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ue(e){return e.split("-")[1]}var Xr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Kr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:ae(r*o)/o||0,y:ae(n*o)/o||0}}function pt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,c=e.offsets,s=e.position,a=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,l=e.isFixed,g=c.x,d=g===void 0?0:g,m=c.y,h=m===void 0?0:m,v=typeof u=="function"?u({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var O=c.hasOwnProperty("x"),b=c.hasOwnProperty("y"),x=W,w=B,y=window;if(f){var C=ye(r),E="clientHeight",D="clientWidth";if(C===N(r)&&(C=G(r),z(C).position!=="static"&&s==="absolute"&&(E="scrollHeight",D="scrollWidth")),C=C,o===B||(o===W||o===V)&&i===ge){w=H;var S=l&&C===y&&y.visualViewport?y.visualViewport.height:C[E];h-=S-n.height,h*=a?1:-1}if(o===W||(o===B||o===H)&&i===ge){x=V;var j=l&&C===y&&y.visualViewport?y.visualViewport.width:C[D];d-=j-n.width,d*=a?1:-1}}var $=Object.assign({position:s},f&&Xr),P=u===!0?Kr({x:d,y:h},N(r)):{x:d,y:h};if(d=P.x,h=P.y,a){var A;return Object.assign({},$,(A={},A[w]=b?"0":"",A[x]=O?"0":"",A.transform=(y.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",A))}return Object.assign({},$,(t={},t[w]=b?h+"px":"",t[x]=O?d+"px":"",t.transform="",t))}function Yr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,c=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,f={placement:U(t.placement),variation:ue(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,pt(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,pt(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Gr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Yr,data:{}};var Ee={passive:!0};function Jr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,c=n.resize,s=c===void 0?!0:c,a=N(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(u){u.addEventListener("scroll",r.update,Ee)}),s&&a.addEventListener("resize",r.update,Ee),function(){i&&f.forEach(function(u){u.removeEventListener("scroll",r.update,Ee)}),s&&a.removeEventListener("resize",r.update,Ee)}}const Qr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Jr,data:{}};var Zr={left:"right",right:"left",bottom:"top",top:"bottom"};function De(e){return e.replace(/left|right|bottom|top/g,function(t){return Zr[t]})}var _r={start:"end",end:"start"};function dt(e){return e.replace(/start|end/g,function(t){return _r[t]})}function Xe(e){var t=N(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ke(e){return se(G(e)).left+Xe(e).scrollLeft}function en(e,t){var r=N(e),n=G(e),o=r.visualViewport,i=n.clientWidth,c=n.clientHeight,s=0,a=0;if(o){i=o.width,c=o.height;var f=jt();(f||!f&&t==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:i,height:c,x:s+Ke(e),y:a}}function tn(e){var t,r=G(e),n=Xe(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=Z(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=Z(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+Ke(e),a=-n.scrollTop;return z(o||r).direction==="rtl"&&(s+=Z(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:c,x:s,y:a}}function Ye(e){var t=z(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Tt(e){return["html","body","#document"].indexOf(Y(e))>=0?e.ownerDocument.body:q(e)&&Ye(e)?e:Tt(je(e))}function me(e,t){var r;t===void 0&&(t=[]);var n=Tt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=N(n),c=o?[i].concat(i.visualViewport||[],Ye(n)?n:[]):n,s=t.concat(c);return o?s:s.concat(me(je(c)))}function Ve(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function rn(e,t){var r=se(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function vt(e,t,r){return t===At?Ve(en(e,r)):ee(t)?rn(t,r):Ve(tn(G(e)))}function nn(e){var t=me(je(e)),r=["absolute","fixed"].indexOf(z(e).position)>=0,n=r&&q(e)?ye(e):e;return ee(n)?t.filter(function(o){return ee(o)&&Mt(o,n)&&Y(o)!=="body"}):[]}function on(e,t,r,n){var o=t==="clippingParents"?nn(e):[].concat(t),i=[].concat(o,[r]),c=i[0],s=i.reduce(function(a,f){var u=vt(e,f,n);return a.top=Z(u.top,a.top),a.right=Pe(u.right,a.right),a.bottom=Pe(u.bottom,a.bottom),a.left=Z(u.left,a.left),a},vt(e,c,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Bt(e){var t=e.reference,r=e.element,n=e.placement,o=n?U(n):null,i=n?ue(n):null,c=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(o){case B:a={x:c,y:t.y-r.height};break;case H:a={x:c,y:t.y+t.height};break;case V:a={x:t.x+t.width,y:s};break;case W:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var f=o?ze(o):null;if(f!=null){var u=f==="y"?"height":"width";switch(i){case ie:a[f]=a[f]-(t[u]/2-r[u]/2);break;case ge:a[f]=a[f]+(t[u]/2-r[u]/2);break}}return a}function he(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.strategy,c=i===void 0?e.strategy:i,s=r.boundary,a=s===void 0?Pr:s,f=r.rootBoundary,u=f===void 0?At:f,l=r.elementContext,g=l===void 0?pe:l,d=r.altBoundary,m=d===void 0?!1:d,h=r.padding,v=h===void 0?0:h,O=kt(typeof v!="number"?v:Lt(v,we)),b=g===pe?Ar:pe,x=e.rects.popper,w=e.elements[m?b:g],y=on(ee(w)?w:w.contextElement||G(e.elements.popper),a,u,c),C=se(e.elements.reference),E=Bt({reference:C,element:x,strategy:"absolute",placement:o}),D=Ve(Object.assign({},x,E)),S=g===pe?D:C,j={top:y.top-S.top+O.top,bottom:S.bottom-y.bottom+O.bottom,left:y.left-S.left+O.left,right:S.right-y.right+O.right},$=e.modifiersData.offset;if(g===pe&&$){var P=$[o];Object.keys(j).forEach(function(A){var M=[V,H].indexOf(A)>=0?1:-1,T=[B,H].indexOf(A)>=0?"y":"x";j[A]+=P[T]*M})}return j}function an(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,c=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,f=a===void 0?St:a,u=ue(n),l=u?s?ft:ft.filter(function(m){return ue(m)===u}):we,g=l.filter(function(m){return f.indexOf(m)>=0});g.length===0&&(g=l);var d=g.reduce(function(m,h){return m[h]=he(e,{placement:h,boundary:o,rootBoundary:i,padding:c})[U(h)],m},{});return Object.keys(d).sort(function(m,h){return d[m]-d[h]})}function sn(e){if(U(e)===Fe)return[];var t=De(e);return[dt(e),t,dt(t)]}function un(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,c=r.altAxis,s=c===void 0?!0:c,a=r.fallbackPlacements,f=r.padding,u=r.boundary,l=r.rootBoundary,g=r.altBoundary,d=r.flipVariations,m=d===void 0?!0:d,h=r.allowedAutoPlacements,v=t.options.placement,O=U(v),b=O===v,x=a||(b||!m?[De(v)]:sn(v)),w=[v].concat(x).reduce(function(oe,X){return oe.concat(U(X)===Fe?an(t,{placement:X,boundary:u,rootBoundary:l,padding:f,flipVariations:m,allowedAutoPlacements:h}):X)},[]),y=t.rects.reference,C=t.rects.popper,E=new Map,D=!0,S=w[0],j=0;j<w.length;j++){var $=w[j],P=U($),A=ue($)===ie,M=[B,H].indexOf(P)>=0,T=M?"width":"height",R=he(t,{placement:$,boundary:u,rootBoundary:l,altBoundary:g,padding:f}),I=M?A?V:W:A?H:B;y[T]>C[T]&&(I=De(I));var ce=De(I),F=[];if(i&&F.push(R[P]<=0),s&&F.push(R[I]<=0,R[ce]<=0),F.every(function(oe){return oe})){S=$,D=!1;break}E.set($,F)}if(D)for(var k=m?3:1,ne=function(X){var le=w.find(function(Oe){var J=E.get(Oe);if(J)return J.slice(0,X).every(function(Me){return Me})});if(le)return S=le,"break"},fe=k;fe>0;fe--){var xe=ne(fe);if(xe==="break")break}t.placement!==S&&(t.modifiersData[n]._skip=!0,t.placement=S,t.reset=!0)}}const cn={name:"flip",enabled:!0,phase:"main",fn:un,requiresIfExists:["offset"],data:{_skip:!1}};function mt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function gt(e){return[B,V,H,W].some(function(t){return e[t]>=0})}function fn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,c=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),a=mt(c,n),f=mt(s,o,i),u=gt(a),l=gt(f);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}const ln={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn};function pn(e,t,r){var n=U(e),o=[W,B].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=i[0],s=i[1];return c=c||0,s=(s||0)*o,[W,V].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function dn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,c=St.reduce(function(u,l){return u[l]=pn(l,t.rects,i),u},{}),s=c[t.placement],a=s.x,f=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=c}const vn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:dn};function mn(e){var t=e.state,r=e.name;t.modifiersData[r]=Bt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const gn={name:"popperOffsets",enabled:!0,phase:"read",fn:mn,data:{}};function hn(e){return e==="x"?"y":"x"}function wn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,c=r.altAxis,s=c===void 0?!1:c,a=r.boundary,f=r.rootBoundary,u=r.altBoundary,l=r.padding,g=r.tether,d=g===void 0?!0:g,m=r.tetherOffset,h=m===void 0?0:m,v=he(t,{boundary:a,rootBoundary:f,padding:l,altBoundary:u}),O=U(t.placement),b=ue(t.placement),x=!b,w=ze(O),y=hn(w),C=t.modifiersData.popperOffsets,E=t.rects.reference,D=t.rects.popper,S=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,j=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(C){if(i){var A,M=w==="y"?B:W,T=w==="y"?H:V,R=w==="y"?"height":"width",I=C[w],ce=I+v[M],F=I-v[T],k=d?-D[R]/2:0,ne=b===ie?E[R]:D[R],fe=b===ie?-D[R]:-E[R],xe=t.elements.arrow,oe=d&&xe?qe(xe):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Rt(),le=X[M],Oe=X[T],J=ve(0,E[R],oe[R]),Me=x?E[R]/2-k-J-le-j.mainAxis:ne-J-le-j.mainAxis,rr=x?-E[R]/2+k+J+Oe+j.mainAxis:fe+J+Oe+j.mainAxis,Re=t.elements.arrow&&ye(t.elements.arrow),nr=Re?w==="y"?Re.clientTop||0:Re.clientLeft||0:0,Qe=(A=$==null?void 0:$[w])!=null?A:0,or=I+Me-Qe-nr,ir=I+rr-Qe,Ze=ve(d?Pe(ce,or):ce,I,d?Z(F,ir):F);C[w]=Ze,P[w]=Ze-I}if(s){var _e,ar=w==="x"?B:W,sr=w==="x"?H:V,Q=C[y],$e=y==="y"?"height":"width",et=Q+v[ar],tt=Q-v[sr],ke=[B,W].indexOf(O)!==-1,rt=(_e=$==null?void 0:$[y])!=null?_e:0,nt=ke?et:Q-E[$e]-D[$e]-rt+j.altAxis,ot=ke?Q+E[$e]+D[$e]-rt-j.altAxis:tt,it=d&&ke?Vr(nt,Q,ot):ve(d?nt:et,Q,d?ot:tt);C[y]=it,P[y]=it-Q}t.modifiersData[n]=P}}const yn={name:"preventOverflow",enabled:!0,phase:"main",fn:wn,requiresIfExists:["offset"]};function bn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function xn(e){return e===N(e)||!q(e)?Xe(e):bn(e)}function On(e){var t=e.getBoundingClientRect(),r=ae(t.width)/e.offsetWidth||1,n=ae(t.height)/e.offsetHeight||1;return r!==1||n!==1}function $n(e,t,r){r===void 0&&(r=!1);var n=q(t),o=q(t)&&On(t),i=G(t),c=se(e,o,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!r)&&((Y(t)!=="body"||Ye(i))&&(s=xn(t)),q(t)?(a=se(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Ke(i))),{x:c.left+s.scrollLeft-a.x,y:c.top+s.scrollTop-a.y,width:c.width,height:c.height}}function Cn(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var c=[].concat(i.requires||[],i.requiresIfExists||[]);c.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&o(a)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function En(e){var t=Cn(e);return Ir.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Dn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Pn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ht={placement:"bottom",modifiers:[],strategy:"absolute"};function wt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function An(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?ht:o;return function(s,a,f){f===void 0&&(f=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},ht,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},l=[],g=!1,d={state:u,setOptions:function(O){var b=typeof O=="function"?O(u.options):O;h(),u.options=Object.assign({},i,u.options,b),u.scrollParents={reference:ee(s)?me(s):s.contextElement?me(s.contextElement):[],popper:me(a)};var x=En(Pn([].concat(n,u.options.modifiers)));return u.orderedModifiers=x.filter(function(w){return w.enabled}),m(),d.update()},forceUpdate:function(){if(!g){var O=u.elements,b=O.reference,x=O.popper;if(wt(b,x)){u.rects={reference:$n(b,ye(x),u.options.strategy==="fixed"),popper:qe(x)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(j){return u.modifiersData[j.name]=Object.assign({},j.data)});for(var w=0;w<u.orderedModifiers.length;w++){if(u.reset===!0){u.reset=!1,w=-1;continue}var y=u.orderedModifiers[w],C=y.fn,E=y.options,D=E===void 0?{}:E,S=y.name;typeof C=="function"&&(u=C({state:u,options:D,name:S,instance:d})||u)}}}},update:Dn(function(){return new Promise(function(v){d.forceUpdate(),v(u)})}),destroy:function(){h(),g=!0}};if(!wt(s,a))return d;d.setOptions(f).then(function(v){!g&&f.onFirstUpdate&&f.onFirstUpdate(v)});function m(){u.orderedModifiers.forEach(function(v){var O=v.name,b=v.options,x=b===void 0?{}:b,w=v.effect;if(typeof w=="function"){var y=w({state:u,name:O,instance:d,options:x}),C=function(){};l.push(y||C)}})}function h(){l.forEach(function(v){return v()}),l=[]}return d}}const Sn=An({defaultModifiers:[ln,gn,Gr,Qr,vn,cn,yn,zr]}),jn=["enabled","placement","strategy","modifiers"];function Mn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}const Rn={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},kn={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,o=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&o==="tooltip"&&"setAttribute"in n){const i=n.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",i?`${i},${r.id}`:r.id)}}},Ln=[];function Tn(e,t,r={}){let{enabled:n=!0,placement:o="bottom",strategy:i="absolute",modifiers:c=Ln}=r,s=Mn(r,jn);const a=p.useRef(c),f=p.useRef(),u=p.useCallback(()=>{var v;(v=f.current)==null||v.update()},[]),l=p.useCallback(()=>{var v;(v=f.current)==null||v.forceUpdate()},[]),[g,d]=Dr(p.useState({placement:o,update:u,forceUpdate:l,attributes:{},styles:{popper:{},arrow:{}}})),m=p.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:v})=>{const O={},b={};Object.keys(v.elements).forEach(x=>{O[x]=v.styles[x],b[x]=v.attributes[x]}),d({state:v,styles:O,attributes:b,update:u,forceUpdate:l,placement:v.placement})}}),[u,l,d]),h=p.useMemo(()=>(de(a.current,c)||(a.current=c),a.current),[c]);return p.useEffect(()=>{!f.current||!n||f.current.setOptions({placement:o,strategy:i,modifiers:[...h,m,Rn]})},[i,o,m,n,h]),p.useEffect(()=>{if(!(!n||e==null||t==null))return f.current=Sn(e,t,Object.assign({},s,{placement:o,strategy:i,modifiers:[...h,kn,m]})),()=>{f.current!=null&&(f.current.destroy(),f.current=void 0,d(v=>Object.assign({},v,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),g}function yt(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}const bt=()=>{};function Bn(e){return e.button===0}function Wn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Te=e=>e&&("current"in e?e.current:e),xt={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function In(e,t=bt,{disabled:r,clickTrigger:n="click"}={}){const o=p.useRef(!1),i=p.useRef(!1),c=p.useCallback(f=>{const u=Te(e);vr(!!u,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!u||Wn(f)||!Bn(f)||!!yt(u,f.target)||i.current,i.current=!1},[e]),s=K(f=>{const u=Te(e);u&&yt(u,f.target)&&(i.current=!0)}),a=K(f=>{o.current||t(f)});p.useEffect(()=>{var f,u;if(r||e==null)return;const l=gr(Te(e)),g=l.defaultView||window;let d=(f=g.event)!=null?f:(u=g.parent)==null?void 0:u.event,m=null;xt[n]&&(m=Ce(l,xt[n],s,!0));const h=Ce(l,n,c,!0),v=Ce(l,n,b=>{if(b===d){d=void 0;return}a(b)});let O=[];return"ontouchstart"in l.documentElement&&(O=[].slice.call(l.body.children).map(b=>Ce(b,"mousemove",bt))),()=>{m==null||m(),h(),v(),O.forEach(b=>b())}},[e,r,n,c,s,a])}function Nn(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function Hn(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Vn({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:i,containerPadding:c,arrowElement:s,popperConfig:a={}}){var f,u,l,g,d;const m=Nn(a.modifiers);return Object.assign({},a,{placement:r,enabled:e,strategy:i?"fixed":a.strategy,modifiers:Hn(Object.assign({},m,{eventListeners:{enabled:t,options:(f=m.eventListeners)==null?void 0:f.options},preventOverflow:Object.assign({},m.preventOverflow,{options:c?Object.assign({padding:c},(u=m.preventOverflow)==null?void 0:u.options):(l=m.preventOverflow)==null?void 0:l.options}),offset:{options:Object.assign({offset:o},(g=m.offset)==null?void 0:g.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},(d=m.arrow)==null?void 0:d.options,{element:s})}),flip:Object.assign({enabled:!!n},m.flip)}))})}const Fn=["children","usePopper"];function Un(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}const qn=()=>{};function Wt(e={}){const t=p.useContext(Se),[r,n]=wr(),o=p.useRef(!1),{flip:i,offset:c,rootCloseEvent:s,fixed:a=!1,placement:f,popperConfig:u={},enableEventListeners:l=!0,usePopper:g=!!t}=e,d=(t==null?void 0:t.show)==null?!!e.show:t.show;d&&!o.current&&(o.current=!0);const m=C=>{t==null||t.toggle(!1,C)},{placement:h,setMenu:v,menuElement:O,toggleElement:b}=t||{},x=Tn(b,O,Vn({placement:f||h||"bottom-start",enabled:g,enableEvents:l??d,offset:c,flip:i,fixed:a,arrowElement:r,popperConfig:u})),w=Object.assign({ref:v||qn,"aria-labelledby":b==null?void 0:b.id},x.attributes.popper,{style:x.styles.popper}),y={show:d,placement:h,hasShown:o.current,toggle:t==null?void 0:t.toggle,popper:g?x:null,arrowProps:g?Object.assign({ref:n},x.attributes.arrow,{style:x.styles.arrow}):{}};return In(O,m,{clickTrigger:s,disabled:!d}),[w,y]}function It(e){let{children:t,usePopper:r=!0}=e,n=Un(e,Fn);const[o,i]=Wt(Object.assign({},n,{usePopper:r}));return L.jsx(L.Fragment,{children:t(o,i)})}It.displayName="DropdownMenu";const Ae={prefix:String(Math.round(Math.random()*1e10)),current:0},Nt=_.createContext(Ae),zn=_.createContext(!1);let Xn=!!(typeof window<"u"&&window.document&&window.document.createElement),Be=new WeakMap;function Kn(e=!1){let t=p.useContext(Nt),r=p.useRef(null);if(r.current===null&&!e){var n,o;let i=(o=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(n=o.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(i){let c=Be.get(i);c==null?Be.set(i,{id:t.current,state:i.memoizedState}):i.memoizedState!==c.state&&(t.current=c.id,Be.delete(i))}r.current=++t.current}return r.current}function Yn(e){let t=p.useContext(Nt);t===Ae&&!Xn&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=Kn(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function Gn(e){let t=_.useId(),[r]=p.useState(eo()),n=r?"react-aria":`react-aria${Ae.prefix}`;return e||`${n}-${t}`}const Jn=typeof _.useId=="function"?Gn:Yn;function Qn(){return!1}function Zn(){return!0}function _n(e){return()=>{}}function eo(){return typeof _.useSyncExternalStore=="function"?_.useSyncExternalStore(_n,Qn,Zn):p.useContext(zn)}const Ht=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},Ot=()=>{};function Vt(){const e=Jn(),{show:t=!1,toggle:r=Ot,setToggle:n,menuElement:o}=p.useContext(Se)||{},i=p.useCallback(s=>{r(!t,s)},[t,r]),c={id:e,ref:n||Ot,onClick:i,"aria-expanded":!!t};return o&&Ht(o)&&(c["aria-haspopup"]=!0),[c,{show:t,toggle:r}]}function Ft({children:e}){const[t,r]=Vt();return L.jsx(L.Fragment,{children:e(t,r)})}Ft.displayName="DropdownToggle";const to=["eventKey","disabled","onClick","active","as"];function ro(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Ut({key:e,href:t,active:r,disabled:n,onClick:o}){const i=p.useContext(We),c=p.useContext(lr),{activeKey:s}=c||{},a=at(e,t),f=r==null&&e!=null?at(s)===a:r;return[{onClick:K(l=>{n||(o==null||o(l),i&&!l.isPropagationStopped()&&i(a,l))}),"aria-disabled":n||void 0,"aria-selected":f,[Ct("dropdown-item")]:""},{isActive:f}]}const qt=p.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:o,active:i,as:c=ur}=e,s=ro(e,to);const[a]=Ut({key:r,href:s.href,disabled:n,onClick:o,active:i});return L.jsx(c,Object.assign({},s,{ref:t},a))});qt.displayName="DropdownItem";const zt=p.createContext(Dt?window:void 0);zt.Provider;function no(){return p.useContext(zt)}function $t(){const e=pr(),t=p.useRef(null),r=p.useCallback(n=>{t.current=n,e()},[e]);return[t,r]}function be({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:o=`* [${Ct("dropdown-item")}]`,focusFirstItemOnShow:i,placement:c="bottom-start",children:s}){const a=no(),[f,u]=Er(t,e,n),[l,g]=$t(),d=l.current,[m,h]=$t(),v=m.current,O=xr(f),b=p.useRef(null),x=p.useRef(!1),w=p.useContext(We),y=p.useCallback(($,P,A=P==null?void 0:P.type)=>{u($,{originalEvent:P,source:A})},[u]),C=K(($,P)=>{r==null||r($,P),y(!1,P,"select"),P.isPropagationStopped()||w==null||w($,P)}),E=p.useMemo(()=>({toggle:y,placement:c,show:f,menuElement:d,toggleElement:v,setMenu:g,setToggle:h}),[y,c,f,d,v,g,h]);d&&O&&!f&&(x.current=d.contains(d.ownerDocument.activeElement));const D=K(()=>{v&&v.focus&&v.focus()}),S=K(()=>{const $=b.current;let P=i;if(P==null&&(P=l.current&&Ht(l.current)?"keyboard":!1),P===!1||P==="keyboard"&&!/^key.+$/.test($))return;const A=st(l.current,o)[0];A&&A.focus&&A.focus()});p.useEffect(()=>{f?S():x.current&&(x.current=!1,D())},[f,x,D,S]),p.useEffect(()=>{b.current=null});const j=($,P)=>{if(!l.current)return null;const A=st(l.current,o);let M=A.indexOf($)+P;return M=Math.max(0,Math.min(M,A.length)),A[M]};return yr(p.useCallback(()=>a.document,[a]),"keydown",$=>{var P,A;const{key:M}=$,T=$.target,R=(P=l.current)==null?void 0:P.contains(T),I=(A=m.current)==null?void 0:A.contains(T);if(/input|textarea/i.test(T.tagName)&&(M===" "||M!=="Escape"&&R||M==="Escape"&&T.type==="search")||!R&&!I||M==="Tab"&&(!l.current||!f))return;b.current=$.type;const F={originalEvent:$,source:$.type};switch(M){case"ArrowUp":{const k=j(T,-1);k&&k.focus&&k.focus(),$.preventDefault();return}case"ArrowDown":if($.preventDefault(),!f)u(!0,F);else{const k=j(T,1);k&&k.focus&&k.focus()}return;case"Tab":Pt(T.ownerDocument,"keyup",k=>{var ne;(k.key==="Tab"&&!k.target||!((ne=l.current)!=null&&ne.contains(k.target)))&&u(!1,F)},{once:!0});break;case"Escape":M==="Escape"&&($.preventDefault(),$.stopPropagation()),u(!1,F);break}}),L.jsx(We.Provider,{value:C,children:L.jsx(Se.Provider,{value:E,children:s})})}be.displayName="Dropdown";be.Menu=It;be.Toggle=Ft;be.Item=qt;const Ge=p.createContext({});Ge.displayName="DropdownContext";const Xt=p.forwardRef(({className:e,bsPrefix:t,as:r="hr",role:n="separator",...o},i)=>(t=te(t,"dropdown-divider"),L.jsx(r,{ref:i,className:re(e,t),role:n,...o})));Xt.displayName="DropdownDivider";const Kt=p.forwardRef(({className:e,bsPrefix:t,as:r="div",role:n="heading",...o},i)=>(t=te(t,"dropdown-header"),L.jsx(r,{ref:i,className:re(e,t),role:n,...o})));Kt.displayName="DropdownHeader";const Yt=p.forwardRef(({bsPrefix:e,className:t,eventKey:r,disabled:n=!1,onClick:o,active:i,as:c=mr,...s},a)=>{const f=te(e,"dropdown-item"),[u,l]=Ut({key:r,href:s.href,disabled:n,onClick:o,active:i});return L.jsx(c,{...s,...u,ref:a,className:re(t,f,l.isActive&&"active",n&&"disabled")})});Yt.displayName="DropdownItem";const Gt=p.forwardRef(({className:e,bsPrefix:t,as:r="span",...n},o)=>(t=te(t,"dropdown-item-text"),L.jsx(r,{ref:o,className:re(e,t),...n})));Gt.displayName="DropdownItemText";const Je=p.createContext(null);Je.displayName="InputGroupContext";const Jt=p.createContext(null);Jt.displayName="NavbarContext";function Qt(e,t){return e}function Zt(e,t,r){const n=r?"top-end":"top-start",o=r?"top-start":"top-end",i=r?"bottom-end":"bottom-start",c=r?"bottom-start":"bottom-end",s=r?"right-start":"left-start",a=r?"right-end":"left-end",f=r?"left-start":"right-start",u=r?"left-end":"right-end";let l=e?c:i;return t==="up"?l=e?o:n:t==="end"?l=e?u:f:t==="start"?l=e?a:s:t==="down-centered"?l="bottom":t==="up-centered"&&(l="top"),l}const _t=p.forwardRef(({bsPrefix:e,className:t,align:r,rootCloseEvent:n,flip:o=!0,show:i,renderOnMount:c,as:s="div",popperConfig:a,variant:f,...u},l)=>{let g=!1;const d=p.useContext(Jt),m=te(e,"dropdown-menu"),{align:h,drop:v,isRTL:O}=p.useContext(Ge);r=r||h;const b=p.useContext(Je),x=[];if(r)if(typeof r=="object"){const $=Object.keys(r);if($.length){const P=$[0],A=r[P];g=A==="start",x.push(`${m}-${P}-${A}`)}}else r==="end"&&(g=!0);const w=Zt(g,v,O),[y,{hasShown:C,popper:E,show:D,toggle:S}]=Wt({flip:o,rootCloseEvent:n,show:i,usePopper:!d&&x.length===0,offset:[0,2],popperConfig:a,placement:w});if(y.ref=Et(Qt(l),y.ref),Cr(()=>{D&&(E==null||E.update())},[D]),!C&&!c&&!b)return null;typeof s!="string"&&(y.show=D,y.close=()=>S==null?void 0:S(!1),y.align=r);let j=u.style;return E!=null&&E.placement&&(j={...u.style,...y.style},u["x-placement"]=E.placement),L.jsx(s,{...u,...y,style:j,...(x.length||d)&&{"data-bs-popper":"static"},className:re(t,m,D&&"show",g&&`${m}-end`,f&&`${m}-${f}`,...x)})});_t.displayName="DropdownMenu";const er=p.forwardRef(({bsPrefix:e,split:t,className:r,childBsPrefix:n,as:o=cr,...i},c)=>{const s=te(e,"dropdown-toggle"),a=p.useContext(Se);n!==void 0&&(i.bsPrefix=n);const[f]=Vt();return f.ref=Et(f.ref,Qt(c)),L.jsx(o,{className:re(r,s,t&&`${s}-split`,(a==null?void 0:a.show)&&"show"),...f,...i})});er.displayName="DropdownToggle";const tr=p.forwardRef((e,t)=>{const{bsPrefix:r,drop:n="down",show:o,className:i,align:c="start",onSelect:s,onToggle:a,focusFirstItemOnShow:f,as:u="div",navbar:l,autoClose:g=!0,...d}=dr(e,{show:"onToggle"}),m=p.useContext(Je),h=te(r,"dropdown"),v=fr(),O=E=>g===!1?E==="click":g==="inside"?E!=="rootClose":g==="outside"?E!=="select":!0,b=K((E,D)=>{var S;!((S=D.originalEvent)==null||(S=S.target)==null)&&S.classList.contains("dropdown-toggle")&&D.source==="mousedown"||(D.originalEvent.currentTarget===document&&(D.source!=="keydown"||D.originalEvent.key==="Escape")&&(D.source="rootClose"),O(D.source)&&(a==null||a(E,D)))}),w=Zt(c==="end",n,v),y=p.useMemo(()=>({align:c,drop:n,isRTL:v}),[c,n,v]),C={down:h,"down-centered":`${h}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return L.jsx(Ge.Provider,{value:y,children:L.jsx(be,{placement:w,show:o,onSelect:s,onToggle:b,focusFirstItemOnShow:f,itemSelector:`.${h}-item:not(.disabled):not(:disabled)`,children:m?d.children:L.jsx(u,{...d,ref:t,className:re(i,o&&"show",C[n])})})})});tr.displayName="Dropdown";const fo=Object.assign(tr,{Toggle:er,Menu:_t,Item:Yt,ItemText:Gt,Divider:Xt,Header:Kt});export{fo as D,Cr as a,br as b,Dt as c,xr as d,yt as e,Jt as f,Ce as l,gr as o,no as u};
