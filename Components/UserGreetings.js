import React, { Component } from "react";
class UserGreetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div> Welcome Vishwas</div>;
    } else {
      message = <div> Welcome Gust</div>;
    }
    return <div>{message} </div>;
  }

  //if else dosent' work in jsx hence it is outside.
  // render() {
  //   if (this.state.isLoggedIn) {
  //     return <h1> Welcome Vishwas </h1>;
  //   } else {
  //     return <h1> Welcome Gust </h1>;
  //   }
  //}
}
export default UserGreetings;
