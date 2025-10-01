import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{r as y}from"./iframe-BdMZbwUm.js";import{c as k}from"./index-CQPQ-BqZ.js";import{c as le}from"./index-B_g0QmXh.js";import{c as q,R as ne,I as de}from"./index-Bxgse1uj.js";import{P as ce}from"./index-C2zivziK.js";import{P as M}from"./index-BMTS4V62.js";import{u as me}from"./index-CvWdknzs.js";import{u as oe}from"./index-BbsuTJMv.js";import{u as ue}from"./index-DI80qA_d.js";import{c as H}from"./utils-CBfrqCZ4.js";import{C as o,a as u,b as x,c as b,d as p}from"./card-BgCPKrWA.js";import{B as g}from"./badge-B3XW2gOL.js";import{B as t}from"./button-bDZQ1CGr.js";import{I as N}from"./input-BhwUvA0w.js";import{L as l}from"./label-DOMLoIND.js";import{S as z}from"./separator-BhwIUBVE.js";import{U as xe}from"./user-BJjfzFFu.js";import{S as pe}from"./shield-a7_S6rP-.js";import{B as ve}from"./bell-D52r2PyL.js";import{C as G}from"./credit-card-CQaSktJt.js";import{S as he}from"./save-Db1t8Eb_.js";import{L as fe}from"./lock-BV2N_bHU.js";import{P as Ne}from"./plus-BRMNfJxT.js";import{D as U}from"./download-C_QE2hwp.js";import{F as R}from"./file-text-DmRPTJWd.js";import{I as W}from"./image-BUKezXs8.js";import{V as K}from"./video-CwrjoPPM.js";import{M as _}from"./music-DBENafpc.js";import{U as ge}from"./upload-D-efKita.js";import{F as je}from"./funnel-10QqEpoH.js";import{P as be}from"./play-xKUj77R-.js";import{C as ye}from"./chart-column-CGZE1mU-.js";import{A as O}from"./activity-BRz2yhR9.js";import{D as J}from"./dollar-sign-DIUrrMM2.js";import{U as we}from"./users-D0OQj7Zx.js";import{T as S}from"./trending-up-B2iUD-cA.js";import{P as Ce}from"./package-DJY2hNEi.js";import{E as D}from"./eye-Ch3FN2Wj.js";import{S as Te}from"./settings-DU4pWZhP.js";import{V as Be}from"./volume-2-BaEWJYUI.js";import{E as Le}from"./ellipsis-fcB5j34k.js";import{F as ze}from"./file-JGqqz6n4.js";import"./index-RuX4kDbx.js";import"./index-COOYaFQ0.js";import"./index-CdFegrUu.js";import"./index-RnXzWidx.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-CdHLrrBb.js";var E="Tabs",[Se]=le(E,[q]),Q=q(),[Ie,$]=Se(E),X=y.forwardRef((s,r)=>{const{__scopeTabs:a,value:i,onValueChange:c,defaultValue:h,orientation:m="horizontal",dir:j,activationMode:B="automatic",...L}=s,f=me(j),[v,C]=oe({prop:i,onChange:c,defaultProp:h??"",caller:E});return e.jsx(Ie,{scope:a,baseId:ue(),value:v,onValueChange:C,orientation:m,dir:f,activationMode:B,children:e.jsx(M.div,{dir:f,"data-orientation":m,...L,ref:r})})});X.displayName=E;var Y="TabsList",Z=y.forwardRef((s,r)=>{const{__scopeTabs:a,loop:i=!0,...c}=s,h=$(Y,a),m=Q(a);return e.jsx(ne,{asChild:!0,...m,orientation:h.orientation,dir:h.dir,loop:i,children:e.jsx(M.div,{role:"tablist","aria-orientation":h.orientation,...c,ref:r})})});Z.displayName=Y;var ee="TabsTrigger",se=y.forwardRef((s,r)=>{const{__scopeTabs:a,value:i,disabled:c=!1,...h}=s,m=$(ee,a),j=Q(a),B=te(m.baseId,i),L=ie(m.baseId,i),f=i===m.value;return e.jsx(de,{asChild:!0,...j,focusable:!c,active:f,children:e.jsx(M.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":L,"data-state":f?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:B,...h,ref:r,onMouseDown:k(s.onMouseDown,v=>{!c&&v.button===0&&v.ctrlKey===!1?m.onValueChange(i):v.preventDefault()}),onKeyDown:k(s.onKeyDown,v=>{[" ","Enter"].includes(v.key)&&m.onValueChange(i)}),onFocus:k(s.onFocus,()=>{const v=m.activationMode!=="manual";!f&&!c&&v&&m.onValueChange(i)})})})});se.displayName=ee;var ae="TabsContent",re=y.forwardRef((s,r)=>{const{__scopeTabs:a,value:i,forceMount:c,children:h,...m}=s,j=$(ae,a),B=te(j.baseId,i),L=ie(j.baseId,i),f=i===j.value,v=y.useRef(f);return y.useEffect(()=>{const C=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(C)},[]),e.jsx(ce,{present:c||f,children:({present:C})=>e.jsx(M.div,{"data-state":f?"active":"inactive","data-orientation":j.orientation,role:"tabpanel","aria-labelledby":B,hidden:!C,id:L,tabIndex:0,...m,ref:r,style:{...s.style,animationDuration:v.current?"0s":void 0},children:C&&h})})});re.displayName=ae;function te(s,r){return`${s}-trigger-${r}`}function ie(s,r){return`${s}-content-${r}`}var Fe=X,Ve=Z,Ae=se,Pe=re;function w({className:s,...r}){return e.jsx(Fe,{"data-slot":"tabs",className:H("flex flex-col gap-2",s),...r})}function T({className:s,...r}){return e.jsx(Ve,{"data-slot":"tabs-list",className:H("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",s),...r})}function n({className:s,...r}){return e.jsx(Ae,{"data-slot":"tabs-trigger",className:H("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",s),...r})}function d({className:s,...r}){return e.jsx(Pe,{"data-slot":"tabs-content",className:H("flex-1 outline-none",s),...r})}w.__docgenInfo={description:"",methods:[],displayName:"Tabs"};T.__docgenInfo={description:"",methods:[],displayName:"TabsList"};n.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};d.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const Is={title:"UI/Contents-active/Tabs",component:w,parameters:{layout:"padded",docs:{description:{component:"콘텐츠를 탭으로 구성하여 사용자가 쉽게 전환할 수 있도록 하는 탭 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{defaultValue:{description:"기본으로 선택될 탭",control:"text"},orientation:{description:"탭의 방향",control:"select",options:["horizontal","vertical"]}}},I={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"기본 탭"}),e.jsxs(w,{defaultValue:"account",className:"w-full",children:[e.jsxs(T,{className:"grid w-full grid-cols-2",children:[e.jsx(n,{value:"account",children:"계정"}),e.jsx(n,{value:"password",children:"비밀번호"})]}),e.jsxs(d,{value:"account",className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"name",children:"이름"}),e.jsx(N,{id:"name",defaultValue:"홍길동"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"username",children:"사용자명"}),e.jsx(N,{id:"username",defaultValue:"@hong"})]}),e.jsx(t,{children:"변경사항 저장"})]}),e.jsxs(d,{value:"password",className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"current",children:"현재 비밀번호"}),e.jsx(N,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"new",children:"새 비밀번호"}),e.jsx(N,{id:"new",type:"password"})]}),e.jsx(t,{children:"비밀번호 변경"})]})]})]})},F={render:()=>{const[s,r]=y.useState("personal");return e.jsxs("div",{className:"w-full max-w-4xl space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"프로필 설정"}),e.jsxs(w,{value:s,onValueChange:r,className:"w-full",children:[e.jsxs(T,{className:"grid w-full grid-cols-4",children:[e.jsxs(n,{value:"personal",className:"flex items-center gap-2",children:[e.jsx(xe,{className:"h-4 w-4"}),"개인정보"]}),e.jsxs(n,{value:"security",className:"flex items-center gap-2",children:[e.jsx(pe,{className:"h-4 w-4"}),"보안"]}),e.jsxs(n,{value:"notifications",className:"flex items-center gap-2",children:[e.jsx(ve,{className:"h-4 w-4"}),"알림"]}),e.jsxs(n,{value:"billing",className:"flex items-center gap-2",children:[e.jsx(G,{className:"h-4 w-4"}),"결제"]})]}),e.jsx(d,{value:"personal",className:"space-y-4",children:e.jsxs(o,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"개인정보"}),e.jsx(b,{children:"프로필 정보를 관리하고 업데이트하세요"})]}),e.jsxs(p,{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"firstName",children:"이름"}),e.jsx(N,{id:"firstName",defaultValue:"길동"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"lastName",children:"성"}),e.jsx(N,{id:"lastName",defaultValue:"홍"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"email",children:"이메일"}),e.jsx(N,{id:"email",type:"email",defaultValue:"hong@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"phone",children:"전화번호"}),e.jsx(N,{id:"phone",defaultValue:"010-1234-5678"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"bio",children:"자기소개"}),e.jsx("textarea",{id:"bio",className:"w-full px-3 py-2 border border-gray-300 rounded-md",rows:3,defaultValue:"안녕하세요! 웹 개발자 홍길동입니다."})]}),e.jsxs(t,{children:[e.jsx(he,{className:"h-4 w-4 mr-2"}),"저장"]})]})]})}),e.jsx(d,{value:"security",className:"space-y-4",children:e.jsxs(o,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"보안 설정"}),e.jsx(b,{children:"계정 보안을 강화하고 로그인 설정을 관리하세요"})]}),e.jsxs(p,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"비밀번호 변경"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"currentPassword",children:"현재 비밀번호"}),e.jsx(N,{id:"currentPassword",type:"password"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"newPassword",children:"새 비밀번호"}),e.jsx(N,{id:"newPassword",type:"password"})]})]}),e.jsx(t,{variant:"outline",children:"비밀번호 변경"})]}),e.jsx(z,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"2단계 인증"}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded-lg",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"인증 앱"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Google Authenticator 또는 유사한 앱 사용"})]}),e.jsx(g,{variant:"outline",children:"비활성"})]}),e.jsxs(t,{variant:"outline",children:[e.jsx(fe,{className:"h-4 w-4 mr-2"}),"2단계 인증 설정"]})]}),e.jsx(z,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"로그인 기록"}),e.jsx("div",{className:"space-y-3",children:[{device:"Chrome (Windows)",location:"서울, 한국",time:"2시간 전",current:!0},{device:"Safari (iPhone)",location:"서울, 한국",time:"1일 전",current:!1},{device:"Edge (Windows)",location:"부산, 한국",time:"3일 전",current:!1}].map((a,i)=>e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"font-medium flex items-center gap-2",children:[a.device,a.current&&e.jsx(g,{variant:"default",className:"text-xs",children:"현재"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[a.location," • ",a.time]})]}),!a.current&&e.jsx(t,{variant:"ghost",size:"sm",children:"종료"})]},i))})]})]})]})}),e.jsx(d,{value:"notifications",className:"space-y-4",children:e.jsxs(o,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"알림 설정"}),e.jsx(b,{children:"받고 싶은 알림 유형을 선택하세요"})]}),e.jsx(p,{className:"space-y-6",children:[{id:"email",title:"이메일 알림",description:"중요한 업데이트를 이메일로 받기",enabled:!0},{id:"push",title:"푸시 알림",description:"브라우저 알림 받기",enabled:!1},{id:"sms",title:"SMS 알림",description:"긴급한 알림을 문자로 받기",enabled:!0},{id:"marketing",title:"마케팅 알림",description:"프로모션 및 새로운 기능 소식",enabled:!1}].map(a=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"font-medium",children:a.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:a.description})]}),e.jsx(t,{variant:a.enabled?"default":"outline",size:"sm",children:a.enabled?"활성":"비활성"})]},a.id))})]})}),e.jsx(d,{value:"billing",className:"space-y-4",children:e.jsxs(o,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"결제 및 구독"}),e.jsx(b,{children:"결제 방법과 구독 정보를 관리하세요"})]}),e.jsxs(p,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"현재 플랜"}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h5",{className:"font-medium",children:"프로 플랜"}),e.jsx(g,{children:"활성"})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"월 ₩29,000 • 다음 결제일: 2024-02-15"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{variant:"outline",size:"sm",children:"플랜 변경"}),e.jsx(t,{variant:"outline",size:"sm",children:"취소"})]})]})]}),e.jsx(z,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"결제 방법"}),e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(G,{className:"h-5 w-5"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"•••• •••• •••• 1234"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"만료: 12/25"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(g,{variant:"outline",children:"기본"}),e.jsx(t,{variant:"ghost",size:"sm",children:"편집"})]})]})}),e.jsxs(t,{variant:"outline",children:[e.jsx(Ne,{className:"h-4 w-4 mr-2"}),"새 결제 방법 추가"]})]}),e.jsx(z,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"결제 내역"}),e.jsx("div",{className:"space-y-3",children:[{date:"2024-01-15",amount:"₩29,000",status:"완료"},{date:"2023-12-15",amount:"₩29,000",status:"완료"},{date:"2023-11-15",amount:"₩29,000",status:"완료"}].map((a,i)=>e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:a.amount}),e.jsx("p",{className:"text-sm text-muted-foreground",children:a.date})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(g,{variant:"outline",children:a.status}),e.jsx(t,{variant:"ghost",size:"sm",children:e.jsx(U,{className:"h-4 w-4"})})]})]},i))})]})]})]})})]})]})}},V={render:()=>{const s={documents:[{name:"프로젝트 계획서.docx",size:"2.3 MB",modified:"2024-01-15",type:"document"},{name:"회의록.pdf",size:"1.8 MB",modified:"2024-01-14",type:"document"},{name:"보고서.xlsx",size:"3.1 MB",modified:"2024-01-13",type:"document"}],images:[{name:"스크린샷1.png",size:"4.2 MB",modified:"2024-01-15",type:"image"},{name:"로고.svg",size:"156 KB",modified:"2024-01-12",type:"image"},{name:"배경이미지.jpg",size:"8.7 MB",modified:"2024-01-10",type:"image"}],videos:[{name:"프레젠테이션.mp4",size:"125 MB",modified:"2024-01-11",type:"video"},{name:"데모영상.mov",size:"89 MB",modified:"2024-01-09",type:"video"}],music:[{name:"배경음악.mp3",size:"5.2 MB",modified:"2024-01-08",type:"music"},{name:"효과음.wav",size:"2.1 MB",modified:"2024-01-07",type:"music"}]},r=i=>{switch(i){case"document":return e.jsx(R,{className:"h-4 w-4 text-blue-600"});case"image":return e.jsx(W,{className:"h-4 w-4 text-green-600"});case"video":return e.jsx(K,{className:"h-4 w-4 text-purple-600"});case"music":return e.jsx(_,{className:"h-4 w-4 text-orange-600"});default:return e.jsx(ze,{className:"h-4 w-4 text-gray-600"})}},a=({files:i})=>e.jsx("div",{className:"space-y-2",children:i.map((c,h)=>e.jsxs("div",{className:"flex items-center justify-between p-3 border rounded hover:bg-muted/50",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[r(c.type),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:c.name}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[c.size," • ",c.modified]})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{variant:"ghost",size:"sm",children:e.jsx(U,{className:"h-3 w-3"})}),e.jsx(t,{variant:"ghost",size:"sm",children:e.jsx(Le,{className:"h-3 w-3"})})]})]},h))});return e.jsxs("div",{className:"w-full max-w-4xl space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"파일 관리자"}),e.jsxs(w,{defaultValue:"documents",className:"w-full",children:[e.jsxs(T,{className:"grid w-full grid-cols-4",children:[e.jsxs(n,{value:"documents",className:"flex items-center gap-2",children:[e.jsx(R,{className:"h-4 w-4"}),"문서 (",s.documents.length,")"]}),e.jsxs(n,{value:"images",className:"flex items-center gap-2",children:[e.jsx(W,{className:"h-4 w-4"}),"이미지 (",s.images.length,")"]}),e.jsxs(n,{value:"videos",className:"flex items-center gap-2",children:[e.jsx(K,{className:"h-4 w-4"}),"동영상 (",s.videos.length,")"]}),e.jsxs(n,{value:"music",className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-4 w-4"}),"음악 (",s.music.length,")"]})]}),e.jsxs(d,{value:"documents",className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-medium",children:"문서 파일"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(t,{variant:"outline",size:"sm",children:[e.jsx(ge,{className:"h-3 w-3 mr-2"}),"업로드"]}),e.jsxs(t,{variant:"outline",size:"sm",children:[e.jsx(je,{className:"h-3 w-3 mr-2"}),"필터"]})]})]}),e.jsx(a,{files:s.documents})]}),e.jsxs(d,{value:"images",className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-medium",children:"이미지 파일"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{variant:"outline",size:"sm",children:"갤러리 보기"}),e.jsx(t,{variant:"outline",size:"sm",children:"목록 보기"})]})]}),e.jsx(a,{files:s.images})]}),e.jsxs(d,{value:"videos",className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-medium",children:"동영상 파일"}),e.jsxs(t,{variant:"outline",size:"sm",children:[e.jsx(be,{className:"h-3 w-3 mr-2"}),"전체 재생"]})]}),e.jsx(a,{files:s.videos})]}),e.jsxs(d,{value:"music",className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-medium",children:"음악 파일"}),e.jsxs(t,{variant:"outline",size:"sm",children:[e.jsx(_,{className:"h-3 w-3 mr-2"}),"플레이리스트 생성"]})]}),e.jsx(a,{files:s.music})]})]})]})}},A={render:()=>{const s={overview:{totalUsers:12543,revenue:284e4,orders:1847,conversion:3.2},traffic:[{source:"직접 방문",visitors:4521,percentage:35},{source:"검색 엔진",visitors:3876,percentage:30},{source:"소셜 미디어",visitors:2445,percentage:19},{source:"이메일",visitors:1701,percentage:16}],topProducts:[{name:"iPhone 15 Pro",sales:423,revenue:54657e4},{name:"갤럭시 S24",sales:387,revenue:42183e4},{name:"맥북 프로",sales:156,revenue:38844e4}]};return e.jsxs("div",{className:"w-full max-w-6xl space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"대시보드"}),e.jsxs(w,{defaultValue:"overview",className:"w-full",children:[e.jsxs(T,{className:"grid w-full grid-cols-4",children:[e.jsxs(n,{value:"overview",className:"flex items-center gap-2",children:[e.jsx(ye,{className:"h-4 w-4"}),"개요"]}),e.jsxs(n,{value:"analytics",className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-4 w-4"}),"분석"]}),e.jsxs(n,{value:"sales",className:"flex items-center gap-2",children:[e.jsx(J,{className:"h-4 w-4"}),"매출"]}),e.jsxs(n,{value:"reports",className:"flex items-center gap-2",children:[e.jsx(R,{className:"h-4 w-4"}),"보고서"]})]}),e.jsx(d,{value:"overview",className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs(o,{children:[e.jsxs(u,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(x,{className:"text-sm font-medium",children:"총 사용자"}),e.jsx(we,{className:"h-4 w-4 text-muted-foreground"})]}),e.jsxs(p,{children:[e.jsx("div",{className:"text-2xl font-bold",children:s.overview.totalUsers.toLocaleString()}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[e.jsx(S,{className:"h-3 w-3 inline mr-1"}),"+20.1% 전월 대비"]})]})]}),e.jsxs(o,{children:[e.jsxs(u,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(x,{className:"text-sm font-medium",children:"총 수익"}),e.jsx(J,{className:"h-4 w-4 text-muted-foreground"})]}),e.jsxs(p,{children:[e.jsxs("div",{className:"text-2xl font-bold",children:["₩",s.overview.revenue.toLocaleString()]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[e.jsx(S,{className:"h-3 w-3 inline mr-1"}),"+12.5% 전월 대비"]})]})]}),e.jsxs(o,{children:[e.jsxs(u,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(x,{className:"text-sm font-medium",children:"주문 수"}),e.jsx(Ce,{className:"h-4 w-4 text-muted-foreground"})]}),e.jsxs(p,{children:[e.jsx("div",{className:"text-2xl font-bold",children:s.overview.orders.toLocaleString()}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[e.jsx(S,{className:"h-3 w-3 inline mr-1"}),"+8.2% 전월 대비"]})]})]}),e.jsxs(o,{children:[e.jsxs(u,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[e.jsx(x,{className:"text-sm font-medium",children:"전환율"}),e.jsx(O,{className:"h-4 w-4 text-muted-foreground"})]}),e.jsxs(p,{children:[e.jsxs("div",{className:"text-2xl font-bold",children:[s.overview.conversion,"%"]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[e.jsx(S,{className:"h-3 w-3 inline mr-1"}),"+0.3% 전월 대비"]})]})]})]})}),e.jsx(d,{value:"analytics",className:"space-y-6",children:e.jsxs(o,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"트래픽 소스"}),e.jsx(b,{children:"방문자들이 어디서 오는지 분석"})]}),e.jsx(p,{children:e.jsx("div",{className:"space-y-4",children:s.traffic.map((r,a)=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-4 h-4 bg-blue-600 rounded",style:{backgroundColor:`hsl(${a*90}, 70%, 50%)`}}),e.jsx("span",{className:"font-medium",children:r.source})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"font-medium",children:r.visitors.toLocaleString()}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[r.percentage,"%"]})]})]},a))})})]})}),e.jsx(d,{value:"sales",className:"space-y-6",children:e.jsxs(o,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"인기 상품"}),e.jsx(b,{children:"매출 기준 상위 상품"})]}),e.jsx(p,{children:e.jsx("div",{className:"space-y-4",children:s.topProducts.map((r,a)=>e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold",children:a+1}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:r.name}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[r.sales,"개 판매"]})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-bold",children:["₩",r.revenue.toLocaleString()]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"수익"})]})]},a))})})]})}),e.jsx(d,{value:"reports",className:"space-y-6",children:e.jsxs(o,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"보고서 생성"}),e.jsx(b,{children:"다양한 형태의 보고서를 생성하고 다운로드하세요"})]}),e.jsx(p,{className:"space-y-4",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[{name:"월간 매출 보고서",description:"지난 30일간의 매출 데이터",type:"monthly"},{name:"사용자 활동 보고서",description:"사용자 행동 패턴 분석",type:"user"},{name:"상품 성과 보고서",description:"상품별 판매 성과",type:"product"},{name:"마케팅 ROI 보고서",description:"마케팅 캠페인 효과 분석",type:"marketing"}].map((r,a)=>e.jsxs("div",{className:"p-4 border rounded",children:[e.jsx("h4",{className:"font-medium mb-2",children:r.name}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:r.description}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(t,{variant:"outline",size:"sm",children:[e.jsx(D,{className:"h-3 w-3 mr-2"}),"미리보기"]}),e.jsxs(t,{size:"sm",children:[e.jsx(U,{className:"h-3 w-3 mr-2"}),"다운로드"]})]})]},a))})})]})})]})]})}},P={render:()=>{const[s,r]=y.useState("general");return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, 방향키, Enter)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 활성 탭 상태 명확한 표시"}),e.jsx("li",{children:"• 적절한 색상 대비와 포커스 표시"}),e.jsx("li",{children:"• 탭 패널과 트리거 간 연결 관계"})]})]}),e.jsxs(o,{children:[e.jsxs(u,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(D,{className:"h-5 w-5"}),"접근성 적용 탭"]}),e.jsx(b,{children:"모든 사용자가 쉽게 이용할 수 있도록 설계된 탭 컴포넌트입니다"})]}),e.jsx(p,{children:e.jsxs(w,{value:s,onValueChange:r,className:"w-full","aria-label":"접근성 설정 탭",children:[e.jsxs(T,{className:"grid w-full grid-cols-3",role:"tablist","aria-label":"접근성 설정 카테고리",children:[e.jsxs(n,{value:"general",className:"flex items-center gap-2",role:"tab","aria-selected":s==="general","aria-controls":"general-panel",id:"general-tab",children:[e.jsx(Te,{className:"h-4 w-4"}),"일반 설정"]}),e.jsxs(n,{value:"visual",className:"flex items-center gap-2",role:"tab","aria-selected":s==="visual","aria-controls":"visual-panel",id:"visual-tab",children:[e.jsx(D,{className:"h-4 w-4"}),"시각 설정"]}),e.jsxs(n,{value:"audio",className:"flex items-center gap-2",role:"tab","aria-selected":s==="audio","aria-controls":"audio-panel",id:"audio-tab",children:[e.jsx(Be,{className:"h-4 w-4"}),"청각 설정"]})]}),e.jsxs(d,{value:"general",className:"space-y-4 mt-6",role:"tabpanel","aria-labelledby":"general-tab",id:"general-panel",tabIndex:0,children:[e.jsx("h3",{className:"text-lg font-semibold",children:"일반 접근성 설정"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"키보드 내비게이션"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Tab, Enter, 방향키로 모든 기능 사용"})]}),e.jsx(g,{variant:"default",children:"활성화됨"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"포커스 표시"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"현재 포커스된 요소를 명확하게 표시"})]}),e.jsx(g,{variant:"default",children:"활성화됨"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"건너뛰기 링크"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"주요 콘텐츠로 바로 이동"})]}),e.jsx(t,{variant:"outline",size:"sm",children:"설정"})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"키보드 사용법"}),e.jsxs("div",{className:"text-sm text-blue-800 space-y-1",children:[e.jsx("p",{children:"• Tab: 다음 탭으로 이동"}),e.jsx("p",{children:"• Shift + Tab: 이전 탭으로 이동"}),e.jsx("p",{children:"• Enter 또는 Space: 탭 활성화"}),e.jsx("p",{children:"• 방향키: 탭 간 이동 (tablist 내에서)"})]})]})]}),e.jsxs(d,{value:"visual",className:"space-y-4 mt-6",role:"tabpanel","aria-labelledby":"visual-tab",id:"visual-panel",tabIndex:0,children:[e.jsx("h3",{className:"text-lg font-semibold",children:"시각 접근성 설정"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"고대비 모드"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"텍스트와 배경 간 대비 강화"})]}),e.jsx(t,{variant:"outline",size:"sm",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"큰 텍스트"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"모든 텍스트 크기 확대"})]}),e.jsx(t,{variant:"outline",size:"sm",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"색상 구분 없는 정보"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"색상 외에도 아이콘과 텍스트로 정보 전달"})]}),e.jsx(g,{variant:"default",children:"적용됨"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"애니메이션 감소"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"움직임에 민감한 사용자를 위한 설정"})]}),e.jsx(t,{variant:"outline",size:"sm",children:"활성화"})]})]})]}),e.jsxs(d,{value:"audio",className:"space-y-4 mt-6",role:"tabpanel","aria-labelledby":"audio-tab",id:"audio-panel",tabIndex:0,children:[e.jsx("h3",{className:"text-lg font-semibold",children:"청각 접근성 설정"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"스크린 리더 지원"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"NVDA, JAWS, VoiceOver 등과 호환"})]}),e.jsx(g,{variant:"default",children:"지원됨"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"음성 안내"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"탭 변경 시 음성으로 상태 안내"})]}),e.jsx(t,{variant:"outline",size:"sm",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"알림음"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"중요한 상태 변경 시 알림음 재생"})]}),e.jsx(t,{variant:"outline",size:"sm",children:"설정"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 border rounded",children:[e.jsxs("div",{children:[e.jsx(l,{className:"font-medium",children:"자막 지원"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"동영상 콘텐츠에 자막 제공"})]}),e.jsx(g,{variant:"default",children:"지원됨"})]})]})]})]})})]}),e.jsxs(o,{children:[e.jsx(u,{children:e.jsx(x,{children:"탭 접근성 가이드라인"})}),e.jsx(p,{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-green-600",children:"✅ 권장사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"명확한 탭 레이블과 설명"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"적절한 ARIA 역할과 속성"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"키보드 내비게이션 완전 지원"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"활성 탭 시각적 표시"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"탭과 패널 간 관계 설정"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-orange-600",children:"⚠️ 주의사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"탭이 너무 많으면 사용성 저하"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"자동 탭 전환은 접근성 문제"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"중요한 정보는 첫 번째 탭에"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:"탭 내용은 즉시 로드되어야 함"})]})]})]})]})})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(D,{className:"h-5 w-5 text-blue-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-900",children:"접근성 팁"}),e.jsx("p",{className:"text-sm text-blue-800 mt-1",children:"탭은 관련된 콘텐츠를 체계적으로 구성하는 중요한 도구입니다. 스크린 리더 사용자가 탭의 구조와 현재 위치를 명확히 파악할 수 있도록 적절한 ARIA 속성과 키보드 내비게이션을 제공하세요."})]})]})})]})},parameters:{docs:{description:{story:"탭 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다."}}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-4">\r
      <h3 className="text-lg font-semibold mb-4">기본 탭</h3>\r
      <Tabs defaultValue="account" className="w-full">\r
        <TabsList className="grid w-full grid-cols-2">\r
          <TabsTrigger value="account">계정</TabsTrigger>\r
          <TabsTrigger value="password">비밀번호</TabsTrigger>\r
        </TabsList>\r
        <TabsContent value="account" className="space-y-4">\r
          <div className="space-y-2">\r
            <Label htmlFor="name">이름</Label>\r
            <Input id="name" defaultValue="홍길동" />\r
          </div>\r
          <div className="space-y-2">\r
            <Label htmlFor="username">사용자명</Label>\r
            <Input id="username" defaultValue="@hong" />\r
          </div>\r
          <Button>변경사항 저장</Button>\r
        </TabsContent>\r
        <TabsContent value="password" className="space-y-4">\r
          <div className="space-y-2">\r
            <Label htmlFor="current">현재 비밀번호</Label>\r
            <Input id="current" type="password" />\r
          </div>\r
          <div className="space-y-2">\r
            <Label htmlFor="new">새 비밀번호</Label>\r
            <Input id="new" type="password" />\r
          </div>\r
          <Button>비밀번호 변경</Button>\r
        </TabsContent>\r
      </Tabs>\r
    </div>
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("personal");
    return <div className="w-full max-w-4xl space-y-4">\r
        <h3 className="text-lg font-semibold mb-4">프로필 설정</h3>\r
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">\r
          <TabsList className="grid w-full grid-cols-4">\r
            <TabsTrigger value="personal" className="flex items-center gap-2">\r
              <User className="h-4 w-4" />\r
              개인정보\r
            </TabsTrigger>\r
            <TabsTrigger value="security" className="flex items-center gap-2">\r
              <Shield className="h-4 w-4" />\r
              보안\r
            </TabsTrigger>\r
            <TabsTrigger value="notifications" className="flex items-center gap-2">\r
              <Bell className="h-4 w-4" />\r
              알림\r
            </TabsTrigger>\r
            <TabsTrigger value="billing" className="flex items-center gap-2">\r
              <CreditCard className="h-4 w-4" />\r
              결제\r
            </TabsTrigger>\r
          </TabsList>\r
          \r
          <TabsContent value="personal" className="space-y-4">\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>개인정보</CardTitle>\r
                <CardDescription>\r
                  프로필 정보를 관리하고 업데이트하세요\r
                </CardDescription>\r
              </CardHeader>\r
              <CardContent className="space-y-4">\r
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
                  <div className="space-y-2">\r
                    <Label htmlFor="firstName">이름</Label>\r
                    <Input id="firstName" defaultValue="길동" />\r
                  </div>\r
                  <div className="space-y-2">\r
                    <Label htmlFor="lastName">성</Label>\r
                    <Input id="lastName" defaultValue="홍" />\r
                  </div>\r
                  <div className="space-y-2">\r
                    <Label htmlFor="email">이메일</Label>\r
                    <Input id="email" type="email" defaultValue="hong@example.com" />\r
                  </div>\r
                  <div className="space-y-2">\r
                    <Label htmlFor="phone">전화번호</Label>\r
                    <Input id="phone" defaultValue="010-1234-5678" />\r
                  </div>\r
                </div>\r
                <div className="space-y-2">\r
                  <Label htmlFor="bio">자기소개</Label>\r
                  <textarea id="bio" className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={3} defaultValue="안녕하세요! 웹 개발자 홍길동입니다." />\r
                </div>\r
                <Button>\r
                  <Save className="h-4 w-4 mr-2" />\r
                  저장\r
                </Button>\r
              </CardContent>\r
            </Card>\r
          </TabsContent>\r
          \r
          <TabsContent value="security" className="space-y-4">\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>보안 설정</CardTitle>\r
                <CardDescription>\r
                  계정 보안을 강화하고 로그인 설정을 관리하세요\r
                </CardDescription>\r
              </CardHeader>\r
              <CardContent className="space-y-6">\r
                <div className="space-y-4">\r
                  <h4 className="font-medium">비밀번호 변경</h4>\r
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
                    <div className="space-y-2">\r
                      <Label htmlFor="currentPassword">현재 비밀번호</Label>\r
                      <Input id="currentPassword" type="password" />\r
                    </div>\r
                    <div className="space-y-2">\r
                      <Label htmlFor="newPassword">새 비밀번호</Label>\r
                      <Input id="newPassword" type="password" />\r
                    </div>\r
                  </div>\r
                  <Button variant="outline">비밀번호 변경</Button>\r
                </div>\r
                \r
                <Separator />\r
                \r
                <div className="space-y-4">\r
                  <h4 className="font-medium">2단계 인증</h4>\r
                  <div className="flex items-center justify-between p-4 border rounded-lg">\r
                    <div>\r
                      <p className="font-medium">인증 앱</p>\r
                      <p className="text-sm text-muted-foreground">Google Authenticator 또는 유사한 앱 사용</p>\r
                    </div>\r
                    <Badge variant="outline">비활성</Badge>\r
                  </div>\r
                  <Button variant="outline">\r
                    <Lock className="h-4 w-4 mr-2" />\r
                    2단계 인증 설정\r
                  </Button>\r
                </div>\r
                \r
                <Separator />\r
                \r
                <div className="space-y-4">\r
                  <h4 className="font-medium">로그인 기록</h4>\r
                  <div className="space-y-3">\r
                    {[{
                    device: 'Chrome (Windows)',
                    location: '서울, 한국',
                    time: '2시간 전',
                    current: true
                  }, {
                    device: 'Safari (iPhone)',
                    location: '서울, 한국',
                    time: '1일 전',
                    current: false
                  }, {
                    device: 'Edge (Windows)',
                    location: '부산, 한국',
                    time: '3일 전',
                    current: false
                  }].map((session, index) => <div key={index} className="flex items-center justify-between p-3 border rounded">\r
                        <div>\r
                          <p className="font-medium flex items-center gap-2">\r
                            {session.device}\r
                            {session.current && <Badge variant="default" className="text-xs">현재</Badge>}\r
                          </p>\r
                          <p className="text-sm text-muted-foreground">{session.location} • {session.time}</p>\r
                        </div>\r
                        {!session.current && <Button variant="ghost" size="sm">종료</Button>}\r
                      </div>)}\r
                  </div>\r
                </div>\r
              </CardContent>\r
            </Card>\r
          </TabsContent>\r
          \r
          <TabsContent value="notifications" className="space-y-4">\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>알림 설정</CardTitle>\r
                <CardDescription>\r
                  받고 싶은 알림 유형을 선택하세요\r
                </CardDescription>\r
              </CardHeader>\r
              <CardContent className="space-y-6">\r
                {[{
                id: 'email',
                title: '이메일 알림',
                description: '중요한 업데이트를 이메일로 받기',
                enabled: true
              }, {
                id: 'push',
                title: '푸시 알림',
                description: '브라우저 알림 받기',
                enabled: false
              }, {
                id: 'sms',
                title: 'SMS 알림',
                description: '긴급한 알림을 문자로 받기',
                enabled: true
              }, {
                id: 'marketing',
                title: '마케팅 알림',
                description: '프로모션 및 새로운 기능 소식',
                enabled: false
              }].map(item => <div key={item.id} className="flex items-center justify-between">\r
                    <div className="space-y-1">\r
                      <p className="font-medium">{item.title}</p>\r
                      <p className="text-sm text-muted-foreground">{item.description}</p>\r
                    </div>\r
                    <Button variant={item.enabled ? "default" : "outline"} size="sm">\r
                      {item.enabled ? '활성' : '비활성'}\r
                    </Button>\r
                  </div>)}\r
              </CardContent>\r
            </Card>\r
          </TabsContent>\r
          \r
          <TabsContent value="billing" className="space-y-4">\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>결제 및 구독</CardTitle>\r
                <CardDescription>\r
                  결제 방법과 구독 정보를 관리하세요\r
                </CardDescription>\r
              </CardHeader>\r
              <CardContent className="space-y-6">\r
                <div className="space-y-4">\r
                  <h4 className="font-medium">현재 플랜</h4>\r
                  <div className="p-4 border rounded-lg">\r
                    <div className="flex items-center justify-between mb-2">\r
                      <h5 className="font-medium">프로 플랜</h5>\r
                      <Badge>활성</Badge>\r
                    </div>\r
                    <p className="text-sm text-muted-foreground mb-3">\r
                      월 ₩29,000 • 다음 결제일: 2024-02-15\r
                    </p>\r
                    <div className="flex gap-2">\r
                      <Button variant="outline" size="sm">플랜 변경</Button>\r
                      <Button variant="outline" size="sm">취소</Button>\r
                    </div>\r
                  </div>\r
                </div>\r
                \r
                <Separator />\r
                \r
                <div className="space-y-4">\r
                  <h4 className="font-medium">결제 방법</h4>\r
                  <div className="space-y-3">\r
                    <div className="flex items-center justify-between p-3 border rounded">\r
                      <div className="flex items-center gap-3">\r
                        <CreditCard className="h-5 w-5" />\r
                        <div>\r
                          <p className="font-medium">•••• •••• •••• 1234</p>\r
                          <p className="text-sm text-muted-foreground">만료: 12/25</p>\r
                        </div>\r
                      </div>\r
                      <div className="flex gap-2">\r
                        <Badge variant="outline">기본</Badge>\r
                        <Button variant="ghost" size="sm">편집</Button>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <Button variant="outline">\r
                    <Plus className="h-4 w-4 mr-2" />\r
                    새 결제 방법 추가\r
                  </Button>\r
                </div>\r
                \r
                <Separator />\r
                \r
                <div className="space-y-4">\r
                  <h4 className="font-medium">결제 내역</h4>\r
                  <div className="space-y-3">\r
                    {[{
                    date: '2024-01-15',
                    amount: '₩29,000',
                    status: '완료'
                  }, {
                    date: '2023-12-15',
                    amount: '₩29,000',
                    status: '완료'
                  }, {
                    date: '2023-11-15',
                    amount: '₩29,000',
                    status: '완료'
                  }].map((payment, index) => <div key={index} className="flex items-center justify-between p-3 border rounded">\r
                        <div>\r
                          <p className="font-medium">{payment.amount}</p>\r
                          <p className="text-sm text-muted-foreground">{payment.date}</p>\r
                        </div>\r
                        <div className="flex items-center gap-2">\r
                          <Badge variant="outline">{payment.status}</Badge>\r
                          <Button variant="ghost" size="sm">\r
                            <Download className="h-4 w-4" />\r
                          </Button>\r
                        </div>\r
                      </div>)}\r
                  </div>\r
                </div>\r
              </CardContent>\r
            </Card>\r
          </TabsContent>\r
        </Tabs>\r
      </div>;
  }
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    type FileItem = {
      name: string;
      size: string;
      modified: string;
      type: 'document' | 'image' | 'video' | 'music';
    };
    const files = {
      documents: [{
        name: '프로젝트 계획서.docx',
        size: '2.3 MB',
        modified: '2024-01-15',
        type: 'document' as const
      }, {
        name: '회의록.pdf',
        size: '1.8 MB',
        modified: '2024-01-14',
        type: 'document' as const
      }, {
        name: '보고서.xlsx',
        size: '3.1 MB',
        modified: '2024-01-13',
        type: 'document' as const
      }],
      images: [{
        name: '스크린샷1.png',
        size: '4.2 MB',
        modified: '2024-01-15',
        type: 'image' as const
      }, {
        name: '로고.svg',
        size: '156 KB',
        modified: '2024-01-12',
        type: 'image' as const
      }, {
        name: '배경이미지.jpg',
        size: '8.7 MB',
        modified: '2024-01-10',
        type: 'image' as const
      }],
      videos: [{
        name: '프레젠테이션.mp4',
        size: '125 MB',
        modified: '2024-01-11',
        type: 'video' as const
      }, {
        name: '데모영상.mov',
        size: '89 MB',
        modified: '2024-01-09',
        type: 'video' as const
      }],
      music: [{
        name: '배경음악.mp3',
        size: '5.2 MB',
        modified: '2024-01-08',
        type: 'music' as const
      }, {
        name: '효과음.wav',
        size: '2.1 MB',
        modified: '2024-01-07',
        type: 'music' as const
      }]
    };
    const getFileIcon = (type: string) => {
      switch (type) {
        case 'document':
          return <FileText className="h-4 w-4 text-blue-600" />;
        case 'image':
          return <ImageIcon className="h-4 w-4 text-green-600" />;
        case 'video':
          return <Video className="h-4 w-4 text-purple-600" />;
        case 'music':
          return <Music className="h-4 w-4 text-orange-600" />;
        default:
          return <File className="h-4 w-4 text-gray-600" />;
      }
    };
    const FileList = ({
      files
    }: {
      files: FileItem[];
    }) => <div className="space-y-2">\r
        {files.map((file, index) => <div key={index} className="flex items-center justify-between p-3 border rounded hover:bg-muted/50">\r
            <div className="flex items-center gap-3">\r
              {getFileIcon(file.type)}\r
              <div>\r
                <p className="font-medium">{file.name}</p>\r
                <p className="text-sm text-muted-foreground">{file.size} • {file.modified}</p>\r
              </div>\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <Button variant="ghost" size="sm">\r
                <Download className="h-3 w-3" />\r
              </Button>\r
              <Button variant="ghost" size="sm">\r
                <MoreHorizontal className="h-3 w-3" />\r
              </Button>\r
            </div>\r
          </div>)}\r
      </div>;
    return <div className="w-full max-w-4xl space-y-4">\r
        <h3 className="text-lg font-semibold mb-4">파일 관리자</h3>\r
        <Tabs defaultValue="documents" className="w-full">\r
          <TabsList className="grid w-full grid-cols-4">\r
            <TabsTrigger value="documents" className="flex items-center gap-2">\r
              <FileText className="h-4 w-4" />\r
              문서 ({files.documents.length})\r
            </TabsTrigger>\r
            <TabsTrigger value="images" className="flex items-center gap-2">\r
              <ImageIcon className="h-4 w-4" />\r
              이미지 ({files.images.length})\r
            </TabsTrigger>\r
            <TabsTrigger value="videos" className="flex items-center gap-2">\r
              <Video className="h-4 w-4" />\r
              동영상 ({files.videos.length})\r
            </TabsTrigger>\r
            <TabsTrigger value="music" className="flex items-center gap-2">\r
              <Music className="h-4 w-4" />\r
              음악 ({files.music.length})\r
            </TabsTrigger>\r
          </TabsList>\r
          \r
          <TabsContent value="documents" className="space-y-4">\r
            <div className="flex items-center justify-between">\r
              <h4 className="font-medium">문서 파일</h4>\r
              <div className="flex items-center gap-2">\r
                <Button variant="outline" size="sm">\r
                  <Upload className="h-3 w-3 mr-2" />\r
                  업로드\r
                </Button>\r
                <Button variant="outline" size="sm">\r
                  <Filter className="h-3 w-3 mr-2" />\r
                  필터\r
                </Button>\r
              </div>\r
            </div>\r
            <FileList files={files.documents} />\r
          </TabsContent>\r
          \r
          <TabsContent value="images" className="space-y-4">\r
            <div className="flex items-center justify-between">\r
              <h4 className="font-medium">이미지 파일</h4>\r
              <div className="flex items-center gap-2">\r
                <Button variant="outline" size="sm">갤러리 보기</Button>\r
                <Button variant="outline" size="sm">목록 보기</Button>\r
              </div>\r
            </div>\r
            <FileList files={files.images} />\r
          </TabsContent>\r
          \r
          <TabsContent value="videos" className="space-y-4">\r
            <div className="flex items-center justify-between">\r
              <h4 className="font-medium">동영상 파일</h4>\r
              <Button variant="outline" size="sm">\r
                <Play className="h-3 w-3 mr-2" />\r
                전체 재생\r
              </Button>\r
            </div>\r
            <FileList files={files.videos} />\r
          </TabsContent>\r
          \r
          <TabsContent value="music" className="space-y-4">\r
            <div className="flex items-center justify-between">\r
              <h4 className="font-medium">음악 파일</h4>\r
              <Button variant="outline" size="sm">\r
                <Music className="h-3 w-3 mr-2" />\r
                플레이리스트 생성\r
              </Button>\r
            </div>\r
            <FileList files={files.music} />\r
          </TabsContent>\r
        </Tabs>\r
      </div>;
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const analytics = {
      overview: {
        totalUsers: 12543,
        revenue: 2840000,
        orders: 1847,
        conversion: 3.2
      },
      traffic: [{
        source: '직접 방문',
        visitors: 4521,
        percentage: 35
      }, {
        source: '검색 엔진',
        visitors: 3876,
        percentage: 30
      }, {
        source: '소셜 미디어',
        visitors: 2445,
        percentage: 19
      }, {
        source: '이메일',
        visitors: 1701,
        percentage: 16
      }],
      topProducts: [{
        name: 'iPhone 15 Pro',
        sales: 423,
        revenue: 546570000
      }, {
        name: '갤럭시 S24',
        sales: 387,
        revenue: 421830000
      }, {
        name: '맥북 프로',
        sales: 156,
        revenue: 388440000
      }]
    };
    return <div className="w-full max-w-6xl space-y-4">\r
        <h3 className="text-lg font-semibold mb-4">대시보드</h3>\r
        <Tabs defaultValue="overview" className="w-full">\r
          <TabsList className="grid w-full grid-cols-4">\r
            <TabsTrigger value="overview" className="flex items-center gap-2">\r
              <BarChart3 className="h-4 w-4" />\r
              개요\r
            </TabsTrigger>\r
            <TabsTrigger value="analytics" className="flex items-center gap-2">\r
              <Activity className="h-4 w-4" />\r
              분석\r
            </TabsTrigger>\r
            <TabsTrigger value="sales" className="flex items-center gap-2">\r
              <DollarSign className="h-4 w-4" />\r
              매출\r
            </TabsTrigger>\r
            <TabsTrigger value="reports" className="flex items-center gap-2">\r
              <FileText className="h-4 w-4" />\r
              보고서\r
            </TabsTrigger>\r
          </TabsList>\r
          \r
          <TabsContent value="overview" className="space-y-6">\r
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">\r
              <Card>\r
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">\r
                  <CardTitle className="text-sm font-medium">총 사용자</CardTitle>\r
                  <Users className="h-4 w-4 text-muted-foreground" />\r
                </CardHeader>\r
                <CardContent>\r
                  <div className="text-2xl font-bold">{analytics.overview.totalUsers.toLocaleString()}</div>\r
                  <p className="text-xs text-muted-foreground">\r
                    <TrendingUp className="h-3 w-3 inline mr-1" />\r
                    +20.1% 전월 대비\r
                  </p>\r
                </CardContent>\r
              </Card>\r
              \r
              <Card>\r
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">\r
                  <CardTitle className="text-sm font-medium">총 수익</CardTitle>\r
                  <DollarSign className="h-4 w-4 text-muted-foreground" />\r
                </CardHeader>\r
                <CardContent>\r
                  <div className="text-2xl font-bold">₩{analytics.overview.revenue.toLocaleString()}</div>\r
                  <p className="text-xs text-muted-foreground">\r
                    <TrendingUp className="h-3 w-3 inline mr-1" />\r
                    +12.5% 전월 대비\r
                  </p>\r
                </CardContent>\r
              </Card>\r
              \r
              <Card>\r
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">\r
                  <CardTitle className="text-sm font-medium">주문 수</CardTitle>\r
                  <Package className="h-4 w-4 text-muted-foreground" />\r
                </CardHeader>\r
                <CardContent>\r
                  <div className="text-2xl font-bold">{analytics.overview.orders.toLocaleString()}</div>\r
                  <p className="text-xs text-muted-foreground">\r
                    <TrendingUp className="h-3 w-3 inline mr-1" />\r
                    +8.2% 전월 대비\r
                  </p>\r
                </CardContent>\r
              </Card>\r
              \r
              <Card>\r
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">\r
                  <CardTitle className="text-sm font-medium">전환율</CardTitle>\r
                  <Activity className="h-4 w-4 text-muted-foreground" />\r
                </CardHeader>\r
                <CardContent>\r
                  <div className="text-2xl font-bold">{analytics.overview.conversion}%</div>\r
                  <p className="text-xs text-muted-foreground">\r
                    <TrendingUp className="h-3 w-3 inline mr-1" />\r
                    +0.3% 전월 대비\r
                  </p>\r
                </CardContent>\r
              </Card>\r
            </div>\r
          </TabsContent>\r
          \r
          <TabsContent value="analytics" className="space-y-6">\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>트래픽 소스</CardTitle>\r
                <CardDescription>방문자들이 어디서 오는지 분석</CardDescription>\r
              </CardHeader>\r
              <CardContent>\r
                <div className="space-y-4">\r
                  {analytics.traffic.map((item, index) => <div key={index} className="flex items-center justify-between">\r
                      <div className="flex items-center gap-3">\r
                        <div className="w-4 h-4 bg-blue-600 rounded" style={{
                      backgroundColor: \`hsl(\${index * 90}, 70%, 50%)\`
                    }} />\r
                        <span className="font-medium">{item.source}</span>\r
                      </div>\r
                      <div className="text-right">\r
                        <div className="font-medium">{item.visitors.toLocaleString()}</div>\r
                        <div className="text-sm text-muted-foreground">{item.percentage}%</div>\r
                      </div>\r
                    </div>)}\r
                </div>\r
              </CardContent>\r
            </Card>\r
          </TabsContent>\r
          \r
          <TabsContent value="sales" className="space-y-6">\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>인기 상품</CardTitle>\r
                <CardDescription>매출 기준 상위 상품</CardDescription>\r
              </CardHeader>\r
              <CardContent>\r
                <div className="space-y-4">\r
                  {analytics.topProducts.map((product, index) => <div key={index} className="flex items-center justify-between p-4 border rounded">\r
                      <div className="flex items-center gap-3">\r
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold">\r
                          {index + 1}\r
                        </div>\r
                        <div>\r
                          <p className="font-medium">{product.name}</p>\r
                          <p className="text-sm text-muted-foreground">{product.sales}개 판매</p>\r
                        </div>\r
                      </div>\r
                      <div className="text-right">\r
                        <p className="font-bold">₩{product.revenue.toLocaleString()}</p>\r
                        <p className="text-sm text-muted-foreground">수익</p>\r
                      </div>\r
                    </div>)}\r
                </div>\r
              </CardContent>\r
            </Card>\r
          </TabsContent>\r
          \r
          <TabsContent value="reports" className="space-y-6">\r
            <Card>\r
              <CardHeader>\r
                <CardTitle>보고서 생성</CardTitle>\r
                <CardDescription>다양한 형태의 보고서를 생성하고 다운로드하세요</CardDescription>\r
              </CardHeader>\r
              <CardContent className="space-y-4">\r
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
                  {[{
                  name: '월간 매출 보고서',
                  description: '지난 30일간의 매출 데이터',
                  type: 'monthly'
                }, {
                  name: '사용자 활동 보고서',
                  description: '사용자 행동 패턴 분석',
                  type: 'user'
                }, {
                  name: '상품 성과 보고서',
                  description: '상품별 판매 성과',
                  type: 'product'
                }, {
                  name: '마케팅 ROI 보고서',
                  description: '마케팅 캠페인 효과 분석',
                  type: 'marketing'
                }].map((report, index) => <div key={index} className="p-4 border rounded">\r
                      <h4 className="font-medium mb-2">{report.name}</h4>\r
                      <p className="text-sm text-muted-foreground mb-3">{report.description}</p>\r
                      <div className="flex gap-2">\r
                        <Button variant="outline" size="sm">\r
                          <Eye className="h-3 w-3 mr-2" />\r
                          미리보기\r
                        </Button>\r
                        <Button size="sm">\r
                          <Download className="h-3 w-3 mr-2" />\r
                          다운로드\r
                        </Button>\r
                      </div>\r
                    </div>)}\r
                </div>\r
              </CardContent>\r
            </Card>\r
          </TabsContent>\r
        </Tabs>\r
      </div>;
  }
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("general");
    return <div className="w-full max-w-4xl space-y-6">\r
        <div className="p-4 border rounded-lg">\r
          <h3 className="font-semibold mb-2">접근성 기능</h3>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>• 키보드 내비게이션 지원 (Tab, 방향키, Enter)</li>\r
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>\r
            <li>• 활성 탭 상태 명확한 표시</li>\r
            <li>• 적절한 색상 대비와 포커스 표시</li>\r
            <li>• 탭 패널과 트리거 간 연결 관계</li>\r
          </ul>\r
        </div>\r
\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Eye className="h-5 w-5" />\r
              접근성 적용 탭\r
            </CardTitle>\r
            <CardDescription>\r
              모든 사용자가 쉽게 이용할 수 있도록 설계된 탭 컴포넌트입니다\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" aria-label="접근성 설정 탭">\r
              <TabsList className="grid w-full grid-cols-3" role="tablist" aria-label="접근성 설정 카테고리">\r
                <TabsTrigger value="general" className="flex items-center gap-2" role="tab" aria-selected={activeTab === "general"} aria-controls="general-panel" id="general-tab">\r
                  <Settings className="h-4 w-4" />\r
                  일반 설정\r
                </TabsTrigger>\r
                <TabsTrigger value="visual" className="flex items-center gap-2" role="tab" aria-selected={activeTab === "visual"} aria-controls="visual-panel" id="visual-tab">\r
                  <Eye className="h-4 w-4" />\r
                  시각 설정\r
                </TabsTrigger>\r
                <TabsTrigger value="audio" className="flex items-center gap-2" role="tab" aria-selected={activeTab === "audio"} aria-controls="audio-panel" id="audio-tab">\r
                  <Volume2 className="h-4 w-4" />\r
                  청각 설정\r
                </TabsTrigger>\r
              </TabsList>\r
              \r
              <TabsContent value="general" className="space-y-4 mt-6" role="tabpanel" aria-labelledby="general-tab" id="general-panel" tabIndex={0}>\r
                <h3 className="text-lg font-semibold">일반 접근성 설정</h3>\r
                <div className="space-y-4">\r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">키보드 내비게이션</Label>\r
                      <p className="text-sm text-muted-foreground">Tab, Enter, 방향키로 모든 기능 사용</p>\r
                    </div>\r
                    <Badge variant="default">활성화됨</Badge>\r
                  </div>\r
                  \r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">포커스 표시</Label>\r
                      <p className="text-sm text-muted-foreground">현재 포커스된 요소를 명확하게 표시</p>\r
                    </div>\r
                    <Badge variant="default">활성화됨</Badge>\r
                  </div>\r
                  \r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">건너뛰기 링크</Label>\r
                      <p className="text-sm text-muted-foreground">주요 콘텐츠로 바로 이동</p>\r
                    </div>\r
                    <Button variant="outline" size="sm">설정</Button>\r
                  </div>\r
                </div>\r
                \r
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">\r
                  <h4 className="font-medium text-blue-900 mb-2">키보드 사용법</h4>\r
                  <div className="text-sm text-blue-800 space-y-1">\r
                    <p>• Tab: 다음 탭으로 이동</p>\r
                    <p>• Shift + Tab: 이전 탭으로 이동</p>\r
                    <p>• Enter 또는 Space: 탭 활성화</p>\r
                    <p>• 방향키: 탭 간 이동 (tablist 내에서)</p>\r
                  </div>\r
                </div>\r
              </TabsContent>\r
              \r
              <TabsContent value="visual" className="space-y-4 mt-6" role="tabpanel" aria-labelledby="visual-tab" id="visual-panel" tabIndex={0}>\r
                <h3 className="text-lg font-semibold">시각 접근성 설정</h3>\r
                <div className="space-y-4">\r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">고대비 모드</Label>\r
                      <p className="text-sm text-muted-foreground">텍스트와 배경 간 대비 강화</p>\r
                    </div>\r
                    <Button variant="outline" size="sm">활성화</Button>\r
                  </div>\r
                  \r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">큰 텍스트</Label>\r
                      <p className="text-sm text-muted-foreground">모든 텍스트 크기 확대</p>\r
                    </div>\r
                    <Button variant="outline" size="sm">활성화</Button>\r
                  </div>\r
                  \r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">색상 구분 없는 정보</Label>\r
                      <p className="text-sm text-muted-foreground">색상 외에도 아이콘과 텍스트로 정보 전달</p>\r
                    </div>\r
                    <Badge variant="default">적용됨</Badge>\r
                  </div>\r
                  \r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">애니메이션 감소</Label>\r
                      <p className="text-sm text-muted-foreground">움직임에 민감한 사용자를 위한 설정</p>\r
                    </div>\r
                    <Button variant="outline" size="sm">활성화</Button>\r
                  </div>\r
                </div>\r
              </TabsContent>\r
              \r
              <TabsContent value="audio" className="space-y-4 mt-6" role="tabpanel" aria-labelledby="audio-tab" id="audio-panel" tabIndex={0}>\r
                <h3 className="text-lg font-semibold">청각 접근성 설정</h3>\r
                <div className="space-y-4">\r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">스크린 리더 지원</Label>\r
                      <p className="text-sm text-muted-foreground">NVDA, JAWS, VoiceOver 등과 호환</p>\r
                    </div>\r
                    <Badge variant="default">지원됨</Badge>\r
                  </div>\r
                  \r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">음성 안내</Label>\r
                      <p className="text-sm text-muted-foreground">탭 변경 시 음성으로 상태 안내</p>\r
                    </div>\r
                    <Button variant="outline" size="sm">활성화</Button>\r
                  </div>\r
                  \r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">알림음</Label>\r
                      <p className="text-sm text-muted-foreground">중요한 상태 변경 시 알림음 재생</p>\r
                    </div>\r
                    <Button variant="outline" size="sm">설정</Button>\r
                  </div>\r
                  \r
                  <div className="flex items-center justify-between p-4 border rounded">\r
                    <div>\r
                      <Label className="font-medium">자막 지원</Label>\r
                      <p className="text-sm text-muted-foreground">동영상 콘텐츠에 자막 제공</p>\r
                    </div>\r
                    <Badge variant="default">지원됨</Badge>\r
                  </div>\r
                </div>\r
              </TabsContent>\r
            </Tabs>\r
          </CardContent>\r
        </Card>\r
\r
        {/* 접근성 가이드라인 */}\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>탭 접근성 가이드라인</CardTitle>\r
          </CardHeader>\r
          <CardContent className="space-y-4">\r
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
              <div className="space-y-3">\r
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>\r
                <ul className="text-sm space-y-2">\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>명확한 탭 레이블과 설명</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>적절한 ARIA 역할과 속성</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>키보드 내비게이션 완전 지원</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>활성 탭 시각적 표시</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-green-500 mt-1">•</span>\r
                    <span>탭과 패널 간 관계 설정</span>\r
                  </li>\r
                </ul>\r
              </div>\r
              \r
              <div className="space-y-3">\r
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>\r
                <ul className="text-sm space-y-2">\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>탭이 너무 많으면 사용성 저하</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>자동 탭 전환은 접근성 문제</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>중요한 정보는 첫 번째 탭에</span>\r
                  </li>\r
                  <li className="flex items-start gap-2">\r
                    <span className="text-orange-500 mt-1">•</span>\r
                    <span>탭 내용은 즉시 로드되어야 함</span>\r
                  </li>\r
                </ul>\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
\r
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">\r
          <div className="flex items-start gap-2">\r
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />\r
            <div>\r
              <h5 className="font-medium text-blue-900">접근성 팁</h5>\r
              <p className="text-sm text-blue-800 mt-1">\r
                탭은 관련된 콘텐츠를 체계적으로 구성하는 중요한 도구입니다. \r
                스크린 리더 사용자가 탭의 구조와 현재 위치를 명확히 파악할 수 있도록 \r
                적절한 ARIA 속성과 키보드 내비게이션을 제공하세요.\r
              </p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '탭 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};export{P as AccessibilityDemo,A as Dashboard,I as Default,V as FileManager,F as ProfileSettings,Is as default};
