import{j as e}from"./jsx-runtime-CUYHGflD.js";import{r as a}from"./iframe-DUkcZvY3.js";import{c as le}from"./index-dEzg-V8q.js";import{u as H,b as ne}from"./index-Qk9vCU2k.js";import{c as P,R as oe,T as ae,W as ie,C as se,b as ce,D as de,a as z,P as ge,O as pe}from"./index-6IsHZ3eE.js";import{c as Ae}from"./index-DtkgH7QJ.js";import{c as h}from"./utils-CBfrqCZ4.js";import{b as M,B as s}from"./button-BH1IU7qt.js";import{T as R}from"./trash-2-sHkUCPXd.js";import{T as De}from"./triangle-alert-Ck88Abrd.js";import{D as E}from"./download-Byz1FdaI.js";import{S as B}from"./save-ti30RaoC.js";import{X as me}from"./x-_CoC7vyt.js";import{L as F}from"./log-out-zrWcum1C.js";import"./index-CS53fVwJ.js";import"./index-D7Dk64nB.js";import"./index-Bw06jJjB.js";import"./index-Dr9TOaCp.js";import"./index-BSYvLJny.js";import"./index-CfBgQs8v.js";import"./index-DWrvaLHK.js";import"./index-B-LXRLju.js";import"./index-B0-S_xVN.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-BYaaJxR_.js";var $="AlertDialog",[ue]=le($,[P]),x=P(),L=r=>{const{__scopeAlertDialog:t,...l}=r,n=x(t);return e.jsx(oe,{...n,...l,modal:!0})};L.displayName=$;var xe="AlertDialogTrigger",W=a.forwardRef((r,t)=>{const{__scopeAlertDialog:l,...n}=r,o=x(l);return e.jsx(ae,{...o,...n,ref:t})});W.displayName=xe;var he="AlertDialogPortal",G=r=>{const{__scopeAlertDialog:t,...l}=r,n=x(t);return e.jsx(ge,{...n,...l})};G.displayName=he;var je="AlertDialogOverlay",U=a.forwardRef((r,t)=>{const{__scopeAlertDialog:l,...n}=r,o=x(l);return e.jsx(pe,{...o,...n,ref:t})});U.displayName=je;var j="AlertDialogContent",[fe,ve]=ue(j),Ce=ne("AlertDialogContent"),V=a.forwardRef((r,t)=>{const{__scopeAlertDialog:l,children:n,...o}=r,f=x(l),C=a.useRef(null),te=H(t,C),I=a.useRef(null);return e.jsx(ie,{contentName:j,titleName:X,docsSlug:"alert-dialog",children:e.jsx(fe,{scope:l,cancelRef:I,children:e.jsxs(se,{role:"alertdialog",...f,...o,ref:te,onOpenAutoFocus:Ae(o.onOpenAutoFocus,v=>{v.preventDefault(),I.current?.focus({preventScroll:!0})}),onPointerDownOutside:v=>v.preventDefault(),onInteractOutside:v=>v.preventDefault(),children:[e.jsx(Ce,{children:n}),e.jsx(ye,{contentRef:C})]})})})});V.displayName=j;var X="AlertDialogTitle",Y=a.forwardRef((r,t)=>{const{__scopeAlertDialog:l,...n}=r,o=x(l);return e.jsx(ce,{...o,...n,ref:t})});Y.displayName=X;var q="AlertDialogDescription",J=a.forwardRef((r,t)=>{const{__scopeAlertDialog:l,...n}=r,o=x(l);return e.jsx(de,{...o,...n,ref:t})});J.displayName=q;var Ne="AlertDialogAction",K=a.forwardRef((r,t)=>{const{__scopeAlertDialog:l,...n}=r,o=x(l);return e.jsx(z,{...o,...n,ref:t})});K.displayName=Ne;var Q="AlertDialogCancel",Z=a.forwardRef((r,t)=>{const{__scopeAlertDialog:l,...n}=r,{cancelRef:o}=ve(Q,l),f=x(l),C=H(t,o);return e.jsx(z,{...f,...n,ref:C})});Z.displayName=Q;var ye=({contentRef:r})=>{const t=`\`${j}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${j}\` by passing a \`${q}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${j}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return a.useEffect(()=>{document.getElementById(r.current?.getAttribute("aria-describedby"))||console.warn(t)},[t,r]),null},Te=L,be=W,Se=G,_e=U,we=V,Oe=K,ke=Z,Ee=Y,Ie=J;function i({...r}){return e.jsx(Te,{"data-slot":"alert-dialog",...r})}function u({...r}){return e.jsx(be,{"data-slot":"alert-dialog-trigger",...r})}function ee({...r}){return e.jsx(Se,{"data-slot":"alert-dialog-portal",...r})}function re({className:r,...t}){return e.jsx(_e,{"data-slot":"alert-dialog-overlay",className:h("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",r),...t})}function c({className:r,...t}){return e.jsxs(ee,{children:[e.jsx(re,{}),e.jsx(we,{"data-slot":"alert-dialog-content",className:h("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",r),...t})]})}function d({className:r,...t}){return e.jsx("div",{"data-slot":"alert-dialog-header",className:h("flex flex-col gap-2 text-center sm:text-left",r),...t})}function g({className:r,...t}){return e.jsx("div",{"data-slot":"alert-dialog-footer",className:h("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",r),...t})}function p({className:r,...t}){return e.jsx(Ee,{"data-slot":"alert-dialog-title",className:h("text-lg font-semibold",r),...t})}function A({className:r,...t}){return e.jsx(Ie,{"data-slot":"alert-dialog-description",className:h("text-muted-foreground text-sm",r),...t})}function D({className:r,...t}){return e.jsx(Oe,{className:h(M(),r),...t})}function m({className:r,...t}){return e.jsx(ke,{className:h(M({variant:"outline"}),r),...t})}i.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};ee.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};re.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};u.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};c.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};d.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};g.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};p.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};A.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};D.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};m.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};const ar={title:"UI/Overlay/AlertDialog",component:i,parameters:{layout:"centered",docs:{description:{component:`
Radix UI 기반의 경고 대화상자 컴포넌트입니다. 사용자에게 중요한 정보를 전달하거나 확인이 필요한 작업을 수행하기 전에 표시됩니다.

## 주요 기능
- **모달 대화상자**: 오버레이와 함께 화면 중앙에 표시되며, 배경 클릭으로 닫기 불가
- **접근성 완벽 지원**: WAI-ARIA Dialog 패턴 준수, 키보드 네비게이션(Tab, Escape) 및 포커스 트랩
- **스크린 리더 지원**: 제목, 설명, 액션 버튼에 대한 완전한 스크린 리더 호환성
- **부드러운 애니메이션**: 열기/닫기 시 페이드 인/아웃 및 줌 효과
- **포털 렌더링**: React Portal을 사용하여 DOM 트리 최상위에 렌더링
- **Escape 키 지원**: Escape 키로 대화상자 닫기
- **포커스 관리**: 열릴 때 첫 번째 포커스 가능 요소로 포커스 이동, 닫힐 때 트리거로 복귀

## 사용법
\`\`\`tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">삭제</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>정말로 삭제하시겠습니까?</AlertDialogTitle>
      <AlertDialogDescription>
        이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>취소</AlertDialogCancel>
      <AlertDialogAction>삭제</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
\`\`\`

## 구성 요소
- \`AlertDialog\`: 대화상자의 루트 컨테이너
- \`AlertDialogTrigger\`: 대화상자를 여는 트리거 요소
- \`AlertDialogContent\`: 대화상자의 콘텐츠 컨테이너
- \`AlertDialogHeader\`: 제목과 설명을 담는 헤더 영역
- \`AlertDialogTitle\`: 대화상자 제목
- \`AlertDialogDescription\`: 대화상자 설명
- \`AlertDialogFooter\`: 액션 버튼들을 담는 푸터 영역
- \`AlertDialogAction\`: 주요 액션 버튼 (확인, 삭제 등)
- \`AlertDialogCancel\`: 취소 버튼

## 접근성 가이드라인
- 제목은 간결하고 명확하게 작성
- 설명은 행동의 결과를 명확히 설명
- 파괴적인 액션은 destructive 스타일 사용
- 키보드만으로도 모든 기능 사용 가능
        `}}},tags:["autodocs"],render:r=>e.jsxs(i,{...r,children:[e.jsx(u,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"확인 대화상자 열기"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"작업을 계속하시겠습니까?"}),e.jsx(A,{children:"이 작업을 수행하면 일부 변경사항이 적용됩니다. 계속 진행하시겠습니까?"})]}),e.jsxs(g,{children:[e.jsx(m,{children:"취소"}),e.jsx(D,{children:"계속"})]})]})]})},N={render:()=>e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"기본 대화상자"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"작업 확인"}),e.jsx(A,{children:"선택한 작업을 수행하시겠습니까? 이 작업은 즉시 실행됩니다."})]}),e.jsxs(g,{children:[e.jsx(m,{children:"취소"}),e.jsx(D,{children:"확인"})]})]})]}),parameters:{docs:{description:{story:"기본 Alert Dialog입니다. 일반적인 확인이 필요한 작업에 사용됩니다. 중립적인 스타일의 액션 버튼을 제공합니다."}}}},y={render:()=>e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsxs(s,{variant:"destructive",children:[e.jsx(R,{}),"삭제"]})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsxs(p,{className:"flex items-center gap-2",children:[e.jsx(De,{className:"size-5 text-destructive"}),"정말로 삭제하시겠습니까?"]}),e.jsx(A,{children:"이 작업은 되돌릴 수 없습니다. 선택한 항목이 서버에서 영구적으로 삭제되며, 관련된 모든 데이터도 함께 제거됩니다."})]}),e.jsxs(g,{children:[e.jsx(m,{children:"취소"}),e.jsxs(D,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:[e.jsx(R,{className:"size-4"}),"삭제"]})]})]})]}),parameters:{docs:{description:{story:"파괴적인 작업(삭제, 제거 등)을 위한 Alert Dialog입니다. 경고 아이콘과 빨간색 액션 버튼으로 위험성을 강조합니다."}}}},Re=()=>{alert("다운로드가 시작되었습니다.")},T={render:()=>e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsxs(s,{variant:"outline",children:[e.jsx(E,{}),"다운로드"]})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsxs(p,{className:"flex items-center gap-2",children:[e.jsx(E,{className:"size-5 text-primary"}),"파일 다운로드"]}),e.jsx(A,{children:"선택한 파일을 다운로드하시겠습니까? 파일 크기는 약 25MB이며, 다운로드에 몇 분이 소요될 수 있습니다."})]}),e.jsxs(g,{children:[e.jsx(m,{children:"취소"}),e.jsxs(D,{onClick:Re,children:[e.jsx(E,{className:"size-4"}),"다운로드 시작"]})]})]})]}),parameters:{docs:{description:{story:"아이콘이 포함된 Alert Dialog입니다. 시각적으로 작업의 성격을 더 명확하게 전달합니다."}}}},b={render:()=>e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"긴 내용 보기"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"서비스 이용약관 동의"}),e.jsx(A,{asChild:!0,children:e.jsxs("div",{className:"space-y-4 text-sm",children:[e.jsx("p",{children:"본 서비스를 이용하기 위해서는 다음 약관에 동의해야 합니다:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 pl-4",children:[e.jsx("li",{children:"개인정보 수집 및 이용에 대한 동의"}),e.jsx("li",{children:"서비스 이용약관 준수"}),e.jsx("li",{children:"쿠키 및 유사 기술 사용에 대한 동의"}),e.jsx("li",{children:"마케팅 정보 수신 동의 (선택사항)"})]}),e.jsx("p",{className:"text-muted-foreground",children:"자세한 내용은 개별 약관을 확인해 주세요. 필수 항목에 동의하지 않으시면 서비스 이용이 제한될 수 있습니다."})]})})]}),e.jsxs(g,{children:[e.jsx(m,{children:"거절"}),e.jsx(D,{children:"모두 동의"})]})]})]}),parameters:{docs:{description:{story:"긴 내용이 포함된 Alert Dialog입니다. 리스트나 여러 단락의 텍스트를 포함할 수 있습니다."}}}},S={render:()=>e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsxs(s,{variant:"outline",children:[e.jsx(B,{}),"저장"]})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"변경사항 저장"}),e.jsx(A,{children:"저장하지 않은 변경사항이 있습니다. 어떻게 하시겠습니까?"})]}),e.jsxs(g,{className:"flex-col gap-2 sm:flex-row",children:[e.jsx(m,{children:"취소"}),e.jsxs(s,{variant:"outline",className:"order-1",children:[e.jsx(me,{className:"size-4"}),"저장하지 않고 닫기"]}),e.jsxs(D,{children:[e.jsx(B,{className:"size-4"}),"저장하고 닫기"]})]})]})]}),parameters:{docs:{description:{story:"여러 액션이 포함된 Alert Dialog입니다. 사용자에게 다양한 선택지를 제공합니다."}}}},_={render:()=>e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsxs(s,{variant:"ghost",children:[e.jsx(F,{}),"로그아웃"]})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"로그아웃 확인"}),e.jsx(A,{children:"정말 로그아웃하시겠습니까? 저장하지 않은 작업이 있다면 먼저 저장해 주세요."})]}),e.jsxs(g,{children:[e.jsx(m,{children:"취소"}),e.jsxs(D,{children:[e.jsx(F,{className:"size-4"}),"로그아웃"]})]})]})]}),parameters:{docs:{description:{story:"로그아웃 확인을 위한 Alert Dialog입니다. 사용자 세션 종료 전 최종 확인을 받습니다."}}}},w={render:()=>{const[r,t]=a.useState(!1),[l,n]=a.useState(1),o=()=>{l<3?n(l+1):(t(!1),n(1))},f=()=>{t(!1),n(1)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{onClick:()=>t(!0),children:"다단계 프로세스 시작"}),e.jsx(i,{open:r,onOpenChange:t,children:e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsxs(p,{children:["설정 마법사 - 단계 ",l,"/3"]}),e.jsxs(A,{children:[l===1&&"첫 번째 단계: 기본 정보를 설정합니다.",l===2&&"두 번째 단계: 고급 옵션을 구성합니다.",l===3&&"마지막 단계: 설정을 확인하고 완료합니다."]})]}),e.jsxs(g,{children:[e.jsx(m,{onClick:f,children:"취소"}),e.jsx(D,{onClick:o,children:l<3?"다음":"완료"})]})]})}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["현재 열림 상태: ",r?"열림":"닫힘"]})]})},parameters:{docs:{description:{story:"제어된 Alert Dialog입니다. 외부 상태로 열림/닫힘을 관리하며, 다단계 프로세스를 구현할 수 있습니다."}}}},O={render:()=>e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsx(s,{className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white",children:"커스텀 스타일"})}),e.jsxs(c,{className:"border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50",children:[e.jsxs(d,{children:[e.jsx(p,{className:"text-purple-900",children:"🎨 커스텀 스타일 대화상자"}),e.jsx(A,{className:"text-purple-700",children:"TailwindCSS 클래스를 사용하여 Alert Dialog의 모양을 자유롭게 커스터마이징할 수 있습니다. 배경, 테두리, 색상 등을 변경해보세요."})]}),e.jsxs(g,{children:[e.jsx(m,{className:"border-purple-300 text-purple-700 hover:bg-purple-100",children:"취소"}),e.jsx(D,{className:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",children:"확인"})]})]})]}),parameters:{docs:{description:{story:"커스텀 스타일이 적용된 Alert Dialog입니다. TailwindCSS 클래스를 통해 디자인을 자유롭게 변경할 수 있습니다."}}}},k={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"다음 기능들을 테스트해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"})," 키로 포커스 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Escape"})," 키로 대화상자 닫기"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"})," 또는 ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Space"}),"로 버튼 활성화"]}),e.jsx("li",{children:"스크린 리더로 제목과 설명 읽기"}),e.jsx("li",{children:"포커스 트랩: 대화상자 열림 시 포커스가 내부에 유지됨"})]})]}),e.jsxs(i,{children:[e.jsx(u,{asChild:!0,children:e.jsx(s,{variant:"outline",className:"w-full",children:"접근성 테스트 대화상자 열기"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"접근성 완벽 지원 대화상자"}),e.jsx(A,{children:"이 대화상자는 WAI-ARIA 접근성 가이드라인을 완벽하게 준수합니다. 키보드만으로도 모든 기능을 사용할 수 있으며, 스크린 리더 사용자도 쉽게 이해하고 조작할 수 있습니다."})]}),e.jsxs(g,{children:[e.jsx(m,{children:"취소"}),e.jsx(D,{children:"확인"})]})]})]})]}),parameters:{docs:{description:{story:"Alert Dialog의 접근성 기능을 설명하는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 포커스 관리 등을 테스트할 수 있습니다."}}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">기본 대화상자</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>작업 확인</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            선택한 작업을 수행하시겠습니까? 이 작업은 즉시 실행됩니다.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>취소</AlertDialogCancel>\r
          <AlertDialogAction>확인</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  parameters: {
    docs: {
      description: {
        story: "기본 Alert Dialog입니다. 일반적인 확인이 필요한 작업에 사용됩니다. 중립적인 스타일의 액션 버튼을 제공합니다."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="destructive">\r
          <Trash2 />\r
          삭제\r
        </Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle className="flex items-center gap-2">\r
            <AlertTriangle className="size-5 text-destructive" />\r
            정말로 삭제하시겠습니까?\r
          </AlertDialogTitle>\r
          <AlertDialogDescription>\r
            이 작업은 되돌릴 수 없습니다. 선택한 항목이 서버에서 영구적으로 삭제되며, \r
            관련된 모든 데이터도 함께 제거됩니다.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>취소</AlertDialogCancel>\r
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">\r
            <Trash2 className="size-4" />\r
            삭제\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  parameters: {
    docs: {
      description: {
        story: "파괴적인 작업(삭제, 제거 등)을 위한 Alert Dialog입니다. 경고 아이콘과 빨간색 액션 버튼으로 위험성을 강조합니다."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">\r
          <Download />\r
          다운로드\r
        </Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle className="flex items-center gap-2">\r
            <Download className="size-5 text-primary" />\r
            파일 다운로드\r
          </AlertDialogTitle>\r
          <AlertDialogDescription>\r
            선택한 파일을 다운로드하시겠습니까? 파일 크기는 약 25MB이며, \r
            다운로드에 몇 분이 소요될 수 있습니다.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>취소</AlertDialogCancel>\r
          <AlertDialogAction onClick={handleDownloadAction}>\r
            <Download className="size-4" />\r
            다운로드 시작\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Alert Dialog입니다. 시각적으로 작업의 성격을 더 명확하게 전달합니다."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">긴 내용 보기</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>서비스 이용약관 동의</AlertDialogTitle>\r
          <AlertDialogDescription asChild>\r
            <div className="space-y-4 text-sm">\r
              <p>\r
                본 서비스를 이용하기 위해서는 다음 약관에 동의해야 합니다:\r
              </p>\r
              <ul className="list-disc list-inside space-y-2 pl-4">\r
                <li>개인정보 수집 및 이용에 대한 동의</li>\r
                <li>서비스 이용약관 준수</li>\r
                <li>쿠키 및 유사 기술 사용에 대한 동의</li>\r
                <li>마케팅 정보 수신 동의 (선택사항)</li>\r
              </ul>\r
              <p className="text-muted-foreground">\r
                자세한 내용은 개별 약관을 확인해 주세요. 필수 항목에 동의하지 않으시면 \r
                서비스 이용이 제한될 수 있습니다.\r
              </p>\r
            </div>\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>거절</AlertDialogCancel>\r
          <AlertDialogAction>모두 동의</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  parameters: {
    docs: {
      description: {
        story: "긴 내용이 포함된 Alert Dialog입니다. 리스트나 여러 단락의 텍스트를 포함할 수 있습니다."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">\r
          <Save />\r
          저장\r
        </Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>변경사항 저장</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            저장하지 않은 변경사항이 있습니다. 어떻게 하시겠습니까?\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter className="flex-col gap-2 sm:flex-row">\r
          <AlertDialogCancel>취소</AlertDialogCancel>\r
          <Button variant="outline" className="order-1">\r
            <X className="size-4" />\r
            저장하지 않고 닫기\r
          </Button>\r
          <AlertDialogAction>\r
            <Save className="size-4" />\r
            저장하고 닫기\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  parameters: {
    docs: {
      description: {
        story: "여러 액션이 포함된 Alert Dialog입니다. 사용자에게 다양한 선택지를 제공합니다."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="ghost">\r
          <LogOut />\r
          로그아웃\r
        </Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>로그아웃 확인</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            정말 로그아웃하시겠습니까? 저장하지 않은 작업이 있다면 먼저 저장해 주세요.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>취소</AlertDialogCancel>\r
          <AlertDialogAction>\r
            <LogOut className="size-4" />\r
            로그아웃\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  parameters: {
    docs: {
      description: {
        story: "로그아웃 확인을 위한 Alert Dialog입니다. 사용자 세션 종료 전 최종 확인을 받습니다."
      }
    }
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const handleContinue = () => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        setOpen(false);
        setStep(1);
      }
    };
    const handleCancel = () => {
      setOpen(false);
      setStep(1);
    };
    return <div className="space-y-4">\r
        <Button onClick={() => setOpen(true)}>\r
          다단계 프로세스 시작\r
        </Button>\r
        \r
        <AlertDialog open={open} onOpenChange={setOpen}>\r
          <AlertDialogContent>\r
            <AlertDialogHeader>\r
              <AlertDialogTitle>\r
                설정 마법사 - 단계 {step}/3\r
              </AlertDialogTitle>\r
              <AlertDialogDescription>\r
                {step === 1 && "첫 번째 단계: 기본 정보를 설정합니다."}\r
                {step === 2 && "두 번째 단계: 고급 옵션을 구성합니다."}\r
                {step === 3 && "마지막 단계: 설정을 확인하고 완료합니다."}\r
              </AlertDialogDescription>\r
            </AlertDialogHeader>\r
            <AlertDialogFooter>\r
              <AlertDialogCancel onClick={handleCancel}>취소</AlertDialogCancel>\r
              <AlertDialogAction onClick={handleContinue}>\r
                {step < 3 ? "다음" : "완료"}\r
              </AlertDialogAction>\r
            </AlertDialogFooter>\r
          </AlertDialogContent>\r
        </AlertDialog>\r
        \r
        <p className="text-sm text-muted-foreground">\r
          현재 열림 상태: {open ? "열림" : "닫힘"}\r
        </p>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "제어된 Alert Dialog입니다. 외부 상태로 열림/닫힘을 관리하며, 다단계 프로세스를 구현할 수 있습니다."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">\r
          커스텀 스타일\r
        </Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">\r
        <AlertDialogHeader>\r
          <AlertDialogTitle className="text-purple-900">\r
            🎨 커스텀 스타일 대화상자\r
          </AlertDialogTitle>\r
          <AlertDialogDescription className="text-purple-700">\r
            TailwindCSS 클래스를 사용하여 Alert Dialog의 모양을 자유롭게 \r
            커스터마이징할 수 있습니다. 배경, 테두리, 색상 등을 변경해보세요.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel className="border-purple-300 text-purple-700 hover:bg-purple-100">\r
            취소\r
          </AlertDialogCancel>\r
          <AlertDialogAction className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">\r
            확인\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>,
  parameters: {
    docs: {
      description: {
        story: "커스텀 스타일이 적용된 Alert Dialog입니다. TailwindCSS 클래스를 통해 디자인을 자유롭게 변경할 수 있습니다."
      }
    }
  }
}`,...O.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div className="space-y-2">\r
        <h3 className="text-lg font-semibold">접근성 데모</h3>\r
        <p className="text-sm text-muted-foreground">\r
          다음 기능들을 테스트해보세요:\r
        </p>\r
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">\r
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> 키로 포커스 이동</li>\r
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd> 키로 대화상자 닫기</li>\r
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> 또는 <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 버튼 활성화</li>\r
          <li>스크린 리더로 제목과 설명 읽기</li>\r
          <li>포커스 트랩: 대화상자 열림 시 포커스가 내부에 유지됨</li>\r
        </ul>\r
      </div>\r
      \r
      <AlertDialog>\r
        <AlertDialogTrigger asChild>\r
          <Button variant="outline" className="w-full">\r
            접근성 테스트 대화상자 열기\r
          </Button>\r
        </AlertDialogTrigger>\r
        <AlertDialogContent>\r
          <AlertDialogHeader>\r
            <AlertDialogTitle>\r
              접근성 완벽 지원 대화상자\r
            </AlertDialogTitle>\r
            <AlertDialogDescription>\r
              이 대화상자는 WAI-ARIA 접근성 가이드라인을 완벽하게 준수합니다. \r
              키보드만으로도 모든 기능을 사용할 수 있으며, 스크린 리더 사용자도 \r
              쉽게 이해하고 조작할 수 있습니다.\r
            </AlertDialogDescription>\r
          </AlertDialogHeader>\r
          <AlertDialogFooter>\r
            <AlertDialogCancel>취소</AlertDialogCancel>\r
            <AlertDialogAction>확인</AlertDialogAction>\r
          </AlertDialogFooter>\r
        </AlertDialogContent>\r
      </AlertDialog>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Alert Dialog의 접근성 기능을 설명하는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 포커스 관리 등을 테스트할 수 있습니다."
      }
    }
  }
}`,...k.parameters?.docs?.source}}};export{k as AccessibilityDemo,w as Controlled,O as CustomStyling,N as Default,y as Destructive,_ as Logout,b as LongContent,S as MultipleActions,T as WithIcon,ar as default};
