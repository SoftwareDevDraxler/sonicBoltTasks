const products = [
    { name: 'Rice', price: 35 },
    { name: 'Potato', price: 15 },
    { name: 'Dal', price: 20 },
    { name: 'Atta', price: 40 },
    { name: 'Toothpaste', price: 30 }
  ];
const countries = [
    'India',
    'Somalia',
    'Indonesia',
    'Albania',
    'Congo',
    'Finland',
    'Iceland',
    'Greenland',
    'Ireland',
    'Thailand',
    'Pakistan',
    'Afghanistan'
  ];

// Declare a function called categorizeCountries which returns an array of countries which have 
// some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(countriesArray) {
    const patterns = ['land', 'ia', 'island', 'stan'];
    function matchesPattern(country) {
        for (let pattern of patterns) {
            if (country.toLowerCase().includes(pattern)) {
                return true;
            }
        }
        return false;
    }
    const categorizedCountries = countriesArray.filter(country => matchesPattern(country));

    return categorizedCountries;
}
const categorized = categorizeCountries(countries);
console.log(categorized);

//  Create a function which return an array of objects,
//  which is the letter and the number of times the letter use to start with a name of a country.
function countStartingLetters(countryNames) {
    const letterCounts = {};

    countryNames.forEach(country => {
        const firstLetter = country.charAt(0).toUpperCase(); 

        if (letterCounts[firstLetter]) {
            letterCounts[firstLetter]++;
        } else {
            letterCounts[firstLetter] = 1;
        }
    });
    const letterCountArray = Object.keys(letterCounts).map(letter => ({
        letter: letter,
        count: letterCounts[letter]
    }));

    return letterCountArray;
}
const startingLetterCounts = countStartingLetters(countries);
console.log(startingLetterCounts);

// Declare a getFirstTenCountries function and return an array of ten countries. 
// Use different functional programming to work on the countries.js array

function getFirstTenCountries() {
    return countries.slice(0, 10); 
}
const firstTenCountries = getFirstTenCountries();
console.log(firstTenCountries);

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
    return countries.slice(-10); 
}
const lastTenCountries = getLastTenCountries();
console.log(lastTenCountries);

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function findMostFrequentInitialLetter(countriesArray) {
    const letterCounts = {};
    countriesArray.forEach(country => {
        const firstLetter = country.charAt(0).toUpperCase();
        if (letterCounts[firstLetter]) {
            letterCounts[firstLetter]++;
        } else {
            letterCounts[firstLetter] = 1;
        }
    });
    let mostFrequentLetter = '';
    let maxCount = 0;
    Object.keys(letterCounts).forEach(letter => {
        if (letterCounts[letter] > maxCount) {
            mostFrequentLetter = letter;
            maxCount = letterCounts[letter];
        }
    });

    return mostFrequentLetter;
}
const mostFrequentInitialLetter = findMostFrequentInitialLetter(countries);
console.log(`The most frequent initial letter for country names is: ${mostFrequentInitialLetter}`);



