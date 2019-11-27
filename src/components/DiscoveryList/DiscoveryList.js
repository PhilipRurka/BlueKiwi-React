import React from 'react';
import styled from '@emotion/styled/macro';
import ContentSection from '../ContentSection';
import DiscoveryOption from '../DiscoveryOption';
import { breakPoints } from '../../helpers/breakPoints';

const array = [1, 2, 3, 4, 5];

const Options = styled.div({
  margin: '0 -15px',

  '.option-wrapper': {
    display: 'inline-block'
  },

  '.option-container': {
    [breakPoints.breakPointSM]: {
      height: '455px',
    },

    [breakPoints.breakPointMD]: {
      height: '275px',
    },

    [breakPoints.breakPointLG]: {
      height: '235px',
    },

    [breakPoints.breakPointXL]: {
      height: '200px',
    },
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
            className="option-wrapper col-md-6 col-lg-4 col-xl-3" >
            <DiscoveryOption
            title='Here Topic' />
          </div>
        ))}
      </Options>
    </ContentSection>
  );
};

export default DiscoveryList;