$(document).ready(function(){

  //Autocomplete variables
  var input = document.getElementById('location');
  var searchform = document.getElementById('form');
  var place;
  var autocomplete = new google.maps.places.Autocomplete(input);

  //Google Map variables
  var map;
  var marker;

  //Add listener to detect autocomplete selection
  google.maps.event.addListener(autocomplete, 'place_changed', function () {
    place = autocomplete.getPlace();
      console.log(place);
    });

  //Add listener to search
  searchform.addEventListener("submit", function() {
    var newlatlong = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
    map.setCenter(newlatlong);
    marker.setPosition(newlatlong);
    map.setZoom(12);
  });

  //Reset the inpout box on click
  input.addEventListener('click', function(){
    input.value = "";
  });

  function initialize() {
    var myLatlng = new google.maps.LatLng(51.517503,-0.133896);
    var mapOptions = {
      zoom: 12,
      center: myLatlng
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Main map'
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
  
}); 