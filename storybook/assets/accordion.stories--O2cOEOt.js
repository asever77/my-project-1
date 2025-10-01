import{j as e}from"./jsx-runtime-BNA1KBBw.js";import{r as g,e as x}from"./iframe-DYI76bYf.js";import{c as X}from"./index-4C5DIe9f.js";import{c as fe}from"./index-CkdVWGak.js";import{u as Z}from"./index-DnoEvMOd.js";import{c as ee,u as Ae}from"./index-CZsTv1T_.js";import{u as K}from"./index-BP1cZx75.js";import{P as T}from"./index-BHJTWlLS.js";import{P as Ne}from"./index-DgvNDuWe.js";import{u as ne}from"./index-BaGxq6u0.js";import{u as je}from"./index-Bwm-SClB.js";import{c as U}from"./utils-CBfrqCZ4.js";import{C as ye}from"./chevron-down-D8kFsZ5Z.js";import"./index-CUoryC41.js";import"./createLucideIcon-CVIF7ato.js";var O="Collapsible",[Ce,re]=X(O),[Ie,z]=Ce(O),se=g.forwardRef((n,s)=>{const{__scopeCollapsible:r,open:c,defaultOpen:a,disabled:o,onOpenChange:d,...m}=n,[u,b]=K({prop:c,defaultProp:a??!1,onChange:d,caller:O});return e.jsx(Ie,{scope:r,disabled:o,contentId:ne(),open:u,onOpenToggle:g.useCallback(()=>b(h=>!h),[b]),children:e.jsx(T.div,{"data-state":Q(u),"data-disabled":o?"":void 0,...m,ref:s})})});se.displayName=O;var oe="CollapsibleTrigger",ce=g.forwardRef((n,s)=>{const{__scopeCollapsible:r,...c}=n,a=z(oe,r);return e.jsx(T.button,{type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":Q(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled,...c,ref:s,onClick:ee(n.onClick,a.onOpenToggle)})});ce.displayName=oe;var B="CollapsibleContent",ae=g.forwardRef((n,s)=>{const{forceMount:r,...c}=n,a=z(B,n.__scopeCollapsible);return e.jsx(Ne,{present:r||a.open,children:({present:o})=>e.jsx(we,{...c,ref:s,present:o})})});ae.displayName=B;var we=g.forwardRef((n,s)=>{const{__scopeCollapsible:r,present:c,children:a,...o}=n,d=z(B,r),[m,u]=g.useState(c),b=g.useRef(null),h=Z(s,b),v=g.useRef(0),I=v.current,N=g.useRef(0),k=N.current,j=d.open||m,y=g.useRef(j),C=g.useRef(void 0);return g.useEffect(()=>{const p=requestAnimationFrame(()=>y.current=!1);return()=>cancelAnimationFrame(p)},[]),Ae(()=>{const p=b.current;if(p){C.current=C.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const w=p.getBoundingClientRect();v.current=w.height,N.current=w.width,y.current||(p.style.transitionDuration=C.current.transitionDuration,p.style.animationName=C.current.animationName),u(c)}},[d.open,c]),e.jsx(T.div,{"data-state":Q(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!j,...o,ref:h,style:{"--radix-collapsible-content-height":I?`${I}px`:void 0,"--radix-collapsible-content-width":k?`${k}px`:void 0,...n.style},children:j&&a})});function Q(n){return n?"open":"closed"}var Te=se,ke=ce,Re=ae,f="Accordion",Se=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[q,_e,Pe]=fe(f),[M]=X(f,[Pe,re]),Y=re(),te=x.forwardRef((n,s)=>{const{type:r,...c}=n,a=c,o=c;return e.jsx(q.Provider,{scope:n.__scopeAccordion,children:r==="multiple"?e.jsx(Oe,{...o,ref:s}):e.jsx(De,{...a,ref:s})})});te.displayName=f;var[ie,Ee]=M(f),[le,Ve]=M(f,{collapsible:!1}),De=x.forwardRef((n,s)=>{const{value:r,defaultValue:c,onValueChange:a=()=>{},collapsible:o=!1,...d}=n,[m,u]=K({prop:r,defaultProp:c??"",onChange:a,caller:f});return e.jsx(ie,{scope:n.__scopeAccordion,value:x.useMemo(()=>m?[m]:[],[m]),onItemOpen:u,onItemClose:x.useCallback(()=>o&&u(""),[o,u]),children:e.jsx(le,{scope:n.__scopeAccordion,collapsible:o,children:e.jsx(de,{...d,ref:s})})})}),Oe=x.forwardRef((n,s)=>{const{value:r,defaultValue:c,onValueChange:a=()=>{},...o}=n,[d,m]=K({prop:r,defaultProp:c??[],onChange:a,caller:f}),u=x.useCallback(h=>m((v=[])=>[...v,h]),[m]),b=x.useCallback(h=>m((v=[])=>v.filter(I=>I!==h)),[m]);return e.jsx(ie,{scope:n.__scopeAccordion,value:d,onItemOpen:u,onItemClose:b,children:e.jsx(le,{scope:n.__scopeAccordion,collapsible:!0,children:e.jsx(de,{...o,ref:s})})})}),[Me,H]=M(f),de=x.forwardRef((n,s)=>{const{__scopeAccordion:r,disabled:c,dir:a,orientation:o="vertical",...d}=n,m=x.useRef(null),u=Z(m,s),b=_e(r),v=je(a)==="ltr",I=ee(n.onKeyDown,N=>{if(!Se.includes(N.key))return;const k=N.target,j=b().filter(F=>!F.ref.current?.disabled),y=j.findIndex(F=>F.ref.current===k),C=j.length;if(y===-1)return;N.preventDefault();let p=y;const w=0,$=C-1,L=()=>{p=y+1,p>$&&(p=w)},W=()=>{p=y-1,p<w&&(p=$)};switch(N.key){case"Home":p=w;break;case"End":p=$;break;case"ArrowRight":o==="horizontal"&&(v?L():W());break;case"ArrowDown":o==="vertical"&&L();break;case"ArrowLeft":o==="horizontal"&&(v?W():L());break;case"ArrowUp":o==="vertical"&&W();break}const ve=p%C;j[ve].ref.current?.focus()});return e.jsx(Me,{scope:r,disabled:c,direction:a,orientation:o,children:e.jsx(q.Slot,{scope:r,children:e.jsx(T.div,{...d,"data-orientation":o,ref:u,onKeyDown:c?void 0:I})})})}),D="AccordionItem",[He,J]=M(D),pe=x.forwardRef((n,s)=>{const{__scopeAccordion:r,value:c,...a}=n,o=H(D,r),d=Ee(D,r),m=Y(r),u=ne(),b=c&&d.value.includes(c)||!1,h=o.disabled||n.disabled;return e.jsx(He,{scope:r,open:b,disabled:h,triggerId:u,children:e.jsx(Te,{"data-orientation":o.orientation,"data-state":he(b),...m,...a,ref:s,disabled:h,open:b,onOpenChange:v=>{v?d.onItemOpen(c):d.onItemClose(c)}})})});pe.displayName=D;var me="AccordionHeader",ue=x.forwardRef((n,s)=>{const{__scopeAccordion:r,...c}=n,a=H(f,r),o=J(me,r);return e.jsx(T.h3,{"data-orientation":a.orientation,"data-state":he(o.open),"data-disabled":o.disabled?"":void 0,...c,ref:s})});ue.displayName=me;var G="AccordionTrigger",xe=x.forwardRef((n,s)=>{const{__scopeAccordion:r,...c}=n,a=H(f,r),o=J(G,r),d=Ve(G,r),m=Y(r);return e.jsx(q.ItemSlot,{scope:r,children:e.jsx(ke,{"aria-disabled":o.open&&!d.collapsible||void 0,"data-orientation":a.orientation,id:o.triggerId,...m,...c,ref:s})})});xe.displayName=G;var be="AccordionContent",ge=x.forwardRef((n,s)=>{const{__scopeAccordion:r,...c}=n,a=H(f,r),o=J(be,r),d=Y(r);return e.jsx(Re,{role:"region","aria-labelledby":o.triggerId,"data-orientation":a.orientation,...d,...c,ref:s,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...n.style}})});ge.displayName=be;function he(n){return n?"open":"closed"}var $e=te,Le=pe,We=ue,Fe=xe,Ge=ge;function A({...n}){return e.jsx($e,{"data-slot":"accordion",...n})}function t({className:n,...s}){return e.jsx(Le,{"data-slot":"accordion-item",className:U("border-b last:border-b-0",n),...s})}function i({className:n,children:s,...r}){return e.jsx(We,{className:"flex",children:e.jsxs(Fe,{"data-slot":"accordion-trigger",className:U("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",n),...r,children:[s,e.jsx(ye,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function l({className:n,children:s,...r}){return e.jsx(Ge,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...r,children:e.jsx("div",{className:U("pt-0 pb-4",n),children:s})})}A.__docgenInfo={description:"",methods:[],displayName:"Accordion"};t.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};i.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};l.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};const cn={title:"UI/contents-active/Accordion",component:A,parameters:{layout:"centered",docs:{description:{component:`
ㅁㅁRadix UI 기반의 아코디언 컴포넌트입니다. 세로로 쌓인 아이템 목록을 보여주며, 각 아이템을 확장하거나 축소하여 내용을 표시할 수 있습니다.

## 주요 기능
- **단일/다중 확장**: \`type\` prop을 통해 한 번에 하나의 아이템만 열리도록(\`single\`) 하거나 여러 아이템을 동시에 열 수 있도록(\`multiple\`) 설정
- **접기 가능**: \`collapsible\` prop (type='single'일 때)을 사용하여 열려 있는 아이템을 다시 클릭하여 닫기 가능
- **완전한 접근성**: 키보드 네비게이션(Tab, Arrow keys, Home/End, Enter/Space) 및 WAI-ARIA 표준 완벽 지원
- **스크린 리더 지원**: 시각 장애인 사용자를 위한 완전한 스크린 리더 호환성
- **애니메이션**: 부드러운 확장/축소 애니메이션 내장
- **유연한 구성**: AccordionItem, AccordionTrigger, AccordionContent 컴포넌트 조합으로 자유로운 구조 생성
- **커스터마이징**: TailwindCSS 클래스를 통한 스타일 커스터마이징 지원

## 사용법
\`\`\`tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// 단일 선택 (기본)
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>질문이 있나요?</AccordionTrigger>
    <AccordionContent>
      네, 언제든지 문의하세요.
    </AccordionContent>
  </AccordionItem>
</Accordion>

// 다중 선택
<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>첫 번째 질문</AccordionTrigger>
    <AccordionContent>첫 번째 답변</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>두 번째 질문</AccordionTrigger>
    <AccordionContent>두 번째 답변</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

## Props
- \`type\`: 'single' | 'multiple' - 확장 모드 설정
- \`collapsible\`: boolean - 닫기 가능 여부 (single 타입에서만)
- \`defaultValue\`: string | string[] - 기본 열린 아이템
- \`value\`: string | string[] - 제어된 열린 아이템
- \`onValueChange\`: (value) => void - 값 변경 핸들러
        `}}},tags:["autodocs"],render:n=>e.jsxs(A,{...n,className:"w-[400px]",children:[e.jsxs(t,{value:"item-1",children:[e.jsx(i,{children:"접근성이 지원되나요?"}),e.jsx(l,{children:"네, WAI-ARIA 디자인 패턴을 완벽하게 준수합니다. 키보드 네비게이션과 스크린 리더를 완전히 지원합니다."})]}),e.jsxs(t,{value:"item-2",children:[e.jsx(i,{children:"스타일이 적용되어 있나요?"}),e.jsx(l,{children:"네, 다른 컴포넌트들과 일관된 디자인의 기본 스타일이 적용되어 있습니다. TailwindCSS를 통해 쉽게 커스터마이징할 수 있습니다."})]}),e.jsxs(t,{value:"item-3",children:[e.jsx(i,{children:"애니메이션이 지원되나요?"}),e.jsx(l,{children:"네, 기본적으로 부드러운 확장/축소 애니메이션이 활성화되어 있습니다. 필요에 따라 비활성화할 수도 있습니다."})]})]})},R={render:()=>e.jsxs(A,{type:"single",collapsible:!0,defaultValue:"item-1",className:"w-[500px]",children:[e.jsxs(t,{value:"item-1",children:[e.jsx(i,{children:"회원가입 방법이 궁금합니다."}),e.jsx(l,{children:"회원가입은 메인 페이지 우측 상단의 '회원가입' 버튼을 클릭하여 진행할 수 있습니다. 이메일 인증과 개인정보 입력이 필요합니다."})]}),e.jsxs(t,{value:"item-2",children:[e.jsx(i,{children:"비밀번호를 잤어버렸어요."}),e.jsx(l,{children:"로그인 페이지에서 '비밀번호 찾기' 링크를 클릭하시면 됩니다. 등록된 이메일로 비밀번호 재설정 링크가 전송됩니다."})]}),e.jsxs(t,{value:"item-3",children:[e.jsx(i,{children:"배송 정책이 어떻게 되나요?"}),e.jsx(l,{children:"3만원 이상 주문 시 무료배송입니다. 일반 배송은 2-3일, 도서산간 지역은 3-5일 소요됩니다."})]})]}),parameters:{docs:{description:{story:"기본 아코디언입니다. type='single'이며 collapsible이 true이므로 하나의 아이템만 열 수 있고, 열린 아이템을 다시 닫을 수도 있습니다. FAQ 페이지에 적합한 형태입니다."}}}},S={render:()=>e.jsxs(A,{type:"multiple",defaultValue:["account","security"],className:"w-[500px]",children:[e.jsxs(t,{value:"account",children:[e.jsx(i,{children:"계정 설정"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"계정 정보 수정"}),e.jsx("button",{className:"text-sm text-blue-600 hover:underline",children:"수정"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"이메일 변경"}),e.jsx("button",{className:"text-sm text-blue-600 hover:underline",children:"변경"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"계정 삭제"}),e.jsx("button",{className:"text-sm text-red-600 hover:underline",children:"삭제"})]})]})})]}),e.jsxs(t,{value:"security",children:[e.jsx(i,{children:"보안 설정"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"비밀번호 변경"}),e.jsx("button",{className:"text-sm text-blue-600 hover:underline",children:"변경"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"2단계 인증"}),e.jsx("span",{className:"text-sm text-green-600",children:"활성화됨"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"로그인 기록"}),e.jsx("button",{className:"text-sm text-blue-600 hover:underline",children:"보기"})]})]})})]}),e.jsxs(t,{value:"notifications",children:[e.jsx(i,{children:"알림 설정"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded"}),e.jsx("span",{children:"이메일 알림 수신"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{children:"SMS 알림 수신"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded"}),e.jsx("span",{children:"마케팅 정보 수신"})]})]})})]})]}),parameters:{docs:{description:{story:"type='multiple'로 설정하여 여러 아이템을 동시에 열 수 있는 아코디언입니다. 설정 페이지나 대시보드에서 여러 섹션을 동시에 확인할 때 유용합니다."}}}},_={render:()=>e.jsxs(A,{type:"single",collapsible:!1,defaultValue:"dashboard",className:"w-[500px]",children:[e.jsxs(t,{value:"dashboard",children:[e.jsx(i,{children:"대시보드"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"개요"}),e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"통계"}),e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"보고서"})]})})]}),e.jsxs(t,{value:"products",children:[e.jsx(i,{children:"상품 관리"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"상품 목록"}),e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"상품 등록"}),e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"카테고리 관리"}),e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"재고 관리"})]})})]}),e.jsxs(t,{value:"orders",children:[e.jsx(i,{children:"주문 관리"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"주문 목록"}),e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"배송 관리"}),e.jsx("a",{href:"#",className:"block py-2 px-3 rounded hover:bg-gray-100",children:"반품/교환"})]})})]})]}),parameters:{docs:{description:{story:"collapsible=false로 설정하면, 항상 하나의 아이템이 열려있는 상태가 유지됩니다. 사이드바 내비게이션에 적합한 형태입니다."}}}},P={render:()=>{const[n,s]=x.useState("pricing");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>s("features"),className:"px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200",children:"기능 보기"}),e.jsx("button",{onClick:()=>s("pricing"),className:"px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200",children:"가격 보기"}),e.jsx("button",{onClick:()=>s("support"),className:"px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200",children:"지원 보기"})]}),e.jsxs(A,{type:"single",value:n,onValueChange:s,className:"w-[500px]",children:[e.jsxs(t,{value:"features",children:[e.jsx(i,{children:"주요 기능"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{children:"실시간 협업"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{children:"무제한 프로젝트"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{children:"고급 분석"})]})]})})]}),e.jsxs(t,{value:"pricing",children:[e.jsx(i,{children:"요금제"}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded",children:[e.jsx("h4",{className:"font-semibold",children:"스타터"}),e.jsxs("p",{className:"text-2xl font-bold",children:["₩9,900",e.jsx("span",{className:"text-sm font-normal",children:"/월"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"개인 사용자에게 적합"})]}),e.jsxs("div",{className:"p-4 border rounded bg-blue-50",children:[e.jsx("h4",{className:"font-semibold",children:"프로"}),e.jsxs("p",{className:"text-2xl font-bold",children:["₩29,900",e.jsx("span",{className:"text-sm font-normal",children:"/월"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"팀 협업에 최적화"})]})]})})]}),e.jsxs(t,{value:"support",children:[e.jsx(i,{children:"고객 지원"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"이메일 지원"}),e.jsx("span",{className:"text-green-600",children:"24시간"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"실시간 채팅"}),e.jsx("span",{className:"text-green-600",children:"평일 9-18시"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"전화 지원"}),e.jsx("span",{className:"text-blue-600",children:"프로 플랜 이상"})]})]})})]})]})]})},parameters:{docs:{description:{story:"외부 버튼으로 아코디언 상태를 제어할 수 있는 예시입니다. value와 onValueChange props를 사용하여 완전히 제어된 컴포넌트로 만들 수 있습니다."}}}},E={render:()=>e.jsxs(A,{type:"single",collapsible:!0,className:"w-[500px] space-y-2",children:[e.jsxs(t,{value:"item-1",className:"border border-blue-200 rounded-lg overflow-hidden",children:[e.jsx(i,{className:"bg-blue-50 px-4 py-3 hover:bg-blue-100 font-semibold text-blue-900",children:"💡 혁신적인 아이디어"}),e.jsx(l,{className:"bg-white px-4 py-3 border-t border-blue-200",children:"창의적이고 혁신적인 아이디어로 비즈니스를 발전시켜보세요. 새로운 관점에서 문제를 바라보고 독창적인 솔루션을 제안합니다."})]}),e.jsxs(t,{value:"item-2",className:"border border-green-200 rounded-lg overflow-hidden",children:[e.jsx(i,{className:"bg-green-50 px-4 py-3 hover:bg-green-100 font-semibold text-green-900",children:"🚀 빠른 실행력"}),e.jsx(l,{className:"bg-white px-4 py-3 border-t border-green-200",children:"계획부터 실행까지 빠르고 효율적으로 진행합니다. 민첩한 개발 방법론을 통해 신속한 결과물을 제공합니다."})]}),e.jsxs(t,{value:"item-3",className:"border border-purple-200 rounded-lg overflow-hidden",children:[e.jsx(i,{className:"bg-purple-50 px-4 py-3 hover:bg-purple-100 font-semibold text-purple-900",children:"🎯 정확한 타겟팅"}),e.jsx(l,{className:"bg-white px-4 py-3 border-t border-purple-200",children:"데이터 분석을 통해 정확한 타겟 고객을 식별하고 맞춤형 솔루션을 제공하여 높은 성과를 달성합니다."})]})]}),parameters:{docs:{description:{story:"TailwindCSS를 사용하여 아코디언의 스타일을 커스터마이징한 예시입니다. 각 아이템마다 다른 색상 테마를 적용하여 시각적 구분을 명확히 했습니다."}}}},V={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🔧 키보드 네비게이션 가이드"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-white rounded border text-xs",children:"Tab"})," - 다음 트리거로 이동"]}),e.jsxs("div",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-white rounded border text-xs",children:"Shift + Tab"})," - 이전 트리거로 이동"]}),e.jsxs("div",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-white rounded border text-xs",children:"Enter / Space"})," - 아이템 열기/닫기"]}),e.jsxs("div",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-white rounded border text-xs",children:"↑ / ↓"})," - 트리거 간 이동"]}),e.jsxs("div",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-white rounded border text-xs",children:"Home / End"})," - 첫/마지막 트리거로 이동"]})]})]}),e.jsxs(A,{type:"single",collapsible:!0,className:"w-[500px]",children:[e.jsxs(t,{value:"keyboard",children:[e.jsx(i,{children:"키보드로 조작해보세요"}),e.jsx(l,{children:"Tab 키를 사용하여 이 트리거에 포커스를 맞추고, Enter 또는 Space 키로 열고 닫을 수 있습니다. 화살표 키로도 다른 트리거들 사이를 이동할 수 있습니다."})]}),e.jsxs(t,{value:"screenreader",children:[e.jsx(i,{children:"스크린 리더 지원"}),e.jsx(l,{children:"이 컴포넌트는 WAI-ARIA 표준을 준수하여 스크린 리더 사용자들이 콘텐츠의 구조와 상태를 명확히 이해할 수 있도록 설계되었습니다."})]}),e.jsxs(t,{value:"focus",children:[e.jsx(i,{children:"포커스 관리"}),e.jsx(l,{children:"키보드 포커스가 명확히 표시되며, 논리적인 순서로 요소들 사이를 이동할 수 있습니다. 포커스 링이 잘 보이도록 디자인되어 있습니다."})]})]})]}),parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다. WAI-ARIA 표준을 준수하여 모든 사용자가 접근할 수 있습니다."}}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible defaultValue="item-1" className="w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>회원가입 방법이 궁금합니다.</AccordionTrigger>
        <AccordionContent>
          회원가입은 메인 페이지 우측 상단의 '회원가입' 버튼을 클릭하여 진행할 수 있습니다. 
          이메일 인증과 개인정보 입력이 필요합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>비밀번호를 잤어버렸어요.</AccordionTrigger>
        <AccordionContent>
          로그인 페이지에서 '비밀번호 찾기' 링크를 클릭하시면 됩니다. 
          등록된 이메일로 비밀번호 재설정 링크가 전송됩니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>배송 정책이 어떻게 되나요?</AccordionTrigger>
        <AccordionContent>
          3만원 이상 주문 시 무료배송입니다. 
          일반 배송은 2-3일, 도서산간 지역은 3-5일 소요됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "기본 아코디언입니다. type='single'이며 collapsible이 true이므로 하나의 아이템만 열 수 있고, 열린 아이템을 다시 닫을 수도 있습니다. FAQ 페이지에 적합한 형태입니다."
      }
    }
  }
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" defaultValue={["account", "security"]} className="w-[500px]">
      <AccordionItem value="account">
        <AccordionTrigger>계정 설정</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>계정 정보 수정</span>
              <button className="text-sm text-blue-600 hover:underline">수정</button>
            </div>
            <div className="flex justify-between items-center">
              <span>이메일 변경</span>
              <button className="text-sm text-blue-600 hover:underline">변경</button>
            </div>
            <div className="flex justify-between items-center">
              <span>계정 삭제</span>
              <button className="text-sm text-red-600 hover:underline">삭제</button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="security">
        <AccordionTrigger>보안 설정</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>비밀번호 변경</span>
              <button className="text-sm text-blue-600 hover:underline">변경</button>
            </div>
            <div className="flex justify-between items-center">
              <span>2단계 인증</span>
              <span className="text-sm text-green-600">활성화됨</span>
            </div>
            <div className="flex justify-between items-center">
              <span>로그인 기록</span>
              <button className="text-sm text-blue-600 hover:underline">보기</button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="notifications">
        <AccordionTrigger>알림 설정</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>이메일 알림 수신</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>SMS 알림 수신</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>마케팅 정보 수신</span>
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "type='multiple'로 설정하여 여러 아이템을 동시에 열 수 있는 아코디언입니다. 설정 페이지나 대시보드에서 여러 섹션을 동시에 확인할 때 유용합니다."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible={false} defaultValue="dashboard" className="w-[500px]">
      <AccordionItem value="dashboard">
        <AccordionTrigger>대시보드</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">개요</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">통계</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">보고서</a>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="products">
        <AccordionTrigger>상품 관리</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">상품 목록</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">상품 등록</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">카테고리 관리</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">재고 관리</a>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="orders">
        <AccordionTrigger>주문 관리</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">주문 목록</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">배송 관리</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">반품/교환</a>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "collapsible=false로 설정하면, 항상 하나의 아이템이 열려있는 상태가 유지됩니다. 사이드바 내비게이션에 적합한 형태입니다."
      }
    }
  }
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string>("pricing");
    return <div className="space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setValue("features")} className="px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200">
            기능 보기
          </button>
          <button onClick={() => setValue("pricing")} className="px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200">
            가격 보기
          </button>
          <button onClick={() => setValue("support")} className="px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200">
            지원 보기
          </button>
        </div>
        <Accordion type="single" value={value} onValueChange={setValue} className="w-[500px]">
          <AccordionItem value="features">
            <AccordionTrigger>주요 기능</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>실시간 협업</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>무제한 프로젝트</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>고급 분석</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger>요금제</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded">
                  <h4 className="font-semibold">스타터</h4>
                  <p className="text-2xl font-bold">₩9,900<span className="text-sm font-normal">/월</span></p>
                  <p className="text-sm text-gray-600">개인 사용자에게 적합</p>
                </div>
                <div className="p-4 border rounded bg-blue-50">
                  <h4 className="font-semibold">프로</h4>
                  <p className="text-2xl font-bold">₩29,900<span className="text-sm font-normal">/월</span></p>
                  <p className="text-sm text-gray-600">팀 협업에 최적화</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger>고객 지원</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>이메일 지원</span>
                  <span className="text-green-600">24시간</span>
                </div>
                <div className="flex justify-between">
                  <span>실시간 채팅</span>
                  <span className="text-green-600">평일 9-18시</span>
                </div>
                <div className="flex justify-between">
                  <span>전화 지원</span>
                  <span className="text-blue-600">프로 플랜 이상</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "외부 버튼으로 아코디언 상태를 제어할 수 있는 예시입니다. value와 onValueChange props를 사용하여 완전히 제어된 컴포넌트로 만들 수 있습니다."
      }
    }
  }
}`,...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[500px] space-y-2">
      <AccordionItem value="item-1" className="border border-blue-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-blue-50 px-4 py-3 hover:bg-blue-100 font-semibold text-blue-900">
          💡 혁신적인 아이디어
        </AccordionTrigger>
        <AccordionContent className="bg-white px-4 py-3 border-t border-blue-200">
          창의적이고 혁신적인 아이디어로 비즈니스를 발전시켜보세요. 
          새로운 관점에서 문제를 바라보고 독창적인 솔루션을 제안합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border border-green-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-green-50 px-4 py-3 hover:bg-green-100 font-semibold text-green-900">
          🚀 빠른 실행력
        </AccordionTrigger>
        <AccordionContent className="bg-white px-4 py-3 border-t border-green-200">
          계획부터 실행까지 빠르고 효율적으로 진행합니다. 
          민첩한 개발 방법론을 통해 신속한 결과물을 제공합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border border-purple-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-purple-50 px-4 py-3 hover:bg-purple-100 font-semibold text-purple-900">
          🎯 정확한 타겟팅
        </AccordionTrigger>
        <AccordionContent className="bg-white px-4 py-3 border-t border-purple-200">
          데이터 분석을 통해 정확한 타겟 고객을 식별하고 
          맞춤형 솔루션을 제공하여 높은 성과를 달성합니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "TailwindCSS를 사용하여 아코디언의 스타일을 커스터마이징한 예시입니다. 각 아이템마다 다른 색상 테마를 적용하여 시각적 구분을 명확히 했습니다."
      }
    }
  }
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold mb-2">🔧 키보드 네비게이션 가이드</h4>
        <div className="text-sm space-y-1">
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">Tab</kbd> - 다음 트리거로 이동</div>
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">Shift + Tab</kbd> - 이전 트리거로 이동</div>
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">Enter / Space</kbd> - 아이템 열기/닫기</div>
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">↑ / ↓</kbd> - 트리거 간 이동</div>
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">Home / End</kbd> - 첫/마지막 트리거로 이동</div>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-[500px]">
        <AccordionItem value="keyboard">
          <AccordionTrigger>키보드로 조작해보세요</AccordionTrigger>
          <AccordionContent>
            Tab 키를 사용하여 이 트리거에 포커스를 맞추고, Enter 또는 Space 키로 열고 닫을 수 있습니다.
            화살표 키로도 다른 트리거들 사이를 이동할 수 있습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="screenreader">
          <AccordionTrigger>스크린 리더 지원</AccordionTrigger>
          <AccordionContent>
            이 컴포넌트는 WAI-ARIA 표준을 준수하여 스크린 리더 사용자들이 
            콘텐츠의 구조와 상태를 명확히 이해할 수 있도록 설계되었습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="focus">
          <AccordionTrigger>포커스 관리</AccordionTrigger>
          <AccordionContent>
            키보드 포커스가 명확히 표시되며, 논리적인 순서로 요소들 사이를 이동할 수 있습니다.
            포커스 링이 잘 보이도록 디자인되어 있습니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다. WAI-ARIA 표준을 준수하여 모든 사용자가 접근할 수 있습니다."
      }
    }
  }
}`,...V.parameters?.docs?.source}}};export{V as AccessibilityDemo,P as Controlled,E as CustomStyling,R as Default,S as Multiple,_ as SingleNonCollapsible,cn as default};
