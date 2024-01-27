let countdown;
let timerDisplay = document.getElementById('timer');

function startTimer() {
    clearInterval(countdown); 

    const durationInput = document.getElementById('duration');
    const duration = parseInt(durationInput.value); 

    let timer = duration;
    displayTimeLeft(timer);

    countdown = setInterval(() => {
        timer--;
        displayTimeLeft(timer);

        var audio = new Audio("https://copaso.duckdns.org/~zampicinini-davide/timerfenzi/audio/alarm.mp3");

        if (timer === 0) {
            clearInterval(countdown);
            audio.play()
            window.location.href = "https://copaso.duckdns.org/~zampicinini-davide/timerfenzi/rip.html";
        }
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    timerDisplay.textContent = display;
}
