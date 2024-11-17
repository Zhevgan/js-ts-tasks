/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let sum = 0;

  if (end < start) {
    const temp = end;

    end = start;

    start = temp;
  }

  for (let i = end; i >= start; i--) {
    // i-- считает с конца
    sum += i;
  }

  return sum;
};
