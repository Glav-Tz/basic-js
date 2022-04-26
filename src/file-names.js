const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let counter = 1;
  for (iOne = 0; iOne < names.length; iOne++) {
    for (iTwo = iOne + 1; iTwo < names.length; iTwo++) {
      if (names[iOne] === names[iTwo]) {
        names[iTwo] = `${names[iTwo]}(${counter})`;
        counter++;
      };
    };
    counter = 1;
  };  
  return names;
}

module.exports = {
  renameFiles
};
