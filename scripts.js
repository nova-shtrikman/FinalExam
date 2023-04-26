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


  let slideIndex = 1;
showSlides(slideIndex);

// changes picture when next button is clicked
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}







function showRecipe(recipeName) {
    // Load the recipe information based on the recipe name
    switch(recipeName) {
      case "GF Chocolate Cake":
        // Load information for GF Chocolate Cake
        console.log("cake-directions.html", "cake-ingredients.html");
        break;
      case "Magic Bars":
        // Load information for Magic Bars
        console.log("Information for Magic Bars loaded!");
        break;
      case "Chocolate Chip Cookies":
        // Load information for Chocolate Chip Cookies
        console.log("Information for Chocolate Chip Cookies loaded!");
        break;
      default:
        console.log("Invalid recipe name.");
        break;
    }
  }















//define a recipe object constructor 

//function Recipe(a, b, c) {

    //set some object properties
    //this.name = a;
    //this.ingredientsFile = b; //file name to the HTML snippet containing this recipe's ingredient list
    //this.directionsFile = c; //file name to the HTML snippet containing this recipe's directions list

//update the display with the content for this recipe
//this.display = function() {
    //document.querySelector("#hero h1").innerHTML= this.name;
    //loadFileInto(this.ingredientsFile , '#ingredients');
   // loadFileInto(this.directionsFile, '#directions');

} //end of .display() method

//adds this recipe to the Nav Bar ul as a new li tag that is clickable
//this.addTonmyDropdown = function() {
        
    //create a new element for the navbar
    //let newNavLI = document.createElement("li");
    //newNavLI.innerHTML = this.name;
    //document.querySelector("#navbar ul").appendChild(newNavLI);

    //preserve recipe self "this" in a different variable to use within the event listener
    //let recipeSelf = this;
    //newNavLI.addEventListener("click", function() {
        //recipeSelf.display();
    //});

}//end of .addToNav method

} //end Recipe () object constructor




