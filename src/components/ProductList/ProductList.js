import React from 'react';
import styled from '@emotion/styled/macro';
import ContentSection from '../ContentSection';
import ProductCard from '../ProductCard';
import { breakPoints } from '../../helpers/breakPoints';

const Products = styled.div({
  margin: '0 -15px',

  '.product-wrapper': {
    display: 'inline-block',
    padding: '15px'
  },

  '.image-wrapper': {

    [breakPoints.breakPointSM]: {
      width: '455px'
    },

    [breakPoints.breakPointMD]: {
      width: '275px'
    },

    [breakPoints.breakPointLG]: {
      width: '235px'
    },

    [breakPoints.breakPointXL]: {
      width: '200px'
    }
  }
});

const ProductList = ({
  productList,
  clickEvent = null,
  currentHistory = null
}) => {
  
  return (
    <Products>
      {productList.map((product) => {

        return (
          <div
            key={product.name}
            className="product-wrapper col-md-6 col-lg-4 col-xl-3" >
            <ProductCard
              name={product.name}
              sub={product.shortDescription}
              image={product.image[0]}
              slug={product.slug}
              clickEvent={clickEvent}
              currentHistory={currentHistory} />
          </div>
        );
      })}
    </Products>
  );
};

export default ProductList;