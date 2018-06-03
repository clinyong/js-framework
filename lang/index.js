// typeof NaN => number ...
exports.isNaN = function isNaN(obj) {
  return obj !== obj;
};

// typeof null => object ...
exports.isNull = function isNull(obj) {
  return obj === null;
};

// undefined is a variable, not a value ...
exports.isUndefined = function isUndefined(obj) {
  return obj === void 0;
};
