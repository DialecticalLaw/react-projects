import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Loader } from './Loader';

describe('Loader', () => {
  it('displays correctly', () => {
    const { getByAltText } = render(<Loader />);

    expect(getByAltText('loader').parentElement).toHaveStyle(`display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;`);
  });
});
