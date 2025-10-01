import{j as e}from"./jsx-runtime-Dad_ikcK.js";import{r as x,e as z}from"./iframe-Dg_gISpU.js";import{c as _}from"./index-DIJyo7W-.js";import{c as ge}from"./index-Be4lY40e.js";import{P as fe}from"./index-GcyhyyiP.js";import{c as W,R as je,A as be,P as Ne,C as ve,I as Se,S as we,a as Ie,b as ye,d as _e,L as Re,e as Te,f as Pe,g as ke,h as Ae,G as Ee,i as Oe,j as U}from"./index-DDrrKZeG.js";import{u as De}from"./index-C1n60UVb.js";import{u as Le}from"./index-8Pe_lZ4S.js";import{c as h}from"./utils-CBfrqCZ4.js";import{C as ze}from"./chevron-right-DRlUqJfg.js";import{C as Ge}from"./check-Cn6-5UBS.js";import{C as Fe}from"./circle-DX1M0i3I.js";import{C as j}from"./copy-BbDkP1wE.js";import{S as V}from"./scissors-kX9MLz8J.js";import{S as q}from"./square-pen-Y6QEBpmw.js";import{S as $}from"./share-K4DJra1W.js";import{T as B}from"./trash-2-unv57li8.js";import{F as X}from"./folder-CaFK6--C.js";import{E as K}from"./eye-DrJacY7W.js";import{D as Y}from"./download-BzGv4q8I.js";import{F as Ue}from"./file-text-5VKQUqZL.js";import{I as Ve}from"./image-CZ60qmxg.js";import{S}from"./settings-B845jRLN.js";import{E as $e}from"./eye-off-B1n0yJRL.js";import{M as G}from"./music-CSAnkuZS.js";import{S as Be}from"./star-CTtPo3oO.js";import{V as He}from"./video-CoJv5ox7.js";import{U as J}from"./user-BC5sGL6S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3wj8CDn.js";import"./index-CEfJNQWM.js";import"./createLucideIcon-pOJf8xUB.js";import"./index-BSAGdBuK.js";import"./index-Dbl4WsRV.js";import"./index-CU3idAEx.js";import"./index-DVbtCu8s.js";import"./index-Cmx14kdo.js";import"./index-CYpglPyl.js";import"./index-B7q1ca9r.js";import"./index-Dcg_vMHq.js";import"./index-CyVbAWwK.js";import"./index-CnRZB1tH.js";var H="ContextMenu",[Xe]=ge(H,[W]),u=W(),[We,Q]=Xe(H),Z=t=>{const{__scopeContextMenu:n,children:o,onOpenChange:s,dir:a,modal:l=!0}=t,[C,d]=x.useState(!1),w=u(n),I=De(s),m=x.useCallback(y=>{d(y),I(y)},[I]);return e.jsx(We,{scope:n,open:C,onOpenChange:m,modal:l,children:e.jsx(je,{...w,dir:a,open:C,onOpenChange:m,modal:l,children:o})})};Z.displayName=H;var ee="ContextMenuTrigger",te=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,disabled:s=!1,...a}=t,l=Q(ee,o),C=u(o),d=x.useRef({x:0,y:0}),w=x.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...d.current})}),I=x.useRef(0),m=x.useCallback(()=>window.clearTimeout(I.current),[]),y=f=>{d.current={x:f.clientX,y:f.clientY},l.onOpenChange(!0)};return x.useEffect(()=>m,[m]),x.useEffect(()=>void(s&&m()),[s,m]),e.jsxs(e.Fragment,{children:[e.jsx(be,{...C,virtualRef:w}),e.jsx(fe.span,{"data-state":l.open?"open":"closed","data-disabled":s?"":void 0,...a,ref:n,style:{WebkitTouchCallout:"none",...t.style},onContextMenu:s?t.onContextMenu:_(t.onContextMenu,f=>{m(),y(f),f.preventDefault()}),onPointerDown:s?t.onPointerDown:_(t.onPointerDown,R(f=>{m(),I.current=window.setTimeout(()=>y(f),700)})),onPointerMove:s?t.onPointerMove:_(t.onPointerMove,R(m)),onPointerCancel:s?t.onPointerCancel:_(t.onPointerCancel,R(m)),onPointerUp:s?t.onPointerUp:_(t.onPointerUp,R(m))})]})});te.displayName=ee;var qe="ContextMenuPortal",ne=t=>{const{__scopeContextMenu:n,...o}=t,s=u(n);return e.jsx(Ne,{...s,...o})};ne.displayName=qe;var se="ContextMenuContent",oe=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=Q(se,o),l=u(o),C=x.useRef(!1);return e.jsx(ve,{...l,...s,ref:n,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:d=>{t.onCloseAutoFocus?.(d),!d.defaultPrevented&&C.current&&d.preventDefault(),C.current=!1},onInteractOutside:d=>{t.onInteractOutside?.(d),!d.defaultPrevented&&!a.modal&&(C.current=!0)},style:{...t.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});oe.displayName=se;var Ke="ContextMenuGroup",Ye=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(Ee,{...a,...s,ref:n})});Ye.displayName=Ke;var Je="ContextMenuLabel",re=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(Re,{...a,...s,ref:n})});re.displayName=Je;var Qe="ContextMenuItem",ae=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(Se,{...a,...s,ref:n})});ae.displayName=Qe;var Ze="ContextMenuCheckboxItem",xe=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(Te,{...a,...s,ref:n})});xe.displayName=Ze;var et="ContextMenuRadioGroup",ie=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(ke,{...a,...s,ref:n})});ie.displayName=et;var tt="ContextMenuRadioItem",ue=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(Ae,{...a,...s,ref:n})});ue.displayName=tt;var nt="ContextMenuItemIndicator",de=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(Pe,{...a,...s,ref:n})});de.displayName=nt;var st="ContextMenuSeparator",ce=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(we,{...a,...s,ref:n})});ce.displayName=st;var ot="ContextMenuArrow",rt=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(Oe,{...a,...s,ref:n})});rt.displayName=ot;var me="ContextMenuSub",le=t=>{const{__scopeContextMenu:n,children:o,onOpenChange:s,open:a,defaultOpen:l}=t,C=u(n),[d,w]=Le({prop:a,defaultProp:l??!1,onChange:s,caller:me});return e.jsx(Ie,{...C,open:d,onOpenChange:w,children:o})};le.displayName=me;var at="ContextMenuSubTrigger",Ce=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(ye,{...a,...s,ref:n})});Ce.displayName=at;var xt="ContextMenuSubContent",pe=x.forwardRef((t,n)=>{const{__scopeContextMenu:o,...s}=t,a=u(o);return e.jsx(_e,{...a,...s,ref:n,style:{...t.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});pe.displayName=xt;function R(t){return n=>n.pointerType!=="mouse"?t(n):void 0}var it=Z,ut=te,dt=ne,ct=oe,mt=re,lt=ae,Ct=xe,pt=ie,ht=ue,he=de,Mt=ce,gt=le,ft=Ce,jt=pe;function p({...t}){return e.jsx(it,{"data-slot":"context-menu",...t})}function M({...t}){return e.jsx(ut,{"data-slot":"context-menu-trigger",...t})}function b({...t}){return e.jsx(gt,{"data-slot":"context-menu-sub",...t})}function Me({...t}){return e.jsx(pt,{"data-slot":"context-menu-radio-group",...t})}function N({className:t,inset:n,children:o,...s}){return e.jsxs(ft,{"data-slot":"context-menu-sub-trigger","data-inset":n,className:h("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...s,children:[o,e.jsx(ze,{className:"ml-auto"})]})}function v({className:t,...n}){return e.jsx(jt,{"data-slot":"context-menu-sub-content",className:h("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",t),...n})}function g({className:t,...n}){return e.jsx(dt,{children:e.jsx(ct,{"data-slot":"context-menu-content",className:h("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",t),...n})})}function r({className:t,inset:n,variant:o="default",...s}){return e.jsx(lt,{"data-slot":"context-menu-item","data-inset":n,"data-variant":o,className:h("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...s})}function F({className:t,children:n,checked:o,...s}){return e.jsxs(Ct,{"data-slot":"context-menu-checkbox-item",className:h("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),checked:o,...s,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(he,{children:e.jsx(Ge,{className:"size-4"})})}),n]})}function D({className:t,children:n,...o}){return e.jsxs(ht,{"data-slot":"context-menu-radio-item",className:h("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...o,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(he,{children:e.jsx(Fe,{className:"size-2 fill-current"})})}),n]})}function L({className:t,inset:n,...o}){return e.jsx(mt,{"data-slot":"context-menu-label","data-inset":n,className:h("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",t),...o})}function c({className:t,...n}){return e.jsx(Mt,{"data-slot":"context-menu-separator",className:h("bg-border -mx-1 my-1 h-px",t),...n})}function i({className:t,...n}){return e.jsx("span",{"data-slot":"context-menu-shortcut",className:h("text-muted-foreground ml-auto text-xs tracking-widest",t),...n})}p.__docgenInfo={description:"",methods:[],displayName:"ContextMenu"};M.__docgenInfo={description:"",methods:[],displayName:"ContextMenuTrigger"};g.__docgenInfo={description:"",methods:[],displayName:"ContextMenuContent"};r.__docgenInfo={description:"",methods:[],displayName:"ContextMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "destructive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};F.__docgenInfo={description:"",methods:[],displayName:"ContextMenuCheckboxItem"};D.__docgenInfo={description:"",methods:[],displayName:"ContextMenuRadioItem"};L.__docgenInfo={description:"",methods:[],displayName:"ContextMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSeparator"};i.__docgenInfo={description:"",methods:[],displayName:"ContextMenuShortcut"};b.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSub"};v.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSubContent"};N.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};Me.__docgenInfo={description:"",methods:[],displayName:"ContextMenuRadioGroup"};const dn={title:"UI/Overlay/ContextMenu",component:p,parameters:{layout:"centered",docs:{description:{component:`
우클릭 시 나타나는 컨텍스트 메뉴 컴포넌트입니다. 사용자가 특정 요소에서 수행할 수 있는 액션들을 제공합니다.

## 주요 기능
- **우클릭 활성화**: 마우스 우클릭으로 메뉴 열기
- **키보드 지원**: 키보드만으로도 완전한 네비게이션 가능
- **서브메뉴**: 중첩된 메뉴 구조로 복잡한 액션 그룹화
- **다양한 아이템**: 일반, 체크박스, 라디오, 구분선, 라벨 지원
- **단축키 표시**: 키보드 단축키를 메뉴에 함께 표시
- **완전한 접근성**: WAI-ARIA 표준 준수, 스크린 리더 지원
- **애니메이션**: 부드러운 열기/닫기 애니메이션

## 사용법
\`\`\`tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>
    <div className="p-4 border rounded">
      우클릭해보세요
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <Copy className="w-4 h-4 mr-2" />
      복사
      <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Clipboard className="w-4 h-4 mr-2" />
      붙여넣기
      <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">
      <Trash2 className="w-4 h-4 mr-2" />
      삭제
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
\`\`\`

## 구성 요소
- \`ContextMenu\`: 컨텍스트 메뉴의 루트 컨테이너
- \`ContextMenuTrigger\`: 우클릭 이벤트를 받는 트리거 요소
- \`ContextMenuContent\`: 메뉴 내용을 담는 컨테이너
- \`ContextMenuItem\`: 개별 메뉴 아이템
- \`ContextMenuSub\`: 서브메뉴 컨테이너
- \`ContextMenuSubTrigger\`: 서브메뉴를 여는 트리거
- \`ContextMenuSubContent\`: 서브메뉴 내용
- \`ContextMenuSeparator\`: 메뉴 아이템 구분선
- \`ContextMenuShortcut\`: 단축키 표시
- \`ContextMenuCheckboxItem\`: 체크박스 아이템
- \`ContextMenuRadioGroup\`: 라디오 그룹
- \`ContextMenuRadioItem\`: 라디오 아이템
- \`ContextMenuLabel\`: 메뉴 섹션 라벨

## 키보드 단축키
- **우클릭** 또는 **Shift+F10**: 메뉴 열기
- **Escape**: 메뉴 닫기
- **Arrow Keys**: 메뉴 아이템 간 이동
- **Enter** 또는 **Space**: 아이템 선택
- **Right Arrow**: 서브메뉴 열기
- **Left Arrow**: 서브메뉴 닫기
        `}}},tags:["autodocs"],render:t=>e.jsxs(p,{...t,children:[e.jsx(M,{children:e.jsx("div",{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"우클릭해보세요"})}),e.jsxs(g,{children:[e.jsxs(r,{children:[e.jsx(j,{className:"w-4 h-4 mr-2"}),"복사",e.jsx(i,{children:"Ctrl+C"})]}),e.jsxs(r,{children:[e.jsx(V,{className:"w-4 h-4 mr-2"}),"잘라내기",e.jsx(i,{children:"Ctrl+X"})]}),e.jsxs(r,{children:[e.jsx(U,{className:"w-4 h-4 mr-2"}),"붙여넣기",e.jsx(i,{children:"Ctrl+V"})]})]})]})},T={render:()=>e.jsxs(p,{children:[e.jsx(M,{children:e.jsx("div",{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"기본 컨텍스트 메뉴 - 우클릭하세요"})}),e.jsxs(g,{children:[e.jsxs(r,{children:[e.jsx(q,{className:"w-4 h-4 mr-2"}),"편집"]}),e.jsxs(r,{children:[e.jsx(j,{className:"w-4 h-4 mr-2"}),"복사",e.jsx(i,{children:"Ctrl+C"})]}),e.jsxs(r,{children:[e.jsx($,{className:"w-4 h-4 mr-2"}),"공유"]}),e.jsx(c,{}),e.jsxs(r,{variant:"destructive",children:[e.jsx(B,{className:"w-4 h-4 mr-2"}),"삭제",e.jsx(i,{children:"Del"})]})]})]}),parameters:{docs:{description:{story:"기본 ContextMenu입니다. 일반적인 편집 작업들을 포함하며, 단축키와 구분선을 사용합니다."}}}},P={render:()=>e.jsxs(p,{children:[e.jsx(M,{children:e.jsx("div",{className:"flex h-[180px] w-[320px] items-center justify-center rounded-md border bg-muted/30",children:e.jsxs("div",{className:"text-center",children:[e.jsx(X,{className:"w-12 h-12 mx-auto mb-2 text-muted-foreground"}),e.jsx("p",{className:"text-sm font-medium",children:"프로젝트 폴더"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"우클릭으로 옵션 보기"})]})})}),e.jsxs(g,{children:[e.jsxs(r,{children:[e.jsx(K,{className:"w-4 h-4 mr-2"}),"열기",e.jsx(i,{children:"Enter"})]}),e.jsx(c,{}),e.jsxs(r,{children:[e.jsx(j,{className:"w-4 h-4 mr-2"}),"복사",e.jsx(i,{children:"Ctrl+C"})]}),e.jsxs(r,{children:[e.jsx(V,{className:"w-4 h-4 mr-2"}),"잘라내기",e.jsx(i,{children:"Ctrl+X"})]}),e.jsx(c,{}),e.jsxs(b,{children:[e.jsxs(N,{children:[e.jsx(Y,{className:"w-4 h-4 mr-2"}),"내보내기"]}),e.jsxs(v,{children:[e.jsxs(r,{children:[e.jsx(Ue,{className:"w-4 h-4 mr-2"}),"PDF로 내보내기"]}),e.jsxs(r,{children:[e.jsx(Ve,{className:"w-4 h-4 mr-2"}),"이미지로 내보내기"]}),e.jsxs(r,{children:[e.jsx(X,{className:"w-4 h-4 mr-2"}),"압축 파일로 내보내기"]})]})]}),e.jsxs(b,{children:[e.jsxs(N,{children:[e.jsx($,{className:"w-4 h-4 mr-2"}),"공유하기"]}),e.jsxs(v,{children:[e.jsxs(r,{children:[e.jsx(j,{className:"w-4 h-4 mr-2"}),"링크 복사"]}),e.jsx(r,{children:"이메일로 전송"}),e.jsx(r,{children:"소셜 미디어 공유"})]})]}),e.jsx(c,{}),e.jsxs(r,{children:[e.jsx(S,{className:"w-4 h-4 mr-2"}),"속성"]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(B,{className:"w-4 h-4 mr-2"}),"삭제",e.jsx(i,{children:"Del"})]})]})]}),parameters:{docs:{description:{story:"서브메뉴가 포함된 ContextMenu입니다. 복잡한 액션들을 그룹화하여 체계적으로 관리할 수 있습니다."}}}},k={render:()=>{const[t,n]=z.useState(!1),[o,s]=z.useState(!0),[a,l]=z.useState("list");return e.jsxs(p,{children:[e.jsx(M,{children:e.jsx("div",{className:"flex h-[180px] w-[320px] items-center justify-center rounded-md border bg-gradient-to-br from-blue-50 to-indigo-50",children:e.jsxs("div",{className:"text-center",children:[e.jsx(S,{className:"w-10 h-10 mx-auto mb-2 text-blue-600"}),e.jsx("p",{className:"text-sm font-medium",children:"설정 패널"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"우클릭으로 옵션 변경"})]})})}),e.jsxs(g,{children:[e.jsx(L,{children:"보기 옵션"}),e.jsxs(F,{checked:t,onCheckedChange:n,children:[e.jsx($e,{className:"w-4 h-4 mr-2"}),"숨김 파일 표시"]}),e.jsxs(F,{checked:o,onCheckedChange:s,children:[e.jsx(K,{className:"w-4 h-4 mr-2"}),"미리보기 표시"]}),e.jsx(c,{}),e.jsx(L,{children:"보기 모드"}),e.jsxs(Me,{value:a,onValueChange:l,children:[e.jsx(D,{value:"list",children:"목록 보기"}),e.jsx(D,{value:"grid",children:"그리드 보기"}),e.jsx(D,{value:"tile",children:"타일 보기"})]}),e.jsx(c,{}),e.jsxs(r,{children:[e.jsx(S,{className:"w-4 h-4 mr-2"}),"고급 설정"]})]})]})},parameters:{docs:{description:{story:"체크박스와 라디오 버튼이 포함된 ContextMenu입니다. 설정 변경이나 옵션 선택에 유용합니다."}}}},A={render:()=>e.jsxs(p,{children:[e.jsx(M,{children:e.jsx("div",{className:"flex h-[200px] w-[400px] items-center justify-center rounded-md border bg-gradient-to-br from-purple-50 to-pink-50",children:e.jsxs("div",{className:"text-center",children:[e.jsx(G,{className:"w-16 h-16 mx-auto mb-3 text-purple-600"}),e.jsx("p",{className:"text-lg font-medium",children:"음악 플레이어"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'현재 재생 중: "Amazing Song"'}),e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"우클릭으로 미디어 옵션"})]})})}),e.jsxs(g,{children:[e.jsxs(r,{children:[e.jsx(Be,{className:"w-4 h-4 mr-2"}),"즐겨찾기에 추가",e.jsx(i,{children:"Ctrl+D"})]}),e.jsx(c,{}),e.jsxs(b,{children:[e.jsxs(N,{children:[e.jsx($,{className:"w-4 h-4 mr-2"}),"공유하기"]}),e.jsxs(v,{children:[e.jsxs(r,{children:[e.jsx(j,{className:"w-4 h-4 mr-2"}),"링크 복사"]}),e.jsx(r,{children:"소셜 미디어에 공유"}),e.jsx(r,{children:"이메일로 전송"})]})]}),e.jsxs(b,{children:[e.jsxs(N,{children:[e.jsx(Y,{className:"w-4 h-4 mr-2"}),"다운로드"]}),e.jsxs(v,{children:[e.jsxs(r,{children:[e.jsx(G,{className:"w-4 h-4 mr-2"}),"MP3 (320kbps)"]}),e.jsxs(r,{children:[e.jsx(G,{className:"w-4 h-4 mr-2"}),"FLAC (무손실)"]}),e.jsxs(r,{children:[e.jsx(He,{className:"w-4 h-4 mr-2"}),"뮤직비디오 (MP4)"]})]})]}),e.jsx(c,{}),e.jsxs(r,{children:[e.jsx(J,{className:"w-4 h-4 mr-2"}),"아티스트 정보"]}),e.jsx(r,{children:"앨범 전체 보기"}),e.jsx(c,{}),e.jsxs(r,{variant:"destructive",children:[e.jsx(B,{className:"w-4 h-4 mr-2"}),"플레이리스트에서 제거"]})]})]}),parameters:{docs:{description:{story:"미디어 플레이어용 ContextMenu입니다. 음악이나 비디오 관련 액션들을 그룹화하여 제공합니다."}}}},E={render:()=>e.jsxs(p,{children:[e.jsx(M,{children:e.jsx("div",{className:"h-[200px] w-[400px] rounded-md border p-4 bg-white",children:e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsx("p",{className:"font-medium",children:"텍스트 에디터"}),e.jsx("p",{children:"이것은 샘플 텍스트입니다. 이 영역에서 우클릭하여 텍스트 편집 관련 컨텍스트 메뉴를 확인해보세요."}),e.jsx("p",{className:"text-muted-foreground",children:"복사, 붙여넣기, 서식 지정 등의 옵션을 사용할 수 있습니다."})]})})}),e.jsxs(g,{children:[e.jsxs(r,{children:[e.jsx(j,{className:"w-4 h-4 mr-2"}),"복사",e.jsx(i,{children:"Ctrl+C"})]}),e.jsxs(r,{children:[e.jsx(V,{className:"w-4 h-4 mr-2"}),"잘라내기",e.jsx(i,{children:"Ctrl+X"})]}),e.jsxs(r,{children:[e.jsx(U,{className:"w-4 h-4 mr-2"}),"붙여넣기",e.jsx(i,{children:"Ctrl+V"})]}),e.jsx(c,{}),e.jsxs(b,{children:[e.jsxs(N,{children:[e.jsx(q,{className:"w-4 h-4 mr-2"}),"서식"]}),e.jsxs(v,{children:[e.jsxs(r,{children:[e.jsx("strong",{className:"mr-2 text-xs",children:"B"}),"굵게",e.jsx(i,{children:"Ctrl+B"})]}),e.jsxs(r,{children:[e.jsx("em",{className:"mr-2 text-xs",children:"I"}),"기울임",e.jsx(i,{children:"Ctrl+I"})]}),e.jsxs(r,{children:[e.jsx("u",{className:"mr-2 text-xs",children:"U"}),"밑줄",e.jsx(i,{children:"Ctrl+U"})]})]})]}),e.jsxs(r,{children:["전체 선택",e.jsx(i,{children:"Ctrl+A"})]}),e.jsx(c,{}),e.jsxs(r,{children:[e.jsx(S,{className:"w-4 h-4 mr-2"}),"에디터 설정"]})]})]}),parameters:{docs:{description:{story:"텍스트 에디터용 ContextMenu입니다. 편집, 서식 지정, 선택 등의 텍스트 관련 작업을 제공합니다."}}}},O={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"ContextMenu 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"우클릭"})," 또는 ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Shift+F10"}),"으로 메뉴 열기"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Arrow Keys"}),"로 메뉴 아이템 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"})," 또는 ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Space"}),"로 아이템 선택"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Escape"}),"로 메뉴 닫기"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Right Arrow"}),"로 서브메뉴 열기"]}),e.jsx("li",{children:"스크린 리더가 메뉴 구조와 단축키를 적절히 안내"})]})]}),e.jsxs(p,{children:[e.jsx(M,{children:e.jsx("div",{className:"flex h-[150px] w-[350px] items-center justify-center rounded-md border bg-gradient-to-br from-orange-50 to-red-50",role:"button",tabIndex:0,"aria-label":"접근성 데모 컨텍스트 메뉴 트리거. 우클릭하거나 Shift+F10을 눌러 메뉴를 여세요.",children:e.jsxs("div",{className:"text-center",children:[e.jsx(S,{className:"w-12 h-12 mx-auto mb-2 text-orange-600"}),e.jsx("p",{className:"text-sm font-medium",children:"접근성 완벽 지원"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"키보드와 스크린 리더 호환"})]})})}),e.jsxs(g,{children:[e.jsx(L,{children:"편집 작업"}),e.jsxs(r,{children:[e.jsx(j,{className:"w-4 h-4 mr-2"}),"복사하기",e.jsx(i,{children:"Ctrl+C"})]}),e.jsxs(r,{children:[e.jsx(U,{className:"w-4 h-4 mr-2"}),"붙여넣기",e.jsx(i,{children:"Ctrl+V"})]}),e.jsx(c,{}),e.jsxs(b,{children:[e.jsxs(N,{children:[e.jsx(S,{className:"w-4 h-4 mr-2"}),"접근성 설정"]}),e.jsxs(v,{children:[e.jsx(r,{children:"고대비 모드 전환"}),e.jsx(r,{children:"화면 확대 도구"}),e.jsx(r,{children:"키보드 네비게이션 가이드"})]})]}),e.jsxs(r,{children:[e.jsx(J,{className:"w-4 h-4 mr-2"}),"접근성 피드백 보내기"]})]})]})]}),parameters:{docs:{description:{story:"ContextMenu의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 적절한 ARIA 속성을 확인할 수 있습니다."}}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          기본 컨텍스트 메뉴 - 우클릭하세요
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Edit className="w-4 h-4 mr-2" />
          편집
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          복사
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Share className="w-4 h-4 mr-2" />
          공유
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="w-4 h-4 mr-2" />
          삭제
          <ContextMenuShortcut>Del</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: "기본 ContextMenu입니다. 일반적인 편집 작업들을 포함하며, 단축키와 구분선을 사용합니다."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-[180px] w-[320px] items-center justify-center rounded-md border bg-muted/30">
          <div className="text-center">
            <Folder className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm font-medium">프로젝트 폴더</p>
            <p className="text-xs text-muted-foreground">우클릭으로 옵션 보기</p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Eye className="w-4 h-4 mr-2" />
          열기
          <ContextMenuShortcut>Enter</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          복사
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Scissors className="w-4 h-4 mr-2" />
          잘라내기
          <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Download className="w-4 h-4 mr-2" />
            내보내기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <FileText className="w-4 h-4 mr-2" />
              PDF로 내보내기
            </ContextMenuItem>
            <ContextMenuItem>
              <Image className="w-4 h-4 mr-2" />
              이미지로 내보내기
            </ContextMenuItem>
            <ContextMenuItem>
              <Folder className="w-4 h-4 mr-2" />
              압축 파일로 내보내기
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Share className="w-4 h-4 mr-2" />
            공유하기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Copy className="w-4 h-4 mr-2" />
              링크 복사
            </ContextMenuItem>
            <ContextMenuItem>
              이메일로 전송
            </ContextMenuItem>
            <ContextMenuItem>
              소셜 미디어 공유
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Settings className="w-4 h-4 mr-2" />
          속성
        </ContextMenuItem>
        <ContextMenuItem variant="destructive">
          <Trash2 className="w-4 h-4 mr-2" />
          삭제
          <ContextMenuShortcut>Del</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: "서브메뉴가 포함된 ContextMenu입니다. 복잡한 액션들을 그룹화하여 체계적으로 관리할 수 있습니다."
      }
    }
  }
}`,...P.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showHidden, setShowHidden] = React.useState(false);
    const [showPreview, setShowPreview] = React.useState(true);
    const [viewMode, setViewMode] = React.useState("list");
    return <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-[180px] w-[320px] items-center justify-center rounded-md border bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center">
              <Settings className="w-10 h-10 mx-auto mb-2 text-blue-600" />
              <p className="text-sm font-medium">설정 패널</p>
              <p className="text-xs text-muted-foreground">우클릭으로 옵션 변경</p>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>보기 옵션</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showHidden} onCheckedChange={setShowHidden}>
            <EyeOff className="w-4 h-4 mr-2" />
            숨김 파일 표시
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showPreview} onCheckedChange={setShowPreview}>
            <Eye className="w-4 h-4 mr-2" />
            미리보기 표시
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>보기 모드</ContextMenuLabel>
          <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
            <ContextMenuRadioItem value="list">
              목록 보기
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="grid">
              그리드 보기
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="tile">
              타일 보기
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Settings className="w-4 h-4 mr-2" />
            고급 설정
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>;
  },
  parameters: {
    docs: {
      description: {
        story: "체크박스와 라디오 버튼이 포함된 ContextMenu입니다. 설정 변경이나 옵션 선택에 유용합니다."
      }
    }
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-[200px] w-[400px] items-center justify-center rounded-md border bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="text-center">
            <Music className="w-16 h-16 mx-auto mb-3 text-purple-600" />
            <p className="text-lg font-medium">음악 플레이어</p>
            <p className="text-sm text-muted-foreground">현재 재생 중: "Amazing Song"</p>
            <p className="text-xs text-muted-foreground mt-2">우클릭으로 미디어 옵션</p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Star className="w-4 h-4 mr-2" />
          즐겨찾기에 추가
          <ContextMenuShortcut>Ctrl+D</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Share className="w-4 h-4 mr-2" />
            공유하기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Copy className="w-4 h-4 mr-2" />
              링크 복사
            </ContextMenuItem>
            <ContextMenuItem>
              소셜 미디어에 공유
            </ContextMenuItem>
            <ContextMenuItem>
              이메일로 전송
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Download className="w-4 h-4 mr-2" />
            다운로드
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Music className="w-4 h-4 mr-2" />
              MP3 (320kbps)
            </ContextMenuItem>
            <ContextMenuItem>
              <Music className="w-4 h-4 mr-2" />
              FLAC (무손실)
            </ContextMenuItem>
            <ContextMenuItem>
              <Video className="w-4 h-4 mr-2" />
              뮤직비디오 (MP4)
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <User className="w-4 h-4 mr-2" />
          아티스트 정보
        </ContextMenuItem>
        <ContextMenuItem>
          앨범 전체 보기
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="w-4 h-4 mr-2" />
          플레이리스트에서 제거
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: "미디어 플레이어용 ContextMenu입니다. 음악이나 비디오 관련 액션들을 그룹화하여 제공합니다."
      }
    }
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger>
        <div className="h-[200px] w-[400px] rounded-md border p-4 bg-white">
          <div className="text-sm space-y-2">
            <p className="font-medium">텍스트 에디터</p>
            <p>
              이것은 샘플 텍스트입니다. 이 영역에서 우클릭하여 
              텍스트 편집 관련 컨텍스트 메뉴를 확인해보세요.
            </p>
            <p className="text-muted-foreground">
              복사, 붙여넣기, 서식 지정 등의 옵션을 사용할 수 있습니다.
            </p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          복사
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Scissors className="w-4 h-4 mr-2" />
          잘라내기
          <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Clipboard className="w-4 h-4 mr-2" />
          붙여넣기
          <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Edit className="w-4 h-4 mr-2" />
            서식
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <strong className="mr-2 text-xs">B</strong>
              굵게
              <ContextMenuShortcut>Ctrl+B</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <em className="mr-2 text-xs">I</em>
              기울임
              <ContextMenuShortcut>Ctrl+I</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <u className="mr-2 text-xs">U</u>
              밑줄
              <ContextMenuShortcut>Ctrl+U</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>
          전체 선택
          <ContextMenuShortcut>Ctrl+A</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Settings className="w-4 h-4 mr-2" />
          에디터 설정
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: "텍스트 에디터용 ContextMenu입니다. 편집, 서식 지정, 선택 등의 텍스트 관련 작업을 제공합니다."
      }
    }
  }
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">접근성 데모</h3>
        <p className="text-sm text-muted-foreground">
          ContextMenu 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">우클릭</kbd> 또는 <kbd className="px-2 py-1 bg-muted rounded text-xs">Shift+F10</kbd>으로 메뉴 열기</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Arrow Keys</kbd>로 메뉴 아이템 간 이동</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> 또는 <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 아이템 선택</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 메뉴 닫기</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Right Arrow</kbd>로 서브메뉴 열기</li>
          <li>스크린 리더가 메뉴 구조와 단축키를 적절히 안내</li>
        </ul>
      </div>
      
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-[150px] w-[350px] items-center justify-center rounded-md border bg-gradient-to-br from-orange-50 to-red-50" role="button" tabIndex={0} aria-label="접근성 데모 컨텍스트 메뉴 트리거. 우클릭하거나 Shift+F10을 눌러 메뉴를 여세요.">
            <div className="text-center">
              <Settings className="w-12 h-12 mx-auto mb-2 text-orange-600" />
              <p className="text-sm font-medium">접근성 완벽 지원</p>
              <p className="text-xs text-muted-foreground">키보드와 스크린 리더 호환</p>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>편집 작업</ContextMenuLabel>
          <ContextMenuItem>
            <Copy className="w-4 h-4 mr-2" />
            복사하기
            <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Clipboard className="w-4 h-4 mr-2" />
            붙여넣기
            <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Settings className="w-4 h-4 mr-2" />
              접근성 설정
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>
                고대비 모드 전환
              </ContextMenuItem>
              <ContextMenuItem>
                화면 확대 도구
              </ContextMenuItem>
              <ContextMenuItem>
                키보드 네비게이션 가이드
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            <User className="w-4 h-4 mr-2" />
            접근성 피드백 보내기
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "ContextMenu의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 적절한 ARIA 속성을 확인할 수 있습니다."
      }
    }
  }
}`,...O.parameters?.docs?.source}}};const cn=["Default","WithSubmenus","WithCheckboxes","MediaPlayer","TextEditor","AccessibilityDemo"];export{O as AccessibilityDemo,T as Default,A as MediaPlayer,E as TextEditor,k as WithCheckboxes,P as WithSubmenus,cn as __namedExportsOrder,dn as default};
