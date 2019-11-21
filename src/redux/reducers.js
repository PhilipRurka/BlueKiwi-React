import {
  PLACEHOLDER
} from '../helpers/constants';

const initialState = {
  placeholder: ''
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  
  if(type === PLACEHOLDER) {
    return Object.assign({}, state, { placeholder: payload })
  };

  return state;
};

export default rootReducer;