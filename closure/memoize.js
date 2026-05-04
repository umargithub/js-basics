/**
 * Problem:
 * Implement memoize(fn) using a closure.
 * The cache (Map) must live inside memoize, not globally.
 * Each memoized function should have its own independent cache.
 * Test with two different memoized functions.
 */

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("function is cached", key, cache.get(key));
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const add = memoize(function (a, b) {
  return a + b;
});
const square = memoize((n) => n * n);

console.log(add(4, 6));
console.log(add(4, 7));
console.log(add(4, 6));

console.log(square(4));
console.log(square(7));
console.log(square(4));
