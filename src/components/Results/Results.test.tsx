import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Results } from './Results';
import { Planet } from '../../services/API_service';
import { MemoryRouter } from 'react-router-dom';

describe('Results', () => {
  it('renders the specified number of cards', () => {
    const items = [
      {
        name: 'Dagobah',
        population: 'unknown',
        terrain: 'swamp, jungles'
      },
      {
        name: 'Tatooine',
        population: '200000',
        terrain: 'desert'
      },
      {
        name: 'Endor',
        population: '30000000',
        terrain: 'forests, mountains, lakes'
      }
    ] as Planet[];

    const { getAllByText } = render(
      <MemoryRouter>
        <Results items={items}></Results>
      </MemoryRouter>
    );

    expect(getAllByText('Population:').length).toBe(3);
  });

  it('appropriate message is displayed if no cards are present', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Results items={[]}></Results>
      </MemoryRouter>
    );

    expect(getByText('Nothing was found')).toBeInTheDocument();
  });

  it('renders the relevant card data', () => {
    const items = [
      {
        name: 'Dagobah',
        population: 'unknown',
        terrain: 'swamp, jungles'
      }
    ] as Planet[];

    const { getByText } = render(
      <MemoryRouter>
        <Results items={items}></Results>
      </MemoryRouter>
    );

    expect(getByText('Dagobah')).toBeInTheDocument();
    expect(getByText('unknown')).toBeInTheDocument();
    expect(getByText('swamp, jungles')).toBeInTheDocument();
  });
});
