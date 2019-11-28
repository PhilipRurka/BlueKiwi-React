import React from 'react';
import styled from '@emotion/styled/macro';
import { COLORS } from '../../helpers/colors';

const ContentSectionStyled = styled.div({

  '& + .content-section': {
    marginTop: '65px'
  },

  '& > label': {
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase'
  },

  'p': {
    color: COLORS.blueHaze
  }
});

const ContentSection = ({
  children,
  label = null,
  description = null
}) => {

  return (
    <ContentSectionStyled className='content-section' >
      <label>{label}</label>
      <p>{description}</p>
      {children}
    </ContentSectionStyled>
  );
};

export default ContentSection;