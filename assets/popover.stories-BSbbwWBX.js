import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{r as l}from"./iframe-BdMZbwUm.js";import{c as y}from"./index-CQPQ-BqZ.js";import{u as X,c as de}from"./index-COOYaFQ0.js";import{c as me}from"./index-B_g0QmXh.js";import{D as ue}from"./index-Cu_wm-Vw.js";import{h as pe,R as he,u as fe,F as ve}from"./index-DYSxFDR_.js";import{u as xe}from"./index-DI80qA_d.js";import{c as Q,R as ge,A as q,C as Ne,a as je}from"./index-DcXtInu4.js";import{P as be}from"./index-BGyhPWDZ.js";import{P as Y}from"./index-C2zivziK.js";import{P as G}from"./index-BMTS4V62.js";import{u as ye}from"./index-BbsuTJMv.js";import{c as we}from"./utils-CBfrqCZ4.js";import{B as i}from"./button-bDZQ1CGr.js";import{I as w}from"./input-BhwUvA0w.js";import{L as P}from"./label-DOMLoIND.js";import{T as Pe}from"./textarea-BbrHM6FQ.js";import{b as _,a as j,c as b,d as Ce,f as V,C as Se}from"./calendar-B3z01b60.js";import{S as u}from"./separator-BhwIUBVE.js";import{B as F}from"./badge-B3XW2gOL.js";import{S as $}from"./switch-DSnLUMu_.js";import{C as ke}from"./calendar-TKHYDXI1.js";import{B as L}from"./bell-D52r2PyL.js";import{E as Be}from"./eye-Ch3FN2Wj.js";import{U as Te}from"./user-BJjfzFFu.js";import{S as W}from"./settings-DU4pWZhP.js";import{L as Me}from"./lock-BV2N_bHU.js";import{S as ze}from"./square-pen-DxCcn08u.js";import{C as K}from"./copy-DjfSNRR3.js";import{D as Oe}from"./download-C_QE2hwp.js";import{S as Z}from"./share-CKmH9Oip.js";import{S as Re}from"./star-C0TOQxsF.js";import{T as Ee}from"./tag-CIxqCmmc.js";import{T as Ae}from"./trash-2-V1gZ4z9T.js";import{C as J}from"./check-KbtGvtZf.js";import{S as Fe}from"./send-J-4Q_yCr.js";import{C as De}from"./circle-question-mark-CqzTygxD.js";import{X as Ie}from"./x-BlIlgLCT.js";import{F as _e}from"./file-text-DmRPTJWd.js";import{M as Le}from"./mail-jnGPqVVg.js";import"./index-CdFegrUu.js";import"./index-RnXzWidx.js";import"./index-DEdBc4IE.js";import"./index-CdJFUDDL.js";import"./chevron-left-a2iwvJ6v.js";import"./createLucideIcon-CdHLrrBb.js";import"./chevron-right-CBiCTAgF.js";import"./chevron-down-ChPBX6FW.js";import"./index-B74dw3ct.js";var D="Popover",[ee]=me(D,[Q]),C=Q(),[We,f]=ee(D),re=r=>{const{__scopePopover:s,children:a,open:t,defaultOpen:o,onOpenChange:n,modal:c=!1}=r,d=C(s),g=l.useRef(null),[N,S]=l.useState(!1),[k,v]=ye({prop:t,defaultProp:o??!1,onChange:n,caller:D});return e.jsx(ge,{...d,children:e.jsx(We,{scope:s,contentId:xe(),triggerRef:g,open:k,onOpenChange:v,onOpenToggle:l.useCallback(()=>v(I=>!I),[v]),hasCustomAnchor:N,onCustomAnchorAdd:l.useCallback(()=>S(!0),[]),onCustomAnchorRemove:l.useCallback(()=>S(!1),[]),modal:c,children:a})})};re.displayName=D;var se="PopoverAnchor",Ue=l.forwardRef((r,s)=>{const{__scopePopover:a,...t}=r,o=f(se,a),n=C(a),{onCustomAnchorAdd:c,onCustomAnchorRemove:d}=o;return l.useEffect(()=>(c(),()=>d()),[c,d]),e.jsx(q,{...n,...t,ref:s})});Ue.displayName=se;var te="PopoverTrigger",ae=l.forwardRef((r,s)=>{const{__scopePopover:a,...t}=r,o=f(te,a),n=C(a),c=X(s,o.triggerRef),d=e.jsx(G.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ce(o.open),...t,ref:c,onClick:y(r.onClick,o.onOpenToggle)});return o.hasCustomAnchor?d:e.jsx(q,{asChild:!0,...n,children:d})});ae.displayName=te;var U="PopoverPortal",[Ve,$e]=ee(U,{forceMount:void 0}),oe=r=>{const{__scopePopover:s,forceMount:a,children:t,container:o}=r,n=f(U,s);return e.jsx(Ve,{scope:s,forceMount:a,children:e.jsx(Y,{present:a||n.open,children:e.jsx(be,{asChild:!0,container:o,children:t})})})};oe.displayName=U;var x="PopoverContent",ne=l.forwardRef((r,s)=>{const a=$e(x,r.__scopePopover),{forceMount:t=a.forceMount,...o}=r,n=f(x,r.__scopePopover);return e.jsx(Y,{present:t||n.open,children:n.modal?e.jsx(Xe,{...o,ref:s}):e.jsx(Qe,{...o,ref:s})})});ne.displayName=x;var He=de("PopoverContent.RemoveScroll"),Xe=l.forwardRef((r,s)=>{const a=f(x,r.__scopePopover),t=l.useRef(null),o=X(s,t),n=l.useRef(!1);return l.useEffect(()=>{const c=t.current;if(c)return pe(c)},[]),e.jsx(he,{as:He,allowPinchZoom:!0,children:e.jsx(ie,{...r,ref:o,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:y(r.onCloseAutoFocus,c=>{c.preventDefault(),n.current||a.triggerRef.current?.focus()}),onPointerDownOutside:y(r.onPointerDownOutside,c=>{const d=c.detail.originalEvent,g=d.button===0&&d.ctrlKey===!0,N=d.button===2||g;n.current=N},{checkForDefaultPrevented:!1}),onFocusOutside:y(r.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1})})})}),Qe=l.forwardRef((r,s)=>{const a=f(x,r.__scopePopover),t=l.useRef(!1),o=l.useRef(!1);return e.jsx(ie,{...r,ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{r.onCloseAutoFocus?.(n),n.defaultPrevented||(t.current||a.triggerRef.current?.focus(),n.preventDefault()),t.current=!1,o.current=!1},onInteractOutside:n=>{r.onInteractOutside?.(n),n.defaultPrevented||(t.current=!0,n.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=n.target;a.triggerRef.current?.contains(c)&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&o.current&&n.preventDefault()}})}),ie=l.forwardRef((r,s)=>{const{__scopePopover:a,trapFocus:t,onOpenAutoFocus:o,onCloseAutoFocus:n,disableOutsidePointerEvents:c,onEscapeKeyDown:d,onPointerDownOutside:g,onFocusOutside:N,onInteractOutside:S,...k}=r,v=f(x,a),I=C(a);return fe(),e.jsx(ve,{asChild:!0,loop:!0,trapped:t,onMountAutoFocus:o,onUnmountAutoFocus:n,children:e.jsx(ue,{asChild:!0,disableOutsidePointerEvents:c,onInteractOutside:S,onEscapeKeyDown:d,onPointerDownOutside:g,onFocusOutside:N,onDismiss:()=>v.onOpenChange(!1),children:e.jsx(Ne,{"data-state":ce(v.open),role:"dialog",id:v.contentId,...I,...k,ref:s,style:{...k.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),le="PopoverClose",qe=l.forwardRef((r,s)=>{const{__scopePopover:a,...t}=r,o=f(le,a);return e.jsx(G.button,{type:"button",...t,ref:s,onClick:y(r.onClick,()=>o.onOpenChange(!1))})});qe.displayName=le;var Ye="PopoverArrow",Ge=l.forwardRef((r,s)=>{const{__scopePopover:a,...t}=r,o=C(a);return e.jsx(je,{...o,...t,ref:s})});Ge.displayName=Ye;function ce(r){return r?"open":"closed"}var Ke=re,Ze=ae,Je=oe,er=ne;function m({...r}){return e.jsx(Ke,{"data-slot":"popover",...r})}function p({...r}){return e.jsx(Ze,{"data-slot":"popover-trigger",...r})}function h({className:r,align:s="center",sideOffset:a=4,...t}){return e.jsx(Je,{children:e.jsx(er,{"data-slot":"popover-content",align:s,sideOffset:a,className:we("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",r),...t})})}m.__docgenInfo={description:"",methods:[],displayName:"Popover"};p.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};h.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const rr={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}},sr=(r,s,a)=>{let t;const o=rr[r];return typeof o=="string"?t=o:s===1?t=o.one:t=o.other.replace("{{count}}",s.toString()),a?.addSuffix?a.comparison&&a.comparison>0?t+" 후":t+" 전":t},tr={full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},ar={full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},or={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},nr={date:_({formats:tr,defaultWidth:"full"}),time:_({formats:ar,defaultWidth:"full"}),dateTime:_({formats:or,defaultWidth:"full"})},ir={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"},lr=(r,s,a,t)=>ir[r],cr={narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]},dr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]},mr={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},ur={narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},pr={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},hr={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},fr=(r,s)=>{const a=Number(r);switch(String(s?.unit)){case"minute":case"second":return String(a);case"date":return a+"일";default:return a+"번째"}},vr={ordinalNumber:fr,era:j({values:cr,defaultWidth:"wide"}),quarter:j({values:dr,defaultWidth:"wide",argumentCallback:r=>r-1}),month:j({values:mr,defaultWidth:"wide"}),day:j({values:ur,defaultWidth:"wide"}),dayPeriod:j({values:pr,defaultWidth:"wide",formattingValues:hr,defaultFormattingWidth:"wide"})},xr=/^(\d+)(일|번째)?/i,gr=/\d+/i,Nr={narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},jr={any:[/^(bc|기원전)/i,/^(ad|서기)/i]},br={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},yr={any:[/1/i,/2/i,/3/i,/4/i]},wr={narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},Pr={any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},Cr={narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},Sr={any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},kr={any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},Br={any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},Tr={ordinalNumber:Ce({matchPattern:xr,parsePattern:gr,valueCallback:r=>parseInt(r,10)}),era:b({matchPatterns:Nr,defaultMatchWidth:"wide",parsePatterns:jr,defaultParseWidth:"any"}),quarter:b({matchPatterns:br,defaultMatchWidth:"wide",parsePatterns:yr,defaultParseWidth:"any",valueCallback:r=>r+1}),month:b({matchPatterns:wr,defaultMatchWidth:"wide",parsePatterns:Pr,defaultParseWidth:"any"}),day:b({matchPatterns:Cr,defaultMatchWidth:"wide",parsePatterns:Sr,defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:kr,defaultMatchWidth:"any",parsePatterns:Br,defaultParseWidth:"any"})},H={code:"ko",formatDistance:sr,formatLong:nr,formatRelative:lr,localize:vr,match:Tr,options:{weekStartsOn:0,firstWeekContainsDate:1}},Ss={title:"UI/Overlay/Popover",component:m,parameters:{layout:"centered",docs:{description:{component:"클릭 시 나타나는 작은 오버레이 창 컴포넌트입니다. 추가 정보나 간단한 폼을 표시할 때 사용합니다."}}},tags:["autodocs"],argTypes:{}},B={render:()=>e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"팝오버 열기"})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"설정"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"계정 설정을 관리하세요."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(P,{htmlFor:"width",children:"폭"}),e.jsx(w,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(P,{htmlFor:"height",children:"높이"}),e.jsx(w,{id:"height",defaultValue:"25px",className:"col-span-2 h-8"})]})]})]})})]})},T={render:()=>{const[r,s]=l.useState();return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"날짜를 선택하세요"})}),e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"w-[280px] justify-start text-left font-normal",children:[e.jsx(ke,{className:"mr-2 h-4 w-4"}),r?V(r,"yyyy년 MM월 dd일",{locale:H}):"날짜 선택"]})}),e.jsx(h,{className:"w-auto p-0",children:e.jsx(Se,{mode:"single",selected:r,onSelect:s,initialFocus:!0})})]}),r&&e.jsx("div",{className:"text-center p-2 bg-muted rounded",children:e.jsxs("p",{className:"text-sm",children:["선택된 날짜: ",e.jsx("strong",{children:V(r,"yyyy년 MM월 dd일",{locale:H})})]})})]})}},M={render:()=>{const[r,s]=l.useState(!0),[a,t]=l.useState(!1);return e.jsx("div",{className:"flex gap-4",children:e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"ghost",className:"h-8 w-8 rounded-full p-0",children:e.jsx("div",{className:"h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium",children:"홍"})})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium",children:"홍길동"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"홍길동"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"hong@example.com"})]})]}),e.jsx(u,{}),e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L,{className:"h-4 w-4"}),e.jsx(P,{htmlFor:"notifications",className:"text-sm",children:"알림"})]}),e.jsx($,{id:"notifications",checked:r,onCheckedChange:s})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Be,{className:"h-4 w-4"}),e.jsx(P,{htmlFor:"darkMode",className:"text-sm",children:"다크 모드"})]}),e.jsx($,{id:"darkMode",checked:a,onCheckedChange:t})]})]}),e.jsx(u,{}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Te,{className:"mr-2 h-4 w-4"}),"프로필 편집"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(W,{className:"mr-2 h-4 w-4"}),"계정 설정"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start text-red-600",children:[e.jsx(Me,{className:"mr-2 h-4 w-4"}),"로그아웃"]})]})]})})]})})}},z={render:()=>{const[r,s]=l.useState(3);return e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:[r,"개 항목 선택됨"]}),e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"outline",size:"sm",children:[e.jsx(W,{className:"mr-2 h-4 w-4"}),"작업"]})}),e.jsx(h,{className:"w-56",children:e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(ze,{className:"mr-2 h-4 w-4"}),"편집"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(K,{className:"mr-2 h-4 w-4"}),"복사"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Oe,{className:"mr-2 h-4 w-4"}),"다운로드"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"}),"공유"]})]}),e.jsx(u,{}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Re,{className:"mr-2 h-4 w-4"}),"즐겨찾기 추가"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Ee,{className:"mr-2 h-4 w-4"}),"태그 추가"]})]}),e.jsx(u,{}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start text-red-600",children:[e.jsx(Ae,{className:"mr-2 h-4 w-4"}),"삭제"]})]})})]})]})}},O={render:()=>{const[r,s]=l.useState("#3b82f6"),a=["#ef4444","#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e","#64748b","#374151","#111827"];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-8 h-8 rounded border border-gray-300",style:{backgroundColor:r}}),e.jsx("span",{className:"text-sm font-mono",children:r})]}),e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"색상 선택"})}),e.jsx(h,{className:"w-64",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"색상 팔레트"}),e.jsx("div",{className:"grid grid-cols-5 gap-2",children:a.map(t=>e.jsx("button",{className:`w-8 h-8 rounded border-2 ${r===t?"border-gray-900":"border-gray-200"}`,style:{backgroundColor:t},onClick:()=>s(t),"aria-label":`색상 ${t} 선택`},t))})]}),e.jsx(u,{}),e.jsxs("div",{children:[e.jsx(P,{htmlFor:"customColor",className:"text-sm font-medium",children:"커스텀 색상"}),e.jsx(w,{id:"customColor",type:"color",value:r,onChange:t=>s(t.target.value),className:"w-full h-10 mt-2"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(i,{variant:"outline",size:"sm",onClick:()=>s("#000000"),children:"초기화"}),e.jsx(i,{size:"sm",children:"적용"})]})]})})]})]})}},R={render:()=>{const[r,s]=l.useState(5),a=[{id:1,title:"새 메시지",description:"김철수님이 메시지를 보냈습니다.",time:"2분 전",read:!1,type:"message"},{id:2,title:"업데이트 완료",description:"시스템 업데이트가 완료되었습니다.",time:"1시간 전",read:!1,type:"system"},{id:3,title:"파일 공유됨",description:"새로운 문서가 공유되었습니다.",time:"3시간 전",read:!0,type:"file"}],t=o=>{switch(o){case"message":return e.jsx(Le,{className:"h-4 w-4 text-blue-500"});case"system":return e.jsx(W,{className:"h-4 w-4 text-green-500"});case"file":return e.jsx(_e,{className:"h-4 w-4 text-orange-500"});default:return e.jsx(L,{className:"h-4 w-4"})}};return e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"ghost",size:"sm",className:"relative",children:[e.jsx(L,{className:"h-4 w-4"}),r>0&&e.jsx(F,{className:"absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs",children:r})]})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-medium",children:"알림"}),e.jsx(i,{variant:"ghost",size:"sm",onClick:()=>s(0),children:"모두 읽음"})]}),e.jsx("div",{className:"grid gap-3 max-h-80 overflow-y-auto",children:a.map(o=>e.jsx("div",{className:`p-3 rounded-lg border ${o.read?"bg-muted/50":"bg-blue-50 border-blue-200"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[t(o.type),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-sm font-medium",children:o.title}),!o.read&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:o.description}),e.jsx("p",{className:"text-xs text-muted-foreground",children:o.time})]})]})},o.id))}),e.jsx(u,{}),e.jsx(i,{variant:"outline",size:"sm",className:"w-full",children:"모든 알림 보기"})]})})]})}},E={render:()=>{const[r,s]=l.useState(!1),a="https://example.com/shared-content",t=()=>{navigator.clipboard.writeText(a),s(!0),setTimeout(()=>s(!1),2e3)},o=[{name:"Twitter",color:"bg-blue-400",icon:"🐦"},{name:"Facebook",color:"bg-blue-600",icon:"📘"},{name:"LinkedIn",color:"bg-blue-700",icon:"💼"},{name:"WhatsApp",color:"bg-green-500",icon:"💬"}];return e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"outline",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"}),"공유하기"]})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"링크 공유"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(w,{value:a,readOnly:!0,className:"flex-1"}),e.jsx(i,{variant:"outline",size:"sm",onClick:t,className:"px-3",children:r?e.jsx(J,{className:"h-4 w-4 text-green-600"}):e.jsx(K,{className:"h-4 w-4"})})]}),r&&e.jsx("p",{className:"text-sm text-green-600 mt-1",children:"링크가 복사되었습니다!"})]}),e.jsx(u,{}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"소셜 미디어"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:o.map(n=>e.jsxs(i,{variant:"outline",size:"sm",className:"justify-start",children:[e.jsx("span",{className:"mr-2",children:n.icon}),n.name]},n.name))})]}),e.jsx(u,{}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"이메일로 공유"}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(w,{placeholder:"이메일 주소 입력"}),e.jsx(Pe,{placeholder:"메시지 추가 (선택사항)",rows:2,className:"resize-none"}),e.jsxs(i,{size:"sm",children:[e.jsx(Fe,{className:"mr-2 h-4 w-4"}),"보내기"]})]})]})]})})]})}},A={render:()=>{const[r,s]=l.useState(!1);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, Escape)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 관리 및 트랩"}),e.jsx("li",{children:"• 자동 포지셔닝 및 충돌 방지"}),e.jsx("li",{children:"• 적절한 색상 대비"})]})]}),e.jsxs(m,{open:r,onOpenChange:s,children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"outline","aria-haspopup":"dialog","aria-expanded":r,"aria-describedby":"popover-description",children:[e.jsx(De,{className:"mr-2 h-4 w-4"}),"접근성 도움말"]})}),e.jsx(h,{className:"w-80",role:"dialog","aria-labelledby":"popover-title","aria-describedby":"popover-content",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{id:"popover-title",className:"font-medium",children:"키보드 사용법"}),e.jsxs("div",{id:"popover-content",className:"mt-2 space-y-2 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"팝오버 열기:"}),e.jsx(F,{variant:"outline",children:"Enter / Space"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"팝오버 닫기:"}),e.jsx(F,{variant:"outline",children:"Escape"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"요소 간 이동:"}),e.jsx(F,{variant:"outline",children:"Tab / Shift+Tab"})]})]})]}),e.jsx(u,{}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"스크린 리더 지원"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• 팝오버 상태 자동 안내"}),e.jsx("li",{children:"• 콘텐츠 구조 명확히 전달"}),e.jsx("li",{children:"• 상호작용 가능한 요소 식별"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(i,{size:"sm",onClick:()=>s(!1),"aria-label":"도움말 창 닫기",children:[e.jsx(J,{className:"mr-2 h-4 w-4"}),"이해했어요"]}),e.jsxs(i,{variant:"outline",size:"sm",onClick:()=>s(!1),"aria-label":"도움말 창 닫기",children:[e.jsx(Ie,{className:"mr-2 h-4 w-4"}),"닫기"]})]})]})})]}),e.jsx("div",{id:"popover-description",className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab으로 버튼에 포커스 후 Enter/Space로 열기, Escape로 닫기"})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 팝오버 데모입니다."}}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button variant="outline">팝오버 열기</Button>\r
      </PopoverTrigger>\r
      <PopoverContent className="w-80">\r
        <div className="grid gap-4">\r
          <div className="space-y-2">\r
            <h4 className="font-medium leading-none">설정</h4>\r
            <p className="text-sm text-muted-foreground">\r
              계정 설정을 관리하세요.\r
            </p>\r
          </div>\r
          <div className="grid gap-2">\r
            <div className="grid grid-cols-3 items-center gap-4">\r
              <Label htmlFor="width">폭</Label>\r
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />\r
            </div>\r
            <div className="grid grid-cols-3 items-center gap-4">\r
              <Label htmlFor="height">높이</Label>\r
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />\r
            </div>\r
          </div>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date>();
    return <div className="space-y-4">\r
        <div className="text-center">\r
          <p className="text-sm text-muted-foreground mb-2">\r
            날짜를 선택하세요\r
          </p>\r
        </div>\r
        \r
        <Popover>\r
          <PopoverTrigger asChild>\r
            <Button variant="outline" className="w-[280px] justify-start text-left font-normal">\r
              <CalendarIcon className="mr-2 h-4 w-4" />\r
              {date ? format(date, "yyyy년 MM월 dd일", {
              locale: ko
            }) : "날짜 선택"}\r
            </Button>\r
          </PopoverTrigger>\r
          <PopoverContent className="w-auto p-0">\r
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />\r
          </PopoverContent>\r
        </Popover>\r
        \r
        {date && <div className="text-center p-2 bg-muted rounded">\r
            <p className="text-sm">\r
              선택된 날짜: <strong>{format(date, "yyyy년 MM월 dd일", {
              locale: ko
            })}</strong>\r
            </p>\r
          </div>}\r
      </div>;
  }
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    return <div className="flex gap-4">\r
        <Popover>\r
          <PopoverTrigger asChild>\r
            <Button variant="ghost" className="h-8 w-8 rounded-full p-0">\r
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">\r
                홍\r
              </div>\r
            </Button>\r
          </PopoverTrigger>\r
          <PopoverContent className="w-80">\r
            <div className="grid gap-4">\r
              <div className="flex items-center gap-3">\r
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">\r
                  홍길동\r
                </div>\r
                <div>\r
                  <h4 className="font-medium">홍길동</h4>\r
                  <p className="text-sm text-muted-foreground">hong@example.com</p>\r
                </div>\r
              </div>\r
              \r
              <Separator />\r
              \r
              <div className="grid gap-3">\r
                <div className="flex items-center justify-between">\r
                  <div className="flex items-center gap-2">\r
                    <Bell className="h-4 w-4" />\r
                    <Label htmlFor="notifications" className="text-sm">알림</Label>\r
                  </div>\r
                  <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />\r
                </div>\r
                \r
                <div className="flex items-center justify-between">\r
                  <div className="flex items-center gap-2">\r
                    <Eye className="h-4 w-4" />\r
                    <Label htmlFor="darkMode" className="text-sm">다크 모드</Label>\r
                  </div>\r
                  <Switch id="darkMode" checked={darkMode} onCheckedChange={setDarkMode} />\r
                </div>\r
              </div>\r
              \r
              <Separator />\r
              \r
              <div className="grid gap-2">\r
                <Button variant="ghost" size="sm" className="justify-start">\r
                  <User className="mr-2 h-4 w-4" />\r
                  프로필 편집\r
                </Button>\r
                <Button variant="ghost" size="sm" className="justify-start">\r
                  <Settings className="mr-2 h-4 w-4" />\r
                  계정 설정\r
                </Button>\r
                <Button variant="ghost" size="sm" className="justify-start text-red-600">\r
                  <Lock className="mr-2 h-4 w-4" />\r
                  로그아웃\r
                </Button>\r
              </div>\r
            </div>\r
          </PopoverContent>\r
        </Popover>\r
      </div>;
  }
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedItems, setSelectedItems] = useState(3);
    return <div className="flex gap-4 items-center">\r
        <div className="text-sm text-muted-foreground">\r
          {selectedItems}개 항목 선택됨\r
        </div>\r
        \r
        <Popover>\r
          <PopoverTrigger asChild>\r
            <Button variant="outline" size="sm">\r
              <Settings className="mr-2 h-4 w-4" />\r
              작업\r
            </Button>\r
          </PopoverTrigger>\r
          <PopoverContent className="w-56">\r
            <div className="grid gap-2">\r
              <div className="grid gap-2">\r
                <Button variant="ghost" size="sm" className="justify-start">\r
                  <Edit className="mr-2 h-4 w-4" />\r
                  편집\r
                </Button>\r
                <Button variant="ghost" size="sm" className="justify-start">\r
                  <Copy className="mr-2 h-4 w-4" />\r
                  복사\r
                </Button>\r
                <Button variant="ghost" size="sm" className="justify-start">\r
                  <Download className="mr-2 h-4 w-4" />\r
                  다운로드\r
                </Button>\r
                <Button variant="ghost" size="sm" className="justify-start">\r
                  <Share className="mr-2 h-4 w-4" />\r
                  공유\r
                </Button>\r
              </div>\r
              \r
              <Separator />\r
              \r
              <div className="grid gap-2">\r
                <Button variant="ghost" size="sm" className="justify-start">\r
                  <Star className="mr-2 h-4 w-4" />\r
                  즐겨찾기 추가\r
                </Button>\r
                <Button variant="ghost" size="sm" className="justify-start">\r
                  <Tag className="mr-2 h-4 w-4" />\r
                  태그 추가\r
                </Button>\r
              </div>\r
              \r
              <Separator />\r
              \r
              <Button variant="ghost" size="sm" className="justify-start text-red-600">\r
                <Trash2 className="mr-2 h-4 w-4" />\r
                삭제\r
              </Button>\r
            </div>\r
          </PopoverContent>\r
        </Popover>\r
      </div>;
  }
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedColor, setSelectedColor] = useState('#3b82f6');
    const colors = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#64748b', '#374151', '#111827'];
    return <div className="space-y-4">\r
        <div className="flex items-center gap-4">\r
          <div className="w-8 h-8 rounded border border-gray-300" style={{
          backgroundColor: selectedColor
        }} />\r
          <span className="text-sm font-mono">{selectedColor}</span>\r
        </div>\r
        \r
        <Popover>\r
          <PopoverTrigger asChild>\r
            <Button variant="outline">\r
              색상 선택\r
            </Button>\r
          </PopoverTrigger>\r
          <PopoverContent className="w-64">\r
            <div className="grid gap-4">\r
              <div>\r
                <h4 className="font-medium mb-2">색상 팔레트</h4>\r
                <div className="grid grid-cols-5 gap-2">\r
                  {colors.map(color => <button key={color} className={\`w-8 h-8 rounded border-2 \${selectedColor === color ? 'border-gray-900' : 'border-gray-200'}\`} style={{
                  backgroundColor: color
                }} onClick={() => setSelectedColor(color)} aria-label={\`색상 \${color} 선택\`} />)}\r
                </div>\r
              </div>\r
              \r
              <Separator />\r
              \r
              <div>\r
                <Label htmlFor="customColor" className="text-sm font-medium">\r
                  커스텀 색상\r
                </Label>\r
                <Input id="customColor" type="color" value={selectedColor} onChange={e => setSelectedColor(e.target.value)} className="w-full h-10 mt-2" />\r
              </div>\r
              \r
              <div className="flex justify-between">\r
                <Button variant="outline" size="sm" onClick={() => setSelectedColor('#000000')}>\r
                  초기화\r
                </Button>\r
                <Button size="sm">\r
                  적용\r
                </Button>\r
              </div>\r
            </div>\r
          </PopoverContent>\r
        </Popover>\r
      </div>;
  }
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [unreadCount, setUnreadCount] = useState(5);
    const notifications = [{
      id: 1,
      title: '새 메시지',
      description: '김철수님이 메시지를 보냈습니다.',
      time: '2분 전',
      read: false,
      type: 'message'
    }, {
      id: 2,
      title: '업데이트 완료',
      description: '시스템 업데이트가 완료되었습니다.',
      time: '1시간 전',
      read: false,
      type: 'system'
    }, {
      id: 3,
      title: '파일 공유됨',
      description: '새로운 문서가 공유되었습니다.',
      time: '3시간 전',
      read: true,
      type: 'file'
    }];
    const getNotificationIcon = (type: string) => {
      switch (type) {
        case 'message':
          return <Mail className="h-4 w-4 text-blue-500" />;
        case 'system':
          return <Settings className="h-4 w-4 text-green-500" />;
        case 'file':
          return <FileText className="h-4 w-4 text-orange-500" />;
        default:
          return <Bell className="h-4 w-4" />;
      }
    };
    return <Popover>\r
        <PopoverTrigger asChild>\r
          <Button variant="ghost" size="sm" className="relative">\r
            <Bell className="h-4 w-4" />\r
            {unreadCount > 0 && <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">\r
                {unreadCount}\r
              </Badge>}\r
          </Button>\r
        </PopoverTrigger>\r
        <PopoverContent className="w-80">\r
          <div className="grid gap-4">\r
            <div className="flex items-center justify-between">\r
              <h4 className="font-medium">알림</h4>\r
              <Button variant="ghost" size="sm" onClick={() => setUnreadCount(0)}>\r
                모두 읽음\r
              </Button>\r
            </div>\r
            \r
            <div className="grid gap-3 max-h-80 overflow-y-auto">\r
              {notifications.map(notification => <div key={notification.id} className={\`p-3 rounded-lg border \${notification.read ? 'bg-muted/50' : 'bg-blue-50 border-blue-200'}\`}>\r
                  <div className="flex items-start gap-3">\r
                    {getNotificationIcon(notification.type)}\r
                    <div className="flex-1 space-y-1">\r
                      <div className="flex items-center justify-between">\r
                        <p className="text-sm font-medium">{notification.title}</p>\r
                        {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full" />}\r
                      </div>\r
                      <p className="text-sm text-muted-foreground">\r
                        {notification.description}\r
                      </p>\r
                      <p className="text-xs text-muted-foreground">\r
                        {notification.time}\r
                      </p>\r
                    </div>\r
                  </div>\r
                </div>)}\r
            </div>\r
            \r
            <Separator />\r
            \r
            <Button variant="outline" size="sm" className="w-full">\r
              모든 알림 보기\r
            </Button>\r
          </div>\r
        </PopoverContent>\r
      </Popover>;
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const shareUrl = 'https://example.com/shared-content';
    const handleCopyUrl = () => {
      navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    };
    const socialPlatforms = [{
      name: 'Twitter',
      color: 'bg-blue-400',
      icon: '🐦'
    }, {
      name: 'Facebook',
      color: 'bg-blue-600',
      icon: '📘'
    }, {
      name: 'LinkedIn',
      color: 'bg-blue-700',
      icon: '💼'
    }, {
      name: 'WhatsApp',
      color: 'bg-green-500',
      icon: '💬'
    }];
    return <Popover>\r
        <PopoverTrigger asChild>\r
          <Button variant="outline">\r
            <Share className="mr-2 h-4 w-4" />\r
            공유하기\r
          </Button>\r
        </PopoverTrigger>\r
        <PopoverContent className="w-80">\r
          <div className="grid gap-4">\r
            <div>\r
              <h4 className="font-medium mb-2">링크 공유</h4>\r
              <div className="flex gap-2">\r
                <Input value={shareUrl} readOnly className="flex-1" />\r
                <Button variant="outline" size="sm" onClick={handleCopyUrl} className="px-3">\r
                  {copySuccess ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}\r
                </Button>\r
              </div>\r
              {copySuccess && <p className="text-sm text-green-600 mt-1">\r
                  링크가 복사되었습니다!\r
                </p>}\r
            </div>\r
            \r
            <Separator />\r
            \r
            <div>\r
              <h4 className="font-medium mb-3">소셜 미디어</h4>\r
              <div className="grid grid-cols-2 gap-2">\r
                {socialPlatforms.map(platform => <Button key={platform.name} variant="outline" size="sm" className="justify-start">\r
                    <span className="mr-2">{platform.icon}</span>\r
                    {platform.name}\r
                  </Button>)}\r
              </div>\r
            </div>\r
            \r
            <Separator />\r
            \r
            <div>\r
              <h4 className="font-medium mb-2">이메일로 공유</h4>\r
              <div className="grid gap-2">\r
                <Input placeholder="이메일 주소 입력" />\r
                <Textarea placeholder="메시지 추가 (선택사항)" rows={2} className="resize-none" />\r
                <Button size="sm">\r
                  <Send className="mr-2 h-4 w-4" />\r
                  보내기\r
                </Button>\r
              </div>\r
            </div>\r
          </div>\r
        </PopoverContent>\r
      </Popover>;
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="space-y-6">\r
        <div className="p-4 border rounded-lg">\r
          <h3 className="font-semibold mb-2">접근성 기능</h3>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape)</li>\r
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>\r
            <li>• 포커스 관리 및 트랩</li>\r
            <li>• 자동 포지셔닝 및 충돌 방지</li>\r
            <li>• 적절한 색상 대비</li>\r
          </ul>\r
        </div>\r
        \r
        <Popover open={isOpen} onOpenChange={setIsOpen}>\r
          <PopoverTrigger asChild>\r
            <Button variant="outline" aria-haspopup="dialog" aria-expanded={isOpen} aria-describedby="popover-description">\r
              <HelpCircle className="mr-2 h-4 w-4" />\r
              접근성 도움말\r
            </Button>\r
          </PopoverTrigger>\r
          <PopoverContent className="w-80" role="dialog" aria-labelledby="popover-title" aria-describedby="popover-content">\r
            <div className="grid gap-4">\r
              <div>\r
                <h4 id="popover-title" className="font-medium">\r
                  키보드 사용법\r
                </h4>\r
                <div id="popover-content" className="mt-2 space-y-2 text-sm text-muted-foreground">\r
                  <div className="flex justify-between">\r
                    <span>팝오버 열기:</span>\r
                    <Badge variant="outline">Enter / Space</Badge>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span>팝오버 닫기:</span>\r
                    <Badge variant="outline">Escape</Badge>\r
                  </div>\r
                  <div className="flex justify-between">\r
                    <span>요소 간 이동:</span>\r
                    <Badge variant="outline">Tab / Shift+Tab</Badge>\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <Separator />\r
              \r
              <div>\r
                <h4 className="font-medium mb-2">스크린 리더 지원</h4>\r
                <ul className="text-sm text-muted-foreground space-y-1">\r
                  <li>• 팝오버 상태 자동 안내</li>\r
                  <li>• 콘텐츠 구조 명확히 전달</li>\r
                  <li>• 상호작용 가능한 요소 식별</li>\r
                </ul>\r
              </div>\r
              \r
              <div className="flex gap-2">\r
                <Button size="sm" onClick={() => setIsOpen(false)} aria-label="도움말 창 닫기">\r
                  <Check className="mr-2 h-4 w-4" />\r
                  이해했어요\r
                </Button>\r
                <Button variant="outline" size="sm" onClick={() => setIsOpen(false)} aria-label="도움말 창 닫기">\r
                  <X className="mr-2 h-4 w-4" />\r
                  닫기\r
                </Button>\r
              </div>\r
            </div>\r
          </PopoverContent>\r
        </Popover>\r
        \r
        <div id="popover-description" className="text-xs text-muted-foreground p-2 bg-muted rounded">\r
          💡 팁: Tab으로 버튼에 포커스 후 Enter/Space로 열기, Escape로 닫기\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 팝오버 데모입니다.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};export{A as AccessibilityDemo,O as ColorPicker,T as DatePicker,B as Default,R as NotificationCenter,z as QuickActions,E as ShareDialog,M as UserProfile,Ss as default};
