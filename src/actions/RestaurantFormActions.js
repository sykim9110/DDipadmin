import firebase from 'firebase';

import {
  RESTAURANT_CREATE,
  RESTAURANT_CREATE_SUCCESS,
  RESTAURANT_CREATE_FAIL
} from './types';

export const restaurantCreate = (props) => {
  const {
    city,
    gu,
    dong,
    categorize,
    name,
    phone,
    address,
    lat,
    lon,
    bronzeCoupon,
    silverCoupon,
    goldCoupon,
    platinumCoupon,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun,
    all,
    storehourStart,
    storehourEnd
  } = props.values;
  const infos = [city, gu, dong, categorize, name, phone, address];
  const latlon = [lat, lon];
  const coupons = [bronzeCoupon, silverCoupon, goldCoupon, platinumCoupon];
  const days = [mon, tue, wed, thu, fri, sat, sun, all];
  const times = [storehourStart, storehourEnd];

  const data1 = infos.every(info => { return info !== undefined; });
  const data2 = latlon.every(data => { return data !== undefined; });
  const data3 = times.every(time => { return time !== undefined; });
  const data4 = days.some(day => { return day !== undefined; });
  const data5 = coupons.every(coupon => { return coupon !== undefined; });

  let storeday = [];
  let a, b, c, d, e, f, g;

  if (mon) { a = 1; }
  if (tue) { b = 2; }
  if (wed) { c = 3; }
  if (thu) { d = 4; }
  if (fri) { e = 5; }
  if (sat) { f = 6; }
  if (sun) { g = 0; }

  if (all) {
    storeday = [0, 1, 2, 3, 4, 5, 6];
  } else {
    const numbers = [g, a, b, c, d, e, f];
    storeday = numbers.filter(number => {
      return number !== undefined;
    });
  }

  const storehourString = [storehourStart, storehourEnd];
  const start = Number(storehourStart.slice(0, 2));
  const end = Number(storehourEnd.slice(0, 2));

  const storehourArrayConvert = (startTime, endTime) => {
    const length = endTime - startTime;
    let num = startTime;
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(num++);
    }

    return result;
  };

  const storehour = storehourArrayConvert(start, end);

  return (dispatch) => {
    dispatch({ type: RESTAURANT_CREATE });

    if (data1 && data2 && data3 && data4 && data5) {
      firebase.database().ref(`restaurantsTest/${city}/${gu}/${dong}/${categorize}`)
        .push({
          name,
          phone,
          address,
          latlon,
          storehour,
          storehourString,
          storeday,
          coupons
        })
        .then(() => dispatch({ type: RESTAURANT_CREATE_SUCCESS }))
        .catch(err => dispatch({ type: RESTAURANT_CREATE_FAIL, payload: err }));
    } else if (!data1) {
      dispatch({
        type: RESTAURANT_CREATE_FAIL,
        payload: '지역, 구, 동, 분류, 이름, 전화, 주소 중 미기입'
      });
    } else if (!data2) {
      dispatch({
        type: RESTAURANT_CREATE_FAIL,
        payload: '좌표 미기입'
      });
    } else if (!data3) {
      dispatch({
        type: RESTAURANT_CREATE_FAIL,
        payload: '영업 시간 미기입'
      });
    } else if (!data4) {
      dispatch({
        type: RESTAURANT_CREATE_FAIL,
        payload: '영업 날 미기입'
      });
    } else if (!data5) {
      dispatch({
        type: RESTAURANT_CREATE_FAIL,
        payload: '쿠폰 미기입'
      });
    }
  };
};
