// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
// 1. Declare a function named "marco"
// 2. The function does not take an argument, it will do one thing: "console.log("polo")"
// 3. Call the function to test it.

const marco = () => {
  return "polo";
};
console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// 1. declare function named greeting
// 2. input: name
// 3. output: `Greeting, ${name}`
// 4.

const greeting = (name) => {
  return `Greeting, ${name}`;
};
console.log(greeting("Tim"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// 1. Declare a function named oddOrEven.
// 2. The function will accept 1 argument, a specified number.
// 3. I'll use a conditional statement to determine if the number is even or odd.
// 4. The first comparison statement will use the modulo operator to determine if the number is even.
// The formula I'll use for this will be: variable % 2 ===0
// 5. The second comparison statement will use the modulo operator to determine if the number is odd.
// The formula I'll use for this will be: variable % 2 !==0
// 6. I'll add a catch-all error message for the else.

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return `${number} is even.`;
  } else if (number % 2 !== 0) {
    return `${number} is odd.`;
  } else {
    return "Unexpected error.";
  }
};

console.log(oddOrEven(52));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// 1. Declare a function named triple
// 2. Function will accept one argument, a specified number.
// 3. I'll return the argument * 3

const triple = (number) => {
  return number * 3;
};
console.log(triple(3));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// 1. Declare a function named "multiply".
// 2. input: num1, num2
// 3. output: num1 * num2

const multiply = (num1, num2) => {
  return num1 * num2;
};
console.log(multiply(3, 4));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// 1. Declare a function called divisibleBy
// 2. Input: num1, num2
// 3. 2 Possible Outputs:
//    -`${num1} is evenly divisible by ${num2}.`
//    -`${num1} is NOT evenly divisible by ${num2}.`
// 4. We will use the modulo operator to decide whether num1 is evenly divisible by num2, like so: num1 % num2 === 0

const divisibleBy = (num1, num2) => {
  if (num1 % num2 === 0) {
    return `${num1} is evenly divisible by ${num2}.`;
  } else if (num1 % num2 !== 0) {
    return `${num1} is NOT evenly divisible by ${num2}.`;
  } else {
    return "We've hit an error.";
  }
};

console.log(divisibleBy(10, 5));


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// 1. Declare a function: assignGrade
// 2. input: score
// 3. output: '${score} is an "A, B, C, D, F"

const assignGrade = (score) => {
  if (score >= 90 && score <= 100) {
    return `${score} is an A`
  } else if (score >= 80 && score <= 89) {
    return `${score} is an B`
  } else if (score >= 70 && score <= 79) {
    return `${score} is an C`
  } else if (score >= 60 && score <= 69) {
    return `${score} is an D`
  }else if (score >= 50 && score <= 59) {
    return `${score} is an F`
  } else {
    return "Something is Off"
  }
}

console.log(assignGrade("tomas"))

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
