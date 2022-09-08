// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

//  Make sure you try different options and change the variables to ensure properly working code.

// 2. Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// Items cost different amounts x2
// if/else looks at items and determines if they are >= 100
// if they are, console log "in budget"
// if theyre not, console log "not in budget"
let item1 = 50;

if (item1 <= 100) {
  console.log("in budget");
} else {
  console.log("sorry you're poor!");
}

// 3. Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
let hungry = true;

if (hungry === true) {
  console.log("eat food.");
} else {
  console.log("keep coding.");
}

// 4. Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
let trafficLight = "green";

if (trafficLight === "green") {
  console.log("go!");
} else if (trafficLight === "yellow") {
  console.log("slow down!");
} else if (trafficLight === "red") {
  console.log("stop!");
} else {
  console.log("Invalid property.");
}

// 5. Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
let num1 = 5;
let num2 = 24;

if (num1 > num2) {
  console.log(`${num1} is larger than ${num2}.`);
} else if (num2 > num1) {
  console.log(`${num2} is larger than ${num1}.`);
} else if (num1 === num2) {
  console.log("The numbers are equal!");
} else {
  console.log("Invalid Number.");
}

// 6. Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
let num3 = 10;

if (num3 % 2 === 0) {
  console.log(`${num3} is an even number.`);
} else if (num3 % 3 === 0) {
  console.log(`${num3} is an odd number.`);
} else if (num3 === 0) {
  console.log(`${num3} is 0!`);
}

// STRETCH Challenges
// 1. Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
// create a variable to hold grade percentage

let gradePercentage = 65 

if (gradePercentage === 100) {
console.log("perfect score")
} else if (gradePercentage === 0) {
console.log("no grade available")
} else if (gradePercentage >= 1 && gradePercentage <= 50) {
  console.log(`${gradePercentage}% is an F.`)
} else if (gradePercentage >= 51 && gradePercentage <= 60) {
  console.log(`${gradePercentage}% is a D.`)
} else if (gradePercentage >= 61 && gradePercentage <= 70) {
  console.log(`${gradePercentage}% is a C.`)
} else if (gradePercentage >= 71 && gradePercentage <= 80) {
console.log(`${gradePercentage}% is a B.`) 
} else if (gradePercentage >= 81 && gradePercentage <= 99) {
console.log(`${gradePercentage}% is a A.`)
} else { 
  console.log("Error.")
}

// 2. Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

 let var1 = 2

 if(typeof var1 === typeof true) {
  console.log(`${var1} is a boolean.`)
 } else if (typeof var1 === typeof 3) {
 console.log(`${var1} is a number.`)
 } else if (typeof var1 === typeof "hello") {
  console.log(`${var1} is a string.`)
 }

// 3. Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password = "123"

if(password.length >= 12 && password.includes("!")) {
  console.log("That is a mighty strong password.")
} else if (password.length >= 8 || password.includes("!")) {
  console.log("That password is strong enough.")
} else {
  console.log("That is not a valid password.")
}
