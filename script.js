
const startingMinutes = 20;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown-btn');

 setInterval (updateCountdown, 1000);

 function updateCountdown () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    
 }