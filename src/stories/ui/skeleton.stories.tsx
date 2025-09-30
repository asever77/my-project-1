import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Calendar, 
  Clock, 
  Star, 
  MessageSquare, 
  Heart, 
  Share2, 
  Bookmark, 
  Play, 
  MoreHorizontal, 
  Image as ImageIcon, 
  Video, 
  Music, 
  FileText, 
  Download, 
  Eye, 
  ThumbsUp, 
  MapPin, 
  Building, 
  Phone, 
  Mail, 
  Globe,
  ShoppingCart as ShoppingCartIcon,
  Package,
  Truck,
  DollarSign
} from 'lucide-react';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '콘텐츠가 로딩되는 동안 사용자에게 로딩 상태를 시각적으로 보여주는 스켈레톤 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: '추가 CSS 클래스명',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">기본 스켈레톤</h3>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <h3 className="text-lg font-semibold mb-4">프로필 카드 로딩</h3>
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-3 w-[80px]" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-3 w-[150px]" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-3 w-[100px]" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-3 w-[120px]" />
            </div>
            <Separator />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <Skeleton className="h-4 w-8 mx-auto" />
                <Skeleton className="h-3 w-12 mx-auto" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-8 mx-auto" />
                <Skeleton className="h-3 w-12 mx-auto" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-8 mx-auto" />
                <Skeleton className="h-3 w-12 mx-auto" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const ArticleList: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <h3 className="text-lg font-semibold mb-4">기사 목록 로딩</h3>
      <div className="space-y-6">
        {Array.from({ length: 3 }, (_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <Skeleton className="h-24 w-24 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex items-center space-x-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4 rounded-full" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-3 w-8" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
};

export const SocialMediaFeed: Story = {
  render: () => (
    <div className="w-full max-w-lg space-y-4">
      <h3 className="text-lg font-semibold mb-4">소셜 미디어 피드 로딩</h3>
      <div className="space-y-6">
        {Array.from({ length: 2 }, (_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
                <Skeleton className="h-8 w-8" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-48 w-full rounded" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Skeleton className="h-6 w-6" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Skeleton className="h-6 w-6" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Skeleton className="h-6 w-6" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                </div>
                <Skeleton className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
};

export const ProductGrid: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <h3 className="text-lg font-semibold mb-4">상품 그리드 로딩</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }, (_, i) => (
          <Card key={i}>
            <div className="p-4 space-y-3">
              <Skeleton className="aspect-square w-full rounded" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Skeleton key={j} className="h-3 w-3" />
                  ))}
                  <Skeleton className="h-3 w-8 ml-2" />
                </div>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-8 w-8 rounded" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  ),
};

export const MediaPlayer: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <h3 className="text-lg font-semibold mb-4">미디어 플레이어 로딩</h3>
      <Card>
        <CardContent className="p-6 space-y-4">
          {/* 앨범 아트 */}
          <Skeleton className="aspect-square w-full rounded-lg" />
          
          {/* 제목과 아티스트 */}
          <div className="text-center space-y-2">
            <Skeleton className="h-5 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </div>
          
          {/* 프로그레스 바 */}
          <div className="space-y-2">
            <Skeleton className="h-1 w-full" />
            <div className="flex justify-between">
              <Skeleton className="h-3 w-8" />
              <Skeleton className="h-3 w-8" />
            </div>
          </div>
          
          {/* 컨트롤 버튼 */}
          <div className="flex items-center justify-center space-x-4">
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-8 w-8 rounded" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
          
          {/* 볼륨 컨트롤 */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-1 w-full" />
            <Skeleton className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="w-full space-y-6">
      <h3 className="text-lg font-semibold mb-4">대시보드 로딩</h3>
      
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex space-x-2">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
      
      {/* 통계 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }, (_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="h-8 w-8 rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* 차트 섹션 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
              <Skeleton className="h-8 w-20" />
            </div>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="space-y-1">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-3 w-20" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-8 w-8 rounded" />
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-2 w-16" />
                  </div>
                </div>
                <Skeleton className="h-3 w-12" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      
      {/* 테이블 */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-3 w-48" />
            </div>
            <div className="flex space-x-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {/* 테이블 헤더 */}
            <div className="grid grid-cols-5 gap-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Separator />
            {/* 테이블 행들 */}
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="grid grid-cols-5 gap-4 items-center">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-5 w-12 rounded-full" />
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-6 w-6" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-6">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">접근성 기능</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• 스켈레톤은 콘텐츠 로딩 중임을 시각적으로 표시</li>
          <li>• 적절한 애니메이션으로 사용자 경험 향상</li>
          <li>• 콘텐츠 구조를 미리 보여주어 레이아웃 시프트 방지</li>
          <li>• 스크린 리더 사용자를 위한 aria-label 제공</li>
          <li>• 높은 대비로 시각적 인식성 확보</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 접근성이 적용된 스켈레톤 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              접근성 적용 스켈레톤
            </CardTitle>
            <CardDescription>
              스크린 리더와 키보드 내비게이션을 지원하는 스켈레톤
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div 
              className="space-y-3"
              role="status"
              aria-label="프로필 정보를 불러오는 중입니다"
              aria-live="polite"
            >
              <div className="flex items-center space-x-3">
                <Skeleton 
                  className="h-12 w-12 rounded-full"
                  aria-label="프로필 이미지 로딩 중"
                />
                <div className="space-y-2">
                  <Skeleton 
                    className="h-4 w-32"
                    aria-label="사용자 이름 로딩 중"
                  />
                  <Skeleton 
                    className="h-3 w-24"
                    aria-label="사용자 이메일 로딩 중"
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Skeleton 
                  className="h-4 w-full"
                  aria-label="프로필 설명 첫 번째 줄 로딩 중"
                />
                <Skeleton 
                  className="h-4 w-3/4"
                  aria-label="프로필 설명 두 번째 줄 로딩 중"
                />
              </div>
              
              <div className="flex space-x-2">
                <Skeleton 
                  className="h-8 w-16"
                  aria-label="팔로우 버튼 로딩 중"
                />
                <Skeleton 
                  className="h-8 w-16"
                  aria-label="메시지 버튼 로딩 중"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* 일반 스켈레톤 비교 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              일반 스켈레톤
            </CardTitle>
            <CardDescription>
              기본적인 시각적 표시만 제공하는 스켈레톤
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              
              <div className="flex space-x-2">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-16" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* 스켈레톤 베스트 프랙티스 */}
      <Card>
        <CardHeader>
          <CardTitle>스켈레톤 접근성 가이드라인</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium text-green-600">✅ 권장사항</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>aria-label로 로딩 상태 설명</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>role="status"로 상태 변화 알림</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>aria-live="polite"로 점진적 업데이트</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>실제 콘텐츠와 유사한 크기와 형태</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-red-600">❌ 피해야 할 것</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>너무 빠른 애니메이션 (발작 위험)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>스크린 리더 무시하는 구조</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>키보드 포커스 트랩</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>낮은 대비의 스켈레톤</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start gap-2">
              <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h5 className="font-medium text-blue-900">접근성 팁</h5>
                <p className="text-sm text-blue-800 mt-1">
                  스켈레톤은 사용자에게 "무언가 로딩 중"임을 알려주는 중요한 신호입니다. 
                  시각적 표시뿐만 아니라 스크린 리더 사용자도 이 정보를 받을 수 있도록 
                  적절한 ARIA 속성을 사용하세요.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '스켈레톤 컴포넌트의 접근성 기능과 베스트 프랙티스를 보여주는 데모입니다.',
      },
    },
  },
};