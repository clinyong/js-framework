const {
  isNaN,
  isNull,
  isUndefined,
  isPlainObject,
  isArrayLike
} = require("../03-is");
const { test } = require("ava");

test("isNaN", t => {
  t.is(isNaN(NaN), true);
  t.is(isNaN({}), false);
  t.is(isNaN(0), false);
  t.is(isNaN(1), false);
});

test("isNull", t => {
  t.is(isNull(null), true);
  t.is(isNull({}), false);
  t.is(isNull(0), false);
  t.is(isNull(1), false);
});

test("isUndefined", t => {
  t.is(isUndefined(undefined), true);
  t.is(isUndefined(void 0), true);
  t.is(isUndefined({}), false);
  t.is(isUndefined(0), false);
  t.is(isUndefined(1), false);
});

test("isPlainObject", t => {
  t.is(isPlainObject({}), true);

  class Person {}
  const p = new Person();
  t.is(isPlainObject(p), false);
});

test("isArrayLike", t => {
  t.is(isArrayLike([]), true);
  t.is(isArrayLike({ length: 0 }), true);
  t.is(isArrayLike(new Map()), true);
  t.is(isArrayLike(new Set()), true);
  t.is(isArrayLike(arguments), true);
});
