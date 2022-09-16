import React, {Component} from 'react'

class MyComponent extends Component {
    render () {
        const {myprop} = this.props
        return (
            <div>
                <h1>This is a sample of component place on an individual file</h1>
                <h2>I am trying to pass props here, like this is a {myprop}</h2>
            </div>
        )
    }
}
export default MyComponent;