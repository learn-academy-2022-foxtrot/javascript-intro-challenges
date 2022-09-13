// Create a for loop that logs each number from 1 - 20.
// let arrayNum = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// for (let i = 0; i < 20; i = i + 1) {
//   console.log(arrayNum[i]); // it prints numbers from 1-20
// }

// Create a for loop that logs every other number from 1 - 20.

// for (let i = 0; i < 20; i = i + 2) {
//   console.log(arrayNum[i]);
// }

// for (let i = 0; i < 20; i = i + 1) {
//     if(i % 2 == 1){
//   console.log(arrayNum[i])
// }
// }

// Create a for loop that logs the result of each number from 1 - 20 tripled.
// for (let i = 0; i < 20; i = i + 1) {
//   console.log(arrayNum[i] * 3);
// }

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// for (let i = 1; i < 21; i = i + 1) {
//   if (i % 2 == 0) {
//     console.log(i);
//   } else {
//     console.log("ODD");
//   }
// }

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// Consider this variable:

// const nums = [3, 57, -9, 20, 67];

// Create the code that will log the largest number from the array.
// let biggestNumber = nums[0];
// for (i = 1; i < nums.length; i++) {
//   if (nums[i] > biggestNumber) {
//     biggestNumber = nums[i];
//   }
// }

// console.log(biggestNumber);

// Create the code that will log the smallest number from the array.
// let smallestNumber = nums[0];
// for (i = 1; i < nums.length; i++) {
//   if (nums[i] < smallestNumber) {
//     smallestNumber = nums[i];
//   }
// }

// console.log(smallestNumber);

// Create the code that will log the remainder of each number when divided by 2.
// for (i = 0; i < nums.length; i++) {
//    console.log(nums[i] % 2);
// }

// Expected output: 1, 1, -1, 0, 1
// Consider this variable:

const myString = "learn student";
// Create the code that will log the number of times the letter "e" occurs in the string.

// const counter = () => {
//   let countE = 0;
//   for (i = 0; i < myString.length; i++) {
//     if (myString[i] === "e") {
//       countE++;
//     }
//   }
//   return countE;
// };

// console.log(counter());

// Create the code that will log every other character in the string.
// for (i = 0; i < myString.length; i = i + 2) {
//   console.log(myString[i]);
// }

// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// for (i = 5; i < 16; i++) {
//   if (i % 2 == 0) {
//     console.log(`number ${i} is even`);
//   } else {
//     console.log(`number ${i} is odd`);
//   }
// }

// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// for (i = 1; i < 101; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0 || i % 5 == 0) {
//     if (i % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log("Buzz");
//     }
//   } else {
//     console.log(i);
//   }
// }

// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
