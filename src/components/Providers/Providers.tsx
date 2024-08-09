'use client';
import { ReactNode, useState } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { ThemeContext } from '../../store/ThemeContext';
import { SelectedItemsContext } from '../../store/SelectedItemsContext';
import { Planet } from '../../interfaces';
import { LoadingContext } from '../../store/LoadingContext';

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedItems, setSelectedItems] = useState<Planet[]>([]);
  const [isLoading, setLoading] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LoadingContext.Provider value={{ isLoading, setLoading }}>
        <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </SelectedItemsContext.Provider>
      </LoadingContext.Provider>
    </ThemeContext.Provider>
  );
}
