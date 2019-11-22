import {
  UPDATE_HISTORY
} from '../helpers/constants';

const initialState = {
  currentHistory: {},
  currentPathname: ''
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  
  if(type === UPDATE_HISTORY) {
    return Object.assign({}, state, {
      currentHistory: payload,
      currentPathname: payload.location.pathname
    });
  };

  return state;
};

export default rootReducer;