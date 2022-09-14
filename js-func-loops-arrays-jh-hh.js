// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// const testArr1 = [3, 9, 15, 4, 10]
//     // create function with name multi3
//     const multi3 = (array) => {
//         //create an empty array/variable to get the expected result (like an empty amazon box..)
//         let newArray = []
//         // create a for loop that will take all of the indexes and multiply them all by 3
//         for(let i = 0; i < array.length; i++){
//             // store new values/numbers into the new array
//             newArray.push(testArr1[i]*3)

//         } 
        
//         // now return new array
//         return newArray

//     }
//     console.log(multi3 (testArr1))

// // output: [9, 27, 45, 12, 30]




// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// const oddNumArr = (arr) => {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         let currentIndex = arr[i]
//         if(currentIndex % 2 !== 0) {
//             result.push(arr[i])
//         }
       

//     }
//     return result

// }
// console.log(oddNumArr(testArr2))

// // output: [-7, 3, 5, 13]



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

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
  
  const stringOnly = (array) => {
      let result = []
      for(let i=0; i < array.length; i++){
          let currentIndex = array[i]
          if(typeof currentIndex === "string") {
              result.push (currentIndex)
          }
      }
      return result.join("")
  }
  console.log(stringOnly(comboArr))
  
  // // output: "nicework"
  
  
  // Create a function that takes in an array of numbers and returns the sum.
  // const addThese1 = [1, 2, 3, 4]
  // // output: 10
  // const addThese2 = []
  // // output: 0
  
  
  
  // Create a function that takes in an array of numbers and returns the index of the largest number.
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