// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  // traverse an array and count the number of times a character appears
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  let max = 0;
  let maxChar = '';
  // traverse an object and find the character with the highest count
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
