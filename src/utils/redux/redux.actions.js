import {
  UPDATE_HISTORY,
  OPEN_MOBILE_MENU,
  UPDATE_LISTS
} from '../../utils';

export function updateHistory(payload) {
  return { type: UPDATE_HISTORY, payload };
};

export function openMobileMenu(payload) {
  return { type: OPEN_MOBILE_MENU, payload };
};

export function updateLists(payload) {
  return { type: UPDATE_LISTS, payload };
};