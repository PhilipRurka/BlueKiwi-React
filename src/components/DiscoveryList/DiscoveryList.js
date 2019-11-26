import React from 'react';
import styled from '@emotion/styled/macro';
import ContentSection from '../ContentSection';

const array = [1, 2, 3, 4, 5];

const Options = styled.div({
  margin: '0 -15px',

  '.option': {
    display: 'inline-block'
  }
});

const DiscoveryList = () => {

  return (
    <ContentSection
      label='Discovery' >
      <Options>
        {array.map((option, i) => (
          <div
            key={i}
            className="option col-md-6 col-lg-4 col-xl-3" >
            <p>{option}</p>
          </div>
        ))}
      </Options>
    </ContentSection>
  );
};

export default DiscoveryList;