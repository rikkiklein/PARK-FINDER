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
        <div key={index} className="cardDisplay">
            <ul>
              <li><h4 className="card-name">Name:</h4> <div className="card">{card.name}</div></li>
              <li><h4>Category:</h4><div className="card">{card.category}</div></li>
              <li><h4>Region:</h4><div className="card">{card.region}</div></li>
              <li><h4>County:</h4><div className="card">{card.county}</div></li>
              <li><h4>Golf:</h4><div className="card">{card.golf}</div></li>
              <li><h4>Camp:</h4><div className="card">{card.camp}</div></li>
              <li><h4>Playground:</h4><div className="card">{card.play}</div></li>
              <li><h4>Beach:</h4><div className="card">{card.beach}</div></li>
              <li><h4>Facility Url:</h4><div className="card"><a href={card.facility_url}>Link</a></div></li>
            </ul>
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
