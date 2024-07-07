// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
function userIdGeneratedByUser() {
    const prompt = require('prompt-sync')();
    const numCharacters = parseInt(prompt('Enter the number of characters for each ID:'));
    const numIds = parseInt(prompt('Enter the number of IDs to generate:'));
  
    if (isNaN(numCharacters) || isNaN(numIds) || numCharacters <= 0 || numIds <= 0) {
      console.log('Invalid input. Please enter valid numbers greater than zero.');
      return;
    }
  
    let generatedIds = '';
  
    for (let i = 0; i < numIds; i++) {
      let randomId = '';
      for (let j = 0; j < numCharacters; j++) {
        const randomCharCode = Math.floor(Math.random() * 62); 
        if (randomCharCode < 26) {
          randomId += String.fromCharCode(65 + randomCharCode);
        } else if (randomCharCode < 52) {
          randomId += String.fromCharCode(97 + (randomCharCode - 26)); 
        } else {
          randomId += String.fromCharCode(48 + (randomCharCode - 52)); 
        }
      }
      generatedIds += randomId + '\n';
    }
  
    console.log(generatedIds);
  }
  userIdGeneratedByUser();
  userIdGeneratedByUser();

// Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)

function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
  
    return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator());

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(numColors) {
    const hexChars = '0123456789ABCDEF';
    const colors = [];
  
    for (let i = 0; i < numColors; i++) {
      let hexColor = '#';
      for (let j = 0; j < 6; j++) {
        hexColor += hexChars[Math.floor(Math.random() * 16)];
      }
      colors.push(hexColor);
    }
  
    return colors;
}
console.log(arrayOfHexaColors(5));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(numColors) {
    const colors = [];
  
    for (let i = 0; i < numColors; i++) {
      const r = Math.floor(Math.random() * 256); 
      const g = Math.floor(Math.random() * 256); 
      const b = Math.floor(Math.random() * 256); 
  
      colors.push(`rgb(${r},${g},${b})`);
    }
  
    return colors;
}
console.log(arrayOfRgbColors(5));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexColor) {
    hexColor = hexColor.replace('#', '');
  
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(convertHexaToRgb('#5FAC03')); 
console.log(convertHexaToRgb('#D8A94E')); 
console.log(convertHexaToRgb('#2BC8FA'));

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgbColor) {
    const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) {
      throw new Error('Invalid RGB color format. Please provide a color in the format rgb(r, g, b)');
    }
  
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
  
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
  
    return `#${hexR}${hexG}${hexB}`;
}
console.log(convertRgbToHexa('rgb(95, 172, 3)')); 
console.log(convertRgbToHexa('rgb(216, 169, 78)')); 
console.log(convertRgbToHexa('rgb(43, 200, 250)')); 
  
// Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
function generateColors(type, numColors) {
    const colors = [];
  
    if (type === 'hexa') {
      for (let i = 0; i < numColors; i++) {
        let hexColor = '#';
        for (let j = 0; j < 6; j++) {
          hexColor += Math.floor(Math.random() * 16).toString(16); 
        }
        colors.push(hexColor);
      }
    } else if (type === 'rgb') {
      for (let i = 0; i < numColors; i++) {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        colors.push(`rgb(${r}, ${g}, ${b})`);
      }
    } else {
      throw new Error('Invalid color type. Please use "hexa" or "rgb".');
    }
  
    return numColors === 1 ? colors[0] : colors;
}
console.log('Generate any number of hexa or rgb colors');
console.log(generateColors('hexa', 3)); 
console.log(generateColors('hexa', 1)); 
console.log(generateColors('rgb', 3)); 
console.log(generateColors('rgb', 1));  

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    const shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    return shuffledArray;
}
const originalArray = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(originalArray);
console.log("Original array:", originalArray);
console.log("Shuffled array:", shuffled); 

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    
    return result;
}
console.log(factorial(5));
console.log(factorial(0)); 
console.log(factorial(1)); 
console.log(factorial(10)); 
  
// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
    if (value === undefined || value === null) {
      return true; 
    }
    
    if (typeof value === 'string' && value.trim() === '') {
      return true;
    }
    
    if (Array.isArray(value) && value.length === 0) {
      return true; 
    }
    
    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return true; 
    }
    
    return false; 
}
console.log(isEmpty(null));        
console.log(isEmpty(undefined));   
console.log(isEmpty(''));          
console.log(isEmpty([]));          
console.log(isEmpty({}));          
console.log(isEmpty('   '));  
console.log(isEmpty([1, 2, 3]));  
console.log(isEmpty({ name: 'John' }));
console.log(isEmpty('Hello'));    
console.log(isEmpty(0));      

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2, 3));             
console.log(sum(5, 10, 15, 20));       
console.log(sum(2, 4, 6, 8, 10));      
console.log(sum(0));                   
console.log(sum());                    
console.log(sum(-1, 1, -2, 2, -3, 3));  

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
// Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
    if (!Array.isArray(arr)) {
      return 'Error: Input is not an array.';
    }
    for (let num of arr) {
      if (typeof num !== 'number') {
        return 'Error: Array contains non-numeric elements.';
      }
    }

    let sum = arr.reduce((total, current) => total + current, 0);
  
    return sum;
}
console.log('Sum of all the items');
console.log(sumOfArrayItems([1, 2, 3]));         
console.log(sumOfArrayItems([5, 10, 15, 20]));    
console.log(sumOfArrayItems([2, '4', 6, 8, 10])); 
console.log(sumOfArrayItems([]));                
console.log(sumOfArrayItems('abc'));             
  
// Write a function called average, it takes an array parameter and returns the average of the items. 
// Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    if (!arr.every(item => typeof item === 'number')) {
        return 'Array contains non-numeric elements.';
    }

    const sum = arr.reduce((total, num) => total + num, 0);

    const avg = sum / arr.length;

    return avg;
}
const numbers = [1, 2, 3, 4, 5];
console.log('Average of array items');
console.log(`Average: ${average(numbers)}`); 

const mixedArray = [1, '2', 3, 'four', 5];
console.log(`Average: ${average(mixedArray)}`); 

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
// If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);

// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);

// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']

// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);

//  'Not Found'

function modifyArray(arr) {
    if (arr.length < 5) {
        return 'Not Found';
    }

    arr[4] = arr[4].toUpperCase();

    return arr;
}
console.log('modifyArray');
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
console.log('Is prime?');
console.log(isPrime(1));  
console.log(isPrime(2));  
console.log(isPrime(3));  
console.log(isPrime(4));  
console.log(isPrime(17)); 
console.log(isPrime(25)); 
console.log(isPrime(29)); 

// Write a functions which checks if all items are unique in the array.
function areAllItemsUnique(arr) {
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return false;
        } else {
            seen[arr[i]] = true;
        }
    }
    return true;
}
console.log('Unique numbers or not');
console.log(areAllItemsUnique([1, 2, 3, 4, 5]));          
console.log(areAllItemsUnique([1, 2, 3, 3, 4, 5]));          
console.log(areAllItemsUnique(['a', 'b', 'c', 'd', 'e']));  
console.log(areAllItemsUnique(['a', 'b', 'c', 'c', 'd']));   
console.log(areAllItemsUnique([]));                        
console.log(areAllItemsUnique([1]));    

// Write a function which checks if all the items of the array are the same data type. 
function checkSameType(arr) {
    if (arr.length === 0) {
        return 'Array is empty';
    }
    const firstType = typeof arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== firstType) {
            return 'Not all elements are of the same type';
        }
    }
    return 'All elements are of the same type';
}
console.log(checkSameType([1, 2, 3, 4, 5]));              
console.log(checkSameType(['a', 'b', 'c', 'd', 'e']));
console.log(checkSameType([true, false, true]));        
console.log(checkSameType([1, '2', 3]));                 
console.log(checkSameType([]));                         
console.log(checkSameType([null, null, null]));         
console.log(checkSameType([undefined, null]));    

// JavaScript variable name does not support special characters or symbols except $ or _. 
// Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variableName) {
    if (typeof variableName !== 'string') {
        return 'Invalid: Variable name must be a string';
    }
    if (/^\d/.test(variableName)) {
        return 'Invalid: Variable name cannot start with a number';
    }
    if (/[^a-zA-Z0-9_$]/.test(variableName)) {
        return 'Invalid: Variable name contains invalid characters';
    }
    return 'Valid: Variable name is valid';
}
console.log(isValidVariable('validVariable')); 
console.log(isValidVariable('_valid'));        
console.log(isValidVariable('$valid'));        
console.log(isValidVariable('invalid-Variable'));
console.log(isValidVariable('123invalid'));     
console.log(isValidVariable(''));               
console.log(isValidVariable(null));            
console.log(isValidVariable('va lid'));   

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function sevenRandomNumbers() {
    let numbers = new Set(); 

    while (numbers.size < 7) {
        let randomNumber = Math.floor(Math.random() * 10); 
        numbers.add(randomNumber); 
    }
    return Array.from(numbers);
}
console.log(sevenRandomNumbers()); 

// Write a function called reverseCountries, it takes countries array and first it copy the array 
// and returns the reverse of the original array
function reverseCountries(countries) {
    let copy = countries.slice();

    copy.reverse();

    return copy;
}
const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

const reversedCountries = reverseCountries(countries);
console.log(reversedCountries);







  


  

  

  