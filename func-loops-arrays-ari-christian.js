// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// 1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// create a function that returns the value of each element *3
// input- array of numbers
// output- array of numbers - collection of results of each element *3
//step 1. create a function that takes an array as a parameter
//step 2. declare a variable that is an empty array to store output of function
//step3. access each element in the array with a for loop
// step4. manipulate each elemt in the array *5
//step5. return the new array

//  const testArr1 = [3, 9, 15, 4, 10]
// // // output: [9, 27, 45, 12, 30]

// const mult3 = (array) => {
//     let newArr = []
//     for(let i=0; i<array.length; i++){
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// }
// console.log(mult3(testArr1))



// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers
/**
 step1. create a function that will accept an array to check each element to determine if its even or odd
 step2. input - array of numbers\
 step3 output - array of numbers - only odd numbers
 step4. create an arrow fucntion named oddFinder that accepts a parameter of array
 step5. create and empty array to store the values of the new array that will only hold odd numbers
 step6. use for loop to access every index of the array
 step7. use conditional statement determine if the numbers are even or odd
 step8. push all odd numbers to the new array
 step9. return the new array
  */

//  const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // // output: [-7, 3, 5, 13]
// const oddFinder = (array) => {
//     let oddNum = []
//     for(let i=0; i<array.length; i++){
//         if(array[i] % 2 !==0) {
//             oddNum.push(array[i])
//         }
//     }
//     return oddNum 
// } 
// console.log(oddFinder(testArr2))


// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
/**
 * step1. create a function called stringInterpolator that will accept parameter of a mixed array
 * step2. create empty array to stor the value of the new string
 * step3. Use for loop to look at type of every element 
 * step4. use conditional statement to determine if the element is a string
 * step5. return the array full of strings and join it into a single string
 */

// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]
// // // output: "nicework"

// const stringInterpolator = (array) => {
//     let strings = []
//     for(let i=0; i<array.length; i++){
//         if(typeof array[i] === typeof "string"){
//             strings.push(array[i]) 
//         }
//     }
//     return strings.join("")
// }
// console.log(stringInterpolator(comboArr))

// 4. Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0

// 5. Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300
// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
