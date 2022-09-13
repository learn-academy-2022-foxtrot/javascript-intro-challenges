// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// ---------------- PSEUDO-CODE TEMPLATE ----------------
/*
Create a function called ___ that will ___
input: 
output: 

Step 1: 
Step 2:
Step 3: 
Step 4:
*/

// 1. Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
/*
Create a function called mult10 that will return an array with all values multiplied by 10
input: array of numbers
output: array of numbers times 10

Step 1: declare the function that will accept the parameter of array
Step 2: return a higher order function takes in the value
Step 3: return the value * 10
*/
//const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// const mult10 = (array)=> {
//     return array.map((value) => value * 10)
// }
// console.log(mult10(arr1))

// const mult10 = (array) => array.map((value) => value * 10)
// console.log(mult10(arr1))

// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.
/*
Create a function called onlyOdd that will take in an array of numbers and log only the odd numbers
input: array of numbers
output: array of odd numbers 

Step 1: decalre a function called oddFinder that will only log odd numbers
Step 2: return a HOF that takes in the value
Step 3: return only values that have an odd index
*/
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

// const oddFinder = (array) => array.filter((value) => value % 2 !==0)
// console.log(oddFinder(arr2))

// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
/*
Create a function called stringsOnly that will access every value of an array and return only strings and combine them
input: array of mixed value
output: string

Step 1: create a function called stringsOnly that will accept 2 parameters, array and value type
Step 2: return a HOF that takes in the value of each element of the array
Step 3: if value of string then return to new array
Step 4: return string
*/
//  const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // // output: "nicework"

// const stringsOnly = (array, valueType) => {
//     return array.filter(value => {
//         return typeof value === valueType
//     }).join("") 
// }
// console.log(stringsOnly(comboArr, "string"))

// 4. Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
/*
Create a function called ___ that will ___
input: 
output: 

Step 1: 
Step 2:
Step 3: 
Step 4:
*/
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
