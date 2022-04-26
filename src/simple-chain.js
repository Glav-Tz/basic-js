const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  newArr : [],
 
 getLength() { 
 return this.newArr.length;    
 },
 
 addLink(value) {    
   value = String(value)    
   if (value === "undefined") {
     this.newArr.push("( )~~");
   } else {
     this.newArr.push(`( ${value} )~~`);      
   }  
 return this;
 },
 
 removeLink(position) {    
  if (isNaN(position) === true) {
    this.newArr = []     
    throw new Error("You can't remove incorrect link!");
  };
  if (Number.isInteger(position) !== true) {
    this.newArr = []     
    throw new Error("You can't remove incorrect link!");
  }
   if (this.newArr[position] === undefined) {
    this.newArr = []
    throw new Error("You can't remove incorrect link!");
  }
  if (position <= 0) {
    this.newArr = []
    throw new Error("You can't remove incorrect link!");
  }      
  this.newArr = this.newArr.filter((vl, index) => {
    return index !== (position - 1)
   });    
   return this;
 },
 
 reverseChain() {     
   this.newArr = this.newArr.reverse();     
 return this;
 },
 
 finishChain() {    
   let strChain = this.newArr.join("")
   strChain = strChain.slice(0,-2)
   this.newArr = []
 return strChain;    
 },
 
};

module.exports = {
  chainMaker
};
