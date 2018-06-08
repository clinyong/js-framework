exports.bind = function bind(func, onThis) {
  return function() {
    return func.apply(onThis, arguments);
  };
};

exports.partial = function partial(func, ...args1) {
  return function(...args2) {
    return func.apply(undefined, args1.concat(args2));
  };
};
