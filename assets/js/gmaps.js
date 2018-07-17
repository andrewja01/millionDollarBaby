var geocoder;
var map;
var mapOptions;
   function initMap() {
   geocoder = new google.maps.Geocoder();
     mapOptions = {
       zoom: 12,
       center: {lat: 50.7944, lng: -122.45405}
   }
     map = new google.maps.Map(document.getElementById('map'), mapOptions);
   }
 
   function codeAddress(arr) {
     //var address = document.getElementById('city').value;
     var address = arr;
     geocoder.geocode( {'city': address}, function(results, status) {
       if (status == 'OK') {
         map.setCenter(results[0].geometry.location);
         var marker = new google.maps.Marker({
             map: map,
             position: results[0].geometry.location
         });
         console.log(map);
       } else {
         alert('Geocode was not successful for the following reason: ' + status);
       }
     });
   }
   
   $("#btnGetAdd").on('click', function(){
      codeAddress();
      lats = 37.783058;
      longs = -122.451649;
      map.setCenter(new google.maps.LatLng(lats, longs));
   });

