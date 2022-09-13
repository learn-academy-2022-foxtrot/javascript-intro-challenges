// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const numTimes10 = (numArr) => {
//     // Take value of array and multiply each value by ten
//     return numArr.map((value) => value * 10)
// }

// const arr1 = [3, 9, 15, 4, 10]
// console.log(numTimes10(arr1));
// // output: [30, 90, 150, 40, 100]

/////////////

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const getOdd = (numArr) => {
//     // filter a subset of the numArr array
//     return numArr.filter((value) => value % 2 !==0)
// }

// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// console.log(getOdd(arr2));
// // output: [7, 3, 5, 13]

//////////////

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const getString = (arr) => {
//     // filter a subset of the arr
//     return arr.filter((value) => typeof value === "string").join("")
// }

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// console.log(getString(comboArr));
// // output: "nicework"


//////////////

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const getTruthy = (arr) => {
//     // filter a subset of the arr
//     return arr.filter((value) => (
//     (value != null && value != " ") || value > 0 || value == true
//     ))
// }

// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// console.log(getTruthy(filterArrayValues));
// // output: [58, "abcd", true]


//////////////

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const removeVowels = (string) => {
//     // create empty array to hold values from string
//     const stringStr = [];

//     // let for to push string values into array
//     for (let i = 0; i < string.length; i++) {
//         stringStr.push(string[i]);
//     }
//     // filter string to remove vowels & convert to a string
//     return stringStr.filter(
//         (value) => 
//         value != 'a' && 
//         value != 'e' &&
//         value != 'i' && 
//         value != 'o' &&
//         value != 'u'
//     ).join("")
// }

// const str = "javascript is awesome"
// console.log(removeVowels(str));
// // output: "jvscrpt s wsm"

//////////////

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const combineArr = (array1,array2) => {
    // create new array to store values of each array
    let newArr =  [];
    newArr = array1.concat(array2.filter((value) => array1.indexOf(value) < 0))
    return newArr;
}

const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]
console.log(combineArr(arr1,arr2));
// // output: [3, 7, 10, 5, 4, 8, 2, 1]