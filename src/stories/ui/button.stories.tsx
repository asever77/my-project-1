import type { Meta, StoryObj } from "@storybook/react"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * ## Button
 *
 * 클릭 가능한 버튼을 표시하여 사용자가 액션을 트리거할 수 있도록 합니다.
 *
 * ### 주요 기능
 * - **다양한 변형:** `variant` prop을 통해 `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` 등 다양한 스타일을 지원합니다.
 * - **크기 조절:** `size` prop으로 `default`, `sm`, `lg`, `icon` 크기를 선택할 수 있습니다.
 * - **비활성화 상태:** `disabled` prop을 통해 버튼을 비활성화할 수 있습니다.
 * - **아이콘 지원:** 버튼 내부에 아이콘을 쉽게 추가할 수 있으며, 아이콘만 있는 버튼도 지원합니다.
 * - **`asChild` prop:** 다른 컴포넌트(예: `<a>` 태그)의 스타일과 동작을 상속받아 렌더링할 수 있습니다.
 *
 * ### 사용법
 * ```tsx
 * import { Button } from "./button";
 *
 * <Button variant="outline" size="lg">Click me</Button>
 * ```
 */
const meta: Meta<typeof Button> = {
  title: "UI/Base/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "버튼의 시각적 스타일을 설정합니다.",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "버튼의 크기를 설정합니다.",
    },
    asChild: {
      control: { type: "boolean" },
      description:
        "true일 경우, 자식 컴포넌트의 props를 상속받아 렌더링합니다.",
    },
    children: {
      control: "text",
      description: "버튼 내부에 표시될 내용입니다.",
    },
    disabled: {
      control: "boolean",
      description: "버튼을 비활성화 상태로 만듭니다.",
    },
  },
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
}

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: "destructive",
    children: "Destructive",
  },
}

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
    children: "Outline",
  },
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
    children: "Secondary",
  },
}

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
    children: "Ghost",
  },
}

export const Link: Story = {
  args: {
    ...Default.args,
    variant: "link",
    children: "Link",
  },
}

export const WithIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Mail />
        Login with Email
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <Mail />,
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
    children: "Large Button",
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
    children: "Small Button",
  },
}

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#">Log in</a>,
  },
  parameters: {
    docs: {
      description: {
        story:
          "`asChild` prop을 사용하면 `Button`이 자식 요소(이 경우 `<a>` 태그)를 래핑하여 스타일을 적용합니다. 렌더링된 HTML은 `<a>` 태그가 되지만 버튼 스타일을 갖게 됩니다.",
      },
    },
  },
}
