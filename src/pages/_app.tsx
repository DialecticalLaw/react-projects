import { App } from '../components/App/App';
import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider';
import { ApiResponse } from '../interfaces';
import './styles.css';
import type { AppProps } from 'next/app';

export default function AppPage({ pageProps }: AppProps<ApiResponse>) {
  return (
    <ThemeProvider>
      <App apiRes={pageProps} />
    </ThemeProvider>
  );
}
