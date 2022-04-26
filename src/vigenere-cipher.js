const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  isLetter(simbol) {
   const simbolRegex = /[a-z]/i;
    return simbolRegex.test(simbol);
 };
 
   vigenerCipher(elOrigMess, strOrderKey,) {
    let encryptedCharacter = "";
    let strAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptedAlphabet = strAlphabet.split(strOrderKey);
    encryptedAlphabet = `${strOrderKey}${encryptedAlphabet[1]}${encryptedAlphabet[0]}`;
 
    if (this.isEncrypt === false) {   
      let indexEncryptedCharacter = encryptedAlphabet.indexOf(elOrigMess);    
      encryptedCharacter = strAlphabet[indexEncryptedCharacter];
        return encryptedCharacter;
    };
     
    if (this.isEncrypt !== false) {  
      let indexEncryptedCharacter = strAlphabet.indexOf(elOrigMess);    
      encryptedCharacter = encryptedAlphabet[indexEncryptedCharacter];
        return encryptedCharacter;
    };
   };
   
   constructor(directOrReverse) {
     if (typeof directOrReverse === "undefined" || directOrReverse === true) {
       this.isReverse = true;
       this.isEncrypt = "";
     } else {
       this.isReverse = false;
       this.isEncrypt = "";
     };
   };
  
   encrypt(message, key) {
    this.isEncrypt = true;
     let arrMessage = [];
     let arrKey = [];
     let orderArr = [];
     let strOrderKey = "";
     let counterKey = 0;
 
    if (typeof message !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
 
     arrMessage = [...message];
     arrKey = [...key];
 
    arrMessage.forEach((el) => { 
    if (this.isLetter(el) === true) {
      if (arrKey.length > counterKey) {          
        strOrderKey = arrKey[counterKey].toUpperCase();
        orderArr.push(this.vigenerCipher(el.toUpperCase(), strOrderKey));
        counterKey++;
         } else {
            counterKey = 0;
            strOrderKey = arrKey[counterKey].toUpperCase();
            orderArr.push(this.vigenerCipher(el.toUpperCase(), strOrderKey));
            counterKey++;
         };
       } else {
        orderArr.push(el);
       };
   }); 
     
     if (this.isReverse === true) {
       //console.log(orderArr.join(""));
       return(orderArr.join(""));
     } else {
       //console.log((orderArr.reverse()).join(""));
       return(orderArr.reverse()).join("");
     };
   };
   decrypt(message, key) {
     this.isEncrypt = false;
     let arrMessage = [];
     let arrKey = [];
     let orderArr = [];
     let strOrderKey = "";
     let counterKey = 0;
 
    if (typeof message !== "string" || typeof key !== "string") {
      throw new Error("Incorrect arguments!");
    }
 
     arrMessage = [...message];
     arrKey = [...key];
 
    arrMessage.forEach((el) => { 
    if (this.isLetter(el) === true) {
      if (arrKey.length > counterKey) {          
        strOrderKey = arrKey[counterKey].toUpperCase();
        orderArr.push(this.vigenerCipher(el.toUpperCase(), strOrderKey));
        counterKey++;
         } else {
            counterKey = 0;
            strOrderKey = arrKey[counterKey].toUpperCase();
            orderArr.push(this.vigenerCipher(el.toUpperCase(), strOrderKey));
            counterKey++;
         };
       } else {
        orderArr.push(el);
       };
   }); 
     
     if (this.isReverse === true) {
       //console.log(orderArr.join(""));
       return(orderArr.join(""));
     } else {
       //console.log((orderArr.reverse()).join(""));
       return(orderArr.reverse()).join("");
     };
    };
 }

module.exports = {
  VigenereCipheringMachine
};
