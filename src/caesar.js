// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

    function caesar(input, shift, encode = true) {
      //If the shift value is not present, equal to 0
      //if less than -25, or greater than 25, the function should return false.
      if(!shift || shift === 0 || shift < -25 || shift > 25) {
        return false
      }
      //Spaces should be maintained throughout    
      //will allow to shift to the right
      if(encode === false){
        shift = 0 - shift;
      }
      //Capital letters can be ignored.
      const character = input.toLowerCase().split("")
      //should wrap around to the front of the alphabet (e.g. "z" becomes "c")
      const secret = character.map((letter) => {
        let ascii = letter.charCodeAt(0) - 97
        if (ascii < 0 || ascii > 26) {
          return letter
        }
  
        ascii = ascii + shift;
        if (ascii < 0){
          ascii += 26;
        }
          ascii = ascii % 26;
          ascii += 97
          return String.fromCharCode(ascii)
        
      })
      return secret.join("")
      }
    
  
    return {
      caesar,
    };

  })();
  

module.exports = caesarModule.caesar;