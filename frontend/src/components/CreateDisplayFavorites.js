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
            <div key={index} className="cardDisplayFav">
              <div className="row-del">
                <Delete del={item[i]}/>
              </div>
              <div className="column">
              <div className="right-flex">
                <ul className="single-result-info">
                  <li><h4 className="fav">Name:</h4><div className="card2">{item[i].name}</div></li>
                  <li><h4 className="fav">Category:</h4><div className="card2">{item[i].category}</div></li>
                  <li><h4 className="fav">Region:</h4><div className="card2">{item[i].region}</div></li>
                  <li><h4 className="fav">County:</h4><div className="card2">{item[i].county}</div></li>
                  <li><h4 className="fav">Golf:</h4><div className="card2">{item[i].golf}</div></li>
                  <li><h4 className="fav">Camp:</h4><div className="card2">{item[i].camp}</div></li>
                  <li><h4 className="fav">Playground:</h4><div className="card2">{item[i].play}</div></li>
                  <li><h4 className="fav">Beach:</h4><div className="card2">{item[i].beach}</div></li>
                  <li><h4 className="fav">Facility Url:</h4><div className="card2"><a className="linkA" target="_blank" href={item[i].facility_url}>Link</a></div></li>
                  <li><h4 className="fav">Comment:</h4><div className="card2">{item[i].comment}</div></li>
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
