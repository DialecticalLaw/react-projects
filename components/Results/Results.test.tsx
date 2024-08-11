import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Results } from './Results';
import { ApiResponse } from '../../interfaces';
import { createRemixStub } from '@remix-run/testing';

describe('Results', () => {
  it('renders the specified number of cards', async () => {
    const apiRes: ApiResponse = await (await fetch('https://swapi.dev/api/planets/')).json();
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: function () {
          return <Results items={apiRes.results} />;
        }
      }
    ]);
    const { getAllByText } = render(<RemixStub />);

    expect(getAllByText('Population:').length).toBe(2);
  });

  it('appropriate message is displayed if no cards are present', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: function () {
          return <Results items={[]} />;
        }
      }
    ]);
    const { getByText } = render(<RemixStub />);

    expect(getByText('Nothing was found')).toBeInTheDocument();
  });
});
