// Javascript Datatypes

// Datatypes 1 : Primitive Datatypes

// String
var str = 'Hello World';
console.log(str);

// Number
var num1 = 123;
var num2 = 567;

console.log(num1,num2);

// Boolean
var a = 12;
var b = 15;

var str1 = 'First';
var str2 = 'Second';
console.log(a==b);
console.log(str1==str2);

// Undefined
var un;
console.log(un);

// Null
var n = null;
console.log(n);

// Symbol

let symbol1 = Symbol('S1');
let symbol2 = Symbol('S1');
console.log(symbol1==symbol2);


// Datatypes 2 : Non-Primitive Datatypes

// Objects
var obj = {
   name:'Jake',
   class:12,
   age: 16
}

console.log(obj);

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
var jsonString = JSON.stringify(obj);
console.log(jsonString);



