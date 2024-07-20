import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { routerConfig } from '../../routes/routerConfig';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Details', () => {
  it('clicking on a card opens a detailed card component with correct data and it triggers an additional API call', async () => {
    const detailsValues = [
      'Diameter: 10465',
      'Gravity: 1 standard',
      'Surface water: 1',
      'Rotation period: 23',
      'Orbital period: 304'
    ];
    const user = userEvent.setup();
    const router = createMemoryRouter(routerConfig);
    const { findByText, getByText } = render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    await waitFor(() => {
      const card = getByText('Tatooine').parentElement;
      user.click(card as HTMLElement);
    });

    expect(await findByText('Climate: arid')).toBeInTheDocument();
    detailsValues.forEach((value) => {
      expect(getByText(value)).toBeInTheDocument();
    });
  });

  it('loading indicator is displayed while fetching data', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routerConfig);
    const { findByText, findByAltText } = render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const card = (await findByText('Alderaan')).parentElement;
    user.click(card as HTMLElement);

    expect(await findByAltText('loader')).toBeInTheDocument();
  });

  it('clicking the close button hides the component', async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routerConfig);
    const { findByText } = render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const card = (await findByText('Tatooine')).parentElement;
    user.click(card as HTMLElement);
    const closeBtn = await findByText('Close');
    await user.click(closeBtn);

    expect(closeBtn).not.toBeInTheDocument();
  });
});
