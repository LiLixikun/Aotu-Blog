import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router'
import * as serviceWorker from './serviceWorker';
import './mock'
import { Provider } from 'react-redux'
import store from '@/redux/store'
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

// replace(/#|?.*$/g,'')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
