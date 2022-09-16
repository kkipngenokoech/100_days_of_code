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