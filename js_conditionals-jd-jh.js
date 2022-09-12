// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Make sure you try different options and change the variables to ensure properly working code.






// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
    //var item
    let item1 = 90 
    let item2 = 100 
    let item3 = 200 
    //if price <= $100, console.log "in budget"
    if (item1 <= 100) {
        console.log("in budget");   // 'in budget'
    }
    if (item2 <= 100) {
        console.log("in budget");   // 'in budget'
    }
    if (item3 <= 100) {
        console.log("in budget");   // nothing happens
    }
    

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

    //make var hungry equals true
    let hungry = true;
    //if hungry = true, console log 'eat food
    if (hungry) {
        console.log('eat food');
    }
    //else 
    else {
        //console log 'keep coding'
        console.log('keep coding');
    }


// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

    //create trafficLight var
    let trafficLight = 'green'
        //if light = green
        if (trafficLight === 'green') {
            //'go'
            console.log('go');
        }
        //else if light = yellow
        else if (trafficLight === 'yellow') {
            //'slow down'
            console.log('slow down');
        }
        //else 
        else {
            //'stop'
            console.log('stop');
        }



// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers ar+e the same".

        let num1 = 10
        let num2 = 20

        if (num1 > num2) {
            console.log(num1);
        }
        else if (num1 < num2) {
            console.log(num2);
        }
        else {
            console.log('the numbers ar+e the same');
        }
    

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

        let num = 25

        if (num === 0) {
            console.log('Is Zero');
        }
        else if (num % 2 === 0) {
            console.log('Is Even');
        }
        else if (num % 2 === 1) {
            console.log('Is Odd');
        }



// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

        let grade = 90

        if (grade === 100) {
            console.log('prefect score');
        }
        else if (grade >= 90) {
            console.log('A');
        }
        else if (grade >= 80) {
            console.log('B');
        }
        else if (grade >= 70) {
            console.log('C');
        }
        else if (grade >= 60) {
            console.log('D');
        }¸
        else if (grade > 0) {
            console.log('F');
        }
        else if (grade === 0) {
            console.log('no grade available');
        }



// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

        let userInput1 = 2000
        let userInput2 = 'hello world'
        let userInput3 = false

        console.log(typeof(userInput1));
        console.log(typeof(userInput2));
        console.log(typeof(userInput3));


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

    let pw1 = 'HelloWorld!!!'
    let pw2 = 'banana12'
    let pw3 = 'cool'

//for pw1
    if (pw1.length >= 12 && pw1.includes('!')) {
        console.log("That is a mighty strong password!")
    }
    else if (pw1.length >= 8 || pw1.includes('!')) {
        console.log("This password is strong enough")
    }
    else {
        console.log("That is not a valid password")
    }

//for pw2
    if (pw2.length > 12 && pw2.includes('!')) {
        console.log("That is a mighty strong password!")
    }
    else if (pw2.length >= 8 || pw2.includes('!')) {
        console.log("This password is strong enough")
    }
    else {
        console.log("That is not a valid password")
    }

//for pw3
    if (pw3.length > 12 && pw3.includes('!')) {
        console.log("That is a mighty strong password!")
    }
    else if (pw3.length >= 8 || pw3.includes('!')) {
        console.log("This password is strong enough")
    }
    else {
        console.log("That is not a valid password")
    }