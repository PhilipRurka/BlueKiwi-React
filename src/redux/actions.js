import {
  UPDATE_HISTORY
} from '../helpers/constants';

export function updateHistory(payload) {
  return { type: UPDATE_HISTORY, payload };
};