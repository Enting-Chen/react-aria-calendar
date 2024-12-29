import React from "react";
import CalendarContainer from "./CalendarContainer";

const App = () => {
  return (
    <div className="App">
      {/* 假设 companyId 为 1 */}
      <CalendarContainer companyId={1} />
    </div>
  );
};

export default App;
