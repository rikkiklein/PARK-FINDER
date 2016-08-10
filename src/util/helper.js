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
          phone: url.url.phone,
          comment: ""
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
    console.log("name", name);
    console.log("name2", name.url);
    console.log("name3", name.url.facility_name);
    const fetchSettings = {
      method: 'DELETE'
    }
    return fetch('https://hospital-finder-5d1d5.firebaseio.com/hospitals/'+ name.url.facility_name +'.json', fetchSettings).then((response) => {
      return response.json();
    });
  },

  updateHospital(name, comment){
    console.log("$$$$$ name in update", name);
    console.log("$$$$$ comment in update", comment);

    const fetchSettings = {
      method: 'PATCH',
      headers: new Headers({
      'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        comment: comment
      })
    }

    console.log("#####",name.url.facility_name,  comment);

    fetch('https://hospital-finder-5d1d5.firebaseio.com/hospitals/'+ name.url.facility_name + '.json', fetchSettings).then((response) => {
      return response.json();
    });
  }
}
