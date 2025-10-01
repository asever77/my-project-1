import{j as e}from"./jsx-runtime-Bfl5Uy_X.js";import{r as l}from"./iframe-3EPfPVhE.js";import{c as y}from"./index-qeuikB5M.js";import{u as X,c as de}from"./index-1GTimSev.js";import{c as me}from"./index-B1oBFP7L.js";import{D as ue}from"./index-CxCbLEWN.js";import{h as pe,R as he,u as fe,F as ve}from"./index-LToCqFcg.js";import{u as xe}from"./index-DitvX08F.js";import{c as Q,R as ge,A as q,C as Ne,a as je}from"./index-qr19FkAg.js";import{P as be}from"./index-BsohAZlN.js";import{P as Y}from"./index-DbxfkGk6.js";import{P as G}from"./index-BvT6r_f3.js";import{u as ye}from"./index-YmYNKYxK.js";import{c as we}from"./utils-CBfrqCZ4.js";import{B as i}from"./button-TdBZ8kBC.js";import{I as w}from"./input-BHiK1Tmq.js";import{L as P}from"./label-D1XO6jOC.js";import{T as Pe}from"./textarea-odqrEWQV.js";import{b as _,a as j,c as b,d as Ce,f as V,C as Se}from"./calendar-D7D7UU8t.js";import{S as u}from"./separator-BYyKNqNb.js";import{B as D}from"./badge-C4b3X6z3.js";import{S as $}from"./switch-8vsXzHQY.js";import{C as ke}from"./calendar-DshoUnRv.js";import{B as L}from"./bell-Q4znZccl.js";import{E as Be}from"./eye-C-2sHHeQ.js";import{U as Te}from"./user-C7cAvtW6.js";import{S as W}from"./settings-BVCzJRZr.js";import{L as Me}from"./lock-cQHID5MH.js";import{S as ze}from"./square-pen-ByvlRSMn.js";import{C as K}from"./copy-CkfuXWBb.js";import{D as Oe}from"./download-CxLCJbLM.js";import{S as Z}from"./share-C44-xXAJ.js";import{S as Re}from"./star-D-HnYXyl.js";import{T as Ae}from"./tag-D1YLP0ex.js";import{T as Ee}from"./trash-2-BUDrrUY-.js";import{C as J}from"./check-e4CDCtNs.js";import{S as De}from"./send-DFdmn98P.js";import{C as Fe}from"./circle-question-mark-B44QWpQZ.js";import{X as Ie}from"./x-XIE8xZyQ.js";import{F as _e}from"./file-text-2fF1X-e1.js";import{M as Le}from"./mail-Bs0AK5Wz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqySJwoH.js";import"./index-DyCqwhNp.js";import"./index-CiVXem3U.js";import"./index-CdJFUDDL.js";import"./chevron-left-BPiCo0oX.js";import"./createLucideIcon-B8BZix7I.js";import"./chevron-right-CvGi8zdL.js";import"./chevron-down-WKQDmBFZ.js";import"./index-CjqN78zI.js";var F="Popover",[ee]=me(F,[Q]),C=Q(),[We,f]=ee(F),se=s=>{const{__scopePopover:t,children:r,open:a,defaultOpen:o,onOpenChange:n,modal:c=!1}=s,d=C(t),g=l.useRef(null),[N,S]=l.useState(!1),[k,v]=ye({prop:a,defaultProp:o??!1,onChange:n,caller:F});return e.jsx(ge,{...d,children:e.jsx(We,{scope:t,contentId:xe(),triggerRef:g,open:k,onOpenChange:v,onOpenToggle:l.useCallback(()=>v(I=>!I),[v]),hasCustomAnchor:N,onCustomAnchorAdd:l.useCallback(()=>S(!0),[]),onCustomAnchorRemove:l.useCallback(()=>S(!1),[]),modal:c,children:r})})};se.displayName=F;var te="PopoverAnchor",Ue=l.forwardRef((s,t)=>{const{__scopePopover:r,...a}=s,o=f(te,r),n=C(r),{onCustomAnchorAdd:c,onCustomAnchorRemove:d}=o;return l.useEffect(()=>(c(),()=>d()),[c,d]),e.jsx(q,{...n,...a,ref:t})});Ue.displayName=te;var ae="PopoverTrigger",re=l.forwardRef((s,t)=>{const{__scopePopover:r,...a}=s,o=f(ae,r),n=C(r),c=X(t,o.triggerRef),d=e.jsx(G.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ce(o.open),...a,ref:c,onClick:y(s.onClick,o.onOpenToggle)});return o.hasCustomAnchor?d:e.jsx(q,{asChild:!0,...n,children:d})});re.displayName=ae;var U="PopoverPortal",[Ve,$e]=ee(U,{forceMount:void 0}),oe=s=>{const{__scopePopover:t,forceMount:r,children:a,container:o}=s,n=f(U,t);return e.jsx(Ve,{scope:t,forceMount:r,children:e.jsx(Y,{present:r||n.open,children:e.jsx(be,{asChild:!0,container:o,children:a})})})};oe.displayName=U;var x="PopoverContent",ne=l.forwardRef((s,t)=>{const r=$e(x,s.__scopePopover),{forceMount:a=r.forceMount,...o}=s,n=f(x,s.__scopePopover);return e.jsx(Y,{present:a||n.open,children:n.modal?e.jsx(Xe,{...o,ref:t}):e.jsx(Qe,{...o,ref:t})})});ne.displayName=x;var He=de("PopoverContent.RemoveScroll"),Xe=l.forwardRef((s,t)=>{const r=f(x,s.__scopePopover),a=l.useRef(null),o=X(t,a),n=l.useRef(!1);return l.useEffect(()=>{const c=a.current;if(c)return pe(c)},[]),e.jsx(he,{as:He,allowPinchZoom:!0,children:e.jsx(ie,{...s,ref:o,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:y(s.onCloseAutoFocus,c=>{c.preventDefault(),n.current||r.triggerRef.current?.focus()}),onPointerDownOutside:y(s.onPointerDownOutside,c=>{const d=c.detail.originalEvent,g=d.button===0&&d.ctrlKey===!0,N=d.button===2||g;n.current=N},{checkForDefaultPrevented:!1}),onFocusOutside:y(s.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1})})})}),Qe=l.forwardRef((s,t)=>{const r=f(x,s.__scopePopover),a=l.useRef(!1),o=l.useRef(!1);return e.jsx(ie,{...s,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{s.onCloseAutoFocus?.(n),n.defaultPrevented||(a.current||r.triggerRef.current?.focus(),n.preventDefault()),a.current=!1,o.current=!1},onInteractOutside:n=>{s.onInteractOutside?.(n),n.defaultPrevented||(a.current=!0,n.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=n.target;r.triggerRef.current?.contains(c)&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&o.current&&n.preventDefault()}})}),ie=l.forwardRef((s,t)=>{const{__scopePopover:r,trapFocus:a,onOpenAutoFocus:o,onCloseAutoFocus:n,disableOutsidePointerEvents:c,onEscapeKeyDown:d,onPointerDownOutside:g,onFocusOutside:N,onInteractOutside:S,...k}=s,v=f(x,r),I=C(r);return fe(),e.jsx(ve,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:o,onUnmountAutoFocus:n,children:e.jsx(ue,{asChild:!0,disableOutsidePointerEvents:c,onInteractOutside:S,onEscapeKeyDown:d,onPointerDownOutside:g,onFocusOutside:N,onDismiss:()=>v.onOpenChange(!1),children:e.jsx(Ne,{"data-state":ce(v.open),role:"dialog",id:v.contentId,...I,...k,ref:t,style:{...k.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),le="PopoverClose",qe=l.forwardRef((s,t)=>{const{__scopePopover:r,...a}=s,o=f(le,r);return e.jsx(G.button,{type:"button",...a,ref:t,onClick:y(s.onClick,()=>o.onOpenChange(!1))})});qe.displayName=le;var Ye="PopoverArrow",Ge=l.forwardRef((s,t)=>{const{__scopePopover:r,...a}=s,o=C(r);return e.jsx(je,{...o,...a,ref:t})});Ge.displayName=Ye;function ce(s){return s?"open":"closed"}var Ke=se,Ze=re,Je=oe,es=ne;function m({...s}){return e.jsx(Ke,{"data-slot":"popover",...s})}function p({...s}){return e.jsx(Ze,{"data-slot":"popover-trigger",...s})}function h({className:s,align:t="center",sideOffset:r=4,...a}){return e.jsx(Je,{children:e.jsx(es,{"data-slot":"popover-content",align:t,sideOffset:r,className:we("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",s),...a})})}m.__docgenInfo={description:"",methods:[],displayName:"Popover"};p.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};h.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const ss={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}},ts=(s,t,r)=>{let a;const o=ss[s];return typeof o=="string"?a=o:t===1?a=o.one:a=o.other.replace("{{count}}",t.toString()),r?.addSuffix?r.comparison&&r.comparison>0?a+" 후":a+" 전":a},as={full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},rs={full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},os={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ns={date:_({formats:as,defaultWidth:"full"}),time:_({formats:rs,defaultWidth:"full"}),dateTime:_({formats:os,defaultWidth:"full"})},is={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"},ls=(s,t,r,a)=>is[s],cs={narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]},ds={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]},ms={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},us={narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},ps={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},hs={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},fs=(s,t)=>{const r=Number(s);switch(String(t?.unit)){case"minute":case"second":return String(r);case"date":return r+"일";default:return r+"번째"}},vs={ordinalNumber:fs,era:j({values:cs,defaultWidth:"wide"}),quarter:j({values:ds,defaultWidth:"wide",argumentCallback:s=>s-1}),month:j({values:ms,defaultWidth:"wide"}),day:j({values:us,defaultWidth:"wide"}),dayPeriod:j({values:ps,defaultWidth:"wide",formattingValues:hs,defaultFormattingWidth:"wide"})},xs=/^(\d+)(일|번째)?/i,gs=/\d+/i,Ns={narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},js={any:[/^(bc|기원전)/i,/^(ad|서기)/i]},bs={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},ys={any:[/1/i,/2/i,/3/i,/4/i]},ws={narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},Ps={any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},Cs={narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},Ss={any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},ks={any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},Bs={any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},Ts={ordinalNumber:Ce({matchPattern:xs,parsePattern:gs,valueCallback:s=>parseInt(s,10)}),era:b({matchPatterns:Ns,defaultMatchWidth:"wide",parsePatterns:js,defaultParseWidth:"any"}),quarter:b({matchPatterns:bs,defaultMatchWidth:"wide",parsePatterns:ys,defaultParseWidth:"any",valueCallback:s=>s+1}),month:b({matchPatterns:ws,defaultMatchWidth:"wide",parsePatterns:Ps,defaultParseWidth:"any"}),day:b({matchPatterns:Cs,defaultMatchWidth:"wide",parsePatterns:Ss,defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:ks,defaultMatchWidth:"any",parsePatterns:Bs,defaultParseWidth:"any"})},H={code:"ko",formatDistance:ts,formatLong:ns,formatRelative:ls,localize:vs,match:Ts,options:{weekStartsOn:0,firstWeekContainsDate:1}},kt={title:"UI/Overlay/Popover",component:m,parameters:{layout:"centered",docs:{description:{component:"클릭 시 나타나는 작은 오버레이 창 컴포넌트입니다. 추가 정보나 간단한 폼을 표시할 때 사용합니다."}}},tags:["autodocs"],argTypes:{}},B={render:()=>e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"팝오버 열기"})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"설정"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"계정 설정을 관리하세요."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(P,{htmlFor:"width",children:"폭"}),e.jsx(w,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(P,{htmlFor:"height",children:"높이"}),e.jsx(w,{id:"height",defaultValue:"25px",className:"col-span-2 h-8"})]})]})]})})]})},T={render:()=>{const[s,t]=l.useState();return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"날짜를 선택하세요"})}),e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"w-[280px] justify-start text-left font-normal",children:[e.jsx(ke,{className:"mr-2 h-4 w-4"}),s?V(s,"yyyy년 MM월 dd일",{locale:H}):"날짜 선택"]})}),e.jsx(h,{className:"w-auto p-0",children:e.jsx(Se,{mode:"single",selected:s,onSelect:t,initialFocus:!0})})]}),s&&e.jsx("div",{className:"text-center p-2 bg-muted rounded",children:e.jsxs("p",{className:"text-sm",children:["선택된 날짜: ",e.jsx("strong",{children:V(s,"yyyy년 MM월 dd일",{locale:H})})]})})]})}},M={render:()=>{const[s,t]=l.useState(!0),[r,a]=l.useState(!1);return e.jsx("div",{className:"flex gap-4",children:e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"ghost",className:"h-8 w-8 rounded-full p-0",children:e.jsx("div",{className:"h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium",children:"홍"})})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium",children:"홍길동"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"홍길동"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"hong@example.com"})]})]}),e.jsx(u,{}),e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L,{className:"h-4 w-4"}),e.jsx(P,{htmlFor:"notifications",className:"text-sm",children:"알림"})]}),e.jsx($,{id:"notifications",checked:s,onCheckedChange:t})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Be,{className:"h-4 w-4"}),e.jsx(P,{htmlFor:"darkMode",className:"text-sm",children:"다크 모드"})]}),e.jsx($,{id:"darkMode",checked:r,onCheckedChange:a})]})]}),e.jsx(u,{}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Te,{className:"mr-2 h-4 w-4"}),"프로필 편집"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(W,{className:"mr-2 h-4 w-4"}),"계정 설정"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start text-red-600",children:[e.jsx(Me,{className:"mr-2 h-4 w-4"}),"로그아웃"]})]})]})})]})})}},z={render:()=>{const[s,t]=l.useState(3);return e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:[s,"개 항목 선택됨"]}),e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"outline",size:"sm",children:[e.jsx(W,{className:"mr-2 h-4 w-4"}),"작업"]})}),e.jsx(h,{className:"w-56",children:e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(ze,{className:"mr-2 h-4 w-4"}),"편집"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(K,{className:"mr-2 h-4 w-4"}),"복사"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Oe,{className:"mr-2 h-4 w-4"}),"다운로드"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"}),"공유"]})]}),e.jsx(u,{}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Re,{className:"mr-2 h-4 w-4"}),"즐겨찾기 추가"]}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start",children:[e.jsx(Ae,{className:"mr-2 h-4 w-4"}),"태그 추가"]})]}),e.jsx(u,{}),e.jsxs(i,{variant:"ghost",size:"sm",className:"justify-start text-red-600",children:[e.jsx(Ee,{className:"mr-2 h-4 w-4"}),"삭제"]})]})})]})]})}},O={render:()=>{const[s,t]=l.useState("#3b82f6"),r=["#ef4444","#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e","#64748b","#374151","#111827"];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-8 h-8 rounded border border-gray-300",style:{backgroundColor:s}}),e.jsx("span",{className:"text-sm font-mono",children:s})]}),e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"색상 선택"})}),e.jsx(h,{className:"w-64",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"색상 팔레트"}),e.jsx("div",{className:"grid grid-cols-5 gap-2",children:r.map(a=>e.jsx("button",{className:`w-8 h-8 rounded border-2 ${s===a?"border-gray-900":"border-gray-200"}`,style:{backgroundColor:a},onClick:()=>t(a),"aria-label":`색상 ${a} 선택`},a))})]}),e.jsx(u,{}),e.jsxs("div",{children:[e.jsx(P,{htmlFor:"customColor",className:"text-sm font-medium",children:"커스텀 색상"}),e.jsx(w,{id:"customColor",type:"color",value:s,onChange:a=>t(a.target.value),className:"w-full h-10 mt-2"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(i,{variant:"outline",size:"sm",onClick:()=>t("#000000"),children:"초기화"}),e.jsx(i,{size:"sm",children:"적용"})]})]})})]})]})}},R={render:()=>{const[s,t]=l.useState(5),r=[{id:1,title:"새 메시지",description:"김철수님이 메시지를 보냈습니다.",time:"2분 전",read:!1,type:"message"},{id:2,title:"업데이트 완료",description:"시스템 업데이트가 완료되었습니다.",time:"1시간 전",read:!1,type:"system"},{id:3,title:"파일 공유됨",description:"새로운 문서가 공유되었습니다.",time:"3시간 전",read:!0,type:"file"}],a=o=>{switch(o){case"message":return e.jsx(Le,{className:"h-4 w-4 text-blue-500"});case"system":return e.jsx(W,{className:"h-4 w-4 text-green-500"});case"file":return e.jsx(_e,{className:"h-4 w-4 text-orange-500"});default:return e.jsx(L,{className:"h-4 w-4"})}};return e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"ghost",size:"sm",className:"relative",children:[e.jsx(L,{className:"h-4 w-4"}),s>0&&e.jsx(D,{className:"absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs",children:s})]})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-medium",children:"알림"}),e.jsx(i,{variant:"ghost",size:"sm",onClick:()=>t(0),children:"모두 읽음"})]}),e.jsx("div",{className:"grid gap-3 max-h-80 overflow-y-auto",children:r.map(o=>e.jsx("div",{className:`p-3 rounded-lg border ${o.read?"bg-muted/50":"bg-blue-50 border-blue-200"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[a(o.type),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-sm font-medium",children:o.title}),!o.read&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:o.description}),e.jsx("p",{className:"text-xs text-muted-foreground",children:o.time})]})]})},o.id))}),e.jsx(u,{}),e.jsx(i,{variant:"outline",size:"sm",className:"w-full",children:"모든 알림 보기"})]})})]})}},A={render:()=>{const[s,t]=l.useState(!1),r="https://example.com/shared-content",a=()=>{navigator.clipboard.writeText(r),t(!0),setTimeout(()=>t(!1),2e3)},o=[{name:"Twitter",color:"bg-blue-400",icon:"🐦"},{name:"Facebook",color:"bg-blue-600",icon:"📘"},{name:"LinkedIn",color:"bg-blue-700",icon:"💼"},{name:"WhatsApp",color:"bg-green-500",icon:"💬"}];return e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"outline",children:[e.jsx(Z,{className:"mr-2 h-4 w-4"}),"공유하기"]})}),e.jsx(h,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"링크 공유"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(w,{value:r,readOnly:!0,className:"flex-1"}),e.jsx(i,{variant:"outline",size:"sm",onClick:a,className:"px-3",children:s?e.jsx(J,{className:"h-4 w-4 text-green-600"}):e.jsx(K,{className:"h-4 w-4"})})]}),s&&e.jsx("p",{className:"text-sm text-green-600 mt-1",children:"링크가 복사되었습니다!"})]}),e.jsx(u,{}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3",children:"소셜 미디어"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:o.map(n=>e.jsxs(i,{variant:"outline",size:"sm",className:"justify-start",children:[e.jsx("span",{className:"mr-2",children:n.icon}),n.name]},n.name))})]}),e.jsx(u,{}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"이메일로 공유"}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(w,{placeholder:"이메일 주소 입력"}),e.jsx(Pe,{placeholder:"메시지 추가 (선택사항)",rows:2,className:"resize-none"}),e.jsxs(i,{size:"sm",children:[e.jsx(De,{className:"mr-2 h-4 w-4"}),"보내기"]})]})]})]})})]})}},E={render:()=>{const[s,t]=l.useState(!1);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, Escape)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 관리 및 트랩"}),e.jsx("li",{children:"• 자동 포지셔닝 및 충돌 방지"}),e.jsx("li",{children:"• 적절한 색상 대비"})]})]}),e.jsxs(m,{open:s,onOpenChange:t,children:[e.jsx(p,{asChild:!0,children:e.jsxs(i,{variant:"outline","aria-haspopup":"dialog","aria-expanded":s,"aria-describedby":"popover-description",children:[e.jsx(Fe,{className:"mr-2 h-4 w-4"}),"접근성 도움말"]})}),e.jsx(h,{className:"w-80",role:"dialog","aria-labelledby":"popover-title","aria-describedby":"popover-content",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{id:"popover-title",className:"font-medium",children:"키보드 사용법"}),e.jsxs("div",{id:"popover-content",className:"mt-2 space-y-2 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"팝오버 열기:"}),e.jsx(D,{variant:"outline",children:"Enter / Space"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"팝오버 닫기:"}),e.jsx(D,{variant:"outline",children:"Escape"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"요소 간 이동:"}),e.jsx(D,{variant:"outline",children:"Tab / Shift+Tab"})]})]})]}),e.jsx(u,{}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"스크린 리더 지원"}),e.jsxs("ul",{className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("li",{children:"• 팝오버 상태 자동 안내"}),e.jsx("li",{children:"• 콘텐츠 구조 명확히 전달"}),e.jsx("li",{children:"• 상호작용 가능한 요소 식별"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(i,{size:"sm",onClick:()=>t(!1),"aria-label":"도움말 창 닫기",children:[e.jsx(J,{className:"mr-2 h-4 w-4"}),"이해했어요"]}),e.jsxs(i,{variant:"outline",size:"sm",onClick:()=>t(!1),"aria-label":"도움말 창 닫기",children:[e.jsx(Ie,{className:"mr-2 h-4 w-4"}),"닫기"]})]})]})})]}),e.jsx("div",{id:"popover-description",className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab으로 버튼에 포커스 후 Enter/Space로 열기, Escape로 닫기"})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 팝오버 데모입니다."}}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">팝오버 열기</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">설정</h4>
            <p className="text-sm text-muted-foreground">
              계정 설정을 관리하세요.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">폭</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">높이</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date>();
    return <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            날짜를 선택하세요
          </p>
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "yyyy년 MM월 dd일", {
              locale: ko
            }) : "날짜 선택"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
        
        {date && <div className="text-center p-2 bg-muted rounded">
            <p className="text-sm">
              선택된 날짜: <strong>{format(date, "yyyy년 MM월 dd일", {
              locale: ko
            })}</strong>
            </p>
          </div>}
      </div>;
  }
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    return <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 rounded-full p-0">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                홍
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  홍길동
                </div>
                <div>
                  <h4 className="font-medium">홍길동</h4>
                  <p className="text-sm text-muted-foreground">hong@example.com</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <Label htmlFor="notifications" className="text-sm">알림</Label>
                  </div>
                  <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <Label htmlFor="darkMode" className="text-sm">다크 모드</Label>
                  </div>
                  <Switch id="darkMode" checked={darkMode} onCheckedChange={setDarkMode} />
                </div>
              </div>
              
              <Separator />
              
              <div className="grid gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  <User className="mr-2 h-4 w-4" />
                  프로필 편집
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  계정 설정
                </Button>
                <Button variant="ghost" size="sm" className="justify-start text-red-600">
                  <Lock className="mr-2 h-4 w-4" />
                  로그아웃
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedItems, setSelectedItems] = useState(3);
    return <div className="flex gap-4 items-center">
        <div className="text-sm text-muted-foreground">
          {selectedItems}개 항목 선택됨
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              작업
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Edit className="mr-2 h-4 w-4" />
                  편집
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Copy className="mr-2 h-4 w-4" />
                  복사
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  다운로드
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Share className="mr-2 h-4 w-4" />
                  공유
                </Button>
              </div>
              
              <Separator />
              
              <div className="grid gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Star className="mr-2 h-4 w-4" />
                  즐겨찾기 추가
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Tag className="mr-2 h-4 w-4" />
                  태그 추가
                </Button>
              </div>
              
              <Separator />
              
              <Button variant="ghost" size="sm" className="justify-start text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                삭제
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedColor, setSelectedColor] = useState('#3b82f6');
    const colors = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#64748b', '#374151', '#111827'];
    return <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded border border-gray-300" style={{
          backgroundColor: selectedColor
        }} />
          <span className="text-sm font-mono">{selectedColor}</span>
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              색상 선택
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium mb-2">색상 팔레트</h4>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map(color => <button key={color} className={\`w-8 h-8 rounded border-2 \${selectedColor === color ? 'border-gray-900' : 'border-gray-200'}\`} style={{
                  backgroundColor: color
                }} onClick={() => setSelectedColor(color)} aria-label={\`색상 \${color} 선택\`} />)}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <Label htmlFor="customColor" className="text-sm font-medium">
                  커스텀 색상
                </Label>
                <Input id="customColor" type="color" value={selectedColor} onChange={e => setSelectedColor(e.target.value)} className="w-full h-10 mt-2" />
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => setSelectedColor('#000000')}>
                  초기화
                </Button>
                <Button size="sm">
                  적용
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
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
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                {unreadCount}
              </Badge>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">알림</h4>
              <Button variant="ghost" size="sm" onClick={() => setUnreadCount(0)}>
                모두 읽음
              </Button>
            </div>
            
            <div className="grid gap-3 max-h-80 overflow-y-auto">
              {notifications.map(notification => <div key={notification.id} className={\`p-3 rounded-lg border \${notification.read ? 'bg-muted/50' : 'bg-blue-50 border-blue-200'}\`}>
                  <div className="flex items-start gap-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{notification.title}</p>
                        {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
            
            <Separator />
            
            <Button variant="outline" size="sm" className="w-full">
              모든 알림 보기
            </Button>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" />
            공유하기
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div>
              <h4 className="font-medium mb-2">링크 공유</h4>
              <div className="flex gap-2">
                <Input value={shareUrl} readOnly className="flex-1" />
                <Button variant="outline" size="sm" onClick={handleCopyUrl} className="px-3">
                  {copySuccess ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              {copySuccess && <p className="text-sm text-green-600 mt-1">
                  링크가 복사되었습니다!
                </p>}
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-3">소셜 미디어</h4>
              <div className="grid grid-cols-2 gap-2">
                {socialPlatforms.map(platform => <Button key={platform.name} variant="outline" size="sm" className="justify-start">
                    <span className="mr-2">{platform.icon}</span>
                    {platform.name}
                  </Button>)}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">이메일로 공유</h4>
              <div className="grid gap-2">
                <Input placeholder="이메일 주소 입력" />
                <Textarea placeholder="메시지 추가 (선택사항)" rows={2} className="resize-none" />
                <Button size="sm">
                  <Send className="mr-2 h-4 w-4" />
                  보내기
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>;
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 관리 및 트랩</li>
            <li>• 자동 포지셔닝 및 충돌 방지</li>
            <li>• 적절한 색상 대비</li>
          </ul>
        </div>
        
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" aria-haspopup="dialog" aria-expanded={isOpen} aria-describedby="popover-description">
              <HelpCircle className="mr-2 h-4 w-4" />
              접근성 도움말
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" role="dialog" aria-labelledby="popover-title" aria-describedby="popover-content">
            <div className="grid gap-4">
              <div>
                <h4 id="popover-title" className="font-medium">
                  키보드 사용법
                </h4>
                <div id="popover-content" className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>팝오버 열기:</span>
                    <Badge variant="outline">Enter / Space</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>팝오버 닫기:</span>
                    <Badge variant="outline">Escape</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>요소 간 이동:</span>
                    <Badge variant="outline">Tab / Shift+Tab</Badge>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">스크린 리더 지원</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 팝오버 상태 자동 안내</li>
                  <li>• 콘텐츠 구조 명확히 전달</li>
                  <li>• 상호작용 가능한 요소 식별</li>
                </ul>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" onClick={() => setIsOpen(false)} aria-label="도움말 창 닫기">
                  <Check className="mr-2 h-4 w-4" />
                  이해했어요
                </Button>
                <Button variant="outline" size="sm" onClick={() => setIsOpen(false)} aria-label="도움말 창 닫기">
                  <X className="mr-2 h-4 w-4" />
                  닫기
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <div id="popover-description" className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab으로 버튼에 포커스 후 Enter/Space로 열기, Escape로 닫기
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 팝오버 데모입니다.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};const Bt=["Default","DatePicker","UserProfile","QuickActions","ColorPicker","NotificationCenter","ShareDialog","AccessibilityDemo"];export{E as AccessibilityDemo,O as ColorPicker,T as DatePicker,B as Default,R as NotificationCenter,z as QuickActions,A as ShareDialog,M as UserProfile,Bt as __namedExportsOrder,kt as default};
