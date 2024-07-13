import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Details } from './components/Details/Details.tsx';
import { App } from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ element: <Details /> }]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
