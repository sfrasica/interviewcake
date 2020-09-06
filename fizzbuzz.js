// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const cleanStringA = cleanString(stringA);
    const cleanStringB = cleanString(stringB);

   return cleanStringA === cleanStringB ? true : false;
}

function cleanString(str) {
    return str.replace(/[^\w]/g,'').split('').sort().join('').toLowerCase();
}




// ************Soln 1***************
//Create a character map with a helper function. Then build a char map out of each string to compare the keys. 
//Using RegEx to parse out only the letters we need to look at. 
//Check that the number of keys is different, return false
//Check that the values for each key are the same
// loop through a string to replace every char with empty string. Lowercase all chars for consistency
// increment the value of charMap[char] if it exists in the object, otherwise assign it a value of 1. Appearing for the first time.

//in anagrams fn, check that length of objects are the same. 
//Iterate through one charMap, compare to the other to ensure values of each char are the same. 
//Iterate through an object, use for in. Iterate through an array, use for of.

// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);

//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     }

//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(string) {
//   const charMap = {};

//   for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }


//***********Soln 2 ************************
/*
// Use a helper function to clean up string. replace(/[^\w]/g,'').split('').sort().join('')

pass in args into helper fn in anagrams fn and compare the two cleaned up strings

Don't forget to put return in the helper function to return cleaned up string
*/








module.exports = anagrams;
