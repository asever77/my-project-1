import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Globe, 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Users, 
  Building, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Star, 
  Flag, 
  Palette, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Mail, 
  Phone, 
  MessageSquare, 
  Bell, 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Wifi, 
  WifiOff, 
  Sun, 
  Moon, 
  Settings, 
  Filter, 
  SortAsc, 
  SortDesc, 
  Grid, 
  List, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  DollarSign, 
  CreditCard, 
  ShoppingCart, 
  Package, 
  Truck, 
  Plane, 
  Car, 
  Bike, 
  Home, 
  Store, 
  Factory, 
  Coffee, 
  Pizza, 
  Utensils, 
  Music, 
  Image, 
  Video, 
  FileText, 
  Download, 
  Upload, 
  Share2, 
  Copy, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  Check, 
  AlertCircle, 
  Info, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Search, 
  Tag, 
  Bookmark, 
  Archive,
  Database,
  Server,
  Cloud,
  Zap,
  Target,
  Layers,
  Code,
  Terminal,
  Github,
  GitBranch,
  Cpu,
  MemoryStick,
  HardDrive,
  Battery,
  Power,
  RotateCcw,
  RefreshCw,
  Repeat,
  Play,
  Pause,

  SkipForward,
  SkipBack,
  FastForward,
  Rewind,
  ChevronDown
} from 'lucide-react';

