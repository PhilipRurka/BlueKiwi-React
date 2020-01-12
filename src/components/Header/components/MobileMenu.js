import React from 'react';
import { connect } from 'react-redux';
import { openMobileMenu } from '../../../utils/redux/redux.actions';
import styled from '@emotion/styled/macro';
import Overlay from './Overlay';
import { COLORS } from '../../../utils/colors.utils';
import { Cross} from '../../CustomeMadeIcons';
import {
  DISCOVER_PAGE,
  // WATCH_LIST_PAGE
} from '../../../Router/Router.constants';

/** Styles Styles Styles Styles Styles */
const MobileMenuWrapper = styled.div(({ showingMobileMenu }) => {
  const width = '200px';

  return {
    position: 'fixed',
    top: '0',
    right: (showingMobileMenu) ? '0' : `-${width}`,
    zIndex: '7',
    height: '100vh',
    width: width,
    backgroundColor: 'white',
    transition: 'right 0.5s ease',

    'li': {
      textAlign: 'right',
      marginRight: '15px',

      '& + li': { marginTop: '10px' }
    }
  };
});

const XIcon = styled.div({
  position: 'relative',
  height: '80px',
  
  '.iconContent': {
    position: 'absolute',
    top: '50%',
    right: '15px',
    transform: 'translateY(-50%)',
    height: '22px',
    width: '22px',
    cursor: 'pointer',

    '&:hover': {
      '.lines > *': {
        backgroundColor: COLORS.brandColorTextHover
      }
    }
  }
});

const Label = styled.label(({ targetLocation, currentPathname }) => ({
  cursor: 'pointer',
  color: (targetLocation && (process.env.PUBLIC_URL + targetLocation) === currentPathname)
  ? COLORS.brandColorTextHover : COLORS.iconBlack
}));
/** End End End End End */

const goToPageFunc = (openMobileMenu, goToPage, page, currentHistory) => {
  goToPage(page, currentHistory);
  openMobileMenu(false);
};

export default connect(({ currentHistory, currentPathname, showingMobileMenu }) => ({
  /** Redux */
  currentHistory,
  currentPathname,
  showingMobileMenu
}), (dispatch) => ({
  openMobileMenu: (payload) => dispatch(openMobileMenu(payload))
}))(({
  /** Props */
  goToPage,
  currentHistory,
  currentPathname,
  showingMobileMenu,
  openMobileMenu
}) => (
  <>
    <Overlay
      openCondition={showingMobileMenu}
      clickEvent={openMobileMenu} />
    <MobileMenuWrapper
      showingMobileMenu={showingMobileMenu} >
      <div className="content">
        <XIcon>
          <div
            className="iconContent"
            onClick={() => (openMobileMenu(false))} >
            <Cross />
          </div>
        </XIcon>
        <ul>
          <li>
            <Label
              onClick={() => (goToPageFunc(openMobileMenu, goToPage, DISCOVER_PAGE, currentHistory))}
              currentPathname={currentPathname}
              targetLocation={DISCOVER_PAGE} >
              Discovery
            </Label>
          </li>
          {/* <li>
            <Label
              onClick={() => (goToPageFunc(openMobileMenu, goToPage, WATCH_LIST_PAGE, currentHistory))}
              goToPage={goToPage}
              currentPathname={currentPathname}
              targetLocation={WATCH_LIST_PAGE} >
              Watchlist
            </Label>
          </li> */}
        </ul>
      </div>
    </MobileMenuWrapper>
  </>
));