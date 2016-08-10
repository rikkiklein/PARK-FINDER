import React, { Component }     from 'react';
import '../css/Background.css';

class Background extends Component{
  render(){
    return(
      <div className="back">
        <div className="banner">EMERGENCY DOC!</div>
        <p className="pTag">Find the nearest public hospital located near you.</p>
      </div>
    )
  }
}

export default Background
