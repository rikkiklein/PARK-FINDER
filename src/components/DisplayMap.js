import React, { Component } from 'react';
import util from '../util/helper.js';

class DisplayMap extends Component{
  constructor(props){
    super(props);
  };

  handleClick(event){
    event.preventDefault();
    const url = {url: this.props.globe}
    util.getLocation(url)
    .then((json) => {
    console.log(url.url.name + " was saved to your favorites!")
    })
  }

  handleAllClick(event){
      event.preventDefault();
      saveWifi.getAll()
      .then((json) => {
      this.setState({
        response: json
      })
      this.calculateDistance();
      })
  }




  render(){
    console.log("this.props.globe", this.props.globe);
    console.log("Array to pass in: this.props.geo", this.props.geo);
    return(
      <div>
      </div>
    )
  }
}

export default DisplayMap

// <button className="favorite">DISPLAY TO MAPS</button>
