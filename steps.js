// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }
  
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }
  
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair)
  }

module.exports = steps;



/* Soln 1
    From 0 to n
        create an empty string 'stair'
         From 0 to n
            If current columnt <= current row
                Add a "#" to stair
            Else 
                Add a " " to stair

        Console.log(stair)

        In the first for loop



*/

/*
Recursive solution
Establish a base case


*/