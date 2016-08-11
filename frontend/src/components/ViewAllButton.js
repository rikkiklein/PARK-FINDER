import React, { Component }   from 'react';
import util                   from '../util/helper.js';
import CreateDisplayFavorites from './CreateDisplayFavorites.js'

class ViewAllButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      response: []
    };
  };

  handleChange(event){
    this.setState({searchText: event.target.value});
  };

  getFavorites(event){
    util.viewAllFavorites(this.state.searchText)
    .then((json) => {
      this.setState({
        response: json
      });
    })
  }

  render(){
    const spots = this.state.response;
    return(
      <div>
        <h5>View All Favorites</h5>
        {this.getFavorites()}
        <CreateDisplayFavorites responseProvided={spots}/>
      </div>
    )
  }
}

export default ViewAllButton
