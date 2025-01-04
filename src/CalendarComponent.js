import React from 'react';
import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';

function CalendarComponent() {
  return (
    <Calendar aria-label="Appointment date">
      <header>
        <Button slot="previous">◀</Button>
        <Heading style={{ color: 'var(--blue)' }/>
        <Button slot="next">▶</Button>
      </header>
      <CalendarGrid>
        {date => <CalendarCell date={date} />}
      </CalendarGrid>
    </Calendar>
  );
}

export default CalendarComponent;
