import { DISCOVER_PAGE } from './constants';

export const goToDiscovery = (currentHistory, param) => {
  currentHistory.push(process.env.PUBLIC_URL + DISCOVER_PAGE + '/' + param);
};