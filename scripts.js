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



/*JS for loading files into nav bar*/

function loadFileInto(fromFile, whereTo) {

        // initiate the fetch promise
        let remoteData = fetch(fromFile)
        .then( function(response) { 
            // if OK, convert response into text, otherwise trigger the Promise error
            if (response.ok) return response.text();
            else return Promise.reject(response); // trigger error
        } )
        .then( function(responseResult) {
            // update the page
            document.querySelector(whereTo).innerHTML = responseResult;

            // report success
            console.log("Loaded " + fromFile + " into " + whereTo);

        } )
        .catch( function(error){
            // report any errors
            console.log( ("Could not load " + fromFile + " into " + whereTo + ". Specific error: "), error);
        } );
    
}

function Recipe(a, b, c, d) {

    //set some object properties
    this.name = a;
    this.ingredientsFile = b; //file name to the HTML snippet containing this recipe's ingredient list
    this.directionsFile = c; //file name to the HTML snippet containing this recipe's directions list
    this.imageSource = d; //URL or file name to recipe photo


    //update the display with the content for this recipe
    this.display = function() {
        document.querySelector("#hero h1").innerHTML= this.name;
        loadFileInto(this.ingredientsFile , '#ingredients');
        loadFileInto(this.directionsFile, '#directions');
        document.querySelector("#hero").style.backgroundImage = "url(" +this.imageSource + ")";
        document.title = "Recipe: " + this.name

    } //end of .display() method

     //adds this recipe to the Nav Bar ul as a new li tag that is clickable
     this.myDrowndown = function() {
        
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

} //end Recipe () object constructor

let FlourlessCake = new Recipe("Flourless Chocolate Cake", "cake-ingredients.html", "cake-directions.html", "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80");

let AlmondCookies = new Recipe("Almond Flour Chocolate Chip Cookies", "cookies-ingredients.html", "cookies-directions.html", "https://images.unsplash.com/photo-1625876981820-be17a6807189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");

let MagicBars = new Recipe("Magic Bars", "magic-ingredients.html", "magic-directions.html", "https://images.unsplash.com/photo-1505252784141-72a7a8073787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80");

// don't do anything until the DOM loads
document.addEventListener("DOMContentLoaded", function() {
    
    FlourlessCake.myDrowndown();
    
    AlmondCookies.myDrowndown();

    MagicBars.myDropdown();
    
});
  

document.querySelector("#firstRecipe").onclick = function() {
    FlourlessCake.displayRecipe();
  }

  document.querySelector("#secondRecipe").onclick = function() {
    AlmondCookies.displayRecipe();
  }

  document.querySelector("#thirdRecipe").onclick = function() {
    MagicBars.displayRecipe();
  }
