import React from 'react';
import ContentSection from '../ContentSection';
import Product from '../Product';

const ProductPage = ({ selectedProduct }) => {
  return (
    <ContentSection>
      <Product
        product={selectedProduct} />
    </ContentSection>
  );
};

export default ProductPage;