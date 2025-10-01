import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  // GitHub Pages를 위한 기본 경로 설정
  "managerHead": (head) => `
    ${head}
    <base href="/my-project-1/storybook/">
  `,
  "viteFinal": async (config) => {
    // 프로덕션 환경 설정
    const isProduction = process.env.NODE_ENV === 'production';
    
    // GitHub Actions에서 빌드 시 이미지 문제 해결
    if (config.build) {
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        external: (id) => {
          // 문제가 되는 이미지 파일들을 external로 처리
          return id.includes('?ignore') || 
                 id.includes('.svg') && id.includes('assets') ||
                 id.includes('github.svg');
        }
      };
      
      // 빌드 최적화 설정
      config.build.chunkSizeWarningLimit = 1000;
      config.build.minify = true;
    }
    
    // resolve alias 설정
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': require('path').resolve(__dirname, '../src'),
      },
    };
    
    // 프로덕션에서 개발 도구 제거
    if (isProduction) {
      config.define = {
        ...config.define,
        'process.env.NODE_ENV': '"production"',
        global: 'globalThis',
      };
      
      // 개발 전용 플러그인 제거
      config.plugins = config.plugins?.filter(plugin => {
        if (typeof plugin === 'object' && plugin && 'name' in plugin) {
          return !plugin.name?.includes('mock') && !plugin.name?.includes('inject');
        }
        return true;
      });
    }
    
    // CSS 처리 최적화 - Tailwind v4 지원
    config.css = {
      ...config.css,
      postcss: {
        plugins: [
          require('@tailwindcss/postcss'),
          require('autoprefixer'),
        ],
      },
    };
    
    // 외부 라이브러리 최적화 설정
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        'recharts',
        'embla-carousel-react',
        '@radix-ui/react-tabs',
        'lucide-react'
      ],
    };
    
    return config;
  }
};
export default config;