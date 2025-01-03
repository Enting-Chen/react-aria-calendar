import React from "react";
import { useCalendar } from "@react-aria/calendar";
import { useCalendarState } from "@react-stately/calendar";
import styled from "styled-components";
import { GregorianCalendar } from '@internationalized/date';

const CalendarWrapper = styled.div`
  background-color: ${({ color }) => color || "#fff"};
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const Cell = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  ${({ isSelected }) => isSelected && "background-color: #007bff; color: #fff;"}
`;

const Calendar = ({ color }) => {
  const state = useCalendarState({
    locale: 'en-US', // or whatever locale you want
    createCalendar: (name: string) => new GregorianCalendar(), // Example: creating a Gregorian calendar
    // You can also provide other optional props here if needed
  });

  // create an empty props object
  const props = {};

  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state);

  return (
    <CalendarWrapper color={color} {...calendarProps}>
      <Header>
        <button {...prevButtonProps}>{"<"}</button>
        <h3>{title}</h3>
        <button {...nextButtonProps}>{">"}</button>
      </Header>
      <Grid>
        {[...Array(30).keys()].map((_, index) => (
          <Cell key={index}>{index + 1}</Cell>
        ))}
      </Grid>
    </CalendarWrapper>
  );
};

export default Calendar;
