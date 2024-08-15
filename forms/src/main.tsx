import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home/Home.tsx';
import { Background } from './components/Background/Background.tsx';

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
    <Background>
      <RouterProvider router={router} />
    </Background>
  </StrictMode>
);
