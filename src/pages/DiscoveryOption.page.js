import React from 'react';
import { connect } from 'react-redux';
import { ProductList, ContentSection } from '../components';
import { goToProduct } from '../utils/helper.utils';

export default connect(({ currentHistory }) => ({
  /** Redux */
  currentHistory
}))(({
  /** Props */
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
));