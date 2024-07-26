// Exercise 1: Catching an Error
// Write a function that takes two numbers as arguments and divides the first number by the second number. Handle any potential errors that may occur (e.g., division by zero) 
// and log an appropriate error message to the console.
function divideNumbers(num1, num2) {
    try {
        if (num2 === 0) {
        throw new Error('Cannot divide by zero');
        }
        const result = num1 / num2;
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
divideNumbers(10, 2);  
divideNumbers(10, 0); 

// Exercise 2: Handling a Missing Property
// Create an object that represents a person with properties like name, age, and address. Write a function that takes a 
// person object as an argument and tries to access a non-existent property (e.g., person.email). Handle the error that is thrown and log a helpful message to the console.
// Define the person object
const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
};
function getPersonProperty(person, property) {
    try {
        if (!(property in person)) {
        throw new Error(`Property '${property}' does not exist on the person object.`);
        }
        console.log(`${property}: ${person[property]}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
getPersonProperty(person, 'name');    
getPersonProperty(person, 'email');  

//Exercise 3: Asynchronous Error Handling
// Write a function that makes an asynchronous API call to retrieve some data. Introduce an error condition (e.g., an invalid API endpoint) and 
// handle the error using a try-catch block. Log an error message to the console in case of an error.
async function fetchData(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      if (error.name === 'TypeError') {
        console.error('Error: Invalid API endpoint');
      } else {
        console.error('Error:', error.message);
      }
    }
}
fetchData('https://invalidapiendpoint.example.com/data'); 

// Exercise 4: Custom Error Handling
// Create a custom error class called "InvalidInputError." Write a function that takes a user input and throws an instance of this 
// custom error if the input is not valid (e.g., empty string). Handle the custom error using a try-catch block and log a descriptive message to the console.
class InvalidInputError extends Error {
    constructor(message) {
      super(message);
      this.name = 'InvalidInputError'; 
    }
}
function validateInput(input) {
    try {
      if (input.trim() === '') {
        throw new InvalidInputError('Input cannot be an empty string.');
      }
      console.log('Input is valid:', input);
    } catch (error) {
      if (error instanceof InvalidInputError) {
        console.error('Custom Error:', error.message);
      } else {
        console.error('Unexpected Error:', error.message);
      }
    }
}
const prompt = require('prompt-sync')();
const userInput = prompt('Please enter some input:');
validateInput(userInput);
  
// Exercise 5: Error Logging
// Write a function that performs a series of operations and may throw errors during execution. 
// Implement an error logging mechanism that captures and logs any errors that occur during the function's execution, including the stack trace.
function logError(error) {
    console.error('Error:', error.message);
    console.error('Stack Trace:', error.stack);
}
function performOperations() {
    try {
      // Example operation 1: Division by zero
      const result1 = 10 / 0;
      console.log('Result 1:', result1);
  
      // Example operation 2: Accessing an undefined property
      const obj = {};
      const result2 = obj.nonExistentProperty.toString();
      console.log('Result 2:', result2);
  
      // Example operation 3: Parsing invalid JSON
      const result3 = JSON.parse('invalid JSON string');
      console.log('Result 3:', result3);
  
    } catch (error) {
      logError(error);
    }
  }
performOperations();
   
// Exercise 6: Error Handling in Promises
// Create a promise that resolves after a random delay (between 1 and 5 seconds) with a random boolean value. 
// Implement error handling in the promise chain, catching any errors that may occur during promise resolution or rejection. 
// Log appropriate error messages to the console.
// Function to generate a random delay between 1 and 5 seconds
function getRandomDelay() {
    return Math.floor(Math.random() * 5000) + 1000;
}
function createRandomBooleanPromise() {
return new Promise((resolve, reject) => {
    const delay = getRandomDelay();
    const randomBoolean = Math.random() >= 0.5;

    setTimeout(() => {
    if (Math.random() >= 0.1) {  
        resolve(randomBoolean);
    } else {
        reject(new Error('Random rejection occurred'));
    }
    }, delay);
});
}
function logError(error) {
    console.error('Error:', error.message);
    console.error('Stack Trace:', error.stack);
}
createRandomBooleanPromise()
.then((result) => {
    console.log('Promise resolved with:', result);
})
.catch((error) => {
    logError(error);
});
  




  
  

  
