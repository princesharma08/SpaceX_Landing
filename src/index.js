import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './Components/Context';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App/>
      </Router>
    </AppProvider>
  </React.StrictMode>,
);
