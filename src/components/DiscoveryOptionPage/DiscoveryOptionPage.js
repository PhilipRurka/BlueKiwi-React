import React from 'react';
import styled from '@emotion/styled/macro';
import ProductList from '../ProductList';
import ContentSection from '../ContentSection';
import { DISCOVER_PAGE } from '../../helpers/constants';
import { isObjEmpty } from '../../helpers/general';

const DiscoveryOptionPage = ({ discoveriesList, paramValue, currentHistory }) => {
  const selectedDiscovery = discoveriesList[paramValue];

  if(selectedDiscovery) {
    const products = selectedDiscovery.products;
    return (
      
      <ContentSection
        description={selectedDiscovery.description} >
        <ProductList
          productList={products} />
        </ContentSection>
    );
  } else {
    if(!isObjEmpty(discoveriesList)) {
      currentHistory.push(process.env.PUBLIC_URL + DISCOVER_PAGE);
    };
    
    return <></>;
  };
};

export default DiscoveryOptionPage;