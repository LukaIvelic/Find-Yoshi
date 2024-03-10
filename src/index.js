import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import BackgroundHandler from './base/BackgroundHandler/BackgroundHandler';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackgroundHandler></BackgroundHandler>
  </React.StrictMode>
);