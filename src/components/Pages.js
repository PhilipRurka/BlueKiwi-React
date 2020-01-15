import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';
import BreadCrums from './BreadCrums';
import LandingPage from '../pages/Landing.page';
import Discovery from '../pages/Discovery.page';
import Product from '../pages/Product.page';
import Wishlist from '../pages/Wishlist.page';
import DiscoveryOption from '../pages/DiscoveryOption.page';
import { isObjEmpty } from '../utils/helper.utils';
import {
  LANDING_PAGE,
  DISCOVER_PAGE,
  DISCOVER_OPTION_PAGE,
  WISHLIST_PAGE,
  PRODUCT_PAGE
} from '../Router/Router.constants';

/** Styles Styles Styles Styles Styles */
const PagesWrapper = styled.div({
  paddingTop: '80px'
});
/** End End End End End */

export default connect(({ currentPathname, productsList, discoveriesList, currentHistory }) => ({
  /** Redux */
  currentPathname,
  productsList,
  discoveriesList,
  currentHistory
}))(({
  /** Props */
  page,
  match,
  currentPathname,
  productsList,
  discoveriesList,
  currentHistory
}) => {
  let chosenPage;

  window.scrollTo(0, 0);

  if(page === LANDING_PAGE) {
    chosenPage = <LandingPage />

  } else if(page === DISCOVER_PAGE) {
    chosenPage = <Discovery />

  } else if(page === DISCOVER_OPTION_PAGE) {
    const selectedDiscovery = discoveriesList[match.params.option];

    if(selectedDiscovery) {
      chosenPage = <DiscoveryOption
        selectedDiscovery={selectedDiscovery} />
    } else {
      if(!isObjEmpty(discoveriesList)) {
        chosenPage = null;
        currentHistory.push(process.env.PUBLIC_URL + DISCOVER_PAGE);
      };
    };
  
  } else if(page === PRODUCT_PAGE) {
    const selectedProduct = productsList[match.params.product];

    if(match.params['0']) {
      const product = `/${match.params.product}`;
      const option = (match.params.option) ? `/${match.params.option}` : '';
      const root = (option.length !== 0) ? '/discover' : '';

      currentHistory.push(process.env.PUBLIC_URL + root + option + product);
      return <></>;

    } else {
      const selectedDiscovery = (match.params.option) ? !!discoveriesList[match.params.option] : true;

      if(selectedProduct && selectedDiscovery) {
        chosenPage = <Product
          selectedProduct={selectedProduct} />
      } else {
        if(!isObjEmpty(productsList)) {
          chosenPage = null;
          if(match.params.option) {
            currentHistory.push(process.env.PUBLIC_URL + DISCOVER_PAGE + '/' + match.params.option);
          } else {
            currentHistory.push(process.env.PUBLIC_URL + LANDING_PAGE);
          };
          
          return <></>;
        };
      };
    };

  } else if(page === WISHLIST_PAGE) {
    chosenPage = <Wishlist />
  };

  let breadCrums;

  const pathnameArray = currentPathname.split('/');
  if(pathnameArray[1] === 'BlueKiwi-React') {
    pathnameArray.splice(1, 1);
  };
  if(!isObjEmpty(productsList) && pathnameArray[1] === 'discover' && pathnameArray.length >= 3) {
    breadCrums = <BreadCrums pathnameArray={pathnameArray} />
  } else {
    breadCrums = null;
  };

  return (
    <PagesWrapper className='container'>
      {breadCrums}
      {chosenPage}
    </PagesWrapper>
  );
});