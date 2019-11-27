import React from 'react';
import styled from '@emotion/styled/macro';

const OptionContainer = styled.div({

});

const DiscoveryOption = ({ title }) => {

  return (
    <OptionContainer className='option-container'>
      <label>{title}</label>
    </OptionContainer>
  )
};

export default DiscoveryOption;