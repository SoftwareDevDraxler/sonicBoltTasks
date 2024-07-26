// Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON);

// Stringify the age variable
let age = 250;
const ageJSON = JSON.stringify(age);
console.log(ageJSON);

// Stringify the isMarried variable
let isMarried  = true;
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

// Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// Stringify the students object with only firstName, lastName and skills properties
const studentFiltered = {
    firstName: student.firstName,
    lastName: student.lastName,
    skills: student.skills
};
const studentJSON1 = JSON.stringify(studentFiltered);
console.log(studentJSON1);

// Parse the txt JSON to object.
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`;
const dataObject = JSON.parse(txt);
console.log(dataObject);

// Find the user who has many skills from the variable stored in txt.
let maxSkillsUser = null;
let maxSkillsCount = 0;

for (const user in dataObject) {
    const skillsCount = dataObject[user].skills.length;
    if (skillsCount > maxSkillsCount) {
        maxSkillsCount = skillsCount;
        maxSkillsUser = user;
    }
}
console.log(`The user with the most skills is ${maxSkillsUser} with ${maxSkillsCount} skills.`);


  