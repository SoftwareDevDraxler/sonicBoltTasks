// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
function checkEven(n){
    if(n % 2 == 0){
        return 'The number is even';
    }else {
        return 'The number is not even';
    }
}

console.log(checkEven(10));
console.log(checkEven(11));