function initMap() {

  let myLat = Number(localStorage.lat);
  let myLong = Number(localStorage.long);
  var myLatLng = {lat: myLat, lng: myLong};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

  console.log(myLatLng);
}
