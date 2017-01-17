import {
  RESTAURANT_CREATE,
  RESTAURANT_CREATE_SUCCESS,
  RESTAURANT_CREATE_FAIL
} from '../actions/types';

export type State = {
  loading: boolean,
  message: ?String,
  err: ?String
}

const INITIAL_STATE = {
  loading: false,
  message: null,
  err: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTAURANT_CREATE:
      return { ...state, loading: true };
    case RESTAURANT_CREATE_SUCCESS:
      return { ...state, loading: false, message: '추가 완료'
      };
    case RESTAURANT_CREATE_FAIL:
      return { ...INITIAL_STATE,
        loading: false,
        message: '추가 실패',
        err: action.payload
      };
    default:
      return state;
  }
};
