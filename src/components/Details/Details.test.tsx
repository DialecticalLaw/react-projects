import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { routerConfig } from '../../routes/routerConfig';
import { render } from '@testing-library/react';

describe('Details', () => {
  it('clicking on a card opens a detailed card component', async () => {
    const detailsValues = [
      'Diameter: 10465',
      'Gravity: 1 standard',
      'Surface water: 1',
      'Rotation period: 23',
      'Orbital period: 304'
    ];
    const user = userEvent.setup();
    const router = createMemoryRouter(routerConfig);
    const { findByText, getByText } = render(<RouterProvider router={router} />);

    const card = (await findByText('Tatooine')).parentElement;
    user.click(card as HTMLElement);

    expect(await findByText('Climate: arid')).toBeInTheDocument();
    detailsValues.forEach((value) => {
      expect(getByText(value)).toBeInTheDocument();
    });
  });
});
