import React from 'react';
import ReactDOM from 'react-dom';
// import i18n (needs to be bundled)
import './i18n';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
