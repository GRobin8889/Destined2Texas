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


//----------------Listings Pages (attractions.html, food.html, lodging.html) Google Map JavaScript----------------//
var marker = new google.maps.Marker({
  position: myCenter
});

marker.setMap(map);

// Map for the Dallas, Texas Hotels listed (lodging.html)
function initMap() {
  var dallasHotelLocations = [
    ['Lorenzo Hotel Dallas', 32.7726198, -96.7978941, 1],
    ['The Statler Dallas Curio Collection By Hilton', 32.7805914, -96.7970604, 2],
    ['Magnolia Hotel Dallas Downtown', 32.7800339, -96.8014286, 3],
    ['Sandman Signature Plano - Frisco Hotel', 33.0905206, -96.8171087, 4],
    ['The Joule', 32.7805962, -96.8006609, 5]
  ];

  var center = {
    lat: 32.776665,
    lng: -96.796989
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: center,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  for (i = 0; i < dallasHotelLocations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(dallasHotelLocations[i][1], dallasHotelLocations[i][2], dallasHotelLocations[i][3], dallasHotelLocations[i][4], dallasHotelLocations[i][5]),
      map: map,
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(dallasHotelLocations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}
