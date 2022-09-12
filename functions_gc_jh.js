// Write a function named marco that returns "polo".

const marco = () => {
    return "polo"
}
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name) => {
    return `Welcome, ${name}!`
}

console.log(greeting('Guan and Joseph'))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (num) => {
    if(num % 2 === 0){
        return "The number is even"
    } else if (num % 2 === 1) {
        return "The number is odd"
    } else {
        return 'error'
    }
}
console.log(oddOrEven(32321))

console.log(oddOrEven(32328))

console.log(oddOrEven("false"))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (num) => {
    return num * 3
}

console.log(triple(69))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(5,9))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1,num2) => {
    if(num1 % num2 === 0){
        return `${num1} is evenly dividble by ${num2}`
    } else{
        return `${num1} is not evenly dividble by ${num2}`
    }
}
console.log(divisibleBy(10,5))

console.log(divisibleBy(22,5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (score) => {
    if(score <= 100 && score >= 90){
        return 'You got an A'
    } else if (score < 90 && score >= 80){
        return "You got a B"
    } else if (score < 80 && score >= 70){
        return "You got a C"
    } else if (score < 70 && score >= 60){
        return "You got a D"
    } else if (score < 60 && score >= 0){
        return "You got a F"
    } else {
        return "invalid score"
    }
}
console.log(assignGrade(100))

console.log(assignGrade(80))

console.log(assignGrade(65))

console.log(assignGrade(0))

console.log(assignGrade("peace is good"))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (string1,string2) => {

    if(string1.length > string2.length){
        return string1
    } else if (string1.length < string2.length){
        return string2
    } else {
        return "error"
    }
}

console.log(isLonger("Hello Joseph", "Hello Guan"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (num1, num2) => {
    if(num1 > num2){
        return num1
    } else if (num1 < num2){
        return num2
    } else {
        return 'error'
    }
}

console.log(greaterNum(String('324'), Number(323)))

console.log(greaterNum(String('322'), Number(323)))

console.log(greaterNum('322', NaN ) )

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (string) =>{
    return string.toUpperCase()

}
console.log(yelling("hello"))

// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

const helloWorld = (langCode) => {

    if(langCode === 'es'){
        return 'Hola Mundo'

    } else if( langCode === 'de' ){

        return "Hallo Welt"

    } else if (langCode === 'en' ){

        return 'Hello World'

    } else if (langCode === 'ch' ){

        return '你好世界'

    } else if (langCode === 'fr' ){

        return 'Bonjour le monde'
    } else {
        return 'Please try "es","de","en","ch","fr"'
    }
}

console.log(helloWorld("fr"))
console.log(helloWorld("es"))
console.log(helloWorld("ch"))
console.log(helloWorld("de"))
console.log(helloWorld("blah blah"))

// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer = (num,noun) => {

    // let nouns = [cats, dogs, pigs, horses, birds]
    // let amimal = [cat, dog, pig, horse, bird]
    if(num == 1 && noun == "people"){
        return num + " " + 'person'
    } else if (num > 1 && noun == "people"){
        return num + " " + noun
    }

    if(num == 1){
        return num + " " + noun
    } else if (num >1 ){
        return num + " " + noun +"s"
    }

}

console.log(pluralizer(1 , "dog"))

console.log(pluralizer(3 , "cat"))

console.log(pluralizer(1 , "people"))

console.log(pluralizer(5 , "people"))

// const pluralizer2 = ( num, noun) => {

//     let specialSNoun = ["person",'child', 'goose','sheep']
//     let specialPNouns = ["people", 'children', 'geese', "sheep"]

//     let isPlural = false

//     if (num > 1 && noun == specialSNoun){

//         for (i = 0 : i< specialNouns.length ; i++){
//             if(num > 1 && noun = specialNouns){
//                 specialNouns[i]
//         }
//     }   
//     } 


// }
// console.log(pluralizer2(2 , 'person'))