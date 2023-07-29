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
  // Solution 2
  // sort the strings
  const sortedA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const sortedB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  // compare the strings
  return sortedA === sortedB;
}

module.exports = anagrams;

// Solution 1
// const buildCharMap = (str) => {
//   const charMap = {};
//   // traverse characters in a string and count the number of times a character appears
//   // remove spaces and punctuation via regex
//   [...str.replace(/[^\w]/g, '').toLowerCase()].forEach((char) => {
//     charMap[char] = charMap[char] + 1 || 1;
//   });
//   return charMap;
// };

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }
