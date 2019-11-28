import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';
import { relative } from 'path';

const ProductContainer = styled.div(({ image:{ url } }) => ({
  position: 'relative',
  borderRadius: '5px',
  backgroundColor: COLORS.athensGray,
  overflow: 'hidden',

  '&, & *': {
    cursor: 'pointer'
  },

  '&:hover': {
    '&::before': {
      width: '100%'
    },

    '.image': {
      transform: 'scale(1.05)'
    }
  },

  '&::before': {
    content: '""',
    height: '2px',
    width: '0',
    position: 'absolute',
    bottom: '0',
    left: '0',
    background: `linear-gradient(to right, ${COLORS.brandColorGradient1} 0%, ${COLORS.brandColorGradient2})`,
    transition: 'width 0.3s ease'
  },

  '.image-wrapper': {
    margin: 'auto'
  },

  '.image': {
    paddingBottom: '100%',
    width: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("${url}")`,
    transition: 'transform 0.3s ease'
  },

  '.content': { padding: '15px' },
  
  'label, span': {
    display: 'block',
    fontSize:'14px',
    fontWeight: '600',
    lineHeight: '1rem'
  },

  'label': {
    marginBottom: '5px',
    color: COLORS.stormGray
  },

  'span': { color: COLORS.blueHaze }
}));

const ProductCard = ({
  name,
  sub,
  image,
  slug,
  clickEvent = null,
  currentHistory = null
}) => {

  return (

    <ProductContainer
      image={image}
      onClick={() => (clickEvent(currentHistory, slug))} >
      <div className="image-wrapper">
        <div className="image" />
      </div>
      <div className="content">
        <label>{name}</label>
        <span>{sub}</span>
      </div>
    </ProductContainer>
  );
};

export default ProductCard;