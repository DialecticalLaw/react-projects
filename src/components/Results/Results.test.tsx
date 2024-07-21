import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Results } from './Results';
import { MemoryRouter } from 'react-router-dom';
import { Planet } from '../../services/planets';

describe('Results', () => {
  it('renders the specified number of cards', () => {
    const items = [
      {
        name: 'Dagobah',
        population: 'unknown',
        terrain: 'swamp, jungles',
        url: 'https://swapi.dev/api/planets/1/'
      },
      {
        name: 'Tatooine',
        population: '200000',
        terrain: 'desert',
        url: 'https://swapi.dev/api/planets/2/'
      },
      {
        name: 'Endor',
        population: '30000000',
        terrain: 'forests, mountains, lakes',
        url: 'https://swapi.dev/api/planets/3/'
      }
    ] as Planet[];

    const { getAllByText } = render(
      <MemoryRouter>
        <Results items={items} />
      </MemoryRouter>
    );

    expect(getAllByText('Population:').length).toBe(3);
  });

  it('appropriate message is displayed if no cards are present', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Results items={[]} />
      </MemoryRouter>
    );

    expect(getByText('Nothing was found')).toBeInTheDocument();
  });

  it('renders the relevant card data', () => {
    const items = [
      {
        name: 'Dagobah',
        population: 'unknown',
        terrain: 'swamp, jungles',
        url: 'https://swapi.dev/api/planets/1/'
      }
    ] as Planet[];

    const { getByText } = render(
      <MemoryRouter>
        <Results items={items} />
      </MemoryRouter>
    );

    expect(getByText('Dagobah')).toBeInTheDocument();
    expect(getByText('unknown')).toBeInTheDocument();
    expect(getByText('swamp, jungles')).toBeInTheDocument();
  });
});
