import{j as e}from"./jsx-runtime-8QxKK14C.js";import{r as d}from"./iframe-B2kX-glr.js";import{c as U}from"./index-BFMzdnQk.js";import{a as ye}from"./index-VzR2QM6L.js";import{c as _e}from"./index-CpNtCWq2.js";import{u as Y}from"./index-bOdmmEfL.js";import{P as Re}from"./index-ByLravCQ.js";import{c as Z,R as Te,A as ke,P as Pe,C as Be,L as Ee,S as Ae,I as Ge,G as Oe,a as Le,b as ze,d as Ue,e as $e,f as qe,g as Fe,h as Ve,i as We,j as He}from"./index-D9eTME-t.js";import{u as Q}from"./index-DeXmmsED.js";import{c as j}from"./utils-CBfrqCZ4.js";import{C as Ke}from"./chevron-right-Cup4OaID.js";import{C as ee}from"./check-Dc5BYMD8.js";import{C as H}from"./circle-BoPZfLK0.js";import{B as x}from"./button-DOk-dAfs.js";import{B as Xe}from"./badge-DY8zw9xQ.js";import{C as g}from"./chevron-down-VIR_i5RQ.js";import{U as F}from"./user-DHy9uRLa.js";import{C as Je}from"./credit-card-63GQf-HI.js";import{S as v}from"./settings-ClBb5FGT.js";import{L as ne}from"./log-out-C5PO9Qfj.js";import{S as K}from"./square-pen-Cvruuys9.js";import{C as oe}from"./copy-_sy4ZbPV.js";import{S as Qe}from"./scissors-DDyIDQKm.js";import{A as Ye}from"./archive-BZHWmQ5r.js";import{T as X}from"./trash-2-B-Q6ThV-.js";import{P as Ze}from"./plus-B1Y1Y_r2.js";import{c as en}from"./createLucideIcon-DJ_N0P9W.js";import{M as $}from"./mail-shDoExv7.js";import{M as re}from"./message-square-uYXbYw_u.js";import{S as J}from"./share-D-9tYYDA.js";import{D as se}from"./download-74Wi4HXs.js";import{U as ae}from"./users-C99CnaEs.js";import{B as nn}from"./bookmark-Cka0B4BY.js";import{S as te}from"./square-57J5dZGa.js";import{E as de}from"./ellipsis-VI2XLw7r.js";import{S as on}from"./star-D-5Q9gPC.js";import{F as rn}from"./funnel-C5lY2jsS.js";import{A as sn}from"./arrow-up-down-Dee53jhl.js";import{C as an}from"./calendar-CMzPBE-Z.js";import{T as tn}from"./tag-BR8ih0-i.js";import{F as dn}from"./flag-B01_i-Jn.js";import"./index-D6OPU2eR.js";import"./index-ByBTf6qz.js";import"./index-DDnjYA_n.js";import"./index-yE6sufkC.js";import"./index-DtZVKlUv.js";import"./index-Ct1po6s2.js";import"./index-BXh2W06p.js";import"./index-BQ-CSpto.js";import"./index-CwxDBoYY.js";import"./index-B8bM6_z3.js";import"./index-B2CbHWkB.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],ln=en("user-plus",pn);var V="DropdownMenu",[cn]=_e(V,[Z]),c=Z(),[un,ie]=cn(V),pe=n=>{const{__scopeDropdownMenu:o,children:r,dir:s,open:t,defaultOpen:p,onOpenChange:M,modal:l=!0}=n,N=c(o),W=d.useRef(null),[_,R]=Y({prop:t,defaultProp:p??!1,onChange:M,caller:V});return e.jsx(un,{scope:o,triggerId:Q(),triggerRef:W,contentId:Q(),open:_,onOpenChange:R,onOpenToggle:d.useCallback(()=>R(Ce=>!Ce),[R]),modal:l,children:e.jsx(Te,{...N,open:_,onOpenChange:R,dir:s,modal:l,children:r})})};pe.displayName=V;var le="DropdownMenuTrigger",ce=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,disabled:s=!1,...t}=n,p=ie(le,r),M=c(r);return e.jsx(ke,{asChild:!0,...M,children:e.jsx(Re.button,{type:"button",id:p.triggerId,"aria-haspopup":"menu","aria-expanded":p.open,"aria-controls":p.open?p.contentId:void 0,"data-state":p.open?"open":"closed","data-disabled":s?"":void 0,disabled:s,...t,ref:ye(o,p.triggerRef),onPointerDown:U(n.onPointerDown,l=>{!s&&l.button===0&&l.ctrlKey===!1&&(p.onOpenToggle(),p.open||l.preventDefault())}),onKeyDown:U(n.onKeyDown,l=>{s||(["Enter"," "].includes(l.key)&&p.onOpenToggle(),l.key==="ArrowDown"&&p.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});ce.displayName=le;var mn="DropdownMenuPortal",ue=n=>{const{__scopeDropdownMenu:o,...r}=n,s=c(o);return e.jsx(Pe,{...s,...r})};ue.displayName=mn;var me="DropdownMenuContent",we=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=ie(me,r),p=c(r),M=d.useRef(!1);return e.jsx(Be,{id:t.contentId,"aria-labelledby":t.triggerId,...p,...s,ref:o,onCloseAutoFocus:U(n.onCloseAutoFocus,l=>{M.current||t.triggerRef.current?.focus(),M.current=!1,l.preventDefault()}),onInteractOutside:U(n.onInteractOutside,l=>{const N=l.detail.originalEvent,W=N.button===0&&N.ctrlKey===!0,_=N.button===2||W;(!t.modal||_)&&(M.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});we.displayName=me;var wn="DropdownMenuGroup",he=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(Oe,{...t,...s,ref:o})});he.displayName=wn;var hn="DropdownMenuLabel",xe=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(Ee,{...t,...s,ref:o})});xe.displayName=hn;var xn="DropdownMenuItem",Me=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(Ge,{...t,...s,ref:o})});Me.displayName=xn;var Mn="DropdownMenuCheckboxItem",De=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx($e,{...t,...s,ref:o})});De.displayName=Mn;var Dn="DropdownMenuRadioGroup",je=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(Fe,{...t,...s,ref:o})});je.displayName=Dn;var jn="DropdownMenuRadioItem",ge=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(Ve,{...t,...s,ref:o})});ge.displayName=jn;var gn="DropdownMenuItemIndicator",Ne=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(qe,{...t,...s,ref:o})});Ne.displayName=gn;var Nn="DropdownMenuSeparator",fe=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(Ae,{...t,...s,ref:o})});fe.displayName=Nn;var fn="DropdownMenuArrow",vn=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(We,{...t,...s,ref:o})});vn.displayName=fn;var bn=n=>{const{__scopeDropdownMenu:o,children:r,open:s,onOpenChange:t,defaultOpen:p}=n,M=c(o),[l,N]=Y({prop:s,defaultProp:p??!1,onChange:t,caller:"DropdownMenuSub"});return e.jsx(Le,{...M,open:l,onOpenChange:N,children:r})},In="DropdownMenuSubTrigger",ve=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(ze,{...t,...s,ref:o})});ve.displayName=In;var Sn="DropdownMenuSubContent",be=d.forwardRef((n,o)=>{const{__scopeDropdownMenu:r,...s}=n,t=c(r);return e.jsx(Ue,{...t,...s,ref:o,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});be.displayName=Sn;var Cn=pe,yn=ce,Ie=ue,_n=we,Rn=he,Tn=xe,kn=Me,Pn=De,Bn=je,En=ge,Se=Ne,An=fe,Gn=bn,On=ve,Ln=be;function u({...n}){return e.jsx(Cn,{"data-slot":"dropdown-menu",...n})}function b({...n}){return e.jsx(Ie,{"data-slot":"dropdown-menu-portal",...n})}function w({...n}){return e.jsx(yn,{"data-slot":"dropdown-menu-trigger",...n})}function h({className:n,sideOffset:o=4,...r}){return e.jsx(Ie,{children:e.jsx(_n,{"data-slot":"dropdown-menu-content",sideOffset:o,tabIndex:-1,className:j("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md focus:outline-none",n),...r})})}function I({...n}){return e.jsx(Rn,{"data-slot":"dropdown-menu-group",...n})}function a({className:n,inset:o,variant:r="default",...s}){return e.jsx(kn,{"data-slot":"dropdown-menu-item","data-inset":o,"data-variant":r,className:j("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...s})}function z({className:n,children:o,checked:r,...s}){return e.jsxs(Pn,{"data-slot":"dropdown-menu-checkbox-item",className:j("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),checked:r,...s,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(Se,{children:e.jsx(ee,{className:"size-4"})})}),o]})}function q({...n}){return e.jsx(Bn,{"data-slot":"dropdown-menu-radio-group",...n})}function m({className:n,children:o,...r}){return e.jsxs(En,{"data-slot":"dropdown-menu-radio-item",className:j("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...r,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(Se,{children:e.jsx(H,{className:"size-2 fill-current"})})}),o]})}function f({className:n,inset:o,...r}){return e.jsx(Tn,{"data-slot":"dropdown-menu-label","data-inset":o,className:j("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",n),...r})}function i({className:n,...o}){return e.jsx(An,{"data-slot":"dropdown-menu-separator",className:j("bg-border -mx-1 my-1 h-px",n),...o})}function D({className:n,...o}){return e.jsx("span",{"data-slot":"dropdown-menu-shortcut",className:j("text-muted-foreground ml-auto text-xs tracking-widest",n),...o})}function S({...n}){return e.jsx(Gn,{"data-slot":"dropdown-menu-sub",...n})}function C({className:n,inset:o,children:r,...s}){return e.jsxs(On,{"data-slot":"dropdown-menu-sub-trigger","data-inset":o,className:j("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",n),...s,children:[r,e.jsx(Ke,{className:"ml-auto size-4"})]})}function y({className:n,...o}){return e.jsx(Ln,{"data-slot":"dropdown-menu-sub-content",className:j("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",n),...o})}u.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu"};b.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuPortal"};w.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuTrigger"};h.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuContent",props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuGroup"};f.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuLabel",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem",props:{inset:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "destructive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"destructive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};z.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuCheckboxItem"};q.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioGroup"};m.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRadioItem"};i.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSeparator"};D.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuShortcut"};S.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSub"};C.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubTrigger",props:{inset:{required:!1,tsType:{name:"boolean"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuSubContent"};const zo={title:"UI/Overlay/DropdownMenu",component:u,parameters:{layout:"centered",docs:{description:{component:"사용자가 클릭하여 열 수 있는 드롭다운 메뉴 컴포넌트입니다. 다양한 액션과 옵션을 구성할 수 있습니다."}}},tags:["autodocs"],argTypes:{}},T={render:()=>e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["메뉴 열기",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsx(f,{children:"내 계정"}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(F,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"프로필"})]}),e.jsxs(a,{children:[e.jsx(Je,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"결제 정보"})]}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"설정"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(ne,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"로그아웃"})]})]})]})},k={render:()=>e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["편집",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsxs(a,{children:[e.jsx(K,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"편집"}),e.jsx(D,{children:"⌘E"})]}),e.jsxs(a,{children:[e.jsx(oe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"복사"}),e.jsx(D,{children:"⌘C"})]}),e.jsxs(a,{children:[e.jsx(Qe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"잘라내기"}),e.jsx(D,{children:"⌘X"})]}),e.jsxs(a,{children:[e.jsx(He,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"붙여넣기"}),e.jsx(D,{children:"⌘V"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(Ye,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"보관"}),e.jsx(D,{children:"⌘A"})]}),e.jsxs(a,{className:"text-red-600",children:[e.jsx(X,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"삭제"}),e.jsx(D,{children:"⌫"})]})]})]})},P={render:()=>e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["고급 메뉴",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsxs(a,{children:[e.jsx(Ze,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"새로 만들기"})]}),e.jsx(I,{children:e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(ln,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"사용자 초대"})]}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsxs(a,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"이메일로 초대"})]}),e.jsxs(a,{children:[e.jsx(re,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"메시지로 초대"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(H,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"기타 방법"})]})]})})]})}),e.jsx(I,{children:e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(J,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"공유"})]}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsxs(a,{children:[e.jsx(se,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"링크 복사"})]}),e.jsxs(a,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"이메일로 공유"})]}),e.jsxs(a,{children:[e.jsx(ae,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"팀에 공유"})]})]})})]})}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"설정"})]})]})]})},B={render:()=>{const[n,o]=d.useState(!0),[r,s]=d.useState(!1),[t,p]=d.useState(!0);return e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["보기 옵션",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsx(f,{children:"패널 표시"}),e.jsx(i,{}),e.jsxs(z,{checked:n,onCheckedChange:o,children:[e.jsx(nn,{className:"mr-2 h-4 w-4"}),"북마크 바"]}),e.jsxs(z,{checked:r,onCheckedChange:s,children:[e.jsx(te,{className:"mr-2 h-4 w-4"}),"읽기 목록"]}),e.jsxs(z,{checked:t,onCheckedChange:p,children:[e.jsx(ae,{className:"mr-2 h-4 w-4"}),"사람들"]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"더 많은 설정"})]})]})]})}},E={render:()=>{const[n,o]=d.useState("bottom");return e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:["패널 위치: ",n==="top"?"상단":n==="bottom"?"하단":n==="right"?"우측":"좌측",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-56",children:[e.jsx(f,{children:"패널 위치"}),e.jsx(i,{}),e.jsxs(q,{value:n,onValueChange:o,children:[e.jsx(m,{value:"top",children:"상단"}),e.jsx(m,{value:"bottom",children:"하단"}),e.jsx(m,{value:"right",children:"우측"}),e.jsx(m,{value:"left",children:"좌측"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"기타 설정"})]})]})]})}},A={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 border rounded-lg bg-muted/50",children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"우클릭으로 컨텍스트 메뉴를 열 수 있는 카드입니다."}),e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsx(x,{variant:"outline",size:"sm",children:e.jsx(de,{className:"h-4 w-4"})})}),e.jsxs(h,{className:"w-48",children:[e.jsxs(a,{children:[e.jsx(K,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"편집"})]}),e.jsxs(a,{children:[e.jsx(oe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"복제"})]}),e.jsxs(a,{children:[e.jsx(on,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"즐겨찾기 추가"})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(J,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"공유"})]}),e.jsxs(a,{children:[e.jsx(se,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"다운로드"})]}),e.jsx(i,{}),e.jsxs(a,{className:"text-red-600",children:[e.jsx(X,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"삭제"})]})]})]})]})})},G={render:()=>{const n=[{id:1,name:"김철수",email:"kim@example.com",role:"관리자"},{id:2,name:"이영희",email:"lee@example.com",role:"편집자"},{id:3,name:"박민수",email:"park@example.com",role:"사용자"}];return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"border rounded-lg",children:[e.jsx("div",{className:"p-4 border-b",children:e.jsx("h3",{className:"font-semibold",children:"사용자 목록"})}),e.jsx("div",{className:"divide-y",children:n.map(o=>e.jsxs("div",{className:"p-4 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:o.name}),e.jsx("div",{className:"text-sm text-muted-foreground",children:o.email})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Xe,{variant:o.role==="관리자"?"default":"secondary",children:o.role}),e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsx(x,{variant:"ghost",size:"sm",children:e.jsx(de,{className:"h-4 w-4"})})}),e.jsxs(h,{align:"end",className:"w-48",children:[e.jsxs(a,{children:[e.jsx(F,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"프로필 보기"})]}),e.jsxs(a,{children:[e.jsx(K,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"편집"})]}),e.jsxs(a,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"이메일 보내기"})]}),e.jsx(i,{}),e.jsx(I,{children:e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"권한 변경"})]}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsx(a,{children:"관리자"}),e.jsx(a,{children:"편집자"}),e.jsx(a,{children:"사용자"})]})})]})}),e.jsx(i,{}),e.jsxs(a,{className:"text-red-600",children:[e.jsx(X,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"사용자 삭제"})]})]})]})]})]},o.id))})]})})}},O={render:()=>{const[n,o]=d.useState("name"),[r,s]=d.useState("all");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:[e.jsx(rn,{className:"mr-2 h-4 w-4"}),"필터: ",r==="all"?"전체":r==="active"?"활성":"비활성",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-48",children:[e.jsx(f,{children:"상태별 필터"}),e.jsx(i,{}),e.jsxs(q,{value:r,onValueChange:s,children:[e.jsxs(m,{value:"all",children:[e.jsx(H,{className:"mr-2 h-4 w-4"}),"전체 보기"]}),e.jsxs(m,{value:"active",children:[e.jsx(ee,{className:"mr-2 h-4 w-4"}),"활성 사용자만"]}),e.jsxs(m,{value:"inactive",children:[e.jsx(te,{className:"mr-2 h-4 w-4"}),"비활성 사용자만"]})]})]})]}),e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline",children:[e.jsx(sn,{className:"mr-2 h-4 w-4"}),"정렬: ",n==="name"?"이름":n==="date"?"날짜":"역할",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-48",children:[e.jsx(f,{children:"정렬 기준"}),e.jsx(i,{}),e.jsxs(q,{value:n,onValueChange:o,children:[e.jsxs(m,{value:"name",children:[e.jsx(F,{className:"mr-2 h-4 w-4"}),"이름순"]}),e.jsxs(m,{value:"date",children:[e.jsx(an,{className:"mr-2 h-4 w-4"}),"날짜순"]}),e.jsxs(m,{value:"role",children:[e.jsx(tn,{className:"mr-2 h-4 w-4"}),"역할순"]})]}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(dn,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"고급 정렬"})]})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg bg-muted/50",children:[e.jsxs("p",{className:"text-sm",children:["현재 필터: ",e.jsx("strong",{children:r==="all"?"전체":r==="active"?"활성":"비활성"})]}),e.jsxs("p",{className:"text-sm",children:["정렬 기준: ",e.jsx("strong",{children:n==="name"?"이름":n==="date"?"날짜":"역할"})]})]})]})}},L={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, Escape, 화살표 키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 관리 및 순환"}),e.jsx("li",{children:"• 단축키 표시 및 안내"}),e.jsx("li",{children:"• 적절한 색상 대비 및 시각적 피드백"})]})]}),e.jsxs(u,{children:[e.jsx(w,{asChild:!0,children:e.jsxs(x,{variant:"outline","aria-describedby":"accessibility-description",children:["접근성 데모 메뉴",e.jsx(g,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(h,{className:"w-64",children:[e.jsx(f,{children:"접근성 데모"}),e.jsx(i,{}),e.jsxs(a,{children:[e.jsx(F,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"프로필 (화살표 키로 이동)"}),e.jsx(D,{children:"⌘P"})]}),e.jsxs(a,{children:[e.jsx(v,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"설정 (Enter로 선택)"}),e.jsx(D,{children:"⌘,"})]}),e.jsx(i,{}),e.jsx(I,{children:e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(J,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"공유 (→키로 하위메뉴 열기)"})]}),e.jsx(b,{children:e.jsxs(y,{children:[e.jsxs(a,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"이메일로 공유"})]}),e.jsxs(a,{children:[e.jsx(re,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"메시지로 공유"})]})]})})]})}),e.jsx(i,{}),e.jsxs(a,{className:"text-red-600","aria-describedby":"logout-description",children:[e.jsx(ne,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"로그아웃 (Escape로 취소)"})]})]})]}),e.jsx("div",{id:"accessibility-description",className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab으로 메뉴 열기, 화살표 키로 항목 이동, Enter로 선택, Escape로 닫기"}),e.jsx("div",{id:"logout-description",className:"sr-only",children:"로그아웃 시 현재 세션이 종료됩니다"})]}),parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다."}}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          메뉴 열기
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>프로필</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>결제 정보</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>설정</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          편집
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          <span>편집</span>
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>복사</span>
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Scissors className="mr-2 h-4 w-4" />
          <span>잘라내기</span>
          <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Clipboard className="mr-2 h-4 w-4" />
          <span>붙여넣기</span>
          <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Archive className="mr-2 h-4 w-4" />
          <span>보관</span>
          <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>삭제</span>
          <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          고급 메뉴
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          <span>새로 만들기</span>
        </DropdownMenuItem>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>사용자 초대</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>이메일로 초대</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>메시지로 초대</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Circle className="mr-2 h-4 w-4" />
                  <span>기타 방법</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Share className="mr-2 h-4 w-4" />
              <span>공유</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>링크 복사</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>이메일로 공유</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>팀에 공유</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>설정</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showReading, setShowReading] = useState(false);
    const [showPeople, setShowPeople] = useState(true);
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            보기 옵션
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>패널 표시</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
            <Bookmark className="mr-2 h-4 w-4" />
            북마크 바
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showReading} onCheckedChange={setShowReading}>
            <Square className="mr-2 h-4 w-4" />
            읽기 목록
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showPeople} onCheckedChange={setShowPeople}>
            <Users className="mr-2 h-4 w-4" />
            사람들
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>더 많은 설정</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState('bottom');
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            패널 위치: {position === 'top' ? '상단' : position === 'bottom' ? '하단' : position === 'right' ? '우측' : '좌측'}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>패널 위치</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">상단</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">하단</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">우측</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left">좌측</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>기타 설정</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="p-4 border rounded-lg bg-muted/50">
        <p className="text-sm text-muted-foreground mb-2">
          우클릭으로 컨텍스트 메뉴를 열 수 있는 카드입니다.
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              <span>편집</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>복제</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star className="mr-2 h-4 w-4" />
              <span>즐겨찾기 추가</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Share className="mr-2 h-4 w-4" />
              <span>공유</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>다운로드</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              <span>삭제</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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
    return <div className="space-y-4">
        <div className="border rounded-lg">
          <div className="p-4 border-b">
            <h3 className="font-semibold">사용자 목록</h3>
          </div>
          <div className="divide-y">
            {users.map(user => <div key={user.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={user.role === '관리자' ? 'default' : 'secondary'}>
                    {user.role}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>프로필 보기</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>편집</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>이메일 보내기</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>권한 변경</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>관리자</DropdownMenuItem>
                              <DropdownMenuItem>편집자</DropdownMenuItem>
                              <DropdownMenuItem>사용자</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>사용자 삭제</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...G.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortBy, setSortBy] = useState('name');
    const [filterBy, setFilterBy] = useState('all');
    return <div className="space-y-4">
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                필터: {filterBy === 'all' ? '전체' : filterBy === 'active' ? '활성' : '비활성'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>상태별 필터</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={filterBy} onValueChange={setFilterBy}>
                <DropdownMenuRadioItem value="all">
                  <Circle className="mr-2 h-4 w-4" />
                  전체 보기
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="active">
                  <Check className="mr-2 h-4 w-4" />
                  활성 사용자만
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="inactive">
                  <Square className="mr-2 h-4 w-4" />
                  비활성 사용자만
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                정렬: {sortBy === 'name' ? '이름' : sortBy === 'date' ? '날짜' : '역할'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>정렬 기준</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="name">
                  <User className="mr-2 h-4 w-4" />
                  이름순
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="date">
                  <Calendar className="mr-2 h-4 w-4" />
                  날짜순
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="role">
                  <Tag className="mr-2 h-4 w-4" />
                  역할순
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Flag className="mr-2 h-4 w-4" />
                <span>고급 정렬</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="p-4 border rounded-lg bg-muted/50">
          <p className="text-sm">
            현재 필터: <strong>{filterBy === 'all' ? '전체' : filterBy === 'active' ? '활성' : '비활성'}</strong>
          </p>
          <p className="text-sm">
            정렬 기준: <strong>{sortBy === 'name' ? '이름' : sortBy === 'date' ? '날짜' : '역할'}</strong>
          </p>
        </div>
      </div>;
  }
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">접근성 기능</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape, 화살표 키)</li>
          <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
          <li>• 포커스 관리 및 순환</li>
          <li>• 단축키 표시 및 안내</li>
          <li>• 적절한 색상 대비 및 시각적 피드백</li>
        </ul>
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-describedby="accessibility-description">
            접근성 데모 메뉴
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>접근성 데모</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>프로필 (화살표 키로 이동)</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>설정 (Enter로 선택)</span>
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Share className="mr-2 h-4 w-4" />
                <span>공유 (→키로 하위메뉴 열기)</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>이메일로 공유</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>메시지로 공유</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600" aria-describedby="logout-description">
            <LogOut className="mr-2 h-4 w-4" />
            <span>로그아웃 (Escape로 취소)</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <div id="accessibility-description" className="text-xs text-muted-foreground p-2 bg-muted rounded">
        💡 팁: Tab으로 메뉴 열기, 화살표 키로 항목 이동, Enter로 선택, Escape로 닫기
      </div>
      <div id="logout-description" className="sr-only">
        로그아웃 시 현재 세션이 종료됩니다
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};export{L as AccessibilityDemo,A as ContextMenu,T as Default,O as FilterAndSort,G as TableActions,B as WithCheckboxes,E as WithRadioGroup,k as WithShortcuts,P as WithSubmenus,zo as default};
