import{j as e}from"./jsx-runtime-BNA1KBBw.js";import{e as f}from"./iframe-DYI76bYf.js";import{D as r,a as d,b as o,c,d as m,e as x,f as g,g as p}from"./dialog-FKNoKw-C.js";import{B as s}from"./button-D8PIsVG9.js";import{I as j}from"./input-BHEwRhch.js";import{L as l}from"./label-18wtRjrp.js";import{T as G}from"./textarea-O3DMt0AB.js";import{B as b}from"./badge-WoKEAeFo.js";import{C as N,d as D,a as H,b as L}from"./card-D_qZKHP_.js";import{C as v}from"./checkbox-Cj820ULu.js";import{S as I}from"./separator-CQX8tLNw.js";import{C as E}from"./circle-check-big-CeBxzT8Y.js";import{T as R}from"./triangle-alert-COgXkReM.js";import{I as z}from"./info-ClzgowqN.js";import{S as P}from"./star-BOprW0-R.js";import{U}from"./upload-CegtMg_o.js";import{T as O}from"./trash-2-BIxEIbmj.js";import{F as _}from"./file-text-DkKdIBXQ.js";import{F as Y}from"./folder-CA-s5P8O.js";import{S as M}from"./save-BQpb1Qnq.js";import{P as V}from"./plus-rODL2ksU.js";import{M as W}from"./mail-Dn0jCmZQ.js";import{S as J}from"./share-Cy6D789j.js";import{D as K}from"./download-D4wS8nnz.js";import{S as q}from"./settings-lRXAMrhT.js";import{I as Q}from"./image-BMOA6o1O.js";import{L as X}from"./lock-DRhvnfnV.js";import"./index-Cb5XrPI7.js";import"./index-CZsTv1T_.js";import"./index-DnoEvMOd.js";import"./index-4C5DIe9f.js";import"./index-BaGxq6u0.js";import"./index-BP1cZx75.js";import"./index-BQt0Cvmb.js";import"./index-BHJTWlLS.js";import"./index-CUoryC41.js";import"./index-D2wrl5tF.js";import"./index-CC62JQbv.js";import"./index-wVaAwIh_.js";import"./index-DgvNDuWe.js";import"./utils-CBfrqCZ4.js";import"./x-BUbyq4Th.js";import"./createLucideIcon-CVIF7ato.js";import"./index-CdJFUDDL.js";import"./index-BSv2Lmyq.js";import"./index-DEJ8q25_.js";import"./check-D8FZ9qtv.js";const Ye={title:"UI/Overlay/Dialog",component:r,parameters:{layout:"centered",docs:{description:{component:`
사용자에게 중요한 정보를 표시하거나 입력을 받는 Modal Dialog 컴포넌트입니다. Radix UI를 기반으로 구축되었습니다.

## 주요 기능
- **모달 오버레이**: 배경을 어둡게 하여 집중도 향상
- **포커스 관리**: 다이얼로그 열림 시 자동 포커스, 닫힘 시 원래 위치로 복귀
- **키보드 지원**: Escape로 닫기, Tab으로 요소 간 이동
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 완벽 지원
- **애니메이션**: 부드러운 열림/닫힘 전환 효과
- **반응형**: 모바일과 데스크톱에 최적화된 크기 조정
- **커스터마이징**: 다양한 크기와 스타일 옵션

## 구성 요소
- **Dialog**: 다이얼로그 루트 컨테이너
- **DialogTrigger**: 다이얼로그를 여는 트리거 버튼
- **DialogContent**: 실제 다이얼로그 콘텐츠 영역
- **DialogHeader**: 제목과 설명 영역
- **DialogTitle**: 다이얼로그 제목
- **DialogDescription**: 다이얼로그 설명
- **DialogFooter**: 액션 버튼 영역
- **DialogClose**: 다이얼로그를 닫는 버튼

## 사용법
\`\`\`tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// 기본 사용법
<Dialog>
  <DialogTrigger asChild>
    <Button>다이얼로그 열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>설명 텍스트</DialogDescription>
    </DialogHeader>
    <div>콘텐츠 영역</div>
    <DialogFooter>
      <Button type="submit">확인</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// 제어된 다이얼로그
const [open, setOpen] = useState(false)
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    {/* 콘텐츠 */}
  </DialogContent>
</Dialog>
\`\`\`

## Props
### Dialog
- \`open\`: 다이얼로그 열림 상태 (제어된 컴포넌트)
- \`onOpenChange\`: 상태 변경 핸들러
- \`defaultOpen\`: 기본 열림 상태

### DialogContent
- \`showCloseButton\`: 닫기 버튼 표시 여부 (기본: true)
- \`className\`: 커스텀 CSS 클래스
- \`children\`: 다이얼로그 내용

### DialogTrigger
- \`asChild\`: 자식 요소를 트리거로 사용 (기본: false)

## 다이얼로그 유형
- **알림 다이얼로그**: 중요한 정보나 경고 메시지
- **확인 다이얼로그**: 사용자 확인이 필요한 작업
- **폼 다이얼로그**: 데이터 입력이나 편집
- **선택 다이얼로그**: 옵션 선택이나 설정
- **미디어 다이얼로그**: 이미지나 동영상 표시

## 접근성
- **ARIA 역할**: \`dialog\` 역할과 적절한 라벨링
- **포커스 트랩**: 다이얼로그 내부에서만 포커스 이동
- **키보드 지원**: 
  - \`Escape\`: 다이얼로그 닫기
  - \`Tab/Shift+Tab\`: 요소 간 이동
  - \`Enter/Space\`: 버튼 활성화
- **스크린 리더**: 제목, 설명, 상태 명확히 안내
- **포커스 복원**: 닫힘 시 트리거 요소로 포커스 복귀

## 사용 사례
- **확인 대화상자**: 삭제, 저장 등 중요한 작업 확인
- **사용자 입력**: 로그인, 회원가입, 정보 수정
- **설정 변경**: 환경설정, 옵션 선택
- **파일 관리**: 업로드, 다운로드, 이름 변경
- **콘텐츠 뷰어**: 이미지 갤러리, 동영상 재생
- **알림 메시지**: 성공, 에러, 경고 알림

## 크기 옵션
- **기본**: \`sm:max-w-lg\` (최대 512px)
- **중간**: \`sm:max-w-xl\` (최대 576px)
- **큰 크기**: \`sm:max-w-2xl\` (최대 672px)
- **전체 너비**: \`sm:max-w-4xl\` (최대 896px)

## 모범 사례
- 명확하고 간결한 제목과 설명 제공
- 액션 버튼은 오른쪽 정렬 (주요 액션이 마지막)
- Escape 키로 닫을 수 있도록 구현
- 중요한 작업에는 확인 단계 추가
- 로딩 상태와 에러 처리 고려
- 모바일에서의 사용성 고려
- 자동으로 열리는 다이얼로그는 신중하게 사용
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"다이얼로그 열림 상태"}}},y={render:()=>e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{children:"다이얼로그 열기"})}),e.jsxs(o,{children:[e.jsxs(c,{children:[e.jsx(m,{children:"기본 다이얼로그"}),e.jsx(x,{children:"이것은 기본 다이얼로그입니다. 여기에 필요한 내용을 추가할 수 있습니다."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"다이얼로그 콘텐츠 영역입니다. 여기에 원하는 내용을 배치할 수 있습니다."})}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{type:"submit",children:"확인"})]})]})]}),parameters:{docs:{description:{story:"기본 Dialog 컴포넌트입니다. 제목, 설명, 콘텐츠, 액션 버튼을 포함합니다."}}}},w={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"default",className:"gap-2",children:[e.jsx(E,{className:"h-4 w-4"}),"성공 알림"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-green-100 rounded-full",children:e.jsx(E,{className:"h-6 w-6 text-green-600"})}),e.jsxs("div",{children:[e.jsx(m,{children:"작업 완료"}),e.jsx(x,{children:"요청하신 작업이 성공적으로 완료되었습니다."})]})]})}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm",children:"✅ 파일이 안전하게 저장되었습니다"}),e.jsx("p",{className:"text-sm",children:"✅ 알림이 전송되었습니다"}),e.jsx("p",{className:"text-sm",children:"✅ 백업이 생성되었습니다"})]})}),e.jsx(g,{children:e.jsx(p,{asChild:!0,children:e.jsx(s,{className:"w-full",children:"확인"})})})]})]}),e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"destructive",className:"gap-2",children:[e.jsx(R,{className:"h-4 w-4"}),"경고 알림"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-red-100 rounded-full",children:e.jsx(R,{className:"h-6 w-6 text-red-600"})}),e.jsxs("div",{children:[e.jsx(m,{children:"주의 필요"}),e.jsx(x,{children:"다음 작업을 진행하기 전에 확인해주세요."})]})]})}),e.jsx("div",{className:"py-4",children:e.jsx("div",{className:"p-4 bg-red-50 rounded-lg border border-red-200",children:e.jsx("p",{className:"text-sm text-red-700",children:"⚠️ 이 작업은 되돌릴 수 없습니다. 계속 진행하시겠습니까?"})})}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{variant:"destructive",children:"계속 진행"})]})]})]}),e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"outline",className:"gap-2",children:[e.jsx(z,{className:"h-4 w-4"}),"정보 알림"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-full",children:e.jsx(z,{className:"h-6 w-6 text-blue-600"})}),e.jsxs("div",{children:[e.jsx(m,{children:"업데이트 안내"}),e.jsx(x,{children:"새로운 기능이 추가되었습니다."})]})]})}),e.jsxs("div",{className:"py-4 space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(P,{className:"h-5 w-5 text-yellow-500 mt-0.5"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"새로운 대시보드"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"더 직관적인 인터페이스"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(U,{className:"h-5 w-5 text-green-500 mt-0.5"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"파일 업로드 개선"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"더 빠르고 안정적인 업로드"})]})]})]}),e.jsx(g,{children:e.jsx(p,{asChild:!0,children:e.jsx(s,{children:"알겠습니다"})})})]})]})]}),parameters:{docs:{description:{story:"다양한 유형의 알림 Dialog입니다. 성공, 경고, 정보 메시지를 다른 스타일로 표시합니다."}}}},T={render:()=>{const[a,i]=f.useState(!1),t=async()=>{i(!0),await new Promise(n=>setTimeout(n,2e3)),i(!1)};return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"destructive",className:"gap-2",children:[e.jsx(O,{className:"h-4 w-4"}),"항목 삭제"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsxs(c,{children:[e.jsxs(m,{className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-5 w-5 text-red-600"}),"항목 삭제 확인"]}),e.jsx(x,{children:"선택한 항목을 영구적으로 삭제하시겠습니까?"})]}),e.jsxs("div",{className:"py-4",children:[e.jsx(N,{className:"border-red-200 bg-red-50",children:e.jsx(D,{className:"p-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-medium text-sm",children:"삭제될 항목:"}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-sm",children:"프로젝트 보고서.pdf"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-sm",children:"이미지 폴더 (15개 파일)"})]})]})]})})}),e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"⚠️ 이 작업은 되돌릴 수 없습니다."})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{variant:"destructive",disabled:a,onClick:t,children:a?"삭제 중...":"삭제"})]})]})]}),e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{className:"gap-2",children:[e.jsx(M,{className:"h-4 w-4"}),"변경 사항 저장"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsxs(c,{children:[e.jsxs(m,{className:"flex items-center gap-2",children:[e.jsx(M,{className:"h-5 w-5 text-blue-600"}),"변경 사항 저장"]}),e.jsx(x,{children:"작업 중인 내용을 저장하시겠습니까?"})]}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"마지막 저장:"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"2분 전"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"변경된 항목:"}),e.jsx(b,{variant:"secondary",children:"5개"})]}),e.jsx(I,{}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm",children:"제목 수정됨"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm",children:"내용 추가됨"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-orange-500 rounded-full"}),e.jsx("span",{className:"text-sm",children:"이미지 교체됨"})]})]})]})}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"나중에"})}),e.jsx(s,{children:"저장"})]})]})]})]})},parameters:{docs:{description:{story:"사용자 확인이 필요한 작업을 위한 Dialog입니다. 삭제, 저장 등의 중요한 액션에 사용됩니다."}}}},B={render:()=>{const[a,i]=f.useState({name:"",email:"",department:"",message:"",urgent:!1}),t=n=>{n.preventDefault(),console.log("Form submitted:",a)};return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{className:"gap-2",children:[e.jsx(V,{className:"h-4 w-4"}),"새 사용자 추가"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsxs(c,{children:[e.jsx(m,{children:"새 사용자 추가"}),e.jsx(x,{children:"새로운 팀 멤버 정보를 입력해주세요."})]}),e.jsxs("form",{onSubmit:t,children:[e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"name",children:"이름 *"}),e.jsx(j,{id:"name",value:a.name,onChange:n=>i({...a,name:n.target.value}),placeholder:"홍길동",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"email",children:"이메일 *"}),e.jsx(j,{id:"email",type:"email",value:a.email,onChange:n=>i({...a,email:n.target.value}),placeholder:"hong@example.com",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"department",children:"부서"}),e.jsx(j,{id:"department",value:a.department,onChange:n=>i({...a,department:n.target.value}),placeholder:"개발팀"})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",type:"button",children:"취소"})}),e.jsx(s,{type:"submit",children:"추가"})]})]})]})]}),e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"outline",className:"gap-2",children:[e.jsx(W,{className:"h-4 w-4"}),"연락하기"]})}),e.jsxs(o,{className:"sm:max-w-lg",children:[e.jsxs(c,{children:[e.jsx(m,{children:"연락하기"}),e.jsx(x,{children:"궁금한 점이나 요청사항을 남겨주세요. 빠르게 답변드리겠습니다."})]}),e.jsxs("form",{onSubmit:t,children:[e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"contact-name",children:"이름 *"}),e.jsx(j,{id:"contact-name",placeholder:"이름을 입력하세요",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"contact-email",children:"이메일 *"}),e.jsx(j,{id:"contact-email",type:"email",placeholder:"email@example.com",required:!0})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"message",children:"메시지 *"}),e.jsx(G,{id:"message",placeholder:"문의 내용을 자세히 적어주세요...",value:a.message,onChange:n=>i({...a,message:n.target.value}),className:"min-h-[100px]",required:!0})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(v,{id:"urgent",checked:a.urgent,onCheckedChange:n=>i({...a,urgent:!!n})}),e.jsx(l,{htmlFor:"urgent",className:"text-sm",children:"긴급 문의 (24시간 내 답변)"})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",type:"button",children:"취소"})}),e.jsx(s,{type:"submit",children:"전송"})]})]})]})]})]})},parameters:{docs:{description:{story:"폼을 포함한 Dialog입니다. 사용자 정보 입력, 연락처 폼 등에 사용됩니다."}}}},k={render:()=>{const[a,i]=f.useState(null),t=[{id:1,title:"프로젝트 스크린샷 1",description:"메인 대시보드 인터페이스",emoji:"🖥️"},{id:2,title:"프로젝트 스크린샷 2",description:"사용자 관리 페이지",emoji:"👥"},{id:3,title:"프로젝트 스크린샷 3",description:"데이터 분석 차트",emoji:"📊"},{id:4,title:"프로젝트 스크린샷 4",description:"설정 인터페이스",emoji:"⚙️"}];return e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"grid grid-cols-2 gap-4 max-w-md",children:t.map(n=>e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsx(N,{className:"cursor-pointer hover:shadow-md transition-shadow",children:e.jsxs(D,{className:"p-4 text-center",children:[e.jsx("div",{className:"text-4xl mb-2",children:n.emoji}),e.jsx("p",{className:"text-sm font-medium",children:n.title}),e.jsx("p",{className:"text-xs text-muted-foreground",children:n.description})]})})}),e.jsxs(o,{className:"sm:max-w-2xl",children:[e.jsxs(c,{children:[e.jsx(m,{children:n.title}),e.jsx(x,{children:n.description})]}),e.jsxs("div",{className:"py-4",children:[e.jsx("div",{className:"aspect-video bg-muted rounded-lg flex items-center justify-center border",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-8xl mb-4",children:n.emoji}),e.jsx("p",{className:"text-muted-foreground",children:"고해상도 이미지"})]})}),e.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"크기:"}),e.jsx("p",{className:"text-muted-foreground",children:"1920 × 1080"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"파일 크기:"}),e.jsx("p",{className:"text-muted-foreground",children:"2.4 MB"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"형식:"}),e.jsx("p",{className:"text-muted-foreground",children:"PNG"})]})]})]}),e.jsxs(g,{children:[e.jsxs(s,{variant:"outline",className:"gap-2",children:[e.jsx(J,{className:"h-4 w-4"}),"공유"]}),e.jsxs(s,{className:"gap-2",children:[e.jsx(K,{className:"h-4 w-4"}),"다운로드"]})]})]})]},n.id))})})},parameters:{docs:{description:{story:"미디어 콘텐츠를 표시하는 Dialog입니다. 이미지 갤러리, 동영상 플레이어 등에 사용됩니다."}}}},F={render:()=>{const[a,i]=f.useState({notifications:!0,darkMode:!1,autoSave:!0,soundEffects:!1,language:"ko",timezone:"Asia/Seoul"});return e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"outline",className:"gap-2",children:[e.jsx(q,{className:"h-4 w-4"}),"환경 설정"]})}),e.jsxs(o,{className:"sm:max-w-lg",children:[e.jsxs(c,{children:[e.jsx(m,{children:"환경 설정"}),e.jsx(x,{children:"애플리케이션 사용 환경을 설정하세요."})]}),e.jsxs("div",{className:"py-4 space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium flex items-center gap-2",children:[e.jsx(q,{className:"h-4 w-4"}),"알림 설정"]}),e.jsxs("div",{className:"space-y-3 ml-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"notifications",children:"푸시 알림"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"새 메시지와 업데이트 알림"})]}),e.jsx(v,{id:"notifications",checked:a.notifications,onCheckedChange:t=>i(n=>({...n,notifications:!!t}))})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"soundEffects",children:"소리 효과"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"알림음과 효과음"})]}),e.jsx(v,{id:"soundEffects",checked:a.soundEffects,onCheckedChange:t=>i(n=>({...n,soundEffects:!!t}))})]})]})]}),e.jsx(I,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium flex items-center gap-2",children:[e.jsx(Q,{className:"h-4 w-4"}),"외관 설정"]}),e.jsxs("div",{className:"space-y-3 ml-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"darkMode",children:"다크 모드"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"어두운 테마 사용"})]}),e.jsx(v,{id:"darkMode",checked:a.darkMode,onCheckedChange:t=>i(n=>({...n,darkMode:!!t}))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"language",children:"언어"}),e.jsxs("select",{id:"language",value:a.language,onChange:t=>i(n=>({...n,language:t.target.value})),className:"w-full px-3 py-2 text-sm border rounded-md",children:[e.jsx("option",{value:"ko",children:"한국어"}),e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"ja",children:"日本語"})]})]})]})]}),e.jsx(I,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium flex items-center gap-2",children:[e.jsx(M,{className:"h-4 w-4"}),"작업 설정"]}),e.jsxs("div",{className:"space-y-3 ml-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"autoSave",children:"자동 저장"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"5분마다 자동으로 저장"})]}),e.jsx(v,{id:"autoSave",checked:a.autoSave,onCheckedChange:t=>i(n=>({...n,autoSave:!!t}))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"timezone",children:"시간대"}),e.jsxs("select",{id:"timezone",value:a.timezone,onChange:t=>i(n=>({...n,timezone:t.target.value})),className:"w-full px-3 py-2 text-sm border rounded-md",children:[e.jsx("option",{value:"Asia/Seoul",children:"서울 (GMT+9)"}),e.jsx("option",{value:"America/New_York",children:"뉴욕 (GMT-5)"}),e.jsx("option",{value:"Europe/London",children:"런던 (GMT+0)"}),e.jsx("option",{value:"Asia/Tokyo",children:"도쿄 (GMT+9)"})]})]})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{children:"설정 저장"})]})]})]})},parameters:{docs:{description:{story:"설정 옵션을 포함한 복잡한 Dialog입니다. 여러 카테고리의 설정을 그룹화하여 표시합니다."}}}},S={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",size:"sm",children:"작은 크기"})}),e.jsxs(o,{className:"sm:max-w-sm",children:[e.jsxs(c,{children:[e.jsx(m,{children:"작은 다이얼로그"}),e.jsx(x,{children:"간단한 메시지나 확인"})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm",children:"작은 크기의 다이얼로그입니다."})}),e.jsx(g,{children:e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",size:"sm",children:"닫기"})})})]})]}),e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"기본 크기"})}),e.jsxs(o,{className:"sm:max-w-lg",children:[e.jsxs(c,{children:[e.jsx(m,{children:"기본 다이얼로그"}),e.jsx(x,{children:"일반적인 폼이나 내용"})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm",children:"기본 크기의 다이얼로그입니다. 대부분의 경우에 적합합니다."})}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{children:"확인"})]})]})]}),e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"큰 크기"})}),e.jsxs(o,{className:"sm:max-w-2xl",children:[e.jsxs(c,{children:[e.jsx(m,{children:"큰 다이얼로그"}),e.jsx(x,{children:"복잡한 폼이나 상세 내용"})]}),e.jsxs("div",{className:"py-4 space-y-4",children:[e.jsx("p",{className:"text-sm",children:"큰 크기의 다이얼로그입니다. 복잡한 폼이나 많은 정보를 표시할 때 사용합니다."}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(N,{children:[e.jsx(H,{className:"pb-3",children:e.jsx(L,{className:"text-sm",children:"왼쪽 컬럼"})}),e.jsx(D,{className:"text-xs text-muted-foreground",children:"왼쪽 영역의 내용입니다."})]}),e.jsxs(N,{children:[e.jsx(H,{className:"pb-3",children:e.jsx(L,{className:"text-sm",children:"오른쪽 컬럼"})}),e.jsx(D,{className:"text-xs text-muted-foreground",children:"오른쪽 영역의 내용입니다."})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{children:"저장"})]})]})]}),e.jsxs(r,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"전체 너비"})}),e.jsxs(o,{className:"sm:max-w-4xl",children:[e.jsxs(c,{children:[e.jsx(m,{children:"전체 너비 다이얼로그"}),e.jsx(x,{children:"대시보드나 테이블 등 넓은 내용"})]}),e.jsx("div",{className:"py-4",children:e.jsx("div",{className:"grid grid-cols-4 gap-4",children:Array.from({length:8}).map((a,i)=>e.jsx(N,{children:e.jsxs(D,{className:"p-4 text-center",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-full mx-auto mb-2"}),e.jsxs("p",{className:"text-xs",children:["카드 ",i+1]})]})},i))})}),e.jsx(g,{children:e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"닫기"})})})]})]})]}),parameters:{docs:{description:{story:"다양한 크기의 Dialog 변형입니다. 콘텐츠 양에 따라 적절한 크기를 선택할 수 있습니다."}}}},A={render:()=>{const[a,i]=f.useState([]),[t,n]=f.useState(!1),h=u=>{i(C=>[...C,u]),setTimeout(()=>{i(C=>C.slice(1))},3e3)};return e.jsxs("div",{className:"space-y-6 w-[600px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Escape"}),"로 다이얼로그 닫기"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 다이얼로그 내 요소 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter/Space"}),"로 버튼 활성화"]}),e.jsx("li",{children:"다이얼로그 열림 시 첫 번째 요소로 자동 포커스"}),e.jsx("li",{children:"다이얼로그 닫힘 시 트리거 요소로 포커스 복귀"}),e.jsx("li",{children:"스크린 리더가 제목과 설명 읽기"}),e.jsx("li",{children:"포커스 트랩으로 다이얼로그 외부 접근 차단"})]})]}),e.jsx("div",{"aria-live":"polite","aria-label":"다이얼로그 상태 안내",className:"sr-only",children:a.map((u,C)=>e.jsx("div",{children:u},C))}),e.jsxs(r,{open:t,onOpenChange:u=>{n(u),h(u?"접근성 다이얼로그가 열렸습니다":"접근성 다이얼로그가 닫혔습니다")},children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{className:"gap-2",onClick:()=>h("다이얼로그를 여는 중입니다"),children:[e.jsx(X,{className:"h-4 w-4"}),"접근성 다이얼로그 열기"]})}),e.jsxs(o,{className:"sm:max-w-md","aria-describedby":"dialog-description",children:[e.jsxs(c,{children:[e.jsx(m,{id:"dialog-title",children:"접근 가능한 다이얼로그"}),e.jsx(x,{id:"dialog-description",children:"모든 접근성 기능이 구현된 다이얼로그입니다. 키보드와 스크린 리더로 완전히 접근 가능합니다."})]}),e.jsxs("div",{className:"py-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"accessible-input",children:"이름 (필수)"}),e.jsx(j,{id:"accessible-input",placeholder:"이름을 입력하세요","aria-required":"true","aria-describedby":"name-help",onFocus:()=>h("이름 입력 필드에 포커스됨")}),e.jsx("p",{id:"name-help",className:"text-xs text-muted-foreground",children:"실명을 입력해주세요"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"accessible-textarea",children:"메시지"}),e.jsx(G,{id:"accessible-textarea",placeholder:"메시지를 입력하세요","aria-describedby":"message-help",onFocus:()=>h("메시지 입력 영역에 포커스됨")}),e.jsx("p",{id:"message-help",className:"text-xs text-muted-foreground",children:"선택사항입니다"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(v,{id:"accessible-checkbox",onCheckedChange:u=>h(u?"체크박스가 선택됨":"체크박스 선택 해제됨")}),e.jsx(l,{htmlFor:"accessible-checkbox",children:"이용약관에 동의합니다"})]}),e.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-green-700 dark:text-green-300",children:"접근성 상태"})]}),e.jsxs("ul",{className:"text-xs text-green-600 dark:text-green-400 space-y-1",children:[e.jsx("li",{children:"• ARIA 라벨과 역할 정의됨"}),e.jsx("li",{children:"• 키보드 네비게이션 완전 지원"}),e.jsx("li",{children:"• 포커스 트랩 활성화됨"}),e.jsx("li",{children:"• 스크린 리더 호환성 확보"}),e.jsx("li",{children:"• 라이브 영역으로 상태 안내"})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",onClick:()=>h("취소 버튼이 클릭됨"),children:"취소"})}),e.jsx(s,{onClick:()=>h("확인 버튼이 클릭됨"),children:"확인"})]})]})]}),e.jsxs(N,{children:[e.jsx(H,{children:e.jsx(L,{className:"text-base",children:"접근성 기능 상태"})}),e.jsxs(D,{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"키보드 네비게이션"}),e.jsx(b,{variant:"default",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"포커스 관리"}),e.jsx(b,{variant:"default",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"ARIA 라벨링"}),e.jsx(b,{variant:"default",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"스크린 리더 지원"}),e.jsx(b,{variant:"default",children:"활성화"})]})]}),a.length>0&&e.jsxs("div",{className:"mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("div",{className:"w-2 h-2 bg-primary rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-primary",children:"최근 안내"})]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:a[a.length-1]})]})]})]})]})},parameters:{docs:{description:{story:"Dialog의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 포커스 관리, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."}}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>기본 다이얼로그</DialogTitle>
          <DialogDescription>
            이것은 기본 다이얼로그입니다. 여기에 필요한 내용을 추가할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            다이얼로그 콘텐츠 영역입니다. 여기에 원하는 내용을 배치할 수 있습니다.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button type="submit">확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>,
  parameters: {
    docs: {
      description: {
        story: "기본 Dialog 컴포넌트입니다. 제목, 설명, 콘텐츠, 액션 버튼을 포함합니다."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {/* 성공 알림 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="gap-2">
            <CheckCircle className="h-4 w-4" />
            성공 알림
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <DialogTitle>작업 완료</DialogTitle>
                <DialogDescription>
                  요청하신 작업이 성공적으로 완료되었습니다.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-2">
              <p className="text-sm">✅ 파일이 안전하게 저장되었습니다</p>
              <p className="text-sm">✅ 알림이 전송되었습니다</p>
              <p className="text-sm">✅ 백업이 생성되었습니다</p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-full">확인</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 경고 알림 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" className="gap-2">
            <AlertTriangle className="h-4 w-4" />
            경고 알림
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <DialogTitle>주의 필요</DialogTitle>
                <DialogDescription>
                  다음 작업을 진행하기 전에 확인해주세요.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="py-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-red-700">
                ⚠️ 이 작업은 되돌릴 수 없습니다. 계속 진행하시겠습니까?
              </p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <Button variant="destructive">계속 진행</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 정보 알림 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Info className="h-4 w-4" />
            정보 알림
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-full">
                <Info className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <DialogTitle>업데이트 안내</DialogTitle>
                <DialogDescription>
                  새로운 기능이 추가되었습니다.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="py-4 space-y-3">
            <div className="flex items-start gap-3">
              <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="font-medium text-sm">새로운 대시보드</p>
                <p className="text-sm text-muted-foreground">더 직관적인 인터페이스</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Upload className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium text-sm">파일 업로드 개선</p>
                <p className="text-sm text-muted-foreground">더 빠르고 안정적인 업로드</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>알겠습니다</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 유형의 알림 Dialog입니다. 성공, 경고, 정보 메시지를 다른 스타일로 표시합니다."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isDeleting, setIsDeleting] = React.useState(false);
    const handleDelete = async () => {
      setIsDeleting(true);
      // 삭제 로직 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsDeleting(false);
    };
    return <div className="flex gap-4">
        {/* 삭제 확인 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" className="gap-2">
              <Trash2 className="h-4 w-4" />
              항목 삭제
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-red-600" />
                항목 삭제 확인
              </DialogTitle>
              <DialogDescription>
                선택한 항목을 영구적으로 삭제하시겠습니까?
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <p className="font-medium text-sm">삭제될 항목:</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">프로젝트 보고서.pdf</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Folder className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">이미지 폴더 (15개 파일)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <p className="text-xs text-red-600 mt-2">
                ⚠️ 이 작업은 되돌릴 수 없습니다.
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">취소</Button>
              </DialogClose>
              <Button variant="destructive" disabled={isDeleting} onClick={handleDelete}>
                {isDeleting ? "삭제 중..." : "삭제"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 저장 확인 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              변경 사항 저장
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Save className="h-5 w-5 text-blue-600" />
                변경 사항 저장
              </DialogTitle>
              <DialogDescription>
                작업 중인 내용을 저장하시겠습니까?
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">마지막 저장:</span>
                  <span className="text-sm text-muted-foreground">2분 전</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">변경된 항목:</span>
                  <Badge variant="secondary">5개</Badge>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">제목 수정됨</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">내용 추가됨</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">이미지 교체됨</span>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">나중에</Button>
              </DialogClose>
              <Button>저장</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "사용자 확인이 필요한 작업을 위한 Dialog입니다. 삭제, 저장 등의 중요한 액션에 사용됩니다."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      department: "",
      message: "",
      urgent: false
    });
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    };
    return <div className="flex gap-4">
        {/* 사용자 추가 폼 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              새 사용자 추가
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>새 사용자 추가</DialogTitle>
              <DialogDescription>
                새로운 팀 멤버 정보를 입력해주세요.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">이름 *</Label>
                  <Input id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} placeholder="홍길동" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일 *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} placeholder="hong@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">부서</Label>
                  <Input id="department" value={formData.department} onChange={e => setFormData({
                  ...formData,
                  department: e.target.value
                })} placeholder="개발팀" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" type="button">취소</Button>
                </DialogClose>
                <Button type="submit">추가</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* 연락하기 폼 */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              연락하기
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>연락하기</DialogTitle>
              <DialogDescription>
                궁금한 점이나 요청사항을 남겨주세요. 빠르게 답변드리겠습니다.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">이름 *</Label>
                    <Input id="contact-name" placeholder="이름을 입력하세요" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">이메일 *</Label>
                    <Input id="contact-email" type="email" placeholder="email@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">메시지 *</Label>
                  <Textarea id="message" placeholder="문의 내용을 자세히 적어주세요..." value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="min-h-[100px]" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="urgent" checked={formData.urgent} onCheckedChange={checked => setFormData({
                  ...formData,
                  urgent: !!checked
                })} />
                  <Label htmlFor="urgent" className="text-sm">
                    긴급 문의 (24시간 내 답변)
                  </Label>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" type="button">취소</Button>
                </DialogClose>
                <Button type="submit">전송</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "폼을 포함한 Dialog입니다. 사용자 정보 입력, 연락처 폼 등에 사용됩니다."
      }
    }
  }
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
    const images = [{
      id: 1,
      title: "프로젝트 스크린샷 1",
      description: "메인 대시보드 인터페이스",
      emoji: "🖥️"
    }, {
      id: 2,
      title: "프로젝트 스크린샷 2",
      description: "사용자 관리 페이지",
      emoji: "👥"
    }, {
      id: 3,
      title: "프로젝트 스크린샷 3",
      description: "데이터 분석 차트",
      emoji: "📊"
    }, {
      id: 4,
      title: "프로젝트 스크린샷 4",
      description: "설정 인터페이스",
      emoji: "⚙️"
    }];
    return <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 max-w-md">
          {images.map(image => <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-2">{image.emoji}</div>
                    <p className="text-sm font-medium">{image.title}</p>
                    <p className="text-xs text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{image.title}</DialogTitle>
                  <DialogDescription>{image.description}</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  {/* 이미지 영역 */}
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{image.emoji}</div>
                      <p className="text-muted-foreground">고해상도 이미지</p>
                    </div>
                  </div>
                  
                  {/* 이미지 정보 */}
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">크기:</span>
                      <p className="text-muted-foreground">1920 × 1080</p>
                    </div>
                    <div>
                      <span className="font-medium">파일 크기:</span>
                      <p className="text-muted-foreground">2.4 MB</p>
                    </div>
                    <div>
                      <span className="font-medium">형식:</span>
                      <p className="text-muted-foreground">PNG</p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" className="gap-2">
                    <Share className="h-4 w-4" />
                    공유
                  </Button>
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    다운로드
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "미디어 콘텐츠를 표시하는 Dialog입니다. 이미지 갤러리, 동영상 플레이어 등에 사용됩니다."
      }
    }
  }
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      soundEffects: false,
      language: "ko",
      timezone: "Asia/Seoul"
    });
    return <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Settings className="h-4 w-4" />
            환경 설정
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>환경 설정</DialogTitle>
            <DialogDescription>
              애플리케이션 사용 환경을 설정하세요.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-6">
            {/* 알림 설정 */}
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <Settings className="h-4 w-4" />
                알림 설정
              </h4>
              <div className="space-y-3 ml-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications">푸시 알림</Label>
                    <p className="text-xs text-muted-foreground">새 메시지와 업데이트 알림</p>
                  </div>
                  <Checkbox id="notifications" checked={settings.notifications} onCheckedChange={checked => setSettings(prev => ({
                  ...prev,
                  notifications: !!checked
                }))} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="soundEffects">소리 효과</Label>
                    <p className="text-xs text-muted-foreground">알림음과 효과음</p>
                  </div>
                  <Checkbox id="soundEffects" checked={settings.soundEffects} onCheckedChange={checked => setSettings(prev => ({
                  ...prev,
                  soundEffects: !!checked
                }))} />
                </div>
              </div>
            </div>

            <Separator />

            {/* 외관 설정 */}
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <Image className="h-4 w-4" />
                외관 설정
              </h4>
              <div className="space-y-3 ml-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="darkMode">다크 모드</Label>
                    <p className="text-xs text-muted-foreground">어두운 테마 사용</p>
                  </div>
                  <Checkbox id="darkMode" checked={settings.darkMode} onCheckedChange={checked => setSettings(prev => ({
                  ...prev,
                  darkMode: !!checked
                }))} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">언어</Label>
                  <select id="language" value={settings.language} onChange={e => setSettings(prev => ({
                  ...prev,
                  language: e.target.value
                }))} className="w-full px-3 py-2 text-sm border rounded-md">
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                  </select>
                </div>
              </div>
            </div>

            <Separator />

            {/* 작업 설정 */}
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <Save className="h-4 w-4" />
                작업 설정
              </h4>
              <div className="space-y-3 ml-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="autoSave">자동 저장</Label>
                    <p className="text-xs text-muted-foreground">5분마다 자동으로 저장</p>
                  </div>
                  <Checkbox id="autoSave" checked={settings.autoSave} onCheckedChange={checked => setSettings(prev => ({
                  ...prev,
                  autoSave: !!checked
                }))} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">시간대</Label>
                  <select id="timezone" value={settings.timezone} onChange={e => setSettings(prev => ({
                  ...prev,
                  timezone: e.target.value
                }))} className="w-full px-3 py-2 text-sm border rounded-md">
                    <option value="Asia/Seoul">서울 (GMT+9)</option>
                    <option value="America/New_York">뉴욕 (GMT-5)</option>
                    <option value="Europe/London">런던 (GMT+0)</option>
                    <option value="Asia/Tokyo">도쿄 (GMT+9)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <Button>설정 저장</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>;
  },
  parameters: {
    docs: {
      description: {
        story: "설정 옵션을 포함한 복잡한 Dialog입니다. 여러 카테고리의 설정을 그룹화하여 표시합니다."
      }
    }
  }
}`,...F.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {/* 작은 크기 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">작은 크기</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>작은 다이얼로그</DialogTitle>
            <DialogDescription>간단한 메시지나 확인</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">작은 크기의 다이얼로그입니다.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" size="sm">닫기</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 기본 크기 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">기본 크기</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>기본 다이얼로그</DialogTitle>
            <DialogDescription>일반적인 폼이나 내용</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm">기본 크기의 다이얼로그입니다. 대부분의 경우에 적합합니다.</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <Button>확인</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 큰 크기 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">큰 크기</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>큰 다이얼로그</DialogTitle>
            <DialogDescription>복잡한 폼이나 상세 내용</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p className="text-sm">큰 크기의 다이얼로그입니다. 복잡한 폼이나 많은 정보를 표시할 때 사용합니다.</p>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">왼쪽 컬럼</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  왼쪽 영역의 내용입니다.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">오른쪽 컬럼</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  오른쪽 영역의 내용입니다.
                </CardContent>
              </Card>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <Button>저장</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 전체 너비 */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">전체 너비</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>전체 너비 다이얼로그</DialogTitle>
            <DialogDescription>대시보드나 테이블 등 넓은 내용</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({
              length: 8
            }).map((_, i) => <Card key={i}>
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 bg-muted rounded-full mx-auto mb-2"></div>
                    <p className="text-xs">카드 {i + 1}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">닫기</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 크기의 Dialog 변형입니다. 콘텐츠 양에 따라 적절한 크기를 선택할 수 있습니다."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [announcements, setAnnouncements] = React.useState<string[]>([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const addAnnouncement = (message: string) => {
      setAnnouncements(prev => [...prev, message]);
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 3000);
    };
    return <div className="space-y-6 w-[600px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Dialog 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 다이얼로그 닫기</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 다이얼로그 내 요소 간 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter/Space</kbd>로 버튼 활성화</li>
            <li>다이얼로그 열림 시 첫 번째 요소로 자동 포커스</li>
            <li>다이얼로그 닫힘 시 트리거 요소로 포커스 복귀</li>
            <li>스크린 리더가 제목과 설명 읽기</li>
            <li>포커스 트랩으로 다이얼로그 외부 접근 차단</li>
          </ul>
        </div>

        {/* 라이브 영역 */}
        <div aria-live="polite" aria-label="다이얼로그 상태 안내" className="sr-only">
          {announcements.map((announcement, index) => <div key={index}>{announcement}</div>)}
        </div>

        {/* 접근성 다이얼로그 */}
        <Dialog open={isOpen} onOpenChange={open => {
        setIsOpen(open);
        if (open) {
          addAnnouncement("접근성 다이얼로그가 열렸습니다");
        } else {
          addAnnouncement("접근성 다이얼로그가 닫혔습니다");
        }
      }}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => addAnnouncement("다이얼로그를 여는 중입니다")}>
              <Lock className="h-4 w-4" />
              접근성 다이얼로그 열기
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md" aria-describedby="dialog-description">
            <DialogHeader>
              <DialogTitle id="dialog-title">
                접근 가능한 다이얼로그
              </DialogTitle>
              <DialogDescription id="dialog-description">
                모든 접근성 기능이 구현된 다이얼로그입니다. 
                키보드와 스크린 리더로 완전히 접근 가능합니다.
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4 space-y-4">
              {/* 폼 요소들 */}
              <div className="space-y-2">
                <Label htmlFor="accessible-input">
                  이름 (필수)
                </Label>
                <Input id="accessible-input" placeholder="이름을 입력하세요" aria-required="true" aria-describedby="name-help" onFocus={() => addAnnouncement("이름 입력 필드에 포커스됨")} />
                <p id="name-help" className="text-xs text-muted-foreground">
                  실명을 입력해주세요
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accessible-textarea">메시지</Label>
                <Textarea id="accessible-textarea" placeholder="메시지를 입력하세요" aria-describedby="message-help" onFocus={() => addAnnouncement("메시지 입력 영역에 포커스됨")} />
                <p id="message-help" className="text-xs text-muted-foreground">
                  선택사항입니다
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="accessible-checkbox" onCheckedChange={checked => addAnnouncement(checked ? "체크박스가 선택됨" : "체크박스 선택 해제됨")} />
                <Label htmlFor="accessible-checkbox">
                  이용약관에 동의합니다
                </Label>
              </div>

              {/* 접근성 상태 표시 */}
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    접근성 상태
                  </span>
                </div>
                <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                  <li>• ARIA 라벨과 역할 정의됨</li>
                  <li>• 키보드 네비게이션 완전 지원</li>
                  <li>• 포커스 트랩 활성화됨</li>
                  <li>• 스크린 리더 호환성 확보</li>
                  <li>• 라이브 영역으로 상태 안내</li>
                </ul>
              </div>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => addAnnouncement("취소 버튼이 클릭됨")}>
                  취소
                </Button>
              </DialogClose>
              <Button onClick={() => addAnnouncement("확인 버튼이 클릭됨")}>
                확인
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 접근성 정보 카드 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">접근성 기능 상태</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">키보드 네비게이션</span>
                <Badge variant="default">활성화</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">포커스 관리</span>
                <Badge variant="default">활성화</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">ARIA 라벨링</span>
                <Badge variant="default">활성화</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">스크린 리더 지원</span>
                <Badge variant="default">활성화</Badge>
              </div>
            </div>

            {announcements.length > 0 && <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium text-primary">최근 안내</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {announcements[announcements.length - 1]}
                </p>
              </div>}
          </CardContent>
        </Card>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Dialog의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 포커스 관리, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...A.parameters?.docs?.source}}};export{A as AccessibilityDemo,w as AlertDialog,T as ConfirmationDialog,y as Default,B as FormDialog,k as MediaDialog,F as SettingsDialog,S as SizeVariants,Ye as default};
