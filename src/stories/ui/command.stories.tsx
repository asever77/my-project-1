import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { 
  Search, Plus, Settings, Users, FileText, Folder, Image,
  Mail, Calendar, BookOpen, Calculator, Camera, Clock,
  Download, Upload, Edit, Trash2, Copy, Scissors, Palette,
  Home, User, Bell, Shield, HelpCircle, ExternalLink,
  Zap, Star, Heart, Bookmark, Tag, Filter, ArrowUpDown,
  ArrowRight, Keyboard, Command as CommandIcon
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const meta: Meta<typeof Command> = {
  title: "UI/Contents/Command",
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
사용자가 빠르게 명령을 검색하고 실행할 수 있는 Command Palette 컴포넌트입니다. cmdk 라이브러리를 기반으로 구축되었습니다.

## 주요 기능
- **빠른 검색**: 키워드로 명령어와 기능을 즉시 찾기
- **키보드 네비게이션**: 화살표 키와 Enter로 완전한 키보드 제어
- **그룹핑**: 관련 명령어들을 카테고리별로 구성
- **단축키 표시**: 각 명령어의 키보드 단축키 안내
- **퍼지 검색**: 정확하지 않은 검색어도 스마트하게 매칭
- **접근성**: 스크린 리더와 키보드 사용자 완벽 지원
- **커스터마이징**: 아이콘, 라벨, 그룹 자유 설정

## 구성 요소
- **Command**: 메인 명령 팔레트 컨테이너
- **CommandDialog**: 모달 형태의 명령 팔레트
- **CommandInput**: 검색 입력 필드
- **CommandList**: 명령어 목록 컨테이너
- **CommandGroup**: 명령어 그룹 (카테고리)
- **CommandItem**: 개별 명령어 항목
- **CommandSeparator**: 그룹 간 구분선
- **CommandShortcut**: 키보드 단축키 표시
- **CommandEmpty**: 검색 결과 없음 상태

## 사용법
\`\`\`tsx
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"

// 기본 사용법
<Command>
  <CommandInput placeholder="명령어를 입력하세요..." />
  <CommandList>
    <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
    <CommandGroup heading="파일">
      <CommandItem>
        <FileText className="mr-2 h-4 w-4" />
        <span>새 파일</span>
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// 다이얼로그 형태
const [open, setOpen] = useState(false)
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="검색..." />
  <CommandList>
    {/* 명령어 항목들 */}
  </CommandList>
</CommandDialog>

// 키보드 바인딩
useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])
\`\`\`

## Props
### Command
- \`value\`: 현재 선택된 값
- \`onValueChange\`: 값 변경 핸들러
- \`filter\`: 커스텀 필터 함수
- \`shouldFilter\`: 자동 필터링 여부

### CommandDialog
- \`open\`: 다이얼로그 열림 상태
- \`onOpenChange\`: 상태 변경 핸들러
- \`title\`: 다이얼로그 제목
- \`description\`: 설명 텍스트

### CommandItem
- \`value\`: 항목 값 (검색용)
- \`onSelect\`: 선택 시 실행할 함수
- \`disabled\`: 비활성화 상태
- \`keywords\`: 추가 검색 키워드

## 접근성
- **ARIA 역할**: \`combobox\`, \`listbox\`, \`option\` 역할 제공
- **키보드 네비게이션**: 
  - \`↑↓\` 항목 간 이동
  - \`Enter\` 항목 선택
  - \`Escape\` 닫기
  - \`Tab\` 포커스 이동
- **스크린 리더**: 검색 결과와 선택 항목 명확히 안내
- **포커스 관리**: 다이얼로그 열림 시 검색 필드로 자동 포커스
- **라이브 영역**: 검색 결과 변경 시 실시간 안내

## 사용 사례
- **애플리케이션 런처**: 앱 내 모든 기능에 빠른 접근
- **파일 검색**: 프로젝트 파일과 폴더 빠른 탐색
- **명령어 실행**: 개발 도구의 명령어 팔레트
- **설정 검색**: 복잡한 설정 메뉴에서 빠른 찾기
- **문서 네비게이션**: 긴 문서에서 섹션 이동
- **연락처 검색**: 사용자나 연락처 빠른 찾기
- **작업 관리**: 할 일이나 프로젝트 빠른 전환

## 키보드 단축키
일반적인 단축키 패턴:
- \`Cmd/Ctrl + K\`: 명령 팔레트 열기
- \`Cmd/Ctrl + P\`: 파일 검색
- \`Cmd/Ctrl + Shift + P\`: 명령어 팔레트
- \`/\`: 검색 모드
- \`?\`: 도움말

## 검색 최적화
- **퍼지 매칭**: 오타나 부분 입력도 인식
- **키워드 태그**: 항목별 추가 검색어 설정
- **우선순위**: 자주 사용하는 항목 상위 노출
- **최근 사용**: 최근 선택한 항목 우선 표시
- **카테고리 필터**: 특정 그룹만 검색 가능

## 모범 사례
- 명령어에 명확하고 직관적인 이름 사용
- 아이콘으로 시각적 구분 강화
- 키보드 단축키를 일관성 있게 표시
- 그룹핑으로 관련 명령어 정리
- 빈번한 작업에는 짧은 키워드 제공
- 검색 결과 없음 상태에 대안 제시
- 로딩 상태와 에러 처리 구현
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "현재 선택된 값",
    },
    onValueChange: {
      description: "값 변경 핸들러",
    },
  },
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md max-w-[450px]">
      <CommandInput placeholder="명령어를 입력하세요..." />
      <CommandList>
        <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
        <CommandGroup heading="제안">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>일정</span>
          </CommandItem>
          <CommandItem>
            <Users className="mr-2 h-4 w-4" />
            <span>연락처</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>계산기</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="설정">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>프로필</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>설정</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: "기본 Command 컴포넌트입니다. 검색 입력과 그룹화된 명령어 목록을 보여줍니다.",
      },
    },
  },
}

export const CommandDialogStory: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }

      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])

    return (
      <div className="space-y-4">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
            를 눌러 명령 팔레트를 여세요
          </p>
          <Button onClick={() => setOpen(true)}>명령 팔레트 열기</Button>
        </div>

        <CommandDialog 
          open={open} 
          onOpenChange={setOpen}
          title="명령 팔레트"
          description="원하는 기능을 검색하고 실행하세요"
        >
          <CommandInput placeholder="기능을 검색하세요..." />
          <CommandList>
            <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
            
            <CommandGroup heading="파일">
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>새 파일</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Folder className="mr-2 h-4 w-4" />
                <span>새 폴더</span>
                <CommandShortcut>⌘⇧N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Download className="mr-2 h-4 w-4" />
                <span>다운로드</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="편집">
              <CommandItem>
                <Copy className="mr-2 h-4 w-4" />
                <span>복사</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Scissors className="mr-2 h-4 w-4" />
                <span>잘라내기</span>
                <CommandShortcut>⌘X</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>편집</span>
                <CommandShortcut>⌘E</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>삭제</span>
                <CommandShortcut>Del</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="도구">
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>계산기</span>
              </CommandItem>
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>일정</span>
              </CommandItem>
              <CommandItem>
                <Camera className="mr-2 h-4 w-4" />
                <span>스크린샷</span>
                <CommandShortcut>⌘⇧4</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="설정">
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>환경설정</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>알림 설정</span>
              </CommandItem>
              <CommandItem>
                <Shield className="mr-2 h-4 w-4" />
                <span>보안 설정</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "모달 다이얼로그 형태의 Command 팔레트입니다. Cmd+K로 열 수 있습니다.",
      },
    },
  },
}

export const ApplicationLauncher: Story = {
  render: () => {
    const [selectedApp, setSelectedApp] = React.useState<string>("")

    const applications = [
      {
        category: "생산성",
        apps: [
          { name: "문서 작성기", icon: FileText, description: "텍스트 문서 작성 및 편집", shortcut: "⌘1" },
          { name: "스프레드시트", icon: Calculator, description: "표 계산 및 데이터 분석", shortcut: "⌘2" },
          { name: "프레젠테이션", icon: BookOpen, description: "슬라이드 프레젠테이션 제작", shortcut: "⌘3" },
          { name: "일정 관리", icon: Calendar, description: "일정 및 회의 관리", shortcut: "⌘4" },
        ]
      },
      {
        category: "커뮤니케이션",
        apps: [
          { name: "이메일", icon: Mail, description: "메일 송수신 및 관리", shortcut: "⌘M" },
          { name: "메신저", icon: Users, description: "실시간 채팅 및 화상 통화", shortcut: "⌘T" },
          { name: "화상 회의", icon: Camera, description: "온라인 미팅 및 웨비나", shortcut: "⌘V" },
        ]
      },
      {
        category: "디자인",
        apps: [
          { name: "이미지 편집기", icon: Image, description: "사진 편집 및 보정", shortcut: "⌘I" },
          { name: "벡터 디자인", icon: Palette, description: "로고 및 일러스트 제작", shortcut: "⌘R" },
          { name: "UI 디자인", icon: Star, description: "웹 및 앱 인터페이스 디자인", shortcut: "⌘U" },
        ]
      }
    ]

    return (
      <div className="w-[500px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CommandIcon className="h-5 w-5" />
              애플리케이션 런처
            </CardTitle>
            <CardDescription>
              원하는 앱을 검색하고 빠르게 실행하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Command 
              value={selectedApp}
              onValueChange={setSelectedApp}
              className="rounded-lg border"
            >
              <CommandInput placeholder="앱 이름을 검색하세요..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">검색 결과가 없습니다.</p>
                    <p className="text-xs text-muted-foreground mt-1">다른 키워드로 검색해보세요.</p>
                  </div>
                </CommandEmpty>
                
                {applications.map((category) => (
                  <React.Fragment key={category.category}>
                    <CommandGroup heading={category.category}>
                      {category.apps.map((app) => (
                        <CommandItem
                          key={app.name}
                          value={app.name}
                          onSelect={() => {
                            setSelectedApp(app.name)
                            // 실제 앱 실행 로직
                            console.log(`실행: ${app.name}`)
                          }}
                          className="flex items-center gap-3 py-3"
                        >
                          <app.icon className="h-8 w-8 p-1.5 bg-primary/10 rounded-md text-primary" />
                          <div className="flex-1">
                            <div className="font-medium">{app.name}</div>
                            <div className="text-xs text-muted-foreground">{app.description}</div>
                          </div>
                          <CommandShortcut>{app.shortcut}</CommandShortcut>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    <CommandSeparator />
                  </React.Fragment>
                ))}
                
                <CommandGroup heading="빠른 작업">
                  <CommandItem value="새 창">
                    <Plus className="mr-2 h-4 w-4" />
                    <span>새 창 열기</span>
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="전체화면">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <span>전체화면 모드</span>
                    <CommandShortcut>F11</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="도움말">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>도움말</span>
                    <CommandShortcut>F1</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {selectedApp && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="text-sm">
                  <span className="font-medium">선택된 앱:</span> {selectedApp}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "애플리케이션 런처 형태의 Command입니다. 앱을 카테고리별로 구분하고 상세 설명을 제공합니다.",
      },
    },
  },
}

export const FileExplorer: Story = {
  render: () => {
    const [currentPath, setCurrentPath] = React.useState("/")
    const [selectedFile, setSelectedFile] = React.useState("")

    const files = [
      { name: "Documents", type: "folder", path: "/Documents", size: "-", modified: "오늘" },
      { name: "Pictures", type: "folder", path: "/Pictures", size: "-", modified: "어제" },
      { name: "Downloads", type: "folder", path: "/Downloads", size: "-", modified: "2일 전" },
      { name: "project.pdf", type: "file", path: "/project.pdf", size: "2.4 MB", modified: "1시간 전" },
      { name: "report.docx", type: "file", path: "/report.docx", size: "856 KB", modified: "3시간 전" },
      { name: "presentation.pptx", type: "file", path: "/presentation.pptx", size: "4.2 MB", modified: "5시간 전" },
      { name: "data.xlsx", type: "file", path: "/data.xlsx", size: "1.8 MB", modified: "어제" },
      { name: "image.png", type: "file", path: "/image.png", size: "524 KB", modified: "2일 전" },
    ]

    const getFileIcon = (type: string, name: string) => {
      if (type === "folder") return Folder
      
      const extension = name.split('.').pop()?.toLowerCase()
      switch (extension) {
        case 'pdf': return FileText
        case 'docx': case 'doc': return BookOpen
        case 'pptx': case 'ppt': return BookOpen
        case 'xlsx': case 'xls': return Calculator
        case 'png': case 'jpg': case 'jpeg': case 'gif': return Image
        default: return FileText
      }
    }

    return (
      <div className="w-[600px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              파일 탐색기
            </CardTitle>
            <CardDescription>
              파일과 폴더를 빠르게 검색하고 이동하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* 경로 표시 */}
            <div className="mb-4 flex items-center gap-2 text-sm">
              <Home className="h-4 w-4" />
              <span>현재 위치:</span>
              <Badge variant="secondary">{currentPath}</Badge>
            </div>

            <Command 
              value={selectedFile}
              onValueChange={setSelectedFile}
              className="rounded-lg border"
            >
              <CommandInput placeholder="파일명 또는 폴더명으로 검색..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <Folder className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">파일을 찾을 수 없습니다.</p>
                  </div>
                </CommandEmpty>
                
                <CommandGroup heading="폴더">
                  {files.filter(f => f.type === "folder").map((folder) => {
                    const IconComponent = getFileIcon(folder.type, folder.name)
                    return (
                      <CommandItem
                        key={folder.path}
                        value={folder.name}
                        onSelect={() => {
                          setCurrentPath(folder.path)
                          setSelectedFile(folder.name)
                        }}
                        className="flex items-center gap-3 py-2"
                      >
                        <IconComponent className="h-5 w-5 text-blue-500" />
                        <div className="flex-1">
                          <div className="font-medium">{folder.name}</div>
                          <div className="text-xs text-muted-foreground">폴더 • {folder.modified}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="파일">
                  {files.filter(f => f.type === "file").map((file) => {
                    const IconComponent = getFileIcon(file.type, file.name)
                    return (
                      <CommandItem
                        key={file.path}
                        value={file.name}
                        onSelect={() => {
                          setSelectedFile(file.name)
                          // 파일 열기 로직
                        }}
                        className="flex items-center gap-3 py-2"
                      >
                        <IconComponent className="h-5 w-5 text-green-500" />
                        <div className="flex-1">
                          <div className="font-medium">{file.name}</div>
                          <div className="text-xs text-muted-foreground">{file.size} • {file.modified}</div>
                        </div>
                        <CommandShortcut>Enter</CommandShortcut>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="빠른 작업">
                  <CommandItem value="새 폴더">
                    <Plus className="mr-2 h-4 w-4" />
                    <span>새 폴더 만들기</span>
                    <CommandShortcut>⌘⇧N</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="업로드">
                    <Upload className="mr-2 h-4 w-4" />
                    <span>파일 업로드</span>
                    <CommandShortcut>⌘U</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="새로고침">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>새로고침</span>
                    <CommandShortcut>F5</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {selectedFile && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="text-sm space-y-1">
                  <div><span className="font-medium">선택됨:</span> {selectedFile}</div>
                  <div><span className="font-medium">현재 위치:</span> {currentPath}</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "파일 탐색기 형태의 Command입니다. 폴더와 파일을 구분하여 표시하고 빠른 작업을 제공합니다.",
      },
    },
  },
}

export const TaskManager: Story = {
  render: () => {
    const [selectedTask, setSelectedTask] = React.useState("")
    const [tasks, setTasks] = React.useState([
      { id: "1", title: "프로젝트 기획서 작성", status: "진행중", priority: "높음", due: "오늘", project: "웹사이트 리뉴얼" },
      { id: "2", title: "디자인 시스템 구축", status: "대기", priority: "중간", due: "내일", project: "웹사이트 리뉴얼" },
      { id: "3", title: "API 문서 검토", status: "완료", priority: "낮음", due: "어제", project: "백엔드 개발" },
      { id: "4", title: "사용자 테스트 진행", status: "진행중", priority: "높음", due: "이번 주", project: "모바일 앱" },
      { id: "5", title: "성능 최적화", status: "대기", priority: "중간", due: "다음 주", project: "백엔드 개발" },
      { id: "6", title: "배포 준비", status: "검토", priority: "높음", due: "다음 주", project: "웹사이트 리뉴얼" },
    ])

    const getStatusIcon = (status: string) => {
      switch (status) {
        case "완료": return <div className="w-2 h-2 bg-green-500 rounded-full" />
        case "진행중": return <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        case "대기": return <div className="w-2 h-2 bg-yellow-500 rounded-full" />
        case "검토": return <div className="w-2 h-2 bg-purple-500 rounded-full" />
        default: return <div className="w-2 h-2 bg-gray-400 rounded-full" />
      }
    }

    const getPriorityColor = (priority: string) => {
      switch (priority) {
        case "높음": return "text-red-500"
        case "중간": return "text-yellow-500"
        case "낮음": return "text-green-500"
        default: return "text-gray-500"
      }
    }

    return (
      <div className="w-[700px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              작업 관리자
            </CardTitle>
            <CardDescription>
              작업을 검색하고 빠르게 전환하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Command 
              value={selectedTask}
              onValueChange={setSelectedTask}
              className="rounded-lg border"
            >
              <CommandInput placeholder="작업명, 프로젝트명, 상태로 검색..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">검색된 작업이 없습니다.</p>
                  </div>
                </CommandEmpty>
                
                <CommandGroup heading="오늘 할 일">
                  {tasks.filter(t => t.due === "오늘").map((task) => (
                    <CommandItem
                      key={task.id}
                      value={`${task.title} ${task.project} ${task.status}`}
                      onSelect={() => setSelectedTask(task.id)}
                      className="flex items-center gap-3 py-3"
                    >
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <div className="font-medium">{task.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span>{task.project}</span>
                          <span>•</span>
                          <span className={getPriorityColor(task.priority)}>{task.priority} 우선순위</span>
                        </div>
                      </div>
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>
                        {task.status}
                      </Badge>
                    </CommandItem>
                  ))}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="이번 주">
                  {tasks.filter(t => t.due === "이번 주" || t.due === "내일").map((task) => (
                    <CommandItem
                      key={task.id}
                      value={`${task.title} ${task.project} ${task.status}`}
                      onSelect={() => setSelectedTask(task.id)}
                      className="flex items-center gap-3 py-3"
                    >
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <div className="font-medium">{task.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span>{task.project}</span>
                          <span>•</span>
                          <span>{task.due}</span>
                          <span>•</span>
                          <span className={getPriorityColor(task.priority)}>{task.priority}</span>
                        </div>
                      </div>
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>
                        {task.status}
                      </Badge>
                    </CommandItem>
                  ))}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="기타">
                  {tasks.filter(t => !["오늘", "내일", "이번 주"].includes(t.due)).map((task) => (
                    <CommandItem
                      key={task.id}
                      value={`${task.title} ${task.project} ${task.status}`}
                      onSelect={() => setSelectedTask(task.id)}
                      className="flex items-center gap-3 py-3"
                    >
                      {getStatusIcon(task.status)}
                      <div className="flex-1">
                        <div className="font-medium">{task.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span>{task.project}</span>
                          <span>•</span>
                          <span>{task.due}</span>
                        </div>
                      </div>
                      <Badge variant={task.status === "완료" ? "default" : "secondary"}>
                        {task.status}
                      </Badge>
                    </CommandItem>
                  ))}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="빠른 작업">
                  <CommandItem value="새 작업">
                    <Plus className="mr-2 h-4 w-4" />
                    <span>새 작업 만들기</span>
                    <CommandShortcut>⌘T</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="필터">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>작업 필터</span>
                    <CommandShortcut>⌘F</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="정렬">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <span>정렬 옵션</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {selectedTask && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                {(() => {
                  const task = tasks.find(t => t.id === selectedTask)
                  if (!task) return null
                  
                  return (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(task.status)}
                        <span className="font-medium">{task.title}</span>
                        <Badge variant="outline">{task.status}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>프로젝트: {task.project}</div>
                        <div>마감일: {task.due}</div>
                        <div>우선순위: <span className={getPriorityColor(task.priority)}>{task.priority}</span></div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "작업 관리자 형태의 Command입니다. 작업 상태, 우선순위, 마감일별로 구분하여 표시합니다.",
      },
    },
  },
}

export const NavigationMenu: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = React.useState("")
    
    const menuItems = [
      {
        category: "메인 메뉴",
        items: [
          { name: "대시보드", icon: Home, path: "/dashboard", shortcut: "⌘1", badge: null },
          { name: "프로젝트", icon: Folder, path: "/projects", shortcut: "⌘2", badge: "12" },
          { name: "작업", icon: Zap, path: "/tasks", shortcut: "⌘3", badge: "5" },
          { name: "팀", icon: Users, path: "/team", shortcut: "⌘4", badge: null },
          { name: "일정", icon: Calendar, path: "/calendar", shortcut: "⌘5", badge: "3" },
        ]
      },
      {
        category: "도구",
        items: [
          { name: "파일 관리", icon: FileText, path: "/files", shortcut: "⌘F", badge: null },
          { name: "채팅", icon: Mail, path: "/chat", shortcut: "⌘C", badge: "새 메시지" },
          { name: "알림", icon: Bell, path: "/notifications", shortcut: "⌘N", badge: "2" },
          { name: "즐겨찾기", icon: Star, path: "/favorites", shortcut: "⌘B", badge: null },
        ]
      },
      {
        category: "설정",
        items: [
          { name: "계정 설정", icon: User, path: "/profile", shortcut: "⌘P", badge: null },
          { name: "환경 설정", icon: Settings, path: "/settings", shortcut: "⌘,", badge: null },
          { name: "도움말", icon: HelpCircle, path: "/help", shortcut: "⌘?", badge: null },
        ]
      }
    ]

    return (
      <div className="w-[500px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Keyboard className="h-5 w-5" />
              빠른 네비게이션
            </CardTitle>
            <CardDescription>
              페이지와 기능에 빠르게 이동하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Command 
              value={selectedItem}
              onValueChange={setSelectedItem}
              className="rounded-lg border"
            >
              <CommandInput placeholder="페이지나 기능을 검색하세요..." />
              <CommandList>
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">일치하는 항목이 없습니다.</p>
                  </div>
                </CommandEmpty>
                
                {menuItems.map((group) => (
                  <React.Fragment key={group.category}>
                    <CommandGroup heading={group.category}>
                      {group.items.map((item) => (
                        <CommandItem
                          key={item.path}
                          value={`${item.name} ${item.path}`}
                          onSelect={() => {
                            setSelectedItem(item.path)
                            // 네비게이션 로직
                            console.log(`네비게이션: ${item.path}`)
                          }}
                          className="flex items-center gap-3 py-2"
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="flex-1">{item.name}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {item.badge}
                            </Badge>
                          )}
                          <CommandShortcut>{item.shortcut}</CommandShortcut>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    <CommandSeparator />
                  </React.Fragment>
                ))}
                
                <CommandGroup heading="빠른 작업">
                  <CommandItem value="검색">
                    <Search className="mr-2 h-4 w-4" />
                    <span>전체 검색</span>
                    <CommandShortcut>/</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="명령">
                    <CommandIcon className="mr-2 h-4 w-4" />
                    <span>명령 팔레트</span>
                    <CommandShortcut>⌘K</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="테마">
                    <Palette className="mr-2 h-4 w-4" />
                    <span>테마 전환</span>
                    <CommandShortcut>⌘⇧T</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {selectedItem && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="text-sm">
                  <span className="font-medium">선택된 경로:</span> {selectedItem}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "네비게이션 메뉴 형태의 Command입니다. 애플리케이션의 모든 페이지와 기능에 빠르게 접근할 수 있습니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => {
    const [announcements, setAnnouncements] = React.useState<string[]>([])
    const [selectedCommand, setSelectedCommand] = React.useState("")
    
    const addAnnouncement = (message: string) => {
      setAnnouncements(prev => [...prev, message])
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1))
      }, 3000)
    }

    const accessibilityCommands = [
      {
        name: "고대비 모드 활성화",
        description: "화면의 대비를 높여 가독성을 향상시킵니다",
        icon: Zap,
        shortcut: "⌘⇧H"
      },
      {
        name: "스크린 리더 지원",
        description: "스크린 리더 사용자를 위한 추가 정보를 제공합니다",
        icon: User,
        shortcut: "⌘⇧S"
      },
      {
        name: "키보드 네비게이션 가이드",
        description: "키보드만으로 모든 기능에 접근하는 방법을 안내합니다",
        icon: Keyboard,
        shortcut: "⌘⇧K"
      },
      {
        name: "폰트 크기 증가",
        description: "모든 텍스트 크기를 20% 증가시킵니다",
        icon: Zap,
        shortcut: "⌘+"
      },
      {
        name: "포커스 표시 강화",
        description: "포커스된 요소를 더 명확하게 표시합니다",
        icon: Star,
        shortcut: "⌘⇧F"
      }
    ]

    return (
      <div className="space-y-6 w-[600px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Command 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">↑↓</kbd>로 명령어 간 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로 명령어 실행</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 팔레트 닫기</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 포커스 이동</li>
            <li>스크린 리더가 명령어 정보와 상태 안내</li>
            <li>ARIA 라이브 영역으로 검색 결과 변경 알림</li>
          </ul>
        </div>

        {/* 라이브 영역 */}
        <div 
          aria-live="polite" 
          aria-label="명령 팔레트 상태 안내"
          className="sr-only"
        >
          {announcements.map((announcement, index) => (
            <div key={index}>{announcement}</div>
          ))}
        </div>

        {/* 접근성 명령 팔레트 */}
        <Card>
          <CardHeader>
            <CardTitle>접근 가능한 명령 팔레트</CardTitle>
            <CardDescription>
              완전한 키보드 네비게이션과 스크린 리더 지원
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Command 
              value={selectedCommand}
              onValueChange={(value) => {
                setSelectedCommand(value)
                if (value) {
                  addAnnouncement(`${value} 명령이 선택되었습니다`)
                }
              }}
              className="rounded-lg border"
              role="combobox"
              aria-label="접근성 명령 팔레트"
            >
              <CommandInput 
                placeholder="접근성 명령을 검색하세요..." 
                aria-label="명령 검색"
                onFocus={() => addAnnouncement("명령 검색 필드가 활성화되었습니다")}
              />
              <CommandList role="listbox" aria-label="명령 목록">
                <CommandEmpty>
                  <div className="py-6 text-center">
                    <HelpCircle className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">일치하는 명령이 없습니다.</p>
                    <p className="text-xs text-muted-foreground mt-1">다른 키워드로 검색해보세요.</p>
                  </div>
                </CommandEmpty>
                
                <CommandGroup heading="접근성 도구">
                  {accessibilityCommands.map((command, index) => (
                    <CommandItem
                      key={command.name}
                      value={command.name}
                      onSelect={() => {
                        setSelectedCommand(command.name)
                        addAnnouncement(`${command.name} 명령이 실행되었습니다`)
                      }}
                      className="flex items-start gap-3 py-3"
                      role="option"
                      aria-describedby={`command-${index}-desc`}
                    >
                      <command.icon className="h-5 w-5 mt-0.5 text-primary" />
                      <div className="flex-1">
                        <div className="font-medium">{command.name}</div>
                        <div 
                          id={`command-${index}-desc`}
                          className="text-xs text-muted-foreground"
                        >
                          {command.description}
                        </div>
                      </div>
                      <CommandShortcut aria-label={`단축키: ${command.shortcut}`}>
                        {command.shortcut}
                      </CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
                
                <CommandSeparator />
                
                <CommandGroup heading="도움말">
                  <CommandItem 
                    value="키보드 단축키"
                    onSelect={() => addAnnouncement("키보드 단축키 도움말이 열렸습니다")}
                  >
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>키보드 단축키 목록</span>
                    <CommandShortcut aria-label="단축키: F1">F1</CommandShortcut>
                  </CommandItem>
                  <CommandItem 
                    value="접근성 가이드"
                    onSelect={() => addAnnouncement("접근성 가이드가 열렸습니다")}
                  >
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>접근성 사용 가이드</span>
                    <CommandShortcut aria-label="단축키: Shift F1">⇧F1</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>

            {/* 선택된 명령 표시 */}
            {selectedCommand && (
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium text-primary">활성 명령</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium">{selectedCommand}</div>
                  <div className="text-muted-foreground mt-1">
                    {accessibilityCommands.find(c => c.name === selectedCommand)?.description}
                  </div>
                </div>
              </div>
            )}

            {/* 접근성 상태 */}
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  접근성 기능 활성화됨
                </span>
              </div>
              <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                <li>• ARIA 역할과 속성 정의됨</li>
                <li>• 키보드 네비게이션 완전 지원</li>
                <li>• 스크린 리더 호환성 확보</li>
                <li>• 라이브 영역으로 상태 변경 안내</li>
                <li>• 명확한 포커스 표시</li>
                <li>• 의미있는 라벨과 설명 제공</li>
              </ul>
              
              {announcements.length > 0 && (
                <div className="mt-3 p-2 bg-green-100 dark:bg-green-900 rounded border-l-2 border-green-500">
                  <div className="text-xs font-medium text-green-700 dark:text-green-300">최근 안내:</div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    {announcements[announcements.length - 1]}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Command의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다.",
      },
    },
  },
}