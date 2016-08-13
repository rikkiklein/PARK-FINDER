import React, { Component } from 'react';
import util from '../util/helper.js';

class Update extends Component{
  constructor(props){
    super(props);

    this.state={
      searchText: ""
    }
  };

  handleUpdateClick(event){
    event.preventDefault();
    const url = {url: this.props.up};
    const comment = this.state.searchText;
    util.updatePark(url, comment)
    .then((json) => {
      console.log("updated!")
    })
  }

  onChange(event){
    event.preventDefault();
    this.setState({
      searchText: event.target.value
    });
  }

  render(){
    return(
      <div className="row">
        <input type="text"  className="input" onChange={(event)=>this.onChange(event)} value={this.state.searchTextName} placeholder="Add Comment"/>
        <button className="update" onClick={(event)=>this.handleUpdateClick(event)}>Update</button>
      </div>
    )
  }
}

export default Update
