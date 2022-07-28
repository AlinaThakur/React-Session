import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //isLogged in ia a variable
      isLoggedIn: true,
    };
  }
  render() {
    //4th approach
    return(
        
            this.state.isLoggedIn && <div>Welcome again and again Miss Pooja</div>
        
    )
    //3rd approach
    //expression ? true(first condition):false(second condition)
    return this.state.isLoggedIn ? (
      <div>Welcome again Miss. Pooja</div>
    ) : (
      <div>Welcome Miss. Stranger</div>
    );
    //2nd approach
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome again Pooja</div>;
    } else {
      message = <div>Welcome Stranger..</div>;
    }
    return <div>{message}</div>;
    //true ---First approach
    if (this.state.isLoggedIn) {
      return <div>Welcome Pooja</div>;
    } else {
      return <div>Welcome Stranger</div>;
    }
  }
}

export default UserGreeting;
