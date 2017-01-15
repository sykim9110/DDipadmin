import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import DDipAdmin from './containers/DDipAdmin';
import RestaurantForm from './components/RestaurantForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DDipAdmin} />
    <Route path="restaurant" component={RestaurantForm} />
  </Route>
);
