import { DISCOVER_PAGE } from './constants';

export const goToProduct = (currentHistory, param) => {
  // Temporary!
  currentHistory.location.pathname = '/BlueKiwi-React/discover/outdoors';
  let pathname = currentHistory.location.pathname;
  if(pathname.includes('/BlueKiwi-React/')) {
    pathname = pathname.split('/BlueKiwi-React');
    debugger
    pathname = pathname[1];
  };
  if(pathname !== '/') {
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