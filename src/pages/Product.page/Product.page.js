import React from 'react';
import { ContentSection } from '../../components';
import { Product } from './components';

const ProductPage = ({ selectedProduct }) => (
  <ContentSection>
    <Product
      product={selectedProduct} />
  </ContentSection>
);

export default ProductPage;