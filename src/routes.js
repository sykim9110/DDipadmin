import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import DDipMain from './containers/DDipMain';
import DDipDashboard from './containers/DDipDashboard';
import DDipAnalytics from './containers/DDipAnalytics';
import DDipStatement from './containers/DDipStatement';
import DDipUser from './containers/DDipUser';
import DDipRestaurant from './containers/DDipRestaurant';
// import RestaurantRegister from './containers/RestaurantRegister';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DDipMain} />
    <Route path="dashboard" component={DDipDashboard} />
    <Route path="analytics" component={DDipAnalytics} />
    <Route path="statement" component={DDipStatement} />
    <Route path="user" component={DDipUser} />
    <Route path="restaurant" component={DDipRestaurant} />
  </Route>
);
