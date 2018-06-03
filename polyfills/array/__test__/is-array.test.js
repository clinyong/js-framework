const isArray = require("../is-array");
const { test } = require("ava");

test("Array.isArray", t => {
  t.is(isArray([]), true);
  t.is(isArray({}), false);
});
