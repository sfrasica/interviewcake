// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
       words.push(word[0].toUpperCase() + word.slice(1))
    
    }

    return words.join(' ');
   
}

module.exports = capitalize;


//************Soln 1
/*
Make an empty array

Split string by spaces to make each word an element and get an array.Loop through str array and uppercase first letter in each word aka element in array. Join rest of the word to first letter.
Push the words into the empty array

return the rejoined string

*/