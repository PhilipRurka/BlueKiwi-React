import React from 'react';
import styled from '@emotion/styled/macro';

const ContentSectionStyled = styled.div({
  '& > label': {
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase'
  }
});

const ContentSection = ({ label, children }) => {

  return (
    <ContentSectionStyled>
      <label>{label}</label>
      {children}
    </ContentSectionStyled>
  );
};

export default ContentSection;