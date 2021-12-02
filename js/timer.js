let timer = document.querySelector('.timer__time');
let buttonRun = document.querySelector(".start");
let timerInput = document.querySelector("#work-timer");
let timeMinut
let statusTimer = document.querySelector(".status-timer");

statusTimer.innerHTML = "Включи меня";
timer.innerHTML = "ЗАПУТИ МЕНЯ";
buttonRun.addEventListener('click', function() {
    statusTimer.innerHTML = "Пора работать";
    let timeMinut = parseInt(timerInput.value) * 60
    let timerTime = setInterval(function() {
        seconds = timeMinut % 60
        minutes = timeMinut / 60 % 60

        if (seconds < 10) {

            seconds = "0" + seconds;

        }

        if (timeMinut <= 0) {

            clearInterval(timerTime);
            alert("Время закончилось");
        } else {

            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            if (minutes < 10) {

                minutes = "0" + minutes;

            }
            timer.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000)
})

let interval

function stop() {
    statusTimer.innerHTML = "Включи меня";
    clearInterval(setInterval)

    timer.innerHTML = '00:00'



}





function PomodoroTimer() {

}