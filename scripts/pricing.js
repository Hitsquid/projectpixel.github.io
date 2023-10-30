// Dynamic Pricing System
// Made by Gwyn
// 04/10/2023


//creates an array of strings ranging from sunday to saturday, used to assign a name to the numbers returned by the getDay fuction
const weekday = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];

//gets the current date, assigns it a string from the array above and then displays the string on the page
const d = new Date();
let day = weekday[d.getDay()];
var dayNow = day.toUpperCase();
document.getElementById("Today").innerHTML = dayNow;

//creates states based on the day, monday and tuesday are closed, and the prices on saturday and sunday are higher than the prices on wednesday, thursday and friday
var Closed = "Gesloten";
var State2 = "Weekend prijzen";
var State3 = "Midweek prijzen";



//array of prices for adults in the midweek
const Price3A = ["1 Uur - 6,00 EUR", "2 Uur - 8,50 EUR", "Hele dag - 15,00 EUR"];
let lLen = Price3A.length; //returns the number of strings in the array

//assembles the list in which to display the prices of the day
let midweekA = "<ul>"; //creates the open tag for the unordered list
//while the value of the variable i is less than the number of strings in the array, creates a list item containing the a string from the array and adds it to the variable 
for (let i = 0; i < lLen; i++) 
{
  midweekA += "<li>" + Price3A[i] + "</li>";
}
midweekA += "</ul>"; //adds the closing tag for the unordered list to the variable

// Price for children in the midweek
const Price3C = ["1 Uur - 5,00 EUR", "2 Uur - 7,50 EUR", "Hele dag - 15,00 EUR"];
let aLen = Price3C.length;

let midweekC = "<ul>";
for (let i = 0; i < aLen; i++) 
{
  midweekC += "<li>" + Price3C[i] + "</li>";
}
midweekC += "</ul>";

// Price for adults in the weekend
const Price2A = ["1 Uur - 7,50 EUR", "2 Uur - 10,00 EUR", "Hele dag - 17,50 EUR"];
let pLen = Price2A.length;

let weekendA = "<ul>";
for (let i = 0; i < pLen; i++) 
{
  weekendA += "<li>" + Price2A[i] + "</li>";
}
weekendA += "</ul>";

// Price for children in the weekend
const Price2C = ["1 Uur - 6,50 EUR", "2 Uur - 9,00 EUR", "Hele dag - 17,50 EUR"];
let dLen = Price2C.length;

let weekendC = "<ul>";
for (let i = 0; i < dLen; i++) 
{
  weekendC += "<li>" + Price2C[i] + "</li>";
}
weekendC += "</ul>";



//script to display the prices of the current day on the webpage, together with the current day, if the prices are the weekend prices or the midweek prices
if(day == "Zondag") 
{
    document.getElementById("State").innerHTML = State2;
    document.getElementById("PriceAd").innerHTML = weekendA;
    document.getElementById("PriceCh").innerHTML = weekendC;
}
else if(day == "Maandag") 
{
    document.getElementById("State").innerHTML = Closed;
    document.getElementById("PriceAd").innerHTML = Closed;
    document.getElementById("PriceCh").innerHTML = Closed;
}
else if(day == "Dinsdag") 
{
    document.getElementById("State").innerHTML = Closed;
    document.getElementById("PriceAd").innerHTML = Closed;
    document.getElementById("PriceCh").innerHTML = Closed;
}
else if(day == "Woensdag") 
{
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Donderdag") 
{
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Vrijdag") 
{
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Zaterdag") 
{
    document.getElementById("State").innerHTML = State2;
    document.getElementById("PriceAd").innerHTML = weekendA;
    document.getElementById("PriceCh").innerHTML = weekendC;
};