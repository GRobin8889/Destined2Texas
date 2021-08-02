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
//Set the Google Maps marker
var marker = new google.maps.Marker({
  position: myCenter
});

marker.setMap(map);

// Map for ALL of the Listings Pages
function initMap() {
  var hotelLocations = [
    // Dallas, Texas Locations //
    ['Lorenzo Hotel Dallas', 32.7726198, -96.7978941, 1],
    ['The Statler Dallas Curio Collection By Hilton', 32.7805914, -96.7970604, 2],
    ['Magnolia Hotel Dallas Downtown', 32.7800339, -96.8014286, 3],
    ['Sandman Signature Plano - Frisco Hotel', 33.0905206, -96.8171087, 4],
    ['The Joule', 32.7805962, -96.8006609, 5],
    // Austin, Texas Locations //
    ['Fairmont Austin', 30.262079, -97.7404057, 6],
    ['The Stephen F Austin Royal Sonesta Hotel', 30.2690591, -97.7441772, 7],
    ['Embassy Suites Austin Downtown South Congress', 30.2587345, -97.7488388, 8],
    ['Aloft Austin Downtown', 30.2686787, -97.7442385, 9],
    // Fort Worth, Texas Locations //
    ['Omni Fort Worth Hotel', 32.7485305, -97.3305377, 10],
    ['Tru by Hilton Northlake Fort Worth', 33.0234095, -97.2740641, 11],
    ['Hotel Revel', 32.7321217, -97.3457109, 12],
    ['The Worthington Renaissance Fort Worth Hotel', 32.7554399, -97.3355977, 13],
    // Houston Texas Locations //
    ['Surestay Plus Hotel By Best Western Houston Medical Center', 29.7082714, -95.4063104, 14],
    ['Hyatt Regency Houston', 29.708346, -95.4391411, 15],
    ['Hyatt Place Houston/Sugar Land', 29.6024974, -95.6262577, 16],
    ['Houston Marriott Energy Corridor', 29.7836176, -95.6663657, 17],
    // San Antonio, Texas Locations //
    ['Omni San Antonio Hotel at the Colonnade', 29.5353639, -98.5663994, 18],
    ['The Emily Morgan San Antonio - a DoubleTree by Hilton Hotel', 29.4266062, -98.4881435, 19],
    ['Hotel Valencia Riverwalk', 29.4262784, -98.4937814, 20],
    ['Home2 Suites by Hilton San Antonio at The Rim', 29.6037728, -98.5986218, 21]
  ];

  var center = {
    lat: 31.291902,
    lng: -97.148412
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: center,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, hotel;

  for (hotel = 0; hotel < hotelLocations.length; hotel++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(hotelLocations[hotel][1], hotelLocations[hotel][2], hotelLocations[hotel][3], hotelLocations[hotel][4], hotelLocations[hotel][5], hotelLocations[hotel][6], hotelLocations[hotel][7], hotelLocations[hotel][8], hotelLocations[hotel][9], hotelLocations[hotel][10], hotelLocations[hotel][11], hotelLocations[hotel][12], hotelLocations[hotel][13], hotelLocations[hotel][14], hotelLocations[hotel][15], hotelLocations[hotel][16], hotelLocations[hotel][17], hotelLocations[hotel][18], hotelLocations[hotel][19], hotelLocations[hotel][20], hotelLocations[hotel][21]),
      map: map,
    });

    google.maps.event.addListener(marker, 'click', (function(marker, hotel) {
      return function() {
        infowindow.setContent(hotelLocations[hotel][0]);
        infowindow.open(map, marker);
      }
    })(marker, hotel));
  }
}
