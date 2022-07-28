import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome User ..!",
      // display:"I am  being on the display because of state"
    };
  }

  changeMessage() {
    //We can set my set to anything as new
    this.setState({
      message: "Hey, User you logged in.",
    });
  }

  logoutState() {
    //We can set my set to anything as new
    this.setState({
      message: "Hey, User you logged out.",
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {/* <h1>{this.state.message}</h1>
        <h3>{this.state.display}</h3> */}
        <h1>{this.state.message}</h1>
        {/* <input type="text">Enter your username:</input>
        <input type="text">Enter your password:</input> */}
        <button onClick={() => this.changeMessage()}>Login</button>
        <button onClick={() => this.logoutState()}>Logout</button>
        {/* <h2>{this.state.changeMessage}</h2> */}
      </div>
    ); // I am creating a button if I click on -- the message has to change.
    //from one message to another message --- sate is been changed?
  }
}

export default Message;
