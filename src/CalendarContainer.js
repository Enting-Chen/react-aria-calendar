import React, { useEffect, useState } from "react";
import Calendar from "./components/Calendar";

const CalendarContainer = ({ companyId }) => {
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`https://calendar-backend-enting.vercel.app/api/companies?id=${companyId}`);
        const data = await response.json();
        setColor(data.color);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, [companyId]);

  return <Calendar color={color} />;
};

export default CalendarContainer;
