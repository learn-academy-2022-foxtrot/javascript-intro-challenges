// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.

// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// declare a function that takes an array and multiply all of the elements by 10
// use map method and return the new value of arr1
// call the function in console.log
const arr1 = [3, 9, 15, 4, 10];

const multiplyArrayBy10 = (array) => {
  return array.map((e) => e * 10);
};

console.log(multiplyArrayBy10(arr1));

// // output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// since we have a condition, we can use filter method to filter out the elements we need

const arr2 = [2, 7, 3, 5, 8, 10, 13];
const onlyOdElements = (array) => {
  return array.filter((x) => x % 2 != 0);
};

console.log(onlyOdElements(arr2));

// // output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.s
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"];

const returnString = () => {
  return comboArr.filter((e) => typeof e == "string").join("");
};

console.log(returnString(comboArr));

// since we have a condition we need to check on, we can utilize lifter method on the  given array comboArr

const stringsOnly = (array) => {
  return array.filter((x) => typeof x == "string");
};

console.log(stringsOnly(comboArr));

// // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0];

// we can use filter again and set the condition to check if elemnts are NOT equal to false, object, 0, or ""

const cleanArray = (array) => {
  return array.filter(
    (x) => !(x == false || typeof x == "object" || x == "" || x == 0)
  );
};

console.log(cleanArray(filterArrayValues));

// // output: [58, "abcd", true]

// 🏔 Stretch Goals

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome";

const removeVowels = (string) => {
  return string
    .split("")
    .filter((x) => !(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"))
    .join("");
};

console.log(removeVowels(str));

// // output: "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// check for duplicats in

const arr1 = [3, 7, 10, 5, 4, 3];
const arr2 = [7, 8, 2, 1, 5, 4];

const duplicateElementRemoval = (array1, array2) => {
  let combinedArray = array1.concat(array2);
  combinedArray.forEach((element, i) => {
    for (j = i + 1; j < combinedArray.length; j++) {
      if (element === combinedArray[j]) {
        combinedArray.splice(j, 1);
      }
    }
  });
  return combinedArray;
};

console.log(duplicateElementRemoval(arr1, arr2));

// // output: [3, 7, 10, 5, 4, 8, 2, 1]
