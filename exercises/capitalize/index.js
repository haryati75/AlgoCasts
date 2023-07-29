// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Solution 1:
  // split the string into an array of words
  // capitalize the first letter of each word
  // join the words back together
  return (
    str &&
    str
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ')
  );
}

module.exports = capitalize;
