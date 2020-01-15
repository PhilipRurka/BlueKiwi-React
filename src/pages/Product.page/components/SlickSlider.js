import React, { useEffect } from 'react';
import styled from '@emotion/styled/macro';
import $ from 'jquery';
// eslint-disable-next-line
import slick from 'slick-carousel';
import { breakPoints } from '../../../utils/breakPoints.utils';

/** Styles Styles Styles Styles Styles */
const absoluteStyles = {
  position: 'absolute',
  top: '0',
  left: '0'
};

const SlickSliderWrapper = styled.div({
  maxWidth: '525px',

  [breakPoints.breakPointMD]: {
    position: 'absolute',
    zIndex: '-1',
    pointerEvents: 'none'
  },

  '.slick-next': {
    outline: 'none',
    backgroundColor: 'transparent',
    backgroundImage: `url("${process.env.PUBLIC_URL}/images/arrow-double-right.svg")`
  },

  '.slick-slide': {
    marginRight: '15px',

    '& > div': {
      position: 'relative',
      paddingBottom: '100%'
    }
  },

  'iframe': {
    height: '100%',
    width: '100%',
    display: 'inline-block',
    ...absoluteStyles
  }
});

const Image = styled.div(({ url }) => ({
  paddingBottom: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url("${url}")`,
  ...absoluteStyles,
}));
/** End End End End End */

const callSlick = () => {
  $('#slick-slider').slick({
    dots: false,
    swipe: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    mobileFirst: true,
    accessibility: true,
    focusOnSelect: true,
    nextArrow: "<button type='button' class='slick-next'></button>",
    responsive: [{
      breakpoint: 767,
      settings: "unslick"
    }]
  });
};

const SlickSlider = ({
  video = null,
  images
}) => {

  useEffect(() => {
    callSlick();
  
    const bellowMD = window.matchMedia( '(min-width: 768px)' );
    bellowMD.addListener(() => {
      if(!bellowMD.matches) {
        callSlick();
      };
    });
  }, []);
  
  return (
    <SlickSliderWrapper id="slick-slider">
      {(video) &&
        <iframe
          src={video}
          title='Product Video' />}
      {images.map((image) => (
        <Image
          key={image.url}
          url={image.url} />
      ))}
    </SlickSliderWrapper>
  );
};

export default SlickSlider;