var groceryList = ["chips", "dip", "cookies"];

// Write the code that will add "soda" to the end of the original array.

console.log(groceryList.push("soda"))

console.log(groceryList)


// Write the code that will add "granola" to the end of array without altering the original array.

// newGroceryList = groceryList.push("granola")

let senGroceryList = groceryList.concat('granola')

// console.log(newGroceryList)

console.log(senGroceryList)

console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".

let newPartyTray = groceryList.slice(0,2)

//console.log(newPartyTray)

// Write the code that will add "beans" to the "chips" and "dip" array.

console.log(newPartyTray)

newPartyTray.push('beans')

console.log(newPartyTray)

var numbers = [2, 4, 6, 8, 10];

// Write the code that will add the number 0 to the beginning of the array.

numbers.unshift(0)

console.log(numbers)

// Write the code that will add the number 12 to the end of the array.

numbers.push(12)

console.log(numbers)

// Write the code that will remove the first number from the array.

numbers.shift()

console.log("c",numbers)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! 

// let newArray = []

console.log("d",numbers)

let newArray = numbers.concat()

newArray.unshift(0)

console.log("a", newArray)

console.log("b", numbers)


// console.log("a",numbers);
// console.log("b",newArray);

num2 = numbers.concat();
num2.unshift(0);
console.log("e",num2);

var numSet = [2, 13, 6, 8, 4, 2];

// Write the code that finds the index of the first appearance of the number 2.

// numSet.indexOf(2)

console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.

console.log(numSet[2])

var characters = ["y", "a", "r", "r", "a"];

// Write the code that brings all the letters in the characters array together into a string.

console.log(characters.join(''))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

let charReversed = characters.reverse()

console.log(charReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

//charReversed = charReversed.join("*")

console.log(charReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.

//charReversed = charReversed.join()

console.log(charReversed.join(''))

// Create two arrays consisting of three first names of your cohort members in each.

let arrayOne = ['Guan','Ari','Kyle']

let arrayTwo = ['Nate','Jeremy','Olena']

// Write the code that sorts the names in alphabetical order.

console.log(arrayOne.sort())

console.log(arrayTwo.sort())

// Write the code that sorts the names in reverse alphabetical order.

console.log(arrayOne.reverse())

console.log(arrayTwo.reverse())
// Write the code that sorts all the names in alphabetical order in a single array.

let newNamesArry = arrayOne.concat(arrayTwo).sort()

console.log(newNamesArry)

var numbers = [42, 221, 71, 7, 18, 87];
var oddIndexes = [];

// Write the code that logs the values from the numbers array that are at odd indexes.

for (var i = 0; i < numbers.length; ++i){
    if(i % 2 === 1 ){
        console.log(numbers[i])
    }
}
// Write the code that adds the values from odd indexes into the oddIndexes array.

for (var i = 0; i < numbers.length; ++i){
    if(i % 2 ===1){
        oddIndexes.push(numbers[i])

    } else {
        console.log('invalid')
    }
}

console.log(oddIndexes)