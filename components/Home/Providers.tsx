import { ThemeContext } from '../../store/ThemeContext';
import { Planet } from '../../interfaces';
import { ReactNode, useState } from 'react';
import { LoadingContext } from '../../store/LoadingContext';
import { SelectedItemsContext } from '../../store/SelectedItemsContext';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedItems, setSelectedItems] = useState<Planet[]>([]);
  const [isLoading, setLoading] = useState(true);

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
