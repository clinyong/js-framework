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

// 判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例
exports.isPlainObject = function isPlainObject(obj) {
  return (
    typeof obj === "object" && Object.getPrototypeOf(obj) === Object.prototype
  );
};
