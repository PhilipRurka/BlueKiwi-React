import React from 'react';
import styled from '@emotion/styled/macro';
import {
  DISCOVER_PAGE,
  WATCH_LIST_PAGE
} from '../../helpers/constants';

const MobileMenuWrapper = styled.div(({ showingMobileMenu }) => {

  const width = '200px';
  
  return {
    position: 'fixed',
    top: '0',
    right: (showingMobileMenu) ? '0' : `-${width}`,
    zIndex: '6',
    height: '100vh',
    width: width,
    backgroundColor: 'white',
    transition: 'right 0.5s ease'
  };
});

const XIcon = styled.div({
  '.image': {
    height: '30px',
    width: '30px',
    backgroundColor: 'black'
  }
});

const Label = styled.label(() => {

  return {

  };
});

const MobileMenu = ({ goToPage, currentHistory, currentPathname, showingMobileMenu, openMobileMenu }) => {

  return (
    <MobileMenuWrapper
      showingMobileMenu={showingMobileMenu} >
      <div className="content">
        <XIcon>
          <div
            className="image"
            onClick={() => (openMobileMenu(false))} />
        </XIcon>
        <ul>
          <li>
            <Label
              onClick={() => (goToPage(DISCOVER_PAGE, currentHistory))}
              currentPathname={currentPathname}
              targetLocation={DISCOVER_PAGE} >
              Discovery
            </Label>
          </li>
          <li>
            <Label
              onClick={() => (goToPage(WATCH_LIST_PAGE, currentHistory))}
              currentPathname={currentPathname}
              targetLocation={WATCH_LIST_PAGE} >
              Watchlist
            </Label>
          </li>
        </ul>
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;