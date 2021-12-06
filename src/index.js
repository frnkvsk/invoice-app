import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LightingProvider } from './context/lighting.context';
import { DataProvider } from './context/data.context';

ReactDOM.render(  
  <LightingProvider>
    <DataProvider>
      <App />
    </DataProvider>    
  </LightingProvider>,
  document.getElementById('root')
);
