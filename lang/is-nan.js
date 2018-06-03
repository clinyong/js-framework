// typeof NaN => number ...
module.exports = function isNaN(obj) {
  return obj !== obj;
};
