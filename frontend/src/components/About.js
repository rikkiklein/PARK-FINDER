import React, { Component } from 'react';
import Background           from './Background.js';
import Header               from './Header.js';
import Footer               from './Footer.js';
import '../css/Home.css';

class About extends Component{

  render(){
    return(
      <div>
        <Background/>
        <Header/>
        <div className="about">
          <h5>About Us:</h5>
        </div>
      </div>
    )
  }
}

export default About
