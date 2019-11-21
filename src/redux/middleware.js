export function middleware() {
  return function(next) {
    return function(action) {

      // if() {

      // }

      return next(action);
    };
  };
};