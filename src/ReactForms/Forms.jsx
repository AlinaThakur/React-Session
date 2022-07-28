import React, { Component } from 'react'

 class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username:" "
      }
    }

     handleUsernameChange=(event)=>{
            this.setState({
                username:event.target.value
            })
    }
  render() {
    return (
      <div className='form'>
        <label>Username : </label>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
      </div>
    )
  }
}

export default Forms
