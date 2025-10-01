import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{r as m}from"./iframe-BdMZbwUm.js";import{S as se}from"./index-COOYaFQ0.js";import{c as me}from"./index-CdJFUDDL.js";import{c}from"./utils-CBfrqCZ4.js";import{B as l}from"./button-bDZQ1CGr.js";import"./input-BhwUvA0w.js";import{S as C}from"./separator-BhwIUBVE.js";import{S as ue,b as xe,c as pe,d as he,e as be}from"./sheet-CpAVKP0C.js";import"./skeleton-Bq_ZTv2f.js";import{c as ge,a as fe,b as Ne,T as je}from"./tooltip-C2z6CSUq.js";import{P as ve}from"./panel-left-BoXiZm2w.js";import{C as N,a as k,b as B,d as w}from"./card-BgCPKrWA.js";import{B as K}from"./badge-B3XW2gOL.js";import{H as W}from"./house-CKc6052P.js";import{U as G}from"./user-BJjfzFFu.js";import{S as te}from"./settings-DU4pWZhP.js";import{C as ie}from"./chart-column-CGZE1mU-.js";import{T as Se}from"./trending-up-B2iUD-cA.js";import{U as Q}from"./users-D0OQj7Zx.js";import{M as ne}from"./mail-jnGPqVVg.js";import{C as le}from"./calendar-TKHYDXI1.js";import{C as b}from"./circle-check-big-Cfx7f1FC.js";import{F as X}from"./file-text-DmRPTJWd.js";import{I as we}from"./image-BUKezXs8.js";import{V as ye}from"./video-CwrjoPPM.js";import{M as y}from"./music-DBENafpc.js";import{E as Ce}from"./ellipsis-fcB5j34k.js";import{A as Me}from"./activity-BRz2yhR9.js";import{S as Ie}from"./search-BLIwCZDF.js";import{S as Z}from"./shopping-cart-B6TwTJVd.js";import{H as O}from"./heart-BFGUhVwJ.js";import{P as ee}from"./package-DJY2hNEi.js";import{T as ke}from"./tag-CIxqCmmc.js";import{S as Be}from"./smartphone-BwBOkLd_.js";import{T as Ge}from"./target-D27izIrj.js";import{S as re}from"./star-C0TOQxsF.js";import{c as Te}from"./createLucideIcon-CdHLrrBb.js";import{T as _e}from"./truck-C8slMH75.js";import{F as Ae}from"./funnel-10QqEpoH.js";import{C as Ee}from"./clock-DuZK96C-.js";import{P as ae}from"./play-xKUj77R-.js";import{S as Le,R as He}from"./shuffle-4iDeAuO2.js";import{S as Pe}from"./skip-back-DRrxomEW.js";import{P as ze}from"./pause-H8-UOUkr.js";import{S as Fe}from"./skip-forward-CipVAHGa.js";import{a as Re,C as qe}from"./chevrons-right-BvD6eHQm.js";import{E as De}from"./eye-Ch3FN2Wj.js";import{H as Ve}from"./headphones-CxHnxUbh.js";import{C as Ue}from"./command-DJbrygGl.js";import"./index-BMTS4V62.js";import"./index-RnXzWidx.js";import"./index-DnjHYjiR.js";import"./index-CQPQ-BqZ.js";import"./index-B_g0QmXh.js";import"./index-DI80qA_d.js";import"./index-BbsuTJMv.js";import"./index-Cu_wm-Vw.js";import"./index-CdFegrUu.js";import"./index-DYSxFDR_.js";import"./index-BGyhPWDZ.js";import"./index-C2zivziK.js";import"./x-BlIlgLCT.js";import"./index-DcXtInu4.js";import"./index-DEdBc4IE.js";import"./index-kr_1ID-s.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Oe=Te("flame",$e),$=768;function Ke(){const[r,s]=m.useState(void 0);return m.useEffect(()=>{const n=window.matchMedia(`(max-width: ${$-1}px)`),a=()=>{s(window.innerWidth<$)};return n.addEventListener("change",a),s(window.innerWidth<$),()=>n.removeEventListener("change",a)},[]),!!r}const We="sidebar_state",Xe=3600*24*7,Ye="16rem",Je="18rem",Qe="3rem",Ze="b",de=m.createContext(null);function Y(){const r=m.useContext(de);if(!r)throw new Error("useSidebar must be used within a SidebarProvider.");return r}function T({defaultOpen:r=!0,open:s,onOpenChange:n,className:a,style:t,children:i,...h}){const j=Ke(),[I,v]=m.useState(!1),[P,oe]=m.useState(r),H=s??P,z=m.useCallback(f=>{const S=typeof f=="function"?f(H):f;n?n(S):oe(S),document.cookie=`${We}=${S}; path=/; max-age=${Xe}`},[n,H]),F=m.useCallback(()=>j?v(f=>!f):z(f=>!f),[j,z,v]);m.useEffect(()=>{const f=S=>{S.key===Ze&&(S.metaKey||S.ctrlKey)&&(S.preventDefault(),F())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[F]);const J=H?"expanded":"collapsed",ce=m.useMemo(()=>({state:J,open:H,setOpen:z,isMobile:j,openMobile:I,setOpenMobile:v,toggleSidebar:F}),[J,H,z,j,I,v,F]);return e.jsx(de.Provider,{value:ce,children:e.jsx(ge,{delayDuration:0,children:e.jsx("div",{"data-slot":"sidebar-wrapper",style:{"--sidebar-width":Ye,"--sidebar-width-icon":Qe,...t},className:c("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",a),...h,children:i})})})}function M({side:r="left",variant:s="sidebar",collapsible:n="offcanvas",className:a,children:t,...i}){const{isMobile:h,state:j,openMobile:I,setOpenMobile:v}=Y();return n==="none"?e.jsx("div",{"data-slot":"sidebar",className:c("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",a),...i,children:t}):h?e.jsx(ue,{open:I,onOpenChange:v,...i,children:e.jsxs(xe,{"data-sidebar":"sidebar","data-slot":"sidebar","data-mobile":"true",className:"bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",style:{"--sidebar-width":Je},side:r,children:[e.jsxs(pe,{className:"sr-only",children:[e.jsx(he,{children:"Sidebar"}),e.jsx(be,{children:"Displays the mobile sidebar."})]}),e.jsx("div",{className:"flex h-full w-full flex-col",children:t})]})}):e.jsxs("div",{className:"group peer text-sidebar-foreground hidden md:block","data-state":j,"data-collapsible":j==="collapsed"?n:"","data-variant":s,"data-side":r,"data-slot":"sidebar",children:[e.jsx("div",{"data-slot":"sidebar-gap",className:c("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",s==="floating"||s==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon)")}),e.jsx("div",{"data-slot":"sidebar-container",className:c("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",r==="left"?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",s==="floating"||s==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",a),...i,children:e.jsx("div",{"data-sidebar":"sidebar","data-slot":"sidebar-inner",className:"bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",children:t})})]})}function _({className:r,onClick:s,...n}){const{toggleSidebar:a}=Y();return e.jsxs(l,{"data-sidebar":"trigger","data-slot":"sidebar-trigger",variant:"ghost",size:"icon",className:c("size-7",r),onClick:t=>{s?.(t),a()},...n,children:[e.jsx(ve,{}),e.jsx("span",{className:"sr-only",children:"Toggle Sidebar"})]})}function A({className:r,...s}){return e.jsx("div",{"data-slot":"sidebar-header","data-sidebar":"header",className:c("flex flex-col gap-2 p-2",r),...s})}function E({className:r,...s}){return e.jsx("div",{"data-slot":"sidebar-footer","data-sidebar":"footer",className:c("flex flex-col gap-2 p-2",r),...s})}function L({className:r,...s}){return e.jsx("div",{"data-slot":"sidebar-content","data-sidebar":"content",className:c("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",r),...s})}function u({className:r,...s}){return e.jsx("div",{"data-slot":"sidebar-group","data-sidebar":"group",className:c("relative flex w-full min-w-0 flex-col p-2",r),...s})}function x({className:r,asChild:s=!1,...n}){const a=s?se:"div";return e.jsx(a,{"data-slot":"sidebar-group-label","data-sidebar":"group-label",className:c("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",r),...n})}function p({className:r,...s}){return e.jsx("div",{"data-slot":"sidebar-group-content","data-sidebar":"group-content",className:c("w-full text-sm",r),...s})}function g({className:r,...s}){return e.jsx("ul",{"data-slot":"sidebar-menu","data-sidebar":"menu",className:c("flex w-full min-w-0 flex-col gap-1",r),...s})}function d({className:r,...s}){return e.jsx("li",{"data-slot":"sidebar-menu-item","data-sidebar":"menu-item",className:c("group/menu-item relative",r),...s})}const er=me("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:p-0!"}},defaultVariants:{variant:"default",size:"default"}});function o({asChild:r=!1,isActive:s=!1,variant:n="default",size:a="default",tooltip:t,className:i,...h}){const j=r?se:"button",{isMobile:I,state:v}=Y(),P=e.jsx(j,{"data-slot":"sidebar-menu-button","data-sidebar":"menu-button","data-size":a,"data-active":s,className:c(er({variant:n,size:a}),i),...h});return t?(typeof t=="string"&&(t={children:t}),e.jsxs(fe,{children:[e.jsx(Ne,{asChild:!0,children:P}),e.jsx(je,{side:"right",align:"center",hidden:v!=="collapsed"||I,...t})]})):P}M.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"sidebar" | "floating" | "inset"',elements:[{name:"literal",value:'"sidebar"'},{name:"literal",value:'"floating"'},{name:"literal",value:'"inset"'}]},description:"",defaultValue:{value:'"sidebar"',computed:!1}},collapsible:{required:!1,tsType:{name:"union",raw:'"offcanvas" | "icon" | "none"',elements:[{name:"literal",value:'"offcanvas"'},{name:"literal",value:'"icon"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"offcanvas"',computed:!1}}}};L.__docgenInfo={description:"",methods:[],displayName:"SidebarContent"};E.__docgenInfo={description:"",methods:[],displayName:"SidebarFooter"};u.__docgenInfo={description:"",methods:[],displayName:"SidebarGroup"};p.__docgenInfo={description:"",methods:[],displayName:"SidebarGroupContent"};x.__docgenInfo={description:"",methods:[],displayName:"SidebarGroupLabel",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};A.__docgenInfo={description:"",methods:[],displayName:"SidebarHeader"};g.__docgenInfo={description:"",methods:[],displayName:"SidebarMenu"};o.__docgenInfo={description:"",methods:[],displayName:"SidebarMenuButton",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"union",raw:"string | React.ComponentProps<typeof TooltipContent>",elements:[{name:"string"},{name:"ReactComponentProps",raw:"React.ComponentProps<typeof TooltipContent>",elements:[{name:"TooltipContent"}]}]},description:""},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"SidebarMenuItem"};T.__docgenInfo={description:"",methods:[],displayName:"SidebarProvider",props:{defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"SidebarTrigger"};const xa={title:"UI/Layout/Sidebar",component:M,parameters:{layout:"fullscreen",docs:{description:{component:"앱의 주요 네비게이션과 기능에 접근할 수 있는 사이드바 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{}},R={render:()=>e.jsx(T,{children:e.jsxs("div",{className:"flex h-screen",children:[e.jsxs(M,{children:[e.jsx(A,{children:e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2",children:[e.jsx("div",{className:"h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold",children:"A"}),e.jsx("span",{className:"font-semibold",children:"앱 이름"})]})}),e.jsx(L,{children:e.jsxs(u,{children:[e.jsx(x,{children:"메인 메뉴"}),e.jsx(p,{children:e.jsxs(g,{children:[e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(W,{className:"h-4 w-4"}),e.jsx("span",{children:"홈"})]})}),e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx("span",{children:"프로필"})]})}),e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(te,{className:"h-4 w-4"}),e.jsx("span",{children:"설정"})]})})]})})]})}),e.jsx(E,{children:e.jsx("div",{className:"px-4 py-2",children:e.jsxs(l,{variant:"ghost",className:"w-full justify-start",children:[e.jsx(G,{className:"h-4 w-4 mr-2"}),"홍길동"]})})})]}),e.jsxs("main",{className:"flex-1 p-6",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx(_,{}),e.jsx("h1",{className:"text-2xl font-bold",children:"메인 콘텐츠 영역"})]}),e.jsx("p",{className:"text-muted-foreground",children:"사이드바 토글 버튼을 클릭하여 사이드바를 열고 닫을 수 있습니다."})]})]})})},q={render:()=>{const[r,s]=m.useState("dashboard"),n=[{id:"dashboard",label:"대시보드",icon:ie,badge:null},{id:"analytics",label:"분석",icon:Se,badge:null},{id:"users",label:"사용자",icon:Q,badge:"24"},{id:"messages",label:"메시지",icon:ne,badge:"12"},{id:"calendar",label:"캘린더",icon:le,badge:null},{id:"tasks",label:"할 일",icon:b,badge:"5"}],a=[{id:"documents",label:"문서",icon:X,count:156},{id:"images",label:"이미지",icon:we,count:89},{id:"videos",label:"비디오",icon:ye,count:23},{id:"music",label:"음악",icon:y,count:67}],t=[{id:"project1",name:"웹사이트 리뉴얼",status:"active"},{id:"project2",name:"모바일 앱 개발",status:"pending"},{id:"project3",name:"데이터 분석",status:"completed"}];return e.jsx(T,{children:e.jsxs("div",{className:"flex h-screen",children:[e.jsxs(M,{className:"w-64",children:[e.jsx(A,{children:e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3",children:[e.jsx("div",{className:"h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold",children:"P"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold",children:"프로젝트 관리"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"v2.1.0"})]})]})}),e.jsxs(L,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"메인 메뉴"}),e.jsx(p,{children:e.jsx(g,{children:n.map(i=>{const h=i.icon;return e.jsx(d,{children:e.jsxs(o,{isActive:r===i.id,onClick:()=>s(i.id),children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx("span",{children:i.label}),i.badge&&e.jsx(K,{variant:"secondary",className:"ml-auto",children:i.badge})]})},i.id)})})})]}),e.jsx(C,{className:"my-2"}),e.jsxs(u,{children:[e.jsx(x,{children:"파일 관리"}),e.jsx(p,{children:e.jsx(g,{children:a.map(i=>{const h=i.icon;return e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx("span",{children:i.label}),e.jsx("span",{className:"ml-auto text-xs text-muted-foreground",children:i.count})]})},i.id)})})})]}),e.jsx(C,{className:"my-2"}),e.jsxs(u,{children:[e.jsx(x,{children:"최근 프로젝트"}),e.jsx(p,{children:e.jsx(g,{children:t.map(i=>e.jsx(d,{children:e.jsxs(o,{children:[e.jsx("div",{className:`h-2 w-2 rounded-full ${i.status==="active"?"bg-green-500":i.status==="pending"?"bg-yellow-500":"bg-gray-400"}`}),e.jsx("span",{className:"text-sm",children:i.name})]})},i.id))})})]})]}),e.jsx(E,{children:e.jsx("div",{className:"p-4 space-y-2",children:e.jsxs("div",{className:"flex items-center gap-3 p-2 rounded-lg bg-muted",children:[e.jsx("div",{className:"h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium",children:"홍"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium",children:"홍길동"}),e.jsx("p",{className:"text-xs text-muted-foreground truncate",children:"hong@example.com"})]}),e.jsx(l,{variant:"ghost",size:"sm",children:e.jsx(Ce,{className:"h-4 w-4"})})]})})})]}),e.jsxs("main",{className:"flex-1 p-6 overflow-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx(_,{}),e.jsx("h1",{className:"text-2xl font-bold",children:n.find(i=>i.id===r)?.label||"대시보드"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs(N,{children:[e.jsx(k,{children:e.jsxs(B,{className:"flex items-center gap-2",children:[e.jsx(Me,{className:"h-5 w-5"}),"활성 프로젝트"]})}),e.jsxs(w,{children:[e.jsx("div",{className:"text-3xl font-bold",children:"12"}),e.jsx("p",{className:"text-muted-foreground",children:"진행 중인 프로젝트"})]})]}),e.jsxs(N,{children:[e.jsx(k,{children:e.jsxs(B,{className:"flex items-center gap-2",children:[e.jsx(Q,{className:"h-5 w-5"}),"팀 멤버"]})}),e.jsxs(w,{children:[e.jsx("div",{className:"text-3xl font-bold",children:"24"}),e.jsx("p",{className:"text-muted-foreground",children:"활성 사용자"})]})]}),e.jsxs(N,{children:[e.jsx(k,{children:e.jsxs(B,{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-5 w-5"}),"완료된 작업"]})}),e.jsxs(w,{children:[e.jsx("div",{className:"text-3xl font-bold",children:"87"}),e.jsx("p",{className:"text-muted-foreground",children:"이번 주 완료"})]})]})]})]})]})})}},D={render:()=>{const r=[{id:"electronics",name:"전자제품",icon:Be,count:245},{id:"clothing",name:"의류",icon:O,count:189},{id:"books",name:"도서",icon:X,count:156},{id:"home",name:"홈&리빙",icon:W,count:134},{id:"sports",name:"스포츠",icon:Ge,count:98},{id:"beauty",name:"뷰티",icon:re,count:67}],s=[{id:"cart",name:"장바구니",icon:Z,badge:"3"},{id:"wishlist",name:"찜",icon:O,badge:"12"},{id:"orders",name:"주문내역",icon:ee,badge:null},{id:"coupons",name:"쿠폰",icon:ke,badge:"2"}],n=["Apple","Samsung","Nike","Adidas","Sony","LG"];return e.jsx(T,{children:e.jsxs("div",{className:"flex h-screen",children:[e.jsxs(M,{className:"w-72",children:[e.jsxs(A,{children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3",children:[e.jsx("div",{className:"h-10 w-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold",children:"S"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold",children:"쇼핑몰"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"최고의 쇼핑 경험"})]})]}),e.jsx("div",{className:"px-4 pb-3",children:e.jsxs("div",{className:"relative",children:[e.jsx(Ie,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",placeholder:"상품 검색...",className:"w-full pl-10 pr-4 py-2 border rounded-lg text-sm"})]})})]}),e.jsxs(L,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"빠른 액션"}),e.jsx(p,{children:e.jsx(g,{children:s.map(a=>{const t=a.icon;return e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(t,{className:"h-4 w-4"}),e.jsx("span",{children:a.name}),a.badge&&e.jsx(K,{variant:"destructive",className:"ml-auto",children:a.badge})]})},a.id)})})})]}),e.jsx(C,{className:"my-2"}),e.jsxs(u,{children:[e.jsx(x,{children:"카테고리"}),e.jsx(p,{children:e.jsx(g,{children:r.map(a=>{const t=a.icon;return e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(t,{className:"h-4 w-4"}),e.jsx("span",{children:a.name}),e.jsx("span",{className:"ml-auto text-xs text-muted-foreground",children:a.count})]})},a.id)})})})]}),e.jsx(C,{className:"my-2"}),e.jsxs(u,{children:[e.jsx(x,{children:"인기 브랜드"}),e.jsx(p,{children:e.jsx(g,{children:n.map(a=>e.jsx(d,{children:e.jsxs(o,{children:[e.jsx("div",{className:"h-4 w-4 bg-gray-200 rounded flex-shrink-0"}),e.jsx("span",{className:"text-sm",children:a})]})},a))})})]}),e.jsx(C,{className:"my-2"}),e.jsxs(u,{children:[e.jsx(x,{children:"특별 혜택"}),e.jsx(p,{children:e.jsxs("div",{className:"px-3 space-y-3",children:[e.jsxs(N,{className:"p-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(Oe,{className:"h-4 w-4 text-red-500"}),e.jsx("span",{className:"text-sm font-medium",children:"오늘의 특가"})]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"선택 상품 최대 70% 할인"})]}),e.jsxs(N,{className:"p-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(_e,{className:"h-4 w-4 text-blue-500"}),e.jsx("span",{className:"text-sm font-medium",children:"무료배송"})]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"5만원 이상 구매 시"})]})]})})]})]}),e.jsx(E,{children:e.jsx("div",{className:"p-4",children:e.jsxs(l,{className:"w-full",children:[e.jsx(G,{className:"h-4 w-4 mr-2"}),"로그인"]})})})]}),e.jsxs("main",{className:"flex-1 p-6 overflow-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx(_,{}),e.jsx("h1",{className:"text-2xl font-bold",children:"상품 목록"}),e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[e.jsxs(l,{variant:"outline",size:"sm",children:[e.jsx(Ae,{className:"h-4 w-4 mr-2"}),"필터"]}),e.jsxs(l,{variant:"outline",size:"sm",children:[e.jsx(ie,{className:"h-4 w-4 mr-2"}),"정렬"]})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Array.from({length:8},(a,t)=>e.jsxs(N,{className:"cursor-pointer hover:shadow-lg transition-shadow",children:[e.jsx("div",{className:"aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center",children:e.jsx(ee,{className:"h-12 w-12 text-gray-400"})}),e.jsxs(w,{className:"p-4",children:[e.jsxs("h3",{className:"font-medium mb-2",children:["상품 ",t+1]}),e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"flex items-center",children:Array.from({length:5},(i,h)=>e.jsx(re,{className:"h-3 w-3 fill-yellow-400 text-yellow-400"},h))}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"(128)"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"font-bold",children:["₩",(Math.random()*1e5+1e4).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),e.jsx(l,{size:"sm",children:e.jsx(Z,{className:"h-3 w-3"})})]})]})]},t))})]})]})})}},V={render:()=>{const[r,s]=m.useState(0),n=[{id:"favorites",name:"즐겨찾기",count:23,icon:O},{id:"recent",name:"최근 재생",count:15,icon:Ee},{id:"rock",name:"록 음악",count:67,icon:y},{id:"pop",name:"팝 음악",count:89,icon:y},{id:"jazz",name:"재즈",count:34,icon:y}],a=[{title:"좋은 날",artist:"IU",duration:"3:45",playing:!0},{title:"Dynamite",artist:"BTS",duration:"4:12",playing:!1},{title:"ELEVEN",artist:"IVE",duration:"3:28",playing:!1},{title:"FEARLESS",artist:"LE SSERAFIM",duration:"3:56",playing:!1},{title:"Next Level",artist:"aespa",duration:"4:23",playing:!1}];return e.jsx(T,{children:e.jsxs("div",{className:"flex h-screen bg-gray-900 text-white",children:[e.jsxs(M,{className:"w-64 bg-gray-800 border-gray-700",children:[e.jsx(A,{children:e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3",children:[e.jsx("div",{className:"h-10 w-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold",children:"M"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold text-white",children:"뮤직 플레이어"}),e.jsx("p",{className:"text-xs text-gray-400",children:"음악을 즐기세요"})]})]})}),e.jsxs(L,{children:[e.jsxs(u,{children:[e.jsx(x,{className:"text-gray-400",children:"라이브러리"}),e.jsx(p,{children:e.jsxs(g,{children:[e.jsx(d,{children:e.jsxs(o,{className:"text-white hover:bg-gray-700",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx("span",{children:"모든 음악"}),e.jsx("span",{className:"ml-auto text-xs text-gray-400",children:"567"})]})}),e.jsx(d,{children:e.jsxs(o,{className:"text-white hover:bg-gray-700",children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx("span",{children:"아티스트"}),e.jsx("span",{className:"ml-auto text-xs text-gray-400",children:"89"})]})}),e.jsx(d,{children:e.jsxs(o,{className:"text-white hover:bg-gray-700",children:[e.jsx(X,{className:"h-4 w-4"}),e.jsx("span",{children:"앨범"}),e.jsx("span",{className:"ml-auto text-xs text-gray-400",children:"123"})]})})]})})]}),e.jsx(C,{className:"my-2 bg-gray-700"}),e.jsxs(u,{children:[e.jsx(x,{className:"text-gray-400",children:"플레이리스트"}),e.jsx(p,{children:e.jsx(g,{children:n.map(t=>{const i=t.icon;return e.jsx(d,{children:e.jsxs(o,{className:"text-white hover:bg-gray-700",children:[e.jsx(i,{className:"h-4 w-4"}),e.jsx("span",{children:t.name}),e.jsx("span",{className:"ml-auto text-xs text-gray-400",children:t.count})]})},t.id)})})})]}),e.jsx(C,{className:"my-2 bg-gray-700"}),e.jsxs(u,{children:[e.jsx(x,{className:"text-gray-400",children:"재생 대기열"}),e.jsx(p,{children:e.jsx("div",{className:"px-3 space-y-2",children:a.slice(0,3).map((t,i)=>e.jsx("div",{className:`p-2 rounded cursor-pointer transition-colors ${t.playing?"bg-purple-600":"hover:bg-gray-700"}`,onClick:()=>s(i),children:e.jsxs("div",{className:"flex items-center gap-2",children:[t.playing?e.jsx("div",{className:"w-4 h-4 flex items-center justify-center",children:e.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"})}):e.jsx(ae,{className:"h-3 w-3 text-gray-400"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-white truncate",children:t.title}),e.jsx("p",{className:"text-xs text-gray-400 truncate",children:t.artist})]}),e.jsx("span",{className:"text-xs text-gray-400",children:t.duration})]})},i))})})]})]}),e.jsx(E,{children:e.jsxs("div",{className:"p-4 bg-gray-800",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center",children:e.jsx(y,{className:"h-6 w-6 text-white"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-white truncate",children:a[r]?.title}),e.jsx("p",{className:"text-xs text-gray-400 truncate",children:a[r]?.artist})]})]}),e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-2",children:[e.jsx(l,{variant:"ghost",size:"sm",className:"text-white hover:bg-gray-700",children:e.jsx(Le,{className:"h-4 w-4"})}),e.jsx(l,{variant:"ghost",size:"sm",className:"text-white hover:bg-gray-700",children:e.jsx(Pe,{className:"h-4 w-4"})}),e.jsx(l,{size:"sm",className:"bg-white text-gray-900 hover:bg-gray-100",children:e.jsx(ze,{className:"h-4 w-4"})}),e.jsx(l,{variant:"ghost",size:"sm",className:"text-white hover:bg-gray-700",children:e.jsx(Fe,{className:"h-4 w-4"})}),e.jsx(l,{variant:"ghost",size:"sm",className:"text-white hover:bg-gray-700",children:e.jsx(He,{className:"h-4 w-4"})})]}),e.jsx("div",{className:"w-full bg-gray-700 rounded-full h-1",children:e.jsx("div",{className:"bg-white h-1 rounded-full",style:{width:"35%"}})})]})})]}),e.jsxs("main",{className:"flex-1 p-6 overflow-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx(_,{className:"text-white"}),e.jsx("h1",{className:"text-2xl font-bold text-white",children:"발견하기"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Array.from({length:8},(t,i)=>e.jsxs(N,{className:"bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-750 transition-colors",children:[e.jsx("div",{className:"aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-lg flex items-center justify-center",children:e.jsx(y,{className:"h-12 w-12 text-white"})}),e.jsxs(w,{className:"p-4",children:[e.jsxs("h3",{className:"font-medium mb-2 text-white",children:["플레이리스트 ",i+1]}),e.jsx("p",{className:"text-sm text-gray-400",children:"다양한 아티스트"}),e.jsxs("div",{className:"flex items-center justify-between mt-3",children:[e.jsxs("span",{className:"text-xs text-gray-400",children:[Math.floor(Math.random()*50+10),"곡"]}),e.jsx(l,{size:"sm",className:"bg-purple-600 hover:bg-purple-700",children:e.jsx(ae,{className:"h-3 w-3"})})]})]})]},i))})]})]})})}},U={render:()=>{const[r,s]=m.useState(!1),n=[{id:"home",label:"홈 페이지",icon:W,shortcut:"Ctrl+H"},{id:"profile",label:"프로필 설정",icon:G,shortcut:"Ctrl+P"},{id:"messages",label:"메시지 보기",icon:ne,shortcut:"Ctrl+M"},{id:"calendar",label:"캘린더",icon:le,shortcut:"Ctrl+C"},{id:"settings",label:"환경 설정",icon:te,shortcut:"Ctrl+S"}];return e.jsxs("div",{className:"w-full max-w-6xl space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, 방향키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 랜드마크 역할과 헤딩 구조"}),e.jsx("li",{children:"• 키보드 단축키 지원"}),e.jsx("li",{children:"• 적절한 색상 대비"})]})]}),e.jsx(T,{children:e.jsxs("div",{className:"flex h-96 border rounded-lg overflow-hidden",children:[e.jsxs(M,{className:`transition-all duration-300 ${r?"w-16":"w-64"}`,"aria-label":"메인 네비게이션",children:[e.jsx(A,{children:e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[!r&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold",children:"A"}),e.jsx("span",{className:"font-semibold",children:"접근성 앱"})]}),e.jsx(l,{variant:"ghost",size:"sm",onClick:()=>s(!r),"aria-label":r?"사이드바 펼치기":"사이드바 접기","aria-expanded":!r,children:r?e.jsx(Re,{className:"h-4 w-4"}):e.jsx(qe,{className:"h-4 w-4"})})]})}),e.jsx(L,{children:e.jsxs(u,{children:[!r&&e.jsx(x,{children:"메인 메뉴"}),e.jsx(p,{children:e.jsx(g,{role:"list",children:n.map(a=>{const t=a.icon;return e.jsx(d,{role:"listitem",children:e.jsxs(o,{"aria-label":`${a.label} ${a.shortcut?`(단축키: ${a.shortcut})`:""}`,title:r?a.label:void 0,children:[e.jsx(t,{className:"h-4 w-4","aria-hidden":"true"}),!r&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a.label}),a.shortcut&&e.jsx(K,{variant:"outline",className:"ml-auto text-xs",children:a.shortcut})]})]})},a.id)})})})]})}),e.jsx(E,{children:e.jsx("div",{className:"p-4",children:e.jsxs(l,{variant:"ghost",className:`w-full ${r?"px-2":"justify-start"}`,"aria-label":"사용자 메뉴",children:[e.jsx(G,{className:"h-4 w-4","aria-hidden":"true"}),!r&&e.jsx("span",{className:"ml-2",children:"홍길동"})]})})})]}),e.jsxs("main",{className:"flex-1 p-6",role:"main","aria-label":"메인 콘텐츠",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx(_,{"aria-label":"사이드바 토글","aria-controls":"sidebar"}),e.jsx("h1",{className:"text-xl font-bold",children:"접근성 데모"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(N,{children:[e.jsx(k,{children:e.jsxs(B,{className:"flex items-center gap-2",children:[e.jsx(De,{className:"h-5 w-5"}),"시각적 접근성"]})}),e.jsxs(w,{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"고대비 색상 적용"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"명확한 포커스 표시"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"적절한 글자 크기"})]})]})]}),e.jsxs(N,{children:[e.jsx(k,{children:e.jsxs(B,{className:"flex items-center gap-2",children:[e.jsx(Ve,{className:"h-5 w-5"}),"청각적 접근성"]})}),e.jsxs(w,{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"스크린 리더 호환"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"의미론적 HTML 구조"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"적절한 ARIA 레이블"})]})]})]}),e.jsxs(N,{children:[e.jsx(k,{children:e.jsxs(B,{className:"flex items-center gap-2",children:[e.jsx(Ue,{className:"h-5 w-5"}),"키보드 접근성"]})}),e.jsxs(w,{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"Tab 순환 지원"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"키보드 단축키"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"ESC 키로 닫기"})]})]})]})]}),e.jsx("div",{className:"mt-6 text-xs text-muted-foreground p-3 bg-muted rounded",children:"💡 키보드 사용법: Tab으로 이동, Enter로 활성화, 방향키로 메뉴 탐색, Ctrl+키 조합으로 단축키 사용"})]})]})})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 사이드바 데모입니다."}}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>\r
      <div className="flex h-screen">\r
        <Sidebar>\r
          <SidebarHeader>\r
            <div className="flex items-center gap-2 px-4 py-2">\r
              <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">\r
                A\r
              </div>\r
              <span className="font-semibold">앱 이름</span>\r
            </div>\r
          </SidebarHeader>\r
          \r
          <SidebarContent>\r
            <SidebarGroup>\r
              <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>\r
              <SidebarGroupContent>\r
                <SidebarMenu>\r
                  <SidebarMenuItem>\r
                    <SidebarMenuButton>\r
                      <Home className="h-4 w-4" />\r
                      <span>홈</span>\r
                    </SidebarMenuButton>\r
                  </SidebarMenuItem>\r
                  <SidebarMenuItem>\r
                    <SidebarMenuButton>\r
                      <User className="h-4 w-4" />\r
                      <span>프로필</span>\r
                    </SidebarMenuButton>\r
                  </SidebarMenuItem>\r
                  <SidebarMenuItem>\r
                    <SidebarMenuButton>\r
                      <Settings className="h-4 w-4" />\r
                      <span>설정</span>\r
                    </SidebarMenuButton>\r
                  </SidebarMenuItem>\r
                </SidebarMenu>\r
              </SidebarGroupContent>\r
            </SidebarGroup>\r
          </SidebarContent>\r
          \r
          <SidebarFooter>\r
            <div className="px-4 py-2">\r
              <Button variant="ghost" className="w-full justify-start">\r
                <User className="h-4 w-4 mr-2" />\r
                홍길동\r
              </Button>\r
            </div>\r
          </SidebarFooter>\r
        </Sidebar>\r
        \r
        <main className="flex-1 p-6">\r
          <div className="flex items-center gap-4 mb-6">\r
            <SidebarTrigger />\r
            <h1 className="text-2xl font-bold">메인 콘텐츠 영역</h1>\r
          </div>\r
          <p className="text-muted-foreground">\r
            사이드바 토글 버튼을 클릭하여 사이드바를 열고 닫을 수 있습니다.\r
          </p>\r
        </main>\r
      </div>\r
    </SidebarProvider>
}`,...R.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    const navigationItems = [{
      id: 'dashboard',
      label: '대시보드',
      icon: BarChart3,
      badge: null
    }, {
      id: 'analytics',
      label: '분석',
      icon: TrendingUp,
      badge: null
    }, {
      id: 'users',
      label: '사용자',
      icon: Users,
      badge: '24'
    }, {
      id: 'messages',
      label: '메시지',
      icon: Mail,
      badge: '12'
    }, {
      id: 'calendar',
      label: '캘린더',
      icon: Calendar,
      badge: null
    }, {
      id: 'tasks',
      label: '할 일',
      icon: CheckCircle,
      badge: '5'
    }];
    const fileItems = [{
      id: 'documents',
      label: '문서',
      icon: FileText,
      count: 156
    }, {
      id: 'images',
      label: '이미지',
      icon: Image,
      count: 89
    }, {
      id: 'videos',
      label: '비디오',
      icon: Video,
      count: 23
    }, {
      id: 'music',
      label: '음악',
      icon: Music,
      count: 67
    }];
    const recentProjects = [{
      id: 'project1',
      name: '웹사이트 리뉴얼',
      status: 'active'
    }, {
      id: 'project2',
      name: '모바일 앱 개발',
      status: 'pending'
    }, {
      id: 'project3',
      name: '데이터 분석',
      status: 'completed'
    }];
    return <SidebarProvider>\r
        <div className="flex h-screen">\r
          <Sidebar className="w-64">\r
            <SidebarHeader>\r
              <div className="flex items-center gap-3 px-4 py-3">\r
                <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">\r
                  P\r
                </div>\r
                <div>\r
                  <h2 className="font-semibold">프로젝트 관리</h2>\r
                  <p className="text-xs text-muted-foreground">v2.1.0</p>\r
                </div>\r
              </div>\r
            </SidebarHeader>\r
            \r
            <SidebarContent>\r
              {/* 메인 네비게이션 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <SidebarMenu>\r
                    {navigationItems.map(item => {
                    const IconComponent = item.icon;
                    return <SidebarMenuItem key={item.id}>\r
                          <SidebarMenuButton isActive={activeItem === item.id} onClick={() => setActiveItem(item.id)}>\r
                            <IconComponent className="h-4 w-4" />\r
                            <span>{item.label}</span>\r
                            {item.badge && <Badge variant="secondary" className="ml-auto">\r
                                {item.badge}\r
                              </Badge>}\r
                          </SidebarMenuButton>\r
                        </SidebarMenuItem>;
                  })}\r
                  </SidebarMenu>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
\r
              <Separator className="my-2" />\r
\r
              {/* 파일 관리 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel>파일 관리</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <SidebarMenu>\r
                    {fileItems.map(item => {
                    const IconComponent = item.icon;
                    return <SidebarMenuItem key={item.id}>\r
                          <SidebarMenuButton>\r
                            <IconComponent className="h-4 w-4" />\r
                            <span>{item.label}</span>\r
                            <span className="ml-auto text-xs text-muted-foreground">\r
                              {item.count}\r
                            </span>\r
                          </SidebarMenuButton>\r
                        </SidebarMenuItem>;
                  })}\r
                  </SidebarMenu>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
\r
              <Separator className="my-2" />\r
\r
              {/* 최근 프로젝트 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel>최근 프로젝트</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <SidebarMenu>\r
                    {recentProjects.map(project => <SidebarMenuItem key={project.id}>\r
                        <SidebarMenuButton>\r
                          <div className={\`h-2 w-2 rounded-full \${project.status === 'active' ? 'bg-green-500' : project.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-400'}\`} />\r
                          <span className="text-sm">{project.name}</span>\r
                        </SidebarMenuButton>\r
                      </SidebarMenuItem>)}\r
                  </SidebarMenu>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
            </SidebarContent>\r
            \r
            <SidebarFooter>\r
              <div className="p-4 space-y-2">\r
                <div className="flex items-center gap-3 p-2 rounded-lg bg-muted">\r
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">\r
                    홍\r
                  </div>\r
                  <div className="flex-1 min-w-0">\r
                    <p className="text-sm font-medium">홍길동</p>\r
                    <p className="text-xs text-muted-foreground truncate">\r
                      hong@example.com\r
                    </p>\r
                  </div>\r
                  <Button variant="ghost" size="sm">\r
                    <MoreHorizontal className="h-4 w-4" />\r
                  </Button>\r
                </div>\r
              </div>\r
            </SidebarFooter>\r
          </Sidebar>\r
          \r
          <main className="flex-1 p-6 overflow-auto">\r
            <div className="flex items-center gap-4 mb-6">\r
              <SidebarTrigger />\r
              <h1 className="text-2xl font-bold">\r
                {navigationItems.find(item => item.id === activeItem)?.label || '대시보드'}\r
              </h1>\r
            </div>\r
            \r
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\r
              <Card>\r
                <CardHeader>\r
                  <CardTitle className="flex items-center gap-2">\r
                    <Activity className="h-5 w-5" />\r
                    활성 프로젝트\r
                  </CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div className="text-3xl font-bold">12</div>\r
                  <p className="text-muted-foreground">진행 중인 프로젝트</p>\r
                </CardContent>\r
              </Card>\r
              \r
              <Card>\r
                <CardHeader>\r
                  <CardTitle className="flex items-center gap-2">\r
                    <Users className="h-5 w-5" />\r
                    팀 멤버\r
                  </CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div className="text-3xl font-bold">24</div>\r
                  <p className="text-muted-foreground">활성 사용자</p>\r
                </CardContent>\r
              </Card>\r
              \r
              <Card>\r
                <CardHeader>\r
                  <CardTitle className="flex items-center gap-2">\r
                    <CheckCircle className="h-5 w-5" />\r
                    완료된 작업\r
                  </CardTitle>\r
                </CardHeader>\r
                <CardContent>\r
                  <div className="text-3xl font-bold">87</div>\r
                  <p className="text-muted-foreground">이번 주 완료</p>\r
                </CardContent>\r
              </Card>\r
            </div>\r
          </main>\r
        </div>\r
      </SidebarProvider>;
  }
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const categories = [{
      id: 'electronics',
      name: '전자제품',
      icon: Smartphone,
      count: 245
    }, {
      id: 'clothing',
      name: '의류',
      icon: Heart,
      count: 189
    }, {
      id: 'books',
      name: '도서',
      icon: FileText,
      count: 156
    }, {
      id: 'home',
      name: '홈&리빙',
      icon: Home,
      count: 134
    }, {
      id: 'sports',
      name: '스포츠',
      icon: Target,
      count: 98
    }, {
      id: 'beauty',
      name: '뷰티',
      icon: Star,
      count: 67
    }];
    const quickActions = [{
      id: 'cart',
      name: '장바구니',
      icon: ShoppingCartIcon,
      badge: '3'
    }, {
      id: 'wishlist',
      name: '찜',
      icon: Heart,
      badge: '12'
    }, {
      id: 'orders',
      name: '주문내역',
      icon: Package,
      badge: null
    }, {
      id: 'coupons',
      name: '쿠폰',
      icon: Tag,
      badge: '2'
    }];
    const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'LG'];
    return <SidebarProvider>\r
        <div className="flex h-screen">\r
          <Sidebar className="w-72">\r
            <SidebarHeader>\r
              <div className="flex items-center gap-3 px-4 py-3">\r
                <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">\r
                  S\r
                </div>\r
                <div>\r
                  <h2 className="font-semibold">쇼핑몰</h2>\r
                  <p className="text-xs text-muted-foreground">최고의 쇼핑 경험</p>\r
                </div>\r
              </div>\r
              \r
              <div className="px-4 pb-3">\r
                <div className="relative">\r
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />\r
                  <input type="text" placeholder="상품 검색..." className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm" />\r
                </div>\r
              </div>\r
            </SidebarHeader>\r
            \r
            <SidebarContent>\r
              {/* 빠른 액션 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel>빠른 액션</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <SidebarMenu>\r
                    {quickActions.map(action => {
                    const IconComponent = action.icon;
                    return <SidebarMenuItem key={action.id}>\r
                          <SidebarMenuButton>\r
                            <IconComponent className="h-4 w-4" />\r
                            <span>{action.name}</span>\r
                            {action.badge && <Badge variant="destructive" className="ml-auto">\r
                                {action.badge}\r
                              </Badge>}\r
                          </SidebarMenuButton>\r
                        </SidebarMenuItem>;
                  })}\r
                  </SidebarMenu>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
\r
              <Separator className="my-2" />\r
\r
              {/* 카테고리 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel>카테고리</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <SidebarMenu>\r
                    {categories.map(category => {
                    const IconComponent = category.icon;
                    return <SidebarMenuItem key={category.id}>\r
                          <SidebarMenuButton>\r
                            <IconComponent className="h-4 w-4" />\r
                            <span>{category.name}</span>\r
                            <span className="ml-auto text-xs text-muted-foreground">\r
                              {category.count}\r
                            </span>\r
                          </SidebarMenuButton>\r
                        </SidebarMenuItem>;
                  })}\r
                  </SidebarMenu>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
\r
              <Separator className="my-2" />\r
\r
              {/* 브랜드 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel>인기 브랜드</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <SidebarMenu>\r
                    {brands.map(brand => <SidebarMenuItem key={brand}>\r
                        <SidebarMenuButton>\r
                          <div className="h-4 w-4 bg-gray-200 rounded flex-shrink-0" />\r
                          <span className="text-sm">{brand}</span>\r
                        </SidebarMenuButton>\r
                      </SidebarMenuItem>)}\r
                  </SidebarMenu>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
\r
              <Separator className="my-2" />\r
\r
              {/* 특별 혜택 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel>특별 혜택</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <div className="px-3 space-y-3">\r
                    <Card className="p-3">\r
                      <div className="flex items-center gap-2 mb-2">\r
                        <Flame className="h-4 w-4 text-red-500" />\r
                        <span className="text-sm font-medium">오늘의 특가</span>\r
                      </div>\r
                      <p className="text-xs text-muted-foreground">\r
                        선택 상품 최대 70% 할인\r
                      </p>\r
                    </Card>\r
                    \r
                    <Card className="p-3">\r
                      <div className="flex items-center gap-2 mb-2">\r
                        <Truck className="h-4 w-4 text-blue-500" />\r
                        <span className="text-sm font-medium">무료배송</span>\r
                      </div>\r
                      <p className="text-xs text-muted-foreground">\r
                        5만원 이상 구매 시\r
                      </p>\r
                    </Card>\r
                  </div>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
            </SidebarContent>\r
            \r
            <SidebarFooter>\r
              <div className="p-4">\r
                <Button className="w-full">\r
                  <User className="h-4 w-4 mr-2" />\r
                  로그인\r
                </Button>\r
              </div>\r
            </SidebarFooter>\r
          </Sidebar>\r
          \r
          <main className="flex-1 p-6 overflow-auto">\r
            <div className="flex items-center gap-4 mb-6">\r
              <SidebarTrigger />\r
              <h1 className="text-2xl font-bold">상품 목록</h1>\r
              <div className="ml-auto flex items-center gap-2">\r
                <Button variant="outline" size="sm">\r
                  <Filter className="h-4 w-4 mr-2" />\r
                  필터\r
                </Button>\r
                <Button variant="outline" size="sm">\r
                  <BarChart3 className="h-4 w-4 mr-2" />\r
                  정렬\r
                </Button>\r
              </div>\r
            </div>\r
            \r
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">\r
              {Array.from({
              length: 8
            }, (_, i) => <Card key={i} className="cursor-pointer hover:shadow-lg transition-shadow">\r
                  <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">\r
                    <Package className="h-12 w-12 text-gray-400" />\r
                  </div>\r
                  <CardContent className="p-4">\r
                    <h3 className="font-medium mb-2">상품 {i + 1}</h3>\r
                    <div className="flex items-center gap-2 mb-2">\r
                      <div className="flex items-center">\r
                        {Array.from({
                      length: 5
                    }, (_, j) => <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}\r
                      </div>\r
                      <span className="text-xs text-muted-foreground">(128)</span>\r
                    </div>\r
                    <div className="flex items-center justify-between">\r
                      <span className="font-bold">₩{(Math.random() * 100000 + 10000).toFixed(0).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}</span>\r
                      <Button size="sm">\r
                        <ShoppingCartIcon className="h-3 w-3" />\r
                      </Button>\r
                    </div>\r
                  </CardContent>\r
                </Card>)}\r
            </div>\r
          </main>\r
        </div>\r
      </SidebarProvider>;
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentTrack, setCurrentTrack] = useState(0);
    const playlists = [{
      id: 'favorites',
      name: '즐겨찾기',
      count: 23,
      icon: Heart
    }, {
      id: 'recent',
      name: '최근 재생',
      count: 15,
      icon: Clock
    }, {
      id: 'rock',
      name: '록 음악',
      count: 67,
      icon: Music
    }, {
      id: 'pop',
      name: '팝 음악',
      count: 89,
      icon: Music
    }, {
      id: 'jazz',
      name: '재즈',
      count: 34,
      icon: Music
    }];
    const tracks = [{
      title: '좋은 날',
      artist: 'IU',
      duration: '3:45',
      playing: true
    }, {
      title: 'Dynamite',
      artist: 'BTS',
      duration: '4:12',
      playing: false
    }, {
      title: 'ELEVEN',
      artist: 'IVE',
      duration: '3:28',
      playing: false
    }, {
      title: 'FEARLESS',
      artist: 'LE SSERAFIM',
      duration: '3:56',
      playing: false
    }, {
      title: 'Next Level',
      artist: 'aespa',
      duration: '4:23',
      playing: false
    }];
    return <SidebarProvider>\r
        <div className="flex h-screen bg-gray-900 text-white">\r
          <Sidebar className="w-64 bg-gray-800 border-gray-700">\r
            <SidebarHeader>\r
              <div className="flex items-center gap-3 px-4 py-3">\r
                <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold">\r
                  M\r
                </div>\r
                <div>\r
                  <h2 className="font-semibold text-white">뮤직 플레이어</h2>\r
                  <p className="text-xs text-gray-400">음악을 즐기세요</p>\r
                </div>\r
              </div>\r
            </SidebarHeader>\r
            \r
            <SidebarContent>\r
              {/* 라이브러리 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel className="text-gray-400">라이브러리</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <SidebarMenu>\r
                    <SidebarMenuItem>\r
                      <SidebarMenuButton className="text-white hover:bg-gray-700">\r
                        <Music className="h-4 w-4" />\r
                        <span>모든 음악</span>\r
                        <span className="ml-auto text-xs text-gray-400">567</span>\r
                      </SidebarMenuButton>\r
                    </SidebarMenuItem>\r
                    <SidebarMenuItem>\r
                      <SidebarMenuButton className="text-white hover:bg-gray-700">\r
                        <User className="h-4 w-4" />\r
                        <span>아티스트</span>\r
                        <span className="ml-auto text-xs text-gray-400">89</span>\r
                      </SidebarMenuButton>\r
                    </SidebarMenuItem>\r
                    <SidebarMenuItem>\r
                      <SidebarMenuButton className="text-white hover:bg-gray-700">\r
                        <FileText className="h-4 w-4" />\r
                        <span>앨범</span>\r
                        <span className="ml-auto text-xs text-gray-400">123</span>\r
                      </SidebarMenuButton>\r
                    </SidebarMenuItem>\r
                  </SidebarMenu>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
\r
              <Separator className="my-2 bg-gray-700" />\r
\r
              {/* 플레이리스트 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel className="text-gray-400">플레이리스트</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <SidebarMenu>\r
                    {playlists.map(playlist => {
                    const IconComponent = playlist.icon;
                    return <SidebarMenuItem key={playlist.id}>\r
                          <SidebarMenuButton className="text-white hover:bg-gray-700">\r
                            <IconComponent className="h-4 w-4" />\r
                            <span>{playlist.name}</span>\r
                            <span className="ml-auto text-xs text-gray-400">\r
                              {playlist.count}\r
                            </span>\r
                          </SidebarMenuButton>\r
                        </SidebarMenuItem>;
                  })}\r
                  </SidebarMenu>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
\r
              <Separator className="my-2 bg-gray-700" />\r
\r
              {/* 큐 */}\r
              <SidebarGroup>\r
                <SidebarGroupLabel className="text-gray-400">재생 대기열</SidebarGroupLabel>\r
                <SidebarGroupContent>\r
                  <div className="px-3 space-y-2">\r
                    {tracks.slice(0, 3).map((track, index) => <div key={index} className={\`p-2 rounded cursor-pointer transition-colors \${track.playing ? 'bg-purple-600' : 'hover:bg-gray-700'}\`} onClick={() => setCurrentTrack(index)}>\r
                        <div className="flex items-center gap-2">\r
                          {track.playing ? <div className="w-4 h-4 flex items-center justify-center">\r
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />\r
                            </div> : <Play className="h-3 w-3 text-gray-400" />}\r
                          <div className="flex-1 min-w-0">\r
                            <p className="text-sm font-medium text-white truncate">{track.title}</p>\r
                            <p className="text-xs text-gray-400 truncate">{track.artist}</p>\r
                          </div>\r
                          <span className="text-xs text-gray-400">{track.duration}</span>\r
                        </div>\r
                      </div>)}\r
                  </div>\r
                </SidebarGroupContent>\r
              </SidebarGroup>\r
            </SidebarContent>\r
            \r
            <SidebarFooter>\r
              <div className="p-4 bg-gray-800">\r
                <div className="flex items-center gap-3 mb-3">\r
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center">\r
                    <Music className="h-6 w-6 text-white" />\r
                  </div>\r
                  <div className="flex-1 min-w-0">\r
                    <p className="text-sm font-medium text-white truncate">\r
                      {tracks[currentTrack]?.title}\r
                    </p>\r
                    <p className="text-xs text-gray-400 truncate">\r
                      {tracks[currentTrack]?.artist}\r
                    </p>\r
                  </div>\r
                </div>\r
                \r
                <div className="flex items-center justify-center gap-3 mb-2">\r
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">\r
                    <Shuffle className="h-4 w-4" />\r
                  </Button>\r
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">\r
                    <SkipBack className="h-4 w-4" />\r
                  </Button>\r
                  <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">\r
                    <Pause className="h-4 w-4" />\r
                  </Button>\r
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">\r
                    <SkipForward className="h-4 w-4" />\r
                  </Button>\r
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">\r
                    <Repeat className="h-4 w-4" />\r
                  </Button>\r
                </div>\r
                \r
                <div className="w-full bg-gray-700 rounded-full h-1">\r
                  <div className="bg-white h-1 rounded-full" style={{
                  width: '35%'
                }} />\r
                </div>\r
              </div>\r
            </SidebarFooter>\r
          </Sidebar>\r
          \r
          <main className="flex-1 p-6 overflow-auto">\r
            <div className="flex items-center gap-4 mb-6">\r
              <SidebarTrigger className="text-white" />\r
              <h1 className="text-2xl font-bold text-white">발견하기</h1>\r
            </div>\r
            \r
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">\r
              {Array.from({
              length: 8
            }, (_, i) => <Card key={i} className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-750 transition-colors">\r
                  <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-lg flex items-center justify-center">\r
                    <Music className="h-12 w-12 text-white" />\r
                  </div>\r
                  <CardContent className="p-4">\r
                    <h3 className="font-medium mb-2 text-white">플레이리스트 {i + 1}</h3>\r
                    <p className="text-sm text-gray-400">다양한 아티스트</p>\r
                    <div className="flex items-center justify-between mt-3">\r
                      <span className="text-xs text-gray-400">{Math.floor(Math.random() * 50 + 10)}곡</span>\r
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">\r
                        <Play className="h-3 w-3" />\r
                      </Button>\r
                    </div>\r
                  </CardContent>\r
                </Card>)}\r
            </div>\r
          </main>\r
        </div>\r
      </SidebarProvider>;
  }
}`,...V.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const menuItems = [{
      id: 'home',
      label: '홈 페이지',
      icon: Home,
      shortcut: 'Ctrl+H'
    }, {
      id: 'profile',
      label: '프로필 설정',
      icon: User,
      shortcut: 'Ctrl+P'
    }, {
      id: 'messages',
      label: '메시지 보기',
      icon: Mail,
      shortcut: 'Ctrl+M'
    }, {
      id: 'calendar',
      label: '캘린더',
      icon: Calendar,
      shortcut: 'Ctrl+C'
    }, {
      id: 'settings',
      label: '환경 설정',
      icon: Settings,
      shortcut: 'Ctrl+S'
    }];
    return <div className="w-full max-w-6xl space-y-6">\r
        <div className="p-4 border rounded-lg">\r
          <h3 className="font-semibold mb-2">접근성 기능</h3>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>• 키보드 내비게이션 지원 (Tab, Enter, 방향키)</li>\r
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>\r
            <li>• 랜드마크 역할과 헤딩 구조</li>\r
            <li>• 키보드 단축키 지원</li>\r
            <li>• 적절한 색상 대비</li>\r
          </ul>\r
        </div>\r
        \r
        <SidebarProvider>\r
          <div className="flex h-96 border rounded-lg overflow-hidden">\r
            <Sidebar className={\`transition-all duration-300 \${isCollapsed ? 'w-16' : 'w-64'}\`} aria-label="메인 네비게이션">\r
              <SidebarHeader>\r
                <div className="flex items-center justify-between px-4 py-3">\r
                  {!isCollapsed && <div className="flex items-center gap-2">\r
                      <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">\r
                        A\r
                      </div>\r
                      <span className="font-semibold">접근성 앱</span>\r
                    </div>}\r
                  <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(!isCollapsed)} aria-label={isCollapsed ? "사이드바 펼치기" : "사이드바 접기"} aria-expanded={!isCollapsed}>\r
                    {isCollapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}\r
                  </Button>\r
                </div>\r
              </SidebarHeader>\r
              \r
              <SidebarContent>\r
                <SidebarGroup>\r
                  {!isCollapsed && <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>}\r
                  <SidebarGroupContent>\r
                    <SidebarMenu role="list">\r
                      {menuItems.map(item => {
                      const IconComponent = item.icon;
                      return <SidebarMenuItem key={item.id} role="listitem">\r
                            <SidebarMenuButton aria-label={\`\${item.label} \${item.shortcut ? \`(단축키: \${item.shortcut})\` : ''}\`} title={isCollapsed ? item.label : undefined}>\r
                              <IconComponent className="h-4 w-4" aria-hidden="true" />\r
                              {!isCollapsed && <>\r
                                  <span>{item.label}</span>\r
                                  {item.shortcut && <Badge variant="outline" className="ml-auto text-xs">\r
                                      {item.shortcut}\r
                                    </Badge>}\r
                                </>}\r
                            </SidebarMenuButton>\r
                          </SidebarMenuItem>;
                    })}\r
                    </SidebarMenu>\r
                  </SidebarGroupContent>\r
                </SidebarGroup>\r
              </SidebarContent>\r
              \r
              <SidebarFooter>\r
                <div className="p-4">\r
                  <Button variant="ghost" className={\`w-full \${isCollapsed ? 'px-2' : 'justify-start'}\`} aria-label="사용자 메뉴">\r
                    <User className="h-4 w-4" aria-hidden="true" />\r
                    {!isCollapsed && <span className="ml-2">홍길동</span>}\r
                  </Button>\r
                </div>\r
              </SidebarFooter>\r
            </Sidebar>\r
            \r
            <main className="flex-1 p-6" role="main" aria-label="메인 콘텐츠">\r
              <div className="flex items-center gap-4 mb-6">\r
                <SidebarTrigger aria-label="사이드바 토글" aria-controls="sidebar" />\r
                <h1 className="text-xl font-bold">접근성 데모</h1>\r
              </div>\r
              \r
              <div className="space-y-4">\r
                <Card>\r
                  <CardHeader>\r
                    <CardTitle className="flex items-center gap-2">\r
                      <Eye className="h-5 w-5" />\r
                      시각적 접근성\r
                    </CardTitle>\r
                  </CardHeader>\r
                  <CardContent className="space-y-2 text-sm">\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>고대비 색상 적용</span>\r
                    </div>\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>명확한 포커스 표시</span>\r
                    </div>\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>적절한 글자 크기</span>\r
                    </div>\r
                  </CardContent>\r
                </Card>\r
\r
                <Card>\r
                  <CardHeader>\r
                    <CardTitle className="flex items-center gap-2">\r
                      <Headphones className="h-5 w-5" />\r
                      청각적 접근성\r
                    </CardTitle>\r
                  </CardHeader>\r
                  <CardContent className="space-y-2 text-sm">\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>스크린 리더 호환</span>\r
                    </div>\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>의미론적 HTML 구조</span>\r
                    </div>\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>적절한 ARIA 레이블</span>\r
                    </div>\r
                  </CardContent>\r
                </Card>\r
\r
                <Card>\r
                  <CardHeader>\r
                    <CardTitle className="flex items-center gap-2">\r
                      <Command className="h-5 w-5" />\r
                      키보드 접근성\r
                    </CardTitle>\r
                  </CardHeader>\r
                  <CardContent className="space-y-2 text-sm">\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>Tab 순환 지원</span>\r
                    </div>\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>키보드 단축키</span>\r
                    </div>\r
                    <div className="flex items-center gap-2">\r
                      <CheckCircle className="h-4 w-4 text-green-500" />\r
                      <span>ESC 키로 닫기</span>\r
                    </div>\r
                  </CardContent>\r
                </Card>\r
              </div>\r
              \r
              <div className="mt-6 text-xs text-muted-foreground p-3 bg-muted rounded">\r
                💡 키보드 사용법: Tab으로 이동, Enter로 활성화, 방향키로 메뉴 탐색, Ctrl+키 조합으로 단축키 사용\r
              </div>\r
            </main>\r
          </div>\r
        </SidebarProvider>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 사이드바 데모입니다.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};export{U as AccessibilityDemo,q as ApplicationSidebar,R as Default,D as EcommerceSidebar,V as MediaPlayerSidebar,xa as default};
