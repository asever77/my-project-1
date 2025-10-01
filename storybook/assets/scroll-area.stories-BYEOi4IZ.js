import{j as e}from"./jsx-runtime-qXjPENQY.js";import{r as T}from"./iframe-vkdy9PSu.js";import{S as r}from"./scroll-area-Bb32eAyt.js";import{C as n,a as c,b as l,c as o,d as m}from"./card-DuW1NBDm.js";import{B as p}from"./badge-DHQAmv51.js";import{F as d}from"./file-text-DtujDUZq.js";import{I as u}from"./image-DriWQomG.js";import{M as j}from"./music-A8h7C7Jn.js";import{V as b}from"./video-BlTOz3zg.js";import{A as M}from"./archive-CfuODKPi.js";import{M as w}from"./message-square-vGzzb9rk.js";import{H as z}from"./heart-CxhnQcS9.js";import{c as C}from"./createLucideIcon-DT2cZkkW.js";import{U as k}from"./user-BR8oJbTL.js";import{S as $}from"./settings-TaLyVU6l.js";import{S as A}from"./star-B1Itfmbi.js";import{C as I}from"./calendar-BXw-wG_S.js";import{C as D}from"./circle-alert-BpFs-_Nq.js";import{T as H}from"./tag-BZ_aKDDr.js";import{C as F}from"./circle-check-big-BFgoofNU.js";import{B as K}from"./bell-4m82BrZ_.js";import{S as U}from"./shopping-cart-Bps949N3.js";import{E}from"./eye-BJd8dDQ5.js";import"./index-0kxtDDZv.js";import"./index-BAWlKGlJ.js";import"./index-TaS-8cbB.js";import"./index-BZXyV1Vc.js";import"./index-BeNwZOra.js";import"./index-Dsdd1Jqs.js";import"./index-DbagnNFI.js";import"./index-Bk4_yNSf.js";import"./index-BdQq_4o_.js";import"./utils-CBfrqCZ4.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],S=C("message-circle",V);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],q=C("newspaper",_),we={title:"UI/Base/ScrollArea",component:r,parameters:{layout:"centered",docs:{description:{component:"커스텀 스크롤바를 제공하는 스크롤 영역 컴포넌트입니다. 긴 콘텐츠를 제한된 공간에 표시할 때 사용합니다."}}},tags:["autodocs"],argTypes:{className:{control:"text",description:"추가 CSS 클래스"}}},x={render:()=>e.jsx("div",{className:"w-80 h-64 border rounded-lg",children:e.jsx(r,{className:"h-full p-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"스크롤 가능한 콘텐츠"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"이것은 스크롤 가능한 영역입니다. 콘텐츠가 많아지면 자동으로 스크롤바가 나타납니다."}),Array.from({length:20},(i,s)=>e.jsxs("div",{className:"p-3 bg-muted rounded",children:[e.jsxs("p",{className:"text-sm",children:["항목 ",s+1]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["이것은 ",s+1,"번째 항목의 설명입니다."]})]},s))]})})})},g={render:()=>{const[i,s]=T.useState(null),t=[{name:"Documents",type:"folder",size:"",modified:"2시간 전",icon:d},{name:"Images",type:"folder",size:"",modified:"1일 전",icon:u},{name:"Music",type:"folder",size:"",modified:"3일 전",icon:j},{name:"Videos",type:"folder",size:"",modified:"1주 전",icon:b},{name:"project-proposal.pdf",type:"file",size:"2.4 MB",modified:"30분 전",icon:d},{name:"vacation-photo.jpg",type:"file",size:"5.8 MB",modified:"2시간 전",icon:u},{name:"presentation.pptx",type:"file",size:"12.3 MB",modified:"4시간 전",icon:d},{name:"budget-2024.xlsx",type:"file",size:"890 KB",modified:"6시간 전",icon:d},{name:"meeting-recording.mp4",type:"file",size:"45.2 MB",modified:"1일 전",icon:b},{name:"background-music.mp3",type:"file",size:"8.1 MB",modified:"2일 전",icon:j},{name:"website-backup.zip",type:"file",size:"156 MB",modified:"3일 전",icon:M},{name:"logo-design.ai",type:"file",size:"3.2 MB",modified:"4일 전",icon:u},{name:"quarterly-report.pdf",type:"file",size:"1.8 MB",modified:"1주 전",icon:d},{name:"team-photo.png",type:"file",size:"4.5 MB",modified:"1주 전",icon:u},{name:"app-demo.mov",type:"file",size:"78.9 MB",modified:"2주 전",icon:b}];return e.jsxs(n,{className:"w-96 h-80",children:[e.jsxs(c,{children:[e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(d,{className:"h-5 w-5"}),"파일 탐색기"]}),e.jsxs(o,{children:[t.length,"개의 항목이 있습니다"]})]}),e.jsx(m,{className:"p-0",children:e.jsx(r,{className:"h-64",children:e.jsx("div",{className:"p-4 space-y-2",children:t.map(a=>{const B=a.icon;return e.jsxs("div",{className:`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${i===a.name?"bg-blue-100 border border-blue-300":"hover:bg-muted"}`,onClick:()=>s(a.name),children:[e.jsx(B,{className:"h-4 w-4 text-muted-foreground flex-shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium truncate",children:a.name}),e.jsxs("div",{className:"flex items-center gap-2 text-xs text-muted-foreground",children:[e.jsx("span",{children:a.modified}),a.size&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("span",{children:a.size})]})]})]}),e.jsx(p,{variant:a.type==="folder"?"secondary":"outline",children:a.type==="folder"?"폴더":"파일"})]},a.name)})})})})]})}},f={render:()=>{const i=[{id:1,user:"김철수",message:"안녕하세요! 오늘 회의 준비는 어떻게 되어가고 있나요?",time:"09:30",avatar:"김",type:"received"},{id:2,user:"나",message:"네, 거의 준비가 끝났습니다. 자료도 정리했고요.",time:"09:32",avatar:"나",type:"sent"},{id:3,user:"이영희",message:"저도 참석 예정입니다. 몇 시에 시작하나요?",time:"09:35",avatar:"이",type:"received"},{id:4,user:"나",message:"오후 2시에 시작합니다. 회의실은 3층 대회의실이에요.",time:"09:36",avatar:"나",type:"sent"},{id:5,user:"박민수",message:"네, 알겠습니다. 프레젠테이션 자료는 미리 공유해주실 수 있나요?",time:"09:40",avatar:"박",type:"received"},{id:6,user:"나",message:"지금 바로 공유드리겠습니다. 이메일로 보내드릴게요.",time:"09:41",avatar:"나",type:"sent"},{id:7,user:"김철수",message:"감사합니다! 그럼 오후에 뵙겠습니다.",time:"09:45",avatar:"김",type:"received"},{id:8,user:"이영희",message:"저는 조금 늦을 수도 있어요. 다른 회의가 길어져서요.",time:"10:00",avatar:"이",type:"received"},{id:9,user:"나",message:"괜찮습니다. 늦으셔도 되니까 편하게 오세요.",time:"10:02",avatar:"나",type:"sent"},{id:10,user:"박민수",message:"좋은 아이디어가 몇 개 있어서 공유하고 싶어요. 기대해주세요!",time:"10:15",avatar:"박",type:"received"}];return e.jsxs(n,{className:"w-96 h-96",children:[e.jsxs(c,{children:[e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(w,{className:"h-5 w-5"}),"팀 채팅방"]}),e.jsx(o,{children:"온라인 • 4명"})]}),e.jsx(m,{className:"p-0",children:e.jsx(r,{className:"h-80 p-4",children:e.jsx("div",{className:"space-y-4",children:i.map(s=>e.jsxs("div",{className:`flex gap-3 ${s.type==="sent"?"flex-row-reverse":""}`,children:[e.jsx("div",{className:"h-8 w-8 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium",children:s.avatar}),e.jsxs("div",{className:`flex flex-col ${s.type==="sent"?"items-end":"items-start"}`,children:[e.jsx("div",{className:`max-w-xs p-3 rounded-lg ${s.type==="sent"?"bg-blue-500 text-white":"bg-gray-100 text-gray-900"}`,children:e.jsx("p",{className:"text-sm",children:s.message})}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[s.type==="received"&&e.jsx("span",{className:"text-xs font-medium text-muted-foreground",children:s.user}),e.jsx("span",{className:"text-xs text-muted-foreground",children:s.time})]})]})]},s.id))})})})]})}},h={render:()=>{const i=[{id:1,type:"message",title:"새 메시지",description:"김철수님이 메시지를 보냈습니다",time:"방금 전",read:!1,icon:w,color:"text-blue-500"},{id:2,type:"like",title:"좋아요",description:"이영희님이 회원님의 게시물을 좋아합니다",time:"5분 전",read:!1,icon:z,color:"text-red-500"},{id:3,type:"comment",title:"댓글",description:"박민수님이 댓글을 달았습니다",time:"10분 전",read:!0,icon:S,color:"text-green-500"},{id:4,type:"follow",title:"새로운 팔로워",description:"최지영님이 회원님을 팔로우하기 시작했습니다",time:"30분 전",read:!0,icon:k,color:"text-purple-500"},{id:5,type:"system",title:"시스템 업데이트",description:"새로운 기능이 추가되었습니다",time:"1시간 전",read:!0,icon:$,color:"text-gray-500"},{id:6,type:"achievement",title:"업적 달성",description:"100개의 게시물을 작성했습니다",time:"2시간 전",read:!0,icon:A,color:"text-yellow-500"},{id:7,type:"reminder",title:"일정 알림",description:"오후 3시에 회의가 예정되어 있습니다",time:"3시간 전",read:!0,icon:I,color:"text-orange-500"},{id:8,type:"security",title:"보안 알림",description:"새로운 기기에서 로그인되었습니다",time:"6시간 전",read:!0,icon:D,color:"text-red-600"},{id:9,type:"promotion",title:"프로모션",description:"프리미엄 플랜 50% 할인 이벤트",time:"1일 전",read:!0,icon:H,color:"text-pink-500"},{id:10,type:"backup",title:"백업 완료",description:"데이터 백업이 성공적으로 완료되었습니다",time:"2일 전",read:!0,icon:F,color:"text-green-600"}],s=i.filter(t=>!t.read).length;return e.jsxs(n,{className:"w-96 h-96",children:[e.jsxs(c,{children:[e.jsxs(l,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(K,{className:"h-5 w-5"}),"알림"]}),s>0&&e.jsx(p,{className:"bg-red-500",children:s})]}),e.jsx(o,{children:"새로운 알림을 확인하세요"})]}),e.jsx(m,{className:"p-0",children:e.jsx(r,{className:"h-80",children:e.jsx("div",{className:"space-y-1",children:i.map(t=>{const a=t.icon;return e.jsxs("div",{className:`flex items-start gap-3 p-4 border-b hover:bg-muted transition-colors ${t.read?"":"bg-blue-50 border-l-4 border-l-blue-500"}`,children:[e.jsx("div",{className:`p-2 rounded-full bg-gray-100 ${t.color}`,children:e.jsx(a,{className:"h-4 w-4"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:`text-sm font-medium ${t.read?"":"font-semibold"}`,children:t.title}),e.jsx("span",{className:"text-xs text-muted-foreground",children:t.time})]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:t.description}),!t.read&&e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2"})]})]},t.id)})})})})]})}},y={render:()=>{const i=[{id:1,name:"스마트폰 케이스",price:"29,900원",rating:4.5,reviews:128,image:"📱",category:"액세서리",discount:"20%"},{id:2,name:"블루투스 이어폰",price:"89,000원",rating:4.8,reviews:256,image:"🎧",category:"오디오",discount:null},{id:3,name:"무선 충전기",price:"45,000원",rating:4.3,reviews:89,image:"🔌",category:"충전기",discount:"15%"},{id:4,name:"태블릿 거치대",price:"19,900원",rating:4.1,reviews:67,image:"📐",category:"거치대",discount:null},{id:5,name:"스마트 워치",price:"249,000원",rating:4.7,reviews:445,image:"⌚",category:"웨어러블",discount:"10%"},{id:6,name:"USB-C 케이블",price:"12,900원",rating:4.2,reviews:234,image:"🔌",category:"케이블",discount:null},{id:7,name:"노트북 파우치",price:"35,000원",rating:4.4,reviews:156,image:"💼",category:"보호용품",discount:"25%"},{id:8,name:"스피커",price:"129,000원",rating:4.6,reviews:189,image:"🔊",category:"오디오",discount:null}];return e.jsxs(n,{className:"w-96 h-96",children:[e.jsxs(c,{children:[e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(U,{className:"h-5 w-5"}),"상품 목록"]}),e.jsxs(o,{children:[i.length,"개의 상품이 있습니다"]})]}),e.jsx(m,{className:"p-0",children:e.jsx(r,{className:"h-80",children:e.jsx("div",{className:"p-4 space-y-4",children:i.map(s=>e.jsxs("div",{className:"flex items-center gap-4 p-3 border rounded-lg hover:bg-muted transition-colors cursor-pointer",children:[e.jsx("div",{className:"w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl",children:s.image}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"font-medium truncate",children:s.name}),s.discount&&e.jsxs(p,{variant:"destructive",className:"text-xs",children:["-",s.discount]})]}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(A,{className:"h-3 w-3 fill-yellow-400 text-yellow-400"}),e.jsx("span",{className:"text-xs",children:s.rating})]}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:["(",s.reviews,"개 리뷰)"]})]}),e.jsxs("div",{className:"flex items-center justify-between mt-2",children:[e.jsx("span",{className:"font-semibold text-sm",children:s.price}),e.jsx(p,{variant:"outline",className:"text-xs",children:s.category})]})]})]},s.id))})})})]})}},v={render:()=>{const i=[{id:1,title:"새로운 AI 기술 발표, 업계 혁신 예고",summary:"글로벌 테크 기업에서 차세대 인공지능 기술을 공개하며 업계에 큰 변화가 예상된다고 발표했습니다.",category:"기술",author:"김기자",publishedAt:"1시간 전",readTime:"3분",views:"1.2K",comments:45},{id:2,title:"코로나19 백신 3차 접종 효과 연구 결과",summary:"최신 연구에 따르면 3차 백신 접종이 변이 바이러스에 대한 면역력을 크게 향상시키는 것으로 나타났습니다.",category:"건강",author:"이기자",publishedAt:"2시간 전",readTime:"5분",views:"2.8K",comments:67},{id:3,title:"글로벌 반도체 공급망 정상화 조짐",summary:"지난 2년간 지속된 반도체 부족 현상이 올해 하반기부터 점진적으로 해결될 것이라는 전망이 나왔습니다.",category:"경제",author:"박기자",publishedAt:"3시간 전",readTime:"4분",views:"3.5K",comments:89},{id:4,title:"환경 친화적 에너지 솔루션 확산",summary:"재생 에너지 기술의 발전으로 친환경 에너지 솔루션 도입이 가속화되고 있다는 보고서가 발표되었습니다.",category:"환경",author:"최기자",publishedAt:"4시간 전",readTime:"6분",views:"1.9K",comments:34},{id:5,title:"메타버스 플랫폼 사용자 급증",summary:"가상현실 기술의 발전과 함께 메타버스 플랫폼 사용자가 전년 대비 300% 증가했다고 조사되었습니다.",category:"기술",author:"정기자",publishedAt:"5시간 전",readTime:"4분",views:"4.1K",comments:123},{id:6,title:"원격 근무 문화 정착으로 인한 사회 변화",summary:"코로나19 이후 확산된 원격 근무가 일상화되면서 다양한 사회적 변화가 나타나고 있습니다.",category:"사회",author:"장기자",publishedAt:"6시간 전",readTime:"7분",views:"2.3K",comments:56}],s=t=>({기술:"bg-blue-100 text-blue-800",건강:"bg-green-100 text-green-800",경제:"bg-yellow-100 text-yellow-800",환경:"bg-emerald-100 text-emerald-800",사회:"bg-purple-100 text-purple-800"})[t]||"bg-gray-100 text-gray-800";return e.jsxs(n,{className:"w-96 h-96",children:[e.jsxs(c,{children:[e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(q,{className:"h-5 w-5"}),"최신 뉴스"]}),e.jsx(o,{children:"오늘의 주요 뉴스를 확인하세요"})]}),e.jsx(m,{className:"p-0",children:e.jsx(r,{className:"h-80",children:e.jsx("div",{className:"space-y-4 p-4",children:i.map(t=>e.jsxs("div",{className:"p-4 border rounded-lg hover:bg-muted transition-colors cursor-pointer",children:[e.jsxs("div",{className:"flex items-start justify-between mb-2",children:[e.jsx(p,{className:s(t.category),children:t.category}),e.jsx("span",{className:"text-xs text-muted-foreground",children:t.publishedAt})]}),e.jsx("h4",{className:"font-semibold text-sm mb-2 leading-tight",children:t.title}),e.jsx("p",{className:"text-xs text-muted-foreground mb-3 leading-relaxed",children:t.summary}),e.jsxs("div",{className:"flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{children:t.author}),e.jsxs("span",{children:["읽기 ",t.readTime]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(E,{className:"h-3 w-3"}),e.jsx("span",{children:t.views})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(S,{className:"h-3 w-3"}),e.jsx("span",{children:t.comments})]})]})]})]},t.id))})})})]})}},N={render:()=>{const i=Array.from({length:30},(s,t)=>({id:t+1,title:`항목 ${t+1}`,description:`이것은 ${t+1}번째 항목의 설명입니다. 접근성을 고려하여 작성되었습니다.`}));return e.jsxs("div",{className:"w-full max-w-md space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 스크롤 지원 (방향키, Page Up/Down, Home/End)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 관리 및 순환"}),e.jsx("li",{children:"• 스크롤 상태 음성 안내"}),e.jsx("li",{children:"• 적절한 색상 대비"})]})]}),e.jsxs(n,{children:[e.jsxs(c,{children:[e.jsx(l,{children:"접근성 스크롤 영역 데모"}),e.jsx(o,{children:"완전한 키보드 접근성을 지원하는 스크롤 영역"})]}),e.jsx(m,{className:"p-0",children:e.jsx(r,{className:"h-64 border","aria-label":"접근성 데모 목록",role:"region","aria-describedby":"scroll-instructions",children:e.jsx("div",{className:"p-4 space-y-3",children:i.map(s=>e.jsxs("div",{className:"p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",tabIndex:0,role:"listitem","aria-labelledby":`item-title-${s.id}`,"aria-describedby":`item-desc-${s.id}`,children:[e.jsx("h4",{id:`item-title-${s.id}`,className:"font-medium text-sm",children:s.title}),e.jsx("p",{id:`item-desc-${s.id}`,className:"text-sm text-muted-foreground mt-1",children:s.description})]},s.id))})})})]}),e.jsx("div",{id:"scroll-instructions",className:"text-xs text-muted-foreground p-3 bg-muted rounded",children:"💡 키보드 사용법: Tab으로 포커스 이동, 방향키로 스크롤, Page Up/Down으로 빠른 이동"})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 제공하는 스크롤 영역 데모입니다."}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 h-64 border rounded-lg">
      <ScrollArea className="h-full p-4">
        <div className="space-y-4">
          <h3 className="font-semibold">스크롤 가능한 콘텐츠</h3>
          <p className="text-sm text-muted-foreground">
            이것은 스크롤 가능한 영역입니다. 콘텐츠가 많아지면 
            자동으로 스크롤바가 나타납니다.
          </p>
          {Array.from({
          length: 20
        }, (_, i) => <div key={i} className="p-3 bg-muted rounded">
              <p className="text-sm">항목 {i + 1}</p>
              <p className="text-xs text-muted-foreground">
                이것은 {i + 1}번째 항목의 설명입니다.
              </p>
            </div>)}
        </div>
      </ScrollArea>
    </div>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const files = [{
      name: 'Documents',
      type: 'folder',
      size: '',
      modified: '2시간 전',
      icon: FileText
    }, {
      name: 'Images',
      type: 'folder',
      size: '',
      modified: '1일 전',
      icon: Image
    }, {
      name: 'Music',
      type: 'folder',
      size: '',
      modified: '3일 전',
      icon: Music
    }, {
      name: 'Videos',
      type: 'folder',
      size: '',
      modified: '1주 전',
      icon: Video
    }, {
      name: 'project-proposal.pdf',
      type: 'file',
      size: '2.4 MB',
      modified: '30분 전',
      icon: FileText
    }, {
      name: 'vacation-photo.jpg',
      type: 'file',
      size: '5.8 MB',
      modified: '2시간 전',
      icon: Image
    }, {
      name: 'presentation.pptx',
      type: 'file',
      size: '12.3 MB',
      modified: '4시간 전',
      icon: FileText
    }, {
      name: 'budget-2024.xlsx',
      type: 'file',
      size: '890 KB',
      modified: '6시간 전',
      icon: FileText
    }, {
      name: 'meeting-recording.mp4',
      type: 'file',
      size: '45.2 MB',
      modified: '1일 전',
      icon: Video
    }, {
      name: 'background-music.mp3',
      type: 'file',
      size: '8.1 MB',
      modified: '2일 전',
      icon: Music
    }, {
      name: 'website-backup.zip',
      type: 'file',
      size: '156 MB',
      modified: '3일 전',
      icon: Archive
    }, {
      name: 'logo-design.ai',
      type: 'file',
      size: '3.2 MB',
      modified: '4일 전',
      icon: Image
    }, {
      name: 'quarterly-report.pdf',
      type: 'file',
      size: '1.8 MB',
      modified: '1주 전',
      icon: FileText
    }, {
      name: 'team-photo.png',
      type: 'file',
      size: '4.5 MB',
      modified: '1주 전',
      icon: Image
    }, {
      name: 'app-demo.mov',
      type: 'file',
      size: '78.9 MB',
      modified: '2주 전',
      icon: Video
    }];
    return <Card className="w-96 h-80">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            파일 탐색기
          </CardTitle>
          <CardDescription>
            {files.length}개의 항목이 있습니다
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-64">
            <div className="p-4 space-y-2">
              {files.map(file => {
              const IconComponent = file.icon;
              return <div key={file.name} className={\`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors \${selectedFile === file.name ? 'bg-blue-100 border border-blue-300' : 'hover:bg-muted'}\`} onClick={() => setSelectedFile(file.name)}>
                    <IconComponent className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{file.modified}</span>
                        {file.size && <>
                            <span>•</span>
                            <span>{file.size}</span>
                          </>}
                      </div>
                    </div>
                    <Badge variant={file.type === 'folder' ? 'secondary' : 'outline'}>
                      {file.type === 'folder' ? '폴더' : '파일'}
                    </Badge>
                  </div>;
            })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const messages = [{
      id: 1,
      user: '김철수',
      message: '안녕하세요! 오늘 회의 준비는 어떻게 되어가고 있나요?',
      time: '09:30',
      avatar: '김',
      type: 'received'
    }, {
      id: 2,
      user: '나',
      message: '네, 거의 준비가 끝났습니다. 자료도 정리했고요.',
      time: '09:32',
      avatar: '나',
      type: 'sent'
    }, {
      id: 3,
      user: '이영희',
      message: '저도 참석 예정입니다. 몇 시에 시작하나요?',
      time: '09:35',
      avatar: '이',
      type: 'received'
    }, {
      id: 4,
      user: '나',
      message: '오후 2시에 시작합니다. 회의실은 3층 대회의실이에요.',
      time: '09:36',
      avatar: '나',
      type: 'sent'
    }, {
      id: 5,
      user: '박민수',
      message: '네, 알겠습니다. 프레젠테이션 자료는 미리 공유해주실 수 있나요?',
      time: '09:40',
      avatar: '박',
      type: 'received'
    }, {
      id: 6,
      user: '나',
      message: '지금 바로 공유드리겠습니다. 이메일로 보내드릴게요.',
      time: '09:41',
      avatar: '나',
      type: 'sent'
    }, {
      id: 7,
      user: '김철수',
      message: '감사합니다! 그럼 오후에 뵙겠습니다.',
      time: '09:45',
      avatar: '김',
      type: 'received'
    }, {
      id: 8,
      user: '이영희',
      message: '저는 조금 늦을 수도 있어요. 다른 회의가 길어져서요.',
      time: '10:00',
      avatar: '이',
      type: 'received'
    }, {
      id: 9,
      user: '나',
      message: '괜찮습니다. 늦으셔도 되니까 편하게 오세요.',
      time: '10:02',
      avatar: '나',
      type: 'sent'
    }, {
      id: 10,
      user: '박민수',
      message: '좋은 아이디어가 몇 개 있어서 공유하고 싶어요. 기대해주세요!',
      time: '10:15',
      avatar: '박',
      type: 'received'
    }];
    return <Card className="w-96 h-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            팀 채팅방
          </CardTitle>
          <CardDescription>
            온라인 • 4명
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-80 p-4">
            <div className="space-y-4">
              {messages.map(msg => <div key={msg.id} className={\`flex gap-3 \${msg.type === 'sent' ? 'flex-row-reverse' : ''}\`}>
                  <div className="h-8 w-8 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium">
                    {msg.avatar}
                  </div>
                  
                  <div className={\`flex flex-col \${msg.type === 'sent' ? 'items-end' : 'items-start'}\`}>
                    <div className={\`max-w-xs p-3 rounded-lg \${msg.type === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}\`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      {msg.type === 'received' && <span className="text-xs font-medium text-muted-foreground">
                          {msg.user}
                        </span>}
                      <span className="text-xs text-muted-foreground">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const notifications = [{
      id: 1,
      type: 'message',
      title: '새 메시지',
      description: '김철수님이 메시지를 보냈습니다',
      time: '방금 전',
      read: false,
      icon: MessageSquare,
      color: 'text-blue-500'
    }, {
      id: 2,
      type: 'like',
      title: '좋아요',
      description: '이영희님이 회원님의 게시물을 좋아합니다',
      time: '5분 전',
      read: false,
      icon: Heart,
      color: 'text-red-500'
    }, {
      id: 3,
      type: 'comment',
      title: '댓글',
      description: '박민수님이 댓글을 달았습니다',
      time: '10분 전',
      read: true,
      icon: MessageCircle,
      color: 'text-green-500'
    }, {
      id: 4,
      type: 'follow',
      title: '새로운 팔로워',
      description: '최지영님이 회원님을 팔로우하기 시작했습니다',
      time: '30분 전',
      read: true,
      icon: User,
      color: 'text-purple-500'
    }, {
      id: 5,
      type: 'system',
      title: '시스템 업데이트',
      description: '새로운 기능이 추가되었습니다',
      time: '1시간 전',
      read: true,
      icon: Settings,
      color: 'text-gray-500'
    }, {
      id: 6,
      type: 'achievement',
      title: '업적 달성',
      description: '100개의 게시물을 작성했습니다',
      time: '2시간 전',
      read: true,
      icon: Star,
      color: 'text-yellow-500'
    }, {
      id: 7,
      type: 'reminder',
      title: '일정 알림',
      description: '오후 3시에 회의가 예정되어 있습니다',
      time: '3시간 전',
      read: true,
      icon: Calendar,
      color: 'text-orange-500'
    }, {
      id: 8,
      type: 'security',
      title: '보안 알림',
      description: '새로운 기기에서 로그인되었습니다',
      time: '6시간 전',
      read: true,
      icon: AlertCircle,
      color: 'text-red-600'
    }, {
      id: 9,
      type: 'promotion',
      title: '프로모션',
      description: '프리미엄 플랜 50% 할인 이벤트',
      time: '1일 전',
      read: true,
      icon: Tag,
      color: 'text-pink-500'
    }, {
      id: 10,
      type: 'backup',
      title: '백업 완료',
      description: '데이터 백업이 성공적으로 완료되었습니다',
      time: '2일 전',
      read: true,
      icon: CheckCircle,
      color: 'text-green-600'
    }];
    const unreadCount = notifications.filter(n => !n.read).length;
    return <Card className="w-96 h-96">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              알림
            </div>
            {unreadCount > 0 && <Badge className="bg-red-500">
                {unreadCount}
              </Badge>}
          </CardTitle>
          <CardDescription>
            새로운 알림을 확인하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-80">
            <div className="space-y-1">
              {notifications.map(notification => {
              const IconComponent = notification.icon;
              return <div key={notification.id} className={\`flex items-start gap-3 p-4 border-b hover:bg-muted transition-colors \${!notification.read ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''}\`}>
                    <div className={\`p-2 rounded-full bg-gray-100 \${notification.color}\`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={\`text-sm font-medium \${!notification.read ? 'font-semibold' : ''}\`}>
                          {notification.title}
                        </p>
                        <span className="text-xs text-muted-foreground">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.description}
                      </p>
                      {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />}
                    </div>
                  </div>;
            })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const products = [{
      id: 1,
      name: '스마트폰 케이스',
      price: '29,900원',
      rating: 4.5,
      reviews: 128,
      image: '📱',
      category: '액세서리',
      discount: '20%'
    }, {
      id: 2,
      name: '블루투스 이어폰',
      price: '89,000원',
      rating: 4.8,
      reviews: 256,
      image: '🎧',
      category: '오디오',
      discount: null
    }, {
      id: 3,
      name: '무선 충전기',
      price: '45,000원',
      rating: 4.3,
      reviews: 89,
      image: '🔌',
      category: '충전기',
      discount: '15%'
    }, {
      id: 4,
      name: '태블릿 거치대',
      price: '19,900원',
      rating: 4.1,
      reviews: 67,
      image: '📐',
      category: '거치대',
      discount: null
    }, {
      id: 5,
      name: '스마트 워치',
      price: '249,000원',
      rating: 4.7,
      reviews: 445,
      image: '⌚',
      category: '웨어러블',
      discount: '10%'
    }, {
      id: 6,
      name: 'USB-C 케이블',
      price: '12,900원',
      rating: 4.2,
      reviews: 234,
      image: '🔌',
      category: '케이블',
      discount: null
    }, {
      id: 7,
      name: '노트북 파우치',
      price: '35,000원',
      rating: 4.4,
      reviews: 156,
      image: '💼',
      category: '보호용품',
      discount: '25%'
    }, {
      id: 8,
      name: '스피커',
      price: '129,000원',
      rating: 4.6,
      reviews: 189,
      image: '🔊',
      category: '오디오',
      discount: null
    }];
    return <Card className="w-96 h-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            상품 목록
          </CardTitle>
          <CardDescription>
            {products.length}개의 상품이 있습니다
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-80">
            <div className="p-4 space-y-4">
              {products.map(product => <div key={product.id} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl">
                    {product.image}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium truncate">{product.name}</h4>
                      {product.discount && <Badge variant="destructive" className="text-xs">
                          -{product.discount}
                        </Badge>}
                    </div>
                    
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews}개 리뷰)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-semibold text-sm">{product.price}</span>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </div>)}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const articles = [{
      id: 1,
      title: '새로운 AI 기술 발표, 업계 혁신 예고',
      summary: '글로벌 테크 기업에서 차세대 인공지능 기술을 공개하며 업계에 큰 변화가 예상된다고 발표했습니다.',
      category: '기술',
      author: '김기자',
      publishedAt: '1시간 전',
      readTime: '3분',
      views: '1.2K',
      comments: 45
    }, {
      id: 2,
      title: '코로나19 백신 3차 접종 효과 연구 결과',
      summary: '최신 연구에 따르면 3차 백신 접종이 변이 바이러스에 대한 면역력을 크게 향상시키는 것으로 나타났습니다.',
      category: '건강',
      author: '이기자',
      publishedAt: '2시간 전',
      readTime: '5분',
      views: '2.8K',
      comments: 67
    }, {
      id: 3,
      title: '글로벌 반도체 공급망 정상화 조짐',
      summary: '지난 2년간 지속된 반도체 부족 현상이 올해 하반기부터 점진적으로 해결될 것이라는 전망이 나왔습니다.',
      category: '경제',
      author: '박기자',
      publishedAt: '3시간 전',
      readTime: '4분',
      views: '3.5K',
      comments: 89
    }, {
      id: 4,
      title: '환경 친화적 에너지 솔루션 확산',
      summary: '재생 에너지 기술의 발전으로 친환경 에너지 솔루션 도입이 가속화되고 있다는 보고서가 발표되었습니다.',
      category: '환경',
      author: '최기자',
      publishedAt: '4시간 전',
      readTime: '6분',
      views: '1.9K',
      comments: 34
    }, {
      id: 5,
      title: '메타버스 플랫폼 사용자 급증',
      summary: '가상현실 기술의 발전과 함께 메타버스 플랫폼 사용자가 전년 대비 300% 증가했다고 조사되었습니다.',
      category: '기술',
      author: '정기자',
      publishedAt: '5시간 전',
      readTime: '4분',
      views: '4.1K',
      comments: 123
    }, {
      id: 6,
      title: '원격 근무 문화 정착으로 인한 사회 변화',
      summary: '코로나19 이후 확산된 원격 근무가 일상화되면서 다양한 사회적 변화가 나타나고 있습니다.',
      category: '사회',
      author: '장기자',
      publishedAt: '6시간 전',
      readTime: '7분',
      views: '2.3K',
      comments: 56
    }];
    const getCategoryColor = (category: string) => {
      const colors: Record<string, string> = {
        '기술': 'bg-blue-100 text-blue-800',
        '건강': 'bg-green-100 text-green-800',
        '경제': 'bg-yellow-100 text-yellow-800',
        '환경': 'bg-emerald-100 text-emerald-800',
        '사회': 'bg-purple-100 text-purple-800'
      };
      return colors[category] || 'bg-gray-100 text-gray-800';
    };
    return <Card className="w-96 h-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" />
            최신 뉴스
          </CardTitle>
          <CardDescription>
            오늘의 주요 뉴스를 확인하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-80">
            <div className="space-y-4 p-4">
              {articles.map(article => <div key={article.id} className="p-4 border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {article.publishedAt}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-sm mb-2 leading-tight">
                    {article.title}
                  </h4>
                  
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span>{article.author}</span>
                      <span>읽기 {article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>;
  }
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = Array.from({
      length: 30
    }, (_, i) => ({
      id: i + 1,
      title: \`항목 \${i + 1}\`,
      description: \`이것은 \${i + 1}번째 항목의 설명입니다. 접근성을 고려하여 작성되었습니다.\`
    }));
    return <div className="w-full max-w-md space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 스크롤 지원 (방향키, Page Up/Down, Home/End)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 관리 및 순환</li>
            <li>• 스크롤 상태 음성 안내</li>
            <li>• 적절한 색상 대비</li>
          </ul>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>접근성 스크롤 영역 데모</CardTitle>
            <CardDescription>
              완전한 키보드 접근성을 지원하는 스크롤 영역
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-64 border" aria-label="접근성 데모 목록" role="region" aria-describedby="scroll-instructions">
              <div className="p-4 space-y-3">
                {items.map(item => <div key={item.id} className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" tabIndex={0} role="listitem" aria-labelledby={\`item-title-\${item.id}\`} aria-describedby={\`item-desc-\${item.id}\`}>
                    <h4 id={\`item-title-\${item.id}\`} className="font-medium text-sm">
                      {item.title}
                    </h4>
                    <p id={\`item-desc-\${item.id}\`} className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>)}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        
        <div id="scroll-instructions" className="text-xs text-muted-foreground p-3 bg-muted rounded">
          💡 키보드 사용법: Tab으로 포커스 이동, 방향키로 스크롤, Page Up/Down으로 빠른 이동
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 제공하는 스크롤 영역 데모입니다.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};export{N as AccessibilityDemo,f as ChatMessages,x as Default,g as FileExplorer,v as NewsArticles,h as NotificationList,y as ProductCatalog,we as default};
