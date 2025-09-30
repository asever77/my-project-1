import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { 
  MessageSquare, FileText, Send, Save, Copy, Eye, EyeOff,
  AlertCircle, CheckCircle, Info, HelpCircle, User, Mail,
  Edit, Trash2, RotateCcw, Settings, Clock, Star,
  ChevronDown, ChevronUp, Maximize, Minimize, Type
} from "lucide-react"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const meta: Meta<typeof Textarea> = {
  title: "UI/Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
여러 줄의 텍스트 입력을 받는 Textarea 컴포넌트입니다. 긴 텍스트, 댓글, 메시지, 설명 등을 입력할 때 사용됩니다.

## 주요 기능
- **여러 줄 입력**: 자동 줄바꿈과 크기 조절 지원
- **크기 조절**: 사용자가 드래그로 크기 조절 가능
- **상태 관리**: default, focused, disabled, error, success 상태
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 완벽 지원
- **반응형**: 모든 화면 크기에서 적절한 크기 조정
- **키보드 네비게이션**: Tab, Enter, 화살표 키 완벽 지원
- **폼 통합**: HTML5 form validation과 완벽 호환
- **글자 수 제한**: maxLength와 실시간 카운터 지원

## 사용법
\`\`\`tsx
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// 기본 사용법
<Textarea placeholder="메시지를 입력하세요..." />

// 라벨과 함께
<div className="space-y-2">
  <Label htmlFor="message">메시지</Label>
  <Textarea 
    id="message" 
    placeholder="자세한 내용을 입력해주세요" 
  />
</div>

// 글자 수 제한
<Textarea 
  placeholder="최대 500자까지 입력 가능합니다"
  maxLength={500}
/>

// 에러 상태
<Textarea 
  placeholder="내용을 입력하세요" 
  className="border-red-500 focus:border-red-500"
  aria-invalid="true"
  aria-describedby="error-message"
/>
\`\`\`

## Props
- \`placeholder\`: 플레이스홀더 텍스트
- \`disabled\`: 비활성화 상태
- \`required\`: 필수 입력 필드
- \`rows\`: 기본 행 수 (기본값: 3)
- \`maxLength\`: 최대 글자 수
- \`className\`: 추가 CSS 클래스
- \`value\`: 제어된 컴포넌트 값
- \`onChange\`: 값 변경 이벤트 핸들러
- \`onFocus\`: 포커스 이벤트 핸들러
- \`onBlur\`: 블러 이벤트 핸들러

## 접근성
- **ARIA 라벨**: \`aria-label\` 또는 연결된 \`<label>\` 요소
- **ARIA 설명**: \`aria-describedby\`로 도움말 텍스트 연결
- **에러 상태**: \`aria-invalid\`와 \`aria-describedby\`로 에러 메시지 연결
- **키보드 네비게이션**: Tab으로 포커스 이동, Enter로 줄바꿈
- **스크린 리더**: 입력 상태, 글자 수, 요구사항을 명확히 안내

## 스타일 변형
- **기본**: 표준 테두리와 포커스 스타일
- **에러**: 빨간색 테두리와 에러 아이콘
- **성공**: 초록색 테두리와 체크 아이콘  
- **비활성화**: 회색 배경과 커서 변경
- **크기 고정**: resize-none으로 크기 조절 금지
- **자동 높이**: 내용에 따라 높이 자동 조절

## 사용 사례
- **댓글/리뷰**: 사용자 피드백 입력
- **메시지**: 긴 텍스트 메시지 작성
- **설명**: 상세 설명이나 추가 정보 입력
- **폼**: 기타 의견이나 요청사항 입력
- **에디터**: 간단한 텍스트 편집
- **피드백**: 고객 의견이나 제안사항 수집

## 모범 사례
- 적절한 placeholder로 입력 가이드 제공
- 필수 필드에는 명확한 표시 추가
- 글자 수 제한이 있는 경우 실시간 카운터 제공
- 에러 상태에서는 구체적인 오류 메시지 표시
- 긴 내용 입력 시 적절한 기본 크기 설정
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "플레이스홀더 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    required: {
      control: "boolean",
      description: "필수 입력 필드 여부",
    },
    rows: {
      control: "number",
      description: "기본 행 수",
    },
    maxLength: {
      control: "number",
      description: "최대 글자 수",
    },
  },
  render: (args) => (
    <div className="w-[400px]">
      <Textarea {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: "메시지를 입력하세요...",
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: "기본 Textarea 컴포넌트입니다. 여러 줄의 텍스트 입력을 위한 깔끔한 디자인을 제공합니다.",
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-[400px]">
      <Label htmlFor="message">메시지</Label>
      <Textarea 
        id="message" 
        placeholder="자세한 내용을 입력해주세요"
        rows={4}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Label과 함께 사용하는 Textarea입니다. 접근성을 위해 htmlFor와 id를 연결해야 합니다.",
      },
    },
  },
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6 w-[450px]">
      <div className="space-y-2">
        <Label htmlFor="small-textarea">소형 (2줄)</Label>
        <Textarea 
          id="small-textarea"
          placeholder="간단한 메모나 코멘트"
          rows={2}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="medium-textarea">중형 (4줄)</Label>
        <Textarea 
          id="medium-textarea"
          placeholder="일반적인 내용 입력"
          rows={4}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="large-textarea">대형 (6줄)</Label>
        <Textarea 
          id="large-textarea"
          placeholder="긴 내용이나 상세한 설명"
          rows={6}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="xl-textarea">특대형 (8줄)</Label>
        <Textarea 
          id="xl-textarea"
          placeholder="매우 긴 텍스트나 문서 작성"
          rows={8}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "다양한 크기의 Textarea를 보여줍니다. 용도에 따라 적절한 크기를 선택할 수 있습니다.",
      },
    },
  },
}

export const WithCharacterCount: Story = {
  render: () => {
    const [text, setText] = React.useState("")
    const [longText, setLongText] = React.useState("")
    const maxLength = 150
    const longMaxLength = 500

    return (
      <div className="space-y-6 w-[450px]">
        <div className="space-y-2">
          <Label htmlFor="char-count">
            간단한 설명 
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Textarea 
            id="char-count"
            placeholder="상품에 대한 간단한 설명을 입력하세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={maxLength}
            rows={3}
          />
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">
              필수 입력 항목입니다.
            </span>
            <span className={`${text.length > maxLength * 0.9 ? 'text-orange-500' : 'text-muted-foreground'}`}>
              {text.length}/{maxLength}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="long-char-count">상세 설명</Label>
          <Textarea 
            id="long-char-count"
            placeholder="상품의 상세한 설명, 특징, 사용법 등을 자세히 입력해주세요"
            value={longText}
            onChange={(e) => setLongText(e.target.value)}
            maxLength={longMaxLength}
            rows={6}
          />
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">
              최대한 자세하게 작성해주세요.
            </span>
            <div className="flex items-center gap-2">
              {longText.length > longMaxLength * 0.8 && (
                <Badge variant={longText.length >= longMaxLength ? "destructive" : "secondary"}>
                  {longText.length >= longMaxLength ? "한도 초과" : "거의 다참"}
                </Badge>
              )}
              <span className={`${
                longText.length >= longMaxLength ? 'text-red-500' : 
                longText.length > longMaxLength * 0.9 ? 'text-orange-500' : 'text-muted-foreground'
              }`}>
                {longText.length}/{longMaxLength}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "글자 수 제한과 실시간 카운터가 있는 Textarea입니다. 사용자에게 입력 제한을 명확히 알려줍니다.",
      },
    },
  },
}

export const ValidationStates: Story = {
  render: () => {
    const [values, setValues] = React.useState({
      validContent: "이것은 올바른 내용입니다. 충분한 길이와 적절한 내용을 담고 있습니다.",
      invalidContent: "너무 짧음",
      requiredField: "",
      successField: "완벽한 설명입니다! 이 내용은 모든 요구사항을 만족합니다."
    })

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValues(prev => ({ ...prev, [field]: e.target.value }))
    }

    return (
      <div className="space-y-6 w-[500px]">
        {/* 유효한 내용 */}
        <div className="space-y-2">
          <Label htmlFor="valid-content">유효한 설명</Label>
          <Textarea 
            id="valid-content"
            value={values.validContent}
            onChange={handleChange('validContent')}
            className="border-green-500 focus:border-green-500"
            rows={3}
          />
          <div className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span>훌륭한 설명입니다.</span>
          </div>
        </div>

        {/* 유효하지 않은 내용 */}
        <div className="space-y-2">
          <Label htmlFor="invalid-content">설명 (오류)</Label>
          <Textarea 
            id="invalid-content"
            value={values.invalidContent}
            onChange={handleChange('invalidContent')}
            className="border-red-500 focus:border-red-500"
            aria-invalid="true"
            aria-describedby="content-error"
            rows={3}
          />
          <div className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span id="content-error">최소 20자 이상 입력해주세요.</span>
          </div>
        </div>

        {/* 필수 입력 필드 */}
        <div className="space-y-2">
          <Label htmlFor="required-content">
            필수 설명 
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Textarea 
            id="required-content"
            value={values.requiredField}
            onChange={handleChange('requiredField')}
            placeholder="이 필드는 필수 입력 항목입니다"
            required
            className={values.requiredField ? "border-green-500" : "border-red-500"}
            aria-describedby="required-help"
            rows={4}
          />
          <div className="flex items-center gap-2 text-sm">
            {values.requiredField ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-green-600">필수 조건을 만족합니다.</span>
              </>
            ) : (
              <>
                <AlertCircle className="h-4 w-4 text-red-500" />
                <span id="required-help" className="text-red-600">이 필드는 필수 입력 항목입니다.</span>
              </>
            )}
          </div>
        </div>

        {/* 성공 상태 */}
        <div className="space-y-2">
          <Label htmlFor="success-content">완벽한 설명</Label>
          <Textarea 
            id="success-content"
            value={values.successField}
            onChange={handleChange('successField')}
            className="border-green-500 focus:border-green-500 bg-green-50"
            rows={3}
          />
          <div className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span>모든 요구사항을 완벽히 만족하는 설명입니다!</span>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "입력 검증 상태를 보여주는 Textarea 예시입니다. 성공, 오류, 필수 입력 등의 상태를 시각적으로 표현합니다.",
      },
    },
  },
}

export const CommentForm: Story = {
  render: () => {
    const [comment, setComment] = React.useState("")
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const maxLength = 300

    const handleSubmit = () => {
      setIsSubmitting(true)
      // 실제 제출 로직 시뮬레이션
      setTimeout(() => {
        setIsSubmitting(false)
        setComment("")
      }, 2000)
    }

    return (
      <div className="w-[500px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              댓글 작성
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="comment" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                댓글 내용
              </Label>
              <Textarea 
                id="comment"
                placeholder="댓글을 입력하세요. 건설적이고 예의 바른 의견을 남겨주세요."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength={maxLength}
                rows={4}
                disabled={isSubmitting}
              />
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  타인을 존중하는 댓글을 작성해주세요.
                </span>
                <span className={`${comment.length > maxLength * 0.9 ? 'text-orange-500' : 'text-muted-foreground'}`}>
                  {comment.length}/{maxLength}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                onClick={handleSubmit}
                disabled={!comment.trim() || isSubmitting}
                className="flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    전송 중...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    댓글 등록
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setComment("")}
                disabled={!comment || isSubmitting}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                초기화
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "댓글 작성 폼의 Textarea 사용 예시입니다. 글자 수 제한, 상태 관리, 제출 로직을 포함합니다.",
      },
    },
  },
}

export const MessageComposer: Story = {
  render: () => {
    const [message, setMessage] = React.useState("")
    const [isDraft, setIsDraft] = React.useState(false)
    const [isExpanded, setIsExpanded] = React.useState(false)

    const handleSaveDraft = () => {
      setIsDraft(true)
      setTimeout(() => setIsDraft(false), 2000)
    }

    return (
      <div className="w-[600px] space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                새 메시지 작성
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  임시저장됨
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">받는 사람</Label>
                  <input 
                    id="recipient"
                    className="w-full p-2 border rounded-md"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">제목</Label>
                  <input 
                    id="subject"
                    className="w-full p-2 border rounded-md"
                    placeholder="메시지 제목"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message-content" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  메시지 내용
                </Label>
                <Textarea 
                  id="message-content"
                  placeholder="메시지 내용을 입력하세요..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={isExpanded ? 12 : 6}
                  className="resize-none transition-all duration-200"
                />
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Ctrl+Enter로 빠르게 전송할 수 있습니다.</span>
                  <span>{message.length} 글자</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Type className="h-4 w-4 mr-2" />
                  서식
                </Button>
                <Button variant="outline" size="sm">
                  첨부파일
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline"
                  onClick={handleSaveDraft}
                  disabled={!message.trim()}
                >
                  {isDraft ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      저장됨
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      임시저장
                    </>
                  )}
                </Button>
                <Button disabled={!message.trim()}>
                  <Send className="h-4 w-4 mr-2" />
                  전송
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "메시지 작성기의 Textarea 사용 예시입니다. 확장/축소, 임시저장, 키보드 단축키 등의 기능을 포함합니다.",
      },
    },
  },
}

export const FeedbackForm: Story = {
  render: () => {
    const [feedback, setFeedback] = React.useState({
      experience: "",
      improvement: "",
      recommendation: ""
    })
    const [rating, setRating] = React.useState(0)

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFeedback(prev => ({ ...prev, [field]: e.target.value }))
    }

    return (
      <div className="w-[600px] space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              서비스 피드백
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>전반적인 만족도</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      variant="ghost"
                      size="sm"
                      onClick={() => setRating(star)}
                      className="p-1"
                    >
                      <Star 
                        className={`h-6 w-6 ${
                          star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`} 
                      />
                    </Button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {rating > 0 && `${rating}/5점`}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">
                  서비스 이용 경험을 자세히 알려주세요 
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Textarea 
                  id="experience"
                  placeholder="어떤 점이 좋았거나 아쉬웠는지 구체적으로 설명해주세요."
                  value={feedback.experience}
                  onChange={handleChange('experience')}
                  rows={4}
                  required
                />
                <p className="text-sm text-muted-foreground">
                  솔직하고 상세한 후기가 서비스 개선에 큰 도움이 됩니다.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="improvement">개선이 필요한 부분</Label>
                <Textarea 
                  id="improvement"
                  placeholder="어떤 기능이나 서비스가 개선되면 좋을지 제안해주세요."
                  value={feedback.improvement}
                  onChange={handleChange('improvement')}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recommendation">추천 의사</Label>
                <Textarea 
                  id="recommendation"
                  placeholder="다른 사람에게 이 서비스를 추천하시겠습니까? 그 이유는 무엇인가요?"
                  value={feedback.recommendation}
                  onChange={handleChange('recommendation')}
                  rows={3}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4" />
                <span>제출된 피드백은 서비스 개선을 위해서만 사용됩니다.</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">나중에 작성</Button>
                <Button disabled={!feedback.experience.trim() || rating === 0}>
                  피드백 제출
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "피드백 폼의 Textarea 사용 예시입니다. 여러 입력 필드와 평점 시스템이 결합된 복합적인 폼입니다.",
      },
    },
  },
}

export const DisabledStates: Story = {
  render: () => (
    <div className="space-y-6 w-[450px]">
      <div className="space-y-2">
        <Label htmlFor="disabled-text">비활성화된 텍스트 영역</Label>
        <Textarea 
          id="disabled-text"
          disabled
          value="이 텍스트 영역은 편집할 수 없습니다. 비활성화된 상태를 보여주는 예시입니다."
          rows={3}
        />
        <p className="text-sm text-muted-foreground">
          이 필드는 현재 편집할 수 없는 상태입니다.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="readonly">읽기 전용</Label>
        <Textarea 
          id="readonly"
          readOnly
          value="이 내용은 읽기 전용입니다. 사용자가 볼 수는 있지만 수정할 수는 없습니다."
          className="bg-muted cursor-default"
          rows={3}
        />
        <p className="text-sm text-muted-foreground">
          읽기 전용 모드입니다. 내용을 확인만 할 수 있습니다.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="loading-state">로딩 상태</Label>
        <div className="relative">
          <Textarea 
            id="loading-state"
            placeholder="데이터를 불러오는 중..."
            disabled
            rows={3}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
              <span>데이터 로딩 중...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fixed-size">크기 고정</Label>
        <Textarea 
          id="fixed-size"
          placeholder="이 텍스트 영역은 크기를 조절할 수 없습니다."
          className="resize-none"
          rows={4}
        />
        <p className="text-sm text-muted-foreground">
          resize-none 클래스로 크기 조절이 비활성화되었습니다.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "비활성화, 읽기 전용, 로딩 상태, 크기 고정 등 다양한 상태의 Textarea를 보여줍니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => {
    const [formValues, setFormValues] = React.useState({
      title: "",
      description: "",
      feedback: ""
    })

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormValues(prev => ({ ...prev, [field]: e.target.value }))
    }

    return (
      <div className="space-y-6 w-[500px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Textarea 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 텍스트 영역 간 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Shift+Tab</kbd>으로 역방향 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로 줄바꿈</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+A</kbd>로 전체 선택</li>
            <li>스크린 리더가 라벨, 상태, 글자 수를 정확히 안내</li>
            <li>에러 메시지와 도움말이 적절히 연결됨</li>
          </ul>
        </div>

        <div className="space-y-4 border rounded-lg p-4">
          <div className="space-y-2">
            <Label htmlFor="a11y-title">
              제목
              <span className="text-red-500 ml-1" aria-label="필수">*</span>
            </Label>
            <Textarea 
              id="a11y-title"
              value={formValues.title}
              onChange={handleChange('title')}
              placeholder="글의 제목을 입력하세요"
              rows={2}
              required
              aria-describedby="title-help"
              aria-invalid={formValues.title.length > 0 && formValues.title.length < 5}
            />
            <p id="title-help" className="text-sm text-muted-foreground">
              5자 이상의 제목을 입력해주세요.
            </p>
            {formValues.title.length > 0 && formValues.title.length < 5 && (
              <p className="text-sm text-red-600" role="alert">
                제목은 최소 5자 이상이어야 합니다.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="a11y-description">상세 설명</Label>
            <Textarea 
              id="a11y-description"
              value={formValues.description}
              onChange={handleChange('description')}
              placeholder="자세한 내용을 입력하세요"
              rows={5}
              aria-describedby="description-help"
            />
            <p id="description-help" className="text-sm text-muted-foreground">
              독자들이 이해하기 쉽도록 자세히 작성해주세요.
            </p>
          </div>

          <fieldset className="space-y-2">
            <legend className="text-sm font-medium">추가 의견</legend>
            <Textarea 
              id="a11y-feedback"
              value={formValues.feedback}
              onChange={handleChange('feedback')}
              placeholder="기타 의견이나 제안사항이 있으시면 작성해주세요"
              rows={3}
              aria-describedby="feedback-help"
            />
            <p id="feedback-help" className="text-sm text-muted-foreground">
              선택사항이지만 귀중한 의견을 듣고 싶습니다.
            </p>
          </fieldset>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1">
              제출하기
            </Button>
            <Button variant="outline" type="button">
              <HelpCircle className="h-4 w-4 mr-2" />
              도움말
            </Button>
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Textarea의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다.",
      },
    },
  },
}