import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import DiscoveryList from '../components/DiscoveryList';
import ContentSection from '../components/ContentSection';
import {
  goToProduct,
  goToDiscovery
} from '../utils/helper.utils';

export default connect(({ productsList, discoveriesList, currentHistory }) => ({
  /** Redux */
  productsList,
  discoveriesList,
  currentHistory
}))(({
  /** Props */
  productsList,
  discoveriesList,
  currentHistory
}) => {
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
});