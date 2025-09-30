import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from '@/components/ui/menubar';
import { Badge } from '@/components/ui/badge';
import { 
  File, 
  Folder, 
  Edit, 
  Copy, 
  Scissors, 
  Clipboard,
  Save,
  Printer,
  Undo,
  Redo,
  Search,
  Settings,
  HelpCircle,
  Info,
  Download,
  Upload,
  Share,
  Trash2,
  Star,
  Heart,
  Bookmark,
  Tag,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle
} from 'lucide-react';

const meta: Meta<typeof Menubar> = {
  title: 'UI/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '데스크톱 애플리케이션 스타일의 메뉴바 컴포넌트입니다. 여러 메뉴 그룹과 하위 메뉴를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: () => (
    <div className="w-full">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>파일</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <File className="mr-2 h-4 w-4" />
              새 파일
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Folder className="mr-2 h-4 w-4" />
              열기
              <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Save className="mr-2 h-4 w-4" />
              저장
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              다른 이름으로 저장
              <MenubarShortcut>⌘⇧S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Printer className="mr-2 h-4 w-4" />
              인쇄
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger>편집</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Undo className="mr-2 h-4 w-4" />
              실행 취소
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Redo className="mr-2 h-4 w-4" />
              다시 실행
              <MenubarShortcut>⌘Y</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Scissors className="mr-2 h-4 w-4" />
              잘라내기
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Copy className="mr-2 h-4 w-4" />
              복사
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Clipboard className="mr-2 h-4 w-4" />
              붙여넣기
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger>도움말</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              도움말
            </MenubarItem>
            <MenubarItem>
              <Info className="mr-2 h-4 w-4" />
              정보
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  ),
};

export const TextEditor: Story = {
  render: () => {
    const [fontSize, setFontSize] = useState('medium');
    const [showLineNumbers, setShowLineNumbers] = useState(true);
    const [wordWrap, setWordWrap] = useState(false);

    return (
      <div className="w-full space-y-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>파일</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <File className="mr-2 h-4 w-4" />
                새 문서
                <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Folder className="mr-2 h-4 w-4" />
                문서 열기
                <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>
                  <Download className="mr-2 h-4 w-4" />
                  가져오기
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>텍스트 파일</MenubarItem>
                  <MenubarItem>Word 문서</MenubarItem>
                  <MenubarItem>PDF 파일</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <Upload className="mr-2 h-4 w-4" />
                  내보내기
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>PDF로 내보내기</MenubarItem>
                  <MenubarItem>Word로 내보내기</MenubarItem>
                  <MenubarItem>HTML로 내보내기</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                <Save className="mr-2 h-4 w-4" />
                저장
                <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Printer className="mr-2 h-4 w-4" />
                인쇄
                <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>편집</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Undo className="mr-2 h-4 w-4" />
                실행 취소
                <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Redo className="mr-2 h-4 w-4" />
                다시 실행
                <MenubarShortcut>⌘⇧Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Search className="mr-2 h-4 w-4" />
                찾기
                <MenubarShortcut>⌘F</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                찾기 및 바꾸기
                <MenubarShortcut>⌘⇧F</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>보기</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                checked={showLineNumbers}
                onCheckedChange={setShowLineNumbers}
              >
                줄 번호 표시
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={wordWrap}
                onCheckedChange={setWordWrap}
              >
                자동 줄 바꿈
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>글꼴 크기</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value={fontSize} onValueChange={setFontSize}>
                    <MenubarRadioItem value="small">작게</MenubarRadioItem>
                    <MenubarRadioItem value="medium">보통</MenubarRadioItem>
                    <MenubarRadioItem value="large">크게</MenubarRadioItem>
                    <MenubarRadioItem value="xlarge">매우 크게</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>도구</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                맞춤법 검사
                <MenubarShortcut>F7</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                단어 수 세기
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Settings className="mr-2 h-4 w-4" />
                환경 설정
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        
        <div className="p-4 border rounded-lg bg-muted/50">
          <p className="text-sm">
            현재 설정: 글꼴 크기 <Badge variant="outline">{fontSize}</Badge>,
            줄 번호 {showLineNumbers ? '표시' : '숨김'},
            자동 줄 바꿈 {wordWrap ? '켜짐' : '꺼짐'}
          </p>
        </div>
      </div>
    );
  },
};

