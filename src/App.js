import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import CalendarComponent from './CalendarComponent';
import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';

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
  return <CalendarComponent companyId={ company }/>;
}

export default App;