import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SelectedItemsFlyout } from './SelectedItemsFlyout';
import { SelectedItemsContext } from '../../store/SelectedItemsContext';
import { Planet } from '../../interfaces';

describe('SelectedItemsFlyout', () => {
  it('displays correctly', () => {
    const planetsArray = [{}, {}, {}] as Planet[];
    const clearSelectedItems = () => {
      planetsArray.length = 0;
    };
    global.URL.createObjectURL = vi.fn();
    global.URL.revokeObjectURL = vi.fn();

    const { getByText } = render(
      <SelectedItemsContext.Provider
        value={{ selectedItems: planetsArray, setSelectedItems: clearSelectedItems }}
      >
        <SelectedItemsFlyout />
      </SelectedItemsContext.Provider>
    );

    expect(getByText('items are selected').parentElement).toHaveTextContent('3 items are selected');
  });
});
