// function loadMap(){
//   if (localStorage.latitude0 === true) {
//     console.log('WE HAVE SOMETHING');
//     initMap();
//   }
//   else {
//     console.log('NOOOOPE');
//     google.maps.event.trigger(map, 'resize');
//   }
// }

function initMap() {

  let myLat = parseInt(localStorage.lat);
  let myLong = parseInt(localStorage.long);
  var myLatLng = {lat: myLat, lng: myLong};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

    for (var i = 0; i < localStorage.length-2; i++) {

      let longitude = "longitude" + i;
      let latitude = "latitude" + i;

      let hosLat = parseInt(localStorage.getItem(latitude));
      let hosLong = parseInt(localStorage.getItem(longitude));
      var hosLatLng = {lat: hosLat, lng: hosLong};

      var marker = new google.maps.Marker({
        position: hosLatLng,
        map: map,
        title: 'Hello World!'
      });
      console.log(longitude, latitude);
    }

console.log(localStorage);
console.log(marker.position);

}
