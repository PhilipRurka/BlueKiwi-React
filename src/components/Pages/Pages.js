import React from 'react';
import styled from '@emotion/styled/macro';
import BreadCrums from '../BreadCrums';
import LandingPage from '../LandingPage';
import DiscoveryPage from '../DiscoveryPage';
import WatchListPage from '../WatchListPage';
import DiscoveryOptionPage from '../DiscoveryOptionPage';
import {
  LANDING_PAGE,
  DISCOVER_PAGE,
  DISCOVER_OPTION_PAGE,
  WATCH_LIST_PAGE
} from '../../helpers/constants';

const PagesWrapper = styled.div({
  paddingTop: '80px'
});

const Pages = ({ page, match }) => {
  let chosenPage;

  if(page === LANDING_PAGE) {
    chosenPage = <LandingPage />
  } else if(page === DISCOVER_PAGE) {
    chosenPage = <DiscoveryPage />
  } else if(page === DISCOVER_OPTION_PAGE) {
    chosenPage = <DiscoveryOptionPage
      paramValue={match.params.option} />
  } else if(page === WATCH_LIST_PAGE) {
    chosenPage = <WatchListPage />
  };

  return (
    <PagesWrapper className='container'>
      <BreadCrums />
      {chosenPage}
    </PagesWrapper>
  );
};

export default Pages;