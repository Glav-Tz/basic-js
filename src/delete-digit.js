const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arrFinValue = []; 
  let strN = String(n);
  let arrNum = [...strN].map(i => Number(i));
  
  if (arrNum.length > 3 && arrNum[1] > 0) {
    let length = arrNum.length;
    let firstPart = arrNum.slice(0, length - 3);
    let secondPart = arrNum.slice(length - 3, length);
    arrFinValue.push(firstPart);
    arrFinValue.push(maxValue(secondPart));
    arrFinValue = arrFinValue.flat();
    console.log(Number(arrFinValue.join("")));
    return Number(arrFinValue.join(""));
  } else {    
    return maxValue(arrNum)
  }
   
   function maxValue(arrN) {   
    if (arrN[0] > arrN[1]) {
      arrN.splice(1,1);      
      return Number(arrN.join(""));
    } else {
      arrN.shift();      
      return Number(arrN.join(""));
    };
   };
}

module.exports = {
  deleteDigit
};
