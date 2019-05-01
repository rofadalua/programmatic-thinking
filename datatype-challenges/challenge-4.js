// Challenge 4
// Write a function that returns 1.
// Do not write 1.

var obj = {
  foo: {
    baz: {
      bar: 1
    }
  }
};

var somethingElse = function() {
  return obj.foo.baz.bar
};

var result = somethingElse()
