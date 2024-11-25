/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  const proxyArray = [];

  for (const nun of arr) {
    proxyArray.push(nun);
    if (nun % 2 !== 0) {
      proxyArray.push(100);
    }
  }
  return proxyArray;
};
