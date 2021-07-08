'use strict';

//------------------Index.html JavaScript------------------//
///////// Send Us An Email" Button Modal Functionality ////////////
// Get the location Modal
var modal = document.getElementById("email-modal");

// Get the button that will open the location modal
var btn = document.getElementById("cta-send")

// Get the <span> element that will close the location Modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the location modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the location modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//---Contact Us Section---//
///////// Automatically Highlight Day of the Week in 'in-touch-section' ////////////
let day = new Date();
let weekday = new Array(7);
weekday[0] = "sun";
weekday[1] = "mon";
weekday[2] = "tue";
weekday[3] = "wed";
weekday[4] = "thu";
weekday[5] = "fri";
weekday[6] = "sat";

document.getElementsByClassName(weekday[day.getDay()])[0].classList.add("current-day");
