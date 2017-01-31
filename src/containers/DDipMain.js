import React, { Component } from 'react';
import firebase from 'firebase';

class DDipMain extends Component {
  onClickFirebase() {
    firebase.database().ref('/profiles')
    .on('value', snapshot => {
      const result = snapshot.val();
      console.log(result);
    });
  }

  onClickfirebaseLogout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div onClick={this.onClickFirebase.bind(this)}>
        메인 페이지
        <p style={{ color: 'red' }}>관리자 사용종료시 로그아웃 필수</p>
        <button
          onClick={this.onClickfirebaseLogout.bind(this)}
          className="btn"
        >
          로그아웃
        </button>
      </div>
    );
  }
}

export default DDipMain;
