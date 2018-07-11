var geocoder;
var map;
   function initMap() {
   geocoder = new google.maps.Geocoder();
     var mapOptions = {
       zoom: 12,
       center: {lat: 37.3382, lng: 121.8863}
   }
     map = new google.maps.Map(document.getElementById('map'), mapOptions);
   }
 
   function codeAddress() {
     var address = document.getElementById('address').value;
     geocoder.geocode( { 'address': address}, function(results, status) {
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
   });