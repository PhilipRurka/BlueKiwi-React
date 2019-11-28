import React from 'react';
import styled from '@emotion/styled/macro';
import ContentSection from '../ContentSection';
import DiscoveryList from '../DiscoveryList';
import { goToDiscovery } from '../../helpers/general';

const DiscoveryPage = ({
  discoveriesList,
  currentHistory
}) => {

  return (
    <>
      <ContentSection
        label='Discovery' >
        <DiscoveryList
          discoveryList={discoveriesList}
          clickEvent={goToDiscovery}
          currentHistory={currentHistory} />
      </ContentSection>
    </>
  );
};

export default DiscoveryPage;