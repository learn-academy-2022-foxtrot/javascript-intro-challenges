//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
let price = "$100"
if (price === "$100" || price < "$100") {
    console.log("You are in buget")
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