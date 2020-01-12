import {
  UPDATE_HISTORY,
  OPEN_MOBILE_MENU,
  UPDATE_LISTS
} from '../../utils/redux/redux.constants';

const initialState = {
  currentHistory: {},
  currentPathname: '',
  showingMobileMenu: false,
  productsList: {},
  discoveriesList: {}
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
    
  } else if(type === UPDATE_LISTS) {
    const { products, discoveries } = payload;

    return Object.assign({}, state, {
      productsList: { ...products },
      discoveriesList: { ...discoveries }
    });
  };

  return state;
};

export default rootReducer;