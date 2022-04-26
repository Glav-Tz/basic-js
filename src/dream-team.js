const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrCom) {
  if (Array.isArray(arrCom) !== true) {
    return false;
  };
  let arrName = [];
  for (let element of arrCom) {
    if (typeof(element) === "string") {
      element = element.trimStart()   
      arrName.push(element[0].toUpperCase());    
    } 
  }  
  let strNameToUp = (arrName.sort()).join("")
  return(strNameToUp);
}

module.exports = {
  createDreamTeam
};
