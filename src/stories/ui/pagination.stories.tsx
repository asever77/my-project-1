import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  MoreHorizontal,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Eye,
  Users,
  Calendar,
  Tag,
  Star,
  Heart,
  Bookmark,
  Share,
  Download,
  FileText,
  Image,
  Video,
  Music
} from 'lucide-react';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '페이지 번호를 표시하고 탐색할 수 있는 페이지네이션 컴포넌트입니다. 대량의 데이터를 페이지별로 나누어 표시할 때 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">기본 페이지네이션</h3>
          <p className="text-sm text-muted-foreground">
            현재 페이지: {currentPage} / {totalPages}
          </p>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(pageNum);
                    }}
                    isActive={currentPage === pageNum}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            {totalPages > 5 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(totalPages);
                    }}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
};

export const WithEllipsis: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;

    const getVisiblePages = () => {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];

      for (let i = Math.max(2, currentPage - delta); 
           i <= Math.min(totalPages - 1, currentPage + delta); 
           i++) {
        range.push(i);
      }

      if (currentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push('...', totalPages);
      } else {
        rangeWithDots.push(totalPages);
      }

      return rangeWithDots;
    };

    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">생략 표시가 있는 페이지네이션</h3>
          <p className="text-sm text-muted-foreground">
            현재 페이지: {currentPage} / {totalPages}
          </p>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            
            {getVisiblePages().map((page, index) => (
              <PaginationItem key={index}>
                {page === '...' ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page as number);
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
};

export const WithFirstLast: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(8);
    const totalPages = 15;

    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">처음/마지막 버튼이 있는 페이지네이션</h3>
          <p className="text-sm text-muted-foreground">
            현재 페이지: {currentPage} / {totalPages}
          </p>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="h-9 px-3"
              >
                <ChevronsLeft className="h-4 w-4 mr-1" />
                처음
              </Button>
            </PaginationItem>
            
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const startPage = Math.max(1, currentPage - 2);
              const pageNum = startPage + i;
              if (pageNum > totalPages) return null;
              
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(pageNum);
                    }}
                    isActive={currentPage === pageNum}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            
            <PaginationItem>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="h-9 px-3"
              >
                마지막
                <ChevronsRight className="h-4 w-4 ml-1" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
};

export const TablePagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalItems = 247;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const users = [
      { id: 1, name: '김철수', email: 'kim@example.com', role: '관리자' },
      { id: 2, name: '이영희', email: 'lee@example.com', role: '편집자' },
      { id: 3, name: '박민수', email: 'park@example.com', role: '사용자' },
      { id: 4, name: '최지영', email: 'choi@example.com', role: '사용자' },
      { id: 5, name: '정민호', email: 'jung@example.com', role: '편집자' },
    ];

    return (
      <div className="w-full max-w-4xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              사용자 목록
            </CardTitle>
            <CardDescription>
              전체 {totalItems}명의 사용자 중 {startItem}-{endItem}번째 표시
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">이름</th>
                    <th className="text-left p-2">이메일</th>
                    <th className="text-left p-2">역할</th>
                    <th className="text-left p-2">액션</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="p-2 font-medium">{user.name}</td>
                      <td className="p-2 text-muted-foreground">{user.email}</td>
                      <td className="p-2">
                        <Badge variant={user.role === '관리자' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="p-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Label htmlFor="itemsPerPage">페이지당 항목:</Label>
            <Select value={itemsPerPage.toString()} onValueChange={(value) => {
              setItemsPerPage(Number(value));
              setCurrentPage(1);
            }}>
              <SelectTrigger className="w-20" id="itemsPerPage">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const startPage = Math.max(1, currentPage - 2);
                const pageNum = startPage + i;
                if (pageNum > totalPages) return null;
                
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNum);
                      }}
                      isActive={currentPage === pageNum}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    );
  },
};

