module.exports = function keys(obj) {
  const list = [];

  for (let i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
      list.push(i);
    }
  }

  return list;
};
