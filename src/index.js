import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import BackgroundHandler from './base/BackgroundHandler/BackgroundHandler';
import Yoshi from './base/YoshiModel/Yoshi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackgroundHandler></BackgroundHandler>
    <Yoshi></Yoshi>
  </React.StrictMode>
);