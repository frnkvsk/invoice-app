import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LightingProvider } from './context/lighting.context';

ReactDOM.render(  
  <LightingProvider>
    <App />
  </LightingProvider>,
  document.getElementById('root')
);
