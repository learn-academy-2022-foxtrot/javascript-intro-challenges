// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// Create function
// const multiplyBy3 = (numArr) => {
//     const newArr = [];
//     // Create the loop to interate thru array
//     for (let i = 0; i <numArr.length; i++) {
//         // Push old array value times 3 into new array
//         newArr.push(numArr[i] *3)
//     }
//     // return the new array
//     return newArr;
// }

// // call array
// const testArr = [2,4,6,8,10];
// console.log(multiplyBy3(testArr));

// const testArr1 = [3, 9, 15, 4, 10];
// console.log(multiplyBy3(testArr1));

// output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Create function
// const getOdds = (numArr) => {
//     const newArr = [];
//     // Create the loop to interate thru array
//     for (let i = 0; i <numArr.length; i++) {
//         // If number is ODD, 
//         if (numArr[i] % 2 !== 0) {
//             // then PUSH value of array to new array
//             newArr.push(numArr[i])
//         }
//     }
//     // return the new array
//     return newArr;
// }

// // call array
// const testArr = [1,2,3,4,5,6,7,8,9];
// console.log(getOdds(testArr));

// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// console.log(getOdds(testArr2))
// // // output: [-7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// Create function
// const filterLetters = (arr) => {
//     // create empty string
//     let string = "";
//     // loop thru array
//     for (let i = 0; i < arr.length; i++) {
//         // Conditional statement
//         if (typeof arr[i] === "string") {
//             // Add value to string using concat method
//             string += arr[i];
//         }
//     }
//     return string;
// }

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

// // call function
// console.log(filterLetters(comboArr));
// // // output: "nicework"


// Create a function that takes in an array of numbers and returns the sum.
// const getSum = (numArr) => {
//     // create input for number storage
//     let sum = 0;
//     for (let i = 0; i < numArr.length; i++) {
//         sum += numArr[i];   // sum =  numArr[i] + sum
//     }
//     return sum;
// }

// const addThese1 = [1, 2, 3, 4]
// // // output: 10
// console.log(getSum(addThese1));

// const addThese2 = []
// // // output: 0
// console.log(getSum(addThese2));

//////////////////////////////

// Create a function that takes in an array of numbers and returns the index of the largest number.
// const getLargestIndex = (numArr) => {
//     // create variable for largest index
//     let  largest = 0;
//     // create loop on array
//     for (let i = 0; i < numArr.length; i++) {
//         // if largest variable is less than array value
//         if (largest < numArr[i]) {

//         // then assign array value to largest variable
//         largest = numArr[i];
//         }
//     }
//     // Return index of array
//     return numArr.indexOf(largest);
// }

// const indexHighestNumber = [1, 4, 2, 3]
// console.log(getLargestIndex(indexHighestNumber));
// // output: 1

//////////////////////////////

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
const combineArrays = (arr1, arr2) => {
    // declare to array variables
    let combinedArr = [];
    let resultArr = [];

    // 1st for loop to push values from 1st array into combinedArr
    for (let i = 0; i < arr1.length; i++) {
        combinedArr.push(arr1[i]);
    }
    // 2nd for loop to push values from 2nd array into combinedArr
    for (let i = 0; i < arr2.length; i++) {
        combinedArr.push(arr2[i]);
    }
    for (let i = 0; i < combinedArr.length; i++) {
        // conditional statement - push unique numbers into resultArr
        if (resultArr.indexOf(combinedArr[i]) === -1) {
            resultArr.push(combinedArr[i]);
        }
    }
    return resultArr;
}

const arr1 = [3, 7, 10, 5, 4, 3, 3];
const arr2 = [7, 8, 2, 3, 1, 5, 4];
console.log(combineArrays(arr1, arr2));

// // output: [3, 7, 10, 5, 4, 8, 2, 1]


//////////////////

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
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing messages.