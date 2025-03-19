import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './HomePage.js';  // Import HomePage component
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>  {/* Wrap everything in Router */}
    <App />  {/* Your HomePage component */}
  </Router>
);
