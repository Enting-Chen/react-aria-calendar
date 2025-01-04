import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
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
  return <CalendarComponent />;
}

export default App;
