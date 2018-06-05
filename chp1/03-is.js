function toString(obj) {
  return Object.prototype.toString.call(obj);
}

const rArrayLike = /(Array|List|Collection|Map|Arguments|Set)\]$/;

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

exports.isWindow = function isWindow(obj) {
  return /^\[object (Window|DOMWindow|global)\]$/.test(toString.call(obj));
};

// 判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象
exports.isArrayLike = function isArrayLike(obj) {
  if (obj && typeof obj === "object") {
    const n = obj.length,
      str = toString(obj);

    if (rArrayLike.test(str)) {
      return true;
    } else if (str === "[object Object]" && n === n >>> 0) {
      // Using >>> 0 ensures you've got an integer between 0 and 0xFFFFFFFF.
      return true;
    }
  }

  return false;
};
