// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all';

// fetch(countriesAPI)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         data.forEach(country => {
//             const name = country.name;
//             const capital = country.capital || 'No capital'; 
//             const languages = country.languages.map(lang => lang.name).join(', ');
//             const population = country.population;
//             const area = country.area;

//             console.log(`Name: ${name}`);
//             console.log(`Capital: ${capital}`);
//             console.log(`Languages: ${languages}`);
//             console.log(`Population: ${population}`);
//             console.log(`Area: ${area}`);
//             console.log('---'); 
//         });
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

// Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const catNames = data.map(cat => cat.name);
        console.log('Cat Names:', catNames);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const weights = data.map(cat => {
            const weightRange = cat.weight.metric.split(' - ');
            const minWeight = parseFloat(weightRange[0]);
            const maxWeight = parseFloat(weightRange[1]);
            return (minWeight + maxWeight) / 2; 
        });
        const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
        const averageWeight = totalWeight / weights.length;

        console.log('Average Weight of Cats (in kg):', averageWeight.toFixed(2));
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const sortedCountries = data.sort((a, b) => b.area - a.area);

        const top10LargestCountries = sortedCountries.slice(0, 10);
        
        top10LargestCountries.forEach(country => {
            console.log(`Name: ${country.name}`);
            console.log(`Area: ${country.area} km²`);
            console.log('---'); 
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const languagesSet = new Set();

        data.forEach(country => {
            if (country.languages) {
                country.languages.forEach(lang => {
                    languagesSet.add(lang.name);
                });
            }
        });
        const totalLanguages = languagesSet.size;
        console.log('Total number of official languages in the world:', totalLanguages);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });




