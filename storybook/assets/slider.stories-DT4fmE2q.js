import{j as e}from"./jsx-runtime-BNwwtYSP.js";import{r as i}from"./iframe-DnvNSyRk.js";import{c as de}from"./index-BdQq_4o_.js";import{c as B}from"./index-mE1rREmL.js";import{u as k}from"./index-B9uyLz2W.js";import{c as Le}from"./index-DJjIRJmQ.js";import{u as Te}from"./index-4O7hDl4s.js";import{u as De}from"./index-DrvUYCz4.js";import{u as Be}from"./index-DViAr5bX.js";import{u as Me}from"./index-42gIw9X5.js";import{P as K}from"./index-cZtZ0fDU.js";import{c as Ee}from"./index-hmAnMFt4.js";import{c as ee}from"./utils-CBfrqCZ4.js";import{C as R,a as E,b as _,c as te,d as L}from"./card-Bu-o81qD.js";import{B as z}from"./badge-B8bvTjs5.js";import{B as M}from"./button-B21MMDDv.js";import{L as b}from"./label-LWmktt5-.js";import{S as P}from"./separator-D-SPUzJk.js";import{H as _e}from"./headphones-B6_j02ip.js";import{V as ke}from"./volume-x-C2XGiIPO.js";import{V as me}from"./volume-2-DeR7wQ0w.js";import{S as Ae}from"./sun-BZJNHIGq.js";import{F as Ue}from"./funnel-DzsRrPYV.js";import{D as Ie}from"./dollar-sign-Dp9aDNcd.js";import{S as ce}from"./star-CKb_E8Qt.js";import{M as He}from"./music-DM2aJ7-E.js";import{S as ze}from"./skip-back-BHfECBLf.js";import{P as Ke}from"./pause-o9iIs0QP.js";import{P as $e}from"./play-8ZNaG0S0.js";import{S as Fe}from"./skip-forward-CkH78MYL.js";import{M as Oe}from"./monitor-DcCiBWwU.js";import{c as ue}from"./createLucideIcon-DkJCW-cg.js";import{S as Ye}from"./settings-Bggi8QKG.js";import{Z as Xe}from"./zap-CqJOuSwf.js";import{R as qe}from"./rotate-ccw-Chrb1bFg.js";import{S as Ge}from"./save-D40efwWS.js";import{E as oe}from"./eye-B-QtfhLE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQek2qpz.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],We=ue("gauge",Ze);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Qe=ue("thermometer",Je);var xe=["PageUp","PageDown"],pe=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],fe={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},A="Slider",[se,es,ss]=Ee(A),[he]=Le(A,[ss]),[as,G]=he(A),ge=i.forwardRef((s,n)=>{const{name:a,min:t=0,max:l=100,step:o=1,orientation:r="horizontal",disabled:d=!1,minStepsBetweenThumbs:m=0,defaultValue:h=[t],value:p,onValueChange:c=()=>{},onValueCommit:u=()=>{},inverted:g=!1,form:S,...j}=s,N=i.useRef(new Set),f=i.useRef(0),w=r==="horizontal"?ns:ts,[v=[],U]=Te({prop:p,defaultProp:h,onChange:y=>{[...N.current][f.current]?.focus(),c(y)}}),Z=i.useRef(v);function W(y){const C=os(v,y);I(y,C)}function Pe(y){I(y,f.current)}function Re(){const y=Z.current[f.current];v[f.current]!==y&&u(v)}function I(y,C,{commit:J}={commit:!1}){const re=xs(o),Q=ps(Math.round((y-t)/o)*o+t,re),H=de(Q,[t,l]);U((D=[])=>{const V=is(D,H,C);if(us(V,m*o)){f.current=V.indexOf(H);const ie=String(V)!==String(D);return ie&&J&&u(V),ie?V:D}else return D})}return e.jsx(as,{scope:s.__scopeSlider,name:a,disabled:d,min:t,max:l,valueIndexToChangeRef:f,thumbs:N.current,values:v,orientation:r,form:S,children:e.jsx(se.Provider,{scope:s.__scopeSlider,children:e.jsx(se.Slot,{scope:s.__scopeSlider,children:e.jsx(w,{"aria-disabled":d,"data-disabled":d?"":void 0,...j,ref:n,onPointerDown:B(j.onPointerDown,()=>{d||(Z.current=v)}),min:t,max:l,inverted:g,onSlideStart:d?void 0:W,onSlideMove:d?void 0:Pe,onSlideEnd:d?void 0:Re,onHomeKeyDown:()=>!d&&I(t,0,{commit:!0}),onEndKeyDown:()=>!d&&I(l,v.length-1,{commit:!0}),onStepKeyDown:({event:y,direction:C})=>{if(!d){const Q=xe.includes(y.key)||y.shiftKey&&pe.includes(y.key)?10:1,H=f.current,D=v[H],V=o*Q*C;I(D+V,H,{commit:!0})}}})})})})});ge.displayName=A;var[Ne,ve]=he(A,{startEdge:"left",endEdge:"right",size:"width",direction:1}),ns=i.forwardRef((s,n)=>{const{min:a,max:t,dir:l,inverted:o,onSlideStart:r,onSlideMove:d,onSlideEnd:m,onStepKeyDown:h,...p}=s,[c,u]=i.useState(null),g=k(n,w=>u(w)),S=i.useRef(void 0),j=De(l),N=j==="ltr",f=N&&!o||!N&&o;function T(w){const v=S.current||c.getBoundingClientRect(),U=[0,v.width],W=le(U,f?[a,t]:[t,a]);return S.current=v,W(w-v.left)}return e.jsx(Ne,{scope:s.__scopeSlider,startEdge:f?"left":"right",endEdge:f?"right":"left",direction:f?1:-1,size:"width",children:e.jsx(je,{dir:j,"data-orientation":"horizontal",...p,ref:g,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:w=>{const v=T(w.clientX);r?.(v)},onSlideMove:w=>{const v=T(w.clientX);d?.(v)},onSlideEnd:()=>{S.current=void 0,m?.()},onStepKeyDown:w=>{const U=fe[f?"from-left":"from-right"].includes(w.key);h?.({event:w,direction:U?-1:1})}})})}),ts=i.forwardRef((s,n)=>{const{min:a,max:t,inverted:l,onSlideStart:o,onSlideMove:r,onSlideEnd:d,onStepKeyDown:m,...h}=s,p=i.useRef(null),c=k(n,p),u=i.useRef(void 0),g=!l;function S(j){const N=u.current||p.current.getBoundingClientRect(),f=[0,N.height],w=le(f,g?[t,a]:[a,t]);return u.current=N,w(j-N.top)}return e.jsx(Ne,{scope:s.__scopeSlider,startEdge:g?"bottom":"top",endEdge:g?"top":"bottom",size:"height",direction:g?1:-1,children:e.jsx(je,{"data-orientation":"vertical",...h,ref:c,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:j=>{const N=S(j.clientY);o?.(N)},onSlideMove:j=>{const N=S(j.clientY);r?.(N)},onSlideEnd:()=>{u.current=void 0,d?.()},onStepKeyDown:j=>{const f=fe[g?"from-bottom":"from-top"].includes(j.key);m?.({event:j,direction:f?-1:1})}})})}),je=i.forwardRef((s,n)=>{const{__scopeSlider:a,onSlideStart:t,onSlideMove:l,onSlideEnd:o,onHomeKeyDown:r,onEndKeyDown:d,onStepKeyDown:m,...h}=s,p=G(A,a);return e.jsx(K.span,{...h,ref:n,onKeyDown:B(s.onKeyDown,c=>{c.key==="Home"?(r(c),c.preventDefault()):c.key==="End"?(d(c),c.preventDefault()):xe.concat(pe).includes(c.key)&&(m(c),c.preventDefault())}),onPointerDown:B(s.onPointerDown,c=>{const u=c.target;u.setPointerCapture(c.pointerId),c.preventDefault(),p.thumbs.has(u)?u.focus():t(c)}),onPointerMove:B(s.onPointerMove,c=>{c.target.hasPointerCapture(c.pointerId)&&l(c)}),onPointerUp:B(s.onPointerUp,c=>{const u=c.target;u.hasPointerCapture(c.pointerId)&&(u.releasePointerCapture(c.pointerId),o(c))})})}),be="SliderTrack",we=i.forwardRef((s,n)=>{const{__scopeSlider:a,...t}=s,l=G(be,a);return e.jsx(K.span,{"data-disabled":l.disabled?"":void 0,"data-orientation":l.orientation,...t,ref:n})});we.displayName=be;var ae="SliderRange",ye=i.forwardRef((s,n)=>{const{__scopeSlider:a,...t}=s,l=G(ae,a),o=ve(ae,a),r=i.useRef(null),d=k(n,r),m=l.values.length,h=l.values.map(u=>Ve(u,l.min,l.max)),p=m>1?Math.min(...h):0,c=100-Math.max(...h);return e.jsx(K.span,{"data-orientation":l.orientation,"data-disabled":l.disabled?"":void 0,...t,ref:d,style:{...s.style,[o.startEdge]:p+"%",[o.endEdge]:c+"%"}})});ye.displayName=ae;var ne="SliderThumb",Se=i.forwardRef((s,n)=>{const a=es(s.__scopeSlider),[t,l]=i.useState(null),o=k(n,d=>l(d)),r=i.useMemo(()=>t?a().findIndex(d=>d.ref.current===t):-1,[a,t]);return e.jsx(ls,{...s,ref:o,index:r})}),ls=i.forwardRef((s,n)=>{const{__scopeSlider:a,index:t,name:l,...o}=s,r=G(ne,a),d=ve(ne,a),[m,h]=i.useState(null),p=k(n,T=>h(T)),c=m?r.form||!!m.closest("form"):!0,u=Me(m),g=r.values[t],S=g===void 0?0:Ve(g,r.min,r.max),j=cs(t,r.values.length),N=u?.[d.size],f=N?ds(N,S,d.direction):0;return i.useEffect(()=>{if(m)return r.thumbs.add(m),()=>{r.thumbs.delete(m)}},[m,r.thumbs]),e.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[d.startEdge]:`calc(${S}% + ${f}px)`},children:[e.jsx(se.ItemSlot,{scope:s.__scopeSlider,children:e.jsx(K.span,{role:"slider","aria-label":s["aria-label"]||j,"aria-valuemin":r.min,"aria-valuenow":g,"aria-valuemax":r.max,"aria-orientation":r.orientation,"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0,tabIndex:r.disabled?void 0:0,...o,ref:p,style:g===void 0?{display:"none"}:s.style,onFocus:B(s.onFocus,()=>{r.valueIndexToChangeRef.current=t})})}),c&&e.jsx(Ce,{name:l??(r.name?r.name+(r.values.length>1?"[]":""):void 0),form:r.form,value:g},t)]})});Se.displayName=ne;var rs="RadioBubbleInput",Ce=i.forwardRef(({__scopeSlider:s,value:n,...a},t)=>{const l=i.useRef(null),o=k(l,t),r=Be(n);return i.useEffect(()=>{const d=l.current;if(!d)return;const m=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(m,"value").set;if(r!==n&&p){const c=new Event("input",{bubbles:!0});p.call(d,n),d.dispatchEvent(c)}},[r,n]),e.jsx(K.input,{style:{display:"none"},...a,ref:o,defaultValue:n})});Ce.displayName=rs;function is(s=[],n,a){const t=[...s];return t[a]=n,t.sort((l,o)=>l-o)}function Ve(s,n,a){const o=100/(a-n)*(s-n);return de(o,[0,100])}function cs(s,n){return n>2?`Value ${s+1} of ${n}`:n===2?["Minimum","Maximum"][s]:void 0}function os(s,n){if(s.length===1)return 0;const a=s.map(l=>Math.abs(l-n)),t=Math.min(...a);return a.indexOf(t)}function ds(s,n,a){const t=s/2,o=le([0,50],[0,t]);return(t-o(n)*a)*a}function ms(s){return s.slice(0,-1).map((n,a)=>s[a+1]-n)}function us(s,n){if(n>0){const a=ms(s);return Math.min(...a)>=n}return!0}function le(s,n){return a=>{if(s[0]===s[1]||n[0]===n[1])return n[0];const t=(n[1]-n[0])/(s[1]-s[0]);return n[0]+t*(a-s[0])}}function xs(s){return(String(s).split(".")[1]||"").length}function ps(s,n){const a=Math.pow(10,n);return Math.round(s*a)/a}var fs=ge,hs=we,gs=ye,Ns=Se;function x({className:s,defaultValue:n,value:a,min:t=0,max:l=100,...o}){const r=i.useMemo(()=>Array.isArray(a)?a:Array.isArray(n)?n:[t,l],[a,n,t,l]);return e.jsxs(fs,{"data-slot":"slider",defaultValue:n,value:a,min:t,max:l,className:ee("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",s),...o,children:[e.jsx(hs,{"data-slot":"slider-track",className:ee("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),children:e.jsx(gs,{"data-slot":"slider-range",className:ee("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")})}),Array.from({length:r.length},(d,m)=>e.jsx(Ns,{"data-slot":"slider-thumb",className:"border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"},m))]})}x.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1}}};const la={title:"UI/Forms/Slider",component:x,parameters:{layout:"padded",docs:{description:{component:"사용자가 범위 내에서 값을 선택할 수 있는 슬라이더 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{value:{description:"슬라이더의 현재 값",control:"object"},defaultValue:{description:"슬라이더의 기본 값",control:"object"},min:{description:"최솟값",control:"number"},max:{description:"최댓값",control:"number"},step:{description:"스텝 값",control:"number"},disabled:{description:"비활성화 상태",control:"boolean"}}},$={render:()=>{const[s,n]=i.useState([50]);return e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"기본 슬라이더"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(b,{children:["값: ",s[0]]}),e.jsx(x,{value:s,onValueChange:n,max:100,step:1})]})]})}},F={render:()=>{const[s,n]=i.useState([65]),[a,t]=i.useState([80]),[l,o]=i.useState([30]),[r,d]=i.useState([70]),m=s[0]===0;return e.jsxs("div",{className:"w-full max-w-lg space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"오디오 컨트롤"}),e.jsxs(R,{children:[e.jsxs(E,{children:[e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(_e,{className:"h-5 w-5"}),"사운드 설정"]}),e.jsx(te,{children:"볼륨, 베이스, 트레블을 조정하세요"})]}),e.jsxs(L,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2",children:[m?e.jsx(ke,{className:"h-4 w-4"}):e.jsx(me,{className:"h-4 w-4"}),"볼륨"]}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[s[0],"%"]})]}),e.jsx(x,{value:s,onValueChange:n,max:100,step:1,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2",children:[e.jsx(Ae,{className:"h-4 w-4"}),"화면 밝기"]}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[a[0],"%"]})]}),e.jsx(x,{value:a,onValueChange:t,max:100,step:5,className:"w-full"})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(b,{className:"text-sm font-medium",children:"이퀄라이저"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"베이스"}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[l[0],"%"]})]}),e.jsx(x,{value:l,onValueChange:o,max:100,step:1,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"트레블"}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[r[0],"%"]})]}),e.jsx(x,{value:r,onValueChange:d,max:100,step:1,className:"w-full"})]})]})]})]})]})]})}},O={render:()=>{const[s,n]=i.useState([2e4,8e4]),[a,t]=i.useState([25,45]),[l,o]=i.useState([3.5]);return e.jsxs("div",{className:"w-full max-w-lg space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"범위 선택 필터"}),e.jsxs(R,{children:[e.jsxs(E,{children:[e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(Ue,{className:"h-5 w-5"}),"검색 필터"]}),e.jsx(te,{children:"원하는 조건을 설정하여 결과를 필터링하세요"})]}),e.jsxs(L,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2",children:[e.jsx(Ie,{className:"h-4 w-4"}),"가격 범위"]}),e.jsxs(z,{variant:"outline",children:["₩",s[0].toLocaleString()," - ₩",s[1].toLocaleString()]})]}),e.jsx(x,{value:s,onValueChange:n,max:1e5,min:1e4,step:5e3,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"₩10,000"}),e.jsx("span",{children:"₩100,000"})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{children:"연령 범위"}),e.jsxs(z,{variant:"outline",children:[a[0],"세 - ",a[1],"세"]})]}),e.jsx(x,{value:a,onValueChange:t,max:65,min:18,step:1,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"18세"}),e.jsx("span",{children:"65세"})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2",children:[e.jsx(ce,{className:"h-4 w-4"}),"최소 평점"]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-sm font-medium",children:l[0]}),e.jsx(ce,{className:"h-3 w-3 fill-yellow-400 text-yellow-400"})]})]}),e.jsx(x,{value:l,onValueChange:o,max:5,min:1,step:.5,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"1.0 ⭐"}),e.jsx("span",{children:"5.0 ⭐⭐⭐⭐⭐"})]})]}),e.jsx(M,{className:"w-full",children:"필터 적용"})]})]})]})}},Y={render:()=>{const[s,n]=i.useState([35]),[a,t]=i.useState([70]),[l,o]=i.useState([1]),[r,d]=i.useState(!1),m=s[0]/100*245,h=245,p=c=>{const u=Math.floor(c/60),g=Math.floor(c%60);return`${u}:${g.toString().padStart(2,"0")}`};return e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"미디어 플레이어"}),e.jsx(R,{children:e.jsxs(L,{className:"p-6 space-y-4",children:[e.jsx("div",{className:"aspect-square w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center",children:e.jsx(He,{className:"h-16 w-16 text-white"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-semibold",children:"좋은 날"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"IU"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(x,{value:s,onValueChange:n,max:100,step:1,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:p(m)}),e.jsx("span",{children:p(h)})]})]}),e.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[e.jsx(M,{variant:"ghost",size:"sm",children:e.jsx(ze,{className:"h-4 w-4"})}),e.jsx(M,{onClick:()=>d(!r),size:"sm",className:"h-12 w-12 rounded-full",children:r?e.jsx(Ke,{className:"h-5 w-5"}):e.jsx($e,{className:"h-5 w-5"})}),e.jsx(M,{variant:"ghost",size:"sm",children:e.jsx(Fe,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2 text-sm",children:[e.jsx(me,{className:"h-3 w-3"}),"볼륨"]}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[a[0],"%"]})]}),e.jsx(x,{value:a,onValueChange:t,max:100,step:1,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{className:"text-sm",children:"재생 속도"}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[l[0],"x"]})]}),e.jsx(x,{value:l,onValueChange:o,max:2,min:.5,step:.25,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"0.5x"}),e.jsx("span",{children:"1x"}),e.jsx("span",{children:"2x"})]})]})]})})]})}},X={render:()=>{const[s,n]=i.useState([45]),[a,t]=i.useState([67]),[l,o]=i.useState([58]),[r,d]=i.useState([75]),[m,h]=i.useState([85]);return e.jsxs("div",{className:"w-full max-w-2xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"시스템 모니터링"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(R,{children:[e.jsx(E,{children:e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(Oe,{className:"h-5 w-5"}),"성능 모니터"]})}),e.jsxs(L,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{className:"text-sm",children:"CPU 사용률"}),e.jsxs(z,{variant:s[0]>80?"destructive":s[0]>60?"secondary":"default",children:[s[0],"%"]})]}),e.jsx(x,{value:s,onValueChange:n,max:100,step:1,disabled:!0,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{className:"text-sm",children:"메모리 사용률"}),e.jsxs(z,{variant:a[0]>85?"destructive":a[0]>70?"secondary":"default",children:[a[0],"%"]})]}),e.jsx(x,{value:a,onValueChange:t,max:100,step:1,disabled:!0,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2 text-sm",children:[e.jsx(Qe,{className:"h-3 w-3"}),"CPU 온도"]}),e.jsxs(z,{variant:l[0]>70?"destructive":l[0]>60?"secondary":"default",children:[l[0],"°C"]})]}),e.jsx(x,{value:l,onValueChange:o,max:100,min:30,step:1,disabled:!0,className:"w-full"})]})]})]}),e.jsxs(R,{children:[e.jsx(E,{children:e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(Ye,{className:"h-5 w-5"}),"시스템 제어"]})}),e.jsxs(L,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2 text-sm",children:[e.jsx(We,{className:"h-3 w-3"}),"팬 속도"]}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[r[0],"%"]})]}),e.jsx(x,{value:r,onValueChange:d,max:100,min:20,step:5,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2 text-sm",children:[e.jsx(Xe,{className:"h-3 w-3"}),"전력 제한"]}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[m[0],"%"]})]}),e.jsx(x,{value:m,onValueChange:h,max:100,min:50,step:5,className:"w-full"})]}),e.jsx(P,{}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(M,{variant:"outline",size:"sm",className:"flex-1",children:[e.jsx(qe,{className:"h-3 w-3 mr-2"}),"초기화"]}),e.jsxs(M,{size:"sm",className:"flex-1",children:[e.jsx(Ge,{className:"h-3 w-3 mr-2"}),"적용"]})]})]})]})]})]})}},q={render:()=>{const[s,n]=i.useState([50]),[a,t]=i.useState([25,75]);return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, 방향키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 표시 및 시각적 피드백"}),e.jsx("li",{children:"• 적절한 색상 대비와 크기"}),e.jsx("li",{children:"• 값 변경 시 실시간 알림"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(R,{children:[e.jsxs(E,{children:[e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(oe,{className:"h-5 w-5"}),"접근성 적용 슬라이더"]}),e.jsx(te,{children:"스크린 리더와 키보드 내비게이션을 지원하는 슬라이더"})]}),e.jsxs(L,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs(b,{htmlFor:"accessible-slider",className:"text-sm font-medium",children:["볼륨 조절 (현재: ",s[0],"%)"]}),e.jsx(x,{id:"accessible-slider",value:s,onValueChange:n,max:100,step:1,className:"w-full","aria-label":`볼륨 ${s[0]}%. 0에서 100 사이의 값을 선택하세요.`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":s[0],"aria-valuetext":`${s[0]}퍼센트`}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"0% (음소거)"}),e.jsx("span",{children:"100% (최대)"})]}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"키보드 사용: Tab으로 포커스, 방향키로 조절, Page Up/Down으로 큰 단위 조절"})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(b,{htmlFor:"accessible-range-slider",className:"text-sm font-medium",children:["가격 범위 (₩",a[0].toLocaleString()," - ₩",a[1].toLocaleString(),")"]}),e.jsx(x,{id:"accessible-range-slider",value:a,onValueChange:t,max:100,step:5,className:"w-full","aria-label":`가격 범위 ${a[0]}만원에서 ${a[1]}만원. 0에서 100 사이의 범위를 선택하세요.`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`최소 ${a[0]}만원, 최대 ${a[1]}만원`}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"₩0"}),e.jsx("span",{children:"₩100만"})]}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"두 개의 핸들을 각각 조절할 수 있습니다. Tab으로 핸들 간 이동 가능"})]})]})]}),e.jsxs(R,{children:[e.jsx(E,{children:e.jsx(_,{children:"슬라이더 접근성 가이드라인"})}),e.jsxs(L,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-green-600",children:"✅ 권장사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"명확한 Label과 현재 값 표시"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"적절한 ARIA 속성 사용"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"키보드 내비게이션 지원"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"시각적 포커스 인디케이터"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"적절한 크기와 터치 영역"})]})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-blue-600",children:"🎯 키보드 단축키"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"←/→"}),e.jsx("span",{children:"값 조절 (좌/우)"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"↑/↓"}),e.jsx("span",{children:"값 조절 (위/아래)"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Page Up/Down"}),e.jsx("span",{children:"큰 단위로 조절"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Home/End"}),e.jsx("span",{children:"최소/최대값으로 이동"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tab"}),e.jsx("span",{children:"다음 핸들로 이동"})]})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-orange-600",children:"⚠️ 주의사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"너무 작은 step 값은 조작 어려움"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"범위가 너무 넓으면 정밀 조작 곤란"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"실시간 값 변경은 성능에 주의"})]})]})]})]})]})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(oe,{className:"h-5 w-5 text-blue-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-900",children:"접근성 팁"}),e.jsx("p",{className:"text-sm text-blue-800 mt-1",children:"슬라이더는 시각적 조작뿐만 아니라 키보드와 스크린 리더로도 완전히 조작 가능해야 합니다. 특히 범위 슬라이더의 경우 두 핸들 모두 접근 가능하도록 구현하는 것이 중요합니다."})]})]})})]})},parameters:{docs:{description:{story:"슬라이더 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다."}}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState([50]);
    return <div className="w-full max-w-md space-y-4">
        <h3 className="text-lg font-semibold mb-4">기본 슬라이더</h3>
        <div className="space-y-2">
          <Label>값: {value[0]}</Label>
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
        </div>
      </div>;
  }
}`,...$.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [volume, setVolume] = useState([65]);
    const [brightness, setBrightness] = useState([80]);
    const [bass, setBass] = useState([30]);
    const [treble, setTreble] = useState([70]);
    const isMuted = volume[0] === 0;
    return <div className="w-full max-w-lg space-y-6">
        <h3 className="text-lg font-semibold mb-4">오디오 컨트롤</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Headphones className="h-5 w-5" />
              사운드 설정
            </CardTitle>
            <CardDescription>
              볼륨, 베이스, 트레블을 조정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 볼륨 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  볼륨
                </Label>
                <span className="text-sm text-muted-foreground">{volume[0]}%</span>
              </div>
              <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />
            </div>
            
            {/* 밝기 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <Sun className="h-4 w-4" />
                  화면 밝기
                </Label>
                <span className="text-sm text-muted-foreground">{brightness[0]}%</span>
              </div>
              <Slider value={brightness} onValueChange={setBrightness} max={100} step={5} className="w-full" />
            </div>
            
            <Separator />
            
            {/* 이퀄라이저 */}
            <div className="space-y-4">
              <Label className="text-sm font-medium">이퀄라이저</Label>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">베이스</span>
                    <span className="text-xs text-muted-foreground">{bass[0]}%</span>
                  </div>
                  <Slider value={bass} onValueChange={setBass} max={100} step={1} className="w-full" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">트레블</span>
                    <span className="text-xs text-muted-foreground">{treble[0]}%</span>
                  </div>
                  <Slider value={treble} onValueChange={setTreble} max={100} step={1} className="w-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  }
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [priceRange, setPriceRange] = useState([20000, 80000]);
    const [ageRange, setAgeRange] = useState([25, 45]);
    const [rating, setRating] = useState([3.5]);
    return <div className="w-full max-w-lg space-y-6">
        <h3 className="text-lg font-semibold mb-4">범위 선택 필터</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              검색 필터
            </CardTitle>
            <CardDescription>
              원하는 조건을 설정하여 결과를 필터링하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 가격 범위 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  가격 범위
                </Label>
                <Badge variant="outline">
                  ₩{priceRange[0].toLocaleString()} - ₩{priceRange[1].toLocaleString()}
                </Badge>
              </div>
              <Slider value={priceRange} onValueChange={setPriceRange} max={100000} min={10000} step={5000} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₩10,000</span>
                <span>₩100,000</span>
              </div>
            </div>
            
            <Separator />
            
            {/* 연령 범위 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>연령 범위</Label>
                <Badge variant="outline">
                  {ageRange[0]}세 - {ageRange[1]}세
                </Badge>
              </div>
              <Slider value={ageRange} onValueChange={setAgeRange} max={65} min={18} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>18세</span>
                <span>65세</span>
              </div>
            </div>
            
            <Separator />
            
            {/* 평점 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  최소 평점
                </Label>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{rating[0]}</span>
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <Slider value={rating} onValueChange={setRating} max={5} min={1} step={0.5} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1.0 ⭐</span>
                <span>5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            
            <Button className="w-full">
              필터 적용
            </Button>
          </CardContent>
        </Card>
      </div>;
  }
}`,...O.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState([35]);
    const [volume, setVolume] = useState([70]);
    const [playbackSpeed, setPlaybackSpeed] = useState([1]);
    const [isPlaying, setIsPlaying] = useState(false);
    const currentTime = progress[0] / 100 * 245; // 4:05 총 길이
    const totalTime = 245;
    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
    };
    return <div className="w-full max-w-md space-y-4">
        <h3 className="text-lg font-semibold mb-4">미디어 플레이어</h3>
        
        <Card>
          <CardContent className="p-6 space-y-4">
            {/* 앨범 아트 */}
            <div className="aspect-square w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Music className="h-16 w-16 text-white" />
            </div>
            
            {/* 트랙 정보 */}
            <div className="text-center">
              <h4 className="font-semibold">좋은 날</h4>
              <p className="text-sm text-muted-foreground">IU</p>
            </div>
            
            {/* 진행률 */}
            <div className="space-y-2">
              <Slider value={progress} onValueChange={setProgress} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(totalTime)}</span>
              </div>
            </div>
            
            {/* 컨트롤 버튼 */}
            <div className="flex items-center justify-center space-x-4">
              <Button variant="ghost" size="sm">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button onClick={() => setIsPlaying(!isPlaying)} size="sm" className="h-12 w-12 rounded-full">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="sm">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
            
            {/* 볼륨 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm">
                  <Volume2 className="h-3 w-3" />
                  볼륨
                </Label>
                <span className="text-xs text-muted-foreground">{volume[0]}%</span>
              </div>
              <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />
            </div>
            
            {/* 재생 속도 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm">재생 속도</Label>
                <span className="text-xs text-muted-foreground">{playbackSpeed[0]}x</span>
              </div>
              <Slider value={playbackSpeed} onValueChange={setPlaybackSpeed} max={2} min={0.5} step={0.25} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0.5x</span>
                <span>1x</span>
                <span>2x</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [cpuUsage, setCpuUsage] = useState([45]);
    const [memoryUsage, setMemoryUsage] = useState([67]);
    const [temperature, setTemperature] = useState([58]);
    const [fanSpeed, setFanSpeed] = useState([75]);
    const [powerLimit, setPowerLimit] = useState([85]);
    return <div className="w-full max-w-2xl space-y-6">
        <h3 className="text-lg font-semibold mb-4">시스템 모니터링</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 성능 모니터 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                성능 모니터
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">CPU 사용률</Label>
                  <Badge variant={cpuUsage[0] > 80 ? "destructive" : cpuUsage[0] > 60 ? "secondary" : "default"}>
                    {cpuUsage[0]}%
                  </Badge>
                </div>
                <Slider value={cpuUsage} onValueChange={setCpuUsage} max={100} step={1} disabled className="w-full" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">메모리 사용률</Label>
                  <Badge variant={memoryUsage[0] > 85 ? "destructive" : memoryUsage[0] > 70 ? "secondary" : "default"}>
                    {memoryUsage[0]}%
                  </Badge>
                </div>
                <Slider value={memoryUsage} onValueChange={setMemoryUsage} max={100} step={1} disabled className="w-full" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2 text-sm">
                    <Thermometer className="h-3 w-3" />
                    CPU 온도
                  </Label>
                  <Badge variant={temperature[0] > 70 ? "destructive" : temperature[0] > 60 ? "secondary" : "default"}>
                    {temperature[0]}°C
                  </Badge>
                </div>
                <Slider value={temperature} onValueChange={setTemperature} max={100} min={30} step={1} disabled className="w-full" />
              </div>
            </CardContent>
          </Card>
          
          {/* 시스템 제어 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                시스템 제어
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2 text-sm">
                    <Gauge className="h-3 w-3" />
                    팬 속도
                  </Label>
                  <span className="text-xs text-muted-foreground">{fanSpeed[0]}%</span>
                </div>
                <Slider value={fanSpeed} onValueChange={setFanSpeed} max={100} min={20} step={5} className="w-full" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2 text-sm">
                    <Zap className="h-3 w-3" />
                    전력 제한
                  </Label>
                  <span className="text-xs text-muted-foreground">{powerLimit[0]}%</span>
                </div>
                <Slider value={powerLimit} onValueChange={setPowerLimit} max={100} min={50} step={5} className="w-full" />
              </div>
              
              <Separator />
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <RotateCcw className="h-3 w-3 mr-2" />
                  초기화
                </Button>
                <Button size="sm" className="flex-1">
                  <Save className="h-3 w-3 mr-2" />
                  적용
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>;
  }
}`,...X.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState([50]);
    const [rangeValue, setRangeValue] = useState([25, 75]);
    return <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, 방향키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 표시 및 시각적 피드백</li>
            <li>• 적절한 색상 대비와 크기</li>
            <li>• 값 변경 시 실시간 알림</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 접근성이 적용된 슬라이더 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                접근성 적용 슬라이더
              </CardTitle>
              <CardDescription>
                스크린 리더와 키보드 내비게이션을 지원하는 슬라이더
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 단일 값 슬라이더 */}
              <div className="space-y-3">
                <Label htmlFor="accessible-slider" className="text-sm font-medium">
                  볼륨 조절 (현재: {value[0]}%)
                </Label>
                <Slider id="accessible-slider" value={value} onValueChange={setValue} max={100} step={1} className="w-full" aria-label={\`볼륨 \${value[0]}%. 0에서 100 사이의 값을 선택하세요.\`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value[0]} aria-valuetext={\`\${value[0]}퍼센트\`} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0% (음소거)</span>
                  <span>100% (최대)</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  키보드 사용: Tab으로 포커스, 방향키로 조절, Page Up/Down으로 큰 단위 조절
                </div>
              </div>
              
              <Separator />
              
              {/* 범위 슬라이더 */}
              <div className="space-y-3">
                <Label htmlFor="accessible-range-slider" className="text-sm font-medium">
                  가격 범위 (₩{rangeValue[0].toLocaleString()} - ₩{rangeValue[1].toLocaleString()})
                </Label>
                <Slider id="accessible-range-slider" value={rangeValue} onValueChange={setRangeValue} max={100} step={5} className="w-full" aria-label={\`가격 범위 \${rangeValue[0]}만원에서 \${rangeValue[1]}만원. 0에서 100 사이의 범위를 선택하세요.\`} aria-valuemin={0} aria-valuemax={100} aria-valuetext={\`최소 \${rangeValue[0]}만원, 최대 \${rangeValue[1]}만원\`} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₩0</span>
                  <span>₩100만</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  두 개의 핸들을 각각 조절할 수 있습니다. Tab으로 핸들 간 이동 가능
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* 접근성 가이드라인 */}
          <Card>
            <CardHeader>
              <CardTitle>슬라이더 접근성 가이드라인</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>명확한 Label과 현재 값 표시</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 ARIA 속성 사용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>키보드 내비게이션 지원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>시각적 포커스 인디케이터</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 크기와 터치 영역</span>
                  </li>
                </ul>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">🎯 키보드 단축키</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>←/→</span>
                    <span>값 조절 (좌/우)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>↑/↓</span>
                    <span>값 조절 (위/아래)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Page Up/Down</span>
                    <span>큰 단위로 조절</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home/End</span>
                    <span>최소/최대값으로 이동</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span>다음 핸들로 이동</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>너무 작은 step 값은 조작 어려움</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>범위가 너무 넓으면 정밀 조작 곤란</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>실시간 값 변경은 성능에 주의</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900">접근성 팁</h5>
              <p className="text-sm text-blue-800 mt-1">
                슬라이더는 시각적 조작뿐만 아니라 키보드와 스크린 리더로도 완전히 조작 가능해야 합니다. 
                특히 범위 슬라이더의 경우 두 핸들 모두 접근 가능하도록 구현하는 것이 중요합니다.
              </p>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '슬라이더 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};const ra=["Default","VolumeControl","PriceRange","MediaPlayer","SystemSettings","AccessibilityDemo"];export{q as AccessibilityDemo,$ as Default,Y as MediaPlayer,O as PriceRange,X as SystemSettings,F as VolumeControl,ra as __namedExportsOrder,la as default};
