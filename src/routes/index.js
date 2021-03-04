import React from 'react';

// ROUTES
import Login from '../pages/Login';
import Home from '../pages/Home';
import Add from '../pages/Add';

// ROUTER
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/add' component={Add} />
      </Switch>
    </Router>
  );
}
