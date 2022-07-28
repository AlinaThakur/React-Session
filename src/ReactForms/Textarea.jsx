import React, { Component } from "react";

export class Textarea extends Component {
   constructor(props) {
     super(props)
   
     this.state = {value : ""}
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit =this.handleSubmit.bind(this)
   }

   handleChange(event){
     this.setState({
      value : event.target.value
     })
   }

   handleSubmit(event){
     alert("a decription given.! ")
     event.preventDefault();
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Describe something about React:
            <Textarea value={this.state.value} onChange={this.handleChange.bind(this)}> </Textarea>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Textarea;
