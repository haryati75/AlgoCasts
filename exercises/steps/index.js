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

function steps(n) {
  // Solution #1
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }

  // Solution #2
  // for (let i = 0; i < n; i++) {
  //   let step = '';
  //   for (let j = 0; j < n; j++) {
  //     step += j <= i ? '#' : ' ';
  //   }
  //   console.log(step);
  // }
}

module.exports = steps;
