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
    }
    
    // resolve alias 설정
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': require('path').resolve(__dirname, '../src'),
      },
    };
    
    return config;
  }
};
export default config;