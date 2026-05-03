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
