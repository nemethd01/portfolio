import{bk as ot,u as F,bi as st,n as it,y as Ge,b6 as at,aD as Y,a9 as T,v as qe,b3 as ce,b8 as ct,w as lt}from"./runtime-core.esm-bundler-2613ae3f.js";import{H as ut}from"./HomePage-774fbd7b.js";import{W as ft}from"./WebDevelopment-77dc08e1.js";import{G as pt}from"./GameDevelopment-ea804be8.js";import{A as mt}from"./About-d5b5d0ab.js";import{F as ht}from"./FileManagerPage-c26d15f9.js";import{K as dt}from"./KioskPage-f0077cfb.js";import{N as gt}from"./NumbersToStringPage-54786f28.js";import{C as vt}from"./CalcAndRandomNum-1e7b9507.js";import{N as yt}from"./NotFoundPage-3273440b.js";import{Q as Rt}from"./QueueSchedulePage-f3bf2f4c.js";import"./pf-989cf7ad.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SkillSection-794dc76d.js";import"./skill-icon-18253ef4.js";import"./OtherSkillsAndKnowledge-97e80a3a.js";import"./html-41bc4161.js";import"./css-16f35318.js";import"./js-2c1d228a.js";import"./vue-854c9768.js";import"./scss-3646c36d.js";import"./php-5e4988a8.js";import"./cpp-5bc7a434.js";import"./mariadb-12a4ba4e.js";import"./laravel-61c91d8a.js";import"./bootstrap-0480f68b.js";import"./tailwind-bcf5cc16.js";import"./docker-33cfc0c4.js";import"./git-73fe54ae.js";import"./yarn-e9666ca4.js";import"./npm-debb6b5e.js";import"./github-d11116f4.js";import"./phpstorm-4ee87be4.js";import"./webstorm-2ba8ec0d.js";import"./clion-d8750c5a.js";import"./vscode-9d826ef2.js";import"./vs-b5d40cde.js";import"./sublime-3b7348bf.js";import"./virtualbox-15efd9c6.js";import"./python-7360ad95.js";import"./cmake-ee8af1d0.js";import"./selenium-fa314467.js";import"./premiere-43708da4.js";import"./photoshop-beac37f6.js";import"./davinci-6989e86f.js";import"./figma-2bbc7c96.js";import"./gitbook-e4d6b6ec.js";import"./notion-2a89d5fa.js";import"./clickup-b91a61d8.js";import"./windows-478f7746.js";import"./linux-01227c45.js";import"./raspberry-c02f7e9e.js";import"./kali-300c4ede.js";import"./bash-3aba6007.js";import"./navicat-0e050e49.js";import"./gitlab-2f85bcdf.js";import"./sql-79a8483b.js";import"./project-header-ab1be2b9.js";import"./ProjectSection-743aca11.js";import"./ProjectCard-a9bb5b87.js";import"./web-projects-cfe5d4de.js";import"./queue_main-70c7d2d4.js";import"./kiosk_main-6d5b8912.js";import"./numbersToString_main-db81f2d5.js";import"./CalcAndRandomNum_main-678867e6.js";import"./SkillSection-2594d3f1.js";import"./OtherSkillsAndKnowledge-9d29c26f.js";import"./unreal-10b2cabd.js";import"./rider-0934a497.js";import"./blender-d165a048.js";import"./substancepainter-d1cc20c1.js";import"./x64dbg-acb6b2cc.js";import"./krita-d0425764.js";import"./gaea-cacf8a15.js";import"./pureref-b21715ea.js";import"./ableton-144fb854.js";import"./obs-fd0afd4b.js";import"./ProjectSection-a7b2b0bd.js";import"./game-projects-c57ba803.js";import"./ExperienceAndStudies-360b4a52.js";import"./vue-i18n-18122535.js";import"./SocialMediaSection-7614c4d2.js";import"./social-media-icon-f8ce84e3.js";import"./instagram-b4036a4f.js";import"./linkedin-c1e8aa01.js";import"./artstation-6ca312c4.js";import"./glightbox-d1fa783f.js";import"./TechSection-822e93c9.js";import"./TechSection-77db6bc2.js";import"./TechSection-85a7e1c5.js";import"./TechSection-cc45c8f4.js";import"./TechSection-c16124b2.js";/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof document<"u";function ze(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Et(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ze(e.default)}const P=Object.assign;function le(e,t){const n={};for(const r in t){const o=t[r];n[r]=I(o)?o.map(e):e(o)}return n}const Q=()=>{},I=Array.isArray,De=/#/g,wt=/&/g,Pt=/\//g,bt=/=/g,St=/\?/g,Ke=/\+/g,kt=/%5B/g,Ct=/%5D/g,Ve=/%5E/g,At=/%60/g,Ue=/%7B/g,Ot=/%7C/g,Fe=/%7D/g,_t=/%20/g;function de(e){return encodeURI(""+e).replace(Ot,"|").replace(kt,"[").replace(Ct,"]")}function xt(e){return de(e).replace(Ue,"{").replace(Fe,"}").replace(Ve,"^")}function pe(e){return de(e).replace(Ke,"%2B").replace(_t,"+").replace(De,"%23").replace(wt,"%26").replace(At,"`").replace(Ue,"{").replace(Fe,"}").replace(Ve,"^")}function Nt(e){return pe(e).replace(bt,"%3D")}function Mt(e){return de(e).replace(De,"%23").replace(St,"%3F")}function It(e){return e==null?"":Mt(e).replace(Pt,"%2F")}function X(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Tt=/\/$/,Lt=e=>e.replace(Tt,"");function ue(e,t,n="/"){let r,o={},c="",m="";const g=t.indexOf("#");let i=t.indexOf("?");return g<i&&g>=0&&(i=-1),i>-1&&(r=t.slice(0,i),c=t.slice(i+1,g>-1?g:t.length),o=e(c)),g>-1&&(r=r||t.slice(0,g),m=t.slice(g,t.length)),r=jt(r??t,n),{fullPath:r+(c&&"?")+c+m,path:r,query:o,hash:X(m)}}function $t(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function be(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ht(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&z(t.matched[r],n.matched[o])&&Qe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Bt(e[n],t[n]))return!1;return!0}function Bt(e,t){return I(e)?Se(e,t):I(t)?Se(t,e):e===t}function Se(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function jt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let c=n.length-1,m,g;for(m=0;m<r.length;m++)if(g=r[m],g!==".")if(g==="..")c>1&&c--;else break;return n.slice(0,c).join("/")+"/"+r.slice(m).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var W;(function(e){e.back="back",e.forward="forward",e.unknown=""})(W||(W={}));function Gt(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lt(e)}const qt=/^[^#]+#/;function zt(e,t){return e.replace(qt,"#")+t}function Dt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.scrollX,top:window.scrollY});function Kt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Dt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const me=new Map;function Vt(e,t){me.set(e,t)}function Ut(e){const t=me.get(e);return me.delete(e),t}let Ft=()=>location.protocol+"//"+location.host;function We(e,t){const{pathname:n,search:r,hash:o}=t,c=e.indexOf("#");if(c>-1){let g=o.includes(e.slice(c))?e.slice(c).length:1,i=o.slice(g);return i[0]!=="/"&&(i="/"+i),be(i,"")}return be(n,e)+r+o}function Qt(e,t,n,r){let o=[],c=[],m=null;const g=({state:l})=>{const u=We(e,location),w=n.value,b=t.value;let C=0;if(l){if(n.value=u,t.value=l,m&&m===w){m=null;return}C=b?l.position-b.position:0}else r(u);o.forEach(A=>{A(n.value,w,{delta:C,type:Z.pop,direction:C?C>0?W.forward:W.back:W.unknown})})};function i(){m=n.value}function f(l){o.push(l);const u=()=>{const w=o.indexOf(l);w>-1&&o.splice(w,1)};return c.push(u),u}function p(){const{history:l}=window;l.state&&l.replaceState(P({},l.state,{scroll:te()}),"")}function a(){for(const l of c)l();c=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:i,listen:f,destroy:a}}function Ce(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function Wt(e){const{history:t,location:n}=window,r={value:We(e,n)},o={value:t.state};o.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(i,f,p){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:Ft()+e+i;try{t[p?"replaceState":"pushState"](f,"",l),o.value=f}catch(u){console.error(u),n[p?"replace":"assign"](l)}}function m(i,f){const p=P({},t.state,Ce(o.value.back,i,o.value.forward,!0),f,{position:o.value.position});c(i,p,!0),r.value=i}function g(i,f){const p=P({},o.value,t.state,{forward:i,scroll:te()});c(p.current,p,!0);const a=P({},Ce(r.value,i,null),{position:p.position+1},f);c(i,a,!1),r.value=i}return{location:r,state:o,push:g,replace:m}}function Yt(e){e=Gt(e);const t=Wt(e),n=Qt(e,t.state,t.location,t.replace);function r(c,m=!0){m||n.pauseListeners(),history.go(c)}const o=P({location:"",base:e,go:r,createHref:zt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Xt(e){return typeof e=="string"||e&&typeof e=="object"}function Ye(e){return typeof e=="string"||typeof e=="symbol"}const Xe=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function D(e,t){return P(new Error,{type:e,[Xe]:!0},t)}function L(e,t){return e instanceof Error&&Xe in e&&(t==null||!!(e.type&t))}const Oe="[^/]+?",Zt={sensitive:!1,strict:!1,start:!0,end:!0},Jt=/[.+*?^${}()[\]/\\]/g;function en(e,t){const n=P({},Zt,t),r=[];let o=n.start?"^":"";const c=[];for(const f of e){const p=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let a=0;a<f.length;a++){const l=f[a];let u=40+(n.sensitive?.25:0);if(l.type===0)a||(o+="/"),o+=l.value.replace(Jt,"\\$&"),u+=40;else if(l.type===1){const{value:w,repeatable:b,optional:C,regexp:A}=l;c.push({name:w,repeatable:b,optional:C});const E=A||Oe;if(E!==Oe){u+=10;try{new RegExp(`(${E})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${w}" (${E}): `+M.message)}}let S=b?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;a||(S=C&&f.length<2?`(?:/${S})`:"/"+S),C&&(S+="?"),o+=S,u+=20,C&&(u+=-8),b&&(u+=-20),E===".*"&&(u+=-50)}p.push(u)}r.push(p)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const m=new RegExp(o,n.sensitive?"":"i");function g(f){const p=f.match(m),a={};if(!p)return null;for(let l=1;l<p.length;l++){const u=p[l]||"",w=c[l-1];a[w.name]=u&&w.repeatable?u.split("/"):u}return a}function i(f){let p="",a=!1;for(const l of e){(!a||!p.endsWith("/"))&&(p+="/"),a=!1;for(const u of l)if(u.type===0)p+=u.value;else if(u.type===1){const{value:w,repeatable:b,optional:C}=u,A=w in f?f[w]:"";if(I(A)&&!b)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const E=I(A)?A.join("/"):A;if(!E)if(C)l.length<2&&(p.endsWith("/")?p=p.slice(0,-1):a=!0);else throw new Error(`Missing required param "${w}"`);p+=E}}return p||"/"}return{re:m,score:r,keys:c,parse:g,stringify:i}}function tn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ze(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const c=tn(r[n],o[n]);if(c)return c;n++}if(Math.abs(o.length-r.length)===1){if(_e(r))return 1;if(_e(o))return-1}return o.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const nn={type:0,value:""},rn=/[a-zA-Z0-9_]/;function on(e){if(!e)return[[]];if(e==="/")return[[nn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${f}": ${u}`)}let n=0,r=n;const o=[];let c;function m(){c&&o.push(c),c=[]}let g=0,i,f="",p="";function a(){f&&(n===0?c.push({type:0,value:f}):n===1||n===2||n===3?(c.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:f,regexp:p,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function l(){f+=i}for(;g<e.length;){if(i=e[g++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&a(),m()):i===":"?(a(),n=1):l();break;case 4:l(),n=r;break;case 1:i==="("?n=2:rn.test(i)?l():(a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--);break;case 2:i===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+i:n=3:p+=i;break;case 3:a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),m(),o}function sn(e,t,n){const r=en(on(e.path),n),o=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function an(e,t){const n=[],r=new Map;t=Ie({strict:!1,end:!0,sensitive:!1},t);function o(a){return r.get(a)}function c(a,l,u){const w=!u,b=Ne(a);b.aliasOf=u&&u.record;const C=Ie(t,a),A=[b];if("alias"in a){const M=typeof a.alias=="string"?[a.alias]:a.alias;for(const j of M)A.push(Ne(P({},b,{components:u?u.record.components:b.components,path:j,aliasOf:u?u.record:b})))}let E,S;for(const M of A){const{path:j}=M;if(l&&j[0]!=="/"){const $=l.record.path,N=$[$.length-1]==="/"?"":"/";M.path=l.record.path+(j&&N+j)}if(E=sn(M,l,C),u?u.alias.push(E):(S=S||E,S!==E&&S.alias.push(E),w&&a.name&&!Me(E)&&m(a.name)),Je(E)&&i(E),b.children){const $=b.children;for(let N=0;N<$.length;N++)c($[N],E,u&&u.children[N])}u=u||E}return S?()=>{m(S)}:Q}function m(a){if(Ye(a)){const l=r.get(a);l&&(r.delete(a),n.splice(n.indexOf(l),1),l.children.forEach(m),l.alias.forEach(m))}else{const l=n.indexOf(a);l>-1&&(n.splice(l,1),a.record.name&&r.delete(a.record.name),a.children.forEach(m),a.alias.forEach(m))}}function g(){return n}function i(a){const l=un(a,n);n.splice(l,0,a),a.record.name&&!Me(a)&&r.set(a.record.name,a)}function f(a,l){let u,w={},b,C;if("name"in a&&a.name){if(u=r.get(a.name),!u)throw D(1,{location:a});C=u.record.name,w=P(xe(l.params,u.keys.filter(S=>!S.optional).concat(u.parent?u.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),a.params&&xe(a.params,u.keys.map(S=>S.name))),b=u.stringify(w)}else if(a.path!=null)b=a.path,u=n.find(S=>S.re.test(b)),u&&(w=u.parse(b),C=u.record.name);else{if(u=l.name?r.get(l.name):n.find(S=>S.re.test(l.path)),!u)throw D(1,{location:a,currentLocation:l});C=u.record.name,w=P({},l.params,a.params),b=u.stringify(w)}const A=[];let E=u;for(;E;)A.unshift(E.record),E=E.parent;return{name:C,path:b,params:w,matched:A,meta:ln(A)}}e.forEach(a=>c(a));function p(){n.length=0,r.clear()}return{addRoute:c,resolve:f,removeRoute:m,clearRoutes:p,getRoutes:g,getRecordMatcher:o}}function xe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ne(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:cn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function cn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Me(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ln(e){return e.reduce((t,n)=>P(t,n.meta),{})}function Ie(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function un(e,t){let n=0,r=t.length;for(;n!==r;){const c=n+r>>1;Ze(e,t[c])<0?r=c:n=c+1}const o=fn(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function fn(e){let t=e;for(;t=t.parent;)if(Je(t)&&Ze(e,t)===0)return t}function Je({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function pn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const c=r[o].replace(Ke," "),m=c.indexOf("="),g=X(m<0?c:c.slice(0,m)),i=m<0?null:X(c.slice(m+1));if(g in t){let f=t[g];I(f)||(f=t[g]=[f]),f.push(i)}else t[g]=i}return t}function Te(e){let t="";for(let n in e){const r=e[n];if(n=Nt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(c=>c&&pe(c)):[r&&pe(r)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+n,c!=null&&(t+="="+c))})}return t}function mn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const hn=Symbol(""),Le=Symbol(""),ge=Symbol(""),et=Symbol(""),he=Symbol("");function U(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function B(e,t,n,r,o,c=m=>m()){const m=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((g,i)=>{const f=l=>{l===!1?i(D(4,{from:n,to:t})):l instanceof Error?i(l):Xt(l)?i(D(2,{from:t,to:l})):(m&&r.enterCallbacks[o]===m&&typeof l=="function"&&m.push(l),g())},p=c(()=>e.call(r&&r.instances[o],t,n,f));let a=Promise.resolve(p);e.length<3&&(a=a.then(f)),a.catch(l=>i(l))})}function fe(e,t,n,r,o=c=>c()){const c=[];for(const m of e)for(const g in m.components){let i=m.components[g];if(!(t!=="beforeRouteEnter"&&!m.instances[g]))if(ze(i)){const p=(i.__vccOpts||i)[t];p&&c.push(B(p,n,r,m,g,o))}else{let f=i();c.push(()=>f.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${g}" at "${m.path}"`);const a=Et(p)?p.default:p;m.mods[g]=p,m.components[g]=a;const u=(a.__vccOpts||a)[t];return u&&B(u,n,r,m,g,o)()}))}}return c}function $e(e){const t=Y(ge),n=Y(et),r=T(()=>{const i=F(e.to);return t.resolve(i)}),o=T(()=>{const{matched:i}=r.value,{length:f}=i,p=i[f-1],a=n.matched;if(!p||!a.length)return-1;const l=a.findIndex(z.bind(null,p));if(l>-1)return l;const u=He(i[f-2]);return f>1&&He(p)===u&&a[a.length-1].path!==u?a.findIndex(z.bind(null,i[f-2])):l}),c=T(()=>o.value>-1&&Rn(n.params,r.value.params)),m=T(()=>o.value>-1&&o.value===n.matched.length-1&&Qe(n.params,r.value.params));function g(i={}){if(yn(i)){const f=t[F(e.replace)?"replace":"push"](F(e.to)).catch(Q);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:T(()=>r.value.href),isActive:c,isExactActive:m,navigate:g}}function dn(e){return e.length===1?e[0]:e}const gn=Ge({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=at($e(e)),{options:r}=Y(ge),o=T(()=>({[Be(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Be(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=t.default&&dn(t.default(n));return e.custom?c:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},c)}}}),vn=gn;function yn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Rn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!I(o)||o.length!==r.length||r.some((c,m)=>c!==o[m]))return!1}return!0}function He(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Be=(e,t,n)=>e??t??n,En=Ge({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(he),o=T(()=>e.route||r.value),c=Y(Le,0),m=T(()=>{let f=F(c);const{matched:p}=o.value;let a;for(;(a=p[f])&&!a.components;)f++;return f}),g=T(()=>o.value.matched[m.value]);ce(Le,T(()=>m.value+1)),ce(hn,g),ce(he,o);const i=ct();return lt(()=>[i.value,g.value,e.name],([f,p,a],[l,u,w])=>{p&&(p.instances[a]=f,u&&u!==p&&f&&f===l&&(p.leaveGuards.size||(p.leaveGuards=u.leaveGuards),p.updateGuards.size||(p.updateGuards=u.updateGuards))),f&&p&&(!u||!z(p,u)||!l)&&(p.enterCallbacks[a]||[]).forEach(b=>b(f))},{flush:"post"}),()=>{const f=o.value,p=e.name,a=g.value,l=a&&a.components[p];if(!l)return je(n.default,{Component:l,route:f});const u=a.props[p],w=u?u===!0?f.params:typeof u=="function"?u(f):u:null,C=qe(l,P({},w,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(a.instances[p]=null)},ref:i}));return je(n.default,{Component:C,route:f})||C}}});function je(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const wn=En;function Pn(e){const t=an(e.routes,e),n=e.parseQuery||pn,r=e.stringifyQuery||Te,o=e.history,c=U(),m=U(),g=U(),i=ot(H);let f=H;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=le.bind(null,s=>""+s),a=le.bind(null,It),l=le.bind(null,X);function u(s,d){let h,v;return Ye(s)?(h=t.getRecordMatcher(s),v=d):v=s,t.addRoute(v,h)}function w(s){const d=t.getRecordMatcher(s);d&&t.removeRoute(d)}function b(){return t.getRoutes().map(s=>s.record)}function C(s){return!!t.getRecordMatcher(s)}function A(s,d){if(d=P({},d||i.value),typeof s=="string"){const y=ue(n,s,d.path),_=t.resolve({path:y.path},d),V=o.createHref(y.fullPath);return P(y,_,{params:l(_.params),hash:X(y.hash),redirectedFrom:void 0,href:V})}let h;if(s.path!=null)h=P({},s,{path:ue(n,s.path,d.path).path});else{const y=P({},s.params);for(const _ in y)y[_]==null&&delete y[_];h=P({},s,{params:a(y)}),d.params=a(d.params)}const v=t.resolve(h,d),k=s.hash||"";v.params=p(l(v.params));const O=$t(r,P({},s,{hash:xt(k),path:v.path})),R=o.createHref(O);return P({fullPath:O,hash:k,query:r===Te?mn(s.query):s.query||{}},v,{redirectedFrom:void 0,href:R})}function E(s){return typeof s=="string"?ue(n,s,i.value.path):P({},s)}function S(s,d){if(f!==s)return D(8,{from:d,to:s})}function M(s){return N(s)}function j(s){return M(P(E(s),{replace:!0}))}function $(s){const d=s.matched[s.matched.length-1];if(d&&d.redirect){const{redirect:h}=d;let v=typeof h=="function"?h(s):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=E(v):{path:v},v.params={}),P({query:s.query,hash:s.hash,params:v.path!=null?{}:s.params},v)}}function N(s,d){const h=f=A(s),v=i.value,k=s.state,O=s.force,R=s.replace===!0,y=$(h);if(y)return N(P(E(y),{state:typeof y=="object"?P({},k,y.state):k,force:O,replace:R}),d||h);const _=h;_.redirectedFrom=d;let V;return!O&&Ht(r,v,h)&&(V=D(16,{to:_,from:v}),we(v,v,!0,!1)),(V?Promise.resolve(V):ve(_,v)).catch(x=>L(x)?L(x,2)?x:se(x):oe(x,_,v)).then(x=>{if(x){if(L(x,2))return N(P({replace:R},E(x.to),{state:typeof x.to=="object"?P({},k,x.to.state):k,force:O}),d||_)}else x=Re(_,v,!0,R,k);return ye(_,v,x),x})}function tt(s,d){const h=S(s,d);return h?Promise.reject(h):Promise.resolve()}function ne(s){const d=ee.values().next().value;return d&&typeof d.runWithContext=="function"?d.runWithContext(s):s()}function ve(s,d){let h;const[v,k,O]=bn(s,d);h=fe(v.reverse(),"beforeRouteLeave",s,d);for(const y of v)y.leaveGuards.forEach(_=>{h.push(B(_,s,d))});const R=tt.bind(null,s,d);return h.push(R),G(h).then(()=>{h=[];for(const y of c.list())h.push(B(y,s,d));return h.push(R),G(h)}).then(()=>{h=fe(k,"beforeRouteUpdate",s,d);for(const y of k)y.updateGuards.forEach(_=>{h.push(B(_,s,d))});return h.push(R),G(h)}).then(()=>{h=[];for(const y of O)if(y.beforeEnter)if(I(y.beforeEnter))for(const _ of y.beforeEnter)h.push(B(_,s,d));else h.push(B(y.beforeEnter,s,d));return h.push(R),G(h)}).then(()=>(s.matched.forEach(y=>y.enterCallbacks={}),h=fe(O,"beforeRouteEnter",s,d,ne),h.push(R),G(h))).then(()=>{h=[];for(const y of m.list())h.push(B(y,s,d));return h.push(R),G(h)}).catch(y=>L(y,8)?y:Promise.reject(y))}function ye(s,d,h){g.list().forEach(v=>ne(()=>v(s,d,h)))}function Re(s,d,h,v,k){const O=S(s,d);if(O)return O;const R=d===H,y=q?history.state:{};h&&(v||R?o.replace(s.fullPath,P({scroll:R&&y&&y.scroll},k)):o.push(s.fullPath,k)),i.value=s,we(s,d,h,R),se()}let K;function nt(){K||(K=o.listen((s,d,h)=>{if(!Pe.listening)return;const v=A(s),k=$(v);if(k){N(P(k,{replace:!0,force:!0}),v).catch(Q);return}f=v;const O=i.value;q&&Vt(ke(O.fullPath,h.delta),te()),ve(v,O).catch(R=>L(R,12)?R:L(R,2)?(N(P(E(R.to),{force:!0}),v).then(y=>{L(y,20)&&!h.delta&&h.type===Z.pop&&o.go(-1,!1)}).catch(Q),Promise.reject()):(h.delta&&o.go(-h.delta,!1),oe(R,v,O))).then(R=>{R=R||Re(v,O,!1),R&&(h.delta&&!L(R,8)?o.go(-h.delta,!1):h.type===Z.pop&&L(R,20)&&o.go(-1,!1)),ye(v,O,R)}).catch(Q)}))}let re=U(),Ee=U(),J;function oe(s,d,h){se(s);const v=Ee.list();return v.length?v.forEach(k=>k(s,d,h)):console.error(s),Promise.reject(s)}function rt(){return J&&i.value!==H?Promise.resolve():new Promise((s,d)=>{re.add([s,d])})}function se(s){return J||(J=!s,nt(),re.list().forEach(([d,h])=>s?h(s):d()),re.reset()),s}function we(s,d,h,v){const{scrollBehavior:k}=e;if(!q||!k)return Promise.resolve();const O=!h&&Ut(ke(s.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return it().then(()=>k(s,d,O)).then(R=>R&&Kt(R)).catch(R=>oe(R,s,d))}const ie=s=>o.go(s);let ae;const ee=new Set,Pe={currentRoute:i,listening:!0,addRoute:u,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:b,resolve:A,options:e,push:M,replace:j,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:c.add,beforeResolve:m.add,afterEach:g.add,onError:Ee.add,isReady:rt,install(s){const d=this;s.component("RouterLink",vn),s.component("RouterView",wn),s.config.globalProperties.$router=d,Object.defineProperty(s.config.globalProperties,"$route",{enumerable:!0,get:()=>F(i)}),q&&!ae&&i.value===H&&(ae=!0,M(o.location).catch(k=>{}));const h={};for(const k in H)Object.defineProperty(h,k,{get:()=>i.value[k],enumerable:!0});s.provide(ge,d),s.provide(et,st(h)),s.provide(he,i);const v=s.unmount;ee.add(s),s.unmount=function(){ee.delete(s),ee.size<1&&(f=H,K&&K(),K=null,i.value=H,ae=!1,J=!1),v()}}};function G(s){return s.reduce((d,h)=>d.then(()=>ne(h)),Promise.resolve())}return Pe}function bn(e,t){const n=[],r=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let m=0;m<c;m++){const g=t.matched[m];g&&(e.matched.find(f=>z(f,g))?r.push(g):n.push(g));const i=e.matched[m];i&&(t.matched.find(f=>z(f,i))||o.push(i))}return[n,r,o]}const co=Pn({history:Yt(),routes:[{path:"/",name:"Home Page",component:ut},{path:"/work/web-development",name:"Web Development",component:ft},{path:"/work/web-development/filemanager",name:"File Manager",component:ht},{path:"/work/web-development/kiosk",name:"Kiosk",component:dt},{path:"/work/web-development/numbers-to-string",name:"Numbers to String",component:gt},{path:"/work/web-development/calc-and-random-number",name:"Calc and random number generator",component:vt},{path:"/work/web-development/queue-schedule",name:"Queue Schedule",component:Rt},{path:"/work/game-development",name:"Game Development",component:pt},{path:"/about",name:"About",component:mt},{path:"/:catchAll(.*)",name:"NotFound",component:yt}],scrollBehavior(e,t,n){return{top:0}}});export{co as r};
