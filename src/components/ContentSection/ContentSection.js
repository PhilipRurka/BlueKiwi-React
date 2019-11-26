import React from 'react';
import styled from '@emotion/styled/macro';

const ContentSectionStyled = styled.div({

  '& + .content-section': {
    marginTop: '65px'
  },

  '& > label': {
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase'
  }
});

const ContentSection = ({ label, children }) => {

  return (
    <ContentSectionStyled className='content-section' >
      <label>{label}</label>
      {children}
    </ContentSectionStyled>
  );
};

export default ContentSection;