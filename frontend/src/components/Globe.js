import React, { Component } from 'react';
import util from '../util/helper.js';
import DisplayMap from './DisplayMap.js';
import CreateDisplay from './CreateDisplay.js';
import '../css/Home.css';

class Globe extends Component{
  constructor(props){
    super(props);
    this.state ={
      response: [],
      geoResponse: []
    }
  };

  handleAllClick(event){
    event.preventDefault();
    util.getAll()
    .then((json) => {
    this.setState({
      response: json
    })
    this.calculateDistance();
    })
  }

  calculateDistance(){
    var geoArray = [];

    const results = this.state.response;
    results.map((res)=>{
      if(res.location){
        let long = res.location.coordinates[0];
        let lat = res.location.coordinates[1];
        const distance = this.haversine(this.props.globe, lat, long);
        if(distance < 10){
          geoArray.push(res)
        }
      }
    })

    this.setState({
      geoResponse: geoArray
    })

    let parks = [];

    parks = this.state.response.map((coords,i)=>{
      let location={latitude:coords.location.coordinates[1],longitude:coords.location.coordinates[0]}
      parks.push(location);

      let longitude = "longitude" + i;
      let latitude = "latitude" + i;

      localStorage.setItem(longitude, JSON.stringify(parks[i].longitude));
      localStorage.setItem(latitude, JSON.stringify(parks[i].latitude));

    });

  }

  haversine(globe, lat, long){
    const currentLat = globe.latitude;
    const currentLong = globe.longitude;
    const APILat = lat;
    const APILong = long;
    const radius = 3959;
    const distanceLat = this.calculateDegreesToRadius(Math.abs(APILat - currentLat));
    const distanceLong = this.calculateDegreesToRadius(Math.abs(APILong - currentLong));

    const a = Math.sin(distanceLat/2) * Math.sin(distanceLat/2) +
              Math.cos(this.calculateDegreesToRadius(APILat)) * Math.cos(this.calculateDegreesToRadius(currentLat)) *
              Math.sin(distanceLong/2) * Math.sin(distanceLong/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = radius * c;
    return d;
  }

  calculateDegreesToRadius(num){
    return num * (Math.PI/180);
  }

  render(){
    return(
      <div className="home">
        <button className="globe" onClick={this.handleAllClick.bind(this)}>Find a park near me!</button>
        <DisplayMap geo={this.state.geoResponse} globe={this.props.globe} />
        <CreateDisplay geo={this.state.geoResponse}/>
      </div>
    )
  }
}

export default Globe
