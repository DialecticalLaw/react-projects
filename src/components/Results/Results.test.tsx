import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Results } from './Results';
import { ApiResponse } from '../../interfaces';

const mockRouter = {
  replace: vi.fn()
};

describe('Results', () => {
  it('renders the specified number of cards', async () => {
    const apiRes: ApiResponse = await (await fetch('https://swapi.dev/api/planets/')).json();
    vi.mock('next/navigation', () => ({
      useRouter: () => mockRouter,
      useSearchParams: () => ''
    }));
    const { getAllByText } = render(<Results items={apiRes.results} />);

    expect(getAllByText('Population:').length).toBe(2);
  });

  it('appropriate message is displayed if no cards are present', () => {
    vi.mock('next/navigation', () => ({
      useRouter: () => mockRouter,
      useSearchParams: () => ''
    }));
    const { getByText } = render(<Results items={[]} />);

    expect(getByText('Nothing was found')).toBeInTheDocument();
  });
});
