import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Details } from './Details';
import { Planet } from '../../interfaces';
import mockRouter from 'next-router-mock';

const detailsRes: Planet = {
  name: 'Tatooine',
  population: '200000',
  terrain: 'desert',
  orbital_period: '304',
  rotation_period: '23',
  surface_water: '1',
  gravity: '1 standard',
  diameter: '10465',
  climate: 'arid',
  url: 'https://swapi.dev/api/planets/1'
};

describe('Details', () => {
  it('clicking on a card opens a detailed card component with correct data', () => {
    const { getByText } = render(<Details isLoading={false} data={detailsRes} />);

    expect(getByText('Tatooine')).toBeInTheDocument();
    expect(getByText('Climate: arid')).toBeInTheDocument();
  });

  it('clicking the close button remove details from search params', async () => {
    const user = userEvent.setup();
    mockRouter.push({ query: { details: '1' } });
    const { getByText } = render(<Details data={detailsRes} isLoading={false} />);
    const closeBtn = getByText('Close');

    expect(mockRouter.query.details).toBe('1');
    await user.click(closeBtn);
    expect(mockRouter.query.details).toBe(undefined);
  });
});
