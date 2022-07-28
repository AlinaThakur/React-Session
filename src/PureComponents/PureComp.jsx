
import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Pure Comp render")
    return (
      <div className='app'>
       <h2>
        PureComponent {this.props.name}
       </h2>
      </div>
    )
  }
}

export default PureComp