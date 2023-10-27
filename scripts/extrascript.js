/*
auteur: Samii, Loek, Gwyn
datum: 26-10-23

content: script for the extra page to comply with requirements we dont implement on the main pages
*/

var name = prompt("wat is uw naam?");

var developer = (name.toLowerCase() == "samii" || name.toLowerCase() == "loek" || name.toLowerCase() == "gwyn");


if(developer == true)
{
    document.getElementById("welcomemessage").innerHTML = "Hallo " + name.toLowerCase() + ", jij bent een van de developers van de website.";
}

else if(name == "" || typeof name === NULL) 
{
    document.getElementById("welcomemessage").innerHTML = "Hallo, je hebt geen naam ingevuld.";
}

else
{
    document.getElementById("welcomemessage").innerHTML = "Hallo " + name.toLowerCase() + ".";
}
