import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ThemeContext } from '../../store/ThemeContext';
import { ThemeSwitch } from './ThemeSwitch';
import { ReactNode, useState } from 'react';
import userEvent from '@testing-library/user-event';

function ContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

describe('ThemeSwitch', () => {
  it('displays correctly', () => {
    const { getByAltText } = render(
      <ContextProvider>
        <ThemeSwitch />
      </ContextProvider>
    );

    expect(getByAltText('moon')).toBeInTheDocument();
    expect(getByAltText('sun')).toBeInTheDocument();
  });

  it('switches correctly', async () => {
    const { getByAltText } = render(
      <ContextProvider>
        <ThemeSwitch />
      </ContextProvider>
    );
    const user = userEvent.setup();
    const switchElem = getByAltText('moon').parentElement;
    const wrapper = switchElem?.parentElement?.parentElement;
    if (!wrapper) throw new Error('wrapper not found');

    expect(switchElem).toHaveStyle(`
      left: 0;
      background-color: rgb(255, 255, 255);
      `);

    await user.click(wrapper);

    expect(switchElem).toHaveStyle(`
        background-color: rgb(50, 50, 50);
        left: calc(100% - 3rem);
      `);
  });
});
