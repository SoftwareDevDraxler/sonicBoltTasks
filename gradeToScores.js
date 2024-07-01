// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
function giveGrades(n){
    if(n >= 80 && n <= 100){
        return 'A';
    }else if(n >= 70 && n <= 89){
        return 'B';
    }else if(n >= 60 && n <= 69){
        return 'C';
    }else if(n >= 50 && n <= 59){
        return 'D';
    }else {
        return 'F';
    }
}
console.log(giveGrades(18));
console.log(giveGrades(71));
console.log(giveGrades(85));
console.log(giveGrades(45));
console.log(giveGrades(60));
