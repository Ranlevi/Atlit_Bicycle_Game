//When the user presses 'start' - the map.html page is pushed to the
//top of the stack and presented to the user.
const start = () => {
    const navigator = document.querySelector('#navigator');
    navigator.pushPage('map.html');
};

//This function initializes the google map. 
//Note that the Map constructor has several options:
//center, zoom level, some controls that are removed
//and a styles JSON object which was created
//with the google maps styles wizard. 

var map;
var init_position = {lat: 32.7044, lng: 34.951};
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: init_position,
        zoom: 17, 
        fullscreenControl : false,
        mapTypeControl : false,
        streetViewControl : false,
        styles : [
            {
              "featureType": "poi",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#65aed6"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#65aed6"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit.station.bus",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
          ]
    })
    
    var marker = new google.maps.Marker({
        position: init_position,
        map: map
    });

    //This method is called repeatly to update the user location.
    navigator.geolocation.watchPosition(center_map_on_new_position, geolocation_error);
}


//Center the map on the updated location of the user's device.
function center_map_on_new_position(position){
  map.setCenter({
    lat: position.coords.latitude,
    lng: position.coords.longitude
  });
}

//An error occured while fetching the user's location.
function geolocation_error(){
  ons.notification.alert('Geolocation Error.');
}
