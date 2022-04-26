const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let Quantity = 0;
    Quantity = Quantity + 1
      arr.some((array) => {       
        if (Array.isArray(array)) {
          return Quantity = Quantity + this.calculateDepth(arr.flat());
        }
      })    
      return Quantity;
  }
}

module.exports = {
  DepthCalculator
};
