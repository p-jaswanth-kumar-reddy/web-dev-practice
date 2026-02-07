let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let ageInput = document.getElementById("age");
let userList = document.getElementById("userList");

let users = JSON.parse(localStorage.getItem("users")) || [];

// Display users on page load
displayUsers();

// Add new user
document.getElementById("add").addEventListener("click", function () {
  let user = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";

  displayUsers();
});

// Clear all users
document.getElementById("clear").addEventListener("click", function () {
  localStorage.removeItem("users");
  users = [];
  displayUsers();
});

// Display function
function displayUsers() {
  userList.innerHTML = "";

  users.forEach(function (user, index) {
    let li = document.createElement("li");
    li.innerText = `${index + 1}. ${user.name} - ${user.email} - ${user.age}`;
    userList.appendChild(li);
  });
}
