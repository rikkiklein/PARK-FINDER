import React, { Component } from 'react';
import Helpers from './utilities/Helpers';


class SignUp extends Component {
constructor(props) {
  super(props);
  this.state = {
    email : " ",
    pw : " "
  }

}

takeInputEm(event) {
  let email = this.setState({email : event.target.value})
  console.log(event.target.value)

  return email
}
takeInputPw(event) {
  let pw = this.setState({pw : event.target.value})
  console.log(event.target.value)
  return pw
}
makeUser(event, email, pw) {
  console.log("hi!");
  console.log('emmma', this.state.email);
  Helpers.SignUp(this.state.email,this.state.pw);
  console.log("email : ", this.state.email, "password : ", this.state.pw);
}




render() {
  return(
    <div>
      <h1>SIGN UP</h1>
        <br></br>
        <input onChange={(event) => this.takeInputEm(event)} />
      <input onChange={(event) => this.takeInputPw(event)} />
      <br></br>
      <button onClick={(event) => this.makeUser(event)}>Lets Make Me!</button>
    </div>

  )
}



}//closing Components

export default SignUp;
