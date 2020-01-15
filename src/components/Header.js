import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';
import MobileMenu from './MobileMenu';
import { openMobileMenu } from '../utils';
import { Hamburger } from './CustomeMadeIcons';
import { breakPoints } from '../utils/breakPoints.utils';
import { COLORS } from '../utils/colors.utils';
import {
  LANDING_PAGE,
  DISCOVER_PAGE,
  WISHLIST_PAGE
} from '../router';

/** Styles Styles Styles Styles Styles */
const HeaderWrapper = styled.header({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '5',
  height: '80px',
  width: '100vw',
  backgroundColor: 'white',

  '.container': {
    position: 'relative',
    height: '100%'
  },
  
  '.content-header': {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    width: '100%',
    padding: '0 15px'
  },

  'label': {
    fontSize: '14px',
    fontWeight: '900',
    margin: '0',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'color 0.2s ease',

    '&:hover': {
      color: COLORS.brandColorTextHover
    }
  }
});

const NavBar = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
});

const ImageWrapper = styled.div({
  position: 'relative',
  bottom: '6px',
  height: '25px',
  width: '100px',
  
  '.image': {
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: `url("${process.env.PUBLIC_URL}/images/bluekiwi-tech-logo.svg")`,
    cursor: 'pointer'
  }
});

const NavItems = styled.div({
  [breakPoints.breakPointXXS]: {
    display: 'none'
  }
});

const BurgerMenu = styled.div({
  display: 'none',
  position: 'relative',
  height: '20px',
  width: '22px',
  cursor: 'pointer',

  '&:hover': {
    '.lines > *': {
      backgroundColor: COLORS.brandColorTextHover
    }
  },

  [breakPoints.breakPointXXS]: {
    display: 'block',
  }
});

const Label = styled.label(({ targetLocation, currentPathname }) => ({
  color: (targetLocation && (process.env.PUBLIC_URL + targetLocation) === currentPathname)
    ? COLORS.brandColorTextHover : COLORS.iconBlack,

  '& + label': {
    marginLeft: '16px'
  }
}));
/** End End End End End */

const goToPage = (page, currentHistory) => {
  if(currentHistory.location.pathname === (process.env.PUBLIC_URL + page)) { return };

  currentHistory.push(process.env.PUBLIC_URL + page);
};

export default connect(({ currentHistory, currentPathname }) => ({
  /** Redux */
  currentHistory,
  currentPathname
}),
(dispatch) => ({
  openMobileMenu: (payload) => dispatch(openMobileMenu(payload))
}))(({
  /** Props */
  currentHistory,
  currentPathname,
  openMobileMenu
}) => (
  <HeaderWrapper>
    <MobileMenu
      goToPage={goToPage} />
    <div className='container'>
      <div className="content-header">
        <NavBar>
          <ImageWrapper>
            <div
              className="image"
              onClick={() => (goToPage(LANDING_PAGE, currentHistory))} />
          </ImageWrapper>

          <BurgerMenu
            onClick={() => (openMobileMenu(true))} >
            <Hamburger />
          </BurgerMenu>

          <NavItems>
            <Label
              onClick={() => (goToPage(DISCOVER_PAGE, currentHistory))}
              currentPathname={currentPathname}
              targetLocation={DISCOVER_PAGE} >
              Discover
            </Label>
            <Label
              onClick={() => (goToPage(WISHLIST_PAGE, currentHistory))}
              currentPathname={currentPathname}
              targetLocation={WISHLIST_PAGE} >
              Wishlist
            </Label>
          </NavItems>
        </NavBar>
      </div>
    </div>
  </HeaderWrapper>
));