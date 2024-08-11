import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Search } from './Search';
import { userEvent } from '@testing-library/user-event';

describe('Search', () => {
  it('displays correctly', async () => {
    const user = userEvent.setup();
    const saveSearchTerm = vi.fn();
    const { getByPlaceholderText, getByText } = render(
      <Search setPage={vi.fn()} saveSearchTerm={saveSearchTerm} initialSearchTerm="init" />
    );

    expect(getByPlaceholderText('Type something...')).toHaveValue('init');
    await user.click(getByText('Search'));
    expect(saveSearchTerm).toBeCalledWith('init');
  });
});
