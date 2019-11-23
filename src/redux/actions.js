import {
  UPDATE_HISTORY,
  OPEN_MOBILE_MENU
} from '../helpers/constants';

export function updateHistory(payload) {
  return { type: UPDATE_HISTORY, payload };
};

export function openMobileMenu(payload) {
  return { type: OPEN_MOBILE_MENU, payload };
};