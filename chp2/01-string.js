exports.repeat1 = function repeat1(target, n) {
  // 参数校验
  // ...

  let s = "";
  for (let i = 0; i < n; i++) {
    s += target;
  }

  return s;
};

// 性能比较好的版本
exports.repeat2 = function repeat2(target, n) {
    // TODO: 还没实现出来，用二分法去累加，减少循环次数

  let s = target,
    total = "";

  while (n > 0) {
    if (n % 2 === 1) {
      total += s;
    }

    if (n === 1) {
      break;
    }

    s += s;
    n = n >> 1;
  }

  return s;
};
