const { repeat1, repeat2, byteLen } = require("../01-string");
const { test } = require("ava");

test("simple string repeat", t => {
  t.is(repeat1("foo", 1), "foo");
  t.is(repeat1("foo", 3), "foofoofoo");
});

test("better string repeat", t => {
  t.is(repeat2("foo", 1), "foo");
  t.is(repeat2("foo", 2), "foofoo");
  t.is(repeat2("foo", 3), "foofoofoo");
});

test("count string length", t => {
  t.is(byteLen("hello你好"), 9);
});
