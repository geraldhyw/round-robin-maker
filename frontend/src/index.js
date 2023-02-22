import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'material-symbols';
import { TablesContextProvider } from './contexts/TablesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TablesContextProvider>
      <App />
    </TablesContextProvider>
  </React.StrictMode>
);
