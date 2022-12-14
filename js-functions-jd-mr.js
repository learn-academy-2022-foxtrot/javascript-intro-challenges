// Write a function named marco that returns "polo".
 const marco = () => {
    return "polo";
 } 
 console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
} 
console.log(greeting('Matthew'));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
    if (num % 2 === 0) { 
        return "even" 
    } else {
       return "odd"
    }
} 
    console.log(oddOrEven(15))
    console.log(oddOrEven(24));


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (num) => {
    return num * 3
}
    console.log(triple(35));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
        return num1 * num2
    }
        console.log(multiply(23, 84));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}.`
    } else {
        return `${num1} is not evenly divisible by ${num2}.`
    }
}
        console.log(divisibleBy(14, 3));
        console.log(divisibleBy(32, 4));

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
 const assignGrade = (numScore) => {
    if (numScore >= 90 ) {
        return "A"
    } else if (numScore >= 80) {
        return "B"
    } else if (numScore >= 70) {
        return "C"
    } else if (numScore >= 60) {
        return "D"
    }  else {
        return "F"
    }
}
    console.log(assignGrade(42));


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
    const isLonger = (string1, string2) => {
        if (string1.length > string2.length) {
            return string1
        } else {
            return string2 
        }
    }
    console.log(isLonger("Geometry", "Australia"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
    console.log(greaterNum(6, 24));

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
 const yelling = (whisper) => {
    return whisper.toUpperCase() 
}
    console.log(yelling("We're doing it"))
    console.log(yelling("Can you hear me?"))


// ???? Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
const helloWorld = (languageCode) => {
    if (languageCode === "en") {
        return "Hello World!"
    } else if (languageCode === "sp") {
        return "Hola Mundo!"
    } else if (languageCode === "fr") {
        return "Bonjour Monde!"
    } else if (languageCode === "it") {
        return "Ciao Mondo!"
    } else if (languageCode === "de") {
        return "Hallo Welt!"
    }
} 
    console.log(helloWorld("en"))
    console.log(helloWorld("it"))
    console.log(helloWorld("de")); 
// The Pluralizer
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
const pluralizer = (num, noun) => {
    const singularNouns = ["Sheep", "Goose", "Child", "Person", "Dog"]
    const pluralNouns = ["Sheep", "Geese", "Children", "People", "Dogs"]
    // Created conditional statement to compare inputted nouns and return a statement with quantity and correct grammatical form
    if (num === 1) {
        return `${num} ${noun}`
    } else if (num === 0 || num > 1) {
        for (let i=0; i<pluralNouns.length; i++) {
            if (noun === singularNouns[i]) {
                return `You have ${num} ${pluralNouns[i]}`
            }
        }
    } 
}
    console.log(pluralizer(1, "Dog"))
    console.log(pluralizer(0, "Person"))
    console.log(pluralizer(4, "Child"));
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species". 