const meta: Meta<typeof Select> = {
  title: 'UI/Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '드롭다운 옵션에서 값을 선택할 수 있는 셀렉트 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '기본 선택값',
    },
    value: {
      control: 'text',
      description: '현재 선택된 값',
    },
    onValueChange: {
      action: 'changed',
      description: '값 변경 콜백',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    defaultValue: 'apple',
  },
  render: (args) => (
    <div className="w-72 space-y-2">
      <Label htmlFor="fruit-select">과일 선택</Label>
      <Select defaultValue={args.defaultValue} disabled={args.disabled}>
        <SelectTrigger id="fruit-select">
          <SelectValue placeholder="과일을 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">사과</SelectItem>
          <SelectItem value="banana">바나나</SelectItem>
          <SelectItem value="orange">오렌지</SelectItem>
          <SelectItem value="grape">포도</SelectItem>
          <SelectItem value="strawberry">딸기</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const CountrySelector: Story = {
  render: () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    
    const countries = [
      { code: 'kr', name: '대한민국', flag: '🇰🇷', timezone: 'Asia/Seoul' },
      { code: 'us', name: '미국', flag: '🇺🇸', timezone: 'America/New_York' },
      { code: 'jp', name: '일본', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
      { code: 'cn', name: '중국', flag: '🇨🇳', timezone: 'Asia/Shanghai' },
      { code: 'uk', name: '영국', flag: '🇬🇧', timezone: 'Europe/London' },
      { code: 'de', name: '독일', flag: '🇩🇪', timezone: 'Europe/Berlin' },
      { code: 'fr', name: '프랑스', flag: '🇫🇷', timezone: 'Europe/Paris' },
      { code: 'ca', name: '캐나다', flag: '🇨🇦', timezone: 'America/Toronto' },
      { code: 'au', name: '호주', flag: '🇦🇺', timezone: 'Australia/Sydney' },
      { code: 'br', name: '브라질', flag: '🇧🇷', timezone: 'America/Sao_Paulo' },
    ];

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            국가 선택
          </CardTitle>
          <CardDescription>
            거주 국가를 선택해주세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="country-select">국가</Label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger id="country-select">
                <SelectValue placeholder="국가를 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {selectedCountry && (
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Flag className="h-4 w-4" />
                <span className="font-medium">선택된 국가 정보</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span>{countries.find(c => c.code === selectedCountry)?.flag}</span>
                  <span>{countries.find(c => c.code === selectedCountry)?.name}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>시간대: {countries.find(c => c.code === selectedCountry)?.timezone}</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const UserPreferences: Story = {
  render: () => {
    const [theme, setTheme] = useState('system');
    const [language, setLanguage] = useState('ko');
    const [notifications, setNotifications] = useState('all');
    const [timezone, setTimezone] = useState('asia-seoul');

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            사용자 환경설정
          </CardTitle>
          <CardDescription>
            개인 설정을 구성하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="theme-select" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              테마
            </Label>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger id="theme-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4" />
                    <span>라이트 모드</span>
                  </div>
                </SelectItem>
                <SelectItem value="dark">
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4" />
                    <span>다크 모드</span>
                  </div>
                </SelectItem>
                <SelectItem value="system">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                    <span>시스템 설정</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language-select" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              언어
            </Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ko">
                  <div className="flex items-center gap-2">
                    <span>🇰🇷</span>
                    <span>한국어</span>
                  </div>
                </SelectItem>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <span>🇺🇸</span>
                    <span>English</span>
                  </div>
                </SelectItem>
                <SelectItem value="ja">
                  <div className="flex items-center gap-2">
                    <span>🇯🇵</span>
                    <span>日本語</span>
                  </div>
                </SelectItem>
                <SelectItem value="zh">
                  <div className="flex items-center gap-2">
                    <span>🇨🇳</span>
                    <span>中文</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notifications-select" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              알림 설정
            </Label>
            <Select value={notifications} onValueChange={setNotifications}>
              <SelectTrigger id="notifications-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4" />
                    <span>모든 알림</span>
                  </div>
                </SelectItem>
                <SelectItem value="important">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span>중요한 알림만</span>
                  </div>
                </SelectItem>
                <SelectItem value="none">
                  <div className="flex items-center gap-2">
                    <VolumeX className="h-4 w-4" />
                    <span>알림 없음</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone-select" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              시간대
            </Label>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger id="timezone-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asia-seoul">서울 (UTC+9)</SelectItem>
                <SelectItem value="asia-tokyo">도쿄 (UTC+9)</SelectItem>
                <SelectItem value="asia-shanghai">상하이 (UTC+8)</SelectItem>
                <SelectItem value="europe-london">런던 (UTC+0)</SelectItem>
                <SelectItem value="america-newyork">뉴욕 (UTC-5)</SelectItem>
                <SelectItem value="america-losangeles">로스앤젤레스 (UTC-8)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-2 text-sm">
            <h4 className="font-medium">현재 설정</h4>
            <div className="space-y-1 text-muted-foreground">
              <div>테마: {theme}</div>
              <div>언어: {language}</div>
              <div>알림: {notifications}</div>
              <div>시간대: {timezone}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ProductFilters: Story = {
  render: () => {
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [brand, setBrand] = useState('');
    const [sortBy, setSortBy] = useState('popular');

    const categories = [
      { value: 'electronics', label: '전자제품', icon: Smartphone },
      { value: 'clothing', label: '의류', icon: Heart },
      { value: 'books', label: '도서', icon: FileText },
      { value: 'home', label: '홈&리빙', icon: Home },
      { value: 'sports', label: '스포츠', icon: Activity },
      { value: 'beauty', label: '뷰티', icon: Star },
    ];

    const priceRanges = [
      { value: '0-10000', label: '10,000원 이하' },
      { value: '10000-50000', label: '10,000원 - 50,000원' },
      { value: '50000-100000', label: '50,000원 - 100,000원' },
      { value: '100000-500000', label: '100,000원 - 500,000원' },
      { value: '500000+', label: '500,000원 이상' },
    ];

    const brands = [
      'Apple', 'Samsung', 'LG', 'Sony', 'Nike', 'Adidas', 
      'Uniqlo', 'Zara', 'Muji', 'IKEA'
    ];

    const sortOptions = [
      { value: 'popular', label: '인기순', icon: Star },
      { value: 'price-low', label: '낮은 가격순', icon: SortAsc },
      { value: 'price-high', label: '높은 가격순', icon: SortDesc },
      { value: 'newest', label: '최신순', icon: Clock },
      { value: 'rating', label: '평점순', icon: Heart },
    ];

    const hasFilters = category || priceRange || brand || sortBy !== 'popular';

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            상품 필터
          </CardTitle>
          <CardDescription>
            원하는 상품을 찾기 위해 필터를 설정하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="category-select" className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              카테고리
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category-select">
                <SelectValue placeholder="카테고리 선택" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => {
                  const IconComponent = cat.icon;
                  return (
                    <SelectItem key={cat.value} value={cat.value}>
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span>{cat.label}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price-select" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              가격대
            </Label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger id="price-select">
                <SelectValue placeholder="가격대 선택" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand-select" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              브랜드
            </Label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger id="brand-select">
                <SelectValue placeholder="브랜드 선택" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brandName) => (
                  <SelectItem key={brandName} value={brandName.toLowerCase()}>
                    {brandName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sort-select" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              정렬
            </Label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger id="sort-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span>{option.label}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {hasFilters ? '필터 적용됨' : '필터 없음'}
            </div>
            {hasFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setCategory('');
                  setPriceRange('');
                  setBrand('');
                  setSortBy('popular');
                }}
              >
                <X className="h-4 w-4 mr-1" />
                초기화
              </Button>
            )}
          </div>

          {hasFilters && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">적용된 필터</h4>
              <div className="flex flex-wrap gap-2">
                {category && (
                  <Badge variant="secondary">
                    {categories.find(c => c.value === category)?.label}
                  </Badge>
                )}
                {priceRange && (
                  <Badge variant="secondary">
                    {priceRanges.find(p => p.value === priceRange)?.label}
                  </Badge>
                )}
                {brand && (
                  <Badge variant="secondary">
                    {brands.find(b => b.toLowerCase() === brand)}
                  </Badge>
                )}
                {sortBy !== 'popular' && (
                  <Badge variant="secondary">
                    {sortOptions.find(s => s.value === sortBy)?.label}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const FormBuilder: Story = {
  render: () => {
    const [fieldType, setFieldType] = useState('');
    const [validationType, setValidationType] = useState('');
    const [size, setSize] = useState('medium');
    const [variant, setVariant] = useState('default');

    const fieldTypes = [
      { value: 'text', label: '텍스트 입력', icon: FileText },
      { value: 'email', label: '이메일', icon: Mail },
      { value: 'password', label: '비밀번호', icon: Lock },
      { value: 'number', label: '숫자', icon: FileText },
      { value: 'date', label: '날짜', icon: Calendar },
      { value: 'textarea', label: '긴 텍스트', icon: FileText },
      { value: 'select', label: '선택 목록', icon: ChevronDown },
      { value: 'checkbox', label: '체크박스', icon: Check },
      { value: 'radio', label: '라디오 버튼', icon: User },
      { value: 'file', label: '파일 업로드', icon: Upload },
    ];

    const validationTypes = [
      { value: 'required', label: '필수 항목' },
      { value: 'min-length', label: '최소 길이' },
      { value: 'max-length', label: '최대 길이' },
      { value: 'pattern', label: '패턴 검증' },
      { value: 'email-format', label: '이메일 형식' },
      { value: 'number-range', label: '숫자 범위' },
    ];

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            폼 빌더
          </CardTitle>
          <CardDescription>
            폼 필드 설정을 구성하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="field-type-select">필드 유형</Label>
            <Select value={fieldType} onValueChange={setFieldType}>
              <SelectTrigger id="field-type-select">
                <SelectValue placeholder="필드 유형을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {fieldTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span>{type.label}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="validation-select">유효성 검사</Label>
            <Select value={validationType} onValueChange={setValidationType}>
              <SelectTrigger id="validation-select">
                <SelectValue placeholder="유효성 검사 선택" />
              </SelectTrigger>
              <SelectContent>
                {validationTypes.map((validation) => (
                  <SelectItem key={validation.value} value={validation.value}>
                    {validation.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="size-select">크기</Label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger id="size-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="variant-select">스타일</Label>
              <Select value={variant} onValueChange={setVariant}>
                <SelectTrigger id="variant-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                  <SelectItem value="filled">Filled</SelectItem>
                  <SelectItem value="ghost">Ghost</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="font-medium">미리보기</h4>
            <div className="p-4 border rounded-lg bg-muted/50">
              {fieldType ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {fieldTypes.find(f => f.value === fieldType)?.icon && (
                      React.createElement(fieldTypes.find(f => f.value === fieldType)!.icon, {
                        className: "h-4 w-4"
                      })
                    )}
                    <span className="font-medium">
                      {fieldTypes.find(f => f.value === fieldType)?.label}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>크기: {size}</div>
                    <div>스타일: {variant}</div>
                    {validationType && (
                      <div>유효성 검사: {validationTypes.find(v => v.value === validationType)?.label}</div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  필드 유형을 선택하세요
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [value, setValue] = useState('');

    const options = [
      { value: 'screen-reader', label: '스크린 리더 사용자', description: 'NVDA, JAWS, VoiceOver 등' },
      { value: 'keyboard-only', label: '키보드 전용 사용자', description: 'Tab, Enter, 방향키 사용' },
      { value: 'motor-impaired', label: '운동 장애', description: '마우스 사용 어려움' },
      { value: 'cognitive-impaired', label: '인지 장애', description: '명확한 UI 필요' },
      { value: 'visual-impaired', label: '시각 장애', description: '고대비, 큰 텍스트 필요' },
    ];

    return (
      <div className="w-full max-w-md space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape, 방향키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 관리 및 순환</li>
            <li>• 검색 기능 지원</li>
            <li>• 적절한 색상 대비</li>
          </ul>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>접근성 셀렉트 데모</CardTitle>
            <CardDescription>
              완전한 키보드 접근성을 지원하는 셀렉트 컴포넌트
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label 
                htmlFor="accessibility-select"
                className="text-sm font-medium"
              >
                접근성 요구사항을 선택하세요
              </Label>
              <Select 
                value={value} 
                onValueChange={setValue}
                aria-describedby="select-description"
              >
                <SelectTrigger 
                  id="accessibility-select"
                  aria-label="접근성 요구사항 선택"
                  className="w-full"
                >
                  <SelectValue placeholder="요구사항을 선택하세요" />
                </SelectTrigger>
                <SelectContent 
                  aria-label="접근성 요구사항 목록"
                  role="listbox"
                >
                  {options.map((option) => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value}
                      aria-describedby={`option-desc-${option.value}`}
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{option.label}</div>
                        <div 
                          id={`option-desc-${option.value}`}
                          className="text-sm text-muted-foreground"
                        >
                          {option.description}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p 
                id="select-description" 
                className="text-sm text-muted-foreground"
              >
                화면 읽기 프로그램이나 키보드만 사용하는 경우를 포함한 다양한 접근성 요구사항
              </p>
            </div>
            
            {value && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-900">선택됨</span>
                </div>
                <div className="text-sm text-blue-800">
                  <div className="font-medium">
                    {options.find(opt => opt.value === value)?.label}
                  </div>
                  <div className="text-blue-700 mt-1">
                    {options.find(opt => opt.value === value)?.description}
                  </div>
                </div>
              </div>
            )}
            
            <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
              💡 키보드 사용법: Tab으로 포커스 → Enter/Space로 열기 → 방향키로 탐색 → Enter로 선택 → Escape로 닫기
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 제공하는 셀렉트 컴포넌트 데모입니다.',
      },
    },
  },
};