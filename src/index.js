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
  apiKey: 'AIzaSyBuzKacaR91vUPumT1eOOyyend0gpk7uzY',
  authDomain: 'ddip-a961a.firebaseapp.com',
  databaseURL: 'https://ddip-a961a.firebaseio.com',
  storageBucket: 'ddip-a961a.appspot.com',
  messagingSenderId: '969560793396'
};

firebase.initializeApp(config);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);
