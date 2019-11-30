import React from 'react';
import ProductList from '../ProductList';
import DiscoveryList from '../DiscoveryList';
import ContentSection from '../ContentSection';
import {
  goToProduct,
  goToDiscovery
} from '../../helpers/general';

const LandingPage = ({ productsList, discoveriesList, currentHistory }) => {
  const keys = Object.keys(productsList).slice(0, 12);
  const products = keys.map((key) => ( productsList[key] ));

  return (
    <>
      <ContentSection
        label='Hot And Fresh' >
        <ProductList
          productList={products}
          clickEvent={goToProduct}
          currentHistory={currentHistory} />
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