// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

// const marco = () => {
//     return "polo";
// }

// //invoke function
// console.log(marco());de

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// const greeting = (personName) => {
//     return `Welcome, ${personName}'s name here!`;
// }

// // invoke function
// console.log(greeting("Bob"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const addOrEven = () => {
//     for (i = 0; i < 10; i++) {
//         if (i % 2 == 1) {
//             console.log(`${i} - ODD`);
//         } 
//         else if (i % 2 == 0) {
//             console.log(`${i} - Even`);
//         }
//     }
// }

// // Invoke function
// addOrEven();

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (num) => {
//     console.log(num * 3);
// }

// triple(3);

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// const multiply = (numOne, numTwo) => {
//     console.log(numOne * numTwo);
// }

// // invoke function
// multiply(4,2);

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// const divisibleBy = (numOne, numTwo) => {
//     console.log(`${numOne} is evenly divisible by ${numTwo}`);
// }

// // invoke function
// divisibleBy(10, 5);


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// const assignGrade = (score) => {
//     if (score === 100) {
//         console.log('A');
//     } else if (score === 80) {
//         console.log('B');
//     } else if (score === 70) {
//         console.log('C');
//     } else {
//         console.log('Something Went Wrong!');
//     }
// }

// // invoke function
// assignGrade(70);

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// const isLonger = (wordOne, wordTwo) => {
//     if (wordOne.length > wordTwo.length) {
//         console.log(`WordOne`);
//     }
//     else if (wordTwo.length > wordOne.length) {
//         console.log(`WordTwo`);
//     }
// }

// // Invoke function
// isLonger('Be', 'Mug');

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// const greaterNum = (numOne, numTwo) => {
//     if (numOne > numTwo) {
//         console.log(`${numOne} is Greater than ${numTwo}`);
//     }
//     else if (numTwo > numOne) {
//         console.log(`${numTwo} is Greater than ${numOne}`)
//         }
// }

// // Invoke function
// greaterNum(5, 10);

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// const yelling = (string) => {
//     console.log(string.toUpperCase());
// }

// // Invoke function
// yelling("learn");


// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"