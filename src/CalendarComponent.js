import React, { useEffect, useState } from "react";
import { today, getLocalTimeZone } from '@internationalized/date';
import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';


const CalendarComponent = ({ companyId }) => {
  const [color, setColor] = useState("#007bff");

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`https://calendar-backend-enting.vercel.app/companies/${companyId}`);
        // const response = await fetch(`http://localhost:3001/companies/${companyId}`);
        const data = await response.json();
        setColor(data.color);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, [companyId]);

  return (
    <div
      style={{
        '--highlight-background': color,
      }}
    >
      <Calendar aria-label="Appointment date" defaultValue={today(getLocalTimeZone())}>
        <header>
          <Button slot="previous">◀</Button>
          <Heading/>
          <Button slot="next">▶</Button>
        </header>
        <CalendarGrid>
          {date => <CalendarCell date={date}/>}
        </CalendarGrid>
      </Calendar>
    </div>
  );
}

export default CalendarComponent;
