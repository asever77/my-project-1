import{j as e}from"./jsx-runtime-BNA1KBBw.js";import{r as s}from"./iframe-DYI76bYf.js";import{c as le}from"./utils-CBfrqCZ4.js";import{M as Ze}from"./minus-DHPfTFxm.js";import{B as S}from"./button-D8PIsVG9.js";import{L as Je}from"./label-18wtRjrp.js";import{C as oe,a as de,b as ce,c as ue,d as me}from"./card-D_qZKHP_.js";import{B as Ee}from"./badge-WoKEAeFo.js";import{S as Le}from"./shield-CbOGopMd.js";import{M as Qe}from"./mail-Dn0jCmZQ.js";import{C as Xe}from"./check-D8FZ9qtv.js";import{L as Ye}from"./lock-DRhvnfnV.js";import{S as Me}from"./smartphone-Bil9z04s.js";import{c as et}from"./createLucideIcon-CVIF7ato.js";import{E as tt}from"./eye-off-xLqrJCCe.js";import{E as at}from"./eye-DipFJbE8.js";import{C as st}from"./circle-alert-CcQlUadR.js";import"./index-DnoEvMOd.js";import"./index-CdJFUDDL.js";import"./index-BHJTWlLS.js";import"./index-CUoryC41.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],rt=et("key",nt);var lt=Object.defineProperty,it=Object.defineProperties,ot=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Be=(t,n,a)=>n in t?lt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,dt=(t,n)=>{for(var a in n||(n={}))Ve.call(n,a)&&Be(t,a,n[a]);if(ie)for(var a of ie(n))De.call(n,a)&&Be(t,a,n[a]);return t},ct=(t,n)=>it(t,ot(n)),ut=(t,n)=>{var a={};for(var o in t)Ve.call(t,o)&&n.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&ie)for(var o of ie(t))n.indexOf(o)<0&&De.call(t,o)&&(a[o]=t[o]);return a};function mt(t){let n=setTimeout(t,0),a=setTimeout(t,10),o=setTimeout(t,50);return[n,a,o]}function pt(t){let n=s.useRef();return s.useEffect(()=>{n.current=t}),n.current}var xt=18,Ae=40,ht=`${Ae}px`,vt=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function ft({containerRef:t,inputRef:n,pushPasswordManagerStrategy:a,isFocused:o}){let[x,c]=s.useState(!1),[B,E]=s.useState(!1),[G,W]=s.useState(!1),z=s.useMemo(()=>a==="none"?!1:(a==="increase-width"||a==="experimental-no-flickering")&&x&&B,[x,B,a]),R=s.useCallback(()=>{let f=t.current,I=n.current;if(!f||!I||G||a==="none")return;let N=f,w=N.getBoundingClientRect().left+N.offsetWidth,_=N.getBoundingClientRect().top+N.offsetHeight/2,u=w-xt,$=_;document.querySelectorAll(vt).length===0&&document.elementFromPoint(u,$)===f||(c(!0),W(!0))},[t,n,G,a]);return s.useEffect(()=>{let f=t.current;if(!f||a==="none")return;function I(){let w=window.innerWidth-f.getBoundingClientRect().right;E(w>=Ae)}I();let N=setInterval(I,1e3);return()=>{clearInterval(N)}},[t,a]),s.useEffect(()=>{let f=o||document.activeElement===n.current;if(a==="none"||!f)return;let I=setTimeout(R,0),N=setTimeout(R,2e3),w=setTimeout(R,5e3),_=setTimeout(()=>{W(!0)},6e3);return()=>{clearTimeout(I),clearTimeout(N),clearTimeout(w),clearTimeout(_)}},[n,o,a,R]),{hasPWMBadge:x,willPushPWMBadge:z,PWM_BADGE_SPACE_WIDTH:ht}}var Ge=s.createContext({}),Re=s.forwardRef((t,n)=>{var a=t,{value:o,onChange:x,maxLength:c,textAlign:B="left",pattern:E,placeholder:G,inputMode:W="numeric",onComplete:z,pushPasswordManagerStrategy:R="increase-width",pasteTransformer:f,containerClassName:I,noScriptCSSFallback:N=gt,render:w,children:_}=a,u=ut(a,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]),$,je,Ne,be,Pe;let[_e,Fe]=s.useState(typeof u.defaultValue=="string"?u.defaultValue:""),m=o??_e,L=pt(m),q=s.useCallback(r=>{x?.(r),Fe(r)},[x]),P=s.useMemo(()=>E?typeof E=="string"?new RegExp(E):E:null,[E]),p=s.useRef(null),pe=s.useRef(null),xe=s.useRef({value:m,onChange:q,isIOS:typeof window<"u"&&((je=($=window?.CSS)==null?void 0:$.supports)==null?void 0:je.call($,"-webkit-touch-callout","none"))}),Q=s.useRef({prev:[(Ne=p.current)==null?void 0:Ne.selectionStart,(be=p.current)==null?void 0:be.selectionEnd,(Pe=p.current)==null?void 0:Pe.selectionDirection]});s.useImperativeHandle(n,()=>p.current,[]),s.useEffect(()=>{let r=p.current,i=pe.current;if(!r||!i)return;xe.current.value!==r.value&&xe.current.onChange(r.value),Q.current.prev=[r.selectionStart,r.selectionEnd,r.selectionDirection];function h(){if(document.activeElement!==r){U(null),Z(null);return}let d=r.selectionStart,v=r.selectionEnd,X=r.selectionDirection,b=r.maxLength,V=r.value,C=Q.current.prev,O=-1,k=-1,D;if(V.length!==0&&d!==null&&v!==null){let qe=d===v,Ke=d===V.length&&V.length<b;if(qe&&!Ke){let A=d;if(A===0)O=0,k=1,D="forward";else if(A===b)O=A-1,k=A,D="backward";else if(b>1&&V.length>1){let fe=0;if(C[0]!==null&&C[1]!==null){D=A<C[1]?"backward":"forward";let Ue=C[0]===C[1]&&C[0]<b;D==="backward"&&!Ue&&(fe=-1)}O=fe+A,k=fe+A+1}}O!==-1&&k!==-1&&O!==k&&p.current.setSelectionRange(O,k,D)}let Oe=O!==-1?O:d,ke=k!==-1?k:v,$e=D??X;U(Oe),Z(ke),Q.current.prev=[Oe,ke,$e]}if(document.addEventListener("selectionchange",h,{capture:!0}),h(),document.activeElement===r&&he(!0),!document.getElementById("input-otp-style")){let d=document.createElement("style");if(d.id="input-otp-style",document.head.appendChild(d),d.sheet){let v="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";J(d.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),J(d.sheet,`[data-input-otp]:autofill { ${v} }`),J(d.sheet,`[data-input-otp]:-webkit-autofill { ${v} }`),J(d.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),J(d.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let g=()=>{i&&i.style.setProperty("--root-height",`${r.clientHeight}px`)};g();let j=new ResizeObserver(g);return j.observe(r),()=>{document.removeEventListener("selectionchange",h,{capture:!0}),j.disconnect()}},[]);let[Se,Te]=s.useState(!1),[K,he]=s.useState(!1),[M,U]=s.useState(null),[F,Z]=s.useState(null);s.useEffect(()=>{mt(()=>{var r,i,h,g;(r=p.current)==null||r.dispatchEvent(new Event("input"));let j=(i=p.current)==null?void 0:i.selectionStart,d=(h=p.current)==null?void 0:h.selectionEnd,v=(g=p.current)==null?void 0:g.selectionDirection;j!==null&&d!==null&&(U(j),Z(d),Q.current.prev=[j,d,v])})},[m,K]),s.useEffect(()=>{L!==void 0&&m!==L&&L.length<c&&m.length===c&&z?.(m)},[c,z,L,m]);let H=ft({containerRef:pe,inputRef:p,pushPasswordManagerStrategy:R,isFocused:K}),we=s.useCallback(r=>{let i=r.currentTarget.value.slice(0,c);if(i.length>0&&P&&!P.test(i)){r.preventDefault();return}typeof L=="string"&&i.length<L.length&&document.dispatchEvent(new Event("selectionchange")),q(i)},[c,q,L,P]),Ce=s.useCallback(()=>{var r;if(p.current){let i=Math.min(p.current.value.length,c-1),h=p.current.value.length;(r=p.current)==null||r.setSelectionRange(i,h),U(i),Z(h)}he(!0)},[c]),ye=s.useCallback(r=>{var i,h;let g=p.current;if(!f&&(!xe.current.isIOS||!r.clipboardData||!g))return;let j=r.clipboardData.getData("text/plain"),d=f?f(j):j;r.preventDefault();let v=(i=p.current)==null?void 0:i.selectionStart,X=(h=p.current)==null?void 0:h.selectionEnd,b=(v!==X?m.slice(0,v)+d+m.slice(X):m.slice(0,v)+d+m.slice(v)).slice(0,c);if(b.length>0&&P&&!P.test(b))return;g.value=b,q(b);let V=Math.min(b.length,c-1),C=b.length;g.setSelectionRange(V,C),U(V),Z(C)},[c,q,P,m]),He=s.useMemo(()=>({position:"relative",cursor:u.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[u.disabled]),Ie=s.useMemo(()=>({position:"absolute",inset:0,width:H.willPushPWMBadge?`calc(100% + ${H.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:H.willPushPWMBadge?`inset(0 ${H.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:B,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[H.PWM_BADGE_SPACE_WIDTH,H.willPushPWMBadge,B]),We=s.useMemo(()=>s.createElement("input",ct(dt({autoComplete:u.autoComplete||"one-time-code"},u),{"data-input-otp":!0,"data-input-otp-placeholder-shown":m.length===0||void 0,"data-input-otp-mss":M,"data-input-otp-mse":F,inputMode:W,pattern:P?.source,"aria-placeholder":G,style:Ie,maxLength:c,value:m,ref:p,onPaste:r=>{var i;ye(r),(i=u.onPaste)==null||i.call(u,r)},onChange:we,onMouseOver:r=>{var i;Te(!0),(i=u.onMouseOver)==null||i.call(u,r)},onMouseLeave:r=>{var i;Te(!1),(i=u.onMouseLeave)==null||i.call(u,r)},onFocus:r=>{var i;Ce(),(i=u.onFocus)==null||i.call(u,r)},onBlur:r=>{var i;he(!1),(i=u.onBlur)==null||i.call(u,r)}})),[we,Ce,ye,W,Ie,c,F,M,u,P?.source,m]),ve=s.useMemo(()=>({slots:Array.from({length:c}).map((r,i)=>{var h;let g=K&&M!==null&&F!==null&&(M===F&&i===M||i>=M&&i<F),j=m[i]!==void 0?m[i]:null,d=m[0]!==void 0?null:(h=G?.[i])!=null?h:null;return{char:j,placeholderChar:d,isActive:g,hasFakeCaret:g&&j===null}}),isFocused:K,isHovering:!u.disabled&&Se}),[K,Se,c,F,M,u.disabled,m]),ze=s.useMemo(()=>w?w(ve):s.createElement(Ge.Provider,{value:ve},_),[_,ve,w]);return s.createElement(s.Fragment,null,N!==null&&s.createElement("noscript",null,s.createElement("style",null,N)),s.createElement("div",{ref:pe,"data-input-otp-container":!0,style:He,className:I},ze,s.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},We)))});Re.displayName="Input";function J(t,n){try{t.insertRule(n)}catch{console.error("input-otp could not insert CSS rule:",n)}}var gt=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;function y({className:t,containerClassName:n,...a}){return e.jsx(Re,{"data-slot":"input-otp",containerClassName:le("flex items-center gap-2 has-disabled:opacity-50",n),className:le("disabled:cursor-not-allowed",t),...a})}function T({className:t,...n}){return e.jsx("div",{"data-slot":"input-otp-group",className:le("flex items-center",t),...n})}function l({index:t,className:n,...a}){const o=s.useContext(Ge),{char:x,hasFakeCaret:c,isActive:B}=o?.slots[t]??{};return e.jsxs("div",{"data-slot":"input-otp-slot","data-active":B,className:le("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",n),...a,children:[x,c&&e.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"animate-caret-blink bg-foreground h-4 w-px duration-1000"})})]})}function ge({...t}){return e.jsx("div",{"data-slot":"input-otp-separator",role:"separator",...t,children:e.jsx(Ze,{})})}y.__docgenInfo={description:"",methods:[],displayName:"InputOTP",props:{containerClassName:{required:!1,tsType:{name:"string"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"InputOTPGroup"};l.__docgenInfo={description:"",methods:[],displayName:"InputOTPSlot",props:{index:{required:!0,tsType:{name:"number"},description:""}}};ge.__docgenInfo={description:"",methods:[],displayName:"InputOTPSeparator"};const _t={title:"UI/Forms/InputOTP",component:y,parameters:{layout:"centered",docs:{description:{component:"일회용 비밀번호(OTP) 입력을 위한 컴포넌트입니다. 보안 인증, 이중 인증 등에 사용됩니다."}}},tags:["autodocs"],argTypes:{maxLength:{control:{type:"number"},description:"OTP 코드의 최대 길이"}}},Y={render:()=>{const[t,n]=s.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"인증 코드 입력"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"휴대폰으로 전송된 6자리 코드를 입력하세요"})]}),e.jsxs(y,{maxLength:6,value:t,onChange:a=>n(a),children:[e.jsxs(T,{children:[e.jsx(l,{index:0}),e.jsx(l,{index:1}),e.jsx(l,{index:2})]}),e.jsx(ge,{}),e.jsxs(T,{children:[e.jsx(l,{index:3}),e.jsx(l,{index:4}),e.jsx(l,{index:5})]})]}),e.jsxs("div",{className:"text-center text-sm text-muted-foreground",children:[t.length,"/6 자리 입력됨"]}),e.jsxs(S,{className:"w-full",disabled:t.length!==6,children:[e.jsx(Le,{className:"mr-2 h-4 w-4"}),"인증 완료"]})]})}},ee={render:()=>{const[t,n]=s.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"PIN 코드 입력"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"4자리 PIN 코드를 입력하세요"})]}),e.jsx(y,{maxLength:4,value:t,onChange:a=>n(a),children:e.jsxs(T,{children:[e.jsx(l,{index:0}),e.jsx(l,{index:1}),e.jsx(l,{index:2}),e.jsx(l,{index:3})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Ee,{variant:t.length===4?"default":"secondary",children:t.length===4?"완료":`${t.length}/4`})})]})}},te={render:()=>{const[t,n]=s.useState(""),[a,o]=s.useState(!1),x=()=>{t.length===6&&(o(!0),setTimeout(()=>o(!1),3e3))};return e.jsxs(oe,{className:"w-full max-w-md",children:[e.jsxs(de,{className:"text-center",children:[e.jsxs(ce,{className:"flex items-center justify-center gap-2",children:[e.jsx(Qe,{className:"h-5 w-5"}),"이메일 인증"]}),e.jsx(ue,{children:"example@email.com으로 전송된 인증 코드를 입력하세요"})]}),e.jsxs(me,{className:"space-y-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(y,{maxLength:6,value:t,onChange:c=>{n(c),c.length===6&&setTimeout(x,500)},children:e.jsxs(T,{children:[e.jsx(l,{index:0}),e.jsx(l,{index:1}),e.jsx(l,{index:2}),e.jsx(l,{index:3}),e.jsx(l,{index:4}),e.jsx(l,{index:5})]})})}),a&&e.jsxs("div",{className:"flex items-center justify-center gap-2 text-green-600",children:[e.jsx(Xe,{className:"h-4 w-4"}),e.jsx("span",{className:"text-sm",children:"인증이 완료되었습니다!"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(S,{onClick:x,disabled:t.length!==6,className:"w-full",children:"인증 확인"}),e.jsx(S,{variant:"ghost",size:"sm",children:"인증 코드 재전송"})]})]})]})}},ae={render:()=>{const[t,n]=s.useState(""),[a,o]=s.useState(!1);return e.jsxs(oe,{className:"w-full max-w-md",children:[e.jsxs(de,{className:"text-center",children:[e.jsxs(ce,{className:"flex items-center justify-center gap-2",children:[e.jsx(Ye,{className:"h-5 w-5"}),"2단계 인증"]}),e.jsx(ue,{children:"인증 앱에서 생성된 6자리 코드를 입력하세요"})]}),e.jsxs(me,{className:"space-y-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsxs(y,{maxLength:6,value:t,onChange:x=>n(x),children:[e.jsxs(T,{children:[e.jsx(l,{index:0}),e.jsx(l,{index:1}),e.jsx(l,{index:2})]}),e.jsx(ge,{}),e.jsxs(T,{children:[e.jsx(l,{index:3}),e.jsx(l,{index:4}),e.jsx(l,{index:5})]})]})}),e.jsx("div",{className:"text-center",children:e.jsxs(Ee,{variant:"outline",className:"gap-2",children:[e.jsx(Me,{className:"h-3 w-3"}),"Google Authenticator"]})}),e.jsxs(S,{className:"w-full",disabled:t.length!==6,children:[e.jsx(rt,{className:"mr-2 h-4 w-4"}),"로그인 완료"]}),e.jsx("div",{className:"text-center",children:e.jsx(S,{variant:"link",size:"sm",onClick:()=>o(!a),children:a?"인증 앱 사용":"백업 코드 사용"})}),a&&e.jsxs("div",{className:"p-3 bg-muted rounded-lg",children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"백업 코드 중 하나를 입력하세요:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-1 text-xs font-mono",children:[e.jsx("span",{children:"a1b2-c3d4"}),e.jsx("span",{children:"e5f6-g7h8"}),e.jsx("span",{children:"i9j0-k1l2"}),e.jsx("span",{children:"m3n4-o5p6"})]})]})]})]})}},se={render:()=>{const[t,n]=s.useState(""),[a,o]=s.useState(180);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"휴대폰 인증"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"010-1234-5678로 전송된 인증번호를 입력하세요"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(y,{maxLength:6,value:t,onChange:x=>n(x),children:e.jsxs(T,{children:[e.jsx(l,{index:0}),e.jsx(l,{index:1}),e.jsx(l,{index:2}),e.jsx(l,{index:3}),e.jsx(l,{index:4}),e.jsx(l,{index:5})]})})}),e.jsxs("div",{className:"text-center space-y-2",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:["남은 시간: ",Math.floor(a/60),":",(a%60).toString().padStart(2,"0")]}),e.jsx(S,{variant:"outline",size:"sm",children:"인증번호 재전송"})]}),e.jsxs(S,{className:"w-full",disabled:t.length!==6,children:[e.jsx(Me,{className:"mr-2 h-4 w-4"}),"휴대폰 인증 완료"]})]})}},ne={render:()=>{const[t,n]=s.useState(""),[a,o]=s.useState(!1);return e.jsxs(oe,{className:"w-full max-w-md",children:[e.jsxs(de,{className:"text-center",children:[e.jsxs(ce,{className:"flex items-center justify-center gap-2",children:[e.jsx(Le,{className:"h-5 w-5 text-blue-600"}),"보안 PIN 입력"]}),e.jsx(ue,{children:"계좌 이체를 위한 보안 PIN을 입력하세요"})]}),e.jsxs(me,{className:"space-y-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(y,{maxLength:6,value:t,onChange:x=>n(x),children:e.jsxs(T,{children:[e.jsx(l,{index:0}),e.jsx(l,{index:1}),e.jsx(l,{index:2}),e.jsx(l,{index:3}),e.jsx(l,{index:4}),e.jsx(l,{index:5})]})})}),e.jsx("div",{className:"flex items-center justify-center gap-2",children:e.jsx(S,{variant:"ghost",size:"sm",onClick:()=>o(!a),children:a?e.jsxs(e.Fragment,{children:[e.jsx(tt,{className:"h-4 w-4 mr-1"}),"숨기기"]}):e.jsxs(e.Fragment,{children:[e.jsx(at,{className:"h-4 w-4 mr-1"}),"보기"]})})}),a&&e.jsx("div",{className:"text-center p-2 bg-yellow-50 border border-yellow-200 rounded",children:e.jsxs("p",{className:"text-xs text-yellow-800",children:["입력된 PIN: ",t]})}),e.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded p-3",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(st,{className:"h-4 w-4 text-blue-600 mt-0.5"}),e.jsxs("div",{className:"text-xs text-blue-800",children:[e.jsx("p",{className:"font-medium",children:"보안 안내"}),e.jsx("p",{children:"PIN 번호는 타인에게 노출되지 않도록 주의하세요."})]})]})}),e.jsx(S,{className:"w-full",disabled:t.length!==6,children:"이체 승인"})]})]})}},re={render:()=>{const[t,n]=s.useState("");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, 화살표 키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 자동 포커스 이동"}),e.jsx("li",{children:"• 숫자 입력 자동 검증"}),e.jsx("li",{children:"• 접근 가능한 오류 메시지"})]})]}),e.jsxs(oe,{className:"w-full max-w-md",children:[e.jsxs(de,{children:[e.jsx(ce,{children:"접근성 OTP 입력"}),e.jsx(ue,{children:"키보드만으로 완전히 조작 가능한 OTP 입력 필드입니다"})]}),e.jsxs(me,{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(Je,{htmlFor:"otp-input",className:"sr-only",children:"6자리 인증 코드 입력"}),e.jsx(y,{id:"otp-input",maxLength:6,value:t,onChange:a=>n(a),"aria-label":"6자리 인증 코드를 입력하세요","aria-describedby":"otp-description otp-help",children:e.jsxs(T,{children:[e.jsx(l,{index:0}),e.jsx(l,{index:1}),e.jsx(l,{index:2}),e.jsx(l,{index:3}),e.jsx(l,{index:4}),e.jsx(l,{index:5})]})})]}),e.jsx("div",{id:"otp-description",className:"text-sm text-muted-foreground",children:"휴대폰으로 전송된 6자리 숫자를 입력하세요"}),e.jsxs("div",{id:"otp-help",className:"text-xs text-muted-foreground",children:["현재 ",t.length,"자리 입력됨, ",6-t.length,"자리 남음"]}),t.length===6&&e.jsx("div",{className:"text-green-600 text-sm font-medium",role:"status","aria-live":"polite",children:"✓ 인증 코드 입력이 완료되었습니다"}),e.jsx(S,{className:"w-full",disabled:t.length!==6,"aria-describedby":"submit-help",children:"인증 확인"}),e.jsx("div",{id:"submit-help",className:"sr-only",children:"6자리 모두 입력하면 인증 확인이 가능합니다"})]})]}),e.jsx("div",{className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab 키로 슬롯 이동, 숫자 키로 입력, Backspace로 삭제"})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 OTP 입력 데모입니다."}}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">인증 코드 입력</h3>
          <p className="text-sm text-muted-foreground">
            휴대폰으로 전송된 6자리 코드를 입력하세요
          </p>
        </div>
        
        <InputOTP maxLength={6} value={value} onChange={value => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        
        <div className="text-center text-sm text-muted-foreground">
          {value.length}/6 자리 입력됨
        </div>
        
        <Button className="w-full" disabled={value.length !== 6}>
          <Shield className="mr-2 h-4 w-4" />
          인증 완료
        </Button>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">PIN 코드 입력</h3>
          <p className="text-sm text-muted-foreground">
            4자리 PIN 코드를 입력하세요
          </p>
        </div>
        
        <InputOTP maxLength={4} value={value} onChange={value => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        
        <div className="flex justify-center">
          <Badge variant={value.length === 4 ? "default" : "secondary"}>
            {value.length === 4 ? '완료' : \`\${value.length}/4\`}
          </Badge>
        </div>
      </div>;
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const handleComplete = () => {
      if (value.length === 6) {
        setIsVerified(true);
        setTimeout(() => setIsVerified(false), 3000);
      }
    };
    return <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5" />
            이메일 인증
          </CardTitle>
          <CardDescription>
            example@email.com으로 전송된 인증 코드를 입력하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={value} onChange={value => {
            setValue(value);
            if (value.length === 6) {
              setTimeout(handleComplete, 500);
            }
          }}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          {isVerified && <div className="flex items-center justify-center gap-2 text-green-600">
              <Check className="h-4 w-4" />
              <span className="text-sm">인증이 완료되었습니다!</span>
            </div>}
          
          <div className="flex flex-col gap-2">
            <Button onClick={handleComplete} disabled={value.length !== 6} className="w-full">
              인증 확인
            </Button>
            <Button variant="ghost" size="sm">
              인증 코드 재전송
            </Button>
          </div>
        </CardContent>
      </Card>;
  }
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [showBackupCodes, setShowBackupCodes] = useState(false);
    return <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Lock className="h-5 w-5" />
            2단계 인증
          </CardTitle>
          <CardDescription>
            인증 앱에서 생성된 6자리 코드를 입력하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={value} onChange={value => setValue(value)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="text-center">
            <Badge variant="outline" className="gap-2">
              <Smartphone className="h-3 w-3" />
              Google Authenticator
            </Badge>
          </div>
          
          <Button className="w-full" disabled={value.length !== 6}>
            <Key className="mr-2 h-4 w-4" />
            로그인 완료
          </Button>
          
          <div className="text-center">
            <Button variant="link" size="sm" onClick={() => setShowBackupCodes(!showBackupCodes)}>
              {showBackupCodes ? '인증 앱 사용' : '백업 코드 사용'}
            </Button>
          </div>
          
          {showBackupCodes && <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                백업 코드 중 하나를 입력하세요:
              </p>
              <div className="grid grid-cols-2 gap-1 text-xs font-mono">
                <span>a1b2-c3d4</span>
                <span>e5f6-g7h8</span>
                <span>i9j0-k1l2</span>
                <span>m3n4-o5p6</span>
              </div>
            </div>}
        </CardContent>
      </Card>;
  }
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [timeLeft, setTimeLeft] = useState(180); // 3분

    return <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">휴대폰 인증</h3>
          <p className="text-sm text-muted-foreground">
            010-1234-5678로 전송된 인증번호를 입력하세요
          </p>
        </div>
        
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={value} onChange={value => setValue(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        
        <div className="text-center space-y-2">
          <div className="text-sm text-muted-foreground">
            남은 시간: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <Button variant="outline" size="sm">
            인증번호 재전송
          </Button>
        </div>
        
        <Button className="w-full" disabled={value.length !== 6}>
          <Smartphone className="mr-2 h-4 w-4" />
          휴대폰 인증 완료
        </Button>
      </div>;
  }
}`,...se.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            보안 PIN 입력
          </CardTitle>
          <CardDescription>
            계좌 이체를 위한 보안 PIN을 입력하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={value} onChange={value => setValue(value)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <>
                  <EyeOff className="h-4 w-4 mr-1" />
                  숨기기
                </> : <>
                  <Eye className="h-4 w-4 mr-1" />
                  보기
                </>}
            </Button>
          </div>
          
          {showPassword && <div className="text-center p-2 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-xs text-yellow-800">입력된 PIN: {value}</p>
            </div>}
          
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="text-xs text-blue-800">
                <p className="font-medium">보안 안내</p>
                <p>PIN 번호는 타인에게 노출되지 않도록 주의하세요.</p>
              </div>
            </div>
          </div>
          
          <Button className="w-full" disabled={value.length !== 6}>
            이체 승인
          </Button>
        </CardContent>
      </Card>;
  }
}`,...ne.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, 화살표 키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 자동 포커스 이동</li>
            <li>• 숫자 입력 자동 검증</li>
            <li>• 접근 가능한 오류 메시지</li>
          </ul>
        </div>
        
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>접근성 OTP 입력</CardTitle>
            <CardDescription>
              키보드만으로 완전히 조작 가능한 OTP 입력 필드입니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="otp-input" className="sr-only">
                6자리 인증 코드 입력
              </Label>
              <InputOTP id="otp-input" maxLength={6} value={value} onChange={value => setValue(value)} aria-label="6자리 인증 코드를 입력하세요" aria-describedby="otp-description otp-help">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            
            <div id="otp-description" className="text-sm text-muted-foreground">
              휴대폰으로 전송된 6자리 숫자를 입력하세요
            </div>
            
            <div id="otp-help" className="text-xs text-muted-foreground">
              현재 {value.length}자리 입력됨, {6 - value.length}자리 남음
            </div>
            
            {value.length === 6 && <div className="text-green-600 text-sm font-medium" role="status" aria-live="polite">
                ✓ 인증 코드 입력이 완료되었습니다
              </div>}
            
            <Button className="w-full" disabled={value.length !== 6} aria-describedby="submit-help">
              인증 확인
            </Button>
            
            <div id="submit-help" className="sr-only">
              6자리 모두 입력하면 인증 확인이 가능합니다
            </div>
          </CardContent>
        </Card>
        
        <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab 키로 슬롯 이동, 숫자 키로 입력, Backspace로 삭제
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 OTP 입력 데모입니다.'
      }
    }
  }
}`,...re.parameters?.docs?.source}}};export{re as AccessibilityDemo,ne as BankingPIN,Y as Default,te as EmailVerification,ee as FourDigitCode,se as PhoneVerification,ae as TwoFactorAuth,_t as default};
