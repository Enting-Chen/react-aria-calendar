// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css"; // 可选，如果有全局样式

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


import React from 'react';
import ReactDOM from 'react-dom/client';  // Use the 'client' entry point
import './CalendarStyle.css';
import App from './App';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the `root.render` method to render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
