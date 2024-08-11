import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Pagination } from './Pagination';
import { userEvent } from '@testing-library/user-event';

describe('Pagination', () => {
  it('displays correctly', async () => {
    const user = userEvent.setup();
    const setPage = vi.fn();
    const { getAllByRole } = render(<Pagination next={'next'} prev={'prev'} setPage={setPage} />);
    const buttons = getAllByRole('button');

    await user.click(buttons[0]);
    await user.click(buttons[1]);

    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent('<');
    expect(buttons[1]).toHaveTextContent('>');
    expect(setPage).toBeCalledTimes(2);
  });
});
