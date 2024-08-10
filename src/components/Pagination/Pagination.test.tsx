import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('displays correctly', () => {
    const { getAllByRole } = render(<Pagination next={'next'} prev={'prev'} setPage={() => {}} />);

    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent('←');
    expect(buttons[1]).toHaveTextContent('→');
  });
});
