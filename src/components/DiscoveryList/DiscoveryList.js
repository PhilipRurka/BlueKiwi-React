import React from 'react';
import styled from '@emotion/styled/macro';
import DiscoveryCard from '../DiscoveryCard';

const DiscoveryWrapper = styled.div({
  margin: '0 -15px',

  '.discovery-wrapper': {
    display: 'inline-block',
    padding: '15px'
  }
});

const DiscoveryList = ({
  discoveryList,
  clickEvent = null,
  currentHistory = null,
}) => {

  return (
    <DiscoveryWrapper>
      {Object.keys(discoveryList).map((key) => {
        const discovery = discoveryList[key];

        return (
          <div
            key={discovery.name}
            className="discovery-wrapper col-md-6 col-lg-4 col-xl-3" >
            <DiscoveryCard
              title={discovery.name}
              image={discovery.image}
              slug={discovery.slug}
              clickEvent={clickEvent}
              currentHistory={currentHistory} />
          </div>
        );
      })}
    </DiscoveryWrapper>
  );
};

export default DiscoveryList;