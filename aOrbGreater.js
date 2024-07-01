// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
function compareNumbersFirstMethod(a, b) {
    if (a > b) {
        return 'a is greater than b';
    } else {
        return 'a is less than b';
    }
}

console.log(compareNumbersFirstMethod(5, 3)); 
console.log(compareNumbersFirstMethod(2, 4)); 

function compareNumbersSecondMethod(a, b) {
    return (a > b) ? 'a is greater than b' : 'a is less than b';
}

console.log(compareNumbersSecondMethod(5, 3)); 
console.log(compareNumbersSecondMethod(2, 4)); 

