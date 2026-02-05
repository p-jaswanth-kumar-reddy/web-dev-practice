// Variables
var name = "Jaswanth";
let age = 21;
const isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Primitive data types
let numberType = 10;
let stringType = "Hello";
let booleanType = false;
let undefinedType;
let nullType = null;
let symbolType = Symbol("id");
let bigIntType = 1234567890123n;

console.log("Number:", numberType);
console.log("String:", stringType);
console.log("Boolean:", booleanType);
console.log("Undefined:", undefinedType);
console.log("Null:", nullType);
console.log("Symbol:", symbolType);
console.log("BigInt:", bigIntType);

// Object
let student = {
  name: "Jaswanth",
  age: 21,
  course: "Web Development",
  isActive: true
};

console.log("Student Object:", student);
console.log("Student Name:", student.name);
console.log("Student Course:", student.course);

// Operators
let a = 10;
let b = 5;

// Arithmetic operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Comparison operators
console.log("Equal:", a == b);
console.log("Strict Equal:", a === b);
console.log("Greater Than:", a > b);

// Logical operators
console.log("AND:", a > 5 && b > 3);
console.log("OR:", a > 20 || b > 3);
console.log("NOT:", !(a > 5));

// Assignment operator
let x = 10;
x += 5;
console.log("Assignment Result:", x);
