// Single-line comment
// This program explains comments, conditionals, loops and functions

/*
 Multi-line comment
 JavaScript basics program
*/

// Conditional statements
let number = prompt("Enter a number ");

if (number > 0) {
  alert("Number is positive");
} else if (number < 0) {
  alert("Number is negative");
} else {
  alert("Number is zero");
}

// Switch statement
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// Loops

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop value:", i);
}

// for...in loop
// Used to iterate over keys (indexes or property names)

let student = {
  name: "Jaswanth",
  age: 21,
  course: "Web Development"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}

// for...in with array
let numbers = [10, 20, 30];

for (let index in numbers) {
  console.log("Index:", index, "Value:", numbers[index]);
}

// for...of loop
// Used to iterate over values of iterable objects (arrays, strings)

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...of with string
let name = "JS";

for (let char of name) {
  console.log("Character:", char);
}

// forEach loop
// Used to iterate over arrays using a callback function

let marks = [85, 90, 78];

marks.forEach(function(value, index) {
  console.log("Index:", index, "Value:", value);
});

// forEach using arrow function
marks.forEach((value) => {
  console.log("Mark:", value);
});


// While loop
let j = 1;
while (j <= 3) {
  console.log("While loop value:", j);
  j++;
}

// Do-while loop
let k = 1;
do {
  console.log("Do-while loop value:", k);
  k++;
} while (k <= 2);

// Functions

// Function declaration
function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
console.log("Sum:", sum);

// Function without parameters
function greet() {
  console.log("Hello, Welcome to JavaScript");
}

// Function with parameters
function greet(name) {
  console.log(`Hello ${name}, Welcome to JavaScript`);
}
greet("jashu");

// Arrow function
const multiply = (x, y) => {
  return x * y;
};

console.log("Multiplication:", multiply(4, 5));
