import React from 'react';
import Login from '../pages/Login';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
