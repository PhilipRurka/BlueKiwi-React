import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';
import Pills from './Pills';
import SimilarProducts from './SimilarProducts';
import { COLORS } from '../../../utils/colors.utils';
import { goToDiscovery } from '../../../utils/helper.utils';
import { AmazonButton } from '../../../components/Buttons';
import { breakPoints } from '../../../utils/breakPoints.utils';
import SlickSlider from './SlickSlider';

/** Styles Styles Styles Styles Styles */
const colStyles = {
  display: 'inline-block',
  verticalAlign: 'top'
};

const ProductWrapper = styled.div({
  '.image-container': {
    display: 'none',
    
    [breakPoints.breakPointMD]: {
      display: 'initial'
    }
  }
})

const ImagesWrapper = styled.div({
  ...colStyles,
  padding: '0 20px 0 0',
  overflow: 'hidden',
  borderRadius: '5px',
});

const IframeWrapper = styled.div({
  position: 'relative',
  paddingBottom: '100%',
  marginBottom: '15px',
  overflow: 'hidden',
  borderRadius: '5px',

  '.video-wrapper': {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    border: 'none',
  }
});

const ImageContent = styled.div(({ image = null }) => ({
  overflow: 'hidden',
  borderRadius: '5px',
  
  '& + .image-content': {
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
  padding: '0',

  [breakPoints.breakPointMD]: {
    padding: '0 0 0 20px',

    '.content-content': {
      position: 'absolute',
      top: '-80px',
      left: '0',
      height: 'calc(100% + 80px)',
    },

    '.content': {
      position: 'sticky',
      top: '0',
      left: '0',
      paddingTop: '69px',
    }
  },

  '.image-container': {
    pointerEvents: 'none'
  },

  '.content-container': {
    position: 'relative'
  },

  '.content-content': {
    
  },

  '.content': {

    '& > label, & > span': {
      display: 'block',
      fontWeight: '900'
    },
  
    '& > label': {
      fontSize: '36px',
      margin: '0'
    },
  
    '& > span': {
      fontSize: '24px',
      color: COLORS.blueHaze,
      fontFamily: '"Nunito", sans-serif'
    },
  
    '& > p': {
      margin: '8px 0 0',
      color: COLORS.black
    },
  }
});

const PillsWrapper = styled.div({
  margin: '20px 0 30px'
});
/** End End End End End */

const ImageContainer = ({ product, addImages = null }) => (
  <div className="image-container">
    {(product.videoLink) &&
      <IframeWrapper>
        <iframe
          title='Product Video'
          className="video-wrapper"
          src={(addImages) ? product.videoLink : null} />
      </IframeWrapper>}
    {product.images.map((image, i) => (
      <ImageContent
        className='image-content'
        key={product.shortDescription + i}
        image={(addImages) ? image.url  : null} >
        <div className="image" />
      </ImageContent>
    ))}
  </div>
);

export default connect(({ currentHistory }) => ({
  /** Redux */
  currentHistory
}))(({
  /** Props */
  product,
  currentHistory
}) => (
  <>
    <ProductWrapper>

      <SlickSlider
        video={product.videoLink}
        images={product.images} />
      
      <ImagesWrapper
        className='col-md-6' >
        <ImageContainer
          product={product}
          addImages='true' />
      </ImagesWrapper>

      <ContentWrapper
        className='col-md-6' >
        <div className="content-container">
          <ImageContainer
            product={product} />
          <div className="content-content">
            <div className="content">
              <label>{product.name}</label>
              <span>{product.shortDescription}</span>
              <p>{product.description}</p>
              <PillsWrapper>
                {product.discoveries.map((discovery, i) => (
                  <Pills
                    key={discovery.name + i}
                    clickEvent={() => (goToDiscovery(currentHistory, discovery.slug))}
                    name={discovery.name} />
                  ))}
              </PillsWrapper>
              <AmazonButton />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </ProductWrapper>
    <SimilarProducts
      product={product} />
  </>
));