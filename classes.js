// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Color: ${this.color}`);
      console.log(`Legs: ${this.legs}`);
    }
    speak(sound) {
      console.log(`${this.name} says: ${sound}`);
    }
    move() {
      console.log(`${this.name} is moving around.`);
    }
    celebrateBirthday() {
      this.age += 1;
      console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
    }
}
const dog = new Animal('Buddy', 3, 'brown', 4);
dog.displayInfo();
dog.speak('Woof!');
dog.move();
dog.celebrateBirthday();

const bird = new Animal('Tweety', 1, 'yellow', 2);
bird.displayInfo();
bird.speak('Tweet!');
bird.move();
bird.celebrateBirthday();

// Create a Dog and Cat child class from the Animal Class.
class Dog1 extends Animal {
    constructor(name, age, color, breed) {
      super(name, age, color, 4); 
      this.breed = breed;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Breed: ${this.breed}`);
    }
  
    bark() {
      console.log(`${this.name} barks: Woof! Woof!`);
    }
}

class Cat extends Animal {
    constructor(name, age, color, furLength) {
      super(name, age, color, 4); 
      this.furLength = furLength;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Fur Length: ${this.furLength}`);
    }
  
    meow() {
      console.log(`${this.name} meows: Meow! Meow!`);
    }
}

const dog1 = new Dog1('Buddy', 3, 'brown', 'Labrador');
dog1.displayInfo();
dog1.speak('Woof!');
dog1.move();
dog1.celebrateBirthday();
dog1.bark();

const cat = new Cat('Whiskers', 2, 'black', 'short');
cat.displayInfo();
cat.speak('Meow!');
cat.move();
cat.celebrateBirthday();
cat.meow();

// Override the method you create in Animal class
class Bird extends Animal {
    constructor(name, age, color, legs, wingspan) {
        super(name, age, color, legs);
        this.wingspan = wingspan;
    }
    move() {
        console.log(`${this.name} is flying through the sky.`);
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Wingspan: ${this.wingspan} cm`);
    }
}

const birdOverride = new Bird('Tweety', 1, 'yellow', 2, 30);
birdOverride.displayInfo();
birdOverride.speak('Tweet!');
birdOverride.move();
birdOverride.celebrateBirthday();

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, 
// standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Statistics {
    constructor(data) {
        this.data = data.sort((a, b) => a - b);
    }

    count() {
        return this.data.length;
    }

    sum() {
        return this.data.reduce((acc, value) => acc + value, 0);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const mid = Math.floor(this.count() / 2);
        return this.count() % 2 === 0 ? (this.data[mid - 1] + this.data[mid]) / 2 : this.data[mid];
    }

    mode() {
        const frequency = {};
        let maxFreq = 0;
        let modes = [];

        for (const num of this.data) {
            frequency[num] = (frequency[num] || 0) + 1;
            if (frequency[num] > maxFreq) {
                maxFreq = frequency[num];
                modes = [num];
            } else if (frequency[num] === maxFreq) {
                modes.push(num);
            }
        }

        return { mode: modes[0], count: maxFreq }; 
    }

    var() {
        const mean = this.mean();
        const squaredDiffs = this.data.map(num => Math.pow(num - mean, 2));
        return squaredDiffs.reduce((acc, value) => acc + value, 0) / this.count();
    }

    std() {
        return Math.sqrt(this.var());
    }

    percentile(p) {
        const index = Math.ceil((p / 100) * this.count()) - 1;
        return this.data[index];
    }

    freqDist() {
        const frequency = {};
        this.data.forEach(value => {
            frequency[value] = (frequency[value] || 0) + 1;
        });
        const freqArray = Object.entries(frequency)
            .map(([key, value]) => [((value * 100) / this.count()).toFixed(1), parseInt(key)])
            .sort((a, b) => b[0] - a[0]);
        return freqArray.map(([percent, value]) => `(${percent}, ${value})`);
    }

    describe() {
        return `
Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: (${this.mode().mode}, ${this.mode().count})
Variance: ${this.var()}
Standard Deviation: ${this.std().toFixed(1)}
Frequency Distribution: [${this.freqDist().join(', ')}]
        `;
    }
}
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

console.log('Count:', statistics.count()); 
console.log('Sum: ', statistics.sum()); 
console.log('Min: ', statistics.min()); 
console.log('Max: ', statistics.max()); 
console.log('Range: ', statistics.range()); 
console.log('Mean: ', statistics.mean()); 
console.log('Median: ', statistics.median()); 
console.log('Mode: ', statistics.mode()); 
console.log('Variance: ', statistics.var()); 
console.log('Standard Deviation: ', statistics.std().toFixed(1)); 
console.log('Frequency Distribution: ', `[${statistics.freqDist().join(', ')}]`); 

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, 
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = new Map(); 
        this.expenses = new Map(); 
    }
    addIncome(description, amount) {
        if (amount <= 0) {
            console.log("Income amount must be positive.");
            return;
        }
        this.incomes.set(description, (this.incomes.get(description) || 0) + amount);
    }
    addExpense(description, amount) {
        if (amount <= 0) {
            console.log("Expense amount must be positive.");
            return;
        }
        this.expenses.set(description, (this.expenses.get(description) || 0) + amount);
    }
    totalIncome() {
        return Array.from(this.incomes.values()).reduce((acc, value) => acc + value, 0);
    }
    totalExpense() {
        return Array.from(this.expenses.values()).reduce((acc, value) => acc + value, 0);
    }
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
    accountInfo() {
        return `
Account Info:
Name: ${this.firstname} ${this.lastname}
Total Income: ${this.totalIncome()}
Total Expense: ${this.totalExpense()}
Account Balance: ${this.accountBalance()}
        `;
    }
}
const account = new PersonAccount('John', 'Doe');

account.addIncome('Salary', 5000);
account.addIncome('Freelance', 1500);
account.addExpense('Rent', 1200);
account.addExpense('Utilities', 300);

console.log(account.accountInfo());



  
  
  
  