import React, { useEffect, useState } from "react";
import Calendar from "./components/Calendar";

const CalendarContainer = ({ companyId }) => {
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/companies/${companyId}`);
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
