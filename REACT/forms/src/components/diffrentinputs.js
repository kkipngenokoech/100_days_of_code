import React from "react"

const options = [
    {value: '',label : '--select Country--'},
    {value : 'Finland',label : 'Finland'},
    {value : 'Sweden', label : 'Sweden'},
    {value : 'Norway', label : 'Norway'},
    {value : 'Denmark', label : 'Denmark'}
]

const SelectOptions = options.map(({value, label}) => (
    <option value={value}>{label}</option>
))
class DifferentInput extends React.Component {
    // declaring initial state
    state = {
        FirstName : '',
        LastName : '',
        email : '',
        Country : '',
        telephone : '',
        DateOfBirth : '',
        FavoriteColor : '',
        Weight : '',
        Gender : '',
        File : '',
        Bio : '',
        Skills : {
            html : false,
            css : false,
            javascript : false
        }
    }
    handleChange = (input) =>  {
        const {name, value, type, checked} = input.target
        if (type === 'checkbox') {
            this.setState ({
                skills : {...this.state.skills, [name] : checked}
            })
        }
        else if (type === 'file')
        {
            console.log(type, 'check here')
            this.setState({[name] : input.target.File[0]})
        }
        else 
        {
            this.setState({[name] : value})
        }
    }    
    handleSubmit = (input) =>  {
        input.preventDefault()
        const {
            FirstName,
            LastName,
            email,
            telephone,
            DateOfBirth,
            FavoriteColor,
            Weight,
            Country,
            Gender,
            Bio,
            File,
            Skills
        } = this.state
        const FormattedSkills = []
        for (const key in Skills)
        {
            console.log(key)
            if (Skills[key])
            {
                FormattedSkills.push(key.toUpperCase)
            }
        }
        const data = {
            FirstName,
            LastName,
            email,
            telephone,
            DateOfBirth,
            FavoriteColor,
            Weight,
            Country,
            Gender,
            Bio,
            File,
            Skills : FormattedSkills
        }
        console.log(data)
    }
    render (){
        // destructuring the state:
        const {FirstName, LastName, email, telephone, DateOfBirth, FavoriteColor, Weight, Country, Gender, Bio} = this.state
        return (
            <div className="App">
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='form-group'>
                            <label htmlFor="FirstName">First Name</label>
                            <input type='text' name = 'FirstName' value={FirstName} onChange = {this.handleChange} placeholder = 'First Name'></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default DifferentInput