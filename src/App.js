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
  // return <CalendarComponent />;
  return (
    <Calendar aria-label="Appointment date">
      <header>
        <Button slot="previous">◀</Button>
        <Heading />
        <Button slot="next">▶</Button>
      </header>
      <CalendarGrid>
        {(date) => <CalendarCell date={date} />}
      </CalendarGrid>
    </Calendar>
  );
}

export default App;
