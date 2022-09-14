// var groceryList = ["chips", "dip", "cookies"];

// Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda")
// console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
// groceryList.push("granola")
// console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".

// console.log(groceryList.slice(0,2))

// Write the code that will add "beans" to the "chips" and "dip" array.
// let newArray = groceryList.slice(0,2)
// console.log("new chip and dip array",newArray) 

// newArray.push("beans") // PUSH BEANS
// console.log("final array after PUSH BEANS",newArray)

// Consider the variable:

// var numbers = [2, 4, 6, 8, 10];

// Write the code that will add the number 0 to the beginning of the array.
// console.log("starting array", numbers)
// numbers.unshift(0)
// console.log("final array after UNSHIFT", numbers)

// Write the code that will add the number 12 to the end of the array.
// console.log("starting array", numbers)
// numbers.push(12)
// console.log("final array after PUSH", numbers)


// Write the code that will remove the first number from the array.
// console.log("starting array", numbers)
// numbers.shift()
// console.log("final array after SHIFT", numbers)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// console.log("starting array", numbers) 
// let oneItem = [0] //create new ONE ITEM array
// let newArray = oneItem.concat(numbers) //create new and final array using ONEITME array + concat method

// console.log("newArray", newArray) // print final array
// console.log("final array after CONCAT", numbers) // check the original if it's the same

// Consider the variable:

// var numSet = [2, 13, 6, 8, 4, 2];
// Write the code that finds the index of the first appearance of the number 2.

// console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.
// console.log(numSet[3])

// Consider the variable:

// var characters = ["y", "a", "r", "r", "a"];
// Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// let charsReversed = characters.reverse()
// console.log("Reverse array",charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log("joint array", charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// console.log("joint array - no separators", charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.
// let array1 = ["nico","goran","heath"]
// let array2 = ["joseph","mathew","eric"]

// console.log("not sorted", array1)
// console.log("not sorted", array2)

// Write the code that sorts the names in alphabetical order.

// console.log("sorted", array1.sort())
// console.log("sorted", array2.sort())

// Write the code that sorts the names in reverse alphabetical order.
// console.log("sorted", array1.sort().reverse())
// console.log("sorted", array2.sort().reverse())

// Write the code that sorts all the names in alphabetical order in a single array.
// console.log(array1)
// console.log(array2)

// let finalArray = array1.concat(array2)
// console.log(finalArray.sort())

// Consider the variables:

// var numbers = [42, 221, 71, 7, 18, 87];
// var oddIndexes = [];
// Write the code that logs the values from the numbers array that are at odd indexes.
// for(i=0; i < numbers.length; i++){
//     if(!(numbers[i] % 2 == 0) || i == 0){
//     console.log(numbers[i])
//     }
// }

// Write the code that adds the values from odd indexes into the oddIndexes array.
// for(i=0; i < numbers.length; i++){
//     if(!(numbers[i] % 2 == 0) || i == 0){
//     oddIndexes.push(numbers[i])
//     }
// }
// console.log(oddIndexes)


