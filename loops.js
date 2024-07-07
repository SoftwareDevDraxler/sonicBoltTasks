// Iterate 0 to 10 using for loop, do the same using while and do while loop
console.log('For loop');
for(let i = 0; i <= 10; i++){
    console.log(i);
}
console.log('While loop');
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}
console.log('do while');
let k = 0;
do{
    console.log(k);
    k++;
}while(k <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
console.log('For loop');
for(let i = 10; i >= 0; i--){
    console.log(i);
}
console.log('While loop');
let i1 = 10;
while(i1 >= 0){
    console.log(i1);
    i1--;
}
console.log('do while');
let k1 = 10;
do{
    console.log(k1);
    k1--;
}while(k1 >= 0);

// Iterate 0 to n using for loop
const prompt = require('prompt-sync')();

const n = prompt('Enter the value of n : ');

if(!isNaN(n)){
    for(let i = 0; i <= n; i++){
        console.log(i);
    }
}else{
    console.log('Please enter a valid number');
}

// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
const lines = 7;

for(let i = 0; i <= lines; i++){
    console.log('#'.repeat(i));
}

// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
const lines2 = 10;

for(let i = 0; i <= lines2; i++){
    console.log(`${i} X ${i} = ${i * i}`);
}

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
const lines3 = 10;

console.log('i    i^2   i^3'); 

for (let i = 0; i <= lines3; i++) {
  console.log(`${i}    ${i ** 2}   ${i ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
console.log('Even numbers from 0 to 100');
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
console.log('Odd numbers from 0 to 100');
for(let i = 0; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
console.log('Prime numbers from 0 to 100');
function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
for(let i = 0; i <= 100; i++){
    if(isPrime(i)){
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers. The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for(let i = 0; i <= 100; i++){
    sum += i;
}
console.log(`Sum of all Numbers from 0 to 100 = ${sum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let evenSum = 0;
let oddSum = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        evenSum += i;
    }else{
        oddSum += i;
    }
}
console.log(`Sum of all even numbers from 0 to 100 = ${evenSum}`);
console.log(`Sum of all odd numbers from 0 to 100 = ${oddSum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
// Print sum of evens and sum of odds as array
let evenSum1 = 0;
let oddSum1 = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        evenSum1 += i;
    }else{
        oddSum1 += i;
    }
}
console.log(`Sum of evens and odds in an array : [${evenSum1}, ${oddSum1}]`);

// Develop a small script which generate array of 5 random numbers
function generateRandomArray(length, min, max) {
    let randomArray = [];
  
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
  
    return randomArray;
  }
  const randomArray = generateRandomArray(5, 1, 100);
  console.log(randomArray);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
function generateUniqueRandomArray(length, min, max) {
    let randomArray = [];
  
    while (randomArray.length < length) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber);
      }
    }
  
    return randomArray;
  }
  const uniqueRandomArray = generateUniqueRandomArray(5, 1, 100);
  console.log(uniqueRandomArray);

// Develop a small script which generate a six characters random id:
// 5j2khz
function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters[randomIndex];
    }

    return randomId;
}
const randomId = generateRandomId(6);
console.log(randomId);
  

  
  


  


