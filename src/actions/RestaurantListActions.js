import _ from 'lodash';
import firebase from 'firebase';

import {
  RESTAURANT_LOADED,
  RESTAURANT_LOADED_SUCCESS,
  RESTAURANT_LOADED_FAIL
} from './types';

export const restaurantsLoad = () => {
  return (dispatch) => {
    dispatch({ type: RESTAURANT_LOADED });
    return new Promise((resolve, reject) => {
      firebase.database().ref('restaurantDashboard')
      .on('value', snapshot => {
        const DB = snapshot.val();

        const restaurantArray = _.map(DB, (val, uid) => {
          return { ...val, uid };
        });

        if (restaurantArray) {
          resolve(restaurantArray);
        } else {
          reject('서버 에러');
        }
      });
    }).then(restaurantArray => {
      firebase.database().ref('restaurantsTest/인천/연수구/송도동')
      .on('value', snapshot => {
        const DB = snapshot.val();

        const restaurantsArrayConvert = (db, categorize) => {
          const result = _.map(db[categorize], (val, uid) => {
            return { ...val, uid };
          });
          return result;
        };

        const ko = restaurantsArrayConvert(DB, '한식');
        const ja = restaurantsArrayConvert(DB, '일식');
        const zh = restaurantsArrayConvert(DB, '중식');
        const en = restaurantsArrayConvert(DB, '양식');
        const sc = restaurantsArrayConvert(DB, '분식');
        const ch = restaurantsArrayConvert(DB, '치킨');
        const pi = restaurantsArrayConvert(DB, '피자');
        const as = restaurantsArrayConvert(DB, '아시아퓨전');

        const all = ko.concat(ja, zh, en, sc, ch, pi, as);
        dispatch({ type: RESTAURANT_LOADED_SUCCESS, payload: [restaurantArray, all] });
      });
    }).catch(err => {
      dispatch({ type: RESTAURANT_LOADED_FAIL, payload: err });
    });
  };
};
