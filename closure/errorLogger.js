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

function createLogger(prefix, level) {
  const levels = {
    info: 1,
    warn: 2,
    error: 3,
  };

  function shouldLog(currentLevel) {
    return levels[currentLevel] >= levels[level];
  }

  return {
    // info(message) {
    //   if (levels.info >= levels[level]) {
    //     console.log(`${prefix}, ${message}`);
    //   }
    // },

    info(message) {
      if (shouldLog("info")) {
        console.log(`${prefix}, ${message}`);
      }
    },
    warn(message) {
      if (shouldLog("warn")) {
        console.log(`${prefix}, ${message}`);
      }
    },
    error(message) {
      if (shouldLog("error")) {
        console.log(`${prefix}, ${message}`);
      }
    },
  };
}

const logger = createLogger("[API]", "warn");
logger.info("started"); // should not log
logger.warn("slow response"); // should log
logger.error("server down"); // should log
