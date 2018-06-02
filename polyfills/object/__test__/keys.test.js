const keys = require("../keys");
const { test } = require("ava");

test("Object.keys", t => {
  const o = {
    name: "leo",
    age: 18
  };

  const list = keys(o);
  t.is(list.length, 2);
  t.is(list.includes("name"), true);
  t.is(list.includes("age"), true);
});
