import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';
import ProductCard from './ProductCard';
import { breakPoints } from '../utils/breakPoints.utils';

/** Styles Styles Styles Styles Styles */
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
/** End End End End End */

export default connect(({ productsList }) => ({
  /** Redux */
  productsList
}))(({
  /** Props */
  productList,
  clickEvent = null,
  currentHistory = null
}) => (
  <Products>
    {productList.map((product) => (
      <div
        key={product.name}
        className="product-wrapper col-md-6 col-lg-4 col-xl-3" >
        <ProductCard
          name={product.name}
          sub={product.shortDescription}
          image={product.images[0]}
          slug={product.slug}
          clickEvent={clickEvent}
          currentHistory={currentHistory} />
      </div>
    ))}
  </Products>
));