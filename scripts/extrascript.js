/*
auteur: Samii, Loek, Gwyn
datum: 26-10-23

content: script for the extra page to comply with requirements we dont implement on the main pages
*/

var name = prompt("wat is uw naam?");

if(name.toLowerCase() == "samii" || name.toLowerCase() == "loek" || name.toLowerCase() == "gwyn") 
{
    var developer = true;
}

else
{
    var developer = false;
}

if( developer == true)
{
    document.getElementById("welcomemessage").innerHTML = "Hallo " + name.toLowerCase() + ", jij bent een van de developers van de website";
}

else
{
    document.getElementById("welcomemessage").innerHTML = "Hallo " + name.toLowerCase() + ".";
}