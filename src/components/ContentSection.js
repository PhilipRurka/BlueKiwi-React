import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../utils/colors.utils';

/** Styles Styles Styles Styles Styles */
const ContentSectionStyled = styled.div({
  '& + .content-section': { marginTop: '65px' },

  '& > label': {
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase'
  },

  'p': { color: COLORS.blueHaze }
});
/** End End End End End */

const ContentSection = ({
  children,
  label = null,
  description = null
}) => (
  <ContentSectionStyled className='content-section' >
    {(label) && <label>{label}</label>}
    {(description) && <p>{description}</p>}
    {children}
  </ContentSectionStyled>
);

export default ContentSection;