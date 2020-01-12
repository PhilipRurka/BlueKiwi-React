import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../utils/colors.utils';

/** Styles Styles Styles Styles Styles */
const FooterWraper = styled.div({
  height: '150px',
  width: '100%',

  '.content': {
    position: 'relative',
    height: '100%'
  },

  'p, span': {
    display: 'inline-block',
  },

  'p': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    textAlign: 'center',
    margin: '0',
    userSelect: 'none'
  },

  'a': {
    display: 'inline-block',
    userSelect: 'initial',
    color: COLORS.brandColorText,

    '&:hover': {
      color: COLORS.brandColorTextHover
    }
  }
});
/** End End End End End */

const Footer = () => (
  <FooterWraper
    className='container' >
    <div className="content">
      <p>
        Find me at&nbsp;
        <a
          title='Porfolio Site'
          target='_blank'
          rel='noopener noreferrer'
          href="https://www.philiprurka.com/" >
          philiprurka.com
        </a>
        <span>.</span>
        &nbsp;| Any love or feedback? Say&nbsp;
        <a
          href="mailto:hey@philiprurka.com" >
          hey@philiprurka.com
        </a>
        <span>.</span>
      </p>
    </div>
  </FooterWraper>
);

export default Footer;