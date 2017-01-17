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

  render() {
    return <div onClick={this.onClickFirebase.bind(this)}> 메인 페이지 </div>;
  }
}

export default DDipMain;
