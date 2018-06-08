const { bind, partial } = require("../02-function");
const { test } = require("ava");

test("bind function", t => {
  const obj = {
    sayName(name) {
      return name;
    }
  };

  function getName(name) {
    return this.sayName(name);
  }

  t.throws(getName); // this is undefined
  t.is(bind(getName, obj)("leo"), "leo");
});

test("partial function", t => {
  function add(a, b, c) {
    return a + b + c;
  }

  const add10 = partial(add, 10);

  t.is(add10(2, 3), 15);
});
