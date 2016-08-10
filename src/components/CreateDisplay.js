import React, { Component }   from 'react';
import util                   from '../util/helper.js';
import Background             from '../components/Background.js';
import Header                 from '../components/Header.js';
import Footer                 from '../components/Footer.js';
import Favorite               from './Favorite.js'
import '../css/createDisplay.css';

class CreateDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      response: []
    };
  };

  createCards(spots, index){
    let ret = spots.map((card, index)=>{
      return(
        <div key={index} className="result-flex">
          <div className="column">
          <div className="left-flex">
            <ul className="single-result-title">
              <li><h4>Name:</h4></li>
              <li><h4>Facility Type:</h4></li>
              <li><h4>City:</h4></li>
              <li><h4>Location:</h4></li>
              <li><h4>State:</h4></li>
              <li><h4>Zip:</h4></li>
              <li><h4>Borough</h4></li>
              <li><h4>Phone</h4></li>
            </ul>
          </div>
          <div className="right-flex">
            <ul className="single-result-info">
              <li>{card.facility_name}</li>
              <li>{card.facility_type}</li>
              <li>{card.location_1_city}</li>
              <li>{card.location_1_location}</li>
              <li>{card.location_1_state}</li>
              <li>{card.location_1_zip}</li>
              <li>{card.borough}</li>
              <li>{card.phone}</li>
            </ul>
          </div>
        </div>
          <Favorite fav={spots[index]}/>
        </div>
      )
    })
    return ret;
  }

  header(){
    return(
      <h5>RESULTS:</h5>
    )
  };

  render(){
    const index = 0;
    return(
      <div>
        <div className="createDisplay">
          {this.createCards(this.props.geo, index)}
        </div>
      </div>
    )
  }
}

export default CreateDisplay
