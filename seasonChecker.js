// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
const prompt = require('prompt-sync')(); 
function seasonChecker(){
    const month = prompt('Enter the month : ').toLowerCase();
    if(month==='september' || month==='october' || month==='november'){
        return 'Autumn';
    } else if(month==='december' || month==='january' || month==='february'){
        return 'Winter';
    } else if(month==='march' || month==='april' || month==='may'){
        return 'Spring';
    } else if(month==='june' || month==='july' || month==='august'){
        return 'Summer';
    } else {
        return 'Invalid Month';
    }
}

console.log(seasonChecker());
