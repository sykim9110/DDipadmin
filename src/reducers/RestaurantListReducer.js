import {
  RESTAURANT_LOADED,
  RESTAURANT_LOADED_SUCCESS,
  RESTAURANT_LOADED_FAIL,
  RESTAURANT_COUPON_ON,
  RESTAURANT_COUPON_OFF,
  RESTAURANT_COUPON_NUM_ADD,
  RESTAURANT_COUPON_NAME_MODI
} from '../actions/types';

export type State = {
  loading: boolean,
  data: ?Object,
  detail: ?Object,
  err: ?String
}

const INITIAL_STATE = {
  loading: false,
  data: null,
  detail: null,
  err: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTAURANT_LOADED:
      return { ...state, loading: true };
    case RESTAURANT_LOADED_SUCCESS:
      return { ...state,
        loading: false,
        data: action.payload[0],
        detail: action.payload[1]
      };
    case RESTAURANT_LOADED_FAIL:
      return { ...INITIAL_STATE, err: action.payload };
    case RESTAURANT_COUPON_ON:
      return { ...state, loading: false };
    case RESTAURANT_COUPON_OFF:
      return { ...state, loading: false };
    case RESTAURANT_COUPON_NUM_ADD:
      return { ...state, loading: false };
    case RESTAURANT_COUPON_NAME_MODI:
      return { ...state, loading: false };
    default:
      return state;
  }
};
