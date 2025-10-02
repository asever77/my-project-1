import{j as e}from"./jsx-runtime-zcBydOHc.js";import{e as k}from"./iframe-f0y5nwCv.js";import{S as w}from"./index-Bnc6pY_-.js";import{c as u}from"./utils-CBfrqCZ4.js";import{C as _}from"./chevron-right-C206LwEP.js";import{E as C}from"./ellipsis-C4oatEf0.js";import{H as y}from"./house-BAadMcJU.js";import{U as F}from"./users-BqOFsPXO.js";import{S as E}from"./settings-CLlBn3hE.js";import{F as v}from"./file-text-CosDzJ2u.js";import{c as R}from"./createLucideIcon-D1NW3S5P.js";import{F as b}from"./folder-DxeqTgpF.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],S=R("slash",D);function m({...c}){return e.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...c})}function d({className:c,...n}){return e.jsx("ol",{"data-slot":"breadcrumb-list",className:u("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",c),...n})}function r({className:c,...n}){return e.jsx("li",{"data-slot":"breadcrumb-item",className:u("inline-flex items-center gap-1.5",c),...n})}function s({asChild:c,className:n,...l}){const i=c?w:"a";return e.jsx(i,{"data-slot":"breadcrumb-link",className:u("hover:text-foreground transition-colors",n),...l})}function t({className:c,...n}){return e.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:u("text-foreground font-normal",c),...n})}function a({children:c,className:n,...l}){return e.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:u("[&>svg]:size-3.5",n),...l,children:c??e.jsx(_,{})})}function L({className:c,...n}){return e.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:u("flex size-9 items-center justify-center",c),...n,children:[e.jsx(C,{className:"size-4"}),e.jsx("span",{className:"sr-only",children:"More"})]})}m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};L.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const Q={title:"UI/Contents/Breadcrumb",component:m,parameters:{layout:"centered",docs:{description:{component:`
사용자의 현재 위치를 표시하는 네비게이션 컴포넌트입니다. 웹사이트의 계층 구조를 명확하게 보여줍니다.

## 주요 기능
- **계층 구조 표시**: 현재 페이지까지의 경로를 시각적으로 표현
- **네비게이션 지원**: 이전 페이지로 쉽게 돌아갈 수 있는 링크 제공
- **접근성 완벽 지원**: WAI-ARIA 표준 준수, 스크린 리더 호환
- **반응형 디자인**: 모바일에서도 적절하게 표시되도록 조정
- **커스터마이징**: 구분자와 스타일을 자유롭게 변경 가능
- **생략 표시**: 긴 경로의 중간 부분을 생략하여 표시

