// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var fruit = 10
if (fruit <= 100)
console.log("in budget")

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false
if (hungry === true){
    console.log("eat food")
  }  else {
    console.log("keep coding") 
    }



// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "fly"


if (trafficLight === "green"){
  console.log("go")
} else if (trafficLight === "yellow"){
  console.log("slow down")
} else {
  console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var myNum = 5
var yourNum = 5
if (myNum === yourNum ){
  console.log("the numbers are the same")
} else if (yourNum > myNum) {
console.log(yourNum)
}   


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var myNum = 2
if(myNum === 0 ){
  console.log("0")
} 
else if(myNum % 2 === 0) {
  console.log("even")
}
else {
  console.log("odd")
}

// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var myNum = 0
if(myNum === 100){
  console.log("perfect score")
}
else if (myNum === 0){
  console.log("no grade available")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.