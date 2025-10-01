import{j as e}from"./jsx-runtime-qXjPENQY.js";import{e as i,r as K}from"./iframe-vkdy9PSu.js";import{R as Vt,T as Yt,b as Xt,D as Gt,a as Kt,C as Jt,P as Qt,O as Zt}from"./index-BKZ9reNd.js";import{c as ve}from"./utils-CBfrqCZ4.js";import{B as h}from"./button-BeR2cXOe.js";import{L as Y}from"./label-kCHJfFiW.js";import{I as Ke}from"./input-VJxpx8l0.js";import{T as ea}from"./textarea-CeI8ws4d.js";import{S as le}from"./separator-CXBakOK5.js";import{B as Se}from"./badge-DHQAmv51.js";import{S as ze}from"./scroll-area-Bb32eAyt.js";import{M as ft}from"./menu-B-gKhTV7.js";import{U as et}from"./user-BR8oJbTL.js";import{S as tt}from"./settings-TaLyVU6l.js";import{B as ta}from"./bell-4m82BrZ_.js";import{M as Je}from"./message-square-vGzzb9rk.js";import{S as aa}from"./search-CxwwKcLr.js";import{S as ra}from"./shopping-cart-Bps949N3.js";import{S as na}from"./square-pen-CMJjZu_3.js";import{T as gt}from"./trash-2-Ca0Yiqe1.js";import{S as sa}from"./star-B1Itfmbi.js";import{F as ia}from"./funnel-CnS1HM2w.js";import{E as oa}from"./eye-BJd8dDQ5.js";import{E as la}from"./eye-off-D8db3yff.js";import{D as da}from"./download-tU0MczaK.js";import"./index-BeNwZOra.js";import"./index-TaS-8cbB.js";import"./index-Dsdd1Jqs.js";import"./index-B0Z9MRuO.js";import"./index-QCh-e3tA.js";import"./index-DdArwYzb.js";import"./index-0kxtDDZv.js";import"./index-BAWlKGlJ.js";import"./index-DbagnNFI.js";import"./index-0DBZZt5u.js";import"./index-bedW0_xM.js";import"./index-BZXyV1Vc.js";import"./index-CdJFUDDL.js";import"./index-Bk4_yNSf.js";import"./index-BdQq_4o_.js";import"./createLucideIcon-DT2cZkkW.js";function ca(t){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",r.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}const xt=i.createContext({drawerRef:{current:null},overlayRef:{current:null},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,handleOnly:!1,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},closeDrawer:()=>{},direction:"bottom",shouldAnimate:{current:!0},shouldScaleBackground:!1,setBackgroundColorOnScale:!0,noBodyStyles:!1,container:null,autoFocus:!1}),Ce=()=>{const t=i.useContext(xt);if(!t)throw new Error("useDrawerContext must be used within a Drawer.Root");return t};ca(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);function ua(){const t=navigator.userAgent;return typeof window<"u"&&(/Firefox/.test(t)&&/Mobile/.test(t)||/FxiOS/.test(t))}function ma(){return at(/^Mac/)}function fa(){return at(/^iPhone/)}function ht(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function ha(){return at(/^iPad/)||ma()&&navigator.maxTouchPoints>1}function bt(){return fa()||ha()}function at(t){return typeof window<"u"&&window.navigator!=null?t.test(window.navigator.platform):void 0}const pa=24,wa=typeof window<"u"?K.useLayoutEffect:K.useEffect;function pt(...t){return(...r)=>{for(let a of t)typeof a=="function"&&a(...r)}}const Ve=typeof document<"u"&&window.visualViewport;function wt(t){let r=window.getComputedStyle(t);return/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY)}function jt(t){for(wt(t)&&(t=t.parentElement);t&&!wt(t);)t=t.parentElement;return t||document.scrollingElement||document.documentElement}const va=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let Re=0,Ye;function ga(t={}){let{isDisabled:r}=t;wa(()=>{if(!r)return Re++,Re===1&&bt()&&(Ye=xa()),()=>{Re--,Re===0&&Ye?.()}},[r])}function xa(){let t,r=0,a=v=>{t=jt(v.target),!(t===document.documentElement&&t===document.body)&&(r=v.changedTouches[0].pageY)},n=v=>{if(!t||t===document.documentElement||t===document.body){v.preventDefault();return}let g=v.changedTouches[0].pageY,F=t.scrollTop,P=t.scrollHeight-t.clientHeight;P!==0&&((F<=0&&g>r||F>=P&&g<r)&&v.preventDefault(),r=g)},o=v=>{let g=v.target;Qe(g)&&g!==document.activeElement&&(v.preventDefault(),g.style.transform="translateY(-2000px)",g.focus(),requestAnimationFrame(()=>{g.style.transform=""}))},s=v=>{let g=v.target;Qe(g)&&(g.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{g.style.transform="",Ve&&(Ve.height<window.innerHeight?requestAnimationFrame(()=>{vt(g)}):Ve.addEventListener("resize",()=>vt(g),{once:!0}))}))},p=()=>{window.scrollTo(0,0)},b=window.pageXOffset,c=window.pageYOffset,S=pt(ba(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let w=pt(ye(document,"touchstart",a,{passive:!1,capture:!0}),ye(document,"touchmove",n,{passive:!1,capture:!0}),ye(document,"touchend",o,{passive:!1,capture:!0}),ye(document,"focus",s,!0),ye(window,"scroll",p));return()=>{S(),w(),window.scrollTo(b,c)}}function ba(t,r,a){let n=t.style[r];return t.style[r]=a,()=>{t.style[r]=n}}function ye(t,r,a,n){return t.addEventListener(r,a,n),()=>{t.removeEventListener(r,a,n)}}function vt(t){let r=document.scrollingElement||document.documentElement;for(;t&&t!==r;){let a=jt(t);if(a!==document.documentElement&&a!==document.body&&a!==t){let n=a.getBoundingClientRect().top,o=t.getBoundingClientRect().top,s=t.getBoundingClientRect().bottom;const p=a.getBoundingClientRect().bottom+pa;s>p&&(a.scrollTop+=o-n)}t=a.parentElement}}function Qe(t){return t instanceof HTMLInputElement&&!va.has(t.type)||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}function ja(t,r){typeof t=="function"?t(r):t!=null&&(t.current=r)}function Na(...t){return r=>t.forEach(a=>ja(a,r))}function Nt(...t){return K.useCallback(Na(...t),t)}const yt=new WeakMap;function O(t,r,a=!1){if(!t||!(t instanceof HTMLElement))return;let n={};Object.entries(r).forEach(([o,s])=>{if(o.startsWith("--")){t.style.setProperty(o,s);return}n[o]=t.style[o],t.style[o]=s}),!a&&yt.set(t,n)}function ya(t,r){if(!t||!(t instanceof HTMLElement))return;let a=yt.get(t);a&&(t.style[r]=a[r])}const R=t=>{switch(t){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return t}};function Oe(t,r){if(!t)return null;const a=window.getComputedStyle(t),n=a.transform||a.webkitTransform||a.mozTransform;let o=n.match(/^matrix3d\((.+)\)$/);return o?parseFloat(o[1].split(", ")[R(r)?13:12]):(o=n.match(/^matrix\((.+)\)$/),o?parseFloat(o[1].split(", ")[R(r)?5:4]):null)}function Da(t){return 8*(Math.log(t+1)-2)}function Xe(t,r){if(!t)return()=>{};const a=t.style.cssText;return Object.assign(t.style,r),()=>{t.style.cssText=a}}function Sa(...t){return(...r)=>{for(const a of t)typeof a=="function"&&a(...r)}}const B={DURATION:.5,EASE:[.32,.72,0,1]},Dt=.4,Ca=.25,Ta=100,St=8,fe=16,Ze=26,Ge="vaul-dragging";function Ct(t){const r=i.useRef(t);return i.useEffect(()=>{r.current=t}),i.useMemo(()=>(...a)=>r.current==null?void 0:r.current.call(r,...a),[])}function Ba({defaultProp:t,onChange:r}){const a=i.useState(t),[n]=a,o=i.useRef(n),s=Ct(r);return i.useEffect(()=>{o.current!==n&&(s(n),o.current=n)},[n,o,s]),a}function Tt({prop:t,defaultProp:r,onChange:a=()=>{}}){const[n,o]=Ba({defaultProp:r,onChange:a}),s=t!==void 0,p=s?t:n,b=Ct(a),c=i.useCallback(S=>{if(s){const v=typeof S=="function"?S(t):S;v!==t&&b(v)}else o(S)},[s,t,o,b]);return[p,c]}function Ea({activeSnapPointProp:t,setActiveSnapPointProp:r,snapPoints:a,drawerRef:n,overlayRef:o,fadeFromIndex:s,onSnapPointChange:p,direction:b="bottom",container:c,snapToSequentialPoint:S}){const[w,v]=Tt({prop:t,defaultProp:a?.[0],onChange:r}),[g,F]=i.useState(typeof window<"u"?{innerWidth:window.innerWidth,innerHeight:window.innerHeight}:void 0);i.useEffect(()=>{function u(){F({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]);const P=i.useMemo(()=>w===a?.[a.length-1]||null,[a,w]),T=i.useMemo(()=>{var u;return(u=a?.findIndex(y=>y===w))!=null?u:null},[a,w]),H=a&&a.length>0&&(s||s===0)&&!Number.isNaN(s)&&a[s]===w||!a,x=i.useMemo(()=>{const u=c?{width:c.getBoundingClientRect().width,height:c.getBoundingClientRect().height}:typeof window<"u"?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0};var y;return(y=a?.map(N=>{const I=typeof N=="string";let L=0;if(I&&(L=parseInt(N,10)),R(b)){const d=I?L:g?N*u.height:0;return g?b==="bottom"?u.height-d:-u.height+d:d}const q=I?L:g?N*u.width:0;return g?b==="right"?u.width-q:-u.width+q:q}))!=null?y:[]},[a,g,c]),k=i.useMemo(()=>T!==null?x?.[T]:null,[x,T]),A=i.useCallback(u=>{var y;const N=(y=x?.findIndex(I=>I===u))!=null?y:null;p(N),O(n.current,{transition:`transform ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,transform:R(b)?`translate3d(0, ${u}px, 0)`:`translate3d(${u}px, 0, 0)`}),x&&N!==x.length-1&&s!==void 0&&N!==s&&N<s?O(o.current,{transition:`opacity ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,opacity:"0"}):O(o.current,{transition:`opacity ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,opacity:"1"}),v(a?.[Math.max(N,0)])},[n.current,a,x,s,o,v]);i.useEffect(()=>{if(w||t){var u;const y=(u=a?.findIndex(N=>N===t||N===w))!=null?u:-1;x&&y!==-1&&typeof x[y]=="number"&&A(x[y])}},[w,t,a,x,A]);function m({draggedDistance:u,closeDrawer:y,velocity:N,dismissible:I}){if(s===void 0)return;const L=b==="bottom"||b==="right"?(k??0)-u:(k??0)+u,q=T===s-1,d=T===0,U=u>0;if(q&&O(o.current,{transition:`opacity ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`}),!S&&N>2&&!U){I?y():A(x[0]);return}if(!S&&N>2&&U&&x&&a){A(x[a.length-1]);return}const $=x?.reduce((M,Q)=>typeof M!="number"||typeof Q!="number"?M:Math.abs(Q-L)<Math.abs(M-L)?Q:M),W=R(b)?window.innerHeight:window.innerWidth;if(N>Dt&&Math.abs(u)<W*.4){const M=U?1:-1;if(M>0&&P&&a){A(x[a.length-1]);return}if(d&&M<0&&I&&y(),T===null)return;A(x[T+M]);return}A($)}function X({draggedDistance:u}){if(k===null)return;const y=b==="bottom"||b==="right"?k-u:k+u;(b==="bottom"||b==="right")&&y<x[x.length-1]||(b==="top"||b==="left")&&y>x[x.length-1]||O(n.current,{transform:R(b)?`translate3d(0, ${y}px, 0)`:`translate3d(${y}px, 0, 0)`})}function ue(u,y){if(!a||typeof T!="number"||!x||s===void 0)return null;const N=T===s-1;if(T>=s&&y)return 0;if(N&&!y)return 1;if(!H&&!N)return null;const L=N?T+1:T-1,q=N?x[L]-x[L-1]:x[L+1]-x[L],d=u/Math.abs(q);return N?1-d:d}return{isLastSnapPoint:P,activeSnapPoint:w,shouldFade:H,getPercentageDragged:ue,setActiveSnapPoint:v,activeSnapPointIndex:T,onRelease:m,onDrag:X,snapPointsOffset:x}}const Ra=()=>()=>{};function Oa(){const{direction:t,isOpen:r,shouldScaleBackground:a,setBackgroundColorOnScale:n,noBodyStyles:o}=Ce(),s=i.useRef(null),p=K.useMemo(()=>document.body.style.backgroundColor,[]);function b(){return(window.innerWidth-Ze)/window.innerWidth}i.useEffect(()=>{if(r&&a){s.current&&clearTimeout(s.current);const c=document.querySelector("[data-vaul-drawer-wrapper]")||document.querySelector("[vaul-drawer-wrapper]");if(!c)return;Sa(n&&!o?Xe(document.body,{background:"black"}):Ra,Xe(c,{transformOrigin:R(t)?"top":"left",transitionProperty:"transform, border-radius",transitionDuration:`${B.DURATION}s`,transitionTimingFunction:`cubic-bezier(${B.EASE.join(",")})`}));const S=Xe(c,{borderRadius:`${St}px`,overflow:"hidden",...R(t)?{transform:`scale(${b()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`}:{transform:`scale(${b()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`}});return()=>{S(),s.current=window.setTimeout(()=>{p?document.body.style.background=p:document.body.style.removeProperty("background")},B.DURATION*1e3)}}},[r,a,p])}let De=null;function Aa({isOpen:t,modal:r,nested:a,hasBeenOpened:n,preventScrollRestoration:o,noBodyStyles:s}){const[p,b]=i.useState(()=>typeof window<"u"?window.location.href:""),c=i.useRef(0),S=i.useCallback(()=>{if(ht()&&De===null&&t&&!s){De={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};const{scrollX:v,innerHeight:g}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:`${-c.current}px`,left:`${-v}px`,right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{const F=g-window.innerHeight;F&&c.current>=g&&(document.body.style.top=`${-(c.current+F)}px`)}),300)}},[t]),w=i.useCallback(()=>{if(ht()&&De!==null&&!s){const v=-parseInt(document.body.style.top,10),g=-parseInt(document.body.style.left,10);Object.assign(document.body.style,De),window.requestAnimationFrame(()=>{if(o&&p!==window.location.href){b(window.location.href);return}window.scrollTo(g,v)}),De=null}},[p]);return i.useEffect(()=>{function v(){c.current=window.scrollY}return v(),window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]),i.useEffect(()=>{if(r)return()=>{typeof document>"u"||document.querySelector("[data-vaul-drawer]")||w()}},[r,w]),i.useEffect(()=>{a||!n||(t?(!window.matchMedia("(display-mode: standalone)").matches&&S(),r||window.setTimeout(()=>{w()},500)):w())},[t,n,p,r,a,S,w]),{restorePositionSetting:w}}function ka({open:t,onOpenChange:r,children:a,onDrag:n,onRelease:o,snapPoints:s,shouldScaleBackground:p=!1,setBackgroundColorOnScale:b=!0,closeThreshold:c=Ca,scrollLockTimeout:S=Ta,dismissible:w=!0,handleOnly:v=!1,fadeFromIndex:g=s&&s.length-1,activeSnapPoint:F,setActiveSnapPoint:P,fixed:T,modal:H=!0,onClose:x,nested:k,noBodyStyles:A=!1,direction:m="bottom",defaultOpen:X=!1,disablePreventScroll:ue=!0,snapToSequentialPoint:u=!1,preventScrollRestoration:y=!1,repositionInputs:N=!0,onAnimationEnd:I,container:L,autoFocus:q=!1}){var d,U;const[$=!1,W]=Tt({defaultProp:X,prop:t,onChange:l=>{r?.(l),!l&&!k&&_t(),setTimeout(()=>{I?.(l)},B.DURATION*1e3),l&&!H&&typeof window<"u"&&window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"}),l||(document.body.style.pointerEvents="auto")}}),[M,Q]=i.useState(!1),[se,ge]=i.useState(!1),[At,rt]=i.useState(!1),he=i.useRef(null),Te=i.useRef(null),Fe=i.useRef(null),He=i.useRef(null),xe=i.useRef(null),be=i.useRef(!1),Ue=i.useRef(null),qe=i.useRef(0),pe=i.useRef(!1),nt=i.useRef(!X),st=i.useRef(0),f=i.useRef(null),it=i.useRef(((d=f.current)==null?void 0:d.getBoundingClientRect().height)||0),ot=i.useRef(((U=f.current)==null?void 0:U.getBoundingClientRect().width)||0),We=i.useRef(0),kt=i.useCallback(l=>{s&&l===je.length-1&&(Te.current=new Date)},[]),{activeSnapPoint:Lt,activeSnapPointIndex:we,setActiveSnapPoint:lt,onRelease:Mt,snapPointsOffset:je,onDrag:It,shouldFade:dt,getPercentageDragged:$t}=Ea({snapPoints:s,activeSnapPointProp:F,setActiveSnapPointProp:P,drawerRef:f,fadeFromIndex:g,overlayRef:he,onSnapPointChange:kt,direction:m,container:L,snapToSequentialPoint:u});ga({isDisabled:!$||se||!H||At||!M||!N||!ue});const{restorePositionSetting:_t}=Aa({isOpen:$,modal:H,nested:k??!1,hasBeenOpened:M,preventScrollRestoration:y,noBodyStyles:A});function Be(){return(window.innerWidth-Ze)/window.innerWidth}function Pt(l){var D,C;!w&&!s||f.current&&!f.current.contains(l.target)||(it.current=((D=f.current)==null?void 0:D.getBoundingClientRect().height)||0,ot.current=((C=f.current)==null?void 0:C.getBoundingClientRect().width)||0,ge(!0),Fe.current=new Date,bt()&&window.addEventListener("touchend",()=>be.current=!1,{once:!0}),l.target.setPointerCapture(l.pointerId),qe.current=R(m)?l.pageY:l.pageX)}function ct(l,D){var C;let j=l;const E=(C=window.getSelection())==null?void 0:C.toString(),z=f.current?Oe(f.current,m):null,_=new Date;if(j.tagName==="SELECT"||j.hasAttribute("data-vaul-no-drag")||j.closest("[data-vaul-no-drag]"))return!1;if(m==="right"||m==="left")return!0;if(Te.current&&_.getTime()-Te.current.getTime()<500)return!1;if(z!==null&&(m==="bottom"?z>0:z<0))return!0;if(E&&E.length>0)return!1;if(xe.current&&_.getTime()-xe.current.getTime()<S&&z===0||D)return xe.current=_,!1;for(;j;){if(j.scrollHeight>j.clientHeight){if(j.scrollTop!==0)return xe.current=new Date,!1;if(j.getAttribute("role")==="dialog")return!0}j=j.parentNode}return!0}function zt(l){if(f.current&&se){const D=m==="bottom"||m==="right"?1:-1,C=(qe.current-(R(m)?l.pageY:l.pageX))*D,j=C>0,E=s&&!w&&!j;if(E&&we===0)return;const z=Math.abs(C),_=document.querySelector("[data-vaul-drawer-wrapper]"),ie=m==="bottom"||m==="top"?it.current:ot.current;let V=z/ie;const me=$t(z,j);if(me!==null&&(V=me),E&&V>=1||!be.current&&!ct(l.target,j))return;if(f.current.classList.add(Ge),be.current=!0,O(f.current,{transition:"none"}),O(he.current,{transition:"none"}),s&&It({draggedDistance:C}),j&&!s){const G=Da(C),Ee=Math.min(G*-1,0)*D;O(f.current,{transform:R(m)?`translate3d(0, ${Ee}px, 0)`:`translate3d(${Ee}px, 0, 0)`});return}const oe=1-V;if((dt||g&&we===g-1)&&(n?.(l,V),O(he.current,{opacity:`${oe}`,transition:"none"},!0)),_&&he.current&&p){const G=Math.min(Be()+V*(1-Be()),1),Ee=8-V*8,mt=Math.max(0,14-V*14);O(_,{borderRadius:`${Ee}px`,transform:R(m)?`scale(${G}) translate3d(0, ${mt}px, 0)`:`scale(${G}) translate3d(${mt}px, 0, 0)`,transition:"none"},!0)}if(!s){const G=z*D;O(f.current,{transform:R(m)?`translate3d(0, ${G}px, 0)`:`translate3d(${G}px, 0, 0)`})}}}i.useEffect(()=>{window.requestAnimationFrame(()=>{nt.current=!0})},[]),i.useEffect(()=>{var l;function D(){if(!f.current||!N)return;const C=document.activeElement;if(Qe(C)||pe.current){var j;const E=((j=window.visualViewport)==null?void 0:j.height)||0,z=window.innerHeight;let _=z-E;const ie=f.current.getBoundingClientRect().height||0,V=ie>z*.8;We.current||(We.current=ie);const me=f.current.getBoundingClientRect().top;if(Math.abs(st.current-_)>60&&(pe.current=!pe.current),s&&s.length>0&&je&&we){const oe=je[we]||0;_+=oe}if(st.current=_,ie>E||pe.current){const oe=f.current.getBoundingClientRect().height;let G=oe;oe>E&&(G=E-(V?me:Ze)),T?f.current.style.height=`${oe-Math.max(_,0)}px`:f.current.style.height=`${Math.max(G,E-me)}px`}else ua()||(f.current.style.height=`${We.current}px`);s&&s.length>0&&!pe.current?f.current.style.bottom="0px":f.current.style.bottom=`${Math.max(_,0)}px`}}return(l=window.visualViewport)==null||l.addEventListener("resize",D),()=>{var C;return(C=window.visualViewport)==null?void 0:C.removeEventListener("resize",D)}},[we,s,je]);function Ne(l){Ft(),x?.(),l||W(!1),setTimeout(()=>{s&&lt(s[0])},B.DURATION*1e3)}function ut(){if(!f.current)return;const l=document.querySelector("[data-vaul-drawer-wrapper]"),D=Oe(f.current,m);O(f.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`}),O(he.current,{transition:`opacity ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,opacity:"1"}),p&&D&&D>0&&$&&O(l,{borderRadius:`${St}px`,overflow:"hidden",...R(m)?{transform:`scale(${Be()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${Be()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${B.DURATION}s`,transitionTimingFunction:`cubic-bezier(${B.EASE.join(",")})`},!0)}function Ft(){!se||!f.current||(f.current.classList.remove(Ge),be.current=!1,ge(!1),He.current=new Date)}function Ht(l){if(!se||!f.current)return;f.current.classList.remove(Ge),be.current=!1,ge(!1),He.current=new Date;const D=Oe(f.current,m);if(!l||!ct(l.target,!1)||!D||Number.isNaN(D)||Fe.current===null)return;const C=He.current.getTime()-Fe.current.getTime(),j=qe.current-(R(m)?l.pageY:l.pageX),E=Math.abs(j)/C;if(E>.05&&(rt(!0),setTimeout(()=>{rt(!1)},200)),s){Mt({draggedDistance:j*(m==="bottom"||m==="right"?1:-1),closeDrawer:Ne,velocity:E,dismissible:w}),o?.(l,!0);return}if(m==="bottom"||m==="right"?j>0:j<0){ut(),o?.(l,!0);return}if(E>Dt){Ne(),o?.(l,!1);return}var z;const _=Math.min((z=f.current.getBoundingClientRect().height)!=null?z:0,window.innerHeight);var ie;const V=Math.min((ie=f.current.getBoundingClientRect().width)!=null?ie:0,window.innerWidth),me=m==="left"||m==="right";if(Math.abs(D)>=(me?V:_)*c){Ne(),o?.(l,!1);return}o?.(l,!0),ut()}i.useEffect(()=>($&&(O(document.documentElement,{scrollBehavior:"auto"}),Te.current=new Date),()=>{ya(document.documentElement,"scrollBehavior")}),[$]);function Ut(l){const D=l?(window.innerWidth-fe)/window.innerWidth:1,C=l?-fe:0;Ue.current&&window.clearTimeout(Ue.current),O(f.current,{transition:`transform ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,transform:R(m)?`scale(${D}) translate3d(0, ${C}px, 0)`:`scale(${D}) translate3d(${C}px, 0, 0)`}),!l&&f.current&&(Ue.current=setTimeout(()=>{const j=Oe(f.current,m);O(f.current,{transition:"none",transform:R(m)?`translate3d(0, ${j}px, 0)`:`translate3d(${j}px, 0, 0)`})},500))}function qt(l,D){if(D<0)return;const C=(window.innerWidth-fe)/window.innerWidth,j=C+D*(1-C),E=-fe+D*fe;O(f.current,{transform:R(m)?`scale(${j}) translate3d(0, ${E}px, 0)`:`scale(${j}) translate3d(${E}px, 0, 0)`,transition:"none"})}function Wt(l,D){const C=R(m)?window.innerHeight:window.innerWidth,j=D?(C-fe)/C:1,E=D?-fe:0;D&&O(f.current,{transition:`transform ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,transform:R(m)?`scale(${j}) translate3d(0, ${E}px, 0)`:`scale(${j}) translate3d(${E}px, 0, 0)`})}return i.useEffect(()=>{H||window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"})},[H]),i.createElement(Vt,{defaultOpen:X,onOpenChange:l=>{!w&&!l||(l?Q(!0):Ne(!0),W(l))},open:$},i.createElement(xt.Provider,{value:{activeSnapPoint:Lt,snapPoints:s,setActiveSnapPoint:lt,drawerRef:f,overlayRef:he,onOpenChange:r,onPress:Pt,onRelease:Ht,onDrag:zt,dismissible:w,shouldAnimate:nt,handleOnly:v,isOpen:$,isDragging:se,shouldFade:dt,closeDrawer:Ne,onNestedDrag:qt,onNestedOpenChange:Ut,onNestedRelease:Wt,keyboardIsOpen:pe,modal:H,snapPointsOffset:je,activeSnapPointIndex:we,direction:m,shouldScaleBackground:p,setBackgroundColorOnScale:b,noBodyStyles:A,container:L,autoFocus:q}},a))}const Bt=i.forwardRef(function({...t},r){const{overlayRef:a,snapPoints:n,onRelease:o,shouldFade:s,isOpen:p,modal:b,shouldAnimate:c}=Ce(),S=Nt(r,a),w=n&&n.length>0;if(!b)return null;const v=i.useCallback(g=>o(g),[o]);return i.createElement(Zt,{onMouseUp:v,ref:S,"data-vaul-overlay":"","data-vaul-snap-points":p&&w?"true":"false","data-vaul-snap-points-overlay":p&&s?"true":"false","data-vaul-animate":c?.current?"true":"false",...t})});Bt.displayName="Drawer.Overlay";const Et=i.forwardRef(function({onPointerDownOutside:t,style:r,onOpenAutoFocus:a,...n},o){const{drawerRef:s,onPress:p,onRelease:b,onDrag:c,keyboardIsOpen:S,snapPointsOffset:w,activeSnapPointIndex:v,modal:g,isOpen:F,direction:P,snapPoints:T,container:H,handleOnly:x,shouldAnimate:k,autoFocus:A}=Ce(),[m,X]=i.useState(!1),ue=Nt(o,s),u=i.useRef(null),y=i.useRef(null),N=i.useRef(!1),I=T&&T.length>0;Oa();const L=(d,U,$=0)=>{if(N.current)return!0;const W=Math.abs(d.y),M=Math.abs(d.x),Q=M>W,se=["bottom","right"].includes(U)?1:-1;if(U==="left"||U==="right"){if(!(d.x*se<0)&&M>=0&&M<=$)return Q}else if(!(d.y*se<0)&&W>=0&&W<=$)return!Q;return N.current=!0,!0};i.useEffect(()=>{I&&window.requestAnimationFrame(()=>{X(!0)})},[]);function q(d){u.current=null,N.current=!1,b(d)}return i.createElement(Jt,{"data-vaul-drawer-direction":P,"data-vaul-drawer":"","data-vaul-delayed-snap-points":m?"true":"false","data-vaul-snap-points":F&&I?"true":"false","data-vaul-custom-container":H?"true":"false","data-vaul-animate":k?.current?"true":"false",...n,ref:ue,style:w&&w.length>0?{"--snap-point-height":`${w[v??0]}px`,...r}:r,onPointerDown:d=>{x||(n.onPointerDown==null||n.onPointerDown.call(n,d),u.current={x:d.pageX,y:d.pageY},p(d))},onOpenAutoFocus:d=>{a?.(d),A||d.preventDefault()},onPointerDownOutside:d=>{if(t?.(d),!g||d.defaultPrevented){d.preventDefault();return}S.current&&(S.current=!1)},onFocusOutside:d=>{if(!g){d.preventDefault();return}},onPointerMove:d=>{if(y.current=d,x||(n.onPointerMove==null||n.onPointerMove.call(n,d),!u.current))return;const U=d.pageY-u.current.y,$=d.pageX-u.current.x,W=d.pointerType==="touch"?10:2;L({x:$,y:U},P,W)?c(d):(Math.abs($)>W||Math.abs(U)>W)&&(u.current=null)},onPointerUp:d=>{n.onPointerUp==null||n.onPointerUp.call(n,d),u.current=null,N.current=!1,b(d)},onPointerOut:d=>{n.onPointerOut==null||n.onPointerOut.call(n,d),q(y.current)},onContextMenu:d=>{n.onContextMenu==null||n.onContextMenu.call(n,d),y.current&&q(y.current)}})});Et.displayName="Drawer.Content";const La=250,Ma=120,Ia=i.forwardRef(function({preventCycle:t=!1,children:r,...a},n){const{closeDrawer:o,isDragging:s,snapPoints:p,activeSnapPoint:b,setActiveSnapPoint:c,dismissible:S,handleOnly:w,isOpen:v,onPress:g,onDrag:F}=Ce(),P=i.useRef(null),T=i.useRef(!1);function H(){if(T.current){A();return}window.setTimeout(()=>{x()},Ma)}function x(){if(s||t||T.current){A();return}if(A(),!p||p.length===0){S||o();return}if(b===p[p.length-1]&&S){o();return}const X=p.findIndex(u=>u===b);if(X===-1)return;const ue=p[X+1];c(ue)}function k(){P.current=window.setTimeout(()=>{T.current=!0},La)}function A(){P.current&&window.clearTimeout(P.current),T.current=!1}return i.createElement("div",{onClick:H,onPointerCancel:A,onPointerDown:m=>{w&&g(m),k()},onPointerMove:m=>{w&&F(m)},ref:n,"data-vaul-drawer-visible":v?"true":"false","data-vaul-handle":"","aria-hidden":"true",...a},i.createElement("span",{"data-vaul-handle-hitarea":"","aria-hidden":"true"},r))});Ia.displayName="Drawer.Handle";function $a(t){const r=Ce(),{container:a=r.container,...n}=t;return i.createElement(Qt,{container:a,...n})}const de={Root:ka,Content:Et,Overlay:Bt,Trigger:Yt,Portal:$a,Close:Kt,Title:Xt,Description:Gt};function J({...t}){return e.jsx(de.Root,{"data-slot":"drawer",...t})}function Z({onClick:t,...r}){const a=n=>{t?.(n);const o=n.currentTarget;requestAnimationFrame(()=>{const s=o.getAttribute("aria-controls");if(s){const p=document.getElementById(s);p&&p.focus()}})};return e.jsx(de.Trigger,{"data-slot":"drawer-trigger",onClick:a,...r})}function Rt({...t}){return e.jsx(de.Portal,{"data-slot":"drawer-portal",...t})}function ee({...t}){return e.jsx(de.Close,{"data-slot":"drawer-close",...t})}function Ot({className:t,...r}){return e.jsx(de.Overlay,{"data-slot":"drawer-overlay",className:ve("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",t),...r})}function te({className:t,children:r,...a}){return e.jsxs(Rt,{"data-slot":"drawer-portal",children:[e.jsx(Ot,{}),e.jsxs(de.Content,{"data-slot":"drawer-content",tabIndex:-1,className:ve("group/drawer-content bg-background fixed z-50 flex h-auto flex-col focus:outline-none","data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b","data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t","data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm","data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",t),...a,children:[e.jsx("div",{className:"bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"}),r]})]})}function ae({className:t,...r}){return e.jsx("div",{"data-slot":"drawer-header",className:ve("flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",t),...r})}function re({className:t,...r}){return e.jsx("div",{"data-slot":"drawer-footer",className:ve("mt-auto flex flex-col gap-2 p-4",t),...r})}function ne({className:t,...r}){return e.jsx(de.Title,{"data-slot":"drawer-title",className:ve("text-foreground font-semibold",t),...r})}function ce({className:t,...r}){return e.jsx(de.Description,{"data-slot":"drawer-description",className:ve("text-muted-foreground text-sm",t),...r})}J.__docgenInfo={description:`@description DrawerTrigger onClick handler to move focus to DrawerContent when opened.
* @modified 2025-10-01
- **기존 동작:** 포커스 이동 없음.
- **수정 동작:** 'aria-controls' 속성 값을 사용하여 연결된 DrawerContent 요소를 찾아 포커스를 이동시킴.`,methods:[],displayName:"Drawer"};Rt.__docgenInfo={description:"",methods:[],displayName:"DrawerPortal"};Ot.__docgenInfo={description:"",methods:[],displayName:"DrawerOverlay"};Z.__docgenInfo={description:"",methods:[],displayName:"DrawerTrigger"};ee.__docgenInfo={description:"",methods:[],displayName:"DrawerClose"};te.__docgenInfo={description:"",methods:[],displayName:"DrawerContent"};ae.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader"};re.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter"};ne.__docgenInfo={description:"",methods:[],displayName:"DrawerTitle"};ce.__docgenInfo={description:"",methods:[],displayName:"DrawerDescription"};const Sr={title:"UI/Overlay/Drawer",component:J,parameters:{layout:"centered",docs:{description:{component:"화면 가장자리에서 슬라이드되는 패널 컴포넌트입니다. 내비게이션, 설정, 상세 정보 등을 표시하는 데 사용됩니다."}}},tags:["autodocs"],argTypes:{}},Ae={render:()=>e.jsxs(J,{children:[e.jsx(Z,{asChild:!0,children:e.jsx(h,{variant:"outline",onClick:()=>console.log("drawer opened"),children:"서랍 열기"})}),e.jsx(te,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(ae,{children:[e.jsx(ne,{children:"기본 서랍"}),e.jsx(ce,{children:"간단한 내용을 표시하는 기본 서랍 패널입니다."})]}),e.jsx("div",{className:"p-4 pb-0",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"여기에 콘텐츠가 표시됩니다. 서랍은 모바일 기기에서 특히 유용합니다."})}),e.jsxs(re,{children:[e.jsx(h,{children:"확인"}),e.jsx(ee,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"닫기"})})]})]})})]})},ke={render:()=>e.jsxs(J,{children:[e.jsx(Z,{asChild:!0,children:e.jsx(h,{variant:"outline",size:"icon",children:e.jsx(ft,{className:"h-4 w-4"})})}),e.jsx(te,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsx(ae,{children:e.jsxs(ne,{className:"flex items-center gap-2",children:[e.jsx(ft,{className:"h-5 w-5"}),"메뉴"]})}),e.jsx("div",{className:"p-4 pb-0",children:e.jsxs("nav",{className:"space-y-2",children:[e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(et,{className:"mr-2 h-4 w-4"}),"프로필"]}),e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(tt,{className:"mr-2 h-4 w-4"}),"설정"]}),e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(ta,{className:"mr-2 h-4 w-4"}),"알림"]}),e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(Je,{className:"mr-2 h-4 w-4"}),"메시지"]}),e.jsx(le,{}),e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(aa,{className:"mr-2 h-4 w-4"}),"검색"]})]})}),e.jsx(re,{children:e.jsx(ee,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"닫기"})})})]})})]})},Le={render:()=>{const t=[{id:1,name:"무선 헤드폰",price:89e3,quantity:1},{id:2,name:"USB-C 케이블",price:15e3,quantity:2},{id:3,name:"스마트폰 케이스",price:25e3,quantity:1}],r=t.reduce((a,n)=>a+n.price*n.quantity,0);return e.jsxs(J,{children:[e.jsx(Z,{asChild:!0,children:e.jsxs(h,{variant:"outline",className:"relative",children:[e.jsx(ra,{className:"mr-2 h-4 w-4"}),"장바구니",e.jsx(Se,{className:"absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center",children:t.length})]})}),e.jsx(te,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(ae,{children:[e.jsx(ne,{children:"장바구니"}),e.jsxs(ce,{children:[t.length,"개 상품이 담겨있습니다."]})]}),e.jsx(ze,{className:"h-[300px] px-4",children:e.jsx("div",{className:"space-y-4",children:t.map(a=>e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:a.name}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[a.price.toLocaleString(),"원 × ",a.quantity]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(h,{variant:"outline",size:"icon",className:"h-8 w-8",children:e.jsx(na,{className:"h-4 w-4"})}),e.jsx(h,{variant:"outline",size:"icon",className:"h-8 w-8",children:e.jsx(gt,{className:"h-4 w-4"})})]})]},a.id))})}),e.jsxs("div",{className:"p-4",children:[e.jsx(le,{className:"mb-4"}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"font-semibold",children:"총액:"}),e.jsxs("span",{className:"font-bold text-lg",children:[r.toLocaleString(),"원"]})]})]}),e.jsxs(re,{children:[e.jsx(h,{children:"주문하기"}),e.jsx(ee,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"계속 쇼핑"})})]})]})})]})}},Me={render:()=>e.jsxs(J,{children:[e.jsx(Z,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"sm",className:"h-8 w-8 rounded-full",children:e.jsx("div",{className:"h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium",children:"홍"})})}),e.jsx(te,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsx(ae,{children:e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx("div",{className:"h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-medium",children:"홍"}),e.jsx(ne,{children:"홍길동"}),e.jsx(ce,{children:"hong.gildong@example.com"})]})}),e.jsxs("div",{className:"p-4 pb-0 space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"text-center p-3 border rounded-lg",children:[e.jsx("div",{className:"font-semibold",children:"125"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"팔로워"})]}),e.jsxs("div",{className:"text-center p-3 border rounded-lg",children:[e.jsx("div",{className:"font-semibold",children:"89"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"팔로잉"})]})]}),e.jsx(le,{}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(et,{className:"mr-2 h-4 w-4"}),"프로필 편집"]}),e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(tt,{className:"mr-2 h-4 w-4"}),"계정 설정"]}),e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(sa,{className:"mr-2 h-4 w-4"}),"즐겨찾기"]})]})]}),e.jsxs(re,{children:[e.jsx(h,{variant:"outline",children:"로그아웃"}),e.jsx(ee,{asChild:!0,children:e.jsx(h,{variant:"ghost",children:"닫기"})})]})]})})]})},Ie={render:()=>{const[t,r]=K.useState([0,1e5]),[a,n]=K.useState([]),[o,s]=K.useState([]),p=["Apple","Samsung","LG","Sony","Xiaomi"],b=["스마트폰","헤드폰","케이스","충전기","스피커"];return e.jsxs(J,{children:[e.jsx(Z,{asChild:!0,children:e.jsxs(h,{variant:"outline",children:[e.jsx(ia,{className:"mr-2 h-4 w-4"}),"필터"]})}),e.jsx(te,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(ae,{children:[e.jsx(ne,{children:"상품 필터"}),e.jsx(ce,{children:"원하는 조건으로 상품을 필터링하세요."})]}),e.jsx(ze,{className:"h-[400px] px-4",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(Y,{className:"text-base font-medium",children:"가격 범위"}),e.jsx("div",{className:"mt-2 space-y-2",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(Ke,{placeholder:"최소 가격",value:t[0].toLocaleString(),className:"text-sm"}),e.jsx(Ke,{placeholder:"최대 가격",value:t[1].toLocaleString(),className:"text-sm"})]})})]}),e.jsx(le,{}),e.jsxs("div",{children:[e.jsx(Y,{className:"text-base font-medium",children:"브랜드"}),e.jsx("div",{className:"mt-2 space-y-2",children:p.map(c=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:c,checked:a.includes(c),onChange:S=>{S.target.checked?n([...a,c]):n(a.filter(w=>w!==c))},className:"rounded"}),e.jsx(Y,{htmlFor:c,className:"text-sm",children:c})]},c))})]}),e.jsx(le,{}),e.jsxs("div",{children:[e.jsx(Y,{className:"text-base font-medium",children:"카테고리"}),e.jsx("div",{className:"mt-2 space-y-2",children:b.map(c=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:c,checked:o.includes(c),onChange:S=>{S.target.checked?s([...o,c]):s(o.filter(w=>w!==c))},className:"rounded"}),e.jsx(Y,{htmlFor:c,className:"text-sm",children:c})]},c))})]})]})}),e.jsxs(re,{children:[e.jsx(h,{children:"필터 적용"}),e.jsx(h,{variant:"outline",onClick:()=>{r([0,1e5]),n([]),s([])},children:"초기화"}),e.jsx(ee,{asChild:!0,children:e.jsx(h,{variant:"ghost",children:"취소"})})]})]})})]})}},$e={render:()=>{const t=[{id:1,sender:"김철수",message:"안녕하세요! 오늘 회의 일정이 어떻게 되나요?",time:"2분 전",unread:!0},{id:2,sender:"이영희",message:"프로젝트 문서를 공유드립니다.",time:"10분 전",unread:!0},{id:3,sender:"박민수",message:"수고 많으셨습니다!",time:"1시간 전",unread:!1}];return e.jsxs(J,{children:[e.jsx(Z,{asChild:!0,children:e.jsxs(h,{variant:"outline",className:"relative",children:[e.jsx(Je,{className:"mr-2 h-4 w-4"}),"메시지",e.jsx(Se,{className:"absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center",children:"2"})]})}),e.jsx(te,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(ae,{children:[e.jsx(ne,{children:"메시지"}),e.jsxs(ce,{children:[t.filter(r=>r.unread).length,"개의 읽지 않은 메시지"]})]}),e.jsx(ze,{className:"h-[350px] px-4",children:e.jsx("div",{className:"space-y-3",children:t.map(r=>e.jsxs("div",{className:`p-3 border rounded-lg cursor-pointer hover:bg-accent ${r.unread?"bg-blue-50 border-blue-200":""}`,children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-medium",children:r.sender[0]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-sm",children:r.sender}),e.jsx("div",{className:"text-xs text-muted-foreground",children:r.time})]})]}),r.unread&&e.jsx("div",{className:"h-2 w-2 bg-blue-500 rounded-full"})]}),e.jsx("p",{className:"text-sm mt-2 text-muted-foreground line-clamp-2",children:r.message})]},r.id))})}),e.jsx("div",{className:"p-4",children:e.jsxs(h,{className:"w-full mb-2",children:[e.jsx(Je,{className:"mr-2 h-4 w-4"}),"새 메시지 작성"]})}),e.jsx(re,{children:e.jsx(ee,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"닫기"})})})]})})]})}},_e={render:()=>{const[t,r]=K.useState(!0),[a,n]=K.useState(!1),[o,s]=K.useState("ko");return e.jsxs(J,{children:[e.jsx(Z,{asChild:!0,children:e.jsxs(h,{variant:"outline",children:[e.jsx(tt,{className:"mr-2 h-4 w-4"}),"설정"]})}),e.jsx(te,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(ae,{children:[e.jsx(ne,{children:"앱 설정"}),e.jsx(ce,{children:"애플리케이션 환경을 설정하세요."})]}),e.jsx(ze,{className:"h-[400px] px-4",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(Y,{className:"text-base font-medium",children:"알림 설정"}),e.jsx("div",{className:"mt-2 space-y-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium",children:"푸시 알림"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"새로운 메시지 및 업데이트 알림"})]}),e.jsx(h,{variant:"outline",size:"sm",onClick:()=>r(!t),children:t?e.jsx(oa,{className:"h-4 w-4"}):e.jsx(la,{className:"h-4 w-4"})})]})})]}),e.jsx(le,{}),e.jsxs("div",{children:[e.jsx(Y,{className:"text-base font-medium",children:"화면 설정"}),e.jsx("div",{className:"mt-2 space-y-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium",children:"다크 모드"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"어두운 테마 사용"})]}),e.jsx(h,{variant:"outline",size:"sm",onClick:()=>n(!a),children:a?"켜짐":"꺼짐"})]})})]}),e.jsx(le,{}),e.jsxs("div",{children:[e.jsx(Y,{className:"text-base font-medium",children:"언어 설정"}),e.jsx("div",{className:"mt-2",children:e.jsxs("select",{value:o,onChange:p=>s(p.target.value),className:"w-full p-2 border rounded-md text-sm",children:[e.jsx("option",{value:"ko",children:"한국어"}),e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"ja",children:"日本語"}),e.jsx("option",{value:"zh",children:"中文"})]})})]}),e.jsx(le,{}),e.jsxs("div",{children:[e.jsx(Y,{className:"text-base font-medium",children:"계정"}),e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(et,{className:"mr-2 h-4 w-4"}),"계정 정보"]}),e.jsxs(h,{variant:"ghost",className:"w-full justify-start",size:"sm",children:[e.jsx(da,{className:"mr-2 h-4 w-4"}),"데이터 다운로드"]}),e.jsxs(h,{variant:"ghost",className:"w-full justify-start text-red-600",size:"sm",children:[e.jsx(gt,{className:"mr-2 h-4 w-4"}),"계정 삭제"]})]})]})]})}),e.jsxs(re,{children:[e.jsx(h,{children:"설정 저장"}),e.jsx(ee,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"취소"})})]})]})})]})}},Pe={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, Escape)"}),e.jsx("li",{children:"• 스크린 리더 호환성"}),e.jsx("li",{children:"• 포커스 관리 및 트랩"}),e.jsx("li",{children:"• ARIA 레이블 및 설명"}),e.jsx("li",{children:"• 모바일 터치 제스처 지원"})]})]}),e.jsxs(J,{children:[e.jsx(Z,{asChild:!0,children:e.jsx(h,{variant:"outline","aria-describedby":"drawer-description",children:"접근성 데모 열기"})}),e.jsx(te,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(ae,{children:[e.jsx(ne,{children:"접근성 데모"}),e.jsx(ce,{id:"drawer-description",children:"이 서랍은 완전한 키보드 접근성과 스크린 리더 지원을 제공합니다. Tab 키로 요소들을 탐색하고, Enter로 활성화, Escape로 닫을 수 있습니다."})]}),e.jsxs("div",{className:"p-4 pb-0 space-y-4",children:[e.jsxs("div",{children:[e.jsx(Y,{htmlFor:"demo-input",children:"이름"}),e.jsx(Ke,{id:"demo-input",placeholder:"이름을 입력하세요","aria-describedby":"demo-input-help"}),e.jsx("p",{id:"demo-input-help",className:"text-xs text-muted-foreground mt-1",children:"2-20자 사이로 입력해주세요"})]}),e.jsxs("div",{children:[e.jsx(Y,{htmlFor:"demo-textarea",children:"메시지"}),e.jsx(ea,{id:"demo-textarea",placeholder:"메시지를 입력하세요",rows:3})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(Se,{variant:"secondary",children:"접근성"}),e.jsx(Se,{variant:"outline",children:"키보드 지원"}),e.jsx(Se,{variant:"default",children:"스크린 리더"})]})]}),e.jsxs(re,{children:[e.jsx(h,{"aria-describedby":"submit-help",children:"제출"}),e.jsx("p",{id:"submit-help",className:"sr-only",children:"폼을 제출하려면 엔터를 누르세요"}),e.jsx(ee,{asChild:!0,children:e.jsx(h,{variant:"outline",children:"취소 (Escape)"})})]})]})})]}),e.jsx("div",{className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab 키로 순서대로 이동, Shift+Tab으로 역순 이동, Enter로 활성화, Escape로 닫기"})]}),parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다."}}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" onClick={() => console.log('drawer opened')}>서랍 열기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>기본 서랍</DrawerTitle>
            <DrawerDescription>
              간단한 내용을 표시하는 기본 서랍 패널입니다.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <p className="text-sm text-muted-foreground">
              여기에 콘텐츠가 표시됩니다. 서랍은 모바일 기기에서 특히 유용합니다.
            </p>
          </div>
          <DrawerFooter>
            <Button>확인</Button>
            <DrawerClose asChild>
              <Button variant="outline">닫기</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
}`,...Ae.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              <Menu className="h-5 w-5" />
              메뉴
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <User className="mr-2 h-4 w-4" />
                프로필
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                설정
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                알림
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                메시지
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Search className="mr-2 h-4 w-4" />
                검색
              </Button>
            </nav>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">닫기</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
}`,...ke.parameters?.docs?.source}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
  render: () => {
    const cartItems = [{
      id: 1,
      name: '무선 헤드폰',
      price: 89000,
      quantity: 1
    }, {
      id: 2,
      name: 'USB-C 케이블',
      price: 15000,
      quantity: 2
    }, {
      id: 3,
      name: '스마트폰 케이스',
      price: 25000,
      quantity: 1
    }];
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="relative">
            <ShoppingCart className="mr-2 h-4 w-4" />
            장바구니
            <Badge className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center">
              {cartItems.length}
            </Badge>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>장바구니</DrawerTitle>
              <DrawerDescription>
                {cartItems.length}개 상품이 담겨있습니다.
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[300px] px-4">
              <div className="space-y-4">
                {cartItems.map(item => <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.price.toLocaleString()}원 × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>)}
              </div>
            </ScrollArea>
            <div className="p-4">
              <Separator className="mb-4" />
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">총액:</span>
                <span className="font-bold text-lg">{total.toLocaleString()}원</span>
              </div>
            </div>
            <DrawerFooter>
              <Button>주문하기</Button>
              <DrawerClose asChild>
                <Button variant="outline">계속 쇼핑</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>;
  }
}`,...Le.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
            홍
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-medium">
                홍
              </div>
              <DrawerTitle>홍길동</DrawerTitle>
              <DrawerDescription>
                hong.gildong@example.com
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 border rounded-lg">
                <div className="font-semibold">125</div>
                <div className="text-sm text-muted-foreground">팔로워</div>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="font-semibold">89</div>
                <div className="text-sm text-muted-foreground">팔로잉</div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <User className="mr-2 h-4 w-4" />
                프로필 편집
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                계정 설정
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Star className="mr-2 h-4 w-4" />
                즐겨찾기
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button variant="outline">로그아웃</Button>
            <DrawerClose asChild>
              <Button variant="ghost">닫기</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
}`,...Me.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const brands = ['Apple', 'Samsung', 'LG', 'Sony', 'Xiaomi'];
    const categories = ['스마트폰', '헤드폰', '케이스', '충전기', '스피커'];
    return <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            필터
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>상품 필터</DrawerTitle>
              <DrawerDescription>
                원하는 조건으로 상품을 필터링하세요.
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[400px] px-4">
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">가격 범위</Label>
                  <div className="mt-2 space-y-2">
                    <div className="flex gap-2">
                      <Input placeholder="최소 가격" value={priceRange[0].toLocaleString()} className="text-sm" />
                      <Input placeholder="최대 가격" value={priceRange[1].toLocaleString()} className="text-sm" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">브랜드</Label>
                  <div className="mt-2 space-y-2">
                    {brands.map(brand => <div key={brand} className="flex items-center space-x-2">
                        <input type="checkbox" id={brand} checked={selectedBrands.includes(brand)} onChange={e => {
                      if (e.target.checked) {
                        setSelectedBrands([...selectedBrands, brand]);
                      } else {
                        setSelectedBrands(selectedBrands.filter(b => b !== brand));
                      }
                    }} className="rounded" />
                        <Label htmlFor={brand} className="text-sm">{brand}</Label>
                      </div>)}
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">카테고리</Label>
                  <div className="mt-2 space-y-2">
                    {categories.map(category => <div key={category} className="flex items-center space-x-2">
                        <input type="checkbox" id={category} checked={selectedCategories.includes(category)} onChange={e => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, category]);
                      } else {
                        setSelectedCategories(selectedCategories.filter(c => c !== category));
                      }
                    }} className="rounded" />
                        <Label htmlFor={category} className="text-sm">{category}</Label>
                      </div>)}
                  </div>
                </div>
              </div>
            </ScrollArea>
            <DrawerFooter>
              <Button>필터 적용</Button>
              <Button variant="outline" onClick={() => {
              setPriceRange([0, 100000]);
              setSelectedBrands([]);
              setSelectedCategories([]);
            }}>
                초기화
              </Button>
              <DrawerClose asChild>
                <Button variant="ghost">취소</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>;
  }
}`,...Ie.parameters?.docs?.source}}};$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const messages = [{
      id: 1,
      sender: '김철수',
      message: '안녕하세요! 오늘 회의 일정이 어떻게 되나요?',
      time: '2분 전',
      unread: true
    }, {
      id: 2,
      sender: '이영희',
      message: '프로젝트 문서를 공유드립니다.',
      time: '10분 전',
      unread: true
    }, {
      id: 3,
      sender: '박민수',
      message: '수고 많으셨습니다!',
      time: '1시간 전',
      unread: false
    }];
    return <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="relative">
            <MessageSquare className="mr-2 h-4 w-4" />
            메시지
            <Badge className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center">
              2
            </Badge>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>메시지</DrawerTitle>
              <DrawerDescription>
                {messages.filter(m => m.unread).length}개의 읽지 않은 메시지
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[350px] px-4">
              <div className="space-y-3">
                {messages.map(message => <div key={message.id} className={\`p-3 border rounded-lg cursor-pointer hover:bg-accent \${message.unread ? 'bg-blue-50 border-blue-200' : ''}\`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-medium">
                          {message.sender[0]}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{message.sender}</div>
                          <div className="text-xs text-muted-foreground">{message.time}</div>
                        </div>
                      </div>
                      {message.unread && <div className="h-2 w-2 bg-blue-500 rounded-full"></div>}
                    </div>
                    <p className="text-sm mt-2 text-muted-foreground line-clamp-2">
                      {message.message}
                    </p>
                  </div>)}
              </div>
            </ScrollArea>
            <div className="p-4">
              <Button className="w-full mb-2">
                <MessageSquare className="mr-2 h-4 w-4" />
                새 메시지 작성
              </Button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">닫기</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>;
  }
}`,...$e.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('ko');
    return <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            설정
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>앱 설정</DrawerTitle>
              <DrawerDescription>
                애플리케이션 환경을 설정하세요.
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[400px] px-4">
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">알림 설정</Label>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">푸시 알림</div>
                        <div className="text-xs text-muted-foreground">
                          새로운 메시지 및 업데이트 알림
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setNotifications(!notifications)}>
                        {notifications ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">화면 설정</Label>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">다크 모드</div>
                        <div className="text-xs text-muted-foreground">
                          어두운 테마 사용
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? '켜짐' : '꺼짐'}
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">언어 설정</Label>
                  <div className="mt-2">
                    <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full p-2 border rounded-md text-sm">
                      <option value="ko">한국어</option>
                      <option value="en">English</option>
                      <option value="ja">日本語</option>
                      <option value="zh">中文</option>
                    </select>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">계정</Label>
                  <div className="mt-2 space-y-2">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <User className="mr-2 h-4 w-4" />
                      계정 정보
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      데이터 다운로드
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-red-600" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      계정 삭제
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <DrawerFooter>
              <Button>설정 저장</Button>
              <DrawerClose asChild>
                <Button variant="outline">취소</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>;
  }
}`,..._e.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">접근성 기능</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape)</li>
          <li>• 스크린 리더 호환성</li>
          <li>• 포커스 관리 및 트랩</li>
          <li>• ARIA 레이블 및 설명</li>
          <li>• 모바일 터치 제스처 지원</li>
        </ul>
      </div>
      
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" aria-describedby="drawer-description">
            접근성 데모 열기
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>접근성 데모</DrawerTitle>
              <DrawerDescription id="drawer-description">
                이 서랍은 완전한 키보드 접근성과 스크린 리더 지원을 제공합니다.
                Tab 키로 요소들을 탐색하고, Enter로 활성화, Escape로 닫을 수 있습니다.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-4">
              <div>
                <Label htmlFor="demo-input">이름</Label>
                <Input id="demo-input" placeholder="이름을 입력하세요" aria-describedby="demo-input-help" />
                <p id="demo-input-help" className="text-xs text-muted-foreground mt-1">
                  2-20자 사이로 입력해주세요
                </p>
              </div>
              
              <div>
                <Label htmlFor="demo-textarea">메시지</Label>
                <Textarea id="demo-textarea" placeholder="메시지를 입력하세요" rows={3} />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">접근성</Badge>
                <Badge variant="outline">키보드 지원</Badge>
                <Badge variant="default">스크린 리더</Badge>
              </div>
            </div>
            <DrawerFooter>
              <Button aria-describedby="submit-help">
                제출
              </Button>
              <p id="submit-help" className="sr-only">
                폼을 제출하려면 엔터를 누르세요
              </p>
              <DrawerClose asChild>
                <Button variant="outline">
                  취소 (Escape)
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      
      <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
        💡 팁: Tab 키로 순서대로 이동, Shift+Tab으로 역순 이동, Enter로 활성화, Escape로 닫기
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다.'
      }
    }
  }
}`,...Pe.parameters?.docs?.source}}};export{Pe as AccessibilityDemo,Ae as Default,Ie as FilterDrawer,$e as MessageDrawer,ke as NavigationDrawer,_e as SettingsDrawer,Le as ShoppingCartDrawer,Me as UserProfileDrawer,Sr as default};
