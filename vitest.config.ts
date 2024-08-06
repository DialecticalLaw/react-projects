import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
    coverage: {
      exclude: ['**/node_modules/**', './public', './.eslintrc.cjs', './vitest.config.ts']
    }
  }
});
