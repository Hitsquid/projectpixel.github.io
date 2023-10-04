const now = new Date();
const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(`Today is day ${day} and the time is ${hours}:${minutes}.`);

document.getElementById("time").innerHTML = "Today is day " + day + " and the time is " + hours + ":" + minutes + ".";

//if else statement to determine if the arcade is open
if (day == 1 || day == 2) {
    document.getElementById("sign").src = "images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn gesloten.";
}

else if (hours < 14) {
    document.getElementById("sign").src = "images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn gesloten.";
}
else if (day !=0 && hours >= 23) {
    document.getElementById("sign").src = "images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn gesloten.";
} 

else if (day == 0 && hours >=22) {
    document.getElementById("sign").src = "images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn gesloten.";
}

else {
    document.getElementById("sign").src = "images/open.jpg";
    document.getElementById("sign").alt = "open sign";
    document.getElementById("signcaption").innerHTML = "We zijn open.";
};