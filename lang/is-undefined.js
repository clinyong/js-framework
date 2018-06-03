// undefined is a variable, not a value ...
module.exports = function isUndefined(obj) {
    return obj === void 0;
}
