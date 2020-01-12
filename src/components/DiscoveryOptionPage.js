import React from 'react';
import ProductList from './ProductList';
import ContentSection from './ContentSection';
import { goToProduct } from '../utils/helper.utils';

const DiscoveryOption = ({
  selectedDiscovery,
  currentHistory
}) => (
  <ContentSection
    description={selectedDiscovery.description} >
    <ProductList
      productList={selectedDiscovery.products}
      currentHistory={currentHistory}
      clickEvent={goToProduct} />
  </ContentSection>
);

export default DiscoveryOption;