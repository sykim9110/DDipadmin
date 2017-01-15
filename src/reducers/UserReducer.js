import {
  LOGGED_IN,
  LOGGED_OUT,
} from '../actions/types';

export type State = {
  isLoggedIn: boolean,
  hasSkippedLogin: boolean,
  loading: boolean,
  id: ?String
}

const INITIAL_STATE = {
  isLoggedIn: false,
  hasSkippedLogin: false,
  loading: true,
  id: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state,
        isLoggedIn: true,
        hasSkippedLogin: false,
        loading: false,
        id: action.payload
      };
    case LOGGED_OUT:
      return { ...INITIAL_STATE, loading: false };
    default:
      return state;
  }
};
