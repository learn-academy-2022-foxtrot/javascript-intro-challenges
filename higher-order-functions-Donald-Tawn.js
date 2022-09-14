// Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// step 1. create function variable
// step 2. map function structure
// step 3. return what we want the function to do
// step 4. console.log invoking the function to an array const arr1.

const arr1 = [3, 9, 15, 4, 10] // given array

const mult10 = (array) => {  // declare a function variable and map function structure
    return array.map((value) => value * 10) // return the value of each element in the given array multiplied by 10.
}

console.log(mult10(arr1)) // console.log to test with given array
// output: [30, 90, 150, 40, 100]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// step 1. declare a function variable
// step 2. map function structure
// step 3. create empty array called newArr to contain the new elements retrieved from iteration
// step 4. map the method, we want the computer to take every element in the array and modulo 2. Since we want Odd numbers, we want to formulate it so that the method pushes any value that is odd into the empty array newArr we created earlier.
// step 5. return newArr
// step 6. console log and invoke the function by calling it and applying to whichever array we want, in this case the given array.  console.log(onlyOdd(arr2))

const arr2 = [2, 7, 3, 5, 8, 10, 13] // Given array

const onlyOdd = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(onlyOdd(arr2))
// output: [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]


// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.

const str = "javascript is awesome"
// output: "jvscrpt s wsm"


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.


// const arr1 = [3, 7, 10, 5, 4, 3]


// const arr2 = [7, 8, 2, 1, 5, 4]


// output: [3, 7, 10, 5, 4, 8, 2, 1]