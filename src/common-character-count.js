const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let commonSymbols = 0;  
  let arrS1 = [];
  let arrS2 = [];
    
  arrS1 = [...s1];
  arrS2 = [...s2];
  
    for (let element of arrS1) {
    const coincidence = (test) => test === element;
    let indexElArr2 = arrS2.findIndex(coincidence);
   
      if (indexElArr2 !== - 1) {
        commonSymbols++;
        arrS2.splice(indexElArr2,1);
     };
   };    
    
    return (commonSymbols);
  }

module.exports = {
  getCommonCharacterCount
};
