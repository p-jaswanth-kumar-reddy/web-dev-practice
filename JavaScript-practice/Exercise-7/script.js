let output = document.getElementById("output");
let callbackBtn = document.getElementById("callbackBtn");
let promiseBtn = document.getElementById("promiseBtn");
let asyncBtn = document.getElementById("asyncBtn");

// Callback example (error handled manually)
function callbackExample() {
  output.innerText = "Running callback example...";

  setTimeout(function () {
    let success = false;

    if (success) {
      output.innerText = "Callback: Data loaded successfully";
    } else {
      output.innerText = "Callback Error: Failed to load data";
    }
  }, 2000);
}

// Promise example with catch
function promiseExample() {
  output.innerText = "Running promise example...";

  let promise = new Promise(function (resolve, reject) {
    let success = false;

    setTimeout(function () {
      if (success) {
        resolve("Promise: Data loaded successfully");
      } else {
        reject("Promise Error: Failed to load data");
      }
    }, 2000);
  });

  promise
    .then(function (message) {
      output.innerText = message;
    })
    .catch(function (error) {
      output.innerText = error;
    });
}

// Async/Await example with try-catch
async function asyncAwaitExample() {
  output.innerText = "Running async/await example...";

  try {
    let data = await new Promise(function (resolve, reject) {
      let success = false;

      setTimeout(function () {
        if (success) {
          resolve("Async/Await: Data loaded successfully");
        } else {
          reject("Async/Await Error: Failed to load data");
        }
      }, 2000);
    });

    output.innerText = data;

  } catch (error) {
    output.innerText = error;
  }
}

// Event listeners
callbackBtn.addEventListener("click", callbackExample);
promiseBtn.addEventListener("click", promiseExample);
asyncBtn.addEventListener("click", asyncAwaitExample);
