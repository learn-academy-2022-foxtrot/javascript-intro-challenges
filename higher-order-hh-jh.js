// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

//create a var (const multiByTen)
const multiByTen = arr1.map(value => {
    //return
    return value * 10
})

//invoke var multiByTen
console.log(multiByTen) //[30, 90, 150, 40, 100]



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

const oddOnlyArr = (array) => {
    //return (if value divided by 2 HAS a remainder, RETURN the value as an ODD value)
    return array.filter((value) => value % 2 === 1)
}

//invoke the function
console.log(oddOnlyArr(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

//create function called stringFilter
const stringFilter = (array, dataType) => {
    //return correct string dataType
    return array.filter(value => {
        return typeof value === dataType
    }).join('') //joined letters and converted array into string

}

//invoke the function stringFilter
console.log(stringFilter(comboArr, "string"))   //  "nicework"



// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

const filterStuff = (array) => {
    return array.filter((value) => {    // .filter has built in (IF STATEMENT) check below for example.
        // return IF the value DOES NOT equal 0 and the value DOES NOT equal false and the value DOES NOT equal null and the value DOES NOT equal 'empty string'
        return value !== 0 && value !== false && value !== null && value !== '' 
    })
}

//Invoke the function filterStuff w/ filterARrayValues as arguement inside console.log()
console.log(filterStuff(filterArrayValues))