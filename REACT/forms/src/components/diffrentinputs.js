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
                            <label htmlFor="FirstName">First Name:</label>
                            <input type='text' name = 'FirstName' value={FirstName} onChange = {this.handleChange} placeholder = 'First Name'></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="LastName">Last Name:</label>
                            <input type ='text' name = 'LastName' placeholder = 'Last Name' value={LastName} onChange = {this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type ='email' name = 'email' placeholder="Email" value={email} onChange = {this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">telephone</label>
                            <input type='tel' name ='telephone' placeholder = 'telephone' value = {telephone} onChange = {this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor = "DateOfBirth">DateOfBirth: </label>
                            <input type ='date' name = 'DateOfBirth' placeholder = 'Date Of Birth' value = {DateOfBirth} onChange = {this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="FavoriteColor">FavoriteColor: </label>
                            <input type ='color' name = 'FavoriteColor' placeholder = 'Favorite Color' value={FavoriteColor} onChange = {this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Weight">Weight</label>
                            <input type ='number' id="weight" name = 'weight' placeholder = 'weight' value={Weight} onChange = {this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">country</label>
                            <select name="country" onChange={this.handleChange} id = 'country'>
                                {SelectOptions}
                            </select>
                        </div>
                        <div className= "form-group">
                            <p>Gender</p>
                            <div>
                                <input type='radio' id = 'female' name = 'gender' value = 'female' onChange = {this.handleChange} checked = {Gender === 'female'}/>
                                <label htmlFor = 'female'>Female</label>
                            </div>
                            <div>
                                <input id ="male" type = 'radio' name = 'gender' value = 'male' onChange={this.handleChange} checked = {Gender === 'male'} />
                                <label htmlFor = 'male'>Male</label>
                            </div>
                            <div>
                                <input id = 'other' type= 'radio' name = 'gender' value = 'other' onChange = {this.handleChange} checked = {Gender === 'other'}/>
                                <label htmlFor='other'>Other</label>
                            </div>
                        </div>
                        <div>
                            <p>select your skills</p>
                            <div>
                                <input type='checkbox' id = 'html' name = 'html' onChange = {this.handleChange}/>
                                <label htmlFor = 'html'>HTML</label>
                            </div>
                            <div>
                                <input type = 'checkbox' id = "css" name = 'css' onChange = {this.handleChange}/>
                                <label htmlFor = 'css'>CSS</label>
                            </div>
                            <div>
                                <input type ='checkbox' id = 'javascript' name = 'javascript' onChange = {this.handleChange}/>
                                <label htmlFor =   'javascript'>javascript</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor='bio'>Bio</label> <br />
                            <textarea id = 'bio' name = 'bio' value={Bio} onChange={this.handleChange} cols='120' rows='10' placeholder='Write about yourself ...'/>
                        </div>
                        <div>
                            <input type='file' name='file' onChange={this.handleChange} />
                        </div>
                        <div>
                          <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default DifferentInput