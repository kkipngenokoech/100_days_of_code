import React from 'react'

class InputField extends React.Component {
    //declaring initial state
    state = {
        FirstName : ''
    }
    handleChange = (input) => {
        const value = input.target.value
        this.setState({FirstName : value})
    }
    render () {
        const FirstName = this.state.FirstName
        return (
            <div className='App'>
                <label htmlFor='FirstName'>FirstName: </label>
                <input type='text' id='FirstName' name='FirstName' placeholder='First Name' value={FirstName} onChange={this.handleChange}></input>
                <h1>{this.state.FirstName}</h1>
            </div>
        )
    }
}

export default InputField;