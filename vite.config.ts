import { defineConfig } from 'vitest/config';
import { vitePlugin as remix } from '@remix-run/dev';

export default defineConfig({
  plugins: [remix()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
    coverage: {
      exclude: ['**/node_modules/**', './public', './.eslintrc.cjs', './vite.config.ts']
    }
  }
});
