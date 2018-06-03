const isNaN = require("../is-nan");
const isNull = require("../is-null");
const isUndefined = require("../is-undefined");
const { test } = require("ava");

test("isNaN", t => {
  t.is(isNaN(NaN), true);
  t.is(isNull({}), false);
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
