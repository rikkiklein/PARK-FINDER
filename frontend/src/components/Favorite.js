import React, { Component } from 'react';
import util from '../util/helper.js';

class Favorite extends Component{
  handleFavClick(event){
    event.preventDefault();
    const url = {url: this.props.fav}
    util.savePark(url)
    .then((json) => {
      console.log(this.props.fav, "was successfully saved!");
    })
  }

  render(){
    return(
      <div>
        <button className="favorite" onClick={this.handleFavClick.bind(this)}>Add to favorite parks</button>
      </div>
    )
  }
}

export default Favorite
