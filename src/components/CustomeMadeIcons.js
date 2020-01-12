import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../utils/colors.utils';

/** Styles Styles Styles Styles Styles */
const lines = {
  position: 'absolute',
  height: '4px',
  borderRadius: '2px',
  backgroundColor: COLORS.iconBlack,
  transition: 'background-color 0.2s ease'
};

const HamburgerStyled = styled.div({
  '& > *': {
    ...lines,
    left: '0',
    width: '100%',
  },
  
  '.line1': {
    top: '50%',
    transform: 'translateY(-50%)',
  },
  
  '.line2': { top: '0' },
  '.line3': { bottom: '0' }
});

const CrossStyled = styled.div({
  '& > *': {
    ...lines,
    top: '50%',
    left: '-3px',
    width: 'calc(100% + 6px)',
  },
  
  '.line1': { transform: 'translateY(-50%) rotate(45deg)' },
  '.line2': { transform: 'translateY(-50%) rotate(135deg)' }
});
/** End End End End End */

export const Hamburger = () => (
  <HamburgerStyled className='lines'>
    <div className="line1" />
    <div className="line2" />
    <div className="line3" />
  </HamburgerStyled>
);

export const Cross = () => (
  <CrossStyled className='lines'>
    <div className="line1" />
    <div className="line2" />
  </CrossStyled>
);