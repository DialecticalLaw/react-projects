import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('displayed correctly', () => {
    const { getByPlaceholderText } = render(
      <Input
        type="search"
        placeholder="Type something"
        defaultValue={'Some value'}
        classes={['test_class']}
      />
    );
    const input = getByPlaceholderText('Type something');

    expect(input).toHaveClass('test_class');
    expect(input).toHaveValue('Some value');
    expect(input).toHaveRole('searchbox');
  });
});
