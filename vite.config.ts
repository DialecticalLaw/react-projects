import { defineConfig } from 'vitest/config';
import { vitePlugin as remix } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
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
    environment: 'jsdom',
    setupFiles: 'setupTests',
    mockReset: true,
    coverage: {
      exclude: ['**/node_modules/**', './public', './.eslintrc.cjs', './vite.config.ts']
    }
  }
});
