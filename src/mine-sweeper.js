const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let sum = 0
  let arrMine = []
  let res = []
  let lengthBox = matrix[0].length
  
  matrix = fromTruthToNumbers(matrix, lengthBox)

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++ ) {
      arrMine.push(matrix[i][j + 1], matrix[i][j - 1])
    if (typeof matrix[i - 1] !== "undefined") {
      arrMine.push(matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i - 1][j - 1])
    }
    if (typeof matrix[i + 1] !== "undefined") {
       arrMine.push(matrix[i + 1][j], matrix[i + 1][j + 1], matrix[i + 1][j - 1])
    }
      console.log(arrMine)
      arrMine = arrMine.filter((el) => {
        return (typeof el !== "undefined")
      })
      sum = arrMine.reduce((acc, element) => {
        return acc + element
      }, 0)
      console.log(sum)
      res.push(sum)
      sum = 0
      arrMine = []
    }    
  }  
  res = fromTruthToNumbers(res, lengthBox)
  return res
}

function fromTruthToNumbers(matrix, lengthBox) {
  let breakdown = 1
  let arrTemp1 = []
  let arrTemp2 = []
   
  
  matrix = matrix.flat()
  for (i = 0; i < matrix.length; i++) {    
    if (lengthBox !== breakdown) {    
      if (matrix[i] === true) {
        matrix[i] = 1        
      }
      if (matrix[i] === false) {
        matrix[i] = 0        
      }
      breakdown++
      arrTemp1.push(matrix[i])
      } else {
          if (matrix[i] === true) {
          matrix[i] = 1        
          }
          if (matrix[i] === false) {
            matrix[i] = 0        
          }
          arrTemp1.push(matrix[i])
          breakdown = 1
          arrTemp2.push(arrTemp1)
          arrTemp1 = []        
      }
  }
  return(arrTemp2)
}


module.exports = {
  minesweeper
};
