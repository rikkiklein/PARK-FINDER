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

    saveHospital: function(url){
    const fetchSettings = {
      method: 'PUT',
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
    return fetch('https://hospital-finder-5d1d5.firebaseio.com/hospitals/' + url.url.facility_name+".json", fetchSettings).then((response) => {
      return response.json();

    });
  },

  viewAllFavorites: function(){
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://hospital-finder-5d1d5.firebaseio.com/hospitals.json', fetchSettings).then((response) => {
      return response.json();
    });
  },

  delHospital: function(name){
    console.log("$$$$$$$$$name is", name.url);
    const fetchSettings = {
      method: 'DELETE'
    }
    return fetch('https://hospital-finder-5d1d5.firebaseio.com/hospitals/'+ name.url.facility_name +'.json', fetchSettings).then((response) => {
      console.log("response", response);
      return response.json();
    });
  },

  updateHospital(name, comment){
    const fetchSettings = {
      method: 'PATCH',
      headers: new Headers({
      'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        comment: comment
      })
    }
    fetch('https://hospital-finder-5d1d5.firebaseio.com/hospitals/'+ name + '.json', fetchSettings).then((response) => {
      return response.json();
    });
  }
}
