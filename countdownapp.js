const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("secs");

const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = Math.abs(days);
    hoursEl.innerHTML = Math.abs(hours);
    minsEl.innerHTML = Math.abs(minutes);
    secEl.innerHTML = Math.abs(seconds);

}

countdown();

setInterval(countdown, 1000);