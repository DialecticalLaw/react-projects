import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Details } from './Details';
import { Planet } from '../../interfaces';

const mockRouter = {
  replace: vi.fn()
};
describe('Details', () => {
  it('clicking on a card opens a detailed card component with correct data', async () => {
    const detailsRes: Planet = await (await fetch('https://swapi.dev/api/planets/1')).json();
    vi.mock('next/navigation', () => ({
      useRouter: () => mockRouter,
      useSearchParams: () => 'details=1'
    }));
    const { getByText } = render(<Details data={detailsRes} />);

    expect(getByText('Tatooine')).toBeInTheDocument();
    expect(getByText('Climate: arid')).toBeInTheDocument();
  });

  it('clicking the close button remove details from search params', async () => {
    vi.mock('next/navigation', () => ({
      useRouter: () => mockRouter,
      useSearchParams: () => 'details=1'
    }));
    const user = userEvent.setup();
    const detailsRes: Planet = await (await fetch('https://swapi.dev/api/planets/1')).json();
    const { getByText } = render(<Details data={detailsRes} />);
    const closeBtn = getByText('Close');

    expect(mockRouter.replace).not.toBeCalled();
    await user.click(closeBtn);
    expect(mockRouter.replace).toBeCalledWith('/?');
  });
});
