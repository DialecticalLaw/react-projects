import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { AppProvider } from './components/AppProvider/AppProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
