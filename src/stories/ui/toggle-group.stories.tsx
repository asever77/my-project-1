import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  Image as ImageIcon,
  Video,
  Music,
  Download,
  Upload,
  Share2,
  Copy,
  Scissors,
  Undo,
  Redo,
  Save,
  FileText,
  Folder,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  Columns,
  Rows,
  Table,
  Calendar,
  Clock,
  Map,
  MapPin,
  Star,
  Heart,
  Bookmark,
  Flag,
  Tag,
  Hash,
  AtSign,
  Settings,
  User,
  Users,
  Mail,
  Phone,
  Home,
  Building,
  Car,
  Plane,
  Ship,
  Train,
  Bike,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Zap,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Headphones,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Wifi,
  WifiOff,
  Bluetooth,
  Battery,
  BatteryLow,
  Power,
  PowerOff
} from 'lucide-react';

const meta: Meta<typeof ToggleGroup> = {
  title: 'UI/Base/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '여러 토글 버튼을 그룹으로 관리하는 컴포넌트입니다. 단일 선택 또는 다중 선택이 가능합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: '선택 방식',
      control: 'select',
      options: ['single', 'multiple'],
    },
    size: {
      description: '크기',
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    variant: {
      description: '스타일 변형',
      control: 'select',
      options: ['default', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>('bold');
    
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">기본 토글 그룹</h3>
        <div className="space-y-6">
          <div>
            <Label className="text-sm font-medium">텍스트 서식 (단일 선택)</Label>
            <ToggleGroup 
              type="single" 
              value={value} 
              onValueChange={(value) => setValue(value || '')}
              className="mt-2"
            >
              <ToggleGroupItem value="bold" aria-label="굵게">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="기울임">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="밑줄">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            <p className="text-sm text-muted-foreground mt-2">
              선택된 값: {value || '없음'}
            </p>
          </div>

          <div>
            <Label className="text-sm font-medium">텍스트 정렬</Label>
            <ToggleGroup type="single" defaultValue="left" className="mt-2">
              <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="가운데 정렬">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="양쪽 정렬">
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    );
  },
};

