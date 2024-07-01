// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
function seasonChecker(month){
    sanitisedMonth = month.toLowerCase();
    if(sanitisedMonth==='september' || sanitisedMonth==='october' || sanitisedMonth==='november'){
        return 'Autumn';
    } else if(sanitisedMonth==='december' || sanitisedMonth==='january' || sanitisedMonth==='february'){
        return 'Winter';
    } else if(sanitisedMonth==='march' || sanitisedMonth==='april' || sanitisedMonth==='may'){
        return 'Spring';
    } else if(sanitisedMonth==='june' || sanitisedMonth==='july' || sanitisedMonth==='august'){
        return 'Summer';
    } else {
        return 'Invalid Month';
    }
}

console.log(seasonChecker('September'));
console.log(seasonChecker('January'));
console.log(seasonChecker('December'));
console.log(seasonChecker('May'));
console.log(seasonChecker('June'));
console.log(seasonChecker('July'));
console.log(seasonChecker('February'));