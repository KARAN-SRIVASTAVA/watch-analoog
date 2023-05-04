setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourHandAngle = 30 * hours + minutes / 2 + seconds / 120;
    let minuteHandAngle = 6 * minutes + seconds/10;
    let secongHandAngle = 6 * seconds ;
    let hour = document.getElementById("hour");
    hour.style.transform = `rotate(${hourHandAngle}deg)`;
    let minute = document.getElementById("minute");
    minute.style.transform = `rotate(${minuteHandAngle}deg)`;
    let second = document.getElementById("second");
    second.style.transform = `rotate(${secongHandAngle}deg)`;
}, 1000)