import _ from 'lodash';
import firebase from 'firebase';

export const restaurantsLoad = () => {
  return (dispatch) => {
    firebase.database().ref('restaurantsTest/인천/연수구/송도동')
      .on('value', snapshot => {
        console.log(snapshot.val());
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

        const plus = { ko, ja };
        console.log(plus);
        console.log(ko, ja, zh);
      });
  };
};
