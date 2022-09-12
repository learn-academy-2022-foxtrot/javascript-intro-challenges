// Write a function named marco that returns "polo".

// const marco = () => {
//     return "Polo"
// }
// console.log(marco())


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// const greeting = (name) => {
//     return `welcome, ${name}`
// }
// console.log (greeting("donald"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// const oddOrEven = (number) =>{
// if(number % 2 == 0){
//     return `${number} is even`
// }else{
//     return `${number} is odd`
// }

    
// }
// console.log (oddOrEven(7))
// console.log (oddOrEven(8))
// console.log (oddOrEven(18))
// console.log (oddOrEven(9))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// const triple = (number) =>{
//     let multiplyBy3 = number * 3
//     return `${multiplyBy3} is triple of ${number}`
// }

// console.log(triple(9))
// console.log(triple(5))
// console.log(triple(3))
// console.log(triple(9))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// const multiply = (num1,num2) =>{
//     let product = num1 * num2

//     return `product of ${num1} and ${num2} is ${product}`

// }

// console.log(multiply(4,6))
// console.log(multiply(4,9))
// console.log(multiply(4,3))
// console.log(multiply(4,2))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) =>{
 if(num1 % num2 == 0 ){  
    return `${num1} is divisible by ${num2}`
 }   else{
    return `${num1} is not divisible by ${num2}`
 }
 

    
}

console.log(divisibleBy(4,2))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
