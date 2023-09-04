let date2024 = new Date("Dec 31, 2023 23:59:59:59").getTime();

let counter = setInterval(function () {
    let dateNow = new Date().getTime();
    let diff = date2024 - dateNow;

    let days = diff / (1000 * 60 * 60 * 24);
    document.querySelector(".days").innerHTML = Math.floor(days);

    let hours = ((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = Math.floor(hours);

    let minutes = ((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = Math.floor(minutes);

    let seconds = ((diff % (1000 * 60)) / (1000));
    document.querySelector(".seconds").innerHTML = Math.floor(seconds);

    if (diff < 0) {
        clearInterval(counter);
    }

}, 1000);