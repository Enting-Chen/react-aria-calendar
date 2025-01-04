import React from 'react';
import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';

function CalendarComponent() {
  return (
    <Calendar aria-label="Appointment date">
      <header>
        <Button slot="previous">◀</Button>
        <Heading />
        <Button slot="next">▶</Button>
      </header>
      <CalendarGrid>
        {(date) => (
          <CalendarCell
            date={date}
            onPress={() => state.setSelectedDate(date)}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              textAlign: 'center',
              backgroundColor: state.isSelected(date) ? '#007bff' : 'transparent',
              color: state.isSelected(date) ? '#fff' : '#000',
            }}
          />
        )}
      </CalendarGrid>
    </Calendar>
  );
}

export default CalendarComponent;
