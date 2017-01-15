import React, { Component } from 'react';
import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBh4Pyze3iagqodHWqjQMOMje7kgR1mtQ0',
    authDomain: 'logic-f71cb.firebaseapp.com',
    databaseURL: 'https://logic-f71cb.firebaseio.com',
    storageBucket: 'logic-f71cb.appspot.com',
    messagingSenderId: '953795730435'
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        first app 시작합니다 첫번째 앱
      </div>
    );
  }
}

export default App;
