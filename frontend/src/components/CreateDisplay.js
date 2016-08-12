import React, { Component }   from 'react';
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
      console.log("card", card);
      return(
        <div key={index} className="result-flex">
          <div className="column">
          <div className="left-flex">
          </div>
          <div className="right-flex">
            <ul className="single-result-info">
              <li><h4>Name:</h4> {card.name}</li>
              <li><h4>Category:</h4>{card.category}</li>
              <li><h4>Region:</h4>{card.region}</li>
              <li><h4>County:</h4>{card.county}</li>
              <li><h4>Golf:</h4>{card.golf}</li>
              <li><h4>Camp:</h4>{card.camp}</li>
              <li><h4>Playground:</h4>{card.play}</li>
              <li><h4>Beach:</h4>{card.beach}</li>
              <li><h4>Facility Url:</h4><a href={card.facility_url}>Link</a></li>
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
