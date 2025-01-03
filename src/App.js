import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function CalendarWithCompany({ match }) {
  const { company } = match.params; 
  return <CalendarContainer companyId={company} />;
}

export default App;
