// Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // // output: [30, 90, 150, 40, 100]

// const mult1 = arr1.map((value) => {
//     return value * 10
// })

// console.log(mult1)

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // output: [7, 3, 5, 13]

// const onlyOdd = (array) => {
//     return array.filter((value) => value % 2 !== 0)
// }

// console.log(onlyOdd(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// const showMyData = (array, dataType) => {
//     return array.filter(value => {
//         return typeof value === dataType
//     })
// }

// console.log(showMyData(comboArr, "string"))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // // // output: [58, "abcd", true]

// const showMyData = (array) => {
//     return array.filter(value => {
//         if(value !== false && value !== null && value !== 0 && value !== "") {
//           return array
//         }
//     })
    
// }

// console.log(showMyData(filterArrayValues))




const showMyData2 = (array) => {
    return array.filter(value => {
        return typeof value === array
    })
}
console.log(showMyData2(filterArrayValues))