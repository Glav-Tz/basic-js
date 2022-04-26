const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  function compareNumbers(a, b) {
    return a.length - b.length;
  }
  let sumElem = 0
  let exclusion = 0  
  let sortArr = []
  let taskName = []
  domains.sort(compareNumbers)
    if (typeof domains[0] === "undefined") {
      return {}
    }
  let lastElement = domains[domains.length - 1].split(".")
  let maxSubdomains = lastElement.length
  //console.log(domains.split("."))  
    for (let i = 1; i <  lastElement.length; i++) {
      let desiredElement = lastElement.slice(i * (-1))    
      taskName.push(`.${desiredElement[0]}`)
      
      desiredElement = desiredElement.join(".")    
      for (let element of domains) {
        if (element.indexOf(desiredElement)!== -1) {
          sumElem++
        }      
      }
      let strTaskName = taskName.join("")
      exclusion = (strTaskName.length) - 1
      let objArr = []
          objArr.push(strTaskName, sumElem)
      //console.log(objArr)
      sortArr.push(objArr.flat())
      sumElem = 0
    }
    let remainsArr = domains.filter((element) => {
      return element.length > exclusion
    });
    for (let element of remainsArr) {
      let counting = remainsArr.filter(el => el === element)
      counting = counting.length
      taskName = element.split(".")
      taskName.reverse()
      //let laElTaskName = taskName.pop()
      taskName = taskName.join(".")  
      taskName = `.${taskName}` //${laElTaskName}.
      let objArr = []
          objArr.push(taskName, counting)
      //console.log(objArr)
      sortArr.push(objArr)
      
    }
  
   const finObj = Object.fromEntries(sortArr);
   return(finObj)
    
    
  }

module.exports = {
  getDNSStats
};
