import '@testing-library/jest-dom/vitest';
import './app/global.css';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/node';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
