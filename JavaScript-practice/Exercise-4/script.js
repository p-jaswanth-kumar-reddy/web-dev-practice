// Searching the DOM
let title = document.getElementById("title");
let paragraphs = document.getElementsByClassName("text");
let firstPara = document.querySelector(".text");
let allParas = document.querySelectorAll(".text");

console.log(title);
console.log(paragraphs);
console.log(firstPara);
console.log(allParas);

// Parent, children, siblings
let middlePara = document.querySelector(".middle");
console.log("Parent:", middlePara.parentElement);
console.log("Previous sibling:", middlePara.previousElementSibling);
console.log("Next sibling:", middlePara.nextElementSibling);

// Children traversal
let container = document.querySelector(".container");
console.log("Children:", container.children);
console.log("First child:", container.firstElementChild);
console.log("Last child:", container.lastElementChild);

// Looping through children
for (let child of container.children) {
  console.log("Child text:", child.innerText);
}

// Class manipulation
title.classList.add("highlight");
title.classList.remove("highlight");

// Style manipulation
title.style.color = "blue";
title.style.textAlign = "center";

// Creating new element
let newDiv = document.createElement("div");
newDiv.innerText = "New Element Added";
newDiv.style.color = "red";
container.appendChild(newDiv);

// Removing element
container.removeChild(container.firstElementChild);

// Links access
let links = document.links;
console.log("All links:", links);

for (let link of links) {
  console.log(link.href);
}

// Table access
let table = document.querySelector("table");
console.log("Rows:", table.rows);

for (let row of table.rows) {
  console.log("Cells:", row.cells);
}

// Node vs Element
console.log(container.childNodes);
console.log(container.children);
