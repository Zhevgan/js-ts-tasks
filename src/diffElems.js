/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }

  return unique.length; // We return the number of unique elements
};

// tests
console.log(module.exports.diffElems([1, 2, 3, 4])); // 4
console.log(module.exports.diffElems([1, 2, 3, 4, 5, 6])); // 6
console.log(module.exports.diffElems([1, 1, 2, 2, 3, 3])); // 3
console.log(module.exports.diffElems([4, 4, 4, 4, 4, 4])); // 1
console.log(module.exports.diffElems([1, 2, 2, 3, 4])); // 4
