const { isArray } = require("../02-array");
const { test } = require("ava");

test("Array.isArray", t => {
  t.is(isArray([]), true);
  t.is(isArray({}), false);
});
