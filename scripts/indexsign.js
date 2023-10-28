/*
authors: Samii
Date: 28/10/23

content: script to determine if the arcade is open and display an image on de index page depending on the result
*/

//getting the current time and day of the week 
const currentday = d.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
const hours = now.getHours();
const minutes = now.getMinutes();

//if else statement to determine if the arcade is open
if (currentday == 1 || currentday == 2) 
{
    document.getElementById("sign").src = "images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn de hele dag gesloten.";
}

else if ((currentday !=0 && hours < 14) || (currentday !=0 && hours >= 23)) 
{
    document.getElementById("sign").src = "images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We vandaag geopend van 14:00 tot 23:00.";
}


else if ((currentday == 0 && hours >=22) || (currentday == 0 && hours < 14)) 
{
    document.getElementById("sign").src = "images/closed.png";
    document.getElementById("sign").alt = "closed sign";
    document.getElementById("signcaption").innerHTML = "We zijn vandaag open van 14:00 tot 22:00.";
}

else if (currentday !=0) 
{
    document.getElementById("sign").src = "images/open.png";
    document.getElementById("sign").alt = "open sign";
    document.getElementById("signcaption").innerHTML = "We zijn vandaag open van 14:00 tot 23:00.";
}

else
{
    document.getElementById("sign").src = "images/open.png";
    document.getElementById("sign").alt = "open sign";
    document.getElementById("signcaption").innerHTML = "We zijn vandaag open van 14:00 tot 22:00.";
}