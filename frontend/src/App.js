import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MemberList from './components/MemberList';
import EventList from './components/EventList';
import AddMember from './components/AddMember';
import AddEvent from './components/AddEvent';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/members" component={MemberList} />
          <Route path="/events" component={EventList} />
          <Route path="/add-member" component={AddMember} />
          <Route path="/add-event" component={AddEvent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
