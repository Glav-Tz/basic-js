const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newArr = []
  for (let el in arr) {
    if (arr[el] === -1) {
      newArr.push(Number(el))
    }
  }
  arr = arr.filter((el) => {
    return el !== -1 
  })  
  arr.sort((a,b) => {
    return a - b
  })
  
  for (let el of newArr) {
    arr.splice(el, 0, -1);
  }   
  return(arr)
}

module.exports = {
  sortByHeight
};
