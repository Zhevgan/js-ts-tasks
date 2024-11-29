/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  // Auxiliary function for verification
  const isPrime = Number => {
    if (Number < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(Number); i++) {
      if (Number % i === 0) return false;
    }
    return true;
  };

  // We return a function that generates prime numbers
  return function (from, to) {
    if (from < 0 || to > highestNumber) {
      throw new Error('Bounds are out of range');
    }

    // We create an array of prime numbers
    const primes = [];
    for (let i = Math.max(2, from); i <= to; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    // We return an array of prime numbers
    return primes; //
  };
};
