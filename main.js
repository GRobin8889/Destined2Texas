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
// Map for ALL of the Listings Pages
function initMap() {
  var hotelLocations = [
    // Dallas, Texas Locations //
    ['<strong>Lorenzo Hotel Dallas</strong></br>1011 S Akard St, Dallas, TX 75215</br>Phone:  (214) 273-3000</br><a href="http://www.lorenzohotel.com/" target="_blank">Visit Website</a>', 32.7726198, -96.7978941, 1],
    ['<strong>The Statler Dallas, Curio Collection by Hilton</strong></br>1914 Commerce St, Dallas, TX 75201</br>Phone:  (214) 459-3930</br><a href="https://www.hilton.com/en/hotels/dfwstqq-the-statler-dallas/?SEO_id=GMB-QQ-DFWSTQQ&y_source=1_ODMxODAxNi03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D" target="_blank">Visit Website</a>', 32.7805914, -96.7970604, 2],
    ['<strong>Magnolia Hotel Dallas Downtown</strong></br>1401 Commerce St, Dallas, TX 75201</br>Phone:  (214) 915-6500</br><a href="https://magnoliahotels.com/dallas-downtown/?utm_source=local&utm_medium=organic&utm_campaign=gmb" target="_blank">Visit Website</a>', 32.7800339, -96.8014286, 3],
    ['<strong>Sandman Signature Plano-Frisco Hotel</strong></br>8451 Parkwood Blvd, Plano, TX 75024</br>Phone:  (469) 535-5100</br><a href="https://www.sandmanhotels.com/signature-plano-frisco?utm_source=google&utm_medium=maps&utm_campaign=signature_plano_frisco" target="_blank">Visit Website</a>', 33.0905206, -96.8171087, 4],
    ['<strong>The Joule</strong></br>1530 Main St, Dallas, TX 75201</br>Phone:  (214) 748-1300</br><a href="http://www.thejouledallas.com/" target="_blank">Visit Website</a>', 32.7805962, -96.8006609, 5],
    // Austin, Texas Locations //
    ['<strong>Fairmont Austin</strong></br>101 Red River St, Austin, TX 78701</br>Phone:  (512) 600-2000</br><a href="https://fairmont-austin.com/#utm_source=googlemaps&utm_medium=SEOmaps" target="_blank">Visit Website</a>', 30.262079, -97.7404057, 6],
    ['<strong>The Stephen F Austin Royal Sonesta Hotel</strong></br>701 Congress Ave, Austin, TX 78701</br>Phone:  (512) 457-8800</br><a href="https://www.sonesta.com/us/texas/austin/stephen-f-austin-royal-sonesta-hotel?utm_source=google&utm_medium=organic&utm_campaign=gmb" target="_blank">Visit Website</a>', 30.2690591, -97.7441772, 7],
    ['<strong>Embassy Suites Austin Downtown South Congress</strong></br>300 S Congress Ave, Austin, TX 78704</br>Phone:  (512) 469-9000</br><a href="https://www.hilton.com/en/hotels/auslkes-embassy-suites-austin-downtown-south-congress/?SEO_id=GMB-ES-AUSLKES&y_source=1_MTEwOTkwMC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D" target="_blank">Visit Website</a>', 30.2587345, -97.7488388, 8],
    ['<strong>Aloft Austin Downtown</strong></br>109 E 7th St, Austin, TX 78701</br>Phone:  (512) 476-2222</br><a href="https://www.marriott.com/hotels/travel/ausda-aloft-austin-downtown/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_NzA2NDMxNy03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D" target="_blank">Visit Website</a>', 30.2686787, -97.7442385, 9],
    // Fort Worth, Texas Locations //
    ['<strong>Omni Fort Worth Hotel</strong></br>1300 Houston St, Fort Worth, TX 76102</br>Phone:  (817) 535-6664</br><a href="https://www.omnihotels.com/hotels/fort-worth?utm_source=gmblisting&utm_medium=organic" target="_blank">Visit Website</a>', 32.7485305, -97.3305377, 10],
    ['<strong>Tru by Hilton Northlake Fort Worth</strong></br>13451 Raceway Dr, Northlake, TX 76262</br>Phone:  (817) 490-8846</br><a href="https://www.hilton.com/en/hotels/ftwnlru-tru-northlake-fort-worth/?SEO_id=GMB-RU-FTWNLRU&y_source=1_MTc0OTA1NTItNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl" target="_blank">Visit Website</a>', 33.0234095, -97.2740641, 11],
    ['<strong>Hotel Revel</strong></br>1165 8th Ave, Fort Worth, TX 76104</br>Phone:  (817) 928-3688</br><a href="https://thehotelrevel.com/" target="_blank">Visit Website</a>', 32.7321217, -97.3457109, 12],
    ['<strong>The Worthington Renaissance Fort Worth Hotel</strong></br>200 Main St, Fort Worth, TX 76102</br>Phone:  (817) 870-1000</br><a href="https://www.marriott.com/hotels/travel/dfwdt-the-worthington-renaissance-fort-worth-hotel/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_NzQ4MDQwLTcxNS1sb2NhdGlvbi5nb29nbGVfd2Vic2l0ZV9vdmVycmlkZQ%3D%3D" target="_blank">Visit Website</a>', 32.7554399, -97.3355977, 13],
    // Houston Texas Locations //
    ['<strong>Surestay Plus Hotel By Best Western Houston Medical Center</strong></br>6700 Main St, Houston, TX 77030</br>Phone: (713) 522-2811</br><a href="https://www.bestwestern.com/en_US/book/hotel-rooms.54031.html?iata=90000026&ssob=BLSSH0004G&cid=BLSSH0004G:google:gmb:54031" target="_blank">Visit Website</a>', 29.7082714, -95.4063104, 14],
    ['<strong>Hyatt Regency Houston</strong></br>1200 Louisiana St, Houston, TX 77002</br>Phone: (713) 614-1234</br><a href="https://www.hyatt.com/en-US/hotel/texas/hyatt-regency-houston/hourh?src=corp_lclb_gmb_seo_hourh" target="_blank">Visit Website</a>', 29.708346, -95.4391411, 15],
    ['<strong>Hyatt Place Houston/Sugar Land</strong></br>16730 Creekbend Dr, Sugar Land, TX 77478</br>Phone: (281) 491-0300</br><a href="https://www.hyatt.com/en-US/hotel/texas/hyatt-place-houston-sugar-land/houzs?src=corp_lclb_gmb_seo_houzs" target="_blank">Visit Website</a>', 29.6024974, -95.6262577, 16],
    ['<strong>Houston Marriott Energy Corridor</strong></br>16011 Katy Fwy, Houston, TX 77094</br>Phone: (281) 829-5525</br><a href="https://www.marriott.com/hotels/travel/houeg-houston-marriott-energy-corridor/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTQ1OTA0MC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D" target="_blank">Visit Website</a>', 29.7836176, -95.6663657, 17],
    // San Antonio, Texas Locations //
    ['<strong>Omni San Antonio Hotel at the Colonnade</strong></br>9821 Colonnade Blvd, San Antonio, TX 78230</br>Phone: (210) 691-8888</br><a href="https://www.omnihotels.com/hotels/san-antonio?utm_source=gmblisting&utm_medium=organic" target="_blank">Visit Website</a>', 29.5353639, -98.5663994, 18],
    ['<strong>The Emily Morgan San Antonio - a DoubleTree by Hilton Hotel</strong></br>705 E Houston St, San Antonio, TX 78205</br>Phone: (210) 225-5100</br><a href="https://www.hilton.com/en/hotels/satemdt-the-emily-morgan-san-antonio/?SEO_id=GMB-DT-SATEMDT&y_source=1_MTM3MjYzOC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU=" target="_blank">Visit Website</a>', 29.4266062, -98.4881435, 19],
    ['<strong>Hotel Valencia Riverwalk</strong></br>150 E Houston St, San Antonio, TX 78205</br>Phone: (210) 227-9700</br><a href="https://www.hotelvalencia-riverwalk.com/photo-gallery.htm" target="_blank">Visit Website</a>', 29.4262784, -98.4937814, 20],
    ['<strong>Home2 Suites by Hilton San Antonio at The Rim</strong></br>17303 Vance Jackson Rd, San Antonio, TX 78257</br>Phone: (210) 561-6123</br><a href="https://www.hilton.com/en/hotels/satrmht-home2-suites-san-antonio-at-the-rim/?SEO_id=GMB-HT-SATRMHT&y_source=1_MTE1NjQ2NjItNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl" target="_blank">Visit Website</a>', 29.6037728, -98.5986218, 21]
  ];

  var foodLocations = [
    // Dallas, Texas Locations //
    ['<strong>Royal 38</strong></br>2301 N Akard St Suite 210, Dallas, TX 75201</br>Phone: (214) 736-9010</br><a href="http://royal38dallas.com/" target="_blank">Visit Website</a>', 32.7896152, -96.8077467, 1],
    ['<strong>Haywire – Uptown</strong></br>1920 McKinney Ave Suite 100, Dallas, TX 75201</br>Phone: (469) 501-5522</br><a href="http://haywirerestaurant.com/" target="_blank">Visit Website</a>', 32.8340693, -96.8215948, 2],
    ['<strong>Hutchins BBQ</strong></br>9225 Preston Rd, Frisco, TX 75033</br>Phone: (972) 377-2046</br><a href="https://hutchinsbbq.com/frisco-menu" target="_blank">Visit Website</a>', 33.1829312, -96.7451959, 3],
    ['<strong>Musume</strong></br>2330 Flora St Suite 100, Dallas, TX 75204</br>Phone: (214) 871-8883</br><a href="http://musumedallas.com/" target="_blank">Visit Website</a>', 32.7894246, -96.8000853, 4],
    ['<strong>Crab House Seafood & Oyster Bar</strong></br>2508 Maple Ave, Dallas, TX 75201</br>Phone: (469) 317-7666</br><a href="http://crabhousedtx.com/" target="_blank">Visit Website</a>', 32.7950459, -96.805655, 5]
  ];

  var center = {
    lat: 31.291902,
    lng: -97.148412
  };

  // THe Google Map Initiation
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7.8,
    center: center,
    MapTypeId: google.maps.MapTypeId.ROADMAP,
    // Hide map overay
    gestureHandling: 'greedy'
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  // For the Lodging listings page
  for (i = 0; i < hotelLocations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(hotelLocations[i][1], hotelLocations[i][2], hotelLocations[i][3], hotelLocations[i][4], hotelLocations[i][5], hotelLocations[i][6], hotelLocations[i][7], hotelLocations[i][8], hotelLocations[i][9], hotelLocations[i][10], hotelLocations[i][11], hotelLocations[i][12], hotelLocations[i][13], hotelLocations[i][14], hotelLocations[i][15], hotelLocations[i][16], hotelLocations[i][17], hotelLocations[i][18], hotelLocations[i][19], hotelLocations[i][20], hotelLocations[i][21]),
      map: map,
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(hotelLocations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  // For the Food listings page
  for (i = 0; i < foodLocations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(foodLocations[i][1], foodLocations[i][2], foodLocations[i][3], foodLocations[i][4], foodLocations[i][5]),
      map: map,
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(foodLocations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

// ----------Scroll-up Button Functionality------------- //
// Get the button
var scrollUpButton = document.getElementById("scroll-up-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
