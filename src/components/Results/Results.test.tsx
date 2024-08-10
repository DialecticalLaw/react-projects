import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Results } from './Results';
import { ApiResponse } from '../../interfaces';

describe('Results', () => {
  it('renders the specified number of cards', async () => {
    const apiRes: ApiResponse = await (await fetch('https://swapi.dev/api/planets/')).json();
    const { getAllByText } = render(<Results items={apiRes.results} />);

    expect(getAllByText('Population:').length).toBe(2);
  });

  it('appropriate message is displayed if no cards are present', () => {
    const { getByText } = render(<Results items={[]} />);

    expect(getByText('Nothing was found')).toBeInTheDocument();
  });
});
