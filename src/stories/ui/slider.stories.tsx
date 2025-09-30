import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Volume2, 
  VolumeX, 
  Sun, 
  DollarSign, 
  Thermometer, 
  Gauge, 
  Timer, 
  Star, 
  Palette, 
  Sliders, 
  RotateCcw, 
  Save, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Music, 
  Eye, 
  Monitor, 
  Smartphone, 
  Zap,
  Settings,
  Headphones,
  Speaker,
  Mic,
  Video,
  Image as ImageIcon,
  Filter,
  Contrast,
  Moon
} from 'lucide-react';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '사용자가 범위 내에서 값을 선택할 수 있는 슬라이더 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: '슬라이더의 현재 값',
      control: 'object',
    },
    defaultValue: {
      description: '슬라이더의 기본 값',
      control: 'object',
    },
    min: {
      description: '최솟값',
      control: 'number',
    },
    max: {
      description: '최댓값',
      control: 'number',
    },
    step: {
      description: '스텝 값',
      control: 'number',
    },
    disabled: {
      description: '비활성화 상태',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    
    return (
      <div className="w-full max-w-md space-y-4">
        <h3 className="text-lg font-semibold mb-4">기본 슬라이더</h3>
        <div className="space-y-2">
          <Label>값: {value[0]}</Label>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />
        </div>
      </div>
    );
  },
};

