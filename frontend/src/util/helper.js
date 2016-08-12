export default {

    getAll: function(){
      const fetchSettings = {
        method: 'GET'
      }
      return fetch('https://data.ny.gov/resource/cb9z-ibgp.json', fetchSettings)
      .then((response)=>{
        return response.json();
      });
    },

    savePark: function(url){
    const fetchSettings = {
      method: 'PUT',
      headers: new Headers({
      'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        url:{
          name: url.url.name,
          category: url.url.category,
          region: url.url.region,
          county: url.url.county,
          golf: url.url.golf,
          camp: url.url.camp,
          playground: url.url.playground,
          beach: url.url.beach,
          facility_url: url.url.facility_url,
          comment: ""
        }
      })
    }
    return fetch('https://parkfinder-f415f.firebaseio.com/parks/' + url.url.name+".json", fetchSettings).then((response) => {
      return response.json();

    });
  },

  viewAllFavorites: function(){
    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://parkfinder-f415f.firebaseio.com/parks.json', fetchSettings).then((response) => {
      return response.json();
    });
  },

  delPark: function(name){
    const fetchSettings = {
      method: 'DELETE'
    }
    return fetch('https://parkfinder-f415f.firebaseio.com/parks/'+ name.url.name +'.json', fetchSettings).then((response) => {
      return response.json();
    });
  },

  updatePark(name, comment){
    console.log("comment", comment);
      const fetchSettings = {
        method: 'PUT',
        headers: new Headers({
        'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          url:{
            comment: comment,
            name: name.url.name,
            category: name.url.category,
            region: name.url.region,
            county: name.url.county,
            golf: name.url.golf,
            camp: name.url.camp,
            playground: name.url.playground,
            beach: name.url.beach,
            facility_url: name.url.facility_url,
          }
        })
      }

      console.log("fetch", fetchSettings.body);
      fetch('https://parkfinder-f415f.firebaseio.com/parks/'+ name.url.name + '.json', fetchSettings).then((response) => {
        return response.json();
      });
    }
}

//https://data.ny.gov/Recreation/Accessible-Outdoor-Recreation-Destinations/pt2v-9a3h
