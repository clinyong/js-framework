const assign = require("../assign");
const { test } = require("ava");

test("Object.assign", t => {
  t.throws(() => assign(null));

  t.deepEqual(assign({}, { name: "leo" }, { age: 18 }), {
    name: "leo",
    age: 18
  });
});
