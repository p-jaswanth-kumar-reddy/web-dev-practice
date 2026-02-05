// Strings
let text = "JavaScript Basics";

console.log("String:", text);
console.log("Length:", text.length);

// String methods
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Substring:", text.substring(0, 10));
console.log("Includes 'Script':", text.includes("Script"));
console.log("Replace:", text.replace("Basics", "Learning"));

// Looping through string
for (let i = 0; i < text.length; i++) {
  console.log("Character at", i, ":", text[i]);
}

for (let char of text) {
  console.log("Char:", char);
}

// Arrays
let languages = ["HTML", "CSS", "JavaScript", "React"];

console.log("Array:", languages);
console.log("Array length:", languages.length);

// Array methods
languages.push("Node.js");
console.log("After push:", languages);

languages.pop();
console.log("After pop:", languages);

languages.unshift("Git");
console.log("After unshift:", languages);

languages.shift();
console.log("After shift:", languages);

console.log("Includes CSS:", languages.includes("CSS"));
console.log("Index of JavaScript:", languages.indexOf("JavaScript"));
console.log("Print as string:",languages.toString());
console.log("Joining the array:",languages.join("-"));

// Looping through array
for (let i = 0; i < languages.length; i++) {
  console.log("Index", i, ":", languages[i]);
}

for (let item of languages) {
  console.log("Item:", item);
}

languages.forEach(function(item, index) {
  console.log("forEach", index, ":", item);
});
