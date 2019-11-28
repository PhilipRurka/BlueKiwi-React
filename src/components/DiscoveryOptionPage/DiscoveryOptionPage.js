import React from 'react';
import styled from '@emotion/styled/macro';
import ProductList from '../ProductList';
import { DISCOVER_PAGE } from '../../helpers/constants';

const DiscoveryOptionPage = ({ discoveriesList, paramValue, currentHistory }) => {
  const selectedDiscovery = discoveriesList[paramValue];

  if(selectedDiscovery) {
    const products = selectedDiscovery.products;
    return (
      <ProductList
        productList={products} />
    );
  } else {
    if(!(Object.keys(discoveriesList).length === 0 && discoveriesList.constructor === Object)) {
      currentHistory.push(process.env.PUBLIC_URL + DISCOVER_PAGE);
    };
    return ( <></> )
  };
};

export default DiscoveryOptionPage;