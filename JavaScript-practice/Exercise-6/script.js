let message = document.getElementById("message");
let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let count = 0;
let intervalId;

// setTimeout example
setTimeout(function () {
  message.innerText = "This message appears after 3 seconds";
}, 3000);

// start timer
startBtn.addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(function () {
      count++;
      timerDisplay.innerText = count;
    }, 1000);
  }
});

// stop timer
stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});

// reset timer
resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  count = 0;
  timerDisplay.innerText = count;
});
