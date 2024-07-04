// Exercise:
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   ●	Declare an empty array;
//   ●	Declare an array with more than 5 number of elements
//   ●	Find the length of your array
//   ●	Get the first item, the middle item and the last item of the array
//   ●	Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
//   ●	Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//   ●	Print the array using console.log()
//   ●	Print the number of companies in the array
//   ●	Print the first company, middle and last company
//   ●	Print out each company
//   ●	Change each company name to uppercase one by one and print them out
//   ●	Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//   ●	Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
//   ●	Filter out companies which have more than one 'o' without the filter method
//   ●	Sort the array using sort() method
//   ●	Reverse the array using reverse() method
//   ●	Slice out the first 3 companies from the array
//   ●	Slice out the last 3 companies from the array
//   ●	Slice out the middle IT company or companies from the array
//   ●	Remove the first IT company from the array
//   ●	Remove the middle IT company or companies from the array
//   ●	Remove the last IT company from the array
//   ●	Remove all IT companies
  
//   ●	Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//   ●	In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// Empty array
const emptyArray = [];
// Array with more than 5 elements
const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
      ];
// Length of array
const lengthCountriesArr = countries.length;
console.log(`Length of array is : ${lengthCountriesArr}`);
// Get the first item, the middle item and the last item of the array
const firstItem = countries[0];
const middleItem = countries[Math.floor(countries.length/2)];
const lastItem = countries[countries.length - 1];
console.log(`First Item is : ${firstItem}`);
console.log(`Middle Item is : ${middleItem}`);
console.log(`Last Item is : ${lastItem}`);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
// The array size should be greater than 5
const mixedDataTypes = [
    1,
    'Hello',
    true,
    {name:'John',age:30},
    [1,2,3],
    null,
    undefined,
    function() {return 'Hey';}
];
const lengthMixedArr = mixedDataTypes.length;
console.log(`Length of the mixed array is : ${lengthMixedArr}`);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(`The number of companies in the array is : ${itCompanies.length}`);
// Print the first company, middle and last company
const firstCom = itCompanies[0];
const middleCom = itCompanies[Math.floor(itCompanies.length/2)];
const lastCom = itCompanies[itCompanies.length-1];
console.log(`First Company is : ${firstCom}`);
console.log(`Middle Company is : ${middleCom}`);
console.log(`Last Company is : ${lastCom}`);

// Print out each company
console.log('\nEach Company :');
itCompanies.forEach(company => console.log(company));

// Change each company name to uppercase one by one and print them out
console.log('\nEach Company in Uppercase : ');
itCompanies.forEach(companyToUppercase => {
    console.log(companyToUppercase.toUpperCase());
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = `${itCompanies.slice(0,-1).join(', ')} and ${itCompanies[itCompanies.length-1]} are big IT companies`;
console.log(sentence);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const prompt = require('prompt-sync')();

const companyName = prompt('Enter a company name : ');

const companyExists = itCompanies.some(company => company.toLowerCase() === companyName.toLowerCase());

if (companyExists) {
  console.log(`${companyName} exists in the array.`);
} else {
  console.log(`${companyName} is not found in the array.`);
}

// Filter out companies which have more than one 'o' without the filter method
const filteredCom = [];

for(let i = 0; i < itCompanies.length; i++){
    const company = itCompanies[i];
    let oCount = 0;
    for(let j = 0; j < company.length; j++){
        if(company[j].toLowerCase() === 'o'){
            oCount++;
        }
    }
    if(oCount > 1){
        filteredCom.push(company);
    }
}
console.log(filteredCom);

// Sort the array using sort() method
itCompanies.sort();
console.log(`Array using sort() method : ${itCompanies}`);

// Reverse the array using reverse() method
itCompanies.reverse();
console.log(`Array using reverse() method : ${itCompanies}`);

// Slice out the first 3 companies from the array
const firstThreeComSlice = itCompanies.slice(0,3);
console.log(firstThreeComSlice);

// Slice out the last 3 companies from the array
const lastThreeComSlice = itCompanies.slice(-3);
console.log(lastThreeComSlice);

// Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length/2);
const middleComSlice = itCompanies.slice(middleIndex, middleIndex + 1);
console.log(middleComSlice);

// Remove the first IT company from the array
const removeFirstCom = itCompanies.shift();
console.log(`First company removed : ${removeFirstCom}`);
console.log(`Array after removing first company : ${itCompanies}`);

// Remove the middle IT company or companies from the array
const middleIndexToRemove = Math.floor(itCompanies.length/2);
const removeMiddle = itCompanies.splice(middleIndexToRemove,1);
console.log(`Middle Company removed : ${removeMiddle}`);
console.log(`Array after middle company removed : ${itCompanies}`);

// Remove the last IT company from the array
const removeLastCom = itCompanies.pop();
console.log(`Last Company removed : ${removeLastCom}`);
console.log(`Array after last company removed : ${itCompanies}`);

// Remove all IT companies
itCompanies.length = 0;
console.log(`All companies removed : ${itCompanies}`);

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and 
// store the webTechs array in to this file. Access both file in main.js file

const countriesOtherfile = require('./countries');
const web_techs = require('./web_techs');

console.log(countriesOtherfile);
console.log(web_techs);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.
if(countriesOtherfile.includes('Ethiopia')){
    console.log('ETHIOPIA');
}else{
    countriesOtherfile.push('Ethiopia');
    console.log(`Ethiopia added to countries list`);
}
console.log(countriesOtherfile);