export const MediaPlayer: Story = {
  render: () => {
    const [volume, setVolume] = useState('medium');
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);

    return (
      <div className="w-full space-y-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>파일</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <File className="mr-2 h-4 w-4" />
                미디어 열기
                <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Folder className="mr-2 h-4 w-4" />
                폴더 열기
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>
                  <Download className="mr-2 h-4 w-4" />
                  스트리밍
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>YouTube</MenubarItem>
                  <MenubarItem>Twitch</MenubarItem>
                  <MenubarItem>라디오 스트림</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                <Share className="mr-2 h-4 w-4" />
                재생목록 공유
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>재생</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Play className="mr-2 h-4 w-4" />
                재생/정지
                <MenubarShortcut>Space</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <SkipBack className="mr-2 h-4 w-4" />
                이전 트랙
                <MenubarShortcut>⌘←</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <SkipForward className="mr-2 h-4 w-4" />
                다음 트랙
                <MenubarShortcut>⌘→</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarCheckboxItem
                checked={repeat}
                onCheckedChange={setRepeat}
              >
                <Repeat className="mr-2 h-4 w-4" />
                반복 재생
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={shuffle}
                onCheckedChange={setShuffle}
              >
                <Shuffle className="mr-2 h-4 w-4" />
                랜덤 재생
              </MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>오디오</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>
                  <Volume2 className="mr-2 h-4 w-4" />
                  볼륨
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value={volume} onValueChange={setVolume}>
                    <MenubarRadioItem value="mute">
                      <VolumeX className="mr-2 h-4 w-4" />
                      음소거
                    </MenubarRadioItem>
                    <MenubarRadioItem value="low">낮음</MenubarRadioItem>
                    <MenubarRadioItem value="medium">보통</MenubarRadioItem>
                    <MenubarRadioItem value="high">높음</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>
                이퀄라이저
              </MenubarItem>
              <MenubarItem>
                오디오 효과
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>보기</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                전체 화면
                <MenubarShortcut>F11</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                미니 플레이어
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                재생목록 표시
              </MenubarItem>
              <MenubarItem>
                시각화 효과
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        
        <div className="p-4 border rounded-lg bg-muted/50">
          <div className="flex items-center gap-4 text-sm">
            <span>재생 중: 음악.mp3</span>
            <Badge variant="outline">볼륨: {volume}</Badge>
            {repeat && <Badge>반복</Badge>}
            {shuffle && <Badge>랜덤</Badge>}
          </div>
        </div>
      </div>
    );
  },
};

export const WebBrowser: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showDevTools, setShowDevTools] = useState(false);

    return (
      <div className="w-full space-y-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>파일</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <File className="mr-2 h-4 w-4" />
                새 탭
                <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                새 창
                <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                시크릿 창
                <MenubarShortcut>⌘⇧N</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Save className="mr-2 h-4 w-4" />
                페이지 저장
                <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Printer className="mr-2 h-4 w-4" />
                인쇄
                <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>편집</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Search className="mr-2 h-4 w-4" />
                페이지에서 찾기
                <MenubarShortcut>⌘F</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Copy className="mr-2 h-4 w-4" />
                복사
                <MenubarShortcut>⌘C</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <Clipboard className="mr-2 h-4 w-4" />
                붙여넣기
                <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>보기</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                새로고침
                <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                강제 새로고침
                <MenubarShortcut>⌘⇧R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarCheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
              >
                <Bookmark className="mr-2 h-4 w-4" />
                북마크 바 표시
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem>
                확대
                <MenubarShortcut>⌘+</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                축소
                <MenubarShortcut>⌘-</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                실제 크기
                <MenubarShortcut>⌘0</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>북마크</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Star className="mr-2 h-4 w-4" />
                이 페이지 북마크
                <MenubarShortcut>⌘D</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                모든 탭 북마크
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>북마크 관리자</MenubarItem>
              <MenubarItem>북마크 가져오기</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          <MenubarMenu>
            <MenubarTrigger>개발자</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                checked={showDevTools}
                onCheckedChange={setShowDevTools}
              >
                개발자 도구
                <MenubarShortcut>F12</MenubarShortcut>
              </MenubarCheckboxItem>
              <MenubarItem>
                소스 보기
                <MenubarShortcut>⌘U</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                요소 검사
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>자바스크립트 콘솔</MenubarItem>
              <MenubarItem>네트워크 탭</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        
        <div className="p-4 border rounded-lg bg-muted/50">
          <div className="flex items-center gap-4 text-sm">
            <span>현재 페이지: https://example.com</span>
            {showBookmarks && <Badge variant="outline">북마크 바 표시됨</Badge>}
            {showDevTools && <Badge>개발자 도구 열림</Badge>}
          </div>
        </div>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="w-full space-y-6">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">접근성 기능</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape, 화살표 키)</li>
          <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
          <li>• 메뉴 상태 안내</li>
          <li>• 단축키 표시 및 안내</li>
          <li>• 포커스 관리 및 순환</li>
        </ul>
      </div>
      
      <Menubar role="menubar" aria-label="메인 메뉴">
        <MenubarMenu>
          <MenubarTrigger aria-haspopup="menu" aria-expanded="false">
            파일
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem role="menuitem">
              <File className="mr-2 h-4 w-4" />
              새 문서 (스크린 리더 호환)
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem role="menuitem">
              <Folder className="mr-2 h-4 w-4" />
              파일 열기 (키보드로 탐색 가능)
              <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem role="menuitem">
              <Save className="mr-2 h-4 w-4" />
              저장하기
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger aria-haspopup="menu">
            편집
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem role="menuitem">
              <Undo className="mr-2 h-4 w-4" />
              실행 취소 (포커스 관리됨)
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem role="menuitem">
              <Copy className="mr-2 h-4 w-4" />
              복사 (ARIA 레이블 포함)
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem role="menuitem">
              <Paste className="mr-2 h-4 w-4" />
              붙여넣기
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger aria-haspopup="menu">
            접근성
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem role="menuitem">
              <Eye className="mr-2 h-4 w-4" />
              고대비 모드 토글
            </MenubarItem>
            <MenubarItem role="menuitem">
              <Volume2 className="mr-2 h-4 w-4" />
              화면 읽기 시작
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem role="menuitem">
              <Settings className="mr-2 h-4 w-4" />
              접근성 설정
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      
      <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
        💡 팁: Tab으로 메뉴 이동, Enter/Space로 열기, 화살표로 항목 이동, Escape로 닫기
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 메뉴바 데모입니다.',
      },
    },
  },
};