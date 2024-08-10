import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Loader } from './Loader';

describe('Loader', () => {
  it('displays correctly', () => {
    const { getByAltText } = render(<Loader />);

    expect(getByAltText('loader')).toHaveStyle(`width: 10vw;`);
  });
});