## 사용법
\`\`\`tsx
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">홈</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">제품</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>노트북</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
\`\`\`

## 구성 요소
- \`Breadcrumb\`: 브레드크럼 네비게이션의 루트 컨테이너
- \`BreadcrumbList\`: 브레드크럼 아이템들의 목록
- \`BreadcrumbItem\`: 개별 브레드크럼 아이템
- \`BreadcrumbLink\`: 클릭 가능한 링크
- \`BreadcrumbPage\`: 현재 페이지 (링크 불가)
- \`BreadcrumbSeparator\`: 아이템 간 구분자
- \`BreadcrumbEllipsis\`: 생략 표시 (...)

## 접근성 가이드라인
- 각 링크는 명확하고 설명적인 텍스트 사용
- 현재 페이지는 aria-current="page" 속성 포함
- 구분자는 aria-hidden="true"로 스크린 리더에서 제외
- 키보드만으로도 모든 링크 접근 가능
        `}}},tags:["autodocs"],render:c=>e.jsx(m,{...c,children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsx(s,{href:"/",children:"홈"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"/products",children:"제품"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(t,{children:"노트북"})})]})})},B={render:()=>e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsx(s,{href:"/",children:"홈"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"/docs",children:"문서"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(t,{children:"컴포넌트"})})]})}),parameters:{docs:{description:{story:"기본 Breadcrumb입니다. 홈 → 카테고리 → 현재 페이지 순서로 네비게이션 경로를 표시합니다."}}}},x={render:()=>e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsxs(s,{href:"/",className:"flex items-center gap-1",children:[e.jsx(y,{className:"w-4 h-4"}),"홈"]})}),e.jsx(a,{}),e.jsx(r,{children:e.jsxs(s,{href:"/users",className:"flex items-center gap-1",children:[e.jsx(F,{className:"w-4 h-4"}),"사용자"]})}),e.jsx(a,{}),e.jsx(r,{children:e.jsxs(s,{href:"/users/settings",className:"flex items-center gap-1",children:[e.jsx(E,{className:"w-4 h-4"}),"설정"]})}),e.jsx(a,{}),e.jsx(r,{children:e.jsxs(t,{className:"flex items-center gap-1",children:[e.jsx(v,{className:"w-4 h-4"}),"프로필 편집"]})})]})}),parameters:{docs:{description:{story:"아이콘이 포함된 Breadcrumb입니다. 각 단계를 시각적으로 더 명확하게 구분할 수 있습니다."}}}},p={render:()=>e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsx(s,{href:"/",children:"홈"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"/ecommerce",children:"전자상거래"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"/ecommerce/electronics",children:"전자제품"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"/ecommerce/electronics/computers",children:"컴퓨터"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"/ecommerce/electronics/computers/laptops",children:"노트북"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(t,{children:"맥북 프로 14인치"})})]})}),parameters:{docs:{description:{story:"긴 경로를 가진 Breadcrumb입니다. 깊은 계층 구조의 페이지에서 전체 경로를 표시합니다."}}}},h={render:()=>e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsx(s,{href:"/",children:"홈"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(L,{})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"/electronics/computers",children:"컴퓨터"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"/electronics/computers/laptops",children:"노트북"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(t,{children:"맥북 프로"})})]})}),parameters:{docs:{description:{story:"생략 표시(Ellipsis)가 포함된 Breadcrumb입니다. 긴 경로의 중간 부분을 생략하여 표시할 수 있습니다."}}}},j={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"슬래시 구분자"}),e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsx(s,{href:"/",children:"홈"})}),e.jsx(a,{children:e.jsx(S,{})}),e.jsx(r,{children:e.jsx(s,{href:"/blog",children:"블로그"})}),e.jsx(a,{children:e.jsx(S,{})}),e.jsx(r,{children:e.jsx(t,{children:"포스트 제목"})})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"텍스트 구분자"}),e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsx(s,{href:"/",children:"홈"})}),e.jsx(a,{children:e.jsx("span",{className:"text-muted-foreground",children:"•"})}),e.jsx(r,{children:e.jsx(s,{href:"/gallery",children:"갤러리"})}),e.jsx(a,{children:e.jsx("span",{className:"text-muted-foreground",children:"•"})}),e.jsx(r,{children:e.jsx(t,{children:"사진 앨범"})})]})})]})]}),parameters:{docs:{description:{story:"커스텀 구분자를 사용한 Breadcrumb입니다. 슬래시, 점, 화살표 등 다양한 구분자를 사용할 수 있습니다."}}}},f={render:()=>e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsxs(s,{href:"/root",className:"flex items-center gap-1",children:[e.jsx(b,{className:"w-4 h-4"}),"프로젝트"]})}),e.jsx(a,{}),e.jsx(r,{children:e.jsxs(s,{href:"/root/src",className:"flex items-center gap-1",children:[e.jsx(b,{className:"w-4 h-4"}),"src"]})}),e.jsx(a,{}),e.jsx(r,{children:e.jsxs(s,{href:"/root/src/components",className:"flex items-center gap-1",children:[e.jsx(b,{className:"w-4 h-4"}),"components"]})}),e.jsx(a,{}),e.jsx(r,{children:e.jsxs(s,{href:"/root/src/components/ui",className:"flex items-center gap-1",children:[e.jsx(b,{className:"w-4 h-4"}),"ui"]})}),e.jsx(a,{}),e.jsx(r,{children:e.jsxs(t,{className:"flex items-center gap-1",children:[e.jsx(v,{className:"w-4 h-4"}),"breadcrumb.tsx"]})})]})}),parameters:{docs:{description:{story:"파일 시스템 경로를 표시하는 Breadcrumb입니다. 코드 에디터나 파일 브라우저에서 사용할 수 있습니다."}}}},g={render:()=>e.jsxs("div",{className:"w-full max-w-xs",children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"좁은 화면에서의 표시"}),e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsx(s,{href:"/",children:"홈"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(L,{})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(t,{children:"현재 페이지가 긴 제목을 가지고 있을 때"})})]})})]}),parameters:{docs:{description:{story:"반응형 디자인을 고려한 Breadcrumb입니다. 좁은 화면에서는 중간 경로를 생략하여 표시합니다."}}}},N={render:()=>{const[c,n]=k.useState(["홈","전자제품","컴퓨터","노트북"]),l=i=>{n(c.slice(0,i+1))};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium",children:"상호작용 가능한 브레드크럼"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"브레드크럼을 클릭하여 경로를 변경해보세요."})]}),e.jsx(m,{children:e.jsx(d,{children:c.map((i,o)=>e.jsxs(k.Fragment,{children:[e.jsx(r,{children:o===c.length-1?e.jsx(t,{children:i}):e.jsx(s,{href:"#",onClick:P=>{P.preventDefault(),l(o)},children:i})}),o<c.length-1&&e.jsx(a,{})]},o))})}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["현재 경로: ",c.join(" → ")]})]})},parameters:{docs:{description:{story:"상호작용이 가능한 Breadcrumb입니다. 클릭하여 이전 단계로 돌아갈 수 있습니다."}}}},I={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Breadcrumb 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"})," 키로 링크 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"}),"로 링크 활성화"]}),e.jsx("li",{children:'스크린 리더가 "breadcrumb navigation" 영역임을 안내'}),e.jsx("li",{children:'현재 페이지는 aria-current="page"로 표시'}),e.jsx("li",{children:"구분자는 스크린 리더에서 읽지 않음"})]})]}),e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(r,{children:e.jsxs(s,{href:"#","aria-label":"홈페이지로 이동",children:[e.jsx(y,{className:"w-4 h-4"}),e.jsx("span",{className:"sr-only",children:"홈"})]})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(s,{href:"#","aria-label":"접근성 문서 섹션으로 이동",children:"접근성"})}),e.jsx(a,{}),e.jsx(r,{children:e.jsx(t,{children:"가이드라인"})})]})}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsx("p",{children:"위 브레드크럼은 접근성 모범 사례를 따릅니다:"}),e.jsxs("ul",{className:"list-disc list-inside mt-2 space-y-1",children:[e.jsx("li",{children:"명확한 aria-label 제공"}),e.jsx("li",{children:"시각적으로 숨겨진 텍스트로 추가 컨텍스트 제공"}),e.jsx("li",{children:"적절한 focus 표시"})]})]})]}),parameters:{docs:{description:{story:"Breadcrumb의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 적절한 라벨링을 확인할 수 있습니다."}}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">홈</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">문서</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>컴포넌트</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
  parameters: {
    docs: {
      description: {
        story: "기본 Breadcrumb입니다. 홈 → 카테고리 → 현재 페이지 순서로 네비게이션 경로를 표시합니다."
      }
    }
  }
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <Home className="w-4 h-4" />
            홈
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/users" className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            사용자
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/users/settings" className="flex items-center gap-1">
            <Settings className="w-4 h-4" />
            설정
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            프로필 편집
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Breadcrumb입니다. 각 단계를 시각적으로 더 명확하게 구분할 수 있습니다."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">홈</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/ecommerce">전자상거래</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/ecommerce/electronics">전자제품</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/ecommerce/electronics/computers">컴퓨터</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/ecommerce/electronics/computers/laptops">노트북</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>맥북 프로 14인치</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
  parameters: {
    docs: {
      description: {
        story: "긴 경로를 가진 Breadcrumb입니다. 깊은 계층 구조의 페이지에서 전체 경로를 표시합니다."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">홈</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/electronics/computers">컴퓨터</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/electronics/computers/laptops">노트북</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>맥북 프로</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
  parameters: {
    docs: {
      description: {
        story: "생략 표시(Ellipsis)가 포함된 Breadcrumb입니다. 긴 경로의 중간 부분을 생략하여 표시할 수 있습니다."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">슬래시 구분자</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">블로그</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>포스트 제목</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">텍스트 구분자</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <span className="text-muted-foreground">•</span>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/gallery">갤러리</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <span className="text-muted-foreground">•</span>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>사진 앨범</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "커스텀 구분자를 사용한 Breadcrumb입니다. 슬래시, 점, 화살표 등 다양한 구분자를 사용할 수 있습니다."
      }
    }
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/root" className="flex items-center gap-1">
            <Folder className="w-4 h-4" />
            프로젝트
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/root/src" className="flex items-center gap-1">
            <Folder className="w-4 h-4" />
            src
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/root/src/components" className="flex items-center gap-1">
            <Folder className="w-4 h-4" />
            components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/root/src/components/ui" className="flex items-center gap-1">
            <Folder className="w-4 h-4" />
            ui
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            breadcrumb.tsx
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
  parameters: {
    docs: {
      description: {
        story: "파일 시스템 경로를 표시하는 Breadcrumb입니다. 코드 에디터나 파일 브라우저에서 사용할 수 있습니다."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xs">
      <p className="text-sm font-medium mb-2">좁은 화면에서의 표시</p>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">홈</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>현재 페이지가 긴 제목을 가지고 있을 때</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "반응형 디자인을 고려한 Breadcrumb입니다. 좁은 화면에서는 중간 경로를 생략하여 표시합니다."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentPath, setCurrentPath] = React.useState(['홈', '전자제품', '컴퓨터', '노트북']);
    const handleBreadcrumbClick = (index: number) => {
      setCurrentPath(currentPath.slice(0, index + 1));
    };
    return <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">상호작용 가능한 브레드크럼</h4>
          <p className="text-xs text-muted-foreground">
            브레드크럼을 클릭하여 경로를 변경해보세요.
          </p>
        </div>
        
        <Breadcrumb>
          <BreadcrumbList>
            {currentPath.map((item, index) => <React.Fragment key={index}>
                <BreadcrumbItem>
                  {index === currentPath.length - 1 ? <BreadcrumbPage>{item}</BreadcrumbPage> : <BreadcrumbLink href="#" onClick={e => {
                e.preventDefault();
                handleBreadcrumbClick(index);
              }}>
                      {item}
                    </BreadcrumbLink>}
                </BreadcrumbItem>
                {index < currentPath.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>)}
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="text-xs text-muted-foreground">
          현재 경로: {currentPath.join(' → ')}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "상호작용이 가능한 Breadcrumb입니다. 클릭하여 이전 단계로 돌아갈 수 있습니다."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">접근성 데모</h3>
        <p className="text-sm text-muted-foreground">
          Breadcrumb 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> 키로 링크 간 이동</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로 링크 활성화</li>
          <li>스크린 리더가 "breadcrumb navigation" 영역임을 안내</li>
          <li>현재 페이지는 aria-current="page"로 표시</li>
          <li>구분자는 스크린 리더에서 읽지 않음</li>
        </ul>
      </div>
      
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" aria-label="홈페이지로 이동">
              <Home className="w-4 h-4" />
              <span className="sr-only">홈</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" aria-label="접근성 문서 섹션으로 이동">
              접근성
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>가이드라인</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="text-sm text-muted-foreground">
        <p>위 브레드크럼은 접근성 모범 사례를 따릅니다:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>명확한 aria-label 제공</li>
          <li>시각적으로 숨겨진 텍스트로 추가 컨텍스트 제공</li>
          <li>적절한 focus 표시</li>
        </ul>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 적절한 라벨링을 확인할 수 있습니다."
      }
    }
  }
}`,...I.parameters?.docs?.source}}};export{I as AccessibilityDemo,j as CustomSeparators,B as Default,f as FileSystemPath,N as InteractiveDemo,p as LongPath,g as ResponsiveDesign,h as WithEllipsis,x as WithIcons,Q as default};
