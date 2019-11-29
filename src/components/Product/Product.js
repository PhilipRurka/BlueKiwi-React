import React from 'react';
import styled from '@emotion/styled/macro';

const Product = ({ product }) => {
  console.dir(product);

  const colStyles = {
    display: 'inline-block',
    verticalAlign: 'top'
  };
  
  const ImagesWrapper = styled.div({
    ...colStyles,
    marginLeft: '-15px',
    overflow: 'hidden',
    borderRadius: '5px',

    '.iframe-wrapper': {
      position: 'relative',
      paddingBottom: '100%',
      marginBottom: '15px',
      overflow: 'hidden',
      borderRadius: '5px',
    },

    '.video-wrapper': {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      border: 'none',
    }

  });

  const ImageContainer = styled.div(({ image }) => ({
    
    '& + div': {
      marginTop: '15px'
    },
    
    '.image': {
      paddingBottom: '100%',
      height: '100%',
      width: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url("${image}")`,
    }
  }));

  const ContentWrapper = styled.div({
    ...colStyles,
    marginRight: '-15px',

    '.content-container': {
      marginLeft: '15px'
    },

    'label, span': {
      display: 'block',
    },

    'label': {
      fontSize: '36px',
      fontWeight: '900',
    }
  });

  return (
    <>
      <ImagesWrapper
        className='col-md-6' >
        <div className="images-container">
          <div className="iframe-wrapper">
            <iframe
              className="video-wrapper"
              src={product.videoLink} />
          </div>
          {product.image.map((image, i) => (
            <ImageContainer
              key={product.shortDescription + i}
              image={image.url} >
              <div className="image" />
            </ImageContainer>
          ))}
        </div>
      </ImagesWrapper>
      <ContentWrapper
        className='col-md-6' >
        <div className="content-container">
          <label>{product.name}</label>
          <span>{product.shortDescription}</span>
          <p>{product.description}</p>
        </div>
      </ContentWrapper>
    </>
  );
};

export default Product;