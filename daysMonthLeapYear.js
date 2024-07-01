// Write a program which tells the number of days in a month, now consider leap year.
const prompt = require('prompt-sync')();

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(month, year) {
    if (month === 2) { 
        return isLeapYear(year) ? 29 : 28;
    }

    if ([4, 6, 9, 11].includes(month)) {
        return 30;
    }
    return 31;
}

function monthName(month) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month - 1];
}

function main() {
    const monthInput = prompt("Enter the month (1-12): ");
    const yearInput = prompt("Enter the year: ");

    const month = parseInt(monthInput);
    const year = parseInt(yearInput);

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        console.log("Invalid input. Please enter a valid month (1-12) and year.");
        return;
    }

    const daysInMonth = getDaysInMonth(month, year);
    const monthNameString = monthName(month);

    console.log(`Number of days in ${monthNameString} ${year} is: ${daysInMonth}`);
}

main();
