// write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3



// const testArr1 =[3,9,15,4,10]

// const mult1 =(array) =>{
//     let newArray =[]
// for(let i=0; i<array.length; i++) {
//     newArray.push(array[i]* 3)
//     array[i]* 3
// }
// return newArray
// }
// console.log(mult1(testArr1))



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// does the word array after the function name have purpose or just for looks
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// array in () tells the function we are working with arrays and not strings or other data types


// const oddArray = (array) => {
//     let newArray = []
//     for(let i=0; i<array.length; i++) {
//         if (array[i] % 2 !==0) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
        
// }
// console.log(oddArray(testArr2))



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

const comboArr = [ 7, "n", true, "i", "c", 10,"e",  -388, "w", 3, "o",  0, "r", false, "k" ]
  // output: "nicework"


const returnStrAbc =(array) => {
    let newArray =[] 
    for( let i=0; i<array.length; i++) {
        if(typeof array[i]==="string")  {
        newArray.push(array[i])
        }
    }
   return newArray.join("")
}
console.log(returnStrAbc(comboArr))      


// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10
let newArray =[]
for(let i=0; i<array.length; i++) {
    
}
  SUM()
const addThese2 = [ARRAY]
// output: 0