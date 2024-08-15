import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home/Home.tsx';
import { Background } from './components/Background/Background.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { Controlled } from './components/Controlled/Controlled.tsx';
import { Uncontrolled } from './components/Uncontrolled/Uncontrolled.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'controlled',
        element: <Controlled />
      },
      {
        path: 'uncontrolled',
        element: <Uncontrolled />
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
