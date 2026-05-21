/**
 * Problem:
 * Implement partial(fn, ...presetArgs) using closures.
 *
 * Requirements:
 * - partial should return a new function.
 * - The returned function must remember presetArgs
 *   using closure.
 * - When the returned function is called, combine:
 *   - presetArgs
 *   - new arguments
 * - Then invoke the original function with all arguments.
 *
 * - Use:
 *   - rest parameters
 *   - spread syntax
 *   - closures
 *
 * Test cases:
 * - Create add5 from add
 * - Create multiplyBy3 from multiply
 * - Test multiple preset arguments
 * - Test variadic functions
 */

function partial(fn, ...presetArgs) {
  return function (...newArgs) {
    return fn(...presetArgs, ...newArgs);
  };
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

function product(...nums) {
  return nums.reduce((acc, n) => acc * n, 1);
}

const add5 = partial(add, 5);
console.log(add5(3));

const multiplyBy3 = partial(multiply, 3);
console.log(multiplyBy3(5));

const sumWith10 = partial(sum, 10);
console.log(sumWith10(1, 2, 3));

const multiplyPreset = partial(product, 2, 3);
console.log(multiplyPreset(4, 5));
