import{j as e}from"./jsx-runtime-zcBydOHc.js";import{C as a}from"./calendar-BDToc2gx.js";import{r}from"./iframe-f0y5nwCv.js";import"./utils-CBfrqCZ4.js";import"./button-BFt4UOU8.js";import"./index-Bnc6pY_-.js";import"./index-CdJFUDDL.js";import"./chevron-left-gWHrOr0W.js";import"./createLucideIcon-D1NW3S5P.js";import"./chevron-right-C206LwEP.js";import"./chevron-down-sqExu2i6.js";const V={title:"UI/Forms/Calendar",component:a,parameters:{layout:"centered",docs:{description:{component:`
shadcn/ui 기반의 달력 컴포넌트입니다. react-day-picker를 기반으로 구축되었으며, 완전한 접근성과 커스터마이징을 지원합니다.

## 주요 기능
- 단일 날짜 선택
- 날짜 범위 선택
- 다중 날짜 선택
- 월/년도 드롭다운 네비게이션
- 키보드 네비게이션 및 접근성
- 완전한 테마 커스터마이징
- RTL 언어 지원

## 사용법
\`\`\`tsx
import { Calendar } from "@/components/ui/calendar"

const [date, setDate] = useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
)
\`\`\`
        `}}},tags:["autodocs"],argTypes:{showOutsideDays:{control:{type:"boolean"},description:"이전/다음 달의 날짜를 표시할지 여부",defaultValue:!0},captionLayout:{control:{type:"radio"},options:["label","dropdown","dropdown-months","dropdown-years"],description:"헤더 캡션 레이아웃",defaultValue:"label"},buttonVariant:{control:{type:"select"},options:["default","destructive","outline","secondary","ghost","link"],description:"버튼 변형",defaultValue:"ghost"},mode:{control:{type:"radio"},options:["single","multiple","range"],description:"선택 모드"},disabled:{control:{type:"boolean"},description:"비활성화 여부"},fixedWeeks:{control:{type:"boolean"},description:"항상 6주를 표시할지 여부"},numberOfMonths:{control:{type:"number",min:1,max:12},description:"표시할 월의 수",defaultValue:1}}},d={render:()=>{const[t,s]=r.useState(new Date);return e.jsx(a,{mode:"single",selected:t,onSelect:s,className:"rounded-md border"})}},o={render:()=>{const[t,s]=r.useState(new Date);return e.jsx(a,{captionLayout:"dropdown",mode:"single",selected:t,onSelect:s,className:"rounded-md border",fromYear:2020,toYear:2030})},parameters:{docs:{description:{story:"월과 년도를 드롭다운으로 선택할 수 있는 달력입니다."}}}},n={render:()=>{const[t,s]=r.useState({from:new Date(2024,11,10),to:new Date(2024,11,15)});return e.jsx(a,{mode:"range",selected:t,onSelect:s,className:"rounded-md border"})},parameters:{docs:{description:{story:"시작일과 종료일을 선택할 수 있는 범위 선택 달력입니다."}}}},c={render:()=>{const[t,s]=r.useState([new Date(2024,11,5),new Date(2024,11,10),new Date(2024,11,15)]);return e.jsx(a,{mode:"multiple",selected:t,onSelect:s,className:"rounded-md border"})},parameters:{docs:{description:{story:"여러 날짜를 동시에 선택할 수 있는 달력입니다."}}}},l={render:()=>{const[t,s]=r.useState(new Date);return e.jsx(a,{showOutsideDays:!1,mode:"single",selected:t,onSelect:s,className:"rounded-md border"})},parameters:{docs:{description:{story:"이전/다음 달의 날짜를 표시하지 않는 달력입니다."}}}},i={render:()=>{const[t,s]=r.useState(),D=[{dayOfWeek:[0,6]},new Date(2024,11,25),{from:new Date(2024,11,31),to:new Date(2025,0,2)}];return e.jsx(a,{mode:"single",selected:t,onSelect:s,disabled:D,className:"rounded-md border"})},parameters:{docs:{description:{story:"주말과 특정 날짜가 비활성화된 달력입니다."}}}},m={render:()=>{const[t,s]=r.useState({from:new Date(2024,11,10),to:new Date(2025,0,15)});return e.jsx(a,{numberOfMonths:2,mode:"range",selected:t,onSelect:s,className:"rounded-md border"})},parameters:{docs:{description:{story:"두 개의 월을 동시에 표시하는 달력입니다. 범위 선택에 유용합니다."}}}},u={render:()=>{const[t,s]=r.useState(new Date);return e.jsx(a,{fixedWeeks:!0,mode:"single",selected:t,onSelect:s,className:"rounded-md border"})},parameters:{docs:{description:{story:"항상 6주를 표시하여 달력의 높이를 일정하게 유지합니다."}}}},p={render:()=>{const[t,s]=r.useState(new Date),[D,x]=r.useState(new Date);return e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Default"}),e.jsx(a,{buttonVariant:"default",mode:"single",selected:t,onSelect:s,className:"rounded-md border"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Outline"}),e.jsx(a,{buttonVariant:"outline",mode:"single",selected:D,onSelect:x,className:"rounded-md border"})]})]})},parameters:{docs:{description:{story:"다양한 버튼 변형을 적용한 달력입니다."}}}},g={render:()=>{const[t,s]=r.useState(new Date);return e.jsx(a,{captionLayout:"dropdown",mode:"single",selected:t,onSelect:s,className:"rounded-xl border-2 border-blue-200 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50",classNames:{day:"hover:bg-blue-100 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white",today:"bg-blue-200 text-blue-900 font-bold"},fromYear:2020,toYear:2030})},parameters:{docs:{description:{story:"커스텀 스타일과 클래스를 적용한 달력입니다."}}}},b={render:()=>{const[t,s]=r.useState(new Date);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsx("p",{children:e.jsx("strong",{children:"키보드 네비게이션:"})}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mt-2",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-1 py-0.5 bg-gray-100 rounded text-xs",children:"Tab"})," - 포커스 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-1 py-0.5 bg-gray-100 rounded text-xs",children:"Enter/Space"})," - 날짜 선택"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-1 py-0.5 bg-gray-100 rounded text-xs",children:"Arrow Keys"})," - 날짜 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-1 py-0.5 bg-gray-100 rounded text-xs",children:"Page Up/Down"})," - 월 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-1 py-0.5 bg-gray-100 rounded text-xs",children:"Home/End"})," - 주의 시작/끝으로 이동"]})]})]}),e.jsx(a,{mode:"single",selected:t,onSelect:s,className:"rounded-md border focus-within:ring-2 focus-within:ring-blue-500"})]})},parameters:{docs:{description:{story:"완전한 키보드 네비게이션과 접근성을 지원하는 달력입니다."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar captionLayout="dropdown" mode="single" selected={date} onSelect={setDate} className="rounded-md border" fromYear={2020} toYear={2030} />;
  },
  parameters: {
    docs: {
      description: {
        story: '월과 년도를 드롭다운으로 선택할 수 있는 달력입니다.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<any>({
      from: new Date(2024, 11, 10),
      to: new Date(2024, 11, 15)
    });
    return <Calendar mode="range" selected={range} onSelect={setRange} className="rounded-md border" />;
  },
  parameters: {
    docs: {
      description: {
        story: '시작일과 종료일을 선택할 수 있는 범위 선택 달력입니다.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([new Date(2024, 11, 5), new Date(2024, 11, 10), new Date(2024, 11, 15)]);
    return <Calendar mode="multiple" selected={dates} onSelect={setDates} className="rounded-md border" />;
  },
  parameters: {
    docs: {
      description: {
        story: '여러 날짜를 동시에 선택할 수 있는 달력입니다.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar showOutsideDays={false} mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  },
  parameters: {
    docs: {
      description: {
        story: '이전/다음 달의 날짜를 표시하지 않는 달력입니다.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>();

    // 주말과 특정 날짜 비활성화
    const disabledDays = [{
      dayOfWeek: [0, 6]
    },
    // 일요일과 토요일
    new Date(2024, 11, 25),
    // 크리스마스
    {
      from: new Date(2024, 11, 31),
      to: new Date(2025, 0, 2)
    } // 신정 연휴
    ];
    return <Calendar mode="single" selected={date} onSelect={setDate} disabled={disabledDays} className="rounded-md border" />;
  },
  parameters: {
    docs: {
      description: {
        story: '주말과 특정 날짜가 비활성화된 달력입니다.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<any>({
      from: new Date(2024, 11, 10),
      to: new Date(2025, 0, 15)
    });
    return <Calendar numberOfMonths={2} mode="range" selected={range} onSelect={setRange} className="rounded-md border" />;
  },
  parameters: {
    docs: {
      description: {
        story: '두 개의 월을 동시에 표시하는 달력입니다. 범위 선택에 유용합니다.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar fixedWeeks mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  },
  parameters: {
    docs: {
      description: {
        story: '항상 6주를 표시하여 달력의 높이를 일정하게 유지합니다.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>(new Date());
    const [date2, setDate2] = useState<Date | undefined>(new Date());
    return <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <Calendar buttonVariant="default" mode="single" selected={date1} onSelect={setDate1} className="rounded-md border" />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Outline</h3>
          <Calendar buttonVariant="outline" mode="single" selected={date2} onSelect={setDate2} className="rounded-md border" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 버튼 변형을 적용한 달력입니다.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar captionLayout="dropdown" mode="single" selected={date} onSelect={setDate} className="rounded-xl border-2 border-blue-200 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50" classNames={{
      day: "hover:bg-blue-100 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white",
      today: "bg-blue-200 text-blue-900 font-bold"
    }} fromYear={2020} toYear={2030} />;
  },
  parameters: {
    docs: {
      description: {
        story: '커스텀 스타일과 클래스를 적용한 달력입니다.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <div className="space-y-4">
        <div className="text-sm text-gray-600">
          <p><strong>키보드 네비게이션:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Tab</kbd> - 포커스 이동</li>
            <li><kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Enter/Space</kbd> - 날짜 선택</li>
            <li><kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Arrow Keys</kbd> - 날짜 간 이동</li>
            <li><kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Page Up/Down</kbd> - 월 이동</li>
            <li><kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Home/End</kbd> - 주의 시작/끝으로 이동</li>
          </ul>
        </div>
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border focus-within:ring-2 focus-within:ring-blue-500" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 네비게이션과 접근성을 지원하는 달력입니다.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};export{b as AccessibilityDemo,p as ButtonVariants,g as CustomStyling,n as DateRange,d as Default,m as MultipleMonths,c as MultipleSelection,i as WithDisabledDates,o as WithDropdownNavigation,u as WithFixedWeeks,l as WithoutOutsideDays,V as default};
