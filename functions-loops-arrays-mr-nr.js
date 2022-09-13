// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// Create a new function that take original array and creates a new array with the indexes multiplied by 3

// Declare the new function taking a given array and outputting a new array
// Indexes within the array will need to be multiplied by 3
// Use .push to push the new multiplied idexes to a new array

const testArr1 = [3, 9, 15, 4, 10]
const mul3 = (array) => {
    let newArray = []
    for (let i=0; i<array.length; i++) {
        newArray.push(array[i] * 3)
    }   
    return newArray 
}   
console.log(mul3(testArr1))
    
// output: [9, 27, 45, 12, 30]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// Create a new function that creates a new odd numbered array.
// Conditional statement to verify whether the number is odd or even. 

// Create a new array that determines an odd or even value within the indexes
// Write a conditional statement to determind the odd/even value of a 
// Create a new variable to store the odd value data.
// use .push to create a new array using only odd values

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const oddNum = (array) => {
  let oddArray = []
    for (let i=0; i<array.length; i++) {
      if (array[i] % 2 !== 0) {
        oddArray.push(array[i])
      }
    }
    return oddArray
}
console.log(oddNum(testArr2))
// output: [-7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// We need to create a function that takes an array and returns a string only of character values from the original array.


const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// Create a function to output only the strings contained within a given array
// declare new variable to store string data from the array
// Conditional statement and typeof to check what type of data is located at the given index [i] 
const letterFinder = (array) => {
    let newString = []
    for (let i=0; i<array.length; i++) { 
        if (typeof array[i] === "string") {
          newString.push(array[i])
        }
    }   
    return newString.join("") 
}   
console.log(letterFinder(comboArr))
// output: "nicework"


// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// const sumNum = (array) => {
//   let sum = 0
//   for (let i=0; i<array.length; i++) {
//     sum += addThese1[i]
//   } return sum
// }
//   console.log(sumNum(addThese1))
// output: 10

const addThese2 = []
const sumNum = (array) => {
  let sum = 0
  for (let i=0; i<array.length; i++) {
    sum += addThese2[i]
  } return sum
} 
  console.log(sumNum(addThese1))
  console.log(sumNum(addThese2))
// output: 0


// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
const hiNum = (array) => {
  let num = 
  for (let i=0; i<array.length; i++) {
    if (array[i]  )
  } return sum
}
  console.log(hiNum(addThese1))
// output: 1


// 🏔 Stretch Goals

// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]


// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// output: [11, 11, 11, 11]


// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addUp1 = 4

// 1 + 2 + 3 + 4 = 10
// output: 10

const addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55

const addUp3 = 600
// output: 180300