import React from 'react';
import styled from '@emotion/styled/macro';
import ProductList from '../ProductList';
import ContentSection from '../ContentSection';
import { goToProduct } from '../../helpers/general';

const SimilarProductsWrapper = styled.div({
  marginTop: '100px'
});

const SimilarProducts = ({ product, discoveriesList, currentHistory }) => {
  let productsArray = [];
  let similarProducts = [];
  let displayedItems = {};
  let numDisplayed = 0;

  for (let i = 0; i < product.discoveries.length; i++) {
    const discovery = product.discoveries[i];
    similarProducts = similarProducts.concat(discoveriesList[discovery.slug].products);
  };

  similarProducts.sort(() => Math.random() - 0.5);

  for (let i = 0; i < similarProducts.length; i++) {
    const similarProduct = similarProducts[i];

    if(numDisplayed === 4) { break };
    if(displayedItems[similarProduct.name]) { continue };

    numDisplayed ++;
    displayedItems[similarProduct.name] = true;
    
    productsArray.push(similarProduct);
  };

  return (
    <SimilarProductsWrapper>

      <ContentSection label='Similar Products' >
        <ProductList
          productList={productsArray}
          clickEvent={goToProduct}
          currentHistory={currentHistory} />
      </ContentSection>
    </SimilarProductsWrapper>
  );
};

export default SimilarProducts;