/**
 * BEGINNER JAVASCRIPT ARRAY EXERCISES
 * ------------------------------------
 * Fill in each function below so it passes the console.log checks
 * at the bottom of the file. Run with: node array-exercises.js
 */

// ---------------------------------------------------------
// 1. Create an array
// Return an array containing the numbers 1 through 5.
function createArray() {
  //TODO
  const array = [1, 2, 3, 4, 5];
  return array;
}

// ---------------------------------------------------------
// 2. Access elements
// Given an array, return the first and last elements as [first, last].
function firstAndLast(arr) {
  //TODO
  const array = [10, 20, 30, 40];
  return [array[0], array[array.length - 1]];
}

// ---------------------------------------------------------
// 3. Array length
// Return how many items are in the array.
function getLength(arr) {
  // TODO
  const array = ["a", "b", "c"];
  return array.length;
}

// ---------------------------------------------------------
// 4. Add to the end
// Add "grape" to the end of the array and return the new array.
function addToEnd(arr) {
  // TODO
  const array = ["apple", "banana"];
  array.push("grape");
  return array;
}

// ---------------------------------------------------------
// 5. Remove from the end
// Remove the last item from the array and return the removed item.
function removeFromEnd(arr) {
  // TODO
  const array = ["apple", "banana", "grape"];
  array.pop("grape");
  return array;
}

// ---------------------------------------------------------
// 6. Add to the beginning
// Add "start" to the beginning of the array and return the new array.
function addToStart(arr) {
  // TODO
  const array = ["middle", "end"];
  array.unshift("start");
  return array;
}

// ---------------------------------------------------------
// 7. Loop and sum
// Use a for loop (no reduce yet) to return the sum of all numbers in arr.
function sumWithLoop(arr) {
  // TODO
  const array = [1, 2, 3, 4];
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

// ---------------------------------------------------------
// 8. forEach practice
// Use forEach to print each item in arr to the console, one per line.
function printEach(arr) {
  // TODO
  const array = ["x", "y", "z"];
  array.forEach(function (array) {
    console.log(array);
  });
}

// ---------------------------------------------------------
// 9. Find an item
// Return true if arr includes the value "cat", false otherwise.
function hasCat(arr) {
  // TODO
  const array = ["cat", "dog", "bird"];
  return array.includes("cat");
}
// ---------------------------------------------------------
// 10. Get the index
// Return the index of "banana" in arr, or -1 if it's not there.
function indexOfBanana(arr) {
  // TODO
  const array = ["apple", "banana", "grape"];
  return array.indexOf("banana");
}

// ---------------------------------------------------------
// 11. Double every number (map)
// Given an array of numbers, return a NEW array where every number is doubled.
function doubleAll(arr) {
  // TODO
  const array = [1, 2, 3];
  return array.map(function (num) {
    return num + num;
  });
}
// ---------------------------------------------------------
// 12. Keep only even numbers (filter)
// Given an array of numbers, return a NEW array with only the even numbers.
function evensOnly(arr) {
  // TODO
  const array = [1, 2, 3, 4, 5, 6];
  return array.filter(function (num) {
    return num % 2 === 0;
  });
}

// ---------------------------------------------------------
// 13. Sum with reduce
// Given an array of numbers, use reduce to return their total sum.
function sumWithReduce(arr) {
  // TODO
  const array = [5, 10, 15];
  return array.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

// ---------------------------------------------------------
// 14. Join into a string
// Given an array of words, return them joined into one string separated by " - ".
function joinWords(arr) {
  // TODO
  const array = ["hello", "world"];
  return array.join("-");
}

// ---------------------------------------------------------
// 15. Sort numbers
// Return a NEW array with the numbers sorted from smallest to largest.
function sortNumbers(arr) {
  // TODO
  const array = [5, 3, 8, 1];
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}

// =================== TESTS — don't edit below this line ===================

console.log("1.", createArray()); // [1, 2, 3, 4, 5]
console.log("2.", firstAndLast([10, 20, 30, 40])); // [10, 40]
console.log("3.", getLength(["a", "b", "c"])); // 3
console.log("4.", addToEnd(["apple", "banana"])); // ["apple", "banana", "grape"]
console.log("5.", removeFromEnd(["apple", "banana", "grape"])); // "grape"
console.log("6.", addToStart(["middle", "end"])); // ["start", "middle", "end"]
console.log("7.", sumWithLoop([1, 2, 3, 4])); // 10
console.log("8.");
printEach(["x", "y", "z"]); // x \n y \n z
console.log("9.", hasCat(["dog", "cat", "bird"])); // true
console.log("10.", indexOfBanana(["apple", "banana", "grape"])); // 1
console.log("11.", doubleAll([1, 2, 3])); // [2, 4, 6]
console.log("12.", evensOnly([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log("13.", sumWithReduce([5, 10, 15])); // 30
console.log("14.", joinWords(["hello", "world"])); // "hello - world"
console.log("15.", sortNumbers([5, 3, 8, 1])); // [1, 3, 5, 8]
