const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrCat) {
  let catEars = 0;
  const newArr = (arrCat.flat());
    for (let element of newArr) {      
      if (element === "^^") {
        catEars = catEars + 1;
      };
  };
return(catEars);
} 


module.exports = {
  countCats
};
