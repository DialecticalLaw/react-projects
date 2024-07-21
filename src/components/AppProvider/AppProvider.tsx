import styles from './AppProvider.module.css';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routerConfig } from '../../routes/routerConfig';
import { ThemeContext } from '../../store/ThemeContext';
import { useState } from 'react';

const router = createBrowserRouter(routerConfig);

export function AppProvider() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <div className={`${styles.app} ${theme === 'light' ? styles.light : ''}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeContext.Provider>
    </div>
  );
}
