import React from 'react';
import BreadCrums from '../BreadCrums';
import LandingPage from '../LandingPage';
import DiscoveryPage from '../DiscoveryPage';
import WatchListPage from '../WatchListPage';
import {
  LANDING_PAGE,
  DISCOVER_PAGE,
  WATCH_LIST_PAGE
} from '../../helpers/constants';

const Pages = ({ page }) => {
  let chosenPage;

  if(page === LANDING_PAGE) {
    chosenPage = <LandingPage />
  } else if(page === DISCOVER_PAGE) {
    chosenPage = <DiscoveryPage />
  } else if(page === WATCH_LIST_PAGE) {
    chosenPage = <WatchListPage />
  };

  return (
    <>
      <BreadCrums />
      {chosenPage}
    </>
  );
};

export default Pages;