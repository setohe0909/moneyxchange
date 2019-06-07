import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

import './assets/scss/app.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
