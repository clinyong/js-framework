module.exports = function assign(target, ...rest) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  const to = Object(target);

  rest.forEach(source => {
    Object.keys(source).forEach(k => {
      to[k] = source[k];
    });
  });

  return to;
};
