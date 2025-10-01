import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{r as i}from"./iframe-BdMZbwUm.js";import{c as de}from"./index-BdQq_4o_.js";import{c as B}from"./index-CQPQ-BqZ.js";import{u as k}from"./index-COOYaFQ0.js";import{c as Le}from"./index-B_g0QmXh.js";import{u as Te}from"./index-BbsuTJMv.js";import{u as De}from"./index-CvWdknzs.js";import{u as Be}from"./index-B74dw3ct.js";import{u as Me}from"./index-DEdBc4IE.js";import{P as K}from"./index-BMTS4V62.js";import{c as Ee}from"./index-RuX4kDbx.js";import{c as ee}from"./utils-CBfrqCZ4.js";import{C as R,a as E,b as _,c as re,d as L}from"./card-BgCPKrWA.js";import{B as z}from"./badge-B3XW2gOL.js";import{B as M}from"./button-bDZQ1CGr.js";import{L as b}from"./label-DOMLoIND.js";import{S as P}from"./separator-BhwIUBVE.js";import{H as _e}from"./headphones-CxHnxUbh.js";import{V as ke}from"./volume-x-CT_Q9iZv.js";import{V as me}from"./volume-2-BaEWJYUI.js";import{S as Ae}from"./sun-Bs2gpW7y.js";import{F as Ue}from"./funnel-10QqEpoH.js";import{D as Ie}from"./dollar-sign-DIUrrMM2.js";import{S as ce}from"./star-C0TOQxsF.js";import{M as He}from"./music-DBENafpc.js";import{S as ze}from"./skip-back-DRrxomEW.js";import{P as Ke}from"./pause-H8-UOUkr.js";import{P as $e}from"./play-xKUj77R-.js";import{S as Fe}from"./skip-forward-CipVAHGa.js";import{M as Oe}from"./monitor-DpCdZrzp.js";import{c as ue}from"./createLucideIcon-CdHLrrBb.js";import{S as Ye}from"./settings-DU4pWZhP.js";import{Z as Xe}from"./zap-CbIKWmf2.js";import{R as qe}from"./rotate-ccw--h2mAGhq.js";import{S as Ge}from"./save-Db1t8Eb_.js";import{E as oe}from"./eye-Ch3FN2Wj.js";import"./index-RnXzWidx.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],We=ue("gauge",Ze);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Qe=ue("thermometer",Je);var xe=["PageUp","PageDown"],pe=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],fe={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},A="Slider",[se,es,ss]=Ee(A),[he]=Le(A,[ss]),[as,G]=he(A),ge=i.forwardRef((s,n)=>{const{name:a,min:r=0,max:t=100,step:o=1,orientation:l="horizontal",disabled:d=!1,minStepsBetweenThumbs:m=0,defaultValue:h=[r],value:p,onValueChange:c=()=>{},onValueCommit:u=()=>{},inverted:g=!1,form:S,...j}=s,N=i.useRef(new Set),f=i.useRef(0),w=l==="horizontal"?ns:rs,[v=[],U]=Te({prop:p,defaultProp:h,onChange:y=>{[...N.current][f.current]?.focus(),c(y)}}),Z=i.useRef(v);function W(y){const C=os(v,y);I(y,C)}function Pe(y){I(y,f.current)}function Re(){const y=Z.current[f.current];v[f.current]!==y&&u(v)}function I(y,C,{commit:J}={commit:!1}){const le=xs(o),Q=ps(Math.round((y-r)/o)*o+r,le),H=de(Q,[r,t]);U((D=[])=>{const V=is(D,H,C);if(us(V,m*o)){f.current=V.indexOf(H);const ie=String(V)!==String(D);return ie&&J&&u(V),ie?V:D}else return D})}return e.jsx(as,{scope:s.__scopeSlider,name:a,disabled:d,min:r,max:t,valueIndexToChangeRef:f,thumbs:N.current,values:v,orientation:l,form:S,children:e.jsx(se.Provider,{scope:s.__scopeSlider,children:e.jsx(se.Slot,{scope:s.__scopeSlider,children:e.jsx(w,{"aria-disabled":d,"data-disabled":d?"":void 0,...j,ref:n,onPointerDown:B(j.onPointerDown,()=>{d||(Z.current=v)}),min:r,max:t,inverted:g,onSlideStart:d?void 0:W,onSlideMove:d?void 0:Pe,onSlideEnd:d?void 0:Re,onHomeKeyDown:()=>!d&&I(r,0,{commit:!0}),onEndKeyDown:()=>!d&&I(t,v.length-1,{commit:!0}),onStepKeyDown:({event:y,direction:C})=>{if(!d){const Q=xe.includes(y.key)||y.shiftKey&&pe.includes(y.key)?10:1,H=f.current,D=v[H],V=o*Q*C;I(D+V,H,{commit:!0})}}})})})})});ge.displayName=A;var[Ne,ve]=he(A,{startEdge:"left",endEdge:"right",size:"width",direction:1}),ns=i.forwardRef((s,n)=>{const{min:a,max:r,dir:t,inverted:o,onSlideStart:l,onSlideMove:d,onSlideEnd:m,onStepKeyDown:h,...p}=s,[c,u]=i.useState(null),g=k(n,w=>u(w)),S=i.useRef(void 0),j=De(t),N=j==="ltr",f=N&&!o||!N&&o;function T(w){const v=S.current||c.getBoundingClientRect(),U=[0,v.width],W=te(U,f?[a,r]:[r,a]);return S.current=v,W(w-v.left)}return e.jsx(Ne,{scope:s.__scopeSlider,startEdge:f?"left":"right",endEdge:f?"right":"left",direction:f?1:-1,size:"width",children:e.jsx(je,{dir:j,"data-orientation":"horizontal",...p,ref:g,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:w=>{const v=T(w.clientX);l?.(v)},onSlideMove:w=>{const v=T(w.clientX);d?.(v)},onSlideEnd:()=>{S.current=void 0,m?.()},onStepKeyDown:w=>{const U=fe[f?"from-left":"from-right"].includes(w.key);h?.({event:w,direction:U?-1:1})}})})}),rs=i.forwardRef((s,n)=>{const{min:a,max:r,inverted:t,onSlideStart:o,onSlideMove:l,onSlideEnd:d,onStepKeyDown:m,...h}=s,p=i.useRef(null),c=k(n,p),u=i.useRef(void 0),g=!t;function S(j){const N=u.current||p.current.getBoundingClientRect(),f=[0,N.height],w=te(f,g?[r,a]:[a,r]);return u.current=N,w(j-N.top)}return e.jsx(Ne,{scope:s.__scopeSlider,startEdge:g?"bottom":"top",endEdge:g?"top":"bottom",size:"height",direction:g?1:-1,children:e.jsx(je,{"data-orientation":"vertical",...h,ref:c,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:j=>{const N=S(j.clientY);o?.(N)},onSlideMove:j=>{const N=S(j.clientY);l?.(N)},onSlideEnd:()=>{u.current=void 0,d?.()},onStepKeyDown:j=>{const f=fe[g?"from-bottom":"from-top"].includes(j.key);m?.({event:j,direction:f?-1:1})}})})}),je=i.forwardRef((s,n)=>{const{__scopeSlider:a,onSlideStart:r,onSlideMove:t,onSlideEnd:o,onHomeKeyDown:l,onEndKeyDown:d,onStepKeyDown:m,...h}=s,p=G(A,a);return e.jsx(K.span,{...h,ref:n,onKeyDown:B(s.onKeyDown,c=>{c.key==="Home"?(l(c),c.preventDefault()):c.key==="End"?(d(c),c.preventDefault()):xe.concat(pe).includes(c.key)&&(m(c),c.preventDefault())}),onPointerDown:B(s.onPointerDown,c=>{const u=c.target;u.setPointerCapture(c.pointerId),c.preventDefault(),p.thumbs.has(u)?u.focus():r(c)}),onPointerMove:B(s.onPointerMove,c=>{c.target.hasPointerCapture(c.pointerId)&&t(c)}),onPointerUp:B(s.onPointerUp,c=>{const u=c.target;u.hasPointerCapture(c.pointerId)&&(u.releasePointerCapture(c.pointerId),o(c))})})}),be="SliderTrack",we=i.forwardRef((s,n)=>{const{__scopeSlider:a,...r}=s,t=G(be,a);return e.jsx(K.span,{"data-disabled":t.disabled?"":void 0,"data-orientation":t.orientation,...r,ref:n})});we.displayName=be;var ae="SliderRange",ye=i.forwardRef((s,n)=>{const{__scopeSlider:a,...r}=s,t=G(ae,a),o=ve(ae,a),l=i.useRef(null),d=k(n,l),m=t.values.length,h=t.values.map(u=>Ve(u,t.min,t.max)),p=m>1?Math.min(...h):0,c=100-Math.max(...h);return e.jsx(K.span,{"data-orientation":t.orientation,"data-disabled":t.disabled?"":void 0,...r,ref:d,style:{...s.style,[o.startEdge]:p+"%",[o.endEdge]:c+"%"}})});ye.displayName=ae;var ne="SliderThumb",Se=i.forwardRef((s,n)=>{const a=es(s.__scopeSlider),[r,t]=i.useState(null),o=k(n,d=>t(d)),l=i.useMemo(()=>r?a().findIndex(d=>d.ref.current===r):-1,[a,r]);return e.jsx(ts,{...s,ref:o,index:l})}),ts=i.forwardRef((s,n)=>{const{__scopeSlider:a,index:r,name:t,...o}=s,l=G(ne,a),d=ve(ne,a),[m,h]=i.useState(null),p=k(n,T=>h(T)),c=m?l.form||!!m.closest("form"):!0,u=Me(m),g=l.values[r],S=g===void 0?0:Ve(g,l.min,l.max),j=cs(r,l.values.length),N=u?.[d.size],f=N?ds(N,S,d.direction):0;return i.useEffect(()=>{if(m)return l.thumbs.add(m),()=>{l.thumbs.delete(m)}},[m,l.thumbs]),e.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[d.startEdge]:`calc(${S}% + ${f}px)`},children:[e.jsx(se.ItemSlot,{scope:s.__scopeSlider,children:e.jsx(K.span,{role:"slider","aria-label":s["aria-label"]||j,"aria-valuemin":l.min,"aria-valuenow":g,"aria-valuemax":l.max,"aria-orientation":l.orientation,"data-orientation":l.orientation,"data-disabled":l.disabled?"":void 0,tabIndex:l.disabled?void 0:0,...o,ref:p,style:g===void 0?{display:"none"}:s.style,onFocus:B(s.onFocus,()=>{l.valueIndexToChangeRef.current=r})})}),c&&e.jsx(Ce,{name:t??(l.name?l.name+(l.values.length>1?"[]":""):void 0),form:l.form,value:g},r)]})});Se.displayName=ne;var ls="RadioBubbleInput",Ce=i.forwardRef(({__scopeSlider:s,value:n,...a},r)=>{const t=i.useRef(null),o=k(t,r),l=Be(n);return i.useEffect(()=>{const d=t.current;if(!d)return;const m=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(m,"value").set;if(l!==n&&p){const c=new Event("input",{bubbles:!0});p.call(d,n),d.dispatchEvent(c)}},[l,n]),e.jsx(K.input,{style:{display:"none"},...a,ref:o,defaultValue:n})});Ce.displayName=ls;function is(s=[],n,a){const r=[...s];return r[a]=n,r.sort((t,o)=>t-o)}function Ve(s,n,a){const o=100/(a-n)*(s-n);return de(o,[0,100])}function cs(s,n){return n>2?`Value ${s+1} of ${n}`:n===2?["Minimum","Maximum"][s]:void 0}function os(s,n){if(s.length===1)return 0;const a=s.map(t=>Math.abs(t-n)),r=Math.min(...a);return a.indexOf(r)}function ds(s,n,a){const r=s/2,o=te([0,50],[0,r]);return(r-o(n)*a)*a}function ms(s){return s.slice(0,-1).map((n,a)=>s[a+1]-n)}function us(s,n){if(n>0){const a=ms(s);return Math.min(...a)>=n}return!0}function te(s,n){return a=>{if(s[0]===s[1]||n[0]===n[1])return n[0];const r=(n[1]-n[0])/(s[1]-s[0]);return n[0]+r*(a-s[0])}}function xs(s){return(String(s).split(".")[1]||"").length}function ps(s,n){const a=Math.pow(10,n);return Math.round(s*a)/a}var fs=ge,hs=we,gs=ye,Ns=Se;function x({className:s,defaultValue:n,value:a,min:r=0,max:t=100,...o}){const l=i.useMemo(()=>Array.isArray(a)?a:Array.isArray(n)?n:[r,t],[a,n,r,t]);return e.jsxs(fs,{"data-slot":"slider",defaultValue:n,value:a,min:r,max:t,className:ee("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",s),...o,children:[e.jsx(hs,{"data-slot":"slider-track",className:ee("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),children:e.jsx(gs,{"data-slot":"slider-range",className:ee("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")})}),Array.from({length:l.length},(d,m)=>e.jsx(Ns,{"data-slot":"slider-thumb",className:"border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"},m))]})}x.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1}}};const ra={title:"UI/Forms/Slider",component:x,parameters:{layout:"padded",docs:{description:{component:"사용자가 범위 내에서 값을 선택할 수 있는 슬라이더 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{value:{description:"슬라이더의 현재 값",control:"object"},defaultValue:{description:"슬라이더의 기본 값",control:"object"},min:{description:"최솟값",control:"number"},max:{description:"최댓값",control:"number"},step:{description:"스텝 값",control:"number"},disabled:{description:"비활성화 상태",control:"boolean"}}},$={render:()=>{const[s,n]=i.useState([50]);return e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"기본 슬라이더"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(b,{children:["값: ",s[0]]}),e.jsx(x,{value:s,onValueChange:n,max:100,step:1})]})]})}},F={render:()=>{const[s,n]=i.useState([65]),[a,r]=i.useState([80]),[t,o]=i.useState([30]),[l,d]=i.useState([70]),m=s[0]===0;return e.jsxs("div",{className:"w-full max-w-lg space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"오디오 컨트롤"}),e.jsxs(R,{children:[e.jsxs(E,{children:[e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(_e,{className:"h-5 w-5"}),"사운드 설정"]}),e.jsx(re,{children:"볼륨, 베이스, 트레블을 조정하세요"})]}),e.jsxs(L,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2",children:[m?e.jsx(ke,{className:"h-4 w-4"}):e.jsx(me,{className:"h-4 w-4"}),"볼륨"]}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[s[0],"%"]})]}),e.jsx(x,{value:s,onValueChange:n,max:100,step:1,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2",children:[e.jsx(Ae,{className:"h-4 w-4"}),"화면 밝기"]}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:[a[0],"%"]})]}),e.jsx(x,{value:a,onValueChange:r,max:100,step:5,className:"w-full"})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(b,{className:"text-sm font-medium",children:"이퀄라이저"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"베이스"}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[t[0],"%"]})]}),e.jsx(x,{value:t,onValueChange:o,max:100,step:1,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"트레블"}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[l[0],"%"]})]}),e.jsx(x,{value:l,onValueChange:d,max:100,step:1,className:"w-full"})]})]})]})]})]})]})}},O={render:()=>{const[s,n]=i.useState([2e4,8e4]),[a,r]=i.useState([25,45]),[t,o]=i.useState([3.5]);return e.jsxs("div",{className:"w-full max-w-lg space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"범위 선택 필터"}),e.jsxs(R,{children:[e.jsxs(E,{children:[e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(Ue,{className:"h-5 w-5"}),"검색 필터"]}),e.jsx(re,{children:"원하는 조건을 설정하여 결과를 필터링하세요"})]}),e.jsxs(L,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2",children:[e.jsx(Ie,{className:"h-4 w-4"}),"가격 범위"]}),e.jsxs(z,{variant:"outline",children:["₩",s[0].toLocaleString()," - ₩",s[1].toLocaleString()]})]}),e.jsx(x,{value:s,onValueChange:n,max:1e5,min:1e4,step:5e3,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"₩10,000"}),e.jsx("span",{children:"₩100,000"})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{children:"연령 범위"}),e.jsxs(z,{variant:"outline",children:[a[0],"세 - ",a[1],"세"]})]}),e.jsx(x,{value:a,onValueChange:r,max:65,min:18,step:1,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"18세"}),e.jsx("span",{children:"65세"})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2",children:[e.jsx(ce,{className:"h-4 w-4"}),"최소 평점"]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-sm font-medium",children:t[0]}),e.jsx(ce,{className:"h-3 w-3 fill-yellow-400 text-yellow-400"})]})]}),e.jsx(x,{value:t,onValueChange:o,max:5,min:1,step:.5,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"1.0 ⭐"}),e.jsx("span",{children:"5.0 ⭐⭐⭐⭐⭐"})]})]}),e.jsx(M,{className:"w-full",children:"필터 적용"})]})]})]})}},Y={render:()=>{const[s,n]=i.useState([35]),[a,r]=i.useState([70]),[t,o]=i.useState([1]),[l,d]=i.useState(!1),m=s[0]/100*245,h=245,p=c=>{const u=Math.floor(c/60),g=Math.floor(c%60);return`${u}:${g.toString().padStart(2,"0")}`};return e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"미디어 플레이어"}),e.jsx(R,{children:e.jsxs(L,{className:"p-6 space-y-4",children:[e.jsx("div",{className:"aspect-square w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center",children:e.jsx(He,{className:"h-16 w-16 text-white"})}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"font-semibold",children:"좋은 날"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"IU"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(x,{value:s,onValueChange:n,max:100,step:1,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:p(m)}),e.jsx("span",{children:p(h)})]})]}),e.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[e.jsx(M,{variant:"ghost",size:"sm",children:e.jsx(ze,{className:"h-4 w-4"})}),e.jsx(M,{onClick:()=>d(!l),size:"sm",className:"h-12 w-12 rounded-full",children:l?e.jsx(Ke,{className:"h-5 w-5"}):e.jsx($e,{className:"h-5 w-5"})}),e.jsx(M,{variant:"ghost",size:"sm",children:e.jsx(Fe,{className:"h-4 w-4"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2 text-sm",children:[e.jsx(me,{className:"h-3 w-3"}),"볼륨"]}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[a[0],"%"]})]}),e.jsx(x,{value:a,onValueChange:r,max:100,step:1,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{className:"text-sm",children:"재생 속도"}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[t[0],"x"]})]}),e.jsx(x,{value:t,onValueChange:o,max:2,min:.5,step:.25,className:"w-full"}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"0.5x"}),e.jsx("span",{children:"1x"}),e.jsx("span",{children:"2x"})]})]})]})})]})}},X={render:()=>{const[s,n]=i.useState([45]),[a,r]=i.useState([67]),[t,o]=i.useState([58]),[l,d]=i.useState([75]),[m,h]=i.useState([85]);return e.jsxs("div",{className:"w-full max-w-2xl space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"시스템 모니터링"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(R,{children:[e.jsx(E,{children:e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(Oe,{className:"h-5 w-5"}),"성능 모니터"]})}),e.jsxs(L,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{className:"text-sm",children:"CPU 사용률"}),e.jsxs(z,{variant:s[0]>80?"destructive":s[0]>60?"secondary":"default",children:[s[0],"%"]})]}),e.jsx(x,{value:s,onValueChange:n,max:100,step:1,disabled:!0,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(b,{className:"text-sm",children:"메모리 사용률"}),e.jsxs(z,{variant:a[0]>85?"destructive":a[0]>70?"secondary":"default",children:[a[0],"%"]})]}),e.jsx(x,{value:a,onValueChange:r,max:100,step:1,disabled:!0,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2 text-sm",children:[e.jsx(Qe,{className:"h-3 w-3"}),"CPU 온도"]}),e.jsxs(z,{variant:t[0]>70?"destructive":t[0]>60?"secondary":"default",children:[t[0],"°C"]})]}),e.jsx(x,{value:t,onValueChange:o,max:100,min:30,step:1,disabled:!0,className:"w-full"})]})]})]}),e.jsxs(R,{children:[e.jsx(E,{children:e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(Ye,{className:"h-5 w-5"}),"시스템 제어"]})}),e.jsxs(L,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2 text-sm",children:[e.jsx(We,{className:"h-3 w-3"}),"팬 속도"]}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[l[0],"%"]})]}),e.jsx(x,{value:l,onValueChange:d,max:100,min:20,step:5,className:"w-full"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(b,{className:"flex items-center gap-2 text-sm",children:[e.jsx(Xe,{className:"h-3 w-3"}),"전력 제한"]}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[m[0],"%"]})]}),e.jsx(x,{value:m,onValueChange:h,max:100,min:50,step:5,className:"w-full"})]}),e.jsx(P,{}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs(M,{variant:"outline",size:"sm",className:"flex-1",children:[e.jsx(qe,{className:"h-3 w-3 mr-2"}),"초기화"]}),e.jsxs(M,{size:"sm",className:"flex-1",children:[e.jsx(Ge,{className:"h-3 w-3 mr-2"}),"적용"]})]})]})]})]})]})}},q={render:()=>{const[s,n]=i.useState([50]),[a,r]=i.useState([25,75]);return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, 방향키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 표시 및 시각적 피드백"}),e.jsx("li",{children:"• 적절한 색상 대비와 크기"}),e.jsx("li",{children:"• 값 변경 시 실시간 알림"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(R,{children:[e.jsxs(E,{children:[e.jsxs(_,{className:"flex items-center gap-2",children:[e.jsx(oe,{className:"h-5 w-5"}),"접근성 적용 슬라이더"]}),e.jsx(re,{children:"스크린 리더와 키보드 내비게이션을 지원하는 슬라이더"})]}),e.jsxs(L,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs(b,{htmlFor:"accessible-slider",className:"text-sm font-medium",children:["볼륨 조절 (현재: ",s[0],"%)"]}),e.jsx(x,{id:"accessible-slider",value:s,onValueChange:n,max:100,step:1,className:"w-full","aria-label":`볼륨 ${s[0]}%. 0에서 100 사이의 값을 선택하세요.`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":s[0],"aria-valuetext":`${s[0]}퍼센트`}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"0% (음소거)"}),e.jsx("span",{children:"100% (최대)"})]}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"키보드 사용: Tab으로 포커스, 방향키로 조절, Page Up/Down으로 큰 단위 조절"})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(b,{htmlFor:"accessible-range-slider",className:"text-sm font-medium",children:["가격 범위 (₩",a[0].toLocaleString()," - ₩",a[1].toLocaleString(),")"]}),e.jsx(x,{id:"accessible-range-slider",value:a,onValueChange:r,max:100,step:5,className:"w-full","aria-label":`가격 범위 ${a[0]}만원에서 ${a[1]}만원. 0에서 100 사이의 범위를 선택하세요.`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`최소 ${a[0]}만원, 최대 ${a[1]}만원`}),e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"₩0"}),e.jsx("span",{children:"₩100만"})]}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"두 개의 핸들을 각각 조절할 수 있습니다. Tab으로 핸들 간 이동 가능"})]})]})]}),e.jsxs(R,{children:[e.jsx(E,{children:e.jsx(_,{children:"슬라이더 접근성 가이드라인"})}),e.jsxs(L,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-green-600",children:"✅ 권장사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"명확한 Label과 현재 값 표시"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"적절한 ARIA 속성 사용"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"키보드 내비게이션 지원"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"시각적 포커스 인디케이터"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"적절한 크기와 터치 영역"})]})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-blue-600",children:"🎯 키보드 단축키"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"←/→"}),e.jsx("span",{children:"값 조절 (좌/우)"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"↑/↓"}),e.jsx("span",{children:"값 조절 (위/아래)"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Page Up/Down"}),e.jsx("span",{children:"큰 단위로 조절"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Home/End"}),e.jsx("span",{children:"최소/최대값으로 이동"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tab"}),e.jsx("span",{children:"다음 핸들로 이동"})]})]})]}),e.jsx(P,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-orange-600",children:"⚠️ 주의사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"너무 작은 step 값은 조작 어려움"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"범위가 너무 넓으면 정밀 조작 곤란"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"실시간 값 변경은 성능에 주의"})]})]})]})]})]})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(oe,{className:"h-5 w-5 text-blue-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-900",children:"접근성 팁"}),e.jsx("p",{className:"text-sm text-blue-800 mt-1",children:"슬라이더는 시각적 조작뿐만 아니라 키보드와 스크린 리더로도 완전히 조작 가능해야 합니다. 특히 범위 슬라이더의 경우 두 핸들 모두 접근 가능하도록 구현하는 것이 중요합니다."})]})]})})]})},parameters:{docs:{description:{story:"슬라이더 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다."}}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState([50]);
    return <div className="w-full max-w-md space-y-4">\r
        <h3 className="text-lg font-semibold mb-4">기본 슬라이더</h3>\r
        <div className="space-y-2">\r
          <Label>값: {value[0]}</Label>\r
          <Slider value={value} onValueChange={setValue} max={100} step={1} />\r
        </div>\r
      </div>;
  }
}`,...$.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [volume, setVolume] = useState([65]);
    const [brightness, setBrightness] = useState([80]);
    const [bass, setBass] = useState([30]);
    const [treble, setTreble] = useState([70]);
    const isMuted = volume[0] === 0;
    return <div className="w-full max-w-lg space-y-6">\r
        <h3 className="text-lg font-semibold mb-4">오디오 컨트롤</h3>\r
        \r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Headphones className="h-5 w-5" />\r
              사운드 설정\r
            </CardTitle>\r
            <CardDescription>\r
              볼륨, 베이스, 트레블을 조정하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-6">\r
            {/* 볼륨 */}\r
            <div className="space-y-2">\r
              <div className="flex items-center justify-between">\r
                <Label className="flex items-center gap-2">\r
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}\r
                  볼륨\r
                </Label>\r
                <span className="text-sm text-muted-foreground">{volume[0]}%</span>\r
              </div>\r
              <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />\r
            </div>\r
            \r
            {/* 밝기 */}\r
            <div className="space-y-2">\r
              <div className="flex items-center justify-between">\r
                <Label className="flex items-center gap-2">\r
                  <Sun className="h-4 w-4" />\r
                  화면 밝기\r
                </Label>\r
                <span className="text-sm text-muted-foreground">{brightness[0]}%</span>\r
              </div>\r
              <Slider value={brightness} onValueChange={setBrightness} max={100} step={5} className="w-full" />\r
            </div>\r
            \r
            <Separator />\r
            \r
            {/* 이퀄라이저 */}\r
            <div className="space-y-4">\r
              <Label className="text-sm font-medium">이퀄라이저</Label>\r
              \r
              <div className="space-y-3">\r
                <div className="space-y-2">\r
                  <div className="flex items-center justify-between">\r
                    <span className="text-sm">베이스</span>\r
                    <span className="text-xs text-muted-foreground">{bass[0]}%</span>\r
                  </div>\r
                  <Slider value={bass} onValueChange={setBass} max={100} step={1} className="w-full" />\r
                </div>\r
                \r
                <div className="space-y-2">\r
                  <div className="flex items-center justify-between">\r
                    <span className="text-sm">트레블</span>\r
                    <span className="text-xs text-muted-foreground">{treble[0]}%</span>\r
                  </div>\r
                  <Slider value={treble} onValueChange={setTreble} max={100} step={1} className="w-full" />\r
                </div>\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>;
  }
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [priceRange, setPriceRange] = useState([20000, 80000]);
    const [ageRange, setAgeRange] = useState([25, 45]);
    const [rating, setRating] = useState([3.5]);
    return <div className="w-full max-w-lg space-y-6">\r
        <h3 className="text-lg font-semibold mb-4">범위 선택 필터</h3>\r
        \r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Filter className="h-5 w-5" />\r
              검색 필터\r
            </CardTitle>\r
            <CardDescription>\r
              원하는 조건을 설정하여 결과를 필터링하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-6">\r
            {/* 가격 범위 */}\r
            <div className="space-y-3">\r
              <div className="flex items-center justify-between">\r
                <Label className="flex items-center gap-2">\r
                  <DollarSign className="h-4 w-4" />\r
                  가격 범위\r
                </Label>\r
                <Badge variant="outline">\r
                  ₩{priceRange[0].toLocaleString()} - ₩{priceRange[1].toLocaleString()}\r
                </Badge>\r
              </div>\r
              <Slider value={priceRange} onValueChange={setPriceRange} max={100000} min={10000} step={5000} className="w-full" />\r
              <div className="flex justify-between text-xs text-muted-foreground">\r
                <span>₩10,000</span>\r
                <span>₩100,000</span>\r
              </div>\r
            </div>\r
            \r
            <Separator />\r
            \r
            {/* 연령 범위 */}\r
            <div className="space-y-3">\r
              <div className="flex items-center justify-between">\r
                <Label>연령 범위</Label>\r
                <Badge variant="outline">\r
                  {ageRange[0]}세 - {ageRange[1]}세\r
                </Badge>\r
              </div>\r
              <Slider value={ageRange} onValueChange={setAgeRange} max={65} min={18} step={1} className="w-full" />\r
              <div className="flex justify-between text-xs text-muted-foreground">\r
                <span>18세</span>\r
                <span>65세</span>\r
              </div>\r
            </div>\r
            \r
            <Separator />\r
            \r
            {/* 평점 */}\r
            <div className="space-y-3">\r
              <div className="flex items-center justify-between">\r
                <Label className="flex items-center gap-2">\r
                  <Star className="h-4 w-4" />\r
                  최소 평점\r
                </Label>\r
                <div className="flex items-center gap-1">\r
                  <span className="text-sm font-medium">{rating[0]}</span>\r
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />\r
                </div>\r
              </div>\r
              <Slider value={rating} onValueChange={setRating} max={5} min={1} step={0.5} className="w-full" />\r
              <div className="flex justify-between text-xs text-muted-foreground">\r
                <span>1.0 ⭐</span>\r
                <span>5.0 ⭐⭐⭐⭐⭐</span>\r
              </div>\r
            </div>\r
            \r
            <Button className="w-full">\r
              필터 적용\r
            </Button>\r
          </CardContent>\r
        </Card>\r
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
    return <div className="w-full max-w-md space-y-4">\r
        <h3 className="text-lg font-semibold mb-4">미디어 플레이어</h3>\r
        \r
        <Card>\r
          <CardContent className="p-6 space-y-4">\r
            {/* 앨범 아트 */}\r
            <div className="aspect-square w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">\r
              <Music className="h-16 w-16 text-white" />\r
            </div>\r
            \r
            {/* 트랙 정보 */}\r
            <div className="text-center">\r
              <h4 className="font-semibold">좋은 날</h4>\r
              <p className="text-sm text-muted-foreground">IU</p>\r
            </div>\r
            \r
            {/* 진행률 */}\r
            <div className="space-y-2">\r
              <Slider value={progress} onValueChange={setProgress} max={100} step={1} className="w-full" />\r
              <div className="flex justify-between text-xs text-muted-foreground">\r
                <span>{formatTime(currentTime)}</span>\r
                <span>{formatTime(totalTime)}</span>\r
              </div>\r
            </div>\r
            \r
            {/* 컨트롤 버튼 */}\r
            <div className="flex items-center justify-center space-x-4">\r
              <Button variant="ghost" size="sm">\r
                <SkipBack className="h-4 w-4" />\r
              </Button>\r
              <Button onClick={() => setIsPlaying(!isPlaying)} size="sm" className="h-12 w-12 rounded-full">\r
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}\r
              </Button>\r
              <Button variant="ghost" size="sm">\r
                <SkipForward className="h-4 w-4" />\r
              </Button>\r
            </div>\r
            \r
            {/* 볼륨 */}\r
            <div className="space-y-2">\r
              <div className="flex items-center justify-between">\r
                <Label className="flex items-center gap-2 text-sm">\r
                  <Volume2 className="h-3 w-3" />\r
                  볼륨\r
                </Label>\r
                <span className="text-xs text-muted-foreground">{volume[0]}%</span>\r
              </div>\r
              <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-full" />\r
            </div>\r
            \r
            {/* 재생 속도 */}\r
            <div className="space-y-2">\r
              <div className="flex items-center justify-between">\r
                <Label className="text-sm">재생 속도</Label>\r
                <span className="text-xs text-muted-foreground">{playbackSpeed[0]}x</span>\r
              </div>\r
              <Slider value={playbackSpeed} onValueChange={setPlaybackSpeed} max={2} min={0.5} step={0.25} className="w-full" />\r
              <div className="flex justify-between text-xs text-muted-foreground">\r
                <span>0.5x</span>\r
                <span>1x</span>\r
                <span>2x</span>\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>;
  }
}`,...Y.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [cpuUsage, setCpuUsage] = useState([45]);
    const [memoryUsage, setMemoryUsage] = useState([67]);
    const [temperature, setTemperature] = useState([58]);
    const [fanSpeed, setFanSpeed] = useState([75]);
    const [powerLimit, setPowerLimit] = useState([85]);
    return <div className="w-full max-w-2xl space-y-6">\r
        <h3 className="text-lg font-semibold mb-4">시스템 모니터링</h3>\r
        \r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
          {/* 성능 모니터 */}\r
          <Card>\r
            <CardHeader>\r
              <CardTitle className="flex items-center gap-2">\r
                <Monitor className="h-5 w-5" />\r
                성능 모니터\r
              </CardTitle>\r
            </CardHeader>\r
            <CardContent className="space-y-4">\r
              <div className="space-y-2">\r
                <div className="flex items-center justify-between">\r
                  <Label className="text-sm">CPU 사용률</Label>\r
                  <Badge variant={cpuUsage[0] > 80 ? "destructive" : cpuUsage[0] > 60 ? "secondary" : "default"}>\r
                    {cpuUsage[0]}%\r
                  </Badge>\r
                </div>\r
                <Slider value={cpuUsage} onValueChange={setCpuUsage} max={100} step={1} disabled className="w-full" />\r
              </div>\r
              \r
              <div className="space-y-2">\r
                <div className="flex items-center justify-between">\r
                  <Label className="text-sm">메모리 사용률</Label>\r
                  <Badge variant={memoryUsage[0] > 85 ? "destructive" : memoryUsage[0] > 70 ? "secondary" : "default"}>\r
                    {memoryUsage[0]}%\r
                  </Badge>\r
                </div>\r
                <Slider value={memoryUsage} onValueChange={setMemoryUsage} max={100} step={1} disabled className="w-full" />\r
              </div>\r
              \r
              <div className="space-y-2">\r
                <div className="flex items-center justify-between">\r
                  <Label className="flex items-center gap-2 text-sm">\r
                    <Thermometer className="h-3 w-3" />\r
                    CPU 온도\r
                  </Label>\r
                  <Badge variant={temperature[0] > 70 ? "destructive" : temperature[0] > 60 ? "secondary" : "default"}>\r
                    {temperature[0]}°C\r
                  </Badge>\r
                </div>\r
                <Slider value={temperature} onValueChange={setTemperature} max={100} min={30} step={1} disabled className="w-full" />\r
              </div>\r
            </CardContent>\r
          </Card>\r
          \r
          {/* 시스템 제어 */}\r
          <Card>\r
            <CardHeader>\r
              <CardTitle className="flex items-center gap-2">\r
                <Settings className="h-5 w-5" />\r
                시스템 제어\r
              </CardTitle>\r
            </CardHeader>\r
            <CardContent className="space-y-4">\r
              <div className="space-y-2">\r
                <div className="flex items-center justify-between">\r
                  <Label className="flex items-center gap-2 text-sm">\r
                    <Gauge className="h-3 w-3" />\r
                    팬 속도\r
                  </Label>\r
                  <span className="text-xs text-muted-foreground">{fanSpeed[0]}%</span>\r
                </div>\r
                <Slider value={fanSpeed} onValueChange={setFanSpeed} max={100} min={20} step={5} className="w-full" />\r
              </div>\r
              \r
              <div className="space-y-2">\r
                <div className="flex items-center justify-between">\r
                  <Label className="flex items-center gap-2 text-sm">\r
                    <Zap className="h-3 w-3" />\r
                    전력 제한\r
                  </Label>\r
                  <span className="text-xs text-muted-foreground">{powerLimit[0]}%</span>\r
                </div>\r
                <Slider value={powerLimit} onValueChange={setPowerLimit} max={100} min={50} step={5} className="w-full" />\r
              </div>\r
              \r
              <Separator />\r
              \r
              <div className="flex space-x-2">\r
                <Button variant="outline" size="sm" className="flex-1">\r
                  <RotateCcw className="h-3 w-3 mr-2" />\r
                  초기화\r
                </Button>\r
                <Button size="sm" className="flex-1">\r
                  <Save className="h-3 w-3 mr-2" />\r
                  적용\r
                </Button>\r
              </div>\r
            </CardContent>\r
          </Card>\r
        </div>\r
      </div>;
  }
}`,...X.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState([50]);
    const [rangeValue, setRangeValue] = useState([25, 75]);
    return <div className="w-full max-w-4xl space-y-6">\r
        <div className="p-4 border rounded-lg">\r
          <h3 className="font-semibold mb-2">접근성 기능</h3>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>• 키보드 내비게이션 지원 (Tab, 방향키)</li>\r
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>\r
            <li>• 포커스 표시 및 시각적 피드백</li>\r
            <li>• 적절한 색상 대비와 크기</li>\r
            <li>• 값 변경 시 실시간 알림</li>\r
          </ul>\r
        </div>\r
        \r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
          {/* 접근성이 적용된 슬라이더 */}\r
          <Card>\r
            <CardHeader>\r
              <CardTitle className="flex items-center gap-2">\r
                <Eye className="h-5 w-5" />\r
                접근성 적용 슬라이더\r
              </CardTitle>\r
              <CardDescription>\r
                스크린 리더와 키보드 내비게이션을 지원하는 슬라이더\r
              </CardDescription>\r
            </CardHeader>\r
            <CardContent className="space-y-6">\r
              {/* 단일 값 슬라이더 */}\r
              <div className="space-y-3">\r
                <Label htmlFor="accessible-slider" className="text-sm font-medium">\r
                  볼륨 조절 (현재: {value[0]}%)\r
                </Label>\r
                <Slider id="accessible-slider" value={value} onValueChange={setValue} max={100} step={1} className="w-full" aria-label={\`볼륨 \${value[0]}%. 0에서 100 사이의 값을 선택하세요.\`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value[0]} aria-valuetext={\`\${value[0]}퍼센트\`} />\r
                <div className="flex justify-between text-xs text-muted-foreground">\r
                  <span>0% (음소거)</span>\r
                  <span>100% (최대)</span>\r
                </div>\r
                <div className="text-xs text-muted-foreground">\r
                  키보드 사용: Tab으로 포커스, 방향키로 조절, Page Up/Down으로 큰 단위 조절\r
                </div>\r
              </div>\r
              \r
              <Separator />\r
              \r
              {/* 범위 슬라이더 */}\r
              <div className="space-y-3">\r
                <Label htmlFor="accessible-range-slider" className="text-sm font-medium">\r
                  가격 범위 (₩{rangeValue[0].toLocaleString()} - ₩{rangeValue[1].toLocaleString()})\r
                </Label>\r
                <Slider id="accessible-range-slider" value={rangeValue} onValueChange={setRangeValue} max={100} step={5} className="w-full" aria-label={\`가격 범위 \${rangeValue[0]}만원에서 \${rangeValue[1]}만원. 0에서 100 사이의 범위를 선택하세요.\`} aria-valuemin={0} aria-valuemax={100} aria-valuetext={\`최소 \${rangeValue[0]}만원, 최대 \${rangeValue[1]}만원\`} />\r
                <div className="flex justify-between text-xs text-muted-foreground">\r
                  <span>₩0</span>\r
                  <span>₩100만</span>\r
                </div>\r
                <div className="text-xs text-muted-foreground">\r
                  두 개의 핸들을 각각 조절할 수 있습니다. Tab으로 핸들 간 이동 가능\r
                </div>\r
              </div>\r
            </CardContent>\r
          </Card>\r
          \r
          {/* 접근성 가이드라인 */}\r
          <Card>\r
            <CardHeader>\r
              <CardTitle>슬라이더 접근성 가이드라인</CardTitle>\r
            </CardHeader>\r
            <CardContent className="space-y-4">\r
              <div className="space-y-3">\r
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>\r
                <ul className="text-sm space-y-2">\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>명확한 Label과 현재 값 표시</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>적절한 ARIA 속성 사용</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>키보드 내비게이션 지원</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>시각적 포커스 인디케이터</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>적절한 크기와 터치 영역</span>\r
                  </li>\r
                </ul>\r
              </div>\r
              \r
              <Separator />\r
              \r
              <div className="space-y-3">\r
                <h4 className="font-medium text-blue-600">🎯 키보드 단축키</h4>\r
                <div className="text-sm space-y-1">\r
                  <div className="flex justify-between">\r
                    <span>←/→</span>\r
                    <span>값 조절 (좌/우)</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span>↑/↓</span>\r
                    <span>값 조절 (위/아래)</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span>Page Up/Down</span>\r
                    <span>큰 단위로 조절</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span>Home/End</span>\r
                    <span>최소/최대값으로 이동</span>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span>Tab</span>\r
                    <span>다음 핸들로 이동</span>\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <Separator />\r
              \r
              <div className="space-y-3">\r
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>\r
                <ul className="text-sm space-y-2">\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>너무 작은 step 값은 조작 어려움</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>범위가 너무 넓으면 정밀 조작 곤란</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>실시간 값 변경은 성능에 주의</span>\r
                  </li>\r
                </ul>\r
              </div>\r
            </CardContent>\r
          </Card>\r
        </div>\r
        \r
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">\r
          <div className="flex items-start gap-2">\r
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />\r
            <div>\r
              <h5 className="font-medium text-blue-900">접근성 팁</h5>\r
              <p className="text-sm text-blue-800 mt-1">\r
                슬라이더는 시각적 조작뿐만 아니라 키보드와 스크린 리더로도 완전히 조작 가능해야 합니다. \r
                특히 범위 슬라이더의 경우 두 핸들 모두 접근 가능하도록 구현하는 것이 중요합니다.\r
              </p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '슬라이더 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};export{q as AccessibilityDemo,$ as Default,Y as MediaPlayer,O as PriceRange,X as SystemSettings,F as VolumeControl,ra as default};
