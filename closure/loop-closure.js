/**
 * Problem:
 * Create 5 functions in a loop, each logging its index.
 * Using var, all functions log 5 due to function scope and shared binding.
 * Using let, each iteration has a new block-scoped binding, so values are preserved.
 */

let fns = [];

// for (var 0 = 1; i < 5; i++) {
//   fns.push(() => console.log(i));
// }

for (let i = 0; i < 5; i++) {
  fns.push(() => console.log(i));
}

fns[0]();
fns[1]();
fns[2]();
fns[3]();
fns[4]();

/**
 * With var:
 * A single function-scoped variable is shared across all iterations.
 * All functions capture the same binding, which ends as 5.
 *
 * With let:
 * Each iteration creates a new block-scoped binding.
 * Each function captures its own binding, so outputs differ.
 */
