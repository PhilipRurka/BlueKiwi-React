import React from 'react';
import ProductList from '../ProductList';
import ContentSection from '../ContentSection';
import { goToProduct } from '../../helpers/general';

const DiscoveryOptionPage = ({ selectedDiscovery, currentHistory }) => {
  const products = selectedDiscovery.products;
  
  return (
    <ContentSection
      description={selectedDiscovery.description} >
      <ProductList
        productList={products}
        currentHistory={currentHistory}
        clickEvent={goToProduct} />
    </ContentSection>
  );
};

export default DiscoveryOptionPage;