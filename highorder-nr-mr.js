// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// Created a new function that outputs a new array with the values multiplied by 10
// Used .map to create a new array of the same length using given array
const arr1 = [3, 9, 15, 4, 10]
const mappedArray = arr1.map((value) => {
    return value * 10
})
console.log(mappedArray)

// // output: [30, 90, 150, 40, 100]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//  Created a new function that determines whether the value of an index is odd or even 
// Used .filter to create a new array made from the odd values of the given array.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
const oddArray = (array) => {
    return array.filter((value) => value % 2 !== 0)
}
console.log(oddArray(arr2))
// // output: [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// Created new function to filter by data type within the given array and output only the specified data type from the array.
// Used .filter to create a new array based on the requisite datatypes
// Used .join to change the array into a string
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const hiddenWord = (array, dataType) => {
    return array.filter(value => {
        return typeof value === dataType
    })
}
console.log(hiddenWord(comboArr, "string").join(""))
// // output: "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// Created a function to identify and seperate specific values from a given array, and return a new modified array
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
const hardAf = (array) => {
    return array.filter(value => value !== false && value !== null && value !== 0 && value !== "" 
    )
}
console.log(hardAf(filterArrayValues))
// // output: [58, "abcd", true]


// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.