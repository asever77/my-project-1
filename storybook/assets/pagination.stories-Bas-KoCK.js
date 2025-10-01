import{j as e}from"./jsx-runtime-Dad_ikcK.js";import{r as p}from"./iframe-Dg_gISpU.js";import{c as v}from"./utils-CBfrqCZ4.js";import{b as W,B as d}from"./button-DeRujA52.js";import{C as B}from"./chevron-left-CEenEobK.js";import{E as F}from"./ellipsis-Ct8MMTtm.js";import{C as _}from"./chevron-right-DRlUqJfg.js";import{I as U}from"./input-Bt8WQj9g.js";import{L as H}from"./label-BFn_tkP2.js";import{S as G,a as q,b as X,c as O,d as N}from"./select-Bo1J1qDp.js";import{C as z,a as R,b as T,c as E,d as V}from"./card-BWb2LgWm.js";import{B as J}from"./badge-J-qZ_wID.js";import{C as K,a as Q}from"./chevrons-right-DXj0xHB9.js";import{U as Y}from"./users-D42TsHGj.js";import{E as Z}from"./eye-DrJacY7W.js";import{S as ee}from"./search-DKKjzB9h.js";import{G as te}from"./grid-3x3-6VnEDeOy.js";import{L as ae}from"./list-DIQ0daYo.js";import{S as se}from"./star-CTtPo3oO.js";import{B as ne}from"./bookmark-BmN0n8Vk.js";import{S as re}from"./share-K4DJra1W.js";import{F as A}from"./file-text-5VKQUqZL.js";import{M as ie}from"./music-CSAnkuZS.js";import{I as le}from"./image-CZ60qmxg.js";import{V as oe}from"./video-CoJv5ox7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEfJNQWM.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-pOJf8xUB.js";import"./index-GcyhyyiP.js";import"./index-C3wj8CDn.js";import"./index-BdQq_4o_.js";import"./index-DIJyo7W-.js";import"./index-BSAGdBuK.js";import"./index-Be4lY40e.js";import"./index-Dbl4WsRV.js";import"./index-CU3idAEx.js";import"./index-C1n60UVb.js";import"./index-DVbtCu8s.js";import"./index-Cmx14kdo.js";import"./index-CYpglPyl.js";import"./index-B7q1ca9r.js";import"./index-Dcg_vMHq.js";import"./index-8Pe_lZ4S.js";import"./index-pYNtdlrg.js";import"./index-6inhm2-S.js";import"./chevron-down-Bi9ZVt9_.js";import"./check-Cn6-5UBS.js";import"./chevron-up-Cg_HKjAY.js";function h({className:t,...s}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:v("mx-auto flex w-full justify-center",t),...s})}function x({className:t,...s}){return e.jsx("ul",{"data-slot":"pagination-content",className:v("flex flex-row items-center gap-1",t),...s})}function c({...t}){return e.jsx("li",{"data-slot":"pagination-item",...t})}function u({className:t,isActive:s,size:a="icon",...r}){return e.jsx("a",{"aria-current":s?"page":void 0,"data-slot":"pagination-link","data-active":s,className:v(W({variant:s?"outline":"ghost",size:a}),t),...r})}function P({className:t,...s}){return e.jsxs(u,{"aria-label":"Go to previous page",size:"default",className:v("gap-1 px-2.5 sm:pl-2.5",t),...s,children:[e.jsx(B,{}),e.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function f({className:t,...s}){return e.jsxs(u,{"aria-label":"Go to next page",size:"default",className:v("gap-1 px-2.5 sm:pr-2.5",t),...s,children:[e.jsx("span",{className:"hidden sm:block",children:"Next"}),e.jsx(_,{})]})}function L({className:t,...s}){return e.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:v("flex size-9 items-center justify-center",t),...s,children:[e.jsx(F,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More pages"})]})}h.__docgenInfo={description:"",methods:[],displayName:"Pagination"};x.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};u.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};P.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};f.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};L.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const nt={title:"UI/Contents/Pagination",component:h,parameters:{layout:"centered",docs:{description:{component:"페이지 번호를 표시하고 탐색할 수 있는 페이지네이션 컴포넌트입니다. 대량의 데이터를 페이지별로 나누어 표시할 때 사용합니다."}}},tags:["autodocs"],argTypes:{}},j={render:()=>{const[t,s]=p.useState(1),a=10;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"기본 페이지네이션"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["현재 페이지: ",t," / ",a]})]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:r=>{r.preventDefault(),t>1&&s(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),[...Array(Math.min(5,a))].map((r,n)=>{const l=n+1;return e.jsx(c,{children:e.jsx(u,{href:"#",onClick:i=>{i.preventDefault(),s(l)},isActive:t===l,children:l})},l)}),e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(L,{})}),e.jsx(c,{children:e.jsx(u,{href:"#",onClick:r=>{r.preventDefault(),s(a)},children:a})})]}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:r=>{r.preventDefault(),t<a&&s(t+1)},className:t===a?"pointer-events-none opacity-50":""})})]})})]})}},C={render:()=>{const[t,s]=p.useState(5),a=20,r=()=>{const l=[],i=[];for(let g=Math.max(2,t-2);g<=Math.min(a-1,t+2);g++)l.push(g);return t-2>2?i.push(1,"..."):i.push(1),i.push(...l),t+2<a-1?i.push("...",a):i.push(a),i};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"생략 표시가 있는 페이지네이션"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["현재 페이지: ",t," / ",a]})]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:n=>{n.preventDefault(),t>1&&s(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),r().map((n,l)=>e.jsx(c,{children:n==="..."?e.jsx(L,{}):e.jsx(u,{href:"#",onClick:i=>{i.preventDefault(),s(n)},isActive:t===n,children:n})},l)),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:n=>{n.preventDefault(),t<a&&s(t+1)},className:t===a?"pointer-events-none opacity-50":""})})]})})]})}},y={render:()=>{const[t,s]=p.useState(8),a=15;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"처음/마지막 버튼이 있는 페이지네이션"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["현재 페이지: ",t," / ",a]})]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsxs(d,{variant:"outline",size:"sm",onClick:()=>s(1),disabled:t===1,className:"h-9 px-3",children:[e.jsx(K,{className:"h-4 w-4 mr-1"}),"처음"]})}),e.jsx(c,{children:e.jsx(P,{href:"#",onClick:r=>{r.preventDefault(),t>1&&s(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),[...Array(Math.min(5,a))].map((r,n)=>{const i=Math.max(1,t-2)+n;return i>a?null:e.jsx(c,{children:e.jsx(u,{href:"#",onClick:g=>{g.preventDefault(),s(i)},isActive:t===i,children:i})},i)}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:r=>{r.preventDefault(),t<a&&s(t+1)},className:t===a?"pointer-events-none opacity-50":""})}),e.jsx(c,{children:e.jsxs(d,{variant:"outline",size:"sm",onClick:()=>s(a),disabled:t===a,className:"h-9 px-3",children:["마지막",e.jsx(Q,{className:"h-4 w-4 ml-1"})]})})]})})]})}},b={render:()=>{const[t,s]=p.useState(1),[a,r]=p.useState(10),n=247,l=Math.ceil(n/a),i=(t-1)*a+1,g=Math.min(t*a,n),S=[{id:1,name:"김철수",email:"kim@example.com",role:"관리자"},{id:2,name:"이영희",email:"lee@example.com",role:"편집자"},{id:3,name:"박민수",email:"park@example.com",role:"사용자"},{id:4,name:"최지영",email:"choi@example.com",role:"사용자"},{id:5,name:"정민호",email:"jung@example.com",role:"편집자"}];return e.jsxs("div",{className:"w-full max-w-4xl space-y-4",children:[e.jsxs(z,{children:[e.jsxs(R,{children:[e.jsxs(T,{className:"flex items-center gap-2",children:[e.jsx(Y,{className:"h-5 w-5"}),"사용자 목록"]}),e.jsxs(E,{children:["전체 ",n,"명의 사용자 중 ",i,"-",g,"번째 표시"]})]}),e.jsx(V,{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b",children:[e.jsx("th",{className:"text-left p-2",children:"이름"}),e.jsx("th",{className:"text-left p-2",children:"이메일"}),e.jsx("th",{className:"text-left p-2",children:"역할"}),e.jsx("th",{className:"text-left p-2",children:"액션"})]})}),e.jsx("tbody",{children:S.map(o=>e.jsxs("tr",{className:"border-b",children:[e.jsx("td",{className:"p-2 font-medium",children:o.name}),e.jsx("td",{className:"p-2 text-muted-foreground",children:o.email}),e.jsx("td",{className:"p-2",children:e.jsx(J,{variant:o.role==="관리자"?"default":"secondary",children:o.role})}),e.jsx("td",{className:"p-2",children:e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(Z,{className:"h-4 w-4"})})})]},o.id))})]})})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(H,{htmlFor:"itemsPerPage",children:"페이지당 항목:"}),e.jsxs(G,{value:a.toString(),onValueChange:o=>{r(Number(o)),s(1)},children:[e.jsx(q,{className:"w-20",id:"itemsPerPage",children:e.jsx(X,{})}),e.jsxs(O,{children:[e.jsx(N,{value:"5",children:"5"}),e.jsx(N,{value:"10",children:"10"}),e.jsx(N,{value:"20",children:"20"}),e.jsx(N,{value:"50",children:"50"})]})]})]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:o=>{o.preventDefault(),t>1&&s(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),[...Array(Math.min(5,l))].map((o,D)=>{const m=Math.max(1,t-2)+D;return m>l?null:e.jsx(c,{children:e.jsx(u,{href:"#",onClick:M=>{M.preventDefault(),s(m)},isActive:t===m,children:m})},m)}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:o=>{o.preventDefault(),t<l&&s(t+1)},className:t===l?"pointer-events-none opacity-50":""})})]})})]})]})}},I={render:()=>{const[t,s]=p.useState(1),[a,r]=p.useState("grid"),n=1247,i=Math.ceil(n/12),g=[{id:1,title:"React 개발 가이드",type:"document",author:"김개발",date:"2024-01-15"},{id:2,title:"TypeScript 시작하기",type:"video",author:"이코딩",date:"2024-01-14"},{id:3,title:"UI/UX 디자인 원칙",type:"image",author:"박디자인",date:"2024-01-13"},{id:4,title:"Node.js 백엔드 개발",type:"document",author:"최백엔드",date:"2024-01-12"}],S=o=>{switch(o){case"document":return e.jsx(A,{className:"h-4 w-4"});case"video":return e.jsx(oe,{className:"h-4 w-4"});case"image":return e.jsx(le,{className:"h-4 w-4"});case"audio":return e.jsx(ie,{className:"h-4 w-4"});default:return e.jsx(A,{className:"h-4 w-4"})}};return e.jsxs("div",{className:"w-full max-w-4xl space-y-4",children:[e.jsxs(z,{children:[e.jsx(R,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs(T,{className:"flex items-center gap-2",children:[e.jsx(ee,{className:"h-5 w-5"}),"검색 결과"]}),e.jsxs(E,{children:['"','"React 개발"','" 검색어로 ',n.toLocaleString(),"개 결과 발견"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{variant:a==="grid"?"default":"outline",size:"sm",onClick:()=>r("grid"),children:e.jsx(te,{className:"h-4 w-4"})}),e.jsx(d,{variant:a==="list"?"default":"outline",size:"sm",onClick:()=>r("list"),children:e.jsx(ae,{className:"h-4 w-4"})})]})]})}),e.jsx(V,{children:e.jsx("div",{className:a==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4":"space-y-3",children:g.map(o=>e.jsxs("div",{className:`p-4 border rounded-lg hover:bg-accent ${a==="list"?"flex items-center gap-4":""}`,children:[e.jsxs("div",{className:`flex items-center gap-2 ${a==="list"?"flex-1":"mb-2"}`,children:[S(o.type),e.jsx("h4",{className:"font-medium",children:o.title})]}),e.jsxs("div",{className:`text-sm text-muted-foreground ${a==="list"?"flex items-center gap-4":"space-y-1"}`,children:[e.jsxs("div",{children:["작성자: ",o.author]}),e.jsx("div",{children:o.date})]}),a==="grid"&&e.jsxs("div",{className:"flex gap-1 mt-2",children:[e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(se,{className:"h-4 w-4"})}),e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(ne,{className:"h-4 w-4"})}),e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(re,{className:"h-4 w-4"})})]})]},o.id))})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:["페이지 ",t," / ",i," (전체 ",n.toLocaleString(),"개 결과)"]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:o=>{o.preventDefault(),t>1&&s(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),[...Array(Math.min(7,i))].map((o,D)=>{const m=Math.max(1,t-3)+D;return m>i?null:e.jsx(c,{children:e.jsx(u,{href:"#",onClick:M=>{M.preventDefault(),s(m)},isActive:t===m,children:m})},m)}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:o=>{o.preventDefault(),t<i&&s(t+1)},className:t===i?"pointer-events-none opacity-50":""})})]})})]})]})}},k={render:()=>{const[t,s]=p.useState(3),a=12;return e.jsxs("div",{className:"max-w-sm space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"모바일 페이지네이션"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"작은 화면에 최적화된 디자인"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(d,{variant:"outline",size:"sm",onClick:()=>t>1&&s(t-1),disabled:t===1,children:[e.jsx(B,{className:"h-4 w-4 mr-1"}),"이전"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(U,{type:"number",value:t,onChange:r=>{const n=parseInt(r.target.value);n>=1&&n<=a&&s(n)},className:"w-16 text-center",min:1,max:a}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:["/ ",a]})]}),e.jsxs(d,{variant:"outline",size:"sm",onClick:()=>t<a&&s(t+1),disabled:t===a,children:["다음",e.jsx(_,{className:"h-4 w-4 ml-1"})]})]}),e.jsx("div",{className:"flex justify-center gap-1",children:[...Array(a)].map((r,n)=>e.jsx("button",{onClick:()=>s(n+1),className:`w-2 h-2 rounded-full transition-colors ${t===n+1?"bg-primary":"bg-muted hover:bg-muted-foreground/20"}`,"aria-label":`페이지 ${n+1}으로 이동`},n+1))}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"진행률"}),e.jsxs("span",{children:[Math.round(t/a*100),"%"]})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-1",children:e.jsx("div",{className:"bg-primary h-1 rounded-full transition-all duration-300",style:{width:`${t/a*100}%`}})})]})]})]})}},w={render:()=>{const[t,s]=p.useState(3),a=8;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, 화살표 키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 페이지 상태 안내"}),e.jsx("li",{children:"• 포커스 관리 및 시각적 피드백"}),e.jsx("li",{children:"• 의미론적 HTML 구조"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 페이지네이션"}),e.jsxs("p",{className:"text-sm text-muted-foreground",id:"pagination-description",children:["현재 ",t,"페이지, 전체 ",a,"페이지 중"]})]}),e.jsx("nav",{"aria-label":"페이지 내비게이션",role:"navigation",children:e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:r=>{r.preventDefault(),t>1&&s(t-1)},className:t===1?"pointer-events-none opacity-50":"","aria-label":t===1?"이전 페이지 없음":"이전 페이지로 이동","aria-disabled":t===1})}),[...Array(a)].map((r,n)=>{const l=n+1;return e.jsx(c,{children:e.jsx(u,{href:"#",onClick:i=>{i.preventDefault(),s(l)},isActive:t===l,"aria-label":t===l?`현재 페이지, ${l}페이지`:`${l}페이지로 이동`,"aria-current":t===l?"page":void 0,children:l})},l)}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:r=>{r.preventDefault(),t<a&&s(t+1)},className:t===a?"pointer-events-none opacity-50":"","aria-label":t===a?"다음 페이지 없음":"다음 페이지로 이동","aria-disabled":t===a})})]})})}),e.jsx("div",{className:"text-center",children:e.jsxs("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:"text-sm text-muted-foreground",children:["페이지 ",t," of ",a," 표시 중"]})})]}),e.jsx("div",{className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab으로 버튼 이동, Enter/Space로 선택, 화살표 키로 빠른 이동"})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 페이지네이션 데모입니다."}}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    return <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">기본 페이지네이션</h3>
          <p className="text-sm text-muted-foreground">
            현재 페이지: {currentPage} / {totalPages}
          </p>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={e => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
            
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
            const pageNum = i + 1;
            return <PaginationItem key={pageNum}>
                  <PaginationLink href="#" onClick={e => {
                e.preventDefault();
                setCurrentPage(pageNum);
              }} isActive={currentPage === pageNum}>
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>;
          })}
            
            {totalPages > 5 && <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" onClick={e => {
                e.preventDefault();
                setCurrentPage(totalPages);
              }}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>}
            
            <PaginationItem>
              <PaginationNext href="#" onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;
    const getVisiblePages = () => {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];
      for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
        range.push(i);
      }
      if (currentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }
      rangeWithDots.push(...range);
      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push('...', totalPages);
      } else {
        rangeWithDots.push(totalPages);
      }
      return rangeWithDots;
    };
    return <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">생략 표시가 있는 페이지네이션</h3>
          <p className="text-sm text-muted-foreground">
            현재 페이지: {currentPage} / {totalPages}
          </p>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={e => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
            
            {getVisiblePages().map((page, index) => <PaginationItem key={index}>
                {page === '...' ? <PaginationEllipsis /> : <PaginationLink href="#" onClick={e => {
              e.preventDefault();
              setCurrentPage(page as number);
            }} isActive={currentPage === page}>
                    {page}
                  </PaginationLink>}
              </PaginationItem>)}
            
            <PaginationItem>
              <PaginationNext href="#" onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(8);
    const totalPages = 15;
    return <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">처음/마지막 버튼이 있는 페이지네이션</h3>
          <p className="text-sm text-muted-foreground">
            현재 페이지: {currentPage} / {totalPages}
          </p>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="h-9 px-3">
                <ChevronsLeft className="h-4 w-4 mr-1" />
                처음
              </Button>
            </PaginationItem>
            
            <PaginationItem>
              <PaginationPrevious href="#" onClick={e => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
            
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
            const startPage = Math.max(1, currentPage - 2);
            const pageNum = startPage + i;
            if (pageNum > totalPages) return null;
            return <PaginationItem key={pageNum}>
                  <PaginationLink href="#" onClick={e => {
                e.preventDefault();
                setCurrentPage(pageNum);
              }} isActive={currentPage === pageNum}>
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>;
          })}
            
            <PaginationItem>
              <PaginationNext href="#" onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
            </PaginationItem>
            
            <PaginationItem>
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="h-9 px-3">
                마지막
                <ChevronsRight className="h-4 w-4 ml-1" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalItems = 247;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
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
    }, {
      id: 4,
      name: '최지영',
      email: 'choi@example.com',
      role: '사용자'
    }, {
      id: 5,
      name: '정민호',
      email: 'jung@example.com',
      role: '편집자'
    }];
    return <div className="w-full max-w-4xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              사용자 목록
            </CardTitle>
            <CardDescription>
              전체 {totalItems}명의 사용자 중 {startItem}-{endItem}번째 표시
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">이름</th>
                    <th className="text-left p-2">이메일</th>
                    <th className="text-left p-2">역할</th>
                    <th className="text-left p-2">액션</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => <tr key={user.id} className="border-b">
                      <td className="p-2 font-medium">{user.name}</td>
                      <td className="p-2 text-muted-foreground">{user.email}</td>
                      <td className="p-2">
                        <Badge variant={user.role === '관리자' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="p-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label htmlFor="itemsPerPage">페이지당 항목:</Label>
            <Select value={itemsPerPage.toString()} onValueChange={value => {
            setItemsPerPage(Number(value));
            setCurrentPage(1);
          }}>
              <SelectTrigger className="w-20" id="itemsPerPage">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={e => {
                e.preventDefault();
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
              </PaginationItem>
              
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const startPage = Math.max(1, currentPage - 2);
              const pageNum = startPage + i;
              if (pageNum > totalPages) return null;
              return <PaginationItem key={pageNum}>
                    <PaginationLink href="#" onClick={e => {
                  e.preventDefault();
                  setCurrentPage(pageNum);
                }} isActive={currentPage === pageNum}>
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>;
            })}
              
              <PaginationItem>
                <PaginationNext href="#" onClick={e => {
                e.preventDefault();
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const totalResults = 1247;
    const resultsPerPage = 12;
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    const searchResults = [{
      id: 1,
      title: 'React 개발 가이드',
      type: 'document',
      author: '김개발',
      date: '2024-01-15'
    }, {
      id: 2,
      title: 'TypeScript 시작하기',
      type: 'video',
      author: '이코딩',
      date: '2024-01-14'
    }, {
      id: 3,
      title: 'UI/UX 디자인 원칙',
      type: 'image',
      author: '박디자인',
      date: '2024-01-13'
    }, {
      id: 4,
      title: 'Node.js 백엔드 개발',
      type: 'document',
      author: '최백엔드',
      date: '2024-01-12'
    }];
    const getResultIcon = (type: string) => {
      switch (type) {
        case 'document':
          return <FileText className="h-4 w-4" />;
        case 'video':
          return <Video className="h-4 w-4" />;
        case 'image':
          return <Image className="h-4 w-4" />;
        case 'audio':
          return <Music className="h-4 w-4" />;
        default:
          return <FileText className="h-4 w-4" />;
      }
    };
    return <div className="w-full max-w-4xl space-y-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  검색 결과
                </CardTitle>
                <CardDescription>
                  "{'"React 개발"'}" 검색어로 {totalResults.toLocaleString()}개 결과 발견
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('grid')}>
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('list')}>
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
              {searchResults.map(result => <div key={result.id} className={\`p-4 border rounded-lg hover:bg-accent \${viewMode === 'list' ? 'flex items-center gap-4' : ''}\`}>
                  <div className={\`flex items-center gap-2 \${viewMode === 'list' ? 'flex-1' : 'mb-2'}\`}>
                    {getResultIcon(result.type)}
                    <h4 className="font-medium">{result.title}</h4>
                  </div>
                  <div className={\`text-sm text-muted-foreground \${viewMode === 'list' ? 'flex items-center gap-4' : 'space-y-1'}\`}>
                    <div>작성자: {result.author}</div>
                    <div>{result.date}</div>
                  </div>
                  {viewMode === 'grid' && <div className="flex gap-1 mt-2">
                      <Button variant="ghost" size="sm">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>}
                </div>)}
            </div>
          </CardContent>
        </Card>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            페이지 {currentPage} / {totalPages} (전체 {totalResults.toLocaleString()}개 결과)
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={e => {
                e.preventDefault();
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
              </PaginationItem>
              
              {[...Array(Math.min(7, totalPages))].map((_, i) => {
              const startPage = Math.max(1, currentPage - 3);
              const pageNum = startPage + i;
              if (pageNum > totalPages) return null;
              return <PaginationItem key={pageNum}>
                    <PaginationLink href="#" onClick={e => {
                  e.preventDefault();
                  setCurrentPage(pageNum);
                }} isActive={currentPage === pageNum}>
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>;
            })}
              
              <PaginationItem>
                <PaginationNext href="#" onClick={e => {
                e.preventDefault();
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 12;
    return <div className="max-w-sm space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">모바일 페이지네이션</h3>
          <p className="text-sm text-muted-foreground">
            작은 화면에 최적화된 디자인
          </p>
        </div>
        
        <div className="space-y-4">
          {/* 간단한 이전/다음 버튼 */}
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              이전
            </Button>
            
            <div className="flex items-center gap-2">
              <Input type="number" value={currentPage} onChange={e => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            }} className="w-16 text-center" min={1} max={totalPages} />
              <span className="text-sm text-muted-foreground">/ {totalPages}</span>
            </div>
            
            <Button variant="outline" size="sm" onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
              다음
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          {/* 점 형태 인디케이터 */}
          <div className="flex justify-center gap-1">
            {[...Array(totalPages)].map((_, i) => <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={\`w-2 h-2 rounded-full transition-colors \${currentPage === i + 1 ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/20'}\`} aria-label={\`페이지 \${i + 1}으로 이동\`} />)}
          </div>
          
          {/* 진행률 바 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>진행률</span>
              <span>{Math.round(currentPage / totalPages * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div className="bg-primary h-1 rounded-full transition-all duration-300" style={{
              width: \`\${currentPage / totalPages * 100}%\`
            }} />
            </div>
          </div>
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 8;
    return <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, 화살표 키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 페이지 상태 안내</li>
            <li>• 포커스 관리 및 시각적 피드백</li>
            <li>• 의미론적 HTML 구조</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">접근성 페이지네이션</h3>
            <p className="text-sm text-muted-foreground" id="pagination-description">
              현재 {currentPage}페이지, 전체 {totalPages}페이지 중
            </p>
          </div>
          
          <nav aria-label="페이지 내비게이션" role="navigation">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" onClick={e => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} aria-label={currentPage === 1 ? '이전 페이지 없음' : '이전 페이지로 이동'} aria-disabled={currentPage === 1} />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return <PaginationItem key={pageNum}>
                      <PaginationLink href="#" onClick={e => {
                    e.preventDefault();
                    setCurrentPage(pageNum);
                  }} isActive={currentPage === pageNum} aria-label={currentPage === pageNum ? \`현재 페이지, \${pageNum}페이지\` : \`\${pageNum}페이지로 이동\`} aria-current={currentPage === pageNum ? 'page' : undefined}>
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>;
              })}
                
                <PaginationItem>
                  <PaginationNext href="#" onClick={e => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} aria-label={currentPage === totalPages ? '다음 페이지 없음' : '다음 페이지로 이동'} aria-disabled={currentPage === totalPages} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </nav>
          
          <div className="text-center">
            <div role="status" aria-live="polite" aria-atomic="true" className="text-sm text-muted-foreground">
              페이지 {currentPage} of {totalPages} 표시 중
            </div>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab으로 버튼 이동, Enter/Space로 선택, 화살표 키로 빠른 이동
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 페이지네이션 데모입니다.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};const rt=["Default","WithEllipsis","WithFirstLast","TablePagination","SearchResults","MobilePagination","AccessibilityDemo"];export{w as AccessibilityDemo,j as Default,k as MobilePagination,I as SearchResults,b as TablePagination,C as WithEllipsis,y as WithFirstLast,rt as __namedExportsOrder,nt as default};
