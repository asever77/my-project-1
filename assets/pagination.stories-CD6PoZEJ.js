import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{r as p}from"./iframe-BdMZbwUm.js";import{c as v}from"./utils-CBfrqCZ4.js";import{b as W,B as d}from"./button-bDZQ1CGr.js";import{C as A}from"./chevron-left-a2iwvJ6v.js";import{E as F}from"./ellipsis-fcB5j34k.js";import{C as _}from"./chevron-right-CBiCTAgF.js";import{I as U}from"./input-BhwUvA0w.js";import{L as H}from"./label-DOMLoIND.js";import{S as G,a as q,b as X,c as J,d as N}from"./select-C0WE27JW.js";import{C as z,a as R,b as T,c as E,d as V}from"./card-BgCPKrWA.js";import{B as K}from"./badge-B3XW2gOL.js";import{C as O,a as Q}from"./chevrons-right-BvD6eHQm.js";import{U as Y}from"./users-D0OQj7Zx.js";import{E as Z}from"./eye-Ch3FN2Wj.js";import{S as ee}from"./search-BLIwCZDF.js";import{G as te}from"./grid-3x3-CO9M3W2-.js";import{L as ae}from"./list-Dn1zjlCV.js";import{S as re}from"./star-C0TOQxsF.js";import{B as se}from"./bookmark-BY9QLeCX.js";import{S as ne}from"./share-CKmH9Oip.js";import{F as B}from"./file-text-DmRPTJWd.js";import{M as ie}from"./music-DBENafpc.js";import{I as le}from"./image-BUKezXs8.js";import{V as oe}from"./video-CwrjoPPM.js";import"./index-COOYaFQ0.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-CdHLrrBb.js";import"./index-BMTS4V62.js";import"./index-RnXzWidx.js";import"./index-BdQq_4o_.js";import"./index-CQPQ-BqZ.js";import"./index-RuX4kDbx.js";import"./index-B_g0QmXh.js";import"./index-CvWdknzs.js";import"./index-Cu_wm-Vw.js";import"./index-CdFegrUu.js";import"./index-DYSxFDR_.js";import"./index-DI80qA_d.js";import"./index-DcXtInu4.js";import"./index-DEdBc4IE.js";import"./index-BGyhPWDZ.js";import"./index-BbsuTJMv.js";import"./index-B74dw3ct.js";import"./index-kr_1ID-s.js";import"./chevron-down-ChPBX6FW.js";import"./check-KbtGvtZf.js";import"./chevron-up-D29sKx8b.js";function h({className:t,...r}){return e.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:v("mx-auto flex w-full justify-center",t),...r})}function x({className:t,...r}){return e.jsx("ul",{"data-slot":"pagination-content",className:v("flex flex-row items-center gap-1",t),...r})}function c({...t}){return e.jsx("li",{"data-slot":"pagination-item",...t})}function u({className:t,isActive:r,size:a="icon",...n}){return e.jsx("a",{"aria-current":r?"page":void 0,"data-slot":"pagination-link","data-active":r,className:v(W({variant:r?"outline":"ghost",size:a}),t),...n})}function P({className:t,...r}){return e.jsxs(u,{"aria-label":"Go to previous page",size:"default",className:v("gap-1 px-2.5 sm:pl-2.5",t),...r,children:[e.jsx(A,{}),e.jsx("span",{className:"hidden sm:block",children:"Previous"})]})}function f({className:t,...r}){return e.jsxs(u,{"aria-label":"Go to next page",size:"default",className:v("gap-1 px-2.5 sm:pr-2.5",t),...r,children:[e.jsx("span",{className:"hidden sm:block",children:"Next"}),e.jsx(_,{})]})}function L({className:t,...r}){return e.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:v("flex size-9 items-center justify-center",t),...r,children:[e.jsx(F,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More pages"})]})}h.__docgenInfo={description:"",methods:[],displayName:"Pagination"};x.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};u.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};P.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};f.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};L.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const rt={title:"UI/Contents/Pagination",component:h,parameters:{layout:"centered",docs:{description:{component:"페이지 번호를 표시하고 탐색할 수 있는 페이지네이션 컴포넌트입니다. 대량의 데이터를 페이지별로 나누어 표시할 때 사용합니다."}}},tags:["autodocs"],argTypes:{}},j={render:()=>{const[t,r]=p.useState(1),a=10;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"기본 페이지네이션"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["현재 페이지: ",t," / ",a]})]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:n=>{n.preventDefault(),t>1&&r(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),[...Array(Math.min(5,a))].map((n,s)=>{const l=s+1;return e.jsx(c,{children:e.jsx(u,{href:"#",onClick:i=>{i.preventDefault(),r(l)},isActive:t===l,children:l})},l)}),e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(L,{})}),e.jsx(c,{children:e.jsx(u,{href:"#",onClick:n=>{n.preventDefault(),r(a)},children:a})})]}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:n=>{n.preventDefault(),t<a&&r(t+1)},className:t===a?"pointer-events-none opacity-50":""})})]})})]})}},C={render:()=>{const[t,r]=p.useState(5),a=20,n=()=>{const l=[],i=[];for(let g=Math.max(2,t-2);g<=Math.min(a-1,t+2);g++)l.push(g);return t-2>2?i.push(1,"..."):i.push(1),i.push(...l),t+2<a-1?i.push("...",a):i.push(a),i};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"생략 표시가 있는 페이지네이션"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["현재 페이지: ",t," / ",a]})]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:s=>{s.preventDefault(),t>1&&r(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),n().map((s,l)=>e.jsx(c,{children:s==="..."?e.jsx(L,{}):e.jsx(u,{href:"#",onClick:i=>{i.preventDefault(),r(s)},isActive:t===s,children:s})},l)),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:s=>{s.preventDefault(),t<a&&r(t+1)},className:t===a?"pointer-events-none opacity-50":""})})]})})]})}},y={render:()=>{const[t,r]=p.useState(8),a=15;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"처음/마지막 버튼이 있는 페이지네이션"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["현재 페이지: ",t," / ",a]})]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsxs(d,{variant:"outline",size:"sm",onClick:()=>r(1),disabled:t===1,className:"h-9 px-3",children:[e.jsx(O,{className:"h-4 w-4 mr-1"}),"처음"]})}),e.jsx(c,{children:e.jsx(P,{href:"#",onClick:n=>{n.preventDefault(),t>1&&r(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),[...Array(Math.min(5,a))].map((n,s)=>{const i=Math.max(1,t-2)+s;return i>a?null:e.jsx(c,{children:e.jsx(u,{href:"#",onClick:g=>{g.preventDefault(),r(i)},isActive:t===i,children:i})},i)}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:n=>{n.preventDefault(),t<a&&r(t+1)},className:t===a?"pointer-events-none opacity-50":""})}),e.jsx(c,{children:e.jsxs(d,{variant:"outline",size:"sm",onClick:()=>r(a),disabled:t===a,className:"h-9 px-3",children:["마지막",e.jsx(Q,{className:"h-4 w-4 ml-1"})]})})]})})]})}},b={render:()=>{const[t,r]=p.useState(1),[a,n]=p.useState(10),s=247,l=Math.ceil(s/a),i=(t-1)*a+1,g=Math.min(t*a,s),S=[{id:1,name:"김철수",email:"kim@example.com",role:"관리자"},{id:2,name:"이영희",email:"lee@example.com",role:"편집자"},{id:3,name:"박민수",email:"park@example.com",role:"사용자"},{id:4,name:"최지영",email:"choi@example.com",role:"사용자"},{id:5,name:"정민호",email:"jung@example.com",role:"편집자"}];return e.jsxs("div",{className:"w-full max-w-4xl space-y-4",children:[e.jsxs(z,{children:[e.jsxs(R,{children:[e.jsxs(T,{className:"flex items-center gap-2",children:[e.jsx(Y,{className:"h-5 w-5"}),"사용자 목록"]}),e.jsxs(E,{children:["전체 ",s,"명의 사용자 중 ",i,"-",g,"번째 표시"]})]}),e.jsx(V,{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b",children:[e.jsx("th",{className:"text-left p-2",children:"이름"}),e.jsx("th",{className:"text-left p-2",children:"이메일"}),e.jsx("th",{className:"text-left p-2",children:"역할"}),e.jsx("th",{className:"text-left p-2",children:"액션"})]})}),e.jsx("tbody",{children:S.map(o=>e.jsxs("tr",{className:"border-b",children:[e.jsx("td",{className:"p-2 font-medium",children:o.name}),e.jsx("td",{className:"p-2 text-muted-foreground",children:o.email}),e.jsx("td",{className:"p-2",children:e.jsx(K,{variant:o.role==="관리자"?"default":"secondary",children:o.role})}),e.jsx("td",{className:"p-2",children:e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(Z,{className:"h-4 w-4"})})})]},o.id))})]})})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(H,{htmlFor:"itemsPerPage",children:"페이지당 항목:"}),e.jsxs(G,{value:a.toString(),onValueChange:o=>{n(Number(o)),r(1)},children:[e.jsx(q,{className:"w-20",id:"itemsPerPage",children:e.jsx(X,{})}),e.jsxs(J,{children:[e.jsx(N,{value:"5",children:"5"}),e.jsx(N,{value:"10",children:"10"}),e.jsx(N,{value:"20",children:"20"}),e.jsx(N,{value:"50",children:"50"})]})]})]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:o=>{o.preventDefault(),t>1&&r(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),[...Array(Math.min(5,l))].map((o,D)=>{const m=Math.max(1,t-2)+D;return m>l?null:e.jsx(c,{children:e.jsx(u,{href:"#",onClick:M=>{M.preventDefault(),r(m)},isActive:t===m,children:m})},m)}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:o=>{o.preventDefault(),t<l&&r(t+1)},className:t===l?"pointer-events-none opacity-50":""})})]})})]})]})}},I={render:()=>{const[t,r]=p.useState(1),[a,n]=p.useState("grid"),s=1247,i=Math.ceil(s/12),g=[{id:1,title:"React 개발 가이드",type:"document",author:"김개발",date:"2024-01-15"},{id:2,title:"TypeScript 시작하기",type:"video",author:"이코딩",date:"2024-01-14"},{id:3,title:"UI/UX 디자인 원칙",type:"image",author:"박디자인",date:"2024-01-13"},{id:4,title:"Node.js 백엔드 개발",type:"document",author:"최백엔드",date:"2024-01-12"}],S=o=>{switch(o){case"document":return e.jsx(B,{className:"h-4 w-4"});case"video":return e.jsx(oe,{className:"h-4 w-4"});case"image":return e.jsx(le,{className:"h-4 w-4"});case"audio":return e.jsx(ie,{className:"h-4 w-4"});default:return e.jsx(B,{className:"h-4 w-4"})}};return e.jsxs("div",{className:"w-full max-w-4xl space-y-4",children:[e.jsxs(z,{children:[e.jsx(R,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs(T,{className:"flex items-center gap-2",children:[e.jsx(ee,{className:"h-5 w-5"}),"검색 결과"]}),e.jsxs(E,{children:['"','"React 개발"','" 검색어로 ',s.toLocaleString(),"개 결과 발견"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{variant:a==="grid"?"default":"outline",size:"sm",onClick:()=>n("grid"),children:e.jsx(te,{className:"h-4 w-4"})}),e.jsx(d,{variant:a==="list"?"default":"outline",size:"sm",onClick:()=>n("list"),children:e.jsx(ae,{className:"h-4 w-4"})})]})]})}),e.jsx(V,{children:e.jsx("div",{className:a==="grid"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4":"space-y-3",children:g.map(o=>e.jsxs("div",{className:`p-4 border rounded-lg hover:bg-accent ${a==="list"?"flex items-center gap-4":""}`,children:[e.jsxs("div",{className:`flex items-center gap-2 ${a==="list"?"flex-1":"mb-2"}`,children:[S(o.type),e.jsx("h4",{className:"font-medium",children:o.title})]}),e.jsxs("div",{className:`text-sm text-muted-foreground ${a==="list"?"flex items-center gap-4":"space-y-1"}`,children:[e.jsxs("div",{children:["작성자: ",o.author]}),e.jsx("div",{children:o.date})]}),a==="grid"&&e.jsxs("div",{className:"flex gap-1 mt-2",children:[e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(re,{className:"h-4 w-4"})}),e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(se,{className:"h-4 w-4"})}),e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(ne,{className:"h-4 w-4"})})]})]},o.id))})})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:["페이지 ",t," / ",i," (전체 ",s.toLocaleString(),"개 결과)"]}),e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:o=>{o.preventDefault(),t>1&&r(t-1)},className:t===1?"pointer-events-none opacity-50":""})}),[...Array(Math.min(7,i))].map((o,D)=>{const m=Math.max(1,t-3)+D;return m>i?null:e.jsx(c,{children:e.jsx(u,{href:"#",onClick:M=>{M.preventDefault(),r(m)},isActive:t===m,children:m})},m)}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:o=>{o.preventDefault(),t<i&&r(t+1)},className:t===i?"pointer-events-none opacity-50":""})})]})})]})]})}},k={render:()=>{const[t,r]=p.useState(3),a=12;return e.jsxs("div",{className:"max-w-sm space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"모바일 페이지네이션"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"작은 화면에 최적화된 디자인"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(d,{variant:"outline",size:"sm",onClick:()=>t>1&&r(t-1),disabled:t===1,children:[e.jsx(A,{className:"h-4 w-4 mr-1"}),"이전"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(U,{type:"number",value:t,onChange:n=>{const s=parseInt(n.target.value);s>=1&&s<=a&&r(s)},className:"w-16 text-center",min:1,max:a}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:["/ ",a]})]}),e.jsxs(d,{variant:"outline",size:"sm",onClick:()=>t<a&&r(t+1),disabled:t===a,children:["다음",e.jsx(_,{className:"h-4 w-4 ml-1"})]})]}),e.jsx("div",{className:"flex justify-center gap-1",children:[...Array(a)].map((n,s)=>e.jsx("button",{onClick:()=>r(s+1),className:`w-2 h-2 rounded-full transition-colors ${t===s+1?"bg-primary":"bg-muted hover:bg-muted-foreground/20"}`,"aria-label":`페이지 ${s+1}으로 이동`},s+1))}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground",children:[e.jsx("span",{children:"진행률"}),e.jsxs("span",{children:[Math.round(t/a*100),"%"]})]}),e.jsx("div",{className:"w-full bg-muted rounded-full h-1",children:e.jsx("div",{className:"bg-primary h-1 rounded-full transition-all duration-300",style:{width:`${t/a*100}%`}})})]})]})]})}},w={render:()=>{const[t,r]=p.useState(3),a=8;return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, 화살표 키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 페이지 상태 안내"}),e.jsx("li",{children:"• 포커스 관리 및 시각적 피드백"}),e.jsx("li",{children:"• 의미론적 HTML 구조"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 페이지네이션"}),e.jsxs("p",{className:"text-sm text-muted-foreground",id:"pagination-description",children:["현재 ",t,"페이지, 전체 ",a,"페이지 중"]})]}),e.jsx("nav",{"aria-label":"페이지 내비게이션",role:"navigation",children:e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(P,{href:"#",onClick:n=>{n.preventDefault(),t>1&&r(t-1)},className:t===1?"pointer-events-none opacity-50":"","aria-label":t===1?"이전 페이지 없음":"이전 페이지로 이동","aria-disabled":t===1})}),[...Array(a)].map((n,s)=>{const l=s+1;return e.jsx(c,{children:e.jsx(u,{href:"#",onClick:i=>{i.preventDefault(),r(l)},isActive:t===l,"aria-label":t===l?`현재 페이지, ${l}페이지`:`${l}페이지로 이동`,"aria-current":t===l?"page":void 0,children:l})},l)}),e.jsx(c,{children:e.jsx(f,{href:"#",onClick:n=>{n.preventDefault(),t<a&&r(t+1)},className:t===a?"pointer-events-none opacity-50":"","aria-label":t===a?"다음 페이지 없음":"다음 페이지로 이동","aria-disabled":t===a})})]})})}),e.jsx("div",{className:"text-center",children:e.jsxs("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:"text-sm text-muted-foreground",children:["페이지 ",t," of ",a," 표시 중"]})})]}),e.jsx("div",{className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 팁: Tab으로 버튼 이동, Enter/Space로 선택, 화살표 키로 빠른 이동"})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 페이지네이션 데모입니다."}}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    return <div className="space-y-4">\r
        <div className="text-center space-y-2">\r
          <h3 className="text-lg font-semibold">기본 페이지네이션</h3>\r
          <p className="text-sm text-muted-foreground">\r
            현재 페이지: {currentPage} / {totalPages}\r
          </p>\r
        </div>\r
        \r
        <Pagination>\r
          <PaginationContent>\r
            <PaginationItem>\r
              <PaginationPrevious href="#" onClick={e => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />\r
            </PaginationItem>\r
            \r
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
            const pageNum = i + 1;
            return <PaginationItem key={pageNum}>\r
                  <PaginationLink href="#" onClick={e => {
                e.preventDefault();
                setCurrentPage(pageNum);
              }} isActive={currentPage === pageNum}>\r
                    {pageNum}\r
                  </PaginationLink>\r
                </PaginationItem>;
          })}\r
            \r
            {totalPages > 5 && <>\r
                <PaginationItem>\r
                  <PaginationEllipsis />\r
                </PaginationItem>\r
                <PaginationItem>\r
                  <PaginationLink href="#" onClick={e => {
                e.preventDefault();
                setCurrentPage(totalPages);
              }}>\r
                    {totalPages}\r
                  </PaginationLink>\r
                </PaginationItem>\r
              </>}\r
            \r
            <PaginationItem>\r
              <PaginationNext href="#" onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />\r
            </PaginationItem>\r
          </PaginationContent>\r
        </Pagination>\r
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
    return <div className="space-y-4">\r
        <div className="text-center space-y-2">\r
          <h3 className="text-lg font-semibold">생략 표시가 있는 페이지네이션</h3>\r
          <p className="text-sm text-muted-foreground">\r
            현재 페이지: {currentPage} / {totalPages}\r
          </p>\r
        </div>\r
        \r
        <Pagination>\r
          <PaginationContent>\r
            <PaginationItem>\r
              <PaginationPrevious href="#" onClick={e => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />\r
            </PaginationItem>\r
            \r
            {getVisiblePages().map((page, index) => <PaginationItem key={index}>\r
                {page === '...' ? <PaginationEllipsis /> : <PaginationLink href="#" onClick={e => {
              e.preventDefault();
              setCurrentPage(page as number);
            }} isActive={currentPage === page}>\r
                    {page}\r
                  </PaginationLink>}\r
              </PaginationItem>)}\r
            \r
            <PaginationItem>\r
              <PaginationNext href="#" onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />\r
            </PaginationItem>\r
          </PaginationContent>\r
        </Pagination>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(8);
    const totalPages = 15;
    return <div className="space-y-4">\r
        <div className="text-center space-y-2">\r
          <h3 className="text-lg font-semibold">처음/마지막 버튼이 있는 페이지네이션</h3>\r
          <p className="text-sm text-muted-foreground">\r
            현재 페이지: {currentPage} / {totalPages}\r
          </p>\r
        </div>\r
        \r
        <Pagination>\r
          <PaginationContent>\r
            <PaginationItem>\r
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="h-9 px-3">\r
                <ChevronsLeft className="h-4 w-4 mr-1" />\r
                처음\r
              </Button>\r
            </PaginationItem>\r
            \r
            <PaginationItem>\r
              <PaginationPrevious href="#" onClick={e => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />\r
            </PaginationItem>\r
            \r
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
            const startPage = Math.max(1, currentPage - 2);
            const pageNum = startPage + i;
            if (pageNum > totalPages) return null;
            return <PaginationItem key={pageNum}>\r
                  <PaginationLink href="#" onClick={e => {
                e.preventDefault();
                setCurrentPage(pageNum);
              }} isActive={currentPage === pageNum}>\r
                    {pageNum}\r
                  </PaginationLink>\r
                </PaginationItem>;
          })}\r
            \r
            <PaginationItem>\r
              <PaginationNext href="#" onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />\r
            </PaginationItem>\r
            \r
            <PaginationItem>\r
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="h-9 px-3">\r
                마지막\r
                <ChevronsRight className="h-4 w-4 ml-1" />\r
              </Button>\r
            </PaginationItem>\r
          </PaginationContent>\r
        </Pagination>\r
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
    return <div className="w-full max-w-4xl space-y-4">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Users className="h-5 w-5" />\r
              사용자 목록\r
            </CardTitle>\r
            <CardDescription>\r
              전체 {totalItems}명의 사용자 중 {startItem}-{endItem}번째 표시\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <div className="overflow-x-auto">\r
              <table className="w-full">\r
                <thead>\r
                  <tr className="border-b">\r
                    <th className="text-left p-2">이름</th>\r
                    <th className="text-left p-2">이메일</th>\r
                    <th className="text-left p-2">역할</th>\r
                    <th className="text-left p-2">액션</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  {users.map(user => <tr key={user.id} className="border-b">\r
                      <td className="p-2 font-medium">{user.name}</td>\r
                      <td className="p-2 text-muted-foreground">{user.email}</td>\r
                      <td className="p-2">\r
                        <Badge variant={user.role === '관리자' ? 'default' : 'secondary'}>\r
                          {user.role}\r
                        </Badge>\r
                      </td>\r
                      <td className="p-2">\r
                        <Button variant="ghost" size="sm">\r
                          <Eye className="h-4 w-4" />\r
                        </Button>\r
                      </td>\r
                    </tr>)}\r
                </tbody>\r
              </table>\r
            </div>\r
          </CardContent>\r
        </Card>\r
        \r
        <div className="flex items-center justify-between">\r
          <div className="flex items-center gap-2">\r
            <Label htmlFor="itemsPerPage">페이지당 항목:</Label>\r
            <Select value={itemsPerPage.toString()} onValueChange={value => {
            setItemsPerPage(Number(value));
            setCurrentPage(1);
          }}>\r
              <SelectTrigger className="w-20" id="itemsPerPage">\r
                <SelectValue />\r
              </SelectTrigger>\r
              <SelectContent>\r
                <SelectItem value="5">5</SelectItem>\r
                <SelectItem value="10">10</SelectItem>\r
                <SelectItem value="20">20</SelectItem>\r
                <SelectItem value="50">50</SelectItem>\r
              </SelectContent>\r
            </Select>\r
          </div>\r
          \r
          <Pagination>\r
            <PaginationContent>\r
              <PaginationItem>\r
                <PaginationPrevious href="#" onClick={e => {
                e.preventDefault();
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />\r
              </PaginationItem>\r
              \r
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const startPage = Math.max(1, currentPage - 2);
              const pageNum = startPage + i;
              if (pageNum > totalPages) return null;
              return <PaginationItem key={pageNum}>\r
                    <PaginationLink href="#" onClick={e => {
                  e.preventDefault();
                  setCurrentPage(pageNum);
                }} isActive={currentPage === pageNum}>\r
                      {pageNum}\r
                    </PaginationLink>\r
                  </PaginationItem>;
            })}\r
              \r
              <PaginationItem>\r
                <PaginationNext href="#" onClick={e => {
                e.preventDefault();
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />\r
              </PaginationItem>\r
            </PaginationContent>\r
          </Pagination>\r
        </div>\r
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
    return <div className="w-full max-w-4xl space-y-4">\r
        <Card>\r
          <CardHeader>\r
            <div className="flex items-center justify-between">\r
              <div>\r
                <CardTitle className="flex items-center gap-2">\r
                  <Search className="h-5 w-5" />\r
                  검색 결과\r
                </CardTitle>\r
                <CardDescription>\r
                  "{'"React 개발"'}" 검색어로 {totalResults.toLocaleString()}개 결과 발견\r
                </CardDescription>\r
              </div>\r
              <div className="flex items-center gap-2">\r
                <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('grid')}>\r
                  <Grid className="h-4 w-4" />\r
                </Button>\r
                <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="sm" onClick={() => setViewMode('list')}>\r
                  <List className="h-4 w-4" />\r
                </Button>\r
              </div>\r
            </div>\r
          </CardHeader>\r
          <CardContent>\r
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>\r
              {searchResults.map(result => <div key={result.id} className={\`p-4 border rounded-lg hover:bg-accent \${viewMode === 'list' ? 'flex items-center gap-4' : ''}\`}>\r
                  <div className={\`flex items-center gap-2 \${viewMode === 'list' ? 'flex-1' : 'mb-2'}\`}>\r
                    {getResultIcon(result.type)}\r
                    <h4 className="font-medium">{result.title}</h4>\r
                  </div>\r
                  <div className={\`text-sm text-muted-foreground \${viewMode === 'list' ? 'flex items-center gap-4' : 'space-y-1'}\`}>\r
                    <div>작성자: {result.author}</div>\r
                    <div>{result.date}</div>\r
                  </div>\r
                  {viewMode === 'grid' && <div className="flex gap-1 mt-2">\r
                      <Button variant="ghost" size="sm">\r
                        <Star className="h-4 w-4" />\r
                      </Button>\r
                      <Button variant="ghost" size="sm">\r
                        <Bookmark className="h-4 w-4" />\r
                      </Button>\r
                      <Button variant="ghost" size="sm">\r
                        <Share className="h-4 w-4" />\r
                      </Button>\r
                    </div>}\r
                </div>)}\r
            </div>\r
          </CardContent>\r
        </Card>\r
        \r
        <div className="flex items-center justify-between">\r
          <div className="text-sm text-muted-foreground">\r
            페이지 {currentPage} / {totalPages} (전체 {totalResults.toLocaleString()}개 결과)\r
          </div>\r
          \r
          <Pagination>\r
            <PaginationContent>\r
              <PaginationItem>\r
                <PaginationPrevious href="#" onClick={e => {
                e.preventDefault();
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />\r
              </PaginationItem>\r
              \r
              {[...Array(Math.min(7, totalPages))].map((_, i) => {
              const startPage = Math.max(1, currentPage - 3);
              const pageNum = startPage + i;
              if (pageNum > totalPages) return null;
              return <PaginationItem key={pageNum}>\r
                    <PaginationLink href="#" onClick={e => {
                  e.preventDefault();
                  setCurrentPage(pageNum);
                }} isActive={currentPage === pageNum}>\r
                      {pageNum}\r
                    </PaginationLink>\r
                  </PaginationItem>;
            })}\r
              \r
              <PaginationItem>\r
                <PaginationNext href="#" onClick={e => {
                e.preventDefault();
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />\r
              </PaginationItem>\r
            </PaginationContent>\r
          </Pagination>\r
        </div>\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 12;
    return <div className="max-w-sm space-y-4">\r
        <div className="text-center space-y-2">\r
          <h3 className="text-lg font-semibold">모바일 페이지네이션</h3>\r
          <p className="text-sm text-muted-foreground">\r
            작은 화면에 최적화된 디자인\r
          </p>\r
        </div>\r
        \r
        <div className="space-y-4">\r
          {/* 간단한 이전/다음 버튼 */}\r
          <div className="flex items-center justify-between">\r
            <Button variant="outline" size="sm" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>\r
              <ChevronLeft className="h-4 w-4 mr-1" />\r
              이전\r
            </Button>\r
            \r
            <div className="flex items-center gap-2">\r
              <Input type="number" value={currentPage} onChange={e => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            }} className="w-16 text-center" min={1} max={totalPages} />\r
              <span className="text-sm text-muted-foreground">/ {totalPages}</span>\r
            </div>\r
            \r
            <Button variant="outline" size="sm" onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>\r
              다음\r
              <ChevronRight className="h-4 w-4 ml-1" />\r
            </Button>\r
          </div>\r
          \r
          {/* 점 형태 인디케이터 */}\r
          <div className="flex justify-center gap-1">\r
            {[...Array(totalPages)].map((_, i) => <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={\`w-2 h-2 rounded-full transition-colors \${currentPage === i + 1 ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/20'}\`} aria-label={\`페이지 \${i + 1}으로 이동\`} />)}\r
          </div>\r
          \r
          {/* 진행률 바 */}\r
          <div className="space-y-2">\r
            <div className="flex justify-between text-xs text-muted-foreground">\r
              <span>진행률</span>\r
              <span>{Math.round(currentPage / totalPages * 100)}%</span>\r
            </div>\r
            <div className="w-full bg-muted rounded-full h-1">\r
              <div className="bg-primary h-1 rounded-full transition-all duration-300" style={{
              width: \`\${currentPage / totalPages * 100}%\`
            }} />\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 8;
    return <div className="space-y-6">\r
        <div className="p-4 border rounded-lg">\r
          <h3 className="font-semibold mb-2">접근성 기능</h3>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>• 키보드 내비게이션 지원 (Tab, Enter, 화살표 키)</li>\r
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>\r
            <li>• 페이지 상태 안내</li>\r
            <li>• 포커스 관리 및 시각적 피드백</li>\r
            <li>• 의미론적 HTML 구조</li>\r
          </ul>\r
        </div>\r
        \r
        <div className="space-y-4">\r
          <div className="text-center space-y-2">\r
            <h3 className="text-lg font-semibold">접근성 페이지네이션</h3>\r
            <p className="text-sm text-muted-foreground" id="pagination-description">\r
              현재 {currentPage}페이지, 전체 {totalPages}페이지 중\r
            </p>\r
          </div>\r
          \r
          <nav aria-label="페이지 내비게이션" role="navigation">\r
            <Pagination>\r
              <PaginationContent>\r
                <PaginationItem>\r
                  <PaginationPrevious href="#" onClick={e => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} aria-label={currentPage === 1 ? '이전 페이지 없음' : '이전 페이지로 이동'} aria-disabled={currentPage === 1} />\r
                </PaginationItem>\r
                \r
                {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return <PaginationItem key={pageNum}>\r
                      <PaginationLink href="#" onClick={e => {
                    e.preventDefault();
                    setCurrentPage(pageNum);
                  }} isActive={currentPage === pageNum} aria-label={currentPage === pageNum ? \`현재 페이지, \${pageNum}페이지\` : \`\${pageNum}페이지로 이동\`} aria-current={currentPage === pageNum ? 'page' : undefined}>\r
                        {pageNum}\r
                      </PaginationLink>\r
                    </PaginationItem>;
              })}\r
                \r
                <PaginationItem>\r
                  <PaginationNext href="#" onClick={e => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} aria-label={currentPage === totalPages ? '다음 페이지 없음' : '다음 페이지로 이동'} aria-disabled={currentPage === totalPages} />\r
                </PaginationItem>\r
              </PaginationContent>\r
            </Pagination>\r
          </nav>\r
          \r
          <div className="text-center">\r
            <div role="status" aria-live="polite" aria-atomic="true" className="text-sm text-muted-foreground">\r
              페이지 {currentPage} of {totalPages} 표시 중\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div className="text-xs text-muted-foreground p-2 bg-muted rounded">\r
          💡 팁: Tab으로 버튼 이동, Enter/Space로 선택, 화살표 키로 빠른 이동\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 페이지네이션 데모입니다.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};export{w as AccessibilityDemo,j as Default,k as MobilePagination,I as SearchResults,b as TablePagination,C as WithEllipsis,y as WithFirstLast,rt as default};
