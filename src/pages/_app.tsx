import type { InferGetServerSidePropsType } from 'next';
import './styles.css';
import type { AppProps } from 'next/app';
import { getServerSideProps } from '.';
import { ThemeContext } from '../store/ThemeContext';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { useState } from 'react';

export default function AppPage({
  pageProps,
  Component
}: AppProps<InferGetServerSidePropsType<typeof getServerSideProps>>) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ThemeContext.Provider>
  );
}
