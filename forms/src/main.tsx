import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home/Home.tsx';
import { Background } from './components/Background/Background.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'controlled',
        element: <div />
      },
      {
        path: 'uncontrolled',
        element: <div />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Background>
        <RouterProvider router={router} />
      </Background>
    </Provider>
  </StrictMode>
);
