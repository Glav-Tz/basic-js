const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let newArr = []
  let newArr2 = []
  let honestStr = ""
  let strNewArr = ""
    
  if (options.separator === "" || typeof options.separator === "undefined") {
    options.separator = "+"
  }
  if (options.additionSeparator === "" || typeof options.additionSeparator === "undefined") {
    options.additionSeparator = "|"
  }
    
  if (typeof str !== "undefined" && str !== "") {
    honestStr = String(str)  
  }  

  if (typeof options.additionRepeatTimes !== "undefined" && options.additionRepeatTimes !== "") {  
   
      for (let i = 0; i < options.additionRepeatTimes; i++) { 
        newArr.push(String(options.addition))
        newArr.push(options.additionSeparator)  
      }
    newArr.pop()
    newArr.unshift(honestStr)
    strNewArr = newArr.join("")
    
  } else {
    
    newArr.push(String(options.addition))
    newArr = newArr.filter((element) => {
      return element !== "undefined"
    })
    newArr.unshift(honestStr)
    strNewArr = newArr.join("") 
    
  }
  
  if (typeof options.repeatTimes !== "undefined" && options.repeatTimes !== "") {  
  
      for (let i = 0; i < options.repeatTimes; i++) {  
      newArr2.push(strNewArr)
      newArr2.push(options.separator)
      }
    newArr2.pop()
    strNewArr = newArr2.join("")
  }     
  
  return(strNewArr)
}

module.exports = {
  repeater
};
