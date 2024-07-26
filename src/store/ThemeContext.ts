import { createContext } from 'react';

export const ThemeContext = createContext<{
  theme: 'dark' | 'light';
  setTheme?: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}>({ theme: 'dark' });
