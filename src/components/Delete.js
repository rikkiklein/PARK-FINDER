import React, { Component } from 'react';
import util from '../util/helper.js';

class Delete extends Component{
  constructor(props){
    super(props);
  };

  handleDelClick(event){
    event.preventDefault();
    const url = {url: this.props.del}
    util.delHospital(url)
    .then((json) => {
      console.log(this.props.del + " was deleted!")
    })
  }

  render(){
    return(
      <div>
        <button className="delete" onClick={this.handleDelClick.bind(this)}>X</button>
      </div>
    )
  }
}

export default Delete
