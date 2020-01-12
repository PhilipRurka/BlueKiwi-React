import React from 'react';
import ContentSection from '../../components/ContentSection';
import Product from './components/Product';

const ProductPage = ({ selectedProduct }) => (
  <ContentSection>
    <Product
      product={selectedProduct} />
  </ContentSection>
);

export default ProductPage;