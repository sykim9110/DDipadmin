import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import DDipMain from './containers/DDipMain';
import DDipDashboard from './containers/DDipDashboard';
import DDipAnalytics from './containers/DDipAnalytics';
import DDipStatement from './containers/DDipStatement';
import DDipUser from './containers/DDipUser';
import DDipRestaurant from './containers/DDipRestaurant';
import RestaurantDashboard from './containers/RestaurantDashboard';
import RestaurantListView from './containers/RestaurantListView';
import RestaurantRegister from './containers/RestaurantRegister';
import UserListView from './containers/UserListView';
import UserDashboard from './containers/UserDashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DDipMain} />
    <Route path="dashboard" component={DDipDashboard} />
    <Route path="analytics" component={DDipAnalytics} />
    <Route path="statement" component={DDipStatement} />
    <Route path="user" component={DDipUser}>
      <Route path="dashboard" component={UserDashboard} />
      <Route path="list" component={UserListView} />
    </Route>
    <Route path="restaurant" component={DDipRestaurant}>
      <Route path="dashboard" component={RestaurantDashboard} />
      <Route path="list" component={RestaurantListView} />
      <Route path="add" component={RestaurantRegister} />
    </Route>
  </Route>
);
