import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '../../lib/utils';
import { 
  Home, 
  ShoppingCart, 
  User, 
  Settings,
  Search,
  Bell,
  Mail,
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Download,
  Upload,
  Share,
  Star,
  Heart,
  Bookmark,
  Tag,
  Folder,
  File,
  Code,
  Database,
  Server,
  Globe,
  Smartphone,
  Laptop,
  Monitor,
  Headphones,
  Camera,
  Gamepad2,
  Shirt,
  Book,
  Coffee,
  Car,
  Plane,
  Building,
  MapPin,
  Clock,
  Zap,
  Wifi,
  Battery,
  Signal,
  Shield
} from 'lucide-react';

const meta: Meta<typeof NavigationMenu> = {
  title: 'UI/Overlay/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '복잡한 내비게이션 구조를 위한 메뉴 컴포넌트입니다. 다단계 메뉴와 풍부한 콘텐츠를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>시작하기</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Home className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      홈페이지
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      우리 서비스의 메인 페이지로 이동하세요.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="문서">
                API 문서와 가이드를 확인하세요.
              </ListItem>
              <ListItem href="/examples" title="예제">
                다양한 사용 예제를 살펴보세요.
              </ListItem>
              <ListItem href="/tutorials" title="튜토리얼">
                단계별 학습 가이드를 따라해보세요.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>제품</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem title="웹 애플리케이션" href="/products/web">
                <Globe className="h-4 w-4 mr-2" />
                반응형 웹 애플리케이션 개발
              </ListItem>
              <ListItem title="모바일 앱" href="/products/mobile">
                <Smartphone className="h-4 w-4 mr-2" />
                iOS와 Android 앱 개발
              </ListItem>
              <ListItem title="데스크톱 소프트웨어" href="/products/desktop">
                <Laptop className="h-4 w-4 mr-2" />
                크로스 플랫폼 데스크톱 앱
              </ListItem>
              <ListItem title="API 서비스" href="/products/api">
                <Server className="h-4 w-4 mr-2" />
                RESTful API 및 GraphQL
              </ListItem>
              <ListItem title="데이터베이스" href="/products/database">
                <Database className="h-4 w-4 mr-2" />
                클라우드 데이터베이스 솔루션
              </ListItem>
              <ListItem title="호스팅" href="/products/hosting">
                <Wifi className="h-4 w-4 mr-2" />
                안정적인 웹 호스팅 서비스
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
            가격
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
            연락처
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const EcommerceMenu: Story = {
  render: () => (
    <div className="w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>카테고리</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="전자제품" href="/category/electronics">
                  <Monitor className="h-4 w-4 mr-2" />
                  스마트폰, 노트북, 태블릿
                </ListItem>
                <ListItem title="패션" href="/category/fashion">
                  <Shirt className="h-4 w-4 mr-2" />
                  의류, 신발, 액세서리
                </ListItem>
                <ListItem title="도서" href="/category/books">
                  <Book className="h-4 w-4 mr-2" />
                  소설, 전문서, 교육서
                </ListItem>
                <ListItem title="생활용품" href="/category/home">
                  <Coffee className="h-4 w-4 mr-2" />
                  가전제품, 가구, 주방용품
                </ListItem>
                <ListItem title="스포츠" href="/category/sports">
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  운동기구, 아웃도어, 게임
                </ListItem>
                <ListItem title="자동차" href="/category/automotive">
                  <Car className="h-4 w-4 mr-2" />
                  자동차 용품, 부품, 액세서리
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>브랜드</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium mb-3">인기 브랜드</h4>
                  <ul className="space-y-2">
                    <ListItem title="Apple" href="/brand/apple">
                      <Badge variant="outline">프리미엄</Badge>
                    </ListItem>
                    <ListItem title="Samsung" href="/brand/samsung">
                      <Badge variant="outline">인기</Badge>
                    </ListItem>
                    <ListItem title="LG" href="/brand/lg">
                      <Badge variant="outline">신뢰</Badge>
                    </ListItem>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3">글로벌 브랜드</h4>
                  <ul className="space-y-2">
                    <ListItem title="Nike" href="/brand/nike">
                      <Badge variant="secondary">스포츠</Badge>
                    </ListItem>
                    <ListItem title="Adidas" href="/brand/adidas">
                      <Badge variant="secondary">패션</Badge>
                    </ListItem>
                    <ListItem title="Sony" href="/brand/sony">
                      <Badge variant="secondary">전자</Badge>
                    </ListItem>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>할인</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      오늘의 특가
                    </CardTitle>
                    <CardDescription>
                      매일 새로운 특가 상품을 만나보세요
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ListItem title="스마트폰 30% 할인" href="/deals/smartphones">
                      최신 스마트폰 모델 특가
                    </ListItem>
                    <ListItem title="의류 50% 세일" href="/deals/fashion">
                      시즌 의류 대폭 할인
                    </ListItem>
                    <ListItem title="가전제품 20% 할인" href="/deals/appliances">
                      생활가전 특가 이벤트
                    </ListItem>
                  </CardContent>
                </Card>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="/support" className={navigationMenuTriggerStyle()}>
              고객지원
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const CompanyWebsite: Story = {
  render: () => (
    <div className="w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>회사소개</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                      href="/about"
                    >
                      <Building className="h-6 w-6 text-blue-600" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        우리 회사
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        혁신적인 기술로 세상을 변화시키는 기업입니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/about/history" title="회사 연혁">
                  <Clock className="h-4 w-4 mr-2" />
                  우리의 성장 과정을 확인하세요
                </ListItem>
                <ListItem href="/about/team" title="팀 소개">
                  <User className="h-4 w-4 mr-2" />
                  함께하는 훌륭한 동료들
                </ListItem>
                <ListItem href="/about/mission" title="미션 & 비전">
                  <Zap className="h-4 w-4 mr-2" />
                  우리가 추구하는 가치
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>서비스</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="웹 개발" href="/services/web">
                  <Globe className="h-4 w-4 mr-2" />
                  최신 기술로 웹사이트 제작
                </ListItem>
                <ListItem title="앱 개발" href="/services/app">
                  <Smartphone className="h-4 w-4 mr-2" />
                  iOS/Android 앱 개발
                </ListItem>
                <ListItem title="클라우드" href="/services/cloud">
                  <Server className="h-4 w-4 mr-2" />
                  안정적인 클라우드 서비스
                </ListItem>
                <ListItem title="데이터 분석" href="/services/analytics">
                  <Database className="h-4 w-4 mr-2" />
                  빅데이터 분석 및 인사이트
                </ListItem>
                <ListItem title="보안 솔루션" href="/services/security">
                  <Shield className="h-4 w-4 mr-2" />
                  강력한 보안 시스템 구축
                </ListItem>
                <ListItem title="컨설팅" href="/services/consulting">
                  <FileText className="h-4 w-4 mr-2" />
                  전문적인 IT 컨설팅
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>리소스</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium mb-3">개발자</h4>
                  <ul className="space-y-2">
                    <ListItem title="API 문서" href="/docs/api">
                      <Code className="h-4 w-4 mr-2" />
                      RESTful API 가이드
                    </ListItem>
                    <ListItem title="SDK" href="/resources/sdk">
                      <Download className="h-4 w-4 mr-2" />
                      개발 도구 다운로드
                    </ListItem>
                    <ListItem title="커뮤니티" href="/community">
                      <User className="h-4 w-4 mr-2" />
                      개발자 커뮤니티
                    </ListItem>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3">지원</h4>
                  <ul className="space-y-2">
                    <ListItem title="도움말" href="/help">
                      <FileText className="h-4 w-4 mr-2" />
                      사용자 가이드
                    </ListItem>
                    <ListItem title="문의하기" href="/contact">
                      <Mail className="h-4 w-4 mr-2" />
                      기술 지원 요청
                    </ListItem>
                    <ListItem title="상태 페이지" href="/status">
                      <Signal className="h-4 w-4 mr-2" />
                      서비스 운영 현황
                    </ListItem>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="/careers" className={navigationMenuTriggerStyle()}>
              채용
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="/blog" className={navigationMenuTriggerStyle()}>
              블로그
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const MediaLibrary: Story = {
  render: () => (
    <div className="w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>미디어</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-purple-100 p-6 no-underline outline-none focus:shadow-md"
                      href="/media"
                    >
                      <Image className="h-6 w-6 text-purple-600" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        미디어 라이브러리
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        다양한 미디어 콘텐츠를 관리하고 공유하세요.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/media/photos" title="사진">
                  <Camera className="h-4 w-4 mr-2" />
                  고화질 이미지 갤러리
                </ListItem>
                <ListItem href="/media/videos" title="동영상">
                  <Video className="h-4 w-4 mr-2" />
                  스트리밍 비디오 라이브러리
                </ListItem>
                <ListItem href="/media/music" title="음악">
                  <Music className="h-4 w-4 mr-2" />
                  오디오 스트리밍 서비스
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>컬렉션</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="최근 업로드" href="/collections/recent">
                  <Upload className="h-4 w-4 mr-2" />
                  최근에 추가된 미디어
                </ListItem>
                <ListItem title="인기 콘텐츠" href="/collections/popular">
                  <Heart className="h-4 w-4 mr-2" />
                  가장 많이 본 콘텐츠
                </ListItem>
                <ListItem title="즐겨찾기" href="/collections/favorites">
                  <Star className="h-4 w-4 mr-2" />
                  내가 좋아하는 미디어
                </ListItem>
                <ListItem title="공유됨" href="/collections/shared">
                  <Share className="h-4 w-4 mr-2" />
                  다른 사용자와 공유
                </ListItem>
                <ListItem title="태그별" href="/collections/tags">
                  <Tag className="h-4 w-4 mr-2" />
                  태그로 분류된 콘텐츠
                </ListItem>
                <ListItem title="폴더" href="/collections/folders">
                  <Folder className="h-4 w-4 mr-2" />
                  폴더별 정리된 미디어
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>도구</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">편집 도구</CardTitle>
                    <CardDescription>
                      미디어를 편집하고 향상시키는 도구들
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-2">
                    <ListItem title="이미지 편집" href="/tools/image-editor">
                      고급 사진 편집 기능
                    </ListItem>
                    <ListItem title="비디오 편집" href="/tools/video-editor">
                      프로페셔널 영상 편집
                    </ListItem>
                    <ListItem title="오디오 편집" href="/tools/audio-editor">
                      음성 및 음악 편집
                    </ListItem>
                    <ListItem title="일괄 처리" href="/tools/batch">
                      여러 파일 동시 처리
                    </ListItem>
                  </CardContent>
                </Card>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink href="/upload" className={navigationMenuTriggerStyle()}>
              업로드
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="w-full space-y-6">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">접근성 기능</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape, 화살표 키)</li>
          <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
          <li>• 포커스 관리 및 시각적 피드백</li>
          <li>• 의미론적 HTML 구조</li>
          <li>• 적절한 색상 대비 및 폰트 크기</li>
        </ul>
      </div>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              aria-haspopup="menu"
              aria-label="접근성 기능 메뉴"
            >
              접근성
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                      href="/accessibility"
                      aria-label="접근성 가이드 메인 페이지"
                    >
                      <User className="h-6 w-6 text-green-600" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        접근성 가이드
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        모든 사용자가 쉽게 이용할 수 있는 웹사이트를 만들어갑니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem 
                  href="/accessibility/keyboard" 
                  title="키보드 내비게이션"
                  aria-label="키보드만으로 사이트를 탐색하는 방법"
                >
                  Tab 키와 화살표 키로 탐색
                </ListItem>
                <ListItem 
                  href="/accessibility/screen-reader" 
                  title="스크린 리더 지원"
                  aria-label="스크린 리더 사용자를 위한 기능"
                >
                  음성으로 콘텐츠 읽기 지원
                </ListItem>
                <ListItem 
                  href="/accessibility/contrast" 
                  title="고대비 모드"
                  aria-label="시각 장애인을 위한 고대비 색상 모드"
                >
                  더 나은 가독성을 위한 색상
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger aria-label="설정 메뉴">
              설정
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                <ListItem 
                  title="폰트 크기 조절" 
                  href="/settings/font-size"
                  aria-label="텍스트 크기를 조절하는 설정"
                >
                  텍스트 크기를 크게 또는 작게 조절
                </ListItem>
                <ListItem 
                  title="색상 테마" 
                  href="/settings/theme"
                  aria-label="다크 모드와 라이트 모드 선택"
                >
                  다크 모드 / 라이트 모드 선택
                </ListItem>
                <ListItem 
                  title="언어 설정" 
                  href="/settings/language"
                  aria-label="사이트 언어 변경 설정"
                >
                  한국어, 영어 등 언어 선택
                </ListItem>
                <ListItem 
                  title="알림 설정" 
                  href="/settings/notifications"
                  aria-label="푸시 알림 및 이메일 알림 설정"
                >
                  알림 방식 및 빈도 조절
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="/help" 
              className={navigationMenuTriggerStyle()}
              aria-label="도움말 페이지로 이동"
            >
              도움말
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
        💡 팁: Tab으로 메뉴 이동, Enter/Space로 열기, 화살표로 항목 탐색, Escape로 닫기
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 내비게이션 메뉴 데모입니다.',
      },
    },
  },
};

// ListItem 헬퍼 컴포넌트
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    children?: React.ReactNode;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"