import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../utils/colors.utils';

export const AmazonButton = () => {
  
  /** Styles Styles Styles Styles Styles */
  const Styled = styled.button({
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    background: `linear-gradient(to right, ${COLORS.brandColorGradient1} 0%, ${COLORS.brandColorGradient2})`,

    'p': {
      position: 'relative',
      margin: '0',
      paddingLeft: '44px',
      color: 'white',
      fontWeight: '600',
      fontFamily: '"Nunito", sans-serif',

      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        height: '27px',
        width: '32px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("${process.env.PUBLIC_URL}/images/amazon-icon-white.svg")`
      }
    }
  });
  /** End End End End End */

  return (
    <Styled>
      <p>Check Reviews & Prices</p>
    </Styled>
  );
};