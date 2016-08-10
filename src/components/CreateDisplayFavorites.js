import React, { Component }   from 'react';
import util                   from '../util/helper.js';
import Background             from '../components/Background.js';
import Header                 from '../components/Header.js';
import Footer                 from '../components/Footer.js';
import Favorite               from './Favorite.js';
import Delete                 from './Delete.js';
import Update                 from './Update.js';

import '../css/createDisplay.css';

class CreateDisplayFavorites extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      response: []
    };
  };

  setArray(results, resArray, index){
    resArray = [];
    if(results.length < 1){
      console.log("no results", results.length);
    }
    else{
      Object.keys(results).map((value, index)=>{
        resArray.push(results[value])
      })
      let ret = resArray.map((item, index)=>{
        for(let i in item){
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
                  <li>{item[i].url.facility_name}</li>
                  <li>{item[i].url.facility_type}</li>
                  <li>{item[i].url.location_1_city}</li>
                  <li>{item[i].url.location_1_location}</li>
                  <li>{item[i].url.location_1_state}</li>
                  <li>{item[i].url.location_1_zip}</li>
                  <li>{item[i].url.borough}</li>
                  <li>{item[i].url.phone}</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <Delete del={item[i].url}/>
              <Update up={item[i].url}/>
            </div>
          </div>
          ); //end of return
        } //end of for in
      }) //end of resArray.map
    return ret;
    } //end of else
  } //end of fx

  render(){
    const index = 0;
    let resArray = [];
    return(
      <div className="createDisplay">{this.setArray(this.props.responseProvided, resArray)}</div>
    )
  }
}

export default CreateDisplayFavorites
