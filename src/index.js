import React from 'react';
import ReactDOM from 'react-dom/client';  // Use the 'client' entry point
import './index.css';
import App from './App';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the `root.render` method to render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
