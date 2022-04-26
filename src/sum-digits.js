const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function sum(arr) {
  let amount = arr.reduce((sum, current) => {
  return sum + Number(current);
}, 0);
  return amount;
}

function getSumOfDigits(n) {
  let strN = String(n);
  let newArr = [...strN];
  let total = sum(newArr);
  
  if (String(total).length >= 2) {
    return getSumOfDigits(total);
  } else {
    return total;
  };
};

module.exports = {
  getSumOfDigits
};
