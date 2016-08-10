import React, { Component } from 'react';
import util from '../util/helper.js';

class Update extends Component{
  constructor(props){
    super(props);

    this.state={
      searchText: ""
    }
  };

  handleDelClick(event){
    event.preventDefault();
    const url = {url: this.props.up}
    util.updateHospital(url)
    .then((json) => {
      console.log("updated!")
    })
  }

  onChange(event){
    console.log("ON CHAGE");
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      searchText: event.target.value
    });
  }


  render(){
    console.log("this.state.tex", this.state.searchText);
    return(
      <div>
        <input type="text"  className="favorite" onChange={(event)=>this.onChange(event)} value={this.state.searchTextName} placeholder="Add Comment"/>
        <button className="favorite" onClick={(event)=>this.handleDelClick(event)}>Update</button>
      </div>
    )
  }
}

export default Update
