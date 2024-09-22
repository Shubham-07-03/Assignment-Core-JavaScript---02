/*
1. Create an arrow function called square that takes a number as an argument and returns its square. Use
the arrow function to calculate the square of a given number and display the result.
*/

const square = (number) => number * number;

const num = 5; // Change this value to test with different numbers
const result = square(num);
console.log(`The square of ${num} is: ${result}.`);
// output : The square of 5 is: 25.





/*
2. The following is an array of 10 students ages:
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24E
    Sort the array and find the min and max ageG
    Find the median age(one middle item or two middle items divided by two
    Find the average age(all items divided by number of items
    Find the range of the ages(max minus min
    Compare the value of (min - average) and (max - average), use abs() method
*/


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
console.log("Sorted ages:", ages);

// Find the min & max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log("Min age:", minAge);
console.log("Max age:", maxAge);

// median age
let medianAge;
const mid = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
    medianAge = (ages[mid - 1] + ages[mid]) / 2;
} else {
    medianAge = ages[mid];
}

console.log("Median age:", medianAge);

// average age
const sum = ages.reduce((acc, curr) => acc + curr, 0);
const averageAge = sum / ages.length;

console.log("Average age:", averageAge);

// range of the ages
const ageRange = maxAge - minAge;

console.log("Age range:", ageRange);

// Compare (min - average) and (max - average) using abs()
const minAvgDifference = Math.abs(minAge - averageAge);
const maxAvgDifference = Math.abs(maxAge - averageAge);

console.log("Difference between min and average:", minAvgDifference);
console.log("Difference between max and average:", maxAvgDifference);

// Output -
// Sorted ages: [ 19, 19, 20, 22, 24, 24, 24, 25, 25, 26 ]
// Min age: 19
// Max age: 26
// Median age: 24
// Average age: 22.8
// Age range: 7
// Difference between min and average: 3.8000000000000007
// Difference between max and average: 3.1999999999999993











/*
3. Create a Map to store contact information (name, age, email, location) and implement a function to
retrieve contact details by name.
 */

// Create a Map to store contact info
const contacts = new Map();

contacts.set("Aman", { age: 25, email: "aman@google.com", location: "New York" });
contacts.set("Shubham", { age: 24, email: "shubham@microsoft.com", location: "London" });
contacts.set("Shradha", { age: 26, email: "shradha@microsoft.com", location: "Paris" });

function getContactDetails(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return `Contact with name "${name}" not found.`;
    }
}

const contactName = "Shradha"; // Change this to test with other names
const contactDetails = getContactDetails(contactName);

console.log(`Contact details for ${contactName}:`, contactDetails);
// output - Contact details for Shradha: { age: 26, email: 'shradha@microsoft.com', location: 'Paris' }













/*
4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
using the introduce function.
*/

const person1 = {
    name: "Shubham",
    age: 24
};

const person2 = {
    name: "Shradha",
    age: 26
};

function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}

introduce.call(person1); // Will use person1's context
introduce.call(person2); // Will use person2's context (using the call method)

// output
// Hello, I'm Shubham, and I'm 24 years old.
// Hello, I'm Shradha, and I'm 26 years old.













/*
5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares.
*/


// Create a Set to store unique nums
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 3, 2]); // Duplicates will be auto removed

// Map to store each num & its corresponding sqr
const numberSquares = new Map();

// Populate the Map with sqr of the num in the Set
uniqueNumbers.forEach(number => {
    numberSquares.set(number, number * number);
});

// Print the unique nums & their corresponding squares
console.log("Unique numbers and their squares:");
numberSquares.forEach((square, number) => {
    console.log(`Number: ${number}, Square: ${square}`);
});

// Output:
// Unique numbers and their squares:
// Number: 1, Square: 1
// Number: 2, Square: 4
// Number: 3, Square: 9
// Number: 4, Square: 16
// Number: 5, Square: 25















/*
6.Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and
  logs a messageG
    Use call to invoke the displayInfo function with specific arguments.
    Use apply to invoke the displayInfo function with arguments passed as an array.
    Create another function named greet that logs a greeting with this context.
    Use bind to create a new function boundGreet with a specific context and log the greeting.
*/

function displayInfo(name, role) {
    console.log(`Hello, my name is ${name} and I am a ${role}.`);
}

displayInfo.call(null, "Aman", "Developer");

displayInfo.apply(null, ["Shubham", "Designer"]);

function greet() {
    console.log(`Hello, I am ${this.name} and I work as a ${this.role}.`);
}

const person = {
    name: "Shradha",
    role: "Engineer"
};

const boundGreet = greet.bind(person);

// Invoke the boundGreet function
boundGreet();

// Output:
// Hello, my name is Aman and I am a Developer.
// Hello, my name is Shubham and I am a Designer.
// Hello, I am Shradha and I work as an Engineer.












/*

7. Tasks
    Create an object named calculator with methods add, subtract, and multiply.
    Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or
    'multiply') and two numbers.
    Use call to perform an addition operation using the calculate method.
    Use apply to perform a multiplication operation using the calculate method with arguments as an array.
    Create another object named discountCalculator with a discount percentage property and a method
    applyDiscount.
    Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and
    can be reused.
*/


// Create an obj named calculator with methods add, subtract, and multiply
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    
    // Implement calculate method which takes an operation and two nums
    calculate(operation, a, b) {
        return this[operation](a, b);
    }
};

// Use call to perform an addition operation using the calculate method
const addResult = calculator.calculate.call(calculator, 'add', 10, 5);
console.log(`Addition Result: ${addResult}`);  // Output: 15

// Use apply to perform a multiplication operation using the calculate method with arguments as an array
const multiplyResult = calculator.calculate.apply(calculator, ['multiply', 6, 4]);
console.log(`Multiplication Result: ${multiplyResult}`);  // Output: 24


// Create another object named discountCalculator
const discountCalculator = {
    discountPercentage: 10,
    
    // Method to apply discount
    applyDiscount(amount) {
        const discount = (this.discountPercentage / 100) * amount;
        return amount - discount;
    }
};

// Use bind to create a new function calculateDiscount that is bound to the discountCalculator object
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

const discountedPrice = calculateDiscount(100);
console.log(`Discounted Price: ${discountedPrice}`);  // Output: 90

// output:
// Addition Result: 15
// Multiplication Result: 24
// Discounted Price: 90
