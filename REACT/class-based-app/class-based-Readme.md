when creating a react component:
    the component's name must start with a capital letter(upper case)
A class component has to have the `extends React.Component` - it creates an inheritance into React component.
the `render ()` method returns an HTML 
 an example of a class component includes:
 ```
 import React from 'react'
 class Multiverse extends React.Component {
    render (){
        return <h1>Welcome to Multiverse</h1>
    }
 }
 ```
 ## class constructor
 this function is called when your class component is get initiated.
 the constructor is where you initiate the component's properties.
 in react components properties are kept inside a state object.
 `super()` method in react - it is written inside the constructor ; it honors the inheritance of the parent component.
 it allows you to use the parent's component constructor functions.

 ## composing components
 components can refer to other components in their output.
 one component can be rendered several times:
 ```
 function Team (props){
    return <h1>Hello {this.props.name}</h1>
 }
 function App () {
    return (
        <div>
            <Team name = "chelsea" />
            <Team name = "West Brom" />
        </div>
    )
}