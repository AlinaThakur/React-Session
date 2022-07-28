import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Javascript"
      }
      this.greetParent = this.greetParent.bind(this);
    }
    greetParent(){
        //Hello JavaScript
        // alert(`Hello` +this.state.parentName)
        alert(`Hello ${this.state.parentName}`);
        console.log("Component is Executed")
    }
  render() {
    return (
      <div>
        {/* <button onClick={this.greetParent}>Clickhere</button> */}
        <ChildComponent greetHandler={this.greetParent.bind(this)}/>
      </div>
    )
  }
}

export default ParentComponent