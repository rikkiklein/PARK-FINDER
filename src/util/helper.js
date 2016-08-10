export default {

  getAll: function(){
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://data.cityofnewyork.us/resource/w7a6-9xrz.json', fetchSettings)
    .then((response)=>{
      return response.json();
    });
  },

  getLocation: function(url){
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://data.cityofnewyork.us/resource/86fs-7q39.json?location=', url, fetchSettings)
    .then((response)=>{
      return response.json();
    });
  },

  viewAllFavorites: function(){
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://emergency-doc-p3.firebaseio.com/hospitals.json', fetchSettings)
    .then((response) => {
        return response.json();
    });
  },

  saveHospital: function(url){
    console.log("url is in save hospital", url);
    const fetchSettings={
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
          url:{
            facility_name: url.url.facility_name,
            facility_type: url.url.facility_type,
            location_1_city: url.url.location_1_city,
            location_1_location: url.url.location_1_location,
            location_1_state: url.url.location_1_state,
            location_1_zip: url.url.location_1_zip,
            borough: url.url.borough,
            phone: url.url.phone
          }
      })
    }
    return fetch('https://emergency-doc-p3.firebaseio.com/hospitals/' + url.url.facility_name + '.json',  fetchSettings).then((response)=>{
      return response.json();
    });
  },

  delHospital: function(url){
    const fetchSettings={
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
          url:{
            facility_name: url.url.facility_name,
            facility_type: url.url.facility_type,
            location_1_city: url.url.location_1_city,
            location_1_location: url.url.location_1_location,
            location_1_state: url.url.location_1_state,
            location_1_zip: url.url.location_1_zip,
            borough: url.url.borough,
            phone: url.url.phone
          }
      })
    }
    return fetch('https://emergency-doc-p3.firebaseio.com/hospitals/' + url.url.facility_name + '.json',  fetchSettings).then((response)=>{
      return response.json();
    });
  }

  // updateHospital: function(url, comment){
  //   console.log("url", url, "comment", comment);
  //   const fetchSettings={
  //     method: 'PUT',
  //     headers: new Headers({
  //       'Content-Type': 'application/json'
  //     }),
  //     body: JSON.stringify({
  //         url:{
  //           facility_name: url.url.facility_name,
  //           facility_type: url.url.facility_type,
  //           location_1_city: url.url.location_1_city,
  //           location_1_location: url.url.location_1_location,
  //           location_1_state: url.url.location_1_state,
  //           location_1_zip: url.url.location_1_zip,
  //           borough: url.url.borough,
  //           phone: url.url.phone
  //         }
  //     })
  //   }
  //
  //   return fetch('https://emergency-doc.firebaseio.com/hospitals/' + url.url.facility_name + '.json',  fetchSettings).then((response)=>{
  //     return response.json();
  //   });
  // },
  //

//
// updateHospital: function(url, newData){
//   const fetchSettings={
//     method: 'PUT',
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({
//         url:{
//           name: url.url.name,
//           location: url.url.location,
//           city: url.url.city,
//           lat: url.url.lat,
//           long: url.url.long_,
//           boro: url.url.boro,
//           location_type: url.url.location_t,
//           provider: url.url.provider,
//           source_id: url.url.ssid,
//           type: url.url.type,
//           remarks: url.url.remarks,
//           comment: newData.text
//         }
//     })
//   }
//   return fetch('https://wifi-homework.firebaseio.com/wifiSpots/' + url.url.name + '.json',  fetchSettings).then((response)=>{
//     return response.json();
//   });
// }
}
