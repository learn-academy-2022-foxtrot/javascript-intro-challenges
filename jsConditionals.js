let goodsCost = 99

if (goodsCost < 100) {
    console.log('in budget')
}

let hunger = "hungry"


if(hunger === "hungry") {
    console.log("eat food!")
} else if (hunger === "not hungry") {
    console.log("Keep coding!")
} else {console.log ("invalid")}

hunger = "not hungry"

if(hunger === "hungry") {
    console.log("eat food!")
} else if (hunger === "not hungry") {
    console.log("Keep coding!")
} else {console.log("invalid")}

var trafficLight = "green"

if(trafficLight === "green") {
    console.log('go')
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red") {
    console.log("stop")
} else {console.log("invalid")}

trafficLight = "yellow" 

if(trafficLight === "green") {
    console.log('go')
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red") {
    console.log("stop")
} else {console.log("invalid")}

trafficLight = "red"

if(trafficLight === "green") {
    console.log('go')
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red") {
    console.log("stop")
} else {console.log("invalid")}

let firstNum = 123
let secNum = 456

if(firstNum > secNum){
    console.log(firstNum + "a")
} else if (secNum > firstNum) {
    console.log(secNum + "b")
} else if (secNum === firstNum) {
    console.log("the numbers are the same")
} else {console.log("invalid")}

firstNum = 789
secNum = 345

if(firstNum > secNum){
    console.log(firstNum + "a")
} else if (secNum > firstNum) {
    console.log(secNum + "b")
} else if (secNum === firstNum) {
    console.log("the numbers are the same")
} else {console.log("invalid")}

firstNum = 888
secNum = 888

if(firstNum > secNum){
    console.log(firstNum)
} else if (secNum > firstNum) {
    console.log(secNum)
} else if (secNum === firstNum) {
    console.log("the numbers are the same")
} else {console.log("invalid")}

let numCheck = 234

if(numCheck === 0) {
    console.log("zero")
} else if (numCheck % 2 === 1) {
    console.log("odd")
} else if (numCheck % 2 === 0) {
    console.log("even")
} else {
    console.log("invalid")
}

let gradeNum = "100"

if(gradeNum == 0) {
    console.log("no grade available")
} else if (gradeNum < 60) {
    console.log("you got an F")
} else if(gradeNum >= 60 && gradeNum < 70) {
    console.log("you got a D")
} else if (gradeNum >= 70 && gradeNum < 80) {
    console.log("you got a C")
} else if (gradeNum >= 80 && gradeNum < 90) {
    console.log("you got a B")
} else if (gradeNum >= 90 && gradeNum < 100) {
    console.log("you got an A!")
} else if (gradeNum == 100) {
    console.log("Perfect score!")
} else {
    console.log("invalid")
}

gradeNum = 99

if(gradeNum == 0) {
    console.log("no grade available")
} else if (gradeNum < 60) {
    console.log("you got an F")
} else if(gradeNum >= 60 && gradeNum < 70) {
    console.log("you got a D")
} else if (gradeNum >= 70 && gradeNum < 80) {
    console.log("you got a C")
} else if (gradeNum >= 80 && gradeNum < 90) {
    console.log("you got a B")
} else if (gradeNum >= 90 && gradeNum < 100) {
    console.log("you got an A!")
} else if (gradeNum == 100) {
    console.log("Perfect score!")
} else {
    console.log("invalid")
}

let ranVar = true

function typeOfOperator(parm) {
    console.log(typeof parm)
}

typeOfOperator(ranVar)

let ranVar1 = 67

typeOfOperator(ranVar1)

let ranVar2 = "frogs"

typeOfOperator(ranVar2)

let newPass = "frogs1234556!"

if (newPass.length >= 12 && newPass.includes("!")) {
    console.log("That is a mighty strong password!")
} else if (newPass.length >= 8 || newPass.includes("!")) {
    console.log("That password is strong enough!")
} else { 
    console.log("That is not a valid password..")
}

newPass = "frogs1234556"

if (newPass.length >= 12 && newPass.includes("!")) {
    console.log("That is a mighty strong password!")
} else if (newPass.length >= 8 || newPass.includes("!")) {
    console.log("That password is strong enough!")
} else { 
    console.log("That is not a valid password..")
}

newPass = "frogs12!"

if (newPass.length >= 12 && newPass.includes("!")) {
    console.log("That is a mighty strong password!")
} else if (newPass.length >= 8 || newPass.includes("!")) {
    console.log("That password is strong enough!")
} else { 
    console.log("That is not a valid password..")
}

newPass = "frogs"

if (newPass.length >= 12 && newPass.includes("!")) {
    console.log("That is a mighty strong password!")
} else if (newPass.length >= 8 || newPass.includes("!")) {
    console.log("That password is strong enough!")
} else { 
    console.log("That is not a valid password..")
}

