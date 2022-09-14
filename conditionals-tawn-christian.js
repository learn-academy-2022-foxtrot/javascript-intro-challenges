// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// var number = 9 

// if (number < 100){
//     console.log("in budget")
// } 

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// var hungry = false

// if (hungry === true){
//     console.log("eat food")
// } else {
//     console.log("keep coding")
// }

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// var trafficLight = yellow

// if (trafficLight = green){
//     console.log("go")
// } else if (trafficLight = yellow){
//     console.log("slow down")
// } else {
//     console.log("stop")
// }

// var trafficLight = "Yellow"

// if(trafficLight === "Green") {
//     console.log("Go man!!!")
// } else if(trafficLight === "Yellow") {
//     console.log("Slow down or Speed up!")
// } else {
//     console.log("Stop!!!")
// }

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var myNum1 = 10
var myNum2 = 10

if (myNum1 < myNum2){
console.log(myNum2)
} else if (myNum1 > myNum2){
    console.log(myNum1)
} else {
 console.log("the numbers are the same")
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 8

if (number % 2 == 0){
 console.log("this can be split")
} else {
    console.log("this is odd")
} 

// Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."


const assignGrade = (grade) => {
    if (grade === 100) {
      return "A perfect score"
    } else if (grade >= 90 && grade <= 99) {
      return `${grade}% is an A`
    }  else if (grade >= 80 && grade <= 89) {
        return `${grade}% is an B`
      }  else if (grade >= 70 && grade <= 79) {
        return `${grade}% is an C`
      }  else if (grade >= 60 && grade <= 69) {
        return `${grade}% is an D`
      }  else if (grade <= 59) {
        return `${grade}% is an F`
      } else if (grade === 0) {
        return "No grade available"
      } else {
        return "Something went wrong"
      }
  }
  
  console.log(assignGrade(0))

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.


console.log()

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.