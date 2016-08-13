

function clearStorage(){
  localStorage.clear();
  console.log(localStorage);
}

function initMap() {

  let myLat = Number(localStorage.lat);
  let myLong = Number(localStorage.long);
  var myLatLng = {lat: myLat, lng: myLong};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatLng
  });

  let hereString = '<h1> YOU ARE HERE </h1>'

  let infoWindow = new google.maps.InfoWindow({
    content: hereString
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    draggable: false,
    optimized: false,
    icon: "https://mt.google.com/vt/icon?psize=20&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-blue.png&ax=44&ay=48&scale=1&text=%E2%80%A2",
    title: 'YOU ARE HERE'
  });

  marker.addListener('click', function() {
  infoWindow.open(map, marker);
});

    for (var i = 0; i < ((localStorage.length-2) /4); i++) {

        let bounceTimer;

        let nameString = "parkName" + i;
        let countyString = "parkCounty" + i;

        let markerName = localStorage.getItem(nameString);
        let markerCounty = localStorage.getItem(countyString);
        // let markerdef = "marker" + i
        let markerContent = "Park: " + markerName + "<br>" + "County: " + markerCounty
        // console.log(markerContent);

        let longitude = "longitude" + i;
        let latitude = "latitude" + i;

        let hosLat = Number(localStorage.getItem(latitude));
        let hosLong = Number(localStorage.getItem(longitude));
        var hosLatLng = {lat: hosLat, lng: hosLong};

        let marker = "marker" + i;
        marker = new google.maps.Marker({
          position: hosLatLng,
          draggable: false,
          optimized: false,
          map: map,
          title: 'Park'
        });


        let infoWindow = "infoWindow" + i;
          infoWindow = new google.maps.InfoWindow({
          content: markerContent
        });

        marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });


        google.maps.event.addListener(marker, 'mouseover', function() {
            if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
                clearTimeout(bounceTimer);
                var that = this;
                bounceTimer = setTimeout(function(){
                     that.setAnimation(google.maps.Animation.BOUNCE);
                },
                500);
            }
        });

        google.maps.event.addListener(marker, 'mouseout', function() {

             if (this.getAnimation() != null) {
                this.setAnimation(null);
             }
             clearTimeout(bounceTimer);
        });
      }

console.log(localStorage);
clearStorage();
};
