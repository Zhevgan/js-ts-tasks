/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) return []; // Handle empty array

  let streak = [arr[0]];
  let maxStreak = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      streak.push(arr[i]);
    } else {
      if (streak.length > maxStreak.length) {
        maxStreak = streak;
      }
      streak = [arr[i]];
    }
  }

  if (streak.length > maxStreak.length) {
    maxStreak = streak;
  }

  return maxStreak;
};

const testCases = [
  { input: [2, 2, 2], expected: [2, 2, 2] },
  { input: [2, 2, 2, 3, 3, 3, 3], expected: [3, 3, 3, 3] },
  { input: [-1, -1, -1], expected: [-1, -1, -1] },
  { input: [0.11, 0.11, 1.1], expected: [0.11, 0.11] },
  { input: [5, 5, 6], expected: [5, 5] },
  { input: [0, 0, 0], expected: [0, 0, 0] },
  { input: [], expected: [] },
  { input: [1], expected: [1] },
  { input: [1, 1, 2, 2, 2, 1, 1, 1], expected: [2, 2, 2] },
];

testCases.forEach(({ input, expected }, index) => {
  const result = module.exports.getMaximalSequence(input);
  console.log(`Test ${index + 1}:`, result.toString() === expected.toString() ? 'Passed' : 'Failed');
});
