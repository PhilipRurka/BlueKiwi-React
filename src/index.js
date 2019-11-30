import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalizer.scss';
import './styles/slick-slider.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
