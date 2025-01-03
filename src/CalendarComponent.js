import React from 'react';
import {parseDate} from '@internationalized/date';
import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';

function CalendarComponent() {
  return (
    <Calendar aria-label="Appointment date" defaultValue={parseDate('2020-02-03')} style={{ color: 'var(--blue)' }}>
      <header>
        <Button slot="previous" style={{ color: 'var(--blue)' }}>◀</Button>
        <Heading style={{ color: 'var(--blue)' }}/>
        <Button slot="next" style={{ color: 'var(--blue)' }}>▶</Button>
      </header>
      <CalendarGrid>
        {date => <CalendarCell date={date} style={{ color: 'var(--blue)' }}/>}
      </CalendarGrid>
    </Calendar>
  );
}

export default CalendarComponent;
