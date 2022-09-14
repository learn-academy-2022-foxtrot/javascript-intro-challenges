// const arr1 = [3, 9, 15, 4, 10]
// const mult10 = arr1.map(value => {
//   return value * 10
// })
// console.log(mult10)

// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// const oddOnly = (array) => {
//   return array.filter(value => {
//     if(value % 2 !== 0) {
//       return value
//     }
//   })
// }
// console.log(oddOnly(arr2))

// let oddOnly2 = arr2.filter(value => {
//   return value % 2 === 1 
// })
// console.log(oddOnly2)

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// const showCombo = (array) => {
//   return array.filter(value => {
//     return typeof value === "string"
//   })
// }
// console.log(showCombo(comboArr).join(""))

// const filterArrayValues = [58, "", "abcd", true, null, false, 0, NaN]
// const newFilteredValues = (array) => {
//   return array.filter(value => {
//     if (value !== false) {
//       return value
//     }
//   })
// }
// console.log(newFilteredValues(filterArrayValues))

const str = "javascript is awesome"
const noVowels = (array) => {
  let newArray = array.split("")
  return newArray.filter(value => {
    if (value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u") {
      return value
    }
  }) 
}
console.log(noVowels(str).join(""))

// const str = "javascript is awesome"
// const noVowels = str.replace(/[aeiou]/gi, '')

// console.log(noVowels)