// Write a program which tells the number of days in a month.
const prompt = require('prompt-sync')();

function getDaysInMonth(month, year) {
    const date = new Date(year, month, 0);
    return date.getDate();
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
    console.log(`Number of days in ${monthName(month)} ${year} is: ${daysInMonth}`);
}

main();
