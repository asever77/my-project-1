import{j as e}from"./jsx-runtime-CUYHGflD.js";import{r as d}from"./iframe-DUkcZvY3.js";import{c as U}from"./index-DtkgH7QJ.js";import{a as ye}from"./index-Qk9vCU2k.js";import{c as _e}from"./index-dEzg-V8q.js";import{u as Y}from"./index-D7Dk64nB.js";import{P as Re}from"./index-Dr9TOaCp.js";import{c as Z,R as Te,A as ke,P as Pe,C as Be,L as Ee,S as Ae,I as Ge,G as Oe,a as Le,b as ze,d as Ue,e as $e,f as qe,g as Fe,h as Ve,i as We,j as He}from"./index-BvrkLSdN.js";import{u as Q}from"./index-CS53fVwJ.js";import{c as j}from"./utils-CBfrqCZ4.js";import{C as Ke}from"./chevron-right-DwqQGL6x.js";import{C as ee}from"./check-Dvb3UiJt.js";import{C as H}from"./circle-_HEui7nH.js";import{B as x}from"./button-BH1IU7qt.js";import{B as Xe}from"./badge-B-XMMOJi.js";import{C as g}from"./chevron-down-Bey7Oxi6.js";import{U as F}from"./user-DS-tfe1w.js";import{C as Je}from"./credit-card-Drf2GI8a.js";import{S as v}from"./settings-C4unARJR.js";import{L as re}from"./log-out-zrWcum1C.js";import{S as K}from"./square-pen-Ca1YOAdL.js";import{C as ne}from"./copy-Bq3NKcYF.js";import{S as Qe}from"./scissors-ZZgIE5VH.js";import{A as Ye}from"./archive-BQDiGbff.js";import{T as X}from"./trash-2-sHkUCPXd.js";import{P as Ze}from"./plus-A0oPmAlK.js";import{c as er}from"./createLucideIcon-BYaaJxR_.js";import{M as $}from"./mail-BoLUSuM8.js";import{M as oe}from"./message-square-BJ0WkCUA.js";import{S as J}from"./share-qPINXPP2.js";import{D as se}from"./download-Byz1FdaI.js";import{U as ae}from"./users-Bz0eOuIq.js";import{B as rr}from"./bookmark-PbtZxQQ3.js";import{S as te}from"./square-CuCYRCV2.js";import{E as de}from"./ellipsis-uXb5ZhHT.js";import{S as nr}from"./star-CZy5D_eT.js";import{F as or}from"./funnel-x5uFjrSt.js";import{A as sr}from"./arrow-up-down-BTYY-cID.js";import{C as ar}from"./calendar-B0c0Cf0q.js";import{T as tr}from"./tag-eExaYQma.js";import{F as dr}from"./flag-CK8_GsUX.js";import"./index-BSYvLJny.js";import"./index-Bbf-8u-f.js";import"./index-BndgAHNJ.js";import"./index-Bw06jJjB.js";import"./index-CfBgQs8v.js";import"./index-DWrvaLHK.js";import"./index-NfaMm55A.js";import"./index-CH9WEn8E.js";import"./index-B-LXRLju.js";import"./index-B0-S_xVN.js";import"./index-BI6RngMp.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],pr=er("user-plus",ir);var V="DropdownMenu",[lr]=_e(V,[Z]),c=Z(),[cr,ie]=lr(V),pe=r=>{const{__scopeDropdownMenu:n,children:o,dir:s,open:t,defaultOpen:p,onOpenChange:M,modal:l=!0}=r,N=c(n),W=d.useRef(null),[_,R]=Y({prop:t,defaultProp:p??!1,onChange:M,caller:V});return e.jsx(cr,{scope:n,triggerId:Q(),triggerRef:W,contentId:Q(),open:_,onOpenChange:R,onOpenToggle:d.useCallback(()=>R(Ce=>!Ce),[R]),modal:l,children:e.jsx(Te,{...N,open:_,onOpenChange:R,dir:s,modal:l,children:o})})};pe.displayName=V;var le="DropdownMenuTrigger",ce=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,disabled:s=!1,...t}=r,p=ie(le,o),M=c(o);return e.jsx(ke,{asChild:!0,...M,children:e.jsx(Re.button,{type:"button",id:p.triggerId,"aria-haspopup":"menu","aria-expanded":p.open,"aria-controls":p.open?p.contentId:void 0,"data-state":p.open?"open":"closed","data-disabled":s?"":void 0,disabled:s,...t,ref:ye(n,p.triggerRef),onPointerDown:U(r.onPointerDown,l=>{!s&&l.button===0&&l.ctrlKey===!1&&(p.onOpenToggle(),p.open||l.preventDefault())}),onKeyDown:U(r.onKeyDown,l=>{s||(["Enter"," "].includes(l.key)&&p.onOpenToggle(),l.key==="ArrowDown"&&p.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});ce.displayName=le;var ur="DropdownMenuPortal",ue=r=>{const{__scopeDropdownMenu:n,...o}=r,s=c(n);return e.jsx(Pe,{...s,...o})};ue.displayName=ur;var me="DropdownMenuContent",we=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=ie(me,o),p=c(o),M=d.useRef(!1);return e.jsx(Be,{id:t.contentId,"aria-labelledby":t.triggerId,...p,...s,ref:n,onCloseAutoFocus:U(r.onCloseAutoFocus,l=>{M.current||t.triggerRef.current?.focus(),M.current=!1,l.preventDefault()}),onInteractOutside:U(r.onInteractOutside,l=>{const N=l.detail.originalEvent,W=N.button===0&&N.ctrlKey===!0,_=N.button===2||W;(!t.modal||_)&&(M.current=!0)}),style:{...r.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});we.displayName=me;var mr="DropdownMenuGroup",he=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(Oe,{...t,...s,ref:n})});he.displayName=mr;var wr="DropdownMenuLabel",xe=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(Ee,{...t,...s,ref:n})});xe.displayName=wr;var hr="DropdownMenuItem",Me=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(Ge,{...t,...s,ref:n})});Me.displayName=hr;var xr="DropdownMenuCheckboxItem",De=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx($e,{...t,...s,ref:n})});De.displayName=xr;var Mr="DropdownMenuRadioGroup",je=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(Fe,{...t,...s,ref:n})});je.displayName=Mr;var Dr="DropdownMenuRadioItem",ge=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(Ve,{...t,...s,ref:n})});ge.displayName=Dr;var jr="DropdownMenuItemIndicator",Ne=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(qe,{...t,...s,ref:n})});Ne.displayName=jr;var gr="DropdownMenuSeparator",fe=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(Ae,{...t,...s,ref:n})});fe.displayName=gr;var Nr="DropdownMenuArrow",fr=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(We,{...t,...s,ref:n})});fr.displayName=Nr;var vr=r=>{const{__scopeDropdownMenu:n,children:o,open:s,onOpenChange:t,defaultOpen:p}=r,M=c(n),[l,N]=Y({prop:s,defaultProp:p??!1,onChange:t,caller:"DropdownMenuSub"});return e.jsx(Le,{...M,open:l,onOpenChange:N,children:o})},br="DropdownMenuSubTrigger",ve=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(ze,{...t,...s,ref:n})});ve.displayName=br;var Ir="DropdownMenuSubContent",be=d.forwardRef((r,n)=>{const{__scopeDropdownMenu:o,...s}=r,t=c(o);return e.jsx(Ue,{...t,...s,ref:n,style:{...r.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});be.displayName=Ir;var Sr=pe,Cr=ce,Ie=ue,yr=we,_r=he,Rr=xe,Tr=Me,kr=De,Pr=je,Br=ge,Se=Ne,Er=fe,Ar=vr,Gr=ve,Or=be;function u({...r}){return e.jsx(Sr,{"data-slot":"dropdown-menu",...r})}function b({...r}){return e.jsx(Ie,{"data-slot":"dropdown-menu-portal",...r})}function w({...r}){return e.jsx(Cr,{"data-slot":"dropdown-menu-trigger",...r})}function h({className:r,sideOffset:n=4,...o}){return e.jsx(Ie,{children:e.jsx(yr,{"data-slot":"dropdown-menu-content",sideOffset:n,tabIndex:-1,className:j("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md focus:outline-none",r),...o})})}function I({...r}){return e.jsx(_r,{"data-slot":"dropdown-menu-group",...r})}function a({className:r,inset:n,variant:o="default",...s}){return e.jsx(Tr,{"data-slot":"dropdown-menu-item","data-inset":n,"data-variant":o,className:j("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",r),...s})}function z({className:r,children:n,checked:o,...s}){return e.jsxs(kr,{"data-slot":"dropdown-menu-checkbox-item",className:j("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",r),checked:o,...s,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(Se,{children:e.jsx(ee,{className:"size-4"})})}),n]})}function q({...r}){return e.jsx(Pr,{"data-slot":"dropdown-menu-radio-group",...r})}function m({className:r,children:n,...o}){return e.jsxs(Br,{"data-slot":"dropdown-menu-radio-item",className:j("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",r),...o,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(Se,{children:e.jsx(H,{className:"size-2 fill-current"})})}),n]})}function f({className:r,inset:n,...o}){return e.jsx(Rr,{"data-slot":"dropdown-menu-label","data-inset":n,className:j("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",r),...o})}function i({className:r,...n}){return e.jsx(Er,{"data-slot":"dropdown-menu-separator",className:j("bg-border -mx-1 my-1 h-px",r),...n})}function D({className:r,...n}){return e.jsx("span",{"data-slot":"dropdown-menu-shortcut",className:j("text-muted-foreground ml-auto text-xs tracking-widest",r),...n})}function S({...r}){return e.jsx(Ar,{"data-slot":"dropdown-menu-sub",...r})}function C({className:r,inset:n,children:o,...s}){return e.jsxs(Gr,{"data-slot":"dropdown-menu-sub-trigger","data-inset":n,className:j("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",r),...s,children:[o,e.jsx(Ke,{className:"ml-auto size-4"})]})}function y({className:r,...n}){return e.jsx(Or,{"data-slot":"dropdown-menu-sub-content",className:j("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",r),...n})}u.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu"};b.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuPortal"};w.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuTrigger"};h.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuContent",props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuGroup"};f.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "destructive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};z.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuCheckboxItem"};q.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioGroup"};m.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioItem"};i.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSeparator"};D.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuShortcut"};S.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSub"};C.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubContent"};const Ln={title:"UI/Overlay/DropdownMenu",component:u,parameters:{layout:"centered",docs:{description:{component:"사용자가 클릭하여 열 수 있는 드롭다운 메뉴 컴포넌트입니다. 다양한 액션과 옵션을 구성할 수 있습니다."}}},tags:["autodocs"],argTypes:{}},T={render:()=>e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["메뉴 열기",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsx(f,{children:"내 계정"}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(F,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"프로필"})]}),e.jsxs(a,{children:[e.jsx(Je,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"결제 정보"})]}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"설정"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(re,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"로그아웃"})]})]})]})},k={render:()=>e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["편집",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsxs(a,{children:[e.jsx(K,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"편집"}),e.jsx(D,{children:"⌘E"})]}),e.jsxs(a,{children:[e.jsx(ne,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"복사"}),e.jsx(D,{children:"⌘C"})]}),e.jsxs(a,{children:[e.jsx(Qe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"잘라내기"}),e.jsx(D,{children:"⌘X"})]}),e.jsxs(a,{children:[e.jsx(He,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"붙여넣기"}),e.jsx(D,{children:"⌘V"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(Ye,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"보관"}),e.jsx(D,{children:"⌘A"})]}),e.jsxs(a,{className:"text-red-600",children:[e.jsx(X,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"삭제"}),e.jsx(D,{children:"⌫"})]})]})]})},P={render:()=>e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["고급 메뉴",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsxs(a,{children:[e.jsx(Ze,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새로 만들기"})]}),e.jsx(I,{children:e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(pr,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"사용자 초대"})]}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsxs(a,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"이메일로 초대"})]}),e.jsxs(a,{children:[e.jsx(oe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"메시지로 초대"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(H,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"기타 방법"})]})]})})]})}),e.jsx(I,{children:e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(J,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"공유"})]}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsxs(a,{children:[e.jsx(se,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"링크 복사"})]}),e.jsxs(a,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"이메일로 공유"})]}),e.jsxs(a,{children:[e.jsx(ae,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"팀에 공유"})]})]})})]})}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"설정"})]})]})]})},B={render:()=>{const[r,n]=d.useState(!0),[o,s]=d.useState(!1),[t,p]=d.useState(!0);return e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["보기 옵션",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsx(f,{children:"패널 표시"}),e.jsx(i,{}),e.jsxs(z,{checked:r,onCheckedChange:n,children:[e.jsx(rr,{className:"mr-2 h-4 w-4"}),"북마크 바"]}),e.jsxs(z,{checked:o,onCheckedChange:s,children:[e.jsx(te,{className:"mr-2 h-4 w-4"}),"읽기 목록"]}),e.jsxs(z,{checked:t,onCheckedChange:p,children:[e.jsx(ae,{className:"mr-2 h-4 w-4"}),"사람들"]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"더 많은 설정"})]})]})]})}},E={render:()=>{const[r,n]=d.useState("bottom");return e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["패널 위치: ",r==="top"?"상단":r==="bottom"?"하단":r==="right"?"우측":"좌측",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsx(f,{children:"패널 위치"}),e.jsx(i,{}),e.jsxs(q,{value:r,onValueChange:n,children:[e.jsx(m,{value:"top",children:"상단"}),e.jsx(m,{value:"bottom",children:"하단"}),e.jsx(m,{value:"right",children:"우측"}),e.jsx(m,{value:"left",children:"좌측"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"기타 설정"})]})]})]})}},A={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 border rounded-lg bg-muted/50",children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"우클릭으로 컨텍스트 메뉴를 열 수 있는 카드입니다."}),e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsx(x,{variant:"outline",size:"sm",children:e.jsx(de,{className:"h-4 w-4"})})}),e.jsxs(h,{className:"w-48",children:[e.jsxs(a,{children:[e.jsx(K,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"편집"})]}),e.jsxs(a,{children:[e.jsx(ne,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"복제"})]}),e.jsxs(a,{children:[e.jsx(nr,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"즐겨찾기 추가"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(J,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"공유"})]}),e.jsxs(a,{children:[e.jsx(se,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"다운로드"})]}),e.jsx(i,{}),e.jsxs(a,{className:"text-red-600",children:[e.jsx(X,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"삭제"})]})]})]})]})})},G={render:()=>{const r=[{id:1,name:"김철수",email:"kim@example.com",role:"관리자"},{id:2,name:"이영희",email:"lee@example.com",role:"편집자"},{id:3,name:"박민수",email:"park@example.com",role:"사용자"}];return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"border rounded-lg",children:[e.jsx("div",{className:"p-4 border-b",children:e.jsx("h3",{className:"font-semibold",children:"사용자 목록"})}),e.jsx("div",{className:"divide-y",children:r.map(n=>e.jsxs("div",{className:"p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:n.name}),e.jsx("div",{className:"text-sm text-muted-foreground",children:n.email})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Xe,{variant:n.role==="관리자"?"default":"secondary",children:n.role}),e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"sm",children:e.jsx(de,{className:"h-4 w-4"})})}),e.jsxs(h,{align:"end",className:"w-48",children:[e.jsxs(a,{children:[e.jsx(F,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"프로필 보기"})]}),e.jsxs(a,{children:[e.jsx(K,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"편집"})]}),e.jsxs(a,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"이메일 보내기"})]}),e.jsx(i,{}),e.jsx(I,{children:e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"권한 변경"})]}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsx(a,{children:"관리자"}),e.jsx(a,{children:"편집자"}),e.jsx(a,{children:"사용자"})]})})]})}),e.jsx(i,{}),e.jsxs(a,{className:"text-red-600",children:[e.jsx(X,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"사용자 삭제"})]})]})]})]})]},n.id))})]})})}},O={render:()=>{const[r,n]=d.useState("name"),[o,s]=d.useState("all");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:[e.jsx(or,{className:"mr-2 h-4 w-4"}),"필터: ",o==="all"?"전체":o==="active"?"활성":"비활성",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-48",children:[e.jsx(f,{children:"상태별 필터"}),e.jsx(i,{}),e.jsxs(q,{value:o,onValueChange:s,children:[e.jsxs(m,{value:"all",children:[e.jsx(H,{className:"mr-2 h-4 w-4"}),"전체 보기"]}),e.jsxs(m,{value:"active",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"}),"활성 사용자만"]}),e.jsxs(m,{value:"inactive",children:[e.jsx(te,{className:"mr-2 h-4 w-4"}),"비활성 사용자만"]})]})]})]}),e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:[e.jsx(sr,{className:"mr-2 h-4 w-4"}),"정렬: ",r==="name"?"이름":r==="date"?"날짜":"역할",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-48",children:[e.jsx(f,{children:"정렬 기준"}),e.jsx(i,{}),e.jsxs(q,{value:r,onValueChange:n,children:[e.jsxs(m,{value:"name",children:[e.jsx(F,{className:"mr-2 h-4 w-4"}),"이름순"]}),e.jsxs(m,{value:"date",children:[e.jsx(ar,{className:"mr-2 h-4 w-4"}),"날짜순"]}),e.jsxs(m,{value:"role",children:[e.jsx(tr,{className:"mr-2 h-4 w-4"}),"역할순"]})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(dr,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"고급 정렬"})]})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg bg-muted/50",children:[e.jsxs("p",{className:"text-sm",children:["현재 필터: ",e.jsx("strong",{children:o==="all"?"전체":o==="active"?"활성":"비활성"})]}),e.jsxs("p",{className:"text-sm",children:["정렬 기준: ",e.jsx("strong",{children:r==="name"?"이름":r==="date"?"날짜":"역할"})]})]})]})}},L={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, Escape, 화살표 키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 관리 및 순환"}),e.jsx("li",{children:"• 단축키 표시 및 안내"}),e.jsx("li",{children:"• 적절한 색상 대비 및 시각적 피드백"})]})]}),e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline","aria-describedby":"accessibility-description",children:["접근성 데모 메뉴",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-64",children:[e.jsx(f,{children:"접근성 데모"}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(F,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"프로필 (화살표 키로 이동)"}),e.jsx(D,{children:"⌘P"})]}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"설정 (Enter로 선택)"}),e.jsx(D,{children:"⌘,"})]}),e.jsx(i,{}),e.jsx(I,{children:e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(J,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"공유 (→키로 하위메뉴 열기)"})]}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsxs(a,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"이메일로 공유"})]}),e.jsxs(a,{children:[e.jsx(oe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"메시지로 공유"})]})]})})]})}),e.jsx(i,{}),e.jsxs(a,{className:"text-red-600","aria-describedby":"logout-description",children:[e.jsx(re,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"로그아웃 (Escape로 취소)"})]})]})]}),e.jsx("div",{id:"accessibility-description",className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab으로 메뉴 열기, 화살표 키로 항목 이동, Enter로 선택, Escape로 닫기"}),e.jsx("div",{id:"logout-description",className:"sr-only",children:"로그아웃 시 현재 세션이 종료됩니다"})]}),parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다."}}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
      <DropdownMenuTrigger asChild>\r
        <Button variant="outline">\r
          메뉴 열기\r
          <ChevronDown className="ml-2 h-4 w-4" />\r
        </Button>\r
      </DropdownMenuTrigger>\r
      <DropdownMenuContent className="w-56">\r
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>\r
        <DropdownMenuSeparator />\r
        <DropdownMenuItem>\r
          <User className="mr-2 h-4 w-4" />\r
          <span>프로필</span>\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>\r
          <CreditCard className="mr-2 h-4 w-4" />\r
          <span>결제 정보</span>\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>\r
          <Settings className="mr-2 h-4 w-4" />\r
          <span>설정</span>\r
        </DropdownMenuItem>\r
        <DropdownMenuSeparator />\r
        <DropdownMenuItem>\r
          <LogOut className="mr-2 h-4 w-4" />\r
          <span>로그아웃</span>\r
        </DropdownMenuItem>\r
      </DropdownMenuContent>\r
    </DropdownMenu>
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
      <DropdownMenuTrigger asChild>\r
        <Button variant="outline">\r
          편집\r
          <ChevronDown className="ml-2 h-4 w-4" />\r
        </Button>\r
      </DropdownMenuTrigger>\r
      <DropdownMenuContent className="w-56">\r
        <DropdownMenuItem>\r
          <Edit className="mr-2 h-4 w-4" />\r
          <span>편집</span>\r
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>\r
          <Copy className="mr-2 h-4 w-4" />\r
          <span>복사</span>\r
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>\r
          <Scissors className="mr-2 h-4 w-4" />\r
          <span>잘라내기</span>\r
          <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>\r
          <Clipboard className="mr-2 h-4 w-4" />\r
          <span>붙여넣기</span>\r
          <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>\r
        </DropdownMenuItem>\r
        <DropdownMenuSeparator />\r
        <DropdownMenuItem>\r
          <Archive className="mr-2 h-4 w-4" />\r
          <span>보관</span>\r
          <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>\r
        </DropdownMenuItem>\r
        <DropdownMenuItem className="text-red-600">\r
          <Trash2 className="mr-2 h-4 w-4" />\r
          <span>삭제</span>\r
          <DropdownMenuShortcut>⌫</DropdownMenuShortcut>\r
        </DropdownMenuItem>\r
      </DropdownMenuContent>\r
    </DropdownMenu>
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
      <DropdownMenuTrigger asChild>\r
        <Button variant="outline">\r
          고급 메뉴\r
          <ChevronDown className="ml-2 h-4 w-4" />\r
        </Button>\r
      </DropdownMenuTrigger>\r
      <DropdownMenuContent className="w-56">\r
        <DropdownMenuItem>\r
          <Plus className="mr-2 h-4 w-4" />\r
          <span>새로 만들기</span>\r
        </DropdownMenuItem>\r
        <DropdownMenuGroup>\r
          <DropdownMenuSub>\r
            <DropdownMenuSubTrigger>\r
              <UserPlus className="mr-2 h-4 w-4" />\r
              <span>사용자 초대</span>\r
            </DropdownMenuSubTrigger>\r
            <DropdownMenuPortal>\r
              <DropdownMenuSubContent>\r
                <DropdownMenuItem>\r
                  <Mail className="mr-2 h-4 w-4" />\r
                  <span>이메일로 초대</span>\r
                </DropdownMenuItem>\r
                <DropdownMenuItem>\r
                  <MessageSquare className="mr-2 h-4 w-4" />\r
                  <span>메시지로 초대</span>\r
                </DropdownMenuItem>\r
                <DropdownMenuSeparator />\r
                <DropdownMenuItem>\r
                  <Circle className="mr-2 h-4 w-4" />\r
                  <span>기타 방법</span>\r
                </DropdownMenuItem>\r
              </DropdownMenuSubContent>\r
            </DropdownMenuPortal>\r
          </DropdownMenuSub>\r
        </DropdownMenuGroup>\r
        <DropdownMenuGroup>\r
          <DropdownMenuSub>\r
            <DropdownMenuSubTrigger>\r
              <Share className="mr-2 h-4 w-4" />\r
              <span>공유</span>\r
            </DropdownMenuSubTrigger>\r
            <DropdownMenuPortal>\r
              <DropdownMenuSubContent>\r
                <DropdownMenuItem>\r
                  <Download className="mr-2 h-4 w-4" />\r
                  <span>링크 복사</span>\r
                </DropdownMenuItem>\r
                <DropdownMenuItem>\r
                  <Mail className="mr-2 h-4 w-4" />\r
                  <span>이메일로 공유</span>\r
                </DropdownMenuItem>\r
                <DropdownMenuItem>\r
                  <Users className="mr-2 h-4 w-4" />\r
                  <span>팀에 공유</span>\r
                </DropdownMenuItem>\r
              </DropdownMenuSubContent>\r
            </DropdownMenuPortal>\r
          </DropdownMenuSub>\r
        </DropdownMenuGroup>\r
        <DropdownMenuSeparator />\r
        <DropdownMenuItem>\r
          <Settings className="mr-2 h-4 w-4" />\r
          <span>설정</span>\r
        </DropdownMenuItem>\r
      </DropdownMenuContent>\r
    </DropdownMenu>
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showReading, setShowReading] = useState(false);
    const [showPeople, setShowPeople] = useState(true);
    return <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button variant="outline">\r
            보기 옵션\r
            <ChevronDown className="ml-2 h-4 w-4" />\r
          </Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent className="w-56">\r
          <DropdownMenuLabel>패널 표시</DropdownMenuLabel>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>\r
            <Bookmark className="mr-2 h-4 w-4" />\r
            북마크 바\r
          </DropdownMenuCheckboxItem>\r
          <DropdownMenuCheckboxItem checked={showReading} onCheckedChange={setShowReading}>\r
            <Square className="mr-2 h-4 w-4" />\r
            읽기 목록\r
          </DropdownMenuCheckboxItem>\r
          <DropdownMenuCheckboxItem checked={showPeople} onCheckedChange={setShowPeople}>\r
            <Users className="mr-2 h-4 w-4" />\r
            사람들\r
          </DropdownMenuCheckboxItem>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuItem>\r
            <Settings className="mr-2 h-4 w-4" />\r
            <span>더 많은 설정</span>\r
          </DropdownMenuItem>\r
        </DropdownMenuContent>\r
      </DropdownMenu>;
  }
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState('bottom');
    return <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button variant="outline">\r
            패널 위치: {position === 'top' ? '상단' : position === 'bottom' ? '하단' : position === 'right' ? '우측' : '좌측'}\r
            <ChevronDown className="ml-2 h-4 w-4" />\r
          </Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent className="w-56">\r
          <DropdownMenuLabel>패널 위치</DropdownMenuLabel>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>\r
            <DropdownMenuRadioItem value="top">상단</DropdownMenuRadioItem>\r
            <DropdownMenuRadioItem value="bottom">하단</DropdownMenuRadioItem>\r
            <DropdownMenuRadioItem value="right">우측</DropdownMenuRadioItem>\r
            <DropdownMenuRadioItem value="left">좌측</DropdownMenuRadioItem>\r
          </DropdownMenuRadioGroup>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuItem>\r
            <Settings className="mr-2 h-4 w-4" />\r
            <span>기타 설정</span>\r
          </DropdownMenuItem>\r
        </DropdownMenuContent>\r
      </DropdownMenu>;
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div className="p-4 border rounded-lg bg-muted/50">\r
        <p className="text-sm text-muted-foreground mb-2">\r
          우클릭으로 컨텍스트 메뉴를 열 수 있는 카드입니다.\r
        </p>\r
        <DropdownMenu>\r
          <DropdownMenuTrigger asChild>\r
            <Button variant="outline" size="sm">\r
              <MoreHorizontal className="h-4 w-4" />\r
            </Button>\r
          </DropdownMenuTrigger>\r
          <DropdownMenuContent className="w-48">\r
            <DropdownMenuItem>\r
              <Edit className="mr-2 h-4 w-4" />\r
              <span>편집</span>\r
            </DropdownMenuItem>\r
            <DropdownMenuItem>\r
              <Copy className="mr-2 h-4 w-4" />\r
              <span>복제</span>\r
            </DropdownMenuItem>\r
            <DropdownMenuItem>\r
              <Star className="mr-2 h-4 w-4" />\r
              <span>즐겨찾기 추가</span>\r
            </DropdownMenuItem>\r
            <DropdownMenuSeparator />\r
            <DropdownMenuItem>\r
              <Share className="mr-2 h-4 w-4" />\r
              <span>공유</span>\r
            </DropdownMenuItem>\r
            <DropdownMenuItem>\r
              <Download className="mr-2 h-4 w-4" />\r
              <span>다운로드</span>\r
            </DropdownMenuItem>\r
            <DropdownMenuSeparator />\r
            <DropdownMenuItem className="text-red-600">\r
              <Trash2 className="mr-2 h-4 w-4" />\r
              <span>삭제</span>\r
            </DropdownMenuItem>\r
          </DropdownMenuContent>\r
        </DropdownMenu>\r
      </div>\r
    </div>
}`,...A.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const users = [{
      id: 1,
      name: '김철수',
      email: 'kim@example.com',
      role: '관리자'
    }, {
      id: 2,
      name: '이영희',
      email: 'lee@example.com',
      role: '편집자'
    }, {
      id: 3,
      name: '박민수',
      email: 'park@example.com',
      role: '사용자'
    }];
    return <div className="space-y-4">\r
        <div className="border rounded-lg">\r
          <div className="p-4 border-b">\r
            <h3 className="font-semibold">사용자 목록</h3>\r
          </div>\r
          <div className="divide-y">\r
            {users.map(user => <div key={user.id} className="p-4 flex items-center justify-between">\r
                <div>\r
                  <div className="font-medium">{user.name}</div>\r
                  <div className="text-sm text-muted-foreground">{user.email}</div>\r
                </div>\r
                <div className="flex items-center gap-2">\r
                  <Badge variant={user.role === '관리자' ? 'default' : 'secondary'}>\r
                    {user.role}\r
                  </Badge>\r
                  <DropdownMenu>\r
                    <DropdownMenuTrigger asChild>\r
                      <Button variant="ghost" size="sm">\r
                        <MoreHorizontal className="h-4 w-4" />\r
                      </Button>\r
                    </DropdownMenuTrigger>\r
                    <DropdownMenuContent align="end" className="w-48">\r
                      <DropdownMenuItem>\r
                        <User className="mr-2 h-4 w-4" />\r
                        <span>프로필 보기</span>\r
                      </DropdownMenuItem>\r
                      <DropdownMenuItem>\r
                        <Edit className="mr-2 h-4 w-4" />\r
                        <span>편집</span>\r
                      </DropdownMenuItem>\r
                      <DropdownMenuItem>\r
                        <Mail className="mr-2 h-4 w-4" />\r
                        <span>이메일 보내기</span>\r
                      </DropdownMenuItem>\r
                      <DropdownMenuSeparator />\r
                      <DropdownMenuGroup>\r
                        <DropdownMenuSub>\r
                          <DropdownMenuSubTrigger>\r
                            <Settings className="mr-2 h-4 w-4" />\r
                            <span>권한 변경</span>\r
                          </DropdownMenuSubTrigger>\r
                          <DropdownMenuPortal>\r
                            <DropdownMenuSubContent>\r
                              <DropdownMenuItem>관리자</DropdownMenuItem>\r
                              <DropdownMenuItem>편집자</DropdownMenuItem>\r
                              <DropdownMenuItem>사용자</DropdownMenuItem>\r
                            </DropdownMenuSubContent>\r
                          </DropdownMenuPortal>\r
                        </DropdownMenuSub>\r
                      </DropdownMenuGroup>\r
                      <DropdownMenuSeparator />\r
                      <DropdownMenuItem className="text-red-600">\r
                        <Trash2 className="mr-2 h-4 w-4" />\r
                        <span>사용자 삭제</span>\r
                      </DropdownMenuItem>\r
                    </DropdownMenuContent>\r
                  </DropdownMenu>\r
                </div>\r
              </div>)}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...G.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortBy, setSortBy] = useState('name');
    const [filterBy, setFilterBy] = useState('all');
    return <div className="space-y-4">\r
        <div className="flex gap-2">\r
          <DropdownMenu>\r
            <DropdownMenuTrigger asChild>\r
              <Button variant="outline">\r
                <Filter className="mr-2 h-4 w-4" />\r
                필터: {filterBy === 'all' ? '전체' : filterBy === 'active' ? '활성' : '비활성'}\r
                <ChevronDown className="ml-2 h-4 w-4" />\r
              </Button>\r
            </DropdownMenuTrigger>\r
            <DropdownMenuContent className="w-48">\r
              <DropdownMenuLabel>상태별 필터</DropdownMenuLabel>\r
              <DropdownMenuSeparator />\r
              <DropdownMenuRadioGroup value={filterBy} onValueChange={setFilterBy}>\r
                <DropdownMenuRadioItem value="all">\r
                  <Circle className="mr-2 h-4 w-4" />\r
                  전체 보기\r
                </DropdownMenuRadioItem>\r
                <DropdownMenuRadioItem value="active">\r
                  <Check className="mr-2 h-4 w-4" />\r
                  활성 사용자만\r
                </DropdownMenuRadioItem>\r
                <DropdownMenuRadioItem value="inactive">\r
                  <Square className="mr-2 h-4 w-4" />\r
                  비활성 사용자만\r
                </DropdownMenuRadioItem>\r
              </DropdownMenuRadioGroup>\r
            </DropdownMenuContent>\r
          </DropdownMenu>\r
\r
          <DropdownMenu>\r
            <DropdownMenuTrigger asChild>\r
              <Button variant="outline">\r
                <ArrowUpDown className="mr-2 h-4 w-4" />\r
                정렬: {sortBy === 'name' ? '이름' : sortBy === 'date' ? '날짜' : '역할'}\r
                <ChevronDown className="ml-2 h-4 w-4" />\r
              </Button>\r
            </DropdownMenuTrigger>\r
            <DropdownMenuContent className="w-48">\r
              <DropdownMenuLabel>정렬 기준</DropdownMenuLabel>\r
              <DropdownMenuSeparator />\r
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>\r
                <DropdownMenuRadioItem value="name">\r
                  <User className="mr-2 h-4 w-4" />\r
                  이름순\r
                </DropdownMenuRadioItem>\r
                <DropdownMenuRadioItem value="date">\r
                  <Calendar className="mr-2 h-4 w-4" />\r
                  날짜순\r
                </DropdownMenuRadioItem>\r
                <DropdownMenuRadioItem value="role">\r
                  <Tag className="mr-2 h-4 w-4" />\r
                  역할순\r
                </DropdownMenuRadioItem>\r
              </DropdownMenuRadioGroup>\r
              <DropdownMenuSeparator />\r
              <DropdownMenuItem>\r
                <Flag className="mr-2 h-4 w-4" />\r
                <span>고급 정렬</span>\r
              </DropdownMenuItem>\r
            </DropdownMenuContent>\r
          </DropdownMenu>\r
        </div>\r
\r
        <div className="p-4 border rounded-lg bg-muted/50">\r
          <p className="text-sm">\r
            현재 필터: <strong>{filterBy === 'all' ? '전체' : filterBy === 'active' ? '활성' : '비활성'}</strong>\r
          </p>\r
          <p className="text-sm">\r
            정렬 기준: <strong>{sortBy === 'name' ? '이름' : sortBy === 'date' ? '날짜' : '역할'}</strong>\r
          </p>\r
        </div>\r
      </div>;
  }
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div className="p-4 border rounded-lg">\r
        <h3 className="font-semibold mb-2">접근성 기능</h3>\r
        <ul className="text-sm space-y-1 text-muted-foreground">\r
          <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape, 화살표 키)</li>\r
          <li>• 스크린 리더 호환성 및 ARIA 레이블</li>\r
          <li>• 포커스 관리 및 순환</li>\r
          <li>• 단축키 표시 및 안내</li>\r
          <li>• 적절한 색상 대비 및 시각적 피드백</li>\r
        </ul>\r
      </div>\r
      \r
      <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button variant="outline" aria-describedby="accessibility-description">\r
            접근성 데모 메뉴\r
            <ChevronDown className="ml-2 h-4 w-4" />\r
          </Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent className="w-64">\r
          <DropdownMenuLabel>접근성 데모</DropdownMenuLabel>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuItem>\r
            <User className="mr-2 h-4 w-4" />\r
            <span>프로필 (화살표 키로 이동)</span>\r
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>\r
          </DropdownMenuItem>\r
          <DropdownMenuItem>\r
            <Settings className="mr-2 h-4 w-4" />\r
            <span>설정 (Enter로 선택)</span>\r
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>\r
          </DropdownMenuItem>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuGroup>\r
            <DropdownMenuSub>\r
              <DropdownMenuSubTrigger>\r
                <Share className="mr-2 h-4 w-4" />\r
                <span>공유 (→키로 하위메뉴 열기)</span>\r
              </DropdownMenuSubTrigger>\r
              <DropdownMenuPortal>\r
                <DropdownMenuSubContent>\r
                  <DropdownMenuItem>\r
                    <Mail className="mr-2 h-4 w-4" />\r
                    <span>이메일로 공유</span>\r
                  </DropdownMenuItem>\r
                  <DropdownMenuItem>\r
                    <MessageSquare className="mr-2 h-4 w-4" />\r
                    <span>메시지로 공유</span>\r
                  </DropdownMenuItem>\r
                </DropdownMenuSubContent>\r
              </DropdownMenuPortal>\r
            </DropdownMenuSub>\r
          </DropdownMenuGroup>\r
          <DropdownMenuSeparator />\r
          <DropdownMenuItem className="text-red-600" aria-describedby="logout-description">\r
            <LogOut className="mr-2 h-4 w-4" />\r
            <span>로그아웃 (Escape로 취소)</span>\r
          </DropdownMenuItem>\r
        </DropdownMenuContent>\r
      </DropdownMenu>\r
      \r
      <div id="accessibility-description" className="text-xs text-muted-foreground p-2 bg-muted rounded">\r
        💡 팁: Tab으로 메뉴 열기, 화살표 키로 항목 이동, Enter로 선택, Escape로 닫기\r
      </div>\r
      <div id="logout-description" className="sr-only">\r
        로그아웃 시 현재 세션이 종료됩니다\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};export{L as AccessibilityDemo,A as ContextMenu,T as Default,O as FilterAndSort,G as TableActions,B as WithCheckboxes,E as WithRadioGroup,k as WithShortcuts,P as WithSubmenus,Ln as default};
