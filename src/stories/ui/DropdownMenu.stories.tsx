import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown,
  User, 
  Settings, 
  LogOut,
  CreditCard,
  Mail,
  MessageSquare,
  Plus,
  UserPlus,
  Users,
  Calendar,
  Archive,
  Trash2,
  Edit,
  Copy,
  Scissors,
  Clipboard,
  Download,
  Share,
  Star,
  Heart,
  Bookmark,
  Flag,
  Tag,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Check,
  Circle,
  Square
} from 'lucide-react';

const meta: Meta<typeof DropdownMenu> = {
  title: 'UI/Overlay/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '사용자가 클릭하여 열 수 있는 드롭다운 메뉴 컴포넌트입니다. 다양한 액션과 옵션을 구성할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          메뉴 열기
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>프로필</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>결제 정보</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>설정</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          편집
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          <span>편집</span>
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>복사</span>
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Scissors className="mr-2 h-4 w-4" />
          <span>잘라내기</span>
          <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Clipboard className="mr-2 h-4 w-4" />
          <span>붙여넣기</span>
          <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Archive className="mr-2 h-4 w-4" />
          <span>보관</span>
          <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>삭제</span>
          <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          고급 메뉴
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          <span>새로 만들기</span>
        </DropdownMenuItem>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>사용자 초대</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>이메일로 초대</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>메시지로 초대</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Circle className="mr-2 h-4 w-4" />
                  <span>기타 방법</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Share className="mr-2 h-4 w-4" />
              <span>공유</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>링크 복사</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>이메일로 공유</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>팀에 공유</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>설정</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithCheckboxes: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showReading, setShowReading] = useState(false);
    const [showPeople, setShowPeople] = useState(true);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            보기 옵션
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>패널 표시</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            <Bookmark className="mr-2 h-4 w-4" />
            북마크 바
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showReading}
            onCheckedChange={setShowReading}
          >
            <Square className="mr-2 h-4 w-4" />
            읽기 목록
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPeople}
            onCheckedChange={setShowPeople}
          >
            <Users className="mr-2 h-4 w-4" />
            사람들
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>더 많은 설정</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = useState('bottom');

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            패널 위치: {position === 'top' ? '상단' : position === 'bottom' ? '하단' : position === 'right' ? '우측' : '좌측'}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>패널 위치</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">상단</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">하단</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">우측</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left">좌측</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>기타 설정</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const ContextMenu: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg bg-muted/50">
        <p className="text-sm text-muted-foreground mb-2">
          우클릭으로 컨텍스트 메뉴를 열 수 있는 카드입니다.
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              <span>편집</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>복제</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star className="mr-2 h-4 w-4" />
              <span>즐겨찾기 추가</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Share className="mr-2 h-4 w-4" />
              <span>공유</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>다운로드</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              <span>삭제</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
};

export const TableActions: Story = {
  render: () => {
    const users = [
      { id: 1, name: '김철수', email: 'kim@example.com', role: '관리자' },
      { id: 2, name: '이영희', email: 'lee@example.com', role: '편집자' },
      { id: 3, name: '박민수', email: 'park@example.com', role: '사용자' },
    ];

    return (
      <div className="space-y-4">
        <div className="border rounded-lg">
          <div className="p-4 border-b">
            <h3 className="font-semibold">사용자 목록</h3>
          </div>
          <div className="divide-y">
            {users.map((user) => (
              <div key={user.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={user.role === '관리자' ? 'default' : 'secondary'}>
                    {user.role}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>프로필 보기</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>편집</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>이메일 보내기</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>권한 변경</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>관리자</DropdownMenuItem>
                              <DropdownMenuItem>편집자</DropdownMenuItem>
                              <DropdownMenuItem>사용자</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>사용자 삭제</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const FilterAndSort: Story = {
  render: () => {
    const [sortBy, setSortBy] = useState('name');
    const [filterBy, setFilterBy] = useState('all');

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                필터: {filterBy === 'all' ? '전체' : filterBy === 'active' ? '활성' : '비활성'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>상태별 필터</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={filterBy} onValueChange={setFilterBy}>
                <DropdownMenuRadioItem value="all">
                  <Circle className="mr-2 h-4 w-4" />
                  전체 보기
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="active">
                  <Check className="mr-2 h-4 w-4" />
                  활성 사용자만
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="inactive">
                  <Square className="mr-2 h-4 w-4" />
                  비활성 사용자만
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                정렬: {sortBy === 'name' ? '이름' : sortBy === 'date' ? '날짜' : '역할'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>정렬 기준</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="name">
                  <User className="mr-2 h-4 w-4" />
                  이름순
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="date">
                  <Calendar className="mr-2 h-4 w-4" />
                  날짜순
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="role">
                  <Tag className="mr-2 h-4 w-4" />
                  역할순
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Flag className="mr-2 h-4 w-4" />
                <span>고급 정렬</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="p-4 border rounded-lg bg-muted/50">
          <p className="text-sm">
            현재 필터: <strong>{filterBy === 'all' ? '전체' : filterBy === 'active' ? '활성' : '비활성'}</strong>
          </p>
          <p className="text-sm">
            정렬 기준: <strong>{sortBy === 'name' ? '이름' : sortBy === 'date' ? '날짜' : '역할'}</strong>
          </p>
        </div>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">접근성 기능</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape, 화살표 키)</li>
          <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
          <li>• 포커스 관리 및 순환</li>
          <li>• 단축키 표시 및 안내</li>
          <li>• 적절한 색상 대비 및 시각적 피드백</li>
        </ul>
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline"
            aria-describedby="accessibility-description"
          >
            접근성 데모 메뉴
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>접근성 데모</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>프로필 (화살표 키로 이동)</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>설정 (Enter로 선택)</span>
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Share className="mr-2 h-4 w-4" />
                <span>공유 (→키로 하위메뉴 열기)</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>이메일로 공유</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>메시지로 공유</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className="text-red-600"
            aria-describedby="logout-description"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>로그아웃 (Escape로 취소)</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <div id="accessibility-description" className="text-xs text-muted-foreground p-2 bg-muted rounded">
        💡 팁: Tab으로 메뉴 열기, 화살표 키로 항목 이동, Enter로 선택, Escape로 닫기
      </div>
      <div id="logout-description" className="sr-only">
        로그아웃 시 현재 세션이 종료됩니다
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다.',
      },
    },
  },
};