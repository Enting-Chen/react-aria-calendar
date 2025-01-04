import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import CalendarContainer from './CalendarContainer';
import CalendarComponent from './CalendarComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:company" element={<CalendarWithCompany/>}/>
      </Routes>
    </Router>
  );
}

function CalendarWithCompany() {
  const { company } = useParams();
  return (
    <div>
      <h1>React Calendar Example</h1>
      <CalendarContainer companyId={company} />
      <h1>React Calendar Example</h1>
      <CalendarComponent />
    </div>
  );
}

export default App;
