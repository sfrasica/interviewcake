// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, index) => {
      return char === str[str.length - index - 1]
    })
  }
  
  
  module.exports = palindrome;
  
  // soln 1
  
  // let reversedString = str.split('').reduce((rev, char) => {
  //     return char + rev
  // }, '')
  
  // return str === reversedString ?  true :  false
  
  // refactor to 
  // return str === reversedString
  
  // solution 2
  // .every() returns a boolean depending on the function you pass in as an argument
  // return str.split('').every((character, index) => {
  //     return character === str[str.length - index -1]
  // })
  // using every. Using a callback fn, checks if every element passes the condition
  // callback
  // A function to test for each element, taking three arguments:
  // 
  // The current element being processed in the array.
  
  //Solution 2 has a problem. We're checking twice the elements that we need to. if element 0 and -1 are the same, when we check -1, we'll have already checked it when we checked 0