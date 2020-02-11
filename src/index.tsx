import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { save, load } from 'redux-localstorage-simple';
import Router from './Router';
import Reducers from './modules';

const syncStore = {
  states: ['prefectures'],
  namespace: 'resas',
  disableWarnings: true,
};

const createStoreWithMiddleWare = applyMiddleware(save(syncStore))(createStore);
const store = createStoreWithMiddleWare(Reducers, load(syncStore));

ReactDOM.render((
  <Provider store={store}>
    <Router />
  </Provider>),
document.getElementById('root'));
