import React from 'react';
import styled from '@emotion/styled/macro';
import DiscoveryCard from './DiscoveryCard';

/** Styles Styles Styles Styles Styles */
const DiscoveryWrapper = styled.div({
  margin: '0 -15px',

  '.discovery-wrapper': {
    display: 'inline-block',
    padding: '15px'
  }
});
/** End End End End End */

const DiscoveryList = ({
  discoveryList,
  clickEvent = null,
  currentHistory = null,
}) => (
  <DiscoveryWrapper>
    {Object.keys(discoveryList).map((key) => {
      const { name, image, slug } = discoveryList[key];

      return (
        <div
          key={name}
          className="discovery-wrapper col-md-6 col-lg-4 col-xl-3" >
          <DiscoveryCard
            name={name}
            image={image}
            slug={slug}
            clickEvent={clickEvent}
            currentHistory={currentHistory} />
        </div>
      );
    })}
  </DiscoveryWrapper>
);

export default DiscoveryList;