function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function v(){return g("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t){return Array.from(t.childNodes)}function w(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?m(e):h(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function S(t){return x(t," ")}function A(t,e){e=""+e,t.data!==e&&(t.data=e)}function P(t,e,n){t.classList[n?"add":"remove"](e)}function L(t,e=document.body){return Array.from(e.querySelectorAll(t))}let R;function k(t){R=t}function C(t,e){(function(){if(!R)throw new Error("Function called outside component initialization");return R})().$$.context.set(t,e)}const j=[],N=[],O=[],q=[],D=Promise.resolve();let I=!1;function U(t){O.push(t)}let H=!1;const V=new Set;function B(){if(!H){H=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];k(e),T(e.$$)}for(j.length=0;N.length;)N.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];V.has(e)||(V.add(e),e())}O.length=0}while(j.length);for(;q.length;)q.pop()();I=!1,H=!1,V.clear()}}function T(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const J=new Set;let M;function z(){M={r:0,c:[],p:M}}function G(){M.r||s(M.c),M=M.p}function K(t,e){t&&t.i&&(J.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),M.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const F="undefined"!=typeof window?window:global;function X(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function Z(t,e){t&&t.l(e)}function tt(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(U)}function et(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(j.push(t),I||(I=!0,D.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,n,o,a,c,i,l=[-1]){const u=R;k(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),d&&nt(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(E(n.target)):p.fragment&&p.fragment.c(),n.intro&&K(e.$$.fragment),tt(e,n.target,n.anchor),B()),k(u)}class st{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ot=[];function at(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!ot.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const ct={},it=()=>({});function lt(e){let n,r,s,o,a,c,i,l,d,m,v,y,_,A,L,R,k,C,j,N,O,q,D;return{c(){n=h("nav"),r=h("ul"),s=h("div"),o=h("li"),a=h("a"),c=h("img"),l=$(),d=h("div"),m=h("li"),v=h("a"),y=g("About"),A=$(),L=h("li"),R=h("a"),k=g("Wiki"),j=$(),N=h("li"),O=h("a"),q=g("Contact"),this.h()},l(t){n=w(t,"NAV",{class:!0});var e=E(n);r=w(e,"UL",{class:!0});var i=E(r);s=w(i,"DIV",{class:!0});var u=E(s);o=w(u,"LI",{class:!0});var f=E(o);a=w(f,"A",{href:!0});var h=E(a);c=w(h,"IMG",{class:!0,src:!0,alt:!0}),h.forEach(p),f.forEach(p),u.forEach(p),l=S(i),d=w(i,"DIV",{class:!0});var g=E(d);m=w(g,"LI",{class:!0});var $=E(m);v=w($,"A",{"aria-current":!0,href:!0});var _=E(v);y=x(_,"About"),_.forEach(p),$.forEach(p),A=S(g),L=w(g,"LI",{class:!0});var b=E(L);R=w(b,"A",{"aria-current":!0,href:!0});var P=E(R);k=x(P,"Wiki"),P.forEach(p),b.forEach(p),j=S(g),N=w(g,"LI",{class:!0});var C=E(N);O=w(C,"A",{"aria-current":!0,href:!0});var D=E(O);q=x(D,"Contact"),D.forEach(p),C.forEach(p),g.forEach(p),i.forEach(p),e.forEach(p),this.h()},h(){b(c,"class","h-6"),c.src!==(i="icon.svg")&&b(c,"src","icon.svg"),b(c,"alt","Chameleon Icon"),b(a,"href","./"),b(o,"class","svelte-1iyh25l"),b(s,"class","flex-0"),b(v,"aria-current",_="about"===e[0]?"page":void 0),b(v,"href","about"),b(m,"class","svelte-1iyh25l"),P(m,"active","about"===e[0]),b(R,"aria-current",C="wiki"===e[0]?"page":void 0),b(R,"href","wiki"),b(L,"class","svelte-1iyh25l"),P(L,"active","wiki"===e[0]),b(O,"aria-current",D="contact"===e[0]?"page":void 0),b(O,"href","contact"),b(N,"class","svelte-1iyh25l"),P(N,"active","contact"===e[0]),b(d,"class","flex-1 inline-flex justify-end"),b(r,"class","flex max-w-6xl w-full items-center"),b(n,"class","flex px-4 bg-dark-green lg: px-0 py-2 w-full text-lg text-white justify-center z-10")},m(t,e){f(t,n,e),u(n,r),u(r,s),u(s,o),u(o,a),u(a,c),u(r,l),u(r,d),u(d,m),u(m,v),u(v,y),u(d,A),u(d,L),u(L,R),u(R,k),u(d,j),u(d,N),u(N,O),u(O,q)},p(t,[e]){1&e&&_!==(_="about"===t[0]?"page":void 0)&&b(v,"aria-current",_),1&e&&P(m,"active","about"===t[0]),1&e&&C!==(C="wiki"===t[0]?"page":void 0)&&b(R,"aria-current",C),1&e&&P(L,"active","wiki"===t[0]),1&e&&D!==(D="contact"===t[0]?"page":void 0)&&b(O,"aria-current",D),1&e&&P(N,"active","contact"===t[0])},i:t,o:t,d(t){t&&p(n)}}}function ut(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ft extends st{constructor(t){super(),rt(this,t,ut,lt,a,{segment:0})}}function pt(t){let e,n,r,s;const o=new ft({props:{segment:t[0]}}),a=t[2].default,d=c(a,t,t[1],null);return{c(){e=h("main"),n=h("div"),Q(o.$$.fragment),r=$(),d&&d.c(),this.h()},l(t){e=w(t,"MAIN",{});var s=E(e);n=w(s,"DIV",{class:!0});var a=E(n);Z(o.$$.fragment,a),r=S(a),d&&d.l(a),a.forEach(p),s.forEach(p),this.h()},h(){b(n,"class","flex flex-col h-screen overflow-y-auto")},m(t,a){f(t,e,a),u(e,n),tt(o,n,null),u(n,r),d&&d.m(n,null),s=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),d&&d.p&&2&e&&d.p(i(a,t,t[1],null),l(a,t[1],e,null))},i(t){s||(K(o.$$.fragment,t),K(d,t),s=!0)},o(t){W(o.$$.fragment,t),W(d,t),s=!1},d(t){t&&p(e),et(o),d&&d.d(t)}}}function dt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class ht extends st{constructor(t){super(),rt(this,t,dt,pt,a,{segment:0})}}function mt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=g(r)},l(t){e=w(t,"PRE",{});var s=E(e);n=x(s,r),s.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&A(n,r)},d(t){t&&p(e)}}}function gt(e){let n,r,s,o,a,c,i,l,d,m=e[1].message+"";document.title=n=e[0];let y=e[2]&&e[1].stack&&mt(e);return{c(){r=$(),s=h("h1"),o=g(e[0]),a=$(),c=h("p"),i=g(m),l=$(),y&&y.c(),d=v(),this.h()},l(t){L('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=S(t),s=w(t,"H1",{class:!0});var n=E(s);o=x(n,e[0]),n.forEach(p),a=S(t),c=w(t,"P",{class:!0});var u=E(c);i=x(u,m),u.forEach(p),l=S(t),y&&y.l(t),d=v(),this.h()},h(){b(s,"class","svelte-iy9kc2"),b(c,"class","svelte-iy9kc2")},m(t,e){f(t,r,e),f(t,s,e),u(s,o),f(t,a,e),f(t,c,e),u(c,i),f(t,l,e),y&&y.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&A(o,t[0]),2&e&&m!==(m=t[1].message+"")&&A(i,m),t[2]&&t[1].stack?y?y.p(t,e):(y=mt(t),y.c(),y.m(d.parentNode,d)):y&&(y.d(1),y=null)},i:t,o:t,d(t){t&&p(r),t&&p(s),t&&p(a),t&&p(c),t&&p(l),y&&y.d(t),t&&p(d)}}}function $t(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class vt extends st{constructor(t){super(),rt(this,t,$t,gt,a,{status:0,error:1})}}function yt(t){let n,r;const s=[{segment:t[2][1]},t[4].props];var o=t[4].component;function a(t){let n={$$slots:{default:[Et]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a(t));return{c(){c&&Q(c.$$.fragment),n=v()},l(t){c&&Z(c.$$.fragment,t),n=v()},m(t,e){c&&tt(c,t,e),f(t,n,e),r=!0},p(t,e){const r=20&e?X(s,[4&e&&{segment:t[2][1]},16&e&&Y(t[4].props)]):{};if(160&e&&(r.$$scope={dirty:e,ctx:t}),o!==(o=t[4].component)){if(c){z();const t=c;W(t.$$.fragment,1,0,()=>{et(t,1)}),G()}o?(Q((c=new o(a(t))).$$.fragment),K(c.$$.fragment,1),tt(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&K(c.$$.fragment,t),r=!0)},o(t){c&&W(c.$$.fragment,t),r=!1},d(t){t&&p(n),c&&et(c,t)}}}function _t(t){let e;const n=new vt({props:{error:t[0],status:t[1]}});return{c(){Q(n.$$.fragment)},l(t){Z(n.$$.fragment,t)},m(t,r){tt(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){W(n.$$.fragment,t),e=!1},d(t){et(n,t)}}}function bt(t){let n,r;const s=[t[5].props];var o=t[5].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&Q(c.$$.fragment),n=v()},l(t){c&&Z(c.$$.fragment,t),n=v()},m(t,e){c&&tt(c,t,e),f(t,n,e),r=!0},p(t,e){const r=32&e?X(s,[Y(t[5].props)]):{};if(o!==(o=t[5].component)){if(c){z();const t=c;W(t.$$.fragment,1,0,()=>{et(t,1)}),G()}o?(Q((c=new o(a())).$$.fragment),K(c.$$.fragment,1),tt(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&K(c.$$.fragment,t),r=!0)},o(t){c&&W(c.$$.fragment,t),r=!1},d(t){t&&p(n),c&&et(c,t)}}}function Et(t){let e,n,r=t[5]&&bt(t);return{c(){r&&r.c(),e=v()},l(t){r&&r.l(t),e=v()},m(t,s){r&&r.m(t,s),f(t,e,s),n=!0},p(t,n){t[5]?r?(r.p(t,n),K(r,1)):(r=bt(t),r.c(),K(r,1),r.m(e.parentNode,e)):r&&(z(),W(r,1,1,()=>{r=null}),G())},i(t){n||(K(r),n=!0)},o(t){W(r),n=!1},d(t){r&&r.d(t),t&&p(e)}}}function wt(t){let e,n,r,s;const o=[_t,yt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){a[e].m(t,n),f(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(z(),W(a[i],1,1,()=>{a[i]=null}),G(),n=a[e],n||(n=a[e]=o[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){s||(K(n),s=!0)},o(t){W(n),s=!1},d(t){a[e].d(t),t&&p(r)}}}function xt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[wt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new ht({props:s});return{c(){Q(o.$$.fragment)},l(t){Z(o.$$.fragment,t)},m(t,e){tt(o,t,e),n=!0},p(t,[e]){const n=12&e?X(r,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};183&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(K(o.$$.fragment,t),n=!0)},o(t){W(o.$$.fragment,t),n=!1},d(t){et(o,t)}}}function St(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{level2:l=null}=e;return C(ct,r),t.$set=t=>{"stores"in t&&n(6,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"level2"in t&&n(5,l=t.level2)},[s,o,a,c,i,l,r]}class At extends st{constructor(t){super(),rt(this,t,St,xt,a,{stores:6,error:0,status:1,segments:2,level0:3,level1:4,level2:5})}}const Pt=[],Lt=[{js:()=>import("./index.aa16f42f.js"),css:["index.aa16f42f.css","client.683fb88e.css"]},{js:()=>import("./contact.3490b092.js"),css:["client.683fb88e.css"]},{js:()=>import("./about.10a6c0a6.js"),css:["client.683fb88e.css"]},{js:()=>import("./_layout.1b29fffb.js"),css:["_layout.1b29fffb.css","client.683fb88e.css"]},{js:()=>import("./index.7511014a.js"),css:["client.683fb88e.css"]},{js:()=>import("./recommended-extensions.9472deb0.js"),css:["client.683fb88e.css"]},{js:()=>import("./permissions.568dad7d.js"),css:["client.683fb88e.css"]},{js:()=>import("./headers.5767ddb2.js"),css:["headers.5767ddb2.css","client.683fb88e.css"]}],Rt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contact\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/wiki\/?$/,parts:[{i:3},{i:4}]},{pattern:/^\/wiki\/recommended-extensions\/?$/,parts:[{i:3},{i:5}]},{pattern:/^\/wiki\/permissions\/?$/,parts:[{i:3},{i:6}]},{pattern:/^\/wiki\/headers\/?$/,parts:[{i:3},{i:7}]}];function kt(t,e={replaceState:!1}){const n=Wt(new URL(t,document.baseURI));return n?(zt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Xt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}const Ct="undefined"!=typeof __SAPPER__&&__SAPPER__;let jt,Nt,Ot,qt=!1,Dt=[],It="{}";const Ut={page:at({}),preloading:at(null),session:at(Ct&&Ct.session)};let Ht,Vt;Ut.session.subscribe(async t=>{if(Ht=t,!qt)return;Vt=!0;const e=Wt(new URL(location.href)),n=Nt={},{redirect:r,props:s,branch:o}=await Qt(e);n===Nt&&await Yt(r,o,s,e.page)});let Bt,Tt=null;let Jt,Mt=1;const zt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Gt={};function Kt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Wt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct.baseUrl))return null;let e=t.pathname.slice(Ct.baseUrl.length);if(""===e&&(e="/"),!Pt.some(t=>t.test(e)))for(let n=0;n<Rt.length;n+=1){const r=Rt[n],s=r.pattern.exec(e);if(s){const n=Kt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Ft(){return{x:pageXOffset,y:pageYOffset}}async function Xt(t,e,n,r){if(e)Jt=e;else{const t=Ft();Gt[Jt]=t,e=Jt=++Mt,Gt[Jt]=n?t:{x:0,y:0}}Jt=e,jt&&Ut.preloading.set(!0);const s=Tt&&Tt.href===t.href?Tt.promise:Qt(t);Tt=null;const o=Nt={},{redirect:a,props:c,branch:i}=await s;if(o===Nt&&(await Yt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Gt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Gt[Jt]=t,t&&scrollTo(t.x,t.y)}}async function Yt(t,e,n,r){if(t)return kt(t.location,{replaceState:!0});if(Ut.page.set(r),Ut.preloading.set(!1),jt)jt.$set(n);else{n.stores={page:{subscribe:Ut.page.subscribe},preloading:{subscribe:Ut.preloading.subscribe},session:Ut.session},n.level0={props:await Ot};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)te(t.nextSibling);te(t),te(e)}jt=new At({target:Bt,props:n,hydrate:!0})}Dt=e,It=JSON.stringify(r.query),qt=!0,Vt=!1}async function Qt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;Ot||(Ot=Ct.preloaded[0]||it.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ht));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==It)return!0;const s=Dt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Vt&&!u&&Dt[c]&&Dt[c].part===e.i)return Dt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Lt[e.i]);let m;return m=qt||!Ct.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ht):{}:Ct.preloaded[c+1],o[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Zt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function te(t){t.parentNode.removeChild(t)}function ee(t){const e=Wt(new URL(t,document.baseURI));if(e)return Tt&&t===Tt.href||function(t,e){Tt={href:t,promise:e}}(t,Qt(e)),Tt.promise}let ne;function re(t){clearTimeout(ne),ne=setTimeout(()=>{se(t)},20)}function se(t){const e=ae(t.target);e&&"prefetch"===e.rel&&ee(e.href)}function oe(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ae(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Wt(s);if(o){Xt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),zt.pushState({id:Jt},"",s.href)}}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ce(t){if(Gt[Jt]=Ft(),t.state){const e=Wt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else Mt=Mt+1,function(t){Jt=t}(Mt),zt.replaceState({id:Jt},"",location.href)}var ie;ie={target:document.querySelector("#sapper")},"scrollRestoration"in zt&&(zt.scrollRestoration="manual"),function(t){Bt=t}(ie.target),addEventListener("click",oe),addEventListener("popstate",ce),addEventListener("touchstart",se),addEventListener("mousemove",re),Promise.resolve().then(()=>{const{hash:t,href:e}=location;zt.replaceState({id:Mt},"",e);const n=new URL(location.href);if(Ct.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Ct;Ot||(Ot=o&&o[0]),Yt(null,[],{error:c,status:a,session:s,level0:{props:Ot},level1:{props:{status:a,error:c},component:vt},segments:o},{host:e,path:n,query:Kt(r),params:{}})}();const r=Wt(n);return r?Xt(r,Mt,!0,t):void 0});export{kt as A,F as B,_ as C,A as D,c as E,i as F,l as G,N as H,st as S,E as a,b,w as c,p as d,h as e,f,$ as g,S as h,rt as i,u as j,d as k,y as l,g as m,t as n,m as o,Q as p,L as q,x as r,a as s,P as t,Z as u,tt as v,K as w,W as x,et as y,s as z};
