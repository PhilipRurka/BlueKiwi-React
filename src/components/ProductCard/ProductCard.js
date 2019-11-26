import React from 'react';
import styled from '@emotion/styled/macro';

const ProductCard = ({ name, sub, image }) => {

  return (
    <div className="product-container">
      <div className="image-wrapper">
        <div className="image" />
      </div>
      <div className="content">
        <label>{name}</label>
        <span>{sub}</span>
      </div>
    </div>
  );
};

export default ProductCard;