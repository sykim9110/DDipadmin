// import _ from 'lodash';
// import * as firebase from 'firebase';
//
// import {
//   USER_INFO_LOADED
// } from './types';
//
// export const usersLoad = () => {
//   const db = firebase.database();
//   const dbRef = db.ref().child('data');
//   // 루트 데이터베이스로 간주한다.
//
//   return (dispatch) => {
//     dispatch({ type: USER_INFO_LOADED });
//     DB.once('value', snapshot => {
//       snapshot.val();
//     });
//   };
// };
