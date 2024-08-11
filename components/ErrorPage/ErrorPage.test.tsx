import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ErrorPage } from './ErrorPage';

describe('ErrorPage', () => {
  it('displays correctly', () => {
    const { getByText, queryByText } = render(
      <MemoryRouter initialEntries={['/error-page']}>
        <Routes>
          <Route path="/" element={<p>Home page</p>} />
          <Route path="/error-page" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText('The page was not found!')).toBeInTheDocument();
    expect(queryByText('Home page')).not.toBeInTheDocument();
  });
});
