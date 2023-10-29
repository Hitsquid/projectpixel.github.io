// Dynamic Pricing System
// Made by Gwyn
// 04/10/2023

// Ah yes, my eldritch abomination child of code.
// Really, there's only like 5 different things?
// There's the const weekday, new Date(), the vars for easy collectivisation, then the fun parts; full lists for prices, then the returns per day.
// I could probably change those days to be shorter, cuz there's 7 days and only 3 states? I think this is nicer, makes it easier for changes in schedules.
// As for the actual explanations, those'll be above the parts themselves.

// Right, so the date in any coding is seen as a number from 0 through 6, 0 being Sunday, 1 being Monday and so on.
// Here those numbers get translated to days. Not really needed, but I like this because it requires less thinking.
const weekday = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];

// This block consists of only date things. First, a random letter gets attached to the Date() function.
// This variable is then used to acsertain other pieces of information, here it's only to get the weekday.
// After that, we capitalise the day. I just think it looks nicer after that.
// We then get that variable into html to show on the page.
const d = new Date();
let day = weekday[d.getDay()];
var dayNow = day.toUpperCase();
document.getElementById("Today").innerHTML = dayNow;

// Here it's just some simplistic things, just adding text to variables. Changes per day to show the price amount, A.E. if it's midweek or weekend.
// There's 3 states, so 3 variables are needed.
var Closed = "Gesloten";
var State2 = "Weekend prijzen";
var State3 = "Midweek prijzen";

// This next part might get slightly confusing
// 4 functions that work the exact same way, they just have different price values.
// First we create a constant array with the different prices, this is needed for the next few parts.
// After that we look how many items are in said array using .length, which returns an integer.
// After that the second leg starts; time to put things into a list.
// First, obviously, we have to create a list.
// Then we throw in a for() loop, using the length of the array. This'll make sure we get all the values into the list.
// In the for() loop we add the next item in the array. This means that the first available value goes into the list. After this is done, it goes to the next value and so on.
// For anything confusing, I'll try to make it more clear with the following:
// First, the variable for price gets a <ul> added to it. The variable is midweekA, midweekC, weekendA or weekendC.
// After that a few things are added in a row; <li>, the first available value in the array, </li>. This is done to create a list element in HTML.
// This gets repeated for every item in the array.
// To close the function, at the end the variable for price gets a </ul> added, to close the list.
// These functions basically write in full HTML a list. It's just a really big way to easily write lists in HTML using Javascript.
// Done twice per state due to difference in prices for adults and children, not needed for when it's closed.
// I also found my earlier comment, which i'll put below this one

// These work quite simplisticly; an array for values, a [let] for the amount of values in an array, a [for loop] to count until it's empty, and a return in a list format.

// Yeah, it's a lot

// Price for adults in the midweek
const Price3A = ["1 Uur - 6,00 EUR", "2 Uur - 8,50 EUR", "Hele dag - 15,00 EUR"];
let lLen = Price3A.length;

let midweekA = "<ul>";
for (let i = 0; i < lLen; i++) {
  midweekA += "<li>" + Price3A[i] + "</li>";
}
midweekA += "</ul>";

// Price for children in the midweek
const Price3C = ["1 Uur - 5,00 EUR", "2 Uur - 7,50 EUR", "Hele dag - 15,00 EUR"];
let aLen = Price3C.length;

let midweekC = "<ul>";
for (let i = 0; i < aLen; i++) {
  midweekC += "<li>" + Price3C[i] + "</li>";
}
midweekC += "</ul>";

// Price for adults in the weekend
const Price2A = ["1 Uur - 7,50 EUR", "2 Uur - 10,00 EUR", "Hele dag - 17,50 EUR"];
let pLen = Price2A.length;

let weekendA = "<ul>";
for (let i = 0; i < pLen; i++) {
  weekendA += "<li>" + Price2A[i] + "</li>";
}
weekendA += "</ul>";

// Price for children in the weekend
const Price2C = ["1 Uur - 6,50 EUR", "2 Uur - 9,00 EUR", "Hele dag - 17,50 EUR"];
let dLen = Price2C.length;

let weekendC = "<ul>";
for (let i = 0; i < dLen; i++) {
  weekendC += "<li>" + Price2C[i] + "</li>";
}
weekendC += "</ul>";


// next up, we get the if-else, which returns the right messages.
// I elected to check it by day to make it changeable easier in case any opening times change.
// In all of them, 3 variables are chucked to HTML; State, PriceAd, PriceCh.
// State is, well, the state of the arcade. Either closed, midweek or weekend, because those are the different price ranges.
// PriceAd is the price for Adults.
// PriceCh is the price for Children.

//script to display the prices of the current day
if(day == "Zondag") {
    document.getElementById("State").innerHTML = State2;
    document.getElementById("PriceAd").innerHTML = weekendA;
    document.getElementById("PriceCh").innerHTML = weekendC;
}
else if(day == "Maandag") {
    document.getElementById("State").innerHTML = Closed;
    document.getElementById("PriceAd").innerHTML = Closed;
    document.getElementById("PriceCh").innerHTML = Closed;
}
else if(day == "Dinsdag") {
    document.getElementById("State").innerHTML = Closed;
    document.getElementById("PriceAd").innerHTML = Closed;
    document.getElementById("PriceCh").innerHTML = Closed;
}
else if(day == "Woensdag") {
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Donderdag") {
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Vrijdag") {
    document.getElementById("State").innerHTML = State3;
    document.getElementById("PriceAd").innerHTML = midweekA;
    document.getElementById("PriceCh").innerHTML = midweekC;
}
else if(day == "Zaterdag") {
    document.getElementById("State").innerHTML = State2;
    document.getElementById("PriceAd").innerHTML = weekendA;
    document.getElementById("PriceCh").innerHTML = weekendC;
};