import firebase from 'firebase';

import {
    LOGGED_IN,
    LOGGED_OUT
} from './types';

export const logged = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({ type: LOGGED_IN, payload: user.uid });
            } else {
                dispatch({ type: LOGGED_OUT });
            }
        });
    };
};
