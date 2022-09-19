import React from 'react'

class MultipleInput extends React.Component {
        // declaring initial state
        state = {
            FirstName : '',
            LastName : '',
            Country : '',
            Title : '',
        }
        handleChange = (input) =>  {
            const {name, value} = input.target
            this.setState({[name] : value})
        }
        handleSubmit = (input) => {
            input.preventDefault()
            console.log(this.state)
        }
        render () {
            const {FirstName, LastName, Title, Country} = this.state
            return (
                <div className='App'>
                    <h3>Add students</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor='FirstName'>First Name: </label>
                            <input type ='text' name = 'FirstName' placeholder = 'First Name' value={FirstName} onChange = {this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor='LastName'>Last Name: </label>
                            <input type = 'text' name = 'LastName' placeholder = 'Last Name' value = {LastName} onChange = {this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor = 'Country'>Country: </label>
                            <input type='text' name='Country' placeholder='Country' value={Country} onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor='Title'>Title:</label>
                            <input type = 'text' name = 'Title' placeholder = 'Title' value={Title} onChange = {this.handleChange}></input>
                        </div>
                        <button class = 'btn btn-success'>Submit</button>
                    </form>
                </div>
            )
        }
    }

export default MultipleInput