import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import '@/styles/reset.scss';
import '@/styles/index.scss';
import '@/styles/variables.css';
import '@/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
