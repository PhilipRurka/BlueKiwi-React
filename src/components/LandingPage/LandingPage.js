import React from 'react';
import styled from '@emotion/styled/macro';
import ProductList from '../ProductList';
import DiscoveryList from '../DiscoveryList';
import ContentSection from '../ContentSection';
import { goToDiscovery } from '../../helpers/general';

const LandingPage = ({ productsList, discoveriesList, currentHistory }) => {
  const keys = Object.keys(productsList).slice(0, 12);
  const products = keys.map((key) => ( productsList[key] ));

  return (
    <>
      <ContentSection
        label='Hot And Fresh' >
        <ProductList
          productList={products} />
      </ContentSection>
      <ContentSection
        label='Discovery' >
        <DiscoveryList
          discoveryList={discoveriesList}
          clickEvent={goToDiscovery}
          currentHistory={currentHistory} />
      </ContentSection>
    </>
  )
};

export default LandingPage;