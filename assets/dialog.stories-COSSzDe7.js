import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{e as f}from"./iframe-BdMZbwUm.js";import{D as l,a as d,b as o,c,d as m,e as x,f as g,g as p}from"./dialog-CVsWCIkh.js";import{B as s}from"./button-bDZQ1CGr.js";import{I as j}from"./input-BhwUvA0w.js";import{L as t}from"./label-DOMLoIND.js";import{T as G}from"./textarea-BbrHM6FQ.js";import{B as b}from"./badge-B3XW2gOL.js";import{C as N,d as D,a as H,b as L}from"./card-BgCPKrWA.js";import{C as v}from"./checkbox-b0bI-CwR.js";import{S as I}from"./separator-BhwIUBVE.js";import{C as E}from"./circle-check-big-Cfx7f1FC.js";import{T as R}from"./triangle-alert-CjUeuD09.js";import{I as z}from"./info-BQhBls7U.js";import{S as P}from"./star-C0TOQxsF.js";import{U}from"./upload-D-efKita.js";import{T as O}from"./trash-2-V1gZ4z9T.js";import{F as _}from"./file-text-DmRPTJWd.js";import{F as Y}from"./folder-B9KLKYQ6.js";import{S as M}from"./save-Db1t8Eb_.js";import{P as V}from"./plus-BRMNfJxT.js";import{M as W}from"./mail-jnGPqVVg.js";import{S as J}from"./share-CKmH9Oip.js";import{D as K}from"./download-C_QE2hwp.js";import{S as q}from"./settings-DU4pWZhP.js";import{I as Q}from"./image-BUKezXs8.js";import{L as X}from"./lock-BV2N_bHU.js";import"./index-DnjHYjiR.js";import"./index-CQPQ-BqZ.js";import"./index-COOYaFQ0.js";import"./index-B_g0QmXh.js";import"./index-DI80qA_d.js";import"./index-BbsuTJMv.js";import"./index-Cu_wm-Vw.js";import"./index-BMTS4V62.js";import"./index-RnXzWidx.js";import"./index-CdFegrUu.js";import"./index-DYSxFDR_.js";import"./index-BGyhPWDZ.js";import"./index-C2zivziK.js";import"./utils-CBfrqCZ4.js";import"./x-BlIlgLCT.js";import"./createLucideIcon-CdHLrrBb.js";import"./index-CdJFUDDL.js";import"./index-B74dw3ct.js";import"./index-DEdBc4IE.js";import"./check-KbtGvtZf.js";const Ye={title:"UI/Overlay/Dialog",component:l,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"다이얼로그 열림 상태"}}},y={render:()=>e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{children:"다이얼로그 열기"})}),e.jsxs(o,{children:[e.jsxs(c,{children:[e.jsx(m,{children:"기본 다이얼로그"}),e.jsx(x,{children:"이것은 기본 다이얼로그입니다. 여기에 필요한 내용을 추가할 수 있습니다."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"다이얼로그 콘텐츠 영역입니다. 여기에 원하는 내용을 배치할 수 있습니다."})}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{type:"submit",children:"확인"})]})]})]}),parameters:{docs:{description:{story:"기본 Dialog 컴포넌트입니다. 제목, 설명, 콘텐츠, 액션 버튼을 포함합니다."}}}},w={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"default",className:"gap-2",children:[e.jsx(E,{className:"h-4 w-4"}),"성공 알림"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-green-100 rounded-full",children:e.jsx(E,{className:"h-6 w-6 text-green-600"})}),e.jsxs("div",{children:[e.jsx(m,{children:"작업 완료"}),e.jsx(x,{children:"요청하신 작업이 성공적으로 완료되었습니다."})]})]})}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm",children:"✅ 파일이 안전하게 저장되었습니다"}),e.jsx("p",{className:"text-sm",children:"✅ 알림이 전송되었습니다"}),e.jsx("p",{className:"text-sm",children:"✅ 백업이 생성되었습니다"})]})}),e.jsx(g,{children:e.jsx(p,{asChild:!0,children:e.jsx(s,{className:"w-full",children:"확인"})})})]})]}),e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"destructive",className:"gap-2",children:[e.jsx(R,{className:"h-4 w-4"}),"경고 알림"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-red-100 rounded-full",children:e.jsx(R,{className:"h-6 w-6 text-red-600"})}),e.jsxs("div",{children:[e.jsx(m,{children:"주의 필요"}),e.jsx(x,{children:"다음 작업을 진행하기 전에 확인해주세요."})]})]})}),e.jsx("div",{className:"py-4",children:e.jsx("div",{className:"p-4 bg-red-50 rounded-lg border border-red-200",children:e.jsx("p",{className:"text-sm text-red-700",children:"⚠️ 이 작업은 되돌릴 수 없습니다. 계속 진행하시겠습니까?"})})}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{variant:"destructive",children:"계속 진행"})]})]})]}),e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"outline",className:"gap-2",children:[e.jsx(z,{className:"h-4 w-4"}),"정보 알림"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 bg-blue-100 rounded-full",children:e.jsx(z,{className:"h-6 w-6 text-blue-600"})}),e.jsxs("div",{children:[e.jsx(m,{children:"업데이트 안내"}),e.jsx(x,{children:"새로운 기능이 추가되었습니다."})]})]})}),e.jsxs("div",{className:"py-4 space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(P,{className:"h-5 w-5 text-yellow-500 mt-0.5"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"새로운 대시보드"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"더 직관적인 인터페이스"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(U,{className:"h-5 w-5 text-green-500 mt-0.5"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-sm",children:"파일 업로드 개선"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"더 빠르고 안정적인 업로드"})]})]})]}),e.jsx(g,{children:e.jsx(p,{asChild:!0,children:e.jsx(s,{children:"알겠습니다"})})})]})]})]}),parameters:{docs:{description:{story:"다양한 유형의 알림 Dialog입니다. 성공, 경고, 정보 메시지를 다른 스타일로 표시합니다."}}}},T={render:()=>{const[a,r]=f.useState(!1),i=async()=>{r(!0),await new Promise(n=>setTimeout(n,2e3)),r(!1)};return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"destructive",className:"gap-2",children:[e.jsx(O,{className:"h-4 w-4"}),"항목 삭제"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsxs(c,{children:[e.jsxs(m,{className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-5 w-5 text-red-600"}),"항목 삭제 확인"]}),e.jsx(x,{children:"선택한 항목을 영구적으로 삭제하시겠습니까?"})]}),e.jsxs("div",{className:"py-4",children:[e.jsx(N,{className:"border-red-200 bg-red-50",children:e.jsx(D,{className:"p-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-medium text-sm",children:"삭제될 항목:"}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-sm",children:"프로젝트 보고서.pdf"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{className:"h-4 w-4 text-muted-foreground"}),e.jsx("span",{className:"text-sm",children:"이미지 폴더 (15개 파일)"})]})]})]})})}),e.jsx("p",{className:"text-xs text-red-600 mt-2",children:"⚠️ 이 작업은 되돌릴 수 없습니다."})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{variant:"destructive",disabled:a,onClick:i,children:a?"삭제 중...":"삭제"})]})]})]}),e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{className:"gap-2",children:[e.jsx(M,{className:"h-4 w-4"}),"변경 사항 저장"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsxs(c,{children:[e.jsxs(m,{className:"flex items-center gap-2",children:[e.jsx(M,{className:"h-5 w-5 text-blue-600"}),"변경 사항 저장"]}),e.jsx(x,{children:"작업 중인 내용을 저장하시겠습니까?"})]}),e.jsx("div",{className:"py-4",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"마지막 저장:"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"2분 전"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"변경된 항목:"}),e.jsx(b,{variant:"secondary",children:"5개"})]}),e.jsx(I,{}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm",children:"제목 수정됨"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"}),e.jsx("span",{className:"text-sm",children:"내용 추가됨"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-orange-500 rounded-full"}),e.jsx("span",{className:"text-sm",children:"이미지 교체됨"})]})]})]})}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"나중에"})}),e.jsx(s,{children:"저장"})]})]})]})]})},parameters:{docs:{description:{story:"사용자 확인이 필요한 작업을 위한 Dialog입니다. 삭제, 저장 등의 중요한 액션에 사용됩니다."}}}},B={render:()=>{const[a,r]=f.useState({name:"",email:"",department:"",message:"",urgent:!1}),i=n=>{n.preventDefault(),console.log("Form submitted:",a)};return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{className:"gap-2",children:[e.jsx(V,{className:"h-4 w-4"}),"새 사용자 추가"]})}),e.jsxs(o,{className:"sm:max-w-md",children:[e.jsxs(c,{children:[e.jsx(m,{children:"새 사용자 추가"}),e.jsx(x,{children:"새로운 팀 멤버 정보를 입력해주세요."})]}),e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"name",children:"이름 *"}),e.jsx(j,{id:"name",value:a.name,onChange:n=>r({...a,name:n.target.value}),placeholder:"홍길동",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"email",children:"이메일 *"}),e.jsx(j,{id:"email",type:"email",value:a.email,onChange:n=>r({...a,email:n.target.value}),placeholder:"hong@example.com",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"department",children:"부서"}),e.jsx(j,{id:"department",value:a.department,onChange:n=>r({...a,department:n.target.value}),placeholder:"개발팀"})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",type:"button",children:"취소"})}),e.jsx(s,{type:"submit",children:"추가"})]})]})]})]}),e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"outline",className:"gap-2",children:[e.jsx(W,{className:"h-4 w-4"}),"연락하기"]})}),e.jsxs(o,{className:"sm:max-w-lg",children:[e.jsxs(c,{children:[e.jsx(m,{children:"연락하기"}),e.jsx(x,{children:"궁금한 점이나 요청사항을 남겨주세요. 빠르게 답변드리겠습니다."})]}),e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"contact-name",children:"이름 *"}),e.jsx(j,{id:"contact-name",placeholder:"이름을 입력하세요",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"contact-email",children:"이메일 *"}),e.jsx(j,{id:"contact-email",type:"email",placeholder:"email@example.com",required:!0})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"message",children:"메시지 *"}),e.jsx(G,{id:"message",placeholder:"문의 내용을 자세히 적어주세요...",value:a.message,onChange:n=>r({...a,message:n.target.value}),className:"min-h-[100px]",required:!0})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(v,{id:"urgent",checked:a.urgent,onCheckedChange:n=>r({...a,urgent:!!n})}),e.jsx(t,{htmlFor:"urgent",className:"text-sm",children:"긴급 문의 (24시간 내 답변)"})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",type:"button",children:"취소"})}),e.jsx(s,{type:"submit",children:"전송"})]})]})]})]})]})},parameters:{docs:{description:{story:"폼을 포함한 Dialog입니다. 사용자 정보 입력, 연락처 폼 등에 사용됩니다."}}}},k={render:()=>{const[a,r]=f.useState(null),i=[{id:1,title:"프로젝트 스크린샷 1",description:"메인 대시보드 인터페이스",emoji:"🖥️"},{id:2,title:"프로젝트 스크린샷 2",description:"사용자 관리 페이지",emoji:"👥"},{id:3,title:"프로젝트 스크린샷 3",description:"데이터 분석 차트",emoji:"📊"},{id:4,title:"프로젝트 스크린샷 4",description:"설정 인터페이스",emoji:"⚙️"}];return e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"grid grid-cols-2 gap-4 max-w-md",children:i.map(n=>e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsx(N,{className:"cursor-pointer hover:shadow-md transition-shadow",children:e.jsxs(D,{className:"p-4 text-center",children:[e.jsx("div",{className:"text-4xl mb-2",children:n.emoji}),e.jsx("p",{className:"text-sm font-medium",children:n.title}),e.jsx("p",{className:"text-xs text-muted-foreground",children:n.description})]})})}),e.jsxs(o,{className:"sm:max-w-2xl",children:[e.jsxs(c,{children:[e.jsx(m,{children:n.title}),e.jsx(x,{children:n.description})]}),e.jsxs("div",{className:"py-4",children:[e.jsx("div",{className:"aspect-video bg-muted rounded-lg flex items-center justify-center border",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-8xl mb-4",children:n.emoji}),e.jsx("p",{className:"text-muted-foreground",children:"고해상도 이미지"})]})}),e.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"크기:"}),e.jsx("p",{className:"text-muted-foreground",children:"1920 × 1080"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"파일 크기:"}),e.jsx("p",{className:"text-muted-foreground",children:"2.4 MB"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"형식:"}),e.jsx("p",{className:"text-muted-foreground",children:"PNG"})]})]})]}),e.jsxs(g,{children:[e.jsxs(s,{variant:"outline",className:"gap-2",children:[e.jsx(J,{className:"h-4 w-4"}),"공유"]}),e.jsxs(s,{className:"gap-2",children:[e.jsx(K,{className:"h-4 w-4"}),"다운로드"]})]})]})]},n.id))})})},parameters:{docs:{description:{story:"미디어 콘텐츠를 표시하는 Dialog입니다. 이미지 갤러리, 동영상 플레이어 등에 사용됩니다."}}}},F={render:()=>{const[a,r]=f.useState({notifications:!0,darkMode:!1,autoSave:!0,soundEffects:!1,language:"ko",timezone:"Asia/Seoul"});return e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{variant:"outline",className:"gap-2",children:[e.jsx(q,{className:"h-4 w-4"}),"환경 설정"]})}),e.jsxs(o,{className:"sm:max-w-lg",children:[e.jsxs(c,{children:[e.jsx(m,{children:"환경 설정"}),e.jsx(x,{children:"애플리케이션 사용 환경을 설정하세요."})]}),e.jsxs("div",{className:"py-4 space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium flex items-center gap-2",children:[e.jsx(q,{className:"h-4 w-4"}),"알림 설정"]}),e.jsxs("div",{className:"space-y-3 ml-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"notifications",children:"푸시 알림"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"새 메시지와 업데이트 알림"})]}),e.jsx(v,{id:"notifications",checked:a.notifications,onCheckedChange:i=>r(n=>({...n,notifications:!!i}))})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"soundEffects",children:"소리 효과"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"알림음과 효과음"})]}),e.jsx(v,{id:"soundEffects",checked:a.soundEffects,onCheckedChange:i=>r(n=>({...n,soundEffects:!!i}))})]})]})]}),e.jsx(I,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium flex items-center gap-2",children:[e.jsx(Q,{className:"h-4 w-4"}),"외관 설정"]}),e.jsxs("div",{className:"space-y-3 ml-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"darkMode",children:"다크 모드"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"어두운 테마 사용"})]}),e.jsx(v,{id:"darkMode",checked:a.darkMode,onCheckedChange:i=>r(n=>({...n,darkMode:!!i}))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"language",children:"언어"}),e.jsxs("select",{id:"language",value:a.language,onChange:i=>r(n=>({...n,language:i.target.value})),className:"w-full px-3 py-2 text-sm border rounded-md",children:[e.jsx("option",{value:"ko",children:"한국어"}),e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"ja",children:"日本語"})]})]})]})]}),e.jsx(I,{}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h4",{className:"font-medium flex items-center gap-2",children:[e.jsx(M,{className:"h-4 w-4"}),"작업 설정"]}),e.jsxs("div",{className:"space-y-3 ml-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"autoSave",children:"자동 저장"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"5분마다 자동으로 저장"})]}),e.jsx(v,{id:"autoSave",checked:a.autoSave,onCheckedChange:i=>r(n=>({...n,autoSave:!!i}))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"timezone",children:"시간대"}),e.jsxs("select",{id:"timezone",value:a.timezone,onChange:i=>r(n=>({...n,timezone:i.target.value})),className:"w-full px-3 py-2 text-sm border rounded-md",children:[e.jsx("option",{value:"Asia/Seoul",children:"서울 (GMT+9)"}),e.jsx("option",{value:"America/New_York",children:"뉴욕 (GMT-5)"}),e.jsx("option",{value:"Europe/London",children:"런던 (GMT+0)"}),e.jsx("option",{value:"Asia/Tokyo",children:"도쿄 (GMT+9)"})]})]})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{children:"설정 저장"})]})]})]})},parameters:{docs:{description:{story:"설정 옵션을 포함한 복잡한 Dialog입니다. 여러 카테고리의 설정을 그룹화하여 표시합니다."}}}},S={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",size:"sm",children:"작은 크기"})}),e.jsxs(o,{className:"sm:max-w-sm",children:[e.jsxs(c,{children:[e.jsx(m,{children:"작은 다이얼로그"}),e.jsx(x,{children:"간단한 메시지나 확인"})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm",children:"작은 크기의 다이얼로그입니다."})}),e.jsx(g,{children:e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",size:"sm",children:"닫기"})})})]})]}),e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"기본 크기"})}),e.jsxs(o,{className:"sm:max-w-lg",children:[e.jsxs(c,{children:[e.jsx(m,{children:"기본 다이얼로그"}),e.jsx(x,{children:"일반적인 폼이나 내용"})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm",children:"기본 크기의 다이얼로그입니다. 대부분의 경우에 적합합니다."})}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{children:"확인"})]})]})]}),e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"큰 크기"})}),e.jsxs(o,{className:"sm:max-w-2xl",children:[e.jsxs(c,{children:[e.jsx(m,{children:"큰 다이얼로그"}),e.jsx(x,{children:"복잡한 폼이나 상세 내용"})]}),e.jsxs("div",{className:"py-4 space-y-4",children:[e.jsx("p",{className:"text-sm",children:"큰 크기의 다이얼로그입니다. 복잡한 폼이나 많은 정보를 표시할 때 사용합니다."}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(N,{children:[e.jsx(H,{className:"pb-3",children:e.jsx(L,{className:"text-sm",children:"왼쪽 컬럼"})}),e.jsx(D,{className:"text-xs text-muted-foreground",children:"왼쪽 영역의 내용입니다."})]}),e.jsxs(N,{children:[e.jsx(H,{className:"pb-3",children:e.jsx(L,{className:"text-sm",children:"오른쪽 컬럼"})}),e.jsx(D,{className:"text-xs text-muted-foreground",children:"오른쪽 영역의 내용입니다."})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"취소"})}),e.jsx(s,{children:"저장"})]})]})]}),e.jsxs(l,{children:[e.jsx(d,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"전체 너비"})}),e.jsxs(o,{className:"sm:max-w-4xl",children:[e.jsxs(c,{children:[e.jsx(m,{children:"전체 너비 다이얼로그"}),e.jsx(x,{children:"대시보드나 테이블 등 넓은 내용"})]}),e.jsx("div",{className:"py-4",children:e.jsx("div",{className:"grid grid-cols-4 gap-4",children:Array.from({length:8}).map((a,r)=>e.jsx(N,{children:e.jsxs(D,{className:"p-4 text-center",children:[e.jsx("div",{className:"w-8 h-8 bg-muted rounded-full mx-auto mb-2"}),e.jsxs("p",{className:"text-xs",children:["카드 ",r+1]})]})},r))})}),e.jsx(g,{children:e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"닫기"})})})]})]})]}),parameters:{docs:{description:{story:"다양한 크기의 Dialog 변형입니다. 콘텐츠 양에 따라 적절한 크기를 선택할 수 있습니다."}}}},A={render:()=>{const[a,r]=f.useState([]),[i,n]=f.useState(!1),h=u=>{r(C=>[...C,u]),setTimeout(()=>{r(C=>C.slice(1))},3e3)};return e.jsxs("div",{className:"space-y-6 w-[600px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Dialog 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Escape"}),"로 다이얼로그 닫기"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 다이얼로그 내 요소 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter/Space"}),"로 버튼 활성화"]}),e.jsx("li",{children:"다이얼로그 열림 시 첫 번째 요소로 자동 포커스"}),e.jsx("li",{children:"다이얼로그 닫힘 시 트리거 요소로 포커스 복귀"}),e.jsx("li",{children:"스크린 리더가 제목과 설명 읽기"}),e.jsx("li",{children:"포커스 트랩으로 다이얼로그 외부 접근 차단"})]})]}),e.jsx("div",{"aria-live":"polite","aria-label":"다이얼로그 상태 안내",className:"sr-only",children:a.map((u,C)=>e.jsx("div",{children:u},C))}),e.jsxs(l,{open:i,onOpenChange:u=>{n(u),h(u?"접근성 다이얼로그가 열렸습니다":"접근성 다이얼로그가 닫혔습니다")},children:[e.jsx(d,{asChild:!0,children:e.jsxs(s,{className:"gap-2",onClick:()=>h("다이얼로그를 여는 중입니다"),children:[e.jsx(X,{className:"h-4 w-4"}),"접근성 다이얼로그 열기"]})}),e.jsxs(o,{className:"sm:max-w-md","aria-describedby":"dialog-description",children:[e.jsxs(c,{children:[e.jsx(m,{id:"dialog-title",children:"접근 가능한 다이얼로그"}),e.jsx(x,{id:"dialog-description",children:"모든 접근성 기능이 구현된 다이얼로그입니다. 키보드와 스크린 리더로 완전히 접근 가능합니다."})]}),e.jsxs("div",{className:"py-4 space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"accessible-input",children:"이름 (필수)"}),e.jsx(j,{id:"accessible-input",placeholder:"이름을 입력하세요","aria-required":"true","aria-describedby":"name-help",onFocus:()=>h("이름 입력 필드에 포커스됨")}),e.jsx("p",{id:"name-help",className:"text-xs text-muted-foreground",children:"실명을 입력해주세요"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"accessible-textarea",children:"메시지"}),e.jsx(G,{id:"accessible-textarea",placeholder:"메시지를 입력하세요","aria-describedby":"message-help",onFocus:()=>h("메시지 입력 영역에 포커스됨")}),e.jsx("p",{id:"message-help",className:"text-xs text-muted-foreground",children:"선택사항입니다"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(v,{id:"accessible-checkbox",onCheckedChange:u=>h(u?"체크박스가 선택됨":"체크박스 선택 해제됨")}),e.jsx(t,{htmlFor:"accessible-checkbox",children:"이용약관에 동의합니다"})]}),e.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-green-700 dark:text-green-300",children:"접근성 상태"})]}),e.jsxs("ul",{className:"text-xs text-green-600 dark:text-green-400 space-y-1",children:[e.jsx("li",{children:"• ARIA 라벨과 역할 정의됨"}),e.jsx("li",{children:"• 키보드 네비게이션 완전 지원"}),e.jsx("li",{children:"• 포커스 트랩 활성화됨"}),e.jsx("li",{children:"• 스크린 리더 호환성 확보"}),e.jsx("li",{children:"• 라이브 영역으로 상태 안내"})]})]})]}),e.jsxs(g,{children:[e.jsx(p,{asChild:!0,children:e.jsx(s,{variant:"outline",onClick:()=>h("취소 버튼이 클릭됨"),children:"취소"})}),e.jsx(s,{onClick:()=>h("확인 버튼이 클릭됨"),children:"확인"})]})]})]}),e.jsxs(N,{children:[e.jsx(H,{children:e.jsx(L,{className:"text-base",children:"접근성 기능 상태"})}),e.jsxs(D,{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"키보드 네비게이션"}),e.jsx(b,{variant:"default",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"포커스 관리"}),e.jsx(b,{variant:"default",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"ARIA 라벨링"}),e.jsx(b,{variant:"default",children:"활성화"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"스크린 리더 지원"}),e.jsx(b,{variant:"default",children:"활성화"})]})]}),a.length>0&&e.jsxs("div",{className:"mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("div",{className:"w-2 h-2 bg-primary rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-primary",children:"최근 안내"})]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:a[a.length-1]})]})]})]})]})},parameters:{docs:{description:{story:"Dialog의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 포커스 관리, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."}}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button>다이얼로그 열기</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>기본 다이얼로그</DialogTitle>\r
          <DialogDescription>\r
            이것은 기본 다이얼로그입니다. 여기에 필요한 내용을 추가할 수 있습니다.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <div className="py-4">\r
          <p className="text-sm text-muted-foreground">\r
            다이얼로그 콘텐츠 영역입니다. 여기에 원하는 내용을 배치할 수 있습니다.\r
          </p>\r
        </div>\r
        <DialogFooter>\r
          <DialogClose asChild>\r
            <Button variant="outline">취소</Button>\r
          </DialogClose>\r
          <Button type="submit">확인</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>,
  parameters: {
    docs: {
      description: {
        story: "기본 Dialog 컴포넌트입니다. 제목, 설명, 콘텐츠, 액션 버튼을 포함합니다."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      {/* 성공 알림 */}\r
      <Dialog>\r
        <DialogTrigger asChild>\r
          <Button variant="default" className="gap-2">\r
            <CheckCircle className="h-4 w-4" />\r
            성공 알림\r
          </Button>\r
        </DialogTrigger>\r
        <DialogContent className="sm:max-w-md">\r
          <DialogHeader>\r
            <div className="flex items-center gap-2">\r
              <div className="p-2 bg-green-100 rounded-full">\r
                <CheckCircle className="h-6 w-6 text-green-600" />\r
              </div>\r
              <div>\r
                <DialogTitle>작업 완료</DialogTitle>\r
                <DialogDescription>\r
                  요청하신 작업이 성공적으로 완료되었습니다.\r
                </DialogDescription>\r
              </div>\r
            </div>\r
          </DialogHeader>\r
          <div className="py-4">\r
            <div className="space-y-2">\r
              <p className="text-sm">✅ 파일이 안전하게 저장되었습니다</p>\r
              <p className="text-sm">✅ 알림이 전송되었습니다</p>\r
              <p className="text-sm">✅ 백업이 생성되었습니다</p>\r
            </div>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button className="w-full">확인</Button>\r
            </DialogClose>\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>\r
\r
      {/* 경고 알림 */}\r
      <Dialog>\r
        <DialogTrigger asChild>\r
          <Button variant="destructive" className="gap-2">\r
            <AlertTriangle className="h-4 w-4" />\r
            경고 알림\r
          </Button>\r
        </DialogTrigger>\r
        <DialogContent className="sm:max-w-md">\r
          <DialogHeader>\r
            <div className="flex items-center gap-2">\r
              <div className="p-2 bg-red-100 rounded-full">\r
                <AlertTriangle className="h-6 w-6 text-red-600" />\r
              </div>\r
              <div>\r
                <DialogTitle>주의 필요</DialogTitle>\r
                <DialogDescription>\r
                  다음 작업을 진행하기 전에 확인해주세요.\r
                </DialogDescription>\r
              </div>\r
            </div>\r
          </DialogHeader>\r
          <div className="py-4">\r
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">\r
              <p className="text-sm text-red-700">\r
                ⚠️ 이 작업은 되돌릴 수 없습니다. 계속 진행하시겠습니까?\r
              </p>\r
            </div>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button variant="outline">취소</Button>\r
            </DialogClose>\r
            <Button variant="destructive">계속 진행</Button>\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>\r
\r
      {/* 정보 알림 */}\r
      <Dialog>\r
        <DialogTrigger asChild>\r
          <Button variant="outline" className="gap-2">\r
            <Info className="h-4 w-4" />\r
            정보 알림\r
          </Button>\r
        </DialogTrigger>\r
        <DialogContent className="sm:max-w-md">\r
          <DialogHeader>\r
            <div className="flex items-center gap-2">\r
              <div className="p-2 bg-blue-100 rounded-full">\r
                <Info className="h-6 w-6 text-blue-600" />\r
              </div>\r
              <div>\r
                <DialogTitle>업데이트 안내</DialogTitle>\r
                <DialogDescription>\r
                  새로운 기능이 추가되었습니다.\r
                </DialogDescription>\r
              </div>\r
            </div>\r
          </DialogHeader>\r
          <div className="py-4 space-y-3">\r
            <div className="flex items-start gap-3">\r
              <Star className="h-5 w-5 text-yellow-500 mt-0.5" />\r
              <div>\r
                <p className="font-medium text-sm">새로운 대시보드</p>\r
                <p className="text-sm text-muted-foreground">더 직관적인 인터페이스</p>\r
              </div>\r
            </div>\r
            <div className="flex items-start gap-3">\r
              <Upload className="h-5 w-5 text-green-500 mt-0.5" />\r
              <div>\r
                <p className="font-medium text-sm">파일 업로드 개선</p>\r
                <p className="text-sm text-muted-foreground">더 빠르고 안정적인 업로드</p>\r
              </div>\r
            </div>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button>알겠습니다</Button>\r
            </DialogClose>\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>\r
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
    return <div className="flex gap-4">\r
        {/* 삭제 확인 */}\r
        <Dialog>\r
          <DialogTrigger asChild>\r
            <Button variant="destructive" className="gap-2">\r
              <Trash2 className="h-4 w-4" />\r
              항목 삭제\r
            </Button>\r
          </DialogTrigger>\r
          <DialogContent className="sm:max-w-md">\r
            <DialogHeader>\r
              <DialogTitle className="flex items-center gap-2">\r
                <Trash2 className="h-5 w-5 text-red-600" />\r
                항목 삭제 확인\r
              </DialogTitle>\r
              <DialogDescription>\r
                선택한 항목을 영구적으로 삭제하시겠습니까?\r
              </DialogDescription>\r
            </DialogHeader>\r
            <div className="py-4">\r
              <Card className="border-red-200 bg-red-50">\r
                <CardContent className="p-4">\r
                  <div className="space-y-2">\r
                    <p className="font-medium text-sm">삭제될 항목:</p>\r
                    <div className="space-y-1">\r
                      <div className="flex items-center gap-2">\r
                        <FileText className="h-4 w-4 text-muted-foreground" />\r
                        <span className="text-sm">프로젝트 보고서.pdf</span>\r
                      </div>\r
                      <div className="flex items-center gap-2">\r
                        <Folder className="h-4 w-4 text-muted-foreground" />\r
                        <span className="text-sm">이미지 폴더 (15개 파일)</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </CardContent>\r
              </Card>\r
              <p className="text-xs text-red-600 mt-2">\r
                ⚠️ 이 작업은 되돌릴 수 없습니다.\r
              </p>\r
            </div>\r
            <DialogFooter>\r
              <DialogClose asChild>\r
                <Button variant="outline">취소</Button>\r
              </DialogClose>\r
              <Button variant="destructive" disabled={isDeleting} onClick={handleDelete}>\r
                {isDeleting ? "삭제 중..." : "삭제"}\r
              </Button>\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
\r
        {/* 저장 확인 */}\r
        <Dialog>\r
          <DialogTrigger asChild>\r
            <Button className="gap-2">\r
              <Save className="h-4 w-4" />\r
              변경 사항 저장\r
            </Button>\r
          </DialogTrigger>\r
          <DialogContent className="sm:max-w-md">\r
            <DialogHeader>\r
              <DialogTitle className="flex items-center gap-2">\r
                <Save className="h-5 w-5 text-blue-600" />\r
                변경 사항 저장\r
              </DialogTitle>\r
              <DialogDescription>\r
                작업 중인 내용을 저장하시겠습니까?\r
              </DialogDescription>\r
            </DialogHeader>\r
            <div className="py-4">\r
              <div className="space-y-3">\r
                <div className="flex items-center justify-between">\r
                  <span className="text-sm">마지막 저장:</span>\r
                  <span className="text-sm text-muted-foreground">2분 전</span>\r
                </div>\r
                <div className="flex items-center justify-between">\r
                  <span className="text-sm">변경된 항목:</span>\r
                  <Badge variant="secondary">5개</Badge>\r
                </div>\r
                <Separator />\r
                <div className="space-y-2">\r
                  <div className="flex items-center gap-2">\r
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>\r
                    <span className="text-sm">제목 수정됨</span>\r
                  </div>\r
                  <div className="flex items-center gap-2">\r
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>\r
                    <span className="text-sm">내용 추가됨</span>\r
                  </div>\r
                  <div className="flex items-center gap-2">\r
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>\r
                    <span className="text-sm">이미지 교체됨</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <DialogFooter>\r
              <DialogClose asChild>\r
                <Button variant="outline">나중에</Button>\r
              </DialogClose>\r
              <Button>저장</Button>\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
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
    return <div className="flex gap-4">\r
        {/* 사용자 추가 폼 */}\r
        <Dialog>\r
          <DialogTrigger asChild>\r
            <Button className="gap-2">\r
              <Plus className="h-4 w-4" />\r
              새 사용자 추가\r
            </Button>\r
          </DialogTrigger>\r
          <DialogContent className="sm:max-w-md">\r
            <DialogHeader>\r
              <DialogTitle>새 사용자 추가</DialogTitle>\r
              <DialogDescription>\r
                새로운 팀 멤버 정보를 입력해주세요.\r
              </DialogDescription>\r
            </DialogHeader>\r
            <form onSubmit={handleSubmit}>\r
              <div className="space-y-4 py-4">\r
                <div className="space-y-2">\r
                  <Label htmlFor="name">이름 *</Label>\r
                  <Input id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} placeholder="홍길동" required />\r
                </div>\r
                <div className="space-y-2">\r
                  <Label htmlFor="email">이메일 *</Label>\r
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} placeholder="hong@example.com" required />\r
                </div>\r
                <div className="space-y-2">\r
                  <Label htmlFor="department">부서</Label>\r
                  <Input id="department" value={formData.department} onChange={e => setFormData({
                  ...formData,
                  department: e.target.value
                })} placeholder="개발팀" />\r
                </div>\r
              </div>\r
              <DialogFooter>\r
                <DialogClose asChild>\r
                  <Button variant="outline" type="button">취소</Button>\r
                </DialogClose>\r
                <Button type="submit">추가</Button>\r
              </DialogFooter>\r
            </form>\r
          </DialogContent>\r
        </Dialog>\r
\r
        {/* 연락하기 폼 */}\r
        <Dialog>\r
          <DialogTrigger asChild>\r
            <Button variant="outline" className="gap-2">\r
              <Mail className="h-4 w-4" />\r
              연락하기\r
            </Button>\r
          </DialogTrigger>\r
          <DialogContent className="sm:max-w-lg">\r
            <DialogHeader>\r
              <DialogTitle>연락하기</DialogTitle>\r
              <DialogDescription>\r
                궁금한 점이나 요청사항을 남겨주세요. 빠르게 답변드리겠습니다.\r
              </DialogDescription>\r
            </DialogHeader>\r
            <form onSubmit={handleSubmit}>\r
              <div className="space-y-4 py-4">\r
                <div className="grid grid-cols-2 gap-4">\r
                  <div className="space-y-2">\r
                    <Label htmlFor="contact-name">이름 *</Label>\r
                    <Input id="contact-name" placeholder="이름을 입력하세요" required />\r
                  </div>\r
                  <div className="space-y-2">\r
                    <Label htmlFor="contact-email">이메일 *</Label>\r
                    <Input id="contact-email" type="email" placeholder="email@example.com" required />\r
                  </div>\r
                </div>\r
                <div className="space-y-2">\r
                  <Label htmlFor="message">메시지 *</Label>\r
                  <Textarea id="message" placeholder="문의 내용을 자세히 적어주세요..." value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} className="min-h-[100px]" required />\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="urgent" checked={formData.urgent} onCheckedChange={checked => setFormData({
                  ...formData,
                  urgent: !!checked
                })} />\r
                  <Label htmlFor="urgent" className="text-sm">\r
                    긴급 문의 (24시간 내 답변)\r
                  </Label>\r
                </div>\r
              </div>\r
              <DialogFooter>\r
                <DialogClose asChild>\r
                  <Button variant="outline" type="button">취소</Button>\r
                </DialogClose>\r
                <Button type="submit">전송</Button>\r
              </DialogFooter>\r
            </form>\r
          </DialogContent>\r
        </Dialog>\r
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
    return <div className="space-y-4">\r
        <div className="grid grid-cols-2 gap-4 max-w-md">\r
          {images.map(image => <Dialog key={image.id}>\r
              <DialogTrigger asChild>\r
                <Card className="cursor-pointer hover:shadow-md transition-shadow">\r
                  <CardContent className="p-4 text-center">\r
                    <div className="text-4xl mb-2">{image.emoji}</div>\r
                    <p className="text-sm font-medium">{image.title}</p>\r
                    <p className="text-xs text-muted-foreground">{image.description}</p>\r
                  </CardContent>\r
                </Card>\r
              </DialogTrigger>\r
              <DialogContent className="sm:max-w-2xl">\r
                <DialogHeader>\r
                  <DialogTitle>{image.title}</DialogTitle>\r
                  <DialogDescription>{image.description}</DialogDescription>\r
                </DialogHeader>\r
                <div className="py-4">\r
                  {/* 이미지 영역 */}\r
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border">\r
                    <div className="text-center">\r
                      <div className="text-8xl mb-4">{image.emoji}</div>\r
                      <p className="text-muted-foreground">고해상도 이미지</p>\r
                    </div>\r
                  </div>\r
                  \r
                  {/* 이미지 정보 */}\r
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">\r
                    <div>\r
                      <span className="font-medium">크기:</span>\r
                      <p className="text-muted-foreground">1920 × 1080</p>\r
                    </div>\r
                    <div>\r
                      <span className="font-medium">파일 크기:</span>\r
                      <p className="text-muted-foreground">2.4 MB</p>\r
                    </div>\r
                    <div>\r
                      <span className="font-medium">형식:</span>\r
                      <p className="text-muted-foreground">PNG</p>\r
                    </div>\r
                  </div>\r
                </div>\r
                <DialogFooter>\r
                  <Button variant="outline" className="gap-2">\r
                    <Share className="h-4 w-4" />\r
                    공유\r
                  </Button>\r
                  <Button className="gap-2">\r
                    <Download className="h-4 w-4" />\r
                    다운로드\r
                  </Button>\r
                </DialogFooter>\r
              </DialogContent>\r
            </Dialog>)}\r
        </div>\r
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
    return <Dialog>\r
        <DialogTrigger asChild>\r
          <Button variant="outline" className="gap-2">\r
            <Settings className="h-4 w-4" />\r
            환경 설정\r
          </Button>\r
        </DialogTrigger>\r
        <DialogContent className="sm:max-w-lg">\r
          <DialogHeader>\r
            <DialogTitle>환경 설정</DialogTitle>\r
            <DialogDescription>\r
              애플리케이션 사용 환경을 설정하세요.\r
            </DialogDescription>\r
          </DialogHeader>\r
          <div className="py-4 space-y-6">\r
            {/* 알림 설정 */}\r
            <div className="space-y-3">\r
              <h4 className="font-medium flex items-center gap-2">\r
                <Settings className="h-4 w-4" />\r
                알림 설정\r
              </h4>\r
              <div className="space-y-3 ml-6">\r
                <div className="flex items-center justify-between">\r
                  <div>\r
                    <Label htmlFor="notifications">푸시 알림</Label>\r
                    <p className="text-xs text-muted-foreground">새 메시지와 업데이트 알림</p>\r
                  </div>\r
                  <Checkbox id="notifications" checked={settings.notifications} onCheckedChange={checked => setSettings(prev => ({
                  ...prev,
                  notifications: !!checked
                }))} />\r
                </div>\r
                <div className="flex items-center justify-between">\r
                  <div>\r
                    <Label htmlFor="soundEffects">소리 효과</Label>\r
                    <p className="text-xs text-muted-foreground">알림음과 효과음</p>\r
                  </div>\r
                  <Checkbox id="soundEffects" checked={settings.soundEffects} onCheckedChange={checked => setSettings(prev => ({
                  ...prev,
                  soundEffects: !!checked
                }))} />\r
                </div>\r
              </div>\r
            </div>\r
\r
            <Separator />\r
\r
            {/* 외관 설정 */}\r
            <div className="space-y-3">\r
              <h4 className="font-medium flex items-center gap-2">\r
                <Image className="h-4 w-4" />\r
                외관 설정\r
              </h4>\r
              <div className="space-y-3 ml-6">\r
                <div className="flex items-center justify-between">\r
                  <div>\r
                    <Label htmlFor="darkMode">다크 모드</Label>\r
                    <p className="text-xs text-muted-foreground">어두운 테마 사용</p>\r
                  </div>\r
                  <Checkbox id="darkMode" checked={settings.darkMode} onCheckedChange={checked => setSettings(prev => ({
                  ...prev,
                  darkMode: !!checked
                }))} />\r
                </div>\r
                <div className="space-y-2">\r
                  <Label htmlFor="language">언어</Label>\r
                  <select id="language" value={settings.language} onChange={e => setSettings(prev => ({
                  ...prev,
                  language: e.target.value
                }))} className="w-full px-3 py-2 text-sm border rounded-md">\r
                    <option value="ko">한국어</option>\r
                    <option value="en">English</option>\r
                    <option value="ja">日本語</option>\r
                  </select>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <Separator />\r
\r
            {/* 작업 설정 */}\r
            <div className="space-y-3">\r
              <h4 className="font-medium flex items-center gap-2">\r
                <Save className="h-4 w-4" />\r
                작업 설정\r
              </h4>\r
              <div className="space-y-3 ml-6">\r
                <div className="flex items-center justify-between">\r
                  <div>\r
                    <Label htmlFor="autoSave">자동 저장</Label>\r
                    <p className="text-xs text-muted-foreground">5분마다 자동으로 저장</p>\r
                  </div>\r
                  <Checkbox id="autoSave" checked={settings.autoSave} onCheckedChange={checked => setSettings(prev => ({
                  ...prev,
                  autoSave: !!checked
                }))} />\r
                </div>\r
                <div className="space-y-2">\r
                  <Label htmlFor="timezone">시간대</Label>\r
                  <select id="timezone" value={settings.timezone} onChange={e => setSettings(prev => ({
                  ...prev,
                  timezone: e.target.value
                }))} className="w-full px-3 py-2 text-sm border rounded-md">\r
                    <option value="Asia/Seoul">서울 (GMT+9)</option>\r
                    <option value="America/New_York">뉴욕 (GMT-5)</option>\r
                    <option value="Europe/London">런던 (GMT+0)</option>\r
                    <option value="Asia/Tokyo">도쿄 (GMT+9)</option>\r
                  </select>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button variant="outline">취소</Button>\r
            </DialogClose>\r
            <Button>설정 저장</Button>\r
          </DialogFooter>\r
        </DialogContent>\r
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
  render: () => <div className="flex gap-4">\r
      {/* 작은 크기 */}\r
      <Dialog>\r
        <DialogTrigger asChild>\r
          <Button variant="outline" size="sm">작은 크기</Button>\r
        </DialogTrigger>\r
        <DialogContent className="sm:max-w-sm">\r
          <DialogHeader>\r
            <DialogTitle>작은 다이얼로그</DialogTitle>\r
            <DialogDescription>간단한 메시지나 확인</DialogDescription>\r
          </DialogHeader>\r
          <div className="py-4">\r
            <p className="text-sm">작은 크기의 다이얼로그입니다.</p>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button variant="outline" size="sm">닫기</Button>\r
            </DialogClose>\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>\r
\r
      {/* 기본 크기 */}\r
      <Dialog>\r
        <DialogTrigger asChild>\r
          <Button variant="outline">기본 크기</Button>\r
        </DialogTrigger>\r
        <DialogContent className="sm:max-w-lg">\r
          <DialogHeader>\r
            <DialogTitle>기본 다이얼로그</DialogTitle>\r
            <DialogDescription>일반적인 폼이나 내용</DialogDescription>\r
          </DialogHeader>\r
          <div className="py-4">\r
            <p className="text-sm">기본 크기의 다이얼로그입니다. 대부분의 경우에 적합합니다.</p>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button variant="outline">취소</Button>\r
            </DialogClose>\r
            <Button>확인</Button>\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>\r
\r
      {/* 큰 크기 */}\r
      <Dialog>\r
        <DialogTrigger asChild>\r
          <Button variant="outline">큰 크기</Button>\r
        </DialogTrigger>\r
        <DialogContent className="sm:max-w-2xl">\r
          <DialogHeader>\r
            <DialogTitle>큰 다이얼로그</DialogTitle>\r
            <DialogDescription>복잡한 폼이나 상세 내용</DialogDescription>\r
          </DialogHeader>\r
          <div className="py-4 space-y-4">\r
            <p className="text-sm">큰 크기의 다이얼로그입니다. 복잡한 폼이나 많은 정보를 표시할 때 사용합니다.</p>\r
            <div className="grid grid-cols-2 gap-4">\r
              <Card>\r
                <CardHeader className="pb-3">\r
                  <CardTitle className="text-sm">왼쪽 컬럼</CardTitle>\r
                </CardHeader>\r
                <CardContent className="text-xs text-muted-foreground">\r
                  왼쪽 영역의 내용입니다.\r
                </CardContent>\r
              </Card>\r
              <Card>\r
                <CardHeader className="pb-3">\r
                  <CardTitle className="text-sm">오른쪽 컬럼</CardTitle>\r
                </CardHeader>\r
                <CardContent className="text-xs text-muted-foreground">\r
                  오른쪽 영역의 내용입니다.\r
                </CardContent>\r
              </Card>\r
            </div>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button variant="outline">취소</Button>\r
            </DialogClose>\r
            <Button>저장</Button>\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>\r
\r
      {/* 전체 너비 */}\r
      <Dialog>\r
        <DialogTrigger asChild>\r
          <Button variant="outline">전체 너비</Button>\r
        </DialogTrigger>\r
        <DialogContent className="sm:max-w-4xl">\r
          <DialogHeader>\r
            <DialogTitle>전체 너비 다이얼로그</DialogTitle>\r
            <DialogDescription>대시보드나 테이블 등 넓은 내용</DialogDescription>\r
          </DialogHeader>\r
          <div className="py-4">\r
            <div className="grid grid-cols-4 gap-4">\r
              {Array.from({
              length: 8
            }).map((_, i) => <Card key={i}>\r
                  <CardContent className="p-4 text-center">\r
                    <div className="w-8 h-8 bg-muted rounded-full mx-auto mb-2"></div>\r
                    <p className="text-xs">카드 {i + 1}</p>\r
                  </CardContent>\r
                </Card>)}\r
            </div>\r
          </div>\r
          <DialogFooter>\r
            <DialogClose asChild>\r
              <Button variant="outline">닫기</Button>\r
            </DialogClose>\r
          </DialogFooter>\r
        </DialogContent>\r
      </Dialog>\r
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
    return <div className="space-y-6 w-[600px]">\r
        <div className="space-y-2">\r
          <h3 className="text-lg font-semibold">접근성 데모</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Dialog 컴포넌트의 접근성 기능을 확인해보세요:\r
          </p>\r
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 다이얼로그 닫기</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 다이얼로그 내 요소 간 이동</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter/Space</kbd>로 버튼 활성화</li>\r
            <li>다이얼로그 열림 시 첫 번째 요소로 자동 포커스</li>\r
            <li>다이얼로그 닫힘 시 트리거 요소로 포커스 복귀</li>\r
            <li>스크린 리더가 제목과 설명 읽기</li>\r
            <li>포커스 트랩으로 다이얼로그 외부 접근 차단</li>\r
          </ul>\r
        </div>\r
\r
        {/* 라이브 영역 */}\r
        <div aria-live="polite" aria-label="다이얼로그 상태 안내" className="sr-only">\r
          {announcements.map((announcement, index) => <div key={index}>{announcement}</div>)}\r
        </div>\r
\r
        {/* 접근성 다이얼로그 */}\r
        <Dialog open={isOpen} onOpenChange={open => {
        setIsOpen(open);
        if (open) {
          addAnnouncement("접근성 다이얼로그가 열렸습니다");
        } else {
          addAnnouncement("접근성 다이얼로그가 닫혔습니다");
        }
      }}>\r
          <DialogTrigger asChild>\r
            <Button className="gap-2" onClick={() => addAnnouncement("다이얼로그를 여는 중입니다")}>\r
              <Lock className="h-4 w-4" />\r
              접근성 다이얼로그 열기\r
            </Button>\r
          </DialogTrigger>\r
          <DialogContent className="sm:max-w-md" aria-describedby="dialog-description">\r
            <DialogHeader>\r
              <DialogTitle id="dialog-title">\r
                접근 가능한 다이얼로그\r
              </DialogTitle>\r
              <DialogDescription id="dialog-description">\r
                모든 접근성 기능이 구현된 다이얼로그입니다. \r
                키보드와 스크린 리더로 완전히 접근 가능합니다.\r
              </DialogDescription>\r
            </DialogHeader>\r
            \r
            <div className="py-4 space-y-4">\r
              {/* 폼 요소들 */}\r
              <div className="space-y-2">\r
                <Label htmlFor="accessible-input">\r
                  이름 (필수)\r
                </Label>\r
                <Input id="accessible-input" placeholder="이름을 입력하세요" aria-required="true" aria-describedby="name-help" onFocus={() => addAnnouncement("이름 입력 필드에 포커스됨")} />\r
                <p id="name-help" className="text-xs text-muted-foreground">\r
                  실명을 입력해주세요\r
                </p>\r
              </div>\r
\r
              <div className="space-y-2">\r
                <Label htmlFor="accessible-textarea">메시지</Label>\r
                <Textarea id="accessible-textarea" placeholder="메시지를 입력하세요" aria-describedby="message-help" onFocus={() => addAnnouncement("메시지 입력 영역에 포커스됨")} />\r
                <p id="message-help" className="text-xs text-muted-foreground">\r
                  선택사항입니다\r
                </p>\r
              </div>\r
\r
              <div className="flex items-center space-x-2">\r
                <Checkbox id="accessible-checkbox" onCheckedChange={checked => addAnnouncement(checked ? "체크박스가 선택됨" : "체크박스 선택 해제됨")} />\r
                <Label htmlFor="accessible-checkbox">\r
                  이용약관에 동의합니다\r
                </Label>\r
              </div>\r
\r
              {/* 접근성 상태 표시 */}\r
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">\r
                <div className="flex items-center gap-2 mb-2">\r
                  <div className="w-2 h-2 bg-green-500 rounded-full" />\r
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">\r
                    접근성 상태\r
                  </span>\r
                </div>\r
                <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">\r
                  <li>• ARIA 라벨과 역할 정의됨</li>\r
                  <li>• 키보드 네비게이션 완전 지원</li>\r
                  <li>• 포커스 트랩 활성화됨</li>\r
                  <li>• 스크린 리더 호환성 확보</li>\r
                  <li>• 라이브 영역으로 상태 안내</li>\r
                </ul>\r
              </div>\r
            </div>\r
\r
            <DialogFooter>\r
              <DialogClose asChild>\r
                <Button variant="outline" onClick={() => addAnnouncement("취소 버튼이 클릭됨")}>\r
                  취소\r
                </Button>\r
              </DialogClose>\r
              <Button onClick={() => addAnnouncement("확인 버튼이 클릭됨")}>\r
                확인\r
              </Button>\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
\r
        {/* 접근성 정보 카드 */}\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="text-base">접근성 기능 상태</CardTitle>\r
          </CardHeader>\r
          <CardContent className="space-y-3">\r
            <div className="grid grid-cols-1 gap-3">\r
              <div className="flex items-center justify-between">\r
                <span className="text-sm">키보드 네비게이션</span>\r
                <Badge variant="default">활성화</Badge>\r
              </div>\r
              <div className="flex items-center justify-between">\r
                <span className="text-sm">포커스 관리</span>\r
                <Badge variant="default">활성화</Badge>\r
              </div>\r
              <div className="flex items-center justify-between">\r
                <span className="text-sm">ARIA 라벨링</span>\r
                <Badge variant="default">활성화</Badge>\r
              </div>\r
              <div className="flex items-center justify-between">\r
                <span className="text-sm">스크린 리더 지원</span>\r
                <Badge variant="default">활성화</Badge>\r
              </div>\r
            </div>\r
\r
            {announcements.length > 0 && <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">\r
                <div className="flex items-center gap-2 mb-1">\r
                  <div className="w-2 h-2 bg-primary rounded-full" />\r
                  <span className="text-sm font-medium text-primary">최근 안내</span>\r
                </div>\r
                <p className="text-xs text-muted-foreground">\r
                  {announcements[announcements.length - 1]}\r
                </p>\r
              </div>}\r
          </CardContent>\r
        </Card>\r
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
