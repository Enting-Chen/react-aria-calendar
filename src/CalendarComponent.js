import {parseDate} from '@internationalized/date';
import React from 'react';
import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';

function CalendarComponent() {
  return (
    <Calendar aria-label="Appointment date" value={parseDate('2020-02-03')} >
      <header>
        <Button slot="previous" >◀</Button>
        <Heading />
        <Button slot="next" >▶</Button>
      </header>
      <CalendarGrid>
        {date => <CalendarCell />}
      </CalendarGrid>
    </Calendar>
  );
}

export default CalendarComponent;
