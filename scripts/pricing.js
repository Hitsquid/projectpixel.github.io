// Dynamic Pricing System
// Made by Gwyn
// 04/10/2023

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
var dayNow = string.toUpper(day);
document.getElementById("Today").innerHTML = dayNow;

var Closed = "Closed.";
var State2 = "Weekend prices.";
var State3 = "Midweek prices.";

// Price for adults in the midweek
const Price3A = ["1 Hour - 6,00", "2 Hour - 8,50", "Full day - 15,00"];
let lLen = Price3A.length;

let midweekA = "<ul>";
for (let i = 0; i < lLen; i++) {
  midweekA += "<li>" + Price3A[i] + "</li>";
}
midweekA += "</ul>";

// Price for children in the midweek
const Price3C = ["1 Hour - 5,00", "2 Hour - 7,50", "Full day - 15,00"];
let aLen = Price3C.length;

let midweekC = "<ul>";
for (let i = 0; i < aLen; i++) {
  midweekC += "<li>" + Price3C[i] + "</li>";
}
midweekC += "</ul>";

// Price for adults in the weekend
const Price2A = ["1 Hour - 7,50", "2 Hour - 10,00", "Full day - 17,50"];
let pLen = Price2A.length;

let weekendA = "<ul>";
for (let i = 0; i < pLen; i++) {
  weekendA += "<li>" + Price2A[i] + "</li>";
}
weekendA += "</ul>";

// Price for children in the weekend
const Price2C = ["1 Hour - 6,50", "2 Hour - 9,00", "Full day - 17,50"];
let dLen = Price2C.length;

let weekendC = "<ul>";
for (let i = 0; i < dLen; i++) {
  weekendC += "<li>" + Price2C[i] + "</li>";
}
weekendC += "</ul>";

// These work quite simplisticly; an array for values, a [let] for the amount of values in an array, a [for loop] to count until it's empty, and a return in a list format.


if(day == "Sunday"){
    document.getElementById("State").innerHTML = State2;
    document.getElementById("PriceAd").innerHTML = weekendA;
    document.getElementById("PriceCh").innerHTML = weekendC;
}
else if(day == "Monday"){
    document.getElementById("State").innerHTML = Closed;
    document.getElementById("PriceAd").innerHTML = Closed;
    document.getElementById("PriceCh").innerHTML = Closed;
    alert("The arcade is closed today.");
}
else if(day == "Tuesday"){
    document.getElementById("State").innerHTML = Closed;
    document.getElementById("PriceAd").innerHTML = Closed;
    document.getElementById("PriceCh").innerHTML = Closed;
    alert("The arcade is closed today.");
}
else if(day == "Wednesday"){
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Thursday"){
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Friday"){
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Saturday"){
    document.getElementById("State").innerHTML = State2;
    document.getElementById("PriceAd").innerHTML = weekendA;
    document.getElementById("PriceCh").innerHTML = weekendC;
};