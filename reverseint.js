// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
 
    const reversed = n.toString()
                      .split('')
                      .reverse()
                      .join('');
   
       return parseInt(reversed) * Math.sign(n);
   }
   
   reverseInt(45)
    
   module.exports = reverseInt;
   
   /*
   Math.sign(variable) will return 1 if positive number or -1 if negative
   
   parseInt(string) to turn into an integer
   
   .toString(integer) to turn into a string
   
   */