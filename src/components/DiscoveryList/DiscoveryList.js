import React from 'react';
import styled from '@emotion/styled/macro';
import ContentSection from '../ContentSection';
import DiscoveryCard from '../DiscoveryCard';
import { breakPoints } from '../../helpers/breakPoints';

const Options = styled.div({
  margin: '0 -15px',

  '.discovery-wrapper': {
    display: 'inline-block',
    padding: '15px'
  }
});

const DiscoveryList = ({ discoveriesList }) => {

  return (
    <ContentSection
      label='Discovery' >
      <Options>
        {Object.keys(discoveriesList).map((key) => {
          const discovery = discoveriesList[key];

          return (
            <div
              key={discovery.name}
              className="discovery-wrapper col-md-6 col-lg-4 col-xl-3" >
              <DiscoveryCard
                title={discovery.name}
                image={discovery.image} />
            </div>
          );
        })}
      </Options>
    </ContentSection>
  );
};

export default DiscoveryList;