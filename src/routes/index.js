import React from 'react';

// ROUTES
import Login from '../pages/Login';
import Home from '../pages/Home';
import Add from '../pages/Add';
import Edit from '../pages/Edit';

import { isAuthenticated } from '../services/auth';

// ROUTER
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//         );
//       }}
//     />
//   );
// };

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/edit' component={Edit} />
      </Switch>
    </Router>
  );
}
