import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';
import {
  LANDING_PAGE,
  DISCOVER_PAGE,
  WATCH_LIST_PAGE
} from '../../helpers/constants';

const HeaderWrapper = styled.header({
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '5',
  height: '80px',
  width: '100vw',

  '.container': {
    position: 'relative',
    height: '100%'
  },
  
  '.content': {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    width: '100%',
    padding: '0 15px'
  }
});

const NavBar = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
});

const ImageWrapper = styled.div({
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
  '.item': {

  },

});

const Label = styled.label(({ targetLocation, currentPathname }) => ({
  fontSize: '14px',
  fontWeight: '900',
  margin: '0',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  color: (targetLocation && (process.env.PUBLIC_URL + targetLocation) === currentPathname)
    ? COLORS.brandColorTextHover : 'black',

  '&:hover': {
    color: COLORS.brandColorTextHover
  },

  '& + label': {
    marginLeft: '16px'
  }
}));

const goToPage = (page, currentHistory) => {
  if(currentHistory.location.pathname === (process.env.PUBLIC_URL + page)) { return };

  const test = process.env.PUBLIC_URL + page;

  currentHistory.push(process.env.PUBLIC_URL + page);
};

const Header = ({ currentHistory, currentPathname }) => {

  return (
    <HeaderWrapper>
      <div className='container'>
        <div className="content">
          <NavBar>
            <ImageWrapper>
              <div
                className="image"
                onClick={() => (goToPage(LANDING_PAGE, currentHistory))} />
            </ImageWrapper>

            <NavItems>
              <div className="item">
                <Label
                  onClick={() => (goToPage(DISCOVER_PAGE, currentHistory))}
                  currentPathname={currentPathname}
                  targetLocation={DISCOVER_PAGE} >
                  Discover
                </Label>
                <Label
                  onClick={() => (goToPage(WATCH_LIST_PAGE, currentHistory))}
                  currentPathname={currentPathname}
                  targetLocation={WATCH_LIST_PAGE} >
                  Watchlist
                </Label>
              </div>
            </NavItems>
          </NavBar>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;