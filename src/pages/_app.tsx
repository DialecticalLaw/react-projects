import type { InferGetServerSidePropsType } from 'next';
import './styles.css';
import type { AppProps } from 'next/app';
import { getServerSideProps } from '.';
import { ThemeContext } from '../store/ThemeContext';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { useState } from 'react';
import { SelectedItemsContext } from '../store/SelectedItemsContext';
import { Planet } from '../interfaces';

export default function AppPage({
  pageProps,
  Component
}: AppProps<InferGetServerSidePropsType<typeof getServerSideProps>>) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedItems, setSelectedItems] = useState<Planet[]>([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </SelectedItemsContext.Provider>
    </ThemeContext.Provider>
  );
}
