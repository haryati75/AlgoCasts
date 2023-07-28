// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Solution 3 - Stephen Grider
  const chunked = []; // create empty array to hold chunks
  for (let element of array) {
    // for each element in the unchunked array ...
    const last = chunked[chunked.length - 1]; // retrieve the last element in chunked

    if (!last || last.length === size) {
      // if last element does not exist, or if its length is equal to chunk size
      chunked.push([element]); // push a new chunk into chunked with the current element
    } else {
      // else add the current element into the chunk
      last.push(element);
    }
  }
  return chunked;
}

module.exports = chunk;

// Solution 2 - adapted from co-pilot
// const result = [];
// // create slices of the array with the given size
// // push the slices into the result array
// for (let index = 0; index < array.length; index += size) {
//   result.push(array.slice(index, index + size));
// }
// return result;

// Solution 1 - mine
// const result = [];
// let part = [];
// for (let number of array) { // traverse the array from first to last element
//   if (part.length < size) {
//     part.push(number);
//   } else {
//     result.push(part);
//     part = [number];
//   }
// }
// result.push(part); // push remaining part
// return result;
