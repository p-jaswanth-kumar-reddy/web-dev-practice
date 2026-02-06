// Selecting elements
let heading = document.getElementById("heading");
let button = document.getElementById("btn");
let input = document.getElementById("inputBox");
let output = document.getElementById("output");
let box = document.getElementById("hoverBox");
let link = document.getElementById("link");

// Click event
button.addEventListener("click", function () {
  heading.innerText = "Button Clicked";
  heading.style.color = "blue";
});

// Mouse events
box.addEventListener("mouseenter", function () {
  box.classList.add("active");
  box.innerText = "Mouse Inside";
});

box.addEventListener("mouseleave", function () {
  box.classList.remove("active");
  box.innerText = "Hover over me";
});

// Keyboard event
input.addEventListener("keyup", function (event) {
  output.innerText = "You typed: " + event.target.value;
});

// Event object
button.addEventListener("click", function (event) {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
});

// Prevent default action
link.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Link click prevented");
});

// DOM properties
console.log("innerHTML:", heading.innerHTML);
console.log("textContent:", heading.textContent);
console.log("nodeName:", heading.nodeName);
console.log("nodeType:", heading.nodeType);

// Attributes
console.log("Href attribute:", link.getAttribute("href"));
link.setAttribute("title", "Go to Google");

// Dataset
box.dataset.info = "hover-box";
console.log("Dataset value:", box.dataset.info);
