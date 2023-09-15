let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let secondsLeft = 0;
let msg = "Your moment is complete";
let timerId = null;

function clearIntervalFun() {
    clearInterval(timerId);
}

function startTime() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft;
    } else {
        clearIntervalFun();
        timerTextEl.textContent = msg;
    }
}

function setTimeAndShow() {
    timerTextEl.textContent = secondsLeft + "seconds left";
    timerId = setInterval(startTime, 1000);
}
twentySecondsBtnEl.onclick = function() {
    secondsLeft = 20;
    clearIntervalFun();
    setTimeAndShow();
}
thirtySecondsBtnEl.onclick = function() {
    secondsLeft = 30;
    clearIntervalFun();
    setTimeAndShow();
}
fortySecondsBtnEl.onclick = function() {
    secondsLeft = 40;
    clearIntervalFun();
    setTimeAndShow();
}
oneMinuteBtnEl.onclick = function() {
    secondsLeft = 60;
    clearIntervalFun();
    setTimeAndShow();
}