function initMap() {

  let myLat = Number(localStorage.lat);
  let myLong = Number(localStorage.long);
  var myLatLng = {lat: myLat, lng: myLong};
  console.log(localStorage);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

  console.log(myLatLng);


}

/*.then(function(){

  localStorage.clear();
  console.log(localStorage);
})*/
