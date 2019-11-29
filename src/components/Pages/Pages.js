import React from 'react';
import styled from '@emotion/styled/macro';
import BreadCrums from '../BreadCrums';
import LandingPage from '../LandingPage';
import DiscoveryPage from '../DiscoveryPage';
import ProductPage from '../ProductPage';
import WatchListPage from '../WatchListPage';
import DiscoveryOptionPage from '../DiscoveryOptionPage';
import { isObjEmpty } from '../../helpers/general';
import {
  LANDING_PAGE,
  DISCOVER_PAGE,
  DISCOVER_OPTION_PAGE,
  WATCH_LIST_PAGE,
  PRODUCT_PAGE
} from '../../helpers/constants';

const PagesWrapper = styled.div({
  paddingTop: '80px'
});

const Pages = ({
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
    chosenPage = <DiscoveryPage />

  } else if(page === DISCOVER_OPTION_PAGE) {
    const selectedDiscovery = discoveriesList[match.params.option];

    if(selectedDiscovery) {
      chosenPage = <DiscoveryOptionPage
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
        chosenPage = <ProductPage
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

  } else if(page === WATCH_LIST_PAGE) {
    chosenPage = <WatchListPage />
  };

  let breadCrums;
  const pathnameArray = currentPathname.split('/');
  if(!isObjEmpty(productsList) && pathnameArray[1] === 'discover' && pathnameArray.length >= 3) {
    breadCrums = <BreadCrums currentPathname={currentPathname} />
  } else {
    breadCrums = null;
  };

  return (
    <PagesWrapper className='container'>
      {breadCrums}
      {chosenPage}
    </PagesWrapper>
  );
};

export default Pages;