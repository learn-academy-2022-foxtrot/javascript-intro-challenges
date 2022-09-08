//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let price = "$100"
if (price === "$100" || price < "$100") {
    console.log("You are in budget")
}

//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = "hungry"
if (hungry === "not hungry") {
    console.log("eat food")
} else {
    console.log("keep coding")
}
//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "green"
if (trafficLight === "green") {
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else {
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let num1 = 35
let num2 = 15
if (num1 > num2) {
    console.log(num1)
} else if (num1 === num2) {
    console.log("the numbers are the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let num = 6
if (num === 0) {
    console.log("the number is 0")
} else if (num % 2 == 0) {
    console.log("the number is even")
} else {
    console.log("the number is odd")
}

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let grade = 0
if (grade === 100) {
    console.log("perfect score") 
} else if (grade < 100 && grade > 89) {
    console.log("You got an A") 
} else if (grade < 90 && grade > 79) {
    console.log("You got a B")
} else if (grade < 80 && grade > 69) {
    console.log("You got a C")
} else if (grade < 70 && grade > 59) {
    console.log("You got a D")
} else if (grade < 60 && grade > 0) {
    console.log("You got an F")
} else if (grade === 0) {
    console.log("no grade available")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

let boolean = true
let number = 15
let string = "hi"
console.log(typeof true)
console.log(typeof 15)
console.log(typeof "hi")

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password = "password12345!"
if (password.length == 12 && password.length > 12) {
    console.log("That is a mighty strong password!")
}