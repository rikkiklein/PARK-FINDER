import React, { Component } from 'react';
import util from '../util/helper.js';

class Favorite extends Component{
  constructor(props){
    super(props);
  };

  handleFavClick(event){
    event.preventDefault();
    const url = {url: this.props.fav}
    util.saveHospital(url)
    .then((json) => {
    console.log(url.url.facility_name + " was saved to your favorites!")
    })
  }


  render(){
    return(
      <div>
        <button className="favorite" onClick={this.handleFavClick.bind(this)}>Add to saved hospitals</button>
      </div>
    )
  }
}

export default Favorite
