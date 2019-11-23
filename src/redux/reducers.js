import {
  UPDATE_HISTORY,
  OPEN_MOBILE_MENU
} from '../helpers/constants';

const initialState = {
  currentHistory: {},
  currentPathname: '',
  showingMobileMenu: false
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;


  if(type === UPDATE_HISTORY) {
    return Object.assign({}, state, {
      currentHistory: payload,
      currentPathname: payload.location.pathname
    });
  } else if(type === OPEN_MOBILE_MENU) {
    return Object.assign({}, state, { showingMobileMenu: payload });
  };

  return state;
};

export default rootReducer;