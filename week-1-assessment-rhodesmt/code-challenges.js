// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// I need to determine and compare the values of the two strings and output whichever has the greater length.
// Conditional if/else statements to compare two sets of strings and output the string based on the condition met.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// if(fruit1.length > fruit2.length) {
//     console.log(fruit1)
// } else if(fruit1.length < fruit2.length) {
//     console.log(fruit2)
// } else(console.log('You have no fruit')) 
    


// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// if(fruit1.length > fruit2.length) {
//     console.log(fruit1)
// } else if(fruit1.length < fruit2.length) {
//     console.log(fruit2)
// } else(console.log('You have no fruit')) 

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// I will need to write a conditional statement that checks the given temp against the boiling point. 
// I will also need to use string interpolation to call the variable back into the console output to verify.

let temp = 42
const boilingPoint = 212

if(temp > boilingPoint) {
    console.log(`${temp} is above boiling point`)
} else if(temp < boilingPoint) {
    console.log(`${temp} is below boiling point`)
} else if(temp === boilingPoint) {
    console.log(`${temp} is at boiling point`)
} else(console.log("Error"))

// Expected output: "42 is below boiling point"

// let temp = 350
// Expected output: "350 is above boiling point"

// let temp = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

const currentCohort = "Foxtrot 2022"
// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
