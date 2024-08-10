import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
    coverage: {
      exclude: [
        '**/node_modules/**',
        './public',
        './.eslintrc.cjs',
        './vitest.config.ts',
        './next.config.mjs',
        '.next/*',
        './parser.ts'
      ]
    }
  }
});
