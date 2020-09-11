// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';
 
    for (let char of str) {
        if (charMap[char]) {
         charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
 
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
 
    return maxChar;
 }
 
   
 // Use if you see questions like:
 // What is the most common character in a string?
 // Does string A have the same characters as string B? (anagram)
 // Does the given string have any repeated characters in it?
 
 // create a hash table. Chars are keys, number of times are values
 
 //Use for in loop when it's an object
 //Use for of loop for iterables like an array
 
 //Create an object with a loop by pushing elements into an object. Those are keys, values are the number of occurrences in string.
 // loop through the object and reassign the max value and max char as you loop.
 //return the maxChar;
 
 module.exports = maxChar;
 