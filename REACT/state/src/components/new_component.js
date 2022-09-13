import React, {Component} from 'react'
export class new_component extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "subscribe to my multiverse"
      }
    }
    
    render() {
        return (
            <div className='App'>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
export default new_component