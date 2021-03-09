import React from 'react';

// ROUTES
import Login from '../pages/Login';
import Home from '../pages/Home';
import Add from '../pages/Add';
import Edit from '../pages/Edit';

import { isAuthenticated } from '../services/auth';

// ROUTER
import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/add' component={Add} />
        <PrivateRoute path='/edit' component={Edit} />
        <Route path='*' component={() => <h1>Page not Found...</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
