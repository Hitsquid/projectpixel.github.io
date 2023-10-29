/*

    Authors; Loek
    28/09/2023

    Games pagina scripts

*/

/* laat de website weten hoeveel slideshows er zijn */
let slideIndex = [1,1,1,1,1,1];
/* Maakt verschillende groepen aan dus in dit geval 6 slideshows als classes */
let slideclass = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]
/* zorgt ervoor dat de 6 slideshows apart van elkaar werken */
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

//zorgt dat de slideshow op de goede plek is en werkt
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideclass[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}