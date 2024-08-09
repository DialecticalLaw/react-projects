'use client';
import { ReactNode, useState } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { ThemeContext } from '../../store/ThemeContext';
import { SelectedItemsContext } from '../../store/SelectedItemsContext';
import { Planet } from '../../interfaces';

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedItems, setSelectedItems] = useState<Planet[]>([]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </SelectedItemsContext.Provider>
    </ThemeContext.Provider>
  );
}
