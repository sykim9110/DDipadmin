import {
  LOGGED_IN,
  LOGGED_OUT,
  LOGGED_FAIL,
  LOGIN_USER
} from '../actions/types';

export type State = {
  isLoggedIn: boolean,
  loading: boolean,
  id: ?String,
  err: ?String
}

const INITIAL_STATE = {
  isLoggedIn: false,
  loading: true,
  id: null,
  err: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGGED_IN:
      return { ...state,
        isLoggedIn: true,
        hasSkippedLogin: false,
        loading: false,
        id: action.payload
      };
    case LOGGED_OUT:
      return { ...INITIAL_STATE, loading: false };
    case LOGGED_FAIL:
      return { ...INITIAL_STATE, loading: false, err: action.payload };
    default:
      return state;
  }
};
