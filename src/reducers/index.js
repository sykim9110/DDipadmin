import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './UserReducer';
import RestaurantFormReducer from './RestaurantFormReducer';

export default combineReducers({
  user: UserReducer,
  restaurantForm: RestaurantFormReducer,
  form: formReducer
});
