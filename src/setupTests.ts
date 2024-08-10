import '@testing-library/jest-dom/vitest';
import './pages/styles.css';
import { beforeAll, afterEach, afterAll, vi } from 'vitest';
import { server } from './mocks/node';

beforeAll(() => {
  vi.mock('next/router', () => require('next-router-mock'));
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
