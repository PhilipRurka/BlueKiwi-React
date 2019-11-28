import { DISCOVER_PAGE } from './constants';

export const goToProduct = (currentHistory, param) => {
  let pathname = currentHistory.location.pathname;
  if(currentHistory.location.pathname !== '/') {
    pathname += '/';
  };
  
  currentHistory.push(process.env.PUBLIC_URL + pathname + param);
};

export const goToDiscovery = (currentHistory, param) => {
  currentHistory.push(process.env.PUBLIC_URL + DISCOVER_PAGE + '/' + param);
};

export const isObjEmpty = (object) => {
  const isEmpty = (Object.keys(object).length === 0 && object.constructor === Object);
  return isEmpty;
};