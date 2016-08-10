import React, { Component }   from 'react';
import Header                 from '../components/Header.js';
import Footer                 from '../components/Footer.js';
import Background             from '../components/Background.js';
import Globe                  from '../components/Globe.js'
import DisplayMap             from '../components/DisplayMap.js';

import '../css/App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      globe: {
        latitude: "",
        longitude: ""
      }
    };
  }

  geoFindMe() {
    var here = this;
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
      var innerGlobe={};
      innerGlobe.lat  = position.coords.latitude;
      innerGlobe.long = position.coords.longitude;
      // store in local
      localStorage.long = position.coords.longitude;
      localStorage.lat = position.coords.latitude;

      here.setState({
        globe: {
          latitude:innerGlobe.lat,
          longitude: innerGlobe.long
        }
      })
    }
  }

  render() {
    console.log(this.state.globe);
    return (
      <div className="App">
        <Background/>
        <Header/>
        <div className="home">
          {this.geoFindMe()}
          <Globe globe={this.state.globe}/>
        </div>
        <Footer>2016 All Rights Reserved.</Footer>
    </div>
    );
  }
}

export default App;
