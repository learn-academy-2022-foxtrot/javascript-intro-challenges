// const testArr1 = [3, 9, 15, 4, 10]

// const mult3 = (array) => {
//   let newArr = []
//   for (let i=0; i<array.length; i++) {
//     newArr.push(array[i] * 3)
//   }
//   return newArr
// }
// console.log(mult3(testArr1))

// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// const onlyOdd = (array) => {
//   let newArr = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 1 || array[i] % 2 === -1) {
//       console.log(array[i])
//       newArr.push(array[i])
//     }
//   }
//   return newArr
// }
// console.log(onlyOdd(testArr2))

// const comboArr = [ 7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// const stringProc = (array) => {
//   let newArr = []
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string")
//     newArr.push(array[i])
//   }
//   newArr = newArr.join("")
//   return newArr
// } 
// console.log(typeof stringProc(comboArr))
// console.log(stringProc(comboArr))

// const addThese1 = [1, 2, 3, 4]

// const addThese2 = []

// const sumOfArr = (array) => {
//   let newArr = 0
//   for (let i = 0; i < array.length; i++) {
//     newArr += array[i]
//   }
//   return newArr
// }
// console.log(sumOfArr(addThese1))

// const indexHighestNumber = [1, 4, 2, 3,]
// const highestNumIndex = (indexHighestNumber) => {
//   let newArr1 = indexHighestNumber[0]
//   for (let i = 0; i < indexHighestNumber.length; i++) {
//     if (indexHighestNumber[i] > newArr1) {
//       newArr1 = indexHighestNumber[i]
//     } 
//   } 
//   return newArr1
// }
// console.log(highestNumIndex(indexHighestNumber))

const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
const newArr = (arr1, arr2) => {
  let newArr1 = []
  let newArr2 = arr1.concat(arr2) 
  newArr1  = [...new Set(newArr2)]
  return newArr1
}
console.log(newArr(arr1, arr2))