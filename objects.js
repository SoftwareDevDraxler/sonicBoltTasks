// Find the person who has many skills in the users object.
// Count logged in users, count users having greater than equal to 50 points from the following object.

// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }```
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

function findPersonWithMostSkills(users) {
  let maxSkills = 0;
  let personWithMostSkills = '';

  for (const user in users) {
    if (users.hasOwnProperty(user)) {
      if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length;
        personWithMostSkills = user;
      }
    }
  }

  return personWithMostSkills;
}

function countLoggedInUsers(users) {
  let count = 0;

  for (const user in users) {
    if (users.hasOwnProperty(user)) {
      if (users[user].isLoggedIn) {
        count++;
      }
    }
  }

  return count;
}
function countUsersWithPoints(users) {
  let count = 0;

  for (const user in users) {
    if (users.hasOwnProperty(user)) {
      if (users[user].points >= 50) {
        count++;
      }
    }
  }

  return count;
}
console.log(`Person with most skills: ${findPersonWithMostSkills(users)}`);
console.log(`Logged in users: ${countLoggedInUsers(users)}`);
console.log(`Users with points >= 50: ${countUsersWithPoints(users)}`);

// Find people who are MERN stack developer from the users object
function findMernStackDevelopers(users) {
    const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];
  
    const mernStackDevelopers = Object.keys(users).filter(user => {
      return mernSkills.every(skill => users[user].skills.includes(skill));
    });
  
    return mernStackDevelopers;
}
const mernDevelopers = findMernStackDevelopers(users);
console.log('MERN Stack Developers:', mernDevelopers);

// Set your name in the users object without modifying the original users object
const updatedUsers = {
    ...users,  
    Test: {  
      email: 'test@example.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'MySql'],
      age: 25,
      isLoggedIn: true,
      points: 55
    }
};
console.log(updatedUsers);

// Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys);

// Get all the values of users object
const values = Object.values(users);
console.log(values);


