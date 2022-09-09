"use strict";

// 1. Write the code that will log the outcome of 34 added to 71.
console.log(34 + 71);
// 2. Write the code that will log the outcome of 67 subtracted from 123.
console.log(67 - 123);
// 3. Write the code that will log the outcome of 56 multiplied by 23.
console.log(56 * 23);
// 4. Write the code that will log the outcome of 45 divided by 5.
console.log(45 / 5);
// 5. Write the code that will log the outcome of 5 to the power of 7.
console.log(5 ** 7);
// Write the code that will log the whole number remainder of 33 divided by 6.
console.log(34 % 71);
// Write the code that will log the length of a string containing your name.
const myName = "Thounda";
console.log(myName.length);
// Write the code that will log whether your string includes the letter "e"?
const anotherName = "Earl";
console.log("This value has no 'e', and will be false: ");
console.log(myName.includes("e"));
console.log("This value has no 'e', and will be true: ");
console.log(anotherName.includes("e"));
// Write the code that will log the character at the first index of the string.
console.log(myName.charAt(0));
// Write the code that will log the string in all uppercase letters.
console.log(34 + 71);
// Write the code that will log true or false for the following:
console.log(34 + 71);
// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2);
// False
// Does 5 evaluate to the same as "5"?
console.log(5 == "5");
//True
// Does 5 strictly equal "5"?
console.log(5 === "5");
//False
// Does !3 strictly equal 3?
console.log(!3 === 3);
//False

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
let schoolName = "LEARN";
let studentID = "Student";
console.log(schoolName.length === 5 && studentID.length === 7);
//True

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log(schoolName.length === 5 || studentID.length === 7);
//True

// Does "LEARN" contain the subset "RN"?
console.log(schoolName.includes("RN"));
//True
// Does "LEARN" contain the subset "rn"?
console.log(schoolName.includes("rn"));
//False

// Does "LEARN"[0] strictly equal "l"?
console.log(schoolName.charAt(0));
console.log(schoolName[0] === "l");
//False

// Modify the code from the previous question to return true.
console.log(schoolName.charAt(0));
console.log(schoolName[0] === "L");
//True

// var theQuestion = "life, the universe, and everything";
var theQuestion = "life, the universe, and everything";
console.log(theQuestion);

// Write the code that will log theAnswer divided by 2.
var theAnswer = 42;
console.log(theAnswer / 2);

// Write the code that will log the length of theQuestion.
console.log(theQuestion.length);

// Write the code that will log the index of the character "f" in the theQuestion.
console.log(theQuestion.indexOf("f"));

// Write the code that will log the concatenation of the two variables.
console.log(`The answer to ${theQuestion} is... ${theAnswer}.`);
console.log("The answer to " + theQuestion + " is... " + theAnswer + ".");

// Write the code that will log "the universe".
console.log("the universe");

// Write the code that will log the character "l" from theQuestion.
console.log(theQuestion.charAt(0));

// Write the code that will log whether theQuestion.length is greater than theAnswer.
console.log(theQuestion.length > theAnswer.length);
//False
