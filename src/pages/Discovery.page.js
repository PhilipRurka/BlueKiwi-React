import React from 'react';
import { connect } from 'react-redux';
import ContentSection from '../components/ContentSection';
import DiscoveryList from '../components/DiscoveryList';
import { goToDiscovery } from '../utils/helper.utils';

export default connect(({ currentHistory, discoveriesList }) => ({
  /** Redux */
  currentHistory,
  discoveriesList
}))(({
  /** Props */
  discoveriesList,
  currentHistory
}) => (
  <>
    <ContentSection
      label='Discovery' >
      <DiscoveryList
        discoveryList={discoveriesList}
        clickEvent={goToDiscovery}
        currentHistory={currentHistory} />
    </ContentSection>
  </>
));