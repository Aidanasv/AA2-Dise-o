function updateClock() {
    var date = new Date();
    var hour = date.getHours();

    console.log(hour);

    var minutes = date.getMinutes();

    var seconds = date.getSeconds();

    console.log(hour+(minutes/60));

    const svg = document.querySelector("svg");
    svg.style.setProperty('--start-seconds', seconds);
    svg.style.setProperty('--start-minutes', minutes);
    svg.style.setProperty('--start-hour', hour+(minutes/60));
}

 setInterval(updateClock, 1000);


