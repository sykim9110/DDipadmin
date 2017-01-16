import firebase from 'firebase';

import {
  LOGIN_USER,
  LOGGED_IN,
  LOGGED_FAIL
} from './types';

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGGED_IN,
    payload: user.uid
  });
};

export const loginUser = (id, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    if (id === 'admin@admin.com') {
      firebase.auth().signInWithEmailAndPassword(id, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        dispatch({ type: LOGGED_FAIL, payload: error.message });
      });
    } else {
      dispatch({ type: LOGGED_FAIL, payload: 'no admin' });
    }
  };
};
