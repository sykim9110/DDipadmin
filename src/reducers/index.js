import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './UserReducer';
import RestaurantFormReducer from './RestaurantFormReducer';
import RestaurantListReducer from './RestaurantListReducer';

export default combineReducers({
  user: UserReducer,
  restaurantForm: RestaurantFormReducer,
  restaurantList: RestaurantListReducer,
  form: formReducer
});
