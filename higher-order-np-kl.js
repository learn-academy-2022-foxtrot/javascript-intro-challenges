// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

// const mult10 = (array) => {
//     let finalArray = []
//     for (i=0; i<array.length; i++){
//         finalArray.push(array[i]*10)
//     }
//     return finalArray
// }
// console.log(mult10(arr1))

// // output: [30, 90, 150, 40, 100]



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

const onlyOdd = (array) => {
    let finalArray = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            finalArray.push(array[i])
        }
    }
    return finalArray
}
console.log(onlyOdd(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // // output: "nicework"

// const onlyLetters = (array) => {
//     let finalArray = []
//     for(i=0; i<array.length; i++) {
//         if (typeof array[i]=="string"){
//             finalArray.push(array[i])
//         }
//     }
//     return finalArray.join("")
// }
// console.log(onlyLetters(comboArr))



// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

const wantedValue = filterArrayValues.filter(Boolean)
console.log(wantedValue)
