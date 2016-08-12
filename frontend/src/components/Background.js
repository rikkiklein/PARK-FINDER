import React, { Component }     from 'react';
import '../css/Background.css';

class Background extends Component{
  render(){
    return(
      <div className="full-banner">
        <div className="flex-banner">
          <div className="back">
            <div className="banner">PARK FINDER</div>
            <p className="pTag">Find the nearest park located near you.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Background

//
// <div className="image"></div>
