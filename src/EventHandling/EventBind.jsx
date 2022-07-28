import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
         this.state = {
       message:"Hello Folks Good morning"
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
      clickHandler(){
        this.setState({
        message:"Have a lovely day"
        })
    console.log(this)
    }

    clickHandlerAnother(){
        this.setState({
        message:"Same to you!"
       })
    console.log(this)
    }
    
    clickEventHandler(){
        this.setState({
          message:"GoodBye"  
        })
        console.log(this)
      
    }


    
  render() {
    return (
      <div className='event'>
        <h2>{this.state.message}</h2>
        <button onClick={this.clickHandler}>ClickMe</button>
        <button onClick={() => this.clickHandlerAnother()}>ClickMeToo</button>
        <button onClick={()=>this.clickEventHandler()}>ClickMeToo</button>
      </div>
    )
  }
}

export default EventBind