// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let words = [];
  
    for (let word of str.split(' ')) {
       words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
  }
  
  module.exports = capitalize;
  
  
  //************Soln 1
  /*
  Make an empty array
  
  Split string by spaces to make each word an element and get an array.
  Loop through str array and uppercase first letter in each word aka element in array. 
  Join rest of the word to first letter using slice.
  Push the words into the empty array
  
  return the rejoined string
  
  */
  
  /*
      **********Soln 2***********
      Create an empty string
      for each char in the string,
          if char to the left is a space,
          capitalize the char and add it to result
          else
              add it to result
  
  
  
  function capitalize(str) {
      let result = str[0].toUpperCase();
      let splitString = str.split('');
  
      for (let i = 1; i < str.split('').length; i++) {
         if (splitString[i - 1] === ' ') {
              result += splitString[i].toUpperCase();
          } else {
              result += splitString[i];
          }
      }
     return result;
  }
  
  */
  