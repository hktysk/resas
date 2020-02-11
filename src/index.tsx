import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './Router';
import Reducers from './modules';

const store = createStore(Reducers);

ReactDOM.render((
  <Provider store={store}>
    <Router />
  </Provider>),
document.getElementById('root'));
