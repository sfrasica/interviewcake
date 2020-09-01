// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  
}

module.exports = capitalize;


//************Soln 1
/*
Make an empty array

Split string by spaces to make each word an element and get an array.
Loop through str array and uppercase first letter in each word aka element in array.
Join rest of the word to first letter. To get the rest of the word, use .slice 1
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

*/