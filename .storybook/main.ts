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
    
    // CSS 처리 최적화
    config.css = {
      ...config.css,
      postcss: {
        plugins: [],
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