

function clearStorage(){
  localStorage.clear();
  console.log(localStorage);
}

function initMap() {

  let myLat = Number(localStorage.lat);
  let myLong = Number(localStorage.long);
  var myLatLng = {lat: myLat, lng: myLong};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    draggable: false,
    optimized: false,
    icon: "https://mt.google.com/vt/icon?psize=20&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-blue.png&ax=44&ay=48&scale=1&text=%E2%80%A2",
    title: 'YOU ARE HERE'
  });

    for (var i = 0; i < localStorage.length-2; i++) {

      let bounceTimer;
      let longitude = "longitude" + i;
      let latitude = "latitude" + i;

      let hosLat = Number(localStorage.getItem(latitude));
      let hosLong = Number(localStorage.getItem(longitude));
      var hosLatLng = {lat: hosLat, lng: hosLong};

      var marker = new google.maps.Marker({
        position: hosLatLng,
        draggable: false,
        optimized: false,
        map: map,
        title: 'Hospital'
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
