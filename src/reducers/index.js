import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './UserReducer';
import RestaurantFormReducer from './RestaurantFormReducer';
import RestaurantListReducer from './RestaurantListReducer';
import RestaurantDashboardReducer from './RestaurantDashboardReducer';

export default combineReducers({
  user: UserReducer,
  restaurantForm: RestaurantFormReducer,
  restaurantList: RestaurantListReducer,
  restaurantDashboard: RestaurantDashboardReducer,
  form: formReducer
});
