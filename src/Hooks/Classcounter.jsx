import React, { Component } from 'react'

export class Classcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:"Pooja"
      }
    }
    componentDidMount(){
        document.title=`Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
          console.log("Updating document title")
        }
        document.title =`Clicked ${this.state.count}`
    }
  render() {
    return (
      <div className='app'>
        <input type="text" value={this.state.name} onChange={event => {this.setState({name:event.target.value})}}
        />
        <button onClick={()=>this.setState({count: this.state.count+1})}>Click {this.state.count}times</button>
        </div>
    )
  }
}

export default Classcounter