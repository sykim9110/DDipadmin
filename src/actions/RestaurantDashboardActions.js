import _ from 'lodash';
import firebase from 'firebase';

import {
  RESTAURANT_DASHBOARD_LOADED
} from './types';

export const dashboardRestaurantsLoad = () => {
  return (dispatch) => {
    firebase.database().ref('restaurantsTest/인천/연수구/송도동')
    .once('value', snapshot => {
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

      dispatch({
        type: RESTAURANT_DASHBOARD_LOADED,
        payload: { ko, ja, zh, en, sc, ch, pi, as }
      });
    });
  };
};
