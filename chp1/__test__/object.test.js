const { assign, keys } = require("../01-object");
const { test } = require("ava");

test("Object.assign", t => {
  t.throws(() => assign(null));

  t.deepEqual(assign({}, { name: "leo" }, { age: 18 }), {
    name: "leo",
    age: 18
  });
});

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
