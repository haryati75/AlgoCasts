// --- Directions
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

// assumes n is a positive integer > 0

function steps(n, row = 0, stair = '') {
  // print n lines
  // each line has n characters

  // Solution #3 - recursive
  // base case - row === n (we're done)
  if (n === row) return;

  // Print completed stair string:
  // if the stair string has a length === n, print it
  // increment row with new stair string
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // Assemblies the stair string recursively:
  // if the length of the stair string is less than or equal to the row number, add a '#'
  // otherwise add a space
  stair += stair.length <= row ? '#' : ' ';
  steps(n, row, stair);
}

module.exports = steps;

// Solution #1 - javascript repeat method
// for (let i = 1; i <= n; i++) {
//   console.log('#'.repeat(i) + ' '.repeat(n - i));
// }

// Solution #2 - row, column iteration
// for (let i = 0; i < n; i++) {
//   let step = '';
//   for (let j = 0; j < n; j++) {
//     step += j <= i ? '#' : ' ';
//   }
//   console.log(step);
// }
