import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { ThemeContextProvider } from './context/ThemeContext';
import './utils/styles/reset.css';
import './utils/styles/font.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
