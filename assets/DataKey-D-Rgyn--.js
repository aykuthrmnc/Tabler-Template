import{_ as y,a as P}from"./react-lifecycles-compat.es-BNmx4O_T.js";import{r as a}from"./index-CYvwjxWG.js";function d(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function b(t){var r=R(t,"string");return typeof r=="symbol"?r:String(r)}function R(t,r){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var e=n.call(t,r);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function S(t,r,n){var e=a.useRef(t!==void 0),o=a.useState(r),u=o[0],f=o[1],i=t!==void 0,v=e.current;return e.current=i,!i&&v&&u!==r&&f(r),[i?t:u,a.useCallback(function(l){for(var s=arguments.length,p=new Array(s>1?s-1:0),c=1;c<s;c++)p[c-1]=arguments[c];n&&n.apply(void 0,[l].concat(p)),f(l)},[n])]}function h(t,r){return Object.keys(r).reduce(function(n,e){var o,u=n,f=u[d(e)],i=u[e],v=y(u,[d(e),e].map(b)),l=r[e],s=S(i,f,t[l]),p=s[0],c=s[1];return P({},v,(o={},o[e]=p,o[l]=c,o))},t)}const m=t=>!t||typeof t=="function"?t:r=>{t.current=r};function x(t,r){const n=m(t),e=m(r);return o=>{n&&n(o),e&&e(o)}}function w(t,r){return a.useMemo(()=>x(t,r),[t,r])}var g=Function.prototype.bind.call(Function.prototype.call,[].slice);function A(t,r){return g(t.querySelectorAll(r))}function T(){const[,t]=a.useReducer(r=>!r,!1);return t}const j=a.createContext(null),$=(t,r=null)=>t!=null?String(t):r||null,C=a.createContext(null);C.displayName="NavContext";const E="data-rr-ui-",U="rrUi";function q(t){return`${E}${t}`}function I(t){return`${U}${t}`}export{C as N,j as S,h as a,T as b,I as c,q as d,$ as m,A as q,w as u};
