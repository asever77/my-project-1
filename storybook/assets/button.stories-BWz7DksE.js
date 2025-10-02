import{j as e}from"./jsx-runtime-8QxKK14C.js";import{B as m}from"./button-DOk-dAfs.js";import{M as p}from"./mail-shDoExv7.js";import"./iframe-B2kX-glr.js";import"./index-VzR2QM6L.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./createLucideIcon-DJ_N0P9W.js";const L={title:"UI/Base/Button",component:m,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive","outline","secondary","ghost","link"],description:"버튼의 시각적 스타일을 설정합니다."},size:{control:{type:"select"},options:["default","sm","lg","icon"],description:"버튼의 크기를 설정합니다."},asChild:{control:{type:"boolean"},description:"true일 경우, 자식 컴포넌트의 props를 상속받아 렌더링합니다."},children:{control:"text",description:"버튼 내부에 표시될 내용입니다."},disabled:{control:"boolean",description:"버튼을 비활성화 상태로 만듭니다."}},parameters:{layout:"centered",docs:{description:{component:'## Button\n\n클릭 가능한 버튼을 표시하여 사용자가 액션을 트리거할 수 있도록 합니다.\n\n### 주요 기능\n- **다양한 변형:** `variant` prop을 통해 `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` 등 다양한 스타일을 지원합니다.\n- **크기 조절:** `size` prop으로 `default`, `sm`, `lg`, `icon` 크기를 선택할 수 있습니다.\n- **비활성화 상태:** `disabled` prop을 통해 버튼을 비활성화할 수 있습니다.\n- **아이콘 지원:** 버튼 내부에 아이콘을 쉽게 추가할 수 있으며, 아이콘만 있는 버튼도 지원합니다.\n- **`asChild` prop:** 다른 컴포넌트(예: `<a>` 태그)의 스타일과 동작을 상속받아 렌더링할 수 있습니다.\n\n### 사용법\n```tsx\nimport { Button } from "./button";\n\n<Button variant="outline" size="lg">Click me</Button>\n```'}}}},r={args:{variant:"default",size:"default",children:"Button"}},a={args:{...r.args,variant:"destructive",children:"Destructive"}},n={args:{...r.args,variant:"outline",children:"Outline"}},s={args:{...r.args,variant:"secondary",children:"Secondary"}},t={args:{...r.args,variant:"ghost",children:"Ghost"}},o={args:{...r.args,variant:"link",children:"Link"}},i={args:{...r.args,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{}),"Login with Email"]})}},c={args:{variant:"outline",size:"icon",children:e.jsx(p,{})}},l={args:{...r.args,size:"lg",children:"Large Button"}},d={args:{...r.args,size:"sm",children:"Small Button"}},u={args:{asChild:!0,children:e.jsx("a",{href:"#",children:"Log in"})},parameters:{docs:{description:{story:"`asChild` prop을 사용하면 `Button`이 자식 요소(이 경우 `<a>` 태그)를 래핑하여 스타일을 적용합니다. 렌더링된 HTML은 `<a>` 태그가 되지만 버튼 스타일을 갖게 됩니다."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "default",
    children: "Button"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "destructive",
    children: "Destructive"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "outline",
    children: "Outline"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "secondary",
    children: "Secondary"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "ghost",
    children: "Ghost"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: "link",
    children: "Link"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <>
        <Mail />
        Login with Email
      </>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "icon",
    children: <Mail />
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "lg",
    children: "Large Button"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: "sm",
    children: "Small Button"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="#">Log in</a>
  },
  parameters: {
    docs: {
      description: {
        story: "\`asChild\` prop을 사용하면 \`Button\`이 자식 요소(이 경우 \`<a>\` 태그)를 래핑하여 스타일을 적용합니다. 렌더링된 HTML은 \`<a>\` 태그가 되지만 버튼 스타일을 갖게 됩니다."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};export{u as AsChild,r as Default,a as Destructive,t as Ghost,c as IconOnly,l as Large,o as Link,n as Outline,s as Secondary,d as Small,i as WithIcon,L as default};