export const TextEditor: Story = {
  render: () => {
    const [formatting, setFormatting] = useState<string[]>(['bold']);
    const [alignment, setAlignment] = useState<string>('left');
    const [listType, setListType] = useState<string>('');
    
    return (
      <div className="w-full max-w-2xl space-y-6">
        <h3 className="text-lg font-semibold mb-4">텍스트 에디터 툴바</h3>
        
        <Card>
          <CardHeader>
            <CardTitle>리치 텍스트 에디터</CardTitle>
            <CardDescription>
              다양한 텍스트 서식 옵션을 제공하는 에디터입니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 서식 도구 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">텍스트 서식 (다중 선택)</Label>
              <ToggleGroup 
                type="multiple" 
                value={formatting} 
                onValueChange={setFormatting}
              >
                <ToggleGroupItem value="bold" aria-label="굵게">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="기울임">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="밑줄">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="code" aria-label="코드">
                  <Code className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-1">
                활성 서식: {formatting.length > 0 ? formatting.join(', ') : '없음'}
              </p>
            </div>

            {/* 정렬 도구 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">텍스트 정렬</Label>
              <ToggleGroup 
                type="single" 
                value={alignment} 
                onValueChange={(value) => setAlignment(value || 'left')}
              >
                <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="가운데 정렬">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify" aria-label="양쪽 정렬">
                  <AlignJustify className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-1">
                현재 정렬: {alignment}
              </p>
            </div>

            {/* 목록 도구 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">목록 타입</Label>
              <ToggleGroup 
                type="single" 
                value={listType} 
                onValueChange={(value) => setListType(value || '')}
              >
                <ToggleGroupItem value="bullet" aria-label="점 목록">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="numbered" aria-label="번호 목록">
                  <ListOrdered className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="quote" aria-label="인용문">
                  <Quote className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-1">
                목록 타입: {listType || '없음'}
              </p>
            </div>

            {/* 미디어 삽입 도구 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">미디어 삽입</Label>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="image" aria-label="이미지 삽입">
                  <ImageIcon className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="video" aria-label="동영상 삽입">
                  <Video className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="link" aria-label="링크 삽입">
                  <Link className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="table" aria-label="표 삽입">
                  <Table className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* 텍스트 에디터 미리보기 */}
            <div className="mt-6 p-4 border rounded-lg bg-muted/30">
              <h4 className="font-medium mb-2">미리보기</h4>
              <div 
                className={`text-sm ${alignment === 'center' ? 'text-center' : 
                  alignment === 'right' ? 'text-right' : 
                  alignment === 'justify' ? 'text-justify' : 'text-left'}`}
                style={{
                  fontWeight: formatting.includes('bold') ? 'bold' : 'normal',
                  fontStyle: formatting.includes('italic') ? 'italic' : 'normal',
                  textDecoration: formatting.includes('underline') ? 'underline' : 'none',
                  fontFamily: formatting.includes('code') ? 'monospace' : 'inherit',
                  backgroundColor: formatting.includes('code') ? '#f3f4f6' : 'transparent',
                  padding: formatting.includes('code') ? '2px 4px' : '0',
                  borderRadius: formatting.includes('code') ? '4px' : '0',
                }}
              >
                이것은 텍스트 에디터의 미리보기입니다. 
                선택한 서식 옵션들이 실시간으로 적용되어 보여집니다.
                {listType === 'bullet' && (
                  <ul className="list-disc list-inside mt-2">
                    <li>첫 번째 항목</li>
                    <li>두 번째 항목</li>
                  </ul>
                )}
                {listType === 'numbered' && (
                  <ol className="list-decimal list-inside mt-2">
                    <li>첫 번째 항목</li>
                    <li>두 번째 항목</li>
                  </ol>
                )}
                {listType === 'quote' && (
                  <blockquote className="border-l-4 border-gray-300 pl-4 mt-2 italic">
                    이것은 인용문입니다.
                  </blockquote>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const ViewOptions: Story = {
  render: () => {
    const [viewMode, setViewMode] = useState<string>('grid');
    const [sortOptions, setSortOptions] = useState<string[]>(['name']);
    const [filterOptions, setFilterOptions] = useState<string[]>([]);
    
    return (
      <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-lg font-semibold mb-4">보기 옵션 설정</h3>
        
        <Card>
          <CardHeader>
            <CardTitle>파일 탐색기 설정</CardTitle>
            <CardDescription>
              파일과 폴더를 표시하는 방식을 설정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 보기 모드 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">보기 모드</Label>
              <ToggleGroup 
                type="single" 
                value={viewMode} 
                onValueChange={(value) => setViewMode(value || 'grid')}
                size="lg"
              >
                <ToggleGroupItem value="grid" aria-label="격자 보기" className="flex flex-col gap-1 h-16 w-20">
                  <Grid className="h-5 w-5" />
                  <span className="text-xs">격자</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="목록 보기" className="flex flex-col gap-1 h-16 w-20">
                  <Rows className="h-5 w-5" />
                  <span className="text-xs">목록</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="columns" aria-label="컬럼 보기" className="flex flex-col gap-1 h-16 w-20">
                  <Columns className="h-5 w-5" />
                  <span className="text-xs">컬럼</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="table" aria-label="표 보기" className="flex flex-col gap-1 h-16 w-20">
                  <Table className="h-5 w-5" />
                  <span className="text-xs">표</span>
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-2">
                현재 보기: {viewMode}
              </p>
            </div>

            {/* 정렬 옵션 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">정렬 기준 (다중 선택)</Label>
              <ToggleGroup 
                type="multiple" 
                value={sortOptions} 
                onValueChange={setSortOptions}
                variant="outline"
              >
                <ToggleGroupItem value="name" aria-label="이름순 정렬">
                  <FileText className="h-4 w-4 mr-2" />
                  이름
                </ToggleGroupItem>
                <ToggleGroupItem value="date" aria-label="날짜순 정렬">
                  <Calendar className="h-4 w-4 mr-2" />
                  날짜
                </ToggleGroupItem>
                <ToggleGroupItem value="size" aria-label="크기순 정렬">
                  <SortAsc className="h-4 w-4 mr-2" />
                  크기
                </ToggleGroupItem>
                <ToggleGroupItem value="type" aria-label="타입순 정렬">
                  <Tag className="h-4 w-4 mr-2" />
                  타입
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-2">
                정렬 기준: {sortOptions.length > 0 ? sortOptions.join(', ') : '없음'}
              </p>
            </div>

            {/* 필터 옵션 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">파일 필터</Label>
              <ToggleGroup 
                type="multiple" 
                value={filterOptions} 
                onValueChange={setFilterOptions}
                size="sm"
              >
                <ToggleGroupItem value="documents" aria-label="문서 파일">
                  <FileText className="h-3 w-3 mr-1" />
                  문서
                </ToggleGroupItem>
                <ToggleGroupItem value="images" aria-label="이미지 파일">
                  <ImageIcon className="h-3 w-3 mr-1" />
                  이미지
                </ToggleGroupItem>
                <ToggleGroupItem value="videos" aria-label="동영상 파일">
                  <Video className="h-3 w-3 mr-1" />
                  동영상
                </ToggleGroupItem>
                <ToggleGroupItem value="music" aria-label="음악 파일">
                  <Music className="h-3 w-3 mr-1" />
                  음악
                </ToggleGroupItem>
                <ToggleGroupItem value="folders" aria-label="폴더">
                  <Folder className="h-3 w-3 mr-1" />
                  폴더
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-2">
                필터: {filterOptions.length > 0 ? filterOptions.join(', ') : '전체 표시'}
              </p>
            </div>

            {/* 미리보기 */}
            <div className="mt-6 p-4 border rounded-lg bg-muted/30">
              <h4 className="font-medium mb-3">설정 미리보기</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">보기 모드:</span>
                  <Badge variant="outline">{viewMode}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">정렬:</span>
                  {sortOptions.map(option => (
                    <Badge key={option} variant="secondary">{option}</Badge>
                  ))}
                  {sortOptions.length === 0 && <span className="text-muted-foreground">기본</span>}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">필터:</span>
                  {filterOptions.map(option => (
                    <Badge key={option} variant="default">{option}</Badge>
                  ))}
                  {filterOptions.length === 0 && <span className="text-muted-foreground">전체</span>}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const MediaPlayer: Story = {
  render: () => {
    const [playbackControls, setPlaybackControls] = useState<string[]>([]);
    const [volume, setVolume] = useState<string>('on');
    const [repeat, setRepeat] = useState<string>('');
    const [quality, setQuality] = useState<string>('hd');
    
    return (
      <div className="w-full max-w-3xl space-y-6">
        <h3 className="text-lg font-semibold mb-4">미디어 플레이어 컨트롤</h3>
        
        <Card>
          <CardHeader>
            <CardTitle>동영상 플레이어</CardTitle>
            <CardDescription>
              동영상 재생과 관련된 모든 컨트롤을 설정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 재생 컨트롤 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">재생 컨트롤 (다중 선택)</Label>
              <ToggleGroup 
                type="multiple" 
                value={playbackControls} 
                onValueChange={setPlaybackControls}
                className="flex-wrap"
              >
                <ToggleGroupItem value="play" aria-label="재생/일시정지">
                  <Play className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="previous" aria-label="이전">
                  <SkipBack className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="next" aria-label="다음">
                  <SkipForward className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="shuffle" aria-label="셔플">
                  <Shuffle className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="fullscreen" aria-label="전체화면">
                  <Monitor className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* 음량 컨트롤 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">음량 설정</Label>
              <ToggleGroup 
                type="single" 
                value={volume} 
                onValueChange={(value) => setVolume(value || 'on')}
              >
                <ToggleGroupItem value="off" aria-label="음소거">
                  <VolumeX className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="on" aria-label="음량 켜기">
                  <Volume2 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="headphones" aria-label="헤드폰 모드">
                  <Headphones className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* 반복 설정 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">반복 모드</Label>
              <ToggleGroup 
                type="single" 
                value={repeat} 
                onValueChange={(value) => setRepeat(value || '')}
                variant="outline"
              >
                <ToggleGroupItem value="none" aria-label="반복 안함">
                  없음
                </ToggleGroupItem>
                <ToggleGroupItem value="one" aria-label="한 곡 반복">
                  <Repeat className="h-4 w-4 mr-2" />
                  한 곡
                </ToggleGroupItem>
                <ToggleGroupItem value="all" aria-label="전체 반복">
                  <Repeat className="h-4 w-4 mr-2" />
                  전체
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* 화질 설정 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">재생 화질</Label>
              <ToggleGroup 
                type="single" 
                value={quality} 
                onValueChange={(value) => setQuality(value || 'hd')}
                size="sm"
              >
                <ToggleGroupItem value="sd" aria-label="SD 화질">
                  480p
                </ToggleGroupItem>
                <ToggleGroupItem value="hd" aria-label="HD 화질">
                  720p
                </ToggleGroupItem>
                <ToggleGroupItem value="fhd" aria-label="FHD 화질">
                  1080p
                </ToggleGroupItem>
                <ToggleGroupItem value="4k" aria-label="4K 화질">
                  4K
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* 플레이어 미리보기 */}
            <div className="mt-6 p-6 border rounded-lg bg-black text-white relative">
              <div className="aspect-video bg-gray-800 rounded flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm opacity-75">동영상 미리보기</p>
                  <p className="text-xs opacity-50">화질: {quality} • 음량: {volume}</p>
                </div>
              </div>
              
              {/* 컨트롤 바 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {playbackControls.includes('previous') && (
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                  )}
                  {playbackControls.includes('play') && (
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Pause className="h-4 w-4" />
                    </Button>
                  )}
                  {playbackControls.includes('next') && (
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  {volume === 'off' && <VolumeX className="h-4 w-4" />}
                  {volume === 'on' && <Volume2 className="h-4 w-4" />}
                  {volume === 'headphones' && <Headphones className="h-4 w-4" />}
                  
                  {repeat && <Repeat className="h-4 w-4" />}
                  {playbackControls.includes('shuffle') && <Shuffle className="h-4 w-4" />}
                  {playbackControls.includes('fullscreen') && <Monitor className="h-4 w-4" />}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [preferences, setPreferences] = useState<string[]>(['keyboard']);
    const [theme, setTheme] = useState<string>('auto');
    const [fontSize, setFontSize] = useState<string>('medium');
    
    return (
      <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, 방향키, Enter, Space)</li>
            <li>• 스크린 리더 완전 호환성 및 ARIA 레이블</li>
            <li>• 선택된 항목의 명확한 시각적 피드백</li>
            <li>• 적절한 색상 대비와 포커스 표시</li>
            <li>• 단일/다중 선택 모드 명확한 구분</li>
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              접근성 적용 토글 그룹
            </CardTitle>
            <CardDescription>
              모든 사용자가 쉽게 이용할 수 있도록 설계된 토글 그룹 컴포넌트입니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 접근성 설정 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">접근성 기능 (다중 선택)</Label>
              <ToggleGroup 
                type="multiple" 
                value={preferences} 
                onValueChange={setPreferences}
                aria-label="접근성 기능 선택"
                className="flex-wrap"
              >
                <ToggleGroupItem 
                  value="keyboard" 
                  aria-label="키보드 내비게이션 활성화"
                  aria-pressed={preferences.includes('keyboard')}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  키보드 내비게이션
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="screenReader" 
                  aria-label="스크린 리더 지원 활성화"
                  aria-pressed={preferences.includes('screenReader')}
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  스크린 리더
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="highContrast" 
                  aria-label="고대비 모드 활성화"
                  aria-pressed={preferences.includes('highContrast')}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  고대비 모드
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="reducedMotion" 
                  aria-label="애니메이션 감소 활성화"
                  aria-pressed={preferences.includes('reducedMotion')}
                >
                  <Pause className="h-4 w-4 mr-2" />
                  애니메이션 감소
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-2" aria-live="polite">
                활성화된 기능: {preferences.length > 0 ? preferences.join(', ') : '없음'}
              </p>
            </div>

            {/* 테마 설정 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">테마 선택 (단일 선택)</Label>
              <ToggleGroup 
                type="single" 
                value={theme} 
                onValueChange={(value) => setTheme(value || 'auto')}
                aria-label="테마 선택"
                role="radiogroup"
              >
                <ToggleGroupItem 
                  value="light" 
                  aria-label="라이트 테마"
                  role="radio"
                  aria-checked={theme === 'light'}
                >
                  <Sun className="h-4 w-4 mr-2" />
                  라이트
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="dark" 
                  aria-label="다크 테마"
                  role="radio"
                  aria-checked={theme === 'dark'}
                >
                  <Moon className="h-4 w-4 mr-2" />
                  다크
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="auto" 
                  aria-label="자동 테마"
                  role="radio"
                  aria-checked={theme === 'auto'}
                >
                  <Monitor className="h-4 w-4 mr-2" />
                  자동
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-2" aria-live="polite">
                현재 테마: {theme}
              </p>
            </div>

            {/* 글자 크기 설정 */}
            <div>
              <Label className="text-sm font-medium mb-2 block">글자 크기</Label>
              <ToggleGroup 
                type="single" 
                value={fontSize} 
                onValueChange={(value) => setFontSize(value || 'medium')}
                aria-label="글자 크기 선택"
                size="lg"
              >
                <ToggleGroupItem 
                  value="small" 
                  aria-label="작은 글자"
                  className="text-sm"
                >
                  작게
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="medium" 
                  aria-label="보통 글자"
                  className="text-base"
                >
                  보통
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="large" 
                  aria-label="큰 글자"
                  className="text-lg"
                >
                  크게
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="xlarge" 
                  aria-label="매우 큰 글자"
                  className="text-xl"
                >
                  매우 크게
                </ToggleGroupItem>
              </ToggleGroup>
              <p className="text-sm text-muted-foreground mt-2" aria-live="polite">
                현재 크기: {fontSize}
              </p>
            </div>

            {/* 설정 미리보기 */}
            <div 
              className={`mt-6 p-4 border rounded-lg transition-all duration-200 ${
                preferences.includes('highContrast') 
                  ? 'bg-black text-white border-white' 
                  : theme === 'dark' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-muted/30'
              }`}
              style={{
                fontSize: fontSize === 'small' ? '14px' : 
                         fontSize === 'large' ? '18px' : 
                         fontSize === 'xlarge' ? '20px' : '16px'
              }}
            >
              <h4 className="font-medium mb-3">설정 미리보기</h4>
              <div className="space-y-2">
                <div>
                  <strong>활성 기능:</strong> 
                  {preferences.map(pref => (
                    <Badge 
                      key={pref} 
                      variant={preferences.includes('highContrast') ? 'outline' : 'secondary'}
                      className="ml-1"
                    >
                      {pref}
                    </Badge>
                  ))}
                </div>
                <div>
                  <strong>테마:</strong> 
                  <Badge 
                    variant={preferences.includes('highContrast') ? 'outline' : 'default'} 
                    className="ml-1"
                  >
                    {theme}
                  </Badge>
                </div>
                <div>
                  <strong>글자 크기:</strong> 
                  <Badge 
                    variant={preferences.includes('highContrast') ? 'outline' : 'default'} 
                    className="ml-1"
                  >
                    {fontSize}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 접근성 가이드라인 */}
        <Card>
          <CardHeader>
            <CardTitle>토글 그룹 접근성 가이드라인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>명확한 토글 레이블과 아이콘</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 ARIA 역할과 상태</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>키보드 내비게이션 완전 지원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>선택 상태의 시각적 표시</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>상태 변경 시 실시간 안내</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>너무 많은 옵션은 혼란 야기</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>단일/다중 선택 모드 명확화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>색상만으로 상태 구분 금지</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>터치 타깃 최소 44px 확보</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900">키보드 사용법</h5>
              <div className="text-sm text-blue-800 mt-2 space-y-1">
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Tab</kbd>: 다음 토글 그룹으로 이동</p>
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">방향키</kbd>: 그룹 내 토글 간 이동</p>
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Space</kbd> 또는 <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Enter</kbd>: 토글 활성화/비활성화</p>
                <p>• <kbd className="px-1 py-0.5 bg-blue-200 rounded text-xs">Esc</kbd>: 포커스 해제</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '토글 그룹 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.',
      },
    },
  },
};