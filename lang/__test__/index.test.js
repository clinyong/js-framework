const { isNaN, isNull, isUndefined, isPlainObject } = require("../index");
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
