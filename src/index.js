import React from 'react';
import ReactDOM from 'react-dom';
import './styles';
import { App } from './components';
import { Provider } from 'react-redux';
import { store } from './utils';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
