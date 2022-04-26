const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
  
if (typeof sampleActivity !== "string") {
  return false;
}

let sampleActivityNum = Number(sampleActivity);
  
if (Number.isNaN(sampleActivityNum)) {
  return false;
};

if (0 >= sampleActivityNum || sampleActivityNum > 15) {
  return false;
};

let age = HALF_LIFE_PERIOD / (0.693 / (Math.log(MODERN_ACTIVITY / sampleActivityNum)));

return Math.ceil(age);
}

module.exports = {
  dateSample
};
