import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarContainer from './CalendarContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:company" component={CalendarWithCompany} />
      </Switch>
    </Router>
  );
}

function CalendarWithCompany({ match }) {
  const { company } = match.params; 
  return <CalendarContainer companyId={company} />;
}

export default App;
