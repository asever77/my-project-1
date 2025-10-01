import{j as n}from"./jsx-runtime-Bz4aBVDn.js";import{r as z,e as de}from"./iframe-BdMZbwUm.js";import{c as we}from"./utils-CBfrqCZ4.js";import{B as U}from"./button-bDZQ1CGr.js";import{c as Sn}from"./createLucideIcon-CdHLrrBb.js";import{A as An}from"./arrow-right-CvdUpCcu.js";import{C as K,d as Q,a as In,b as kn}from"./card-BgCPKrWA.js";import{B as En}from"./badge-B3XW2gOL.js";import{H as Pn}from"./heart-BFGUhVwJ.js";import{S as dn}from"./star-C0TOQxsF.js";import{S as Tn}from"./shopping-cart-B6TwTJVd.js";import{Q as Ln}from"./quote-DBbwWnsz.js";import{E as Dn}from"./eye-Ch3FN2Wj.js";import{D as zn}from"./download-C_QE2hwp.js";import{S as Bn}from"./share-CKmH9Oip.js";import{B as On}from"./bookmark-BY9QLeCX.js";import{C as Mn}from"./camera-COarpcgO.js";import{C as Fn}from"./calendar-TKHYDXI1.js";import{P as Rn}from"./pause-H8-UOUkr.js";import{P as Vn}from"./play-xKUj77R-.js";import"./index-COOYaFQ0.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],$n=Sn("arrow-left",_n);function qn(e){return Object.prototype.toString.call(e)==="[object Object]"}function on(e){return qn(e)||Array.isArray(e)}function Hn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ge(e,t){const r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),s=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==s?!1:r.every(o=>{const d=e[o],c=t[o];return typeof d=="function"?`${d}`==`${c}`:!on(d)||!on(c)?d===c:Ge(d,c)})}function an(e){return e.concat().sort((t,r)=>t.name>r.name?1:-1).map(t=>t.options)}function Gn(e,t){if(e.length!==t.length)return!1;const r=an(e),a=an(t);return r.every((i,s)=>{const o=a[s];return Ge(i,o)})}function Ue(e){return typeof e=="number"}function qe(e){return typeof e=="string"}function Oe(e){return typeof e=="boolean"}function cn(e){return Object.prototype.toString.call(e)==="[object Object]"}function T(e){return Math.abs(e)}function Ke(e){return Math.sign(e)}function Ce(e,t){return T(e-t)}function Un(e,t){if(e===0||t===0||T(e)<=T(t))return 0;const r=Ce(T(e),T(t));return T(r/e)}function Kn(e){return Math.round(e*100)/100}function ye(e){return be(e).map(Number)}function V(e){return e[Se(e)]}function Se(e){return Math.max(0,e.length-1)}function Qe(e,t){return t===Se(e)}function ln(e,t=0){return Array.from(Array(e),(r,a)=>t+a)}function be(e){return Object.keys(e)}function un(e,t){return[e,t].reduce((r,a)=>(be(a).forEach(i=>{const s=r[i],o=a[i],d=cn(s)&&cn(o);r[i]=d?un(s,o):o}),r),{})}function He(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Qn(e,t){const r={start:a,center:i,end:s};function a(){return 0}function i(c){return s(c)/2}function s(c){return t-c}function o(c,l){return qe(e)?r[e](c):e(t,c,l)}return{measure:o}}function je(){let e=[];function t(i,s,o,d={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(s,o,d),c=()=>i.removeEventListener(s,o,d);else{const l=i;l.addListener(o),c=()=>l.removeListener(o)}return e.push(c),a}function r(){e=e.filter(i=>i())}const a={add:t,clear:r};return a}function Jn(e,t,r,a){const i=je(),s=1e3/60;let o=null,d=0,c=0;function l(){i.add(e,"visibilitychange",()=>{e.hidden&&m()})}function h(){N(),i.clear()}function f(g){if(!c)return;o||(o=g,r(),r());const u=g-o;for(o=g,d+=u;d>=s;)r(),d-=s;const v=d/s;a(v),c&&(c=t.requestAnimationFrame(f))}function p(){c||(c=t.requestAnimationFrame(f))}function N(){t.cancelAnimationFrame(c),o=null,d=0,c=0}function m(){o=null,d=0}return{init:l,destroy:h,start:p,stop:N,update:r,render:a}}function Xn(e,t){const r=t==="rtl",a=e==="y",i=a?"y":"x",s=a?"x":"y",o=!a&&r?-1:1,d=h(),c=f();function l(m){const{height:x,width:g}=m;return a?x:g}function h(){return a?"top":r?"right":"left"}function f(){return a?"bottom":r?"left":"right"}function p(m){return m*o}return{scroll:i,cross:s,startEdge:d,endEdge:c,measureSize:l,direction:p}}function ue(e=0,t=0){const r=T(e-t);function a(l){return l<e}function i(l){return l>t}function s(l){return a(l)||i(l)}function o(l){return s(l)?a(l)?e:t:l}function d(l){return r?l-r*Math.ceil((l-t)/r):l}return{length:r,max:t,min:e,constrain:o,reachedAny:s,reachedMax:i,reachedMin:a,removeOffset:d}}function mn(e,t,r){const{constrain:a}=ue(0,e),i=e+1;let s=o(t);function o(p){return r?T((i+p)%i):a(p)}function d(){return s}function c(p){return s=o(p),f}function l(p){return h().set(d()+p)}function h(){return mn(e,d(),r)}const f={get:d,set:c,add:l,clone:h};return f}function Yn(e,t,r,a,i,s,o,d,c,l,h,f,p,N,m,x,g,u,v){const{cross:y,direction:w}=e,E=["INPUT","SELECT","TEXTAREA"],S={passive:!1},b=je(),j=je(),A=ue(50,225).constrain(N.measure(20)),L={mouse:300,touch:400},I={mouse:500,touch:600},M=m?43:25;let _=!1,$=0,q=0,ie=!1,oe=!1,X=!1,Y=!1;function xe(C){if(!v)return;function k(O){(Oe(v)||v(C,O))&&ge(O)}const D=t;b.add(D,"dragstart",O=>O.preventDefault(),S).add(D,"touchmove",()=>{},S).add(D,"touchend",()=>{}).add(D,"touchstart",k).add(D,"mousedown",k).add(D,"touchcancel",B).add(D,"contextmenu",B).add(D,"click",W,!0)}function H(){b.clear(),j.clear()}function me(){const C=Y?r:t;j.add(C,"touchmove",F,S).add(C,"touchend",B).add(C,"mousemove",F,S).add(C,"mouseup",B)}function fe(C){const k=C.nodeName||"";return E.includes(k)}function Z(){return(m?I:L)[Y?"mouse":"touch"]}function he(C,k){const D=f.add(Ke(C)*-1),O=h.byDistance(C,!m).distance;return m||T(C)<A?O:g&&k?O*.5:h.byIndex(D.get(),0).distance}function ge(C){const k=He(C,a);Y=k,X=m&&k&&!C.buttons&&_,_=Ce(i.get(),o.get())>=2,!(k&&C.button!==0)&&(fe(C.target)||(ie=!0,s.pointerDown(C),l.useFriction(0).useDuration(0),i.set(o),me(),$=s.readPoint(C),q=s.readPoint(C,y),p.emit("pointerDown")))}function F(C){if(!He(C,a)&&C.touches.length>=2)return B(C);const D=s.readPoint(C),O=s.readPoint(C,y),G=Ce(D,$),ee=Ce(O,q);if(!oe&&!Y&&(!C.cancelable||(oe=G>ee,!oe)))return B(C);const ce=s.pointerMove(C);G>x&&(X=!0),l.useFriction(.3).useDuration(.75),d.start(),i.add(w(ce)),C.preventDefault()}function B(C){const D=h.byDistance(0,!1).index!==f.get(),O=s.pointerUp(C)*Z(),G=he(w(O),D),ee=Un(O,G),ce=M-10*ee,ae=u+ee/50;oe=!1,ie=!1,j.clear(),l.useDuration(ce).useFriction(ae),c.distance(G,!m),Y=!1,p.emit("pointerUp")}function W(C){X&&(C.stopPropagation(),C.preventDefault(),X=!1)}function R(){return ie}return{init:xe,destroy:H,pointerDown:R}}function Zn(e,t){let a,i;function s(f){return f.timeStamp}function o(f,p){const m=`client${(p||e.scroll)==="x"?"X":"Y"}`;return(He(f,t)?f:f.touches[0])[m]}function d(f){return a=f,i=f,o(f)}function c(f){const p=o(f)-o(i),N=s(f)-s(a)>170;return i=f,N&&(a=f),p}function l(f){if(!a||!i)return 0;const p=o(i)-o(a),N=s(f)-s(a),m=s(f)-s(i)>170,x=p/N;return N&&!m&&T(x)>.1?x:0}return{pointerDown:d,pointerMove:c,pointerUp:l,readPoint:o}}function Wn(){function e(r){const{offsetTop:a,offsetLeft:i,offsetWidth:s,offsetHeight:o}=r;return{top:a,right:i+s,bottom:a+o,left:i,width:s,height:o}}return{measure:e}}function et(e){function t(a){return e*(a/100)}return{measure:t}}function nt(e,t,r,a,i,s,o){const d=[e].concat(a);let c,l,h=[],f=!1;function p(g){return i.measureSize(o.measure(g))}function N(g){if(!s)return;l=p(e),h=a.map(p);function u(v){for(const y of v){if(f)return;const w=y.target===e,E=a.indexOf(y.target),S=w?l:h[E],b=p(w?e:a[E]);if(T(b-S)>=.5){g.reInit(),t.emit("resize");break}}}c=new ResizeObserver(v=>{(Oe(s)||s(g,v))&&u(v)}),r.requestAnimationFrame(()=>{d.forEach(v=>c.observe(v))})}function m(){f=!0,c&&c.disconnect()}return{init:N,destroy:m}}function tt(e,t,r,a,i,s){let o=0,d=0,c=i,l=s,h=e.get(),f=0;function p(){const S=a.get()-e.get(),b=!c;let j=0;return b?(o=0,r.set(a),e.set(a),j=S):(r.set(e),o+=S/c,o*=l,h+=o,e.add(o),j=h-f),d=Ke(j),f=h,E}function N(){const S=a.get()-t.get();return T(S)<.001}function m(){return c}function x(){return d}function g(){return o}function u(){return y(i)}function v(){return w(s)}function y(S){return c=S,E}function w(S){return l=S,E}const E={direction:x,duration:m,velocity:g,seek:p,settled:N,useBaseFriction:v,useBaseDuration:u,useFriction:w,useDuration:y};return E}function rt(e,t,r,a,i){const s=i.measure(10),o=i.measure(50),d=ue(.1,.99);let c=!1;function l(){return!(c||!e.reachedAny(r.get())||!e.reachedAny(t.get()))}function h(N){if(!l())return;const m=e.reachedMin(t.get())?"min":"max",x=T(e[m]-t.get()),g=r.get()-t.get(),u=d.constrain(x/o);r.subtract(g*u),!N&&T(g)<s&&(r.set(e.constrain(r.get())),a.useDuration(25).useBaseFriction())}function f(N){c=!N}return{shouldConstrain:l,constrain:h,toggleActive:f}}function st(e,t,r,a,i){const s=ue(-t+e,0),o=f(),d=h(),c=p();function l(m,x){return Ce(m,x)<=1}function h(){const m=o[0],x=V(o),g=o.lastIndexOf(m),u=o.indexOf(x)+1;return ue(g,u)}function f(){return r.map((m,x)=>{const{min:g,max:u}=s,v=s.constrain(m),y=!x,w=Qe(r,x);return y?u:w||l(g,v)?g:l(u,v)?u:v}).map(m=>parseFloat(m.toFixed(3)))}function p(){if(t<=e+i)return[s.max];if(a==="keepSnaps")return o;const{min:m,max:x}=d;return o.slice(m,x)}return{snapsContained:c,scrollContainLimit:d}}function ot(e,t,r){const a=t[0],i=r?a-e:V(t);return{limit:ue(i,a)}}function at(e,t,r,a){const s=t.min+.1,o=t.max+.1,{reachedMin:d,reachedMax:c}=ue(s,o);function l(p){return p===1?c(r.get()):p===-1?d(r.get()):!1}function h(p){if(!l(p))return;const N=e*(p*-1);a.forEach(m=>m.add(N))}return{loop:h}}function it(e){const{max:t,length:r}=e;function a(s){const o=s-t;return r?o/-r:0}return{get:a}}function ct(e,t,r,a,i){const{startEdge:s,endEdge:o}=e,{groupSlides:d}=i,c=f().map(t.measure),l=p(),h=N();function f(){return d(a).map(x=>V(x)[o]-x[0][s]).map(T)}function p(){return a.map(x=>r[s]-x[s]).map(x=>-T(x))}function N(){return d(l).map(x=>x[0]).map((x,g)=>x+c[g])}return{snaps:l,snapsAligned:h}}function lt(e,t,r,a,i,s){const{groupSlides:o}=i,{min:d,max:c}=a,l=h();function h(){const p=o(s),N=!e||t==="keepSnaps";return r.length===1?[s]:N?p:p.slice(d,c).map((m,x,g)=>{const u=!x,v=Qe(g,x);if(u){const y=V(g[0])+1;return ln(y)}if(v){const y=Se(s)-V(g)[0]+1;return ln(y,V(g)[0])}return m})}return{slideRegistry:l}}function dt(e,t,r,a,i){const{reachedAny:s,removeOffset:o,constrain:d}=a;function c(m){return m.concat().sort((x,g)=>T(x)-T(g))[0]}function l(m){const x=e?o(m):d(m),g=t.map((v,y)=>({diff:h(v-x,0),index:y})).sort((v,y)=>T(v.diff)-T(y.diff)),{index:u}=g[0];return{index:u,distance:x}}function h(m,x){const g=[m,m+r,m-r];if(!e)return m;if(!x)return c(g);const u=g.filter(v=>Ke(v)===x);return u.length?c(u):V(g)-r}function f(m,x){const g=t[m]-i.get(),u=h(g,x);return{index:m,distance:u}}function p(m,x){const g=i.get()+m,{index:u,distance:v}=l(g),y=!e&&s(g);if(!x||y)return{index:u,distance:m};const w=t[u]-v,E=m+h(w,0);return{index:u,distance:E}}return{byDistance:p,byIndex:f,shortcut:h}}function ut(e,t,r,a,i,s,o){function d(f){const p=f.distance,N=f.index!==t.get();s.add(p),p&&(a.duration()?e.start():(e.update(),e.render(1),e.update())),N&&(r.set(t.get()),t.set(f.index),o.emit("select"))}function c(f,p){const N=i.byDistance(f,p);d(N)}function l(f,p){const N=t.clone().set(f),m=i.byIndex(N.get(),p);d(m)}return{distance:c,index:l}}function mt(e,t,r,a,i,s,o,d){const c={passive:!0,capture:!0};let l=0;function h(N){if(!d)return;function m(x){if(new Date().getTime()-l>10)return;o.emit("slideFocusStart"),e.scrollLeft=0;const v=r.findIndex(y=>y.includes(x));Ue(v)&&(i.useDuration(0),a.index(v,0),o.emit("slideFocus"))}s.add(document,"keydown",f,!1),t.forEach((x,g)=>{s.add(x,"focus",u=>{(Oe(d)||d(N,u))&&m(g)},c)})}function f(N){N.code==="Tab"&&(l=new Date().getTime())}return{init:h}}function Ne(e){let t=e;function r(){return t}function a(c){t=o(c)}function i(c){t+=o(c)}function s(c){t-=o(c)}function o(c){return Ue(c)?c:c.get()}return{get:r,set:a,add:i,subtract:s}}function fn(e,t){const r=e.scroll==="x"?o:d,a=t.style;let i=null,s=!1;function o(p){return`translate3d(${p}px,0px,0px)`}function d(p){return`translate3d(0px,${p}px,0px)`}function c(p){if(s)return;const N=Kn(e.direction(p));N!==i&&(a.transform=r(N),i=N)}function l(p){s=!p}function h(){s||(a.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:h,to:c,toggleActive:l}}function ft(e,t,r,a,i,s,o,d,c){const h=ye(i),f=ye(i).reverse(),p=u().concat(v());function N(b,j){return b.reduce((A,L)=>A-i[L],j)}function m(b,j){return b.reduce((A,L)=>N(A,j)>0?A.concat([L]):A,[])}function x(b){return s.map((j,A)=>({start:j-a[A]+.5+b,end:j+t-.5+b}))}function g(b,j,A){const L=x(j);return b.map(I=>{const M=A?0:-r,_=A?r:0,$=A?"end":"start",q=L[I][$];return{index:I,loopPoint:q,slideLocation:Ne(-1),translate:fn(e,c[I]),target:()=>d.get()>q?M:_}})}function u(){const b=o[0],j=m(f,b);return g(j,r,!1)}function v(){const b=t-o[0]-1,j=m(h,b);return g(j,-r,!0)}function y(){return p.every(({index:b})=>{const j=h.filter(A=>A!==b);return N(j,t)<=.1})}function w(){p.forEach(b=>{const{target:j,translate:A,slideLocation:L}=b,I=j();I!==L.get()&&(A.to(I),L.set(I))})}function E(){p.forEach(b=>b.translate.clear())}return{canLoop:y,clear:E,loop:w,loopPoints:p}}function pt(e,t,r){let a,i=!1;function s(c){if(!r)return;function l(h){for(const f of h)if(f.type==="childList"){c.reInit(),t.emit("slidesChanged");break}}a=new MutationObserver(h=>{i||(Oe(r)||r(c,h))&&l(h)}),a.observe(e,{childList:!0})}function o(){a&&a.disconnect(),i=!0}return{init:s,destroy:o}}function xt(e,t,r,a){const i={};let s=null,o=null,d,c=!1;function l(){d=new IntersectionObserver(m=>{c||(m.forEach(x=>{const g=t.indexOf(x.target);i[g]=x}),s=null,o=null,r.emit("slidesInView"))},{root:e.parentElement,threshold:a}),t.forEach(m=>d.observe(m))}function h(){d&&d.disconnect(),c=!0}function f(m){return be(i).reduce((x,g)=>{const u=parseInt(g),{isIntersecting:v}=i[u];return(m&&v||!m&&!v)&&x.push(u),x},[])}function p(m=!0){if(m&&s)return s;if(!m&&o)return o;const x=f(m);return m&&(s=x),m||(o=x),x}return{init:l,destroy:h,get:p}}function ht(e,t,r,a,i,s){const{measureSize:o,startEdge:d,endEdge:c}=e,l=r[0]&&i,h=m(),f=x(),p=r.map(o),N=g();function m(){if(!l)return 0;const v=r[0];return T(t[d]-v[d])}function x(){if(!l)return 0;const v=s.getComputedStyle(V(a));return parseFloat(v.getPropertyValue(`margin-${c}`))}function g(){return r.map((v,y,w)=>{const E=!y,S=Qe(w,y);return E?p[y]+h:S?p[y]+f:w[y+1][d]-v[d]}).map(T)}return{slideSizes:p,slideSizesWithGaps:N,startGap:h,endGap:f}}function gt(e,t,r,a,i,s,o,d,c){const{startEdge:l,endEdge:h,direction:f}=e,p=Ue(r);function N(u,v){return ye(u).filter(y=>y%v===0).map(y=>u.slice(y,y+v))}function m(u){return u.length?ye(u).reduce((v,y,w)=>{const E=V(v)||0,S=E===0,b=y===Se(u),j=i[l]-s[E][l],A=i[l]-s[y][h],L=!a&&S?f(o):0,I=!a&&b?f(d):0,M=T(A-I-(j+L));return w&&M>t+c&&v.push(y),b&&v.push(u.length),v},[]).map((v,y,w)=>{const E=Math.max(w[y-1]||0);return u.slice(E,v)}):[]}function x(u){return p?N(u,r):m(u)}return{groupSlides:x}}function vt(e,t,r,a,i,s,o){const{align:d,axis:c,direction:l,startIndex:h,loop:f,duration:p,dragFree:N,dragThreshold:m,inViewThreshold:x,slidesToScroll:g,skipSnaps:u,containScroll:v,watchResize:y,watchSlides:w,watchDrag:E,watchFocus:S}=s,b=2,j=Wn(),A=j.measure(t),L=r.map(j.measure),I=Xn(c,l),M=I.measureSize(A),_=et(M),$=Qn(d,M),q=!f&&!!v,ie=f||!!v,{slideSizes:oe,slideSizesWithGaps:X,startGap:Y,endGap:xe}=ht(I,A,L,r,ie,i),H=gt(I,M,g,f,A,L,Y,xe,b),{snaps:me,snapsAligned:fe}=ct(I,$,A,L,H),Z=-V(me)+V(X),{snapsContained:he,scrollContainLimit:ge}=st(M,Z,fe,v,b),F=q?he:fe,{limit:B}=ot(Z,F,f),W=mn(Se(F),h,f),R=W.clone(),P=ye(r),C=({dragHandler:pe,scrollBody:_e,scrollBounds:$e,options:{loop:Ae}})=>{Ae||$e.constrain(pe.pointerDown()),_e.seek()},k=({scrollBody:pe,translate:_e,location:$e,offsetLocation:Ae,previousLocation:gn,scrollLooper:vn,slideLooper:Nn,dragHandler:Cn,animation:yn,eventHandler:We,scrollBounds:bn,options:{loop:en}},nn)=>{const tn=pe.settled(),jn=!bn.shouldConstrain(),rn=en?tn:tn&&jn,sn=rn&&!Cn.pointerDown();sn&&yn.stop();const wn=$e.get()*nn+gn.get()*(1-nn);Ae.set(wn),en&&(vn.loop(pe.direction()),Nn.loop()),_e.to(Ae.get()),sn&&We.emit("settle"),rn||We.emit("scroll")},D=Jn(a,i,()=>C(Ve),pe=>k(Ve,pe)),O=.68,G=F[W.get()],ee=Ne(G),ce=Ne(G),ae=Ne(G),le=Ne(G),ve=tt(ee,ae,ce,le,p,O),Fe=dt(f,F,Z,B,le),Re=ut(D,W,R,ve,Fe,le,o),Xe=it(B),Ye=je(),xn=xt(t,r,o,x),{slideRegistry:Ze}=lt(q,v,F,ge,H,P),hn=mt(e,r,Ze,Re,ve,Ye,o,S),Ve={ownerDocument:a,ownerWindow:i,eventHandler:o,containerRect:A,slideRects:L,animation:D,axis:I,dragHandler:Yn(I,e,a,i,le,Zn(I,i),ee,D,Re,ve,Fe,W,o,_,N,m,u,O,E),eventStore:Ye,percentOfView:_,index:W,indexPrevious:R,limit:B,location:ee,offsetLocation:ae,previousLocation:ce,options:s,resizeHandler:nt(t,o,i,r,I,y,j),scrollBody:ve,scrollBounds:rt(B,ae,le,ve,_),scrollLooper:at(Z,B,ae,[ee,ae,ce,le]),scrollProgress:Xe,scrollSnapList:F.map(Xe.get),scrollSnaps:F,scrollTarget:Fe,scrollTo:Re,slideLooper:ft(I,M,Z,oe,X,me,F,ae,r),slideFocus:hn,slidesHandler:pt(t,o,w),slidesInView:xn,slideIndexes:P,slideRegistry:Ze,slidesToScroll:H,target:le,translate:fn(I,t)};return Ve}function Nt(){let e={},t;function r(l){t=l}function a(l){return e[l]||[]}function i(l){return a(l).forEach(h=>h(t,l)),c}function s(l,h){return e[l]=a(l).concat([h]),c}function o(l,h){return e[l]=a(l).filter(f=>f!==h),c}function d(){e={}}const c={init:r,emit:i,off:o,on:s,clear:d};return c}const Ct={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function yt(e){function t(s,o){return un(s,o||{})}function r(s){const o=s.breakpoints||{},d=be(o).filter(c=>e.matchMedia(c).matches).map(c=>o[c]).reduce((c,l)=>t(c,l),{});return t(s,d)}function a(s){return s.map(o=>be(o.breakpoints||{})).reduce((o,d)=>o.concat(d),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:r,optionsMediaQueries:a}}function bt(e){let t=[];function r(s,o){return t=o.filter(({options:d})=>e.optionsAtMedia(d).active!==!1),t.forEach(d=>d.init(s,e)),o.reduce((d,c)=>Object.assign(d,{[c.name]:c}),{})}function a(){t=t.filter(s=>s.destroy())}return{init:r,destroy:a}}function Be(e,t,r){const a=e.ownerDocument,i=a.defaultView,s=yt(i),o=bt(s),d=je(),c=Nt(),{mergeOptions:l,optionsAtMedia:h,optionsMediaQueries:f}=s,{on:p,off:N,emit:m}=c,x=I;let g=!1,u,v=l(Ct,Be.globalOptions),y=l(v),w=[],E,S,b;function j(){const{container:P,slides:C}=y;S=(qe(P)?e.querySelector(P):P)||e.children[0];const D=qe(C)?S.querySelectorAll(C):C;b=[].slice.call(D||S.children)}function A(P){const C=vt(e,S,b,a,i,P,c);if(P.loop&&!C.slideLooper.canLoop()){const k=Object.assign({},P,{loop:!1});return A(k)}return C}function L(P,C){g||(v=l(v,P),y=h(v),w=C||w,j(),u=A(y),f([v,...w.map(({options:k})=>k)]).forEach(k=>d.add(k,"change",I)),y.active&&(u.translate.to(u.location.get()),u.animation.init(),u.slidesInView.init(),u.slideFocus.init(R),u.eventHandler.init(R),u.resizeHandler.init(R),u.slidesHandler.init(R),u.options.loop&&u.slideLooper.loop(),S.offsetParent&&b.length&&u.dragHandler.init(R),E=o.init(R,w)))}function I(P,C){const k=H();M(),L(l({startIndex:k},P),C),c.emit("reInit")}function M(){u.dragHandler.destroy(),u.eventStore.clear(),u.translate.clear(),u.slideLooper.clear(),u.resizeHandler.destroy(),u.slidesHandler.destroy(),u.slidesInView.destroy(),u.animation.destroy(),o.destroy(),d.clear()}function _(){g||(g=!0,d.clear(),M(),c.emit("destroy"),c.clear())}function $(P,C,k){!y.active||g||(u.scrollBody.useBaseFriction().useDuration(C===!0?0:y.duration),u.scrollTo.index(P,k||0))}function q(P){const C=u.index.add(1).get();$(C,P,-1)}function ie(P){const C=u.index.add(-1).get();$(C,P,1)}function oe(){return u.index.add(1).get()!==H()}function X(){return u.index.add(-1).get()!==H()}function Y(){return u.scrollSnapList}function xe(){return u.scrollProgress.get(u.offsetLocation.get())}function H(){return u.index.get()}function me(){return u.indexPrevious.get()}function fe(){return u.slidesInView.get()}function Z(){return u.slidesInView.get(!1)}function he(){return E}function ge(){return u}function F(){return e}function B(){return S}function W(){return b}const R={canScrollNext:oe,canScrollPrev:X,containerNode:B,internalEngine:ge,destroy:_,off:N,on:p,emit:m,plugins:he,previousScrollSnap:me,reInit:x,rootNode:F,scrollNext:q,scrollPrev:ie,scrollProgress:xe,scrollSnapList:Y,scrollTo:$,selectedScrollSnap:H,slideNodes:W,slidesInView:fe,slidesNotInView:Z};return L(t,r),setTimeout(()=>c.emit("init"),0),R}Be.globalOptions=void 0;function Je(e={},t=[]){const r=z.useRef(e),a=z.useRef(t),[i,s]=z.useState(),[o,d]=z.useState(),c=z.useCallback(()=>{i&&i.reInit(r.current,a.current)},[i]);return z.useEffect(()=>{Ge(r.current,e)||(r.current=e,c())},[e,c]),z.useEffect(()=>{Gn(a.current,t)||(a.current=t,c())},[t,c]),z.useEffect(()=>{if(Hn()&&o){Be.globalOptions=Je.globalOptions;const l=Be(o,r.current,a.current);return s(l),()=>l.destroy()}else s(void 0)},[o,s]),[d,i]}Je.globalOptions=void 0;const pn=z.createContext(null);function Me(){const e=z.useContext(pn);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}function J({orientation:e="horizontal",opts:t,setApi:r,plugins:a,className:i,children:s,...o}){const[d,c]=Je({...t,axis:e==="horizontal"?"x":"y"},a),[l,h]=z.useState(!1),[f,p]=z.useState(!1),N=z.useCallback(u=>{u&&(h(u.canScrollPrev()),p(u.canScrollNext()))},[]),m=z.useCallback(()=>{c?.scrollPrev()},[c]),x=z.useCallback(()=>{c?.scrollNext()},[c]),g=z.useCallback(u=>{u.key==="ArrowLeft"?(u.preventDefault(),m()):u.key==="ArrowRight"&&(u.preventDefault(),x())},[m,x]);return z.useEffect(()=>{!c||!r||r(c)},[c,r]),z.useEffect(()=>{if(c)return N(c),c.on("reInit",N),c.on("select",N),()=>{c?.off("select",N)}},[c,N]),n.jsx(pn.Provider,{value:{carouselRef:d,api:c,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:x,canScrollPrev:l,canScrollNext:f},children:n.jsx("div",{onKeyDownCapture:g,className:we("relative",i),role:"region","aria-roledescription":"carousel","data-slot":"carousel",...o,children:s})})}function ne({className:e,...t}){const{carouselRef:r,orientation:a}=Me();return n.jsx("div",{ref:r,className:"overflow-hidden","data-slot":"carousel-content",children:n.jsx("div",{className:we("flex",a==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...t})})}function te({className:e,...t}){const{orientation:r}=Me();return n.jsx("div",{role:"group","aria-roledescription":"slide","data-slot":"carousel-item",className:we("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",e),...t})}function re({className:e,variant:t="outline",size:r="icon",...a}){const{orientation:i,scrollPrev:s,canScrollPrev:o}=Me();return n.jsxs(U,{"data-slot":"carousel-previous",variant:t,size:r,className:we("absolute size-8 rounded-full",i==="horizontal"?"top-1/2 -left-12 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!o,onClick:s,...a,children:[n.jsx($n,{}),n.jsx("span",{className:"sr-only",children:"Previous slide"})]})}function se({className:e,variant:t="outline",size:r="icon",...a}){const{orientation:i,scrollNext:s,canScrollNext:o}=Me();return n.jsxs(U,{"data-slot":"carousel-next",variant:t,size:r,className:we("absolute size-8 rounded-full",i==="horizontal"?"top-1/2 -right-12 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!o,onClick:s,...a,children:[n.jsx(An,{}),n.jsx("span",{className:"sr-only",children:"Next slide"})]})}J.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{opts:{required:!1,tsType:{name:"Parameters[0]",raw:"UseCarouselParameters[0]"},description:""},plugins:{required:!1,tsType:{name:"Parameters[1]",raw:"UseCarouselParameters[1]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},setApi:{required:!1,tsType:{name:"signature",type:"function",raw:"(api: CarouselApi) => void",signature:{arguments:[{type:{name:"UseEmblaCarouselType[1]",raw:"UseEmblaCarouselType[1]"},name:"api"}],return:{name:"void"}}},description:""}}};ne.__docgenInfo={description:"",methods:[],displayName:"CarouselContent"};te.__docgenInfo={description:"",methods:[],displayName:"CarouselItem"};re.__docgenInfo={description:"",methods:[],displayName:"CarouselPrevious",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};se.__docgenInfo={description:"",methods:[],displayName:"CarouselNext",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};const Gt={title:"UI/Contents-active/Carousel",component:J,parameters:{layout:"centered",docs:{description:{component:`
사용자가 여러 콘텐츠를 슬라이드로 탐색할 수 있는 Carousel 컴포넌트입니다. 이미지 갤러리, 제품 쇼케이스, 콘텐츠 피드 등에 사용됩니다.

## 주요 기능
- **터치/스와이프 지원**: 모바일 환경에서 터치로 슬라이드 제어
- **키보드 네비게이션**: 좌우 화살표 키로 슬라이드 이동
- **자동 재생**: 설정에 따른 자동 슬라이드 전환
- **반응형**: 화면 크기에 따른 슬라이드 개수 조정
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 지원
- **커스터마이징**: 다양한 레이아웃과 스타일 옵션
- **플러그인**: Embla Carousel 기반의 확장 가능한 아키텍처

## 구성 요소
- **Carousel**: 전체 캐러셀 컨테이너
- **CarouselContent**: 슬라이드 콘텐츠 래퍼
- **CarouselItem**: 개별 슬라이드 아이템
- **CarouselPrevious**: 이전 버튼
- **CarouselNext**: 다음 버튼

## 사용법
\`\`\`tsx
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"

// 기본 사용법
<Carousel>
  <CarouselContent>
    <CarouselItem>슬라이드 1</CarouselItem>
    <CarouselItem>슬라이드 2</CarouselItem>
    <CarouselItem>슬라이드 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

// 옵션 설정
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  orientation="vertical"
>
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        {item}
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

// API 사용
const [api, setApi] = useState<CarouselApi>()
<Carousel setApi={setApi}>
  {/* content */}
</Carousel>
\`\`\`

## Props
- \`orientation\`: 방향 ("horizontal" | "vertical")
- \`opts\`: Embla Carousel 옵션
- \`plugins\`: Embla 플러그인 배열
- \`setApi\`: API 인스턴스 콜백

## 옵션 (opts)
- \`align\`: 정렬 ("start" | "center" | "end")
- \`loop\`: 무한 루프 여부
- \`slidesToScroll\`: 한 번에 스크롤할 슬라이드 수
- \`containScroll\`: 스크롤 제한 설정
- \`dragFree\`: 자유 드래그 여부
- \`direction\`: 텍스트 방향 ("ltr" | "rtl")

## 접근성
- **ARIA 역할**: \`carousel\`, \`slide\` 역할 제공
- **키보드 지원**: 좌우 화살표로 네비게이션
- **스크린 리더**: 슬라이드 개수와 현재 위치 안내
- **포커스 관리**: 활성 슬라이드 포커스 추적
- **라이브 영역**: 상태 변경 시 스크린 리더 안내

## 사용 사례
- **제품 갤러리**: 제품 이미지 슬라이드쇼
- **배너/히어로**: 메인 페이지 프로모션 배너
- **포트폴리오**: 작품 사례 슬라이드
- **후기/리뷰**: 고객 후기 순환 표시
- **뉴스 피드**: 최신 뉴스 항목 슬라이드
- **카드 레이아웃**: 카드 형태의 콘텐츠 네비게이션

## 반응형 설정
- **basis 클래스**: \`md:basis-1/2 lg:basis-1/3\`로 화면별 슬라이드 수 조정
- **그리드 시스템**: Tailwind CSS의 그리드 시스템과 연동
- **브레이크포인트**: 다양한 화면 크기별 최적화

## 모범 사례
- 각 슬라이드에 의미있는 콘텐츠 제공
- 터치 디바이스에서 스와이프 가능 표시
- 자동 재생 시 일시정지 옵션 제공
- 슬라이드 표시기(dots) 제공으로 위치 파악 지원
- 로딩 상태 표시로 사용자 경험 향상
- 키보드 사용자를 위한 명확한 네비게이션 제공
        `}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"캐러셀 방향"}}},Ie={render:()=>n.jsx("div",{className:"w-full max-w-xs",children:n.jsxs(J,{children:[n.jsx(ne,{children:Array.from({length:5}).map((e,t)=>n.jsx(te,{children:n.jsx("div",{className:"p-1",children:n.jsx(K,{children:n.jsx(Q,{className:"flex aspect-square items-center justify-center p-6",children:n.jsx("span",{className:"text-4xl font-semibold",children:t+1})})})})},t))}),n.jsx(re,{}),n.jsx(se,{})]})}),parameters:{docs:{description:{story:"기본 Carousel 컴포넌트입니다. 숫자 카드로 구성된 간단한 슬라이드를 보여줍니다."}}}},ke={render:()=>n.jsx("div",{className:"w-full max-w-4xl",children:n.jsxs(J,{opts:{align:"start",loop:!0},children:[n.jsx(ne,{children:Array.from({length:8}).map((e,t)=>n.jsx(te,{className:"md:basis-1/2 lg:basis-1/3",children:n.jsx("div",{className:"p-1",children:n.jsx(K,{children:n.jsx(Q,{className:"flex aspect-square items-center justify-center p-6",children:n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-2xl font-semibold mb-2",children:["카드 ",t+1]}),n.jsx("div",{className:"text-sm text-muted-foreground",children:"반응형 그리드 레이아웃"})]})})})})},t))}),n.jsx(re,{}),n.jsx(se,{})]})}),parameters:{docs:{description:{story:"반응형 그리드 레이아웃의 Carousel입니다. 화면 크기에 따라 표시되는 슬라이드 개수가 변경됩니다."}}}},Ee={render:()=>{const e=[{id:1,name:"프리미엄 헤드폰",price:"299,000원",rating:4.8,reviews:124,badge:"베스트셀러",image:"🎧"},{id:2,name:"무선 키보드",price:"159,000원",rating:4.6,reviews:89,badge:"신상품",image:"⌨️"},{id:3,name:"게이밍 마우스",price:"89,000원",rating:4.9,reviews:256,badge:"할인중",image:"🖱️"},{id:4,name:"USB-C 허브",price:"79,000원",rating:4.5,reviews:67,badge:"추천",image:"🔌"},{id:5,name:"웹캠 HD",price:"129,000원",rating:4.7,reviews:143,badge:"인기",image:"📹"}];return n.jsxs("div",{className:"w-full max-w-4xl",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("h2",{className:"text-2xl font-bold mb-2",children:"추천 제품"}),n.jsx("p",{className:"text-muted-foreground",children:"고객 평점이 높은 인기 제품들을 만나보세요"})]}),n.jsxs(J,{opts:{align:"start",loop:!0},children:[n.jsx(ne,{children:e.map(t=>n.jsx(te,{className:"md:basis-1/2 lg:basis-1/3",children:n.jsx("div",{className:"p-1",children:n.jsx(K,{className:"group hover:shadow-lg transition-shadow",children:n.jsxs(Q,{className:"p-4",children:[n.jsxs("div",{className:"aspect-square bg-muted rounded-lg flex items-center justify-center mb-4 relative overflow-hidden",children:[n.jsx("div",{className:"text-6xl",children:t.image}),n.jsx(En,{variant:t.badge==="할인중"?"destructive":"secondary",className:"absolute top-2 left-2",children:t.badge}),n.jsx("div",{className:"absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",children:n.jsx(U,{size:"icon",variant:"secondary",className:"h-8 w-8",children:n.jsx(Pn,{className:"h-4 w-4"})})})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("h3",{className:"font-semibold truncate",children:t.name}),n.jsxs("div",{className:"flex items-center gap-1",children:[Array.from({length:5}).map((r,a)=>n.jsx(dn,{className:`h-4 w-4 ${a<Math.floor(t.rating)?"fill-yellow-400 text-yellow-400":"text-muted-foreground"}`},a)),n.jsxs("span",{className:"text-sm text-muted-foreground ml-1",children:["(",t.reviews,")"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-lg font-bold",children:t.price}),n.jsxs(U,{size:"sm",className:"gap-1",children:[n.jsx(Tn,{className:"h-4 w-4"}),"담기"]})]})]})]})})})},t.id))}),n.jsx(re,{}),n.jsx(se,{})]})]})},parameters:{docs:{description:{story:"제품 갤러리 Carousel입니다. 제품 정보, 평점, 가격 등을 포함한 완전한 제품 카드를 보여줍니다."}}}},Pe={render:()=>n.jsx("div",{className:"w-full max-w-xs",children:n.jsxs(J,{orientation:"vertical",opts:{align:"start",loop:!0},className:"w-full max-w-xs",children:[n.jsx(ne,{className:"h-[400px]",children:Array.from({length:6}).map((e,t)=>n.jsx(te,{className:"pt-1 md:basis-1/2",children:n.jsx("div",{className:"p-1",children:n.jsx(K,{children:n.jsx(Q,{className:"flex items-center justify-center p-6",children:n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-2xl font-semibold mb-2",children:["세로 슬라이드 ",t+1]}),n.jsx("div",{className:"text-sm text-muted-foreground",children:"수직 방향 스크롤"})]})})})})},t))}),n.jsx(re,{}),n.jsx(se,{})]})}),parameters:{docs:{description:{story:'세로 방향 Carousel입니다. orientation="vertical"로 수직 스크롤이 가능합니다.'}}}},Te={render:()=>{const e=[{id:1,content:"이 서비스를 사용한 후 업무 효율성이 200% 향상되었습니다. 정말 혁신적인 솔루션이에요!",author:"김미영",position:"마케팅 디렉터",company:"테크스타트업",avatar:"KM",rating:5},{id:2,content:"사용하기 쉽고 직관적인 인터페이스가 인상적입니다. 팀 전체가 만족하고 있어요.",author:"박준호",position:"프로덕트 매니저",company:"이노베이션 랩",avatar:"PJ",rating:5},{id:3,content:"고객 지원팀의 응답이 빠르고 친절합니다. 문제가 생겨도 금방 해결되어 안심이 됩니다.",author:"이서연",position:"운영팀장",company:"글로벌 커머스",avatar:"LS",rating:4},{id:4,content:"가격 대비 성능이 뛰어나고, 필요한 기능들이 모두 포함되어 있어 매우 만족합니다.",author:"최동욱",position:"CTO",company:"스마트솔루션",avatar:"CD",rating:5}];return n.jsxs("div",{className:"w-full max-w-4xl",children:[n.jsxs("div",{className:"mb-8 text-center",children:[n.jsx("h2",{className:"text-3xl font-bold mb-4",children:"고객 후기"}),n.jsx("p",{className:"text-muted-foreground",children:"우리 서비스를 사용하는 고객들의 생생한 후기를 확인해보세요"})]}),n.jsxs(J,{opts:{align:"start",loop:!0},children:[n.jsx(ne,{children:e.map(t=>n.jsx(te,{className:"md:basis-1/2",children:n.jsx("div",{className:"p-1",children:n.jsx(K,{className:"h-full",children:n.jsx(Q,{className:"p-6",children:n.jsxs("div",{className:"flex flex-col h-full",children:[n.jsx(Ln,{className:"h-8 w-8 text-primary mb-4"}),n.jsxs("blockquote",{className:"text-lg leading-relaxed mb-6 flex-1",children:['"',t.content,'"']}),n.jsx("div",{className:"flex items-center gap-1 mb-4",children:Array.from({length:5}).map((r,a)=>n.jsx(dn,{className:`h-4 w-4 ${a<t.rating?"fill-yellow-400 text-yellow-400":"text-muted-foreground"}`},a))}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold",children:t.avatar}),n.jsxs("div",{children:[n.jsx("div",{className:"font-semibold",children:t.author}),n.jsxs("div",{className:"text-sm text-muted-foreground",children:[t.position,", ",t.company]})]})]})]})})})})},t.id))}),n.jsx(re,{}),n.jsx(se,{})]})]})},parameters:{docs:{description:{story:"고객 후기 Carousel입니다. 인용문, 평점, 작성자 정보를 포함한 완전한 후기 카드를 보여줍니다."}}}},Le={render:()=>{const e=[{id:1,title:"산악 풍경",description:"아름다운 산맥과 구름이 어우러진 풍경",photographer:"김자연",date:"2024.03.15",icon:"🏔️"},{id:2,title:"도시 야경",description:"빛나는 도시의 밤 풍경",photographer:"박도시",date:"2024.03.10",icon:"🌃"},{id:3,title:"바다 일출",description:"수평선 너머로 떠오르는 태양",photographer:"이바다",date:"2024.03.08",icon:"🌅"},{id:4,title:"숲속 길",description:"초록빛 나무들 사이의 오솔길",photographer:"최숲",date:"2024.03.05",icon:"🌲"},{id:5,title:"꽃밭 풍경",description:"알록달록한 꽃들이 만발한 들판",photographer:"정꽃",date:"2024.03.01",icon:"🌸"}];return n.jsxs("div",{className:"w-full max-w-5xl",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("h2",{className:"text-2xl font-bold mb-2",children:"포토 갤러리"}),n.jsx("p",{className:"text-muted-foreground",children:"전 세계 사진작가들의 아름다운 작품을 감상해보세요"})]}),n.jsxs(J,{opts:{align:"center",loop:!0},children:[n.jsx(ne,{children:e.map(t=>n.jsx(te,{className:"lg:basis-3/4",children:n.jsx("div",{className:"p-1",children:n.jsx(K,{className:"overflow-hidden group",children:n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden",children:[n.jsx("div",{className:"text-8xl",children:t.icon}),n.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",children:[n.jsxs(U,{size:"sm",variant:"secondary",className:"gap-1",children:[n.jsx(Dn,{className:"h-4 w-4"}),"보기"]}),n.jsxs(U,{size:"sm",variant:"secondary",className:"gap-1",children:[n.jsx(zn,{className:"h-4 w-4"}),"다운로드"]}),n.jsxs(U,{size:"sm",variant:"secondary",className:"gap-1",children:[n.jsx(Bn,{className:"h-4 w-4"}),"공유"]})]}),n.jsx(U,{size:"icon",variant:"secondary",className:"absolute top-4 right-4 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity",children:n.jsx(On,{className:"h-4 w-4"})})]}),n.jsx(Q,{className:"p-4",children:n.jsxs("div",{className:"space-y-2",children:[n.jsx("h3",{className:"text-lg font-semibold",children:t.title}),n.jsx("p",{className:"text-muted-foreground text-sm",children:t.description}),n.jsxs("div",{className:"flex items-center justify-between pt-2",children:[n.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[n.jsx(Mn,{className:"h-4 w-4"}),n.jsx("span",{children:t.photographer})]}),n.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[n.jsx(Fn,{className:"h-4 w-4"}),n.jsx("span",{children:t.date})]})]})]})})]})})})},t.id))}),n.jsx(re,{}),n.jsx(se,{})]})]})},parameters:{docs:{description:{story:"이미지 갤러리 Carousel입니다. 이미지 미리보기, 메타데이터, 상호작용 버튼을 포함합니다."}}}},De={render:()=>{const[e,t]=de.useState(),[r,a]=de.useState(0),[i,s]=de.useState(0),[o,d]=de.useState(!1);de.useEffect(()=>{e&&(s(e.scrollSnapList().length),a(e.selectedScrollSnap()+1),e.on("select",()=>{a(e.selectedScrollSnap()+1)}))},[e]),de.useEffect(()=>{if(!e||!o)return;const l=setInterval(()=>{e.canScrollNext()?e.scrollNext():e.scrollTo(0)},3e3);return()=>clearInterval(l)},[e,o]);const c=[{title:"첫 번째 슬라이드",content:"자동 재생과 수동 제어가 가능합니다"},{title:"두 번째 슬라이드",content:"현재 슬라이드 위치를 확인할 수 있습니다"},{title:"세 번째 슬라이드",content:"이전/다음 버튼으로 직접 제어할 수 있습니다"},{title:"네 번째 슬라이드",content:"페이지 인디케이터로 현재 위치를 알 수 있습니다"},{title:"다섯 번째 슬라이드",content:"재생/일시정지 버튼으로 자동 재생을 제어합니다"}];return n.jsx("div",{className:"w-full max-w-2xl",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs(J,{setApi:t,children:[n.jsx(ne,{children:c.map((l,h)=>n.jsx(te,{children:n.jsx(K,{children:n.jsx(Q,{className:"flex aspect-video items-center justify-center p-6",children:n.jsxs("div",{className:"text-center space-y-2",children:[n.jsx("h3",{className:"text-2xl font-bold",children:l.title}),n.jsx("p",{className:"text-muted-foreground",children:l.content})]})})})},h))}),n.jsx(re,{}),n.jsx(se,{})]}),n.jsx(K,{children:n.jsx(Q,{className:"p-4",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-sm text-muted-foreground",children:["슬라이드 ",r," / ",i]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:i}).map((l,h)=>n.jsx("button",{className:`w-2 h-2 rounded-full transition-colors ${h===r-1?"bg-primary":"bg-muted"}`,onClick:()=>e?.scrollTo(h)},h))}),n.jsx("div",{className:"flex items-center gap-2",children:n.jsx(U,{size:"sm",variant:"outline",onClick:()=>d(!o),className:"gap-1",children:o?n.jsxs(n.Fragment,{children:[n.jsx(Rn,{className:"h-4 w-4"}),"일시정지"]}):n.jsxs(n.Fragment,{children:[n.jsx(Vn,{className:"h-4 w-4"}),"재생"]})})})]})})})]})})},parameters:{docs:{description:{story:"상호작용 컨트롤을 포함한 Carousel입니다. 자동 재생, 페이지 인디케이터, 슬라이드 카운터 등의 기능을 보여줍니다."}}}},ze={render:()=>{const[e,t]=de.useState([]),r=i=>{t(s=>[...s,i]),setTimeout(()=>{t(s=>s.slice(1))},3e3)},a=[{title:"키보드 네비게이션",description:"좌우 화살표 키로 슬라이드 간 이동이 가능합니다.",demo:"← → 키를 사용해보세요"},{title:"스크린 리더 지원",description:"각 슬라이드의 역할과 내용을 명확히 안내합니다.",demo:"aria-label과 role 속성 적용"},{title:"포커스 관리",description:"활성 슬라이드로 포커스가 자동 이동됩니다.",demo:"Tab 키로 포커스 이동 확인"},{title:"상태 안내",description:"현재 슬라이드 위치와 전체 개수를 안내합니다.",demo:"스크린 리더가 위치 정보 읽기"}];return n.jsxs("div",{className:"space-y-6 w-full max-w-3xl",children:[n.jsxs("div",{className:"space-y-2",children:[n.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Carousel 컴포넌트의 접근성 기능을 확인해보세요:"}),n.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[n.jsxs("li",{children:[n.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"좌우 화살표"}),"로 슬라이드 네비게이션"]}),n.jsxs("li",{children:[n.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 컨트롤 버튼 포커스"]}),n.jsxs("li",{children:[n.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter/Space"}),"로 버튼 활성화"]}),n.jsx("li",{children:"스크린 리더가 슬라이드 정보와 상태 안내"}),n.jsx("li",{children:"ARIA 라이브 영역으로 상태 변경 알림"}),n.jsx("li",{children:"고대비 모드와 큰 글씨 지원"})]})]}),n.jsx("div",{"aria-live":"polite","aria-label":"캐러셀 상태 안내",className:"sr-only",children:e.map((i,s)=>n.jsx("div",{children:i},s))}),n.jsxs(J,{opts:{align:"start",loop:!0},onKeyDown:i=>{(i.key==="ArrowLeft"||i.key==="ArrowRight")&&r(`${i.key==="ArrowLeft"?"이전":"다음"} 슬라이드로 이동`)},children:[n.jsx(ne,{children:a.map((i,s)=>n.jsx(te,{className:"md:basis-1/2",role:"group","aria-roledescription":"slide","aria-label":`슬라이드 ${s+1}, ${i.title}`,children:n.jsx("div",{className:"p-1",children:n.jsxs(K,{className:"h-full",children:[n.jsx(In,{children:n.jsxs(kn,{className:"flex items-center gap-2",children:[n.jsx("div",{className:"w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold",children:s+1}),i.title]})}),n.jsxs(Q,{className:"space-y-4",children:[n.jsx("p",{className:"text-muted-foreground",children:i.description}),n.jsxs("div",{className:"p-3 bg-muted rounded-lg",children:[n.jsx("div",{className:"text-sm font-medium mb-1",children:"시도해보기:"}),n.jsx("div",{className:"text-sm text-muted-foreground",children:i.demo})]}),n.jsx(U,{variant:"outline",size:"sm",onClick:()=>r(`${i.title} 기능 테스트됨`),"aria-describedby":`feature-${s}-desc`,children:"기능 테스트"}),n.jsxs("div",{id:`feature-${s}-desc`,className:"sr-only",children:[i.title," 접근성 기능을 테스트합니다"]})]})]})})},s))}),n.jsx(re,{"aria-label":"이전 슬라이드로 이동",onClick:()=>r("이전 슬라이드로 이동했습니다")}),n.jsx(se,{"aria-label":"다음 슬라이드로 이동",onClick:()=>r("다음 슬라이드로 이동했습니다")})]}),n.jsx(K,{children:n.jsx(Q,{className:"p-4",children:n.jsxs("div",{className:"text-sm",children:[n.jsx("div",{className:"font-medium mb-2",children:"접근성 상태:"}),n.jsxs("div",{className:"space-y-1 text-muted-foreground",children:[n.jsx("div",{children:"• 키보드 네비게이션: 활성화됨"}),n.jsx("div",{children:"• 스크린 리더 지원: 활성화됨"}),n.jsx("div",{children:"• ARIA 라벨: 적용됨"}),n.jsx("div",{children:"• 포커스 표시: 활성화됨"})]}),e.length>0&&n.jsxs("div",{className:"mt-4 p-2 bg-primary/10 rounded border-l-2 border-primary",children:[n.jsx("div",{className:"text-xs font-medium",children:"최근 안내:"}),n.jsx("div",{className:"text-xs",children:e[e.length-1]})]})]})})})]})},parameters:{docs:{description:{story:"Carousel의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."}}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xs">\r
      <Carousel>\r
        <CarouselContent>\r
          {Array.from({
          length: 5
        }).map((_, index) => <CarouselItem key={index}>\r
              <div className="p-1">\r
                <Card>\r
                  <CardContent className="flex aspect-square items-center justify-center p-6">\r
                    <span className="text-4xl font-semibold">{index + 1}</span>\r
                  </CardContent>\r
                </Card>\r
              </div>\r
            </CarouselItem>)}\r
        </CarouselContent>\r
        <CarouselPrevious />\r
        <CarouselNext />\r
      </Carousel>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "기본 Carousel 컴포넌트입니다. 숫자 카드로 구성된 간단한 슬라이드를 보여줍니다."
      }
    }
  }
}`,...Ie.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">\r
      <Carousel opts={{
      align: "start",
      loop: true
    }}>\r
        <CarouselContent>\r
          {Array.from({
          length: 8
        }).map((_, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">\r
              <div className="p-1">\r
                <Card>\r
                  <CardContent className="flex aspect-square items-center justify-center p-6">\r
                    <div className="text-center">\r
                      <div className="text-2xl font-semibold mb-2">카드 {index + 1}</div>\r
                      <div className="text-sm text-muted-foreground">\r
                        반응형 그리드 레이아웃\r
                      </div>\r
                    </div>\r
                  </CardContent>\r
                </Card>\r
              </div>\r
            </CarouselItem>)}\r
        </CarouselContent>\r
        <CarouselPrevious />\r
        <CarouselNext />\r
      </Carousel>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "반응형 그리드 레이아웃의 Carousel입니다. 화면 크기에 따라 표시되는 슬라이드 개수가 변경됩니다."
      }
    }
  }
}`,...ke.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  render: () => {
    const products = [{
      id: 1,
      name: "프리미엄 헤드폰",
      price: "299,000원",
      rating: 4.8,
      reviews: 124,
      badge: "베스트셀러",
      image: "🎧"
    }, {
      id: 2,
      name: "무선 키보드",
      price: "159,000원",
      rating: 4.6,
      reviews: 89,
      badge: "신상품",
      image: "⌨️"
    }, {
      id: 3,
      name: "게이밍 마우스",
      price: "89,000원",
      rating: 4.9,
      reviews: 256,
      badge: "할인중",
      image: "🖱️"
    }, {
      id: 4,
      name: "USB-C 허브",
      price: "79,000원",
      rating: 4.5,
      reviews: 67,
      badge: "추천",
      image: "🔌"
    }, {
      id: 5,
      name: "웹캠 HD",
      price: "129,000원",
      rating: 4.7,
      reviews: 143,
      badge: "인기",
      image: "📹"
    }];
    return <div className="w-full max-w-4xl">\r
        <div className="mb-6">\r
          <h2 className="text-2xl font-bold mb-2">추천 제품</h2>\r
          <p className="text-muted-foreground">고객 평점이 높은 인기 제품들을 만나보세요</p>\r
        </div>\r
        \r
        <Carousel opts={{
        align: "start",
        loop: true
      }}>\r
          <CarouselContent>\r
            {products.map(product => <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">\r
                <div className="p-1">\r
                  <Card className="group hover:shadow-lg transition-shadow">\r
                    <CardContent className="p-4">\r
                      {/* 제품 이미지 */}\r
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">\r
                        <div className="text-6xl">{product.image}</div>\r
                        <Badge variant={product.badge === "할인중" ? "destructive" : "secondary"} className="absolute top-2 left-2">\r
                          {product.badge}\r
                        </Badge>\r
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">\r
                          <Button size="icon" variant="secondary" className="h-8 w-8">\r
                            <Heart className="h-4 w-4" />\r
                          </Button>\r
                        </div>\r
                      </div>\r
                      \r
                      {/* 제품 정보 */}\r
                      <div className="space-y-2">\r
                        <h3 className="font-semibold truncate">{product.name}</h3>\r
                        <div className="flex items-center gap-1">\r
                          {Array.from({
                        length: 5
                      }).map((_, i) => <Star key={i} className={\`h-4 w-4 \${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}\`} />)}\r
                          <span className="text-sm text-muted-foreground ml-1">\r
                            ({product.reviews})\r
                          </span>\r
                        </div>\r
                        <div className="flex items-center justify-between">\r
                          <span className="text-lg font-bold">{product.price}</span>\r
                          <Button size="sm" className="gap-1">\r
                            <ShoppingCart className="h-4 w-4" />\r
                            담기\r
                          </Button>\r
                        </div>\r
                      </div>\r
                    </CardContent>\r
                  </Card>\r
                </div>\r
              </CarouselItem>)}\r
          </CarouselContent>\r
          <CarouselPrevious />\r
          <CarouselNext />\r
        </Carousel>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "제품 갤러리 Carousel입니다. 제품 정보, 평점, 가격 등을 포함한 완전한 제품 카드를 보여줍니다."
      }
    }
  }
}`,...Ee.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xs">\r
      <Carousel orientation="vertical" opts={{
      align: "start",
      loop: true
    }} className="w-full max-w-xs">\r
        <CarouselContent className="h-[400px]">\r
          {Array.from({
          length: 6
        }).map((_, index) => <CarouselItem key={index} className="pt-1 md:basis-1/2">\r
              <div className="p-1">\r
                <Card>\r
                  <CardContent className="flex items-center justify-center p-6">\r
                    <div className="text-center">\r
                      <div className="text-2xl font-semibold mb-2">\r
                        세로 슬라이드 {index + 1}\r
                      </div>\r
                      <div className="text-sm text-muted-foreground">\r
                        수직 방향 스크롤\r
                      </div>\r
                    </div>\r
                  </CardContent>\r
                </Card>\r
              </div>\r
            </CarouselItem>)}\r
        </CarouselContent>\r
        <CarouselPrevious />\r
        <CarouselNext />\r
      </Carousel>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "세로 방향 Carousel입니다. orientation=\\"vertical\\"로 수직 스크롤이 가능합니다."
      }
    }
  }
}`,...Pe.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  render: () => {
    const testimonials = [{
      id: 1,
      content: "이 서비스를 사용한 후 업무 효율성이 200% 향상되었습니다. 정말 혁신적인 솔루션이에요!",
      author: "김미영",
      position: "마케팅 디렉터",
      company: "테크스타트업",
      avatar: "KM",
      rating: 5
    }, {
      id: 2,
      content: "사용하기 쉽고 직관적인 인터페이스가 인상적입니다. 팀 전체가 만족하고 있어요.",
      author: "박준호",
      position: "프로덕트 매니저",
      company: "이노베이션 랩",
      avatar: "PJ",
      rating: 5
    }, {
      id: 3,
      content: "고객 지원팀의 응답이 빠르고 친절합니다. 문제가 생겨도 금방 해결되어 안심이 됩니다.",
      author: "이서연",
      position: "운영팀장",
      company: "글로벌 커머스",
      avatar: "LS",
      rating: 4
    }, {
      id: 4,
      content: "가격 대비 성능이 뛰어나고, 필요한 기능들이 모두 포함되어 있어 매우 만족합니다.",
      author: "최동욱",
      position: "CTO",
      company: "스마트솔루션",
      avatar: "CD",
      rating: 5
    }];
    return <div className="w-full max-w-4xl">\r
        <div className="mb-8 text-center">\r
          <h2 className="text-3xl font-bold mb-4">고객 후기</h2>\r
          <p className="text-muted-foreground">우리 서비스를 사용하는 고객들의 생생한 후기를 확인해보세요</p>\r
        </div>\r
\r
        <Carousel opts={{
        align: "start",
        loop: true
      }}>\r
          <CarouselContent>\r
            {testimonials.map(testimonial => <CarouselItem key={testimonial.id} className="md:basis-1/2">\r
                <div className="p-1">\r
                  <Card className="h-full">\r
                    <CardContent className="p-6">\r
                      <div className="flex flex-col h-full">\r
                        {/* 인용문 아이콘 */}\r
                        <Quote className="h-8 w-8 text-primary mb-4" />\r
                        \r
                        {/* 후기 내용 */}\r
                        <blockquote className="text-lg leading-relaxed mb-6 flex-1">\r
                          "{testimonial.content}"\r
                        </blockquote>\r
                        \r
                        {/* 평점 */}\r
                        <div className="flex items-center gap-1 mb-4">\r
                          {Array.from({
                        length: 5
                      }).map((_, i) => <Star key={i} className={\`h-4 w-4 \${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}\`} />)}\r
                        </div>\r
                        \r
                        {/* 작성자 정보 */}\r
                        <div className="flex items-center gap-3">\r
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">\r
                            {testimonial.avatar}\r
                          </div>\r
                          <div>\r
                            <div className="font-semibold">{testimonial.author}</div>\r
                            <div className="text-sm text-muted-foreground">\r
                              {testimonial.position}, {testimonial.company}\r
                            </div>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </CardContent>\r
                  </Card>\r
                </div>\r
              </CarouselItem>)}\r
          </CarouselContent>\r
          <CarouselPrevious />\r
          <CarouselNext />\r
        </Carousel>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "고객 후기 Carousel입니다. 인용문, 평점, 작성자 정보를 포함한 완전한 후기 카드를 보여줍니다."
      }
    }
  }
}`,...Te.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
  render: () => {
    const images = [{
      id: 1,
      title: "산악 풍경",
      description: "아름다운 산맥과 구름이 어우러진 풍경",
      photographer: "김자연",
      date: "2024.03.15",
      icon: "🏔️"
    }, {
      id: 2,
      title: "도시 야경",
      description: "빛나는 도시의 밤 풍경",
      photographer: "박도시",
      date: "2024.03.10",
      icon: "🌃"
    }, {
      id: 3,
      title: "바다 일출",
      description: "수평선 너머로 떠오르는 태양",
      photographer: "이바다",
      date: "2024.03.08",
      icon: "🌅"
    }, {
      id: 4,
      title: "숲속 길",
      description: "초록빛 나무들 사이의 오솔길",
      photographer: "최숲",
      date: "2024.03.05",
      icon: "🌲"
    }, {
      id: 5,
      title: "꽃밭 풍경",
      description: "알록달록한 꽃들이 만발한 들판",
      photographer: "정꽃",
      date: "2024.03.01",
      icon: "🌸"
    }];
    return <div className="w-full max-w-5xl">\r
        <div className="mb-6">\r
          <h2 className="text-2xl font-bold mb-2">포토 갤러리</h2>\r
          <p className="text-muted-foreground">전 세계 사진작가들의 아름다운 작품을 감상해보세요</p>\r
        </div>\r
\r
        <Carousel opts={{
        align: "center",
        loop: true
      }}>\r
          <CarouselContent>\r
            {images.map(image => <CarouselItem key={image.id} className="lg:basis-3/4">\r
                <div className="p-1">\r
                  <Card className="overflow-hidden group">\r
                    <div className="relative">\r
                      {/* 이미지 영역 */}\r
                      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">\r
                        <div className="text-8xl">{image.icon}</div>\r
                        \r
                        {/* 호버 오버레이 */}\r
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">\r
                          <Button size="sm" variant="secondary" className="gap-1">\r
                            <Eye className="h-4 w-4" />\r
                            보기\r
                          </Button>\r
                          <Button size="sm" variant="secondary" className="gap-1">\r
                            <Download className="h-4 w-4" />\r
                            다운로드\r
                          </Button>\r
                          <Button size="sm" variant="secondary" className="gap-1">\r
                            <Share className="h-4 w-4" />\r
                            공유\r
                          </Button>\r
                        </div>\r
                        \r
                        {/* 북마크 버튼 */}\r
                        <Button size="icon" variant="secondary" className="absolute top-4 right-4 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">\r
                          <Bookmark className="h-4 w-4" />\r
                        </Button>\r
                      </div>\r
                      \r
                      {/* 이미지 정보 */}\r
                      <CardContent className="p-4">\r
                        <div className="space-y-2">\r
                          <h3 className="text-lg font-semibold">{image.title}</h3>\r
                          <p className="text-muted-foreground text-sm">{image.description}</p>\r
                          \r
                          <div className="flex items-center justify-between pt-2">\r
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">\r
                              <Camera className="h-4 w-4" />\r
                              <span>{image.photographer}</span>\r
                            </div>\r
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">\r
                              <Calendar className="h-4 w-4" />\r
                              <span>{image.date}</span>\r
                            </div>\r
                          </div>\r
                        </div>\r
                      </CardContent>\r
                    </div>\r
                  </Card>\r
                </div>\r
              </CarouselItem>)}\r
          </CarouselContent>\r
          <CarouselPrevious />\r
          <CarouselNext />\r
        </Carousel>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "이미지 갤러리 Carousel입니다. 이미지 미리보기, 메타데이터, 상호작용 버튼을 포함합니다."
      }
    }
  }
}`,...Le.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(false);
    React.useEffect(() => {
      if (!api) return;
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);
    React.useEffect(() => {
      if (!api || !isPlaying) return;
      const interval = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 3000);
      return () => clearInterval(interval);
    }, [api, isPlaying]);
    const slides = [{
      title: "첫 번째 슬라이드",
      content: "자동 재생과 수동 제어가 가능합니다"
    }, {
      title: "두 번째 슬라이드",
      content: "현재 슬라이드 위치를 확인할 수 있습니다"
    }, {
      title: "세 번째 슬라이드",
      content: "이전/다음 버튼으로 직접 제어할 수 있습니다"
    }, {
      title: "네 번째 슬라이드",
      content: "페이지 인디케이터로 현재 위치를 알 수 있습니다"
    }, {
      title: "다섯 번째 슬라이드",
      content: "재생/일시정지 버튼으로 자동 재생을 제어합니다"
    }];
    return <div className="w-full max-w-2xl">\r
        <div className="space-y-4">\r
          {/* 캐러셀 */}\r
          <Carousel setApi={setApi}>\r
            <CarouselContent>\r
              {slides.map((slide, index) => <CarouselItem key={index}>\r
                  <Card>\r
                    <CardContent className="flex aspect-video items-center justify-center p-6">\r
                      <div className="text-center space-y-2">\r
                        <h3 className="text-2xl font-bold">{slide.title}</h3>\r
                        <p className="text-muted-foreground">{slide.content}</p>\r
                      </div>\r
                    </CardContent>\r
                  </Card>\r
                </CarouselItem>)}\r
            </CarouselContent>\r
            <CarouselPrevious />\r
            <CarouselNext />\r
          </Carousel>\r
\r
          {/* 컨트롤 패널 */}\r
          <Card>\r
            <CardContent className="p-4">\r
              <div className="flex items-center justify-between">\r
                <div className="text-sm text-muted-foreground">\r
                  슬라이드 {current} / {count}\r
                </div>\r
                \r
                {/* 페이지 인디케이터 */}\r
                <div className="flex items-center gap-1">\r
                  {Array.from({
                  length: count
                }).map((_, index) => <button key={index} className={\`w-2 h-2 rounded-full transition-colors \${index === current - 1 ? "bg-primary" : "bg-muted"}\`} onClick={() => api?.scrollTo(index)} />)}\r
                </div>\r
                \r
                {/* 재생 컨트롤 */}\r
                <div className="flex items-center gap-2">\r
                  <Button size="sm" variant="outline" onClick={() => setIsPlaying(!isPlaying)} className="gap-1">\r
                    {isPlaying ? <>\r
                        <Pause className="h-4 w-4" />\r
                        일시정지\r
                      </> : <>\r
                        <Play className="h-4 w-4" />\r
                        재생\r
                      </>}\r
                  </Button>\r
                </div>\r
              </div>\r
            </CardContent>\r
          </Card>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "상호작용 컨트롤을 포함한 Carousel입니다. 자동 재생, 페이지 인디케이터, 슬라이드 카운터 등의 기능을 보여줍니다."
      }
    }
  }
}`,...De.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [announcements, setAnnouncements] = React.useState<string[]>([]);
    const addAnnouncement = (message: string) => {
      setAnnouncements(prev => [...prev, message]);
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 3000);
    };
    const accessibilityFeatures = [{
      title: "키보드 네비게이션",
      description: "좌우 화살표 키로 슬라이드 간 이동이 가능합니다.",
      demo: "← → 키를 사용해보세요"
    }, {
      title: "스크린 리더 지원",
      description: "각 슬라이드의 역할과 내용을 명확히 안내합니다.",
      demo: "aria-label과 role 속성 적용"
    }, {
      title: "포커스 관리",
      description: "활성 슬라이드로 포커스가 자동 이동됩니다.",
      demo: "Tab 키로 포커스 이동 확인"
    }, {
      title: "상태 안내",
      description: "현재 슬라이드 위치와 전체 개수를 안내합니다.",
      demo: "스크린 리더가 위치 정보 읽기"
    }];
    return <div className="space-y-6 w-full max-w-3xl">\r
        <div className="space-y-2">\r
          <h3 className="text-lg font-semibold">접근성 데모</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Carousel 컴포넌트의 접근성 기능을 확인해보세요:\r
          </p>\r
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">좌우 화살표</kbd>로 슬라이드 네비게이션</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 컨트롤 버튼 포커스</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter/Space</kbd>로 버튼 활성화</li>\r
            <li>스크린 리더가 슬라이드 정보와 상태 안내</li>\r
            <li>ARIA 라이브 영역으로 상태 변경 알림</li>\r
            <li>고대비 모드와 큰 글씨 지원</li>\r
          </ul>\r
        </div>\r
