/**
 * Problem:
 * Implement makeGreeter(greeting) that returns a function.
 * The returned function should take a name and log:
 * "greeting, name!".
 *
 * Create two functions, sayHello and sayHi, using makeGreeter,
 * and call both with sample names.
 */

function makeGreeter(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

const sayHello = makeGreeter("Hello");
const sayHi = makeGreeter("Hi");

sayHello("Umar");
sayHi("Umar");
sayHi("John");
