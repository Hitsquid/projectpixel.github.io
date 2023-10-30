/*
    auteur: Samii
    Datum: 3/10/23

    content: script to determine if the arcade is open and display an image on the times page depending on the result
*/

//getting the current time and day of the week 
const now = new Date();
const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
const hours = now.getHours(); //returns the current hour of the day

//if else statement to determine if the arcade is open
if (day == 1 || day == 2) 
{
    document.getElementById("sign").src = "../images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn gesloten.";
}

else if (hours < 14) 
{
    document.getElementById("sign").src = "../images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn gesloten.";
}
else if (day !=0 && hours >= 23) 
{
    document.getElementById("sign").src = "../images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn gesloten.";
} 

else if (day == 0 && hours >=22) 
{
    document.getElementById("sign").src = "../images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn gesloten.";
}

else 
{
    document.getElementById("sign").src = "../images/open.png";
    document.getElementById("sign").alt = "open sign";
    document.getElementById("signcaption").innerHTML = "We zijn open.";
}