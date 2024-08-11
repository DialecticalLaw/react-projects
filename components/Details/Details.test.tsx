import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Details } from './Details';
import { Planet } from '../../interfaces';
import { createRemixStub } from '@remix-run/testing';

describe('Details', () => {
  it('clicking on a card opens a detailed card component with correct data', async () => {
    const detailsRes: Planet = await (await fetch('https://swapi.dev/api/planets/1')).json();
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: function () {
          return <Details data={detailsRes} />;
        }
      }
    ]);
    const { getByText, getByRole } = render(<RemixStub />);

    expect(getByText('Tatooine')).toBeInTheDocument();
    expect(getByText('Climate: arid')).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent('Close');
  });
});
