/*JS for the nag bar*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  /*end JS for nav bar*/


/* JS for slideshow */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*End JS for slideshow*/



//document.getElementById("dropdown").addEventListener("click", function() {
   // window.location.href = "cake-ingredients" , "cake-directions";
  //});

  
 //adds this recipe to the Nav Bar ul as a new li tag that is clickable
 this.addToNav = function() {
        
    //create a new element for the navbar
    let newNavLI = document.createElement("a");
    newNavLI.innerHTML = this.name;
    document.querySelector("#myDrowndown").appendChild(newNavLI);

    //preserve recipe self "this" in a different variable to use within the event listener
    let recipeSelf = this;
    newNavLI.addEventListener("click", function() {
        recipeSelf.display();
    });

}//end of .addToNav method 