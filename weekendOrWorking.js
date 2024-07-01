// Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

const prompt = require('prompt-sync')(); 

function checkDay() {
    const day = prompt("What is the day today? ").toLowerCase(); 

    if (day === 'saturday' || day === 'sunday') {
        return `${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend.`;
    } else if (
        day === 'monday' ||
        day === 'tuesday' ||
        day === 'wednesday' ||
        day === 'thursday' ||
        day === 'friday'
    ) {
        return `${day.charAt(0).toUpperCase() + day.slice(1)} is a working day.`;
    } else {
        return 'Invalid day';
    }
}

console.log(checkDay());
