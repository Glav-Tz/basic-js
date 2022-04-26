const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let sumElement = 1
  let strArr = []
  
  str = [...str]
  for (i = 1; str.length !== 0; i++) {    
    if (str[0] === str[i]) {
      sumElement++
      str.splice(1, 1)
      i = 0      
    } else {        
          if (sumElement === 1) {
            strArr.push(str[i - 1])
            str.splice(0, 1)
            i = 0
          } else {
            strArr.push(sumElement, str[i - 1]) 
            sumElement =1
            str.splice(0, 1)
            i = 0
          } 
    }
  }
  return(strArr.join(""))
}

module.exports = {
  encodeLine
};