\r
        {/* 라이브 영역 */}\r
        <div aria-live="polite" aria-label="캐러셀 상태 안내" className="sr-only">\r
          {announcements.map((announcement, index) => <div key={index}>{announcement}</div>)}\r
        </div>\r
\r
        {/* 접근성 기능 캐러셀 */}\r
        <Carousel opts={{
        align: "start",
        loop: true
      }} onKeyDown={e => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          addAnnouncement(\`\${e.key === "ArrowLeft" ? "이전" : "다음"} 슬라이드로 이동\`);
        }
      }}>\r
          <CarouselContent>\r
            {accessibilityFeatures.map((feature, index) => <CarouselItem key={index} className="md:basis-1/2" role="group" aria-roledescription="slide" aria-label={\`슬라이드 \${index + 1}, \${feature.title}\`}>\r
                <div className="p-1">\r
                  <Card className="h-full">\r
                    <CardHeader>\r
                      <CardTitle className="flex items-center gap-2">\r
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">\r
                          {index + 1}\r
                        </div>\r
                        {feature.title}\r
                      </CardTitle>\r
                    </CardHeader>\r
                    <CardContent className="space-y-4">\r
                      <p className="text-muted-foreground">\r
                        {feature.description}\r
                      </p>\r
                      \r
                      <div className="p-3 bg-muted rounded-lg">\r
                        <div className="text-sm font-medium mb-1">시도해보기:</div>\r
                        <div className="text-sm text-muted-foreground">\r
                          {feature.demo}\r
                        </div>\r
                      </div>\r
                      \r
                      <Button variant="outline" size="sm" onClick={() => addAnnouncement(\`\${feature.title} 기능 테스트됨\`)} aria-describedby={\`feature-\${index}-desc\`}>\r
                        기능 테스트\r
                      </Button>\r
                      <div id={\`feature-\${index}-desc\`} className="sr-only">\r
                        {feature.title} 접근성 기능을 테스트합니다\r
                      </div>\r
                    </CardContent>\r
                  </Card>\r
                </div>\r
              </CarouselItem>)}\r
          </CarouselContent>\r
          \r
          <CarouselPrevious aria-label="이전 슬라이드로 이동" onClick={() => addAnnouncement("이전 슬라이드로 이동했습니다")} />\r
          <CarouselNext aria-label="다음 슬라이드로 이동" onClick={() => addAnnouncement("다음 슬라이드로 이동했습니다")} />\r
        </Carousel>\r
\r
        {/* 상태 표시 */}\r
        <Card>\r
          <CardContent className="p-4">\r
            <div className="text-sm">\r
              <div className="font-medium mb-2">접근성 상태:</div>\r
              <div className="space-y-1 text-muted-foreground">\r
                <div>• 키보드 네비게이션: 활성화됨</div>\r
                <div>• 스크린 리더 지원: 활성화됨</div>\r
                <div>• ARIA 라벨: 적용됨</div>\r
                <div>• 포커스 표시: 활성화됨</div>\r
              </div>\r
              \r
              {announcements.length > 0 && <div className="mt-4 p-2 bg-primary/10 rounded border-l-2 border-primary">\r
                  <div className="text-xs font-medium">최근 안내:</div>\r
                  <div className="text-xs">{announcements[announcements.length - 1]}</div>\r
                </div>}\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Carousel의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...ze.parameters?.docs?.source}}};export{ze as AccessibilityDemo,Ie as Default,Le as ImageGallery,De as InteractiveControls,Ee as ProductGallery,ke as ResponsiveGrid,Te as TestimonialCarousel,Pe as VerticalOrientation,Gt as default};
