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

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += "#"
            } else {
                stair += " "
            }
        }
        console.log(stair)
    }
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