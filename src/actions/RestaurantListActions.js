import _ from 'lodash';
import firebase from 'firebase';

import {
  RESTAURANT_LOADED,
  RESTAURANT_LOADED_SUCCESS,
  RESTAURANT_LOADED_FAIL,
  RESTAURANT_COUPON_ON,
  RESTAURANT_COUPON_OFF,
  RESTAURANT_COUPON_NUM_ADD,
  RESTAURANT_COUPON_NAME_MODI
} from './types';

export const restaurantsLoad = (op) => {
  return (dispatch) => {
    dispatch({ type: RESTAURANT_LOADED });
    return new Promise((resolve, reject) => {
      firebase.database().ref('restaurantDashboard')
      .once('value', snapshot => {
        const DB = snapshot.val();

        const restaurantArray = _.map(DB, (val, uid) => {
          return { ...val, uid };
        });

        if (restaurantArray) {
          console.log(restaurantArray);
          resolve(restaurantArray);
        } else {
          reject('서버 에러');
        }
      });
    }).then(restaurantArray => {
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

        const all = ko.concat(ja, zh, en, sc, ch, pi, as);

        const restaurantSort = (x, arr, o) => {
          if (x === o) {
            arr.sort((a, b) => {
              if (a[o] < b[o]) {
                return -1;
              } else if (a[o] > b[o]) {
                return 1;
              }
              return 0;
            });
          }
        };

        restaurantSort(op, restaurantArray, 'name');
        restaurantSort(op, restaurantArray, 'categorize');

        if (op === undefined) {
          restaurantArray.sort((a, b) => {
            if (a.admin.coupon > b.admin.coupon) {
              return -1;
            } else if (a.admin.coupon < b.admin.coupon) {
              return 1;
            }
            return 0;
          });
        }

        dispatch({ type: RESTAURANT_LOADED_SUCCESS, payload: [restaurantArray, all] });
      });
    }).catch(err => {
      dispatch({ type: RESTAURANT_LOADED_FAIL, payload: err });
    });
  };
};

export const buttonCouponOn = (uid) => {
  return (dispatch) => {
    firebase.database().ref(`restaurantDashboard/${uid}/admin`)
    .once('value', snapshot => {
      const DB = snapshot.val();
      firebase.database().ref(`restaurantDashboard/${uid}/admin`)
      .set({ ...DB, coupon: true })
      .then(() => dispatch({ type: RESTAURANT_COUPON_ON }));
    });
  };
};

export const buttonCouponOff = (uid) => {
  return (dispatch) => {
    firebase.database().ref(`restaurantDashboard/${uid}/admin`)
    .once('value', snapshot => {
      const DB = snapshot.val();
      firebase.database().ref(`restaurantDashboard/${uid}/admin`)
      .set({ ...DB, coupon: false })
      .then(() => dispatch({ type: RESTAURANT_COUPON_OFF }));
    });
  };
};

export const buttonCouponNumAdd = (city, gu, dong, categorize, uid, b, s, g, p) => {
  const rootRef = firebase.database().ref().child('restaurants');
  const quantityRef = rootRef.child(`dashboard/${uid}/quantity`);

  let quantityData;
  let resultData;

  quantityRef.once('value', snapshot => {
    console.log(snapshot.val());
    quantityData = snapshot.val();
    resultData = {
      ...quantityData,
      gray: quantityData.gray + Number(b),
      blue: quantityData.blue + Number(s),
      purple: quantityData.purple + Number(g),
      gold: quantityData.gold + Number(p)
    };
  });

  let updates = {};
  updates[`restaurants/dashboard/${uid}/quantity`] = resultData;
  updates[`restaurants/search/all/${uid}/quantity`] = resultData;
  updates[`restaurants/search/${city}/${gu}/${dong}/all/${uid}/quantity`] = resultData;
  updates[`restaurants/search/${city}/${gu}/${dong}/${categorize}/${uid}/quantity`] = resultData;

  return (dispatch) => {
    firebase.database().ref().update(updates)
      .then(() => dispatch({ type: RESTAURANT_COUPON_NUM_ADD }))
      .catch(err => console.log(err));
  };
};

export const buttonCouponNameModi = (uid, ca, b, s, g, p) => {
  return (dispatch) => {
    const DashboardModi = new Promise((resolve, reject) => {
      firebase.database().ref(`restaurantDashboard/${uid}/coupons`)
      .set([b, s, g, p])
      .then(() => resolve())
      .catch(err => reject(err));
    });
    const restaurantsModi = new Promise((resolve, reject) => {
      firebase.database().ref(`restaurantsTest/인천/연수구/송도동/${ca}/${uid}/coupons`)
      .set([b, s, g, p])
      .then(() => resolve())
      .catch(err => reject(err));
    });

    Promise.all([
      DashboardModi,
      restaurantsModi
    ]).then(() => dispatch({ type: RESTAURANT_COUPON_NAME_MODI }));
  };
};