export const SearchResults: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const totalResults = 1247;
    const resultsPerPage = 12;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const searchResults = [
      { id: 1, title: 'React 개발 가이드', type: 'document', author: '김개발', date: '2024-01-15' },
      { id: 2, title: 'TypeScript 시작하기', type: 'video', author: '이코딩', date: '2024-01-14' },
      { id: 3, title: 'UI/UX 디자인 원칙', type: 'image', author: '박디자인', date: '2024-01-13' },
      { id: 4, title: 'Node.js 백엔드 개발', type: 'document', author: '최백엔드', date: '2024-01-12' },
    ];

    const getResultIcon = (type: string) => {
      switch (type) {
        case 'document': return <FileText className="h-4 w-4" />;
        case 'video': return <Video className="h-4 w-4" />;
        case 'image': return <Image className="h-4 w-4" />;
        case 'audio': return <Music className="h-4 w-4" />;
        default: return <FileText className="h-4 w-4" />;
      }
    };

    return (
      <div className="w-full max-w-4xl space-y-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  검색 결과
                </CardTitle>
                <CardDescription>
                  "{'"React 개발"'}" 검색어로 {totalResults.toLocaleString()}개 결과 발견
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
              {searchResults.map((result) => (
                <div key={result.id} className={`p-4 border rounded-lg hover:bg-accent ${viewMode === 'list' ? 'flex items-center gap-4' : ''}`}>
                  <div className={`flex items-center gap-2 ${viewMode === 'list' ? 'flex-1' : 'mb-2'}`}>
                    {getResultIcon(result.type)}
                    <h4 className="font-medium">{result.title}</h4>
                  </div>
                  <div className={`text-sm text-muted-foreground ${viewMode === 'list' ? 'flex items-center gap-4' : 'space-y-1'}`}>
                    <div>작성자: {result.author}</div>
                    <div>{result.date}</div>
                  </div>
                  {viewMode === 'grid' && (
                    <div className="flex gap-1 mt-2">
                      <Button variant="ghost" size="sm">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            페이지 {currentPage} / {totalPages} (전체 {totalResults.toLocaleString()}개 결과)
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              
              {[...Array(Math.min(7, totalPages))].map((_, i) => {
                const startPage = Math.max(1, currentPage - 3);
                const pageNum = startPage + i;
                if (pageNum > totalPages) return null;
                
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNum);
                      }}
                      isActive={currentPage === pageNum}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    );
  },
};

export const MobilePagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 12;

    return (
      <div className="max-w-sm space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">모바일 페이지네이션</h3>
          <p className="text-sm text-muted-foreground">
            작은 화면에 최적화된 디자인
          </p>
        </div>
        
        <div className="space-y-4">
          {/* 간단한 이전/다음 버튼 */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              이전
            </Button>
            
            <div className="flex items-center gap-2">
              <Input 
                type="number" 
                value={currentPage} 
                onChange={(e) => {
                  const page = parseInt(e.target.value);
                  if (page >= 1 && page <= totalPages) {
                    setCurrentPage(page);
                  }
                }}
                className="w-16 text-center"
                min={1}
                max={totalPages}
              />
              <span className="text-sm text-muted-foreground">/ {totalPages}</span>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              다음
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          {/* 점 형태 인디케이터 */}
          <div className="flex justify-center gap-1">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === i + 1 
                    ? 'bg-primary' 
                    : 'bg-muted hover:bg-muted-foreground/20'
                }`}
                aria-label={`페이지 ${i + 1}으로 이동`}
              />
            ))}
          </div>
          
          {/* 진행률 바 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>진행률</span>
              <span>{Math.round((currentPage / totalPages) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div 
                className="bg-primary h-1 rounded-full transition-all duration-300"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(3);
    const totalPages = 8;

    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, 화살표 키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 페이지 상태 안내</li>
            <li>• 포커스 관리 및 시각적 피드백</li>
            <li>• 의미론적 HTML 구조</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">접근성 페이지네이션</h3>
            <p className="text-sm text-muted-foreground" id="pagination-description">
              현재 {currentPage}페이지, 전체 {totalPages}페이지 중
            </p>
          </div>
          
          <nav aria-label="페이지 내비게이션" role="navigation">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                    aria-label={currentPage === 1 ? '이전 페이지 없음' : '이전 페이지로 이동'}
                    aria-disabled={currentPage === 1}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(pageNum);
                        }}
                        isActive={currentPage === pageNum}
                        aria-label={
                          currentPage === pageNum 
                            ? `현재 페이지, ${pageNum}페이지` 
                            : `${pageNum}페이지로 이동`
                        }
                        aria-current={currentPage === pageNum ? 'page' : undefined}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                    aria-label={currentPage === totalPages ? '다음 페이지 없음' : '다음 페이지로 이동'}
                    aria-disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </nav>
          
          <div className="text-center">
            <div 
              role="status" 
              aria-live="polite" 
              aria-atomic="true"
              className="text-sm text-muted-foreground"
            >
              페이지 {currentPage} of {totalPages} 표시 중
            </div>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab으로 버튼 이동, Enter/Space로 선택, 화살표 키로 빠른 이동
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 페이지네이션 데모입니다.',
      },
    },
  },
};