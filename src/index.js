import React from 'react';
import ReactDOM from 'react-dom';
import './utils/styles/normalizer.scss';
import './utils/styles/slick-slider.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './utils/redux/redux.store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
