import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Play, 
  Pause, 
  Square, 
  Download, 
  Upload, 
  Wifi, 
  Battery, 
  HardDrive, 
  Cpu, 
  MemoryStick, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Loader, 
  TrendingUp, 
  Target, 
  Activity, 
  BarChart3, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Archive, 
  Smartphone,
  Monitor,
  Settings,
  Zap,
  Globe,
  Shield,
  RefreshCw
} from 'lucide-react';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '작업의 진행 상태를 시각적으로 표시하는 프로그레스 바 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '진행률 (0-100)',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 33,
  },
  render: (args) => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>진행률</span>
          <span>{args.value}%</span>
        </div>
        <Progress value={args.value} className="w-full" />
      </div>
    </div>
  ),
};

export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      let timer: NodeJS.Timeout;
      
      if (isRunning && progress < 100) {
        timer = setTimeout(() => {
          setProgress(prev => {
            const increment = Math.random() * 10;
            return Math.min(prev + increment, 100);
          });
        }, 200);
      }

      return () => clearTimeout(timer);
    }, [progress, isRunning]);

    const handleStart = () => {
      setIsRunning(true);
    };

    const handlePause = () => {
      setIsRunning(false);
    };

    const handleReset = () => {
      setProgress(0);
      setIsRunning(false);
    };

    return (
      <div className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              작업 진행률
            </CardTitle>
            <CardDescription>
              실시간으로 업데이트되는 진행률을 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>완료율</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
            
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleStart}
                disabled={isRunning || progress >= 100}
              >
                <Play className="mr-1 h-4 w-4" />
                시작
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handlePause}
                disabled={!isRunning}
              >
                <Pause className="mr-1 h-4 w-4" />
                일시정지
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleReset}
              >
                <Square className="mr-1 h-4 w-4" />
                초기화
              </Button>
            </div>

            {progress >= 100 && (
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <CheckCircle className="h-4 w-4" />
                작업이 완료되었습니다!
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const FileUploadProgress: Story = {
  render: () => {
    const [uploads, setUploads] = useState([
      {
        id: 1,
        name: '프레젠테이션.pptx',
        size: '15.2 MB',
        progress: 75,
        status: 'uploading',
        icon: FileText,
      },
      {
        id: 2,
        name: '여행사진.jpg',
        size: '3.8 MB',
        progress: 100,
        status: 'completed',
        icon: Image,
      },
      {
        id: 3,
        name: '프로젝트_영상.mp4',
        size: '124.5 MB',
        progress: 45,
        status: 'uploading',
        icon: Video,
      },
      {
        id: 4,
        name: '음악파일.mp3',
        size: '4.2 MB',
        progress: 0,
        status: 'pending',
        icon: Music,
      },
    ]);

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'completed': return 'text-green-600';
        case 'uploading': return 'text-blue-600';
        case 'pending': return 'text-gray-500';
        default: return 'text-gray-500';
      }
    };

    const getStatusText = (status: string) => {
      switch (status) {
        case 'completed': return '완료';
        case 'uploading': return '업로드 중';
        case 'pending': return '대기 중';
        default: return '알 수 없음';
      }
    };

    return (
      <div className="w-full max-w-lg space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              파일 업로드
            </CardTitle>
            <CardDescription>
              여러 파일의 업로드 진행상황을 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {uploads.map((file) => {
                const IconComponent = file.icon;
                return (
                  <div key={file.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{file.size}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={file.status === 'completed' ? 'default' : 'secondary'}
                        className={getStatusColor(file.status)}
                      >
                        {getStatusText(file.status)}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1">
                      <Progress value={file.progress} className="w-full" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{file.progress}% 완료</span>
                        {file.status === 'uploading' && (
                          <span>업로드 중...</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <Separator />
              
              <div className="flex justify-between text-sm">
                <span>전체 진행률</span>
                <span>
                  {Math.round(uploads.reduce((acc, file) => acc + file.progress, 0) / uploads.length)}%
                </span>
              </div>
              <Progress 
                value={uploads.reduce((acc, file) => acc + file.progress, 0) / uploads.length} 
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const SystemStatus: Story = {
  render: () => {
    const [systemMetrics] = useState([
      {
        name: 'CPU 사용률',
        value: 67,
        unit: '%',
        icon: Cpu,
        color: 'text-orange-600',
        description: '프로세서 활용도',
      },
      {
        name: '메모리 사용량',
        value: 84,
        unit: '%',
        icon: MemoryStick,
        color: 'text-red-600',
        description: '8GB 중 6.7GB 사용 중',
      },
      {
        name: '디스크 사용량',
        value: 45,
        unit: '%',
        icon: HardDrive,
        color: 'text-blue-600',
        description: '500GB 중 225GB 사용 중',
      },
      {
        name: '배터리',
        value: 78,
        unit: '%',
        icon: Battery,
        color: 'text-green-600',
        description: '약 3시간 남음',
      },
      {
        name: '네트워크',
        value: 92,
        unit: '%',
        icon: Wifi,
        color: 'text-green-600',
        description: '신호 강도 우수',
      },
    ]);

    const getProgressColor = (value: number) => {
      if (value >= 90) return 'bg-red-500';
      if (value >= 70) return 'bg-orange-500';
      if (value >= 50) return 'bg-yellow-500';
      return 'bg-green-500';
    };

    return (
      <div className="w-full max-w-2xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              시스템 상태
            </CardTitle>
            <CardDescription>
              실시간 시스템 리소스 사용량을 모니터링하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {systemMetrics.map((metric) => {
                const IconComponent = metric.icon;
                return (
                  <div key={metric.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`h-5 w-5 ${metric.color}`} />
                        <div>
                          <p className="font-medium">{metric.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {metric.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">
                          {metric.value}{metric.unit}
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Progress value={metric.value} className="w-full" />
                      <div 
                        className={`absolute top-0 left-0 h-full rounded-full transition-all ${getProgressColor(metric.value)}`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const DownloadManager: Story = {
  render: () => {
    const [downloads] = useState([
      {
        id: 1,
        name: 'Ubuntu 22.04 LTS',
        size: '4.7 GB',
        downloaded: '3.2 GB',
        progress: 68,
        speed: '2.1 MB/s',
        timeLeft: '12분',
        status: 'downloading',
      },
      {
        id: 2,
        name: 'Visual Studio Code',
        size: '89.2 MB',
        downloaded: '89.2 MB',
        progress: 100,
        speed: '0 MB/s',
        timeLeft: '완료',
        status: 'completed',
      },
      {
        id: 3,
        name: 'Node.js LTS',
        size: '45.8 MB',
        downloaded: '12.3 MB',
        progress: 27,
        speed: '1.8 MB/s',
        timeLeft: '18분',
        status: 'downloading',
      },
    ]);

    return (
      <div className="w-full max-w-2xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              다운로드 관리자
            </CardTitle>
            <CardDescription>
              진행 중인 다운로드 목록과 상태를 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {downloads.map((download) => (
                <div key={download.id} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{download.name}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>{download.downloaded} / {download.size}</span>
                        {download.status === 'downloading' && (
                          <>
                            <span>{download.speed}</span>
                            <span>남은 시간: {download.timeLeft}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <Badge 
                      variant={download.status === 'completed' ? 'default' : 'secondary'}
                    >
                      {download.status === 'completed' ? '완료' : '다운로드 중'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <Progress value={download.progress} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{download.progress}%</span>
                      {download.status === 'downloading' && (
                        <div className="flex items-center gap-1">
                          <Loader className="h-3 w-3 animate-spin" />
                          <span>다운로드 중</span>
                        </div>
                      )}
                      {download.status === 'completed' && (
                        <div className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="h-3 w-3" />
                          <span>완료됨</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  총 3개 항목
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Pause className="mr-1 h-4 w-4" />
                    모두 일시정지
                  </Button>
                  <Button variant="outline" size="sm">
                    <Square className="mr-1 h-4 w-4" />
                    모두 중지
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const ProgressSteps: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(2);
    
    const steps = [
      { id: 1, title: '계정 생성', description: '기본 정보 입력' },
      { id: 2, title: '이메일 인증', description: '이메일 확인' },
      { id: 3, title: '프로필 설정', description: '프로필 완성' },
      { id: 4, title: '완료', description: '가입 완료' },
    ];

    const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
      <div className="w-full max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              회원가입 진행률
            </CardTitle>
            <CardDescription>
              {currentStep}/{steps.length} 단계 완료
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>전체 진행률</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
            
            <div className="space-y-4">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-center gap-4 p-3 rounded-lg border transition-colors ${
                    step.id < currentStep 
                      ? 'bg-green-50 border-green-200' 
                      : step.id === currentStep
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                    step.id < currentStep
                      ? 'bg-green-500 text-white'
                      : step.id === currentStep
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step.id < currentStep ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : step.id === currentStep ? (
                      <Clock className="h-4 w-4" />
                    ) : (
                      step.id
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-medium">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {step.id < currentStep && (
                    <Badge className="bg-green-100 text-green-800">완료</Badge>
                  )}
                  {step.id === currentStep && (
                    <Badge className="bg-blue-100 text-blue-800">진행 중</Badge>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                이전
              </Button>
              <Button
                size="sm"
                onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                disabled={currentStep === steps.length}
              >
                다음
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [progress, setProgress] = useState(45);

    return (
      <div className="w-full max-w-md space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• ARIA 진행률 어트리뷰트 지원</li>
            <li>• 스크린 리더 호환성</li>
            <li>• 적절한 색상 대비</li>
            <li>• 키보드 내비게이션 지원</li>
            <li>• 진행률 값 음성 안내</li>
          </ul>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>접근성 프로그레스 바 데모</CardTitle>
            <CardDescription>
              스크린 리더와 완전히 호환되는 진행률 표시
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label 
                htmlFor="progress-demo" 
                className="text-sm font-medium block mb-2"
              >
                작업 진행률: {progress}%
              </label>
              <Progress 
                id="progress-demo"
                value={progress} 
                className="w-full"
                aria-label={`작업 진행률 ${progress}퍼센트`}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-describedby="progress-description"
              />
              <p 
                id="progress-description" 
                className="text-sm text-muted-foreground mt-1"
              >
                현재 {progress}% 완료되었습니다. {100 - progress}% 남았습니다.
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => setProgress(Math.max(0, progress - 10))}
                disabled={progress === 0}
                aria-label="진행률 10% 감소"
              >
                -10%
              </Button>
              <Button
                size="sm"
                onClick={() => setProgress(Math.min(100, progress + 10))}
                disabled={progress === 100}
                aria-label="진행률 10% 증가"
              >
                +10%
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setProgress(0)}
                aria-label="진행률 초기화"
              >
                초기화
              </Button>
            </div>
            
            <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
              💡 스크린 리더 사용자를 위해 진행률이 변경될 때마다 자동으로 상태가 안내됩니다.
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 접근성을 지원하는 프로그레스 바 데모입니다. ARIA 레이블과 스크린 리더 호환성을 포함합니다.',
      },
    },
  },
};