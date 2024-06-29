// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const prompt = require('prompt-sync')();

let myAge = prompt("Enter my age: ");
let yourAge = prompt("Enter your age: ");

myAge = parseInt(myAge);
yourAge = parseInt(yourAge);

if (myAge > yourAge) {
    console.log("My age is greater than your age");
} else {
    console.log("Your age is greater than my age");
}