import React from 'react';
import styled from '@emotion/styled/macro';
import ContentSection from '../ContentSection';
import ProductCard from '../ProductCard';
import { COLORS } from '../../helpers/colors';
import { breakPoints } from '../../helpers/breakPoints';

const array = [1, 2, 3, 4, 5];

const Products = styled.div({
  margin: '0 -15px',

  '.product-wrapper': {
    display: 'inline-block',
    padding: '15px'
  },
  
  '.product-container': {
    borderRadius: '5px',
    backgroundColor: COLORS.athensGray
  },

  '.image-wrapper': {
    margin: 'auto',

    [breakPoints.breakPointSM]: {
      height: '455px',
      width: '455px'
    },

    [breakPoints.breakPointMD]: {
      height: '275px',
      width: '275px'
    },

    [breakPoints.breakPointLG]: {
      height: '235px',
      width: '235px'
    },

    [breakPoints.breakPointXL]: {
      height: '200px',
      width: '200px'
    },
  },

  '.image': {
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  },

  '.content': { padding: '15px' },
  
  'label, span': {
    display: 'block',
    fontSize:'14px',
    fontWeight: '600'
  },

  'label': {
    marginBottom: '5px',
    color: COLORS.stormGray
  },

  'span': { color: COLORS.blueHaze }
});

const ProductList = () => {

  return (
    <ContentSection
      label='Hot And Fresh' >
      <Products>
        {array.map((product, i) => (
          <div
            key={i}
            className="product-wrapper col-md-6 col-lg-4 col-xl-3" >
            <ProductCard
              name='Product Name'
              sub='Type Type Type' />
          </div>
        ))}
      </Products>
    </ContentSection>
  );
};

export default ProductList;