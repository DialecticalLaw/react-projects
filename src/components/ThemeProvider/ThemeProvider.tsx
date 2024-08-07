import { useState } from 'react';
import { ThemeContext } from '../../store/ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
