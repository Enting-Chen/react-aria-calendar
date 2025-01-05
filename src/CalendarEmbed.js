import React from 'react';
import ReactDOM from 'react-dom/client';
import CalendarComponent from './CalendarComponent';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CalendarComponent companyId={1} />
  </React.StrictMode>
);