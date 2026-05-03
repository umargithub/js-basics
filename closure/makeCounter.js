/**
 * Problem:
 * Implement makeCounter() that returns a function.
 * Each call to the returned function should increment
 * and return a private counter value.
 *
 * Create a counter and call it multiple times to verify
 * that the value persists across calls.
 */

function makeCounter(start = 0) {
  let count = start;
  return {
    increment() {
      start++;
    },

    decrement() {
      start--;
    },

    value() {
      return start;
    },
  };
}

const counter1 = makeCounter(100);
const counter2 = makeCounter(0);

counter1.increment();
console.log("counter1", counter1.value());
counter1.decrement();
counter1.decrement();
counter1.decrement();
console.log("counter1", counter1.value());

counter2.increment();
counter2.increment();
counter2.increment();
console.log("counter2", counter2.value());
counter2.decrement();
console.log("counter2", counter2.value());
