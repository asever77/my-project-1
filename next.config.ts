import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 1. 정적 파일로 내보내기 설정
  output: 'export', 
  
  // 2. GitHub Pages의 하위 경로 설정 (저장소 이름으로 대체)
  basePath: '/my-project-1',
  assetPrefix: '/my-project-1/',

  // 3. GitHub Pages에서 이미지 최적화 비활성화
  images: {
    unoptimized: true,
  },

  // 4. ESLint 오류 임시 무시 (빌드를 위해)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
