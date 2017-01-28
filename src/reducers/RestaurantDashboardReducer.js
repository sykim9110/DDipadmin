import {
  RESTAURANT_DASHBOARD_LOADED
} from '../actions/types';

export type State = {
  loading: boolean,
  data: ?Object,
  err: ?String
}

const INITIAL_STATE = {
  loading: false,
  data: null,
  err: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTAURANT_DASHBOARD_LOADED:
      return { ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state;
  }
};
