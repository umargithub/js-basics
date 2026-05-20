now give me problem statement like this

/**
 * Problem:
 * Implement createLogger(prefix, level) using closures.
 *
 * Requirements:
 * - Return an object with:
 *   - info(message)
 *   - warn(message)
 *   - error(message)
 *
 * - Each method should prepend the given prefix.
 *
 * - Messages should only be logged if their level
 *   is greater than or equal to the minimum level.
 *
 * - Supported levels:
 *   info < warn < error
 *
 * - Logger instances must be completely independent.
 *
 * Test with two different logger instances.
 */

// function runAsyncOperations() {
//   for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 200);
//   }
// }

// runAsyncOperations();

// function runAsyncOperations() {
//   for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 200);
//   }
// }

// runAsyncOperations();

// async function runAsyncOperations() {
//   const arr = [1, 2, 3];

//   for (const item of arr) {
//     const result = await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(item);
//       }, 200);
//     });

//     console.log(result);
//   }
// }

// runAsyncOperations();

async function runAsyncOperations() {
  const arr = [1, 2, 3];

  try {
    for (const item of arr) {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item);
        }, 200);
      });

      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
}

runAsyncOperations();