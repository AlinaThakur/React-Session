import React, { Component } from "react";

export class RegularComp extends Component {
  render() {
    console.log("*********00 Regular Comp render 00**********")
    return (
      <div>
        <h2>RegularComponent {this.props.name}</h2>
      </div>
    );
  }
}

export default RegularComp;
