import firebase from 'firebase';

import {
  LOGIN_USER,
  LOGGED_IN
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

    firebase.auth().signInWithEmailAndPassword(id, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
      });
  };
};
