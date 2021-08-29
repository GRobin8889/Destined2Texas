'use strict';

//------------------MODAL JavaScript------------------//
///////// "Send Us An Email" and "Login" Button Modal Functionality ////////////
// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that will open the modal
var btn = document.getElementsByClassName("myBtn")

// Get the <span> element that will close the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modals
btn[0].onclick = function() {
  modal[0].style.display = "block";
}

btn[1].onclick = function() {
  modal[1].style.display = "block";
}

// When the user clicks on <span> (x), close the modals
span[0].onclick = function() {
  modal[0].style.display = "none";
}

span[1].onclick = function() {
  modal[1].style.display = "none";
}

// When the user clicks anywhere outside of the modals, close it
window.onclick = function(event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
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
    ['<strong>Crab House Seafood & Oyster Bar</strong></br>2508 Maple Ave, Dallas, TX 75201</br>Phone: (469) 317-7666</br><a href="http://crabhousedtx.com/" target="_blank">Visit Website</a>', 32.7950459, -96.805655, 5],
    // Fort Worth, Texas Locations //
    ['<strong>Cattlemen&prime;s Steak House</strong></br>2458 N Main St, Fort Worth, TX 76164</br>Phone: (817) 624-3945</br><a href="http://www.cattlemenssteakhouse.com/" target="_blank">Visit Website</a>', 32.789292, -97.3511662, 6],
    ['<strong>The Biscuit Bar</strong></br>128 E Exchange Ave #640, Fort Worth, TX 76164</br>Phone: (817) 912-5922</br><a href="https://thebiscuit.bar/" target="_blank">Visit Website</a>', 32.7880324, -97.3493081, 7],
    ['<strong>Heim Barbecue</strong></br>1109 W Magnolia Ave, Fort Worth, TX 76104</br>Phone: (817) 882-6970</br><a href="http://heimbbq.com/" target="_blank">Visit Website</a>', 32.7305101, -97.3395785, 8],
    ['<strong>Hawaiian Bros</strong></br>4732 Bryant Irvin Rd, Fort Worth, TX 76132</br>Phone: (817) 345-6418</br><a href="https://hawaiianbros.com/" target="_blank">Visit Website</a>', 32.6795832, -97.417411, 9],
    // Austin, Texas Locations //
    ['<strong>1618 Asian Fusion</strong></br>1618 E Riverside Dr, Austin, TX 78741</br>Phone: (512) 462-9999</br><a href="https://1618asianfusion.com/" target="_blank">Visit Website</a>', 30.2454072, -97.7326578, 10],
    ['<strong>Jewboy Burgers</strong></br>5111 Airport Blvd, Austin, TX 78751</br>Phone: (512) 291-3358</br><a href="http://www.jewboyburgers.com/" target="_blank">Visit Website</a>', 30.3127454, -97.7172342, 11],
    ['<strong>Bird Bird Biscuit</strong></br>2701 Manor Rd, Austin, TX 78722</br>Phone: (512) 761-4922</br><a href="https://www.birdbirdbiscuit.com/" target="_blank">Visit Website</a>', 30.2849389, -97.7161816, 12],
    ['<strong>Terry Black&prime;s Barbecue</strong></br>1003 Barton Springs Rd, Austin, TX 78704</br>Phone: (512) 394-5899</br><a href="http://terryblacksbbq.com/" target="_blank">Visit Website</a>', 30.2597006, -97.7569947, 13],
    // Houston, Texas Locations //
    ['<strong>Hearsay Market Square</strong></br>218 Travis St, Houston, TX 77002</br>Phone: (713) 225-8079</br><a href="http://hearsaygastrolounge.com/" target="_blank">Visit Website</a>', 29.763059, -95.3638819, 14],
    ['<strong>La Lucha</strong></br>1801 N Shepherd Dr #A, Houston, TX 77008</br>Phone: (713) 955-4765</br><a href="http://laluchatx.com/" target="_blank">Visit Website</a>', 29.8019345, -95.4131602, 15],
    ['<strong>BB&prime;s Tex-Orleans</strong></br>2701 White Oak Dr, Houston, TX 77009</br>Phone: (713) 868-8000</br><a href="http://bbstexorleans.com/" target="_blank">Visit Website</a>', 29.7817876, -95.389088, 16],
    ['<strong>The Breakfast Klub</strong></br>3711 Travis St, Houston, TX 77002</br>Phone: (713) 528-8561</br><a href="http://www.thebreakfastklub.com/" target="_blank">Visit Website</a>', 29.7384748, -95.3826141, 17],
    // San Antonio, Texas Locations //
    ['<strong>Tlahco Mexican kitchen</strong></br>6702 San Pedro Ave, San Antonio, TX 78216</br>Phone: (210) 455-0135</br><a href="http://www.tlahcokitchen.com/" target="_blank">Visit Website</a>', 29.5005926, -98.5010564, 18],
    ['<strong>Wild Goji Restaurant & Bar</strong></br>7115 Blanco Rd #110, San Antonio, TX 78216</br>Phone: (210) 277-0638</br><a href="http://www.wildgojisatx.com/" target="_blank">Visit Website</a>', 29.5227168, -98.5086765, 19],
    ['<strong>Momo House San Antonio (Nepali Style Dumplings)</strong></br>4447 De Zavala Rd, San Antonio, TX 78249</br>Phone: (210) 492-1711</br><a href="https://www.facebook.com/pages/category/Fast-Food-Restaurant/Momo-House-Nepali-Style-Dumplings-102201771323097/" target="_blank">Visit Website</a>', 29.5714782, -98.5762219, 20],
    ['<strong>Papas Burgers "In God We Trust"</strong></br>6900 San Pedro Ave #107, San Antonio, TX 78216</br>Phone: (210) 781-9171</br><a href=https://www.papasburgerssatx.com/" target="_blank">Visit Website</a>', 29.5046251, -98.5007432, 20],
  ];

  var attractionLocations = [
    // Dallas, Texas Locations //
    ['<strong>Six Flags Over Texas</strong></br>2201 E Road to Six Flags St, Arlington, TX 76011</br>Phone: (817) 640-8900</br><a href="https://www.papasburgerssatx.com/" target="_blank">Visit Website</a>', 32.7571699, -97.0693937, 1],
    ['<strong>Ripley&prime;s Believe It or Not!</strong></br>601 E Palace Pkwy, Grand Prairie, TX 75050</br>Phone: (972) 263-2391</br><a href="http://www.ripleys.com/grandprairie" target="_blank">Visit Website</a>', 32.760546, -97.005898, 2],
    ['<strong>Jurassic World The Exhibition</strong></br>5752 Grandscape Blvd, The Colony, TX 75056</br><a href="mailto:JWE@roundroomlive.com">Email Us</a></br><a href="https://jurassicworldexhibition.com/" target="_blank">Visit Website</a>', 33.0736499, -96.8645916, 3],
    ['<strong>Perot Museum of Nature and Science</strong></br>2201 N Field St, Dallas, TX 75201</br>Phone: (214) 428-5555</br><a href="https://www.perotmuseum.org/" target="_blank">Visit Website</a>', 32.7869471, -96.8087659, 4],
    ['<strong>Oswald Rooming House Museums</strong></br>1026 N Beckley Ave, Dallas, TX 75203</br>Phone: (469) 261-7806</br><a href="https://www.jfkdiscoverytour.com/" target="_blank">Visit Website</a>', 32.7558181, -96.8248536, 5],
    // Fort Worth, Texas Locations //
    ['<strong>American Airlines CR Smith Museum</strong></br>4601 Hwy 360, Fort Worth, TX 76155</br>Phone: (682) 278-9085</br><a href="http://www.crsmithmuseum.org/" target="_blank">Visit Website</a>', 32.8332941, -97.0658934, 6],
    ['<strong>National Cowgirl Museum & Hall of Fame</strong></br>1720 Gendy St, Fort Worth, TX 76107</br>Phone: (817) 336-4475</br><a href="http://www.cowgirl.net/" target="_blank">Visit Website</a>', 32.7433581, -97.3708297, 7],
    ['<strong>Fort Worth Stockyards National Historic District</strong></br>131 E Exchange Ave, Fort Worth, TX 76164</br>Phone: (817) 626-7921</br><a href="http://www.fortworthstockyards.org/" target="_blank">Visit Website</a>', 32.7892799, -97.3492091, 8],
    ['<strong>Fort Worth Botanic Garden</strong></br>3220 Botanic Garden Blvd, Fort Worth, TX 76107</br>Phone: (817) 463-4160</br><a href="https://fwbg.org/" target="_blank">Visit Website</a>', 32.7409733, -97.3650966, 9],
    // Austin, Texas Locations //
    ['<strong>Texas Toy Museum</strong></br>314 1/2 Congress Ave, Austin, TX 78701</br>Phone: (512) 220-9582</br><a href="https://austintoymuseum.org/" target="_blank">Visit Website</a>', 30.2657778, -97.7461622, 10],
    ['<strong>LBJ Presidential Library</strong></br>2313 Red River St, Austin, TX 78705</br>Phone: (512) 721-0200</br><a href="http://www.lbjlibrary.org/" target="_blank">Visit Website</a>', 30.2858605, -97.7314431, 11],
    ['<strong>Texas State Capitol</strong></br>1100 Congress Ave, Austin, TX 78701</br>Phone: (512) 463-4630</br><a href="http://www.tspb.texas.gov/prop/tc/tc/capitol.html" target="_blank">Visit Website</a>', 30.2746698, -97.7425392, 12],
    ['<strong>Westcave Outdoor Discovery Center</strong></br>24814 Hamilton Pool Rd, Round Mountain, TX 78663</br>Phone: (830) 825-3442</br><a href="http://www.westcave.org/" target="_blank">Visit Website</a>', 30.3373736, -98.1430911, 13],
    // Houston, Texas Locations //
    ['<strong>The Houston Museum of Natural Science</strong></br>5555 Hermann Park Dr, Houston, TX 77030</br>Phone: (713) 639-4629</br><a href="http://www.hmns.org/" target="_blank">Visit Website</a>', 29.722105, -95.3918027, 14],
    ['<strong>Space Center Houston</strong></br>1601 E NASA Pkwy, Houston, TX 77058</br>Phone: (281) 283-4755</br><a href="https://www.spacecenter.org/" target="_blank">Visit Website</a>', 29.5518366, -95.1002931, 15],
    ['<strong>Lone Star Flight Museum</strong></br>11551 Aerospace Ave, Houston, TX 77034</br>Phone: (346) 708-2517</br><a href="http://www.lonestarflight.org/" target="_blank">Visit Website</a>', 29.6042079, -95.1768777, 16],
    ['<strong>The Museum of Fine Arts, Houston</strong></br>1001 Bissonnet St, Houston, TX 77005</br>Phone: (713) 639-7300</br><a href="http://www.mfah.org/" target="_blank">Visit Website</a>', 29.741511, -95.4212939, 17],
    // San Antonio, Texas Locations //
    ['<strong>City Sightseeing San Antonio,</br> 111 Alamo Plaza, Welcome Center</strong></br>111 Alamo Plaza, San Antonio, TX 78205</br>Phone: (210) 224-8687</br><a href="http://www.citysightseeingsanantonio.com/" target="_blank">Visit Website</a>', 29.4240572, -98.4895292, 18],
    ['<strong>SeaWorld San Antonio</strong></br>10500 Sea World Dr, San Antonio, TX 78251</br>Phone: (210) 520-4732</br><a href="https://seaworld.com/san-antonio/" target="_blank">Visit Website</a>', 29.458373, -98.70153, 19],
    ['<strong>Six Flags Fiesta Texas</strong></br>17000 W I-10, San Antonio, TX 78257</br>Phone: (210) 697-5050</br><a href="https://www.sixflags.com/fiestatexas" target="_blank">Visit Website</a>', 29.5991202, -98.6127494, 20],
    ['<strong>The Buckhorn Saloon & Museum</strong></br>318 E Houston St, San Antonio, TX 78205</br>Phone: (210) 247-4000</br><a href="https://www.buckhornmuseum.com/cafe-saloon" target="_blank">Visit Website</a>', 29.426206, -98.4911169, 21]
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
      position: new google.maps.LatLng(foodLocations[i][1], foodLocations[i][2], foodLocations[i][3], foodLocations[i][4], foodLocations[i][5], foodLocations[i][6], foodLocations[i][7], foodLocations[i][8], foodLocations[i][9], foodLocations[i][10], foodLocations[i][11], foodLocations[i][12], foodLocations[i][13], foodLocations[i][14], foodLocations[i][15], foodLocations[i][16], foodLocations[i][17], foodLocations[i][18], foodLocations[i][19], foodLocations[i][20], foodLocations[i][21]),
      map: map,
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(foodLocations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  // For the Attractions listings page
  for (i = 0; i < attractionLocations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(attractionLocations[i][1], attractionLocations[i][2], attractionLocations[i][3], attractionLocations[i][4], attractionLocations[i][5], attractionLocations[i][6], attractionLocations[i][7], attractionLocations[i][8], attractionLocations[i][9], attractionLocations[i][10], attractionLocations[i][11], attractionLocations[i][12], attractionLocations[i][13], attractionLocations[i][14], attractionLocations[i][15], attractionLocations[i][16], attractionLocations[i][17], attractionLocations[i][18], attractionLocations[i][19], attractionLocations[i][20], attractionLocations[i][21]),
      map: map,
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(attractionLocations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}
