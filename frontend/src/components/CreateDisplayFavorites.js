import React, { Component }   from 'react';
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
    if(Object.keys(results).length < 1){
      console.log("no results", Object.keys(results).length );
    }
    else{
      Object.keys(results).map((value, index)=>{
        resArray.push(results[value])
      })
      let ret = resArray.map((item, index)=>{
        for(let i in item){
          return(
            <div key={index} className="result-flex">
              <div className="row-del">
                <Delete del={item[i]}/>
              </div>
              <div className="column">
              <div className="left-flex">
              </div>
              <div className="right-flex">
                <ul className="single-result-info">
                  <li><h4>Name:</h4>{item[i].name}</li>
                  <li><h4>Category:</h4>{item[i].category}</li>
                  <li><h4>Region:</h4>{item[i].region}</li>
                  <li><h4>County:</h4>{item[i].county}</li>
                  <li><h4>Golf:</h4>{item[i].golf}</li>
                  <li><h4>Camp:</h4>{item[i].camp}</li>
                  <li><h4>Playground:</h4>{item[i].play}</li>
                  <li><h4>Beach:</h4>{item[i].beach}</li>
                  <li><h4>Facility Url:</h4><a href={item[i].facility_url}>Link</a></li>
                  <li><h4>Comment:</h4>{item[i].comment}</li>
              </ul>
              </div>
            </div>
            <div className="row">
              <Update up={item[i]}/>
            </div>
          </div>
          ); //end of return
        } //end of for in
      }) //end of resArray.map
    return ret;
    } //end of else
  } //end of fx

  render(){
    let resArray = [];
    return(
      <div className="createDisplay">{this.setArray(this.props.responseProvided, resArray)}</div>
    )
  }
}

export default CreateDisplayFavorites
