const startingMinutes = 20;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown-btn');

const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // Add leading zero to seconds
  seconds = String(seconds).padStart(2, "0");

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;

  // Alert at 5 minutes remaining
  if (time === 5 * 60) {
    alert("⏰ You have 5 minutes remaining!");
  }

  // Stop when it hits 0
  if (time < 0) {
    clearInterval(timer);
    countdownEl.innerHTML = "00:00";
    alert("⏳ Time is up!");
  }
}
