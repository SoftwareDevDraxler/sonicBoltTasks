// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const salaryRegex = /(\d+) euro from salary per month/;
const bonusRegex = /(\d+) euro annual bonus/;
const onlineCoursesRegex = /(\d+) euro online courses per month/;

const salaryMatch = text.match(salaryRegex);
const bonusMatch = text.match(bonusRegex);
const onlineCoursesMatch = text.match(onlineCoursesRegex);

if (salaryMatch && bonusMatch && onlineCoursesMatch) {
    const monthlySalary = parseInt(salaryMatch[1], 10);
    const annualBonus = parseInt(bonusMatch[1], 10);
    const monthlyOnlineCoursesIncome = parseInt(onlineCoursesMatch[1], 10);

    const annualSalary = monthlySalary * 12;
    const annualOnlineCoursesIncome = monthlyOnlineCoursesIncome * 12;

    const totalAnnualIncome = annualSalary + annualBonus + annualOnlineCoursesIncome;

    console.log(`Total annual income: €${totalAnnualIncome}`);
} else {
    console.log('Could not extract income information from the text.');
}

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.
// Extract these numbers and find the distance between the two furthest particles.

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];

const numericalPoints = points.map(point => parseInt(point, 10));

const sortedPoints = numericalPoints.sort((a, b) => a - b);

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log(`Sorted Points: ${sortedPoints}`);
console.log(`Distance between the two furthest particles: ${distance}`);

// Write a pattern which identify if a string is a valid JavaScript variable
function isValidVariable(name) {
    const pattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return pattern.test(name);
}

console.log(isValidVariable('first_name')); 
console.log(isValidVariable('first-name'));
console.log(isValidVariable('1first_name'));
console.log(isValidVariable('firstname')); 

// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
function tenMostFrequentWords(paragraph, topN) {
    const words = paragraph.toLowerCase().split(/\W+/);

    const wordCount = {};
    words.forEach(word => {
        if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });
    const wordCountArray = Object.entries(wordCount);

    wordCountArray.sort((a, b) => b[1] - a[1]);

    return wordCountArray.slice(0, topN).map(([word, count]) => ({ word, count }));
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. 
I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph, 10));

// Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
function cleanText(sentence) {
    const cleanedText = sentence
        .replace(/[^\w\s]/g, '') 
        .toLowerCase()           
        .trim();                

    const words = cleanedText.split(/\s+/);

    const wordCount = {};
    words.forEach(word => {
        if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });
    const wordCountArray = Object.entries(wordCount);

    wordCountArray.sort((a, b) => b[1] - a[1]);

    const topThreeWords = wordCountArray.slice(0, 3);

    return {
        cleanedText,
        topThreeWords: topThreeWords.map(([word, count]) => ({ word, count }))
    };
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));











