import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import firebase from 'firebase';
import reducers from './reducers';
import routes from './routes';

const config = {
    apiKey: 'AIzaSyBh4Pyze3iagqodHWqjQMOMje7kgR1mtQ0',
    authDomain: 'logic-f71cb.firebaseapp.com',
    databaseURL: 'https://logic-f71cb.firebaseio.com',
    storageBucket: 'logic-f71cb.appspot.com',
    messagingSenderId: '953795730435'
};

firebase.initializeApp(config);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);
