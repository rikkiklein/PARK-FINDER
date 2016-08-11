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
    title: 'Hello World!'
  });

    for (var i = 0; i < localStorage.length-2; i++) {

      let longitude = "longitude" + i;
      let latitude = "latitude" + i;

      let hosLat = Number(localStorage.getItem(latitude));
      let hosLong = Number(localStorage.getItem(longitude));
      var hosLatLng = {lat: hosLat, lng: hosLong};

      var marker = new google.maps.Marker({
        position: hosLatLng,
        map: map,
        title: 'Hello World!'
      });
      console.log(longitude, latitude);
      console.log(marker);
    }

console.log(localStorage);


}
