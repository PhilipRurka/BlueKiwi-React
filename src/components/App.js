import React, { useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Header, Footer } from '../components';
import Router from '../router/Router';
import { isObjEmpty } from '../utils/helper.utils';
import { connect } from 'react-redux';
import { updateLists } from '../utils';

export default connect(({ productsList }) => ({
    /** Redux */
  productsList
}), (dispatch) => ({
  updateLists: (payload) => dispatch(updateLists(payload))
}))(({
  /** Props */
  updateLists,
  productsList
}) => {
  /** Styles Styles Styles Styles Styles */
  const GlobalWrapper = styled.div({
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

  useEffect(() => {
    const isEmpty = (isObjEmpty(productsList));
    updateLists(isEmpty);
  }, []);

  return (
    <GlobalWrapper>
      <Header />
      <Router />
      <Footer />
    </GlobalWrapper>
  );
});