/**
 * Problem:
 * Implement once(fn) using closures.
 *
 * Requirements:
 * - once should return a new function.
 * - The returned function should execute fn
 *   only the first time it is called.
 * - Store and return the first result.
 * - On subsequent calls:
 *   - do not execute fn again
 *   - return the previously stored result
 *
 * - Use:
 *   - closures
 *   - rest parameters
 *
 * Test with:
 * - mathematical functions
 * - real-world Node.js style initialization
 */

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (called) {
      return result;
    }

    result = fn(...args);
    called = true;

    return result;
  };
}

/* ---------------------------
   Basic Examples
---------------------------- */

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const addNumbers = once(add);

console.log(addNumbers(2, 7));
console.log(addNumbers(2, 8));

const subtractNumbers = once(subtract);

console.log(subtractNumbers(9, 3));
console.log(subtractNumbers(5, 1));

/* ---------------------------
   Real Node.js Style Example
---------------------------- */

const initializeApp = once(() => {
  console.log("Connecting to database...");
  console.log("Loading environment variables...");
  console.log("Starting server setup...");

  return {
    db: "connected",
    app: "initialized",
  };
});

const app1 = initializeApp();

console.log(app1);

const app2 = initializeApp();

console.log(app2);
