import { defineConfig } from 'vitest/config';
import { vitePlugin as remix } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';
import { loadEnv } from 'vite';

export default defineConfig({
  plugins: [
    !process.env.VITEST &&
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true
        }
      }),
    tsconfigPaths()
  ],
  test: {
    css: true,
    globals: true,
    environment: 'happy-dom',
    env: loadEnv('test', process.cwd(), ''),
    setupFiles: 'setupTests',
    mockReset: true,
    coverage: {
      exclude: ['**/node_modules/**', './public', './.eslintrc.cjs', './vite.config.ts']
    }
  }
});
