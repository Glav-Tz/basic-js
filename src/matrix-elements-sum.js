const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let filterArr = []  
  matrix.reverse()  
  for (let el1 in matrix) {
    for (let el2 in matrix[el1]) {      
      el1 = Number(el1)
      
      if (typeof matrix[el1 + 1] === "undefined" ) {
        filterArr.push(...matrix[el1])
        break
      }      
      if (matrix[el1 + 1][el2] !== 0) {        
        filterArr.push(Number(matrix[el1][el2]))        
      }
    }
  }
  let result = filterArr.reduce((acc,current) => {
    return acc + current
  },0)  
  //console.log(result)
  return(result)
}


module.exports = {
  getMatrixElementsSum
};
