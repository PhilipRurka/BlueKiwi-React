import React from 'react';
import styled from '@emotion/styled/macro';
import Header from './Header';
import Router from '../Router';
import Footer from './Footer';
import { isObjEmpty } from '../utils/helper.utils';

import { connect } from 'react-redux';
import { updateLists } from '../utils/redux/redux.actions';

class App extends React.Component {

  /** Styles Styles Styles Styles Styles */
  GlobalWrapper = styled.div({
    '*': {
      '-webkitFontSmoothing' : 'antialiased',
      '-mozOsxFontSmoothing': 'grayscale',
      fontFamily: '"Roboto", sans-serif',
      letterSpacing: '0.5px'
    },
  
    'h1, h2, h3, h4, h5, label': {
      fontFamily: '"Nunito", sans-serif'
    }
  });
  /** End End End End End */

  componentWillMount = () => {
    const { props: { updateLists, productsList } } = this;
    const isEmpty = (isObjEmpty(productsList));
    updateLists(isEmpty);
  };

  render() {
    const { GlobalWrapper } = this;

    return (
      <GlobalWrapper>
        <Header />
        <Router />
        <Footer />
      </GlobalWrapper>
    )
  };
};

export default connect(({ productsList }) => ({
  productsList
}), (dispatch) => ({
  updateLists: (payload) => dispatch(updateLists(payload))
}))(App);