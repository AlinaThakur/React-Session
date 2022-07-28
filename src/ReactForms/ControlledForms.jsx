import React, { Component } from 'react'

 class ControlledForms extends Component {
    constructor(props) {
      super(props)
    
      this.state = 
        { value:""}
         this.handleChange =this.handleChange.bind(this)
         this.handleSubmit =this.handleSubmit.bind(this)

      }
 

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(event){
      console.log("Server loaded successfully...!!!");
      alert("A name is Submitted" + this.state.value);
      event.preventDefault()
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
                Enter your name:
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
      </div>
    )
  }

 }
export default ControlledForms;