export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState([65]);
    const [brightness, setBrightness] = useState([80]);
    const [bass, setBass] = useState([30]);
    const [treble, setTreble] = useState([70]);
    
    const isMuted = volume[0] === 0;
    
    return (
      <div className="w-full max-w-lg space-y-6">
        <h3 className="text-lg font-semibold mb-4">오디오 컨트롤</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Headphones className="h-5 w-5" />
              사운드 설정
            </CardTitle>
            <CardDescription>
              볼륨, 베이스, 트레블을 조정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 볼륨 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  볼륨
                </Label>
                <span className="text-sm text-muted-foreground">{volume[0]}%</span>
              </div>
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            
            {/* 밝기 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <Sun className="h-4 w-4" />
                  화면 밝기
                </Label>
                <span className="text-sm text-muted-foreground">{brightness[0]}%</span>
              </div>
              <Slider
                value={brightness}
                onValueChange={setBrightness}
                max={100}
                step={5}
                className="w-full"
              />
            </div>
            
            <Separator />
            
            {/* 이퀄라이저 */}
            <div className="space-y-4">
              <Label className="text-sm font-medium">이퀄라이저</Label>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">베이스</span>
                    <span className="text-xs text-muted-foreground">{bass[0]}%</span>
                  </div>
                  <Slider
                    value={bass}
                    onValueChange={setBass}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">트레블</span>
                    <span className="text-xs text-muted-foreground">{treble[0]}%</span>
                  </div>
                  <Slider
                    value={treble}
                    onValueChange={setTreble}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const PriceRange: Story = {
  render: () => {
    const [priceRange, setPriceRange] = useState([20000, 80000]);
    const [ageRange, setAgeRange] = useState([25, 45]);
    const [rating, setRating] = useState([3.5]);
    
    return (
      <div className="w-full max-w-lg space-y-6">
        <h3 className="text-lg font-semibold mb-4">범위 선택 필터</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              검색 필터
            </CardTitle>
            <CardDescription>
              원하는 조건을 설정하여 결과를 필터링하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 가격 범위 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  가격 범위
                </Label>
                <Badge variant="outline">
                  ₩{priceRange[0].toLocaleString()} - ₩{priceRange[1].toLocaleString()}
                </Badge>
              </div>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100000}
                min={10000}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₩10,000</span>
                <span>₩100,000</span>
              </div>
            </div>
            
            <Separator />
            
            {/* 연령 범위 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>연령 범위</Label>
                <Badge variant="outline">
                  {ageRange[0]}세 - {ageRange[1]}세
                </Badge>
              </div>
              <Slider
                value={ageRange}
                onValueChange={setAgeRange}
                max={65}
                min={18}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>18세</span>
                <span>65세</span>
              </div>
            </div>
            
            <Separator />
            
            {/* 평점 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  최소 평점
                </Label>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{rating[0]}</span>
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <Slider
                value={rating}
                onValueChange={setRating}
                max={5}
                min={1}
                step={0.5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1.0 ⭐</span>
                <span>5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            
            <Button className="w-full">
              필터 적용
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const MediaPlayer: Story = {
  render: () => {
    const [progress, setProgress] = useState([35]);
    const [volume, setVolume] = useState([70]);
    const [playbackSpeed, setPlaybackSpeed] = useState([1]);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const currentTime = (progress[0] / 100) * 245; // 4:05 총 길이
    const totalTime = 245;
    
    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    
    return (
      <div className="w-full max-w-md space-y-4">
        <h3 className="text-lg font-semibold mb-4">미디어 플레이어</h3>
        
        <Card>
          <CardContent className="p-6 space-y-4">
            {/* 앨범 아트 */}
            <div className="aspect-square w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Music className="h-16 w-16 text-white" />
            </div>
            
            {/* 트랙 정보 */}
            <div className="text-center">
              <h4 className="font-semibold">좋은 날</h4>
              <p className="text-sm text-muted-foreground">IU</p>
            </div>
            
            {/* 진행률 */}
            <div className="space-y-2">
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(totalTime)}</span>
              </div>
            </div>
            
            {/* 컨트롤 버튼 */}
            <div className="flex items-center justify-center space-x-4">
              <Button variant="ghost" size="sm">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button 
                onClick={() => setIsPlaying(!isPlaying)}
                size="sm"
                className="h-12 w-12 rounded-full"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="sm">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
            
            {/* 볼륨 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm">
                  <Volume2 className="h-3 w-3" />
                  볼륨
                </Label>
                <span className="text-xs text-muted-foreground">{volume[0]}%</span>
              </div>
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            
            {/* 재생 속도 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm">재생 속도</Label>
                <span className="text-xs text-muted-foreground">{playbackSpeed[0]}x</span>
              </div>
              <Slider
                value={playbackSpeed}
                onValueChange={setPlaybackSpeed}
                max={2}
                min={0.5}
                step={0.25}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0.5x</span>
                <span>1x</span>
                <span>2x</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const SystemSettings: Story = {
  render: () => {
    const [cpuUsage, setCpuUsage] = useState([45]);
    const [memoryUsage, setMemoryUsage] = useState([67]);
    const [temperature, setTemperature] = useState([58]);
    const [fanSpeed, setFanSpeed] = useState([75]);
    const [powerLimit, setPowerLimit] = useState([85]);
    
    return (
      <div className="w-full max-w-2xl space-y-6">
        <h3 className="text-lg font-semibold mb-4">시스템 모니터링</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 성능 모니터 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                성능 모니터
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">CPU 사용률</Label>
                  <Badge variant={cpuUsage[0] > 80 ? "destructive" : cpuUsage[0] > 60 ? "secondary" : "default"}>
                    {cpuUsage[0]}%
                  </Badge>
                </div>
                <Slider
                  value={cpuUsage}
                  onValueChange={setCpuUsage}
                  max={100}
                  step={1}
                  disabled
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">메모리 사용률</Label>
                  <Badge variant={memoryUsage[0] > 85 ? "destructive" : memoryUsage[0] > 70 ? "secondary" : "default"}>
                    {memoryUsage[0]}%
                  </Badge>
                </div>
                <Slider
                  value={memoryUsage}
                  onValueChange={setMemoryUsage}
                  max={100}
                  step={1}
                  disabled
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2 text-sm">
                    <Thermometer className="h-3 w-3" />
                    CPU 온도
                  </Label>
                  <Badge variant={temperature[0] > 70 ? "destructive" : temperature[0] > 60 ? "secondary" : "default"}>
                    {temperature[0]}°C
                  </Badge>
                </div>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  max={100}
                  min={30}
                  step={1}
                  disabled
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* 시스템 제어 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                시스템 제어
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2 text-sm">
                    <Gauge className="h-3 w-3" />
                    팬 속도
                  </Label>
                  <span className="text-xs text-muted-foreground">{fanSpeed[0]}%</span>
                </div>
                <Slider
                  value={fanSpeed}
                  onValueChange={setFanSpeed}
                  max={100}
                  min={20}
                  step={5}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="flex items-center gap-2 text-sm">
                    <Zap className="h-3 w-3" />
                    전력 제한
                  </Label>
                  <span className="text-xs text-muted-foreground">{powerLimit[0]}%</span>
                </div>
                <Slider
                  value={powerLimit}
                  onValueChange={setPowerLimit}
                  max={100}
                  min={50}
                  step={5}
                  className="w-full"
                />
              </div>
              
              <Separator />
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <RotateCcw className="h-3 w-3 mr-2" />
                  초기화
                </Button>
                <Button size="sm" className="flex-1">
                  <Save className="h-3 w-3 mr-2" />
                  적용
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    const [rangeValue, setRangeValue] = useState([25, 75]);
    
    return (
      <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, 방향키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 표시 및 시각적 피드백</li>
            <li>• 적절한 색상 대비와 크기</li>
            <li>• 값 변경 시 실시간 알림</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 접근성이 적용된 슬라이더 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                접근성 적용 슬라이더
              </CardTitle>
              <CardDescription>
                스크린 리더와 키보드 내비게이션을 지원하는 슬라이더
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 단일 값 슬라이더 */}
              <div className="space-y-3">
                <Label 
                  htmlFor="accessible-slider"
                  className="text-sm font-medium"
                >
                  볼륨 조절 (현재: {value[0]}%)
                </Label>
                <Slider
                  id="accessible-slider"
                  value={value}
                  onValueChange={setValue}
                  max={100}
                  step={1}
                  className="w-full"
                  aria-label={`볼륨 ${value[0]}%. 0에서 100 사이의 값을 선택하세요.`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={value[0]}
                  aria-valuetext={`${value[0]}퍼센트`}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0% (음소거)</span>
                  <span>100% (최대)</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  키보드 사용: Tab으로 포커스, 방향키로 조절, Page Up/Down으로 큰 단위 조절
                </div>
              </div>
              
              <Separator />
              
              {/* 범위 슬라이더 */}
              <div className="space-y-3">
                <Label 
                  htmlFor="accessible-range-slider"
                  className="text-sm font-medium"
                >
                  가격 범위 (₩{rangeValue[0].toLocaleString()} - ₩{rangeValue[1].toLocaleString()})
                </Label>
                <Slider
                  id="accessible-range-slider"
                  value={rangeValue}
                  onValueChange={setRangeValue}
                  max={100}
                  step={5}
                  className="w-full"
                  aria-label={`가격 범위 ${rangeValue[0]}만원에서 ${rangeValue[1]}만원. 0에서 100 사이의 범위를 선택하세요.`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuetext={`최소 ${rangeValue[0]}만원, 최대 ${rangeValue[1]}만원`}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₩0</span>
                  <span>₩100만</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  두 개의 핸들을 각각 조절할 수 있습니다. Tab으로 핸들 간 이동 가능
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* 접근성 가이드라인 */}
          <Card>
            <CardHeader>
              <CardTitle>슬라이더 접근성 가이드라인</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>명확한 Label과 현재 값 표시</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 ARIA 속성 사용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>키보드 내비게이션 지원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>시각적 포커스 인디케이터</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 크기와 터치 영역</span>
                  </li>
                </ul>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">🎯 키보드 단축키</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>←/→</span>
                    <span>값 조절 (좌/우)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>↑/↓</span>
                    <span>값 조절 (위/아래)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Page Up/Down</span>
                    <span>큰 단위로 조절</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home/End</span>
                    <span>최소/최대값으로 이동</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span>다음 핸들로 이동</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>너무 작은 step 값은 조작 어려움</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>범위가 너무 넓으면 정밀 조작 곤란</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>실시간 값 변경은 성능에 주의</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900">접근성 팁</h5>
              <p className="text-sm text-blue-800 mt-1">
                슬라이더는 시각적 조작뿐만 아니라 키보드와 스크린 리더로도 완전히 조작 가능해야 합니다. 
                특히 범위 슬라이더의 경우 두 핸들 모두 접근 가능하도록 구현하는 것이 중요합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '슬라이더 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.',
      },
    },
  },
};