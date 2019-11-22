import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

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
    backgroundImage: 'url("/images/bluekiwi-tech-logo.svg")',
    cursor: 'pointer'
  }
});

const NavItems = styled.div({
  '.item': {

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
    },

    '& + label': {
      marginLeft: '16px'
    }
  }
});

const Header = ({ currentHistory }) => {

  return (
    <HeaderWrapper>
      <div className='container'>
        <div className="content">
          <NavBar>
            <ImageWrapper>
              <div className="image" />
            </ImageWrapper>

            <NavItems>
              <div className="item">
                <label>Discover</label>
                <label>Watchlist</label>
              </div>
            </NavItems>
          </NavBar>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;