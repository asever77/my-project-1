import{j as e}from"./jsx-runtime-8QxKK14C.js";import{r as p}from"./iframe-B2kX-glr.js";import{c as w}from"./utils-CBfrqCZ4.js";import{C as S,a as _,b as E,d as B,c as W}from"./card-B43RNsIB.js";import{B as m}from"./badge-DY8zw9xQ.js";import{B as u}from"./button-DOk-dAfs.js";import{I as X}from"./input-Bm4P0suo.js";import{L as I}from"./label-DrD2o6D-.js";import{C as V}from"./checkbox-Cj2SwY7n.js";import{D as q}from"./dollar-sign-DXvdU6yq.js";import{S as U}from"./star-D-5Q9gPC.js";import{S as G}from"./search-D0KfAlDe.js";import{E as $}from"./eye-DjKi02F_.js";import{S as O}from"./square-pen-Cvruuys9.js";import{E as J}from"./ellipsis-VI2XLw7r.js";import{D as K}from"./download-74Wi4HXs.js";import{M as Q}from"./mail-shDoExv7.js";import{T as Y}from"./trash-2-B-Q6ThV-.js";import{C as Z,a as ee}from"./chevrons-right-CiJjvMP3.js";import{C as ae}from"./chevron-left-9_cUP9ia.js";import{C as se}from"./chevron-right-Cup4OaID.js";import{C as M}from"./chevron-up-BBk1xZ5p.js";import{C as A}from"./chevron-down-VIR_i5RQ.js";import{A as H}from"./arrow-up-down-Dee53jhl.js";import{c as te}from"./createLucideIcon-DJ_N0P9W.js";import{T as le}from"./trending-up-CkOfstsC.js";import"./index-VzR2QM6L.js";import"./index-CdJFUDDL.js";import"./index-ByLravCQ.js";import"./index-D6OPU2eR.js";import"./index-CpNtCWq2.js";import"./index-BFMzdnQk.js";import"./index-bOdmmEfL.js";import"./index-dvieHUVH.js";import"./index-BQ-CSpto.js";import"./index-B8bM6_z3.js";import"./check-Dc5BYMD8.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],ne=te("trending-down",re);function T({className:a,...n}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:w("w-full caption-bottom text-sm",a),...n})})}function C({className:a,...n}){return e.jsx("thead",{"data-slot":"table-header",className:w("[&_tr]:border-b",a),...n})}function y({className:a,...n}){return e.jsx("tbody",{"data-slot":"table-body",className:w("[&_tr:last-child]:border-0",a),...n})}function g({className:a,...n}){return e.jsx("tr",{"data-slot":"table-row",className:w("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",a),...n})}function r({className:a,...n}){return e.jsx("th",{"data-slot":"table-head",className:w("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...n})}function t({className:a,...n}){return e.jsx("td",{"data-slot":"table-cell",className:w("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...n})}function L({className:a,...n}){return e.jsx("caption",{"data-slot":"table-caption",className:w("text-muted-foreground mt-4 text-sm",a),...n})}T.__docgenInfo={description:"",methods:[],displayName:"Table"};C.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};y.__docgenInfo={description:"",methods:[],displayName:"TableBody"};r.__docgenInfo={description:"",methods:[],displayName:"TableHead"};g.__docgenInfo={description:"",methods:[],displayName:"TableRow"};t.__docgenInfo={description:"",methods:[],displayName:"TableCell"};L.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const Oe={title:"UI/Base/Table",component:T,parameters:{layout:"padded",docs:{description:{component:"구조화된 데이터를 표시하고 정렬, 필터링, 페이지네이션 기능을 제공하는 테이블 컴포넌트입니다."}}},tags:["autodocs"]},k={render:()=>{const a=[{id:1,name:"홍길동",email:"hong@example.com",role:"관리자",status:"활성"},{id:2,name:"김영희",email:"kim@example.com",role:"사용자",status:"활성"},{id:3,name:"이철수",email:"lee@example.com",role:"편집자",status:"비활성"},{id:4,name:"박민수",email:"park@example.com",role:"사용자",status:"활성"},{id:5,name:"최지영",email:"choi@example.com",role:"관리자",status:"대기"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"기본 테이블"}),e.jsxs(T,{children:[e.jsxs(L,{children:["총 ",a.length,"명의 사용자가 등록되어 있습니다."]}),e.jsx(C,{children:e.jsxs(g,{children:[e.jsx(r,{children:"이름"}),e.jsx(r,{children:"이메일"}),e.jsx(r,{children:"역할"}),e.jsx(r,{children:"상태"})]})}),e.jsx(y,{children:a.map(n=>e.jsxs(g,{children:[e.jsx(t,{className:"font-medium",children:n.name}),e.jsx(t,{children:n.email}),e.jsx(t,{children:n.role}),e.jsx(t,{children:e.jsx(m,{variant:n.status==="활성"?"default":n.status==="대기"?"secondary":"outline",children:n.status})})]},n.id))})]})]})}},R={render:()=>{const[a,n]=p.useState(""),[d,j]=p.useState("asc"),o=[{id:1,name:"홍길동",department:"개발팀",salary:5500,experience:3,rating:4.8},{id:2,name:"김영희",department:"디자인팀",salary:4800,experience:2,rating:4.9},{id:3,name:"이철수",department:"마케팅팀",salary:4200,experience:5,rating:4.3},{id:4,name:"박민수",department:"개발팀",salary:6200,experience:7,rating:4.7},{id:5,name:"최지영",department:"기획팀",salary:5e3,experience:4,rating:4.6},{id:6,name:"정수현",department:"디자인팀",salary:5300,experience:6,rating:4.8}],h=c=>{a===c?j(d==="asc"?"desc":"asc"):(n(c),j("asc"))},b=p.useMemo(()=>a?[...o].sort((c,x)=>{const s=c[a],f=x[a];return d==="asc"?s>f?1:-1:s<f?1:-1}):o,[a,d]),l=({field:c,children:x})=>e.jsx(u,{variant:"ghost",size:"sm",className:"h-auto p-0 font-semibold",onClick:()=>h(c),children:e.jsxs("div",{className:"flex items-center gap-1",children:[x,a===c?d==="asc"?e.jsx(M,{className:"h-3 w-3"}):e.jsx(A,{className:"h-3 w-3"}):e.jsx(H,{className:"h-3 w-3"})]})});return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"정렬 가능한 테이블"}),e.jsxs(T,{children:[e.jsxs(L,{children:["클릭하여 열을 정렬할 수 있습니다.",a&&` 현재 ${a}로 ${d==="asc"?"오름차순":"내림차순"} 정렬됨`]}),e.jsx(C,{children:e.jsxs(g,{children:[e.jsx(r,{children:e.jsx(l,{field:"name",children:"이름"})}),e.jsx(r,{children:e.jsx(l,{field:"department",children:"부서"})}),e.jsx(r,{children:e.jsx(l,{field:"salary",children:"연봉"})}),e.jsx(r,{children:e.jsx(l,{field:"experience",children:"경력"})}),e.jsx(r,{children:e.jsx(l,{field:"rating",children:"평점"})})]})}),e.jsx(y,{children:b.map(c=>e.jsxs(g,{children:[e.jsx(t,{className:"font-medium",children:c.name}),e.jsx(t,{children:e.jsx(m,{variant:"outline",children:c.department})}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(q,{className:"h-3 w-3"}),c.salary.toLocaleString(),"만원"]})}),e.jsxs(t,{children:[c.experience,"년"]}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(U,{className:"h-3 w-3 fill-yellow-400 text-yellow-400"}),c.rating]})})]},c.id))})]})]})}},D={render:()=>{const[a,n]=p.useState(""),[d,j]=p.useState("all"),[o,h]=p.useState("all"),b=[{id:1,name:"iPhone 15 Pro",category:"전자제품",price:129e4,stock:25,status:"판매중"},{id:2,name:"갤럭시 S24",category:"전자제품",price:109e4,stock:15,status:"판매중"},{id:3,name:"맥북 프로",category:"컴퓨터",price:249e4,stock:8,status:"품절"},{id:4,name:"에어팟 프로",category:"전자제품",price:329e3,stock:42,status:"판매중"},{id:5,name:"아이패드",category:"전자제품",price:829e3,stock:0,status:"품절"},{id:6,name:"키보드",category:"컴퓨터",price:159e3,stock:18,status:"할인"},{id:7,name:"마우스",category:"컴퓨터",price:89e3,stock:33,status:"판매중"},{id:8,name:"모니터",category:"컴퓨터",price:459e3,stock:12,status:"할인"}],l=p.useMemo(()=>b.filter(s=>{const f=s.name.toLowerCase().includes(a.toLowerCase()),i=d==="all"||s.status===d,N=o==="all"||s.category===o;return f&&i&&N}),[a,d,o]),c=s=>{switch(s){case"판매중":return e.jsx(m,{variant:"default",children:"판매중"});case"품절":return e.jsx(m,{variant:"destructive",children:"품절"});case"할인":return e.jsx(m,{variant:"secondary",children:"할인"});default:return e.jsx(m,{variant:"outline",children:s})}},x=s=>s===0?e.jsx("span",{className:"text-red-600",children:"재고없음"}):s<10?e.jsxs("span",{className:"text-orange-600",children:["부족 (",s,"개)"]}):e.jsxs("span",{className:"text-green-600",children:["충분 (",s,"개)"]});return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"필터링 가능한 테이블"}),e.jsxs(S,{children:[e.jsx(_,{children:e.jsx(E,{className:"text-base",children:"필터 및 검색"})}),e.jsxs(B,{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(I,{htmlFor:"search",children:"상품명 검색"}),e.jsxs("div",{className:"relative",children:[e.jsx(G,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx(X,{id:"search",placeholder:"상품명을 입력하세요...",value:a,onChange:s=>n(s.target.value),className:"pl-10"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(I,{htmlFor:"status",children:"판매 상태"}),e.jsxs("select",{id:"status",value:d,onChange:s=>j(s.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"all",children:"전체"}),e.jsx("option",{value:"판매중",children:"판매중"}),e.jsx("option",{value:"품절",children:"품절"}),e.jsx("option",{value:"할인",children:"할인"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(I,{htmlFor:"category",children:"카테고리"}),e.jsxs("select",{id:"category",value:o,onChange:s=>h(s.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md",children:[e.jsx("option",{value:"all",children:"전체"}),e.jsx("option",{value:"전자제품",children:"전자제품"}),e.jsx("option",{value:"컴퓨터",children:"컴퓨터"})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between text-sm text-muted-foreground",children:[e.jsxs("span",{children:["총 ",l.length,"개 상품"]}),e.jsx(u,{variant:"ghost",size:"sm",onClick:()=>{n(""),j("all"),h("all")},children:"필터 초기화"})]})]})]}),e.jsxs(T,{children:[e.jsx(C,{children:e.jsxs(g,{children:[e.jsx(r,{children:"상품명"}),e.jsx(r,{children:"카테고리"}),e.jsx(r,{children:"가격"}),e.jsx(r,{children:"재고"}),e.jsx(r,{children:"상태"}),e.jsx(r,{children:"작업"})]})}),e.jsx(y,{children:l.length>0?l.map(s=>e.jsxs(g,{children:[e.jsx(t,{className:"font-medium",children:s.name}),e.jsx(t,{children:e.jsx(m,{variant:"outline",children:s.category})}),e.jsxs(t,{children:["₩",s.price.toLocaleString()]}),e.jsx(t,{children:x(s.stock)}),e.jsx(t,{children:c(s.status)}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(u,{variant:"ghost",size:"sm",children:e.jsx($,{className:"h-3 w-3"})}),e.jsx(u,{variant:"ghost",size:"sm",children:e.jsx(O,{className:"h-3 w-3"})}),e.jsx(u,{variant:"ghost",size:"sm",children:e.jsx(J,{className:"h-3 w-3"})})]})})]},s.id)):e.jsx(g,{children:e.jsx(t,{colSpan:6,className:"text-center py-8 text-muted-foreground",children:"검색 조건에 맞는 상품이 없습니다."})})})]})]})}},z={render:()=>{const[a,n]=p.useState(new Set),d=[{id:1,orderNo:"ORD-001",customer:"홍길동",product:"iPhone 15",amount:129e4,date:"2024-01-15",status:"배송완료"},{id:2,orderNo:"ORD-002",customer:"김영희",product:"갤럭시 S24",amount:109e4,date:"2024-01-16",status:"배송중"},{id:3,orderNo:"ORD-003",customer:"이철수",product:"맥북 프로",amount:249e4,date:"2024-01-17",status:"준비중"},{id:4,orderNo:"ORD-004",customer:"박민수",product:"에어팟 프로",amount:329e3,date:"2024-01-18",status:"배송완료"},{id:5,orderNo:"ORD-005",customer:"최지영",product:"아이패드",amount:829e3,date:"2024-01-19",status:"취소"}],j=l=>{n(l?new Set(d.map(c=>c.id)):new Set)},o=(l,c)=>{const x=new Set(a);c?x.add(l):x.delete(l),n(x)},h=a.size===d.length;a.size>0&&a.size<d.length;const b=l=>{switch(l){case"배송완료":return e.jsx(m,{variant:"default",children:"배송완료"});case"배송중":return e.jsx(m,{variant:"secondary",children:"배송중"});case"준비중":return e.jsx(m,{variant:"outline",children:"준비중"});case"취소":return e.jsx(m,{variant:"destructive",children:"취소"});default:return e.jsx(m,{variant:"outline",children:l})}};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"선택 가능한 테이블"}),a.size>0&&e.jsx(S,{children:e.jsx(B,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-sm",children:[a.size,"개 항목이 선택됨"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(u,{variant:"outline",size:"sm",children:[e.jsx(K,{className:"h-3 w-3 mr-2"}),"내보내기"]}),e.jsxs(u,{variant:"outline",size:"sm",children:[e.jsx(Q,{className:"h-3 w-3 mr-2"}),"이메일 발송"]}),e.jsxs(u,{variant:"destructive",size:"sm",children:[e.jsx(Y,{className:"h-3 w-3 mr-2"}),"삭제"]})]})]})})}),e.jsxs(T,{children:[e.jsx(C,{children:e.jsxs(g,{children:[e.jsx(r,{className:"w-12",children:e.jsx(V,{checked:h,onCheckedChange:j,"aria-label":"모든 행 선택"})}),e.jsx(r,{children:"주문번호"}),e.jsx(r,{children:"고객명"}),e.jsx(r,{children:"상품"}),e.jsx(r,{children:"금액"}),e.jsx(r,{children:"주문일"}),e.jsx(r,{children:"상태"}),e.jsx(r,{children:"작업"})]})}),e.jsx(y,{children:d.map(l=>e.jsxs(g,{className:a.has(l.id)?"bg-muted/50":"",children:[e.jsx(t,{children:e.jsx(V,{checked:a.has(l.id),onCheckedChange:c=>o(l.id,c),"aria-label":`${l.orderNo} 선택`})}),e.jsx(t,{className:"font-medium",children:l.orderNo}),e.jsx(t,{children:l.customer}),e.jsx(t,{children:l.product}),e.jsxs(t,{children:["₩",l.amount.toLocaleString()]}),e.jsx(t,{children:l.date}),e.jsx(t,{children:b(l.status)}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(u,{variant:"ghost",size:"sm",children:e.jsx($,{className:"h-3 w-3"})}),e.jsx(u,{variant:"ghost",size:"sm",children:e.jsx(O,{className:"h-3 w-3"})})]})})]},l.id))})]})]})}},F={render:()=>{const[a,n]=p.useState(1),[d,j]=p.useState(5),o=Array.from({length:47},(i,N)=>({id:N+1,txId:`TX-${String(N+1).padStart(4,"0")}`,type:["입금","출금","이체"][Math.floor(Math.random()*3)],amount:Math.floor(Math.random()*1e6)+1e4,account:`계좌-${Math.floor(Math.random()*9e3)+1e3}`,date:new Date(2024,0,Math.floor(Math.random()*30)+1).toLocaleDateString(),status:["완료","처리중","보류","실패"][Math.floor(Math.random()*4)]})),h=Math.ceil(o.length/d),b=(a-1)*d,l=b+d,c=o.slice(b,l),x=i=>{n(i)},s=i=>{switch(i){case"입금":return e.jsx(le,{className:"h-3 w-3 text-green-600"});case"출금":return e.jsx(ne,{className:"h-3 w-3 text-red-600"});case"이체":return e.jsx(H,{className:"h-3 w-3 text-blue-600"});default:return null}},f=i=>{switch(i){case"완료":return e.jsx(m,{variant:"default",children:"완료"});case"처리중":return e.jsx(m,{variant:"secondary",children:"처리중"});case"보류":return e.jsx(m,{variant:"outline",children:"보류"});case"실패":return e.jsx(m,{variant:"destructive",children:"실패"});default:return e.jsx(m,{variant:"outline",children:i})}};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"페이지네이션 테이블"}),e.jsx(S,{children:e.jsx(B,{className:"p-4",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["총 ",o.length,"개 항목 중 ",b+1,"-",Math.min(l,o.length),"번째 표시"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{htmlFor:"pageSize",className:"text-sm",children:"페이지당 표시:"}),e.jsxs("select",{id:"pageSize",value:d,onChange:i=>{j(Number(i.target.value)),n(1)},className:"px-2 py-1 border border-gray-300 rounded text-sm",children:[e.jsx("option",{value:5,children:"5개"}),e.jsx("option",{value:10,children:"10개"}),e.jsx("option",{value:20,children:"20개"}),e.jsx("option",{value:50,children:"50개"})]})]})]})})})}),e.jsxs(T,{children:[e.jsx(C,{children:e.jsxs(g,{children:[e.jsx(r,{children:"거래ID"}),e.jsx(r,{children:"유형"}),e.jsx(r,{children:"금액"}),e.jsx(r,{children:"계좌"}),e.jsx(r,{children:"날짜"}),e.jsx(r,{children:"상태"})]})}),e.jsx(y,{children:c.map(i=>e.jsxs(g,{children:[e.jsx(t,{className:"font-medium",children:i.txId}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[s(i.type),i.type]})}),e.jsx(t,{children:e.jsxs("span",{className:i.type==="출금"?"text-red-600":"text-green-600",children:[i.type==="출금"?"-":"+"," ₩",i.amount.toLocaleString()]})}),e.jsx(t,{children:i.account}),e.jsx(t,{children:i.date}),e.jsx(t,{children:f(i.status)})]},i.id))})]}),e.jsx(S,{children:e.jsx(B,{className:"p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:["페이지 ",a," / ",h]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(u,{variant:"outline",size:"sm",onClick:()=>x(1),disabled:a===1,children:e.jsx(Z,{className:"h-3 w-3"})}),e.jsx(u,{variant:"outline",size:"sm",onClick:()=>x(a-1),disabled:a===1,children:e.jsx(ae,{className:"h-3 w-3"})}),Array.from({length:Math.min(5,h)},(i,N)=>{let v;return h<=5||a<=3?v=N+1:a>=h-2?v=h-4+N:v=a-2+N,e.jsx(u,{variant:a===v?"default":"outline",size:"sm",onClick:()=>x(v),children:v},v)}),e.jsx(u,{variant:"outline",size:"sm",onClick:()=>x(a+1),disabled:a===h,children:e.jsx(se,{className:"h-3 w-3"})}),e.jsx(u,{variant:"outline",size:"sm",onClick:()=>x(h),disabled:a===h,children:e.jsx(ee,{className:"h-3 w-3"})})]})]})})})]})}},P={render:()=>{const[a,n]=p.useState(""),[d,j]=p.useState("asc"),[o,h]=p.useState(new Set),b=[{id:1,name:"김철수",grade:"A",score:95,subject:"수학",date:"2024-01-15"},{id:2,name:"이영희",grade:"B+",score:87,subject:"영어",date:"2024-01-16"},{id:3,name:"박민수",grade:"A-",score:92,subject:"과학",date:"2024-01-17"},{id:4,name:"정수진",grade:"B",score:84,subject:"국어",date:"2024-01-18"}],l=s=>{a===s?j(d==="asc"?"desc":"asc"):(n(s),j("asc"))},c=p.useMemo(()=>a?[...b].sort((s,f)=>{const i=s[a],N=f[a];return d==="asc"?i>N?1:-1:i<N?1:-1}):b,[a,d]),x=(s,f)=>{const i=new Set(o);f?i.add(s):i.delete(s),h(i)};return e.jsxs("div",{className:"w-full max-w-4xl space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (Tab, Enter, 방향키)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 정렬 상태와 선택 상태 음성 안내"}),e.jsx("li",{children:"• 적절한 제목과 캡션 제공"}),e.jsx("li",{children:"• 색상에 의존하지 않는 정보 전달"})]})]}),e.jsxs(S,{children:[e.jsxs(_,{children:[e.jsxs(E,{className:"flex items-center gap-2",children:[e.jsx($,{className:"h-5 w-5"}),"접근성 적용 테이블"]}),e.jsx(W,{children:"모든 사용자가 쉽게 이용할 수 있도록 설계된 데이터 테이블입니다"})]}),e.jsxs(B,{children:[e.jsxs(T,{role:"table","aria-label":"학생 성적 테이블",children:[e.jsxs(L,{children:["학생들의 성적 정보입니다. 총 ",b.length,"명의 학생 데이터가 있으며, 열 제목을 클릭하여 정렬할 수 있습니다.",a&&` 현재 ${a}로 ${d==="asc"?"오름차순":"내림차순"} 정렬되어 있습니다.`,o.size>0&&` ${o.size}개 행이 선택되어 있습니다.`]}),e.jsx(C,{children:e.jsxs(g,{role:"row",children:[e.jsx(r,{role:"columnheader",className:"w-12",children:e.jsx("span",{className:"sr-only",children:"선택"})}),e.jsx(r,{role:"columnheader",children:e.jsx(u,{variant:"ghost",size:"sm",className:"h-auto p-0 font-semibold",onClick:()=>l("name"),"aria-label":`이름으로 정렬 ${a==="name"?d==="asc"?"(현재 오름차순, 클릭하면 내림차순)":"(현재 내림차순, 클릭하면 오름차순)":"(현재 정렬되지 않음, 클릭하면 오름차순)"}`,"aria-describedby":"sort-instructions",children:e.jsxs("div",{className:"flex items-center gap-1",children:["이름",a==="name"?d==="asc"?e.jsx(M,{className:"h-3 w-3","aria-hidden":"true"}):e.jsx(A,{className:"h-3 w-3","aria-hidden":"true"}):e.jsx(H,{className:"h-3 w-3","aria-hidden":"true"})]})})}),e.jsx(r,{role:"columnheader",children:e.jsx(u,{variant:"ghost",size:"sm",className:"h-auto p-0 font-semibold",onClick:()=>l("subject"),"aria-label":`과목으로 정렬 ${a==="subject"?d==="asc"?"(현재 오름차순)":"(현재 내림차순)":"(정렬 가능)"}`,children:e.jsxs("div",{className:"flex items-center gap-1",children:["과목",a==="subject"?d==="asc"?e.jsx(M,{className:"h-3 w-3","aria-hidden":"true"}):e.jsx(A,{className:"h-3 w-3","aria-hidden":"true"}):e.jsx(H,{className:"h-3 w-3","aria-hidden":"true"})]})})}),e.jsx(r,{role:"columnheader",children:e.jsx(u,{variant:"ghost",size:"sm",className:"h-auto p-0 font-semibold",onClick:()=>l("score"),"aria-label":`점수로 정렬 ${a==="score"?d==="asc"?"(현재 오름차순)":"(현재 내림차순)":"(정렬 가능)"}`,children:e.jsxs("div",{className:"flex items-center gap-1",children:["점수",a==="score"?d==="asc"?e.jsx(M,{className:"h-3 w-3","aria-hidden":"true"}):e.jsx(A,{className:"h-3 w-3","aria-hidden":"true"}):e.jsx(H,{className:"h-3 w-3","aria-hidden":"true"})]})})}),e.jsx(r,{role:"columnheader",children:"등급"}),e.jsx(r,{role:"columnheader",children:"시험일"})]})}),e.jsx(y,{children:c.map((s,f)=>e.jsxs(g,{role:"row",className:o.has(s.id)?"bg-muted/50":"","aria-selected":o.has(s.id),children:[e.jsx(t,{role:"gridcell",children:e.jsx(V,{checked:o.has(s.id),onCheckedChange:i=>x(s.id,i),"aria-label":`${s.name} 학생 선택`,"aria-describedby":`student-${s.id}-info`})}),e.jsx(t,{role:"gridcell",className:"font-medium",children:e.jsxs("div",{id:`student-${s.id}-info`,children:[s.name,e.jsxs("span",{className:"sr-only",children:[", ",s.subject," 과목, ",s.score,"점, ",s.grade," 등급"]})]})}),e.jsx(t,{role:"gridcell",children:e.jsx(m,{variant:"outline","aria-label":`과목: ${s.subject}`,children:s.subject})}),e.jsx(t,{role:"gridcell",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"font-medium",children:[s.score,"점"]}),s.score>=90?e.jsx(U,{className:"h-3 w-3 text-yellow-500","aria-label":"우수"}):e.jsx("span",{className:"sr-only",children:"보통"})]})}),e.jsx(t,{role:"gridcell",children:e.jsx(m,{variant:s.grade.startsWith("A")?"default":"secondary","aria-label":`등급: ${s.grade}`,children:s.grade})}),e.jsx(t,{role:"gridcell",children:e.jsx("time",{dateTime:s.date,"aria-label":`시험일: ${s.date}`,children:s.date})})]},s.id))})]}),e.jsx("div",{id:"sort-instructions",className:"sr-only",children:"열 제목 버튼을 클릭하거나 Enter 키를 눌러 해당 열로 정렬할 수 있습니다. 같은 열을 다시 클릭하면 정렬 순서가 바뀝니다."})]})]}),e.jsxs(S,{children:[e.jsx(_,{children:e.jsx(E,{children:"테이블 접근성 가이드라인"})}),e.jsx(B,{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-green-600",children:"✅ 권장사항"}),e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"명확한 테이블 캡션과 헤더"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"적절한 ARIA 역할과 속성"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"키보드 내비게이션 지원"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"정렬 상태 음성 안내"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500 mt-1",children:"•"}),e.jsx("span",{children:"선택된 행 시각적/음성 표시"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium text-blue-600",children:"🎯 키보드 사용법"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tab"}),e.jsx("span",{children:"다음 요소로 이동"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Enter/Space"}),e.jsx("span",{children:"정렬 버튼 실행"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"↑/↓"}),e.jsx("span",{children:"행 간 이동"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"←/→"}),e.jsx("span",{children:"열 간 이동"})]})]})]})]})})]}),e.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx($,{className:"h-5 w-5 text-blue-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium text-blue-900",children:"접근성 팁"}),e.jsx("p",{className:"text-sm text-blue-800 mt-1",children:"테이블은 구조화된 데이터를 표시하는 중요한 도구입니다. 스크린 리더 사용자가 행과 열의 관계를 정확히 이해할 수 있도록 적절한 헤더와 캡션, ARIA 속성을 제공하세요."})]})]})})]})},parameters:{docs:{description:{story:"테이블 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다."}}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const users = [{
      id: 1,
      name: '홍길동',
      email: 'hong@example.com',
      role: '관리자',
      status: '활성'
    }, {
      id: 2,
      name: '김영희',
      email: 'kim@example.com',
      role: '사용자',
      status: '활성'
    }, {
      id: 3,
      name: '이철수',
      email: 'lee@example.com',
      role: '편집자',
      status: '비활성'
    }, {
      id: 4,
      name: '박민수',
      email: 'park@example.com',
      role: '사용자',
      status: '활성'
    }, {
      id: 5,
      name: '최지영',
      email: 'choi@example.com',
      role: '관리자',
      status: '대기'
    }];
    return <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">기본 테이블</h3>
        <Table>
          <TableCaption>총 {users.length}명의 사용자가 등록되어 있습니다.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(user => <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge variant={user.status === '활성' ? 'default' : user.status === '대기' ? 'secondary' : 'outline'}>
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortField, setSortField] = useState<string>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const employees = [{
      id: 1,
      name: '홍길동',
      department: '개발팀',
      salary: 5500,
      experience: 3,
      rating: 4.8
    }, {
      id: 2,
      name: '김영희',
      department: '디자인팀',
      salary: 4800,
      experience: 2,
      rating: 4.9
    }, {
      id: 3,
      name: '이철수',
      department: '마케팅팀',
      salary: 4200,
      experience: 5,
      rating: 4.3
    }, {
      id: 4,
      name: '박민수',
      department: '개발팀',
      salary: 6200,
      experience: 7,
      rating: 4.7
    }, {
      id: 5,
      name: '최지영',
      department: '기획팀',
      salary: 5000,
      experience: 4,
      rating: 4.6
    }, {
      id: 6,
      name: '정수현',
      department: '디자인팀',
      salary: 5300,
      experience: 6,
      rating: 4.8
    }];
    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };
    const sortedEmployees = useMemo(() => {
      if (!sortField) return employees;
      return [...employees].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }, [sortField, sortDirection]);
    const SortButton = ({
      field,
      children
    }: {
      field: string;
      children: React.ReactNode;
    }) => <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold" onClick={() => handleSort(field)}>
        <div className="flex items-center gap-1">
          {children}
          {sortField === field ? sortDirection === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" /> : <ArrowUpDown className="h-3 w-3" />}
        </div>
      </Button>;
    return <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">정렬 가능한 테이블</h3>
        <Table>
          <TableCaption>
            클릭하여 열을 정렬할 수 있습니다. 
            {sortField && \` 현재 \${sortField}로 \${sortDirection === 'asc' ? '오름차순' : '내림차순'} 정렬됨\`}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>
                <SortButton field="name">이름</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="department">부서</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="salary">연봉</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="experience">경력</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="rating">평점</SortButton>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedEmployees.map(employee => <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{employee.department}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    {employee.salary.toLocaleString()}만원
                  </div>
                </TableCell>
                <TableCell>{employee.experience}년</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {employee.rating}
                  </div>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');
    const products = [{
      id: 1,
      name: 'iPhone 15 Pro',
      category: '전자제품',
      price: 1290000,
      stock: 25,
      status: '판매중'
    }, {
      id: 2,
      name: '갤럭시 S24',
      category: '전자제품',
      price: 1090000,
      stock: 15,
      status: '판매중'
    }, {
      id: 3,
      name: '맥북 프로',
      category: '컴퓨터',
      price: 2490000,
      stock: 8,
      status: '품절'
    }, {
      id: 4,
      name: '에어팟 프로',
      category: '전자제품',
      price: 329000,
      stock: 42,
      status: '판매중'
    }, {
      id: 5,
      name: '아이패드',
      category: '전자제품',
      price: 829000,
      stock: 0,
      status: '품절'
    }, {
      id: 6,
      name: '키보드',
      category: '컴퓨터',
      price: 159000,
      stock: 18,
      status: '할인'
    }, {
      id: 7,
      name: '마우스',
      category: '컴퓨터',
      price: 89000,
      stock: 33,
      status: '판매중'
    }, {
      id: 8,
      name: '모니터',
      category: '컴퓨터',
      price: 459000,
      stock: 12,
      status: '할인'
    }];
    const filteredProducts = useMemo(() => {
      return products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        return matchesSearch && matchesStatus && matchesCategory;
      });
    }, [searchTerm, statusFilter, categoryFilter]);
    const getStatusBadge = (status: string) => {
      switch (status) {
        case '판매중':
          return <Badge variant="default">판매중</Badge>;
        case '품절':
          return <Badge variant="destructive">품절</Badge>;
        case '할인':
          return <Badge variant="secondary">할인</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };
    const getStockStatus = (stock: number) => {
      if (stock === 0) return <span className="text-red-600">재고없음</span>;
      if (stock < 10) return <span className="text-orange-600">부족 ({stock}개)</span>;
      return <span className="text-green-600">충분 ({stock}개)</span>;
    };
    return <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">필터링 가능한 테이블</h3>
        
        {/* 필터 컨트롤 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">필터 및 검색</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">상품명 검색</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="search" placeholder="상품명을 입력하세요..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">판매 상태</Label>
                <select id="status" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="all">전체</option>
                  <option value="판매중">판매중</option>
                  <option value="품절">품절</option>
                  <option value="할인">할인</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">카테고리</Label>
                <select id="category" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="all">전체</option>
                  <option value="전자제품">전자제품</option>
                  <option value="컴퓨터">컴퓨터</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>총 {filteredProducts.length}개 상품</span>
              <Button variant="ghost" size="sm" onClick={() => {
              setSearchTerm('');
              setStatusFilter('all');
              setCategoryFilter('all');
            }}>
                필터 초기화
              </Button>
            </div>
          </CardContent>
        </Card>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상품명</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>가격</TableHead>
              <TableHead>재고</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? filteredProducts.map(product => <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell>₩{product.price.toLocaleString()}</TableCell>
                  <TableCell>{getStockStatus(product.stock)}</TableCell>
                  <TableCell>{getStatusBadge(product.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>) : <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  검색 조건에 맞는 상품이 없습니다.
                </TableCell>
              </TableRow>}
          </TableBody>
        </Table>
      </div>;
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    const orders = [{
      id: 1,
      orderNo: 'ORD-001',
      customer: '홍길동',
      product: 'iPhone 15',
      amount: 1290000,
      date: '2024-01-15',
      status: '배송완료'
    }, {
      id: 2,
      orderNo: 'ORD-002',
      customer: '김영희',
      product: '갤럭시 S24',
      amount: 1090000,
      date: '2024-01-16',
      status: '배송중'
    }, {
      id: 3,
      orderNo: 'ORD-003',
      customer: '이철수',
      product: '맥북 프로',
      amount: 2490000,
      date: '2024-01-17',
      status: '준비중'
    }, {
      id: 4,
      orderNo: 'ORD-004',
      customer: '박민수',
      product: '에어팟 프로',
      amount: 329000,
      date: '2024-01-18',
      status: '배송완료'
    }, {
      id: 5,
      orderNo: 'ORD-005',
      customer: '최지영',
      product: '아이패드',
      amount: 829000,
      date: '2024-01-19',
      status: '취소'
    }];
    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedRows(new Set(orders.map(order => order.id)));
      } else {
        setSelectedRows(new Set());
      }
    };
    const handleSelectRow = (id: number, checked: boolean) => {
      const newSelected = new Set(selectedRows);
      if (checked) {
        newSelected.add(id);
      } else {
        newSelected.delete(id);
      }
      setSelectedRows(newSelected);
    };
    const isAllSelected = selectedRows.size === orders.length;
    const isIndeterminate = selectedRows.size > 0 && selectedRows.size < orders.length;
    const getStatusBadge = (status: string) => {
      switch (status) {
        case '배송완료':
          return <Badge variant="default">배송완료</Badge>;
        case '배송중':
          return <Badge variant="secondary">배송중</Badge>;
        case '준비중':
          return <Badge variant="outline">준비중</Badge>;
        case '취소':
          return <Badge variant="destructive">취소</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };
    return <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">선택 가능한 테이블</h3>
        
        {/* 선택된 항목 정보 */}
        {selectedRows.size > 0 && <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  {selectedRows.size}개 항목이 선택됨
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3 mr-2" />
                    내보내기
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-3 w-3 mr-2" />
                    이메일 발송
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="h-3 w-3 mr-2" />
                    삭제
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox checked={isAllSelected} onCheckedChange={handleSelectAll} aria-label="모든 행 선택" />
              </TableHead>
              <TableHead>주문번호</TableHead>
              <TableHead>고객명</TableHead>
              <TableHead>상품</TableHead>
              <TableHead>금액</TableHead>
              <TableHead>주문일</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map(order => <TableRow key={order.id} className={selectedRows.has(order.id) ? 'bg-muted/50' : ''}>
                <TableCell>
                  <Checkbox checked={selectedRows.has(order.id)} onCheckedChange={checked => handleSelectRow(order.id, checked as boolean)} aria-label={\`\${order.orderNo} 선택\`} />
                </TableCell>
                <TableCell className="font-medium">{order.orderNo}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>₩{order.amount.toLocaleString()}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    // 더 많은 데이터 생성
    const allTransactions = Array.from({
      length: 47
    }, (_, i) => ({
      id: i + 1,
      txId: \`TX-\${String(i + 1).padStart(4, '0')}\`,
      type: ['입금', '출금', '이체'][Math.floor(Math.random() * 3)],
      amount: Math.floor(Math.random() * 1000000) + 10000,
      account: \`계좌-\${Math.floor(Math.random() * 9000) + 1000}\`,
      date: new Date(2024, 0, Math.floor(Math.random() * 30) + 1).toLocaleDateString(),
      status: ['완료', '처리중', '보류', '실패'][Math.floor(Math.random() * 4)]
    }));
    const totalPages = Math.ceil(allTransactions.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentTransactions = allTransactions.slice(startIndex, endIndex);
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    const getTypeIcon = (type: string) => {
      switch (type) {
        case '입금':
          return <TrendingUp className="h-3 w-3 text-green-600" />;
        case '출금':
          return <TrendingDown className="h-3 w-3 text-red-600" />;
        case '이체':
          return <ArrowUpDown className="h-3 w-3 text-blue-600" />;
        default:
          return null;
      }
    };
    const getStatusBadge = (status: string) => {
      switch (status) {
        case '완료':
          return <Badge variant="default">완료</Badge>;
        case '처리중':
          return <Badge variant="secondary">처리중</Badge>;
        case '보류':
          return <Badge variant="outline">보류</Badge>;
        case '실패':
          return <Badge variant="destructive">실패</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };
    return <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">페이지네이션 테이블</h3>
        
        {/* 페이지 설정 */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  총 {allTransactions.length}개 항목 중 {startIndex + 1}-{Math.min(endIndex, allTransactions.length)}번째 표시
                </span>
                <div className="flex items-center gap-2">
                  <Label htmlFor="pageSize" className="text-sm">페이지당 표시:</Label>
                  <select id="pageSize" value={pageSize} onChange={e => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }} className="px-2 py-1 border border-gray-300 rounded text-sm">
                    <option value={5}>5개</option>
                    <option value={10}>10개</option>
                    <option value={20}>20개</option>
                    <option value={50}>50개</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>거래ID</TableHead>
              <TableHead>유형</TableHead>
              <TableHead>금액</TableHead>
              <TableHead>계좌</TableHead>
              <TableHead>날짜</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTransactions.map(transaction => <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.txId}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(transaction.type)}
                    {transaction.type}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={transaction.type === '출금' ? 'text-red-600' : 'text-green-600'}>
                    {transaction.type === '출금' ? '-' : '+'} ₩{transaction.amount.toLocaleString()}
                  </span>
                </TableCell>
                <TableCell>{transaction.account}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{getStatusBadge(transaction.status)}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>

        {/* 페이지네이션 */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                페이지 {currentPage} / {totalPages}
              </div>
              
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                  <ChevronsLeft className="h-3 w-3" />
                </Button>
                
                <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  <ChevronLeft className="h-3 w-3" />
                </Button>
                
                {/* 페이지 번호 */}
                {Array.from({
                length: Math.min(5, totalPages)
              }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return <Button key={pageNum} variant={currentPage === pageNum ? "default" : "outline"} size="sm" onClick={() => handlePageChange(pageNum)}>
                      {pageNum}
                    </Button>;
              })}
                
                <Button variant="outline" size="sm" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  <ChevronRight className="h-3 w-3" />
                </Button>
                
                <Button variant="outline" size="sm" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                  <ChevronsRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  }
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortField, setSortField] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    const students = [{
      id: 1,
      name: '김철수',
      grade: 'A',
      score: 95,
      subject: '수학',
      date: '2024-01-15'
    }, {
      id: 2,
      name: '이영희',
      grade: 'B+',
      score: 87,
      subject: '영어',
      date: '2024-01-16'
    }, {
      id: 3,
      name: '박민수',
      grade: 'A-',
      score: 92,
      subject: '과학',
      date: '2024-01-17'
    }, {
      id: 4,
      name: '정수진',
      grade: 'B',
      score: 84,
      subject: '국어',
      date: '2024-01-18'
    }];
    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };
    const sortedStudents = useMemo(() => {
      if (!sortField) return students;
      return [...students].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }, [sortField, sortDirection]);
    const handleSelectRow = (id: number, checked: boolean) => {
      const newSelected = new Set(selectedRows);
      if (checked) {
        newSelected.add(id);
      } else {
        newSelected.delete(id);
      }
      setSelectedRows(newSelected);
    };
    return <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, 방향키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 정렬 상태와 선택 상태 음성 안내</li>
            <li>• 적절한 제목과 캡션 제공</li>
            <li>• 색상에 의존하지 않는 정보 전달</li>
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              접근성 적용 테이블
            </CardTitle>
            <CardDescription>
              모든 사용자가 쉽게 이용할 수 있도록 설계된 데이터 테이블입니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table role="table" aria-label="학생 성적 테이블">
              <TableCaption>
                학생들의 성적 정보입니다. 총 {students.length}명의 학생 데이터가 있으며, 
                열 제목을 클릭하여 정렬할 수 있습니다.
                {sortField && \` 현재 \${sortField}로 \${sortDirection === 'asc' ? '오름차순' : '내림차순'} 정렬되어 있습니다.\`}
                {selectedRows.size > 0 && \` \${selectedRows.size}개 행이 선택되어 있습니다.\`}
              </TableCaption>
              
              <TableHeader>
                <TableRow role="row">
                  <TableHead role="columnheader" className="w-12">
                    <span className="sr-only">선택</span>
                  </TableHead>
                  <TableHead role="columnheader">
                    <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold" onClick={() => handleSort('name')} aria-label={\`이름으로 정렬 \${sortField === 'name' ? sortDirection === 'asc' ? '(현재 오름차순, 클릭하면 내림차순)' : '(현재 내림차순, 클릭하면 오름차순)' : '(현재 정렬되지 않음, 클릭하면 오름차순)'}\`} aria-describedby="sort-instructions">
                      <div className="flex items-center gap-1">
                        이름
                        {sortField === 'name' ? sortDirection === 'asc' ? <ChevronUp className="h-3 w-3" aria-hidden="true" /> : <ChevronDown className="h-3 w-3" aria-hidden="true" /> : <ArrowUpDown className="h-3 w-3" aria-hidden="true" />}
                      </div>
                    </Button>
                  </TableHead>
                  <TableHead role="columnheader">
                    <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold" onClick={() => handleSort('subject')} aria-label={\`과목으로 정렬 \${sortField === 'subject' ? sortDirection === 'asc' ? '(현재 오름차순)' : '(현재 내림차순)' : '(정렬 가능)'}\`}>
                      <div className="flex items-center gap-1">
                        과목
                        {sortField === 'subject' ? sortDirection === 'asc' ? <ChevronUp className="h-3 w-3" aria-hidden="true" /> : <ChevronDown className="h-3 w-3" aria-hidden="true" /> : <ArrowUpDown className="h-3 w-3" aria-hidden="true" />}
                      </div>
                    </Button>
                  </TableHead>
                  <TableHead role="columnheader">
                    <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold" onClick={() => handleSort('score')} aria-label={\`점수로 정렬 \${sortField === 'score' ? sortDirection === 'asc' ? '(현재 오름차순)' : '(현재 내림차순)' : '(정렬 가능)'}\`}>
                      <div className="flex items-center gap-1">
                        점수
                        {sortField === 'score' ? sortDirection === 'asc' ? <ChevronUp className="h-3 w-3" aria-hidden="true" /> : <ChevronDown className="h-3 w-3" aria-hidden="true" /> : <ArrowUpDown className="h-3 w-3" aria-hidden="true" />}
                      </div>
                    </Button>
                  </TableHead>
                  <TableHead role="columnheader">등급</TableHead>
                  <TableHead role="columnheader">시험일</TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {sortedStudents.map((student, index) => <TableRow key={student.id} role="row" className={selectedRows.has(student.id) ? 'bg-muted/50' : ''} aria-selected={selectedRows.has(student.id)}>
                    <TableCell role="gridcell">
                      <Checkbox checked={selectedRows.has(student.id)} onCheckedChange={checked => handleSelectRow(student.id, checked as boolean)} aria-label={\`\${student.name} 학생 선택\`} aria-describedby={\`student-\${student.id}-info\`} />
                    </TableCell>
                    <TableCell role="gridcell" className="font-medium">
                      <div id={\`student-\${student.id}-info\`}>
                        {student.name}
                        <span className="sr-only">
                          , {student.subject} 과목, {student.score}점, {student.grade} 등급
                        </span>
                      </div>
                    </TableCell>
                    <TableCell role="gridcell">
                      <Badge variant="outline" aria-label={\`과목: \${student.subject}\`}>
                        {student.subject}
                      </Badge>
                    </TableCell>
                    <TableCell role="gridcell">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{student.score}점</span>
                        {student.score >= 90 ? <Star className="h-3 w-3 text-yellow-500" aria-label="우수" /> : <span className="sr-only">보통</span>}
                      </div>
                    </TableCell>
                    <TableCell role="gridcell">
                      <Badge variant={student.grade.startsWith('A') ? 'default' : 'secondary'} aria-label={\`등급: \${student.grade}\`}>
                        {student.grade}
                      </Badge>
                    </TableCell>
                    <TableCell role="gridcell">
                      <time dateTime={student.date} aria-label={\`시험일: \${student.date}\`}>
                        {student.date}
                      </time>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
            
            <div id="sort-instructions" className="sr-only">
              열 제목 버튼을 클릭하거나 Enter 키를 눌러 해당 열로 정렬할 수 있습니다. 
              같은 열을 다시 클릭하면 정렬 순서가 바뀝니다.
            </div>
          </CardContent>
        </Card>

        {/* 접근성 가이드라인 */}
        <Card>
          <CardHeader>
            <CardTitle>테이블 접근성 가이드라인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>명확한 테이블 캡션과 헤더</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 ARIA 역할과 속성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>키보드 내비게이션 지원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>정렬 상태 음성 안내</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>선택된 행 시각적/음성 표시</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">🎯 키보드 사용법</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span>다음 요소로 이동</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enter/Space</span>
                    <span>정렬 버튼 실행</span>
                  </div>
                  <div className="flex justify-between">
                    <span>↑/↓</span>
                    <span>행 간 이동</span>
                  </div>
                  <div className="flex justify-between">
                    <span>←/→</span>
                    <span>열 간 이동</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900">접근성 팁</h5>
              <p className="text-sm text-blue-800 mt-1">
                테이블은 구조화된 데이터를 표시하는 중요한 도구입니다. 
                스크린 리더 사용자가 행과 열의 관계를 정확히 이해할 수 있도록 
                적절한 헤더와 캡션, ARIA 속성을 제공하세요.
              </p>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '테이블 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};export{P as AccessibilityDemo,k as Default,D as FilterableTable,F as PaginatedTable,z as SelectableTable,R as SortableTable,Oe as default};
