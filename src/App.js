import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import CalendarContainer from './CalendarContainer';

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
  return <CalendarContainer companyId={company} />;
}

export default App;
