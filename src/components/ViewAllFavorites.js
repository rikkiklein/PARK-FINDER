import React, { Component } from 'react';
import Background           from './Background.js';
import Header               from './Header.js';
import Footer               from './Footer.js';
import ViewAllButton        from './ViewAllButton.js';

class ViewAllFavorites extends Component{
  constructor(props){
    super(props);
    this.state = {
      response: []
    };
  };

  render(){
    return(
      <div className="center">
        <Background/>
        <Header/>
        <div className="ViewAll">
          <ViewAllButton />
        </div>
        <Footer>2016 All Rights Reserved.</Footer>
      </div>
    )
  }
}
export default ViewAllFavorites
