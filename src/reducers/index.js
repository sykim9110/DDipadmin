import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './UserReducer';

export default combineReducers({
  user: UserReducer,
  form: formReducer
});
